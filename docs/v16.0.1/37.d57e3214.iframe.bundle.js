(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"../components/progress-bar/dist/esm/osds-progress-bar.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_progress_bar",(function(){return osds_progress_bar_c66a2307_OsdsProgressBar}));__webpack_require__("../../node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var ods_html_anchor_element_target_eccd12db=__webpack_require__("../components/progress-bar/dist/esm/ods-html-anchor-element-target-eccd12db.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}var DEFAULT_ATTRIBUTE=Object.freeze({max:100,value:0}),osds_progress_bar_c66a2307_OdsProgressBarController=function(){function OdsProgressBarController(component){_classCallCheck(this,OdsProgressBarController),this.logger=new ods_html_anchor_element_target_eccd12db.b("OdsProgressBarController"),this.component=component}return _createClass(OdsProgressBarController,[{key:"validateAttributes",value:function validateAttributes(){this.component.max&&(this.component.max<0||this.component.max>100)&&this.logger.warn("max must be between 0 and 100"),this.component.value&&(this.component.value<0||this.component.value>100)&&this.logger.warn("progress must be between 0 and 100")}}]),OdsProgressBarController}(),osds_progress_bar_c66a2307_OsdsProgressBar=function(){function OsdsProgressBar(hostRef){_classCallCheck(this,OsdsProgressBar),Object(ods_html_anchor_element_target_eccd12db.f)(this,hostRef),this.controller=new osds_progress_bar_c66a2307_OdsProgressBarController(this),this.max=DEFAULT_ATTRIBUTE.max,this.value=DEFAULT_ATTRIBUTE.value}return _createClass(OsdsProgressBar,[{key:"componentWillLoad",value:function componentWillLoad(){this.controller.validateAttributes()}},{key:"render",value:function render(){return Object(ods_html_anchor_element_target_eccd12db.d)(ods_html_anchor_element_target_eccd12db.a,null,Object(ods_html_anchor_element_target_eccd12db.d)("div",{class:"progress-bar__wrapper"},Object(ods_html_anchor_element_target_eccd12db.d)("progress",{class:"progress-bar",value:this.value,max:this.max}),Object(ods_html_anchor_element_target_eccd12db.d)("slot",{name:"end"})))}}]),OsdsProgressBar}();osds_progress_bar_c66a2307_OsdsProgressBar.style=":host{display:flex;flex-direction:column;text-align:center}:host{border-color:transparent}.progress-bar{border:none;background-color:var(--ods-color-blue-100)}.progress-bar::-moz-progress-bar{background-color:var(--ods-color-blue-500)}.progress-bar::-webkit-progress-value{background-color:var(--ods-color-blue-500)}.progress-bar::-webkit-progress-bar{background-color:var(--ods-color-blue-100)}.progress-bar{height:var(--ods-size-03);border-radius:var(--ods-size-03);width:100%;transition:width ease 0.3s;-webkit-appearance:none;-moz-appearance:none;appearance:none}.progress-bar::-moz-progress-bar{border-radius:var(--ods-size-03)}.progress-bar::-webkit-progress-bar{border-radius:var(--ods-size-03);overflow:hidden}.progress-bar__wrapper{transition:width ease-in-out 0.3s;display:flex;align-items:center}"}}]);