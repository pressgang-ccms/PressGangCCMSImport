(function (global) {
    'use strict';

    /**
     * Defines the kind of inputs that the wizard can ask for
     * @const
     * @enum {number}
     */
    global.InputEnum = Object.freeze({
        SINGLE_FILE: 0,                     // single file selection
        MULTIPLE_FILES: 1,                  // multiple file selection
        MUTUALLY_EXCLUSIVE_OPTION: 2,       // radio buttons
        OPTION: 3,                          // check boxes
        TEXT: 4                             // text box
    });

    /**
     *
     * @param type {!number} The type of input being requested, as defined in InputEnum
     * @param name {!string} The name of the value as it appears in the QNA config file
     * @param options {?Array.<string>} The available options. Only use if type == MUTUALLY_EXCLUSIVE_OPTION
     * @param value {function(?Object, !Object) A function that takes two parameters: the last computed value (or null
     *              no computed value is available) and the configuration options entered to this point.
     * @constructor
     */
    global.QNAVariable = function (type, intro, name, options, value) {
        this.type = type;
        this.name = name;
        this.intro = intro;
        this.options = options || null;
        this.value = value || null;
    };

    /**
     *
     * @param intro {?String}                           This is the introductory text to be displayed above the options, or an
     *                                                  array of QNAVariable objects used to populate this object with.
     * @param variables {?Array.<QNAVariable>}          If intro is an array of QNAVariable, this is ignored. If intro is a String,
     *                                                  this is an array of QNAVariable objects used to populate this object with
     * @constructor
     */
    global.QNAVariables = function (intro, variables) {
        this.intro = intro || null;
        this.variables = variables || [];
    };

    global.QNAStep = function (title, intro, inputs, processStep, nextStep) {
        this.title = title;
        this.intro = intro;
        this.inputs = inputs;
        this.processStep = processStep;
        this.nextStep = nextStep;
    };

    /**
     * The container that holds:
     *   the global config
     *   the incrementally built result
     *   the details of the current step
     * @constructor
     */
    global.QNA = function (step, alert, previousSteps, results, config) {
        this.step = step;
        this.previousSteps = previousSteps || [];
        this.results = results || [null];
        this.config = config || {};
        this.alert = alert;
    };

    global.QNA.prototype.hasNext = function () {
        if (this.step) {
            if (this.step.nextStep) {
                return true;
            }
        }

        return false;
    };

    global.QNA.prototype.hasPrevious = function () {
        return this.previousSteps.length > 0;
    };

    global.QNA.prototype.next = function () {
        if (this.step) {
            var newResults;
            if (this.step.processStep) {
                var result = this.step.processStep(this.results[this.results.length], this.config, this.alert);
                newResults = this.results.concat([result]);
            } else {
                newResults = this.results.concat([this.results[this.results.length]]);
            }
            if (this.step.nextStep) {
                var nextStep = this.step.nextStep(newResults[newResults.length], this.config, this.alert);
                if (nextStep) {
                    return new global.QNA(
                        this.container,
                        this.nextStep,
                        this.previousSteps.concat([this.step]),
                        newResults,
                        this.config
                    );
                }
            }
        }

        return this;
    };

    global.QNA.prototype.previous = function () {
        if (this.previousSteps.length > 0) {
            return new global.QNA(
                this.previousSteps[this.previousSteps.length - 1],
                this.previousSteps.splice(0, this.previousSteps.length - 1),
                this.results.splice(0, this.results.length - 1),
                this.config
            );
        }

        return this;
    };
}(this));