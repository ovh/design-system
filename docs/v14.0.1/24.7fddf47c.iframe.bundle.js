(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"../../stencil/components/collapsible/dist/esm/osds-collapsible.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_collapsible",(function(){return osds_collapsible_8763f12c_OsdsCollapsible}));__webpack_require__("../../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.define-property.js");var ods_html_anchor_element_rel_cf2bb124=__webpack_require__("../../stencil/components/collapsible/dist/esm/ods-html-anchor-element-rel-cf2bb124.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var OdsCollapsibleController=function(_OdsComponentControll){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(OdsCollapsibleController,_OdsComponentControll);var _super=_createSuper(OdsCollapsibleController);function OdsCollapsibleController(component){return _classCallCheck(this,OdsCollapsibleController),_super.call(this,component)}return _createClass(OdsCollapsibleController,[{key:"onToggle",value:function onToggle(){this.component.emitToggle(this.component.opened||!1)}}]),OdsCollapsibleController}((function OdsComponentController(component){_classCallCheck(this,OdsComponentController),this.component=component})),odsCollapsibleDefaultAttributes={opened:!1},osds_collapsible_8763f12c_OsdsCollapsible=function(){function OsdsCollapsible(hostRef){_classCallCheck(this,OsdsCollapsible),Object(ods_html_anchor_element_rel_cf2bb124.h)(this,hostRef),this.odsCollapsibleToggle=Object(ods_html_anchor_element_rel_cf2bb124.d)(this,"odsCollapsibleToggle",7),this.controller=new OdsCollapsibleController(this),this.opened=odsCollapsibleDefaultAttributes.opened}return _createClass(OsdsCollapsible,[{key:"onOpenedChanged",value:function onOpenedChanged(){this.controller.onToggle()}},{key:"emitToggle",value:function emitToggle(opened){this.odsCollapsibleToggle.emit(opened)}},{key:"render",value:function render(){return Object(ods_html_anchor_element_rel_cf2bb124.f)(ods_html_anchor_element_rel_cf2bb124.a,null,Object(ods_html_anchor_element_rel_cf2bb124.f)("slot",null))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_rel_cf2bb124.e)(this)}}],[{key:"watchers",get:function get(){return{opened:["onOpenedChanged"]}}}]),OsdsCollapsible}();osds_collapsible_8763f12c_OsdsCollapsible.style=":host{display:none}:host([opened]){display:block}"}}]);