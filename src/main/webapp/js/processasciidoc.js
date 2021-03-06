/*
 Copyright 2011-2014 Red Hat, Inc

 This file is part of PressGang CCMS.

 PressGang CCMS is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 PressGang CCMS is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with PressGang CCMS.  If not, see <http://www.gnu.org/licenses/>.
 */

define(
    ['jquery', 'qna/qna', 'qna/qnautils', 'qna/qnazipmodel', 'qnastart', 'specelement', 'uri/URI', 'constants', 'constants', 'generalexternalimport', 'exports'],
    function (jquery, qna, qnautils, qnazipmodel, qnastart, specelement, URI, constants, generaldocbookimport, generalexternalimport, exports) {
        'use strict';

        exports.processAsciidocImports = function(resultCallback, errorCallback, config) {
            var inputModel = qnastart.getInputModel(config);

            var generalInclude = /include::?(.*?)\[\]/;
            var includeLinkGroup = 1;

            /**
             * See http://www.methods.co.nz/asciidoc/userguide.html#_setting_configuration_entries
             */
            function extractAttributeEntities(asciidocText) {
                var attributeEntries = {};
                var attributeEntryRe = /^:(.*?):(.*?)$/gm;
                var match = null;
                while ((match = attributeEntryRe.exec(asciidocText)) !== null) {
                    attributeEntries[match[1]] = match[2];
                }
                return attributeEntries;
            }

            function replaceVariables(asciidocText, attributeEntries) {
                jquery.each(attributeEntries, function(index, value) {
                    asciidocText = asciidocText.replace(new RegExp("{" + qnautils.escapeRegExp(index) + "}", "g"), value.trim());
                });
                return asciidocText;
            }

            function resolveInclude(asciidocText, attributeEntries, filename, visitedFiles, callback) {

                /*
                 Make sure we are not entering an infinite loop
                 */
                if (visitedFiles.indexOf(filename) === -1) {
                    visitedFiles.push(filename);
                }

                var match = generalInclude.exec(asciidocText);

                if (match !== null) {

                    var previousString = asciidocText.substr(0, match.index);

                    var blockCommentBoundaryCount = previousString.match(/\/\/\/\//g);
                    var lastSingleLineComment = previousString.lastIndexOf("//");
                    var lastLineBreak = previousString.lastIndexOf("\n");

                    var isInMultipleLineCommentBlock = blockCommentBoundaryCount !== null && blockCommentBoundaryCount.length % 2 === 1;
                    var isInSingleLineCommentBlock = lastSingleLineComment !== -1 && (lastLineBreak === -1 || lastLineBreak < lastSingleLineComment);

                    /*
                     The include was in a comment, so ignore it
                     */
                    if (isInMultipleLineCommentBlock || isInSingleLineCommentBlock) {
                        asciidocText = asciidocText.replace(match[0], match[0].replace(/include(::?)/, "includecomment$1"));
                        resolveInclude(asciidocText, attributeEntries, filename, visitedFiles.slice(0), callback);
                        return;
                    }

                    var href = replaceVariables(match[includeLinkGroup], attributeEntries);

                    if (href.trim().length !== 0) {

                        /*
                         We need to work out where the files to be included will come from. This is a
                         combination of the href  and the location of the
                         xml file that is doing the importing.
                         */
                        var fixedMatch = href.replace(/^\.\//, "");
                        var thisFile = new URI(filename);

                        var referencedXMLFilenameRelativeWithoutBase = new URI(fixedMatch);
                        var referencedXMLFilenameWithoutBase = referencedXMLFilenameRelativeWithoutBase.absoluteTo(thisFile).toString();

                        var processFile = function (referencedFileName) {

                            if (visitedFiles.indexOf(referencedFileName) !== -1) {
                                errorCallback("Circular reference detected", visitedFiles.toString() + "," + referencedFileName, true);
                                return;
                            }

                            inputModel.getTextFromFileName(
                                config.InputSource,
                                referencedFileName,
                                function (referencedAsciidocText) {
                                    /*
                                        Extract attribute entities and merge into the collection
                                     */
                                    qnautils.merge(attributeEntries, extractAttributeEntities(referencedAsciidocText));

                                    resolveInclude(
                                        referencedAsciidocText,
                                        attributeEntries,
                                        referencedFileName,
                                        visitedFiles.slice(0),
                                        function (fixedReferencedXmlText) {
                                            /*
                                             The dollar sign has special meaning in the replace method.
                                             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter
                                             */
                                            asciidocText = asciidocText.replace(match[0], fixedReferencedXmlText.replace(/\$/g, "$$$$"));
                                            resolveInclude(asciidocText, attributeEntries, filename, visitedFiles.slice(0), callback);
                                        }
                                    );

                                },
                                function (error) {
                                    errorCallback("Error reading file", "There was an error reading the file " + referencedFileName, true);
                                },
                                true
                            );
                        };

                        inputModel.hasFileName(
                            config.InputSource,
                            referencedXMLFilenameWithoutBase,
                            function (exists) {
                                if (exists) {
                                    processFile(referencedXMLFilenameWithoutBase);
                                } else {
                                    /*
                                        Could not find the referenced file
                                     */
                                    asciidocText = asciidocText.replace(match[0], "");
                                    resolveInclude(asciidocText, attributeEntries, filename, visitedFiles.slice(0), callback);
                                }
                            },
                            errorCallback,
                            true
                        );
                    } else {
                        /*
                         Found an xi:include without a href? delete it an move on.
                         */
                        asciidocText = asciidocText.replace(match[0], "");
                        resolveInclude(asciidocText, attributeEntries, filename, visitedFiles.slice(0), callback);
                    }
                } else {
                    callback(asciidocText, visitedFiles, attributeEntries);
                }

            }

            inputModel.getTextFromFileName(
                config.InputSource,
                config[constants.MAIN_FILE],
                function (asciidocText) {
                    function resolveIncludeLoop(asciidocText, visitedFiles, attributeEntries) {
                        if (generalInclude.test(asciidocText)) {

                            resolveInclude(
                                asciidocText,
                                attributeEntries,
                                config[constants.MAIN_FILE],
                                visitedFiles,
                                function (asciidocText, visitedFiles, attributeEntries) {
                                    resolveIncludeLoop(asciidocText, visitedFiles, attributeEntries);
                                }
                            );
                        } else {
                            asciidocText = asciidocText.replace(/includecomment(::?)/g, "include$1");
                            resultCallback(asciidocText);
                        }
                    }

                    var count = 0;
                    resolveIncludeLoop(asciidocText, [config[constants.MAIN_FILE]], extractAttributeEntities(asciidocText));
                },
                true
            );
        }

    }
)