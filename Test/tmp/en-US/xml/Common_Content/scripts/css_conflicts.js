function fixCSSConflicts(brand, lang) {
	// wrap in a try block to prevent any issues from interfering with other scripts.
	try {
		
// http://medialize.github.io/URI.js/
(function(m,s){m.URI=s(m.punycode,m.IPv6,m.SecondLevelDomains,m)})(this,function(m,s,t,v){function e(a,b){if(!(this instanceof e))return new e(a,b);void 0===a&&(a="undefined"!==typeof location?location.href+"":"");this.href(a);return void 0!==b?this.absoluteTo(b):this}function p(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function x(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function l(a){return"Array"===x(a)}function w(a,b){var c,e;if(l(b)){c=
0;for(e=b.length;c<e;c++)if(!w(a,b[c]))return!1;return!0}var g=x(b);c=0;for(e=a.length;c<e;c++)if("RegExp"===g){if("string"===typeof a[c]&&a[c].match(b))return!0}else if(a[c]===b)return!0;return!1}function z(a,b){if(!l(a)||!l(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,e=a.length;c<e;c++)if(a[c]!==b[c])return!1;return!0}function A(a){return escape(a)}function y(a){return encodeURIComponent(a).replace(/[!'()*]/g,A).replace(/\*/g,"%2A")}var B=v&&v.URI,d=e.prototype,q=Object.prototype.hasOwnProperty;
e._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:e.duplicateQueryParameters,escapeQuerySpace:e.escapeQuerySpace}};e.duplicateQueryParameters=!1;e.escapeQuerySpace=!0;e.protocol_expression=/^[a-z][a-z0-9-+-]*$/i;e.idn_expression=/[^a-z0-9\.-]/i;e.punycode_expression=/(xn--)/i;e.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;e.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
e.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;e.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};e.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;e.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",
iframe:"src",embed:"src",source:"src",track:"src",input:"src"};e.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();return"input"===b&&"image"!==a.type?void 0:e.domAttributes[b]}};e.encode=y;e.decode=decodeURIComponent;e.iso8859=function(){e.encode=escape;e.decode=unescape};e.unicode=function(){e.encode=y;e.decode=decodeURIComponent};e.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=",
"%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}}};e.encodeQuery=function(a,b){var c=e.encode(a+"");return b?c.replace(/%20/g,"+"):c};e.decodeQuery=function(a,b){a+="";try{return e.decode(b?
a.replace(/\+/g,"%20"):a)}catch(c){return a}};e.recodePath=function(a){a=(a+"").split("/");for(var b=0,c=a.length;b<c;b++)a[b]=e.encodePathSegment(e.decode(a[b]));return a.join("/")};e.decodePath=function(a){a=(a+"").split("/");for(var b=0,c=a.length;b<c;b++)a[b]=e.decodePathSegment(a[b]);return a.join("/")};var n={encode:"encode",decode:"decode"},h,r=function(a,b){return function(c){return e[b](c+"").replace(e.characters[a][b].expression,function(c){return e.characters[a][b].map[c]})}};for(h in n)e[h+
"PathSegment"]=r("pathname",n[h]);e.encodeReserved=r("reserved","encode");e.parse=function(a,b){var c;b||(b={});c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=a.substring(c+1)||null,a=a.substring(0,c));"//"===a.substring(0,2)?(b.protocol=null,a=a.substring(2),a=e.parseAuthority(a,b)):(c=a.indexOf(":"),-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(e.protocol_expression)?b.protocol=void 0:"file"===b.protocol?a=a.substring(c+
3):"//"===a.substring(c+1,c+3)?(a=a.substring(c+3),a=e.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};e.parseHost=function(a,b){var c=a.indexOf("/"),e;-1===c&&(c=a.length);"["===a.charAt(0)?(e=a.indexOf("]"),b.hostname=a.substring(1,e)||null,b.port=a.substring(e+2,c)||null):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,c)||null,b.port=null):(e=a.substring(0,c).split(":"),b.hostname=e[0]||null,b.port=e[1]||null);b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,
a="/"+a);return a.substring(c)||"/"};e.parseAuthority=function(a,b){a=e.parseUserinfo(a,b);return e.parseHost(a,b)};e.parseUserinfo=function(a,b){var c=a.indexOf("/"),f=-1<c?a.lastIndexOf("@",c):a.indexOf("@");-1<f&&(-1===c||f<c)?(c=a.substring(0,f).split(":"),b.username=c[0]?e.decode(c[0]):null,c.shift(),b.password=c[0]?e.decode(c.join(":")):null,a=a.substring(f+1)):(b.username=null,b.password=null);return a};e.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,
"");if(!a)return{};for(var c={},f=a.split("&"),g=f.length,d,k,l=0;l<g;l++)d=f[l].split("="),k=e.decodeQuery(d.shift(),b),d=d.length?e.decodeQuery(d.join("="),b):null,c[k]?("string"===typeof c[k]&&(c[k]=[c[k]]),c[k].push(d)):c[k]=d;return c};e.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//");b+=e.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+=
"?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};e.buildHost=function(a){var b="";if(a.hostname)e.ip6_expression.test(a.hostname)?b=a.port?b+("["+a.hostname+"]:"+a.port):b+a.hostname:(b+=a.hostname,a.port&&(b+=":"+a.port));else return"";return b};e.buildAuthority=function(a){return e.buildUserinfo(a)+e.buildHost(a)};e.buildUserinfo=function(a){var b="";a.username&&(b+=e.encode(a.username),a.password&&(b+=":"+e.encode(a.password)),b+="@");return b};e.buildQuery=
function(a,b,c){var f="",g,d,k,h;for(d in a)if(q.call(a,d)&&d)if(l(a[d]))for(g={},k=0,h=a[d].length;k<h;k++)void 0!==a[d][k]&&void 0===g[a[d][k]+""]&&(f+="&"+e.buildQueryParameter(d,a[d][k],c),!0!==b&&(g[a[d][k]+""]=!0));else void 0!==a[d]&&(f+="&"+e.buildQueryParameter(d,a[d],c));return f.substring(1)};e.buildQueryParameter=function(a,b,c){return e.encodeQuery(a,c)+(null!==b?"="+e.encodeQuery(b,c):"")};e.addQuery=function(a,b,c){if("object"===typeof b)for(var f in b)q.call(b,f)&&e.addQuery(a,f,b[f]);
else if("string"===typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),l(c)||(c=[c]),a[b]=a[b].concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};e.removeQuery=function(a,b,c){var f;if(l(b))for(c=0,f=b.length;c<f;c++)a[b[c]]=void 0;else if("object"===typeof b)for(f in b)q.call(b,f)&&e.removeQuery(a,f,b[f]);else if("string"===typeof b)if(void 0!==c)if(a[b]===c)a[b]=void 0;else{if(l(a[b])){f=a[b];var g={},d,k;if(l(c))for(d=0,k=c.length;d<
k;d++)g[c[d]]=!0;else g[c]=!0;d=0;for(k=f.length;d<k;d++)void 0!==g[f[d]]&&(f.splice(d,1),k--,d--);a[b]=f}}else a[b]=void 0;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");};e.hasQuery=function(a,b,c,f){if("object"===typeof b){for(var d in b)if(q.call(b,d)&&!e.hasQuery(a,d,b[d]))return!1;return!0}if("string"!==typeof b)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");switch(x(c)){case "Undefined":return b in a;case "Boolean":return a=
Boolean(l(a[b])?a[b].length:a[b]),c===a;case "Function":return!!c(a[b],b,a);case "Array":return l(a[b])?(f?w:z)(a[b],c):!1;case "RegExp":return l(a[b])?f?w(a[b],c):!1:Boolean(a[b]&&a[b].match(c));case "Number":c=String(c);case "String":return l(a[b])?f?w(a[b],c):!1:a[b]===c;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};e.commonPath=function(a,b){var c=Math.min(a.length,b.length),e;for(e=0;e<c;e++)if(a.charAt(e)!==
b.charAt(e)){e--;break}if(1>e)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(e)||"/"!==b.charAt(e))e=a.substring(0,e).lastIndexOf("/");return a.substring(0,e+1)};e.withinString=function(a,b){return a.replace(e.find_uri_expression,b)};e.ensureValidHostname=function(a){if(a.match(e.invalid_hostname_characters)){if(!m)throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(m.toASCII(a).match(e.invalid_hostname_characters))throw new TypeError("Hostname '"+
a+"' contains characters other than [A-Z0-9.-]");}};e.noConflict=function(a){if(a)return a={URI:this.noConflict()},URITemplate&&"function"==typeof URITemplate.noConflict&&(a.URITemplate=URITemplate.noConflict()),s&&"function"==typeof s.noConflict&&(a.IPv6=s.noConflict()),SecondLevelDomains&&"function"==typeof SecondLevelDomains.noConflict&&(a.SecondLevelDomains=SecondLevelDomains.noConflict()),a;v.URI===this&&(v.URI=B);return this};d.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===
a||this._deferred_build)this._string=e.build(this._parts),this._deferred_build=!1;return this};d.clone=function(){return new e(this)};d.valueOf=d.toString=function(){return this.build(!1)._string};n={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"};r=function(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}};for(h in n)d[h]=r(n[h]);n={query:"?",fragment:"#"};r=function(a,b){return function(c,
e){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!e);return this}};for(h in n)d[h]=r(h,n[h]);n={search:["?","query"],hash:["#","fragment"]};r=function(a,b){return function(c,e){var d=this[a](c,e);return"string"===typeof d&&d.length?b+d:d}};for(h in n)d[h]=r(n[h][1],n[h][0]);d.pathname=function(a,b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?e.decodePath(c):c}this._parts.path=a?e.recodePath(a):
"/";this.build(!b);return this};d.path=d.pathname;d.href=function(a,b){var c;if(void 0===a)return this.toString();this._string="";this._parts=e._parts();var f=a instanceof e,d="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(d=e.getDomAttribute(a),a=a[d]||"",d=!1);!f&&d&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a)this._parts=e.parse(a,this._parts);else if(f||d)for(c in f=f?a._parts:a,f)q.call(this._parts,c)&&(this._parts[c]=f[c]);else throw new TypeError("invalid input");
this.build(!b);return this};d.is=function(a){var b=!1,c=!1,f=!1,d=!1,u=!1,k=!1,l=!1,h=!this._parts.urn;this._parts.hostname&&(h=!1,c=e.ip4_expression.test(this._parts.hostname),f=e.ip6_expression.test(this._parts.hostname),b=c||f,u=(d=!b)&&t&&t.has(this._parts.hostname),k=d&&e.idn_expression.test(this._parts.hostname),l=d&&e.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return h;case "absolute":return!h;case "domain":case "name":return d;case "sld":return u;
case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return f;case "idn":return k;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return l}return null};var C=d.protocol,D=d.port,E=d.hostname;d.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),a.match(/[^a-zA-z0-9\.+-]/)))throw new TypeError("Protocol '"+a+"' contains characters other than [A-Z0-9.+-]");return C.call(this,a,b)};d.scheme=d.protocol;
d.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError("Port '"+a+"' contains characters other than [0-9]");return D.call(this,a,b)};d.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={};e.parseHost(a,c);a=c.hostname}return E.call(this,a,b)};d.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?
e.buildHost(this._parts):"";e.parseHost(a,this._parts);this.build(!b);return this};d.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?e.buildAuthority(this._parts):"";e.parseAuthority(a,this._parts);this.build(!b);return this};d.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var c=e.buildUserinfo(this._parts);return c.substring(0,c.length-1)}"@"!==a[a.length-1]&&(a+=
"@");e.parseUserinfo(a,this._parts);this.build(!b);return this};d.resource=function(a,b){var c;if(void 0===a)return this.path()+this.search()+this.hash();c=e.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=c.fragment;this.build(!b);return this};d.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,
c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=RegExp("^"+p(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&e.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(c,a);this.build(!b);return this};d.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);if(c&&2>c.length)return this._parts.hostname;
c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");e.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(c=RegExp(p(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};d.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===
a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),c=this._parts.hostname.substring(c+1);return!0!==b&&t&&t.list[c.toLowerCase()]?t.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(t&&t.is(a))c=RegExp(p(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError("TLD '"+a+"' contains characters other than [A-Z0-9]");else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");
c=RegExp(p(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};d.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1,c=this._parts.path.substring(0,c)||(this._parts.hostname?"/":"");return a?e.decodePath(c):c}c=this._parts.path.length-
this.filename().length;c=this._parts.path.substring(0,c);c=RegExp("^"+p(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=e.recodePath(a);this._parts.path=this._parts.path.replace(c,a);this.build(!b);return this};d.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this._parts.path.lastIndexOf("/"),c=this._parts.path.substring(c+1);return a?
e.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var d=RegExp(p(this.filename())+"$");a=e.recodePath(a);this._parts.path=this._parts.path.replace(d,a);c?this.normalizePath(b):this.build(!b);return this};d.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),d=c.lastIndexOf(".");if(-1===d)return"";c=c.substring(d+1);c=/^[a-z0-9%]+$/i.test(c)?c:
"";return a?e.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())d=a?RegExp(p(c)+"$"):RegExp(p("."+c)+"$");else{if(!a)return this;this._parts.path+="."+e.recodePath(a)}d&&(a=e.recodePath(a),this._parts.path=this._parts.path.replace(d,a));this.build(!b);return this};d.segment=function(a,b,c){var e=this._parts.urn?":":"/",d=this.path(),u="/"===d.substring(0,1),d=d.split(e);void 0!==a&&"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error("Bad segment '"+
a+"', must be 0-based integer");u&&d.shift();0>a&&(a=Math.max(d.length+a,0));if(void 0===b)return void 0===a?d:d[a];if(null===a||void 0===d[a])if(l(b)){d=[];a=0;for(var k=b.length;a<k;a++)if(b[a].length||d.length&&d[d.length-1].length)d.length&&!d[d.length-1].length&&d.pop(),d.push(b[a])}else{if(b||"string"===typeof b)""===d[d.length-1]?d[d.length-1]=b:d.push(b)}else b||"string"===typeof b&&b.length?d[a]=b:d.splice(a,1);u&&d.unshift("");return this.path(d.join(e),c)};d.segmentCoded=function(a,b,c){var d,
g;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(l(a))for(d=0,g=a.length;d<g;d++)a[d]=e.decode(a[d]);else a=void 0!==a?e.decode(a):void 0;return a}if(l(b))for(d=0,g=b.length;d<g;d++)b[d]=e.decode(b[d]);else b="string"===typeof b?e.encode(b):b;return this.segment(a,b,c)};var F=d.query;d.query=function(a,b){if(!0===a)return e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var c=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace),
d=a.call(this,c);this._parts.query=e.buildQuery(d||c,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=e.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):F.call(this,a,b)};d.setQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("object"===typeof a)for(var g in a)q.call(a,g)&&(d[g]=a[g]);else if("string"===
typeof a)d[a]=void 0!==b?b:null;else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};d.addQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);e.addQuery(d,a,void 0===b?null:b);this._parts.query=e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
"string"!==typeof a&&(c=b);this.build(!c);return this};d.removeQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);e.removeQuery(d,a,b);this._parts.query=e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};d.hasQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return e.hasQuery(d,a,b,c)};d.setSearch=d.setQuery;d.addSearch=d.addQuery;d.removeSearch=
d.removeQuery;d.hasSearch=d.hasQuery;d.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};d.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};d.normalizeHostname=function(a){this._parts.hostname&&
(this.is("IDN")&&m?this._parts.hostname=m.toASCII(this._parts.hostname):this.is("IPv6")&&s&&(this._parts.hostname=s.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};d.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===e.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};d.normalizePath=function(a){if(this._parts.urn||!this._parts.path||"/"===this._parts.path)return this;
var b,c=this._parts.path,d,g;"/"!==c.charAt(0)&&(b=!0,c="/"+c);for(c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");;){d=c.indexOf("/../");if(-1===d)break;else if(0===d){c=c.substring(3);break}g=c.substring(0,d).lastIndexOf("/");-1===g&&(g=d);c=c.substring(0,g)+c.substring(d+3)}b&&this.is("relative")&&(c=c.substring(1));c=e.recodePath(c);this._parts.path=c;this.build(!a);return this};d.normalizePathname=d.normalizePath;d.normalizeQuery=function(a){"string"===typeof this._parts.query&&
(this._parts.query.length?this.query(e.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};d.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};d.normalizeSearch=d.normalizeQuery;d.normalizeHash=d.normalizeFragment;d.iso8859=function(){var a=e.encode,b=e.decode;e.encode=escape;e.decode=decodeURIComponent;this.normalize();e.encode=a;e.decode=b;return this};d.unicode=function(){var a=
e.encode,b=e.decode;e.encode=y;e.decode=unescape;this.normalize();e.encode=a;e.decode=b;return this};d.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&m?(b+=m.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",d=0,g=a._parts.query.split("&"),
l=g.length;d<l;d++){var k=(g[d]||"").split("="),c=c+("&"+e.decodeQuery(k[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==k[1]&&(c+="="+e.decodeQuery(k[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=e.decodeQuery(a.hash(),!0)};d.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],d,g;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof e||(a=new e(a));
b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;for(d=0;g=c[d];d++)b._parts[g]=a._parts[g];c=["query","path"];for(d=0;g=c[d];d++)!b._parts[g]&&a._parts[g]&&(b._parts[g]=a._parts[g]);"/"!==b.path().charAt(0)&&(a=a.directory(),b._parts.path=(a?a+"/":"")+b._parts.path,b.normalizePath());b.build();return b};d.relativeTo=function(a){var b=this.clone().normalize(),c,d,g,l;if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");
a=(new e(a)).normalize();c=b._parts;d=a._parts;g=b.path();l=a.path();if("/"!==g.charAt(0))throw Error("URI is already relative");if("/"!==l.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");c.protocol===d.protocol&&(c.protocol=null);if(c.username===d.username&&c.password===d.password&&null===c.protocol&&null===c.username&&null===c.password&&c.hostname===d.hostname&&c.port===d.port)c.hostname=null,c.port=null;else return b.build();if(g===l)return c.path="",b.build();
a=e.commonPath(b.path(),a.path());if(!a)return b.build();d=d.path.substring(a.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=d+c.path.substring(a.length);return b.build()};d.equals=function(a){var b=this.clone();a=new e(a);var c={},d={},g={},h;b.normalize();a.normalize();if(b.toString()===a.toString())return!0;c=b.query();d=a.query();b.query("");a.query("");if(b.toString()!==a.toString()||c.length!==d.length)return!1;c=e.parseQuery(c,this._parts.escapeQuerySpace);d=e.parseQuery(d,this._parts.escapeQuerySpace);
for(h in c)if(q.call(c,h)){if(!l(c[h])){if(c[h]!==d[h])return!1}else if(!z(c[h],d[h]))return!1;g[h]=!0}for(h in d)if(q.call(d,h)&&!g[h])return!1;return!0};d.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};d.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return e});

		/**
			http://msdn.microsoft.com/en-us/library/ms537509%28v=vs.85%29.aspx
		*/
		function getInternetExplorerVersion()
		{
		  var tridentRe = /Trident\/([0-9.]+)/;
		  var rv = -1; // Return value assumes failure.
		  if (navigator.appName == 'Microsoft Internet Explorer')
		  {
			var ua = navigator.userAgent;
			var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null)
			  rv = parseFloat( RegExp.$1 );
		  } else {
			var match = tridentRe.exec(navigator.userAgent);
			if (match) {
				if (match[1] == "7.0") {
					rv = 11;
				} else {
					// an unidentified version
					rv = 0;
				}
			}
		  }
		  return rv;
		}
		
		/**
		 * Test to see if the string ends with the suffix.
		 * @param string the string to test against
		 * @param suffix the end of the string
		 * @return true if the strings ends with the suffix, and false otherwise.
		 */
		var stringEndsWith = function (string, suffix) {
			if (!string || !suffix) {
				return false;
			}
			return string.indexOf(suffix, this.length - suffix.length) !== -1;
		};

		if (!String.prototype.trim) {
			String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
		}

		/*
		 The Chrome styles are listed after the Publican ones, and therefore take precedence
		 when both Publican and Chrome define a style.

		 This code will go through the style sheets associated with Publican and prefix them
		 with the ID of the wrapper element. This makes them more specific, and therefore
		 means the Publican styles will take precedence.
		 */
		if (document.styleSheets.length != 0) {

			/**
			 * Defines the element whose children will be affected by the publican css rules.
			 */
			var INTERNAL_ELEMENT_ID = "main-wrap";

			/*
			 * IE used the non-standard property rules.
			 */
			var rulesProperty = '';
			if (document.styleSheets[0].cssRules !== undefined) {
				rulesProperty = 'cssRules';
			} else if (document.styleSheets[0].rules !== undefined) {
				rulesProperty = 'rules';
			} else {
				// this shouldn't happen, but have an out just in case there is a browser that
				// does not use cssRules or rules.
				return;
			}

			/*
			 * Loop over each style sheet added by publican, and limit them to the children of INTERNAL_ELEMENT_ID
			 */
			for (var styleSheetIndex = 0, styleSheetCount = document.styleSheets.length; styleSheetIndex != styleSheetCount; ++styleSheetIndex) {
				var styleSheet = document.styleSheets[styleSheetIndex];			

				if (styleSheet.href) {

					if (stringEndsWith(styleSheet.href, brand + "/" + lang + "/css/brand.css") ||
						stringEndsWith(styleSheet.href, "site/documentation/chrome.css") ||
						stringEndsWith(styleSheet.href, "site/documentation/db4.css") ||
						stringEndsWith(styleSheet.href, "site/documentation/print.css") ||
						stringEndsWith(styleSheet.href, "site/documentation/site_overrides.css")) {

						if (styleSheet[rulesProperty]) {						
							// Adding and removing styles from existing sheets is impossible to do in IE versions 8 and below. 
							// When using addRule, new rules get added at random locations. Using deleteRule will also occasionally 
							// not delete anything, or delete it from the wrong location.
							
							// So for IE we create a new style sheet to add rules to, and mark the old one as disabled.
							
							// Note that createStyleSheet can only be used to create 31 style sheets, so on the odd chance
							// that Publican starts shipping with over 31 style sheets this won't work. This in unlikely,
							// but is an important thing to keep in mind if this code is reused outside of the publican portal brand.
							var newStyleSheet = null;							
							if (document.createStyleSheet !== undefined) {
								newStyleSheet = document.createStyleSheet();
								// http://msdn.microsoft.com/en-us/library/ie/ms534161(v=vs.85).aspx
								newStyleSheet.media = styleSheet.media.mediaText;
								styleSheet.disabled = true;
							}

							for (var ruleIndex = 0, ruleCount = styleSheet[rulesProperty].length; ruleIndex != ruleCount; ++ruleIndex) {

								var selectorText = styleSheet[rulesProperty][ruleIndex].selectorText;
								var cssText = styleSheet[rulesProperty][ruleIndex].cssText;

								if (selectorText) {

									var recombinedSelectors = "";
									var selectors = selectorText.split(",");

									for (var selectorIndex = 0, selectorCount = selectors.length; selectorIndex != selectorCount; ++selectorIndex) {

										var selector = selectors[selectorIndex];

										if (selector) {
											if (selector.indexOf("#" + INTERNAL_ELEMENT_ID) == -1) {
												// Strictly speaking the body style in the publican brand should be applied
												// to the INTERNAL_ELEMENT_ID element, since the INTERNAL_ELEMENT_ID element
												// is effectively the "body" for the book. However, the publican brands
												// have some borders that make this impractical, so we just skip it.
												if (!selector.trim() != "body") {
													selector = "#" + INTERNAL_ELEMENT_ID + " " + selector;
												}
											}

											if (recombinedSelectors.length != 0) {
												recombinedSelectors += ",";
											}

											recombinedSelectors += selector;
										}
									}

									if (recombinedSelectors.length != 0) {
										// remove extra spaces
										recombinedSelectors = recombinedSelectors.replace(/  /g, " ");

										if (newStyleSheet) {
											// IE code
											try {
												// URL paths (like those to images) are relative to the location of the CSS file. In IE, our new stylesheets
												// have no location. So we need to use the URI.js library (http://medialize.github.io/URI.js/) to fix these up.
												if (styleSheet[rulesProperty][ruleIndex].style.cssText && styleSheet[rulesProperty][ruleIndex].style.cssText.trim().length != 0) {
													var urlRegex = /url\(("|')(.*?)("|')\)/g;
													var sourceCssText = styleSheet[rulesProperty][ruleIndex].style.cssText;
													var fixedCssText = sourceCssText;
													var match = null;
													while (match = urlRegex.exec(sourceCssText)) {
														var oldPath = match[2];
														var newPath = URI(oldPath).absoluteTo(URI(styleSheet.href).path()).path();
														fixedCssText = fixedCssText.replace(oldPath, newPath);
													}
													
													// When you add a combined selector (i.e. anything with a comma) it is added as a combined
													// selector initially. But when you then add any other style, the combined selector is
													// split up. This means you can add two styles (a combined one and a single one), and 
													// newStyleSheet.cssRules.length == 3. This is undesirable, so we need to manually 
													// split up any selectors and add them one at a time to ensure the order of the CSS rules.
													
													var selectors = recombinedSelectors.split(",");
													for (var selectorIndex = 0, selectorCount = selectors.length; selectorIndex < selectorCount; ++selectorIndex) {
														newStyleSheet.addRule(selectors[selectorIndex], fixedCssText, newStyleSheet.cssRules.length);
													}
												} 
											} catch (ex) {
												if (window.console) {
													console.log("Error adding new style");
													console.log(recombinedSelectors);
													console.log(styleSheet[rulesProperty][ruleIndex].style.cssText);
												}
											}
										} else {
											// Everything else code
											try {												
												styleSheet.insertRule(styleSheet[rulesProperty][ruleIndex].cssText.replace(styleSheet[rulesProperty][ruleIndex].selectorText, recombinedSelectors), ruleIndex);												
												styleSheet.deleteRule(ruleIndex + 1);
											} catch (ex) {
												console.log("Error adding new style");
												console.log(recombinedSelectors);
												console.log(styleSheet[rulesProperty][ruleIndex].cssText);
											}										
										}
									}
								}
							}
						}
					}
				}
			}
		} 
	} catch (e) {
		if (window.console) {
			console.log("Error fixing Publican brands");
		}
	}
}