(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"../components/content-addon/dist/esm/osds-content-addon.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_content_addon",(function(){return osds_content_addon_d17d5e80_OsdsContentAddon}));__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var index_db0d4074=__webpack_require__("../components/content-addon/dist/esm/index-db0d4074.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var osds_content_addon_d17d5e80_OsdsContentAddon=function(){function OsdsContentAddon(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,OsdsContentAddon),Object(index_db0d4074.e)(this,hostRef)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(OsdsContentAddon,[{key:"render",value:function render(){return Object(index_db0d4074.d)(index_db0d4074.a,null,Object(index_db0d4074.d)("span",{class:"osds-content-addon"},Object(index_db0d4074.d)("slot",{name:"top"}),Object(index_db0d4074.d)("span",{class:"inset-grid"},Object(index_db0d4074.d)("slot",{name:"start"}),Object(index_db0d4074.d)("slot",{name:"main"}),Object(index_db0d4074.d)("slot",{name:"end"})),Object(index_db0d4074.d)("slot",{name:"bottom"})))}},{key:"el",get:function get(){return Object(index_db0d4074.c)(this)}}]),OsdsContentAddon}();osds_content_addon_d17d5e80_OsdsContentAddon.style=':host{display:inline-block}:host .osds-content-addon{display:grid;grid-template:"top top top" min-content "start main end" min-content "bottom bottom bottom" min-content/max-content max-content max-content;grid-auto-rows:1fr;grid-auto-columns:1fr;grid-auto-flow:row;gap:0 0;width:100%;height:100%}:host .osds-content-addon .inset-grid{display:grid;grid-template-areas:"start main end";grid-template-columns:auto auto auto;align-items:baseline}:host .osds-content-addon slot{display:grid}:host .osds-content-addon slot[name=top]{grid-area:top}:host .osds-content-addon slot[name=bottom]{grid-area:bottom}:host .osds-content-addon slot[name=start]{grid-area:start}:host .osds-content-addon slot[name=end]{grid-area:end}:host .osds-content-addon slot[name=main]{grid-area:main}'}}]);