(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"../components/quantity/dist/esm/osds-quantity.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_quantity",(function(){return osds_quantity_a8899978_OsdsQuantity}));__webpack_require__("../../node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var ods_html_anchor_element_target_2c7c661c=__webpack_require__("../components/quantity/dist/esm/ods-html-anchor-element-target-2c7c661c.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}var DEFAULT_ATTRIBUTE=Object.freeze({disabled:!1}),osds_quantity_a8899978_OdsQuantityController=function(){function OdsQuantityController(component){_classCallCheck(this,OdsQuantityController),this.logger=new ods_html_anchor_element_target_2c7c661c.b("OsdsQuantityController"),this.component=component}return _createClass(OdsQuantityController,[{key:"initInput",value:function initInput(){var foundOsdsInput=this.component.el.querySelector("osds-input[type=number]");if(this.clearEventListeners(),foundOsdsInput)this.component.input=foundOsdsInput,this.component.input.addEventListener("odsInputBlur",this.onBlur.bind(this));else{var foundNativeInput=this.component.el.querySelector("input[type=number]");foundNativeInput?(this.component.input=foundNativeInput,this.component.input.addEventListener("change",this.processInputValueChange.bind(this)),this.component.input.addEventListener("blur",this.onBlur.bind(this))):this.logger.warn("An input of type number is mandatory.")}}},{key:"onBlur",value:function onBlur(){if(this.component.input){var valueAsNb=Number(this.component.input.value),minNb=Number(this.component.input.min),maxNb=Number(this.component.input.max);""!==this.component.input.min&&valueAsNb<minNb?this.component.input.value=minNb:""!==this.component.input.max&&valueAsNb>maxNb&&(this.component.input.value=maxNb)}}},{key:"processInputValueChange",value:function processInputValueChange(){if(this.component.input&&this.component.minus&&this.component.plus){var valueAsNb=Number(this.component.input.value),minNb=Number(this.component.input.min),maxNb=Number(this.component.input.max);""!==this.component.input.value&&(this.removeDisabled(this.component.minus,this.component.plus),""!==this.component.input.min&&valueAsNb<=minNb?this.setDisabled(this.component.minus):""!==this.component.input.max&&valueAsNb>=maxNb&&this.setDisabled(this.component.plus))}}},{key:"setDisabledOnChildren",value:function setDisabledOnChildren(disabled){this.logger.log("disabled changed. update child",{disabled:disabled}),this.component.minus&&this.component.plus&&this.component.input&&(disabled?this.setDisabled(this.component.minus,this.component.plus,this.component.input):(this.removeDisabled(this.component.minus,this.component.plus,this.component.input),this.processInputValueChange()))}},{key:"clearEventListeners",value:function clearEventListeners(){var _a,_b,_c;null===(_a=this.component.input)||void 0===_a||_a.removeEventListener("change",this.processInputValueChange),null===(_b=this.component.input)||void 0===_b||_b.removeEventListener("blur",this.onBlur),null===(_c=this.component.input)||void 0===_c||_c.removeEventListener("odsInputBlur",this.onBlur)}},{key:"minusClickHandler",value:function minusClickHandler(){this.component.input&&!this.component.disabled&&(this.component.input.stepDown(),this.processInputValueChange())}},{key:"plusClickHandler",value:function plusClickHandler(){this.component.input&&!this.component.disabled&&(this.component.input.stepUp(),this.processInputValueChange())}},{key:"initSlots",value:function initSlots(){var minus=this.component.el.querySelector("[slot=minus]"),plus=this.component.el.querySelector("[slot=plus]");minus&&plus?(this.component.minus=minus,this.component.plus=plus):this.logger.warn("Minus and plus control are mandatory.")}},{key:"setDisabled",value:function setDisabled(){for(var _len=arguments.length,elements=new Array(_len),_key=0;_key<_len;_key++)elements[_key]=arguments[_key];elements.forEach((function(el){return el.setAttribute("disabled","")}))}},{key:"removeDisabled",value:function removeDisabled(){for(var _len2=arguments.length,elements=new Array(_len2),_key2=0;_key2<_len2;_key2++)elements[_key2]=arguments[_key2];elements.forEach((function(el){return el.removeAttribute("disabled")}))}}]),OdsQuantityController}(),osds_quantity_a8899978_OsdsQuantity=function(){function OsdsQuantity(hostRef){_classCallCheck(this,OsdsQuantity),Object(ods_html_anchor_element_target_2c7c661c.g)(this,hostRef),this.controller=new osds_quantity_a8899978_OdsQuantityController(this),this.input=null,this.minus=null,this.plus=null,this.disabled=DEFAULT_ATTRIBUTE.disabled}return _createClass(OsdsQuantity,[{key:"updateDisableOnChild",value:function updateDisableOnChild(disabled){this.controller.setDisabledOnChildren(disabled)}},{key:"afterInit",value:function afterInit(){this.controller.processInputValueChange()}},{key:"afterRender",value:function afterRender(){this.controller.initInput(),this.controller.initSlots()}},{key:"onDestroy",value:function onDestroy(){this.controller.clearEventListeners()}},{key:"componentDidRender",value:function componentDidRender(){this.afterRender()}},{key:"componentDidLoad",value:function componentDidLoad(){this.afterInit()}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.onDestroy()}},{key:"odsValueChangeHandler",value:function odsValueChangeHandler(){this.controller.processInputValueChange()}},{key:"render",value:function render(){var _this=this;return Object(ods_html_anchor_element_target_2c7c661c.e)(ods_html_anchor_element_target_2c7c661c.a,null,Object(ods_html_anchor_element_target_2c7c661c.e)("slot",Object.assign({name:"minus"},{ref:function ref(el){return _this.minus=el},onClick:function onClick(){return _this.controller.minusClickHandler()}})),Object(ods_html_anchor_element_target_2c7c661c.e)("slot",null),Object(ods_html_anchor_element_target_2c7c661c.e)("slot",Object.assign({name:"plus"},{ref:function ref(el){return _this.plus=el},onClick:function onClick(){return _this.controller.plusClickHandler()}})))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_target_2c7c661c.d)(this)}}],[{key:"watchers",get:function get(){return{disabled:["updateDisableOnChild"]}}}]),OsdsQuantity}();osds_quantity_a8899978_OsdsQuantity.style=":host{display:flex;flex-direction:row;--ods-input-text-align:center;--ods-input-width:calc(2.813rem * var(--ods-size-ratio));--ods-icon-vertical-align:middle}:host([disabled]){cursor:not-allowed}slot[name]{width:var(--ods-button-width)}slot:not([name]){margin-left:var(--ods-size-03);margin-right:var(--ods-size-03)}slot{display:block}:host{--ods-input-padding:0;--ods-button-width:calc(2.25rem * var(--ods-size-ratio));--ods-size-button-padding-y:0;--ods-size-button-padding-x:0}"}}]);