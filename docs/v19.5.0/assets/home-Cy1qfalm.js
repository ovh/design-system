import{j as g}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as we}from"./index-ZwkxtaJJ.js";import{j as Se,M as Ee}from"./index-Cw5r0Kn8.js";import{a as ke,l as _e}from"./ods-react67-C395g5lW.js";import{l as Fe,e as Me}from"./Text-BGoUCJU7-CBjGeyCW.js";import{r as ze,e as o}from"./index-jIWwRBLr.js";import{H as Ie}from"./meta-DcQbZjt_.js";import{E as U}from"./ExternalLink-C5hGBmwh.js";import{S as Pe}from"./StorybookLink-DQwP2BEI.js";import{T as Be}from"./ThemeApplier-BzxdT2w6.js";import{d as Y}from"./tokens-BtVMeYnn.js";import{N as Te}from"./NoToC-DtK7bEXf.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./index-CSeLFT3z.js";var je=Object.defineProperty,n=(e,t)=>je(e,"name",{value:t,configurable:!0});function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},y.apply(null,arguments)}n(y,"_extends");function te(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n(te,"_assertThisInitialized");function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},x(e,t)}n(x,"_setPrototypeOf");function re(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,x(e,t)}n(re,"_inheritsLoose");function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(e)}n(F,"_getPrototypeOf");function ae(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}n(ae,"_isNativeFunction");function q(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(q=n(function(){return!!e},"_isNativeReflectConstruct"))()}n(q,"_isNativeReflectConstruct");function ne(e,t,r){if(q())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var s=new(e.bind.apply(e,a));return r&&x(s,r.prototype),s}n(ne,"_construct");function M(e){var t=typeof Map=="function"?new Map:void 0;return M=n(function(r){if(r===null||!ae(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return ne(r,arguments,F(this).constructor)}return n(a,"Wrapper"),a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),x(a,r)},"_wrapNativeSuper"),M(e)}n(M,"_wrapNativeSuper");var He={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function oe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],s=[],c;for(c=1;c<t.length;c+=1)s.push(t[c]);return s.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}n(oe,"format");var f=function(e){re(t,e);function t(r){for(var a,s=arguments.length,c=new Array(s>1?s-1:0),i=1;i<s;i++)c[i-1]=arguments[i];return a=e.call(this,oe.apply(void 0,[He[r]].concat(c)))||this,te(a)}return n(t,"PolishedError"),t}(M(Error));function k(e){return Math.round(e*255)}n(k,"colorToInt");function se(e,t,r){return k(e)+","+k(t)+","+k(r)}n(se,"convertToInt");function C(e,t,r,a){if(a===void 0&&(a=se),t===0)return a(r,r,r);var s=(e%360+360)%360/60,c=(1-Math.abs(2*r-1))*t,i=c*(1-Math.abs(s%2-1)),p=0,d=0,u=0;s>=0&&s<1?(p=c,d=i):s>=1&&s<2?(p=i,d=c):s>=2&&s<3?(d=c,u=i):s>=3&&s<4?(d=i,u=c):s>=4&&s<5?(p=i,u=c):s>=5&&s<6&&(p=c,u=i);var b=r-c/2,v=p+b,m=d+b,j=u+b;return a(v,m,j)}n(C,"hslToRgb");var X={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ce(e){if(typeof e!="string")return e;var t=e.toLowerCase();return X[t]?"#"+X[t]:e}n(ce,"nameToHex");var Re=/^#[a-fA-F0-9]{6}$/,Oe=/^#[a-fA-F0-9]{8}$/,De=/^#[a-fA-F0-9]{3}$/,Le=/^#[a-fA-F0-9]{4}$/,H=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Ne=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,qe=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,$e=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function P(e){if(typeof e!="string")throw new f(3);var t=ce(e);if(t.match(Re))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(Oe)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(De))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(Le)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var s=H.exec(t);if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10)};var c=Ne.exec(t.substring(0,50));if(c)return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])};var i=qe.exec(t);if(i){var p=parseInt(""+i[1],10),d=parseInt(""+i[2],10)/100,u=parseInt(""+i[3],10)/100,b="rgb("+C(p,d,u)+")",v=H.exec(b);if(!v)throw new f(4,t,b);return{red:parseInt(""+v[1],10),green:parseInt(""+v[2],10),blue:parseInt(""+v[3],10)}}var m=$e.exec(t.substring(0,50));if(m){var j=parseInt(""+m[1],10),xe=parseInt(""+m[2],10)/100,Ce=parseInt(""+m[3],10)/100,G="rgb("+C(j,xe,Ce)+")",E=H.exec(G);if(!E)throw new f(4,t,G);return{red:parseInt(""+E[1],10),green:parseInt(""+E[2],10),blue:parseInt(""+E[3],10),alpha:parseFloat(""+m[4])>1?parseFloat(""+m[4])/100:parseFloat(""+m[4])}}throw new f(5)}n(P,"parseToRgb");function ie(e){var t=e.red/255,r=e.green/255,a=e.blue/255,s=Math.max(t,r,a),c=Math.min(t,r,a),i=(s+c)/2;if(s===c)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var p,d=s-c,u=i>.5?d/(2-s-c):d/(s+c);switch(s){case t:p=(r-a)/d+(r<a?6:0);break;case r:p=(a-t)/d+2;break;default:p=(t-r)/d+4;break}return p*=60,e.alpha!==void 0?{hue:p,saturation:u,lightness:i,alpha:e.alpha}:{hue:p,saturation:u,lightness:i}}n(ie,"rgbToHsl");function $(e){return ie(P(e))}n($,"parseToHsl");var Ae=n(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),N=Ae;function h(e){var t=e.toString(16);return t.length===1?"0"+t:t}n(h,"numberToHex");function _(e){return h(Math.round(e*255))}n(_,"colorToHex");function le(e,t,r){return N("#"+_(e)+_(t)+_(r))}n(le,"convertToHex");function w(e,t,r){return C(e,t,r,le)}n(w,"hslToHex");function pe(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return w(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return w(e.hue,e.saturation,e.lightness);throw new f(1)}n(pe,"hsl");function de(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?w(e,t,r):"rgba("+C(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?w(e.hue,e.saturation,e.lightness):"rgba("+C(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new f(2)}n(de,"hsla");function z(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return N("#"+h(e)+h(t)+h(r));if(typeof e=="object"&&t===void 0&&r===void 0)return N("#"+h(e.red)+h(e.green)+h(e.blue));throw new f(6)}n(z,"rgb");function S(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var s=P(e);return"rgba("+s.red+","+s.green+","+s.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?z(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?z(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new f(7)}n(S,"rgba");var Ve=n(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),Ge=n(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),Ue=n(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),Ye=n(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function A(e){if(typeof e!="object")throw new f(8);if(Ge(e))return S(e);if(Ve(e))return z(e);if(Ye(e))return de(e);if(Ue(e))return pe(e);throw new f(8)}n(A,"toColorString");function V(e,t,r){return n(function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):V(e,t,a)},"fn")}n(V,"curried");function B(e){return V(e,e.length,[])}n(B,"curry");function T(e,t,r){return Math.max(e,Math.min(t,r))}n(T,"guard");function ue(e,t){if(t==="transparent")return t;var r=$(t);return A(y({},r,{lightness:T(0,1,r.lightness-parseFloat(e))}))}n(ue,"darken");var Xe=B(ue),Ke=Xe;function fe(e,t){if(t==="transparent")return t;var r=$(t);return A(y({},r,{lightness:T(0,1,r.lightness+parseFloat(e))}))}n(fe,"lighten");var Je=B(fe),Qe=Je;function me(e,t){if(t==="transparent")return t;var r=P(t),a=typeof r.alpha=="number"?r.alpha:1,s=y({},r,{alpha:T(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return S(s)}n(me,"transparentize");var We=B(me),Ze=We,l={secondary:"#029CFD",lightest:"#FFFFFF",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)"},K={app:"#F6F9FC",hoverable:Ze(.9,l.secondary)},I={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")}},e1={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:l.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:I.fonts.base,fontCode:I.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:l.lightest,inputBorderRadius:4},t1=e1,r1={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:K.app,appContentBg:l.lightest,appPreviewBg:l.lightest,appBorderColor:l.border,appBorderRadius:4,fontBase:I.fonts.base,fontCode:I.fonts.mono,textColor:l.darkest,textInverseColor:l.lightest,textMutedColor:l.dark,barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:l.lightest,buttonBg:K.app,buttonBorder:l.medium,booleanBg:l.mediumlight,booleanSelectedBg:l.lightest,inputBg:l.lightest,inputBorder:l.border,inputTextColor:l.darkest,inputBorderRadius:4},J=r1,a1=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:n1}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:R}=a1,o1=n(e=>typeof e!="string"?(n1.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),s1=n(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),c1=n((e,t)=>e==="darken"?S(`${Ke(1,t)}`,.95):e==="lighten"?S(`${Qe(1,t)}`,.95):t,"applyPolished"),he=n(e=>t=>{if(!o1(t)||!s1(t))return t;try{return c1(e,t)}catch{return t}},"colorFactory");he("lighten");he("darken");var i1=n(()=>!R||!R.matchMedia?"light":R.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),O={light:J,dark:t1,normal:J},D=i1(),ge=n((e={base:D},t)=>{let r={...O[D],...O[e.base]||{},...e,base:O[e.base]?e.base:D};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}},"create");const Q={root:{"--ods-color-primary-500":"#66a2f7","--ods-font-family-default":"'Source Sans Pro', 'Trebuchet MS', arial, 'Segoe UI', sans-serif","--ods-theme-background-color":"#1b1c1d","--ods-theme-border-radius":"8px","--ods-theme-heading-text-color":"#a2ccfb","--ods-theme-input-border-color":"#adadad","--ods-theme-input-text-color":"#e0e2f7","--ods-theme-text-color":"#e0e2f7"}};function be(e){return{appBg:e["--ods-theme-background-color"],appBorderColor:e["--ods-color-primary-500"],appBorderRadius:parseInt(W(e["--ods-theme-border-radius"]),10)/2,barHoverColor:e["--ods-color-primary-500"],barSelectedColor:e["--ods-color-primary-500"],barTextColor:e["--ods-theme-text-color"],colorPrimary:e["--ods-color-primary-500"],colorSecondary:e["--ods-color-primary-500"],fontBase:e["--ods-font-family-default"],fontCode:"monospace",inputBg:e["--ods-theme-background-color"],inputBorder:e["--ods-theme-input-border-color"],inputBorderRadius:parseInt(W(e["--ods-theme-border-radius"]),10)/2,inputTextColor:e["--ods-theme-input-text-color"],textColor:e["--ods-theme-text-color"],textMutedColor:e["--ods-theme-heading-text-color"]}}function W(e,t="px"){return e.split(t)[0]}const l1=ge({...Se.dark,...be(Q.root)},{brandColor:Q.root["--ods-theme-text-color"]}),Z=ge({...be(Y.root),appBg:"#f3fcff",appContentBg:"#fff",appPreviewBg:"#fff",barBg:"#f3fcff",base:"light"},{brandColor:Y.root["--ods-theme-heading-text-color"]}),ve=()=>{const[e,t]=ze.useState(Z.brandColor);return o.createElement(Be,{onDarkTheme:()=>t(l1.brandColor),onLightTheme:()=>t(Z.brandColor)},o.createElement("svg",{fill:e,height:64,viewBox:"0 0 681.06 55.64",version:"1.1",width:640,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve"},o.createElement("g",{transform:"matrix(1 0 0 1 1241.33 419.7)"},o.createElement("g",{transform:"matrix(1 0 0 1 -109.93 0)"},o.createElement("path",{d:`M-1058.26-417.01c7.89,14.22,6.41,31.79-3.74,44.49h-21.44l6.6-11.67
                  h-8.73l10.29-18.15h8.78L-1058.26-417.01z M-1100.6-372.52h-21.86c-10.35-12.66-11.85-30.37-3.79-44.59l14.18,24.63l15.63-27.22
                  h23l-27.15,47.16l0,0l0,0L-1100.6-372.52z`,vectorEffect:"non-scaling-stroke"})),o.createElement("g",{transform:"matrix(1 0 0 1 -41.24 0.67)"},o.createElement("path",{d:`M-1108.88-396.09c0-12.59,6.27-18.64,16.57-18.64
                  s16.56,6.05,16.56,18.64s-6.31,18.6-16.56,18.6S-1108.88-383.62-1108.88-396.09z M-1105.16-396.09
                  c0,10.35,4.72,15.28,12.85,15.28s12.84-4.93,12.84-15.28s-4.72-15.35-12.84-15.35S-1105.16-406.49-1105.16-396.09z`,vectorEffect:"non-scaling-stroke"})),o.createElement("g",{transform:"matrix(1 0 0 1 -8.38 0.66)"},o.createElement("path",{d:`M-1081.54-413.23c0.27-0.7,0.95-1.17,1.7-1.17
                  c0.48,0,0.94,0.19,1.28,0.53c0.34,0.34,0.53,0.8,0.52,1.28c-0.01,0.27-0.06,0.54-0.16,0.79l-12.42,32.75
                  c-0.24,0.74-0.92,1.24-1.7,1.24s-1.46-0.5-1.69-1.24l-12.42-32.75c-0.1-0.25-0.15-0.52-0.16-0.79c-0.01-0.48,0.18-0.94,0.52-1.28
                  c0.34-0.34,0.8-0.53,1.28-0.53c0.75,0,1.43,0.47,1.7,1.17l10.77,28.56L-1081.54-413.23z`,vectorEffect:"non-scaling-stroke"})),o.createElement("g",{transform:"matrix(1 0 0 1 22.68 0.66)"},o.createElement("path",{d:`M-1101.55-394.92v15.29c0.05,0.68-0.28,1.33-0.86,1.68
                  c-0.58,0.35-1.31,0.35-1.89,0c-0.58-0.35-0.91-1-0.86-1.68v-33c-0.05-0.68,0.28-1.33,0.86-1.68c0.58-0.35,1.31-0.35,1.89,0
                  c0.58,0.35,0.91,1,0.86,1.68v14.42h18.48v-14.38c-0.05-0.68,0.28-1.33,0.86-1.68c0.58-0.35,1.31-0.35,1.89,0
                  c0.58,0.35,0.91,1,0.86,1.68v33c0.05,0.68-0.28,1.33-0.86,1.68c-0.58,0.35-1.31,0.35-1.89,0s-0.91-1-0.86-1.68v-15.33H-1101.55z`,vectorEffect:"non-scaling-stroke"})),o.createElement("g",{transform:"matrix(1 0 0 1 51.44 6.44)"},o.createElement("path",{d:`M-1091.19-408.87c3.15-0.14,6.18,1.22,8.17,3.66
                  c0.24,0.28,0.37,0.63,0.37,1c0.01,0.41-0.15,0.81-0.44,1.1c-0.29,0.29-0.69,0.45-1.1,0.44c-0.5,0-0.97-0.23-1.27-0.64
                  c-1.39-1.71-3.53-2.64-5.73-2.49c-4.89,0-7.49,3.13-7.49,9.66s2.6,9.71,7.49,9.71c2.25-0.02,4.43-0.83,6.15-2.28
                  c0.28-0.24,0.63-0.37,1-0.37c0.85,0,1.54,0.69,1.54,1.54c0,0.53-0.26,1.02-0.69,1.32c-2.23,1.9-5.07,2.92-8,2.87
                  c-6.85,0-10.94-4.09-10.94-12.79C-1102.13-404.84-1098.04-408.87-1091.19-408.87z`,vectorEffect:"non-scaling-stroke"})),o.createElement("g",{transform:"matrix(1 0 0 1 69.72 -0.17)"},o.createElement("path",{d:`M-1092.53-413.52v30.32c0,2.12,0.69,3,2.12,3
                  c0.6-0.05,1.18,0.25,1.49,0.76s0.31,1.16,0,1.67s-0.89,0.81-1.49,0.76c-3.55,0-5.52-2.13-5.52-6.21v-30.3
                  c0.03-0.93,0.77-1.67,1.7-1.69C-1093.29-415.21-1092.53-414.45-1092.53-413.52z`,vectorEffect:"non-scaling-stroke"})),o.createElement("g",{transform:"matrix(1 0 0 1 87.28 6.44)"},o.createElement("path",{d:`M-1081.17-396.13c0,8.7-4.25,12.79-11.15,12.79s-11.14-4.09-11.14-12.79
                  c0-8.7,4.3-12.74,11.14-12.74C-1085.48-408.87-1081.17-404.84-1081.17-396.13z M-1084.62-396.13c0-6.69-2.81-9.66-7.7-9.66
                  s-7.69,3-7.69,9.66c0,6.66,2.81,9.71,7.69,9.71s7.74-2.92,7.74-9.71H-1084.62z`,vectorEffect:"non-scaling-stroke"})),o.createElement("g",{transform:"matrix(1 0 0 1 113.08 6.6)"},o.createElement("path",{d:`M-1098.78-407.01v13.85c0,3.45,1.11,6.42,6.47,6.42s6.48-3,6.48-6.42
                  v-13.85c0.01-0.46,0.19-0.89,0.52-1.21c0.33-0.32,0.77-0.49,1.23-0.49c0.44,0.01,0.87,0.19,1.18,0.51
                  c0.31,0.32,0.48,0.75,0.47,1.19v13.85c0,5-1.65,9.66-9.88,9.66s-9.87-4.62-9.87-9.66v-13.85c-0.01-0.45,0.17-0.89,0.49-1.21
                  c0.32-0.32,0.76-0.5,1.21-0.49C-1099.54-408.7-1098.78-407.95-1098.78-407.01z`,vectorEffect:"non-scaling-stroke"})),o.createElement("g",{transform:"matrix(1 0 0 1 138.37 -0.03)"},o.createElement("path",{d:`M-1085.07-398.95v-14.71c0-0.94,0.76-1.7,1.7-1.7
                  c0.94,0,1.7,0.76,1.7,1.7v26.33c0,7-4.35,10.46-10.4,10.46c-6.85,0-10.89-4.09-10.89-12.79c0-8.7,3.83-12.74,10.67-12.74
                  C-1089.47-402.44-1086.8-401.17-1085.07-398.95z M-1085.07-394.65c0,0-2-4.67-7-4.67s-7.49,3.13-7.49,9.66
                  c0,6.53,2.6,9.71,7.49,9.71c4.08,0,7-2.33,7-7.38V-394.65z`,vectorEffect:"non-scaling-stroke"}))),o.createElement("g",{id:"_x37_3379683-787c-4fcf-8e09-8c37de9198c9",transform:"matrix(1 0 0 1 1645.59 422.3)"},o.createElement("path",{d:`M-1326.32-418.05h10.33c5.9,0,10.5,1.59,13.81,4.78c3.3,3.19,4.96,7.96,4.96,14.34c0,3.19-0.42,6-1.27,8.44
              c-0.85,2.44-2.06,4.47-3.66,6.11c-1.59,1.63-3.52,2.86-5.78,3.69c-2.26,0.83-4.83,1.24-7.7,1.24h-10.68V-418.05z M-1316.47-385.01
              c3.93,0,6.95-1.13,9.06-3.39c2.1-2.26,3.16-5.77,3.16-10.53c0-4.72-1.06-8.16-3.19-10.33s-5.13-3.25-9.03-3.25h-3.01v27.49
              H-1316.47z`}),o.createElement("path",{d:`M-1291.92-393.91c0-2.36,0.37-4.48,1.12-6.37c0.75-1.89,1.74-3.48,2.98-4.78c1.24-1.3,2.66-2.3,4.28-3.01
                  c1.61-0.71,3.26-1.06,4.96-1.06c1.97,0,3.7,0.33,5.19,1c1.49,0.67,2.74,1.61,3.75,2.83c1,1.22,1.76,2.67,2.27,4.37
                  c0.51,1.69,0.77,3.54,0.77,5.55c0,1.34-0.1,2.4-0.29,3.19h-18.41c0.31,2.64,1.23,4.66,2.74,6.08c1.51,1.42,3.45,2.12,5.81,2.12
                  c1.26,0,2.43-0.19,3.51-0.56c1.08-0.37,2.15-0.89,3.22-1.56l2.3,4.25c-1.38,0.91-2.91,1.65-4.6,2.24s-3.46,0.88-5.31,0.88
                  c-2.01,0-3.88-0.34-5.61-1.03c-1.73-0.69-3.24-1.68-4.54-2.98c-1.3-1.3-2.31-2.88-3.04-4.75
                  C-1291.56-389.38-1291.92-391.52-1291.92-393.91z M-1272.51-396.51c0-2.32-0.48-4.13-1.45-5.43c-0.96-1.3-2.45-1.95-4.45-1.95
                  c-1.73,0-3.25,0.62-4.54,1.86c-1.3,1.24-2.11,3.08-2.42,5.52H-1272.51z`}),o.createElement("path",{d:`M-1259.83-387.13c1.3,1.02,2.59,1.82,3.86,2.39c1.28,0.57,2.66,0.86,4.16,0.86c1.57,0,2.73-0.32,3.48-0.97
                  c0.75-0.65,1.12-1.48,1.12-2.51c0-0.59-0.18-1.11-0.53-1.56c-0.35-0.45-0.83-0.86-1.42-1.21c-0.59-0.35-1.26-0.68-2.01-0.97
                  c-0.75-0.29-1.5-0.6-2.24-0.92c-0.94-0.35-1.91-0.77-2.89-1.24c-0.98-0.47-1.86-1.04-2.63-1.71c-0.77-0.67-1.4-1.45-1.89-2.33
                  c-0.49-0.88-0.74-1.94-0.74-3.16c0-2.56,0.94-4.64,2.83-6.25c1.89-1.61,4.46-2.42,7.73-2.42c2.01,0,3.81,0.35,5.43,1.06
                  c1.61,0.71,3.01,1.51,4.19,2.42l-3.13,4.13c-1.02-0.75-2.06-1.35-3.1-1.8c-1.04-0.45-2.13-0.68-3.27-0.68
                  c-1.46,0-2.53,0.3-3.22,0.91c-0.69,0.61-1.03,1.37-1.03,2.27c0,0.59,0.17,1.09,0.5,1.5c0.33,0.41,0.78,0.78,1.33,1.09
                  c0.55,0.32,1.19,0.61,1.92,0.88c0.73,0.28,1.48,0.55,2.27,0.83c0.98,0.35,1.97,0.76,2.95,1.21c0.98,0.45,1.88,1.01,2.68,1.68
                  c0.81,0.67,1.46,1.49,1.95,2.45c0.49,0.96,0.74,2.12,0.74,3.45c0,1.26-0.25,2.43-0.74,3.51c-0.49,1.08-1.21,2.03-2.15,2.83
                  c-0.94,0.81-2.12,1.45-3.54,1.92s-3.03,0.71-4.84,0.71c-2.01,0-3.98-0.38-5.93-1.15c-1.95-0.77-3.63-1.72-5.04-2.86
                  L-1259.83-387.13z`}),o.createElement("path",{d:`M-1231.27-413.5c-1.22,0-2.22-0.35-3.01-1.06c-0.79-0.71-1.18-1.63-1.18-2.77c0-1.14,0.39-2.07,1.18-2.8
                  c0.79-0.73,1.79-1.09,3.01-1.09c1.22,0,2.22,0.36,3.01,1.09c0.79,0.73,1.18,1.66,1.18,2.8c0,1.14-0.39,2.06-1.18,2.77
                  S-1230.05-413.5-1231.27-413.5z M-1234.69-408.43h6.79v28.97h-6.79V-408.43z`}),o.createElement("path",{d:`M-1221.18-374.21c0-1.22,0.35-2.35,1.06-3.39c0.71-1.04,1.73-1.98,3.07-2.8v-0.24
                  c-0.75-0.47-1.37-1.1-1.86-1.89c-0.49-0.79-0.74-1.77-0.74-2.95c0-1.14,0.32-2.17,0.97-3.1c0.65-0.92,1.39-1.68,2.21-2.27v-0.24
                  c-0.98-0.75-1.86-1.78-2.62-3.1c-0.77-1.32-1.15-2.84-1.15-4.57c0-1.65,0.31-3.13,0.94-4.42c0.63-1.3,1.46-2.39,2.51-3.27
                  c1.04-0.89,2.25-1.55,3.63-2.01s2.83-0.68,4.37-0.68c0.79,0,1.54,0.07,2.27,0.21c0.73,0.14,1.39,0.31,1.98,0.5h10.38v5.01h-5.31
                  c0.47,0.55,0.86,1.25,1.18,2.09c0.31,0.85,0.47,1.78,0.47,2.8c0,1.61-0.29,3.03-0.86,4.25c-0.57,1.22-1.35,2.24-2.33,3.07
                  c-0.98,0.83-2.14,1.46-3.48,1.89c-1.34,0.43-2.77,0.65-4.31,0.65c-0.63,0-1.28-0.06-1.95-0.18c-0.67-0.12-1.34-0.31-2.01-0.59
                  c-0.43,0.39-0.78,0.79-1.03,1.18c-0.26,0.39-0.38,0.92-0.38,1.59c0,0.83,0.34,1.48,1.03,1.95c0.69,0.47,1.92,0.71,3.69,0.71h5.13
                  c3.5,0,6.15,0.56,7.94,1.68c1.79,1.12,2.68,2.94,2.68,5.46c0,1.42-0.36,2.75-1.09,4.01c-0.73,1.26-1.76,2.34-3.1,3.24
                  c-1.34,0.91-2.96,1.62-4.87,2.15c-1.91,0.53-4.04,0.8-6.4,0.8c-1.73,0-3.33-0.16-4.81-0.47c-1.48-0.32-2.74-0.79-3.81-1.42
                  c-1.06-0.63-1.9-1.42-2.51-2.36C-1220.88-371.85-1221.18-372.95-1221.18-374.21z M-1215.52-375.21c0,1.3,0.66,2.31,1.98,3.04
                  c1.32,0.73,3.14,1.09,5.46,1.09c2.36,0,4.26-0.46,5.69-1.39c1.44-0.92,2.15-2.02,2.15-3.27c0-1.14-0.44-1.91-1.33-2.3
                  c-0.88-0.39-2.15-0.59-3.81-0.59h-3.95c-1.57,0-2.89-0.14-3.95-0.41C-1214.77-377.91-1215.52-376.63-1215.52-375.21z
                   M-1208.79-392.91c1.38,0,2.56-0.5,3.54-1.5c0.98-1,1.48-2.45,1.48-4.34c0-1.81-0.48-3.22-1.45-4.22s-2.15-1.5-3.57-1.5
                  s-2.62,0.49-3.6,1.47c-0.98,0.98-1.48,2.4-1.48,4.25c0,1.89,0.49,3.33,1.48,4.34C-1211.41-393.41-1210.21-392.91-1208.79-392.91z`}),o.createElement("path",{d:`M-1188.55-408.43h5.6l0.47,3.89h0.24c1.3-1.26,2.7-2.34,4.22-3.25c1.51-0.9,3.27-1.36,5.28-1.36
                  c3.11,0,5.37,0.99,6.79,2.98s2.12,4.83,2.12,8.53v18.17h-6.79v-17.29c0-2.4-0.35-4.09-1.06-5.07c-0.71-0.98-1.87-1.47-3.48-1.47
                  c-1.26,0-2.37,0.3-3.33,0.91c-0.96,0.61-2.06,1.5-3.28,2.68v20.24h-6.78V-408.43z`}),o.createElement("path",{d:`M-1141.47-389.08c1.38,1.3,2.95,2.35,4.72,3.16c1.77,0.81,3.54,1.21,5.31,1.21c2.2,0,3.87-0.45,5.01-1.36
                  c1.14-0.9,1.71-2.1,1.71-3.6c0-0.79-0.15-1.46-0.44-2.01s-0.71-1.03-1.24-1.45c-0.53-0.41-1.16-0.8-1.89-1.15
                  c-0.73-0.35-1.52-0.71-2.39-1.06l-5.31-2.3c-0.94-0.39-1.88-0.88-2.8-1.48c-0.92-0.59-1.76-1.3-2.51-2.12
                  c-0.75-0.83-1.35-1.79-1.8-2.89c-0.45-1.1-0.68-2.36-0.68-3.78c0-1.53,0.32-2.96,0.97-4.28c0.65-1.32,1.54-2.47,2.68-3.45
                  c1.14-0.98,2.51-1.75,4.1-2.3s3.33-0.83,5.22-0.83c2.24,0,4.4,0.44,6.49,1.33c2.08,0.89,3.87,2.08,5.37,3.57l-3.48,4.37
                  c-1.26-1.02-2.56-1.83-3.89-2.42s-2.83-0.88-4.48-0.88c-1.85,0-3.32,0.4-4.43,1.21c-1.1,0.81-1.65,1.92-1.65,3.33
                  c0,0.75,0.17,1.39,0.5,1.92c0.33,0.53,0.79,1,1.36,1.42c0.57,0.41,1.23,0.79,1.98,1.12c0.75,0.33,1.51,0.66,2.3,0.97l5.25,2.18
                  c1.14,0.47,2.18,1.02,3.13,1.65c0.94,0.63,1.76,1.36,2.45,2.18s1.23,1.78,1.62,2.86c0.39,1.08,0.59,2.33,0.59,3.75
                  c0,1.57-0.32,3.05-0.94,4.42c-0.63,1.38-1.54,2.59-2.74,3.63c-1.2,1.04-2.66,1.87-4.37,2.48s-3.65,0.91-5.81,0.91
                  c-2.6,0-5.1-0.49-7.52-1.47c-2.42-0.98-4.55-2.38-6.4-4.19L-1141.47-389.08z`}),o.createElement("path",{d:`M-1110.88-373.18c0.37,0.1,0.74,0.15,1.09,0.15c1.53,0,2.76-0.46,3.69-1.39c0.92-0.92,1.62-2.12,2.09-3.57
                  l0.53-1.83l-11.39-28.62h6.9l5.02,14.22c0.43,1.26,0.86,2.59,1.27,3.98c0.41,1.4,0.83,2.78,1.27,4.16h0.24
                  c0.35-1.34,0.72-2.7,1.09-4.1c0.37-1.4,0.74-2.74,1.09-4.04l4.37-14.22h6.55l-10.5,30.27c-0.59,1.65-1.24,3.13-1.95,4.42
                  c-0.71,1.3-1.52,2.41-2.45,3.33c-0.92,0.92-1.99,1.63-3.19,2.12c-1.2,0.49-2.59,0.74-4.16,0.74c-0.79,0-1.48-0.05-2.07-0.15
                  c-0.59-0.1-1.16-0.25-1.71-0.44l1.24-5.31C-1111.58-373.36-1111.26-373.28-1110.88-373.18z`}),o.createElement("path",{d:`M-1081.77-387.13c1.3,1.02,2.59,1.82,3.86,2.39s2.67,0.86,4.16,0.86c1.57,0,2.73-0.32,3.48-0.97
                  s1.12-1.48,1.12-2.51c0-0.59-0.18-1.11-0.53-1.56c-0.35-0.45-0.83-0.86-1.42-1.21c-0.59-0.35-1.26-0.68-2.01-0.97
                  s-1.5-0.6-2.24-0.92c-0.94-0.35-1.91-0.77-2.89-1.24c-0.98-0.47-1.86-1.04-2.62-1.71c-0.77-0.67-1.4-1.45-1.89-2.33
                  c-0.49-0.88-0.74-1.94-0.74-3.16c0-2.56,0.94-4.64,2.83-6.25c1.89-1.61,4.46-2.42,7.73-2.42c2.01,0,3.81,0.35,5.43,1.06
                  c1.61,0.71,3.01,1.51,4.19,2.42l-3.13,4.13c-1.02-0.75-2.06-1.35-3.1-1.8c-1.04-0.45-2.13-0.68-3.28-0.68
                  c-1.46,0-2.53,0.3-3.21,0.91c-0.69,0.61-1.03,1.37-1.03,2.27c0,0.59,0.17,1.09,0.5,1.5c0.33,0.41,0.78,0.78,1.33,1.09
                  c0.55,0.32,1.19,0.61,1.92,0.88c0.73,0.28,1.48,0.55,2.27,0.83c0.98,0.35,1.97,0.76,2.95,1.21c0.98,0.45,1.88,1.01,2.68,1.68
                  c0.81,0.67,1.45,1.49,1.95,2.45c0.49,0.96,0.74,2.12,0.74,3.45c0,1.26-0.25,2.43-0.74,3.51s-1.21,2.03-2.15,2.83
                  c-0.94,0.81-2.12,1.45-3.54,1.92s-3.03,0.71-4.84,0.71c-2.01,0-3.98-0.38-5.93-1.15c-1.95-0.77-3.63-1.72-5.04-2.86
                  L-1081.77-387.13z`}),o.createElement("path",{d:`M-1055.63-403.06h-4.13v-5.07l4.48-0.29l0.83-7.91h5.66v7.91h7.38v5.37h-7.38v13.81
                  c0,3.38,1.36,5.07,4.07,5.07c0.51,0,1.03-0.06,1.56-0.18c0.53-0.12,1.01-0.27,1.45-0.47l1.18,5.02c-0.79,0.28-1.68,0.52-2.68,0.74
                  c-1,0.22-2.08,0.32-3.22,0.32c-1.69,0-3.12-0.26-4.28-0.77c-1.16-0.51-2.1-1.23-2.83-2.15c-0.73-0.92-1.26-2.03-1.59-3.3
                  c-0.33-1.28-0.5-2.7-0.5-4.28V-403.06z`}),o.createElement("path",{d:`M-1037.81-393.91c0-2.36,0.37-4.48,1.12-6.37c0.75-1.89,1.74-3.48,2.98-4.78c1.24-1.3,2.66-2.3,4.28-3.01
                  c1.61-0.71,3.26-1.06,4.96-1.06c1.97,0,3.7,0.33,5.19,1s2.74,1.61,3.75,2.83c1,1.22,1.76,2.67,2.27,4.37
                  c0.51,1.69,0.77,3.54,0.77,5.55c0,1.34-0.1,2.4-0.29,3.19h-18.41c0.31,2.64,1.23,4.66,2.74,6.08c1.51,1.42,3.45,2.12,5.81,2.12
                  c1.26,0,2.43-0.19,3.51-0.56c1.08-0.37,2.15-0.89,3.22-1.56l2.3,4.25c-1.38,0.91-2.91,1.65-4.6,2.24
                  c-1.69,0.59-3.46,0.88-5.31,0.88c-2.01,0-3.87-0.34-5.6-1.03c-1.73-0.69-3.25-1.68-4.54-2.98s-2.31-2.88-3.04-4.75
                  C-1037.45-389.38-1037.81-391.52-1037.81-393.91z M-1018.4-396.51c0-2.32-0.48-4.13-1.45-5.43c-0.96-1.3-2.45-1.95-4.45-1.95
                  c-1.73,0-3.25,0.62-4.54,1.86s-2.1,3.08-2.42,5.52H-1018.4z`}),o.createElement("path",{d:`M-1006.01-408.43h5.61l0.47,3.95h0.24c1.22-1.3,2.55-2.4,3.98-3.3c1.44-0.9,3.06-1.36,4.87-1.36
                  c2.12,0,3.83,0.45,5.1,1.36c1.28,0.91,2.25,2.18,2.92,3.83c1.38-1.49,2.81-2.73,4.31-3.72c1.49-0.98,3.17-1.47,5.01-1.47
                  c3.07,0,5.33,0.99,6.79,2.98s2.18,4.83,2.18,8.53v18.17h-6.84v-17.29c0-2.4-0.36-4.09-1.09-5.07c-0.73-0.98-1.84-1.47-3.33-1.47
                  c-1.81,0-3.83,1.2-6.08,3.6v20.24h-6.79v-17.29c0-2.4-0.36-4.09-1.09-5.07c-0.73-0.98-1.86-1.47-3.39-1.47
                  c-1.81,0-3.83,1.2-6.08,3.6v20.24h-6.79V-408.43z`}))))};ve.__docgenInfo={description:"",methods:[],displayName:"Brand"};const p1="_homepage_cvqgo_1",d1="_homepage__content_cvqgo_6",u1="_homepage__content__links_cvqgo_14",L={homepage:p1,homepage__content:d1,homepage__content__links:u1},f1=""+new URL("ods_bg-Tj_Myv80.png",import.meta.url).href,ye=()=>o.createElement("div",{className:L.homepage,style:{background:`url(${f1}) no-repeat center center fixed`,backgroundSize:"cover"}},o.createElement("div",{className:L.homepage__content},o.createElement(ve,null),o.createElement(Fe,{preset:Me.heading3},"A collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products."),o.createElement("div",{className:L.homepage__content__links},o.createElement(Pe,{title:Ie.getStarted},"Get Started ",o.createElement(ke,{name:_e.arrowRight})),o.createElement(U,{href:"https://zeroheight.com/6fc8a63f7/p/533db0-ovhcloud-design-system"},"Design Guidelines"),o.createElement(U,{href:"https://github.com/ovh/design-system"},"GitHub repository"))));ye.__docgenInfo={description:"",methods:[],displayName:"Homepage"};function ee(e){return g.jsxs(g.Fragment,{children:[g.jsx(Ee,{title:"OVHcloud Design System/Welcome"}),`
`,g.jsx(Te,{}),`
`,g.jsx(ye,{})]})}function j1(e={}){const{wrapper:t}={...we(),...e.components};return t?g.jsx(t,{...e,children:g.jsx(ee,{...e})}):ee()}export{j1 as default};
