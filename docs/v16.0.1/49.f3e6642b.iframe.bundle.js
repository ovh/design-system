/*! For license information please see 49.f3e6642b.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"../components/textarea/dist/esm/osds-textarea.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"osds_textarea",(function(){return osds_textarea_d3c977b5_OsdsTextArea}));__webpack_require__("../../node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.values.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js");var ODS_TEXTAREA_SIZE,ods_html_anchor_element_target_359ac839=__webpack_require__("../components/textarea/dist/esm/ods-html-anchor-element-target-359ac839.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}!function(ODS_TEXTAREA_SIZE){ODS_TEXTAREA_SIZE.md="md"}(ODS_TEXTAREA_SIZE||(ODS_TEXTAREA_SIZE={}));var ODS_THEME_COLOR_HUE,ODS_THEME_COLOR_INTENT,ODS_THEME_SIZE,ODS_THEME_TYPOGRAPHY_LEVEL,ODS_THEME_TYPOGRAPHY_SIZE;Object.freeze(Object.values(ODS_TEXTAREA_SIZE));!function(ODS_THEME_COLOR_HUE){ODS_THEME_COLOR_HUE._000="000",ODS_THEME_COLOR_HUE._050="050",ODS_THEME_COLOR_HUE._075="075",ODS_THEME_COLOR_HUE._100="100",ODS_THEME_COLOR_HUE._200="200",ODS_THEME_COLOR_HUE._300="300",ODS_THEME_COLOR_HUE._400="400",ODS_THEME_COLOR_HUE._500="500",ODS_THEME_COLOR_HUE._600="600",ODS_THEME_COLOR_HUE._700="700",ODS_THEME_COLOR_HUE._800="800",ODS_THEME_COLOR_HUE._900="900",ODS_THEME_COLOR_HUE._1000="1000"}(ODS_THEME_COLOR_HUE||(ODS_THEME_COLOR_HUE={})),Object.freeze(Object.values(ODS_THEME_COLOR_HUE)),function(ODS_THEME_COLOR_INTENT){ODS_THEME_COLOR_INTENT.accent="accent",ODS_THEME_COLOR_INTENT.default="default",ODS_THEME_COLOR_INTENT.error="error",ODS_THEME_COLOR_INTENT.info="info",ODS_THEME_COLOR_INTENT.primary="primary",ODS_THEME_COLOR_INTENT.promotion="promotion",ODS_THEME_COLOR_INTENT.success="success",ODS_THEME_COLOR_INTENT.text="text",ODS_THEME_COLOR_INTENT.warning="warning"}(ODS_THEME_COLOR_INTENT||(ODS_THEME_COLOR_INTENT={})),Object.freeze(Object.values(ODS_THEME_COLOR_INTENT)),function(ODS_THEME_SIZE){ODS_THEME_SIZE._100="100",ODS_THEME_SIZE._200="200",ODS_THEME_SIZE._300="300",ODS_THEME_SIZE._400="400",ODS_THEME_SIZE._500="500",ODS_THEME_SIZE._600="600",ODS_THEME_SIZE._700="700",ODS_THEME_SIZE._800="800",ODS_THEME_SIZE._900="900"}(ODS_THEME_SIZE||(ODS_THEME_SIZE={})),Object.freeze(Object.values(ODS_THEME_SIZE)),function(ODS_THEME_TYPOGRAPHY_LEVEL){ODS_THEME_TYPOGRAPHY_LEVEL.body="body",ODS_THEME_TYPOGRAPHY_LEVEL.button="button",ODS_THEME_TYPOGRAPHY_LEVEL.caption="caption",ODS_THEME_TYPOGRAPHY_LEVEL.heading="heading",ODS_THEME_TYPOGRAPHY_LEVEL.subheading="subheading"}(ODS_THEME_TYPOGRAPHY_LEVEL||(ODS_THEME_TYPOGRAPHY_LEVEL={})),Object.freeze(Object.values(ODS_THEME_TYPOGRAPHY_LEVEL)),function(ODS_THEME_TYPOGRAPHY_SIZE){ODS_THEME_TYPOGRAPHY_SIZE._100="100",ODS_THEME_TYPOGRAPHY_SIZE._200="200",ODS_THEME_TYPOGRAPHY_SIZE._300="300",ODS_THEME_TYPOGRAPHY_SIZE._400="400",ODS_THEME_TYPOGRAPHY_SIZE._500="500",ODS_THEME_TYPOGRAPHY_SIZE._600="600",ODS_THEME_TYPOGRAPHY_SIZE._700="700",ODS_THEME_TYPOGRAPHY_SIZE._800="800"}(ODS_THEME_TYPOGRAPHY_SIZE||(ODS_THEME_TYPOGRAPHY_SIZE={})),Object.freeze(Object.values(ODS_THEME_TYPOGRAPHY_SIZE));var DEFAULT_ATTRIBUTE=Object.freeze({ariaLabel:null,ariaLabelledby:void 0,color:ODS_THEME_COLOR_INTENT.text,cols:void 0,contrasted:!1,defaultValue:void 0,disabled:!1,error:!1,errorStateControl:void 0,formControl:void 0,hasFocus:!1,inline:!1,name:void 0,placeholder:void 0,readOnly:!1,required:!1,resizable:!0,rows:void 0,size:ODS_TEXTAREA_SIZE.md,spellcheck:!1,textAreaId:void 0,value:""}),osds_textarea_d3c977b5_OdsTextAreaController=function(){function OdsTextAreaController(component){_classCallCheck(this,OdsTextAreaController),this.logger=new ods_html_anchor_element_target_359ac839.b("OdsTextAreaController"),this.component=component}return _createClass(OdsTextAreaController,[{key:"handleTextAreaValue",value:function handleTextAreaValue(newValue){this.component.disabled||""!==newValue||(this.component.value=newValue)}},{key:"getTextAreaValidity",value:function getTextAreaValidity(textAreaEl){return Object.assign({},textAreaEl?Object.assign(Object.assign({},function OdsTextAreaGetValidityState(validityState){return validityState?{valid:validityState.valid,valueMissing:validityState.valueMissing,customError:validityState.customError}:{valid:!0,valueMissing:!1,customError:!1}}(textAreaEl.validity)),{invalid:!textAreaEl.validity.valid}):{valid:!0,valueMissing:!1,invalid:!1,customError:!1})}},{key:"onInput",value:function onInput(event){var _a;event.preventDefault(),this.logger.debug("oninput",null===(_a=this.component.textInputEl)||void 0===_a?void 0:_a.value),this.component.textInputEl&&this.handleTextAreaValue(this.component.textInputEl.value)}},{key:"onBlur",value:function onBlur(){this.component.emitBlur(),this.component.hasFocus=!1}},{key:"onFocus",value:function onFocus(){this.component.emitFocus()}},{key:"onChange",value:function onChange(){var _a;this.logger.debug("onChange",null===(_a=this.component.textInputEl)||void 0===_a?void 0:_a.value)}},{key:"registerFormControl",value:function registerFormControl(formControl){this.logger.log("[textarea="+this.component.value+"]","onFormControlChange",formControl,formControl&&formControl.id),formControl&&formControl.register(this.component)}},{key:"emitValue",value:function emitValue(value,oldValue){this.logger.debug("[textarea="+this.component.value+"]","value changed",{value:value,oldValue:oldValue}),this.component.emitChange(value,oldValue)}},{key:"onDefaultValueChange",value:function onDefaultValueChange(defaultValue){this.logger.debug("[textarea="+this.component.value+"]","defaultValue",defaultValue)}},{key:"setFocus",value:function setFocus(){var el=this.component.textInputEl;el&&!this.component.disabled&&(el.focus(),this.onFocus())}},{key:"setValue",value:function setValue(){var value=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.component.textInputEl&&(this.component.textInputEl.value=value),this.component.value=value}},{key:"hasError",value:function hasError(){return this.component.error||this.getTextAreaValidity().invalid}},{key:"beforeInit",value:function beforeInit(){this.registerFormControl(this.component.formControl),this.emitValue(this.component.value),this.onDefaultValueChange(this.component.defaultValue),this.component.value||(this.component.value=this.component.defaultValue||"")}},{key:"setTextAreaTabindex",value:function setTextAreaTabindex(value){this.component.textInputTabIndex=value}}]),OdsTextAreaController}(),osds_textarea_d3c977b5_OsdsTextArea=function(){function OsdsTextArea(hostRef){_classCallCheck(this,OsdsTextArea),Object(ods_html_anchor_element_target_359ac839.h)(this,hostRef),this.odsBlur=Object(ods_html_anchor_element_target_359ac839.d)(this,"odsBlur",7),this.odsFocus=Object(ods_html_anchor_element_target_359ac839.d)(this,"odsFocus",7),this.odsValueChange=Object(ods_html_anchor_element_target_359ac839.d)(this,"odsValueChange",7),this.controller=new osds_textarea_d3c977b5_OdsTextAreaController(this),this.textInputTabIndex=0,this.hasFocus=!1,this.textAreaId=DEFAULT_ATTRIBUTE.textAreaId,this.ariaLabel=DEFAULT_ATTRIBUTE.ariaLabel,this.ariaLabelledby=DEFAULT_ATTRIBUTE.ariaLabelledby,this.color=DEFAULT_ATTRIBUTE.color,this.cols=DEFAULT_ATTRIBUTE.cols,this.contrasted=DEFAULT_ATTRIBUTE.contrasted,this.defaultValue=DEFAULT_ATTRIBUTE.defaultValue,this.disabled=DEFAULT_ATTRIBUTE.disabled,this.error=DEFAULT_ATTRIBUTE.error,this.errorStateControl=DEFAULT_ATTRIBUTE.errorStateControl,this.formControl=DEFAULT_ATTRIBUTE.formControl,this.inline=DEFAULT_ATTRIBUTE.inline,this.name=DEFAULT_ATTRIBUTE.name,this.placeholder=DEFAULT_ATTRIBUTE.placeholder,this.readOnly=DEFAULT_ATTRIBUTE.readOnly,this.required=DEFAULT_ATTRIBUTE.required,this.resizable=DEFAULT_ATTRIBUTE.resizable,this.rows=DEFAULT_ATTRIBUTE.rows,this.size=DEFAULT_ATTRIBUTE.size,this.spellcheck=DEFAULT_ATTRIBUTE.spellcheck,this.value=DEFAULT_ATTRIBUTE.value}var _setTextAreaTabindex,_reset,_clear,_getValidity,_setFocus;return _createClass(OsdsTextArea,[{key:"onFormControlChange",value:function onFormControlChange(formControl){this.controller.registerFormControl(formControl)}},{key:"onDefaultValueChange",value:function onDefaultValueChange(defaultValue){this.controller.onDefaultValueChange(defaultValue)}},{key:"onInlineChange",value:function onInlineChange(inline){var _a;inline||null===(_a=this.textInputEl)||void 0===_a||_a.style.removeProperty("width")}},{key:"onValueChange",value:function onValueChange(value,oldValue){this.controller.emitValue(value,oldValue)}},{key:"componentWillLoad",value:function componentWillLoad(){this.beforeInit()}},{key:"beforeInit",value:function beforeInit(){this.controller.beforeInit()}},{key:"emitChange",value:function emitChange(value,oldValue){this.odsValueChange.emit({value:null==value?value:""+value,oldValue:null==oldValue?oldValue:""+oldValue,validity:this.controller.getTextAreaValidity()})}},{key:"emitBlur",value:function emitBlur(){this.odsBlur.emit()}},{key:"emitFocus",value:function emitFocus(){this.odsFocus.emit()}},{key:"onBlur",value:function onBlur(){this.controller.onBlur()}},{key:"onInput",value:function onInput(event){this.controller.onInput(event)}},{key:"onChange",value:function onChange(){this.controller.onChange()}},{key:"onFocus",value:function onFocus(){this.controller.onFocus(),this.setFocus.bind(this)()}},{key:"setFocus",value:(_setFocus=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){var _a;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:null===(_a=this.textInputEl)||void 0===_a||_a.focus(),this.hasFocus=!0;case 2:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"getValidity",value:(_getValidity=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(){return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",this.controller.getTextAreaValidity());case 1:case"end":return _context2.stop()}}),_callee2,this)}))),function getValidity(){return _getValidity.apply(this,arguments)})},{key:"clear",value:(_clear=_asyncToGenerator(_regeneratorRuntime().mark((function _callee3(){return _regeneratorRuntime().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:this.controller.setValue();case 1:case"end":return _context3.stop()}}),_callee3,this)}))),function clear(){return _clear.apply(this,arguments)})},{key:"reset",value:(_reset=_asyncToGenerator(_regeneratorRuntime().mark((function _callee4(){return _regeneratorRuntime().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:this.controller.setValue(this.defaultValue||"");case 1:case"end":return _context4.stop()}}),_callee4,this)}))),function reset(){return _reset.apply(this,arguments)})},{key:"setTextAreaTabindex",value:(_setTextAreaTabindex=_asyncToGenerator(_regeneratorRuntime().mark((function _callee5(value){return _regeneratorRuntime().wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:this.controller.setTextAreaTabindex(value);case 1:case"end":return _context5.stop()}}),_callee5,this)}))),function setTextAreaTabindex(_x){return _setTextAreaTabindex.apply(this,arguments)})},{key:"render",value:function render(){var _this=this,textAreaId=this.textAreaId,ariaLabel=this.ariaLabel,ariaLabelledby=this.ariaLabelledby,cols=this.cols,disabled=this.disabled,hasFocus=this.hasFocus,textInputTabIndex=this.textInputTabIndex,name=this.name,placeholder=this.placeholder,readOnly=this.readOnly,required=this.required,rows=this.rows,spellcheck=this.spellcheck,value=this.value,labelId=ariaLabelledby||textAreaId+"-label";return Object(ods_html_anchor_element_target_359ac839.f)(ods_html_anchor_element_target_359ac839.a,Object.assign({},{class:{"ods-error":Boolean(this.controller.hasError())},tabindex:textInputTabIndex,hasFocus:hasFocus}),Object(ods_html_anchor_element_target_359ac839.f)("textarea",Object.assign({},{ariaLabel:ariaLabel,ariaLabelledby:labelId||null,disabled:disabled,id:textAreaId,name:name,onBlur:function onBlur(){return _this.onBlur()},onChange:function onChange(){return _this.onChange()},onFocus:function onFocus(){return _this.onFocus()},onInput:function onInput(e){return _this.onInput(e)},placeholder:placeholder,readOnly:readOnly,ref:function ref(el){return _this.textInputEl=el},required:required,tabindex:"-1",cols:cols,rows:rows,defaultValue:value},{spellcheck:spellcheck})))}},{key:"el",get:function get(){return Object(ods_html_anchor_element_target_359ac839.e)(this)}}],[{key:"watchers",get:function get(){return{formControl:["onFormControlChange"],defaultValue:["onDefaultValueChange"],inline:["onInlineChange"],value:["onValueChange"]}}}]),OsdsTextArea}();osds_textarea_d3c977b5_OsdsTextArea.style=":host input{font-family:inherit;font-size:100%;line-height:1.15;margin:0;overflow:visible}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=checkbox],:host [type=radio]{box-sizing:border-box;padding:0}:host{outline:none}:host(:host){display:flex}:host(:host) textarea{width:100%}:host([inline]){display:inline-flex;width:var(--width)}textarea{border-style:solid;position:relative;text-align:var(--ods-textarea-text-align, left)}:host(:not([resizable])) textarea{resize:none}:host textarea{outline:none}:host(:not([variant]):not([color])) textarea{color:var(--ods-color-default-500);background-color:var(--ods-color-default-000);border-color:var(--ods-color-primary-200)}:host(:not([variant]):not([color])) textarea::-moz-placeholder{color:var(--ods-color-default-500)}:host(:not([variant]):not([color])) textarea::placeholder{color:var(--ods-color-default-500)}:host(:not([variant]):not([color])) textarea:active,:host(:not([variant]):not([color])) textarea:focus{background-color:var(--ods-color-primary-100)}:host(:not([variant]):not([color])[error]) textarea{border-color:var(--ods-color-error-500)}:host(:not([variant]):not([color])[error]) textarea:focus{border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=default]) textarea{color:var(--ods-color-default-500);background-color:var(--ods-color-default-000);border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=default]) textarea::-moz-placeholder{color:var(--ods-color-default-500)}:host(:not([variant])[color^=default]) textarea::placeholder{color:var(--ods-color-default-500)}:host(:not([variant])[color^=default]) textarea:active,:host(:not([variant])[color^=default]) textarea:focus{background-color:var(--ods-color-primary-100)}:host(:not([variant])[color^=default][error]) textarea{border-color:var(--ods-color-error-500)}:host(:not([variant])[color^=default][error]) textarea:focus{border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=primary]) textarea{color:var(--ods-color-primary-500);background-color:var(--ods-color-primary-000);border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=primary]) textarea::-moz-placeholder{color:var(--ods-color-primary-500)}:host(:not([variant])[color^=primary]) textarea::placeholder{color:var(--ods-color-primary-500)}:host(:not([variant])[color^=primary]) textarea:active,:host(:not([variant])[color^=primary]) textarea:focus{background-color:var(--ods-color-primary-100)}:host(:not([variant])[color^=primary][error]) textarea{border-color:var(--ods-color-error-500)}:host(:not([variant])[color^=primary][error]) textarea:focus{border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=text]) textarea{color:var(--ods-color-text-500);background-color:var(--ods-color-text-000);border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=text]) textarea::-moz-placeholder{color:var(--ods-color-text-500)}:host(:not([variant])[color^=text]) textarea::placeholder{color:var(--ods-color-text-500)}:host(:not([variant])[color^=text]) textarea:active,:host(:not([variant])[color^=text]) textarea:focus{background-color:var(--ods-color-primary-100)}:host(:not([variant])[color^=text][error]) textarea{border-color:var(--ods-color-error-500)}:host(:not([variant])[color^=text][error]) textarea:focus{border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=accent]) textarea{color:var(--ods-color-accent-500);background-color:var(--ods-color-accent-000);border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=accent]) textarea::-moz-placeholder{color:var(--ods-color-accent-500)}:host(:not([variant])[color^=accent]) textarea::placeholder{color:var(--ods-color-accent-500)}:host(:not([variant])[color^=accent]) textarea:active,:host(:not([variant])[color^=accent]) textarea:focus{background-color:var(--ods-color-primary-100)}:host(:not([variant])[color^=accent][error]) textarea{border-color:var(--ods-color-error-500)}:host(:not([variant])[color^=accent][error]) textarea:focus{border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=error]) textarea{color:var(--ods-color-error-500);background-color:var(--ods-color-error-000);border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=error]) textarea::-moz-placeholder{color:var(--ods-color-error-500)}:host(:not([variant])[color^=error]) textarea::placeholder{color:var(--ods-color-error-500)}:host(:not([variant])[color^=error]) textarea:active,:host(:not([variant])[color^=error]) textarea:focus{background-color:var(--ods-color-primary-100)}:host(:not([variant])[color^=error][error]) textarea{border-color:var(--ods-color-error-500)}:host(:not([variant])[color^=error][error]) textarea:focus{border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=warning]) textarea{color:var(--ods-color-warning-500);background-color:var(--ods-color-warning-000);border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=warning]) textarea::-moz-placeholder{color:var(--ods-color-warning-500)}:host(:not([variant])[color^=warning]) textarea::placeholder{color:var(--ods-color-warning-500)}:host(:not([variant])[color^=warning]) textarea:active,:host(:not([variant])[color^=warning]) textarea:focus{background-color:var(--ods-color-primary-100)}:host(:not([variant])[color^=warning][error]) textarea{border-color:var(--ods-color-error-500)}:host(:not([variant])[color^=warning][error]) textarea:focus{border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=success]) textarea{color:var(--ods-color-success-500);background-color:var(--ods-color-success-000);border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=success]) textarea::-moz-placeholder{color:var(--ods-color-success-500)}:host(:not([variant])[color^=success]) textarea::placeholder{color:var(--ods-color-success-500)}:host(:not([variant])[color^=success]) textarea:active,:host(:not([variant])[color^=success]) textarea:focus{background-color:var(--ods-color-primary-100)}:host(:not([variant])[color^=success][error]) textarea{border-color:var(--ods-color-error-500)}:host(:not([variant])[color^=success][error]) textarea:focus{border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=info]) textarea{color:var(--ods-color-info-500);background-color:var(--ods-color-info-000);border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=info]) textarea::-moz-placeholder{color:var(--ods-color-info-500)}:host(:not([variant])[color^=info]) textarea::placeholder{color:var(--ods-color-info-500)}:host(:not([variant])[color^=info]) textarea:active,:host(:not([variant])[color^=info]) textarea:focus{background-color:var(--ods-color-primary-100)}:host(:not([variant])[color^=info][error]) textarea{border-color:var(--ods-color-error-500)}:host(:not([variant])[color^=info][error]) textarea:focus{border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=promotion]) textarea{color:var(--ods-color-promotion-500);background-color:var(--ods-color-promotion-000);border-color:var(--ods-color-primary-200)}:host(:not([variant])[color^=promotion]) textarea::-moz-placeholder{color:var(--ods-color-promotion-500)}:host(:not([variant])[color^=promotion]) textarea::placeholder{color:var(--ods-color-promotion-500)}:host(:not([variant])[color^=promotion]) textarea:active,:host(:not([variant])[color^=promotion]) textarea:focus{background-color:var(--ods-color-primary-100)}:host(:not([variant])[color^=promotion][error]) textarea{border-color:var(--ods-color-error-500)}:host(:not([variant])[color^=promotion][error]) textarea:focus{border-color:var(--ods-color-primary-200)}:host(:not([variant])[contrasted]:not([color])) textarea{color:var(--ods-color-default-500-contrasted);background-color:transparent;border-color:var(--ods-color-default-000)}:host(:not([variant])[contrasted]:not([color])) textarea::-moz-placeholder{color:var(--ods-color-default-500-contrasted)}:host(:not([variant])[contrasted]:not([color])) textarea::placeholder{color:var(--ods-color-default-500-contrasted)}:host(:not([variant])[contrasted]:not([color])) textarea:active,:host(:not([variant])[contrasted]:not([color])) textarea:focus{background-color:hsla(var(--ods-color-default-100-list), .2)}:host(:not([variant])[contrasted][color^=default]) textarea{color:var(--ods-color-default-500-contrasted);background-color:transparent;border-color:var(--ods-color-default-000)}:host(:not([variant])[contrasted][color^=default]) textarea::-moz-placeholder{color:var(--ods-color-default-500-contrasted)}:host(:not([variant])[contrasted][color^=default]) textarea::placeholder{color:var(--ods-color-default-500-contrasted)}:host(:not([variant])[contrasted][color^=default]) textarea:active,:host(:not([variant])[contrasted][color^=default]) textarea:focus{background-color:hsla(var(--ods-color-default-100-list), .2)}:host(:not([variant])[contrasted][color^=primary]) textarea{color:var(--ods-color-primary-500-contrasted);background-color:transparent;border-color:var(--ods-color-primary-000)}:host(:not([variant])[contrasted][color^=primary]) textarea::-moz-placeholder{color:var(--ods-color-primary-500-contrasted)}:host(:not([variant])[contrasted][color^=primary]) textarea::placeholder{color:var(--ods-color-primary-500-contrasted)}:host(:not([variant])[contrasted][color^=primary]) textarea:active,:host(:not([variant])[contrasted][color^=primary]) textarea:focus{background-color:hsla(var(--ods-color-primary-100-list), .2)}:host(:not([variant])[contrasted][color^=text]) textarea{color:var(--ods-color-text-500-contrasted);background-color:transparent;border-color:var(--ods-color-text-000)}:host(:not([variant])[contrasted][color^=text]) textarea::-moz-placeholder{color:var(--ods-color-text-500-contrasted)}:host(:not([variant])[contrasted][color^=text]) textarea::placeholder{color:var(--ods-color-text-500-contrasted)}:host(:not([variant])[contrasted][color^=text]) textarea:active,:host(:not([variant])[contrasted][color^=text]) textarea:focus{background-color:hsla(var(--ods-color-text-100-list), .2)}:host(:not([variant])[contrasted][color^=accent]) textarea{color:var(--ods-color-accent-500-contrasted);background-color:transparent;border-color:var(--ods-color-accent-000)}:host(:not([variant])[contrasted][color^=accent]) textarea::-moz-placeholder{color:var(--ods-color-accent-500-contrasted)}:host(:not([variant])[contrasted][color^=accent]) textarea::placeholder{color:var(--ods-color-accent-500-contrasted)}:host(:not([variant])[contrasted][color^=accent]) textarea:active,:host(:not([variant])[contrasted][color^=accent]) textarea:focus{background-color:hsla(var(--ods-color-accent-100-list), .2)}:host(:not([variant])[contrasted][color^=error]) textarea{color:var(--ods-color-error-500-contrasted);background-color:transparent;border-color:var(--ods-color-error-000)}:host(:not([variant])[contrasted][color^=error]) textarea::-moz-placeholder{color:var(--ods-color-error-500-contrasted)}:host(:not([variant])[contrasted][color^=error]) textarea::placeholder{color:var(--ods-color-error-500-contrasted)}:host(:not([variant])[contrasted][color^=error]) textarea:active,:host(:not([variant])[contrasted][color^=error]) textarea:focus{background-color:hsla(var(--ods-color-error-100-list), .2)}:host(:not([variant])[contrasted][color^=warning]) textarea{color:var(--ods-color-warning-500-contrasted);background-color:transparent;border-color:var(--ods-color-warning-000)}:host(:not([variant])[contrasted][color^=warning]) textarea::-moz-placeholder{color:var(--ods-color-warning-500-contrasted)}:host(:not([variant])[contrasted][color^=warning]) textarea::placeholder{color:var(--ods-color-warning-500-contrasted)}:host(:not([variant])[contrasted][color^=warning]) textarea:active,:host(:not([variant])[contrasted][color^=warning]) textarea:focus{background-color:hsla(var(--ods-color-warning-100-list), .2)}:host(:not([variant])[contrasted][color^=success]) textarea{color:var(--ods-color-success-500-contrasted);background-color:transparent;border-color:var(--ods-color-success-000)}:host(:not([variant])[contrasted][color^=success]) textarea::-moz-placeholder{color:var(--ods-color-success-500-contrasted)}:host(:not([variant])[contrasted][color^=success]) textarea::placeholder{color:var(--ods-color-success-500-contrasted)}:host(:not([variant])[contrasted][color^=success]) textarea:active,:host(:not([variant])[contrasted][color^=success]) textarea:focus{background-color:hsla(var(--ods-color-success-100-list), .2)}:host(:not([variant])[contrasted][color^=info]) textarea{color:var(--ods-color-info-500-contrasted);background-color:transparent;border-color:var(--ods-color-info-000)}:host(:not([variant])[contrasted][color^=info]) textarea::-moz-placeholder{color:var(--ods-color-info-500-contrasted)}:host(:not([variant])[contrasted][color^=info]) textarea::placeholder{color:var(--ods-color-info-500-contrasted)}:host(:not([variant])[contrasted][color^=info]) textarea:active,:host(:not([variant])[contrasted][color^=info]) textarea:focus{background-color:hsla(var(--ods-color-info-100-list), .2)}:host(:not([variant])[contrasted][color^=promotion]) textarea{color:var(--ods-color-promotion-500-contrasted);background-color:transparent;border-color:var(--ods-color-promotion-000)}:host(:not([variant])[contrasted][color^=promotion]) textarea::-moz-placeholder{color:var(--ods-color-promotion-500-contrasted)}:host(:not([variant])[contrasted][color^=promotion]) textarea::placeholder{color:var(--ods-color-promotion-500-contrasted)}:host(:not([variant])[contrasted][color^=promotion]) textarea:active,:host(:not([variant])[contrasted][color^=promotion]) textarea:focus{background-color:hsla(var(--ods-color-promotion-100-list), .2)}:host([disabled]){opacity:0.5}:host textarea{border-radius:var(--ods-size-textarea-md-border-radius);padding:var(--ods-size-textarea-md-padding)}:host textarea::-moz-placeholder{font-family:var(--ods-typography-body-400-font-family);font-size:var(--ods-typography-body-400-font-size);font-style:var(--ods-typography-body-400-font-style);font-weight:var(--ods-typography-body-400-font-weight);letter-spacing:var(--ods-typography-body-400-letter-spacing);line-height:var(--ods-typography-body-400-line-height)}:host textarea,:host textarea::placeholder{font-family:var(--ods-typography-body-400-font-family);font-size:var(--ods-typography-body-400-font-size);font-style:var(--ods-typography-body-400-font-style);font-weight:var(--ods-typography-body-400-font-weight);letter-spacing:var(--ods-typography-body-400-letter-spacing);line-height:var(--ods-typography-body-400-line-height)}:host textarea::-moz-placeholder{font-style:italic}:host textarea::placeholder{font-style:italic}"}}]);
//# sourceMappingURL=49.f3e6642b.iframe.bundle.js.map