(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"../../stencil/components/link/dist/esm/osds-link.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_link",(function(){return osds_link_4238aec6_OsdsLink}));__webpack_require__("../../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.values.js"),__webpack_require__("../../../node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.define-property.js");var ods_html_anchor_element_rel_6e2fe0ee=__webpack_require__("../../stencil/components/link/dist/esm/ods-html-anchor-element-rel-6e2fe0ee.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function OdsWarnComponentEnumAttribute(params){(function odsIsTermInEnum(term,set){return Object.values(set).includes(term)})(params.attribute,params.attributeValues)||params.logger.warn("The "+params.attributeName+" attribute must have a value from ["+Object.values(params.attributeValues).join(", ")+"]")}function OdsWarnComponentRangeAttribute(params){params.attribute&&(params.attribute>params.max||params.attribute<params.min)&&params.logger.warn("The value attribute must be in bounds of ["+[params.min,params.max].join(", ")+"]")}function OdsWarnComponentAttribute(params){var required=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return required&&!params.attribute?params.logger.warn("Attribute "+params.attributeName+" is required."):"number"==typeof params.attribute?OdsWarnComponentRangeAttribute(params):OdsWarnComponentEnumAttribute(params)}var osds_link_4238aec6_OdsLinkController=function(_OdsComponentControll){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(OdsLinkController,_OdsComponentControll);var _super=_createSuper(OdsLinkController);function OdsLinkController(component){var _this;return _classCallCheck(this,OdsLinkController),(_this=_super.call(this,component)).logger=new ods_html_anchor_element_rel_6e2fe0ee.b("OdsLinkController"),_this}return _createClass(OdsLinkController,[{key:"validateAttributes",value:function validateAttributes(){var logger=this.logger;OdsWarnComponentAttribute({logger:logger,attributeValues:ods_html_anchor_element_rel_6e2fe0ee.c,attributeName:"color",attribute:this.component.color}),OdsWarnComponentAttribute({logger:logger,attributeValues:ods_html_anchor_element_rel_6e2fe0ee.e,attributeName:"target",attribute:this.component.target})}}]),OdsLinkController}((function OdsComponentController(component){_classCallCheck(this,OdsComponentController),this.component=component})),odsLinkDefaultAttributes={color:ods_html_anchor_element_rel_6e2fe0ee.c.default,contrasted:!1,disabled:!1,download:void 0,href:"",referrerpolicy:void 0,rel:void 0,target:ods_html_anchor_element_rel_6e2fe0ee.e._self,type:void 0},osds_link_4238aec6_OsdsLink=function(){function OsdsLink(hostRef){_classCallCheck(this,OsdsLink),Object(ods_html_anchor_element_rel_6e2fe0ee.i)(this,hostRef),this.controller=new osds_link_4238aec6_OdsLinkController(this),this.color=odsLinkDefaultAttributes.color,this.contrasted=odsLinkDefaultAttributes.contrasted,this.disabled=odsLinkDefaultAttributes.disabled,this.download=odsLinkDefaultAttributes.download,this.href=odsLinkDefaultAttributes.href,this.referrerpolicy=odsLinkDefaultAttributes.referrerpolicy,this.rel=odsLinkDefaultAttributes.rel,this.target=odsLinkDefaultAttributes.target,this.type=odsLinkDefaultAttributes.type}return _createClass(OsdsLink,[{key:"beforeRender",value:function beforeRender(){this.controller.validateAttributes()}},{key:"componentWillRender",value:function componentWillRender(){this.beforeRender()}},{key:"render",value:function render(){var template,download=this.download,href=this.href,referrerpolicy=this.referrerpolicy,rel=this.rel,target=this.target,type=this.type,content=Object(ods_html_anchor_element_rel_6e2fe0ee.g)("span",{class:"link__text-container"},Object(ods_html_anchor_element_rel_6e2fe0ee.g)("slot",{name:"start"}),Object(ods_html_anchor_element_rel_6e2fe0ee.g)("span",{class:"link__centered-text"},Object(ods_html_anchor_element_rel_6e2fe0ee.g)("slot",null)),Object(ods_html_anchor_element_rel_6e2fe0ee.g)("slot",{name:"end"}));return template=href?Object(ods_html_anchor_element_rel_6e2fe0ee.g)("a",Object.assign({},{class:"link",part:"link",download:download,href:href,referrerpolicy:referrerpolicy,rel:rel,tabindex:this.disabled?-1:0,target:target,type:type}),content):Object(ods_html_anchor_element_rel_6e2fe0ee.g)("button",Object.assign({},{class:"link",disabled:this.disabled,part:"link",tabindex:this.disabled?-1:0}),content),Object(ods_html_anchor_element_rel_6e2fe0ee.g)(ods_html_anchor_element_rel_6e2fe0ee.a,null,template)}},{key:"host",get:function get(){return Object(ods_html_anchor_element_rel_6e2fe0ee.f)(this)}}]),OsdsLink}();osds_link_4238aec6_OsdsLink.style=':host .link{cursor:pointer;text-decoration:none;outline:none;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}:host .link__centered-text{background-position:0 100%;background-repeat:no-repeat;background-size:0 var(--ods-size-02);transition:background-size 0.2s ease-in, color ease-in-out 0.1s}::slotted([slot=start]),::slotted([slot=end]){vertical-align:top}:host(:not([href])) .link,:host([href=""]) .link{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0;text-align:inherit}:host(:not([disabled]):hover) .link__centered-text,:host(:not([disabled]):focus) .link__centered-text{background-size:100% var(--ods-size-02);transition:background-size 0.2s ease-out}:host(:not([disabled]):focus){outline-style:dotted;outline-width:var(--ods-size-inset-02);outline-offset:var(--ods-size-inset-03)}:host(:not([disabled]):focus) .link__centered-text{outline:none}:host([disabled]){cursor:not-allowed;opacity:0.5}:host([disabled]) .link{pointer-events:none}:host .link__centered-text{background-image:linear-gradient(currentColor, currentColor)}:host(:not([href])) .link,:host([href=""]) .link{background-color:transparent}:host(:not([color])) .link{color:var(--ods-color-default-500)}:host([color^=default]) .link{color:var(--ods-color-default-500)}:host([color^=primary]) .link{color:var(--ods-color-primary-500)}:host([color^=text]) .link{color:var(--ods-color-text-500)}:host([color^=accent]) .link{color:var(--ods-color-accent-500)}:host([color^=error]) .link{color:var(--ods-color-error-500)}:host([color^=warning]) .link{color:var(--ods-color-warning-500)}:host([color^=success]) .link{color:var(--ods-color-success-500)}:host([color^=info]) .link{color:var(--ods-color-info-500)}:host([color^=promotion]) .link{color:var(--ods-color-promotion-500)}:host(:not([color]):hover) .link,:host(:not([color]):focus) .link{color:var(--ods-color-default-700)}:host([color^=default]:hover) .link,:host([color^=default]:focus) .link{color:var(--ods-color-default-700)}:host([color^=primary]:hover) .link,:host([color^=primary]:focus) .link{color:var(--ods-color-primary-700)}:host([color^=text]:hover) .link,:host([color^=text]:focus) .link{color:var(--ods-color-text-700)}:host([color^=accent]:hover) .link,:host([color^=accent]:focus) .link{color:var(--ods-color-accent-700)}:host([color^=error]:hover) .link,:host([color^=error]:focus) .link{color:var(--ods-color-error-700)}:host([color^=warning]:hover) .link,:host([color^=warning]:focus) .link{color:var(--ods-color-warning-700)}:host([color^=success]:hover) .link,:host([color^=success]:focus) .link{color:var(--ods-color-success-700)}:host([color^=info]:hover) .link,:host([color^=info]:focus) .link{color:var(--ods-color-info-700)}:host([color^=promotion]:hover) .link,:host([color^=promotion]:focus) .link{color:var(--ods-color-promotion-700)}:host([contrasted]:not([color])) .link{color:var(--ods-color-default-500-contrasted)}:host([contrasted][color^=default]) .link{color:var(--ods-color-default-500-contrasted)}:host([contrasted][color^=primary]) .link{color:var(--ods-color-primary-500-contrasted)}:host([contrasted][color^=text]) .link{color:var(--ods-color-text-500-contrasted)}:host([contrasted][color^=accent]) .link{color:var(--ods-color-accent-500-contrasted)}:host([contrasted][color^=error]) .link{color:var(--ods-color-error-500-contrasted)}:host([contrasted][color^=warning]) .link{color:var(--ods-color-warning-500-contrasted)}:host([contrasted][color^=success]) .link{color:var(--ods-color-success-500-contrasted)}:host([contrasted][color^=info]) .link{color:var(--ods-color-info-500-contrasted)}:host([contrasted][color^=promotion]) .link{color:var(--ods-color-promotion-500-contrasted)}:host .link__text-container{font-family:var(--ods-typography-body-500-font-family);font-size:var(--ods-typography-body-500-font-size);font-style:var(--ods-typography-body-500-font-style);font-weight:var(--ods-typography-body-500-font-weight);letter-spacing:var(--ods-typography-body-500-letter-spacing);line-height:var(--ods-typography-body-500-line-height)}'}}]);