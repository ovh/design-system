(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"../../stencil/components/checkbox-button/dist/esm/osds-checkbox-button.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_checkbox_button",(function(){return osds_checkbox_button_59bb8a3d_OsdsCheckboxButton}));__webpack_require__("../../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.define-property.js");var ods_html_anchor_element_rel_723219a6=__webpack_require__("../../stencil/components/checkbox-button/dist/esm/ods-html-anchor-element-rel-723219a6.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var osds_checkbox_button_59bb8a3d_OdsCheckboxButtonController=function(_OdsComponentControll){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(OdsCheckboxButtonController,_OdsComponentControll);var _super=_createSuper(OdsCheckboxButtonController);function OdsCheckboxButtonController(component){return _classCallCheck(this,OdsCheckboxButtonController),_super.call(this,component)}return _createClass(OdsCheckboxButtonController,[{key:"computeIconName",value:function computeIconName(){var checked=arguments.length>0&&void 0!==arguments[0]&&arguments[0],indeterminate=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return indeterminate?ods_html_anchor_element_rel_723219a6.c.MINUS:checked?ods_html_anchor_element_rel_723219a6.c.OK:void 0}}]),OdsCheckboxButtonController}((function OdsComponentController(component){_classCallCheck(this,OdsComponentController),this.component=component})),odsCheckboxButtonDefaultAttributes={checked:!1,checking:!1,color:ods_html_anchor_element_rel_723219a6.e.default,disabled:!1,hasFocus:!1,indeterminate:!1,interactive:!1,size:ods_html_anchor_element_rel_723219a6.f.md},osds_checkbox_button_59bb8a3d_OsdsCheckboxButton=function(){function OsdsCheckboxButton(hostRef){_classCallCheck(this,OsdsCheckboxButton),Object(ods_html_anchor_element_rel_723219a6.k)(this,hostRef),this.controller=new osds_checkbox_button_59bb8a3d_OdsCheckboxButtonController(this),this.checked=odsCheckboxButtonDefaultAttributes.checked,this.checking=odsCheckboxButtonDefaultAttributes.checking,this.color=odsCheckboxButtonDefaultAttributes.color,this.disabled=odsCheckboxButtonDefaultAttributes.disabled,this.hasFocus=odsCheckboxButtonDefaultAttributes.hasFocus,this.indeterminate=odsCheckboxButtonDefaultAttributes.indeterminate,this.interactive=odsCheckboxButtonDefaultAttributes.interactive,this.size=odsCheckboxButtonDefaultAttributes.size}return _createClass(OsdsCheckboxButton,[{key:"render",value:function render(){var iconSize,_this=this,checked=this.checked,color=this.color,indeterminate=this.indeterminate,size=this.size,iconName=this.controller.computeIconName(checked,indeterminate);switch(size){case ods_html_anchor_element_rel_723219a6.f.sm:iconSize=ods_html_anchor_element_rel_723219a6.g.sm;break;case ods_html_anchor_element_rel_723219a6.f.md:iconSize=ods_html_anchor_element_rel_723219a6.g.md;break;default:iconSize=ods_html_anchor_element_rel_723219a6.g.sm}return Object(ods_html_anchor_element_rel_723219a6.i)(ods_html_anchor_element_rel_723219a6.a,null,Object(ods_html_anchor_element_rel_723219a6.i)("slot",{name:"start"}),Object(ods_html_anchor_element_rel_723219a6.i)("div",Object.assign({class:"checkbox-button"},{ref:function ref(el){return _this.mainEl=el}}),Object(ods_html_anchor_element_rel_723219a6.i)("osds-icon",{color:color,name:iconName,size:iconSize})),Object(ods_html_anchor_element_rel_723219a6.i)("slot",{name:"end"}))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_rel_723219a6.h)(this)}}]),OsdsCheckboxButton}();osds_checkbox_button_59bb8a3d_OsdsCheckboxButton.style=":host{align-items:center;display:grid;grid-template-columns:auto 1fr auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;cursor:pointer}:host .checkbox-button{border-radius:var(--ods-size-border-radius-02);border-style:solid;position:relative;text-align:center;vertical-align:middle}:host .checkbox-button osds-icon{display:none;position:absolute}:host(:is([checked],[indeterminate])) .checkbox-button osds-icon{display:block}:host([disabled]){opacity:0.5;cursor:not-allowed}slot{display:block}:host .checkbox-button{outline:none}:host(:not([color])) .checkbox-button{border-color:var(--ods-color-default-500)}:host(:not([color]):not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-default-100)}:host(:not([color]):not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-default-200)}:host([color^=default]) .checkbox-button{border-color:var(--ods-color-default-500)}:host([color^=default]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-default-100)}:host([color^=default]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-default-200)}:host([color^=primary]) .checkbox-button{border-color:var(--ods-color-primary-500)}:host([color^=primary]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-primary-100)}:host([color^=primary]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-primary-200)}:host([color^=text]) .checkbox-button{border-color:var(--ods-color-text-500)}:host([color^=text]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-text-100)}:host([color^=text]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-text-200)}:host([color^=accent]) .checkbox-button{border-color:var(--ods-color-accent-500)}:host([color^=accent]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-accent-100)}:host([color^=accent]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-accent-200)}:host([color^=error]) .checkbox-button{border-color:var(--ods-color-error-500)}:host([color^=error]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-error-100)}:host([color^=error]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-error-200)}:host([color^=warning]) .checkbox-button{border-color:var(--ods-color-warning-500)}:host([color^=warning]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-warning-100)}:host([color^=warning]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-warning-200)}:host([color^=success]) .checkbox-button{border-color:var(--ods-color-success-500)}:host([color^=success]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-success-100)}:host([color^=success]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-success-200)}:host([color^=info]) .checkbox-button{border-color:var(--ods-color-info-500)}:host([color^=info]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-info-100)}:host([color^=info]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-info-200)}:host([color^=promotion]) .checkbox-button{border-color:var(--ods-color-promotion-500)}:host([color^=promotion]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-promotion-100)}:host([color^=promotion]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-promotion-200)}:host([size=md]) .checkbox-button{border-width:var(--ods-size-checkbox-button-md-border-width);height:var(--ods-size-checkbox-button-md-height);margin:var(--ods-size-checkbox-button-md-margin);width:var(--ods-size-checkbox-button-md-width);aspect-ratio:1/1}:host([size=sm]) .checkbox-button{border-width:var(--ods-size-checkbox-button-sm-border-width);height:var(--ods-size-checkbox-button-sm-height);margin:var(--ods-size-checkbox-button-sm-margin);width:var(--ods-size-checkbox-button-sm-width);aspect-ratio:1/1}:host([size=sm]) slot{font-family:var(--ods-typography-body-600-font-family);font-size:var(--ods-typography-body-600-font-size);font-style:var(--ods-typography-body-600-font-style);font-weight:var(--ods-typography-body-600-font-weight);letter-spacing:var(--ods-typography-body-600-letter-spacing);line-height:var(--ods-typography-body-600-line-height)}:host([size=md]) slot{font-family:var(--ods-typography-body-600-font-family);font-size:var(--ods-typography-body-600-font-size);font-style:var(--ods-typography-body-600-font-style);font-weight:var(--ods-typography-body-600-font-weight);letter-spacing:var(--ods-typography-body-600-letter-spacing);line-height:var(--ods-typography-body-600-line-height)}"}}]);