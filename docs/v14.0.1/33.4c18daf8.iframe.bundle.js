(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"../../stencil/components/pagination/dist/esm/osds-pagination.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_pagination",(function(){return osds_pagination_77436e5b_OsdsPagination}));__webpack_require__("../../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../../node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.array.flat.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.define-property.js");var ods_html_anchor_element_rel_e95334ff=__webpack_require__("../../stencil/components/pagination/dist/esm/ods-html-anchor-element-rel-e95334ff.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var OdsPaginationController=function(_OdsComponentControll){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(OdsPaginationController,_OdsComponentControll);var _super=_createSuper(OdsPaginationController);function OdsPaginationController(component){return _classCallCheck(this,OdsPaginationController),_super.call(this,component)}return _createClass(OdsPaginationController,[{key:"createPageList",value:function createPageList(total,pageSelected){for(var pageList=[],i=1;i<=total;i++)pageList.push({active:!1});var startIndex=Math.max(pageSelected-2,1),endIndex=Math.min(startIndex+4,total);if(total<=5)for(var _i=0;_i<pageList.length;_i++)pageList[_i].active=!0;else{total-pageSelected<2&&(startIndex=total-4);for(var _i2=startIndex;_i2<=endIndex;_i2++)_i2==pageSelected-2&&pageSelected<total-1&&pageSelected>4&&pageSelected<total-2||_i2==pageSelected+2&&pageSelected<total-3&&_i2>5||(pageList[_i2-1].active=!0);startIndex>1&&(pageList[0].active=!0),endIndex<total&&(pageList[total-1].active=!0)}return pageList}},{key:"handlePreviousClick",value:function handlePreviousClick(page){this.setPageIndex(page-1)}},{key:"handleNextClick",value:function handleNextClick(page){this.setPageIndex(page+1)}},{key:"handlePageClick",value:function handlePageClick(page){this.setPageIndex(page)}},{key:"handlePreviousKeyDown",value:function handlePreviousKeyDown(event,page){this.component.current>1&&this.onKeyDown(event,page-1)}},{key:"handleNextKeyDown",value:function handleNextKeyDown(event,page,pageList){this.component.current<pageList.length&&this.onKeyDown(event,page+1)}},{key:"handlePageKeyDown",value:function handlePageKeyDown(event,page){this.onKeyDown(event,page)}},{key:"onKeyDown",value:function onKeyDown(event,page){13!==event.keyCode&&32!==event.keyCode||this.setPageIndex(page)}},{key:"setPageIndex",value:function setPageIndex(current){this.component.current=current}}]),OdsPaginationController}((function OdsComponentController(component){_classCallCheck(this,OdsComponentController),this.component=component})),odsPaginationDefaultAttributes={disabled:!1,current:1,total:1},osds_pagination_77436e5b_OsdsPagination=function(){function OsdsPagination(hostRef){_classCallCheck(this,OsdsPagination),Object(ods_html_anchor_element_rel_e95334ff.o)(this,hostRef),this.odsPaginationChanged=Object(ods_html_anchor_element_rel_e95334ff.f)(this,"odsPaginationChanged",7),this.logger=new ods_html_anchor_element_rel_e95334ff.c("OsdsPagination"),this.controller=new OdsPaginationController(this),this.current=odsPaginationDefaultAttributes.current,this.total=odsPaginationDefaultAttributes.total,this.disabled=odsPaginationDefaultAttributes.disabled}var _setPageIndex,_onCurrentChange,_componentDidUpdate;return _createClass(OsdsPagination,[{key:"componentDidUpdate",value:(_componentDidUpdate=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var _a,selectedPage;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:selectedPage=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(".selectedpage"),document.activeElement===document.body&&selectedPage&&selectedPage.focus();case 2:case"end":return _context.stop()}}),_callee,this)}))),function componentDidUpdate(){return _componentDidUpdate.apply(this,arguments)})},{key:"onCurrentChange",value:(_onCurrentChange=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(current,oldCurrent){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.logger.log("current: "+this.current+"]","current changed. emit new current",{current:current}),this.emitChange(current,oldCurrent);case 2:case"end":return _context2.stop()}}),_callee2,this)}))),function onCurrentChange(_x,_x2){return _onCurrentChange.apply(this,arguments)})},{key:"emitChange",value:function emitChange(current,oldCurrent){this.logger.debug("emit",{current:current,oldCurrent:oldCurrent}),this.odsPaginationChanged.emit({current:current,oldCurrent:oldCurrent})}},{key:"setPageIndex",value:(_setPageIndex=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(current){return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:this.controller.setPageIndex(current);case 1:case"end":return _context3.stop()}}),_callee3,this)}))),function setPageIndex(_x3){return _setPageIndex.apply(this,arguments)})},{key:"handlePreviousClick",value:function handlePreviousClick(page){this.controller.handlePreviousClick(page)}},{key:"handleNextClick",value:function handleNextClick(page){this.controller.handleNextClick(page)}},{key:"handlePageClick",value:function handlePageClick(page){this.controller.handlePageClick(page)}},{key:"handlePreviousKeyDown",value:function handlePreviousKeyDown(event,page){this.controller.handlePreviousKeyDown(event,page)}},{key:"handleNextKeyDown",value:function handleNextKeyDown(event,page,pageList){this.controller.handleNextKeyDown(event,page,pageList)}},{key:"handlePageKeyDown",value:function handlePageKeyDown(event,page){this.controller.handlePageKeyDown(event,page)}},{key:"renderArrows",value:function renderArrows(direction,pageList){var _this=this,disabled=this.disabled,arrowIcon="left"===direction?ods_html_anchor_element_rel_e95334ff.m.CHEVRON_LEFT:ods_html_anchor_element_rel_e95334ff.m.CHEVRON_RIGHT;return Object(ods_html_anchor_element_rel_e95334ff.k)("li",{class:"arrows"},Object(ods_html_anchor_element_rel_e95334ff.k)("osds-button",{variant:ods_html_anchor_element_rel_e95334ff.d.ghost,color:ods_html_anchor_element_rel_e95334ff.g.primary,disabled:disabled||"left"===direction&&1===this.current||"right"===direction&&this.current>=pageList.length,onKeyDown:function onKeyDown(event){"left"===direction?_this.handlePreviousKeyDown(event,Number(_this.current)):_this.handleNextKeyDown(event,Number(_this.current),pageList)},onClick:function onClick(){"left"===direction?_this.handlePreviousClick(Number(_this.current)):_this.handleNextClick(Number(_this.current))},size:ods_html_anchor_element_rel_e95334ff.h.sm},Object(ods_html_anchor_element_rel_e95334ff.k)("osds-icon",{size:ods_html_anchor_element_rel_e95334ff.i.sm,name:arrowIcon,color:ods_html_anchor_element_rel_e95334ff.g.primary,class:"left"===direction&&1===this.current||"right"===direction&&this.current>=pageList.length?"disabled":""})))}},{key:"renderEllipsis",value:function renderEllipsis(){return Object(ods_html_anchor_element_rel_e95334ff.k)("li",null,Object(ods_html_anchor_element_rel_e95334ff.k)("osds-button",{disabled:!0,variant:ods_html_anchor_element_rel_e95334ff.d.ghost,color:ods_html_anchor_element_rel_e95334ff.g.primary},Object(ods_html_anchor_element_rel_e95334ff.k)("osds-text",{size:ods_html_anchor_element_rel_e95334ff.j._500,color:ods_html_anchor_element_rel_e95334ff.g.primary,class:"ellipsis"},"…")))}},{key:"render",value:function render(){var _this2=this,total=this.total,disabled=this.disabled,pageList=this.controller.createPageList(total,this.current);return Object(ods_html_anchor_element_rel_e95334ff.k)(ods_html_anchor_element_rel_e95334ff.b,null,Object(ods_html_anchor_element_rel_e95334ff.k)("ul",null,this.renderArrows("left",pageList),pageList.filter((function(page){return page.active})).map((function(page){var pageId=pageList.indexOf(page)+1;return Object(ods_html_anchor_element_rel_e95334ff.k)(ods_html_anchor_element_rel_e95334ff.a,null,pageList.length>6&&pageList.length-_this2.current>3&&pageId===pageList.length&&_this2.renderEllipsis(),Object(ods_html_anchor_element_rel_e95334ff.k)("li",null,Object(ods_html_anchor_element_rel_e95334ff.k)("osds-button",{key:pageId,class:_this2.current===pageId?"selectedpage":"",variant:_this2.current===pageId?ods_html_anchor_element_rel_e95334ff.d.flat:ods_html_anchor_element_rel_e95334ff.d.ghost,disabled:disabled,color:ods_html_anchor_element_rel_e95334ff.g.primary,size:ods_html_anchor_element_rel_e95334ff.h.sm,onKeyDown:function onKeyDown(event){return _this2.handlePageKeyDown(event,Number(pageId))},onClick:function onClick(){return _this2.handlePageClick(Number(pageId))}},pageId)),pageList.length>6&&_this2.current>4&&1===pageId&&_this2.renderEllipsis())})),this.renderArrows("right",pageList)))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_rel_e95334ff.l)(this)}}],[{key:"watchers",get:function get(){return{current:["onCurrentChange"]}}}]),OsdsPagination}();osds_pagination_77436e5b_OsdsPagination.style=":host{cursor:pointer;display:inline-block;position:relative;text-align:left}:host ul{list-style-type:none}:host li{display:inline;list-style-type:none;white-space:nowrap}:host .ellipsis,:host .disabled{cursor:not-allowed;pointer-events:auto}:host(:not([disabled]):focus-visible){outline-style:dotted;outline-width:var(--ods-size-inset-02);outline-offset:var(--ods-size-inset-02)}:host([disabled]){opacity:0.5;cursor:not-allowed}:host([disabled]) osds-button::part(button){cursor:not-allowed}:host osds-icon{background-color:var(--ods-color-primary-800)}:host osds-button.selectedpage::part(button){background-color:var(--ods-color-primary-800);color:white}:host{--ods-size-button-height:var(--ods-size-pagination-md-height);--ods-size-button-border-radius:var(--ods-size-border-radius-01);--ods-size-button-padding-y:0;--ods-size-button-padding-x:0}osds-button::part(button){width:calc(2.25rem * var(--ods-size-ratio))}.arrows{padding-left:var(--ods-size-pagination-md-padding-x);padding-right:var(--ods-size-pagination-md-padding-x)}.arrows osds-icon{vertical-align:middle}"}}]);