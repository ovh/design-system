(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"../../stencil/components/divider/dist/esm/osds-divider.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_divider",(function(){return osds_divider_ec9ff349_OsdsDivider}));__webpack_require__("../../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.define-property.js");var ods_html_anchor_element_rel_4408c45b=__webpack_require__("../../stencil/components/divider/dist/esm/ods-html-anchor-element-rel-4408c45b.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var OdsDividerController=function(_OdsComponentControll){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(OdsDividerController,_OdsComponentControll);var _super=_createSuper(OdsDividerController);function OdsDividerController(component){return _classCallCheck(this,OdsDividerController),_super.call(this,component)}return OdsDividerController}((function OdsComponentController(component){_classCallCheck(this,OdsComponentController),this.component=component})),odsDividerDefaultAttributes={color:ods_html_anchor_element_rel_4408c45b.c.default,contrasted:!1,separator:!1,size:ods_html_anchor_element_rel_4408c45b.e.six},osds_divider_ec9ff349_OsdsDivider=function(){function OsdsDivider(hostRef){_classCallCheck(this,OsdsDivider),Object(ods_html_anchor_element_rel_4408c45b.i)(this,hostRef),this.controller=new OdsDividerController(this),this.separator=odsDividerDefaultAttributes.separator,this.color=odsDividerDefaultAttributes.color,this.size=odsDividerDefaultAttributes.size,this.contrasted=odsDividerDefaultAttributes.contrasted}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(OsdsDivider,[{key:"render",value:function render(){var separator=this.separator;return Object(ods_html_anchor_element_rel_4408c45b.g)(ods_html_anchor_element_rel_4408c45b.a,null,separator?Object(ods_html_anchor_element_rel_4408c45b.g)("hr",null):Object(ods_html_anchor_element_rel_4408c45b.g)("span",null))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_rel_4408c45b.f)(this)}}]),OsdsDivider}();osds_divider_ec9ff349_OsdsDivider.style='@charset "UTF-8";:host{padding:0;border:none;display:flex;width:100%}@media not all and (-webkit-min-device-pixel-ratio: 0), not all and (min-resolution: 0.001dpcm){@supports (-webkit-appearance: none){:host{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}}}:host hr{border:none;margin:0;width:100%}:host(:not([color])) hr{background-color:var(--ods-color-default-100)}:host([color^=default]) hr{background-color:var(--ods-color-default-100)}:host([color^=primary]) hr{background-color:var(--ods-color-primary-100)}:host([color^=text]) hr{background-color:var(--ods-color-text-100)}:host([color^=accent]) hr{background-color:var(--ods-color-accent-100)}:host([color^=error]) hr{background-color:var(--ods-color-error-100)}:host([color^=warning]) hr{background-color:var(--ods-color-warning-100)}:host([color^=success]) hr{background-color:var(--ods-color-success-100)}:host([color^=info]) hr{background-color:var(--ods-color-info-100)}:host([color^=promotion]) hr{background-color:var(--ods-color-promotion-100)}:host([contrasted]:not([color])) hr{background-color:var(--ods-color-default-100-contrasted)}:host([contrasted][color^=default]) hr{background-color:var(--ods-color-default-100-contrasted)}:host([contrasted][color^=primary]) hr{background-color:var(--ods-color-primary-100-contrasted)}:host([contrasted][color^=text]) hr{background-color:var(--ods-color-text-100-contrasted)}:host([contrasted][color^=accent]) hr{background-color:var(--ods-color-accent-100-contrasted)}:host([contrasted][color^=error]) hr{background-color:var(--ods-color-error-100-contrasted)}:host([contrasted][color^=warning]) hr{background-color:var(--ods-color-warning-100-contrasted)}:host([contrasted][color^=success]) hr{background-color:var(--ods-color-success-100-contrasted)}:host([contrasted][color^=info]) hr{background-color:var(--ods-color-info-100-contrasted)}:host([contrasted][color^=promotion]) hr{background-color:var(--ods-color-promotion-100-contrasted)}:host([size="0"]){margin:calc(var(--ods-size-divider-0-margin-y) / 2) 0}:host([size="0"]) hr{height:var(--ods-size-divider-0-height)}:host([size="1"]){margin:calc(var(--ods-size-divider-1-margin-y) / 2) 0}:host([size="1"]) hr{height:var(--ods-size-divider-1-height)}:host([size="2"]){margin:calc(var(--ods-size-divider-2-margin-y) / 2) 0}:host([size="2"]) hr{height:var(--ods-size-divider-2-height)}:host([size="3"]){margin:calc(var(--ods-size-divider-3-margin-y) / 2) 0}:host([size="3"]) hr{height:var(--ods-size-divider-3-height)}:host([size="4"]){margin:calc(var(--ods-size-divider-4-margin-y) / 2) 0}:host([size="4"]) hr{height:var(--ods-size-divider-4-height)}:host([size="5"]){margin:calc(var(--ods-size-divider-5-margin-y) / 2) 0}:host([size="5"]) hr{height:var(--ods-size-divider-5-height)}:host([size="6"]){margin:calc(var(--ods-size-divider-6-margin-y) / 2) 0}:host([size="6"]) hr{height:var(--ods-size-divider-6-height)}:host([size="7"]){margin:calc(var(--ods-size-divider-7-margin-y) / 2) 0}:host([size="7"]) hr{height:var(--ods-size-divider-7-height)}:host([size="8"]){margin:calc(var(--ods-size-divider-8-margin-y) / 2) 0}:host([size="8"]) hr{height:var(--ods-size-divider-8-height)}:host([size="9"]){margin:calc(var(--ods-size-divider-9-margin-y) / 2) 0}:host([size="9"]) hr{height:var(--ods-size-divider-9-height)}:host([size="10"]){margin:calc(var(--ods-size-divider-10-margin-y) / 2) 0}:host([size="10"]) hr{height:var(--ods-size-divider-10-height)}'}}]);