(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"../../stencil/components/tabs/dist/esm/osds-tab-bar_4.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_tab_bar",(function(){return osds_tab_panel_cb47a0f3_OsdsTabBar})),__webpack_require__.d(__webpack_exports__,"osds_tab_bar_item",(function(){return osds_tab_panel_cb47a0f3_OsdsTabBarItem})),__webpack_require__.d(__webpack_exports__,"osds_tab_panel",(function(){return osds_tab_panel_cb47a0f3_OsdsTabsPanel})),__webpack_require__.d(__webpack_exports__,"osds_tabs",(function(){return osds_tab_panel_cb47a0f3_OsdsTabs}));__webpack_require__("../../../node_modules/core-js/modules/es.array.find.js"),__webpack_require__("../../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.define-property.js");var ods_html_anchor_element_rel_b10f47c1=__webpack_require__("../../stencil/components/tabs/dist/esm/ods-html-anchor-element-rel-b10f47c1.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var OdsComponentController=function OdsComponentController(component){_classCallCheck(this,OdsComponentController),this.component=component},OdsTabBarController=function(_OdsComponentControll){_inherits(OdsTabBarController,_OdsComponentControll);var _super=_createSuper(OdsTabBarController);function OdsTabBarController(component){return _classCallCheck(this,OdsTabBarController),_super.call(this,component)}return OdsTabBarController}(OdsComponentController),OdsTabBarItemController=function(_OdsComponentControll2){_inherits(OdsTabBarItemController,_OdsComponentControll2);var _super2=_createSuper(OdsTabBarItemController);function OdsTabBarItemController(component){return _classCallCheck(this,OdsTabBarItemController),_super2.call(this,component)}return _createClass(OdsTabBarItemController,[{key:"handlePanelKeyEvent",value:function handlePanelKeyEvent(event){this.component.disabled||13!==event.keyCode&&32!==event.keyCode||(this.component.select(),event.preventDefault())}},{key:"getTabIndex",value:function getTabIndex(currentTabindex){return this.component.disabled?-1:currentTabindex||0}}]),OdsTabBarItemController}(OdsComponentController),odsTabBarItemDefaultAttributes={panel:"",active:!1,disabled:!1,contrasted:!1},OdsTabPanelController=function(_OdsComponentControll3){_inherits(OdsTabPanelController,_OdsComponentControll3);var _super3=_createSuper(OdsTabPanelController);function OdsTabPanelController(component){return _classCallCheck(this,OdsTabPanelController),_super3.call(this,component)}return OdsTabPanelController}(OdsComponentController),odsTabPanelDefaultAttributes={name:"",active:!1},OdsTabsController=function(_OdsComponentControll4){_inherits(OdsTabsController,_OdsComponentControll4);var _super4=_createSuper(OdsTabsController);function OdsTabsController(component){return _classCallCheck(this,OdsTabsController),_super4.call(this,component)}return _createClass(OdsTabsController,[{key:"afterInit",value:function afterInit(){}},{key:"beforeInit",value:function beforeInit(){this.changeActivePanel(this.component.panel),this.component.onContrastedPropChange(this.component.contrasted)}},{key:"changeActivePanel",value:function changeActivePanel(panel){var items=this.component.getTabItems();!items.find((function(item){return item.panel===panel}))&&items.length&&(panel=items[0].panel),items.forEach((function(item){return item.active=item.panel===panel})),this.component.getTabPanels().forEach((function(tabPanel){return tabPanel.active=tabPanel.name===panel})),this.component.panel!==panel&&(this.component.panel=panel,this.component.emitChanged())}},{key:"propagateContrastedToItems",value:function propagateContrastedToItems(contrasted){this.component.getTabItems().forEach((function(item){return item.contrasted=contrasted}))}},{key:"getTabItems",value:function getTabItems(elementTag){return Array.from(this.component.el.querySelectorAll(elementTag))}},{key:"getTabPanels",value:function getTabPanels(elementTag){return Array.from(this.component.el.querySelectorAll(elementTag))}}]),OdsTabsController}(OdsComponentController),odsTabsDefaultAttributes={size:ods_html_anchor_element_rel_b10f47c1.c.md,contrasted:!1,panel:""},osds_tab_panel_cb47a0f3_OsdsTabs=function(){function OsdsTabs(hostRef){_classCallCheck(this,OsdsTabs),Object(ods_html_anchor_element_rel_b10f47c1.i)(this,hostRef),this.odsTabsChanged=Object(ods_html_anchor_element_rel_b10f47c1.e)(this,"odsTabsChanged",7),this.logger=new ods_html_anchor_element_rel_b10f47c1.b("OsdsTabs"),this.controller=new OdsTabsController(this),this.contrasted=odsTabsDefaultAttributes.contrasted,this.panel=odsTabsDefaultAttributes.panel,this.size=odsTabsDefaultAttributes.size}return _createClass(OsdsTabs,[{key:"handleTabItemSelection",value:function handleTabItemSelection(event){this.logger.log("[handleTabItemSelection]",{event:event}),this.controller.changeActivePanel(event.detail.panel)}},{key:"emitChanged",value:function emitChanged(){this.odsTabsChanged.emit({panel:this.panel})}},{key:"getTabItems",value:function getTabItems(){return this.controller.getTabItems("osds-tab-bar-item")}},{key:"getTabPanels",value:function getTabPanels(){return this.controller.getTabPanels("osds-tab-panel")}},{key:"onPanelPropChange",value:function onPanelPropChange(panel){this.controller.changeActivePanel(panel)}},{key:"onContrastedPropChange",value:function onContrastedPropChange(contrasted){this.controller.propagateContrastedToItems(contrasted)}},{key:"afterInit",value:function afterInit(){this.controller.afterInit()}},{key:"componentDidLoad",value:function componentDidLoad(){this.afterInit()}},{key:"beforeInit",value:function beforeInit(){this.controller.beforeInit()}},{key:"componentWillLoad",value:function componentWillLoad(){this.beforeInit()}},{key:"render",value:function render(){return Object(ods_html_anchor_element_rel_b10f47c1.g)(ods_html_anchor_element_rel_b10f47c1.a,null,Object(ods_html_anchor_element_rel_b10f47c1.g)("div",{class:"tabs-nav-wrap"},Object(ods_html_anchor_element_rel_b10f47c1.g)("slot",{name:"top"})),Object(ods_html_anchor_element_rel_b10f47c1.g)("slot",null))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_rel_b10f47c1.f)(this)}}],[{key:"watchers",get:function get(){return{panel:["onPanelPropChange"],contrasted:["onContrastedPropChange"]}}}]),OsdsTabs}();osds_tab_panel_cb47a0f3_OsdsTabs.style="";var osds_tab_panel_cb47a0f3_OsdsTabBarItem=function(){function OsdsTabBarItem(hostRef){_classCallCheck(this,OsdsTabBarItem),Object(ods_html_anchor_element_rel_b10f47c1.i)(this,hostRef),this.odsTabItemSelectEvent=Object(ods_html_anchor_element_rel_b10f47c1.e)(this,"odsTabItemSelectEvent",7),this.logger=new ods_html_anchor_element_rel_b10f47c1.b("OsdsTabBarItem"),this.controller=new OdsTabBarItemController(this),this.panel=odsTabBarItemDefaultAttributes.panel,this.active=odsTabBarItemDefaultAttributes.active,this.disabled=odsTabBarItemDefaultAttributes.disabled,this.contrasted=!1}var _select;return _createClass(OsdsTabBarItem,[{key:"handleClick",value:function handleClick(){this.disabled||(this.logger.log("[handleClick]",{name:this.panel}),this.select())}},{key:"handlePanelKeyEvent",value:function handlePanelKeyEvent(event){this.logger.log("[handlePanelKeyEvent]",{event:event}),this.controller.handlePanelKeyEvent(event)}},{key:"select",value:(_select=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.odsTabItemSelectEvent.emit({panel:this.panel,tabItem:this});case 1:case"end":return _context.stop()}}),_callee,this)}))),function select(){return _select.apply(this,arguments)})},{key:"beforeInit",value:function beforeInit(){var tabs=this.el.closest("osds-tabs");tabs&&tabs.hasAttribute("contrasted")&&(this.contrasted=!0)}},{key:"componentWillLoad",value:function componentWillLoad(){this.beforeInit()}},{key:"getTabIndex",value:function getTabIndex(){return this.controller.getTabIndex(this.el.getAttribute("tabindex")||0)}},{key:"render",value:function render(){var _this=this;return Object(ods_html_anchor_element_rel_b10f47c1.g)(ods_html_anchor_element_rel_b10f47c1.a,Object.assign({},{role:"tab",tabIndex:this.getTabIndex(),active:this.active,onKeyDown:function onKeyDown(event){return _this.handlePanelKeyEvent(event)}}),Object(ods_html_anchor_element_rel_b10f47c1.g)("slot",null))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_rel_b10f47c1.f)(this)}}]),OsdsTabBarItem}();osds_tab_panel_cb47a0f3_OsdsTabBarItem.style=":host{cursor:pointer;white-space:nowrap;padding:var(--ods-size-inset-04) var(--ods-size-inset-06);margin:0 var(--ods-size-inset-05);border-bottom-width:2px;border-bottom-style:solid}:host([disabled]){cursor:not-allowed}:host{font-family:var(--ods-font-family);font-size:var(--ods-typo-size-03);line-height:var(--ods-typo-size-04);font-weight:var(--ods-typo-weight-semibold)}:host{color:var(--ods-color-primary-500);border-bottom-color:transparent}:host(:not([disabled]):hover){color:var(--ods-color-primary-700);border-bottom-color:var(--ods-color-primary-700)}:host([active]){border-bottom-color:inherit}:host(:focus-visible){outline:2px gray dotted}:host([disabled]){opacity:0.5}:host([contrasted]){color:var(--ods-color-primary-000)}:host([contrasted]:not([disabled]):hover){border-bottom-color:var(--ods-color-primary-100);color:var(--ods-color-primary-100)}:host([contrasted][active]:hover){border-bottom-color:var(--ods-color-primary-100)}:host([contrasted][active]){border-bottom-color:var(--ods-color-primary-000)}";var osds_tab_panel_cb47a0f3_OsdsTabBar=function(){function OsdsTabBar(hostRef){_classCallCheck(this,OsdsTabBar),Object(ods_html_anchor_element_rel_b10f47c1.i)(this,hostRef),this.controller=new OdsTabBarController(this)}return _createClass(OsdsTabBar,[{key:"render",value:function render(){return Object(ods_html_anchor_element_rel_b10f47c1.g)(ods_html_anchor_element_rel_b10f47c1.a,Object.assign({},{role:"tablist"}),Object(ods_html_anchor_element_rel_b10f47c1.g)("slot",null))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_rel_b10f47c1.f)(this)}}]),OsdsTabBar}();osds_tab_panel_cb47a0f3_OsdsTabBar.style=":host{display:flex;transition:opacity 0.3s}";var osds_tab_panel_cb47a0f3_OsdsTabsPanel=function(){function OsdsTabsPanel(hostRef){_classCallCheck(this,OsdsTabsPanel),Object(ods_html_anchor_element_rel_b10f47c1.i)(this,hostRef),this.controller=new OdsTabPanelController(this),this.active=odsTabPanelDefaultAttributes.active,this.name=odsTabPanelDefaultAttributes.name}return _createClass(OsdsTabsPanel,[{key:"render",value:function render(){return Object(ods_html_anchor_element_rel_b10f47c1.g)(ods_html_anchor_element_rel_b10f47c1.a,Object.assign({},{role:"tabpanel"}),Object(ods_html_anchor_element_rel_b10f47c1.g)("slot",null))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_rel_b10f47c1.f)(this)}}]),OsdsTabsPanel}();osds_tab_panel_cb47a0f3_OsdsTabsPanel.style=":host{padding:var(--ods-size-inset-06);display:block}:host(:not([active])){display:none}"}}]);