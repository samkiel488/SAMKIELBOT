(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1930,(e,t,r)=>{var n={229:function(e){var t,r,n,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}var u=[],l=!1,c=-1;function d(){l&&n&&(l=!1,n.length?u=n.concat(u):c=-1,u.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||l||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}},i=!0;try{n[e](r,r.exports,a),i=!1}finally{i&&delete o[e]}return r.exports}a.ab="/ROOT/frontend/node_modules/next/dist/compiled/process/",t.exports=a(229)},2105,(e,t,r)=>{"use strict";var n,o;t.exports=(null==(n=e.g.process)?void 0:n.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(1930)},253,(e,t,r)=>{"use strict";r._=function(e){return e&&e.__esModule?e:{default:e}}},1647,(e,t,r)=>{"use strict";var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}function v(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var _=w.prototype=new v;_.constructor=w,h(_,b.prototype),_.isPureReactComponent=!0;var x=Array.isArray,k=Object.prototype.hasOwnProperty,E={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];a.children=l}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:E.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function $(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function C(e,t,r){if(null==e)return e;var a=[],i=0;return!function e(t,r,a,i,s){var u,l,c,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var f=!1;if(null===t)f=!0;else switch(d){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case n:case o:f=!0}}if(f)return s=s(f=t),t=""===i?"."+$(f,0):i,x(s)?(a="",null!=t&&(a=t.replace(P,"$&/")+"/"),e(s,r,a,"",function(e){return e})):null!=s&&(j(s)&&(u=s,l=a+(!s.key||f&&f.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+t,s={$$typeof:n,type:u.type,key:l,ref:u.ref,props:u.props,_owner:u._owner}),r.push(s)),1;if(f=0,i=""===i?".":i+":",x(t))for(var p=0;p<t.length;p++){var y=i+$(d=t[p],p);f+=e(d,r,a,y,s)}else if("function"==typeof(y=null===(c=t)||"object"!=typeof c?null:"function"==typeof(c=m&&c[m]||c["@@iterator"])?c:null))for(t=y.call(t),p=0;!(d=t.next()).done;)y=i+$(d=d.value,p++),f+=e(d,r,a,y,s);else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return f}(e,a,"","",function(e){return t.call(r,e,i++)}),a}function T(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},N={transition:null};function R(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:C,forEach:function(e,t,r){C(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return C(e,function(){t++}),t},toArray:function(e){return C(e,function(e){return e})||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=a,r.Profiler=s,r.PureComponent=w,r.StrictMode=i,r.Suspense=d,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:N,ReactCurrentOwner:E},r.act=R,r.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)k.call(t,l)&&!S.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){u=Array(l);for(var c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=j,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},r.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},r.unstable_act=R,r.useCallback=function(e,t){return I.current.useCallback(e,t)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,t){return I.current.useEffect(e,t)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return I.current.useMemo(e,t)},r.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},r.useTransition=function(){return I.current.useTransition()},r.version="18.3.1"},9768,(e,t,r)=>{"use strict";t.exports=e.r(1647)},6391,(e,t,r)=>{"use strict";var n=e.r(9768),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:s.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},3716,(e,t,r)=>{"use strict";t.exports=e.r(6391)},5215,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HeadManagerContext",{enumerable:!0,get:function(){return n}});let n=e.r(253)._(e.r(9768)).default.createContext({})},21,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},8545,(e,t,r)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}r._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}},7052,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return y},ST:function(){return h},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return c},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return x}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>s.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=l();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let y="undefined"!=typeof performance,h=y&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},8480,(e,t,r)=>{t.exports=e.r(7574)},1026,e=>{"use strict";class t extends Error{}function r(e,r){let n;if("string"!=typeof e)throw new t("Invalid token specified: must be a string");r||(r={});let o=+(!0!==r.header),a=e.split(".")[o];if("string"!=typeof a)throw new t(`Invalid token specified: missing part #${o+1}`);try{n=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var r;return r=t,decodeURIComponent(atob(r).replace(/(.)/g,(e,t)=>{let r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}catch(e){return atob(t)}}(a)}catch(e){throw new t(`Invalid token specified: invalid base64 for part #${o+1} (${e.message})`)}try{return JSON.parse(n)}catch(e){throw new t(`Invalid token specified: invalid json for part #${o+1} (${e.message})`)}}t.prototype.name="InvalidTokenError",e.s(["jwtDecode",()=>r])},9647,e=>{"use strict";let t,r;var n,o=e.i(9768);let a={data:""},i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,l=(e,t)=>{let r="",n="",o="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+i+";":n+="f"==a[1]?l(i,a):a+"{"+l(i,"k"==a[1]?"":t)+"}":"object"==typeof i?n+=l(i,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=l.p?l.p(a,i):a+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+n},c={},d=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+d(e[r]);return t}return e};function f(e){let t,r,n=this||{},o=e.call?e(n.p):e;return((e,t,r,n,o)=>{var a;let f=d(e),p=c[f]||(c[f]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(f));if(!c[p]){let t=f!==e?e:(e=>{let t,r,n=[{}];for(;t=i.exec(e.replace(s,""));)t[4]?n.shift():t[3]?(r=t[3].replace(u," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(u," ").trim();return n[0]})(e);c[p]=l(o?{["@keyframes "+p]:t}:t,r?"":"."+p)}let m=r&&c.g?c.g:null;return r&&(c.g=c[p]),a=c[p],m?t.data=t.data.replace(m,a):-1===t.data.indexOf(a)&&(t.data=n?a+t.data:t.data+a),p})(o.unshift?o.raw?(t=[].slice.call(arguments,1),r=n.p,o.reduce((e,n,o)=>{let a=t[o];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":l(e,""):!1===e?"":e}return e+n+(null==a?"":a)},"")):o.reduce((e,t)=>Object.assign(e,t&&t.call?t(n.p):t),{}):o,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||a})(n.target),n.g,n.o,n.k)}f.bind({g:1});let p,m,y,h=f.bind({k:1});function g(e,t){let r=this||{};return function(){let n=arguments;function o(a,i){let s=Object.assign({},a),u=s.className||o.className;r.p=Object.assign({theme:m&&m()},s),r.o=/ *go\d+/.test(u),s.className=f.apply(r,n)+(u?" "+u:""),t&&(s.ref=i);let l=e;return e[0]&&(l=s.as||e,delete s.as),y&&l[0]&&y(s),p(l,s)}return t?t(o):o}}var b=(e,t)=>"function"==typeof e?e(t):e,v=(t=0,()=>(++t).toString()),w=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},_="default",x=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return x(e,{type:+!!e.toasts.find(e=>e.id===n.id),toast:n});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},k=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},S={},O=(e,t=_)=>{S[t]=x(S[t]||E,e),k.forEach(([e,r])=>{e===t&&r(S[t])})},j=e=>Object.keys(S).forEach(t=>O(e,t)),P=(e=_)=>t=>{O(t,e)},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=e=>(t,r)=>{let n,o=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||v()}))(t,e,r);return P(o.toasterId||(n=o.id,Object.keys(S).find(e=>S[e].toasts.some(e=>e.id===n))))({type:2,toast:o}),o.id},T=(e,t)=>C("blank")(e,t);T.error=C("error"),T.success=C("success"),T.loading=C("loading"),T.custom=C("custom"),T.dismiss=(e,t)=>{let r={type:3,toastId:e};t?P(t)(r):j(r)},T.dismissAll=e=>T.dismiss(void 0,e),T.remove=(e,t)=>{let r={type:4,toastId:e};t?P(t)(r):j(r)},T.removeAll=e=>T.remove(void 0,e),T.promise=(e,t,r)=>{let n=T.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?b(t.success,e):void 0;return o?T.success(o,{id:n,...r,...null==r?void 0:r.success}):T.dismiss(n),e}).catch(e=>{let o=t.error?b(t.error,e):void 0;o?T.error(o,{id:n,...r,...null==r?void 0:r.error}):T.dismiss(n)}),e};var I=1e3,N=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,A=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,D=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${A} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,U=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,z=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${F} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=g("div")`
  position: absolute;
`,H=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?o.createElement(J,null,t):t:"blank"===r?null:o.createElement(H,null,o.createElement(M,{...n}),"loading"!==r&&o.createElement(B,null,"error"===r?o.createElement(D,{...n}):o.createElement(z,{...n})))},W=g("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Y=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Z=o.memo(({toast:e,position:t,style:r,children:n})=>{let a=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,o]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${h(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(q,{toast:e}),s=o.createElement(Y,{...e.ariaProps},b(e.message,e));return o.createElement(W,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof n?n({icon:i,message:s}):o.createElement(o.Fragment,null,i,s))});n=o.createElement,l.p=void 0,p=n,m=void 0,y=void 0;var G=({id:e,className:t,style:r,onHeightUpdate:n,children:a})=>{let i=o.useCallback(t=>{if(t){let r=()=>{n(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return o.createElement("div",{ref:i,className:t,style:r},a)},K=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,X=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:a,toasterId:i,containerStyle:s,containerClassName:u})=>{let{toasts:l,handlers:c}=((e,t="default")=>{let{toasts:r,pausedAt:n}=((e={},t=_)=>{let[r,n]=(0,o.useState)(S[t]||E),a=(0,o.useRef)(S[t]);(0,o.useEffect)(()=>(a.current!==S[t]&&n(S[t]),k.push([t,n]),()=>{let e=k.findIndex(([e])=>e===t);e>-1&&k.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,n,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||$[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...r,toasts:i}})(e,t),a=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=I)=>{if(a.has(e))return;let r=setTimeout(()=>{a.delete(e),s({type:4,toastId:e})},t);a.set(e,r)},[]);(0,o.useEffect)(()=>{if(n)return;let e=Date.now(),o=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&T.dismiss(r.id);return}return setTimeout(()=>T.dismiss(r.id,t),n)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[r,n,t]);let s=(0,o.useCallback)(P(t),[t]),u=(0,o.useCallback)(()=>{s({type:5,time:Date.now()})},[s]),l=(0,o.useCallback)((e,t)=>{s({type:1,toast:{id:e,height:t}})},[s]),c=(0,o.useCallback)(()=>{n&&s({type:6,time:Date.now()})},[n,s]),d=(0,o.useCallback)((e,t)=>{let{reverseOrder:n=!1,gutter:o=8,defaultPosition:a}=t||{},i=r.filter(t=>(t.position||a)===(e.position||a)&&t.height),s=i.findIndex(t=>t.id===e.id),u=i.filter((e,t)=>t<s&&e.visible).length;return i.filter(e=>e.visible).slice(...n?[u+1]:[0,u]).reduce((e,t)=>e+(t.height||0)+o,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:l,startPause:u,endPause:c,calculateOffset:d}}})(r,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:u,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let i,s,u=r.position||t,l=c.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}),d=(i=u.includes("top"),s=u.includes("center")?{justifyContent:"center"}:u.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${l*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...s});return o.createElement(G,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?K:"",style:d},"custom"===r.type?b(r.message,r):a?a(r):o.createElement(Z,{toast:r,position:u}))}))};e.s(["Toaster",()=>X,"default",()=>T],9647)},1709,e=>{"use strict";var t=e.i(3716),r=e.i(9768),n=e.i(8480),o=e.i(1026),a=e.i(9647);let i=(0,r.createContext)();e.s(["AuthProvider",0,({children:e})=>{let[s,u]=(0,r.useState)(null),[l,c]=(0,r.useState)(null),[d,f]=(0,r.useState)(!0),p=(0,n.useRouter)(),m=(e="Manual logout")=>{console.warn("🔴 Logging out triggered:",e),localStorage.removeItem("token"),localStorage.removeItem("user"),u(null),c(null),a.default.success("Logged out successfully.",{duration:3e3}),p.push("/login")},y=async(e,t)=>{try{console.log("🟢 Logging in...");let r=await fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:e,password:t})}),n=await r.json();if(r.ok){let{data:e}=n,t=e?.token;if(!t){console.error("❌ No token returned from backend:",n),a.default.error("Login failed: no token received from server");return}return console.log("✅ Token received:",t),localStorage.setItem("token",t),localStorage.setItem("user",JSON.stringify(e)),c(t),u(e),a.default.success(`Welcome back, ${e.username}!`),console.log("✅ User successfully logged in:",e.username),p.push("/dashboard"),e}throw Error(JSON.stringify(n))}catch(e){throw console.error("❌ Login error:",e),e}},h=async e=>{try{console.log("🟢 Registering...");let t=await fetch("http://localhost:5000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();if(t.ok){let{data:e}=r,t=e?.token;if(!t)return console.error("❌ No token returned from backend:",r),a.default.error("Registration failed: no token received from server"),null;return console.log("✅ Token received:",t),localStorage.setItem("token",t),localStorage.setItem("user",JSON.stringify(e)),c(t),u(e),console.log("✅ User successfully registered:",e.username),p.push("/dashboard"),e}switch(r?.code){case"username_exists":a.default.error("Person don fes u use that Username!");break;case"email_exists":a.default.error("Gadus don dey use that email!");break;case"whatsappNumber_exists":a.default.error("this number don dey linked already, try another one!");break;case"validation_error":a.default.error(`Validation error: ${r.message}`);break;default:a.default.error(r?.message||"Registration failed. Please try again.")}return null}catch(e){throw console.error("❌ Register error:",e),a.default.error("Network error. Please try again."),e}};return(0,r.useEffect)(()=>{console.log("⚙️ AuthProvider initialized...");let e=localStorage.getItem("token"),t=localStorage.getItem("user");if(e&&t)try{let r=(0,o.jwtDecode)(e),n=Date.now();console.log("📦 Saved token detected:",r),console.log("📆 Expiration:",new Date(1e3*r.exp)),1e3*r.exp>n?(console.log("✅ Token still valid, restoring session..."),c(e),u(JSON.parse(t))):(console.warn("⚠️ Token expired at:",new Date(1e3*r.exp)),m("Token expired"))}catch(e){console.error("❌ Token decode error:",e),m("Invalid token")}else console.log("ℹ️ No token found in storage.");f(!1)},[]),(0,t.jsx)(i.Provider,{value:{user:s,token:l,login:y,register:h,logout:m,loading:d},children:e})},"useAuth",0,()=>{let e=(0,r.useContext)(i);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}])},9668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let n=e.r(9768),o="undefined"==typeof window,a=o?()=>{}:n.useLayoutEffect,i=o?()=>{}:n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),s()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4740,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return y},defaultHead:function(){return d}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(253),i=e.r(8545),s=e.r(3716),u=i._(e.r(9768)),l=a._(e.r(9668)),c=e.r(5215);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(21);let p=["name","httpEquiv","charSet","itemProp"];function m(e){let t,r,n,o;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,n=new Set,o={},e=>{let a=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?a=!1:n.add(r);else{let t=e.props[r],n=o[r]||new Set;("name"!==r||!i)&&n.has(t)?a=!1:(n.add(t),o[r]=n)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return u.default.cloneElement(e,{key:r})})}let y=function({children:e}){let t=(0,u.useContext)(c.HeadManagerContext);return(0,s.jsx)(l.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},2136,(e,t,r)=>{t.exports=e.r(4740)},749,e=>{e.v(t=>Promise.all(["static/chunks/4646eb72ab9cca94.js"].map(t=>e.l(t))).then(()=>t(4028)))},2031,e=>{e.v(t=>Promise.all(["static/chunks/8b8953f394dde773.js"].map(t=>e.l(t))).then(()=>t(8439)))}]);