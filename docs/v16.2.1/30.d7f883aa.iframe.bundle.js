(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"../components/form-field/dist/esm/osds-form-field.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_form_field",(function(){return osds_form_field_c5c972c6_OsdsFormField}));__webpack_require__("../../node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.values.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var ODS_THEME_COLOR_HUE,ODS_THEME_COLOR_INTENT,ODS_THEME_SIZE,ODS_THEME_TYPOGRAPHY_LEVEL,ODS_THEME_TYPOGRAPHY_SIZE,index_3777595a=__webpack_require__("../components/form-field/dist/esm/index-3777595a.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}!function(ODS_THEME_COLOR_HUE){ODS_THEME_COLOR_HUE._000="000",ODS_THEME_COLOR_HUE._050="050",ODS_THEME_COLOR_HUE._075="075",ODS_THEME_COLOR_HUE._100="100",ODS_THEME_COLOR_HUE._200="200",ODS_THEME_COLOR_HUE._300="300",ODS_THEME_COLOR_HUE._400="400",ODS_THEME_COLOR_HUE._500="500",ODS_THEME_COLOR_HUE._600="600",ODS_THEME_COLOR_HUE._700="700",ODS_THEME_COLOR_HUE._800="800",ODS_THEME_COLOR_HUE._900="900",ODS_THEME_COLOR_HUE._1000="1000"}(ODS_THEME_COLOR_HUE||(ODS_THEME_COLOR_HUE={})),Object.freeze(Object.values(ODS_THEME_COLOR_HUE)),function(ODS_THEME_COLOR_INTENT){ODS_THEME_COLOR_INTENT.accent="accent",ODS_THEME_COLOR_INTENT.default="default",ODS_THEME_COLOR_INTENT.error="error",ODS_THEME_COLOR_INTENT.info="info",ODS_THEME_COLOR_INTENT.primary="primary",ODS_THEME_COLOR_INTENT.promotion="promotion",ODS_THEME_COLOR_INTENT.success="success",ODS_THEME_COLOR_INTENT.text="text",ODS_THEME_COLOR_INTENT.warning="warning"}(ODS_THEME_COLOR_INTENT||(ODS_THEME_COLOR_INTENT={})),Object.freeze(Object.values(ODS_THEME_COLOR_INTENT)),function(ODS_THEME_SIZE){ODS_THEME_SIZE._100="100",ODS_THEME_SIZE._200="200",ODS_THEME_SIZE._300="300",ODS_THEME_SIZE._400="400",ODS_THEME_SIZE._500="500",ODS_THEME_SIZE._600="600",ODS_THEME_SIZE._700="700",ODS_THEME_SIZE._800="800",ODS_THEME_SIZE._900="900"}(ODS_THEME_SIZE||(ODS_THEME_SIZE={})),Object.freeze(Object.values(ODS_THEME_SIZE)),function(ODS_THEME_TYPOGRAPHY_LEVEL){ODS_THEME_TYPOGRAPHY_LEVEL.body="body",ODS_THEME_TYPOGRAPHY_LEVEL.button="button",ODS_THEME_TYPOGRAPHY_LEVEL.caption="caption",ODS_THEME_TYPOGRAPHY_LEVEL.heading="heading",ODS_THEME_TYPOGRAPHY_LEVEL.subheading="subheading"}(ODS_THEME_TYPOGRAPHY_LEVEL||(ODS_THEME_TYPOGRAPHY_LEVEL={})),Object.freeze(Object.values(ODS_THEME_TYPOGRAPHY_LEVEL)),function(ODS_THEME_TYPOGRAPHY_SIZE){ODS_THEME_TYPOGRAPHY_SIZE._100="100",ODS_THEME_TYPOGRAPHY_SIZE._200="200",ODS_THEME_TYPOGRAPHY_SIZE._300="300",ODS_THEME_TYPOGRAPHY_SIZE._400="400",ODS_THEME_TYPOGRAPHY_SIZE._500="500",ODS_THEME_TYPOGRAPHY_SIZE._600="600",ODS_THEME_TYPOGRAPHY_SIZE._700="700",ODS_THEME_TYPOGRAPHY_SIZE._800="800"}(ODS_THEME_TYPOGRAPHY_SIZE||(ODS_THEME_TYPOGRAPHY_SIZE={})),Object.freeze(Object.values(ODS_THEME_TYPOGRAPHY_SIZE));var DEFAULT_ATTRIBUTE=Object.freeze({error:"",inline:!1}),osds_form_field_c5c972c6_OsdsFormField=function(){function OsdsFormField(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,OsdsFormField),Object(index_3777595a.e)(this,hostRef),this.error=DEFAULT_ATTRIBUTE.error,this.inline=DEFAULT_ATTRIBUTE.inline}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(OsdsFormField,[{key:"render",value:function render(){var error=this.error;return Object(index_3777595a.c)(index_3777595a.a,null,Object(index_3777595a.c)("div",{class:"top-bar"},Object(index_3777595a.c)("slot",{name:"label"}),Object(index_3777595a.c)("slot",{name:"visual-hint"})),Object(index_3777595a.c)("slot",null),error&&error.length>0?Object(index_3777595a.c)("osds-text",{color:ODS_THEME_COLOR_INTENT.error},error):Object(index_3777595a.c)("slot",{name:"helper"}))}}]),OsdsFormField}();osds_form_field_c5c972c6_OsdsFormField.style=":host{display:flex;flex-direction:column}:host([inline]){width:-moz-fit-content;width:fit-content}:host .top-bar{display:flex;flex-direction:row;align-items:flex-end;justify-content:space-between;margin-bottom:var(--ods-size-03);width:100%}:host{border-color:transparent}"}}]);