(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"../../stencil/components/checkbox/dist/esm/osds-checkbox.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_checkbox",(function(){return osds_checkbox_5381a206_OsdsCheckbox}));__webpack_require__("../../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../../node_modules/core-js/modules/es.object.define-property.js");var ods_html_anchor_element_rel_7d46f92e=__webpack_require__("../../stencil/components/checkbox/dist/esm/ods-html-anchor-element-rel-7d46f92e.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var osds_checkbox_5381a206_OdsCheckboxController=function(_OdsComponentControll){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(OdsCheckboxController,_OdsComponentControll);var _beforePessimisticToggle,_afterPessimisticToggle,_toggleCheck,_handleToggleByKeyEvent,_handleToggleByClick,_super=_createSuper(OdsCheckboxController);function OdsCheckboxController(component){var _this;return _classCallCheck(this,OdsCheckboxController),(_this=_super.call(this,component)).logger=new ods_html_anchor_element_rel_7d46f92e.c("OdsCheckboxController"),_this.logger.log("OdsCheckboxController"),_this}return _createClass(OdsCheckboxController,[{key:"afterInit",value:function afterInit(){this.component.checkboxableComponent?this.component.checkboxableComponent.setAttribute("tabindex","-1"):this.logger.warn("you must place a checkboxable element inside the checkbox component.\n          (html input checkbox or any html component that accepts checked attribute)"),this.component.propagateCheckedToChild(this.component.checked),this.component.propagateDisabledToChild(this.component.disabled)}},{key:"getTabIndex",value:function getTabIndex(){return this.component.disabled?-1:this.component.tabindex}},{key:"handleToggleByClick",value:(_handleToggleByClick=_asyncToGenerator(regeneratorRuntime.mark((function _callee(event){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return this.logger.log("[checkbox="+this.component.value+"]","click event",{event:event}),event.preventDefault(),_context.next=4,this.toggleCheck();case 4:case"end":return _context.stop()}}),_callee,this)}))),function handleToggleByClick(_x){return _handleToggleByClick.apply(this,arguments)})},{key:"handleToggleByKeyEvent",value:(_handleToggleByKeyEvent=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(event){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(this.logger.log("[checkbox="+this.component.value+"]","key event",{event:event}),"Space"!==event.code&&!event.code.includes("Enter")){_context2.next=4;break}return _context2.next=4,this.toggleCheck();case 4:case"end":return _context2.stop()}}),_callee2,this)}))),function handleToggleByKeyEvent(_x2){return _handleToggleByKeyEvent.apply(this,arguments)})},{key:"onBlur",value:function onBlur(){this.component.disabled||(this.component.hasFocus=!1,this.component.emitBlur())}},{key:"onFocus",value:function onFocus(){this.setFocus()}},{key:"propagateCheckedToChild",value:function propagateCheckedToChild(checked){this.propagateAttributeToChild({name:"checked",value:checked})}},{key:"propagateDisabledToChild",value:function propagateDisabledToChild(disabled){this.propagateAttributeToChild({name:"disabled",value:disabled})}},{key:"propagateHasFocusToChild",value:function propagateHasFocusToChild(hasFocus){this.propagateAttributeToChild({name:"has-focus",value:hasFocus})}},{key:"setFocus",value:function setFocus(){this.component.inputEl&&!this.component.disabled&&(this.component.inputEl.focus(),this.component.hasFocus=!0,this.component.emitFocus())}},{key:"setTabindex",value:function setTabindex(index){this.component.tabindex=index}},{key:"toggleCheck",value:(_toggleCheck=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(){return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(this.component.disabled){_context3.next=21;break}if(!this.component.save){_context3.next=18;break}return this.logger.log("[checkbox="+this.component.value+"]","pessimistic update"),_context3.prev=3,_context3.next=6,this.beforePessimisticToggle();case 6:this.component.checked=!this.component.checked,_context3.next=12;break;case 9:_context3.prev=9,_context3.t0=_context3.catch(3),this.logger.error("[checkbox="+this.component.value+"]","calling save failed");case 12:return _context3.prev=12,_context3.next=15,this.afterPessimisticToggle();case 15:return _context3.finish(12);case 16:_context3.next=20;break;case 18:this.logger.log("[checkbox="+this.component.value+"]","optimistic update"),this.component.checked=!this.component.checked;case 20:this.component.emitChecked();case 21:case"end":return _context3.stop()}}),_callee3,this,[[3,9,12,16]])}))),function toggleCheck(){return _toggleCheck.apply(this,arguments)})},{key:"afterPessimisticToggle",value:(_afterPessimisticToggle=_asyncToGenerator(regeneratorRuntime.mark((function _callee4(){return regeneratorRuntime.wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:if(this.component.updating=!1,this.component.emitUpdating(),_context4.prev=2,_context4.t0=this.component.afterSave,!_context4.t0){_context4.next=7;break}return _context4.next=7,this.component.afterSave({checked:this.component.checked,value:this.component.value});case 7:_context4.next=12;break;case 9:_context4.prev=9,_context4.t1=_context4.catch(2),this.logger.error("[checkbox="+this.component.value+"]","calling afterSave failed");case 12:case"end":return _context4.stop()}}),_callee4,this,[[2,9]])}))),function afterPessimisticToggle(){return _afterPessimisticToggle.apply(this,arguments)})},{key:"beforePessimisticToggle",value:(_beforePessimisticToggle=_asyncToGenerator(regeneratorRuntime.mark((function _callee5(){return regeneratorRuntime.wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:if(this.logger.log("[checkbox="+this.component.value+"]","calling save"),this.component.updating=!0,this.component.emitUpdating(),_context5.t0=this.component.beforeSave,!_context5.t0){_context5.next=7;break}return _context5.next=7,this.component.beforeSave({checked:this.component.checked,value:this.component.value});case 7:if(_context5.t1=this.component.save,!_context5.t1){_context5.next=11;break}return _context5.next=11,this.component.save({checked:this.component.checked,value:this.component.value});case 11:this.logger.log("[checkbox="+this.component.value+"]","calling save done");case 12:case"end":return _context5.stop()}}),_callee5,this)}))),function beforePessimisticToggle(){return _beforePessimisticToggle.apply(this,arguments)})},{key:"propagateAttributeToChild",value:function propagateAttributeToChild(_ref){var name=_ref.name,value=_ref.value;this.logger.log("[checkbox="+this.component.value+"]",name+" changed. update child",{value:value}),this.component.checkboxableComponent&&(value?this.component.checkboxableComponent.setAttribute(name,""):this.component.checkboxableComponent.removeAttribute(name))}}]),OdsCheckboxController}((function OdsComponentController(component){_classCallCheck(this,OdsComponentController),this.component=component})),odsCheckboxDefaultAttributes={afterSave:void 0,ariaLabel:"",ariaLabelledby:void 0,beforeSave:void 0,checked:!1,hasFocus:!1,disabled:!1,label:void 0,name:"",save:void 0,updating:!1,value:""},osds_checkbox_5381a206_OsdsCheckbox=function(){function OsdsCheckbox(hostRef){_classCallCheck(this,OsdsCheckbox),Object(ods_html_anchor_element_rel_7d46f92e.j)(this,hostRef),this.odsBlur=Object(ods_html_anchor_element_rel_7d46f92e.f)(this,"odsBlur",7),this.odsCheckedChange=Object(ods_html_anchor_element_rel_7d46f92e.f)(this,"odsCheckedChange",7),this.odsFocus=Object(ods_html_anchor_element_rel_7d46f92e.f)(this,"odsFocus",7),this.odsUpdatingChange=Object(ods_html_anchor_element_rel_7d46f92e.f)(this,"odsUpdatingChange",7),this.afterSave=odsCheckboxDefaultAttributes.afterSave,this.ariaLabel=odsCheckboxDefaultAttributes.ariaLabel,this.ariaLabelledby=odsCheckboxDefaultAttributes.ariaLabelledby,this.beforeSave=odsCheckboxDefaultAttributes.beforeSave,this.checkboxableComponent=null,this.checked=odsCheckboxDefaultAttributes.checked,this.controller=new osds_checkbox_5381a206_OdsCheckboxController(this),this.disabled=odsCheckboxDefaultAttributes.disabled,this.hasFocus=odsCheckboxDefaultAttributes.hasFocus,this.name=odsCheckboxDefaultAttributes.name,this.save=odsCheckboxDefaultAttributes.save,this.tabindex=0,this.updating=odsCheckboxDefaultAttributes.updating,this.value=odsCheckboxDefaultAttributes.value,this.inputId="ods-checkbox-"+OsdsCheckbox.checkboxIds++,this.logger=new ods_html_anchor_element_rel_7d46f92e.c("OsdsCheckbox")}var _setTabindex,_setFocus,_handleToggleByKeyEvent2,_handleToggleByClick2;return _createClass(OsdsCheckbox,[{key:"afterInit",value:function afterInit(){this.controller.afterInit()}},{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this;_asyncToGenerator(regeneratorRuntime.mark((function _callee6(){return regeneratorRuntime.wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:_this2.checkboxableComponent=_this2.hostElement.firstElementChild,_this2.afterInit();case 2:case"end":return _context6.stop()}}),_callee6)})))()}},{key:"connectedCallback",value:function connectedCallback(){console.log("2 getOdsWindow()",Object(ods_html_anchor_element_rel_7d46f92e.g)().winId),console.log("Build.isBrowser",ods_html_anchor_element_rel_7d46f92e.a.isBrowser),this.logger.log("[checkbox="+this.inputId+"]","connectedCallback")}},{key:"emitBlur",value:function emitBlur(){this.odsBlur.emit({value:this.value,focus:!1})}},{key:"emitChecked",value:function emitChecked(){this.logger.log("[checkbox="+this.inputId+"]","emit checked",{checked:this.checked}),this.odsCheckedChange.emit({checked:this.checked,value:this.value})}},{key:"emitFocus",value:function emitFocus(){this.odsFocus.emit({value:this.value,focus:!0})}},{key:"emitUpdating",value:function emitUpdating(){this.logger.log("[checkbox="+this.inputId+"]","emit updating",{updating:this.updating}),this.odsUpdatingChange.emit({updating:this.updating,value:this.value})}},{key:"getTabIndex",value:function getTabIndex(){return this.controller.getTabIndex()}},{key:"handleToggleByClick",value:(_handleToggleByClick2=_asyncToGenerator(regeneratorRuntime.mark((function _callee7(event){return regeneratorRuntime.wrap((function _callee7$(_context7){for(;;)switch(_context7.prev=_context7.next){case 0:return this.logger.log("[checkbox="+this.inputId+"]","click"),_context7.next=3,this.controller.handleToggleByClick(event);case 3:case"end":return _context7.stop()}}),_callee7,this)}))),function handleToggleByClick(_x3){return _handleToggleByClick2.apply(this,arguments)})},{key:"handleToggleByKeyEvent",value:(_handleToggleByKeyEvent2=_asyncToGenerator(regeneratorRuntime.mark((function _callee8(event){return regeneratorRuntime.wrap((function _callee8$(_context8){for(;;)switch(_context8.prev=_context8.next){case 0:return this.logger.log("[checkbox="+this.inputId+"]","key event",{event:event}),_context8.next=3,this.controller.handleToggleByKeyEvent(event);case 3:case"end":return _context8.stop()}}),_callee8,this)}))),function handleToggleByKeyEvent(_x4){return _handleToggleByKeyEvent2.apply(this,arguments)})},{key:"onBlur",value:function onBlur(){this.controller.onBlur()}},{key:"onFocus",value:function onFocus(){this.controller.onFocus()}},{key:"propagateCheckedToChild",value:function propagateCheckedToChild(checked){this.controller.propagateCheckedToChild(checked)}},{key:"propagateDisabledToChild",value:function propagateDisabledToChild(disabled){this.controller.propagateDisabledToChild(disabled)}},{key:"propagateHasFocusToChild",value:function propagateHasFocusToChild(hasFocus){this.controller.propagateHasFocusToChild(hasFocus)}},{key:"render",value:function render(){var _this3=this,checked=this.checked,disabled=this.disabled,inputId=this.inputId,name=this.name,label=this.label,ariaLabelledby=this.ariaLabelledby;return Object(ods_html_anchor_element_rel_7d46f92e.h)(ods_html_anchor_element_rel_7d46f92e.b,Object.assign({},{"aria-labelledby":label?ariaLabelledby:null,tabindex:this.getTabIndex()},{role:"checkbox","aria-checked":""+checked}),Object(ods_html_anchor_element_rel_7d46f92e.h)("label",null,Object(ods_html_anchor_element_rel_7d46f92e.h)("input",Object.assign({},{"aria-checked":""+checked,class:"checkbox__input",checked:checked,disabled:disabled,id:inputId,name:name,tabindex:"-1",type:"checkbox",ref:function ref(el){return _this3.inputEl=el}})),Object(ods_html_anchor_element_rel_7d46f92e.h)("slot",{"aria-hidden":"true"})))}},{key:"setFocus",value:(_setFocus=_asyncToGenerator(regeneratorRuntime.mark((function _callee9(){return regeneratorRuntime.wrap((function _callee9$(_context9){for(;;)switch(_context9.prev=_context9.next){case 0:this.controller.setFocus();case 1:case"end":return _context9.stop()}}),_callee9,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"setTabindex",value:(_setTabindex=_asyncToGenerator(regeneratorRuntime.mark((function _callee10(index){return regeneratorRuntime.wrap((function _callee10$(_context10){for(;;)switch(_context10.prev=_context10.next){case 0:this.controller.setTabindex(index);case 1:case"end":return _context10.stop()}}),_callee10,this)}))),function setTabindex(_x5){return _setTabindex.apply(this,arguments)})},{key:"hostElement",get:function get(){return Object(ods_html_anchor_element_rel_7d46f92e.d)(this)}}],[{key:"watchers",get:function get(){return{checked:["propagateCheckedToChild"],disabled:["propagateDisabledToChild"],hasFocus:["propagateHasFocusToChild"]}}}]),OsdsCheckbox}();osds_checkbox_5381a206_OsdsCheckbox.checkboxIds=0,osds_checkbox_5381a206_OsdsCheckbox.style=":host input{display:none}:host(:focus-visible){outline-style:dotted;outline-width:var(--ods-size-inset-02);outline-offset:var(--ods-size-inset-02)}"}}]);