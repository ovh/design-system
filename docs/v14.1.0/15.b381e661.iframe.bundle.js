(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"../../libraries/cdk/dev/dist/esm/ocdk-surface-select-example_3.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ocdk_surface_select_example",(function(){return OcdkSurfaceSelectExample})),__webpack_require__.d(__webpack_exports__,"ocdk_surface_select_item_example",(function(){return OcdkSurfaceSelectItemExample})),__webpack_require__.d(__webpack_exports__,"ocdk_surface_tooltip_example",(function(){return OcdkSurfaceTooltipExample}));__webpack_require__("../../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../../node_modules/core-js/modules/es.string.anchor.js"),__webpack_require__("../../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.define-property.js");var _index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../libraries/cdk/dev/dist/esm/index-c3b9b39f.js"),_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../libraries/cdk/dev/dist/esm/ocdk-window-69bc2c33.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function ocdkSurfaceGet(){return customElements.get("ocdk-surface")}function ocdkIsSurface(element){return!!element&&!!element.tagName&&"ocdk-surface"===element.tagName.toLowerCase()&&!!ocdkSurfaceGet()}function ocdkDefineCustomElements(){"undefined"!=typeof customElements&&!ocdkSurfaceGet()&&function ocdkSurfaceDefine(){"undefined"!=typeof customElements&&customElements.define("ocdk-surface",_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.e)}()}ocdkDefineCustomElements();var OcdkSurfaceSelectExample=function(){function OcdkSurfaceSelectExample(hostRef){_classCallCheck(this,OcdkSurfaceSelectExample),Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.g)(this,hostRef),this.value="",this.position=_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.d.BOTTOM,this.opened=!1,this.animation=null,this.debug=!1,this.surface=void 0,this.uniqueId=OcdkSurfaceSelectExample.totalIds++,this.logger=new _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.a("OcdkSurfaceSelectExample #"+this.uniqueId),this.dirty=!1}return _createClass(OcdkSurfaceSelectExample,[{key:"onItemSelection",value:function onItemSelection(event){var _a,details=event.detail;this.logger.log("[onItemSelection]","one item selected",{details:details}),this.value=details.value,null===(_a=this.surface)||void 0===_a||_a.close()}},{key:"onPositionChange",value:function onPositionChange(){this.syncPosition()}},{key:"checkForClickOutside",value:function checkForClickOutside(ev){var _a;!function ocdkAssertEventTargetIsNode(e){if(!e||!("nodeType"in e))throw new Error("OCDK: manipulation of non node event target.")}(ev.target),this.dirty&&!this.el.contains(ev.target)&&(this.logger.log("[checkForClickOutside]",ev),null===(_a=this.surface)||void 0===_a||_a.close())}},{key:"componentDidLoad",value:function componentDidLoad(){this.surface&&(this.surface.opened=this.opened)}},{key:"openedChanged",value:function openedChanged(opened){this.surface&&(this.surface.opened=opened)}},{key:"render",value:function render(){var _a,_this=this,debugHTML=this.debug?Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)("div",{style:{fontSize:"0.75rem",color:"#bbbbbb",position:"absolute",left:"10px"}},"debug: #",this.uniqueId,' - value: "',this.value,'"'):"";return Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.a,null,Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)("div",{class:"trigger",onClick:this.handleTriggerClick.bind(this),ref:function ref(el){_this.anchor=el,_this.syncReferences()}},debugHTML,Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",{name:"trigger"})),Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)("ocdk-surface",{animation:null!==(_a=this.animation)&&void 0!==_a?_a:"slipping",animated:"none"!==this.animation,corners:[_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.BOTTOM_START,_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_START],ref:function ref(el){ocdkIsSurface(el)&&(_this.surface=el,_this.syncReferences())}},Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",null)))}},{key:"handleTriggerClick",value:function handleTriggerClick(){this.logger.log("click on trigger"),this.dirty=!0,this.surface&&(this.surface.opened=!this.surface.opened)}},{key:"syncReferences",value:function syncReferences(){this.surface&&this.anchor&&this.surface.setAnchorElement(this.anchor),this.syncPosition()}},{key:"syncPosition",value:function syncPosition(){if(this.logger.log("[syncPosition]",{position:this.position.toUpperCase()}),this.surface)switch(this.position.toUpperCase()){case _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.d.TOP:this.surface.setAnchorCorner(_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_LEFT),this.surface.setOriginCorner(_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.BOTTOM_LEFT);break;case _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.d.BOTTOM:this.surface.setCornerPoints({anchor:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.BOTTOM_LEFT,origin:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_LEFT});break;default:break;case _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.d.LEFT:this.surface.setCornerPoints({anchor:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_LEFT,origin:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_RIGHT});break;case _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.d.RIGHT:this.surface.setCornerPoints({anchor:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_RIGHT,origin:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_LEFT})}}},{key:"el",get:function get(){return Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)}}],[{key:"watchers",get:function get(){return{opened:["openedChanged"]}}}]),OcdkSurfaceSelectExample}();OcdkSurfaceSelectExample.totalIds=0,OcdkSurfaceSelectExample.style=':host{display:inline-block;position:relative;text-align:initial;padding:0;width:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background:#0d4aa9;margin:8px;border-radius:4px;font-family:"Source Sans Pro", "Trebuchet MS", Arial, "Segoe UI", sans-serif;font-size:1rem;color:white}slot[name=trigger]::slotted(*){overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600;padding:10px}:host(:hover){background:#2359ad}ocdk-surface{width:200px;max-height:300px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:2px;background:white;color:black;box-shadow:rgba(0, 0, 0, 0.2) 0 5px 5px -3px, rgba(0, 0, 0, 0.14) 0 8px 10px 1px, rgba(0, 0, 0, 0.12) 0 3px 14px 2px}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}';var OcdkSurfaceSelectItemExample=function(){function OcdkSurfaceSelectItemExample(hostRef){_classCallCheck(this,OcdkSurfaceSelectItemExample),Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.g)(this,hostRef),this.ocdkSurfaceSelectItemExampleClick=Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.c)(this,"ocdkSurfaceSelectItemExampleClick",7),this.value="",this.uniqueId=OcdkSurfaceSelectItemExample.totalIds++,this.logger=new _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.a("OcdkSurfaceSelectItemExample #"+this.uniqueId)}return _createClass(OcdkSurfaceSelectItemExample,[{key:"onCLick",value:function onCLick(){this.logger.log("onCLick","send value"),this.ocdkSurfaceSelectItemExampleClick.emit({item:this,value:this.value})}},{key:"render",value:function render(){return Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.a,null,Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",null))}},{key:"el",get:function get(){return Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)}}]),OcdkSurfaceSelectItemExample}();OcdkSurfaceSelectItemExample.totalIds=0,OcdkSurfaceSelectItemExample.style=":host{display:block;padding:3px}:host(:hover){background:#79aad9}";ocdkDefineCustomElements();var OcdkSurfaceTooltipExample=function(){function OcdkSurfaceTooltipExample(hostRef){_classCallCheck(this,OcdkSurfaceTooltipExample),Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.g)(this,hostRef),this.value="",this.position=_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.c.BOTTOM,this.surface=void 0,this.uniqueId=OcdkSurfaceTooltipExample.totalIds++,this.logger=new _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.a("OcdkSurfaceTooltipExample #"+this.uniqueId),this.leaveDebounce=0}return _createClass(OcdkSurfaceTooltipExample,[{key:"onPositionChange",value:function onPositionChange(){this.syncPosition()}},{key:"render",value:function render(){var _this2=this;return Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.a,{onMouseEnter:this.debounce(this.handleMouseEnter,500),onMouseLeave:this.debounce(this.handleMouseLeave),ref:function ref(el){_this2.anchor=el,_this2.syncReferences()}},Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",null),Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.e)("ocdk-surface",{animation:"scaling",ref:function ref(el){ocdkIsSurface(el)&&(_this2.surface=el,_this2.syncReferences())}},this.value))}},{key:"handleMouseEnter",value:function handleMouseEnter(){this.logger.log("hover on trigger"),clearTimeout(this.leaveDebounce),this.leaveDebounce=0,this.surface&&(this.surface.opened=!0)}},{key:"debounce",value:function debounce(func){var _this3=this,timeout=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(_this3.leaveDebounce),_this3.leaveDebounce=0,_this3.leaveDebounce=setTimeout((function(){func.apply(_this3,args)}),timeout)}}},{key:"handleMouseLeave",value:function handleMouseLeave(){this.logger.log("hover out from trigger"),this.surface&&(this.surface.opened=!1)}},{key:"syncReferences",value:function syncReferences(){this.surface&&this.anchor&&this.surface.setAnchorElement(this.anchor),this.syncPosition()}},{key:"syncPosition",value:function syncPosition(){if(this.logger.log("[syncPosition]",{position:this.position.toUpperCase()}),this.surface)switch(this.position.toUpperCase()){case _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.c.TOP:this.surface.setAnchorCorner(_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_LEFT),this.surface.setOriginCorner(_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.BOTTOM_LEFT);break;case _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.c.BOTTOM:this.surface.setCornerPoints({anchor:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.BOTTOM_LEFT,origin:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_LEFT});break;default:break;case _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.c.LEFT:this.surface.setCornerPoints({anchor:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_LEFT,origin:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_RIGHT});break;case _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.c.RIGHT:this.surface.setCornerPoints({anchor:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_RIGHT,origin:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_LEFT});break;case _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.c.BOTTOM_CENTER:this.surface.setCornerPoints({anchor:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.BOTTOM_CENTER,origin:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_CENTER});break;case _ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.c.TOP_CENTER:this.surface.setCornerPoints({anchor:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.TOP_CENTER,origin:_ocdk_window_69bc2c33_js__WEBPACK_IMPORTED_MODULE_5__.f.BOTTOM_CENTER})}}},{key:"el",get:function get(){return Object(_index_c3b9b39f_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)}}]),OcdkSurfaceTooltipExample}();OcdkSurfaceTooltipExample.totalIds=0,OcdkSurfaceTooltipExample.style=":host{display:inline-block;position:relative;text-align:initial;padding:0;}ocdk-surface{background:#8686d2;box-shadow:rgba(0, 0, 0, 0.2) 0 5px 5px -3px, rgba(0, 0, 0, 0.14) 0 8px 10px 1px, rgba(0, 0, 0, 0.12) 0 3px 14px 2px;border-radius:10px;padding:10px}"}}]);