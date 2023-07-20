(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"../../stencil/components/quantity/dist/esm/osds-quantity.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_quantity",(function(){return osds_quantity_3bfcc562_OsdsQuantity}));__webpack_require__("../../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.define-property.js");var ods_html_anchor_element_rel_b1c5c15a=__webpack_require__("../../stencil/components/quantity/dist/esm/ods-html-anchor-element-rel-b1c5c15a.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var osds_quantity_3bfcc562_OdsQuantityController=function(_OdsComponentControll){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(OdsQuantityController,_OdsComponentControll);var _super=_createSuper(OdsQuantityController);function OdsQuantityController(component){var _this;return _classCallCheck(this,OdsQuantityController),(_this=_super.call(this,component)).logger=new ods_html_anchor_element_rel_b1c5c15a.b("OsdsQuantityController"),_this}return _createClass(OdsQuantityController,[{key:"initInput",value:function initInput(){var foundOsdsInput=this.component.el.querySelector("osds-input[type=number]");if(this.clearEventListeners(),foundOsdsInput)this.component.input=foundOsdsInput,this.component.input.addEventListener("odsInputBlur",this.onBlur.bind(this));else{var foundNativeInput=this.component.el.querySelector("input[type=number]");foundNativeInput?(this.component.input=foundNativeInput,this.component.input.addEventListener("change",this.processInputValueChange.bind(this)),this.component.input.addEventListener("blur",this.onBlur.bind(this))):this.logger.warn("An input of type number is mandatory.")}}},{key:"onBlur",value:function onBlur(){if(this.component.input){var valueAsNb=Number(this.component.input.value),minNb=Number(this.component.input.min),maxNb=Number(this.component.input.max);""!==this.component.input.min&&valueAsNb<minNb?this.component.input.value=minNb:""!==this.component.input.max&&valueAsNb>maxNb&&(this.component.input.value=maxNb)}}},{key:"processInputValueChange",value:function processInputValueChange(){if(this.component.input&&this.component.minus&&this.component.plus){var valueAsNb=Number(this.component.input.value),minNb=Number(this.component.input.min),maxNb=Number(this.component.input.max);""!==this.component.input.value&&(this.removeDisabled(this.component.minus,this.component.plus),""!==this.component.input.min&&valueAsNb<=minNb?this.setDisabled(this.component.minus):""!==this.component.input.max&&valueAsNb>=maxNb&&this.setDisabled(this.component.plus))}}},{key:"setDisabledOnChildren",value:function setDisabledOnChildren(disabled){this.logger.log("disabled changed. update child",{disabled:disabled}),this.component.minus&&this.component.plus&&this.component.input&&(disabled?this.setDisabled(this.component.minus,this.component.plus,this.component.input):(this.removeDisabled(this.component.minus,this.component.plus,this.component.input),this.processInputValueChange()))}},{key:"clearEventListeners",value:function clearEventListeners(){var _a,_b,_c;null===(_a=this.component.input)||void 0===_a||_a.removeEventListener("change",this.processInputValueChange),null===(_b=this.component.input)||void 0===_b||_b.removeEventListener("blur",this.onBlur),null===(_c=this.component.input)||void 0===_c||_c.removeEventListener("odsInputBlur",this.onBlur)}},{key:"minusClickHandler",value:function minusClickHandler(){this.component.input&&!this.component.disabled&&(this.component.input.stepDown(),this.processInputValueChange())}},{key:"plusClickHandler",value:function plusClickHandler(){this.component.input&&!this.component.disabled&&(this.component.input.stepUp(),this.processInputValueChange())}},{key:"initSlots",value:function initSlots(){var minus=this.component.el.querySelector("[slot=minus]"),plus=this.component.el.querySelector("[slot=plus]");minus&&plus?(this.component.minus=minus,this.component.plus=plus):this.logger.warn("Minus and plus control are mandatory.")}},{key:"setDisabled",value:function setDisabled(){for(var _len=arguments.length,elements=new Array(_len),_key=0;_key<_len;_key++)elements[_key]=arguments[_key];elements.forEach((function(el){return el.setAttribute("disabled","")}))}},{key:"removeDisabled",value:function removeDisabled(){for(var _len2=arguments.length,elements=new Array(_len2),_key2=0;_key2<_len2;_key2++)elements[_key2]=arguments[_key2];elements.forEach((function(el){return el.removeAttribute("disabled")}))}}]),OdsQuantityController}((function OdsComponentController(component){_classCallCheck(this,OdsComponentController),this.component=component})),odsQuantityDefaultAttributes={disabled:!1},osds_quantity_3bfcc562_OsdsQuantity=function(){function OsdsQuantity(hostRef){_classCallCheck(this,OsdsQuantity),Object(ods_html_anchor_element_rel_b1c5c15a.g)(this,hostRef),this.controller=new osds_quantity_3bfcc562_OdsQuantityController(this),this.input=null,this.minus=null,this.plus=null,this.disabled=odsQuantityDefaultAttributes.disabled}return _createClass(OsdsQuantity,[{key:"updateDisableOnChild",value:function updateDisableOnChild(disabled){this.controller.setDisabledOnChildren(disabled)}},{key:"afterInit",value:function afterInit(){this.controller.processInputValueChange()}},{key:"afterRender",value:function afterRender(){this.controller.initInput(),this.controller.initSlots()}},{key:"onDestroy",value:function onDestroy(){this.controller.clearEventListeners()}},{key:"componentDidRender",value:function componentDidRender(){this.afterRender()}},{key:"componentDidLoad",value:function componentDidLoad(){this.afterInit()}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.onDestroy()}},{key:"odsValueChangeHandler",value:function odsValueChangeHandler(){this.controller.processInputValueChange()}},{key:"render",value:function render(){var _this2=this;return Object(ods_html_anchor_element_rel_b1c5c15a.e)(ods_html_anchor_element_rel_b1c5c15a.a,null,Object(ods_html_anchor_element_rel_b1c5c15a.e)("slot",Object.assign({name:"minus"},{ref:function ref(el){return _this2.minus=el},onClick:function onClick(){return _this2.controller.minusClickHandler()}})),Object(ods_html_anchor_element_rel_b1c5c15a.e)("slot",null),Object(ods_html_anchor_element_rel_b1c5c15a.e)("slot",Object.assign({name:"plus"},{ref:function ref(el){return _this2.plus=el},onClick:function onClick(){return _this2.controller.plusClickHandler()}})))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_rel_b1c5c15a.d)(this)}}],[{key:"watchers",get:function get(){return{disabled:["updateDisableOnChild"]}}}]),OsdsQuantity}();osds_quantity_3bfcc562_OsdsQuantity.style=":host{display:flex;flex-direction:row;--ods-input-text-align:center;--ods-input-width:calc(2.813rem * var(--ods-size-ratio));--ods-icon-vertical-align:middle}:host([disabled]){cursor:not-allowed}slot:not([name]){margin-left:var(--ods-size-03);margin-right:var(--ods-size-03)}slot{display:block}:host{--ods-input-padding:0;--ods-button-width:calc(2.25rem * var(--ods-size-ratio));--ods-size-button-padding-y:0;--ods-size-button-padding-x:0}"}}]);