var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=f();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=u(),n=f(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function E(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function D(e,t){me++,pe[me]=e.current,e.current=t}var ge=he(null),_e=he(null),ve=he(null),ye=he(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}E(ge),D(ge,e)}function xe(){E(ge),E(_e),E(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(E(ge),E(_e)),ye.current===e&&(E(ye),Qf._currentValue=fe)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function O(e){e[wt]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return je.call(It,e)?!0:je.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(de(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(h({},Ln,{dataTransfer:0})),Bn=kn(h({},Mn,{relatedTarget:0})),Vn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(h({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(h({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),Qn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=kn(h({},An,{newState:0,oldState:0})),tr=[9,13,27,32],nr=yn&&`CompositionEvent`in window,rr=null;yn&&`documentMode`in document&&(rr=document.documentMode);var ir=yn&&`TextEvent`in window&&!rr,ar=yn&&(!nr||rr&&8<rr&&11>=rr),or=` `,sr=!1;function cr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function lr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ur=!1;function dr(e,t){switch(e){case`compositionend`:return lr(t);case`keypress`:return t.which===32?(sr=!0,or):null;case`textInput`:return e=t.data,e===or&&sr?null:e;default:return null}}function fr(e,t){if(ur)return e===`compositionend`||!nr&&cr(e,t)?(e=Tn(),wn=Cn=Sn=null,ur=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ar&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){yd(e,0)}function yr(e){if(Gt(Ot(e)))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(yn){var Sr;if(yn){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,fn(e)),_n(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function Ar(e,t){if(e===`input`||e===`change`)return yr(t)}function jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:jr;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var zr=yn&&`documentMode`in document&&11>=document.documentMode,Br=null,Vr=null,Hr=null,Ur=!1;function Wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Br==null||Br!==Kt(r)||(r=Br,`selectionStart`in r&&Rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Nr(Hr,r)||(Hr=r,r=Ed(Vr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Kr={animationend:Gr(`Animation`,`AnimationEnd`),animationiteration:Gr(`Animation`,`AnimationIteration`),animationstart:Gr(`Animation`,`AnimationStart`),transitionrun:Gr(`Transition`,`TransitionRun`),transitionstart:Gr(`Transition`,`TransitionStart`),transitioncancel:Gr(`Transition`,`TransitionCancel`),transitionend:Gr(`Transition`,`TransitionEnd`)},qr={},Jr={};yn&&(Jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),`TransitionEvent`in window||delete Kr.transitionend.transition);function Yr(e){if(qr[e])return qr[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jr)return qr[e]=t[n];return e}var Xr=Yr(`animationend`),Zr=Yr(`animationiteration`),Qr=Yr(`animationstart`),$r=Yr(`transitionrun`),ei=Yr(`transitionstart`),ti=Yr(`transitioncancel`),ni=Yr(`transitionend`),ri=new Map,ii=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ii.push(`scrollEnd`);function ai(e,t){ri.set(e,t),Mt(t,[e])}var oi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},si=[],ci=0,li=0;function ui(){for(var e=ci,t=li=ci=0;t<e;){var n=si[t];si[t++]=null;var r=si[t];si[t++]=null;var i=si[t];si[t++]=null;var a=si[t];if(si[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&mi(n,i,a)}}function di(e,t,n,r){si[ci++]=e,si[ci++]=t,si[ci++]=n,si[ci++]=r,li|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function fi(e,t,n,r){return di(e,t,n,r),hi(e)}function pi(e,t){return di(e,null,null,t),hi(e)}function mi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function hi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gi={};function _i(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,t,n,r){return new _i(e,t,n,r)}function yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bi(e,t){var n=e.alternate;return n===null?(n=vi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function xi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)yi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=vi(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return Ci(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=vi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=vi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=vi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=vi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ci(e,t,n,r){return e=vi(7,e,r,t),e.lanes=n,e}function wi(e,t,n){return e=vi(6,e,null,t),e.lanes=n,e}function Ti(e){var t=vi(18,null,null,0);return t.stateNode=e,t}function Ei(e,t,n){return t=vi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Di=new WeakMap;function Oi(e,t){if(typeof e==`object`&&e){var n=Di.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Di.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var ki=[],Ai=0,ji=null,Mi=0,Ni=[],Pi=0,Fi=null,Ii=1,Li=``;function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=ji,ji=e,Mi=t}function zi(e,t,n){Ni[Pi++]=Ii,Ni[Pi++]=Li,Ni[Pi++]=Fi,Fi=e;var r=Ii;e=Li;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ii=1<<32-Je(t)+i|n<<i|r,Li=a+e}else Ii=1<<a|n<<i|r,Li=e}function Bi(e){e.return!==null&&(Ri(e,1),zi(e,1,0))}function Vi(e){for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null;for(;e===Fi;)Fi=Ni[--Pi],Ni[Pi]=null,Li=Ni[--Pi],Ni[Pi]=null,Ii=Ni[--Pi],Ni[Pi]=null}function Hi(e,t){Ni[Pi++]=Ii,Ni[Pi++]=Li,Ni[Pi++]=Fi,Ii=t.id,Li=t.overflow,Fi=e}var Ui=null,k=null,A=!1,Wi=null,Gi=!1,Ki=Error(i(519));function qi(e){throw $i(Oi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ki}function Ji(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||qi(e,!0)}function Yi(e){for(Ui=e.return;Ui;)switch(Ui.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:Ui=Ui.return}}function Xi(e){if(e!==Ui)return!1;if(!A)return Yi(e),A=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&k&&qi(e),Yi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));k=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));k=uf(e)}else t===27?(t=k,Zd(e.type)?(e=lf,lf=null,k=e):k=t):k=Ui?cf(e.stateNode.nextSibling):null;return!0}function Zi(){k=Ui=null,A=!1}function Qi(){var e=Wi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Wi=null),e}function $i(e){Wi===null?Wi=[e]:Wi.push(e)}var ea=he(null),ta=null,na=null;function ra(e,t,n){D(ea,t._currentValue),t._currentValue=n}function ia(e){e._currentValue=ea.current,E(ea)}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function oa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),aa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),aa(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function sa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Mr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&oa(t,e,n,r),t.flags|=262144}function ca(e){for(e=e.firstContext;e!==null;){if(!Mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function la(e){ta=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function j(e){return da(ta,e)}function ua(e,t){return ta===null&&la(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},na===null){if(e===null)throw Error(i(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=w.S;w.S=function(e,t){tu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=he(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?D(Ta,Ta.current):D(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(i(460)),Aa=Error(i(474)),ja=Error(i(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(i(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(i(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=bi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Fa(i)===t.type)?(t=a(t,n.props),Ha(t,n),t.return=e,t):(t=Si(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ei(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ci(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=wi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=Si(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ei(t,e.mode,n),t.return=e,t;case ie:return t=Fa(t),f(e,t,n)}if(de(t)||ce(t))return t=Ci(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Fa(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Fa(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),A&&Ri(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return A&&Ri(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),A&&Ri(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),A&&Ri(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return A&&Ri(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),A&&Ri(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Fa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ha(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Ci(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=Si(o.type,o.key,o.props,null,e.mode,c),Ha(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ei(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=Fa(o),b(e,r,o,c)}if(de(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Va(o),c);if(o.$$typeof===S)return b(e,r,ua(e,o),c);Ua(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=wi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=vi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=hi(e),mi(e,null,n),t}return di(e,r,t,n),hi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=he(null),oo=he(0);function so(e,t){e=Gl,D(oo,e),D(ao,t),Gl=e|t.baseLanes}function co(){D(oo,Gl),D(ao,ao.current)}function lo(){Gl=oo.current,E(ao),E(oo)}var uo=he(null),fo=null;function po(e){var t=e.alternate;D(N,N.current&1),D(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){D(N,N.current),D(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(D(N,N.current),D(uo,e),fo===null&&(fo=e)):go(e)}function go(){D(N,N.current),D(uo,uo.current)}function _o(e){E(uo),fo===e&&(fo=null),E(N)}var N=he(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(i(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){w.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(i(300));e===null||z||(e=e.dependencies,e!==null&&ca(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var a=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=a)throw Error(i(301));if(a+=1,I=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=Ks,o=t(n,r)}while(xo);return o}function jo(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(i(467)):Error(i(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return j(e)}throw Error(i(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Mr(o,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Mr(o,t.memoizedState)||(z=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=P,a=R(),o=A;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Mr((F||a).memoizedState,n);if(s&&(a.memoizedState=n,z=!0),a=a.queue,hs(qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function Yo(e){var t=pi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,a){if(Bs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(A){var n=G.formState;if(n!==null){a:{var r=P;if(A){if(k){b:{for(var i=k,a=Gi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){k=cf(i.nextSibling),r=i.data===`F!`;break a}}qi(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return Mr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),Mr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,zs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=As(e).queue;Ds(e,a,t,fe,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return j(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=fi(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o))return di(e,t,i,0),G===null&&ui(),!1}catch{}if(n=fi(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(i(479))}else t=fi(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Us={readContext:j,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:j,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:j,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,a=Fo();if(A){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(A){var n=Li,r=Ii;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:j,use:Ro,useCallback:Cs,useContext:j,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:j,use:Ro,useCallback:Cs,useContext:j,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){oi(e)}function $s(e){console.error(e)}function ec(e){oi(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&sa(t,n,a,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(A)return t=uo.current,t===null?(r!==Ki&&(t=Error(i(423),{cause:r}),$i(Oi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Oi(r,n),a=rc(e.stateNode,r,a),$a(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ki&&(e=Error(i(422),{cause:r}),$i(Oi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Oi(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Oi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ic(a),ac(a,e,n,r),$a(n,a),!1}n=n.return}while(n!==null);return!1}var sc=Error(i(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return la(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(A&&s&&Bi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!yi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=Si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=bi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&sa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(A){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=k)?(e=rf(e,Gi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fi===null?null:{id:Ii,overflow:Li},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Ui=t,k=null)):e=null,e===null)throw qi(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(mo(t),a)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(z||sa(e,t,n,!1),a=(n&e.childLanes)!==0,z||a){if(r=G,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,pi(e,s),hu(r,e,s),sc;Du(),t=gc(e,t,n)}else e=o.treeContext,k=cf(s.nextSibling),Ui=t,A=!0,Wi=null,Gi=!1,e!==null&&Hi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=bi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return la(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(A&&r&&Bi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return la(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(A&&r&&Bi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(la(t),t.stateNode===null){var a=gi,o=n.contextType;typeof o==`object`&&o&&(a=j(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?j(o):gi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=gi,typeof u==`object`&&u&&(o=j(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=gi,typeof l==`object`&&l&&(c=j(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&ca(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ca(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Zi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(A){if(a?po(t):go(t),(e=k)?(e=rf(e,Gi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fi===null?null:{id:Ii,overflow:Li},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Ui=t,k=null)):e=null,e===null)throw qi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(go(t),a=t.mode,c=Oc({mode:`hidden`,children:c},a),r=Ci(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,a=t.mode,r=Oc({mode:`visible`,children:r.children},a),c=Ci(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,$i({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||sa(e,t,n,!1),s=(n&e.childLanes)!==0,z||s){if(s=G,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,pi(e,r),hu(s,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,k=cf(c.nextSibling),Ui=t,A=!0,Wi=null,Gi=!1,e!==null&&Hi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return a?(go(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=bi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Ci(c,a,n,null),c.flags|=2):c=bi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(a=c.cachePool,a===null?a=Oa():(l=M._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=bi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=vi(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(N,o),cc(e,t,r,n),r=A?Mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=bi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ca(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ra(t,M,e.memoizedState.cache),Zi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(sa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:ra(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,A&&t.flags&1048576&&zi(t,Mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)yi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(i(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Zs(r,t.pendingProps),xc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ya(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ra(t,M,r),r!==o.cache&&oa(t,[M],n,!0),to(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==a){a=Oi(Error(i(424)),t),$i(a),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(k=cf(e.firstChild),Ui=t,A=!0,Wi=null,Gi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Zi(),r===a){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:A||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Pd(r,n,e),O(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&A&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Ui=t,Gi=!0,a=k,Zd(t.type)?(lf=a,k=cf(r.firstChild)):k=a),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&A&&((a=r=k)&&(r=tf(r,t.type,t.pendingProps,Gi),r===null?a=!1:(t.stateNode=r,Ui=t,k=cf(r.firstChild),Gi=!1,a=!0)),a||qi(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Oo(e,t,jo,null,null,n),Qf._currentValue=a),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&A&&((e=n=k)&&(n=nf(n,t.pendingProps,Gi),n===null?e=!1:(t.stateNode=n,Ui=t,k=null,e=!0)),e||qi(t)),null;case 13:return Ec(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ra(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,la(t),a=j(a),r=r(a),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return la(t),r=j(M),e===null?(a=Ea(),a===null&&(a=G,o=ha(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ja(t),ra(t,M,a)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ra(t,M,r),r!==a.cache&&oa(t,[M],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ra(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!A)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Vi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ia(M),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qi())),B(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Lc(t),o===null?(B(t),Rc(t,a,null,r,n)):(B(t),zc(t,o))):o?o===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,o)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}e=ge.current,Xi(t)?Ji(t,e):(e=ff(a,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}if(o=ge.current,Xi(t))Ji(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Xi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ui,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||qi(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Xi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(i(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),a=!1}else a=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ia(t.type),B(t),null;case 19:if(E(N),r=t.memoizedState,r===null)return B(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=vo(e),o!==null){for(t.flags|=128,Vc(r,!1),e=o.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)xi(n,e),n=n.sibling;return D(N,N.current&1|2),A&&Ri(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>nu&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304)}else{if(!a)if(e=vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!A)return B(t),null}else 2*Ie()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=N.current,D(N,a?n&1|2:n&1),A&&Ri(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&E(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(M),B(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(Vi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(M),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(i(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(N),null;case 4:return xe(),null;case 10:return ia(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&E(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Vi(t),t.tag){case 3:ia(M),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:E(N);break;case 10:ia(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&E(Ta);break;case 24:ia(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Lr(e),Rr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[_t]=e,O(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,O(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||a,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=j(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return j(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:w.T===null?mt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||A){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),st(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Ie(),10<a)){if(yu(r,t,Yl,!Hl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Nl(t,a,d);var m=(a&62914560)===a?eu-Ie():(a&4194048)===a?tu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,na=ta=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=bi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=rt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ui(),n}function Cu(e,t){P=null,w.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Oi(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=w.H;return w.H=Us,e===null?Us:e}function Eu(){var e=w.A;return w.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,na=ta=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,ui()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Ie()+500,Su(e,t)):Ul=rt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Na(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return na=ta=null,w.H=r,w.A=a,W=n,K===null?(G=null,q=0,ui(),Y):0}function ju(){for(;K!==null&&!Pe();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=xi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){na=ta=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Oi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Oi(n,e.current)),K=null;return}t.flags&32768?(A||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=li,ct(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,a=T.p,T.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,T.p=a,w.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Lr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ir(s.ownerDocument.documentElement,s)){if(c!==null&&Rr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Fr(s,h),v=Fr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,T.p=r,w.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=w.T,a=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{T.p=a,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=Oi(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Oi(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ie()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=pi(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=nt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=nt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ii.length;hd++){var gd=ii[hd];ai(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ai(Xr,`onAnimationEnd`),ai(Zr,`onAnimationIteration`),ai(Qr,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai($r,`onTransitionRun`),ai(ei,`onTransitionStart`),ai(ti,`onTransitionCancel`),ai(ni,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ri.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Yn;break;case`focusin`:u=`focus`,l=Bn;break;case`focusout`:u=`blur`,l=Bn;break;case`beforeblur`:case`afterblur`:l=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Zn;break;case Xr:case Zr:case Qr:l=Vn;break;case ni:l=Qn;break;case`scroll`:case`scrollend`:l=Nn;break;case`wheel`:l=$n;break;case`copy`:case`cut`:case`paste`:l=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Xn;break;case`toggle`:case`beforetoggle`:l=er}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=br;else if(mr(c))if(xr)v=Ar;else{v=Or;var y=Dr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=br):v=kr;if(v&&=v(e,r)){hr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(Br=y,Vr=r,Hr=null);break;case`focusout`:Hr=Vr=Br=null;break;case`mousedown`:Ur=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ur=!1,Wr(s,n,i);break;case`selectionchange`:if(zr)break;case`keydown`:case`keyup`:Wr(s,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ur?cr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ar&&n.locale!==`ko`&&(ur||x!==`onCompositionStart`?x===`onCompositionEnd`&&ur&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,ur=!0)),y=Ed(r,x),0<y.length&&(x=new Un(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=lr(n),b!==null&&(x.data=b)))),(b=ir?dr(e,n):fr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),O(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),O(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),O(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);O(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),O(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,O(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),O(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,O(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),O(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,O(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),O(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,O(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),O(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=vi(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=gi,e):gi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=pi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=pi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=pi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Qs,s=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[yt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(f(),1),v=g(),y=`﻿<nav class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-30 shadow-sm transition-colors duration-200">\r
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
        <div class="flex justify-between min-h-[4rem] py-1">\r
          <div class="flex flex-1 min-w-0">\r
            <!-- Logo -->\r
            <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="switchView('consulting')">\r
              <div id="header-logo-container" class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-sm">\r
                <i class="fa-solid fa-leaf"></i>\r
              </div>\r
              <span id="header-brand-name" class="font-bold text-[25px] leading-[35px] text-slate-800 tracking-tight">Nuri Kitchen</span>\r
            </div>\r
            <!-- Desktop Menu -->\r
            <div class="hidden md:ml-1 lg:ml-2 md:flex flex-1 min-w-0 gap-0.5 xl:gap-2 flex-wrap items-center justify-center">\r
              <a id="nav-dashboard" onclick="switchView('dashboard')" class="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600 inline-flex items-center px-0.5 pt-1 border-b-2 text-[15px] 2xl:text-[15px] leading-[20px] font-medium transition-colors cursor-pointer whitespace-nowrap">\r
                <i class="fa-solid fa-chart-pie mr-0.5 xl:mr-1.5"></i> Tổng quan\r
              </a>\r
              <a id="nav-marketing" onclick="switchView('marketing')" class="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600 inline-flex items-center px-0.5 pt-1 border-b-2 text-[15px] 2xl:text-[15px] leading-[20px] font-medium transition-colors cursor-pointer whitespace-nowrap">\r
                <i class="fa-solid fa-bullseye mr-0.5 xl:mr-1.5"></i> Marketing\r
              </a>\r
              <a id="nav-orders" onclick="switchView('orders')" class="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600 inline-flex items-center px-0.5 pt-1 border-b-2 text-[15px] 2xl:text-[15px] leading-[20px] font-medium transition-colors cursor-pointer relative whitespace-nowrap">\r
                <i class="fa-solid fa-receipt mr-0.5 xl:mr-1.5"></i> Quản lý đơn hàng\r
                <span id="order-badge" class="hidden bg-red-500 text-white text-[15px] font-bold px-1.5 py-0.5 rounded-full ml-1.5 animate-bounce">0</span>\r
              </a>\r
              <a id="nav-inventory" onclick="switchView('inventory')" class="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600 inline-flex items-center px-0.5 pt-1 border-b-2 text-[15px] 2xl:text-[15px] leading-[20px] font-medium transition-colors cursor-pointer whitespace-nowrap">\r
                <i class="fa-solid fa-boxes-stacked mr-0.5 xl:mr-1.5"></i> QL Nguyên liệu\r
              </a>\r
              <a id="nav-messages" onclick="switchView('messages')" class="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600 inline-flex items-center px-0.5 pt-1 border-b-2 text-[15px] 2xl:text-[15px] leading-[20px] font-medium transition-colors cursor-pointer whitespace-nowrap relative">\r
                <i class="fa-solid fa-comments mr-0.5 xl:mr-1.5"></i> Tin nhắn\r
                <span id="nav-messages-badge" class="hidden bg-red-500 text-white text-[15px] font-bold px-1.5 py-0.5 rounded-full ml-1.5">0</span>\r
              </a>\r
              <a id="nav-menu" onclick="switchView('menu')" class="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600 inline-flex items-center px-0.5 pt-1 border-b-2 text-[15px] 2xl:text-[15px] leading-[20px] font-medium transition-colors cursor-pointer whitespace-nowrap">\r
                <i class="fa-solid fa-utensils mr-0.5 xl:mr-1.5"></i> Quản lý Menu\r
              </a>\r
              <a id="nav-customers" onclick="switchView('customers')" class="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600 inline-flex items-center px-0.5 pt-1 border-b-2 text-[15px] 2xl:text-[15px] leading-[20px] font-medium transition-colors cursor-pointer whitespace-nowrap">\r
                <i class="fa-solid fa-users mr-0.5 xl:mr-1.5"></i> Dữ liệu KH\r
                <span id="nav-customers-badge" class="hidden bg-red-500 text-white text-[15px] font-bold px-1.5 py-0.5 rounded-full ml-1.5 animate-pulse">0</span>\r
              </a>\r
              <a id="nav-consulting" onclick="switchView('consulting')" class="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600 inline-flex items-center px-0.5 pt-1 border-b-2 text-[15px] 2xl:text-[15px] leading-[20px] font-medium transition-colors cursor-pointer whitespace-nowrap">\r
                <i class="fa-solid fa-stethoscope mr-0.5 xl:mr-1.5"></i> Tư vấn dinh dưỡng\r
              </a>\r
              <a id="nav-kitchen" onclick="switchView('kitchen')" class="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600 inline-flex items-center px-0.5 pt-1 border-b-2 text-[15px] 2xl:text-[15px] leading-[20px] font-medium transition-colors cursor-pointer whitespace-nowrap">\r
                <i class="fa-solid fa-utensils mr-0.5 xl:mr-1.5"></i> Nuri Kitchen\r
              </a>\r
              <a id="nav-system" onclick="switchView('system')" class="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600 inline-flex items-center px-0.5 pt-1 border-b-2 text-[15px] 2xl:text-[15px] leading-[20px] font-medium transition-colors cursor-pointer whitespace-nowrap">\r
                <i class="fa-solid fa-gear mr-0.5 xl:mr-1.5"></i> Hệ thống\r
              </a>\r
            </div>\r
          </div>\r
          <div class="flex items-center gap-2">\r
            <!-- Admin Notification Bell (Hidden by default, shown when admin logged in) -->\r
            <div id="admin-notification-container" class="relative hidden items-center">\r
              <button onclick="toggleAdminNotifications()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer relative" title="Thông báo hệ thống">\r
                <i class="fa-solid fa-bell"></i>\r
                <span id="admin-notification-badge" class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full hidden border-2 border-white dark:border-slate-900"></span>\r
              </button>\r
              <div id="admin-notification-dropdown" class="absolute top-10 right-0 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-700 hidden flex-col overflow-hidden z-50 transform origin-top-right transition-all">\r
                <div class="p-3 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">\r
                  <h3 class="font-bold text-slate-800 dark:text-white text-[17.5px] leading-[25px]">Thông báo</h3>\r
                  <button onclick="markAllAdminNotificationsAsRead()" class="text-[15px] leading-[20px] text-primary hover:underline cursor-pointer font-medium">Đánh dấu đã đọc</button>\r
                </div>\r
                <div id="admin-notification-list" class="max-h-80 overflow-y-auto flex flex-col">\r
                  <!-- Notifications will be injected here -->\r
                </div>\r
              </div>\r
            </div>\r
\r
            <button onclick="toggleTheme()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors" title="Chuyển đổi giao diện">\r
              <i class="fa-solid fa-moon dark:hidden"></i>\r
              <i class="fa-solid fa-sun hidden dark:block"></i>\r
            </button>\r
            <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[17.5px] leading-[25px] border border-emerald-200 cursor-pointer hidden md:flex" title="Tài khoản Quản trị">\r
              AD\r
            </div>\r
            <button id="admin-logout-btn" onclick="adminLogout()" class="text-[15px] leading-[20px] bg-red-550 bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-950/20 dark:hover:bg-red-950/40 dark:text-red-400 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors hidden md:flex" title="Đăng xuất Quản trị">\r
              <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất\r
            </button>\r
            <button onclick="\r
                document\r
                  .getElementById('mobile-menu')\r
                  .classList.toggle('hidden')\r
              " class="md:hidden w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors focus:outline-none">\r
              <i class="fa-solid fa-bars"></i>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Mobile menu -->\r
      <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg absolute w-full left-0">\r
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">\r
                    <a id="nav-mobile-kitchen" onclick="\r
              switchView('kitchen');\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="block px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"><i class="fa-solid fa-house w-6"></i> Trang chủ</a>\r
          <a id="nav-mobile-dashboard" onclick="\r
              switchView('dashboard');\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="block px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"><i class="fa-solid fa-chart-pie w-6"></i> Tổng quan</a>\r
          <a id="nav-mobile-marketing" onclick="\r
              switchView('marketing');\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="block px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"><i class="fa-solid fa-bullseye w-6"></i> Marketing</a>\r
          <a id="nav-mobile-orders" onclick="\r
              switchView('orders');\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors flex justify-between items-center"><div class="flex items-center">\r
              <i class="fa-solid fa-receipt w-6"></i> Quản lý đơn hàng\r
            </div>\r
            <span id="mobile-order-badge" class="hidden bg-red-500 text-white text-[15px] font-bold px-1.5 py-0.5 rounded-full">0</span></a>\r
          <a id="nav-mobile-inventory" onclick="\r
              switchView('inventory');\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="block px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"><i class="fa-solid fa-boxes-stacked w-6"></i> QL Nguyên liệu</a>\r
          <a id="nav-mobile-messages" onclick="\r
              switchView('messages');\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors flex justify-between items-center"><div class="flex items-center">\r
              <i class="fa-solid fa-comments w-6"></i> Tin nhắn\r
            </div>\r
            <span id="nav-mobile-messages-badge" class="hidden bg-red-500 text-white text-[15px] font-bold px-1.5 py-0.5 rounded-full">0</span></a>\r
          <a id="nav-mobile-menu" onclick="\r
              switchView('menu');\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="block px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"><i class="fa-solid fa-utensils w-6"></i> Quản lý Menu</a>\r
          <a id="nav-mobile-customers" onclick="\r
              switchView('customers');\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors flex justify-between items-center"><i class="fa-solid fa-users w-6"></i> Dữ liệu KH</a>\r
          <a id="nav-mobile-consulting" onclick="\r
              switchView('consulting');\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="block px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"><i class="fa-solid fa-stethoscope w-6"></i> Tư vấn dinh dưỡng</a>\r
          <a id="nav-mobile-system" onclick="\r
              switchView('system');\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="block px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"><i class="fa-solid fa-gear w-6"></i> Hệ thống</a>\r
          <a id="admin-logout-mobile-btn" onclick="\r
              adminLogout();\r
              document.getElementById('mobile-menu').classList.add('hidden');\r
            " class="block px-3 py-2 rounded-md text-[20px] leading-[30px] font-medium text-red-600 dark:text-red-400 cursor-pointer transition-colors border-t border-slate-150 dark:border-slate-700/50 mt-2 pt-2 hidden"><i class="fa-solid fa-right-from-bracket w-6"></i> Đăng xuất Quản\r
            trị</a>\r
        </div>\r
      </div>\r
    </nav>\r
`,b=`<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- View: DASHBOARD (Thống kê) -->
      <div id="view-dashboard" class="hidden animate-fade-in pb-12">
        <!-- Goal Tracking Bar -->
        <div class="bg-white rounded-xl p-4 shadow-sm border border-slate-100 mb-6 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3 w-full max-w-xl">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <i class="fa-solid fa-bullseye"></i>
            </div>
            <div class="flex-1">
              <div class="flex justify-between text-[17.5px] leading-[25px] mb-1.5">
                <span class="font-bold text-slate-700">Mục tiêu Doanh thu (Tháng này)</span>
                <span class="font-bold text-primary" id="goal-progress-text">0%</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div id="goal-progress-bar" class="bg-primary h-2.5 rounded-full transition-all duration-1000" style="width: 0%"></div>
              </div>
            </div>
          </div>
          <div class="text-right shrink-0 hidden md:block">
            <div class="text-[15px] leading-[20px] text-slate-500">
              Mục tiêu:
              <span id="revenue-goal" oninput="window.updateTextSync('revenue-goal', this.innerText)" contenteditable="true" spellcheck="false" class="font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded px-1 -mx-1 cursor-text transition-colors">50.000.000đ</span>
            </div>
            <div class="text-[15px] leading-[20px] text-slate-500">
              Đã đạt:
              <span class="font-semibold text-emerald-600" id="goal-current-text">0đ</span>
            </div>
          </div>
        </div>

        <!-- Header & Alerts -->
        <div class="flex flex-col xl:flex-row xl:items-start justify-between mb-8 gap-6">
          <div>
            <h1 class="text-[30px] leading-[40px] font-bold text-slate-900">
              Tổng quan &amp; Thống kê
            </h1>
            <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
              Nắm bắt nhanh tình hình hoạt động kinh doanh và dữ liệu khách hàng
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-1 xl:justify-end">
            <!-- Alerts Mini Panel -->
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center gap-3 flex-1 max-w-md cursor-pointer hover:bg-amber-100 transition-colors" onclick="switchView('orders')">
              <div class="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <i class="fa-solid fa-bell animate-swing"></i>
              </div>
              <div>
                <div class="text-[17.5px] leading-[25px] font-bold text-amber-800" id="dashboard-alert-title">
                  Không có thông báo mới
                </div>
                <div class="text-[15px] leading-[20px] text-amber-700" id="dashboard-alert-desc">
                  Tuyệt vời! Bạn đã xử lý hết công việc.
                </div>
              </div>
            </div>

            <!-- Time Filter -->
            <div class="flex items-center gap-2">
              <select id="dashboard-time-filter" onchange="renderDashboard()" class="rounded-lg border border-slate-300 py-2.5 px-4 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary bg-white shadow-sm font-medium text-slate-700 cursor-pointer min-w-[150px]">
                <option value="today">Hôm nay</option>
                <option value="week" selected="">7 ngày qua</option>
                <option value="month">30 ngày qua</option>
                <option value="thisMonth">Tháng này</option>
                <option value="lastMonth">Tháng trước</option>
                <option value="custom">Tùy chỉnh</option>
                <option value="all">Tất cả thời gian</option>
              </select>
              <div id="dashboard-custom-date" class="hidden items-center gap-2">
                <input type="date" id="dashboard-date-from" onchange="renderDashboard()" class="rounded-lg border border-slate-300 py-2.5 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary bg-white shadow-sm text-slate-700">
                <span class="text-slate-500 font-medium">-</span>
                <input type="date" id="dashboard-date-to" onchange="renderDashboard()" class="rounded-lg border border-slate-300 py-2.5 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary bg-white shadow-sm text-slate-700">
              </div>
              <button class="bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 px-3 rounded-lg shadow-sm" title="So sánh">
                <i class="fa-solid fa-code-compare"></i>
              </button>
              <button class="bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 px-3 rounded-lg shadow-sm" title="Xuất báo cáo">
                <i class="fa-solid fa-file-export"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- KPI Cards (Bento Style) -->
        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          <!-- Revenue -->
          <div class="xl:col-span-2 bg-[#151a26] rounded-2xl p-5 shadow-sm border border-emerald-900/30 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div class="text-emerald-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
              <i class="fa-solid fa-wallet"></i> Doanh thu
            </div>
            <div class="text-[30px] leading-[40px] md:text-[37.5px] leading-[45px] font-bold text-emerald-500 relative z-10 mt-1" id="kpi-revenue">
              0đ
            </div>
            <div class="text-[15px] leading-[20px] font-medium mt-2 flex items-center gap-1 relative z-10" id="kpi-revenue-trend">
              <span class="text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded"><i class="fa-solid fa-arrow-up"></i> 0%</span>
              <span class="text-slate-400 ml-1">so với kỳ trước</span>
            </div>
            <i class="fa-solid fa-wallet absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-emerald-500 opacity-10"></i>
          </div>

          <!-- Orders -->
          <div class="xl:col-span-1 bg-[#151a26] rounded-2xl p-5 shadow-sm border border-blue-900/30 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div class="text-blue-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
              <i class="fa-solid fa-receipt"></i> Đơn hàng
            </div>
            <div class="text-[30px] leading-[40px] md:text-[37.5px] leading-[45px] font-bold text-blue-500 relative z-10 mt-1" id="kpi-orders">
              0
            </div>
            <div class="text-[15px] leading-[20px] font-medium mt-2 flex items-center gap-1 relative z-10" id="kpi-orders-trend">
              <span class="text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded"><i class="fa-solid fa-arrow-up"></i> 0%</span>
            </div>
            <i class="fa-solid fa-receipt absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-blue-500 opacity-10"></i>
          </div>

          <!-- AOV -->
          <div class="xl:col-span-1 bg-[#151a26] rounded-2xl p-5 shadow-sm border border-purple-900/30 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div class="text-purple-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
              <i class="fa-solid fa-money-bill-wave"></i> AOV
            </div>
            <div class="text-[25px] leading-[35px] md:text-[30px] leading-[40px] font-bold text-purple-500 relative z-10 mt-1 truncate" id="kpi-aov">
              0đ
            </div>
            <div class="text-[15px] leading-[20px] text-slate-400 mt-2 relative z-10">
              Giá trị TB/đơn
            </div>
            <i class="fa-solid fa-money-bill-wave absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-purple-500 opacity-10"></i>
          </div>

          <!-- Retention -->
          <div class="xl:col-span-1 bg-[#151a26] rounded-2xl p-5 shadow-sm border border-rose-900/30 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div class="text-rose-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
              <i class="fa-solid fa-rotate-left"></i> KH quay lại
            </div>
            <div class="text-[30px] leading-[40px] md:text-[37.5px] leading-[45px] font-bold text-rose-500 relative z-10 mt-1" id="kpi-retention">
              0%
            </div>
            <div class="text-[15px] leading-[20px] font-medium mt-2 flex items-center gap-1 relative z-10" id="kpi-retention-trend">
              <span class="text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded"><i class="fa-solid fa-arrow-up"></i> 12%</span>
            </div>
            <i class="fa-solid fa-rotate-left absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-rose-500 opacity-10"></i>
          </div>

          <!-- Pending -->
          <div class="xl:col-span-1 bg-amber-500 rounded-2xl p-5 shadow-sm border border-amber-600 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer text-white" onclick="switchView('orders')">
            <div class="text-amber-100 text-[15px] leading-[20px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
              <i class="fa-solid fa-clock-rotate-left"></i> Cần xử lý
            </div>
            <div class="text-[37.5px] leading-[45px] md:text-[45px] leading-[50px] font-bold relative z-10 mt-1" id="kpi-pending">
              0
            </div>
            <div class="text-[15px] leading-[20px] mt-2 relative z-10 opacity-90">
              Đơn chờ xác nhận
            </div>
            <i class="fa-solid fa-arrow-right absolute right-4 bottom-4 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all"></i>
          </div>
        </div>

        <!-- Charts -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div class="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-bold text-slate-800 flex items-center gap-2">
                <i class="fa-solid fa-chart-area text-primary"></i> Tăng trưởng
                Doanh thu &amp; Đơn hàng
              </h3>
            </div>
            <div class="h-64 flex-1"><canvas id="revenueChart"></canvas></div>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col relative">
            <h3 class="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <i class="fa-solid fa-chart-pie text-orange-500"></i> Cơ cấu Trạng
              thái
            </h3>
            <div class="h-64 flex-1 relative flex items-center justify-center">
              <canvas id="statusChart"></canvas>
              <!-- Donut Center Text -->
              <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-4">
                <div class="text-[17.5px] leading-[25px] text-slate-500 font-medium">
                  Tổng số đơn
                </div>
                <div class="text-[30px] leading-[40px] font-bold text-slate-800" id="donut-total-orders">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Products List -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-bold text-slate-800 flex items-center gap-2">
              <i class="fa-solid fa-fire text-rose-500"></i> Sản phẩm bán chạy
              nhất
            </h3>
            <button onclick="switchView('menu')" class="text-[17.5px] leading-[25px] text-primary hover:text-primary-dark font-medium">
              Xem tất cả
            </button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr class="border-b border-slate-100 text-[17.5px] leading-[25px] text-slate-500">
                  <th class="pb-3 font-medium px-2 w-12 text-center">#</th>
                  <th class="pb-3 font-medium px-2">Sản phẩm</th>
                  <th class="pb-3 font-medium px-2 text-right">Đã bán</th>
                  <th class="pb-3 font-medium px-2 text-right">Doanh thu</th>
                  <th class="pb-3 font-medium px-2 text-right">Xu hướng</th>
                </tr>
              </thead>
              <tbody id="top-products-list">
                <!-- JS Rendered -->
                <tr>
                  <td colspan="5" class="text-center py-8 text-slate-400 text-[17.5px] leading-[25px]">
                    Chưa có dữ liệu
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Bản đồ Đơn hàng -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mt-6">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <h3 class="font-bold text-slate-800 flex items-center gap-2">
              <i class="fa-solid fa-map-location-dot text-indigo-500"></i> Bản
              đồ vị trí giao hàng
            </h3>
            <select id="dashboard-map-filter" onchange="renderDashboardMap()" class="rounded-lg border border-slate-300 py-1.5 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary bg-white">
              <option value="all">Tất cả trạng thái</option>
              <option value="pending">Chờ xác nhận</option>
              <option value="processing">Đang chuẩn bị</option>
              <option value="ready">Sẵn sàng giao</option>
              <option value="delivering">Đang giao</option>
              <option value="completed">Hoàn thành</option>
            </select>
          </div>
          <div class="h-[400px] w-full bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative z-10" id="dashboard-orders-map"></div>
        </div>
      </div>

      <!-- View: MARKETING TRACKING -->
      <div id="view-marketing" class="hidden animate-fade-in pb-12">
        <!-- Header & Tabs -->
        <div class="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 class="text-[30px] leading-[40px] font-bold text-slate-900 flex items-center gap-2">
              <i class="fa-solid fa-qrcode text-indigo-500"></i> QR &amp; Marketing
              Tracking
            </h1>
            <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
              Quản lý QR Code, theo dõi chuyển đổi và Customer Acquisition.
            </p>
          </div>
          <div class="flex bg-slate-100 p-1 rounded-lg overflow-x-auto hide-scrollbar">
            <button id="mkt-tab-btn-overview" onclick="switchMarketingTab('overview')" class="px-4 py-2 text-[17.5px] leading-[25px] font-bold text-indigo-600 bg-white shadow-sm rounded-md whitespace-nowrap cursor-pointer">
              Tổng quan &amp; Phân tích
            </button>
            <button id="mkt-tab-btn-history" onclick="switchMarketingTab('history')" class="px-4 py-2 text-[17.5px] leading-[25px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors whitespace-nowrap cursor-pointer">
              Lịch sử Quét QR
            </button>
            <button onclick="openTrackingModal()" class="px-4 py-2 text-[17.5px] leading-[25px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors whitespace-nowrap cursor-pointer">
              Chiến dịch QR
            </button>
            <button onclick="
                switchView('customers');
                switchCustomerTab('potential');
              " class="px-4 py-2 text-[17.5px] leading-[25px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors whitespace-nowrap cursor-pointer">
              Dữ liệu Leads
            </button>
          </div>
        </div>

        <div id="mkt-overview-content" class="animate-fade-in">
          <!-- KPI Cards -->
          <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div class="bg-[#151a26] rounded-xl p-5 shadow-sm border border-indigo-900/30 relative overflow-hidden">
              <div class="text-indigo-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
                <i class="fa-solid fa-link"></i> Tổng QR/Links
              </div>
              <div class="text-[30px] leading-[40px] md:text-[37.5px] leading-[45px] font-bold text-indigo-500 relative z-10" id="mkt-kpi-links">
                0
              </div>
              <div class="text-[15px] leading-[20px] font-medium mt-2 flex items-center gap-1 relative z-10" id="mkt-trend-links">
                <span class="text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded"><i class="fa-solid fa-arrow-up"></i> 0%</span>
              </div>
              <i class="fa-solid fa-link absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-indigo-500 opacity-10"></i>
            </div>

            <div class="bg-[#151a26] rounded-xl p-5 shadow-sm border border-sky-900/30 relative overflow-hidden">
              <div class="text-sky-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
                <i class="fa-solid fa-eye"></i> Lượt quét / KH xem
              </div>
              <div class="text-[30px] leading-[40px] md:text-[37.5px] leading-[45px] font-bold text-sky-500 relative z-10" id="mkt-kpi-scans">
                0
              </div>
              <div class="text-[15px] leading-[20px] font-medium mt-2 flex items-center gap-1 relative z-10" id="mkt-trend-scans">
                <span class="text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded"><i class="fa-solid fa-arrow-up"></i> 0%</span>
              </div>
              <i class="fa-solid fa-eye absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-sky-500 opacity-10"></i>
            </div>

            <div class="bg-[#151a26] rounded-xl p-5 shadow-sm border border-amber-900/30 relative overflow-hidden">
              <div class="text-amber-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
                <i class="fa-solid fa-user-tag"></i> Tổng Leads
              </div>
              <div class="text-[30px] leading-[40px] md:text-[37.5px] leading-[45px] font-bold text-amber-500 relative z-10" id="mkt-kpi-leads">
                0
              </div>
              <div class="text-[15px] leading-[20px] font-medium mt-2 flex items-center gap-1 relative z-10" id="mkt-trend-leads">
                <span class="text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded"><i class="fa-solid fa-arrow-up"></i> 0%</span>
              </div>
              <i class="fa-solid fa-user-tag absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-amber-500 opacity-10"></i>
            </div>

            <div class="bg-[#151a26] rounded-xl p-5 shadow-sm border border-emerald-900/30 relative overflow-hidden">
              <div class="text-emerald-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
                <i class="fa-solid fa-receipt"></i> Tổng đơn
              </div>
              <div class="text-[30px] leading-[40px] md:text-[37.5px] leading-[45px] font-bold text-emerald-500 relative z-10" id="mkt-kpi-orders">
                0
              </div>
              <div class="text-[15px] leading-[20px] font-medium mt-2 flex items-center gap-1 relative z-10" id="mkt-trend-orders">
                <span class="text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded"><i class="fa-solid fa-arrow-up"></i> 0%</span>
              </div>
              <i class="fa-solid fa-receipt absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-emerald-500 opacity-10"></i>
            </div>

            <div class="bg-[#151a26] rounded-xl p-5 shadow-sm border border-purple-900/30 relative overflow-hidden">
              <div class="text-purple-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
                <i class="fa-solid fa-crown"></i> Khách mua gói
              </div>
              <div class="text-[30px] leading-[40px] md:text-[37.5px] leading-[45px] font-bold text-purple-500 relative z-10" id="mkt-kpi-subs">
                0
              </div>
              <div class="text-[15px] leading-[20px] font-medium mt-2 flex items-center gap-1 relative z-10" id="mkt-trend-subs">
                <span class="text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded"><i class="fa-solid fa-arrow-up"></i> 0%</span>
              </div>
              <i class="fa-solid fa-crown absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-purple-500 opacity-10"></i>
            </div>
          </div>

          <!-- Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Source Chart -->
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
              <h3 class="font-bold text-slate-800 mb-6 text-[22.5px] leading-[35px]">
                Lưu lượng theo Nguồn (Traffic by Source)
              </h3>
              <div class="h-64 flex-1 relative">
                <canvas id="marketingSourceChart"></canvas>
              </div>
            </div>
            <!-- Funnel Chart -->
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
              <h3 class="font-bold text-slate-800 mb-6 text-[22.5px] leading-[35px] flex items-center gap-2">
                <i class="fa-solid fa-bullseye text-emerald-500"></i> Phễu
                Chuyển đổi (Conversion Funnel)
              </h3>
              <div class="h-64 flex-1">
                <canvas id="marketingFunnelChart"></canvas>
              </div>

              <div id="funnel-source-filters" class="mt-4 flex flex-wrap gap-2 justify-center">
                <!-- Source buttons will be generated here -->
              </div>
            </div>
          </div>

          <!-- PWA Mascot & App Badge Configuration -->
          <div class="mt-8 bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-6 border border-slate-100 dark:border-slate-800">
            <div class="flex flex-col lg:flex-row gap-8">
              <!-- LEFT: Configuration & Settings -->
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-[25px] leading-[35px] shadow-inner animate-pulse">
                    <i class="fa-solid fa-bell"></i>
                  </div>
                  <div>
                    <h2 class="text-[25px] leading-[35px] font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      Cấu hình Thông báo PWA &amp; Mascot
                      <span class="bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-[15px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Duolingo Style</span>
                    </h2>
                    <p class="text-[15px] leading-[20px] text-slate-500 mt-0.5">
                      Tạo các chiến dịch nhắc nhở tự động, đính kèm biểu cảm
                      Mascot sinh động và đồng bộ App Badge ngoài màn hình chính
                      của khách hàng.
                    </p>
                  </div>
                </div>

                <!-- APP BADGE CONTROL CARD -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm mb-6">
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex-1">
                      <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                        <h3 class="font-bold text-slate-800 dark:text-slate-200 text-[17.5px] leading-[25px]">
                          Tính năng Chấm đỏ Thông báo (App Badge)
                        </h3>
                      </div>
                      <p class="text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                        Hiển thị dấu chấm đỏ hoặc thông báo số lượng trên biểu
                        tượng ứng dụng PWA ngoài màn hình chính điện thoại của
                        khách hàng để kích thích họ nhấp mở khi có nước uống mới
                        hoặc thực đơn đề xuất.
                      </p>
                    </div>
                    <div class="relative inline-flex items-center cursor-pointer mt-1">
                      <input type="checkbox" id="pwa-badge-toggle" class="sr-only peer" onchange="togglePwaBadge(this.checked)">
                      <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:width-5 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-500"></div>
                    </div>
                  </div>

                  <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center flex-wrap gap-2">
                    <span class="text-[18px] text-slate-400">Trạng thái hiện tại:
                      <strong id="pwa-badge-status-text" class="text-slate-500">Đang Tắt</strong></span>
                    <button onclick="testAppBadgeTrigger()" class="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/20 dark:hover:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-lg text-[15px] leading-[20px] font-semibold flex items-center gap-1.5 transition-colors">
                      <i class="fa-solid fa-circle-exclamation"></i> Bật mô
                      phỏng &amp; Cập nhật
                    </button>
                  </div>
                </div>

                <!-- PWA CUSTOM ICON CONFIG CARD -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm mb-6">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-[25px] leading-[35px] shrink-0 shadow-md shadow-emerald-500/10">
                      <i class="fa-solid fa-mobile-screen"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="font-bold text-slate-800 dark:text-slate-200 text-[17.5px] leading-[25px] flex items-center gap-2">
                        Biểu tượng Ứng dụng PWA (PWA Icon)
                        <span class="bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-[14px] font-bold px-1.5 py-0.5 rounded">Tự tùy chỉnh</span>
                      </h3>
                      <p class="text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        Tải lên biểu tượng logo riêng của cửa hàng để áp dụng
                        lên ứng dụng PWA được cài đặt trên thiết bị cá nhân của
                        khách hàng.
                      </p>

                      <div class="mt-4 flex items-center gap-4 flex-wrap">
                        <!-- Live Preview of PWA Icon in Admin -->
                        <div class="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden shrink-0" id="pwa-admin-icon-preview-container">
                          <img id="pwa-admin-icon-preview-img" class="absolute inset-0 w-full h-full object-cover hidden">
                          <svg id="pwa-admin-icon-preview-svg" class="w-8 h-8 z-10" viewBox="0 0 512 512" fill="#ffffff">
                            <path d="M140 300 C140 180, 240 140, 280 0 C280 120, 180 160, 140 300 Z" opacity="0.9"></path>
                            <path d="M140 300 C140 180, 40 140, 0 0 C0 120, 100 160, 140 300 Z" opacity="0.9"></path>
                          </svg>
                        </div>

                        <!-- Control buttons and upload area -->
                        <div class="flex-1 min-w-[200px]">
                          <div class="flex items-center gap-2.5">
                            <!-- Hidden Input -->
                            <input type="file" id="pwa-icon-file-input" accept="image/*" class="hidden" onchange="handlePwaIconUpload(event)">

                            <!-- Upload Trigger Button -->
                            <button onclick="
                                document
                                  .getElementById('pwa-icon-file-input')
                                  .click()
                              " class="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl text-[15px] leading-[20px] font-bold transition-all flex items-center gap-2 border border-emerald-200/30 cursor-pointer">
                              <i class="fa-solid fa-cloud-arrow-up text-[17.5px] leading-[25px]"></i>
                              Tải ảnh biểu tượng lên
                            </button>

                            <!-- Reset Default Button -->
                            <button id="pwa-icon-reset-btn" onclick="resetPwaIconToDefault()" class="px-3 py-2 bg-slate-150 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 rounded-xl text-[15px] leading-[20px] font-semibold transition-all flex items-center gap-1.5 hidden cursor-pointer">
                              <i class="fa-solid fa-arrow-rotate-left"></i> Khôi
                              phục mặc định
                            </button>
                          </div>
                          <p class="text-[15px] text-slate-400 mt-2 leading-relaxed">
                            * Hỗ trợ định dạng PNG, JPG, JPEG, SVG. Nên sử dụng
                            hình ảnh tỉ lệ 1:1 (vuông) có độ phân giải tối thiểu
                            192x192px để hiển thị sắc nét nhất trên di động.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- NOTIFICATIONS LIST CARD -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div class="flex justify-between items-center mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <h3 class="font-bold text-slate-800 dark:text-slate-200 text-[17.5px] leading-[25px]">
                      Lịch nhắc nhở tự động
                    </h3>
                    <button onclick="toggleAddPwaNotificationForm(true)" class="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[15px] leading-[20px] font-bold flex items-center gap-1 transition-all">
                      <i class="fa-solid fa-plus"></i> Thêm mới
                    </button>
                  </div>

                  <!-- ADD/EDIT FORM (Hidden by default) -->
                  <div id="pwa-notification-form-container" class="hidden bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 rounded-xl p-4 mb-4 animate-fade-in">
                    <h4 id="pwa-noti-form-title" class="font-bold text-[15px] leading-[20px] text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-1">
                      <i class="fa-solid fa-edit text-emerald-500"></i> Thiết
                      lập Lịch Nhắc Nhở
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label class="block text-[18px] font-semibold text-slate-500 mb-1">Thời gian gửi nhắc nhở</label>
                        <input type="time" id="pwa-noti-time" class="w-full px-3 py-1.5 text-[15px] leading-[20px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100" value="09:00">
                      </div>
                      <div>
                        <label class="block text-[18px] font-semibold text-slate-500 mb-1">Nguồn ảnh thông báo</label>
                        <select id="pwa-noti-img-source" class="w-full px-3 py-1.5 text-[15px] leading-[20px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100" onchange="togglePwaNotiImageSource()">
                          <option value="mascot">
                            Sử dụng Mascot mặc định
                          </option>
                          <option value="custom">
                            Tải ảnh tùy chỉnh lên (PNG/JPG)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="grid grid-cols-1 gap-3 mb-3">
                      <!-- Option A: Mascot select -->
                      <div id="pwa-noti-mascot-container">
                        <label class="block text-[18px] font-semibold text-slate-500 mb-1">Mascot đồng hành</label>
                        <select id="pwa-noti-mascot" class="w-full px-3 py-1.5 text-[15px] leading-[20px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100" onchange="previewSelectedFormMascot()">
                          <!-- Will fill with mascot options dynamically -->
                        </select>
                      </div>
                      <!-- Option B: Custom image upload -->
                      <div id="pwa-noti-custom-img-container" class="hidden">
                        <label class="block text-[18px] font-semibold text-slate-500 mb-1">Tải ảnh thông báo</label>
                        <div class="flex items-center gap-3">
                          <button type="button" onclick="
                              document
                                .getElementById('pwa-noti-custom-file')
                                .click()
                            " class="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg text-[15px] leading-[20px] font-semibold text-slate-700 dark:text-slate-300 transition-all flex items-center gap-1.5">
                            <i class="fa-solid fa-cloud-arrow-up text-emerald-500"></i>
                            Chọn ảnh từ máy
                          </button>
                          <input type="file" id="pwa-noti-custom-file" accept="image/*" class="hidden" onchange="handlePwaNotiCustomFileSelect(event)">
                          <div class="flex-1 min-w-0 text-[18px] text-slate-400 truncate" id="pwa-noti-custom-file-name">
                            Chưa chọn ảnh nào.
                          </div>
                        </div>
                        <!-- Image preview -->
                        <div id="pwa-noti-custom-preview-box" class="hidden mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-lg max-w-[120px] aspect-square flex items-center justify-center overflow-hidden relative">
                          <img id="pwa-noti-custom-preview-img" class="max-w-full max-h-full object-contain">
                          <button type="button" onclick="clearPwaNotiCustomImage()" class="absolute top-1 right-1 w-5 h-5 bg-rose-500 hover:bg-rose-600 text-white rounded-full flex items-center justify-center text-[15px] shadow-sm">
                            <i class="fa-solid fa-times"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label class="block text-[18px] font-semibold text-slate-500 mb-1">Tiêu đề thông báo</label>
                        <input type="text" id="pwa-noti-title" class="w-full px-3 py-1.5 text-[15px] leading-[20px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100" placeholder="Tiêu đề thông báo..." value="Nuri Nhắc Bạn">
                      </div>
                      <div>
                        <label class="block text-[18px] font-semibold text-slate-500 mb-1">Loại nhắc nhở</label>
                        <select id="pwa-noti-type" class="w-full px-3 py-1.5 text-[15px] leading-[20px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100">
                          <option value="custom">Nội dung tự chọn</option>
                          <option value="water">
                            Nhắc uống nước (Kích hoạt App Badge)
                          </option>
                          <option value="meal">
                            Thực đơn mới (Kích hoạt App Badge)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="mb-4">
                      <label class="block text-[18px] font-semibold text-slate-500 mb-1">Nội dung thông báo</label>
                      <textarea id="pwa-noti-content" rows="2" class="w-full px-3 py-1.5 text-[15px] leading-[20px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100" placeholder="Nội dung nhắc nhở..."></textarea>
                    </div>

                    <div class="flex gap-2 justify-end">
                      <button onclick="toggleAddPwaNotificationForm()" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-[15px] leading-[20px] font-semibold">
                        Hủy bỏ
                      </button>
                      <button onclick="savePwaNotification()" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[15px] leading-[20px] font-bold">
                        Lưu cài đặt
                      </button>
                    </div>
                  </div>

                  <!-- LIST CONTENT -->
                  <div id="pwa-notifications-list-container" class="space-y-3">
                    <!-- Active notifications rows go here -->
                  </div>
                </div>
              </div>

              <!-- RIGHT: Phone Screen Mockup & Live Notification Simulation -->
              <div class="w-full lg:w-80 shrink-0 flex flex-col items-center">
                <div class="relative w-[300px] h-[580px] bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-800 overflow-hidden ring-12 ring-slate-900/10">
                  <!-- Speaker and Notch -->
                  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-50 flex items-center justify-center">
                    <div class="w-12 h-1 bg-slate-800 rounded-full mb-1"></div>
                    <div class="w-2.5 h-2.5 bg-slate-900 rounded-full absolute right-6 top-1.5 border border-slate-800"></div>
                  </div>

                  <!-- PHONE CONTAINER SCREEN (Home Screen mockup) -->
                  <div class="w-full h-full rounded-[34px] relative bg-cover bg-center overflow-hidden flex flex-col justify-between p-4" style="
                      background-image: url(&quot;https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&amp;q=85&quot;);
                    ">
                    <!-- Top StatusBar -->
                    <div class="flex justify-between items-center text-[15px] text-white font-medium px-2.5 pt-1.5 z-40">
                      <span id="phone-mockup-time">10:05</span>
                      <div class="flex items-center gap-1">
                        <i class="fa-solid fa-signal"></i>
                        <i class="fa-solid fa-wifi"></i>
                        <i class="fa-solid fa-battery-three-quarters text-[15px] leading-[20px]"></i>
                      </div>
                    </div>

                    <!-- PHONE WIDGET & MOCKUP CONTENTS -->
                    <div class="flex-1 flex flex-col items-center pt-8 justify-start gap-6 relative z-30">
                      <!-- Beautiful Clock Widget -->
                      <div class="text-center text-white/90 drop-shadow-md">
                        <div class="text-[37.5px] leading-[45px] font-light tracking-wide" id="phone-widget-time">
                          10:05
                        </div>
                        <div class="text-[14px] uppercase tracking-wider font-semibold opacity-75 mt-0.5">
                          Thứ Ba, 14 tháng 7
                        </div>
                      </div>

                      <!-- PWA FLOATING NOTIFICATION MOCKUP BANNER (Duolingo Style!) -->
                      <div id="phone-notification-banner" class="absolute left-1 right-1 top-20 bg-gradient-to-b from-sky-500 to-sky-600 text-white rounded-[28px] p-4 shadow-2xl border border-sky-400/30 flex flex-col justify-between h-[180px] transition-all duration-500 transform translate-y-[-130%] opacity-0 scale-95 z-50 overflow-hidden">
                        <div class="w-full text-center">
                          <span class="font-black text-white text-[15px] leading-[20px] tracking-wide block truncate drop-shadow-sm" id="phone-noti-title-text">Nuri Nhắc Bạn</span>
                          <p class="text-[15px] text-sky-100 mt-1 font-medium leading-snug line-clamp-2 drop-shadow-sm px-1" id="phone-noti-content-text">
                            Đã đến giờ rồi bạn ơi! Đừng quên nạp năng lượng nhé!
                            🌱
                          </p>
                        </div>

                        <!-- Mascot / Custom Image at the bottom center, sitting on the bottom edge -->
                        <div class="w-20 h-20 shrink-0 flex items-end justify-center relative translate-y-2 mt-auto mx-auto" id="phone-noti-mascot-preview">
                          <img id="phone-noti-mascot-preview-img" class="hidden max-w-full max-h-full object-contain scale-110">
                          <div id="phone-noti-mascot-preview-svg" class="w-full h-full [&amp;>svg]:w-full [&amp;>svg]:h-full scale-110 flex items-end justify-center"></div>
                        </div>
                      </div>

                      <!-- Mascot Giant Interactive Widget (Like Duolingo!) -->
                      <div class="w-full bg-gradient-to-br from-teal-500/80 to-emerald-600/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-teal-400/30 flex items-center gap-3 mt-4 text-white">
                        <div class="w-14 h-14 bg-white/10 rounded-xl shrink-0 flex items-center justify-center shadow-inner relative" id="phone-giant-widget-mascot">
                          <img id="phone-giant-widget-mascot-img" class="hidden w-full h-full object-contain scale-110 hover:scale-125 transition-transform duration-300">
                          <div id="phone-giant-widget-mascot-svg" class="w-full h-full [&amp;>svg]:w-full [&amp;>svg]:h-full scale-110 hover:scale-125 transition-transform duration-300"></div>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="text-[14px] font-bold uppercase tracking-wider opacity-90 text-teal-100" id="phone-widget-label">
                            Nuri Mascot
                          </div>
                          <div class="text-[15px] leading-[20px] font-semibold leading-snug mt-0.5 text-white" id="phone-widget-bubble">
                            "Chúc bạn một ngày tràn đầy năng lượng lành mạnh!"
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- BOTTOM: Home screen App Icons Grid -->
                    <div class="grid grid-cols-4 gap-4 px-2 pb-6 z-30">
                      <div class="flex flex-col items-center">
                        <div class="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-[22.5px] leading-[35px] shadow-md">
                          <i class="fa-solid fa-envelope"></i>
                        </div>
                        <span class="text-[14px] text-white/90 font-medium mt-1 truncate w-12 text-center drop-shadow">Thư</span>
                      </div>

                      <!-- Nuri PWA Icon with interactive Badge! -->
                      <div class="flex flex-col items-center relative cursor-pointer" onclick="clickMockupPwaIcon()">
                        <div class="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-md border border-white/20 overflow-hidden" id="phone-mockup-pwa-icon-container">
                          <!-- Custom Image -->
                          <img id="phone-mockup-pwa-icon-img" class="absolute inset-0 w-full h-full object-cover hidden">
                          <!-- Custom Leaf SVG in PWA Icon -->
                          <svg id="phone-mockup-pwa-icon-svg" class="w-6 h-6 z-10" viewBox="0 0 512 512" fill="#ffffff">
                            <path d="M140 300 C140 180, 240 140, 280 0 C280 120, 180 160, 140 300 Z" opacity="0.9"></path>
                            <path d="M140 300 C140 180, 40 140, 0 0 C0 120, 100 160, 140 300 Z" opacity="0.9"></path>
                          </svg>

                          <!-- Pulse Red Dot Badge -->
                          <div id="phone-mockup-badge" class="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-red-500 border border-white rounded-full flex items-center justify-center text-[14px] text-white font-black animate-scale-in hidden">
                            1
                          </div>
                        </div>
                        <span class="text-[14px] text-white/90 font-bold mt-1 truncate w-12 text-center drop-shadow">Nuri</span>
                      </div>

                      <div class="flex flex-col items-center">
                        <div class="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center text-white text-[22.5px] leading-[35px] shadow-md">
                          <i class="fa-brands fa-youtube"></i>
                        </div>
                        <span class="text-[14px] text-white/90 font-medium mt-1 truncate w-12 text-center drop-shadow">Giải trí</span>
                      </div>
                      <div class="flex flex-col items-center">
                        <div class="w-11 h-11 rounded-xl bg-slate-800/80 backdrop-blur-md flex items-center justify-center text-white text-[22.5px] leading-[35px] shadow-md border border-white/10">
                          <i class="fa-solid fa-gear"></i>
                        </div>
                        <span class="text-[14px] text-white/90 font-medium mt-1 truncate w-12 text-center drop-shadow">Cài đặt</span>
                      </div>
                    </div>

                    <!-- Bottom Bar Indicator -->
                    <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/70 rounded-full z-40"></div>
                  </div>
                </div>
                <p class="text-[18px] text-slate-400 mt-3 text-center">
                  Mô hình trực quan: Chạm vào Icon <strong>Nuri</strong> trên
                  màn hình chính giả lập để xóa chấm đỏ (App Badge).
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- End of mkt-overview-content -->

        <!-- QR Scans History Sub-tab Content -->
        <div id="mkt-history-content" class="hidden animate-fade-in">
          <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 mb-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <i class="fa-solid fa-clock-rotate-left text-indigo-500"></i>
                  Lịch sử Quét QR Code
                </h3>
                <p class="text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 mt-1">
                  Nhật ký ghi nhận trực tiếp mỗi lần quét QR, giúp tối ưu hóa
                  hiệu quả tiếp thị đa kênh.
                </p>
              </div>
              <div class="flex flex-wrap gap-2 w-full md:w-auto">
                <!-- Simulation Trigger Button -->
                <button onclick="simulateQrScan()" class="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white rounded-xl text-[15px] leading-[20px] font-bold transition-all flex items-center gap-2 shadow-md shadow-indigo-500/15 cursor-pointer">
                  <i class="fa-solid fa-bolt-lightning text-amber-300"></i> Mô
                  phỏng Quét QR
                </button>

                <!-- Reset/Clear Button -->
                <button onclick="clearAllQrScans()" class="px-3 py-2 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/20 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-400 rounded-xl text-[15px] leading-[20px] font-semibold transition-colors border border-rose-200/30 cursor-pointer">
                  <i class="fa-solid fa-trash-can"></i> Xóa lịch sử
                </button>
              </div>
            </div>

            <!-- Filters Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <!-- Search Input -->
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                  <i class="fa-solid fa-magnifying-glass text-[15px] leading-[20px]"></i>
                </span>
                <input type="text" id="qr-scan-search" oninput="renderQrScansList()" placeholder="Tìm theo nguồn, vị trí, thiết bị..." class="w-full pl-9 pr-4 py-2 text-[17.5px] leading-[25px] bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-slate-200">
              </div>

              <!-- Channel / Source Dropdown Filter -->
              <div class="relative">
                <select id="qr-scan-source-filter" onchange="renderQrScansList()" class="w-full px-4 py-2 text-[17.5px] leading-[25px] bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-slate-200 appearance-none cursor-pointer">
                  <option value="all">Tất cả chiến dịch / nguồn</option>
                  <option value="facebook">Facebook</option>
                  <option value="grabfood">GrabFood</option>
                  <option value="shopeefood">ShopeeFood</option>
                  <option value="tiktok">TikTok</option>
                  <option value="qr_hopcom">QR Hộp cơm</option>
                  <option value="other">Khác (Gym, VP...)</option>
                </select>
                <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                  <i class="fa-solid fa-chevron-down text-[15px] leading-[20px]"></i>
                </span>
              </div>
            </div>

            <!-- Table Container -->
            <div class="overflow-x-auto border border-slate-100 dark:border-slate-800 rounded-xl">
              <table class="min-w-full divide-y divide-slate-100 dark:divide-slate-800 text-left">
                <thead class="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th class="px-6 py-3.5 text-[15px] leading-[20px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider w-1/4">
                      Chiến dịch / Nguồn
                    </th>
                    <th class="px-6 py-3.5 text-[15px] leading-[20px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider w-1/4">
                      Thời gian
                    </th>
                    <th class="px-6 py-3.5 text-[15px] leading-[20px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider w-1/3">
                      Vị trí (GPS nếu có)
                    </th>
                    <th class="px-6 py-3.5 text-[15px] leading-[20px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider w-1/4">
                      Thiết bị quét
                    </th>
                    <th class="px-6 py-3.5 text-[15px] leading-[20px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider w-10"></th>
                  </tr>
                </thead>
                <tbody id="qr-scans-history-list" class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <!-- QR Scans dynamically populated here -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- View: MENU -->
      <div id="view-menu" class="hidden animate-fade-in">
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 class="text-[30px] leading-[40px] font-bold text-slate-900">Quản lý Menu</h1>
            <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
              Cập nhật và quản lý các món ăn trong hệ thống
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <button onclick="openCreateDishModal('admin')" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all cursor-pointer">
              <i class="fa-solid fa-utensils mr-2"></i> Tạo món ăn mới
            </button>
            <button onclick="openModal('add', 'weekly_special')" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all cursor-pointer">
              <i class="fa-solid fa-star mr-2"></i> Tạo món mới mỗi tuần
            </button>
            <button onclick="openModal('add')" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all cursor-pointer">
              <i class="fa-solid fa-plus mr-2"></i> Thêm nguyên liệu mới
            </button>
          </div>
        </div>
        <div id="menu-shared-content">
          <div class="mb-6 flex flex-col gap-3">
            <div class="flex overflow-x-auto pb-1 gap-2 hide-scrollbar" id="category-filters"></div>
            <div class="flex overflow-x-auto pb-1 gap-2 hide-scrollbar hidden" id="sub-category-filters"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="dish-grid"></div>
        </div>
      </div>

      <!-- View: MESSAGES -->
      <div id="view-messages" class="hidden animate-fade-in flex-col gap-6 w-full">
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden w-full">
          <!-- Sidebar / Top List -->
          <div id="admin-chat-sidebar" class="w-full border-b border-slate-200 flex flex-col bg-slate-50 shrink-0">
            <div class="p-4 border-b border-slate-200 bg-white flex flex-col shrink-0">
              <div class="flex justify-between items-center mb-3">
                <h2 class="font-bold text-[22.5px] leading-[35px] text-slate-800">Tin nhắn</h2>
                <button onclick="
                    renderMessagesList();
                    if (typeof renderAdminReviewsList === 'function')
                      renderAdminReviewsList();
                  " class="text-slate-500 hover:text-emerald-600 transition-colors">
                  <i class="fa-solid fa-rotate-right"></i>
                </button>
              </div>
              <div class="flex bg-slate-100 p-1 rounded-lg">
                <button id="tab-messages" onclick="switchMessagesTab('messages')" class="flex-1 py-1.5 text-[17.5px] leading-[25px] font-bold text-emerald-700 bg-white shadow-sm rounded-md transition-all">
                  Chat
                </button>
                <button id="tab-reviews" onclick="switchMessagesTab('reviews')" class="flex-1 py-1.5 text-[17.5px] leading-[25px] font-medium text-slate-500 hover:text-slate-700 transition-all">
                  Đánh giá
                </button>
              </div>
            </div>
            <div class="max-h-60 overflow-y-auto custom-scrollbar p-2 space-y-1" id="messages-list">
              <!-- Chat sessions go here -->
            </div>
            <div class="max-h-60 overflow-y-auto custom-scrollbar p-2 space-y-2 hidden" id="admin-reviews-list">
              <!-- Reviews go here -->
            </div>
          </div>
          <!-- Main Chat Area -->
          <div id="admin-chat-main" class="w-full hidden flex-col bg-white overflow-hidden min-h-[500px]">
            <div id="admin-chat-header" class="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between shrink-0 hidden">
              <div class="flex items-center gap-3">
                <button onclick="closeAdminChat()" class="md:hidden w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors">
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
                <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <i class="fa-solid fa-user"></i>
                </div>
                <div>
                  <h3 class="font-bold text-slate-800" id="admin-chat-title">
                    Khách hàng
                  </h3>
                  <p class="text-[15px] leading-[20px] text-slate-500" id="admin-chat-subtitle">
                    Đang hỗ trợ...
                  </p>
                </div>
              </div>
              <button onclick="resolveSupportRequest()" id="btn-resolve-support" class="hidden bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-3 py-1.5 rounded-lg text-[17.5px] leading-[25px] font-semibold transition-colors">
                <i class="fa-solid fa-check mr-1"></i> Đã hỗ trợ
              </button>
            </div>
            <div id="admin-chat-empty" class="flex-1 flex items-center justify-center text-slate-400 flex-col gap-3">
              <i class="fa-solid fa-comments text-[45px] leading-[50px] text-slate-200"></i>
              <p>Chọn một mục để xem chi tiết</p>
            </div>
            <div id="admin-chat-messages" class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar hidden pb-8 sm:pb-4 max-h-[500px]">
              <!-- Messages -->
            </div>
            <div id="admin-review-detail" class="flex-1 overflow-y-auto p-6 bg-slate-50 custom-scrollbar hidden pb-8 sm:pb-4 flex-col max-h-[500px]">
              <!-- Review details go here -->
            </div>
            <div id="admin-chat-input-area" class="p-4 border-t border-slate-200 bg-white hidden shrink-0 mb-safe">
              <form onsubmit="sendAdminMessage(event)" class="flex gap-2">
                <input type="text" id="admin-chat-input" placeholder="Nhập tin nhắn trả lời..." class="flex-1 border border-slate-300 rounded-xl px-4 py-2.5 text-[17.5px] leading-[25px] focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white" required="">
                <button type="submit" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl transition-colors shadow-sm">
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
            <div id="admin-review-input-area" class="p-4 border-t border-slate-200 bg-white hidden shrink-0 mb-safe">
              <form onsubmit="sendAdminReviewReply(event)" class="flex gap-2">
                <button type="button" onclick="suggestReviewReply()" class="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-3 py-2.5 rounded-xl transition-colors shadow-sm shrink-0" title="Gợi ý bằng Nuri" id="btn-suggest-reply">
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                </button>
                <input type="text" id="admin-review-reply-input" placeholder="Phản hồi đánh giá này..." class="flex-1 border border-slate-300 rounded-xl px-4 py-2.5 text-[17.5px] leading-[25px] focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white" required="">
                <button type="submit" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl transition-colors shadow-sm">
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- View: INVENTORY -->
      <div id="view-inventory" class="hidden animate-fade-in">
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 class="text-[30px] leading-[40px] font-bold text-slate-900">
              Quản lý Nguyên liệu
            </h1>
            <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
              Theo dõi tồn kho và lên danh sách nhập hàng tự động
            </p>
          </div>
          <button onclick="generateGroceryList()" class="bg-[#10B981] hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-[17.5px] leading-[25px] shadow-md flex items-center justify-center gap-2 transition-colors">
            <i class="fa-solid fa-clipboard-list"></i> Xuất danh sách nhập hàng
            (Nuri)
          </button>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Tồn kho thật -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div class="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                <h2 class="font-bold text-slate-800">
                  <i class="fa-solid fa-boxes-stacked mr-2 text-emerald-500"></i>
                  Kho Nguyên Liệu
                </h2>
                <button onclick="openInventoryModal()" class="text-[17.5px] leading-[25px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors">
                  <i class="fa-solid fa-plus"></i> Thêm mới
                </button>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="bg-slate-50 text-slate-500 text-[15px] leading-[20px] uppercase tracking-wider">
                      <th class="p-4 font-semibold">Tên nguyên liệu</th>
                      <th class="p-4 font-semibold">Danh mục</th>
                      <th class="p-4 font-semibold text-right">
                        Tồn kho hiện tại
                      </th>
                    </tr>
                  </thead>
                  <tbody id="inventory-list" class="divide-y divide-slate-100">
                    <!-- Data will be populated here -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Danh sách đi chợ Nuri -->
          <div>
            <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 sticky top-24">
              <h2 class="font-bold text-indigo-900 mb-2">
                <i class="fa-solid fa-wand-magic-sparkles mr-2 text-indigo-500"></i>
                Bếp trưởng Nuri
              </h2>
              <p class="text-[15px] leading-[20px] text-indigo-700/80 mb-4 leading-relaxed">
                Phân tích các "Đơn gói 7/30 ngày" hiện có để tự động cân đối và
                lập danh sách cần đi chợ cho bạn.
              </p>

              <div id="grocery-list-result" class="bg-white rounded-xl p-4 shadow-sm min-h-[150px] text-[17.5px] leading-[25px] text-slate-600">
                <div class="text-center py-6 text-slate-400">
                  <i class="fa-solid fa-basket-shopping text-[37.5px] leading-[45px] mb-2"></i>
                  <p>Nhấn nút xuất danh sách để xem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View: SYSTEM SETTINGS -->
      <div id="view-system" class="hidden animate-fade-in">
        <div class="mb-8">
          <h1 class="text-[30px] leading-[40px] font-bold text-slate-900">Cấu hình hệ thống</h1>
          <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
            Quản lý thông tin liên hệ và các tích hợp
          </p>
        </div>

        <div class="flex flex-col xl:flex-row items-start gap-6">
          <div class="flex-1 w-full max-w-3xl">
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
              <form id="system-form" onsubmit="saveSettings(event)">
                <div class="p-6 border-b border-slate-100">
                  <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-store text-primary"></i> Thông tin cửa
                    hàng
                  </h2>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700">Tên cửa hàng</label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fa-solid fa-store text-slate-400"></i>
                        </div>
                        <input type="text" id="set-brand-name" class="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-[17.5px] leading-[25px] border-slate-300 rounded-lg py-2.5 border" placeholder="VD: Nuri Kitchen">
                      </div>
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-2">Logo cửa hàng</label>
                      <div class="flex items-center gap-4">
                        <div class="w-16 h-16 rounded-xl border border-dashed border-slate-300 flex items-center justify-center overflow-hidden bg-slate-50">
                          <img id="set-brand-logo-preview" src="https://via.placeholder.com/150?text=Logo" class="w-full h-full object-cover text-[15px] leading-[20px] text-slate-400" alt="Logo preview">
                        </div>
                        <div class="flex-1">
                          <input type="file" id="set-brand-logo" accept="image/*" class="w-full text-[17.5px] leading-[25px] text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-[17.5px] leading-[25px] file:font-semibold file:bg-primary file:text-white hover:file:bg-primaryHover cursor-pointer" onchange="handleLogoUpload(event)">
                          <p class="text-[15px] leading-[20px] text-slate-500 mt-1">
                            Hỗ trợ JPG, PNG, WEBP (Tối đa 2MB). Nên dùng ảnh
                            vuông (Tỉ lệ 1:1).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-2">Logo trình duyệt (Favicon)</label>
                      <div class="flex items-center gap-4">
                        <div class="w-10 h-10 rounded-lg border border-dashed border-slate-300 flex items-center justify-center overflow-hidden bg-slate-50">
                          <img id="set-favicon-preview" src="https://via.placeholder.com/150?text=Favicon" class="w-full h-full object-cover text-[15px] leading-[20px] text-slate-400" alt="Favicon preview">
                        </div>
                        <div class="flex-1">
                          <input type="file" id="set-favicon-logo" accept="image/*" class="w-full text-[17.5px] leading-[25px] text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-[17.5px] leading-[25px] file:font-semibold file:bg-primary file:text-white hover:file:bg-primaryHover cursor-pointer" onchange="handleFaviconUpload(event)">
                          <p class="text-[15px] leading-[20px] text-slate-500 mt-1">
                            Hiển thị trên tab trình duyệt (Khuyên dùng ảnh
                            vuông).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700">Số điện thoại Hotline</label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fa-solid fa-phone text-slate-400"></i>
                        </div>
                        <input type="text" id="set-phone" class="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-[17.5px] leading-[25px] border-slate-300 rounded-lg py-2.5 border" placeholder="0909 xxx xxx">
                      </div>
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700">Địa chỉ cửa hàng</label>
                      <div class="mt-1 grid grid-cols-2 gap-4">
                        <select id="set-district" class="focus:ring-primary focus:border-primary block w-full sm:text-[17.5px] leading-[25px] border-slate-300 rounded-lg py-2.5 border bg-white" onchange="updateSetWards()">
                          <option value="">Quận/Huyện</option>
                        </select>
                        <select id="set-ward" disabled="" class="focus:ring-primary focus:border-primary block w-full sm:text-[17.5px] leading-[25px] border-slate-300 rounded-lg py-2.5 border disabled:bg-slate-100 disabled:text-slate-400 bg-white">
                          <option value="">Phường/Xã</option>
                        </select>
                      </div>
                      <div class="mt-2 flex gap-2">
                        <div class="relative flex-1 rounded-md shadow-sm">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fa-solid fa-location-dot text-slate-400"></i>
                          </div>
                          <input type="text" id="set-street" class="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-[17.5px] leading-[25px] border-slate-300 rounded-lg py-2.5 border" placeholder="Số nhà, Tên đường cụ thể">
                        </div>
                        <button type="button" onclick="getStoreLocationFromGoogle()" class="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2.5 rounded-lg border border-blue-200 transition-colors flex items-center gap-2 text-[17.5px] leading-[25px] font-medium shrink-0 shadow-sm" title="Lấy tọa độ định vị">
                          <i class="fa-solid fa-location-crosshairs"></i>
                          <span class="hidden sm:inline">Định vị</span>
                        </button>
                      </div>
                      <input type="hidden" id="set-lat">
                      <input type="hidden" id="set-lng">
                    </div>
                  </div>
                </div>

                <div class="p-6 border-b border-slate-100">
                  <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-link text-primary"></i> Liên kết kênh đặt hàng
                  </h2>
                  <p class="text-[17.5px] leading-[25px] text-slate-500 mb-4">
                    Cấu hình link dẫn đến các app giao đồ ăn. Bật để hiển thị trong bảng chọn khi khách nhấn "Đặt món".
                  </p>

                  <div class="space-y-5">
                    <!-- Trang Web Nuri -->
                    <div class="flex flex-col md:flex-row md:items-center gap-4 bg-orange-50 p-4 rounded-xl border border-orange-200">
                      <div class="flex items-center gap-3 w-48 shrink-0">
                        <input type="checkbox" id="set-order-website-enable" onchange="window.silentSaveSettings(event)" class="w-4 h-4 text-orange-600 bg-white border-orange-300 rounded focus:ring-orange-500 focus:ring-2" checked="">
                        <label for="set-order-website-enable" class="font-bold text-orange-700">Trang Web Nuri</label>
                      </div>
                      <p class="text-[17.5px] leading-[25px] text-orange-600">Khách hàng đặt trực tiếp trên web, hệ thống tự động lưu đơn và tích điểm.</p>
                    </div>

                    <!-- ShopeeFood -->
                    <div class="flex flex-col md:flex-row md:items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div class="flex items-center gap-3 w-48 shrink-0">
                        <input type="checkbox" id="set-order-shopeefood-enable" onchange="window.silentSaveSettings(event)" class="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary focus:ring-2">
                        <label for="set-order-shopeefood-enable" class="font-bold text-slate-700">ShopeeFood</label>
                      </div>
                      <input type="text" id="set-order-shopeefood-url" oninput="window.silentSaveSettings(event)" class="w-full border-slate-300 rounded-lg py-2 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Link ShopeeFood của quán...">
                    </div>

                    <!-- GrabFood -->
                    <div class="flex flex-col md:flex-row md:items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div class="flex items-center gap-3 w-48 shrink-0">
                        <input type="checkbox" id="set-order-grabfood-enable" onchange="window.silentSaveSettings(event)" class="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary focus:ring-2">
                        <label for="set-order-grabfood-enable" class="font-bold text-slate-700">GrabFood</label>
                      </div>
                      <input type="text" id="set-order-grabfood-url" oninput="window.silentSaveSettings(event)" class="w-full border-slate-300 rounded-lg py-2 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Link GrabFood của quán...">
                    </div>

                    <!-- Xanh SM Food -->
                    <div class="flex flex-col md:flex-row md:items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div class="flex items-center gap-3 w-48 shrink-0">
                        <input type="checkbox" id="set-order-xanhsm-enable" onchange="window.silentSaveSettings(event)" class="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary focus:ring-2">
                        <label for="set-order-xanhsm-enable" class="font-bold text-slate-700">Xanh SM Food</label>
                      </div>
                      <input type="text" id="set-order-xanhsm-url" oninput="window.silentSaveSettings(event)" class="w-full border-slate-300 rounded-lg py-2 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Link Xanh SM Food của quán...">
                    </div>
                  </div>
                </div>

                <div class="p-6 border-b border-slate-100">
                  <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-hashtag text-primary"></i> Mạng xã hội
                    &amp; Zalo
                  </h2>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700">Zalo OA (Link hoặc SĐT)</label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fa-solid fa-comment-dots text-slate-400"></i>
                        </div>
                        <input type="text" id="set-zalo" class="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-[17.5px] leading-[25px] border-slate-300 rounded-lg py-2.5 border" placeholder="https://zalo.me/...">
                      </div>
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700">Fanpage Facebook</label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fa-brands fa-facebook text-slate-400"></i>
                        </div>
                        <input type="text" id="set-facebook" class="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-[17.5px] leading-[25px] border-slate-300 rounded-lg py-2.5 border" placeholder="https://facebook.com/...">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Giấy phép ATVS thực phẩm -->
                <div class="p-6 border-b border-slate-100">
                  <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-certificate text-primary"></i> Giấy phép An toàn Vệ sinh Thực phẩm
                  </h2>
                  <p class="text-[17.5px] leading-[25px] text-slate-500 mb-4">Tải lên ảnh giấy phép ATVS thực phẩm. Ảnh sẽ hiển thị ở cuối trang tư vấn để tăng uy tín với khách hàng.</p>
                  <div class="flex items-start gap-5">
                    <div class="w-32 h-44 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                      <img id="set-food-cert-preview" src="https://via.placeholder.com/128x180?text=Gi%E1%BA%A5y+ph%C3%A9p" class="w-full h-full object-cover" alt="Giấy phép ATVSTP">
                    </div>
                    <div class="flex-1 space-y-3">
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700">Tải lên ảnh giấy phép</label>
                      <label for="set-food-cert-upload" class="cursor-pointer inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-[17.5px] leading-[25px] px-4 py-2.5 rounded-lg border border-primary/30 transition-colors">
                        <i class="fa-solid fa-upload"></i> Chọn ảnh từ máy tính
                      </label>
                      <input type="file" id="set-food-cert-upload" accept="image/*" class="hidden" onchange="handleFoodCertUpload(event)">
                      <p class="text-[15px] leading-[20px] text-slate-400">Hỗ trợ: JPG, PNG, WEBP. Kích thước tối đa 3MB.</p>
                      <button type="button" onclick="clearFoodCert()" class="text-[15px] leading-[20px] text-red-500 hover:text-red-700 underline">
                        <i class="fa-solid fa-trash-alt"></i> Xóa ảnh
                      </button>
                    </div>
                  </div>
                </div>

                <div class="p-6 border-b border-slate-100">

                  <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-qrcode text-primary"></i> Quản lý
                    Thanh toán QR
                  </h2>
                  <p class="text-[17.5px] leading-[25px] text-slate-500 mb-4">
                    Các mã QR này sẽ hiển thị ở trang đặt hàng của khách hàng.
                    Hãy tải lên mã QR nhận tiền của bạn.
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- MOMO -->
                    <div class="border border-slate-200 rounded-xl p-4 bg-slate-50">
                      <h3 class="font-bold text-slate-700 mb-3 flex items-center gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Vi_Momo_logo.png" class="h-5 rounded-md" alt="MoMo">
                        Mã QR Ví MoMo
                      </h3>
                      <div class="flex items-center gap-4 mb-3">
                        <div class="w-20 h-20 rounded-lg border border-dashed border-slate-300 flex items-center justify-center overflow-hidden bg-white">
                          <img id="set-payment-momo-qr-preview" src="https://via.placeholder.com/200?text=QR+MoMo" class="w-full h-full object-cover text-[15px] text-slate-400" alt="QR MoMo preview">
                        </div>
                        <div class="flex-1">
                          <input type="file" id="set-payment-momo-qr" accept="image/*" class="w-full text-[15px] leading-[20px] text-slate-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[15px] leading-[20px] file:font-semibold file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200 cursor-pointer" onchange="handlePaymentQRUpload(event, 'momo')">
                        </div>
                      </div>
                      <input type="text" id="set-payment-momo-info" class="w-full text-[17.5px] leading-[25px] border-slate-300 rounded-lg py-2 px-3 border focus:ring-pink-500 focus:border-pink-500" placeholder="VD: 0909 xxx xxx - NGUYEN VAN A">
                    </div>

                    <!-- BANK -->
                    <div class="border border-slate-200 rounded-xl p-4 bg-slate-50">
                      <h3 class="font-bold text-slate-700 mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-building-columns text-blue-600"></i>
                        Mã QR Ngân hàng
                      </h3>
                      <div class="flex items-center gap-4 mb-3">
                        <div class="w-20 h-20 rounded-lg border border-dashed border-slate-300 flex items-center justify-center overflow-hidden bg-white">
                          <img id="set-payment-bank-qr-preview" src="https://via.placeholder.com/200?text=QR+Bank" class="w-full h-full object-cover text-[15px] text-slate-400" alt="QR Bank preview">
                        </div>
                        <div class="flex-1">
                          <input type="file" id="set-payment-bank-qr" accept="image/*" class="w-full text-[15px] leading-[20px] text-slate-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[15px] leading-[20px] file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer" onchange="handlePaymentQRUpload(event, 'bank')">
                        </div>
                      </div>
                      <input type="text" id="set-payment-bank-info" class="w-full text-[17.5px] leading-[25px] border-slate-300 rounded-lg py-2 px-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="VD: VCB - 123456789 - NGUYEN VAN A">
                    </div>
                  </div>
                </div>

                <div class="p-6 border-b border-slate-100">
                  <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-filter text-primary"></i> Cấu hình bộ
                    lọc món ăn
                  </h2>
                  <p class="text-[17.5px] leading-[25px] text-slate-500 mb-4">
                    Bật hoặc tắt các bộ lọc hiển thị ở Trang đặt hàng và Trang
                    tự mix món.
                  </p>

                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <input type="checkbox" id="set-weekly-special-filter-enable" class="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary focus:ring-2">
                      <label for="set-weekly-special-filter-enable" class="text-[17.5px] leading-[25px] font-medium text-slate-700">Hiển thị bộ lọc "Món mới mỗi tuần"</label>
                    </div>
                  </div>
                </div>

                <div class="p-6 border-b border-slate-100">
                  <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-bell text-primary"></i> Thông báo Zalo
                    OA (Zalo Notification Service)
                  </h2>
                  <p class="text-[17.5px] leading-[25px] text-slate-500 mb-4">
                    Cấu hình Zalo OA để tự động gửi thông báo trạng thái đơn
                    hàng (Đã nhận đơn, Đang giao) tới khách hàng qua Zalo.
                  </p>

                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <input type="checkbox" id="set-zalo-oa-enable" class="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary focus:ring-2">
                      <label for="set-zalo-oa-enable" class="text-[17.5px] leading-[25px] font-medium text-slate-700">Tự động gửi thông báo trạng thái đơn hàng qua Zalo
                        OA</label>
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700">Zalo OA Access Token</label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fa-solid fa-key text-slate-400"></i>
                        </div>
                        <input type="password" id="set-zalo-oa-token" class="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-[17.5px] leading-[25px] border-slate-300 rounded-lg py-2.5 border" placeholder="Nhập Access Token của Zalo OA...">
                      </div>
                      <p class="text-[15px] leading-[20px] text-slate-500 mt-2">
                        Truy cập Zalo for Developers để lấy Access Token cho ứng
                        dụng Zalo OA của bạn.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                  <button type="submit" class="inline-flex items-center px-5 py-2.5 border border-transparent shadow-sm text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all">
                    <i class="fa-solid fa-floppy-disk mr-2"></i> Lưu cấu hình
                  </button>
                </div>
              </form>
            </div>

            <!-- Công cụ Sao lưu & Phục hồi -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
              <div class="p-6">
                <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-2 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-[22.5px] leading-[35px]">
                    <i class="fa-solid fa-hard-drive"></i>
                  </div>
                  <div>
                    Sao Lưu &amp; Phục Hồi Dữ Liệu
                    <p class="text-[17.5px] leading-[25px] text-slate-500 font-normal mt-0.5">
                      Tải file .json về máy để lưu trữ an toàn hoặc khôi phục
                      qua thiết bị khác.
                    </p>
                  </div>
                </h2>

                <div class="flex flex-col sm:flex-row gap-4 mt-6 pl-0 sm:pl-12">
                  <button onclick="exportData()" type="button" class="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-indigo-100 text-indigo-700 bg-indigo-50/50 rounded-xl hover:bg-indigo-100 font-semibold transition-colors">
                    <i class="fa-solid fa-download"></i> Xuất file sao lưu
                    (.json)
                  </button>
                  <label class="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-emerald-100 text-emerald-700 bg-emerald-50/50 rounded-xl hover:bg-emerald-100 font-semibold transition-colors cursor-pointer">
                    <i class="fa-solid fa-upload"></i> Phục hồi từ file (.json)
                    <input type="file" id="import-file" accept=".json" class="hidden" onchange="importData(event)">
                  </label>
                </div>
              </div>
            </div>

            <!-- Cấu hình Nuri API Key -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div class="p-6">
                <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-2 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-[22.5px] leading-[35px]">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    Cấu hình Nuri (API Key)
                    <p class="text-[17.5px] leading-[25px] text-slate-500 font-normal mt-0.5">
                      Tránh lỗi quá tải bằng cách sử dụng Gemini API Key cá nhân
                      của bạn.
                    </p>
                  </div>
                </h2>

                <div class="mt-6 pl-0 sm:pl-12 space-y-4">
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i class="fa-solid fa-key text-slate-400"></i>
                    </div>
                    <input type="password" id="custom-api-key" placeholder="Nhập API Key (Bắt đầu bằng Nuriza...)" class="w-full rounded-xl border-2 border-slate-200 py-3 pl-10 pr-12 text-[17.5px] leading-[25px] focus:border-rose-400 focus:ring-0 outline-none transition-colors font-mono">
                    <button type="button" onclick="
                        togglePasswordVisibility(
                          'custom-api-key',
                          'eye-icon-api',
                        )
                      " class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                      <i id="eye-icon-api" class="fa-solid fa-eye"></i>
                    </button>
                  </div>
                  <button onclick="saveCustomApiKey()" type="button" class="w-full sm:w-auto px-6 py-2.5 bg-rose-500 text-white rounded-xl hover:bg-rose-600 font-bold transition-colors shadow-sm flex items-center justify-center gap-2">
                    <i class="fa-solid fa-floppy-disk"></i> Cập nhật API Key
                  </button>
                  <p class="text-[15px] leading-[20px] text-slate-400">
                    <i class="fa-solid fa-circle-info mr-1"></i> Để trống nếu
                    muốn sử dụng Key mặc định của hệ thống.
                  </p>
                </div>
              </div>
            </div>



            <!-- Cấu hình Cloud (Firebase) -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mt-6">
              <div class="p-6">
                <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-2 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-[22.5px] leading-[35px]">
                    <i class="fa-solid fa-cloud"></i>
                  </div>
                  <div>
                    Cấu hình Cloud Hệ thống (Firebase)
                    <p class="text-[17.5px] leading-[25px] text-slate-500 font-normal mt-0.5">
                      Điền Firebase Config JSON để chuyển sang sử dụng backend
                      Firebase của riêng bạn.
                    </p>
                  </div>
                </h2>

                <div class="mt-6 pl-0 sm:pl-12 space-y-4">
                  <div class="relative">
                    <textarea id="custom-firebase-config" rows="4" placeholder="VD: {&quot;apiKey&quot;: &quot;...&quot;, &quot;authDomain&quot;: &quot;...&quot;, &quot;projectId&quot;: &quot;...&quot;, ...}" class="w-full rounded-xl border-2 border-slate-200 py-3 px-4 text-[17.5px] leading-[25px] focus:border-orange-400 focus:ring-0 outline-none transition-colors font-mono resize-none" oninput="onFirebaseConfigInput()"></textarea>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-3">
                    <button onclick="saveCustomFirebaseConfig()" type="button" class="w-full sm:w-auto px-6 py-2.5 bg-orange-500 text-white rounded-xl hover:bg-orange-600 font-bold transition-colors shadow-sm flex items-center justify-center gap-2">
                      <i class="fa-solid fa-floppy-disk"></i> Cập nhật cấu hình
                      Cloud
                    </button>
                    <button onclick="testFirebaseConfig()" type="button" class="w-full sm:w-auto px-6 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 font-bold transition-colors shadow-sm flex items-center justify-center gap-2 border border-slate-300">
                      <i class="fa-solid fa-plug-circle-bolt"></i> Kiểm tra kết
                      nối
                    </button>
                  </div>
                  <p class="text-[15px] leading-[20px] text-slate-400">
                    <i class="fa-solid fa-circle-info mr-1"></i> Để trống để sử
                    dụng LocalStorage mặc định.
                  </p>
                </div>
              </div>
            </div>

            <!-- Cấu hình Google Đăng Nhập -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mt-6">
              <div class="p-6">
                <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-2 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-[22.5px] leading-[35px]">
                    <i class="fa-brands fa-google"></i>
                  </div>
                  <div>
                    Cấu hình Đăng nhập bằng Google (Gmail)
                    <p class="text-[17.5px] leading-[25px] text-slate-500 font-normal mt-0.5">
                      Điền Google Client ID để bật tính năng đăng nhập bằng
                      Gmail cho khách hàng.
                    </p>
                  </div>
                </h2>

                <div class="mt-6 pl-0 sm:pl-12 space-y-4">
                  <div class="relative">
                    <input type="text" id="custom-google-client-id" placeholder="VD: 123456789-abc...apps.googleusercontent.com" class="w-full rounded-xl border-2 border-slate-200 py-3 px-4 text-[17.5px] leading-[25px] focus:border-blue-400 focus:ring-0 outline-none transition-colors">
                  </div>
                  <p class="text-[15px] leading-[20px] text-slate-500 mb-2 leading-relaxed">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 mr-1"></i>
                    <b>Quan trọng:</b> Hãy thêm URL sau vào phần
                    <b>Authorized JavaScript origins</b> trong
                    <a href="https://console.cloud.google.com/apis/credentials" target="_blank" class="text-blue-500 hover:underline">Google Cloud Console</a>:<br>
                    <span id="current-origin-display" class="font-mono font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded inline-block mt-1.5 border border-slate-200 select-all"></span>
                  </p>
                  <div class="flex flex-col sm:flex-row gap-3">
                    <button onclick="saveGoogleClientId()" type="button" class="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold transition-colors shadow-sm flex items-center justify-center gap-2">
                      <i class="fa-solid fa-floppy-disk"></i> Cập nhật Client ID
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Khôi phục dữ liệu -->
            <div class="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden mt-6">
              <div class="p-6">
                <h2 class="text-[22.5px] leading-[35px] font-semibold text-slate-800 mb-2 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-[22.5px] leading-[35px]">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                  </div>
                  <div>
                    Khôi phục dữ liệu (Reset Data)
                    <p class="text-[17.5px] leading-[25px] text-slate-500 font-normal mt-0.5">
                      Lựa chọn và xóa các mục dữ liệu. Hành động này không thể
                      hoàn tác.
                    </p>
                  </div>
                </h2>

                <div class="mt-6 pl-0 sm:pl-12 space-y-4">
                  <button onclick="openResetDataModal()" type="button" class="w-full sm:w-auto px-6 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 font-bold transition-colors shadow-sm flex items-center justify-center gap-2">
                    <i class="fa-solid fa-trash-can"></i> Khôi phục dữ liệu
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Mascot Management Section -->
          <div class="w-full xl:w-[400px] shrink-0">
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
              <div class="p-6 border-b border-slate-100 bg-emerald-50">
                <h2 class="text-[22.5px] leading-[35px] font-semibold text-emerald-800 flex items-center gap-2">
                  <i class="fa-solid fa-masks-theater text-emerald-600"></i>
                  Quản lý Nhân vật
                </h2>
                <p class="text-[15px] leading-[20px] text-emerald-600 mt-1">
                  Cấu hình nhân vật thương hiệu ảo
                </p>
              </div>
              <div class="p-6">
                <!-- Preview area -->
                <div id="mascot-preview-frame" class="w-full aspect-square bg-slate-900 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center border border-slate-200 shadow-inner group mb-6">
                  <!-- Animated Mascot Area -->
                  <div id="mascot-svg-container" class="transition-transform duration-300">
                    <!-- Dynamic SVG inside -->
                  </div>
                  <!-- Image Sequence Area -->
                  <img id="mascot-sequence-img" class="w-full h-full object-contain hidden" alt="Mascot Preview">

                  <!-- Controls Overlay -->
                  <div class="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md rounded-xl p-2.5 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[15px] leading-[20px]">
                    <div class="flex items-center gap-2">
                      <button type="button" onclick="toggleMascotPlay()" class="w-7 h-7 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                        <i id="mascot-play-icon" class="fa-solid fa-pause"></i>
                      </button>
                      <span id="mascot-frame-counter">Frame: --</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span>FPS:</span>
                      <input type="range" id="mascot-fps-slider" min="1" max="30" value="12" oninput="changeMascotFps(this.value)" class="w-16 accent-emerald-500 h-1 rounded-lg cursor-pointer">
                      <span id="mascot-fps-val" class="w-6 text-right">12</span>
                    </div>
                  </div>
                </div>

                <div class="space-y-3 mb-6">
                  <label class="flex items-center justify-between p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <i class="fa-solid fa-eye"></i>
                      </div>
                      <span class="text-[17.5px] leading-[25px] font-medium text-slate-700">Hiển thị nhân vật</span>
                    </div>
                    <div class="relative inline-flex items-center">
                      <input type="checkbox" id="mascot-show-toggle" class="sr-only peer" checked="" onchange="toggleMascotVisibility(this.checked)">
                      <div class="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                    </div>
                  </label>

                  <label class="flex items-center justify-between p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <i class="fa-solid fa-microphone-lines"></i>
                      </div>
                      <span class="text-[17.5px] leading-[25px] font-medium text-slate-700">Cho phép tương tác giọng nói</span>
                    </div>
                    <div class="relative inline-flex items-center">
                      <input type="checkbox" id="mascot-voice-toggle" class="sr-only peer" onchange="toggleMascotVoice(this.checked)">
                      <div class="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                    </div>
                  </label>
                </div>

                <!-- Expression Management list -->
                <div class="border-t border-slate-100 pt-6">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-[17.5px] leading-[25px] font-bold text-slate-800 uppercase tracking-wider">
                      Danh sách Biểu cảm
                    </h3>
                    <button type="button" onclick="promptAddMascotExpression()" class="text-[15px] leading-[20px] bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-2.5 py-1.5 rounded-lg border border-emerald-200 font-bold transition-colors">
                      <i class="fa-solid fa-plus mr-1"></i> Thêm biểu cảm
                    </button>
                  </div>

                  <div id="mascot-expressions-list" class="space-y-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                    <!-- Loaded dynamically via JS -->
                  </div>
                </div>

                <!-- Outfit Management list -->
                <div class="border-t border-slate-100 pt-6 mt-6">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-[17.5px] leading-[25px] font-bold text-slate-800 uppercase tracking-wider">
                      Danh sách Trang phục
                    </h3>
                    <button type="button" onclick="promptAddMascotOutfit()" class="text-[15px] leading-[20px] bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-2.5 py-1.5 rounded-lg border border-emerald-200 font-bold transition-colors">
                      <i class="fa-solid fa-plus mr-1"></i> Thêm trang phục
                    </button>
                  </div>

                  <div id="mascot-outfits-list" class="space-y-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                    <!-- Loaded dynamically via JS -->
                  </div>
                </div>

                <!-- Age Management list -->
                <div class="border-t border-slate-100 pt-6 mt-6">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-[17.5px] leading-[25px] font-bold text-slate-800 uppercase tracking-wider">
                      Danh sách Độ tuổi
                    </h3>
                    <button type="button" onclick="promptAddMascotAge()" class="text-[15px] leading-[20px] bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-2.5 py-1.5 rounded-lg border border-emerald-200 font-bold transition-colors">
                      <i class="fa-solid fa-plus mr-1"></i> Thêm độ tuổi
                    </button>
                  </div>

                  <div id="mascot-ages-list" class="space-y-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                    <!-- Loaded dynamically via JS -->
                  </div>
                </div>
                <!-- Action Management list -->
                <div class="border-t border-slate-100 pt-6 mt-6">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-[17.5px] leading-[25px] font-bold text-slate-800 uppercase tracking-wider">
                      Danh sách Hoạt động
                    </h3>
                    <button type="button" onclick="promptAddMascotAction()" class="text-[15px] leading-[20px] bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-2.5 py-1.5 rounded-lg border border-emerald-200 font-bold transition-colors">
                      <i class="fa-solid fa-plus mr-1"></i> Thêm hoạt động
                    </button>
                  </div>

                  <div id="mascot-actions-list" class="space-y-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                    <!-- Loaded dynamically via JS -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View: CUSTOMERS & DISCOUNTS -->
      <div id="view-customers" class="hidden animate-fade-in pb-12">
        <div class="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 class="text-[30px] leading-[40px] font-bold text-slate-900">
              Dữ liệu khách hàng &amp; Khuyến mãi
            </h1>
            <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
              Quản lý mã giảm giá, khách hàng tiềm năng và khách đang dùng gói
            </p>
          </div>
        </div>

        <div class="flex overflow-x-auto hide-scrollbar gap-2 mb-6 border-b border-slate-200 pb-2">
          <button id="tab-btn-discount" onclick="switchCustomerTab('discount')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-bold transition-all bg-emerald-100 text-emerald-800 border-b-2 border-primary">
            <i class="fa-solid fa-ticket mr-2"></i> Mã giảm giá
          </button>
          <button id="tab-btn-potential" onclick="switchCustomerTab('potential')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-medium transition-all bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-b-2 border-transparent">
            <i class="fa-solid fa-user-clock mr-2"></i> Khách hàng tiềm năng
          </button>
          <button id="tab-btn-grandopening" onclick="switchCustomerTab('grandopening')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-medium transition-all bg-transparent text-red-500 hover:text-red-700 hover:bg-red-50 border-b-2 border-transparent">
            <i class="fa-solid fa-party-popper mr-2"></i> Khai trương
          </button>
          <button id="tab-btn-purchased" onclick="switchCustomerTab('purchased')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-medium transition-all bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-b-2 border-transparent">
            <i class="fa-solid fa-user-check mr-2"></i> Khách đã mua gói
          </button>
          <button id="tab-btn-accounts" onclick="switchCustomerTab('accounts')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-medium transition-all bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-b-2 border-transparent">
            <i class="fa-solid fa-users mr-2"></i> Quản lý tài khoản
          </button>
          <button id="tab-btn-packages" onclick="switchCustomerTab('packages')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-medium transition-all bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-b-2 border-transparent">
            <i class="fa-solid fa-cubes mr-2"></i> Quản lý gói
          </button>
          <button id="tab-btn-history" onclick="switchCustomerTab('history')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-medium transition-all bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-b-2 border-transparent">
            <i class="fa-solid fa-clock-rotate-left mr-2"></i> Lịch sử đơn hàng
          </button>
        </div>

        <!-- Tab: Discounts -->
        <div id="tab-content-discount" class="block animate-fade-in">
          <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 class="font-bold text-indigo-900 text-[22.5px] leading-[35px] flex items-center gap-2">
                <i class="fa-solid fa-truck-fast text-indigo-500"></i> Khuyến
                mãi giao hàng
              </h3>
              <p class="text-[17.5px] leading-[25px] text-indigo-700 mt-1">
                Miễn phí giao hàng (mặc định 15.000đ) cho các đơn hàng đạt giá
                trị tối thiểu.
              </p>
            </div>
            <div class="flex items-center gap-3 w-full md:w-auto">
              <div class="relative w-full md:w-48">
                <input type="number" id="setting-freeship-threshold" placeholder="0" class="w-full rounded-lg border border-indigo-300 py-2.5 pl-4 pr-10 text-[17.5px] leading-[25px] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white font-semibold text-indigo-900">
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">đ</span>
              </div>
              <button onclick="saveFreeshipSetting()" class="shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold shadow-sm transition-colors text-[17.5px] leading-[25px]">
                Lưu
              </button>
            </div>
          </div>

          <div class="flex justify-between items-end mb-4">
            <h3 class="font-bold text-slate-800 text-[22.5px] leading-[35px]">
              Danh sách Mã Giảm Giá
            </h3>
            <button onclick="openDiscountModal('add')" class="inline-flex items-center px-4 py-2 text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-primary hover:bg-primaryHover shadow-sm transition-all">
              <i class="fa-solid fa-plus mr-2"></i> Tạo mã mới
            </button>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left text-[17.5px] leading-[25px] whitespace-nowrap">
                <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-[15px] leading-[20px] tracking-wider">
                  <tr>
                    <th class="px-6 py-4">Mã CODE</th>
                    <th class="px-6 py-4">Mức giảm</th>
                    <th class="px-6 py-4">Hạn sử dụng</th>
                    <th class="px-6 py-4">Trạng thái</th>
                    <th class="px-6 py-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody id="discount-table-body" class="divide-y divide-slate-100"></tbody>
              </table>
            </div>
          </div>

          <div class="mt-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div>
              <h3 class="font-bold text-slate-800 text-[22.5px] leading-[35px]">
                Cấu Hình Vòng Quay May Mắn
              </h3>
              <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
                Cài đặt các ô phần thưởng và tỷ lệ trúng. Tổng tỷ lệ phải là
                100%.
              </p>
            </div>
            <button onclick="saveAdminWheelConfig()" class="bg-primary hover:bg-primaryHover text-white px-5 py-2.5 rounded-lg text-[17.5px] leading-[25px] font-bold shadow-sm transition-colors flex items-center gap-2">
              <i class="fa-solid fa-floppy-disk"></i> Lưu cấu hình
            </button>
          </div>

          <div class="mt-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <table class="w-full text-left text-[17.5px] leading-[25px] border-collapse">
                  <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                    <tr>
                      <th class="px-3 py-2 w-10 text-center">Ô</th>
                      <th class="px-3 py-2">Tên phần thưởng</th>
                      <th class="px-3 py-2 w-24 text-center">Tỷ lệ (%)</th>
                    </tr>
                  </thead>
                  <tbody id="admin-wheel-tbody" class="divide-y divide-slate-100">
                    <!-- JS -->
                  </tbody>
                </table>
                <div class="mt-3 flex justify-end items-center gap-2">
                  <span class="text-[17.5px] leading-[25px] font-semibold text-slate-600">Tổng tỷ lệ:</span>
                  <span id="admin-wheel-total-prob" class="text-[22.5px] leading-[35px] font-bold text-emerald-600">100%</span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center bg-slate-900 rounded-3xl p-6 relative overflow-hidden">
                <p class="text-slate-400 text-[15px] leading-[20px] font-semibold mb-4 uppercase tracking-widest z-10">
                  Bản xem trước
                </p>

                <div class="relative w-[240px] h-[240px]">
                  <!-- Outer Glow -->
                  <div class="absolute inset-[-10px] rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-lg z-0"></div>

                  <!-- Pointer -->
                  <div class="absolute -top-4 left-1/2 -translate-x-1/2 z-30 drop-shadow-md text-white text-[37.5px] leading-[45px]">
                    <i class="fa-solid fa-caret-down"></i>
                  </div>

                  <!-- The Wheel -->
                  <div class="relative w-full h-full" style="
                      filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.8));
                    ">
                    <div id="admin-neon-wheel" class="w-full h-full rounded-full overflow-hidden relative z-10 transition-transform duration-[3000ms] ease-[cubic-bezier(0.17,0.67,0.12,0.99)] border-[4px] border-emerald-900/50">
                      <!-- Generated by JS -->
                    </div>
                  </div>

                  <!-- Center Button -->
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-b from-slate-200 to-slate-400 rounded-full flex flex-col items-center justify-center z-20 border-2 border-slate-800 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.8)]" onclick="testAdminSpin()">
                    <span class="text-[15px] font-black text-slate-800 uppercase">Quay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div>
              <h3 class="font-bold text-slate-800 text-[22.5px] leading-[35px]">
                Banner Khai Trương (Trang Tư Vấn)
              </h3>
              <p class="text-[17.5px] leading-[25px] text-slate-500">
                Bật để hiển thị banner tại trang kết quả tư vấn
              </p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" id="toggle-grand-opening-banner" class="sr-only peer" checked="" onchange="
                  const el = document.getElementById(
                    'user-grand-opening-banner-container',
                  );
                  if (el) el.classList.toggle('hidden', !this.checked);
                  const savedSettings = localStorage.getItem(
                    'nutriadmin_settings',
                  );
                  let settings = savedSettings ? JSON.parse(savedSettings) : {};
                  settings.bannerGrandOpeningEnabled = this.checked;
                  localStorage.setItem(
                    'nutriadmin_settings',
                    JSON.stringify(settings),
                  );
                  if (typeof syncStateToServer === 'function')
                    syncStateToServer();
                ">
              <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
            </label>
          </div>

          <!-- GRAND OPENING BANNER WRAPPER -->
          <div class="banner-scale-wrapper mt-4 mb-6 relative">
            <div class="banner-scale bg-[#f3faeb] rounded-3xl overflow-hidden shadow-sm border border-emerald-100 flex flex-col z-0">
              <!-- Main Content Area -->
              <div class="flex flex-row items-center p-12 pb-12 z-10 h-full overflow-visible">
                <!-- Left Content -->
                <div class="w-7/12 z-10 flex flex-col items-start text-left shrink-0">
                  <!-- Ribbon -->
                  <div class="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-br-2xl rounded-tl-2xl text-[30px] leading-[40px] font-black uppercase tracking-wide mb-6 transform -skew-x-6 shadow-md animate-[pulse_2s_ease-in-out_infinite]">
                    <span class="skew-x-6 flex items-center gap-3">
                      <i class="fa-solid fa-party-popper text-yellow-300 animate-bounce"></i>
                      <span id="banner-grand-opening-text" oninput="
                          window.updateTextSync(
                            'user-banner-grand-opening-text',
                            this.innerText,
                          )
                        " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-[#1b5e20] rounded px-1 -mx-1 cursor-text transition-colors">GRAND OPENING - 15/11/2026</span>
                    </span>
                  </div>

                  <!-- Main Title -->
                  <h2 class="text-[90px] leading-[90px] font-black uppercase leading-[1.1] mb-6 tracking-tight">
                    <span oninput="
                        window.updateTextSync(
                          'user-banner-title1',
                          this.innerText,
                        )
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 cursor-text transition-colors text-[#1b5e20] block">SIÊU ƯU ĐÃI</span>
                    <span oninput="
                        window.updateTextSync(
                          'user-banner-title2',
                          this.innerText,
                        )
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 cursor-text transition-colors text-slate-900 block drop-shadow-sm">KHAI TRƯƠNG!</span>
                  </h2>

                  <!-- Subtitle -->
                  <p oninput="
                      window.updateTextSync(
                        'user-banner-subtitle',
                        this.innerText,
                      )
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 cursor-text transition-colors text-slate-700 text-[25px] leading-[35px] font-medium mb-8 max-w-lg leading-relaxed">
                    Ăn ngon mỗi ngày, vóc dáng chuẩn ngay! Cơ hội trải nghiệm
                    thực đơn chuẩn y khoa với mức giá không tưởng.
                  </p>

                  <!-- Countdown section -->
                  <div class="mb-10 w-full flex flex-col items-start shrink-0">
                    <div class="flex items-center gap-2 text-[#2e7d32] font-bold text-[17.5px] leading-[25px] mb-4 uppercase tracking-wider">
                      <i class="fa-solid fa-leaf text-emerald-500"></i>
                      <span oninput="
                          window.updateTextSync(
                            'user-banner-cd-text',
                            this.innerText,
                          )
                        " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 cursor-text transition-colors">ƯU ĐÃI KẾT THÚC SAU</span>
                      <i class="fa-solid fa-leaf text-emerald-500 transform scale-x-[-1]"></i>
                    </div>
                    <div class="flex items-center justify-start gap-4">
                      <!-- Day -->
                      <div class="bg-[#1a3a2a] text-white rounded-2xl w-20 h-20 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(26,58,42,0.3)] border border-[#2a4a3a] relative overflow-hidden group">
                        <div class="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                        <span id="banner-cd-day" class="text-[37.5px] leading-[45px] font-black text-white relative z-10">03</span>
                        <span class="text-[15px] leading-[20px] font-bold mt-1 text-emerald-200 relative z-10">NGÀY</span>
                      </div>
                      <span class="text-[37.5px] leading-[45px] font-black text-[#1a3a2a] animate-pulse pb-4">:</span>
                      <!-- Hour -->
                      <div class="bg-[#1a3a2a] text-white rounded-2xl w-20 h-20 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(26,58,42,0.3)] border border-[#2a4a3a] relative overflow-hidden group">
                        <div class="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                        <span id="banner-cd-hour" class="text-[37.5px] leading-[45px] font-black text-white relative z-10">02</span>
                        <span class="text-[15px] leading-[20px] font-bold mt-1 text-emerald-200 relative z-10">GIỜ</span>
                      </div>
                      <span class="text-[37.5px] leading-[45px] font-black text-[#1a3a2a] animate-pulse pb-4">:</span>
                      <!-- Minute -->
                      <div class="bg-[#1a3a2a] text-white rounded-2xl w-20 h-20 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(26,58,42,0.3)] border border-[#2a4a3a] relative overflow-hidden group">
                        <div class="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                        <span id="banner-cd-minute" class="text-[37.5px] leading-[45px] font-black text-white relative z-10">54</span>
                        <span class="text-[15px] leading-[20px] font-bold mt-1 text-emerald-200 relative z-10">PHÚT</span>
                      </div>
                      <span class="text-[37.5px] leading-[45px] font-black text-[#1a3a2a] animate-pulse pb-4">:</span>
                      <!-- Second -->
                      <div class="bg-[#1a3a2a] text-white rounded-2xl w-20 h-20 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(26,58,42,0.3)] border border-[#2a4a3a] relative overflow-hidden group">
                        <div class="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                        <span id="banner-cd-second" class="text-[37.5px] leading-[45px] font-black text-yellow-400 relative z-10">11</span>
                        <span class="text-[15px] leading-[20px] font-bold mt-1 text-yellow-200/80 relative z-10">GIÂY</span>
                      </div>
                    </div>
                  </div>

                  <!-- Buttons -->
                  <div class="flex flex-row gap-4 w-auto shrink-0 mt-0">
                    <button onclick="
                        document
                          .getElementById('grand-opening-modal')
                          .classList.add('hidden')
                      " class="flex-none bg-[#0f7632] hover:bg-[#0c5c27] text-white px-12 py-5 rounded-xl font-bold text-[25px] leading-[35px] shadow-[0_4px_10px_rgba(15,118,50,0.3)] transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 animate-glow-pulse-emerald relative z-10">
                      <i class="fa-solid fa-crown text-yellow-300 animate-bounce"></i>
                      <span oninput="
                          window.updateTextSync(
                            'user-banner-btn1',
                            this.innerText,
                          )
                        " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-[#1b5e20] rounded px-1 -mx-1 cursor-text transition-colors">Đăng Ký Mua Gói</span>
                    </button>
                    <button onclick="
                        document
                          .getElementById('grand-opening-modal')
                          .classList.add('hidden');
                        setTimeout(() => openOrderPlatformModal(), 100);
                      " class="flex-none bg-white hover:bg-slate-50 text-[#0f7632] border-2 border-[#0f7632] px-12 py-5 rounded-xl font-bold text-[25px] leading-[35px] shadow-sm transition-all hover:-translate-y-1 flex items-center justify-center gap-2 hover:shadow-md animate-glow-pulse-emerald relative z-10">
                      <i class="fa-solid fa-bell-concierge animate-bounce"></i>
                      <span oninput="
                          window.updateTextSync(
                            'user-banner-btn2',
                            this.innerText,
                          )
                        " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 cursor-text transition-colors">Đăng Ký Đặt 1 Bữa</span>
                    </button>
                  </div>
                </div>

                <!-- Right Images & Badges -->
                <div class="w-5/12 relative h-[500px] mt-0 z-10 flex justify-end shrink-0">
                  <!-- Hidden File Inputs for Banner Images -->
                  <input type="file" id="banner-img-top-upload" class="hidden" accept="image/*" multiple="" onchange="handleBannerImageUpload(event, 'banner-top')">
                  <input type="file" id="banner-img-bottom-upload" class="hidden" accept="image/*" multiple="" onchange="handleBannerImageUpload(event, 'banner-bottom')">

                  <!-- Top Food Image Container -->
                  <div class="absolute top-0 right-0 w-80 h-56 rotate-3 z-20 group/banner-top cursor-pointer" onclick="
                      document.getElementById('banner-img-top-upload').click()
                    ">
                    <img id="banner-img-banner-top" src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&amp;w=600&amp;auto=format&amp;fit=crop" alt="Healthy Meal Box" class="w-full h-full object-cover rounded-3xl shadow-2xl border-[6px] border-white transition-all group-hover/banner-top:brightness-75">
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/banner-top:opacity-100 transition-opacity bg-black/40 rounded-3xl border-[6px] border-white">
                      <span class="text-white font-bold text-[15px] leading-[20px] flex items-center gap-1">
                        <i class="fa-solid fa-camera text-[17.5px] leading-[25px]"></i> Thay đổi ảnh
                      </span>
                    </div>
                  </div>

                  <!-- Bottom Food Image Container -->
                  <div class="absolute bottom-0 right-16 w-80 h-56 -rotate-6 z-10 group/banner-bottom cursor-pointer" onclick="
                      document
                        .getElementById('banner-img-bottom-upload')
                        .click()
                    ">
                    <img id="banner-img-banner-bottom" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=600&amp;auto=format&amp;fit=crop" alt="Healthy Beef Box" class="w-full h-full object-cover rounded-3xl shadow-2xl border-[6px] border-white transition-all group-hover/banner-bottom:brightness-75">
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/banner-bottom:opacity-100 transition-opacity bg-black/40 rounded-3xl border-[6px] border-white">
                      <span class="text-white font-bold text-[15px] leading-[20px] flex items-center gap-1">
                        <i class="fa-solid fa-camera text-[17.5px] leading-[25px]"></i> Thay đổi ảnh
                      </span>
                    </div>
                  </div>

                  <!-- Circle Badge -->
                  <div class="absolute top-1/4 -right-12 bg-[#165a25] text-white w-36 h-36 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-[#f3faeb] z-30 transform hover:scale-105 transition-transform animate-[bounce_3s_infinite]">
                    <span oninput="
                        window.updateTextSync(
                          'user-banner-badge1-line1',
                          this.innerText,
                        )
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-[#1b5e20] rounded px-1 -mx-1 cursor-text transition-colors text-[15px] leading-[20px] font-bold uppercase mb-1 text-emerald-100 tracking-wider">Hiện chỉ còn</span>
                    <span oninput="
                        window.updateTextSync(
                          'user-banner-badge1-line2',
                          this.innerText,
                        )
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-[#1b5e20] rounded px-1 -mx-1 cursor-text transition-colors text-[75px] leading-[75px] font-black text-yellow-400 leading-none" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)">19</span>
                    <span oninput="
                        window.updateTextSync(
                          'user-banner-badge1-line3',
                          this.innerText,
                        )
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-[#1b5e20] rounded px-1 -mx-1 cursor-text transition-colors text-[17.5px] leading-[25px] font-bold mt-1 tracking-widest">SLOT!</span>
                  </div>

                  <!-- Center Banner Badge -->
                  <div class="absolute top-[45%] -left-16 transform -translate-y-1/2 bg-white rounded-2xl p-5 shadow-xl border border-emerald-100 flex items-center gap-4 z-30 w-[340px]">
                    <div oninput="
                        window.updateTextSync(
                          'user-banner-badge2-percent',
                          this.innerText,
                        )
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded cursor-text transition-colors bg-red-600 text-white p-4 font-black text-[37.5px] leading-[45px] flex-shrink-0 shadow-inner">
                      -15%
                    </div>
                    <div>
                      <div oninput="
                          window.updateTextSync(
                            'user-banner-badge2-line1',
                            this.innerText,
                          )
                        " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 cursor-text transition-colors font-bold text-slate-800 text-[20px] leading-[30px] leading-tight mb-1">
                        Giảm 15% Toàn Menu
                      </div>
                      <div oninput="
                          window.updateTextSync(
                            'user-banner-badge2-line2',
                            this.innerHTML,
                            true,
                          )
                        " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 cursor-text transition-colors text-[15px] leading-[20px] text-slate-500 leading-snug">
                        Dành cho
                        <span class="text-[#d97706] font-bold">50 khách</span>
                        đầu tiên.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Decorative Background Leaves (Optional) -->
              <i class="fa-solid fa-leaf absolute top-10 left-10 text-emerald-200/40 text-[45px] leading-[50px] -rotate-45 pointer-events-none animate-[pulse_4s_infinite]"></i>
              <i class="fa-solid fa-leaf absolute bottom-10 left-1/3 text-emerald-200/30 text-[60px] leading-[60px] rotate-12 pointer-events-none animate-[bounce_5s_infinite]"></i>
              <i class="fa-solid fa-leaf absolute top-20 right-1/2 text-emerald-200/40 text-[37.5px] leading-[45px] rotate-90 pointer-events-none animate-[pulse_3s_infinite]"></i>
            </div>
          </div>

          <!-- TRUST BANNER CONFIGURATION SECTION -->
          <div class="mt-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div>
              <h3 class="font-bold text-slate-800 text-[22.5px] leading-[35px]">
                Cấu Hình Trust Banner (Trang Tư Vấn &amp; Trang Cá Nhân)
              </h3>
              <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
                Chỉnh sửa trực tiếp nội dung bằng cách nhấn vào văn bản và nhập
                chữ mới để thay đổi. Thông tin sẽ lập tức đồng bộ sang trang tư
                vấn và trang cá nhân khách hàng. Nhấp vào 2 ảnh tròn để thay đổi
                ảnh.
              </p>
            </div>
          </div>

          <!-- TRUST BANNER WRAPPER -->
          <div class="banner-scale-wrapper mt-4 mb-8 relative">
            <div class="banner-scale bg-[#043F2E] rounded-3xl overflow-hidden shadow-2xl flex flex-row items-center p-8 md:p-12 text-left relative">
              <!-- Background pattern/glow -->
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>

              <div class="relative z-10 w-[60%] lg:w-[55%] pr-2 md:pr-8 mb-0">
                <!-- Badge -->
                <div class="inline-flex items-center gap-3 px-6 md:px-8 py-2 md:py-3 rounded-full bg-emerald-900/50 border-[3px] border-emerald-700/50 text-emerald-300 text-[15px] md:text-[17.5px] leading-[25px] font-bold mb-3 md:mb-6 uppercase tracking-wider backdrop-blur-sm shadow-lg">
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                  <span id="admin-trust-brand-name" contenteditable="true" spellcheck="false" oninput="
                      window.updateTrustField('brandName', this.innerText)
                    " class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-emerald-800/85 rounded px-1 -mx-1 cursor-text transition-colors text-emerald-300">Nuri Kitchen</span>
                  <div class="w-10 h-10 md:w-14 md:h-14 shrink-0 flex items-center justify-center relative ml-3">
                    <img id="trust-banner-mascot-admin-img" class="hidden w-full h-full object-contain drop-shadow-md" src="">
                    <div id="trust-banner-mascot-admin-svg" class="w-full h-full"></div>
                  </div>
                </div>

                <!-- Heading -->
                <h1 class="text-[31px] sm:text-[30px] leading-[40px] md:text-[45px] leading-[50px] lg:text-[60px] leading-[60px] font-black text-white mb-2 md:mb-4 leading-tight tracking-tight">
                  <span id="admin-trust-title" contenteditable="true" spellcheck="false" oninput="window.updateTrustField('title', this.innerHTML)" class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-emerald-800/85 rounded px-1 -mx-1 cursor-text transition-colors text-white block">Khám phá dinh dưỡng<br class="hidden md:block">
                    cá nhân hóa</span>
                </h1>

                <!-- Subheading -->
                <p class="text-emerald-100/80 text-[18px] sm:text-[20px] md:text-[22.5px] leading-[35px] mb-4 md:mb-8 max-w-lg leading-[1.4] md:leading-relaxed">
                  <span id="admin-trust-subtitle" contenteditable="true" spellcheck="false" oninput="
                      window.updateTrustField('subtitle', this.innerHTML)
                    " class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-800/85 rounded px-1 -mx-1 cursor-text transition-colors text-emerald-100/80 block">Nuri phân tích chỉ số cơ thể và đề xuất thực đơn phù hợp
                    với mục tiêu của bạn chỉ trong 4 bước đơn giản.</span>
                </p>

                <!-- Trust indicators -->
                <div class="flex flex-col items-start gap-1 md:gap-2 mb-4 md:mb-8">
                  <div class="flex -space-x-1.5 md:-space-x-3">
                    <img class="w-6 h-6 md:w-11 md:h-11 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=11" alt="Avatar">
                    <img class="w-6 h-6 md:w-11 md:h-11 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=12" alt="Avatar">
                    <img class="hidden sm:block w-6 h-6 md:w-11 md:h-11 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=33" alt="Avatar">
                    <img class="hidden md:block w-11 h-11 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=14" alt="Avatar">
                  </div>
                  <div class="text-emerald-200/90 text-[15px] md:text-[17.5px] leading-[25px] font-medium leading-[1.1] md:leading-normal">
                    <span id="admin-trust-count" contenteditable="true" spellcheck="false" oninput="
                        window.updateTrustField('trustCount', this.innerText)
                      " class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-emerald-800/85 rounded px-1 -mx-1 cursor-text transition-colors text-white font-bold text-[15px] leading-[20px] md:text-[20px] leading-[30px]">5.000+</span>
                    <span id="admin-trust-text" contenteditable="true" spellcheck="false" oninput="
                        window.updateTrustField('trustText', this.innerText)
                      " class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-emerald-800/85 rounded px-1 -mx-1 cursor-text transition-colors">khách đã tin tưởng</span>
                  </div>
                </div>

                <!-- CTA and notice -->
                <div class="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-5">
                  <button class="inline-flex items-center justify-center px-4 md:px-7 py-2.5 md:py-3.5 bg-[#059669] text-white rounded-xl font-bold text-[18px] sm:text-[15px] leading-[20px] md:text-[20px] leading-[30px] transition-all duration-300 shadow-[0_8px_20px_rgba(5,150,105,0.3)] lg:hover:-translate-y-1 active:scale-[0.98] lg:hover:shadow-lg lg:hover:bg-[#047857] whitespace-nowrap animate-glow-pulse-emerald">
                    <span id="admin-trust-cta" contenteditable="true" spellcheck="false" oninput="
                        window.updateTrustField('ctaText', this.innerText)
                      " class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-emerald-800/85 rounded px-1 -mx-1 cursor-text transition-colors text-white">Bắt đầu phân tích</span>
                    <i class="fa-solid fa-arrow-right ml-1.5 md:ml-2.5 text-[15px] md:text-[17.5px] leading-[25px] text-white ml-2"></i>
                  </button>
                  <div class="flex items-center gap-2 md:gap-3 text-emerald-200/70 text-[15px] md:text-[17.5px] leading-[25px]">
                    <i class="fa-solid fa-chevron-right hidden md:block text-emerald-600"></i>
                    <div class="flex flex-col gap-0.5">
                      <span id="admin-trust-free" contenteditable="true" spellcheck="false" oninput="
                          window.updateTrustField('freeText', this.innerText)
                        " class="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-emerald-800/85 rounded px-1 -mx-1 cursor-text transition-colors text-white font-semibold">Miễn phí 100%</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Image Area -->
              <div class="relative z-10 w-[40%] lg:w-[45%] flex justify-center items-center h-[200px] md:h-auto min-h-[0] md:min-h-[300px]">
                <div class="relative w-[130%] md:w-full max-w-[400px] aspect-square flex items-center justify-center translate-x-[10%] md:translate-x-0">
                  <!-- Concentric circles -->
                  <div class="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 scale-[0.8] md:scale-[0.85] pointer-events-none animate-spin-slow"></div>
                  <div class="absolute inset-0 rounded-full border border-dotted border-emerald-500/20 scale-[1.05] md:scale-[1.1] pointer-events-none animate-[spin_25s_linear_infinite_reverse]"></div>
                  <div class="absolute inset-0 rounded-full border border-dashed border-emerald-500/10 scale-[1.3] md:scale-[1.35] pointer-events-none animate-spin-slow"></div>

                  <!-- Food Images with upload trigger -->
                  <div id="admin-trust-top-container" onclick="
                      document.getElementById('trust-img-top-upload').click()
                    " class="absolute top-[5%] right-[5%] md:right-[0%] w-[70%] h-[70%] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] md:shadow-2xl border-[3px] md:border-[6px] border-[#043F2E] overflow-hidden z-20 animate-float cursor-pointer group/trust-top" title="Nhấn để thay đổi ảnh trên">
                    <img id="user-banner-img-trust-top-3" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Healthy Food" class="w-full h-full object-cover transform hover:scale-110 transition-all duration-700 group-hover/trust-top:brightness-75">
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/trust-top:opacity-100 transition-opacity bg-black/40 rounded-full">
                      <span class="text-white font-bold text-[15px] leading-[20px] flex items-center gap-1">
                        <i class="fa-solid fa-camera"></i>
                      </span>
                    </div>
                  </div>
                  <div id="admin-trust-bottom-container" onclick="
                      document.getElementById('trust-img-bottom-upload').click()
                    " class="absolute bottom-[5%] left-[5%] md:left-[5%] w-[50%] h-[50%] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] md:shadow-2xl border-[3px] md:border-[6px] border-[#043F2E] overflow-hidden z-30 animate-float-delayed cursor-pointer group/trust-bottom" title="Nhấn để thay đổi ảnh dưới">
                    <img id="user-banner-img-trust-bottom-3" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Salad" class="w-full h-full object-cover transform hover:scale-110 transition-all duration-700 group-hover/trust-bottom:brightness-75">
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/trust-bottom:opacity-100 transition-opacity bg-black/40 rounded-full">
                      <span class="text-white font-bold text-[15px] leading-[20px] flex items-center gap-1">
                        <i class="fa-solid fa-camera"></i>
                      </span>
                    </div>
                  </div>

                  <!-- Central PNG Sequence Image with manual scale -->
                  <div id="admin-trust-center-container" onclick="
                      document.getElementById('trust-img-center-upload').click()
                    " class="absolute w-[60%] h-[60%] flex items-center justify-center z-25 animate-float cursor-pointer" title="Nhấn để thay đổi ảnh giữa">
                    <div id="admin-trust-center-scale-wrapper" class="w-full h-full group/trust-center relative transition-transform duration-300" style="transform: scale(1)">
                      <img id="user-banner-img-trust-center-3" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Center Image" class="w-full h-full object-contain transform hover:scale-110 transition-all duration-700 group-hover/trust-center:brightness-75">
                      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/trust-center:opacity-100 transition-opacity bg-black/40 rounded-xl">
                        <span class="text-white font-bold text-[15px] leading-[20px] flex items-center gap-1">
                          <i class="fa-solid fa-camera"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Floating Icons/Badges -->
                  <div class="absolute top-[20%] left-[10%] bg-[#064E3B] text-emerald-400 w-7 h-7 md:w-10 md:h-10 rounded-md md:rounded-xl flex items-center justify-center shadow-lg border border-emerald-700/50 z-40 transform -rotate-12 animate-float text-[15px] md:text-[17.5px] leading-[25px]">
                    <i class="fa-solid fa-chart-line"></i>
                  </div>
                  <div class="absolute bottom-[35%] right-[0%] bg-[#064E3B] text-emerald-400 w-7 h-7 md:w-10 md:h-10 rounded-md md:rounded-xl flex items-center justify-center shadow-lg border border-emerald-700/50 z-40 transform rotate-12 animate-float-delayed text-[15px] md:text-[17.5px] leading-[25px]">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div>
              <h3 class="font-bold text-slate-800 text-[22.5px] leading-[35px]">
                Ảnh Banner Khai Trương (Siêu Ưu Đãi)
              </h3>
              <p class="text-[17.5px] leading-[25px] text-slate-500">
                Tải lên ảnh hoặc PNG sequence (chọn nhiều file) cho 2 ảnh trong
                Banner Khai Trương
              </p>
            </div>
            <div class="flex gap-4">
              <button onclick="
                  document.getElementById('banner-img-top-upload').click()
                " class="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-bold text-[17.5px] leading-[25px] hover:bg-emerald-200 transition-colors">
                <i class="fa-solid fa-camera mr-2"></i> Ảnh Trên
              </button>
              <button onclick="
                  document.getElementById('banner-img-bottom-upload').click()
                " class="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-bold text-[17.5px] leading-[25px] hover:bg-emerald-200 transition-colors">
                <i class="fa-solid fa-camera mr-2"></i> Ảnh Dưới
              </button>
            </div>
          </div>

          <div class="mt-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-wrap gap-4">
            <div>
              <h3 class="font-bold text-slate-800 text-[22.5px] leading-[35px]">
                Ảnh Trust Banner (Trang Tư Vấn - Hero Section)
              </h3>
              <p class="text-[17.5px] leading-[25px] text-slate-500">
                Tải lên ảnh hoặc PNG sequence (chọn nhiều file) và Bật/Tắt, tùy
                chỉnh kích thước cho các ảnh trong Trust Banner
              </p>
            </div>
            <div class="flex flex-wrap gap-4 items-center">
              <input type="file" id="trust-img-top-upload" class="hidden" accept="image/*" multiple="" onchange="handleBannerImageUpload(event, 'trust-top')">
              <input type="file" id="trust-img-bottom-upload" class="hidden" accept="image/*" multiple="" onchange="handleBannerImageUpload(event, 'trust-bottom')">
              <input type="file" id="trust-img-center-upload" class="hidden" accept="image/*" multiple="" onchange="handleBannerImageUpload(event, 'trust-center')">

              <div class="flex items-center gap-2 bg-emerald-50/50 p-1.5 rounded-lg border border-emerald-100">
                <button onclick="
                    document.getElementById('trust-img-top-upload').click()
                  " class="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-bold text-[17.5px] leading-[25px] hover:bg-emerald-200 transition-colors">
                  <i class="fa-solid fa-camera mr-2"></i> Ảnh Trên
                </button>
                <label class="relative inline-flex items-center cursor-pointer ml-1 select-none">
                  <input type="checkbox" id="toggle-trust-top" class="sr-only peer" checked="" onchange="window.toggleTrustImage('top', this.checked)">
                  <div class="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-500"></div>
                  <span class="ml-1.5 text-[15px] leading-[20px] font-semibold text-slate-600">Hiện</span>
                </label>
              </div>

              <div class="flex items-center gap-2 bg-emerald-50/50 p-1.5 rounded-lg border border-emerald-100">
                <button onclick="
                    document.getElementById('trust-img-bottom-upload').click()
                  " class="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-bold text-[17.5px] leading-[25px] hover:bg-emerald-200 transition-colors">
                  <i class="fa-solid fa-camera mr-2"></i> Ảnh Dưới
                </button>
                <label class="relative inline-flex items-center cursor-pointer ml-1 select-none">
                  <input type="checkbox" id="toggle-trust-bottom" class="sr-only peer" checked="" onchange="window.toggleTrustImage('bottom', this.checked)">
                  <div class="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-500"></div>
                  <span class="ml-1.5 text-[15px] leading-[20px] font-semibold text-slate-600">Hiện</span>
                </label>
              </div>

              <div class="flex items-center gap-2 bg-emerald-50/50 p-1.5 rounded-lg border border-emerald-100 flex-wrap">
                <button onclick="
                    document.getElementById('trust-img-center-upload').click()
                  " class="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-bold text-[17.5px] leading-[25px] hover:bg-emerald-200 transition-colors">
                  <i class="fa-solid fa-camera mr-2"></i> Ảnh Giữa
                </button>
                <label class="relative inline-flex items-center cursor-pointer ml-1 select-none">
                  <input type="checkbox" id="toggle-trust-center" class="sr-only peer" checked="" onchange="window.toggleTrustImage('center', this.checked)">
                  <div class="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-500"></div>
                  <span class="ml-1.5 text-[15px] leading-[20px] font-semibold text-slate-600">Hiện</span>
                </label>
                <div class="flex items-center gap-1.5 border-l border-emerald-200 pl-2 ml-1">
                  <span class="text-[15px] leading-[20px] text-slate-500 font-semibold whitespace-nowrap">Scale:</span>
                  <input type="range" id="scale-trust-center" min="30" max="250" value="100" class="w-16 h-1 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" oninput="window.changeTrustCenterScale(this.value)">
                  <span id="scale-trust-center-val" class="text-[15px] leading-[20px] font-bold text-emerald-700 min-w-[2.5rem] text-right">100%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center w-full">
            <img id="popup-mascot-img" class="w-32 h-32 md:w-48 md:h-48 object-contain mt-4 drop-shadow-xl hidden transition-all duration-300 transform translate-y-4 z-[100]" alt="Mascot Vui Vẻ">
          </div>
          <!-- Script for Banner Countdown Timer -->
          
        </div>

        <!-- Tab: Potential Customers -->
        <div id="tab-content-potential" class="hidden animate-fade-in">
          <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div class="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center flex-wrap gap-2">
              <span class="text-[17.5px] leading-[25px] text-slate-600"><i class="fa-solid fa-circle-info text-blue-500 mr-1"></i> Dữ
                liệu tự động lấy từ form đăng ký bên trang Tư vấn.</span>
              <button onclick="exportToExcel('potential')" class="text-[15px] leading-[20px] bg-emerald-50 text-emerald-600 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors font-medium flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-file-excel"></i> Xuất Excel
              </button>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-[17.5px] leading-[25px] whitespace-nowrap">
                <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-[15px] leading-[20px] tracking-wider">
                  <tr>
                    <th class="px-6 py-4">Khách hàng</th>
                    <th class="px-6 py-4">Số điện thoại</th>
                    <th class="px-6 py-4">Gói quan tâm</th>
                    <th class="px-6 py-4">Nguồn</th>
                    <th class="px-6 py-4">Ngày đăng ký</th>
                    <th class="px-6 py-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody id="potential-table-body" class="divide-y divide-slate-100"></tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Tab: Grand Opening Customers -->
        <div id="tab-content-grandopening" class="hidden animate-fade-in">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Gói Khai Trương -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div class="p-4 border-b border-slate-100 bg-red-50 flex justify-between items-center">
                <h3 class="font-bold text-red-800">Đăng Ký Mua Gói</h3>
                <span class="text-[15px] leading-[20px] font-medium bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-200" id="grandopening-pkg-count">0</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left text-[17.5px] leading-[25px] text-slate-600">
                  <thead class="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
                    <tr>
                      <th class="p-4">KHÁCH HÀNG</th>
                      <th class="p-4">ĐỊA CHỈ</th>
                      <th class="p-4">GÓI</th>
                      <th class="p-4">GIẢI THƯỞNG</th>
                      <th class="p-4">NGÀY ĐK</th>
                    </tr>
                  </thead>
                  <tbody id="grandopening-pkg-list" class="divide-y divide-slate-50"></tbody>
                </table>
              </div>
            </div>

            <!-- Đặt 1 Bữa Khai Trương -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div class="p-4 border-b border-slate-100 bg-red-50 flex justify-between items-center">
                <h3 class="font-bold text-red-800">Đăng Ký Đặt 1 Bữa</h3>
                <span class="text-[15px] leading-[20px] font-medium bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-200" id="grandopening-order-count">0</span>
              </div>
              <div id="grandopening-order-list" class="p-4 grid grid-cols-1 xl:grid-cols-2 gap-4"></div>
            </div>
          </div>
        </div>

        <!-- Tab: Purchased Customers -->
        <div id="tab-content-purchased" class="hidden animate-fade-in">
          <div class="flex justify-end mb-4 gap-2">
            <button onclick="openBatchExportBillModal()" class="inline-flex items-center px-4 py-2 text-[17.5px] leading-[25px] font-medium rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 shadow-sm transition-all">
              <i class="fa-solid fa-receipt mr-2"></i> Xuất Bill Hàng Loạt
            </button>
<button onclick="exportToExcel('purchased')" class="inline-flex items-center px-4 py-2 text-[17.5px] leading-[25px] font-medium rounded-lg text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 shadow-sm transition-all">
              <i class="fa-solid fa-file-excel mr-2"></i> Xuất Excel
            </button>
            <button onclick="openPurchasedModal('add')" class="inline-flex items-center px-4 py-2 text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-primary hover:bg-primaryHover shadow-sm transition-all">
              <i class="fa-solid fa-user-plus mr-2"></i> Thêm khách hàng
            </button>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left text-[17.5px] leading-[25px] whitespace-nowrap">
                <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-[15px] leading-[20px] tracking-wider">
                  <tr>
                    <th class="px-6 py-4">Khách hàng</th>
                    <th class="px-6 py-4">Gói đang dùng</th>
                    <th class="px-6 py-4">Ngày BĐ - KT</th>
                    <th class="px-6 py-4">Trạng thái</th>
                    <th class="px-6 py-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody id="purchased-table-body" class="divide-y divide-slate-100"></tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Tab: Packages -->
        <div id="tab-content-packages" class="hidden animate-fade-in relative z-10 w-full min-h-[500px]">
          <div class="mb-8 p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200">
            <h3 class="font-bold text-[22.5px] leading-[35px] mb-1">
              <i class="fa-solid fa-circle-info mr-2"></i> Bản sao hệ thống cấu
              hình gói
            </h3>
            <p class="text-[17.5px] leading-[25px]">
              Đây là khối giao diện cho phép xem trước các gói được hiển thị
              trên trang tư vấn khách hàng.
            </p>
          </div>

          <!-- Pricing Cards Grid copied from UI -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 items-stretch max-w-5xl mx-auto mb-10 text-left">
            <!-- Gói 7 Ngày -->
            <div class="h-full bg-white border-2 border-slate-200 rounded-2xl md:rounded-3xl p-4 sm:p-5 lg:p-8 flex flex-col transition-all duration-300">
              <div class="flex flex-row md:flex-col justify-between items-center md:items-start mb-2 md:mb-4 gap-4">
                <div>
                  <p oninput="
                      window.updateTextSync(
                        'front-pkg1-subtitle',
                        this.innerText,
                      )
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded text-slate-600 font-bold text-[15px] leading-[20px] md:text-[17.5px] leading-[25px] mb-0.5 md:mb-1 uppercase tracking-wider md:normal-case md:tracking-normal cursor-text transition-colors duration-200">
                    Gói 7 Ngày
                  </p>
                  <h4 oninput="
                      window.updateTextSync('front-pkg1-title', this.innerText)
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded text-[30px] leading-[40px] md:text-[37.5px] leading-[45px] font-black text-[#0F172A] tracking-tight cursor-text transition-colors duration-200">
                    Trải Nghiệm
                  </h4>
                  <p oninput="
                      window.updateTextSync('front-pkg1-saving', this.innerText)
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded text-[#10B981] font-bold text-[20px] md:text-[17.5px] leading-[25px] mt-1 cursor-text transition-colors duration-200">
                    Tiết kiệm 5% chi phí
                  </p>
                </div>
              </div>

              <ul class="space-y-2 md:space-y-3 mb-0 md:mb-8 flex-1 relative z-10 mt-1 md:mt-2">
                <li class="flex items-start gap-2.5 text-[20px] md:text-[17.5px] leading-[25px] text-slate-600">
                  <i class="fa-solid fa-check text-[#10B981] mt-1 max-md:mt-0 max-md:self-center text-[17.5px] leading-[25px]"></i>
                  <span oninput="
                      window.updateTextSync('front-pkg1-b1', this.innerText)
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded flex-1 cursor-text transition-colors duration-200">Miễn phí giao từ 2 đơn</span>
                </li>
                <li class="flex items-start gap-2.5 text-[20px] md:text-[17.5px] leading-[25px] text-slate-600">
                  <i class="fa-solid fa-check text-[#10B981] mt-1 max-md:mt-0 max-md:self-center text-[17.5px] leading-[25px]"></i>
                  <span oninput="
                      window.updateTextSync('front-pkg1-b2', this.innerText)
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded flex-1 cursor-text transition-colors duration-200">Chuyên gia theo dõi 1:1</span>
                </li>
                <li class="flex items-start gap-2.5 text-[20px] md:text-[17.5px] leading-[25px] text-slate-600">
                  <i class="fa-solid fa-check text-[#10B981] mt-1 max-md:mt-0 max-md:self-center text-[17.5px] leading-[25px]"></i>
                  <span oninput="
                      window.updateTextSync('front-pkg1-b3', this.innerText)
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded flex-1 cursor-text transition-colors duration-200">Đổi món linh hoạt</span>
                </li>
              </ul>
              <div class="cursor-not-allowed w-full text-center py-3 rounded-xl border-2 border-slate-200 text-slate-400 font-bold text-[17.5px] leading-[25px] bg-slate-50 transition-all duration-300 mt-auto">
                Chọn Gói Này
              </div>
            </div>

            <!-- Gói 30 Ngày (Phổ biến nhất) -->
            <div class="relative h-full md:-mt-4 md:mb-4 z-10">
              <div class="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 bg-[#10B981] text-white text-[18px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md z-20 whitespace-nowrap">
                Phổ Biến Nhất
              </div>
              <div class="h-full bg-[#0F172A] border-2 border-[#0F172A] rounded-2xl md:rounded-3xl p-5 sm:p-6 lg:p-8 flex flex-col relative overflow-hidden shadow-xl shadow-slate-900/20">
                <div class="absolute top-0 right-0 w-40 h-40 bg-[#10B981] rounded-full blur-[64px] opacity-20 pointer-events-none"></div>

                <div class="flex flex-row md:flex-col justify-between items-start mb-4 relative z-10 w-full gap-4">
                  <div>
                    <div class="flex items-center gap-2 mb-0.5 md:mb-1">
                      <p oninput="
                          window.updateTextSync(
                            'front-pkg2-subtitle',
                            this.innerText,
                          )
                        " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-slate-800 rounded text-emerald-400 md:text-slate-300 font-bold text-[15px] leading-[20px] md:text-[17.5px] leading-[25px] uppercase tracking-wider md:normal-case md:tracking-normal cursor-text transition-colors duration-200">
                        Gói 30 Ngày
                      </p>
                      <span class="md:hidden bg-[#10B981] text-white text-[14px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider">Phổ Biến</span>
                    </div>
                    <h4 oninput="
                        window.updateTextSync(
                          'front-pkg2-title',
                          this.innerText,
                        )
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-slate-800 rounded text-[37.5px] leading-[45px] md:text-[45px] leading-[50px] font-black text-white tracking-tight cursor-text transition-colors duration-200">
                      Duy Trì
                    </h4>
                    <p oninput="
                        window.updateTextSync(
                          'front-pkg2-saving',
                          this.innerText,
                        )
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-slate-800 rounded text-[#10B981] font-bold text-[20px] md:text-[17.5px] leading-[25px] mt-1 cursor-text transition-colors duration-200">
                      Tiết kiệm đến 15%
                    </p>
                  </div>
                </div>

                <ul class="space-y-2 md:space-y-3 mb-0 md:mb-8 flex-1 relative z-10 mt-1 md:mt-2">
                  <li class="flex items-start gap-2.5 text-[20px] md:text-[17.5px] leading-[25px] text-slate-200">
                    <i class="fa-solid fa-check text-[#10B981] mt-1 max-md:mt-0 max-md:self-center text-[17.5px] leading-[25px]"></i>
                    <span oninput="
                        window.updateTextSync('front-pkg2-b1', this.innerText)
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-slate-800 rounded flex-1 cursor-text transition-colors duration-200">Miễn phí giao hàng</span>
                  </li>
                  <li class="flex items-start gap-2.5 text-[20px] md:text-[17.5px] leading-[25px] text-slate-200">
                    <i class="fa-solid fa-check text-[#10B981] mt-1 max-md:mt-0 max-md:self-center text-[17.5px] leading-[25px]"></i>
                    <span oninput="
                        window.updateTextSync('front-pkg2-b2', this.innerText)
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-slate-800 rounded flex-1 cursor-text transition-colors duration-200">Chuyên gia theo dõi 1:1</span>
                  </li>
                  <li class="flex items-start gap-2.5 text-[20px] md:text-[17.5px] leading-[25px] text-slate-200">
                    <i class="fa-solid fa-check text-[#10B981] mt-1 max-md:mt-0 max-md:self-center text-[17.5px] leading-[25px]"></i>
                    <span oninput="
                        window.updateTextSync('front-pkg2-b3', this.innerText)
                      " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-slate-800 rounded flex-1 cursor-text transition-colors duration-200">Đổi món linh hoạt</span>
                  </li>
                </ul>

                <div class="cursor-not-allowed hidden md:block w-full text-center py-3.5 rounded-xl bg-[#10B981] border-2 border-[#10B981] text-white font-bold text-[17.5px] leading-[25px] transition-all duration-300 shadow-lg shadow-emerald-500/25 relative z-10 mt-auto">
                  Đăng Ký Ngay
                </div>
              </div>
            </div>

            <!-- Gói 10 Ngày -->
            <div class="h-full bg-white border-2 border-slate-200 rounded-2xl md:rounded-3xl p-4 sm:p-5 lg:p-8 flex flex-col transition-all duration-300">
              <div class="flex flex-row md:flex-col justify-between items-center md:items-start mb-0 md:mb-4 gap-4">
                <div>
                  <p oninput="
                      window.updateTextSync(
                        'front-pkg3-subtitle',
                        this.innerText,
                      )
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded text-slate-600 font-bold text-[15px] leading-[20px] md:text-[17.5px] leading-[25px] mb-0.5 md:mb-1 uppercase tracking-wider md:normal-case md:tracking-normal cursor-text transition-colors duration-200">
                    Gói 10 Ngày
                  </p>
                  <h4 oninput="
                      window.updateTextSync('front-pkg3-title', this.innerText)
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded text-[30px] leading-[40px] md:text-[37.5px] leading-[45px] font-black text-[#0F172A] tracking-tight cursor-text transition-colors duration-200">
                    Bứt Phá
                  </h4>
                  <p oninput="
                      window.updateTextSync('front-pkg3-saving', this.innerText)
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded text-[#10B981] font-bold text-[20px] md:text-[17.5px] leading-[25px] mt-1 cursor-text transition-colors duration-200">
                    Tiết kiệm 8% chi phí
                  </p>
                </div>
              </div>
              <ul class="space-y-2 md:space-y-3 mb-0 md:mb-8 flex-1 relative z-10 mt-1 md:mt-2">
                <li class="flex items-start gap-2.5 text-[20px] md:text-[17.5px] leading-[25px] text-slate-600">
                  <i class="fa-solid fa-check text-[#10B981] mt-1 max-md:mt-0 max-md:self-center text-[17.5px] leading-[25px]"></i>
                  <span oninput="
                      window.updateTextSync('front-pkg3-b1', this.innerText)
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded flex-1 cursor-text transition-colors duration-200">Miễn phí giao từ 2 đơn</span>
                </li>
                <li class="flex items-start gap-2.5 text-[20px] md:text-[17.5px] leading-[25px] text-slate-600">
                  <i class="fa-solid fa-check text-[#10B981] mt-1 max-md:mt-0 max-md:self-center text-[17.5px] leading-[25px]"></i>
                  <span oninput="
                      window.updateTextSync('front-pkg3-b2', this.innerText)
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded flex-1 cursor-text transition-colors duration-200">Chuyên gia theo dõi 1:1</span>
                </li>
                <li class="flex items-start gap-2.5 text-[20px] md:text-[17.5px] leading-[25px] text-slate-600">
                  <i class="fa-solid fa-check text-[#10B981] mt-1 max-md:mt-0 max-md:self-center text-[17.5px] leading-[25px]"></i>
                  <span oninput="
                      window.updateTextSync('front-pkg3-b3', this.innerText)
                    " contenteditable="true" spellcheck="false" class="focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded flex-1 cursor-text transition-colors duration-200">Đổi món linh hoạt</span>
                </li>
              </ul>
              <div class="cursor-not-allowed hidden md:block w-full text-center py-3 rounded-xl border-2 border-slate-200 text-slate-400 font-bold text-[17.5px] leading-[25px] bg-slate-50 transition-all duration-300 mt-auto">
                Chọn Gói Này
              </div>
            </div>
          </div>

          <!-- Gói Theo Mục Tiêu -->
          <h4 class="font-bold text-slate-800 text-[20px] leading-[30px] md:text-[22.5px] leading-[35px] mb-4">
            Gói Theo Mục Tiêu Dinh Dưỡng
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 items-stretch max-w-5xl mx-auto mb-10 text-left mt-16">
                        <!-- Gói Trải Nghiệm -->
            <div class="relative bg-white rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center shadow-lg shadow-emerald-900/5 group border border-slate-100 hover:border-emerald-200 transition-all duration-300">
              <div class="absolute top-0 left-0 w-full h-[180px] overflow-hidden" style="border-top-left-radius: 32px; border-top-right-radius: 32px; border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                <img id="front-pkg4-bg" onclick="window.promptUpdateImage('front-pkg4-bg')" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;w=600&amp;q=80" class="cursor-pointer w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="bg" title="Nhấn để đổi ảnh nền">
                <div class="absolute inset-0 bg-emerald-900/40 mix-blend-multiply"></div>
                <div class="absolute top-6 left-0 w-full text-center px-4">
                  <p class="text-white font-medium text-[17.5px] leading-[25px] drop-shadow-md">
                    bắt đầu hành trình<br>
                    <span class="font-bold text-[20px] leading-[30px]">thay đổi vóc dáng</span>
                  </p>
                </div>
              </div>
              <div class="relative z-10 mt-[80px] mb-4 w-40 h-40 rounded-full border-[6px] border-white shadow-xl bg-white overflow-hidden shrink-0 group-hover:-translate-y-2 transition-transform duration-500">
                <img id="front-pkg4-img" onclick="window.promptUpdateImage('front-pkg4-img')" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=300&amp;q=80" class="cursor-pointer w-full h-full object-cover" alt="food" title="Nhấn để đổi ảnh avatar">
              </div>
              <div class="relative z-10 flex flex-col items-center w-full flex-1">
                <h3 class="text-emerald-600 font-bold uppercase tracking-wider text-[17.5px] leading-[25px] mb-1" oninput="window.updateTextSync('front-pkg4-subtitle', this.innerText)" contenteditable="true" spellcheck="false">Trải Nghiệm</h3>
                <p class="text-[37.5px] leading-[45px] font-black text-slate-800 tracking-tight mb-4" oninput="window.updateTextSync('front-pkg4-title', this.innerText)" contenteditable="true" spellcheck="false">1 Tuần</p>
                <div class="bg-emerald-50 rounded-2xl p-3 mb-5 w-full border border-emerald-100/50 flex flex-col items-center justify-center">
                  <p class="text-emerald-600 font-black text-[25px] leading-[35px] mb-0.5" oninput="window.updateTextSync('front-pkg4-expected', this.innerText)" contenteditable="true" spellcheck="false">+0.36kg dự kiến</p>
                  <p class="text-emerald-700/80 font-medium text-[17.5px] leading-[25px]" oninput="window.updateTextSync('front-pkg4-target', this.innerText)" contenteditable="true" spellcheck="false">Đạt 6% mục tiêu</p>
                </div>
                <ul class="text-left space-y-3 w-full mb-6 flex-1">
                  <li class="flex items-start gap-2.5 text-slate-600 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span oninput="window.updateTextSync('front-pkg4-b1', this.innerText)" contenteditable="true" spellcheck="false" class="flex-1 focus:outline-none">Menu Nuri thiết kế riêng</span>
                  </li>
                  <li class="flex items-start gap-2.5 text-slate-600 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span oninput="window.updateTextSync('front-pkg4-b2', this.innerText)" contenteditable="true" spellcheck="false" class="flex-1 focus:outline-none">Giao hàng tận nơi</span>
                  </li>
                </ul>
                <button type="button" onclick="openPricingModal('5', true)" class="text-emerald-600 hover:text-emerald-700 font-bold text-[17.5px] leading-[25px] mb-4 transition-colors flex items-center justify-center gap-1.5 w-full">
                  <i class="fa-solid fa-tags"></i> Xem bảng giá chi tiết
                </button>
                <div onclick="openPricingModal('5', true)" class="cursor-pointer w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-3.5 font-bold text-[20px] leading-[30px] shadow-md shadow-emerald-500/20 transition-all hover:-translate-y-0.5 active:scale-95 text-center">
                  [Chọn gói]
                </div>
              </div>
            </div>

            <!-- Gói Chuyển Đổi -->
            <div class="relative bg-white rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center shadow-lg shadow-emerald-900/5 group border border-slate-100 hover:border-emerald-200 transition-all duration-300">
              <div class="absolute top-0 left-0 w-full h-[180px] overflow-hidden" style="border-top-left-radius: 32px; border-top-right-radius: 32px; border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                <img id="front-pkg5-bg" onclick="window.promptUpdateImage('front-pkg5-bg')" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&amp;fit=crop&amp;w=600&amp;q=80" class="cursor-pointer w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="bg" title="Nhấn để đổi ảnh nền">
                <div class="absolute inset-0 bg-emerald-900/40 mix-blend-multiply"></div>
                <div class="absolute top-6 left-0 w-full text-center px-4">
                  <p class="text-white font-medium text-[17.5px] leading-[25px] drop-shadow-md">
                    duy trì cân nặng<br>
                    <span class="font-bold text-[20px] leading-[30px]">tăng cơ giảm mỡ</span>
                  </p>
                </div>
              </div>
              <div class="relative z-10 mt-[80px] mb-4 w-40 h-40 rounded-full border-[6px] border-white shadow-xl bg-white overflow-hidden shrink-0 group-hover:-translate-y-2 transition-transform duration-500">
                <img id="front-pkg5-img" onclick="window.promptUpdateImage('front-pkg5-img')" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;w=300&amp;q=80" class="cursor-pointer w-full h-full object-cover" alt="food" title="Nhấn để đổi ảnh avatar">
              </div>
              <div class="relative z-10 flex flex-col items-center w-full flex-1">
                <h3 class="text-emerald-600 font-bold uppercase tracking-wider text-[17.5px] leading-[25px] mb-1" oninput="window.updateTextSync('front-pkg5-subtitle', this.innerText)" contenteditable="true" spellcheck="false">Chuyển Đổi</h3>
                <p class="text-[37.5px] leading-[45px] font-black text-slate-800 tracking-tight mb-4" oninput="window.updateTextSync('front-pkg5-title', this.innerText)" contenteditable="true" spellcheck="false">2 Tuần</p>
                <div class="bg-emerald-50 rounded-2xl p-3 mb-5 w-full border border-emerald-100/50 flex flex-col items-center justify-center">
                  <p class="text-emerald-600 font-black text-[25px] leading-[35px] mb-0.5" oninput="window.updateTextSync('front-pkg5-expected', this.innerText)" contenteditable="true" spellcheck="false">+0.71kg dự kiến</p>
                  <p class="text-emerald-700/80 font-medium text-[17.5px] leading-[25px]" oninput="window.updateTextSync('front-pkg5-target', this.innerText)" contenteditable="true" spellcheck="false">Đạt 12% mục tiêu</p>
                </div>
                <ul class="text-left space-y-3 w-full mb-6 flex-1">
                  <li class="flex items-start gap-2.5 text-slate-600 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span oninput="window.updateTextSync('front-pkg5-b1', this.innerText)" contenteditable="true" spellcheck="false" class="flex-1 focus:outline-none">Miễn phí giao từ 2 đơn</span>
                  </li>
                  <li class="flex items-start gap-2.5 text-slate-600 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span oninput="window.updateTextSync('front-pkg5-b2', this.innerText)" contenteditable="true" spellcheck="false" class="flex-1 focus:outline-none">Đổi món linh hoạt</span>
                  </li>
                </ul>
                <button type="button" onclick="openPricingModal('10', true)" class="text-emerald-600 hover:text-emerald-700 font-bold text-[17.5px] leading-[25px] mb-4 transition-colors flex items-center justify-center gap-1.5 w-full">
                  <i class="fa-solid fa-tags"></i> Xem bảng giá chi tiết
                </button>
                <div onclick="openPricingModal('10', true)" class="cursor-pointer w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-3.5 font-bold text-[20px] leading-[30px] shadow-md shadow-emerald-500/20 transition-all hover:-translate-y-0.5 active:scale-95 text-center">
                  [Chọn gói]
                </div>
              </div>
            </div>

            <!-- Gói Bứt Phá -->
            <div class="relative bg-white rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center shadow-lg shadow-emerald-900/10 group border-2 border-emerald-500 transition-all duration-300">
              <div class="absolute -top-5 right-6 z-20">
                <span class="bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[15px] leading-[20px] font-black px-4 py-1.5 rounded-full shadow-lg shadow-orange-500/30 uppercase tracking-wider">Phổ Biến Nhất</span>
              </div>
              <div class="absolute top-0 left-0 w-full h-[180px] overflow-hidden" style="border-top-left-radius: 32px; border-top-right-radius: 32px; border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                <img id="front-pkg6-bg" onclick="window.promptUpdateImage('front-pkg6-bg')" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;w=600&amp;q=80" class="cursor-pointer w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="bg" title="Nhấn để đổi ảnh nền">
                <div class="absolute inset-0 bg-emerald-900/60 mix-blend-multiply"></div>
                <div class="absolute top-6 left-0 w-full text-center px-4">
                  <p class="text-white font-medium text-[17.5px] leading-[25px] drop-shadow-md">
                    gấp đôi lượng Protein<br>
                    <span class="font-bold text-[20px] leading-[30px]">xây dựng cơ bắp</span>
                  </p>
                </div>
              </div>
              <div class="relative z-10 mt-[80px] mb-4 w-40 h-40 rounded-full border-[6px] border-white shadow-xl bg-white overflow-hidden shrink-0 group-hover:-translate-y-2 transition-transform duration-500">
                <img id="front-pkg6-img" onclick="window.promptUpdateImage('front-pkg6-img')" src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&amp;fit=crop&amp;w=300&amp;q=80" class="cursor-pointer w-full h-full object-cover" alt="food" title="Nhấn để đổi ảnh avatar">
              </div>
              <div class="relative z-10 flex flex-col items-center w-full flex-1">
                <h3 class="text-emerald-600 font-bold uppercase tracking-wider text-[17.5px] leading-[25px] mb-1" oninput="window.updateTextSync('front-pkg6-subtitle', this.innerText)" contenteditable="true" spellcheck="false">Bứt Phá</h3>
                <p class="text-[37.5px] leading-[45px] font-black text-slate-800 tracking-tight mb-4" oninput="window.updateTextSync('front-pkg6-title', this.innerText)" contenteditable="true" spellcheck="false">1 Tháng</p>
                <div class="bg-emerald-50 rounded-2xl p-3 mb-5 w-full border border-emerald-100/50 flex flex-col items-center justify-center">
                  <p class="text-emerald-600 font-black text-[25px] leading-[35px] mb-0.5" oninput="window.updateTextSync('front-pkg6-expected', this.innerText)" contenteditable="true" spellcheck="false">+1.43kg dự kiến</p>
                  <p class="text-emerald-700/80 font-medium text-[17.5px] leading-[25px]" oninput="window.updateTextSync('front-pkg6-target', this.innerText)" contenteditable="true" spellcheck="false">Đạt 24% mục tiêu</p>
                </div>
                <ul class="text-left space-y-3 w-full mb-6 flex-1">
                  <li class="flex items-start gap-2.5 text-slate-600 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span oninput="window.updateTextSync('front-pkg6-b1', this.innerText)" contenteditable="true" spellcheck="false" class="flex-1 focus:outline-none">Miễn phí giao hàng</span>
                  </li>
                  <li class="flex items-start gap-2.5 text-slate-600 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span oninput="window.updateTextSync('front-pkg6-b2', this.innerText)" contenteditable="true" spellcheck="false" class="flex-1 focus:outline-none">Chuyên gia theo dõi 1:1</span>
                  </li>
                  <li class="flex items-start gap-2.5 text-slate-600 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span oninput="window.updateTextSync('front-pkg6-b3', this.innerText)" contenteditable="true" spellcheck="false" class="flex-1 focus:outline-none">Đổi món linh hoạt</span>
                  </li>
                </ul>
                <button type="button" onclick="openPricingModal('20', true)" class="text-emerald-600 hover:text-emerald-700 font-bold text-[17.5px] leading-[25px] mb-4 transition-colors flex items-center justify-center gap-1.5 w-full">
                  <i class="fa-solid fa-tags"></i> Xem bảng giá chi tiết
                </button>
                <div onclick="openPricingModal('20', true)" class="cursor-pointer w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-3.5 font-bold text-[20px] leading-[30px] shadow-md shadow-emerald-500/20 transition-all hover:-translate-y-0.5 active:scale-95 text-center">
                  [Chọn gói]
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        

        <!-- Tab: Order History -->
        <div id="tab-content-history" class="hidden animate-fade-in relative z-10 w-full min-h-[500px]">
          <div class="mb-4">
            <label class="block text-[17.5px] leading-[25px] font-bold text-slate-700 mb-2">Chọn khách hàng</label>
            <div class="relative max-w-md">
              <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input type="text" id="order-history-customer-search" onclick="filterOrderHistoryCustomerSelect()" onkeyup="filterOrderHistoryCustomerSelect()" placeholder="Tìm theo tên/SĐT khách hàng..." class="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary">
            </div>
            <div id="order-history-customer-list" class="mt-2 bg-white border border-slate-200 rounded-lg shadow-sm hidden max-h-60 overflow-y-auto max-w-md">
              <!-- Rendered via JS -->
            </div>
          </div>

          <div id="order-history-display" class="hidden">
            <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-800 mb-4" id="order-history-customer-name">
              Lịch sử đơn hàng của: ...
            </h3>
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div class="overflow-x-auto">
                <table class="w-full text-left text-[17.5px] leading-[25px] whitespace-nowrap">
                  <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-[15px] leading-[20px] tracking-wider">
                    <tr>
                      <th class="px-6 py-4">Mã ĐH</th>
                      <th class="px-6 py-4">Ngày giao</th>
                      <th class="px-6 py-4">Món chính</th>
                      <th class="px-6 py-4">Tổng tiền</th>
                      <th class="px-6 py-4">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody id="order-history-table-body" class="divide-y divide-slate-100">
                    <!-- Filled dynamically via JS -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab: Accounts -->
        <div id="tab-content-accounts" class="hidden animate-fade-in relative z-10 w-full min-h-[500px]">
          <div class="flex justify-between items-end mb-4">
            <h3 class="font-bold text-slate-800 text-[22.5px] leading-[35px]">
              Danh sách Tài Khoản
            </h3>
            <div class="flex gap-2">
              <div class="relative w-64">
                <input type="text" id="account-search-input" onkeyup="renderAccountsList()" placeholder="Tìm theo tên, SĐT..." class="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-white">
                <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
              </div>
              <button onclick="openAccountModal('add')" class="inline-flex items-center px-4 py-2 text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-primary hover:bg-primaryHover shadow-sm transition-all">
                <i class="fa-solid fa-plus mr-2"></i> Tạo tài khoản
              </button>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left text-[17.5px] leading-[25px] whitespace-nowrap">
                <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-[15px] leading-[20px] tracking-wider">
                  <tr>
                    <th class="px-6 py-4">Khách hàng</th>
                    <th class="px-6 py-4">SĐT</th>
                    <th class="px-6 py-4">Mật khẩu</th>
                    <th class="px-6 py-4">Điểm</th>
                    <th class="px-6 py-4">Hạng</th>
                    <th class="px-6 py-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody id="accounts-table-body" class="divide-y divide-slate-100"></tbody>
              </table>
            </div>
          </div>
        </div>
      

      

      

      <!-- View: CONSULTING (Customer Facing) -->
      <div id="view-consulting" class="hidden animate-fade-in pb-12 bg-slate-50 dark:bg-[#0f172a]">
        <div id="consulting-content-wrapper" class="w-full transition-all duration-300 relative">
          <!-- Toggle View Mode -->
          <div class="absolute top-2 right-2 z-[100] hidden md:flex justify-end pointer-events-none" id="consulting-view-toggle">
            <div class="bg-slate-200/80 p-0.5 rounded-lg inline-flex shadow-sm backdrop-blur-md relative pointer-events-auto scale-90 sm:scale-100 origin-top-right">
              <button onclick="setConsultingViewMode('desktop')" id="btn-view-desktop" class="px-3 py-1.5 rounded-md text-[20px] leading-[30px] font-bold bg-white text-slate-800 shadow-sm transition-all flex items-center justify-center" title="Giao diện máy tính">
                <i class="fa-solid fa-desktop"></i>
              </button>
              <button onclick="setConsultingViewMode('mobile')" id="btn-view-mobile" class="px-3 py-1.5 rounded-md text-[20px] leading-[30px] font-medium text-slate-500 hover:text-slate-800 hover:bg-white/50 transition-all flex items-center justify-center" title="Giao diện điện thoại">
                <i class="fa-solid fa-mobile-screen"></i>
              </button>
            </div>
          </div>

          <div class="sim-scrollable w-full overflow-x-clip">
                                    <!-- Trust Panel / Hero Section -->
            <div class="mb-6 mt-2 mx-4 md:mx-0 relative rounded-3xl bg-[#043F2E] overflow-hidden flex flex-row items-center p-5 md:p-12 text-left shadow-2xl reveal-scale">
              <!-- Background pattern/glow -->
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              <!-- Nút trở về Trang chủ -->
              <button onclick="switchView('kitchen')" class="absolute top-4 left-4 md:top-6 md:left-6 z-30 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-white font-bold text-[15px] leading-[20px] md:text-[17.5px] leading-[25px] border border-emerald-600/60 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group" title="Trở về trang chủ" id="btn-back-to-home-consulting">
                <i class="fa-solid fa-arrow-left text-orange-400 group-hover:-translate-x-1 transition-transform"></i>
                <span class="font-bold text-white tracking-wide">Trở về trang chủ</span>
              </button>
              <div class="absolute top-4 right-14 md:top-6 md:right-20 z-30" id="landing-auth-container">
                <!-- Rendered via JS -->
              </div>
              <button onclick="toggleTheme()" class="absolute top-4 right-4 md:top-6 md:right-6 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-900/50 hover:bg-emerald-800 text-emerald-200 flex items-center justify-center transition-colors border border-emerald-700/50 shadow-sm backdrop-blur-sm" title="Chuyển đổi giao diện">
                <i class="fa-solid fa-moon dark:hidden text-[15px] md:text-[17.5px] leading-[25px]"></i>
                <i class="fa-solid fa-sun hidden dark:block text-[15px] md:text-[17.5px] leading-[25px]"></i>
              </button>
              <div class="relative z-10 w-[60%] lg:w-[55%] pr-2 md:pr-8 mb-0">
                <!-- Badge -->
                <div class="inline-flex items-center gap-3 px-6 md:px-8 py-2 md:py-3 rounded-full bg-emerald-900/50 border-[3px] border-emerald-700/50 text-emerald-300 text-[15px] md:text-[17.5px] leading-[25px] font-bold mb-3 md:mb-6 uppercase tracking-wider backdrop-blur-sm shadow-lg">
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                  <span id="landing-brand-name"><span id="user-trust-brand-name-1">Nuri Kitchen</span></span>
                  <div class="w-10 h-10 md:w-14 md:h-14 shrink-0 flex items-center justify-center relative ml-3">
                    <img id="trust-banner-mascot-1-img" class="hidden w-full h-full object-contain drop-shadow-md" src="">
                    <div id="trust-banner-mascot-1-svg" class="w-full h-full"></div>
                  </div>
                </div>
                <!-- Heading -->
                <h1 class="text-[31px] sm:text-[30px] leading-[40px] md:text-[45px] leading-[50px] lg:text-[60px] leading-[60px] font-black text-white mb-2 md:mb-4 leading-tight tracking-tight" id="user-trust-title-1">
                  Khám phá dinh dưỡng<br class="hidden md:block">
                  cá nhân hóa
                </h1>
                <!-- Subheading -->
                <p class="text-emerald-100/80 text-[18px] sm:text-[20px] md:text-[22.5px] leading-[35px] mb-4 md:mb-8 max-w-lg leading-[1.4] md:leading-relaxed" id="user-trust-subtitle-1">
                  Nuri phân tích chỉ số cơ thể và đề xuất thực đơn phù hợp<span class="hidden sm:inline">
                    với mục tiêu của bạn</span>
                  chỉ trong 4 bước đơn giản.
                </p>
                <!-- Trust indicators -->
                <div class="flex flex-col items-start gap-1 md:gap-2 mb-4 md:mb-8">
                  <div class="flex -space-x-1.5 md:-space-x-3">
                    <img class="w-6 h-6 md:w-11 md:h-11 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=11" alt="Avatar">
                    <img class="w-6 h-6 md:w-11 md:h-11 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=12" alt="Avatar">
                    <img class="hidden sm:block w-6 h-6 md:w-11 md:h-11 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=33" alt="Avatar">
                    <img class="hidden md:block w-11 h-11 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=14" alt="Avatar">
                  </div>
                  <div class="text-emerald-200/90 text-[15px] md:text-[17.5px] leading-[25px] font-medium leading-[1.1] md:leading-normal">
                    <span class="text-white font-bold text-[15px] leading-[20px] md:text-[20px] leading-[30px]" id="user-trust-count-1">5.000+</span>
                    <span id="user-trust-text-1">khách đã tin tưởng</span>
                  </div>
                </div>
                <!-- CTA and notice -->
                <div class="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-5">
                  <button onclick="
                      document
                        .getElementById('diet-analysis-form')
                        .scrollIntoView({ behavior: 'smooth', block: 'start' })
                    " class="inline-flex items-center justify-center px-4 md:px-7 py-2.5 md:py-3.5 bg-[#059669] text-white rounded-xl font-bold text-[18px] sm:text-[15px] leading-[20px] md:text-[20px] leading-[30px] transition-all duration-300 shadow-[0_8px_20px_rgba(5,150,105,0.3)] lg:hover:-translate-y-1 active:scale-[0.98] lg:hover:shadow-lg lg:hover:bg-[#047857] whitespace-nowrap animate-glow-pulse-emerald">
                    <span id="user-trust-cta-1">Bắt đầu phân tích</span>
                    <i class="fa-solid fa-arrow-right ml-1.5 md:ml-2.5 text-[15px] md:text-[17.5px] leading-[25px] text-white ml-2"></i>
                  </button>
                  <div class="flex items-center gap-2 md:gap-3 text-emerald-200/70 text-[15px] md:text-[17.5px] leading-[25px]">
                    <i class="fa-solid fa-chevron-right hidden md:block text-emerald-600"></i>
                    <div class="flex flex-col gap-0.5">
                      <span class="text-white font-semibold" id="user-trust-free-1">Miễn phí 100%</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Image Area -->
              <div class="relative z-10 w-[40%] lg:w-[45%] flex justify-center items-center h-[200px] md:h-auto min-h-[0] md:min-h-[300px]">
                <div class="relative w-[130%] md:w-full max-w-[400px] aspect-square flex items-center justify-center translate-x-[10%] md:translate-x-0">
                  <!-- Concentric circles -->
                  <div class="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 scale-[0.8] md:scale-[0.85] pointer-events-none animate-spin-slow"></div>
                  <div class="absolute inset-0 rounded-full border border-dotted border-emerald-500/20 scale-[1.05] md:scale-[1.1] pointer-events-none animate-[spin_25s_linear_infinite_reverse]"></div>
                  <div class="absolute inset-0 rounded-full border border-dashed border-emerald-500/10 scale-[1.3] md:scale-[1.35] pointer-events-none animate-spin-slow"></div>
                  <!-- Food Images -->
                  <div id="user-trust-top-container-1" class="absolute top-[5%] right-[5%] md:right-[0%] w-[70%] h-[70%] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] md:shadow-2xl border-[3px] md:border-[6px] border-[#043F2E] overflow-hidden z-20 animate-float">
                    <img id="user-banner-img-trust-top" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Healthy Food" class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700">
                  </div>
                  <div id="user-trust-bottom-container-1" class="absolute bottom-[5%] left-[5%] md:left-[5%] w-[50%] h-[50%] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] md:shadow-2xl border-[3px] md:border-[6px] border-[#043F2E] overflow-hidden z-30 animate-float-delayed">
                    <img id="user-banner-img-trust-bottom" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Salad" class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700">
                  </div>
                  <!-- Central PNG Sequence Image with manual scale -->
                  <div id="user-trust-center-container-1" class="absolute w-[60%] h-[60%] flex items-center justify-center z-25 animate-float">
                    <div id="user-trust-center-scale-wrapper-1" class="w-full h-full transition-transform duration-300" style="transform: scale(1)">
                      <img id="user-banner-img-trust-center" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Center Image" class="w-full h-full object-contain transform hover:scale-110 transition-transform duration-700">
                    </div>
                  </div>
                  <!-- Floating Icons/Badges -->
                  <div class="absolute top-[20%] left-[10%] bg-[#064E3B] text-emerald-400 w-7 h-7 md:w-10 md:h-10 rounded-md md:rounded-xl flex items-center justify-center shadow-lg border border-emerald-700/50 z-40 transform -rotate-12 animate-float text-[15px] md:text-[17.5px] leading-[25px]">
                    <i class="fa-solid fa-chart-line"></i>
                  </div>
                  <div class="absolute bottom-[35%] right-[0%] bg-[#064E3B] text-emerald-400 w-7 h-7 md:w-10 md:h-10 rounded-md md:rounded-xl flex items-center justify-center shadow-lg border border-emerald-700/50 z-40 transform rotate-12 animate-float-delayed text-[15px] md:text-[17.5px] leading-[25px]">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <!-- Form -->
              <div class="lg:col-span-5 space-y-6">
                <form id="diet-analysis-form" class="bg-white dark:bg-[#1e293b] rounded-3xl shadow-[0_4px_16px_rgba(15,23,42,0.05)] border border-slate-200 dark:border-slate-700/50 p-6 md:p-8 relative overflow-hidden" onsubmit="handleAnalysisSubmit(event)">
                  <!-- Progress Line -->
                  <div class="absolute top-0 left-0 h-1.5 bg-[#15803D] transition-all duration-500" id="diet-progress-line" style="width: 25%"></div>

                  <!-- Step Badge -->
                  <div id="diet-step-badge" class="inline-block bg-[#DCFCE7] text-[#15803D] font-bold text-[15px] leading-[20px] px-3 py-1.5 rounded-full mb-6">
                    BƯỚC 1/4
                  </div>

                  <!-- Step 1: Giới tính -->
                  <div id="diet-step-1" class="step-content animate-fade-in block">
                    <h2 class="text-[25px] leading-[35px] md:text-[30px] leading-[40px] font-bold text-slate-900 dark:text-white text-center mb-8 animate-slide-right-1">
                      Giới tính của bạn?
                    </h2>
                    <div class="mb-5" id="diet-grid-1">
                      <div class="grid grid-cols-2 gap-4">
                        <label class="diet-opt-label relative cursor-pointer group transition-all duration-500" style="order: 1; view-transition-name: diet-opt-male">
                          <input type="radio" name="gender" value="male" class="peer sr-only" onchange="handleDietOptChange(this, 'gender')">
                          <div class="diet-opt-inner p-6 border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 rounded-2xl text-center group-hover:bg-slate-100 dark:group-hover:bg-slate-700 peer-checked:border-[#10B981] peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/30 transition-all flex flex-col items-center justify-center gap-3 h-40 duration-500 overflow-hidden relative">
                            <!-- Large background icon -->
                            <i class="fa-solid fa-mars absolute -right-2 -bottom-4 text-[6.25rem] text-indigo-500/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 peer-checked:text-emerald-500/20 z-0"></i>

                            <!-- Small central icon -->
                            <div class="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500 dark:text-indigo-400 rounded-full flex items-center justify-center text-[37.5px] leading-[45px] shadow-sm peer-checked:bg-emerald-100 dark:peer-checked:bg-emerald-900/60 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400 transition-colors duration-500 relative z-10">
                              <i class="fa-solid fa-mars mt-0.5"></i>
                            </div>
                            <div class="font-bold text-slate-800 dark:text-slate-100 text-[22.5px] leading-[35px] relative z-10">
                              Nam
                            </div>
                          </div>
                        </label>
                        <label class="diet-opt-label relative cursor-pointer group transition-all duration-500" style="
                            order: 2;
                            view-transition-name: diet-opt-female;
                          ">
                          <input type="radio" name="gender" value="female" class="peer sr-only" onchange="handleDietOptChange(this, 'gender')">
                          <div class="diet-opt-inner p-6 border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 rounded-2xl text-center group-hover:bg-slate-100 dark:group-hover:bg-slate-700 peer-checked:border-[#10B981] peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/30 transition-all flex flex-col items-center justify-center gap-3 h-40 duration-500 overflow-hidden relative">
                            <!-- Large background icon -->
                            <i class="fa-solid fa-venus absolute -right-2 -bottom-4 text-[6.25rem] text-pink-500/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 peer-checked:text-emerald-500/20 z-0"></i>

                            <!-- Small central icon -->
                            <div class="w-14 h-14 bg-pink-100 dark:bg-pink-900/50 text-pink-500 dark:text-pink-400 rounded-full flex items-center justify-center text-[37.5px] leading-[45px] shadow-sm peer-checked:bg-emerald-100 dark:peer-checked:bg-emerald-900/60 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400 transition-colors duration-500 relative z-10">
                              <i class="fa-solid fa-venus mt-0.5"></i>
                            </div>
                            <div class="font-bold text-slate-800 dark:text-slate-100 text-[22.5px] leading-[35px] relative z-10">
                              Nữ
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="mt-8 animate-slide-right-4">
                      <button type="button" onclick="nextDietStep(1)" class="w-full bg-[#111827] dark:bg-emerald-600 text-white px-6 py-4 rounded-xl font-bold text-[22.5px] leading-[35px] transition-all lg:hover:shadow-lg lg:hover:-translate-y-1 active:scale-[0.98] lg:hover:bg-slate-800 dark:lg:hover:bg-emerald-500 flex items-center justify-center gap-2 mb-3">
                        Tiếp tục <i class="fa-solid fa-arrow-right"></i>
                      </button>
                      <button id="skip-analysis-btn" type="button" onclick="window.openOrderPlatformModal()" class="w-full bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-xl font-bold text-[17.5px] leading-[25px] transition-all focus:outline-none flex items-center justify-center shadow-md hover:shadow-lg active:scale-[0.98]">
                        Bỏ qua phân tích, đến trang đặt hàng
                        <i class="fa-solid fa-arrow-right ml-2 text-[15px] leading-[20px]"></i>
                      </button>
                    </div>
                  </div>

                  <!-- Step 2: Mục tiêu -->
                  <div id="diet-step-2" class="step-content animate-fade-in hidden">
                    <h2 class="text-[25px] leading-[35px] md:text-[30px] leading-[40px] font-bold text-slate-900 dark:text-white text-center mb-8 animate-slide-right-1">
                      Mục tiêu của bạn là gì?
                    </h2>
                    <div class="mb-6" id="diet-grid-2">
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <!-- Loss -->
                        <label class="diet-opt-label relative cursor-pointer group block transition-all duration-500" style="
                            order: 1;
                            view-transition-name: diet-opt-goal-loss;
                          ">
                          <input type="radio" name="goal" value="loss" class="peer sr-only" onchange="handleDietOptChange(this, 'goal')">
                          <div class="diet-opt-inner flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800/60 border-2 border-slate-200 dark:border-slate-700 rounded-2xl group-hover:bg-slate-100 dark:group-hover:bg-slate-700 peer-checked:border-[#10B981] peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/30 transition-all duration-500 relative overflow-hidden">
                            <i class="fa-solid fa-fire absolute -right-2 -bottom-4 text-[5.625rem] text-orange-500/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 peer-checked:text-emerald-500/20 z-0"></i>

                            <div class="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-[30px] leading-[40px] shrink-0 shadow-sm peer-checked:bg-emerald-100 peer-checked:text-emerald-600 transition-colors relative z-10">
                              <i class="fa-solid fa-fire mt-0.5"></i>
                            </div>
                            <div class="relative z-10">
                              <div class="font-bold text-slate-800 dark:text-slate-100 text-[20px] leading-[30px]">
                                Giảm cân, mỡ
                              </div>
                              <div class="text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 mt-0.5">
                                Thâm hụt Calo an toàn
                              </div>
                            </div>
                          </div>
                        </label>

                        <!-- Gain -->
                        <label class="diet-opt-label relative cursor-pointer group block transition-all duration-500" style="
                            order: 2;
                            view-transition-name: diet-opt-goal-gain;
                          ">
                          <input type="radio" name="goal" value="gain" class="peer sr-only" onchange="handleDietOptChange(this, 'goal')">
                          <div class="diet-opt-inner flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800/60 border-2 border-slate-200 dark:border-slate-700 rounded-2xl group-hover:bg-slate-100 dark:group-hover:bg-slate-700 peer-checked:border-[#10B981] peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/30 transition-all duration-500 relative overflow-hidden">
                            <i class="fa-solid fa-bullseye absolute -right-2 -bottom-2 text-[5.625rem] text-blue-500/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 peer-checked:text-emerald-500/20 z-0"></i>

                            <div class="w-12 h-12 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-[30px] leading-[40px] shrink-0 shadow-sm peer-checked:bg-emerald-100 peer-checked:text-emerald-600 transition-colors relative z-10">
                              <i class="fa-solid fa-bullseye"></i>
                            </div>
                            <div class="relative z-10">
                              <div class="font-bold text-slate-800 dark:text-slate-100 text-[20px] leading-[30px]">
                                Tăng cân
                              </div>
                              <div class="text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 mt-0.5">
                                Xây dựng cơ bắp, đầy đặn
                              </div>
                            </div>
                          </div>
                        </label>

                        <!-- Recomp -->
                        <label class="diet-opt-label relative cursor-pointer group block transition-all duration-500" style="
                            order: 3;
                            view-transition-name: diet-opt-goal-recomp;
                          ">
                          <input type="radio" name="goal" value="recomp" class="peer sr-only" onchange="handleDietOptChange(this, 'goal')">
                          <div class="diet-opt-inner flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800/60 border-2 border-slate-200 dark:border-slate-700 rounded-2xl group-hover:bg-slate-100 dark:group-hover:bg-slate-700 peer-checked:border-[#10B981] peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/30 transition-all duration-500 relative overflow-hidden">
                            <i class="fa-solid fa-dumbbell absolute -right-2 -bottom-2 text-[5rem] text-indigo-500/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 peer-checked:text-emerald-500/20 z-0"></i>

                            <div class="w-12 h-12 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center text-[25px] leading-[35px] shrink-0 shadow-sm peer-checked:bg-emerald-100 peer-checked:text-emerald-600 transition-colors relative z-10">
                              <i class="fa-solid fa-dumbbell"></i>
                            </div>
                            <div class="relative z-10">
                              <div class="font-bold text-slate-800 dark:text-slate-100 text-[20px] leading-[30px]">
                                Tăng cơ giảm mỡ
                              </div>
                              <div class="text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 mt-0.5">
                                Body Recomposition
                              </div>
                            </div>
                          </div>
                        </label>

                        <!-- Maintain -->
                        <label class="diet-opt-label relative cursor-pointer group block transition-all duration-500" style="
                            order: 4;
                            view-transition-name: diet-opt-goal-maintain;
                          ">
                          <input type="radio" name="goal" value="maintain" class="peer sr-only" onchange="handleDietOptChange(this, 'goal')">
                          <div class="diet-opt-inner flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800/60 border-2 border-slate-200 dark:border-slate-700 rounded-2xl group-hover:bg-slate-100 dark:group-hover:bg-slate-700 peer-checked:border-[#10B981] peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/30 transition-all duration-500 relative overflow-hidden">
                            <i class="fa-solid fa-scale-balanced absolute -right-2 -bottom-2 text-[5rem] text-amber-500/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 peer-checked:text-emerald-500/20 z-0"></i>

                            <div class="w-12 h-12 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center text-[25px] leading-[35px] shrink-0 shadow-sm peer-checked:bg-emerald-100 peer-checked:text-emerald-600 transition-colors relative z-10">
                              <i class="fa-solid fa-scale-balanced"></i>
                            </div>
                            <div class="relative z-10">
                              <div class="font-bold text-slate-800 dark:text-slate-100 text-[20px] leading-[30px]">
                                Duy trì vóc dáng
                              </div>
                              <div class="text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 mt-0.5">
                                Ăn sạch, sống khỏe
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="flex gap-3 mt-8 animate-slide-right-6">
                      <button type="button" onclick="prevDietStep(2)" class="w-16 bg-slate-50 dark:bg-slate-800 lg:hover:bg-slate-200 dark:lg:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold transition-all lg:hover:scale-105 active:scale-[0.98] flex items-center justify-center text-[22.5px] leading-[35px]">
                        <i class="fa-solid fa-arrow-left"></i>
                      </button>
                      <button type="button" onclick="nextDietStep(2)" class="flex-1 bg-[#111827] dark:bg-emerald-600 lg:hover:bg-slate-800 dark:lg:hover:bg-emerald-500 text-white px-6 py-4 rounded-xl font-bold text-[22.5px] leading-[35px] transition-all lg:hover:shadow-lg lg:hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-2">
                        Tiếp tục <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>

                  <!-- Step 3: Chỉ số -->
                  <div id="diet-step-3" class="step-content animate-fade-in hidden">
                    <h2 class="text-[25px] leading-[35px] md:text-[30px] leading-[40px] font-bold text-slate-900 dark:text-white text-center mb-8 animate-slide-right-1">
                      Chỉ số cơ thể hiện tại
                    </h2>
                    <div class="space-y-4 mb-6">
                      <div class="animate-slide-right-2">
                        <label class="block text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">Tuổi</label>
                        <div class="relative">
                          <input type="number" id="calc-age" min="10" max="100" class="w-full rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white py-3.5 px-4 focus:bg-white dark:focus:bg-slate-800 focus:border-[#10B981] focus:ring-0 outline-none transition-all font-medium">
                        </div>
                      </div>
                      <div class="grid grid-cols-2 gap-4 animate-slide-right-3">
                        <div>
                          <label class="block text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">Cân nặng</label>
                          <div class="relative">
                            <input type="number" id="calc-weight" min="30" max="200" step="0.1" class="w-full rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white py-3.5 px-4 pr-10 focus:bg-white dark:focus:bg-slate-800 focus:border-[#10B981] focus:ring-0 outline-none transition-all font-medium"><span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">kg</span>
                          </div>
                        </div>
                        <div>
                          <label class="block text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">Chiều cao</label>
                          <div class="relative">
                            <input type="number" id="calc-height" min="100" max="250" class="w-full rounded-xl border-2 border-slate-100 bg-slate-50 py-3.5 px-4 pr-12 focus:bg-white focus:border-[#10B981] focus:ring-0 outline-none transition-all font-medium"><span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">cm</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-3 mt-8 animate-slide-right-4">
                      <button type="button" onclick="prevDietStep(3)" class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-4 rounded-xl font-bold transition-all lg:hover:bg-slate-200 dark:lg:hover:bg-slate-700 lg:hover:scale-105 active:scale-[0.98] w-1/3 text-center">
                        <i class="fa-solid fa-arrow-left"></i>
                      </button>
                      <button type="button" onclick="nextDietStep(3)" class="flex-1 bg-[#111827] dark:bg-emerald-600 lg:hover:bg-slate-800 dark:lg:hover:bg-emerald-500 text-white px-6 py-4 rounded-xl font-bold text-[22.5px] leading-[35px] transition-all lg:hover:shadow-lg lg:hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-2">
                        Tiếp tục <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>

                  <!-- Step 4: Vận động -->
                  <div id="diet-step-4" class="step-content animate-fade-in hidden">
                    <h2 class="text-[25px] leading-[35px] md:text-[30px] leading-[40px] font-bold text-slate-900 dark:text-white text-center mb-6 animate-slide-right-1">
                      Mức độ vận động hàng ngày
                    </h2>

                    <div class="mb-6" id="diet-grid-4">
                      <div class="space-y-3 flex flex-col gap-3">
                        <!-- Act 1 -->
                        <label class="diet-opt-label relative cursor-pointer group block transition-all duration-500" style="order: 1; view-transition-name: diet-opt-act-1">
                          <input type="radio" name="activity" value="1.2" class="peer sr-only" onchange="handleDietOptChange(this, 'activity')">
                          <div class="diet-opt-inner flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/60 border-2 border-slate-200 dark:border-slate-700 rounded-2xl peer-checked:border-[#10B981] peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/30 transition-all group-hover:bg-slate-100 dark:group-hover:bg-slate-700 duration-500 relative overflow-hidden">
                            <i class="fa-solid fa-laptop absolute -right-2 -bottom-4 text-[5.625rem] text-slate-500/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 peer-checked:text-emerald-500/20 z-0"></i>
                            <div class="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shadow-sm shrink-0 peer-checked:bg-emerald-100 peer-checked:text-emerald-600 transition-colors relative z-10">
                              <i class="fa-solid fa-laptop text-[17.5px] leading-[25px]"></i>
                            </div>
                            <div class="text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-200 peer-checked:text-emerald-700 dark:peer-checked:text-emerald-400 relative z-10">
                              Ít vận động (Văn phòng)
                            </div>
                          </div>
                        </label>

                        <!-- Act 2 -->
                        <label class="diet-opt-label relative cursor-pointer group block transition-all duration-500" style="order: 2; view-transition-name: diet-opt-act-2">
                          <input type="radio" name="activity" value="1.375" class="peer sr-only" onchange="handleDietOptChange(this, 'activity')">
                          <div class="diet-opt-inner flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/60 border-2 border-slate-200 dark:border-slate-700 rounded-2xl peer-checked:border-[#10B981] peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/30 transition-all group-hover:bg-slate-100 dark:group-hover:bg-slate-700 duration-500 relative overflow-hidden">
                            <i class="fa-solid fa-person-walking absolute -right-2 -bottom-2 text-[5rem] text-sky-500/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 peer-checked:text-emerald-500/20 z-0"></i>
                            <div class="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shadow-sm shrink-0 peer-checked:bg-emerald-100 peer-checked:text-emerald-600 transition-colors relative z-10">
                              <i class="fa-solid fa-person-walking text-[22.5px] leading-[35px] mt-0.5"></i>
                            </div>
                            <div class="text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-200 peer-checked:text-emerald-700 dark:peer-checked:text-emerald-400 relative z-10">
                              Vận động nhẹ (1-3 ngày/tuần)
                            </div>
                          </div>
                        </label>

                        <!-- Act 3 -->
                        <label class="diet-opt-label relative cursor-pointer group block transition-all duration-500" style="order: 3; view-transition-name: diet-opt-act-3">
                          <input type="radio" name="activity" value="1.55" class="peer sr-only" onchange="handleDietOptChange(this, 'activity')">
                          <div class="diet-opt-inner flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/60 border-2 border-slate-200 dark:border-slate-700 rounded-2xl peer-checked:border-[#10B981] peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/30 transition-all group-hover:bg-slate-100 dark:group-hover:bg-slate-700 duration-500 relative overflow-hidden">
                            <i class="fa-solid fa-person-running absolute -right-2 -bottom-2 text-[5rem] text-orange-500/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 peer-checked:text-emerald-500/20 z-0"></i>
                            <div class="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shadow-sm shrink-0 peer-checked:bg-emerald-100 peer-checked:text-emerald-600 transition-colors relative z-10">
                              <i class="fa-solid fa-person-running text-[22.5px] leading-[35px] mt-0.5"></i>
                            </div>
                            <div class="text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-200 peer-checked:text-emerald-700 dark:peer-checked:text-emerald-400 relative z-10">
                              Vận động vừa (3-5 ngày/tuần)
                            </div>
                          </div>
                        </label>

                        <!-- Act 4 -->
                        <label class="diet-opt-label relative cursor-pointer group block transition-all duration-500" style="order: 4; view-transition-name: diet-opt-act-4">
                          <input type="radio" name="activity" value="1.725" class="peer sr-only" onchange="handleDietOptChange(this, 'activity')">
                          <div class="diet-opt-inner flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/60 border-2 border-slate-200 dark:border-slate-700 rounded-2xl peer-checked:border-[#10B981] peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/30 transition-all group-hover:bg-slate-100 dark:group-hover:bg-slate-700 duration-500 relative overflow-hidden">
                            <i class="fa-solid fa-dumbbell absolute -right-2 -bottom-2 text-[5rem] text-red-500/10 transform -rotate-12 transition-transform duration-500 group-hover:scale-110 peer-checked:text-emerald-500/20 z-0"></i>
                            <div class="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shadow-sm shrink-0 peer-checked:bg-emerald-100 peer-checked:text-emerald-600 transition-colors relative z-10">
                              <i class="fa-solid fa-dumbbell text-[17.5px] leading-[25px]"></i>
                            </div>
                            <div class="text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-200 peer-checked:text-emerald-700 dark:peer-checked:text-emerald-400 relative z-10">
                              Vận động nhiều (6-7 ngày)
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-100 animate-slide-right-6">
                      <div>
                        <label class="block text-[18px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Cân nặng mục tiêu</label>
                        <div class="relative">
                          <input type="number" id="calc-target-weight" oninput="
                              if (
                                document.getElementById('use-medical-time')
                                  .checked
                              )
                                toggleMedicalTime();
                            " min="30" max="200" step="0.1" class="w-full rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white py-2.5 px-3 focus:bg-white dark:focus:bg-slate-800 focus:border-[#10B981] focus:ring-0 outline-none transition-all font-medium text-[17.5px] leading-[25px]" placeholder="Không bắt buộc"><span class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[15px] leading-[20px] font-bold">kg</span>
                        </div>
                      </div>
                      <div>
                        <label class="block text-[18px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Thời gian mong muốn</label>
                        <div class="relative">
                          <input type="number" id="calc-duration" min="1" max="100" class="w-full rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white py-2.5 px-3 focus:bg-white dark:focus:bg-slate-800 focus:border-[#10B981] focus:ring-0 outline-none transition-all font-medium text-[17.5px] leading-[25px] disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Không bắt buộc"><span class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[15px] leading-[20px] font-bold">tuần</span>
                        </div>
                      </div>

                      <div class="col-span-2">
                        <label class="flex items-center gap-2 cursor-pointer w-max">
                          <input type="checkbox" id="use-medical-time" class="rounded text-[#10B981] focus:ring-[#10B981] bg-slate-100 border-slate-300 w-4 h-4 transition-all" onchange="toggleMedicalTime()">
                          <span class="text-[20px] font-semibold text-slate-600 dark:text-slate-300">Tính theo thời gian chuẩn y khoa</span>
                        </label>
                        <div id="medical-time-msg" class="text-[15px] leading-[20px] text-[#10B981] font-medium mt-1.5 hidden">
                          <i class="fa-solid fa-stethoscope mr-1"></i>
                          <span id="medical-time-text"></span>
                        </div>
                      </div>
                    </div>

                    <div class="flex gap-3 mt-6 animate-slide-right-6">
                      <button type="button" onclick="prevDietStep(4)" class="w-16 bg-slate-50 dark:bg-slate-800 lg:hover:bg-slate-200 dark:lg:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold transition-all lg:hover:scale-105 active:scale-[0.98] flex items-center justify-center text-[22.5px] leading-[35px]">
                        <i class="fa-solid fa-arrow-left"></i>
                      </button>
                      <button type="submit" class="flex-1 bg-[linear-gradient(135deg,#15803D,#10B981)] text-white px-4 py-4 rounded-xl font-bold text-[20px] leading-[30px] md:text-[22.5px] leading-[35px] transition-all lg:hover:-translate-y-1 lg:hover:shadow-lg active:scale-[0.98] lg:hover:bg-[linear-gradient(135deg,#166534,#059669)] shadow-md flex justify-center items-center gap-2 border-0">
                        Xem kết quả miễn phí
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <!-- Analysis Results -->
              <div class="lg:col-span-7">
                <div id="analysis-empty-state" class="h-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-12 text-center">
                  <div class="relative w-64 h-64 mb-4 transition-all duration-300">
                    <img id="empty-state-mascot-img" class="w-full h-full object-contain drop-shadow-md hidden" alt="Mascot Suy Nghĩ">
                    <img id="empty-state-fallback-img" src="https://cdn-icons-png.flaticon.com/512/2936/2936719.png" class="w-full h-full object-contain" alt="Analytics">
                  </div>
                  <h3 class="text-[25px] leading-[35px] font-semibold text-slate-500 mb-2">
                    Chưa có dữ liệu phân tích
                  </h3>
                  <p class="text-slate-400 max-w-sm">
                    Hãy điền thông tin bên trái và bắt đầu phân tích để nhận báo
                    cáo chỉ số y khoa và thực đơn gợi ý.
                  </p>
                </div>

                <div id="analysis-result-state" class="hidden space-y-6">
                  <!-- Hero Card -->
                  <div class="bg-[linear-gradient(135deg,#14532D_0%,#0F766E_100%)] rounded-3xl p-8 text-center text-[#FFFFFF] relative overflow-hidden shadow-lg reveal">
                    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>

                    <div class="relative z-10">
                      <div class="inline-flex items-center gap-2 bg-[rgba(16,185,129,0.15)] border border-[rgba(110,231,183,0.25)] px-3 py-1.5 rounded-full text-[15px] leading-[20px] font-medium text-[#6EE7B7] mb-6">
                        <i class="fa-solid fa-bullseye"></i> Mục Tiêu Phân Tích
                      </div>

                      <h2 class="text-[37.5px] leading-[45px] md:text-[60px] leading-[60px] font-bold mb-3 tracking-tight drop-shadow-md" id="res-hero-title">
                        <!-- Từ 56kg -> 60kg -->
                      </h2>
                      <p class="text-emerald-100 text-[17.5px] leading-[25px] md:text-[20px] leading-[30px] font-medium mb-8 drop-shadow-sm" id="res-hero-subtitle">
                        <!-- Lộ trình dự kiến: 8 tuần -->
                      </p>

                      <div class="bg-white/10 border border-white/20 rounded-2xl p-6 max-w-md mx-auto backdrop-blur-md shadow-inner">
                        <p class="text-[15px] leading-[20px] font-bold text-emerald-100 uppercase tracking-widest mb-2 drop-shadow-sm">
                          Năng Lượng Đề Xuất
                        </p>
                        <input type="number" class="text-[60px] leading-[60px] md:text-[75px] leading-[75px] font-black text-[#10B981] mb-2 drop-shadow-[0_2px_10px_rgba(16,185,129,0.4)] bg-transparent text-center focus:outline-none w-full border-b border-transparent focus:border-emerald-500/50 hover:border-emerald-500/30 transition-colors [appearance:textfield] [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:appearance-none cursor-text" id="res-target" value="" placeholder="--" oninput="updateTargetCalories(this.value)">
                        <p class="text-[15px] leading-[20px] text-emerald-100 font-medium opacity-90">
                          / ngày (đã tối ưu macro)
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Accordion for detailed stats -->
                  <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm reveal">
                    <button type="button" onclick="toggleMedicalStats()" class="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors focus:outline-none">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center">
                          <i class="fa-solid fa-stethoscope"></i>
                        </div>
                        <span class="font-bold text-slate-800 text-[17.5px] leading-[25px]">Xem chi tiết chỉ số y khoa (TDEE, BMI, BMR)</span>
                      </div>
                      <i class="fa-solid fa-chevron-down text-slate-400 transition-transform duration-300" id="medical-stats-icon"></i>
                    </button>
                    <div id="medical-stats-content" class="hidden border-t border-slate-200 p-6 bg-slate-50">
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm text-center relative overflow-hidden">
                          <div class="absolute top-0 w-full h-1 bg-blue-400 left-0"></div>
                          <p class="text-[15px] leading-[20px] text-slate-500 font-medium uppercase mb-1">
                            Chỉ số BMI
                          </p>
                          <div class="text-[30px] leading-[40px] font-bold text-slate-800" id="res-bmi">
                            --
                          </div>
                          <div class="text-[15px] leading-[20px] font-semibold mt-1 rounded px-2 py-0.5 inline-block" id="res-bmi-status">
                            --
                          </div>
                        </div>
                        <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm text-center relative overflow-hidden">
                          <div class="absolute top-0 w-full h-1 bg-amber-400 left-0"></div>
                          <p class="text-[15px] leading-[20px] text-slate-500 font-medium uppercase mb-1">
                            BMR (Nghỉ ngơi)
                          </p>
                          <div class="text-[30px] leading-[40px] font-bold text-slate-800" id="res-bmr">
                            --
                          </div>
                          <div class="text-[15px] leading-[20px] text-slate-500 mt-1">
                            Kcal / ngày
                          </div>
                        </div>
                        <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm text-center relative overflow-hidden">
                          <div class="absolute top-0 w-full h-1 bg-orange-500 left-0"></div>
                          <p class="text-[15px] leading-[20px] text-slate-500 font-medium uppercase mb-1">
                            TDEE (Đốt cháy)
                          </p>
                          <div class="text-[30px] leading-[40px] font-bold text-slate-800" id="res-tdee">
                            --
                          </div>
                          <div class="text-[15px] leading-[20px] text-slate-500 mt-1">
                            Kcal / ngày
                          </div>
                        </div>
                      </div>
                      <div class="mt-6 flex justify-center">
                        <div class="w-full max-w-sm relative h-40">
                          <canvas id="medicalStatsChart"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Macro Nutrient Distribution Card -->
                  <div class="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm">
                    <h3 class="font-bold text-slate-800 dark:text-white text-[20px] leading-[30px] md:text-[22.5px] leading-[35px] mb-6 text-center md:text-left">
                      Phân Bổ Dinh Dưỡng Mục Tiêu (Macros)
                    </h3>
                    <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full">
                      <!-- Donut Chart -->
                      <div class="w-[120px] sm:w-[140px] md:w-[200px] relative aspect-square shrink-0">
                        <canvas id="macroDistributionChart"></canvas>
                        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div class="text-center mt-1">
                            <div class="text-[15px] md:text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 font-medium">
                              Mục tiêu
                            </div>
                            <div class="text-[20px] leading-[30px] md:text-[25px] leading-[35px] font-black text-slate-800 dark:text-white tracking-tight leading-none mt-1 items-center gap-1" id="macro-total-cal">
                              --
                            </div>
                            <div class="text-[13px] md:text-[15px] text-slate-400 dark:text-slate-500 mt-0.5 md:mt-1 uppercase tracking-widest font-semibold flex justify-center items-center gap-1">
                              <i class="fa-solid fa-fire text-orange-400"></i>
                              Kcal/Ngày
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Legend / Values -->
                      <div class="w-full sm:flex-1 min-w-0 grid grid-cols-1 gap-2 md:gap-4">
                        <div class="flex items-center justify-between gap-2 md:gap-4 p-2.5 md:p-4 bg-red-50/40 dark:bg-red-900/10 hover:bg-red-50 dark:hover:bg-red-900/20 border border-red-100/50 dark:border-red-900/30 rounded-xl transition-colors">
                          <div class="flex items-center gap-1.5 md:gap-3">
                            <div class="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white dark:bg-[#0f172a] shadow-sm border border-red-100 dark:border-red-900/50 flex items-center justify-center text-red-500 shrink-0">
                              <i class="fa-solid fa-drumstick-bite text-[14px] md:text-[17.5px] leading-[25px]"></i>
                            </div>
                            <div class="text-left">
                              <div class="text-[14px] md:text-[18px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                                Protein
                              </div>
                              <div class="hidden sm:block text-[15px] text-slate-400 dark:text-slate-500 mt-0.5">
                                Xây dựng cơ
                              </div>
                            </div>
                          </div>
                          <div class="text-[17.5px] leading-[25px] md:text-[22.5px] leading-[35px] font-black text-red-600 dark:text-red-400 text-right tracking-tight shrink-0" id="macro-protein">
                            --g
                          </div>
                        </div>

                        <div class="flex items-center justify-between gap-2 md:gap-4 p-2.5 md:p-4 bg-amber-50/40 dark:bg-amber-900/10 hover:bg-amber-50 dark:hover:bg-amber-900/20 border border-amber-100/50 dark:border-amber-900/30 rounded-xl transition-colors">
                          <div class="flex items-center gap-1.5 md:gap-3">
                            <div class="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white dark:bg-[#0f172a] shadow-sm border border-amber-100 dark:border-amber-900/50 flex items-center justify-center text-amber-500 shrink-0">
                              <i class="fa-solid fa-wheat-awn text-[14px] md:text-[17.5px] leading-[25px]"></i>
                            </div>
                            <div class="text-left">
                              <div class="text-[14px] md:text-[18px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                                Carb
                              </div>
                              <div class="hidden sm:block text-[15px] text-slate-400 dark:text-slate-500 mt-0.5">
                                Năng lượng
                              </div>
                            </div>
                          </div>
                          <div class="text-[17.5px] leading-[25px] md:text-[22.5px] leading-[35px] font-black text-amber-600 dark:text-amber-400 text-right tracking-tight shrink-0" id="macro-carb">
                            --g
                          </div>
                        </div>

                        <div class="flex items-center justify-between gap-2 md:gap-4 p-2.5 md:p-4 bg-sky-50/40 dark:bg-sky-900/10 hover:bg-sky-50 dark:hover:bg-sky-900/20 border border-sky-100/50 dark:border-sky-900/30 rounded-xl transition-colors">
                          <div class="flex items-center gap-1.5 md:gap-3">
                            <div class="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white dark:bg-[#0f172a] shadow-sm border border-sky-100 dark:border-sky-900/50 flex items-center justify-center text-sky-500 shrink-0 text-[17.5px] leading-[25px]">
                              <i class="fa-solid fa-droplet text-[14px] md:text-[17.5px] leading-[25px]"></i>
                            </div>
                            <div class="text-left">
                              <div class="text-[14px] md:text-[18px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                                Fat
                              </div>
                              <div class="hidden sm:block text-[15px] text-slate-400 dark:text-slate-500 mt-0.5">
                                Nội tiết tố
                              </div>
                            </div>
                          </div>
                          <div class="text-[17.5px] leading-[25px] md:text-[22.5px] leading-[35px] font-black text-sky-600 dark:text-sky-400 text-right tracking-tight shrink-0" id="macro-fat">
                            --g
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- AI Advice Card -->
                  <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-5 flex items-start gap-4">
                    <div class="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center text-[30px] leading-[40px] shadow-sm shrink-0 overflow-hidden relative">
                      <img id="advice-mascot-img" class="hidden w-full h-full object-contain">
                      <div id="advice-mascot-svg" class="w-full h-full flex items-center justify-center p-1"></div>
                    </div>
                    <div class="flex-1 mt-1">
                      <h4 class="font-bold text-[#14532D] dark:text-emerald-300 text-[20px] leading-[30px] mb-1">
                        Lời Khuyên Từ Chuyên Gia
                      </h4>
                      <p class="text-[#14532D] dark:text-emerald-100 text-[17.5px] leading-[25px] leading-relaxed" id="res-advice"></p>
                      <p id="res-advice-loading" class="hidden text-emerald-600/70 text-[17.5px] leading-[25px] font-medium italic animate-pulse mt-1">
                        Nuri đang phân tích và cá nhân hóa lời khuyên cho bạn...
                      </p>
                    </div>
                  </div>

                  <!-- Save Profile Button (Only visible when updating profile) -->
                  <div id="save-profile-action" class="hidden mt-6">
                    <button onclick="saveProfileData()" class="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2">
                      <i class="fa-solid fa-floppy-disk"></i> Lưu thông tin và
                      cập nhật hồ sơ
                    </button>
                  </div>

                  <!-- Recommendations -->
                  <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mt-6">
                    <h3 class="font-bold text-slate-800 text-[22.5px] leading-[35px] mb-6">
                      Lộ trình Đề xuất Hôm nay
                    </h3>
                    <div class="space-y-8" id="menu-recommendation-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View: KITCHEN LANDING PAGE -->
      <div id="view-kitchen" class="hidden animate-fade-in pb-12 bg-white dark:bg-slate-900">
        <!-- Brand Navigation Bar with Mascot Sequence -->
        <nav id="kitchen-brand-nav" class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 px-4 py-3 sm:px-6 lg:px-8 shadow-sm transition-colors duration-200 sticky top-0 z-30">
          <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <!-- Brand Logo & Name (left side) -->
            <div class="flex items-center gap-2 cursor-pointer shrink-0" onclick="switchView('consulting')">
              <div id="kitchen-brand-logo-container" class="w-9 h-9 bg-emerald-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-600/10 overflow-hidden">
                <i class="fa-solid fa-utensils text-[22.5px] leading-[35px]"></i>
              </div>
              <div class="flex flex-col">
                <span id="kitchen-brand-name" class="font-black text-[22.5px] leading-[35px] text-slate-800 dark:text-white tracking-tight leading-tight">Nuri Kitchen</span>
                <span class="text-[15px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">Healthy Menu</span>
              </div>
            </div>

            <!-- Navigation Links (middle side) -->
            <div class="flex-1 hidden lg:flex justify-center items-center gap-4 xl:gap-6 px-4">
                <button onclick="document.getElementById('section-quy-trinh').scrollIntoView({behavior: 'smooth'})" class="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold text-[15px] leading-[20px] transition-colors uppercase tracking-wide whitespace-nowrap">Quy trình</button>
                <button onclick="document.getElementById('section-dang-ki-goi').scrollIntoView({behavior: 'smooth'})" class="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold text-[15px] leading-[20px] transition-colors uppercase tracking-wide whitespace-nowrap">Đăng ký gói</button>
                <button onclick="document.getElementById('section-su-menh').scrollIntoView({behavior: 'smooth'})" class="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold text-[15px] leading-[20px] transition-colors uppercase tracking-wide whitespace-nowrap">Sứ mệnh</button>
                <button onclick="document.getElementById('section-cau-chuyen').scrollIntoView({behavior: 'smooth'})" class="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold text-[15px] leading-[20px] transition-colors uppercase tracking-wide whitespace-nowrap">Khách hàng</button>
                <div class="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                <button onclick="switchView('consulting')" class="px-3 py-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 rounded-lg font-bold text-[15px] leading-[20px] transition-colors uppercase tracking-wide flex items-center gap-1.5 whitespace-nowrap"><i class="fa-solid fa-mobile-screen"></i> App Dinh Dưỡng</button>
            </div>
            
            <!-- Mobile Menu Toggle (only visible on small screens) -->
            <div class="flex-1 flex lg:hidden justify-end px-2">
               <!-- Placeholder for mobile menu if needed, or we just keep the back button prominent -->
            </div>

            <!-- Login Button (right side) -->
            <div class="shrink-0 flex items-center gap-2">
              <button onclick="openRoleSelectModal()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[15px] leading-[20px] rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95">
                <i class="fa-solid fa-right-to-bracket"></i> Đăng nhập
              </button>
            </div>
          </div>
        </nav>
        
                <!-- 1. Hero Banner Slider -->
                <div id="kitchen-slider-container" class="relative w-full h-[80vh] md:h-[600px] overflow-hidden group">
          <!-- Slide 1 -->
          <div class="kitchen-slide absolute inset-0 transition-opacity duration-1000 opacity-100 z-10">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" class="parallax-img absolute inset-0 w-full h-[120%] -top-[10%] object-cover" alt="Eat clean 1">
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:px-24">
              <p class="text-white/90 text-[17.5px] leading-[25px] md:text-[25px] leading-[35px] font-medium tracking-wide mb-2 uppercase drop-shadow-md">năng lượng xanh mỗi ngày</p>
              <h1 class="text-[45px] leading-[50px] md:text-[75px] leading-[75px] font-black text-white leading-tight mb-4 tracking-tight drop-shadow-md uppercase">
                ĂN SẠCH SỐNG XANH<br>CƠ THỂ NHẸ NHÀNG
              </h1>
              <p class="text-white/80 text-[17.5px] leading-[25px] md:text-[22.5px] leading-[35px] font-medium drop-shadow-md tracking-widest mb-10">- NURI KITCHEN -</p>

            </div>
          </div>
          
          <!-- Slide 2 -->
          <div class="kitchen-slide absolute inset-0 transition-opacity duration-1000 opacity-0 z-0">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" class="parallax-img absolute inset-0 w-full h-[120%] -top-[10%] object-cover" alt="Eat clean 2">
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:px-24">
              <p class="text-white/90 text-[17.5px] leading-[25px] md:text-[25px] leading-[35px] font-medium tracking-wide mb-2 uppercase drop-shadow-md">duy trì vóc dáng tự nhiên</p>
              <h1 class="text-[45px] leading-[50px] md:text-[75px] leading-[75px] font-black text-white leading-tight mb-4 tracking-tight drop-shadow-md uppercase">
                KIỂM SOÁT CALO<br>THÊM PHẦN TỰ TIN
              </h1>
              <p class="text-white/80 text-[17.5px] leading-[25px] md:text-[22.5px] leading-[35px] font-medium drop-shadow-md tracking-widest mb-10">- DÁNG CHUẨN MỖI NGÀY -</p>

            </div>
          </div>

          <!-- Slide 3 -->
          <div class="kitchen-slide absolute inset-0 transition-opacity duration-1000 opacity-0 z-0">
            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" class="parallax-img absolute inset-0 w-full h-[120%] -top-[10%] object-cover" alt="Eat clean 3">
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:px-24">
              <p class="text-white/90 text-[17.5px] leading-[25px] md:text-[25px] leading-[35px] font-medium tracking-wide mb-2 uppercase drop-shadow-md">hương vị thuần khiết từ thiên nhiên</p>
              <h1 class="text-[45px] leading-[50px] md:text-[75px] leading-[75px] font-black text-white leading-tight mb-4 tracking-tight drop-shadow-md uppercase">
                NGUYÊN LIỆU TƯƠI SẠCH<br>TRỌN VỊ YÊU THƯƠNG
              </h1>
              <p class="text-white/80 text-[17.5px] leading-[25px] md:text-[22.5px] leading-[35px] font-medium drop-shadow-md tracking-widest mb-10">- TƯƠI NGON TỪ NÔNG TRẠI -</p>

            </div>
          </div>

          <!-- Slide 4 -->
          <div class="kitchen-slide absolute inset-0 transition-opacity duration-1000 opacity-0 z-0">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" class="parallax-img absolute inset-0 w-full h-[120%] -top-[10%] object-cover" alt="Eat clean 4">
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:px-24">
              <p class="text-white/90 text-[17.5px] leading-[25px] md:text-[25px] leading-[35px] font-medium tracking-wide mb-2 uppercase drop-shadow-md">tiện lợi và thân thiện với sức khỏe</p>
              <h1 class="text-[45px] leading-[50px] md:text-[75px] leading-[75px] font-black text-white leading-tight mb-4 tracking-tight drop-shadow-md uppercase">
                BỮA ĂN LÀNH MẠNH<br>GIAO TẬN TAY BẠN
              </h1>
              <p class="text-white/80 text-[17.5px] leading-[25px] md:text-[22.5px] leading-[35px] font-medium drop-shadow-md tracking-widest mb-10">- NHANH CHÓNG TIỆN LỢI -</p>

            </div>
          </div>
          <!-- Navigation Controls -->
          <button onclick="prevKitchenSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-all z-20 opacity-0 group-hover:opacity-100">
            <i class="fa-solid fa-chevron-left text-[25px] leading-[35px]"></i>
          </button>
          <button onclick="nextKitchenSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-all z-20 opacity-0 group-hover:opacity-100">
            <i class="fa-solid fa-chevron-right text-[25px] leading-[35px]"></i>
          </button>

          <!-- Fixed CTA Button -->
          <div class="absolute bottom-12 md:bottom-16 left-6 md:left-24 z-20 flex flex-col items-start gap-2">
            <p class="text-white/90 font-medium text-[17.5px] leading-[25px] md:text-[20px] leading-[30px] drop-shadow-md">
              Khám chỉ số dinh dưỡng cá nhân của bạn
            </p>
            <button onclick="switchView('consulting')" class="ripple-btn inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#059669] text-white rounded-full font-bold text-[17.5px] leading-[25px] md:text-[22.5px] leading-[35px] transition-all duration-300 shadow-[0_8px_30px_rgb(16,185,129,0.3)] hover:-translate-y-1 active:scale-[0.98] hover:shadow-lg hover:bg-[#047857] animate-glow-pulse-emerald">
              Bắt đầu ngay <i class="fa-solid fa-arrow-right ml-2 text-[17.5px] leading-[25px]"></i>
            </button>
          </div>

          <!-- Indicators -->
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
            <button onclick="goToKitchenSlide(0)" class="kitchen-indicator w-3 h-3 rounded-full bg-white transition-all scale-125"></button>
            <button onclick="goToKitchenSlide(1)" class="kitchen-indicator w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all"></button>
            <button onclick="goToKitchenSlide(2)" class="kitchen-indicator w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all"></button>
            <button onclick="goToKitchenSlide(3)" class="kitchen-indicator w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all"></button>
          </div>
        </div>

        <!-- 2. Quy trình Đặt hàng (4 Bước) -->
        <div id="section-quy-trinh" class="pt-16 md:pt-24 pb-32 bg-slate-50 dark:bg-slate-800/50 relative">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 reveal">
              <h2 class="text-[37.5px] leading-[45px] font-black text-slate-900 dark:text-white mb-4">Quy trình đặt hàng</h2>
              <p class="text-slate-500 dark:text-slate-400">Chỉ 4 bước để có bữa ăn chuẩn sức khỏe mỗi ngày</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 reveal">
              <!-- Step 1 -->
              <div class="text-center relative">
                <div class="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 relative z-10 transform rotate-3" style="background: transparent;">
                  <div id="order-process-mascot-0" class="w-full h-full flex items-center justify-center"></div>
                </div>
                <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-900 dark:text-white mb-2">Tư vấn AI</h3>
                <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Phân tích chỉ số cơ thể, mục tiêu sức khỏe</p>
                <div class="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] border-t-2 border-dashed border-emerald-200 dark:border-emerald-800/50"></div>
              </div>
              
              <!-- Step 2 -->
              <div class="text-center relative">
                <div class="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 relative z-10 transform -rotate-3" style="background: transparent;">
                  <div id="order-process-mascot-1" class="w-full h-full flex items-center justify-center"></div>
                </div>
                <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-900 dark:text-white mb-2">Lên thực đơn</h3>
                <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Chọn gói hoặc tự phối nguyên liệu (Self-Mix)</p>
                <div class="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] border-t-2 border-dashed border-amber-200 dark:border-amber-800/50"></div>
              </div>
              
              <!-- Step 3 -->
              <div class="text-center relative">
                <div class="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 relative z-10 transform rotate-3" style="background: transparent;">
                  <div id="order-process-mascot-2" class="w-full h-full flex items-center justify-center"></div>
                </div>
                <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-900 dark:text-white mb-2">Giao hàng</h3>
                <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Nhận suất ăn nóng hổi hoặc mát lạnh tận nơi</p>
                <div class="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] border-t-2 border-dashed border-blue-200 dark:border-blue-800/50"></div>
              </div>

              <!-- Step 4 -->
              <div class="text-center relative">
                <div class="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 relative z-10 transform -rotate-3" style="background: transparent;">
                  <div id="order-process-mascot-3" class="w-full h-full flex items-center justify-center"></div>
                </div>
                <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-900 dark:text-white mb-2">Thưởng thức</h3>
                <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Tận hưởng bữa ăn ngon lành chuẩn vị</p>
              </div>
            </div>
          </div>

        <!-- Wave Divider -->
        <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg class="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-white dark:fill-slate-900"></path>
            </svg>
        </div>

        </div>

        
        
        <!-- SCROLL SEQUENCE SECTION -->
        <div id="section-scroll-sequence" class="relative w-full" style="height: 200vh;">
          <div class="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-white px-4 md:px-8">
            <div class="relative w-full max-w-7xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
               <canvas id="sequence-canvas" class="absolute top-0 left-0 w-full h-full object-cover"></canvas>
            </div>
          </div>
        </div>
        
<!-- 3. Tư vấn Gói Ăn (3 Size + Self-Mix) -->
        <div id="section-dang-ki-goi" class="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 reveal">
            <span class="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-[17.5px] leading-[25px] mb-2 block">Dành riêng cho bạn</span>
            <h2 class="text-[37.5px] leading-[45px] md:text-[45px] leading-[50px] font-black text-slate-900 dark:text-white mb-4">Các gói ăn linh hoạt</h2>
            <p class="text-[22.5px] leading-[35px] text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Thiết kế theo chuẩn khoa học, đáp ứng mọi nhu cầu từ giảm mỡ, giữ dáng đến tăng cơ.</p>
          </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mt-16 mb-16 items-stretch reveal-scale">
            <!-- Gói Trải Nghiệm -->
            <div class="relative bg-white dark:bg-slate-800 rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center shadow-xl shadow-slate-200/50 dark:shadow-none group border border-slate-100 dark:border-slate-700 hover:-translate-y-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 w-full h-full hover-shine-effect">
              <div class="absolute top-0 left-0 w-full h-[180px] overflow-hidden" style="border-top-left-radius: 32px; border-top-right-radius: 32px; border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                <img id="public-pkg4-bg" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;w=600&amp;q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="bg">
                <div class="absolute inset-0 bg-emerald-900/40 mix-blend-multiply pointer-events-none"></div>
                <div class="absolute top-6 left-0 w-full text-center px-4 pointer-events-none">
                  <p class="text-white font-medium text-[17.5px] leading-[25px] drop-shadow-md">
                    bắt đầu hành trình<br>
                    <span class="font-bold text-[20px] leading-[30px]">thay đổi vóc dáng</span>
                  </p>
                </div>
              </div>
              <div class="relative z-10 mt-[80px] mb-4 w-40 h-40 rounded-full border-[6px] border-white dark:border-slate-800 shadow-xl bg-white dark:bg-slate-800 overflow-hidden shrink-0 group-hover:-translate-y-2 transition-transform duration-500">
                <img id="public-pkg4-img" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=300&amp;q=80" class="w-full h-full object-cover" alt="food">
              </div>
              <div class="relative z-10 flex flex-col items-center w-full flex-1">
                <h3 class="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[17.5px] leading-[25px] mb-1 public-pkg-sync" data-sync="front-pkg4-subtitle">Gói 7 Ngày</h3>
                <p class="text-[37.5px] leading-[45px] font-black text-slate-800 dark:text-white tracking-tight mb-4 public-pkg-sync" data-sync="front-pkg4-title">Trải Nghiệm</p>
                
                <!-- Sizes List instead of Expected Target -->
                <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-4 mb-5 w-full border border-emerald-100/50 dark:border-emerald-800/30">
                  <ul class="space-y-3 w-full">
                    <li class="flex items-center justify-between text-[17.5px] leading-[25px]">
                      <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><i class="fa-solid fa-leaf text-emerald-500"></i> Size Lean (S)</div>
                      <span class="text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">400 Kcal</span>
                    </li>
                    <li class="flex items-center justify-between text-[17.5px] leading-[25px]">
                      <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><i class="fa-solid fa-scale-balanced text-emerald-500"></i> Size Balance (M)</div>
                      <span class="text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">500 Kcal</span>
                    </li>
                    <li class="flex items-center justify-between text-[17.5px] leading-[25px]">
                      <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><i class="fa-solid fa-dumbbell text-emerald-500"></i> Size Power (L)</div>
                      <span class="text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">700 Kcal</span>
                    </li>
                  </ul>
                </div>

                <ul class="text-left space-y-3 w-full mb-6 flex-1">
                  <li class="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span class="flex-1 public-pkg-sync" data-sync="front-pkg4-b1">Menu Nuri thiết kế riêng</span>
                  </li>
                  <li class="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span class="flex-1 public-pkg-sync" data-sync="front-pkg4-b2">Giao hàng tận nơi</span>
                  </li>
                </ul>
                <button type="button" onclick="openPricingModal('5', true)" class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold text-[17.5px] leading-[25px] mb-4 transition-colors flex items-center justify-center gap-1.5 w-full">
                  <i class="fa-solid fa-tags"></i> Xem bảng giá chi tiết
                </button>
                <div onclick="window.openOrderPlatformModal('landing', '7')" class="ripple-btn pkg-btn block w-full text-center py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-[20px] leading-[30px] transition-all duration-300 mt-auto relative z-10 animate-glow-pulse-emerald hover:bg-emerald-600 shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 cursor-pointer">Chọn Gói Này</div>
              </div>
            </div>

            <!-- Gói Chuyển Đổi -->
            <div class="relative bg-white dark:bg-slate-800 rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center shadow-xl shadow-slate-200/50 dark:shadow-none group border border-slate-100 dark:border-slate-700 hover:-translate-y-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 w-full h-full hover-shine-effect">
              <div class="absolute top-0 left-0 w-full h-[180px] overflow-hidden" style="border-top-left-radius: 32px; border-top-right-radius: 32px; border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                <img id="public-pkg5-bg" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&amp;fit=crop&amp;w=600&amp;q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="bg">
                <div class="absolute inset-0 bg-emerald-900/40 mix-blend-multiply pointer-events-none"></div>
                <div class="absolute top-6 left-0 w-full text-center px-4 pointer-events-none">
                  <p class="text-white font-medium text-[17.5px] leading-[25px] drop-shadow-md">
                    duy trì cân nặng<br>
                    <span class="font-bold text-[20px] leading-[30px]">tăng cơ giảm mỡ</span>
                  </p>
                </div>
              </div>
              <div class="relative z-10 mt-[80px] mb-4 w-40 h-40 rounded-full border-[6px] border-white dark:border-slate-800 shadow-xl bg-white dark:bg-slate-800 overflow-hidden shrink-0 group-hover:-translate-y-2 transition-transform duration-500">
                <img id="public-pkg5-img" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;w=300&amp;q=80" class="w-full h-full object-cover" alt="food">
              </div>
              <div class="relative z-10 flex flex-col items-center w-full flex-1">
                <h3 class="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[17.5px] leading-[25px] mb-1 public-pkg-sync" data-sync="front-pkg5-subtitle">Gói 30 Ngày</h3>
                <p class="text-[37.5px] leading-[45px] font-black text-slate-800 dark:text-white tracking-tight mb-4 public-pkg-sync" data-sync="front-pkg5-title">Duy Trì</p>
                
                <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-4 mb-5 w-full border border-emerald-100/50 dark:border-emerald-800/30">
                  <ul class="space-y-3 w-full">
                    <li class="flex items-center justify-between text-[17.5px] leading-[25px]">
                      <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><i class="fa-solid fa-leaf text-emerald-500"></i> Size Lean (S)</div>
                      <span class="text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">400 Kcal</span>
                    </li>
                    <li class="flex items-center justify-between text-[17.5px] leading-[25px]">
                      <div class="flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><i class="fa-solid fa-scale-balanced text-emerald-500"></i> Size Balance (M)</div>
                      <span class="text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">500 Kcal</span>
                    </li>
                    <li class="flex items-center justify-between text-[17.5px] leading-[25px]">
                      <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><i class="fa-solid fa-dumbbell text-emerald-500"></i> Size Power (L)</div>
                      <span class="text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">700 Kcal</span>
                    </li>
                  </ul>
                </div>

                <ul class="text-left space-y-3 w-full mb-6 flex-1">
                  <li class="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span class="flex-1 public-pkg-sync" data-sync="front-pkg5-b1">Miễn phí giao từ 2 đơn</span>
                  </li>
                  <li class="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span class="flex-1 public-pkg-sync" data-sync="front-pkg5-b2">Đổi món linh hoạt</span>
                  </li>
                </ul>
                <button type="button" onclick="openPricingModal('10', true)" class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold text-[17.5px] leading-[25px] mb-4 transition-colors flex items-center justify-center gap-1.5 w-full">
                  <i class="fa-solid fa-tags"></i> Xem bảng giá chi tiết
                </button>
                <div onclick="window.openOrderPlatformModal('landing', '14')" class="ripple-btn pkg-btn block w-full text-center py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-[20px] leading-[30px] transition-all duration-300 mt-auto relative z-10 animate-glow-pulse-emerald hover:bg-emerald-600 shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 cursor-pointer">Chọn Gói Này</div>
              </div>
            </div>

            <!-- Gói Bứt Phá -->
            <div class="relative bg-white dark:bg-slate-800 rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center shadow-2xl shadow-emerald-900/10 dark:shadow-none group border-2 border-emerald-500 hover:-translate-y-2 transition-all duration-300 w-full h-full">
              <div class="absolute -top-5 right-6 z-20">
                <span class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[15px] leading-[20px] font-black px-4 py-1.5 rounded-full shadow-lg shadow-emerald-500/30 uppercase tracking-wider">Phổ Biến Nhất</span>
              </div>
              <div class="absolute top-0 left-0 w-full h-[180px] overflow-hidden" style="border-top-left-radius: 32px; border-top-right-radius: 32px; border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                <img id="public-pkg6-bg" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;w=600&amp;q=80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="bg">
                <div class="absolute inset-0 bg-emerald-900/40 mix-blend-multiply pointer-events-none"></div>
                <div class="absolute top-6 left-0 w-full text-center px-4 pointer-events-none">
                  <p class="text-white font-medium text-[17.5px] leading-[25px] drop-shadow-md">
                    gấp đôi lượng Protein<br>
                    <span class="font-bold text-[20px] leading-[30px]">xây dựng cơ bắp</span>
                  </p>
                </div>
              </div>
              <div class="relative z-10 mt-[80px] mb-4 w-40 h-40 rounded-full border-[6px] border-white dark:border-slate-800 shadow-xl bg-white dark:bg-slate-800 overflow-hidden shrink-0 group-hover:-translate-y-2 transition-transform duration-500">
                <img id="public-pkg6-img" src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&amp;fit=crop&amp;w=300&amp;q=80" class="w-full h-full object-cover" alt="food">
              </div>
              <div class="relative z-10 flex flex-col items-center w-full flex-1">
                <h3 class="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[17.5px] leading-[25px] mb-1 public-pkg-sync" data-sync="front-pkg6-subtitle">Gói 10 Ngày</h3>
                <p class="text-[37.5px] leading-[45px] font-black text-slate-800 dark:text-white tracking-tight mb-4 public-pkg-sync" data-sync="front-pkg6-title">Bứt Phá</p>
                
                <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-4 mb-5 w-full border border-emerald-100/50 dark:border-emerald-800/30">
                  <ul class="space-y-3 w-full">
                    <li class="flex items-center justify-between text-[17.5px] leading-[25px]">
                      <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><i class="fa-solid fa-leaf text-emerald-500"></i> Size Lean (S)</div>
                      <span class="text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">400 Kcal</span>
                    </li>
                    <li class="flex items-center justify-between text-[17.5px] leading-[25px]">
                      <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><i class="fa-solid fa-scale-balanced text-emerald-500"></i> Size Balance (M)</div>
                      <span class="text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">500 Kcal</span>
                    </li>
                    <li class="flex items-center justify-between text-[17.5px] leading-[25px]">
                      <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><i class="fa-solid fa-dumbbell text-emerald-500"></i> Size Power (L)</div>
                      <span class="text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">700 Kcal</span>
                    </li>
                  </ul>
                </div>

                <ul class="text-left space-y-3 w-full mb-6 flex-1">
                  <li class="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span class="flex-1 public-pkg-sync" data-sync="front-pkg6-b1">Miễn phí giao hàng</span>
                  </li>
                  <li class="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span class="flex-1 public-pkg-sync" data-sync="front-pkg6-b2">Chuyên gia theo dõi 1:1</span>
                  </li>
                  <li class="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-[17.5px] leading-[25px] font-medium">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span class="flex-1 public-pkg-sync" data-sync="front-pkg6-b3">Đổi món linh hoạt</span>
                  </li>
                </ul>
                <button type="button" onclick="openPricingModal('20', true)" class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold text-[17.5px] leading-[25px] mb-4 transition-colors flex items-center justify-center gap-1.5 w-full">
                  <i class="fa-solid fa-tags"></i> Xem bảng giá chi tiết
                </button>
                <div onclick="window.openOrderPlatformModal('landing', '30')" class="ripple-btn pkg-btn block w-full text-center py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-[20px] leading-[30px] transition-all duration-300 mt-auto relative z-10 animate-glow-pulse-emerald hover:bg-emerald-600 shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 cursor-pointer">Chọn Gói Này</div>
              </div>
            </div>
          </div>

          <!-- Self Mix Banner -->
          <div id="home-self-mix-banner" class="relative rounded-[32px] overflow-hidden shadow-2xl shadow-emerald-900/20 group h-auto md:h-[350px] flex items-center">
            <!-- Background Image -->
            <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Self-mix background" referrerpolicy="no-referrer">
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-transparent"></div>
            <div class="absolute inset-0 bg-black/20"></div>
            
            <!-- Content -->
            <div class="relative z-10 w-full p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
              <div class="md:w-2/3 h-full flex flex-col justify-center">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-[17.5px] leading-[25px] font-bold text-white uppercase tracking-wider mb-4 shadow-lg w-max shadow-orange-500/30">
                  <i class="fa-solid fa-star text-amber-100 animate-pulse"></i> Độc quyền
                </div>
                <h3 class="text-[37.5px] leading-[45px] md:text-[60px] leading-[60px] font-black mb-4 text-white drop-shadow-lg" style="font-family: 'Playfair Display', serif; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Tự Tạo Món (Self-Mix)</h3>
                <p class="text-emerald-50 text-[22.5px] leading-[35px] md:text-[25px] leading-[35px] leading-relaxed drop-shadow-md max-w-2xl font-medium">Không thích ăn rau củ? Dị ứng hải sản? Đừng lo! Tính năng Self-Mix cho phép bạn tự do tùy biến nguyên liệu, loại bỏ món không thích mà vẫn đảm bảo tính toán chuẩn xác lượng Calories.</p>
              </div>
              
              <div class="md:w-1/3 flex justify-center md:justify-end w-full mt-4 md:mt-0">
                <button onclick="window.openCreateDishModal('landing')" class="animate-attention-glow-shake relative group/btn overflow-hidden w-full md:w-auto bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black text-[25px] leading-[35px] py-5 px-10 rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.8)] border-2 border-amber-300">
                  <span class="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></span>
                  <span class="relative flex items-center justify-center gap-3">
                    Trải nghiệm ngay <i class="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          <div id="landing-selfmix-dish-container" class="mt-8 hidden flex justify-center w-full max-w-4xl mx-auto"></div>
          
          <div class="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 w-full">
            <button onclick="window.openOrderPlatformModal()" class="animate-attention-glow-shake relative group/order-btn overflow-hidden w-full md:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-[30px] leading-[40px] py-6 px-12 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.6)] hover:shadow-[0_0_40px_rgba(245,158,11,0.9)] border-4 border-amber-300 z-20 flex-1 max-w-sm">
              <span class="absolute inset-0 w-full h-full rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></span>
              <span class="relative flex items-center justify-center gap-4">
                <i class="fa-solid fa-gift text-amber-100 animate-bounce text-[37.5px] leading-[45px]"></i>
                ĐĂNG KÝ GÓI
              </span>
            </button>

            <button onclick="openPublicMenu()" class="relative group/menu-btn overflow-hidden w-full md:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-[30px] leading-[40px] py-6 px-12 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] border-4 border-emerald-300 z-20 flex-1 max-w-sm">
              <span class="absolute inset-0 w-full h-full rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></span>
              <span class="relative flex items-center justify-center gap-4">
                <i class="fa-solid fa-utensils text-emerald-100 text-[37.5px] leading-[45px]"></i>
                XEM MENU ĐẦY ĐỦ
              </span>
            </button>
          </div>
        </div>



        <!-- 4. Có gì đặc biệt ở Nuri -->
        <div class="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-[37.5px] leading-[45px] md:text-[45px] leading-[50px] font-black text-slate-900 dark:text-white mb-4">Điều tạo nên sự khác biệt</h2>
              <p class="text-[22.5px] leading-[35px] text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Chất lượng món ăn và công nghệ tiên phong mang lại trải nghiệm hoàn hảo.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <!-- Card 1: Công Nghệ AI Cốt Lõi -->
              <div class="relative bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm text-center group hover:border-blue-200 dark:hover:border-blue-800 transition-colors flex flex-col justify-between pb-8">
                <div>
                  <div class="relative w-full h-[180px] overflow-hidden mb-6" style="border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt="Công Nghệ AI Cốt Lõi" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer">
                    <div class="absolute inset-0 bg-blue-900/20 pointer-events-none"></div>
                  </div>
                  <div class="px-6">
                    <h3 class="text-[25px] leading-[35px] font-bold text-slate-900 dark:text-white mb-3">Công Nghệ AI Cốt Lõi</h3>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[17.5px] leading-[25px]">Hệ thống phân tích thông minh độc quyền, tối ưu hóa thực đơn dựa trên hàng ngàn dữ liệu dinh dưỡng chuẩn xác.</p>
                  </div>
                </div>
              </div>

              <!-- Card 2: Tính Calo Chuẩn Xác -->
              <div class="relative bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm text-center group hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors flex flex-col justify-between pb-8">
                <div>
                  <div class="relative w-full h-[180px] overflow-hidden mb-6" style="border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                    <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt="Tính Calo Chuẩn Xác" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer">
                    <div class="absolute inset-0 bg-emerald-900/20 pointer-events-none"></div>
                  </div>
                  <div class="px-6">
                    <h3 class="text-[25px] leading-[35px] font-bold text-slate-900 dark:text-white mb-3">Tính Calo Chuẩn Xác</h3>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[17.5px] leading-[25px]">Định lượng từng gam nguyên liệu. Đảm bảo lượng Calories nạp vào cơ thể hoàn toàn đúng với mục tiêu đề ra.</p>
                  </div>
                </div>
              </div>

              <!-- Card 3: Nguyên Liệu Tươi Sạch -->
              <div class="relative bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm text-center group hover:border-rose-200 dark:hover:border-rose-800 transition-colors flex flex-col justify-between pb-8">
                <div>
                  <div class="relative w-full h-[180px] overflow-hidden mb-6" style="border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt="Nguyên Liệu Tươi Sạch" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer">
                    <div class="absolute inset-0 bg-rose-900/20 pointer-events-none"></div>
                  </div>
                  <div class="px-6">
                    <h3 class="text-[25px] leading-[35px] font-bold text-slate-900 dark:text-white mb-3">Nguyên Liệu Tươi Sạch</h3>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[17.5px] leading-[25px]">Tuyển chọn khắt khe từ nông trại địa phương. Nấu mới mỗi ngày, không chất bảo quản, giữ trọn hương vị tự nhiên.</p>
                  </div>
                </div>
              </div>

              <!-- Card 4: Tự Tạo Món (Self-Mix) -->
              <div class="relative bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm text-center group hover:border-amber-200 dark:hover:border-amber-800 transition-colors flex flex-col justify-between pb-8">
                <div>
                  <div class="relative w-full h-[180px] overflow-hidden mb-6" style="border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                    <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt="Tự Tạo Món (Self-Mix)" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer">
                    <div class="absolute inset-0 bg-amber-900/20 pointer-events-none"></div>
                  </div>
                  <div class="px-6">
                    <h3 class="text-[25px] leading-[35px] font-bold text-slate-900 dark:text-white mb-3">Tự Tạo Món (Self-Mix)</h3>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[17.5px] leading-[25px]"><span class="font-semibold text-amber-600 dark:text-amber-400">Khác biệt độc quyền:</span> Trái ngược hoàn toàn với các đơn vị gói ăn truyền thống có thực đơn cố định không thể thay đổi, Nuri cho phép bạn tự do chọn lựa từng món riêng, tùy biến linh hoạt theo sở thích cá nhân.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phần Hoạt Ảnh Cuộn -->
        <div id="scroll-animation-wrapper" style="height: 300vh; position: relative;">
          <div id="scroll-animation-sticky" style="position: sticky; top: 0; width: 100%; height: 100vh; overflow: hidden; background-color: transparent; display: flex; align-items: center; justify-content: center; z-index: 20;">
            <div style="position: relative; width: 100%; height: 100%; max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
              
              <!-- Curtains for Split Reveal Effect -->
              <div id="curtain-top" class="absolute top-0 left-0 w-full h-[50vh] bg-white z-40 flex items-start justify-center pt-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] origin-top">
                <span class="text-slate-300 uppercase tracking-widest text-[17.5px] leading-[25px] animate-bounce mt-4">Cuộn xuống để khám phá</span>
              </div>
              <div id="curtain-bottom" class="absolute bottom-0 left-0 w-full h-[50vh] bg-[#064e3b] z-40 origin-bottom">
              </div>

              <!-- 4:3 Aspect Ratio Container aligned with the rest of the layout -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
                <div class="relative w-full mx-auto" style="aspect-ratio: 4/3; container-type: inline-size;">
                
                  <!-- Slogan 1 -->
                <div id="anim-slogan-1" class="absolute w-full text-slate-800 font-normal text-center pointer-events-none z-10" style="top: 2%; font-family: 'UTM Akashi', sans-serif; font-size: 11.5cqw; line-height: 0.85; opacity: 0; transform: scale(0.5) translateY(-50px);">
                  NẠP<br/>NĂNG<br/>LƯỢNG
                </div>

                <!-- Slogan 2 -->
                <div id="anim-slogan-2" class="absolute w-full text-slate-800 font-normal text-center pointer-events-none z-10" style="bottom: 2%; font-family: 'UTM Akashi', sans-serif; font-size: 11.5cqw; line-height: 1; opacity: 0; transform: scale(0.5) translateY(50px);">
                  SỐNG KHỎE
                </div>

                <!-- Foreground Images Layer -->
                <!-- Image 3 (Trái qua) -->
                <img id="anim-img-3" src="./images/A3.png" class="absolute left-[0%] top-[20%] w-[32%] object-contain z-0 pointer-events-none" style="transform: translateX(-150vw);" alt="Dumbbells">

                <!-- Image 2 (Phải qua) -->
                <img id="anim-img-2" src="./images/A2.png" class="absolute right-[0%] top-[4%] w-[38%] object-contain z-0 pointer-events-none" style="transform: translateX(150vw);" alt="Yoga Mat">

                <!-- Image 1 (Dưới lên) -->
                <img id="anim-img-1" src="./images/A1.png" class="absolute left-1/2 bottom-[14%] w-[48%] object-contain z-20 pointer-events-none" style="transform: translate(-50%, 150vh);" alt="Lunch Box">
                
              </div>
            </div>
              
            </div>
          </div>
        </div>

        <!-- 5. Câu chuyện & Sứ mệnh (Sách lật trang 3D) -->
        
        <div id="section-su-menh" class="py-16 md:py-24 overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Book Container with 3D Perspective -->
            <div id="nuri-brand-book" class="relative bg-emerald-900 rounded-[32px] shadow-2xl cursor-pointer select-none overflow-hidden reveal" style="perspective: 2000px;" onclick="turnBookPage()">
              
              <!-- Book Spine / Bind Shadow (Hidden on Mobile) -->
              <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[6px] -ml-[3px] bg-gradient-to-r from-emerald-950/40 via-black/35 to-emerald-950/40 z-40"></div>

              <!-- Page Contents Wrapper -->
              <div class="relative min-h-[500px] lg:min-h-[550px] bg-emerald-900 rounded-[32px] shadow-inner flex flex-col">
                
                <!-- Page 1 (Sứ mệnh) Container -->
                <div id="book-page-1-container" class="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[500px] lg:min-h-[550px] transition-all duration-700 opacity-100 z-20 relative bg-emerald-900">
                  <!-- Left Column -->
                  <div id="book-page-1-left" class="p-8 md:p-16 flex flex-col justify-center">
                    <span class="text-emerald-400 font-extrabold uppercase tracking-widest text-[15px] leading-[20px] mb-3 flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Sứ mệnh của Nuri
                    </span>
                    <h2 class="text-[30px] leading-[40px] md:text-[45px] leading-[50px] font-black text-white mb-6 leading-tight">Mang lại lối sống khỏe mạnh từ bữa ăn</h2>
                    <p class="text-emerald-100/90 text-[20px] leading-[30px] md:text-[22.5px] leading-[35px] leading-relaxed mb-6">
                      Chúng tôi tin rằng "phòng bệnh hơn chữa bệnh". Dinh dưỡng đúng cách là chiếc chìa khóa vạn năng mở ra một cuộc sống tràn đầy năng lượng, minh mẫn và trường thọ. 
                    </p>
                    <p class="text-emerald-100/90 text-[20px] leading-[30px] md:text-[22.5px] leading-[35px] leading-relaxed mb-8">
                      Nuri Kitchen ra đời không chỉ để cung cấp những suất ăn, mà còn để đồng hành cùng bạn thiết lập thói quen ăn uống khoa học, tiện lợi giữa nhịp sống hối hả.
                    </p>
                    <div class="flex items-center gap-4 mt-auto">
                      <div class="w-12 h-1 bg-emerald-500 rounded-full"></div>
                      <span class="text-emerald-300 font-semibold font-serif italic text-[22.5px] leading-[35px]">Đội ngũ Nuri Kitchen</span>
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div id="book-page-1-right" class="relative bg-gradient-to-br from-emerald-800 to-teal-900 min-h-[350px] lg:h-full flex flex-col p-6 md:p-10 overflow-hidden rounded-b-[32px] lg:rounded-br-[32px] lg:rounded-bl-none">
                    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
                    <div class="relative z-10 flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full h-full">
                      <!-- Icon part -->
                      <div class="text-center sm:text-left flex-shrink-0 w-full sm:w-auto flex flex-col justify-center">
                        <div class="w-20 h-20 md:w-24 md:h-24 mx-auto sm:mx-0 border-4 border-emerald-500/50 rounded-2xl flex items-center justify-center text-[45px] leading-[50px] md:text-[60px] leading-[60px] text-emerald-400 mb-4 md:mb-6 backdrop-blur-sm bg-black/20 shadow-lg transform rotate-3">
                          <i class="fa-solid fa-heart-pulse"></i>
                        </div>
                        <h3 class="text-[25px] leading-[35px] md:text-[30px] leading-[40px] font-black text-white mb-1 md:mb-2 drop-shadow-md leading-tight max-w-[150px] mx-auto sm:mx-0">Khỏe bên trong</h3>
                        <p class="text-emerald-200 text-[17.5px] leading-[25px] md:text-[20px] leading-[30px] drop-shadow-sm max-w-[150px] mx-auto sm:mx-0">Đẹp bên ngoài</p>
                      </div>
                      <!-- Image part -->
                      <div class="w-full flex-1 py-2 sm:py-0 flex items-center justify-center h-full">
                        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt="Healthy Lifestyle" class="w-full h-56 sm:h-[90%] object-cover rounded-3xl shadow-xl border-4 border-emerald-700/30 transform -rotate-2 hover:rotate-0 transition-transform duration-500 min-h-[250px]">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Page 2 (Câu chuyện thương hiệu) Container -->
                <div id="book-page-2-container" class="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[500px] lg:min-h-[550px] absolute inset-0 transition-all duration-700 opacity-0 pointer-events-none z-10 bg-emerald-900">
                  <!-- Left Column -->
                  <div id="book-page-2-left" class="p-8 md:p-16 flex flex-col justify-center">
                    <span class="text-teal-400 font-extrabold uppercase tracking-widest text-[15px] leading-[20px] mb-3 flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                      Câu chuyện thương hiệu
                    </span>
                    <h2 class="text-[30px] leading-[40px] md:text-[45px] leading-[50px] font-black text-white mb-6 leading-tight">Hành trình thắp lửa từ căn bếp gia đình</h2>
                    <p class="text-emerald-100/90 text-[20px] leading-[30px] md:text-[22.5px] leading-[35px] leading-relaxed mb-6">
                      Bắt đầu từ tình yêu thương và mong muốn chăm sóc sức khỏe trọn vẹn cho những người thân yêu, Nuri đã thấu hiểu sâu sắc rằng dinh dưỡng chất lượng chính là gốc rễ của hạnh phúc vững bền.
                    </p>
                    <p class="text-emerald-100/90 text-[20px] leading-[30px] md:text-[22.5px] leading-[35px] leading-relaxed mb-8">
                      Từng hộp cơm của Nuri Kitchen không chỉ chứa đựng những món ngon chuẩn vị, sạch lành, mà còn mang theo hoài bão định nghĩa lại lối sống khỏe mạnh và tiện lợi cho hàng triệu người Việt.
                    </p>
                    <div class="flex items-center gap-4 mt-auto">
                      <div class="w-12 h-1 bg-teal-500 rounded-full"></div>
                      <span class="text-teal-300 font-semibold font-serif italic text-[22.5px] leading-[35px]">Người sáng lập Nuri Kitchen</span>
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div id="book-page-2-right" class="relative bg-gradient-to-br from-teal-800 to-emerald-950 min-h-[350px] lg:h-full flex flex-col p-6 md:p-10 overflow-hidden rounded-b-[32px] lg:rounded-br-[32px] lg:rounded-bl-none">
                    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
                    <div class="relative z-10 flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full h-full">
                      <!-- Icon part -->
                      <div class="text-center sm:text-left flex-shrink-0 w-full sm:w-auto flex flex-col justify-center">
                        <div class="w-20 h-20 md:w-24 md:h-24 mx-auto sm:mx-0 border-4 border-teal-500/50 rounded-2xl flex items-center justify-center text-[45px] leading-[50px] md:text-[60px] leading-[60px] text-teal-400 mb-4 md:mb-6 backdrop-blur-sm bg-black/20 shadow-lg transform -rotate-3">
                          <i class="fa-solid fa-book-open"></i>
                        </div>
                        <h3 class="text-[25px] leading-[35px] md:text-[30px] leading-[40px] font-black text-white mb-1 md:mb-2 drop-shadow-md leading-tight max-w-[150px] mx-auto sm:mx-0">Dinh dưỡng trọn vẹn</h3>
                        <p class="text-teal-200 text-[17.5px] leading-[25px] md:text-[20px] leading-[30px] drop-shadow-sm max-w-[150px] mx-auto sm:mx-0">Gửi trọn yêu thương</p>
                      </div>
                      <!-- Image part -->
                      <div class="w-full flex-1 py-2 sm:py-0 flex items-center justify-center h-full">
                        <img src="https://images.unsplash.com/photo-1556910103-1c02745a872e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt="Family Kitchen" class="w-full h-56 sm:h-[90%] object-cover rounded-3xl shadow-xl border-4 border-teal-700/30 transform rotate-2 hover:rotate-0 transition-transform duration-500 min-h-[250px]">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 3D Flipping Page (Overlay Leaf for Desktop) -->
                <div id="book-flipping-leaf" class="hidden lg:block absolute top-0 bottom-0 right-0 w-1/2 transform-gpu origin-left bg-emerald-900 shadow-2xl z-30 transition-transform duration-700 preserve-3d opacity-0 pointer-events-none">
                  <!-- Front Face of Flipping Page (shows Sứ mệnh right page during turn to story) -->
                  <div class="absolute inset-0 backface-hidden flex flex-col p-6 md:p-10 bg-gradient-to-br from-emerald-800 to-teal-900 overflow-hidden rounded-r-[32px]">
                    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
                    <div class="relative z-10 flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full h-full">
                      <div class="text-center sm:text-left flex-shrink-0 w-full sm:w-auto flex flex-col justify-center">
                        <div class="w-20 h-20 md:w-24 md:h-24 mx-auto sm:mx-0 border-4 border-emerald-500/50 rounded-2xl flex items-center justify-center text-[45px] leading-[50px] md:text-[60px] leading-[60px] text-emerald-400 mb-4 md:mb-6 backdrop-blur-sm bg-black/20 shadow-lg transform rotate-3">
                          <i class="fa-solid fa-heart-pulse"></i>
                        </div>
                        <h3 class="text-[25px] leading-[35px] md:text-[30px] leading-[40px] font-black text-white mb-1 md:mb-2 drop-shadow-md leading-tight max-w-[150px] mx-auto sm:mx-0">Khỏe bên trong</h3>
                        <p class="text-emerald-200 text-[17.5px] leading-[25px] md:text-[20px] leading-[30px] drop-shadow-sm max-w-[150px] mx-auto sm:mx-0">Đẹp bên ngoài</p>
                      </div>
                      <div class="w-full flex-1 py-2 sm:py-0 flex items-center justify-center h-full">
                        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt="Healthy Lifestyle" class="w-full h-56 sm:h-[90%] object-cover rounded-3xl shadow-xl border-4 border-emerald-700/30 transform -rotate-2 hover:rotate-0 transition-transform duration-500 min-h-[250px]">
                      </div>
                    </div>
                  </div>
                  <!-- Back Face of Flipping Page (shows Câu chuyện left page during turn to story) -->
                  <div class="absolute inset-0 backface-hidden rotate-y-180 flex flex-col justify-center p-8 md:p-16 bg-emerald-900 border-r border-emerald-950/40 shadow-2xl">
                    <span class="text-teal-400 font-extrabold uppercase tracking-widest text-[15px] leading-[20px] mb-3 flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                      Câu chuyện thương hiệu
                    </span>
                    <h2 class="text-[30px] leading-[40px] md:text-[45px] leading-[50px] font-black text-white mb-6 leading-tight">Hành trình thắp lửa từ căn bếp gia đình</h2>
                    <p class="text-emerald-100/90 text-[20px] leading-[30px] md:text-[22.5px] leading-[35px] leading-relaxed mb-6">
                      Bắt đầu từ tình yêu thương và mong muốn chăm sóc sức khỏe trọn vẹn cho những người thân yêu, Nuri đã thấu hiểu sâu sắc rằng dinh dưỡng chất lượng chính là gốc rễ của hạnh phúc vững bền.
                    </p>
                    <p class="text-emerald-100/90 text-[20px] leading-[30px] md:text-[22.5px] leading-[35px] leading-relaxed mb-8">
                      Từng hộp cơm của Nuri Kitchen không chỉ chứa đựng những món ngon chuẩn vị, sạch lành, mà còn mang theo hoài bão định nghĩa lại lối sống khỏe mạnh và tiện lợi cho hàng triệu người Việt.
                    </p>
                    <div class="flex items-center gap-4 mt-auto">
                      <div class="w-12 h-1 bg-teal-500 rounded-full"></div>
                      <span class="text-teal-300 font-semibold font-serif italic text-[22.5px] leading-[35px]">Người sáng lập Nuri Kitchen</span>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Manual Navigation Controls & Dots -->
              <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-40 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <button type="button" onclick="event.stopPropagation(); turnBookPage(0);" class="text-white hover:text-emerald-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                  </svg>
                </button>
                <div class="flex gap-2">
                  <span id="book-dot-0" class="w-2.5 h-2.5 rounded-full bg-white transition-all duration-300"></span>
                  <span id="book-dot-1" class="w-2.5 h-2.5 rounded-full bg-white/40 transition-all duration-300"></span>
                </div>
                <button type="button" onclick="event.stopPropagation(); turnBookPage(1);" class="text-white hover:text-emerald-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 6. Khách hàng thành công (Testimonials) -->
        <div id="section-cau-chuyen" class="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-[37.5px] leading-[45px] md:text-[45px] leading-[50px] font-black text-slate-900 dark:text-white mb-4">Câu chuyện thành công</h2>
              <p class="text-[22.5px] leading-[35px] text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Hàng ngàn khách hàng đã thay đổi vóc dáng và sức khỏe cùng Nuri.</p>
            </div>
            
            <div class="relative overflow-hidden w-full max-w-full pb-4 reveal-right" id="testimonial-carousel">
              <div class="flex transition-transform duration-500 ease-in-out w-full" id="testimonial-track" style="transform: translateX(0%);">
                <div class="w-full flex-shrink-0">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-1 sm:px-2">
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                      <i class="fa-solid fa-quote-left text-[45px] leading-[50px] text-emerald-100 dark:text-emerald-900/50 absolute top-6 right-6"></i>
                      <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 border-2 border-emerald-500">
                          <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&amp;fit=crop&amp;w=150&amp;q=80" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-900 dark:text-white">Minh Tú</h4>
                          <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Giảm 4kg trong 1 tháng</p>
                        </div>
                      </div>
                      <div class="flex gap-1 text-amber-400 text-[17.5px] leading-[25px] mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 italic flex-1">"Mình làm văn phòng bận rộn không có thời gian nấu nướng. Từ ngày dùng gói Lean của Nuri, mình đã lấy lại vóc dáng thon gọn mà không hề bị mệt mỏi. Đồ ăn siêu ngon!"</p>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                      <i class="fa-solid fa-quote-left text-[45px] leading-[50px] text-emerald-100 dark:text-emerald-900/50 absolute top-6 right-6"></i>
                      <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 border-2 border-emerald-500">
                          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=150&amp;q=80" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-900 dark:text-white">Hoàng Nam</h4>
                          <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Dân tập Gym</p>
                        </div>
                      </div>
                      <div class="flex gap-1 text-amber-400 text-[17.5px] leading-[25px] mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 italic flex-1">"Tính năng Self-mix cực kỳ tiện lợi cho gymer. Mình hay ăn Size Power và tự chọn thêm ức gà, bò mỡ. Tiết kiệm thời gian meal prep mà lượng Macro vẫn cực chuẩn."</p>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                      <i class="fa-solid fa-quote-left text-[45px] leading-[50px] text-emerald-100 dark:text-emerald-900/50 absolute top-6 right-6"></i>
                      <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 border-2 border-emerald-500">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=150&amp;q=80" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-900 dark:text-white">Thanh Phương</h4>
                          <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Mẹ bỉm sữa</p>
                        </div>
                      </div>
                      <div class="flex gap-1 text-amber-400 text-[17.5px] leading-[25px] mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 italic flex-1">"Đồ ăn đóng gói sạch sẽ, nguyên liệu tươi ngon ăn là thấy sự khác biệt. Đặc biệt là thực đơn thay đổi liên tục nên không bao giờ thấy ngán. Cảm ơn Nuri rất nhiều."</p>
                    </div>
                  </div>
                </div>
                <div class="w-full flex-shrink-0">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-1 sm:px-2">
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                      <i class="fa-solid fa-quote-left text-[45px] leading-[50px] text-emerald-100 dark:text-emerald-900/50 absolute top-6 right-6"></i>
                      <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 border-2 border-emerald-500">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=150&amp;q=80" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-900 dark:text-white">Tuấn Anh</h4>
                          <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Kỹ sư CNTT</p>
                        </div>
                      </div>
                      <div class="flex gap-1 text-amber-400 text-[17.5px] leading-[25px] mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 italic flex-1">"Ngồi máy tính cả ngày khiến mình hay bị đầy bụng và tăng cân. Chuyển sang ăn Nuri thấy bụng nhẹ hẳn, làm việc cũng tập trung hơn. Rất đáng tiền!"</p>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                      <i class="fa-solid fa-quote-left text-[45px] leading-[50px] text-emerald-100 dark:text-emerald-900/50 absolute top-6 right-6"></i>
                      <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 border-2 border-emerald-500">
                          <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=150&amp;q=80" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-900 dark:text-white">Ngọc Mai</h4>
                          <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Giảm mỡ sau sinh</p>
                        </div>
                      </div>
                      <div class="flex gap-1 text-amber-400 text-[17.5px] leading-[25px] mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 italic flex-1">"Thật sự bất ngờ với chất lượng của Nuri. Khẩu phần ăn vừa vặn, gia vị nêm nếm rất vừa miệng chứ không hề nhạt nhẽo như các chỗ khác mình từng thử."</p>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                      <i class="fa-solid fa-quote-left text-[45px] leading-[50px] text-emerald-100 dark:text-emerald-900/50 absolute top-6 right-6"></i>
                      <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 border-2 border-emerald-500">
                          <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=150&amp;q=803" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-900 dark:text-white">Quốc Bảo</h4>
                          <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Giảm 3kg trong 2 tuần</p>
                        </div>
                      </div>
                      <div class="flex gap-1 text-amber-400 text-[17.5px] leading-[25px] mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 italic flex-1">"Dịch vụ giao hàng rất chuẩn giờ. Mỗi buổi sáng nhận được phần ăn nóng hổi, tươm tất là thấy vui cả ngày. Mình đã giới thiệu cho mấy đồng nghiệp cùng công ty."</p>
                    </div>
                  </div>
                </div>
                <div class="w-full flex-shrink-0">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-1 sm:px-2">
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                      <i class="fa-solid fa-quote-left text-[45px] leading-[50px] text-emerald-100 dark:text-emerald-900/50 absolute top-6 right-6"></i>
                      <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 border-2 border-emerald-500">
                          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=150&amp;q=80" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-900 dark:text-white">Thu Hà</h4>
                          <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Nhân viên ngân hàng</p>
                        </div>
                      </div>
                      <div class="flex gap-1 text-amber-400 text-[17.5px] leading-[25px] mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 italic flex-1">"Hộp đựng rất xinh và thân thiện với môi trường. Đồ ăn không chỉ ngon mà bày trí cũng rất đẹp mắt, trưa nào mở hộp ra cũng thấy thèm ăn ngay."</p>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                      <i class="fa-solid fa-quote-left text-[45px] leading-[50px] text-emerald-100 dark:text-emerald-900/50 absolute top-6 right-6"></i>
                      <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 border-2 border-emerald-500">
                          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=150&amp;q=80" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-900 dark:text-white">Đức Trí</h4>
                          <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Chuẩn bị thi đấu</p>
                        </div>
                      </div>
                      <div class="flex gap-1 text-amber-400 text-[17.5px] leading-[25px] mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 italic flex-1">"Mình cần siết mỡ để chuẩn bị cho giải chạy sắp tới. Gói Balance của Nuri đáp ứng hoàn hảo nhu cầu của mình. Năng lượng tràn trề mà không sợ dư calo."</p>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                      <i class="fa-solid fa-quote-left text-[45px] leading-[50px] text-emerald-100 dark:text-emerald-900/50 absolute top-6 right-6"></i>
                      <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 border-2 border-emerald-500">
                          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=150&amp;q=80" alt="Customer" class="w-full h-full object-cover">
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-900 dark:text-white">Phương Thảo</h4>
                          <p class="text-[17.5px] leading-[25px] text-slate-500 dark:text-slate-400">Cải thiện sức khoẻ</p>
                        </div>
                      </div>
                      <div class="flex gap-1 text-amber-400 text-[17.5px] leading-[25px] mb-4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 italic flex-1">"Từ lúc ăn chế độ của Nuri, da dẻ mình sáng hơn, không còn bị nổi mụn lặt vặt nữa. Tiêu hoá cũng tốt lên rất nhiều. Một giải pháp tuyệt vời cho người lười nấu ăn."</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Navigation Arrows -->
              <button onclick="prevTestimonialPage()" class="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-110 transition-all z-10 hidden lg:flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transform -translate-x-4 xl:-translate-x-1/2">
                <i class="fa-solid fa-chevron-left text-[22.5px] leading-[35px]"></i>
              </button>
              <button onclick="nextTestimonialPage()" class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-110 transition-all z-10 hidden lg:flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transform translate-x-4 xl:translate-x-1/2">
                <i class="fa-solid fa-chevron-right text-[22.5px] leading-[35px]"></i>
              </button>

              <!-- Dots -->
              <div class="flex justify-center gap-2 mt-8">
                <button onclick="setTestimonialPage(0)" id="test-dot-0" class="w-4 h-2.5 rounded-full bg-emerald-500 transition-all"></button>
                <button onclick="setTestimonialPage(1)" id="test-dot-1" class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 transition-all"></button>
                <button onclick="setTestimonialPage(2)" id="test-dot-2" class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 transition-all"></button>
              </div>
            </div>
              
<div class="relative mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="overflow-hidden" id="customer-meals-carousel">
                <div class="flex transition-transform duration-500 ease-in-out w-full" id="customer-meals-track" style="transform: translateX(0%);">
                  <div class="w-full flex-shrink-0">
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 1">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=10" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 2">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=11" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 3">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=12" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 4">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=13" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 5">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=14" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 6">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=15" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1484723091791-00d31db109ff?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 7">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=16" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1504630083234-14187a9df0f5?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 8">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=17" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1543352634-99a5d50ae78e?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 9">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=18" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 10">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=19" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full flex-shrink-0">
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 11">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=20" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 12">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=21" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 13">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=22" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 14">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=23" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 15">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=24" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 16">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=25" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 17">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=26" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 18">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=27" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 19">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=28" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 20">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=29" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full flex-shrink-0">
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 21">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=30" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 22">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=31" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 23">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=32" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 24">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=33" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 25">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=34" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 26">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=35" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 27">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=36" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 28">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=37" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 29">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=38" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                      <div class="relative group aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&amp;fit=crop&amp;w=400&amp;q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Customer meal 30">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full border border-white/50 overflow-hidden bg-slate-200">
                              <img src="https://i.pravatar.cc/100?img=39" class="w-full h-full object-cover">
                            </div>
                            <i class="fa-solid fa-heart text-white text-[15px] leading-[20px]"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Navigation Arrows -->
              <button onclick="prevMealPage()" class="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-110 transition-all z-10 hidden sm:flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                <i class="fa-solid fa-chevron-left text-[22.5px] leading-[35px]"></i>
              </button>
              <button onclick="nextMealPage()" class="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-110 transition-all z-10 hidden sm:flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                <i class="fa-solid fa-chevron-right text-[22.5px] leading-[35px]"></i>
              </button>
              
              <!-- Dots -->
              <div class="flex justify-center gap-2 mt-8">
                <button onclick="setMealPage(0)" id="meal-dot-0" class="w-2.5 h-2.5 rounded-full bg-emerald-500 transition-all"></button>
                <button onclick="setMealPage(1)" id="meal-dot-1" class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 transition-all"></button>
                <button onclick="setMealPage(2)" id="meal-dot-2" class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 transition-all"></button>
              </div>
            </div>

            <div class="mt-16 text-center">
              <button onclick="switchView('consulting')" class="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white rounded-full font-bold text-[22.5px] leading-[35px] md:text-[25px] leading-[35px] transition-all duration-300 shadow-[0_8px_30px_rgb(16,185,129,0.4)] hover:-translate-y-1 active:scale-[0.98] hover:shadow-lg hover:bg-emerald-600 animate-glow-pulse-emerald gap-2">
                Bắt đầu hành trình của bạn ngay <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 7. Footer Doanh nghiệp -->
        <div class="bg-slate-900 text-white py-12 border-t-4 border-emerald-500">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 reveal">
              <div class="col-span-1 md:col-span-2">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-[30px] leading-[40px] font-black text-white shadow-lg">
                    N
                  </div>
                  <div>
                    <h3 class="text-[30px] leading-[40px] font-black tracking-tight" id="footer-kitchen-brand-name">Nuri Kitchen</h3>
                    <p class="text-emerald-400 text-[17.5px] leading-[25px] font-medium">Dinh Dưỡng Thông Minh</p>
                  </div>
                </div>
                <p class="text-slate-400 leading-relaxed max-w-sm mb-6">
                  Đồng hành cùng sức khỏe Việt qua những bữa ăn ngon, tiện lợi và được tính toán dinh dưỡng cá nhân hóa.
                </p>
                <div class="flex gap-4">
                  <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"><i class="fa-brands fa-instagram"></i></a>
                  <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"><i class="fa-brands fa-tiktok"></i></a>
                </div>
              </div>
              
              <div>
                <h4 class="text-[22.5px] leading-[35px] font-bold mb-6 text-white uppercase tracking-wider">Liên Hệ</h4>
                <ul class="space-y-4">
                  <li class="flex items-start gap-3 text-slate-400">
                    <i class="fa-solid fa-location-dot mt-1 text-emerald-500"></i>
                    <span id="footer-kitchen-address" class="system-editable focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded px-1 -mx-1">123 Đường Ẩm Thực, Quận 1, TP.HCM</span>
                  </li>
                  <li class="flex items-center gap-3 text-slate-400">
                    <i class="fa-solid fa-phone text-emerald-500"></i>
                    <span id="footer-kitchen-phone" class="system-editable focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded px-1 -mx-1">0909 123 456</span>
                  </li>
                  <li class="flex items-center gap-3 text-slate-400">
                    <div class="bg-blue-500 text-white text-[15px] font-bold px-1.5 py-0.5 rounded mr-1">Zalo</div>
                    <span id="footer-kitchen-zalo" class="system-editable focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded px-1 -mx-1">0909 123 456</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="text-[22.5px] leading-[35px] font-bold mb-6 text-white uppercase tracking-wider">Chính Sách</h4>
                <ul class="space-y-3">
                  <li><a href="#" class="text-slate-400 hover:text-emerald-400 transition-colors">Điều khoản dịch vụ</a></li>
                  <li><a href="#" class="text-slate-400 hover:text-emerald-400 transition-colors">Chính sách bảo mật</a></li>
                  <li><a href="#" class="text-slate-400 hover:text-emerald-400 transition-colors">Chính sách giao hàng</a></li>
                  <li><a href="#" class="text-slate-400 hover:text-emerald-400 transition-colors">Câu hỏi thường gặp</a></li>
                </ul>
              </div>
            </div>
            
            <div class="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-[17.5px] leading-[25px]">
              <p>© <span id="kitchen-current-year">2026</span> <span id="footer-kitchen-copyright-name">Nuri Kitchen</span>. Tất cả quyền được bảo lưu.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- View: ORDER FORM -->
      <div id="view-order-form" class="hidden animate-fade-in pb-12 bg-slate-50 dark:bg-slate-900">
        <div id="order-form-content-wrapper" class="w-full transition-all duration-300 relative">
          <!-- Toggle View Mode -->
          <div class="absolute top-2 right-2 z-[100] hidden md:flex justify-end pointer-events-none" id="order-form-view-toggle">
            <div class="bg-slate-200/80 p-0.5 rounded-lg inline-flex shadow-sm backdrop-blur-md relative pointer-events-auto scale-90 sm:scale-100 origin-top-right">
              <button onclick="setOrderFormViewMode('desktop')" id="btn-order-view-desktop" class="px-3 py-1.5 rounded-md text-[20px] leading-[30px] font-bold bg-white text-slate-800 shadow-sm transition-all flex items-center justify-center" title="Giao diện máy tính">
                <i class="fa-solid fa-desktop"></i>
              </button>
              <button onclick="setOrderFormViewMode('mobile')" id="btn-order-view-mobile" class="px-3 py-1.5 rounded-md text-[20px] leading-[30px] font-medium text-slate-500 hover:text-slate-800 hover:bg-white/50 transition-all flex items-center justify-center" title="Giao diện điện thoại">
                <i class="fa-solid fa-mobile-screen"></i>
              </button>
            </div>
          </div>
          <div class="sim-scrollable w-full overflow-x-clip px-4 md:px-0">
            <div class="mb-6 mt-2">
              <button onclick="switchView('consulting')" class="text-slate-500 hover:text-slate-800 text-[17.5px] leading-[25px] font-medium mb-4 inline-flex items-center transition-colors">
                <i class="fa-solid fa-arrow-left mr-2"></i> Quay lại Tư vấn
              </button>
              <h1 class="text-[30px] leading-[40px] font-bold text-slate-900">
                Đặt món giao ngay
              </h1>
              <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
                Chọn các món bạn muốn dùng và điền thông tin nhận hàng.
              </p>
            </div>

            <!-- Sticky Nutrition Summary -->
            <div id="sticky-nutrition-summary" class="sticky top-0 lg:top-20 z-[90] mb-6 rounded-2xl shadow-md shadow-emerald-900/10 border border-[#043F2E] p-4 flex items-center gap-6 md:gap-12 transition-all relative bg-[#043F2E]">
              <!-- Background pattern -->
              <div class="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>

              <!-- Shopping Cart Icon -->
              <button id="floating-cart-btn" onclick="
                  document
                    .getElementById('submit-order-form')
                    ?.scrollIntoView({ behavior: 'smooth' })
                " class="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-emerald-600 border border-emerald-100 hover:scale-110 transition-transform z-50">
                <i class="fa-solid fa-cart-arrow-down text-[22.5px] leading-[35px] pointer-events-none"></i>
                <span id="floating-cart-count" class="absolute -top-2 -right-2 w-5 h-5 bg-[#F97316] text-white rounded-full text-[15px] font-bold flex items-center justify-center border border-white pointer-events-none">0</span>
              </button>

              <!-- Gauge chart for kcal -->
              <div class="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 z-10">
                <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-[135deg]">
                  <!-- Background arc -->
                  <path class="text-emerald-500/30" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="75, 100" stroke-linecap="round"></path>
                  <!-- Progress arc -->
                  <path id="summary-kcal-progress" class="text-emerald-400 transition-all duration-700 ease-out" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="0, 100" stroke-linecap="round"></path>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center pt-2 md:pt-3">
                  <div class="text-[13px] text-red-500 animate-[ping_2s_infinite] hidden absolute top-4" id="summary-kcal-dot">
                    <i class="fa-solid fa-circle"></i>
                  </div>
                  <span id="summary-kcal-val" class="text-[25px] leading-[35px] md:text-[30px] leading-[40px] font-black text-white leading-none">0</span>
                  <span class="text-[14px] text-emerald-100/70 mt-1 whitespace-nowrap font-medium flex items-center"><i class="fa-solid fa-fire text-orange-500 mr-1"></i><span id="summary-kcal-left">2000</span> left</span>
                </div>
              </div>

              <!-- Macros -->
              <div class="flex-1 flex flex-col gap-3 z-10">
                <!-- Protein -->
                <div class="flex flex-col gap-1.5">
                  <div class="flex justify-between text-[18px] md:text-[15px] leading-[20px] items-center">
                    <span class="flex items-center gap-1.5 text-emerald-50 font-semibold"><i class="fa-solid fa-drumstick-bite text-amber-500 text-[17.5px] leading-[25px]"></i>
                      Proteins</span>
                    <span class="font-bold text-white"><span id="summary-protein-val" class="text-[17.5px] leading-[25px]">0</span><span class="text-emerald-200/60 font-medium">/150 g</span></span>
                  </div>
                  <div class="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                    <div id="summary-protein-bar" class="h-full bg-blue-400 rounded-full transition-all duration-700 ease-out" style="width: 0%"></div>
                  </div>
                </div>
                <!-- Carbs -->
                <div class="flex flex-col gap-1.5">
                  <div class="flex justify-between text-[18px] md:text-[15px] leading-[20px] items-center">
                    <span class="flex items-center gap-1.5 text-emerald-50 font-semibold"><i class="fa-solid fa-bread-slice text-amber-300 text-[17.5px] leading-[25px]"></i>
                      Carbs</span>
                    <span class="font-bold text-white"><span id="summary-carbs-val" class="text-[17.5px] leading-[25px]">0</span><span class="text-emerald-200/60 font-medium">/250 g</span></span>
                  </div>
                  <div class="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                    <div id="summary-carbs-bar" class="h-full bg-pink-400 rounded-full transition-all duration-700 ease-out" style="width: 0%"></div>
                  </div>
                </div>
                <!-- Fat -->
                <div class="flex flex-col gap-1.5">
                  <div class="flex justify-between text-[18px] md:text-[15px] leading-[20px] items-center">
                    <span class="flex items-center gap-1.5 text-emerald-50 font-semibold"><i class="fa-solid fa-seedling text-emerald-300 text-[17.5px] leading-[25px]"></i>
                      Fat</span>
                    <span class="font-bold text-white"><span id="summary-fat-val" class="text-[17.5px] leading-[25px]">0</span><span class="text-emerald-200/60 font-medium">/60 g</span></span>
                  </div>
                  <div class="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                    <div id="summary-fat-bar" class="h-full bg-orange-400 rounded-full transition-all duration-700 ease-out" style="width: 0%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div class="lg:col-span-7">
                <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                  <h2 class="text-[22.5px] leading-[35px] font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-utensils text-primary"></i> Menu
                  </h2>
                  <div class="mb-4 flex overflow-x-auto pb-2 gap-2 hide-scrollbar" id="customer-category-filters"></div>
                  <div class="mb-4 flex overflow-x-auto pb-2 gap-2 hide-scrollbar hidden" id="customer-sub-category-filters"></div>
                  <div id="customer-menu-list" class="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"></div>
                </div>
              </div>

              <div class="lg:col-span-5">
                <form id="submit-order-form" class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
                  <div class="p-6 border-b border-slate-100 bg-slate-50/50">
                    <h2 class="text-[22.5px] leading-[35px] font-bold text-slate-800 mb-4 flex items-center justify-between">
                      <span><i class="fa-solid fa-basket-shopping text-orange-500 mr-2"></i>
                        Giỏ hàng</span>
                    </h2>
                    <div id="cart-items" class="min-h-[100px] max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                      <div class="text-center text-slate-400 py-8 text-[17.5px] leading-[25px]">
                        Giỏ hàng đang trống
                      </div>
                    </div>

                    <div class="mt-4 pt-4 border-t border-slate-200">
                      <div class="flex justify-between items-center mb-2">
                        <span class="text-[17.5px] leading-[25px] text-slate-500">Tạm tính:</span>
                        <span id="cart-subtotal" class="text-[17.5px] leading-[25px] font-medium text-slate-700">0đ</span>
                      </div>
                      <div class="flex justify-between items-start mb-3">
                        <div class="flex flex-col">
                          <span class="text-[17.5px] leading-[25px] text-slate-500" id="cart-shipping-label">Phí giao hàng:</span>
                          <span id="cart-shipping-note" class="text-[18px] text-emerald-600 mt-0.5 font-medium hidden">Miễn phí cho đơn từ 0đ</span>
                        </div>
                        <span id="cart-shipping-fee" class="text-[17.5px] leading-[25px] font-medium text-slate-700">0đ</span>
                      </div>

                      <!-- Self-mix fee row -->
                      <div id="cart-self-mix-fee-row" class="flex justify-between items-start mb-3 hidden">
                        <div class="flex flex-col">
                          <span class="text-[17.5px] leading-[25px] text-slate-500">Phí tự mix món:</span>
                          <span id="cart-self-mix-fee-note" class="text-[18px] text-orange-600 mt-0.5 font-medium">Phí chế biến món tự thiết kế</span>
                        </div>
                        <span id="cart-self-mix-fee" class="text-[17.5px] leading-[25px] font-bold text-orange-600">7.000đ</span>
                      </div>

                      <div class="flex justify-between items-center pt-2 border-t border-slate-100">
                        <span class="font-medium text-slate-600">Tổng cộng:</span>
                        <span id="cart-total" class="text-[25px] leading-[35px] font-bold text-primary">0đ</span>
                      </div>
                    </div>
                  </div>

                  <div class="p-6 space-y-4">
                    <h3 class="font-semibold text-slate-800 text-[17.5px] leading-[25px] uppercase tracking-wider flex items-center justify-between">
                      Thông tin nhận hàng
                    </h3>
                    <div>
                      <input type="text" id="cust-name" required="" class="w-full rounded-lg border border-slate-300 py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary text-[17.5px] leading-[25px] transition-colors" placeholder="Tên người nhận *">
                    </div>
                    <div>
                      <input type="tel" id="cust-phone" required="" oninput="
                          checkSubmitButtonState();
                          updateTransferContent();
                        " class="w-full rounded-lg border border-slate-300 py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary text-[17.5px] leading-[25px] transition-colors" placeholder="Số điện thoại *">
                    </div>
                    <div class="flex items-center gap-2">
                      <button type="button" onclick="openMapModal()" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 px-3 rounded-lg text-[17.5px] leading-[25px] font-medium transition-colors border border-slate-300 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-map-location-dot text-indigo-500"></i>
                        Chọn vị trí thủ công trên bản đồ
                      </button>
                      <input type="hidden" id="cust-lat" value="">
                      <input type="hidden" id="cust-lng" value="">
                    </div>
                    <div id="selected-location-text" class="text-[15px] leading-[20px] text-indigo-600 font-semibold hidden">
                      <i class="fa-solid fa-check mr-1"></i> Đã chọn vị trí thủ
                      công
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                      <select id="cust-city" required="" oninput="checkSubmitButtonState()" class="w-full rounded-lg border border-slate-300 py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary text-[17.5px] leading-[25px] transition-colors bg-slate-100 pointer-events-none">
                        <option value="TP. Hồ Chí Minh" selected="">
                          TP. Hồ Chí Minh
                        </option>
                      </select>
                      <select id="cust-district" required="" oninput="checkSubmitButtonState()" class="w-full rounded-lg border border-slate-300 py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary text-[17.5px] leading-[25px] transition-colors" onchange="updateWards()">
                        <option value="">Quận/Huyện *</option>
                      </select>
                    </div>
                    <div>
                      <select id="cust-ward" required="" oninput="checkSubmitButtonState()" disabled="" class="w-full rounded-lg border border-slate-300 py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary text-[17.5px] leading-[25px] transition-colors disabled:bg-slate-50 disabled:text-slate-400">
                        <option value="">Phường/Xã *</option>
                      </select>
                    </div>
                    <div>
                      <input type="text" id="cust-street" required="" oninput="checkSubmitButtonState()" class="w-full rounded-lg border border-slate-300 py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary text-[17.5px] leading-[25px] transition-colors" placeholder="Số nhà, Tên đường cụ thể *">
                    </div>
                    <div>
                      <textarea id="cust-notes" rows="2" class="w-full rounded-lg border border-slate-300 py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary text-[17.5px] leading-[25px] transition-colors resize-none mb-4" placeholder="Ghi chú (Tòa nhà, yêu cầu thêm...)"></textarea>
                    </div>
                    <div>
                      <select id="cust-delivery-time" class="w-full rounded-lg border border-slate-300 py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary text-[17.5px] leading-[25px] transition-colors cursor-pointer" required="">
                        <option value="">Chọn thời gian nhận hàng *</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-semibold text-slate-700 mb-2 mt-4">Phương thức thanh toán</label>
                      <select id="payment-method" onchange="togglePaymentQR()" class="w-full rounded-lg border border-slate-300 py-2.5 px-3 focus:border-primary focus:ring-1 focus:ring-primary text-[17.5px] leading-[25px] transition-colors cursor-pointer">
                        <option value="cod">
                          Thanh toán khi nhận hàng (COD)
                        </option>
                        <option value="momo">Thanh toán qua Ví MoMo</option>
                        <option value="bank">Chuyển khoản Ngân hàng</option>
                      </select>
                    </div>
                    <div id="payment-qr-container" class="hidden bg-slate-50 border border-slate-200 rounded-xl p-4 text-center mt-2">
                      <p class="text-[17.5px] leading-[25px] text-slate-600 mb-3 font-medium" id="payment-qr-instruction">
                        Quét mã QR để thanh toán
                      </p>
                      <div id="payment-logo-container" class="mb-3 flex justify-center"></div>
                      <img id="payment-qr-image" src="https://via.placeholder.com/200x200.png?text=QR+Code" alt="QR Code" class="mx-auto rounded-lg shadow-sm border border-slate-200 w-32 h-32 md:w-40 md:h-40 object-contain">
                      <p class="text-[15px] leading-[20px] text-slate-500 mt-3 font-medium">
                        Nội dung chuyển khoản:
                        <span id="payment-transfer-content" class="text-primary font-bold">...</span>
                      </p>
                      <button type="button" id="btn-confirm-payment" onclick="confirmPayment()" class="mt-4 px-4 py-2 w-full bg-slate-800 lg:hover:bg-slate-700 text-white rounded-lg text-[17.5px] leading-[25px] font-bold transition-all lg:hover:shadow-md lg:hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center">
                        Xác nhận đã thanh toán
                      </button>
                    </div>
                    <button type="button" onclick="submitOrder(event)" id="btn-submit-order" disabled="" class="w-full mt-2 bg-orange-500 lg:hover:bg-orange-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-bold text-[22.5px] leading-[35px] shadow-md transition-all lg:hover:shadow-lg lg:hover:-translate-y-1 active:scale-[0.98] flex justify-center items-center gap-2">
                      Xác nhận đặt hàng <i class="fa-solid fa-arrow-right"></i>
                    </button>
                    <button type="button" id="btn-track-order" onclick="switchView('tracking')" class="w-full mt-3 bg-white lg:hover:bg-slate-50 text-indigo-600 border border-indigo-200 py-3.5 rounded-xl font-bold text-[22.5px] leading-[35px] shadow-sm transition-all lg:hover:shadow-md lg:hover:-translate-y-1 active:scale-[0.98] flex justify-center items-center gap-2 hidden">
                      <i class="fa-solid fa-map-location-dot"></i> Theo dõi đơn
                      hàng
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- Map Modal -->
          <div id="map-modal" class="fixed inset-0 z-[200] bg-slate-900/60 backdrop-blur-sm hidden items-center justify-center p-4">
            <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col">
              <div class="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 class="font-bold text-slate-800">
                  <i class="fa-solid fa-map-location-dot text-indigo-500 mr-2"></i>Chọn vị trí giao hàng
                </h3>
                <button type="button" onclick="closeMapModal()" class="text-slate-400 hover:text-slate-600">
                  <i class="fa-solid fa-times text-[25px] leading-[35px]"></i>
                </button>
              </div>
              <div class="p-0 border-b border-slate-100 relative">
                <div id="leaflet-map" class="w-full h-[400px] bg-slate-100 z-10"></div>
              </div>
              <div class="p-4 bg-slate-50 flex justify-between items-center gap-3">
                <div class="text-[15px] leading-[20px] text-slate-500">
                  <i class="fa-solid fa-circle-info mr-1"></i> Di chuyển để chọn
                  vị trí chính xác
                </div>
                <div class="flex items-center gap-2">
                  <button type="button" onclick="closeMapModal()" class="px-4 py-2 rounded-lg font-semibold text-slate-600 bg-white border border-slate-200">
                    Hủy
                  </button>
                  <button type="button" onclick="confirmMapLocation()" class="px-4 py-2 rounded-lg font-bold text-white bg-indigo-500 hover:bg-indigo-600 flex items-center gap-2">
                    <i class="fa-solid fa-check"></i> Chọn điểm này
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Success Modal -->
          <div id="order-success-modal" class="fixed inset-0 z-[200] bg-white/95 backdrop-blur-sm flex-col items-center justify-center p-6 text-center hidden animate-fade-in">
            <div class="w-48 h-48 mb-6 relative mx-auto drop-shadow-xl animate-bounce">
              <img id="order-success-mascot-img" class="w-full h-full object-contain hidden">
              <div id="order-success-mascot-svg" class="w-full h-full"></div>
            </div>
            <h3 class="text-[37.5px] leading-[45px] font-black text-emerald-600 mb-2">
              Đặt hàng thành công!
            </h3>
            <p class="text-slate-600 font-medium text-[22.5px] leading-[35px]">
              Đơn hàng của bạn đang được xử lý. Cảm ơn bạn!
            </p>
          </div>
        </div>
      </div>

      <!-- View: CUSTOMER PROFILE -->
      <div id="view-customer-profile" class="hidden animate-fade-in pb-12 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div id="customer-profile-wrapper" class="w-full transition-all duration-300 relative mx-auto max-w-lg md:max-w-2xl bg-white dark:bg-slate-800 min-h-screen shadow-xl shadow-slate-200/50 dark:shadow-none pt-0 overflow-hidden">
          <!-- Trust Panel Background -->
          <div class="w-full relative bg-[#043F2E] overflow-hidden flex flex-row items-center p-4 md:p-8 pb-16 md:pb-20 text-left rounded-b-[40px] shadow-2xl z-0 reveal-scale">
            <!-- Background pattern/glow -->
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent opacity-80 pointer-events-none"></div>

            <button onclick="switchView('landing')" class="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md shadow-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors z-30 border border-white/10">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button onclick="toggleTheme()" class="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md shadow-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10" title="Chuyển đổi giao diện">
              <i class="fa-solid fa-moon dark:hidden"></i>
              <i class="fa-solid fa-sun hidden dark:block"></i>
            </button>

            <div class="relative z-10 w-[60%] lg:w-[55%] pr-2 md:pr-6 mb-0 mt-6">
              <!-- Badge -->
              <div class="inline-flex items-center gap-3 px-6 md:px-8 py-2 md:py-3 rounded-full bg-emerald-900/50 border-[3px] border-emerald-700/50 text-emerald-300 text-[15px] md:text-[17.5px] leading-[25px] font-bold mb-3 md:mb-5 uppercase tracking-wider backdrop-blur-sm shadow-lg">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <span id="user-trust-brand-name-2">Nuri Kitchen</span>
                <div class="w-10 h-10 shrink-0 flex items-center justify-center relative ml-3">
                  <img id="trust-banner-mascot-2-img" class="hidden w-full h-full object-contain drop-shadow-md" src="">
                  <div id="trust-banner-mascot-2-svg" class="w-full h-full"></div>
                </div>
              </div>

              <!-- Heading -->
              <h1 class="text-[28px] sm:text-[25px] leading-[35px] md:text-[37.5px] leading-[45px] lg:text-[45px] leading-[50px] font-black text-white mb-2 md:mb-3 leading-tight tracking-tight" id="user-trust-title-2">
                Khám phá dinh dưỡng<br class="hidden md:block">
                cá nhân hóa
              </h1>

              <!-- Subheading -->
              <p class="text-emerald-100/80 text-[15px] sm:text-[18px] md:text-[20px] mb-3 md:mb-5 max-w-lg leading-[1.4] md:leading-relaxed" id="user-trust-subtitle-2">
                Nuri phân tích chỉ số cơ thể và đề xuất thực đơn phù hợp<span class="hidden sm:inline">
                  với mục tiêu của bạn</span>
                chỉ trong 4 bước đơn giản.
              </p>

              <!-- Trust indicators -->
              <div class="flex flex-col items-start gap-1 md:gap-2 mb-3 md:mb-6 hidden sm:flex">
                <div class="flex -space-x-1.5 md:-space-x-2">
                  <img class="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=11" alt="Avatar">
                  <img class="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=12" alt="Avatar">
                  <img class="hidden sm:block w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=33" alt="Avatar">
                  <img class="hidden md:block w-8 h-8 rounded-full border-2 border-[#043F2E] object-cover" src="https://i.pravatar.cc/100?img=14" alt="Avatar">
                </div>
                <div class="text-emerald-200/90 text-[14px] md:text-[18px] font-medium leading-[1.1] md:leading-normal">
                  <span class="text-white font-bold text-[15px] md:text-[19px]" id="user-trust-count-2">5.000+</span>
                  <span id="user-trust-text-2">khách đã tin tưởng</span>
                </div>
              </div>

              <!-- CTA and notice -->
              <div class="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4">
                <button onclick="
                    switchView('landing');
                    setTimeout(
                      () =>
                        document
                          .getElementById('diet-analysis-form')
                          .scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          }),
                      100,
                    );
                  " class="inline-flex items-center justify-center px-3 md:px-5 py-2 md:py-2.5 bg-[#059669] text-white rounded-lg font-bold text-[15px] sm:text-[18px] md:text-[20px] transition-all duration-300 shadow-[0_4px_10px_rgba(5,150,105,0.3)] lg:hover:-translate-y-0.5 active:scale-[0.98] lg:hover:shadow-md lg:hover:bg-[#047857] whitespace-nowrap animate-glow-pulse-emerald relative z-20">
                  <span id="user-trust-cta-2">Bắt đầu phân tích</span>
                  <i class="fa-solid fa-arrow-right ml-1.5 md:ml-2 text-[14px] md:text-[18px] text-white ml-1.5"></i>
                </button>
                <div class="flex items-center gap-2 md:gap-3 text-emerald-200/70 text-[15px] md:text-[17.5px] leading-[25px]">
                  <i class="fa-solid fa-chevron-right hidden md:block text-emerald-600"></i>
                  <div class="flex flex-col gap-0.5">
                    <span class="text-white font-semibold" id="user-trust-free-2">Miễn phí 100%</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Image Area -->
            <div class="relative z-10 w-[40%] lg:w-[45%] flex justify-center items-center h-[160px] md:h-auto min-h-[0] md:min-h-[220px]">
              <div class="relative w-[130%] md:w-full max-w-[320px] aspect-square flex items-center justify-center translate-x-[10%] md:translate-x-0">
                <!-- Concentric circles -->
                <div class="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 scale-[0.8] md:scale-[0.85] pointer-events-none animate-spin-slow"></div>
                <div class="absolute inset-0 rounded-full border border-dotted border-emerald-500/20 scale-[1.05] md:scale-[1.1] pointer-events-none animate-[spin_25s_linear_infinite_reverse]"></div>
                <div class="absolute inset-0 rounded-full border border-dashed border-emerald-500/10 scale-[1.3] md:scale-[1.35] pointer-events-none animate-spin-slow"></div>

                <!-- Food Images -->
                <div id="user-trust-top-container-2" class="absolute top-[5%] right-[5%] md:right-[0%] w-[70%] h-[70%] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] md:shadow-xl border-[2px] md:border-[4px] border-[#043F2E] overflow-hidden z-20 animate-float">
                  <img id="user-banner-img-trust-top-2" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Healthy Food" class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700">
                </div>
                <div id="user-trust-bottom-container-2" class="absolute bottom-[5%] left-[5%] md:left-[5%] w-[50%] h-[50%] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] md:shadow-xl border-[2px] md:border-[4px] border-[#043F2E] overflow-hidden z-30 animate-float-delayed">
                  <img id="user-banner-img-trust-bottom-2" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Salad" class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700">
                </div>

                <!-- Central PNG Sequence Image with manual scale -->
                <div id="user-trust-center-container-2" class="absolute w-[60%] h-[60%] flex items-center justify-center z-25 animate-float">
                  <div id="user-trust-center-scale-wrapper-2" class="w-full h-full transition-transform duration-300" style="transform: scale(1)">
                    <img id="user-banner-img-trust-center-2" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Center Image" class="w-full h-full object-contain transform hover:scale-110 transition-transform duration-700">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="px-6 py-4 flex flex-col items-center relative z-10 -mt-20">
            <div class="relative mb-4 group cursor-pointer" onclick="triggerConfetti()">
              <img id="profile-avatar-img" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" class="hidden w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white dark:border-slate-800 ring-4 ring-emerald-50 dark:ring-emerald-900/30 relative z-10 transition-transform group-hover:scale-105" alt="Avatar">
              <div id="profile-avatar-placeholder" class="w-28 h-28 md:w-32 md:h-32 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center text-[45px] leading-[50px] shadow-lg border-4 border-white dark:border-slate-800 ring-4 ring-emerald-50 dark:ring-emerald-900/30 relative z-10 transition-transform group-hover:scale-105">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity"></div>
            </div>
            <div class="flex items-center gap-2 mb-1">
              <h2 class="text-[30px] leading-[40px] font-bold text-slate-800 dark:text-white" id="profile-name">
                ...
              </h2>
              <button onclick="openEditProfileModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <i class="fa-solid fa-pen text-[15px] leading-[20px]"></i>
              </button>
            </div>
            <button onclick="openCustomerSelfEdit()" class="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-[17.5px] leading-[25px] font-medium hover:bg-slate-50 transition-colors mb-6 shadow-sm">
              <i class="fa-solid fa-address-card text-emerald-600 text-[15px] leading-[20px]"></i>
              <span id="profile-phone">Thông tin cá nhân</span>
            </button>

            <!-- 5. Gamification - Streak -->
            <div id="profile-streak-container" class="w-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-4 mb-4 shadow-sm flex items-center justify-between reveal">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[30px] leading-[40px] animate-bounce">
                  🔥
                </div>
                <div>
                  <h4 class="font-black text-orange-600" id="profile-streak-title">
                    Chuỗi duy trì: 7 ngày
                  </h4>
                  <p class="text-[18px] text-orange-500 font-medium">
                    Tiếp tục ăn lành mạnh để không mất chuỗi nhé!
                  </p>
                </div>
              </div>
              <button id="profile-streak-share-btn" onclick="openShareModal()" class="px-3 py-1.5 bg-orange-500 text-white text-[15px] leading-[20px] font-bold rounded-lg shadow-sm hover:bg-orange-600 transition-colors">
                Khoe ngay
              </button>
            </div>

            <!-- Data Analysis Button -->
            <button id="personal-analysis-btn" onclick="startProfileAnalysis()" class="w-full mb-6 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl p-4 flex items-center justify-between group transition-all reveal">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div class="text-left">
                  <h4 class="font-bold text-emerald-800 text-[17.5px] leading-[25px]">
                    Phân tích dữ liệu cá nhân
                  </h4>
                  <p class="text-[18px] text-emerald-600/80 font-medium">
                    Cập nhật chỉ số để có lộ trình chính xác nhất
                  </p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right text-emerald-400 group-hover:translate-x-1 transition-transform"></i>
            </button>

            <!-- 2. Nutrition Dashboard -->
            <div class="w-full bg-white border border-slate-100 rounded-2xl p-5 mb-6 shadow-sm reveal">
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold text-slate-800 flex items-center gap-2">
                  <i class="fa-solid fa-chart-pie text-emerald-600"></i> Dinh
                  dưỡng hôm nay
                </h3>
                <button onclick="openAddCalorieModal()" class="px-3 py-1.5 flex items-center gap-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors text-[15px] leading-[20px] font-semibold">
                  <i class="fa-solid fa-plus text-[15px]"></i> Nhập thêm
                </button>
              </div>
              <div class="grid grid-cols-4 gap-2 mb-6">
                <!-- Calories -->
                <div class="flex flex-col items-center">
                  <div class="relative w-14 h-14 mb-2">
                    <svg class="w-14 h-14 transform -rotate-90">
                      <circle cx="28" cy="28" r="24" stroke="currentColor" stroke-width="4" fill="transparent" class="text-slate-100"></circle>
                      <circle id="dash-calo-circle" cx="28" cy="28" r="24" stroke="currentColor" stroke-width="4" fill="transparent" stroke-dasharray="150.7" stroke-dashoffset="30" class="text-amber-500 transition-all duration-1000"></circle>
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center flex-col">
                      <span class="text-[18px] font-bold text-amber-500" id="dash-calo-pct">80%</span>
                    </div>
                  </div>
                  <p class="text-[15px] text-slate-500 font-medium">
                    Calo <i class="fa-solid fa-fire text-amber-500"></i>
                  </p>
                  <p class="text-[18px] font-bold text-slate-800 whitespace-nowrap" id="dash-calo">
                    1200<span class="text-[14px] text-slate-400 font-normal" id="dash-calo-target">/1500 kcal</span>
                  </p>
                </div>
                <!-- Protein -->
                <div class="flex flex-col items-center">
                  <div class="relative w-14 h-14 mb-2">
                    <svg class="w-14 h-14 transform -rotate-90">
                      <circle cx="28" cy="28" r="24" stroke="currentColor" stroke-width="4" fill="transparent" class="text-slate-100"></circle>
                      <circle id="dash-pro-circle" cx="28" cy="28" r="24" stroke="currentColor" stroke-width="4" fill="transparent" stroke-dasharray="150.7" stroke-dashoffset="60" class="text-red-400 transition-all duration-1000"></circle>
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <span class="text-[18px] font-bold text-red-400" id="dash-pro-pct">77%</span>
                    </div>
                  </div>
                  <p class="text-[15px] text-slate-500 font-medium">
                    Đạm <i class="fa-solid fa-drumstick-bite text-red-400"></i>
                  </p>
                  <p class="text-[18px] font-bold text-slate-800 whitespace-nowrap" id="dash-pro">
                    85<span class="text-[14px] text-slate-400 font-normal" id="dash-pro-target">/110g</span>
                  </p>
                </div>
                <!-- Carb -->
                <div class="flex flex-col items-center">
                  <div class="relative w-14 h-14 mb-2">
                    <svg class="w-14 h-14 transform -rotate-90">
                      <circle cx="28" cy="28" r="24" stroke="currentColor" stroke-width="4" fill="transparent" class="text-slate-100"></circle>
                      <circle id="dash-carb-circle" cx="28" cy="28" r="24" stroke="currentColor" stroke-width="4" fill="transparent" stroke-dasharray="150.7" stroke-dashoffset="90" class="text-blue-400 transition-all duration-1000"></circle>
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <span class="text-[18px] font-bold text-blue-400" id="dash-carb-pct">72%</span>
                    </div>
                  </div>
                  <p class="text-[15px] text-slate-500 font-medium">
                    Tinh bột <i class="fa-solid fa-bowl-rice text-blue-400"></i>
                  </p>
                  <p class="text-[18px] font-bold text-slate-800 whitespace-nowrap" id="dash-carb">
                    130<span class="text-[14px] text-slate-400 font-normal" id="dash-carb-target">/180g</span>
                  </p>
                </div>
                <!-- Fat -->
                <div class="flex flex-col items-center">
                  <div class="relative w-14 h-14 mb-2">
                    <svg class="w-14 h-14 transform -rotate-90">
                      <circle cx="28" cy="28" r="24" stroke="currentColor" stroke-width="4" fill="transparent" class="text-slate-100"></circle>
                      <circle id="dash-fat-circle" cx="28" cy="28" r="24" stroke="currentColor" stroke-width="4" fill="transparent" stroke-dasharray="150.7" stroke-dashoffset="120" class="text-yellow-400 transition-all duration-1000"></circle>
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <span class="text-[18px] font-bold text-yellow-500" id="dash-fat-pct">80%</span>
                    </div>
                  </div>
                  <p class="text-[15px] text-slate-500 font-medium">
                    Béo <i class="fa-solid fa-droplet text-yellow-400"></i>
                  </p>
                  <p class="text-[18px] font-bold text-slate-800 whitespace-nowrap" id="dash-fat">
                    40<span class="text-[14px] text-slate-400 font-normal" id="dash-fat-target">/50g</span>
                  </p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                <div class="flex items-center justify-between mb-6">
                  <p class="text-[15px] leading-[20px] font-bold text-slate-700">
                    Calo 7 ngày qua
                  </p>
                  <div class="flex flex-wrap items-center gap-2 justify-end max-w-[60%]">
                    <p class="text-[14px] text-slate-500 font-medium flex items-center">
                      <span class="inline-block w-2 h-2 rounded bg-amber-400 mr-1"></span>Nhập thêm
                    </p>
                    <p class="text-[14px] text-slate-500 font-medium flex items-center">
                      <span class="inline-block w-2 h-2 rounded bg-emerald-400 mr-1"></span>Gói ăn
                    </p>
                    <p class="text-[14px] text-slate-500 font-medium flex items-center" id="dash-bar-target-label">
                      <span class="inline-block w-4 h-[1px] border-b-2 border-dashed border-emerald-500 mr-1"></span>Mục tiêu (1500)
                    </p>
                  </div>
                </div>
                <div class="relative pt-2">
                  <!-- Target Line (1500 / 2000 = 75% from bottom => top is 25%) -->
                  <div class="absolute top-[25%] left-0 right-0 border-b-2 border-dashed border-emerald-500 z-0">
                    <span id="dash-bar-target-number" class="absolute -top-5 right-0 text-[15px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded shadow-sm border border-emerald-100">1500</span>
                  </div>

                  <div class="flex items-end justify-between h-32 gap-1.5 relative z-10 px-1">
                    <!-- T2 -->
                    <div id="bar-t2" data-base="700" data-extra="0" class="w-full h-[35%] flex flex-col justify-end gap-[1px] relative group cursor-pointer transition-all duration-500" style="height: 35%" onclick="openDayDetailModal(this.id, 'Thứ 2')">
                      <span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[14px] font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 shadow-sm rounded bar-tooltip">700</span>
                      <div class="w-full bg-amber-400 rounded-t hidden bar-extra"></div>
                      <div class="w-full bg-emerald-400 rounded-t rounded-b h-full bar-base transition-all"></div>
                    </div>

                    <!-- T3 -->
                    <div id="bar-t3" data-base="900" data-extra="0" class="w-full h-[45%] flex flex-col justify-end gap-[1px] relative group cursor-pointer transition-all duration-500" style="height: 45%" onclick="openDayDetailModal(this.id, 'Thứ 3')">
                      <span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[14px] font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 shadow-sm rounded bar-tooltip">900</span>
                      <div class="w-full bg-amber-400 rounded-t hidden bar-extra"></div>
                      <div class="w-full bg-emerald-400 rounded-t rounded-b h-full bar-base transition-all"></div>
                    </div>

                    <!-- T4 -->
                    <div id="bar-t4" data-base="1200" data-extra="0" class="w-full h-[60%] flex flex-col justify-end gap-[1px] relative group cursor-pointer transition-all duration-500" style="height: 60%" onclick="openDayDetailModal(this.id, 'Thứ 4')">
                      <span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[14px] font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 shadow-sm rounded bar-tooltip">1200</span>
                      <div class="w-full bg-amber-400 rounded-t hidden bar-extra"></div>
                      <div class="w-full bg-emerald-400 rounded-t rounded-b h-full bar-base transition-all"></div>
                    </div>

                    <!-- T5 -->
                    <div id="bar-t5" data-base="1200" data-extra="0" class="w-full h-[60%] flex flex-col justify-end gap-[1px] relative group cursor-pointer transition-all duration-500" style="height: 60%" onclick="openDayDetailModal(this.id, 'Thứ 5')">
                      <span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[14px] font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 shadow-sm rounded bar-tooltip">1200</span>
                      <div class="w-full bg-amber-400 rounded-t hidden bar-extra"></div>
                      <div class="w-full bg-emerald-400 rounded-t rounded-b h-full bar-base transition-all"></div>
                    </div>

                    <!-- T6 -->
                    <div id="bar-t6" data-base="1000" data-extra="0" class="w-full h-[50%] flex flex-col justify-end gap-[1px] relative group cursor-pointer transition-all duration-500" style="height: 50%" onclick="openDayDetailModal(this.id, 'Thứ 6')">
                      <span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[14px] font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 shadow-sm rounded bar-tooltip">1000</span>
                      <div class="w-full bg-amber-400 rounded-t hidden bar-extra"></div>
                      <div class="w-full bg-emerald-400 rounded-t rounded-b h-full bar-base transition-all"></div>
                    </div>

                    <!-- T7: Ăn tự do -->
                    <div id="bar-t7" data-base="0" data-extra="0" class="w-full h-[30%] flex flex-col justify-end gap-[1px] relative group cursor-pointer items-center transition-all duration-500" style="height: 30%" onclick="openDayDetailModal(this.id, 'Thứ 7')">
                      <span class="absolute -top-7 left-1/2 -translate-x-1/2 text-[14px] font-bold text-amber-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 shadow-sm z-20 bar-tooltip">Tự do</span>
                      <div class="w-full bg-amber-400 rounded-t hidden bar-extra z-10"></div>
                      <div class="w-full h-full bg-gradient-to-t from-amber-200 to-amber-100 rounded-b border-t border-amber-400 flex items-center justify-center relative overflow-hidden bar-base rounded-t transition-all">
                        <i class="fa-solid fa-star text-amber-400/50 text-[15px] absolute top-2"></i>
                        <i class="fa-solid fa-burger text-amber-400/40 text-[15px] leading-[20px] absolute bottom-2 left-0 -rotate-12"></i>
                      </div>
                    </div>

                    <!-- CN: Ăn tự do -->
                    <div id="bar-cn" data-base="0" data-extra="0" class="w-full h-[30%] flex flex-col justify-end gap-[1px] relative group cursor-pointer items-center transition-all duration-500" style="height: 30%" onclick="openDayDetailModal(this.id, 'Chủ nhật')">
                      <span class="absolute -top-7 left-1/2 -translate-x-1/2 text-[14px] font-bold text-amber-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 shadow-sm z-20 bar-tooltip">Tự do</span>
                      <div class="w-full bg-amber-400 rounded-t hidden bar-extra z-10"></div>
                      <div class="w-full h-full bg-gradient-to-t from-amber-200 to-amber-100 rounded-b border-t border-amber-400 flex items-center justify-center relative overflow-hidden bar-base rounded-t transition-all">
                        <i class="fa-solid fa-star text-amber-400/50 text-[15px] absolute top-2"></i>
                        <i class="fa-solid fa-pizza-slice text-amber-400/40 text-[15px] leading-[20px] absolute bottom-4 right-0 rotate-12"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between text-[15px] text-slate-500 mt-2 font-medium border-t border-slate-100 pt-2 px-1">
                    <span class="w-full text-center">T2</span>
                    <span class="w-full text-center">T3</span>
                    <span class="w-full text-center">T4</span>
                    <span class="w-full text-center">T5</span>
                    <span class="w-full text-center">T6</span>
                    <span class="w-full text-center text-amber-500 font-bold bg-amber-50 rounded mx-0.5">T7</span>
                    <span class="w-full text-center text-amber-500 font-bold bg-amber-50 rounded mx-0.5">CN</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 1. Gamification Progress -->
            <div class="w-full bg-slate-50 rounded-2xl p-5 mb-6 border border-slate-100 shadow-sm relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-[50px] opacity-10"></div>
              <div class="flex justify-between items-center mb-2 relative z-10">
                <div class="flex-1">
                  <p class="text-[15px] leading-[20px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Hạng thành viên
                  </p>
                  <p class="text-[30px] leading-[40px] font-black text-amber-500 flex items-center gap-2" id="profile-rank">
                    Hạt mầm
                  </p>
                </div>

                <!-- Main mascot in center -->
                <div id="rank-mascot-container" class="w-16 h-16 shrink-0 flex items-center justify-center relative transition-all duration-500">
                  <img id="rank-mascot-main-img" class="hidden w-full h-full object-contain drop-shadow-md" src="">
                  <div id="rank-mascot-main-svg" class="w-full h-full"></div>
                </div>

                <div class="text-right flex-1">
                  <p class="text-[15px] leading-[20px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Điểm tích lũy
                  </p>
                  <p class="text-[30px] leading-[40px] font-bold text-emerald-600" id="profile-points">
                    0
                  </p>
                </div>
              </div>

              <div class="relative z-10 mt-4">
                <div class="flex justify-between text-[15px] leading-[20px] text-slate-500 mb-1 font-medium">
                  <span id="current-rank-label">Hạt mầm</span>
                  <span id="next-rank-label">Mầm cây</span>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-2.5 relative overflow-hidden">
                  <div id="rank-progress-bar" class="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2.5 rounded-full transition-all duration-1000 relative overflow-hidden" style="width: 0%">
                    <!-- Shimmer overlay -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center mt-2 relative z-10">
                  <div class="w-10 h-10 shrink-0 flex items-center justify-center relative">
                    <img id="rank-mascot-current-small-img" class="hidden w-full h-full object-contain drop-shadow-sm" src="">
                    <div id="rank-mascot-current-small-svg" class="w-full h-full"></div>
                  </div>

                  <p class="text-[15px] leading-[20px] text-slate-500 text-center flex-1 mx-2" id="rank-hint-text">
                    Cần thêm điểm để lên hạng
                  </p>

                  <div class="w-10 h-10 shrink-0 flex items-center justify-center relative">
                    <img id="rank-mascot-next-small-img" class="hidden w-full h-full object-contain drop-shadow-sm" src="">
                    <div id="rank-mascot-next-small-svg" class="w-full h-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Daily Quests Card -->
            <div class="w-full bg-white rounded-2xl p-5 mb-6 border border-slate-100 shadow-sm relative overflow-hidden">
              <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-50">
                <h3 class="font-bold text-slate-800 text-[17.5px] leading-[25px] flex items-center gap-2">
                  <i class="fa-solid fa-clipboard-list text-emerald-500"></i>
                  Nhiệm vụ tích lũy điểm
                </h3>
                <span class="text-[15px] bg-emerald-50 text-emerald-700 font-extrabold px-2 py-0.5 rounded-full">Hàng ngày &amp; Tuần</span>
              </div>
              <div id="daily-quests-list" class="space-y-3">
                <!-- Dynamically populated in JavaScript -->
              </div>
            </div>

            <!-- 2. Daily Tip -->
            <div class="w-full bg-blue-50/50 rounded-2xl p-4 mb-6 border border-blue-100 flex gap-4 items-start relative overflow-hidden group">
              <div class="absolute -right-4 -top-4 text-blue-100 text-[75px] leading-[75px] opacity-50 group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-quote-right"></i>
              </div>
              <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center shrink-0 mt-1 relative z-10">
                <i class="fa-solid fa-lightbulb animate-pulse"></i>
              </div>
              <div class="relative z-10">
                <p class="text-[15px] leading-[20px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                  Mẹo dinh dưỡng hôm nay
                </p>
                <p class="text-[17.5px] leading-[25px] text-slate-700 italic" id="daily-tip">...</p>
              </div>
            </div>

            <!-- 2.5 Personal Mascot -->
            <div class="mb-4 text-center">
              <button type="button" onclick="openMascotScheduleModal()" class="w-full md:w-auto bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[17.5px] leading-[25px] font-semibold px-4 py-2.5 rounded-xl transition-colors border border-emerald-200">
                <i class="fa-solid fa-calendar-day mr-1"></i>
                <span>Thay đổi lịch trình</span>
              </button>
            </div>
            <div class="flex justify-center items-end gap-4">
              <div class="flex flex-col items-center">
                <span id="mascot-time-prev" class="text-[15px] font-bold text-slate-400 mb-2"></span>
                <div id="personal-mascot-prev-svg" class="w-24 h-24 flex items-center justify-center"></div>
                <img id="personal-mascot-prev" class="w-24 h-24 object-contain opacity-50 transition-all duration-300 hidden" alt="Mascot trước">
              </div>
              <div class="flex flex-col items-center">
                <span id="mascot-time-curr" class="text-[15px] leading-[20px] font-bold text-emerald-600 mb-2"></span>
                <div id="personal-mascot-img-svg" class="w-[384px] h-[384px] flex items-center justify-center"></div>
                <img id="personal-mascot-img" class="w-[384px] h-[384px] object-contain drop-shadow-xl transition-all duration-300 hidden" alt="Mascot hiện tại">
              </div>
              <div class="flex flex-col items-center">
                <span id="mascot-time-next" class="text-[15px] font-bold text-slate-400 mb-2"></span>
                <div id="personal-mascot-next-svg" class="w-24 h-24 flex items-center justify-center"></div>
                <img id="personal-mascot-next" class="w-24 h-24 object-contain opacity-50 transition-all duration-300 hidden" alt="Mascot tiếp theo">
              </div>
            </div>
            <div class="text-center mb-6 mt-4">
              <h3 id="mascot-schedule-title" class="text-[26px] font-extrabold text-emerald-700 tracking-tight">
                Lịch trình hôm nay
              </h3>
            </div>

            <!-- 3. Health Stats / BMI -->
            <div class="w-full bg-white border border-slate-100 rounded-2xl p-5 mb-6 shadow-sm reveal">
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold text-slate-800 flex items-center gap-2">
                  <i class="fa-solid fa-heart-pulse text-rose-500"></i> Chỉ số
                  cơ thể
                </h3>
              </div>

              <div id="bmi-display" class="grid grid-cols-2 gap-3 mb-4 transition-all">
                <div class="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                  <p class="text-[15px] leading-[20px] text-slate-400 font-medium mb-1">
                    Chiều cao
                  </p>
                  <p class="font-bold text-slate-700">
                    <span id="profile-height">--</span> cm
                  </p>
                </div>
                <div class="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                  <p class="text-[15px] leading-[20px] text-slate-400 font-medium mb-1">
                    Cân nặng
                  </p>
                  <p class="font-bold text-slate-700">
                    <span id="profile-weight">--</span> kg
                  </p>
                </div>
              </div>

              <div class="bg-emerald-50 rounded-xl p-3 flex items-center justify-between border border-emerald-100">
                <div>
                  <p class="text-[15px] leading-[20px] font-bold text-emerald-600 uppercase mb-0.5">
                    BMI của bạn
                  </p>
                  <p class="text-[22.5px] leading-[35px] font-black text-slate-800" id="profile-bmi">
                    --
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-[15px] leading-[20px] text-slate-500 mb-1">Đánh giá</p>
                  <span id="profile-bmi-status" class="px-2 py-1 rounded-md bg-slate-200 text-slate-600 text-[15px] leading-[20px] font-bold">Chưa có dữ liệu</span>
                </div>
              </div>
            </div>

            <div class="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
              <div class="p-4 bg-slate-50 border-b border-slate-200">
                <h3 class="font-bold text-slate-800 flex items-center gap-2">
                  <i class="fa-solid fa-box-open text-emerald-600"></i> Gói đăng
                  ký hiện tại
                </h3>
              </div>
              <div class="p-4" id="profile-subscription">
                <!-- Loaded via JS -->
              </div>
            </div>

            <div id="profile-suggestions" class="w-full mb-6"></div>

            <div class="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div class="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <h3 class="font-bold text-slate-800 flex items-center gap-2">
                  <i class="fa-solid fa-calendar-week text-emerald-600"></i>
                  Lịch ăn uống (Meal Calendar)
                </h3>
                <button onclick="switchView('tracking')" class="text-[17.5px] leading-[25px] text-emerald-600 font-medium hover:text-emerald-700">
                  Xem tiến độ đơn
                </button>
              </div>
              <div class="p-4" id="profile-meal-calendar">
                <!-- Timeline will be generated by JS -->
                <div class="relative border-l-2 border-emerald-100 ml-3 md:ml-4 flex flex-col gap-6" id="meal-timeline-container">
                  <!-- JS Content -->
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-col gap-3 w-full">
              <button onclick="openSwitchAccountModal()" class="text-emerald-600 font-semibold px-4 py-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 rounded-xl transition-colors w-full flex items-center justify-center gap-2">
                <i class="fa-solid fa-users"></i> Chuyển đổi tài khoản
              </button>
              <button onclick="logoutCustomer()" class="text-red-500 font-semibold px-4 py-3 hover:bg-red-50 rounded-xl transition-colors w-full flex items-center justify-center gap-2">
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View: TRACKING -->
      <div id="view-tracking" class="hidden animate-fade-in pb-12 bg-slate-50">
        <div id="tracking-content-wrapper" class="w-full transition-all duration-300 relative">
          <!-- Toggle View Mode -->
          <div class="absolute top-2 right-2 z-[100] hidden md:flex justify-end pointer-events-none" id="tracking-view-toggle">
            <div class="bg-slate-200/80 p-0.5 rounded-lg inline-flex shadow-sm backdrop-blur-md relative pointer-events-auto scale-90 sm:scale-100 origin-top-right">
              <button onclick="setTrackingViewMode('desktop')" id="btn-tracking-view-desktop" class="px-3 py-1.5 rounded-md text-[20px] leading-[30px] font-bold bg-white text-slate-800 shadow-sm transition-all flex items-center justify-center" title="Giao diện máy tính">
                <i class="fa-solid fa-desktop"></i>
              </button>
              <button onclick="setTrackingViewMode('mobile')" id="btn-tracking-view-mobile" class="px-3 py-1.5 rounded-md text-[20px] leading-[30px] font-medium text-slate-500 hover:text-slate-800 hover:bg-white/50 transition-all flex items-center justify-center" title="Giao diện điện thoại">
                <i class="fa-solid fa-mobile-screen"></i>
              </button>
            </div>
          </div>
          <div class="sim-scrollable w-full overflow-x-clip px-4 md:px-0">
            <div class="mb-6 mt-2">
              <button onclick="switchView('order-form')" class="text-slate-500 hover:text-slate-800 text-[17.5px] leading-[25px] font-medium mb-4 inline-flex items-center transition-colors">
                <i class="fa-solid fa-arrow-left mr-2"></i> Quay lại Đặt hàng
              </button>
              <h1 class="text-[30px] leading-[40px] font-bold text-slate-900">
                Theo dõi đơn hàng
              </h1>
              <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
                Xem trạng thái và thông tin giao hàng
              </p>
            </div>

            <div id="customer-tracking-list" class="space-y-6">
              <!-- Orders will be generated here -->
            </div>
          </div>
        </div>
      </div>

      <!-- View: ORDERS & SHIPPERS -->
      <div id="view-orders" class="hidden animate-fade-in pb-12">
        <div class="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <div>
            <h1 class="text-[30px] leading-[40px] font-bold text-slate-900">
              Điều phối &amp; Đơn hàng
            </h1>
            <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
              Theo dõi trạng thái đơn hàng và phân công giao hàng (Shipper)
            </p>
          </div>
        </div>

        <div class="flex overflow-x-auto hide-scrollbar gap-2 mb-6 border-b border-slate-200 pb-2">
          <button id="tab-btn-orders-list" onclick="switchOrderTab('orders-list')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-bold transition-all bg-orange-100 text-orange-800 border-b-2 border-orange-500">
            <i class="fa-solid fa-receipt mr-2"></i> Quản lý Đơn hàng
          </button>
          <button id="tab-btn-shippers" onclick="switchOrderTab('shippers')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-medium transition-all bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-b-2 border-transparent">
            <i class="fa-solid fa-motorcycle mr-2"></i> Quản lý Shipper
          </button>
          <button id="tab-btn-map" onclick="switchOrderTab('map')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-medium transition-all bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-b-2 border-transparent">
            <i class="fa-solid fa-map mr-2"></i> Bản đồ Mật độ
          </button>
          <button id="tab-btn-kitchen" onclick="switchOrderTab('kitchen')" class="whitespace-nowrap px-5 py-2.5 rounded-t-lg text-[17.5px] leading-[25px] font-medium transition-all bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-b-2 border-transparent">
            <i class="fa-solid fa-fire-burner mr-2"></i> Quản lý Bếp
          </button>
        </div>

        <!-- Tab: Orders List -->
        <div id="tab-content-orders-list" class="block animate-fade-in">
          <!-- Kitchen Workflow Stats -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-bold text-slate-800 text-[22.5px] leading-[35px] flex items-center gap-2">
                <i class="fa-solid fa-kitchen-set text-primary"></i> Kitchen
                Workflow
              </h3>
              <span class="text-[15px] leading-[20px] text-slate-500">Hệ thống điều phối bếp trung tâm</span>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-[#151a26] rounded-xl p-5 shadow-sm border border-slate-700/50 relative overflow-hidden">
                <div class="text-slate-400 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
                  <i class="fa-solid fa-list-ul"></i> Chờ xác nhận
                </div>
                <div class="text-[45px] leading-[50px] font-bold text-white relative z-10" id="wf-pending">
                  0
                </div>
                <i class="fa-solid fa-list-ul absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-slate-700 opacity-20"></i>
              </div>
              <div class="bg-[#151a26] rounded-xl p-5 shadow-sm border border-amber-900/30 relative overflow-hidden">
                <div class="text-amber-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
                  <i class="fa-solid fa-fire-burner"></i> Đang chế biến
                </div>
                <div class="text-[45px] leading-[50px] font-bold text-amber-500 relative z-10" id="wf-processing">
                  0
                </div>
                <i class="fa-solid fa-fire-burner absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-amber-500 opacity-10"></i>
              </div>
              <div class="bg-[#151a26] rounded-xl p-5 shadow-sm border border-orange-900/30 relative overflow-hidden">
                <div class="text-orange-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
                  <i class="fa-solid fa-box-open"></i> Đóng gói / Sẵn sàng
                </div>
                <div class="text-[45px] leading-[50px] font-bold text-orange-500 relative z-10" id="wf-ready">
                  0
                </div>
                <i class="fa-solid fa-box-open absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-orange-500 opacity-10"></i>
              </div>
              <div class="bg-[#151a26] rounded-xl p-5 shadow-sm border border-emerald-900/30 relative overflow-hidden">
                <div class="text-emerald-500 text-[18px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 relative z-10">
                  <i class="fa-solid fa-motorcycle"></i> Đang giao
                </div>
                <div class="text-[45px] leading-[50px] font-bold text-emerald-500 relative z-10" id="wf-delivering">
                  0
                </div>
                <i class="fa-solid fa-motorcycle absolute -right-4 -bottom-4 text-[75px] leading-[75px] text-emerald-500 opacity-10"></i>
              </div>
            </div>
          </div>

          <div class="flex justify-end gap-3 mb-4 flex-wrap">
            <button onclick="openQuickOrderModal()" class="inline-flex items-center px-4 py-2.5 border border-transparent shadow-sm text-[17.5px] leading-[25px] font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] focus:outline-none transition-all cursor-pointer">
              <i class="fa-solid fa-magic mr-2"></i> Công cụ Tạo đơn tự động
            </button>
            <button onclick="switchView('order-form')" class="inline-flex items-center px-4 py-2.5 border border-transparent shadow-sm text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all cursor-pointer">
              <i class="fa-solid fa-plus mr-2"></i> Tạo đơn thủ công
            </button>
          </div>

          <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row flex-wrap gap-4">
            <div class="flex-1 min-w-[150px]">
              <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Trạng thái</label>
              <select id="filter-order-status" onchange="renderOrdersAdmin()" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                <option value="all">Tất cả trạng thái</option>
                <option value="pending">Chờ xác nhận</option>
                <option value="processing">Đang chuẩn bị</option>
                <option value="ready">Sẵn sàng giao</option>
                <option value="delivering">Đang giao</option>
                <option value="completed">Đã hoàn thành</option>
                <option value="cancelled">Đã hủy</option>
              </select>
            </div>
            <div class="flex-1 min-w-[150px]">
              <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Thời gian (Ngày)</label>
              <input type="date" id="filter-order-date" onchange="renderOrdersAdmin()" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary">
            </div>
            <div class="flex-1 min-w-[150px]">
              <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Khu vực / Phường xã</label>
              <input type="text" id="filter-order-region" oninput="renderOrdersAdmin()" placeholder="Tìm theo Phường, Quận..." class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary">
            </div>
            <div class="flex-1 min-w-[150px]">
              <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Lọc theo Shipper</label>
              <select id="filter-order-shipper" onchange="renderOrdersAdmin()" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                <option value="all">Tất cả Shipper</option>
                <option value="unassigned">-- Chưa phân công --</option>
              </select>
            </div>
            <div class="flex-1 min-w-[150px]">
              <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Sắp xếp theo</label>
              <select id="filter-order-sort" onchange="renderOrdersAdmin()" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                <option value="newest">Mới nhất trước</option>
                <option value="oldest">Cũ nhất trước</option>
                <option value="highest_value">Giá trị cao nhất</option>
              </select>
            </div>
            <div class="flex items-end">
              <button onclick="clearOrderFilters()" class="px-4 py-2 text-[17.5px] leading-[25px] text-slate-600 border border-slate-300 rounded-lg lg:hover:bg-slate-50 transition-colors w-full md:w-auto">
                <i class="fa-solid fa-eraser mr-1"></i> Xóa lọc
              </button>
            </div>
          </div>

          <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-3 mb-6 flex items-center justify-between shadow-sm hidden" id="bulk-action-container">
            <div class="flex items-center gap-3">
              <input type="checkbox" id="bulk-select-all" onclick="toggleSelectAllOrders(this.checked)" class="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer">
              <span class="text-[17.5px] leading-[25px] font-semibold text-indigo-900">Đã chọn <span id="bulk-selected-count">0</span> đơn hàng</span>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="printBulkOrders()" class="px-3 py-1.5 text-[15px] leading-[20px] font-bold text-indigo-700 bg-white border border-indigo-200 hover:bg-indigo-50 rounded-lg transition-colors flex items-center gap-1">
                <i class="fa-solid fa-print"></i> In phiếu hàng loạt
              </button>
              <select id="bulk-status-select" class="text-[15px] leading-[20px] font-semibold px-2 py-1.5 rounded-lg border border-indigo-200 text-indigo-700 bg-white focus:outline-none">
                <option value="">-- Chuyển trạng thái --</option>
                <option value="pending">Chờ xác nhận</option>
                <option value="processing">Đang chuẩn bị</option>
                <option value="ready">Sẵn sàng giao</option>
                <option value="delivering">Đang giao</option>
                <option value="completed">Đã hoàn thành</option>
                <option value="cancelled">Đã hủy</option>
              </select>
              <button onclick="applyBulkStatusUpdate()" class="px-3 py-1.5 text-[15px] leading-[20px] font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
                Cập nhật
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="admin-orders-container"></div>
        </div>

        <!-- Tab: Shippers -->
        <div id="tab-content-shippers" class="hidden animate-fade-in">
          <!-- Bản đồ khách hàng -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8 overflow-hidden relative">
            <div class="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 class="font-bold text-slate-800 flex items-center gap-2">
                  <i class="fa-solid fa-map-location-dot text-emerald-500"></i>
                  Nuri Bản đồ Phân tích Địa lý &amp; Mật độ Khách hàng
                </h3>
                <p class="text-slate-500 text-[17.5px] leading-[25px] mt-1">
                  Phân tích mật độ đơn hàng theo chung cư, cụm dân cư giúp tối
                  ưu logistics.
                </p>
              </div>
              <button onclick="analyzeLocationsWithAI()" id="btn-analyze-map" class="inline-flex items-center px-4 py-2 text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm transition-all whitespace-nowrap">
                <i class="fa-solid fa-wand-magic-sparkles mr-2"></i> Phân tích
                bằng Nuri
              </button>
            </div>
            <div id="customer-density-map" class="h-[400px] w-full rounded-xl bg-slate-100 relative z-0 flex items-center justify-center">
              <div class="text-slate-400 font-medium" id="map-loading-text">
                Đang tải bản đồ...
              </div>
            </div>
          </div>

          <div class="flex justify-end mb-4 gap-2">
            <button onclick="openRouteAIModal()" class="inline-flex items-center px-4 py-2 text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm transition-all">
              <i class="fa-solid fa-wand-magic-sparkles mr-2"></i> Nuri Tối ưu
              Tuyến đường
            </button>
            <button onclick="openShipperModal('add')" class="inline-flex items-center px-4 py-2 text-[17.5px] leading-[25px] font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 shadow-sm transition-all">
              <i class="fa-solid fa-user-plus mr-2"></i> Thêm Shipper mới
            </button>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left text-[17.5px] leading-[25px] whitespace-nowrap">
                <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase text-[15px] leading-[20px] tracking-wider">
                  <tr>
                    <th class="px-6 py-4">Tên Shipper</th>
                    <th class="px-6 py-4">Số điện thoại</th>
                    <th class="px-6 py-4">Biển số xe</th>
                    <th class="px-6 py-4 min-w-[200px]">Đơn đang đảm nhận</th>
                    <th class="px-6 py-4">Trạng thái</th>
                    <th class="px-6 py-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody id="shipper-table-body" class="divide-y divide-slate-100"></tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Tab: Kitchen -->
        <div id="tab-content-kitchen" class="hidden animate-fade-in">
          <div class="mb-4 flex flex-wrap gap-4 items-center justify-between">
            <div>
              <h2 class="text-[25px] leading-[35px] font-bold text-slate-800">
                <i class="fa-solid fa-fire-burner mr-2 text-rose-500"></i> Bảng
                điều khiển Bếp
              </h2>
              <p class="text-[17.5px] leading-[25px] text-slate-500">
                Gom nhóm các món ăn theo thời gian giao để tối ưu nấu nướng
              </p>
            </div>
            <div class="flex items-center gap-2 flex-wrap justify-end">
              <button onclick="openKitchenCalculator()" class="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg text-[17.5px] leading-[25px] font-medium transition-colors hidden md:block">
                <i class="fa-solid fa-calculator mr-1"></i> Tính nguyên liệu lẻ
              </button>
              <button onclick="openPackageIngredientsCalculator()" class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-2 rounded-lg text-[17.5px] leading-[25px] font-medium transition-colors">
                <i class="fa-solid fa-calculator mr-1"></i> Tính NL Đơn Gói
              </button>
              <span class="text-[17.5px] leading-[25px] font-semibold text-slate-600 hidden sm:inline">Lọc theo TG giao:</span>
              <select id="kitchen-delivery-time-filter" onchange="renderKitchen()" class="border-slate-300 rounded-lg text-[17.5px] leading-[25px] bg-white border px-3 py-2 focus:ring-rose-500 focus:border-rose-500">
                <option value="all">Tất cả</option>
                <!-- JS will populate options based on orders -->
              </select>
              <button onclick="renderKitchen()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg text-[17.5px] leading-[25px] font-medium transition-colors">
                <i class="fa-solid fa-rotate-right mr-1"></i> Làm mới
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Cần làm -->
            <div class="bg-rose-50/50 rounded-xl p-4 border border-rose-100 flex flex-col h-full">
              <div class="flex items-center justify-between mb-4 pb-2 border-b border-rose-200">
                <h3 class="font-bold text-rose-700 flex items-center gap-2">
                  <i class="fa-solid fa-clipboard-list"></i> Cần làm
                </h3>
                <span id="kitchen-todo-count" class="bg-rose-200 text-rose-800 text-[15px] leading-[20px] font-bold px-2 py-1 rounded-full">0</span>
              </div>
              <div id="kitchen-todo-list" class="flex-1 space-y-3 overflow-y-auto pr-1" style="max-height: 600px">
                <!-- JS rendering -->
              </div>
            </div>

            <!-- Đang làm -->
            <div class="bg-amber-50/50 rounded-xl p-4 border border-amber-100 flex flex-col h-full">
              <div class="flex items-center justify-between mb-4 pb-2 border-b border-amber-200">
                <h3 class="font-bold text-amber-700 flex items-center gap-2">
                  <i class="fa-solid fa-fire text-amber-500"></i> Đang nấu
                </h3>
                <span id="kitchen-cooking-count" class="bg-amber-200 text-amber-800 text-[15px] leading-[20px] font-bold px-2 py-1 rounded-full">0</span>
              </div>
              <div id="kitchen-cooking-list" class="flex-1 space-y-3 overflow-y-auto pr-1" style="max-height: 600px">
                <!-- JS rendering -->
              </div>
            </div>

            <!-- Đã xong -->
            <div class="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100 flex flex-col h-full">
              <div class="flex items-center justify-between mb-4 pb-2 border-b border-emerald-200">
                <h3 class="font-bold text-emerald-700 flex items-center gap-2">
                  <i class="fa-solid fa-check-double drop-shadow-sm"></i> Chờ
                  lấy/Giao
                </h3>
                <span id="kitchen-done-count" class="bg-emerald-200 text-emerald-800 text-[15px] leading-[20px] font-bold px-2 py-1 rounded-full">0</span>
              </div>
              <div id="kitchen-done-list" class="flex-1 space-y-3 overflow-y-auto pr-1" style="max-height: 600px">
                <!-- JS rendering -->
              </div>
            </div>
          </div>
        </div>

        <!-- Tab: Map -->
        <div id="tab-content-map" class="hidden animate-fade-in">
          <div class="mb-4 flex flex-wrap gap-4 items-center justify-between">
            <div>
              <h2 class="text-[25px] leading-[35px] font-bold text-slate-800">
                <i class="fa-solid fa-map text-indigo-500 mr-2"></i> Bản đồ Mật
                độ
              </h2>
              <p class="text-[17.5px] leading-[25px] text-slate-500">
                Khu vực tập trung nhiều đơn hàng giúp quản lý shipper &amp; kho bếp
              </p>
            </div>
            <div class="flex items-center gap-2 bg-white px-2 py-1.5 rounded-xl border border-slate-200 shadow-sm">
              <button onclick="toggleMapLayer('heatmap')" id="btn-map-layer-heatmap" class="px-3 py-1.5 rounded-lg text-[17.5px] leading-[25px] font-medium bg-indigo-50 text-indigo-700 transition-colors">
                Heatmap
              </button>
              <button onclick="toggleMapLayer('new')" id="btn-map-layer-new" class="px-3 py-1.5 rounded-lg text-[17.5px] leading-[25px] font-medium hover:bg-slate-50 text-slate-600 transition-colors">
                Đơn mới
              </button>
              <button onclick="toggleMapLayer('transit')" id="btn-map-layer-transit" class="px-3 py-1.5 rounded-lg text-[17.5px] leading-[25px] font-medium hover:bg-slate-50 text-slate-600 transition-colors">
                Đang giao
              </button>
              <button onclick="toggleMapLayer('completed')" id="btn-map-layer-completed" class="px-3 py-1.5 rounded-lg text-[17.5px] leading-[25px] font-medium hover:bg-slate-50 text-slate-600 transition-colors">
                Đã xong
              </button>
            </div>
            <button onclick="renderOrdersHeatmap()" class="text-[17.5px] leading-[25px] bg-slate-50 hover:bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-medium transition-colors border border-slate-200">
              <i class="fa-solid fa-rotate mr-1"></i> Làm mới
            </button>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative">
            <div id="orders-heatmap-container" class="w-full h-[500px] bg-slate-100 z-10"></div>
          </div>
        </div>
      </div>
      <!-- View: SHIPPER APP (Mobile Simulator) -->
      <div id="view-shipper-app" class="hidden animate-fade-in bg-slate-50 min-h-screen relative md:py-8 md:px-4">
        <div class="w-full md:max-w-md mx-auto bg-white min-h-screen md:min-h-[800px] md:shadow-2xl md:rounded-[2rem] md:border-[8px] md:border-slate-900 overflow-hidden relative flex flex-col">
          <!-- Status Bar Simulation -->
          <div class="bg-indigo-600 text-white px-6 py-2 hidden md:flex justify-between items-center text-[18px] font-medium">
            <span>09:41</span>
            <div class="flex gap-1.5 items-center">
              <i class="fa-solid fa-signal"></i>
              <i class="fa-solid fa-wifi"></i>
              <i class="fa-solid fa-battery-full"></i>
            </div>
          </div>
          <!-- App Header -->
          <div class="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md z-10">
            <div>
              <h2 class="font-bold text-[22.5px] leading-[35px] leading-tight" id="shipper-app-name">
                Tài xế
              </h2>
              <p class="text-indigo-200 text-[15px] leading-[20px] mt-0.5">
                <i class="fa-solid fa-circle-dot text-emerald-400 mr-1 text-[15px]"></i>Đang hoạt động
              </p>
            </div>
            <button onclick="exitShipperApp()" class="w-8 h-8 rounded-full bg-white/20 flex justify-center items-center hover:bg-white/30 transition-colors" title="Thoát App">
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
          <!-- App Body -->
          <div class="flex-1 overflow-y-auto bg-slate-50 p-4 custom-scrollbar" id="shipper-app-orders">
            <!-- Dynamic Orders -->
          </div>
        </div>
      </div>
    </main>`,x=`
    <!-- Navigation -->
    

    

    <!-- Mascot Analyzing Overlay -->
    <div id="mascot-analyzing-overlay" class="fixed inset-0 z-[10000] hidden flex-col items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 transition-opacity duration-300 opacity-0 gap-6">
      <div class="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full flex items-center justify-center">
        <!-- Pulse ring background -->
        <div class="absolute inset-0 bg-emerald-500/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        <div class="absolute inset-0 bg-emerald-500/10 rounded-full animate-pulse"></div>

        <!-- Scanning line effect -->
        <div class="absolute inset-0 rounded-full border-2 border-emerald-500/30 overflow-hidden">
          <div class="w-full h-1 bg-emerald-400/80 absolute top-0 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-[scan_2s_ease-in-out_infinite_alternate]"></div>
        </div>

        <img id="mascot-analyzing-img" class="w-full h-full object-contain drop-shadow-2xl z-10" alt="Mascot Analyzing">
      </div>
      <div class="text-white text-[25px] leading-[35px] sm:text-[30px] leading-[40px] font-bold tracking-wide flex items-center gap-2 mt-4 relative z-10">
        <span id="mascot-analyzing-text" class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-300">Đang phân tích dữ liệu</span>
        <span class="flex gap-1 items-end h-6 pb-1">
          <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
          <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
          <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
        </span>
      </div>
    </div>

    

    <!-- Modal: Kitchen Calculator -->
    <div id="kitchen-calc-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="kitchen-calc-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeKitchenCalculator()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pointer-events-none">
          <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl pointer-events-auto">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-b border-slate-100">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                  <i class="fa-solid fa-calculator text-indigo-600 text-[22.5px] leading-[35px]"></i>
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex-1">
                  <h3 class="text-[25px] leading-[35px] font-bold leading-6 text-slate-900" id="kitchen-calc-title">
                    Thống kê nguyên liệu / cách chế biến
                  </h3>
                  <div class="mt-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <!-- Todo -->
                      <div class="border border-rose-200 rounded-xl bg-rose-50/30 overflow-hidden">
                        <div class="bg-rose-100/50 px-3 py-2 border-b border-rose-200 text-rose-800 font-bold text-center">
                          Cần làm
                        </div>
                        <div class="p-3" id="calc-todo-content"></div>
                      </div>
                      <!-- Cooking -->
                      <div class="border border-amber-200 rounded-xl bg-amber-50/30 overflow-hidden">
                        <div class="bg-amber-100/50 px-3 py-2 border-b border-amber-200 text-amber-800 font-bold text-center">
                          Đang nấu
                        </div>
                        <div class="p-3" id="calc-cooking-content"></div>
                      </div>
                      <!-- Done -->
                      <div class="border border-emerald-200 rounded-xl bg-emerald-50/30 overflow-hidden">
                        <div class="bg-emerald-100/50 px-3 py-2 border-b border-emerald-200 text-emerald-800 font-bold text-center">
                          Chờ lấy/giao
                        </div>
                        <div class="p-3" id="calc-done-content"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-slate-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" onclick="closeKitchenCalculator()" class="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-[17.5px] leading-[25px] font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto transition-colors">
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Package Subscriptions Ingredients Calculator -->
    <div id="package-ingredients-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="package-ingredients-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closePackageIngredientsCalculator()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pointer-events-none">
          <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl pointer-events-auto">
            <!-- Modal Header -->
            <div class="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 text-white flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="bg-white/20 p-2 rounded-xl">
                  <i class="fa-solid fa-calculator text-[25px] leading-[35px] text-white"></i>
                </div>
                <div>
                  <h3 class="text-[22.5px] leading-[35px] font-bold" id="package-ingredients-title">
                    Tính toán nguyên liệu Đăng Ký Gói
                  </h3>
                  <p class="text-[15px] leading-[20px] text-emerald-100 font-medium">
                    Thống kê nguyên liệu &amp; cách chế biến chi tiết dựa trên thực
                    đơn đã chọn
                  </p>
                </div>
              </div>
              <button onclick="closePackageIngredientsCalculator()" class="text-white/80 hover:text-white transition-colors">
                <i class="fa-solid fa-xmark text-[22.5px] leading-[35px]"></i>
              </button>
            </div>

            <!-- Modal Content -->
            <div class="bg-white px-6 py-5">
              <!-- Setup Controls -->
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Select Day of Week -->
                <div>
                  <label class="block text-[15px] leading-[20px] font-bold text-slate-500 uppercase tracking-wider mb-2 font-mono">Chọn ngày trong tuần</label>
                  <select id="pkg-calc-day" onchange="runPackageIngredientsCalculation()" class="w-full border-slate-300 rounded-lg text-[17.5px] leading-[25px] bg-white border px-3 py-2.5 focus:ring-emerald-500 focus:border-emerald-500 font-medium text-slate-700">
                    <option value="monday">Thứ Hai</option>
                    <option value="tuesday">Thứ Ba</option>
                    <option value="wednesday">Thứ Tư</option>
                    <option value="thursday">Thứ Năm</option>
                    <option value="friday">Thứ Sáu</option>
                    <option value="saturday">Thứ Bảy</option>
                    <option value="sunday">Chủ Nhật</option>
                  </select>
                </div>

                <!-- Select Meal Type -->
                <div>
                  <label class="block text-[15px] leading-[20px] font-bold text-slate-500 uppercase tracking-wider mb-2 font-mono">Chọn bữa ăn cần tính</label>
                  <div class="grid grid-cols-3 gap-2">
                    <button id="btn-pkg-meal-meal1" onclick="selectPkgCalcMeal('meal1')" class="px-3 py-2.5 rounded-lg border border-slate-200 text-[17.5px] leading-[25px] font-medium text-slate-600 hover:bg-slate-100 transition-colors bg-white">
                      Bữa trưa
                    </button>
                    <button id="btn-pkg-meal-meal2" onclick="selectPkgCalcMeal('meal2')" class="px-3 py-2.5 rounded-lg border border-slate-200 text-[17.5px] leading-[25px] font-medium text-slate-600 hover:bg-slate-100 transition-colors bg-white">
                      Bữa tối
                    </button>
                    <button id="btn-pkg-meal-all" onclick="selectPkgCalcMeal('all')" class="px-3 py-2.5 rounded-lg border-emerald-500 bg-emerald-50 text-emerald-700 text-[17.5px] leading-[25px] font-bold transition-colors">
                      Cả ngày
                    </button>
                  </div>
                </div>
              </div>

              <!-- Output results container -->
              <div id="pkg-calc-results" class="space-y-6">
                <!-- JS will fill this in -->
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
              <div class="text-[15px] leading-[20px] text-slate-400 flex items-center gap-1.5 font-mono">
                <i class="fa-solid fa-circle-info text-emerald-500"></i>
                <span>Tự động đồng bộ với thay đổi thực đơn của khách hàng</span>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" onclick="exportPackageIngredientsPDF()" class="inline-flex justify-center items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-[17.5px] leading-[25px] font-semibold shadow-sm transition-colors cursor-pointer">
                  <i class="fa-solid fa-file-pdf"></i>
                  <span>Xuất PDF</span>
                </button>
                <button type="button" onclick="closePackageIngredientsCalculator()" class="inline-flex justify-center rounded-lg bg-white px-4 py-2 text-[17.5px] leading-[25px] font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition-colors">
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Custom Prompt -->
    <div id="custom-prompt-modal" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 transition-opacity duration-300 opacity-0">
      <div id="custom-prompt-content" class="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden flex flex-col transform transition-transform duration-300 scale-95">
        <div class="p-6 pb-0">
          <h3 id="custom-prompt-title" class="font-bold text-[22.5px] leading-[35px] text-slate-800 mb-2">
            Nhập thông tin
          </h3>
          <p id="custom-prompt-message" class="text-[17.5px] leading-[25px] text-slate-500 mb-4 hidden"></p>
          <input type="text" id="custom-prompt-input" class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-2" placeholder="Nhập tên...">
        </div>
        <div class="p-4 bg-slate-50 flex justify-end gap-2 mt-4">
          <button type="button" onclick="closeCustomPrompt()" class="px-4 py-2 text-[17.5px] leading-[25px] font-medium text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors">
            Hủy
          </button>
          <button type="button" id="custom-prompt-confirm-btn" class="px-4 py-2 text-[17.5px] leading-[25px] font-medium text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors">
            Xác nhận
          </button>
        </div>
      </div>
    </div>

    <!-- Modal: Reset Data -->
    <div id="reset-data-modal" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 transition-opacity duration-300 opacity-0">
      <div id="reset-data-content" class="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-300 scale-95">
        <div class="p-6 bg-red-600 text-white relative">
          <button onclick="closeResetDataModal()" type="button" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex justify-center items-center transition-colors">
            <i class="fa-solid fa-xmark text-[17.5px] leading-[25px]"></i>
          </button>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm text-[30px] leading-[40px]">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div>
              <h3 class="font-bold text-[25px] leading-[35px]">Khôi phục dữ liệu</h3>
              <p class="text-red-100 text-[17.5px] leading-[25px] opacity-90 mt-0.5">
                Hành động này không thể hoàn tác
              </p>
            </div>
          </div>
        </div>
        <div class="p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
          <p class="text-[17.5px] leading-[25px] text-slate-600 mb-4 font-medium">
            Chọn các mục dữ liệu bạn muốn xóa:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3" id="reset-options-container">
            <!-- Option 1: tổng quan & thống kê -->
            <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
              <input type="checkbox" id="reset-option-stats" class="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4 cursor-pointer">
              <div>
                <div class="text-[15px] leading-[20px] font-bold text-slate-800">Tổng quan &amp; thống kê</div>
                <div class="text-[15px] text-slate-500">Xóa các đánh giá &amp; dữ liệu thống kê</div>
              </div>
            </label>
            <!-- Option 2: QR & tracking -->
            <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
              <input type="checkbox" id="reset-option-qr" class="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4 cursor-pointer">
              <div>
                <div class="text-[15px] leading-[20px] font-bold text-slate-800">QR &amp; tracking</div>
                <div class="text-[15px] text-slate-500">Xóa lịch sử quét &amp; nguồn traffic</div>
              </div>
            </label>
            <!-- Option 3: quản lý đơn hàng -->
            <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
              <input type="checkbox" id="reset-option-orders" class="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4 cursor-pointer">
              <div>
                <div class="text-[15px] leading-[20px] font-bold text-slate-800">Quản lý đơn hàng</div>
                <div class="text-[15px] text-slate-500">Xóa các đơn hàng hiện có (chờ/đang xử lý...)</div>
              </div>
            </label>
            <!-- Option 4: tin nhắn -->
            <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
              <input type="checkbox" id="reset-option-chats" class="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4 cursor-pointer">
              <div>
                <div class="text-[15px] leading-[20px] font-bold text-slate-800">Tin nhắn</div>
                <div class="text-[15px] text-slate-500">Xóa toàn bộ hội thoại &amp; chat hỗ trợ</div>
              </div>
            </label>
            <!-- Option 5: khách hàng tiềm năng -->
            <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
              <input type="checkbox" id="reset-option-potential" class="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4 cursor-pointer">
              <div>
                <div class="text-[15px] leading-[20px] font-bold text-slate-800">Khách hàng tiềm năng</div>
                <div class="text-[15px] text-slate-500">Xóa dữ liệu khách chưa kích hoạt gói</div>
              </div>
            </label>
            <!-- Option 6: khách đã mua gói -->
            <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
              <input type="checkbox" id="reset-option-purchased" class="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4 cursor-pointer">
              <div>
                <div class="text-[15px] leading-[20px] font-bold text-slate-800">Khách đã mua gói</div>
                <div class="text-[15px] text-slate-500">Xóa dữ liệu khách đã đăng ký gói</div>
              </div>
            </label>
            <!-- Option 7: quản lý tài khoản -->
            <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
              <input type="checkbox" id="reset-option-accounts" class="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4 cursor-pointer">
              <div>
                <div class="text-[15px] leading-[20px] font-bold text-slate-800">Quản lý tài khoản</div>
                <div class="text-[15px] text-slate-500">Xóa mật khẩu, tích lũy điểm &amp; xếp hạng</div>
              </div>
            </label>
            <!-- Option 8: lịch sử đơn hàng -->
            <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
              <input type="checkbox" id="reset-option-history" class="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4 cursor-pointer">
              <div>
                <div class="text-[15px] leading-[20px] font-bold text-slate-800">Lịch sử đơn hàng</div>
                <div class="text-[15px] text-slate-500">Xóa đơn hàng đã xong hoặc đã hủy</div>
              </div>
            </label>
          </div>

          <div class="mt-6 pt-6 border-t border-slate-100">
            <label class="block text-[17.5px] leading-[25px] font-bold text-slate-700 mb-2">Nhập mật khẩu xác nhận</label>
            <input type="password" id="reset-password-input" class="w-full rounded-xl border border-slate-200 p-3 text-[17.5px] leading-[25px] focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors" placeholder="Nhập mật khẩu để tiếp tục...">
            <!-- Hidden default password hint -->
            <p class="text-[15px] leading-[20px] text-slate-400 mt-2 hidden">
              <i class="fa-solid fa-info-circle mr-1"></i> Mặc định là 180298
            </p>
          </div>
        </div>
        <div class="p-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-3 rounded-b-3xl">
          <button type="button" onclick="closeResetDataModal()" class="px-5 py-2.5 rounded-xl text-slate-600 font-semibold hover:bg-slate-200 transition-colors text-[17.5px] leading-[25px]">
            Hủy
          </button>
          <button type="button" onclick="confirmResetData()" class="px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 shadow-sm transition-colors text-[17.5px] leading-[25px] flex items-center gap-2">
            <i class="fa-solid fa-trash-can"></i> Xóa dữ liệu
          </button>
        </div>
      </div>
    </div>

    <!-- Modal: Role Select (Chọn Vai Trò Đăng Nhập) -->
    <div id="role-select-modal" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-slate-950/60 backdrop-blur-md p-4 transition-all duration-300 animate-fade-in">
      <div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden flex flex-col transform scale-100 transition-all duration-300 relative">
        <!-- Modal Header -->
        <div class="p-6 bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-700 text-white relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <button onclick="closeRoleSelectModal()" class="absolute top-5 right-5 text-emerald-100 hover:text-white bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200">
            <i class="fa-solid fa-times text-[17.5px] leading-[25px]"></i>
          </button>
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white shadow-inner">
              <i class="fa-solid fa-cookie-bite text-[17.5px] leading-[25px]"></i>
            </div>
            <span class="text-[15px] uppercase tracking-widest font-black text-emerald-200">Nuri Kitchen</span>
          </div>
          <h3 class="text-[25px] leading-[35px] font-extrabold tracking-tight mb-1">
            Chọn cổng đăng nhập
          </h3>
          <p class="text-[15px] leading-[20px] text-emerald-100/90 font-medium">
            Vui lòng chọn vai trò để tiếp tục
          </p>
        </div>

        <!-- Options Body -->
        <div class="p-6 space-y-4">
          <!-- Option: Admin (Quản trị) -->
          <button type="button" onclick="selectRoleChoice('admin')" class="w-full text-left p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition-all duration-200 flex items-center gap-4 group cursor-pointer">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-[25px] leading-[35px] shadow-md group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-user-shield"></i>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <span class="font-extrabold text-slate-800 dark:text-white text-[20px] leading-[30px] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Quản trị</span>
                <i class="fa-solid fa-chevron-right text-[15px] leading-[20px] text-slate-400 group-hover:translate-x-1 transition-transform"></i>
              </div>
              <p class="text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 mt-0.5">
                Dành cho Quản trị viên hệ thống &amp; Bếp
              </p>
            </div>
          </button>

          <!-- Option: Customer (Khách hàng) -->
          <button type="button" onclick="selectRoleChoice('customer')" class="w-full text-left p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-teal-50/50 dark:hover:bg-teal-950/30 transition-all duration-200 flex items-center gap-4 group cursor-pointer">
            <div class="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center text-[25px] leading-[35px] shadow-md group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <span class="font-extrabold text-slate-800 dark:text-white text-[20px] leading-[30px] group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Khách hàng</span>
                <i class="fa-solid fa-chevron-right text-[15px] leading-[20px] text-slate-400 group-hover:translate-x-1 transition-transform"></i>
              </div>
              <p class="text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 mt-0.5">
                Trang cá nhân &amp; đăng ký thực đơn bữa ăn
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal: Admin Login (Đăng nhập Quản trị) -->
    <div id="admin-login-modal" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-slate-950/60 backdrop-blur-md p-4 transition-all duration-300 animate-fade-in">
      <div class="bg-white dark:bg-slate-900 w-full max-w-sm rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden flex flex-col transform scale-100 transition-all duration-300 relative">
        <!-- Modal Header -->
        <div class="p-6 bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <button onclick="closeAdminLoginModal()" class="absolute top-5 right-5 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200">
            <i class="fa-solid fa-times text-[17.5px] leading-[25px]"></i>
          </button>

          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 bg-emerald-500/20 backdrop-blur-md rounded-xl flex items-center justify-center text-emerald-400 shadow-inner">
              <i class="fa-solid fa-shield-halved text-[17.5px] leading-[25px]"></i>
            </div>
            <span class="text-[15px] uppercase tracking-widest font-black text-emerald-400">Nuri Admin Portal</span>
          </div>

          <h3 class="text-[25px] leading-[35px] font-extrabold tracking-tight mb-1">
            Đăng nhập Quản trị
          </h3>
          <p class="text-[15px] leading-[20px] text-slate-300 font-medium">
            Truy cập bảng điều khiển hệ thống Nuri Kitchen
          </p>
        </div>

        <!-- Modal Body -->
        <div class="p-6">
          <form id="admin-login-form" onsubmit="handleAdminLoginSubmit(event)" class="space-y-4">
            <div>
              <label class="block text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Số điện thoại</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                  <i class="fa-solid fa-phone text-[15px] leading-[20px]"></i>
                </span>
                <input type="tel" id="admin-login-phone-input" required="" autocomplete="off" placeholder="Nhập số điện thoại..." class="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[17.5px] leading-[25px] font-semibold text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all">
              </div>
            </div>

            <div>
              <label class="block text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Mật khẩu Quản trị</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                  <i class="fa-solid fa-lock text-[15px] leading-[20px]"></i>
                </span>
                <input type="password" id="admin-login-password-input" required="" autocomplete="off" placeholder="Nhập mật khẩu..." class="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[17.5px] leading-[25px] font-semibold text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all">
              </div>
            </div>

            <div class="pt-2">
              <button type="submit" class="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-[17.5px] leading-[25px] rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer">
                <i class="fa-solid fa-right-to-bracket"></i>
                Đăng Nhập Quản Trị
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal: Login -->
    <div id="login-modal" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-slate-950/60 backdrop-blur-md p-4 transition-all duration-300 animate-fade-in">
      <div class="bg-white dark:bg-slate-900 w-full max-w-sm rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden flex flex-col transform scale-100 transition-all duration-300 relative">
        <!-- Modal Header with elegant gradient background and brand patterns -->
        <div class="p-6 bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-700 text-white relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="absolute -left-10 -bottom-10 w-24 h-24 bg-teal-500/20 rounded-full blur-xl pointer-events-none"></div>

          <button onclick="closeAuthModal('login')" class="absolute top-5 right-5 text-emerald-100 hover:text-white bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200">
            <i class="fa-solid fa-times text-[17.5px] leading-[25px]"></i>
          </button>

          <!-- Brand Logo icon inside the header -->
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white shadow-inner">
              <i class="fa-solid fa-cookie-bite text-[17.5px] leading-[25px] animate-wiggle"></i>
            </div>
            <span class="text-[15px] uppercase tracking-widest font-black text-emerald-200">Nuri Kitchen</span>
          </div>

          <h3 class="text-[25px] leading-[35px] font-extrabold tracking-tight mb-1">
            Chào mừng quay lại!
          </h3>
          <p class="text-[15px] leading-[20px] text-emerald-100/90 font-medium">
            Quản lý bữa ăn dinh dưỡng &amp; nhận điểm thưởng hấp dẫn
          </p>
        </div>

        <div class="p-6">
          <form id="login-form" onsubmit="handleLogin(event)" class="space-y-4">
            <div>
              <label class="block text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-500 dark:text-emerald-400 mb-1.5">Số điện thoại</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-emerald-600">
                  <i class="fa-solid fa-phone text-[15px] leading-[20px]"></i>
                </span>
                <input type="tel" id="login-phone" required="" class="w-full border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 bg-slate-50/50 dark:bg-slate-950/50 text-slate-800 dark:text-white transition-all duration-200 text-[17.5px] leading-[25px] font-medium" placeholder="VD: 0912345678">
              </div>
            </div>

            <div>
              <label class="block text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-500 dark:text-emerald-400 mb-1.5">Mật khẩu</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-emerald-600">
                  <i class="fa-solid fa-lock text-[15px] leading-[20px]"></i>
                </span>
                <input type="password" id="login-password" required="" class="w-full border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-12 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 bg-slate-50/50 dark:bg-slate-950/50 text-slate-800 dark:text-white transition-all duration-200 text-[17.5px] leading-[25px] font-medium" placeholder="••••••••">
                <button type="button" onclick="togglePasswordVisibility('login-password')" class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-emerald-600 transition-colors">
                  <i class="fa-solid fa-eye text-[15px] leading-[20px]" id="login-password-eye"></i>
                </button>
              </div>
            </div>

            <button type="submit" class="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold py-3 px-4 rounded-2xl shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all duration-200 text-[17.5px] leading-[25px] flex items-center justify-center gap-2">
              <span>Đăng nhập</span>
              <i class="fa-solid fa-arrow-right text-[15px] leading-[20px]"></i>
            </button>
          </form>

          <!-- Google Sign In -->
          <div class="mb-4 hidden" id="google-signin-container-login">
            <div class="flex items-center my-4">
              <div class="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
              <span class="mx-3 text-[15px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">HOẶC</span>
              <div class="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
            </div>
            <div id="g_id_signin_login" class="flex justify-center"></div>
          </div>

          <div class="text-center text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-4">
            Chưa có tài khoản?
            <button onclick="switchAuthModal('register')" class="text-emerald-600 dark:text-emerald-400 font-extrabold hover:underline ml-1">
              Tạo tài khoản ngay
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Register -->
    <div id="register-modal" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-slate-950/60 backdrop-blur-md p-4 transition-all duration-300 animate-fade-in">
      <div class="bg-white dark:bg-slate-900 w-full max-w-sm rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden flex flex-col transform scale-100 transition-all duration-300 relative">
        <!-- Modal Header with elegant gradient background and brand patterns -->
        <div class="p-6 bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-700 text-white relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="absolute -left-10 -bottom-10 w-24 h-24 bg-teal-500/20 rounded-full blur-xl pointer-events-none"></div>

          <button onclick="closeAuthModal('register')" class="absolute top-5 right-5 text-emerald-100 hover:text-white bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200">
            <i class="fa-solid fa-times text-[17.5px] leading-[25px]"></i>
          </button>

          <!-- Brand Logo icon inside the header -->
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white shadow-inner">
              <i class="fa-solid fa-wand-magic-sparkles text-[17.5px] leading-[25px] animate-wiggle"></i>
            </div>
            <span class="text-[15px] uppercase tracking-widest font-black text-emerald-200">Nuri Kitchen</span>
          </div>

          <h3 class="text-[25px] leading-[35px] font-extrabold tracking-tight mb-1">
            Tạo tài khoản
          </h3>
          <p class="text-[15px] leading-[20px] text-emerald-100/90 font-medium">
            Bắt đầu hành trình dinh dưỡng cùng Nuri Kitchen
          </p>
        </div>

        <div class="p-6">
          <form id="register-form" onsubmit="handleRegister(event)" class="space-y-4">
            <div>
              <label class="block text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-500 dark:text-emerald-400 mb-1.5">Họ và tên</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-emerald-600">
                  <i class="fa-solid fa-user text-[15px] leading-[20px]"></i>
                </span>
                <input type="text" id="register-name" required="" class="w-full border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 bg-slate-50/50 dark:bg-slate-950/50 text-slate-800 dark:text-white transition-all duration-200 text-[17.5px] leading-[25px] font-medium" placeholder="Nguyễn Văn A">
              </div>
            </div>

            <div>
              <label class="block text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-500 dark:text-emerald-400 mb-1.5">Số điện thoại</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-emerald-600">
                  <i class="fa-solid fa-phone text-[15px] leading-[20px]"></i>
                </span>
                <input type="tel" id="register-phone" required="" class="w-full border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 bg-slate-50/50 dark:bg-slate-950/50 text-slate-800 dark:text-white transition-all duration-200 text-[17.5px] leading-[25px] font-medium" placeholder="VD: 0912345678">
              </div>
            </div>

            <div>
              <label class="block text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-500 dark:text-emerald-400 mb-1.5">Mật khẩu</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-emerald-600">
                  <i class="fa-solid fa-lock text-[15px] leading-[20px]"></i>
                </span>
                <input type="password" id="register-password" required="" class="w-full border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-12 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 bg-slate-50/50 dark:bg-slate-950/50 text-slate-800 dark:text-white transition-all duration-200 text-[17.5px] leading-[25px] font-medium" placeholder="••••••••">
                <button type="button" onclick="togglePasswordVisibility('register-password')" class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-emerald-600 transition-colors">
                  <i class="fa-solid fa-eye text-[15px] leading-[20px]" id="register-password-eye"></i>
                </button>
              </div>
            </div>

            <button type="submit" class="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold py-3 px-4 rounded-2xl shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all duration-200 text-[17.5px] leading-[25px] flex items-center justify-center gap-2">
              <span>Đăng ký</span>
              <i class="fa-solid fa-arrow-right text-[15px] leading-[20px]"></i>
            </button>
          </form>

          <!-- Google Sign In -->
          <div class="mb-4 hidden" id="google-signin-container-register">
            <div class="flex items-center my-4">
              <div class="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
              <span class="mx-3 text-[15px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">HOẶC</span>
              <div class="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
            </div>
            <div id="g_id_signin_register" class="flex justify-center"></div>
          </div>

          <div class="text-center text-[15px] leading-[20px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-4">
            Đã có tài khoản?
            <button onclick="switchAuthModal('login')" class="text-emerald-600 dark:text-emerald-400 font-extrabold hover:underline ml-1">
              Đăng nhập ngay
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Switch Account -->
    <div id="switch-account-modal" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-fade-in">
      <div class="bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        <div class="p-6 bg-emerald-600 text-white relative">
          <button onclick="closeSwitchAccountModal()" class="absolute top-4 right-4 text-emerald-200 hover:text-white transition-colors">
            <i class="fa-solid fa-times text-[25px] leading-[35px]"></i>
          </button>
          <h3 class="text-[25px] leading-[35px] font-bold mb-1">Chuyển đổi tài khoản</h3>
          <p class="text-[17.5px] leading-[25px] text-emerald-100">
            Chọn tài khoản nhanh hoặc đăng nhập mới
          </p>
        </div>
        <div class="p-6">
          <!-- Quick Switch Dropdown -->
          <div class="mb-4">
            <label class="block text-[17.5px] leading-[25px] font-semibold text-slate-700 mb-1">Chọn tài khoản đã lưu</label>
            <select id="switch-account-select" onchange="quickSwitchAccount()" class="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50">
              <option value="">-- Chọn tài khoản --</option>
            </select>
          </div>

          <div class="flex items-center my-4">
            <div class="flex-grow border-t border-slate-200"></div>
            <span class="mx-3 text-[15px] leading-[20px] text-slate-400 font-medium">HOẶC NHẬP MỚI</span>
            <div class="flex-grow border-t border-slate-200"></div>
          </div>

          <form id="switch-account-form" onsubmit="handleSwitchAccount(event)">
            <div class="mb-4">
              <label class="block text-[17.5px] leading-[25px] font-semibold text-slate-700 mb-1">Số điện thoại</label>
              <input type="tel" id="switch-account-phone" required="" class="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50" placeholder="VD: 0912345678">
            </div>
            <div class="mb-6">
              <label class="block text-[17.5px] leading-[25px] font-semibold text-slate-700 mb-1">Mật khẩu</label>
              <input type="password" id="switch-account-password" required="" class="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50" placeholder="••••••••">
            </div>
            <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-colors mb-4">
              Đăng nhập
            </button>
          </form>

          <!-- Google Sign In -->
          <div class="mb-4 hidden" id="google-signin-container-switch">
            <div class="flex items-center my-4">
              <div class="flex-grow border-t border-slate-200"></div>
              <span class="mx-3 text-[15px] leading-[20px] text-slate-400 font-medium">HOẶC GMAIL</span>
              <div class="flex-grow border-t border-slate-200"></div>
            </div>
            <div id="g_id_signin_switch" class="flex justify-center"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Edit Profile -->
    <div id="edit-profile-modal" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-fade-in">
      <div class="bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        <div class="p-6 bg-emerald-600 text-white relative">
          <button onclick="closeEditProfileModal()" class="absolute top-4 right-4 text-emerald-200 hover:text-white transition-colors">
            <i class="fa-solid fa-times text-[25px] leading-[35px]"></i>
          </button>
          <h3 class="text-[25px] leading-[35px] font-bold mb-1">Chỉnh sửa hồ sơ</h3>
        </div>
        <div class="p-6">
          <form id="edit-profile-form" onsubmit="handleEditProfile(event)">
            <div class="mb-4 flex flex-col items-center">
              <div class="relative w-24 h-24 mb-2 group">
                <img id="edit-profile-avatar-preview" src="https://via.placeholder.com/150" class="w-full h-full rounded-full object-cover border-4 border-slate-100 hidden" alt="Avatar">
                <div id="edit-profile-avatar-placeholder" class="w-full h-full rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[45px] leading-[50px] border-4 border-slate-100">
                  <i class="fa-solid fa-user"></i>
                </div>
                <label class="absolute inset-0 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                  <i class="fa-solid fa-camera"></i>
                  <input type="file" id="edit-profile-avatar-input" accept="image/*" class="hidden" onchange="previewProfileAvatar(this)">
                </label>
              </div>
              <p class="text-[15px] leading-[20px] text-slate-500">Nhấn vào ảnh để thay đổi</p>
            </div>
            <div class="mb-6">
              <label class="block text-[17.5px] leading-[25px] font-semibold text-slate-700 mb-1">Tên hiển thị</label>
              <input type="text" id="edit-profile-name" required="" class="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50" placeholder="VD: Nguyễn Văn A">
            </div>
            <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-colors mb-4">
              Lưu thay đổi
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Nuri Chatbot FAB & Social Group -->
    <div id="chatbot-fab" class="fixed bottom-6 right-[calc(max(1rem,(100vw-1280px)/2+1rem))] sm:right-[calc(max(1.5rem,(100vw-1280px)/2+1.5rem))] z-[85] flex flex-col items-center gap-3 transition-all duration-300">
      <!-- Sub-menu (Zalo, Messenger, Nuri AI) -->
      <div id="chatbot-social-menu" class="hidden flex flex-col items-center gap-3 mb-1 transition-all duration-300 transform translate-y-4 opacity-0">
        <!-- Nuri AI Button -->
        <button onclick="openNuriAI(event)" class="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center transition-all hover:scale-110 border border-slate-100 relative group/tooltip cursor-pointer">
          <div id="sub-menu-mascot-container" class="w-20 h-20 flex items-center justify-center overflow-hidden rounded-full">
            <!-- Rendered dynamically as SVG/images -->
          </div>
          <!-- Label: AI CHATBOT -->
          <span class="absolute right-14 bg-emerald-600 text-white text-[14px] font-bold px-2 py-0.5 rounded shadow-sm whitespace-nowrap uppercase tracking-wider">AI CHATBOT</span>
        </button>

        <!-- Messenger Link -->
        <a id="chatbot-messenger-link" href="#" target="_blank" onclick="openMessenger(event)" class="w-24 h-24 rounded-full bg-white text-[#0084FF] shadow-xl flex items-center justify-center transition-all hover:scale-110 border border-slate-100 relative group/tooltip cursor-pointer">
          <i class="fa-brands fa-facebook-messenger text-[60px] leading-[60px]"></i>
          <!-- Tooltip -->
          <span class="absolute right-14 bg-slate-900 text-white text-[15px] leading-[20px] font-medium px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none">Messenger (Fanpage)</span>
        </a>

        <!-- Zalo Link -->
        <a id="chatbot-zalo-link" href="#" target="_blank" onclick="openZalo(event)" class="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center transition-all hover:scale-110 border border-slate-100 overflow-hidden relative group/tooltip cursor-pointer">
          <!-- Official Zalo SVG Icon -->
          <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 5.92 2 10.77c0 2.894 1.6 5.433 4.09 7.037-.18.736-.65 2.22-.75 2.56-.12.41.13.4.27.3.26-.19 2.94-1.95 4.08-2.693.1.003.21.006.31.006 5.523 0 10-3.92 10-8.77C22 5.92 17.523 2 12 2z" fill="#0068FF"></path>
            <text x="12" y="13" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle" letter-spacing="-0.2">
              Zalo
            </text>
          </svg>
          <!-- Tooltip -->
          <span class="absolute right-14 bg-slate-900 text-white text-[15px] leading-[20px] font-medium px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none">Nhắn tin Zalo</span>
        </a>
      </div>

      <!-- Main Toggle Button -->
      <button onclick="toggleSocialMenu(event)" class="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group rounded-full bg-[linear-gradient(135deg,#15803D,#10B981)] shadow-[0_16px_40px_rgba(16,185,129,0.3)] text-white relative cursor-pointer">
        <div id="fab-mascot-fallback" class="w-28 h-28 flex items-center justify-center text-[60px] leading-[60px]">
          <i id="main-fab-icon" class="fa-solid fa-comment-dots text-[60px] leading-[60px] transition-transform duration-300"></i>
        </div>
        <img id="fab-mascot-img" class="w-40 h-40 max-w-none object-contain hidden -translate-y-4 drop-shadow-2xl" alt="Mascot Chat">
        <span id="chatbot-badge" class="hidden absolute -top-2 -right-2 flex h-8 w-8">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white items-center justify-center text-[13px] font-bold">1</span>
        </span>
      </button>
    </div>

    <!-- Nuri Chatbot Window -->
    <div id="chatbot-window" class="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-[calc(max(1.5rem,(100vw-1280px)/2+1.5rem))] z-[100] sm:w-[380px] h-[100dvh] sm:h-[500px] sm:max-h-[calc(100dvh-8rem)] bg-white sm:rounded-2xl shadow-2xl border-0 sm:border border-slate-200 hidden flex-col transition-all overflow-hidden">
      <!-- Header -->
      <div class="bg-[linear-gradient(135deg,#14532D_0%,#0F766E_100%)] p-4 flex justify-between items-center text-white shrink-0 shadow-sm z-10 relative">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none"></div>
        <div class="flex items-center gap-2 relative z-10">
          <button onclick="toggleChat()" class="sm:hidden text-white/90 hover:text-white transition-colors relative z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">
            <i class="fa-solid fa-chevron-left text-[22.5px] leading-[35px]"></i>
          </button>
          <div class="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner text-[22.5px] leading-[35px]">
            <i class="fa-solid fa-robot"></i>
          </div>
          <div>
            <div class="font-bold text-[17.5px] leading-[25px] tracking-wide">NutriAI Assistant</div>
            <div class="text-[15px] text-emerald-100 flex items-center gap-1">
              <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse"></span>
              Trực tuyến
            </div>
          </div>
        </div>
        <button onclick="toggleChat()" class="hidden sm:flex text-white/70 hover:text-white transition-colors relative z-10 w-8 h-8 items-center justify-center rounded-full hover:bg-white/10">
          <i class="fa-solid fa-xmark text-[22.5px] leading-[35px]"></i>
        </button>
      </div>
      <!-- Messages Area -->
      <div id="chatbot-messages" class="flex-1 overflow-y-auto overscroll-contain min-h-0 p-4 bg-slate-50 flex flex-col gap-4 custom-scrollbar" style="-webkit-overflow-scrolling: touch">
        <!-- Welcome Message -->
        <div class="flex gap-2.5 w-max max-w-[85%] animate-fade-in">
          <div class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-[15px] leading-[20px] shadow-sm border border-emerald-200">
            <i class="fa-solid fa-robot"></i>
          </div>
          <div id="chatbot-greeting-msg" class="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 text-[17.5px] leading-[25px] text-slate-700 shadow-sm leading-relaxed">
            Chào bạn! Nuri là chuyên gia dinh dưỡng ảo của Nuri Kitchen. 👋<br><br>Nuri
            có thể giúp bạn giải đáp các thắc mắc về calo, gợi ý món ăn, hoặc tư
            vấn lộ trình giảm cân. Bạn cần hỗ trợ gì ạ?
          </div>
        </div>
      </div>
      <!-- Loading indicator -->
      <div id="chatbot-loading" class="hidden px-5 py-2 bg-slate-50 text-[15px] leading-[20px] text-slate-500 italic flex items-center gap-2 shrink-0">
        <div class="flex gap-1">
          <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_0ms]"></span>
          <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_200ms]"></span>
          <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_400ms]"></span>
        </div>
        NutriNuri đang phân tích...
      </div>
      <!-- Input Area -->
      <div class="bg-white border-t border-slate-100 flex flex-col shrink-0">
        <!-- Fast Replies -->
        <div class="px-3 pt-3 pb-1 flex gap-2 overflow-x-auto hide-scrollbar whitespace-nowrap shrink-0">
          <button onclick="sendFastReply('Tra cứu trạng thái đơn hàng')" class="text-[18px] font-semibold bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors shrink-0">
            📦 Tra cứu đơn
          </button>
          <button onclick="sendFastReply('Hôm nay có thực đơn gì?')" class="text-[18px] font-semibold bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors shrink-0">
            🥗 Thực đơn hôm nay
          </button>
          <button onclick="sendFastReply('Cần tư vấn chọn gói')" class="text-[18px] font-semibold bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors shrink-0">
            🩺 Tư vấn gói
          </button>
          <button onclick="sendFastReply('Liên hệ nhân viên hỗ trợ')" class="text-[18px] font-semibold bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors shrink-0">
            🎧 Hỗ trợ
          </button>
        </div>
        <div class="p-3 flex shrink-0 relative items-end">
          <textarea id="chatbot-input" placeholder="Nhập câu hỏi của bạn..." rows="1" class="w-full border border-slate-200 rounded-2xl pl-4 pr-12 py-3 text-[17.5px] leading-[25px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-slate-50 focus:bg-white transition-colors resize-none overflow-y-auto leading-relaxed min-h-[46px] max-h-[120px]" oninput="
              this.style.height = '46px';
              this.style.height = Math.min(this.scrollHeight, 120) + 'px';
            " onkeydown="
              if (event.key === 'Enter' &amp;&amp; !event.shiftKey) {
                event.preventDefault();
                sendChatMessage();
              }
            "></textarea>
          <button onclick="sendChatMessage()" class="absolute right-4 bottom-4 text-primary hover:text-primaryHover w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0">
            <i class="fa-solid fa-paper-plane text-[22.5px] leading-[35px]"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal: Shipper QR Code -->
    <div id="shipper-qr-modal" class="fixed inset-0 z-[70] hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeShipperQRModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-900 flex items-center gap-2">
                <i class="fa-solid fa-qrcode text-indigo-500"></i> Code QR Tài
                xế
              </h3>
              <button type="button" onclick="closeShipperQRModal()" class="text-slate-400 hover:text-slate-600 transition-colors">
                <i class="fa-solid fa-xmark text-[25px] leading-[35px]"></i>
              </button>
            </div>
            <div class="text-center mb-2">
              <span class="inline-block bg-indigo-100 text-indigo-700 text-[15px] font-bold px-2 py-1 rounded uppercase tracking-wider" id="shipper-qr-name"></span>
            </div>
            <div class="flex justify-center bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
              <img id="shipper-qr-img" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="QR Code" class="w-48 h-48 mix-blend-multiply">
            </div>
            <p class="text-[17.5px] leading-[25px] text-slate-500 text-center mb-4 leading-relaxed">
              Yêu cầu tài xế dùng camera điện thoại quét mã này để mở
              <b class="text-slate-700">Ứng dụng dành cho Shipper</b>. Hệ thống
              tự động đồng bộ trạng thái đơn hàng.
            </p>
            <div class="flex justify-center mt-4">
              <button onclick="openCurrentShipperApp()" class="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-4 py-2 rounded-lg text-[17.5px] leading-[25px] font-bold shadow-sm transition-all flex items-center gap-2">
                <i class="fa-solid fa-mobile-screen"></i> Mở App mô phỏng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Confirm -->
    <div id="confirm-modal" class="fixed inset-0 z-[70] hidden flex items-center justify-center">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm transition-opacity" onclick="closeConfirmModal()"></div>
      <div class="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 transform transition-all animate-fade-in text-center z-10">
        <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 text-[37.5px] leading-[45px]">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <h3 class="text-[25px] leading-[35px] font-bold text-slate-800 mb-2">Xác nhận</h3>
        <p class="text-slate-600 mb-6 text-[17.5px] leading-[25px]" id="confirm-message">
          Bạn có chắc chắn muốn thực hiện hành động này?
        </p>
        <div class="flex gap-3 justify-center">
          <button onclick="closeConfirmModal()" class="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-medium transition-colors">
            Hủy
          </button>
          <button id="btn-confirm-action" class="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 font-medium transition-colors shadow-sm">
            Đồng ý
          </button>
        </div>
      </div>
    </div>

    <!-- Modal: Tracking Management -->
    <div id="tracking-modal" class="fixed inset-0 z-[60] hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeTrackingModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl flex flex-col max-h-[90vh]">
          <div class="bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center shrink-0">
            <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-900 flex items-center gap-2">
              <i class="fa-solid fa-link text-primary"></i> Quản lý Nguồn
              Tracking &amp; QR
            </h3>
            <button type="button" onclick="closeTrackingModal()" class="text-slate-400 hover:text-slate-600 transition-colors">
              <i class="fa-solid fa-xmark text-[25px] leading-[35px]"></i>
            </button>
          </div>

          <div class="p-6 overflow-y-auto custom-scrollbar flex-1 bg-slate-50/50">
            <div class="mb-6 flex gap-3">
              <input type="text" id="new-track-name" placeholder="Tên nguồn mới (VD: KOL Nam Trần)" class="flex-1 rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary">
              <input type="text" id="new-track-code" placeholder="Mã tracking (VD: kol_nam)" class="w-48 rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] focus:border-primary focus:ring-1 focus:ring-primary">
              <button onclick="addTrackingSource()" class="bg-primary hover:bg-primaryHover text-white px-4 py-2 rounded-lg text-[17.5px] leading-[25px] font-medium transition-colors shadow-sm shrink-0 whitespace-nowrap">
                <i class="fa-solid fa-plus mr-1"></i> Tạo mã
              </button>
            </div>

            <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <table class="w-full text-left text-[17.5px] leading-[25px] whitespace-nowrap">
                <thead class="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th class="px-4 py-3">Tên nguồn</th>
                    <th class="px-4 py-3">Mã Tracking (utm_source)</th>
                    <th class="px-4 py-3 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody id="tracking-sources-list" class="divide-y divide-slate-100">
                  <!-- Dữ liệu Tracking render ở đây -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: QR Code Share -->
    <div id="qr-modal" class="fixed inset-0 z-[70] hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeQRModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-900 flex items-center gap-2">
                <i class="fa-solid fa-qrcode text-primary"></i> QR Landing Page
              </h3>
              <button type="button" onclick="closeQRModal()" class="text-slate-400 hover:text-slate-600 transition-colors">
                <i class="fa-solid fa-xmark text-[25px] leading-[35px]"></i>
              </button>
            </div>
            <div class="text-center mb-2">
              <span id="qr-source-badge" class="inline-block bg-indigo-100 text-indigo-700 text-[15px] font-bold px-2 py-1 rounded uppercase tracking-wider hidden"></span>
            </div>
            <div class="flex justify-center bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
              <img id="qr-code-img" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="QR Code" class="w-48 h-48 mix-blend-multiply">
            </div>
            <p class="text-[17.5px] leading-[25px] text-slate-500 text-center mb-4 leading-relaxed">
              Gửi mã này cho khách hàng. Khi quét, khách sẽ được truy cập trực
              tiếp vào
              <b class="text-slate-700">Landing Page Tư Vấn Cá Nhân</b> và hệ
              thống sẽ tự động ghi nhận nguồn.
            </p>
            <div class="flex justify-center mb-4" id="test-landing-btn-wrapper">
              <button onclick="startSimulation()" class="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-4 py-2 rounded-lg text-[17.5px] leading-[25px] font-bold shadow-sm transition-all flex items-center gap-2">
                <i class="fa-solid fa-eye"></i> Xem thử trực tiếp
              </button>
            </div>
            <div class="flex items-center gap-2 bg-slate-100 p-2 rounded-lg border border-slate-200">
              <input type="text" id="landing-url" class="bg-transparent border-none outline-none text-[15px] leading-[20px] text-slate-600 flex-1 w-full" readonly="">
              <button onclick="copyLandingUrl()" class="bg-white hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded text-[15px] leading-[20px] font-medium border border-slate-200 shadow-sm transition-colors shrink-0">
                <i class="fa-regular fa-copy"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Cooking Method -->
    <div id="cooking-method-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="cooking-modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeCookingMethodModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-3xl border border-slate-100">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <div class="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                    <h3 class="text-[25px] leading-[35px] font-bold leading-6 text-slate-800" id="cooking-modal-title">
                      Cách chế biến -
                      <span id="cooking-modal-ingredient-name"></span>
                    </h3>
                    <button onclick="closeCookingMethodModal()" class="text-slate-400 hover:text-slate-500 transition-colors">
                      <i class="fa-solid fa-xmark text-[25px] leading-[35px]"></i>
                    </button>
                  </div>
                  <div id="cooking-methods-list" class="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    <!-- Methods will be rendered here -->
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-slate-50 px-4 py-4 sm:flex sm:flex-row-reverse sm:px-6 border-t border-slate-100">
              <button type="button" class="mt-3 inline-flex w-full justify-center rounded-xl bg-white px-4 py-2.5 text-[17.5px] leading-[25px] font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto transition-colors" onclick="closeCookingMethodModal()">
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Dish -->
    <div id="dish-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pointer-events-none">
          <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl pointer-events-auto">
            <form id="dish-form" onsubmit="saveDish(event)">
              <input type="hidden" id="dish-id">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-b border-slate-100">
                <h3 class="text-[25px] leading-[35px] font-semibold leading-6 text-slate-900 mb-6" id="modal-title">
                  Thêm món ăn mới
                </h3>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div class="md:col-span-2">
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1 flex justify-between">
                        <span>Tên món ăn <span class="text-red-500">*</span></span>
                        <button type="button" onclick="autoFillDishAI()" class="text-[15px] leading-[20px] text-indigo-600 hover:text-indigo-800 font-bold bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded flex items-center gap-1 transition-colors">
                          ✨ Tự điền (Nuri)
                        </button>
                      </label>
                      <input type="text" id="dish-name" required="" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors">
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Nhóm <span class="text-red-500">*</span></label>
                      <select id="dish-category" onchange="handleCategoryChange()" required="" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors bg-white">
                        <option value="complete">Món hoàn chỉnh</option>
                        <option value="weekly_special">Món mới mỗi tuần</option>
                        <option value="protein">Đạm</option>
                        <option value="carbs">Tinh bột</option>
                        <option value="veggies">Rau củ</option>
                        <option value="sauce">Nước sốt</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Đánh giá (1-5 sao)</label>
                      <input type="number" id="dish-rating" min="1" max="5" step="0.1" value="5" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors">
                    </div>
                  </div>
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-2">Ảnh Thumbnail</label>
                    <div class="flex items-center gap-4">
                      <div class="w-20 h-20 rounded-lg border border-slate-200 overflow-hidden bg-slate-50 flex-shrink-0 flex items-center justify-center relative group">
                        <img id="dish-image-preview" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Preview" class="w-full h-full object-cover hidden">
                        <i id="dish-image-placeholder" class="fa-regular fa-image text-slate-400 text-[30px] leading-[40px]"></i>
                        <label for="dish-image-upload" class="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"><i class="fa-solid fa-camera text-white"></i></label>
                      </div>
                      <div class="flex-1">
                        <input type="file" id="dish-image-upload" accept="image/*" class="hidden" onchange="previewImage(event)">
                        <label for="dish-image-upload" class="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-[17.5px] leading-[25px] font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 cursor-pointer transition-colors"><i class="fa-solid fa-upload mr-2 text-slate-500"></i>
                          Tải ảnh lên</label>
                        <p class="text-[15px] leading-[20px] text-slate-500 mt-2">
                          Hỗ trợ: JPG, PNG, WEBP.
                        </p>
                      </div>
                      <input type="hidden" id="dish-image-data">
                    </div>
                  </div>
                  <div id="dish-ingredients-wrapper">
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Thành phần chi tiết</label>
                    <textarea id="dish-ingredients" rows="2" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"></textarea>
                  </div>
                  <div id="dish-nutrition-wrapper" class="mt-6 border border-slate-200 rounded-xl overflow-hidden">
                    <div class="bg-slate-50 px-4 py-2 border-b border-slate-200">
                      <h4 class="font-medium text-[17.5px] leading-[25px] text-slate-700">
                        <i class="fa-solid fa-scale-balanced mr-1"></i> Chỉ số
                        dinh dưỡng theo Size
                      </h4>
                    </div>
                    <div class="p-4 grid gap-4 sm:grid-cols-3">
                      <div class="bg-white border border-slate-200 rounded-lg p-3">
                        <p class="font-medium text-[17.5px] leading-[25px] text-slate-800 mb-3 border-b pb-2">
                          Size Lean (S)
                        </p>
                        <div class="mb-3">
                          <label class="text-[15px] leading-[20px] text-slate-700 font-bold">Giá bán (VNĐ)
                            <span class="text-red-500">*</span></label>
                          <input type="number" id="s-price" required="" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-[17.5px] leading-[25px]">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Kcal</label><input type="number" id="s-kcal" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Đạm (g)</label><input type="number" id="s-protein" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Tinh bột (g)</label><input type="number" id="s-carbs" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Béo (g)</label><input type="number" id="s-fat" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                        </div>
                        <div class="mb-3 border-t pt-3 mt-3 space-y-2">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu sống (kg)
                            </label>
                            <input type="number" step="0.001" id="s-raw-ingQty" oninput="calculateDishYield('s', 'raw')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.20">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Tỉ lệ hao hụt YIELD (%)
                            </label>
                            <input type="number" step="1" min="1" max="100" id="s-yield" oninput="calculateDishYield('s', 'yield')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="Mặc định: 100" value="100">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu chín (kg)
                            </label>
                            <input type="number" step="0.001" id="s-main-ingQty" oninput="calculateDishYield('s', 'cooked')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.15">
                          </div>
                        </div>
                      </div>
                      <div class="bg-white border border-slate-200 rounded-lg p-3">
                        <p class="font-medium text-[17.5px] leading-[25px] text-slate-800 mb-3 border-b pb-2">
                          Size Balance (M)
                        </p>
                        <div class="mb-3">
                          <label class="text-[15px] leading-[20px] text-slate-700 font-bold">Giá bán (VNĐ)
                            <span class="text-red-500">*</span></label>
                          <input type="number" id="m-price" required="" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-[17.5px] leading-[25px]">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Kcal</label><input type="number" id="m-kcal" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Đạm (g)</label><input type="number" id="m-protein" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Tinh bột (g)</label><input type="number" id="m-carbs" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Béo (g)</label><input type="number" id="m-fat" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                        </div>
                        <div class="mb-3 border-t pt-3 mt-3 space-y-2">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu sống (kg)
                            </label>
                            <input type="number" step="0.001" id="m-raw-ingQty" oninput="calculateDishYield('m', 'raw')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.20">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Tỉ lệ hao hụt YIELD (%)
                            </label>
                            <input type="number" step="1" min="1" max="100" id="m-yield" oninput="calculateDishYield('m', 'yield')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="Mặc định: 100" value="100">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu chín (kg)
                            </label>
                            <input type="number" step="0.001" id="m-main-ingQty" oninput="calculateDishYield('m', 'cooked')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.15">
                          </div>
                        </div>
                      </div>
                      <div class="bg-white border border-slate-200 rounded-lg p-3">
                        <p class="font-medium text-[17.5px] leading-[25px] text-slate-800 mb-3 border-b pb-2">
                          Size Power (L)
                        </p>
                        <div class="mb-3">
                          <label class="text-[15px] leading-[20px] text-slate-700 font-bold">Giá bán (VNĐ)
                            <span class="text-red-500">*</span></label>
                          <input type="number" id="l-price" required="" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-[17.5px] leading-[25px]">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Kcal</label><input type="number" id="l-kcal" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Đạm (g)</label><input type="number" id="l-protein" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Tinh bột (g)</label><input type="number" id="l-carbs" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Béo (g)</label><input type="number" id="l-fat" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                        </div>
                        <div class="mb-3 border-t pt-3 mt-3 space-y-2">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu sống (kg)
                            </label>
                            <input type="number" step="0.001" id="l-raw-ingQty" oninput="calculateDishYield('l', 'raw')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.30">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Tỉ lệ hao hụt YIELD (%)
                            </label>
                            <input type="number" step="1" min="1" max="100" id="l-yield" oninput="calculateDishYield('l', 'yield')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="Mặc định: 100" value="100">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu chín (kg)
                            </label>
                            <input type="number" step="0.001" id="l-main-ingQty" oninput="calculateDishYield('l', 'cooked')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.25">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center mt-4 hidden" id="apply-to-all-methods-wrapper">
                    <input type="checkbox" id="apply-to-all-methods" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer">
                    <label for="apply-to-all-methods" class="ml-2 block text-[17.5px] leading-[25px] text-slate-700 cursor-pointer font-medium text-emerald-700">Áp dụng chỉ số dinh dưỡng này cho toàn bộ cách chế biến
                      (áp chảo, luộc,...)</label>
                  </div>
                  <div class="flex items-center mt-4">
                    <input type="checkbox" id="dish-active" checked="" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer">
                    <label for="dish-active" class="ml-2 block text-[17.5px] leading-[25px] text-slate-700 cursor-pointer">Kích hoạt hiển thị trên menu</label>
                  </div>
                </div>
              </div>
              <div class="bg-slate-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="submit" class="inline-flex w-full justify-center rounded-lg bg-primary px-3 py-2 text-[17.5px] leading-[25px] font-medium text-white shadow-sm hover:bg-primaryHover sm:ml-3 sm:w-auto transition-colors">
                  Lưu món ăn
                </button>
                <button type="button" onclick="closeModal()" class="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-[17.5px] leading-[25px] font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto transition-colors">
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Edit Cooking Method -->
    <div id="method-edit-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="method-edit-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeMethodEditModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pointer-events-none">
          <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl pointer-events-auto">
            <form id="method-edit-form" onsubmit="saveMethodEdit(event)">
              <input type="hidden" id="method-edit-dish-id">
              <input type="hidden" id="method-edit-index">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-b border-slate-100">
                <h3 class="text-[25px] leading-[35px] font-semibold leading-6 text-slate-900 mb-6" id="method-edit-title">
                  Sửa cách chế biến
                </h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Tên cách chế biến
                      <span class="text-red-500">*</span></label>
                    <input type="text" id="me-name" required="" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors">
                  </div>
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Ảnh Thumbnail (URL)</label>
                    <input type="text" id="me-image" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors mb-2" placeholder="Nhập URL ảnh..." onchange="
                        document.getElementById('me-image-preview').src =
                          this.value;
                        document
                          .getElementById('me-image-preview')
                          .classList.toggle('hidden', !this.value);
                      ">
                    <img id="me-image-preview" src="" class="hidden w-32 h-32 object-cover rounded-lg border border-slate-200 mt-2">
                  </div>
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Thành phần chi tiết</label>
                    <textarea id="me-ingredients" rows="2" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"></textarea>
                  </div>

                  <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 class="font-bold text-slate-800 text-[17.5px] leading-[25px] mb-4 flex items-center gap-2">
                      <i class="fa-solid fa-scale-balanced"></i> Chỉ số dinh
                      dưỡng theo Size
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <!-- Standard Size -->
                      <div class="bg-white border border-slate-200 rounded-lg p-3">
                        <p class="font-medium text-[17.5px] leading-[25px] text-slate-800 mb-3 border-b pb-2">
                          Size Lean (S)
                        </p>
                        <div class="mb-3">
                          <label class="text-[15px] leading-[20px] text-slate-700 font-bold">Giá bán (VNĐ)
                            <span class="text-red-500">*</span></label>
                          <input type="number" id="me-s-price" required="" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-[17.5px] leading-[25px]">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Kcal</label><input type="number" id="me-s-kcal" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Đạm (g)</label><input type="number" id="me-s-protein" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Tinh bột (g)</label><input type="number" id="me-s-carbs" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Béo (g)</label><input type="number" id="me-s-fat" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                        </div>
                        <div class="mb-3 border-t pt-3 mt-3 space-y-2">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu sống (kg)
                            </label>
                            <input type="number" step="0.001" id="me-s-raw-qty" oninput="calculateMethodYield('s', 'raw')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.20">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Tỉ lệ hao hụt YIELD (%)
                            </label>
                            <input type="number" step="1" min="1" max="100" id="me-s-yield" oninput="calculateMethodYield('s', 'yield')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="Mặc định: 100" value="100">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu chín (kg)
                            </label>
                            <input type="number" step="0.001" id="me-s-main-qty" oninput="calculateMethodYield('s', 'cooked')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.15">
                          </div>
                        </div>
                      </div>
                      <div class="bg-white border border-slate-200 rounded-lg p-3">
                        <p class="font-medium text-[17.5px] leading-[25px] text-slate-800 mb-3 border-b pb-2">
                          Size Balance (M)
                        </p>
                        <div class="mb-3">
                          <label class="text-[15px] leading-[20px] text-slate-700 font-bold">Giá bán (VNĐ)
                            <span class="text-red-500">*</span></label>
                          <input type="number" id="me-m-price" required="" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-[17.5px] leading-[25px]">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Kcal</label><input type="number" id="me-m-kcal" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Đạm (g)</label><input type="number" id="me-m-protein" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Tinh bột (g)</label><input type="number" id="me-m-carbs" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Béo (g)</label><input type="number" id="me-m-fat" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                        </div>
                        <div class="mb-3 border-t pt-3 mt-3 space-y-2">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu sống (kg)
                            </label>
                            <input type="number" step="0.001" id="me-m-raw-qty" oninput="calculateMethodYield('m', 'raw')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.20">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Tỉ lệ hao hụt YIELD (%)
                            </label>
                            <input type="number" step="1" min="1" max="100" id="me-m-yield" oninput="calculateMethodYield('m', 'yield')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="Mặc định: 100" value="100">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu chín (kg)
                            </label>
                            <input type="number" step="0.001" id="me-m-main-qty" oninput="calculateMethodYield('m', 'cooked')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.15">
                          </div>
                        </div>
                      </div>
                      <!-- Large Size -->
                      <div class="bg-white border border-slate-200 rounded-lg p-3">
                        <p class="font-medium text-[17.5px] leading-[25px] text-slate-800 mb-3 border-b pb-2">
                          Size Power (L)
                        </p>
                        <div class="mb-3">
                          <label class="text-[15px] leading-[20px] text-slate-700 font-bold">Giá bán (VNĐ)
                            <span class="text-red-500">*</span></label>
                          <input type="number" id="me-l-price" required="" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-[17.5px] leading-[25px]">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Kcal</label><input type="number" id="me-l-kcal" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Đạm (g)</label><input type="number" id="me-l-protein" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Tinh bột (g)</label><input type="number" id="me-l-carbs" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-500">Béo (g)</label><input type="number" id="me-l-fat" required="" class="w-full border rounded px-2 py-1 mt-1">
                          </div>
                        </div>
                        <div class="mb-3 border-t pt-3 mt-3 space-y-2">
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu sống (kg)
                            </label>
                            <input type="number" step="0.001" id="me-l-raw-qty" oninput="calculateMethodYield('l', 'raw')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.30">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Tỉ lệ hao hụt YIELD (%)
                            </label>
                            <input type="number" step="1" min="1" max="100" id="me-l-yield" oninput="calculateMethodYield('l', 'yield')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="Mặc định: 100" value="100">
                          </div>
                          <div>
                            <label class="text-[15px] leading-[20px] text-slate-700 font-bold block">Định lượng nguyên liệu chín (kg)
                            </label>
                            <input type="number" step="0.001" id="me-l-main-qty" oninput="calculateMethodYield('l', 'cooked')" class="w-full border border-slate-300 rounded px-2 py-1.5 mt-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-[17.5px] leading-[25px]" placeholder="VD: 0.25">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-slate-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="submit" class="inline-flex w-full justify-center rounded-lg bg-emerald-600 px-3 py-2 text-[17.5px] leading-[25px] font-medium text-white shadow-sm hover:bg-emerald-700 sm:ml-3 sm:w-auto transition-colors">
                  Lưu thay đổi
                </button>
                <button type="button" onclick="closeMethodEditModal()" class="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-[17.5px] leading-[25px] font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto transition-colors">
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Self Mix Error -->
    <div id="self-mix-error-modal" class="fixed inset-0 z-[9999] hidden flex items-center justify-center" role="dialog" aria-modal="true">
      <!-- Backdrop with click to close -->
      <div class="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity cursor-pointer" onclick="closeSelfMixErrorModal()"></div>

      <!-- Center Content -->
      <div class="relative z-10 flex flex-col items-center justify-center p-6 text-center pointer-events-auto cursor-pointer" onclick="closeSelfMixErrorModal()">
        <!-- Circular Mascot Container -->
        <div class="w-64 h-64 rounded-full border border-emerald-500/40 bg-[#071415]/90 flex items-center justify-center p-8 shadow-[0_0_40px_rgba(16,185,129,0.25)] mb-6 transition-transform transform hover:scale-105 duration-300">
          <div id="self-mix-error-mascot" class="w-full h-full flex items-center justify-center"></div>
        </div>

        <!-- Notification Text -->
        <h3 class="text-[25px] leading-[35px] md:text-[30px] leading-[40px] font-bold text-emerald-400 tracking-wide max-w-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] px-4" id="self-mix-error-title">
          Bạn cần đăng kí tính năng "tự mix món" để hoàn thành
        </h3>

        <!-- Action clue -->
        <p class="text-[15px] leading-[20px] text-slate-400 font-medium opacity-70 mt-3 animate-pulse">
          ( Nhấp vào bất kỳ đâu để đóng )
        </p>
      </div>
    </div>

    <!-- Modal: Create Dish Multi-step -->
    <div id="create-dish-modal" class="fixed inset-0 z-[9999] hidden" style="z-index: 9999" aria-labelledby="create-dish-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeCreateDishModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pointer-events-none">
          <div class="relative transform overflow-hidden rounded-3xl bg-slate-50 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl pointer-events-auto border border-slate-200">
            <!-- Header -->
            <div class="bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-800" id="create-dish-title">
                  <i class="fa-solid fa-utensils text-orange-500 mr-2"></i> Công
                  cụ Tạo Món Ăn Mới
                </h3>
                <p class="text-[15px] leading-[20px] text-slate-500 mt-0.5">
                  Tạo nhanh món ăn hoàn chỉnh theo lộ trình dinh dưỡng
                </p>
              </div>
              <button type="button" onclick="closeCreateDishModal()" class="text-slate-400 hover:text-slate-600 transition-colors p-1.5 hover:bg-slate-50 rounded-full cursor-pointer">
                <i class="fa-solid fa-xmark text-[22.5px] leading-[35px]"></i>
              </button>
            </div>

            <!-- Steps Progress Indicator -->
            <div class="bg-white px-6 py-3 border-b border-slate-100 flex items-center justify-between overflow-x-auto gap-4 scrollbar-none">
              <div id="step-ind-1" class="flex items-center gap-2 shrink-0">
                <span class="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[15px] leading-[20px] font-bold">1</span>
                <span class="text-[15px] leading-[20px] font-bold text-orange-600">Chọn Đạm</span>
              </div>
              <div class="h-0.5 w-6 bg-slate-200 shrink-0" id="step-line-1"></div>
              <div id="step-ind-2" class="flex items-center gap-2 shrink-0">
                <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[15px] leading-[20px] font-bold">2</span>
                <span class="text-[15px] leading-[20px] font-semibold text-slate-500">Tinh Bột</span>
              </div>
              <div class="h-0.5 w-6 bg-slate-200 shrink-0" id="step-line-2"></div>
              <div id="step-ind-3" class="flex items-center gap-2 shrink-0">
                <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[15px] leading-[20px] font-bold">3</span>
                <span class="text-[15px] leading-[20px] font-semibold text-slate-500">Rau Củ</span>
              </div>
              <div class="h-0.5 w-6 bg-slate-200 shrink-0" id="step-line-3"></div>
              <div id="step-ind-4" class="flex items-center gap-2 shrink-0">
                <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[15px] leading-[20px] font-bold">4</span>
                <span class="text-[15px] leading-[20px] font-semibold text-slate-500">Nước Sốt &amp; Hoàn Thành</span>
              </div>
            </div>

            <!-- Main Content Grid -->
            <div class="p-6 max-h-[60vh] overflow-y-auto" id="create-dish-step-container">
              <!-- Content loaded dynamically via JS -->
            </div>

            <!-- Footer Actions -->
            <div class="bg-white px-6 py-4 border-t border-slate-100 flex justify-between items-center">
              <button type="button" id="create-dish-prev-btn" onclick="prevCreateDishStep()" class="inline-flex justify-center rounded-xl bg-white px-4 py-2.5 text-[17.5px] leading-[25px] font-bold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition-colors cursor-pointer hidden">
                <i class="fa-solid fa-arrow-left mr-1.5 mt-0.5"></i> Quay lại
              </button>
              <div class="flex-1"></div>
              <button type="button" id="create-dish-next-btn" onclick="nextCreateDishStep()" class="inline-flex justify-center rounded-xl bg-orange-500 px-5 py-2.5 text-[17.5px] leading-[25px] font-bold text-white shadow-md hover:bg-orange-600 transition-colors cursor-pointer">
                Tiếp tục <i class="fa-solid fa-arrow-right ml-1.5 mt-0.5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Discount -->
    <div id="discount-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeDiscountModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pointer-events-none">
          <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md pointer-events-auto">
            <form id="discount-form" onsubmit="saveDiscountCode(event)">
              <input type="hidden" id="discount-id">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-b border-slate-100">
                <h3 class="text-[25px] leading-[35px] font-semibold leading-6 text-slate-900 mb-4" id="discount-modal-title">
                  Tạo mã giảm giá
                </h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Mã CODE <span class="text-red-500">*</span></label>
                    <input type="text" id="discount-code" required="" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary text-[17.5px] leading-[25px] uppercase">
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Mức giảm <span class="text-red-500">*</span></label>
                      <input type="number" id="discount-amount" required="" min="1" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary text-[17.5px] leading-[25px]">
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Loại giảm</label>
                      <select id="discount-type" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary text-[17.5px] leading-[25px]">
                        <option value="percent">% Phầm trăm</option>
                        <option value="fixed">VND Tiền mặt</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Hạn sử dụng</label>
                    <input type="date" id="discount-expiry" class="w-full rounded-lg border border-slate-300 py-2 px-3 focus:border-primary text-[17.5px] leading-[25px]">
                  </div>
                  <div class="flex items-center mt-2">
                    <input type="checkbox" id="discount-active" checked="" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer">
                    <label for="discount-active" class="ml-2 block text-[17.5px] leading-[25px] text-slate-700 cursor-pointer">Kích hoạt mã ngay</label>
                  </div>
                </div>
              </div>
              <div class="bg-slate-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="submit" class="inline-flex w-full justify-center rounded-lg bg-primary px-3 py-2 text-[17.5px] leading-[25px] font-medium text-white shadow-sm hover:bg-primaryHover sm:ml-3 sm:w-auto transition-colors">
                  Lưu mã
                </button>
                <button type="button" onclick="closeDiscountModal()" class="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-[17.5px] leading-[25px] font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto transition-colors">
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Purchased -->
    
    <!-- Batch Export Bill Modal -->
    <div id="batch-export-bill-modal" class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm hidden animate-fade-in p-4">
      <div class="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative border border-slate-100">
        <button onclick="closeBatchExportBillModal()" class="absolute top-6 right-6 text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-50 transition-colors">
          <i class="fa-solid fa-times text-[22.5px] leading-[35px]"></i>
        </button>
        <h3 class="text-[30px] leading-[40px] font-black text-slate-800 tracking-tight mb-2 flex items-center gap-2">
          <i class="fa-solid fa-receipt text-indigo-500"></i> Xuất Bill Hàng Loạt
        </h3>
        <p class="text-[17.5px] leading-[25px] text-slate-500 mb-6 font-medium">Xuất bill cho khách đang có gói và trừ số bữa còn lại.</p>

        <div class="space-y-4">
          <div>
            <label class="block text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Ngày Xuất</label>
            <input type="date" id="batch-export-date" class="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium">
          </div>
          <div>
            <label class="block text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Bữa Ăn</label>
            <select id="batch-export-meal" class="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium text-slate-700 bg-white">
              <option value="meal1">Trưa</option>
              <option value="meal2">Tối</option>
            </select>
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100">
          <button type="button" onclick="closeBatchExportBillModal()" class="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors">Đóng</button>
          <button type="button" onclick="submitBatchExportBill()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2">
            <i class="fa-solid fa-check"></i> Xác nhận
          </button>
        </div>
      </div>
    </div>

<div id="purchased-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closePurchasedModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pointer-events-none">
          <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md pointer-events-auto">
            <form id="purchased-form" onsubmit="savePurchasedCustomer(event)">
              <input type="hidden" id="purchased-id">
              <input type="hidden" id="purchased-exported-meals" value="0">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-b border-slate-100">
                <h3 class="text-[25px] leading-[35px] font-semibold leading-6 text-slate-900 mb-4" id="purchased-modal-title">
                  Khách mua gói mới
                </h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Tài khoản khách hàng (Tùy chọn)</label>
                    <select id="purchased-account-select" onchange="autofillPurchasedCustomer()" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]">
                      <option value="">
                        -- Nhập mới hoặc chọn tài khoản --
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Họ và tên <span class="text-red-500">*</span></label>
                    <input type="text" id="purchased-name" required="" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]">
                  </div>
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Số điện thoại <span class="text-red-500">*</span></label>
                    <input type="tel" id="purchased-phone" required="" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]">
                  </div>
                  <div class="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-3">
                    <label class="block text-[15px] leading-[20px] font-bold text-slate-600 uppercase tracking-wider mb-1">Địa chỉ nhận hàng</label>
                    <div class="grid grid-cols-2 gap-3">
                      <select id="purchased-district" required="" class="w-full rounded border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] bg-white" onchange="updatePurchasedWards()">
                        <option value="">Quận/Huyện *</option>
                      </select>
                      <select id="purchased-ward" required="" disabled="" class="w-full rounded border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] disabled:bg-slate-100 disabled:text-slate-400">
                        <option value="">Phường/Xã *</option>
                      </select>
                    </div>
                    <div>
                      <input type="text" id="purchased-street" required="" class="w-full rounded border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]" placeholder="Số nhà, Tên đường cụ thể *">
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Gói đăng ký</label>
                      <select id="purchased-package" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]" onchange="autoCalculatePurchasedEndDate()">
                        <option value="target_7">
                          Gói Trải Nghiệm (1 Tuần)
                        </option>
                        <option value="target_14">
                          Gói Chuyển Đổi (2 Tuần)
                        </option>
                        <option value="target_30">Gói Bứt Phá (1 Tháng)</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Size đăng ký</label>
                      <select id="purchased-size" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]">
                        <option value="lean">Size Lean (S)</option>
                        <option value="balance">Size Balance (M)</option>
                        <option value="power">Size Power (L)</option>
                      </select>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Ngày bắt đầu</label>
                      <input type="date" id="purchased-start" required="" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]" onchange="autoCalculatePurchasedEndDate()">
                    </div>
                    <div>
                      <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1 flex justify-between items-center gap-1">
                        <span class="shrink-0 flex items-center gap-2">Ngày kết thúc <span id="purchased-remaining-badge" class="hidden text-[15px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded"></span></span>
                        <button type="button" onclick="extendPurchasedEndDate()" class="text-[15px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded hover:bg-emerald-200 flex items-center gap-1 transition-colors" title="Gia hạn thêm 1 chu kỳ gói">
                          <i class="fa-solid fa-clock-rotate-left text-[14px]"></i>
                          Gia hạn nhanh
                        </button>
                      </label>
                      <input type="date" id="purchased-end" required="" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]">
                    </div>
                  </div>
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Ghi chú đơn hàng</label>
                    <input type="text" id="purchased-notes" placeholder="Không hành, nhiều rau..." class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]">
                  </div>
                  <div class="mt-4 flex items-center gap-2">
                    <input type="checkbox" id="purchased-self-mix" class="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary">
                    <label for="purchased-self-mix" class="text-[17.5px] leading-[25px] font-medium text-slate-700 cursor-pointer">
                      Tự mix món
                    </label>
                  </div>
                </div>
              </div>
              <div class="bg-slate-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="submit" class="inline-flex w-full justify-center rounded-lg bg-primary px-3 py-2 text-[17.5px] leading-[25px] font-medium text-white shadow-sm hover:bg-primaryHover sm:ml-3 sm:w-auto transition-colors">
                  Lưu thông tin
                </button>
                <button type="button" onclick="closePurchasedModal()" class="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-[17.5px] leading-[25px] font-medium text-slate-900 shadow-sm border border-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto">
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Shipper -->
    <div id="shipper-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeShipperModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pointer-events-none">
        <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md pointer-events-auto">
          <form id="shipper-form" onsubmit="saveShipper(event)">
            <input type="hidden" id="shipper-id">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-b border-slate-100">
              <h3 class="text-[25px] leading-[35px] font-semibold text-slate-900 mb-4" id="shipper-modal-title">
                Thêm Shipper
              </h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Tên Shipper *</label><input type="text" id="shipper-name" required="" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]">
                </div>
                <div>
                  <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Số điện thoại *</label><input type="tel" id="shipper-phone" required="" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]">
                </div>
                <div>
                  <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Biển số xe</label><input type="text" id="shipper-plate" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] uppercase">
                </div>
                <div>
                  <label class="block text-[17.5px] leading-[25px] font-medium text-slate-700 mb-1">Trạng thái</label>
                  <select id="shipper-status" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px]">
                    <option value="active">Đang rảnh</option>
                    <option value="busy">Đang giao đơn</option>
                    <option value="offline">Tạm nghỉ</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="bg-slate-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="submit" class="inline-flex w-full justify-center rounded-lg bg-blue-500 px-3 py-2 text-[17.5px] leading-[25px] font-medium text-white shadow-sm hover:bg-blue-600 sm:ml-3 sm:w-auto">
                Lưu
              </button>
              <button type="button" onclick="closeShipperModal()" class="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-[17.5px] leading-[25px] font-medium text-slate-900 border border-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto">
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal: Weekly Menu -->
    <div id="weekly-menu-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeCustomerMenuModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center sm:p-0 pointer-events-none">
        <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl pointer-events-auto">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-b border-slate-100 flex justify-between items-center sticky top-0 z-10">
            <div>
              <h3 class="text-[25px] leading-[35px] font-semibold text-slate-900" id="weekly-menu-title">
                Lên thực đơn 7 ngày
              </h3>
              <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1" id="weekly-menu-subtitle">
                Khách hàng: ...
              </p>
            </div>
            <button type="button" onclick="closeCustomerMenuModal()" class="text-slate-400 hover:text-slate-600">
              <i class="fa-solid fa-xmark text-[30px] leading-[40px]"></i>
            </button>
          </div>
          <div class="p-6 bg-slate-50 max-h-[60vh] overflow-y-auto custom-scrollbar">
            <input type="hidden" id="menu-customer-id">
            <div class="space-y-4" id="weekly-menu-container"></div>
          </div>
          <div class="bg-white px-4 py-4 sm:flex sm:flex-row-reverse sm:px-6 border-t border-slate-100">
            <button type="button" onclick="saveCustomerMenu()" class="inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-[17.5px] leading-[25px] font-medium text-white shadow-sm hover:bg-primaryHover sm:ml-3 sm:w-auto">
              <i class="fa-solid fa-floppy-disk mr-2 mt-0.5"></i> Lưu thực đơn
            </button>
            <button type="button" onclick="closeCustomerMenuModal()" class="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-5 py-2.5 text-[17.5px] leading-[25px] font-medium text-slate-900 border border-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Dish Picker for Weekly Menu -->

    <!-- Modal: Public Menu -->
    <div id="public-menu-modal" class="fixed inset-0 z-[100] hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closePublicMenu()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-2xl bg-slate-50 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl flex flex-col max-h-[90vh]">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-b border-slate-100 flex justify-between items-center shrink-0">
            <div>
              <h3 class="text-[30px] leading-[40px] font-bold text-slate-900">
                Menu Đầy Đủ
              </h3>
              <p class="text-[17.5px] leading-[25px] text-slate-500 mt-1">
                Khám phá các món ăn đa dạng từ Nuri
              </p>
            </div>
            <button type="button" onclick="closePublicMenu()" class="text-slate-400 hover:text-slate-600">
              <i class="fa-solid fa-xmark text-[30px] leading-[40px]"></i>
            </button>
          </div>
          <div class="p-6 bg-slate-50 overflow-y-auto custom-scrollbar flex-1" id="public-menu-modal-content">
            <!-- Shared menu content will be injected here -->
          </div>
        </div>
      </div>
    </div>

    <!-- Locked Menu Modal -->
    <div id="locked-menu-modal" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300">
      <div class="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl transform scale-95 transition-all duration-300">
        <div class="p-6 text-center">
          <div class="w-32 h-32 mx-auto mb-4" id="locked-menu-mascot-container">
            <!-- SVG will be injected here -->
          </div>
          <h3 class="text-[25px] leading-[35px] font-bold text-slate-800 mb-2">
            Xin lỗi bạn nhé!
          </h3>
          <p class="text-slate-600 text-[17.5px] leading-[25px] mb-6">
            Món ăn của bữa ăn chỉ được thay đổi trước 2 ngày so với ngày giao.
          </p>
          <button onclick="closeLockedMenuModal()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition-colors">
            Đã hiểu
          </button>
        </div>
      </div>
    </div>

    <div id="dish-picker-modal" class="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeDishPickerModal()"></div>
      <div class="fixed inset-0 z-[60] overflow-y-auto flex min-h-full items-center justify-center p-4 text-center sm:p-0 pointer-events-none">
        <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all my-8 w-full max-w-4xl pointer-events-auto flex flex-col max-h-[90vh]">
          <!-- Header -->
          <div class="bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center shrink-0">
            <div>
              <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-900 flex items-center gap-2">
                <i class="fa-solid fa-utensils text-emerald-500"></i>
                <span id="dish-picker-modal-title">Chọn món ăn</span>
              </h3>
              <p class="text-[15px] leading-[20px] text-slate-500 mt-0.5" id="dish-picker-modal-subtitle">
                Vui lòng chọn món ăn và kích cỡ phù hợp cho bữa ăn này
              </p>
            </div>
            <button type="button" onclick="closeDishPickerModal()" class="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
              <i class="fa-solid fa-xmark text-[25px] leading-[35px]"></i>
            </button>
          </div>

          <!-- Category filter bar -->
          <div class="px-6 py-3 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center gap-2 shrink-0">
            <span class="text-[15px] leading-[20px] font-semibold text-slate-500 uppercase tracking-wider mr-2">Bộ lọc món:</span>
            <div class="flex flex-wrap gap-1.5" id="dish-picker-categories">
              <!-- Dynamically rendered category buttons -->
            </div>
          </div>

          <!-- Dishes Grid Container -->
          <div class="p-6 overflow-y-auto custom-scrollbar flex-grow bg-slate-50/50">
            <!-- Skip Option Box -->
            <div class="mb-4">
              <button type="button" onclick="selectDishPickerItem('', 'balance')" class="w-full bg-white border border-dashed border-rose-300 hover:border-rose-500 text-rose-600 hover:bg-rose-50/50 py-3 rounded-xl font-medium text-[17.5px] leading-[25px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                <i class="fa-solid fa-ban"></i> -- Bỏ qua bữa này --
              </button>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id="dish-picker-grid">
              <!-- Dynamically populated dish cards -->
            </div>
          </div>

          <!-- Footer -->
          <div class="bg-white px-6 py-4 border-t border-slate-100 flex justify-end shrink-0">
            <button type="button" onclick="closeDishPickerModal()" class="rounded-xl bg-white px-5 py-2.5 text-[17.5px] leading-[25px] font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all shadow-sm cursor-pointer">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Quick Order Generator -->
    <div id="quick-order-modal" class="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeQuickOrderModal()"></div>
      <div class="fixed inset-0 z-[60] overflow-y-auto flex min-h-full items-center justify-center p-4 text-center sm:p-0 pointer-events-none">
        <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all my-8 w-full max-w-2xl pointer-events-auto flex flex-col max-h-[90vh]">
          <!-- Header -->
          <div class="bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center shrink-0">
            <div>
              <h3 class="text-[22.5px] leading-[35px] font-bold text-slate-900 flex items-center gap-2">
                <i class="fa-solid fa-magic text-emerald-500 animate-pulse"></i>
                <span>Công cụ Tạo đơn hàng Tự động</span>
              </h3>
              <p class="text-[15px] leading-[20px] text-slate-500 mt-0.5">
                Tự động tạo và điều phối đơn hàng nhanh dựa trên dữ liệu khách
                hàng và món ăn
              </p>
            </div>
            <button type="button" onclick="closeQuickOrderModal()" class="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
              <i class="fa-solid fa-xmark text-[25px] leading-[35px]"></i>
            </button>
          </div>

          <!-- Body Container -->
          <div class="p-6 overflow-y-auto custom-scrollbar flex-grow bg-slate-50/50 space-y-4">
            <!-- Step 1: Customer Selection -->
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-3">
              <h4 class="text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-user-tag text-slate-400"></i> Bước 1: Chọn
                Khách hàng &amp; Địa chỉ
              </h4>
              <div>
                <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Khách hàng nhận đơn</label>
                <select id="qo-customer-select" onchange="onQuickOrderCustomerChange()" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[17.5px] leading-[25px] focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 bg-white">
                  <option value="">-- Chọn khách hàng --</option>
                  <!-- Dynamically populated with purchasedCustomers and potentialCustomers -->
                </select>
              </div>

              <!-- Pre-populated customer info fields -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1" id="qo-customer-info-box">
                <div>
                  <label class="block text-[15px] leading-[20px] font-medium text-slate-400 mb-1">Số điện thoại</label>
                  <input type="text" id="qo-phone" class="w-full rounded-lg border border-slate-200 py-1.5 px-3 text-[15px] leading-[20px] bg-slate-50" readonly="">
                </div>
                <div>
                  <label class="block text-[15px] leading-[20px] font-medium text-slate-400 mb-1">Size đăng ký / Mặc định</label>
                  <input type="text" id="qo-default-size" class="w-full rounded-lg border border-slate-200 py-1.5 px-3 text-[15px] leading-[20px] bg-slate-50" readonly="">
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-[15px] leading-[20px] font-medium text-slate-400 mb-1">Địa chỉ giao hàng</label>
                  <textarea id="qo-address" rows="1" class="w-full rounded-lg border border-slate-200 py-1.5 px-3 text-[15px] leading-[20px] bg-slate-50" readonly=""></textarea>
                </div>
              </div>
            </div>

            <!-- Step 2: Generation Mode Selector -->
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-3">
              <h4 class="text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-utensils text-slate-400"></i> Bước 2: Chọn
                phương thức lên món
              </h4>

              <!-- Tab Navigation -->
              <div class="flex border-b border-slate-100 pb-1 gap-4">
                <button type="button" id="qo-tab-weekly" onclick="setQuickOrderMode('weekly')" class="pb-2 text-[15px] leading-[20px] font-bold border-b-2 border-emerald-500 text-emerald-600 transition-all cursor-pointer">
                  Theo Thực đơn tuần (Gói)
                </button>
                <button type="button" id="qo-tab-custom" onclick="setQuickOrderMode('custom')" class="pb-2 text-[15px] leading-[20px] font-semibold border-b-2 border-transparent text-slate-400 hover:text-slate-600 transition-all cursor-pointer">
                  Chọn món tùy chỉnh (Lẻ)
                </button>
              </div>

              <!-- Mode Content 1: Weekly Menu Selection -->
              <div id="qo-content-weekly" class="space-y-3">
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Chọn thứ trong tuần</label>
                    <select id="qo-weekday-select" onchange="onQuickOrderWeeklyConfigChange()" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[15px] leading-[20px] focus:ring-1 focus:ring-emerald-500 bg-white">
                      <option value="monday">Thứ Hai</option>
                      <option value="tuesday">Thứ Ba</option>
                      <option value="wednesday">Thứ Tư</option>
                      <option value="thursday">Thứ Năm</option>
                      <option value="friday">Thứ Sáu</option>
                      <option value="saturday">Thứ Bảy</option>
                      <option value="sunday">Chủ Nhật</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Bữa ăn muốn giao</label>
                    <select id="qo-meal-type-select" onchange="onQuickOrderWeeklyConfigChange()" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[15px] leading-[20px] focus:ring-1 focus:ring-emerald-500 bg-white">
                      <option value="all">Cả ngày (Gộp Bữa 1 &amp; Bữa 2)</option>
                      <option value="meal1">Bữa 1</option>
                      <option value="meal2">Bữa 2</option>
                    </select>
                  </div>
                </div>

                <!-- Preview of weekly menu dishes for selected day -->
                <div class="bg-slate-50/80 rounded-xl p-3 border border-slate-200/50 space-y-2 text-[15px] leading-[20px]" id="qo-weekly-preview">
                  <span class="text-slate-400 italic">Vui lòng chọn khách hàng để xem thực đơn tuần...</span>
                </div>
              </div>

              <!-- Mode Content 2: Custom Dishes Selection -->
              <div id="qo-content-custom" class="hidden space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                  <div>
                    <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Chọn món ăn</label>
                    <select id="qo-dish-select" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[15px] leading-[20px] focus:ring-1 focus:ring-emerald-500 bg-white">
                      <option value="">-- Chọn món ăn --</option>
                      <!-- Dynamically populated with active dishes -->
                    </select>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div>
                      <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Kích cỡ (Size)</label>
                      <select id="qo-size-select" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[15px] leading-[20px] focus:ring-1 focus:ring-emerald-500 bg-white">
                        <option value="lean">Lean (S)</option>
                        <option value="balance">Balance (M)</option>
                        <option value="power">Size Power (L)</option>
                      </select>
                    </div>
                    <button type="button" onclick="addDishToQuickOrderList()" class="bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-700 font-bold text-[15px] leading-[20px] py-2 px-3 rounded-lg flex items-center justify-center gap-1 h-9 cursor-pointer transition-all shrink-0">
                      <i class="fa-solid fa-plus"></i> Thêm
                    </button>
                  </div>
                </div>

                <!-- Custom dishes list -->
                <div class="border border-slate-200/60 rounded-xl overflow-hidden bg-white">
                  <table class="w-full text-[15px] leading-[20px] text-left">
                    <thead class="bg-slate-50 text-slate-500 border-b border-slate-100">
                      <tr>
                        <th class="px-3 py-2">Món ăn</th>
                        <th class="px-3 py-2 text-center">Kích cỡ</th>
                        <th class="px-3 py-2 text-center">Số lượng</th>
                        <th class="px-3 py-2 text-right">Hành động</th>
                      </tr>
                    </thead>
                    <tbody id="qo-custom-list-body">
                      <tr>
                        <td colspan="4" class="px-3 py-6 text-center text-slate-400 italic">
                          Chưa có món nào được chọn. Vui lòng thêm từ hộp chọn
                          phía trên.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Step 3: Order Settings -->
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-3">
              <h4 class="text-[15px] leading-[20px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-cog text-slate-400"></i> Bước 3: Tuỳ chỉnh
                Đơn hàng &amp; Trạng thái
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Ghi chú giao hàng</label>
                  <input type="text" id="qo-notes-input" placeholder="Không hành, nhiều rau..." class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[15px] leading-[20px] focus:ring-1 focus:ring-emerald-500">
                </div>
                <div>
                  <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Trạng thái khởi tạo</label>
                  <select id="qo-status-select" class="w-full rounded-lg border border-slate-300 py-2 px-3 text-[15px] leading-[20px] focus:ring-1 focus:ring-emerald-500 bg-white">
                    <option value="pending" selected="">
                      Chờ xác nhận (Pending)
                    </option>
                    <option value="processing">
                      Đang chế biến (Processing)
                    </option>
                    <option value="ready">Sẵn sàng giao (Ready)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="bg-white px-6 py-4 border-t border-slate-100 flex justify-between shrink-0">
            <span class="text-[18px] text-slate-400 italic flex items-center gap-1">
              <i class="fa-solid fa-shield-halved"></i> Đơn sẽ tự động phân
              shipper gần nhất
            </span>
            <div class="flex gap-2">
              <button type="button" onclick="closeQuickOrderModal()" class="rounded-xl bg-white px-5 py-2.5 text-[17.5px] leading-[25px] font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all shadow-sm cursor-pointer">
                Hủy
              </button>
              <button type="button" onclick="submitQuickOrder()" class="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-[17.5px] leading-[25px] font-bold transition-all shadow-sm cursor-pointer flex items-center gap-2">
                <i class="fa-solid fa-paper-plane"></i> Tự động Tạo Đơn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Mascot Schedule -->
    <div id="mascot-schedule-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity opacity-0" id="mascot-schedule-modal-backdrop" onclick="closeMascotScheduleModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div id="mascot-schedule-modal-panel" class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 border border-slate-100">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="flex justify-between items-center mb-5">
                <h3 class="text-[22.5px] leading-[35px] font-bold leading-6 text-slate-900 flex items-center gap-2" id="modal-title">
                  <i class="fa-solid fa-calendar-day text-emerald-500"></i> Lịch
                  trình Mascot
                </h3>
                <button type="button" onclick="closeMascotScheduleModal()" class="text-slate-400 hover:text-slate-500 transition-colors">
                  <i class="fa-solid fa-xmark text-[25px] leading-[35px]"></i>
                </button>
              </div>
              <div class="mt-2">
                <p class="text-[17.5px] leading-[25px] text-slate-500 mb-4">
                  Tùy chỉnh lịch trình hoạt động cho mascot của bạn.
                </p>
                <div id="mascot-schedule-list" class="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                  <!-- Slots will be rendered here -->
                </div>
                <button type="button" onclick="addMascotScheduleSlot()" class="mt-4 w-full border border-dashed border-emerald-300 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 font-semibold py-2 rounded-xl text-[17.5px] leading-[25px] transition-colors flex items-center justify-center gap-2">
                  <i class="fa-solid fa-plus"></i> Thêm khung giờ
                </button>
              </div>
            </div>
            <div class="bg-slate-50 px-4 py-4 sm:flex sm:flex-row-reverse sm:px-6 border-t border-slate-100">
              <button type="button" onclick="saveMascotSchedule()" class="inline-flex w-full justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-[17.5px] leading-[25px] font-semibold text-white shadow-sm hover:bg-emerald-700 sm:ml-3 sm:w-auto transition-colors">
                Lưu lại
              </button>
              <button type="button" onclick="closeMascotScheduleModal()" class="mt-3 inline-flex w-full justify-center rounded-xl bg-white px-5 py-2.5 text-[17.5px] leading-[25px] font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto transition-colors">
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Account -->
    <div id="account-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-slate-900 bg-opacity-50 transition-opacity" aria-hidden="true" onclick="closeAccountModal()"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
        <div class="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div class="bg-white px-6 pt-6 pb-4">
            <div class="flex justify-between items-center mb-5">
              <h3 class="text-[25px] leading-[35px] leading-6 font-bold text-slate-800" id="account-modal-title">
                Tạo Tài Khoản
              </h3>
              <button onclick="closeAccountModal()" class="text-slate-400 hover:text-slate-600 transition-colors">
                <i class="fa-solid fa-times text-[25px] leading-[35px]"></i>
              </button>
            </div>
            <form id="account-form" onsubmit="saveAccount(event)">
              <input type="hidden" id="account-id">
              <div class="space-y-4">
                <div>
                  <label class="block text-[17.5px] leading-[25px] font-semibold text-slate-700 mb-1">Tên khách hàng <span class="text-red-500">*</span></label>
                  <input type="text" id="account-name" required="" class="w-full border border-slate-300 rounded-lg px-4 py-2 text-[17.5px] leading-[25px] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                </div>
                <div>
                  <label class="block text-[17.5px] leading-[25px] font-semibold text-slate-700 mb-1">Số điện thoại <span class="text-red-500">*</span></label>
                  <input type="tel" id="account-phone" required="" class="w-full border border-slate-300 rounded-lg px-4 py-2 text-[17.5px] leading-[25px] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                </div>
                <div>
                  <label class="block text-[17.5px] leading-[25px] font-semibold text-slate-700 mb-1">Mật khẩu <span class="text-red-500">*</span></label>
                  <input type="text" id="account-password" required="" class="w-full border border-slate-300 rounded-lg px-4 py-2 text-[17.5px] leading-[25px] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Mật khẩu cho khách">
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-semibold text-slate-700 mb-1">Điểm tích lũy</label>
                    <input type="number" id="account-points" value="0" min="0" class="w-full border border-slate-300 rounded-lg px-4 py-2 text-[17.5px] leading-[25px] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                  </div>
                  <div>
                    <label class="block text-[17.5px] leading-[25px] font-semibold text-slate-700 mb-1">Hạng thành viên</label>
                    <select id="account-rank" class="w-full border border-slate-300 rounded-lg px-4 py-2 text-[17.5px] leading-[25px] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                      <option value="Hạt mầm">Hạt mầm</option>
                      <option value="Mầm cây">Mầm cây</option>
                      <option value="Cây non">Cây non</option>
                      <option value="Cây sự sống">Cây sự sống</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-5">
                <button type="button" onclick="closeAccountModal()" class="px-5 py-2.5 rounded-lg text-[17.5px] leading-[25px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors">
                  Hủy
                </button>
                <button type="submit" class="px-5 py-2.5 rounded-lg text-[17.5px] leading-[25px] font-medium text-white bg-primary hover:bg-primaryHover shadow-sm transition-colors">
                  Lưu tài khoản
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: AI Route Optimization -->
    <div id="route-ai-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm" onclick="closeRouteAIModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center sm:p-0 pointer-events-none">
        <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl pointer-events-auto flex flex-col max-h-[90vh]">
          <div class="bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-4 flex justify-between items-center shrink-0">
            <h3 class="text-[22.5px] leading-[35px] font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-route"></i> Nuri Điều phối Logistics
            </h3>
            <button type="button" onclick="closeRouteAIModal()" class="text-white/80 hover:text-white transition-colors">
              <i class="fa-solid fa-xmark text-[25px] leading-[35px]"></i>
            </button>
          </div>

          <div class="p-6 bg-slate-50 overflow-y-auto custom-scrollbar flex-1" id="route-ai-content">
            <!-- Default State -->
            <div id="route-ai-intro" class="text-center py-8">
              <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-500 text-[45px] leading-[50px] shadow-inner">
                <i class="fa-solid fa-brain"></i>
              </div>
              <h4 class="text-[25px] leading-[35px] font-bold text-slate-800 mb-2">
                Tối ưu hóa Phân công tự động
              </h4>
              <p class="text-slate-500 text-[17.5px] leading-[25px] max-w-md mx-auto mb-6">
                Nuri sẽ phân tích địa chỉ của các đơn hàng
                <b class="text-slate-700">chưa phân công</b> và nhóm chúng theo
                khu vực địa lý để tính toán lộ trình ngắn nhất cho đội ngũ
                Shipper.
              </p>
              <button onclick="startRouteOptimization()" class="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-md transition-all flex items-center gap-2 mx-auto">
                <i class="fa-solid fa-bolt"></i> Bắt đầu phân tích ngay
              </button>
            </div>

            <!-- Loading State -->
            <div id="route-ai-loading" class="hidden text-center py-12">
              <div class="inline-block animate-spin rounded-full h-14 w-14 border-4 border-slate-200 border-t-indigo-500 mb-4"></div>
              <h4 class="text-[22.5px] leading-[35px] font-bold text-slate-700">
                Đang tính toán ma trận khoảng cách...
              </h4>
              <p class="text-[17.5px] leading-[25px] text-slate-500 mt-2">
                Đang gom nhóm các đơn hàng tại các Quận lân cận cho Shipper.
              </p>
            </div>

            <!-- Result State -->
            <div id="route-ai-result" class="hidden space-y-4">
              <!-- Content injected via JS -->
            </div>
          </div>

          <div id="route-ai-footer" class="bg-white px-6 py-4 border-t border-slate-100 flex justify-end gap-3 hidden shrink-0">
            <button type="button" onclick="closeRouteAIModal()" class="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium transition-colors">
              Hủy bỏ
            </button>
            <button type="button" id="btn-apply-routes" class="px-5 py-2.5 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 font-medium shadow-sm transition-colors flex items-center gap-2">
              <i class="fa-solid fa-check-double"></i> Áp dụng Phân công
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- New Order Popup Notification -->
    <div id="new-order-popup" class="fixed inset-0 z-[60] hidden flex items-center justify-center">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm transition-opacity" onclick="closeNewOrderPopup()"></div>
      <div class="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 transform transition-all animate-fade-in text-center z-10">
        <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i class="fa-solid fa-bell text-[37.5px] leading-[45px] text-primary animate-[ring_1s_ease-in-out_infinite]"></i>
        </div>
        <h3 class="text-[25px] leading-[35px] font-bold text-slate-800 mb-2">Có đơn hàng mới!</h3>
        <p class="text-slate-600 mb-6 text-[17.5px] leading-[25px]" id="new-order-popup-msg"></p>
        <div class="flex gap-3 justify-center">
          <button onclick="closeNewOrderPopup()" class="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-medium transition-colors">
            Đóng
          </button>
          <button onclick="viewNewOrder()" class="flex-1 px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primaryHover font-medium transition-colors shadow-sm">
            Xem ngay
          </button>
        </div>
      </div>
    </div>

    <!-- Floating Exit Simulation Button -->
    <button id="btn-exit-simulation" onclick="exitSimulation()" class="hidden fixed bottom-6 left-[calc(max(1.5rem,(100vw-1280px)/2+1.5rem))] z-[100] bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 hover:bg-slate-800 transition-all cursor-pointer border border-slate-700 font-bold animate-fade-in">
      <i class="fa-solid fa-arrow-right-from-bracket rotate-180"></i> Thoát xem
      thử
    </button>

    <!-- Hidden area for printing delivery note -->
    <div id="print-area" style="display: none"></div>

    <!-- Modal: Neon Wheel -->
    <div id="neon-wheel-modal" class="fixed inset-0 z-[200] hidden items-center justify-center bg-slate-900/95 backdrop-blur-md p-4 animate-fade-in" onclick="if (event.target === this) closeNeonWheelModal();">
      <div class="relative w-full max-w-sm flex flex-col items-center">
        <!-- Close button -->
        <button onclick="closeNeonWheelModal()" class="absolute -top-12 right-0 text-white/50 hover:text-white text-[37.5px] leading-[45px] transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <h3 class="text-[30px] leading-[40px] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-8 uppercase tracking-widest animate-pulse text-center leading-relaxed">
          Vòng Quay <br>May Mắn
        </h3>

        <div class="relative w-[320px] h-[320px] mx-auto mb-8">
          <!-- Outer Glow -->
          <div class="absolute inset-[-15px] rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 opacity-40 blur-xl animate-[spin_4s_linear_infinite] z-0"></div>

          <!-- Pointer -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-[0_0_15px_rgba(16,185,129,0.9)] text-emerald-400 text-[60px] leading-[60px]">
            <i class="fa-solid fa-caret-down"></i>
          </div>

          <!-- The Wheel -->
          <div class="relative w-full h-full" style="filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.8))">
            <div id="customer-neon-wheel" class="w-full h-full rounded-full overflow-hidden relative transition-transform duration-[1500ms] ease-[cubic-bezier(0.17,0.67,0.12,0.99)] z-10 border-[6px] border-emerald-900/50">
              <!-- Generated by JS -->
            </div>
          </div>

          <!-- Center Button -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-b from-slate-100 to-slate-400 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.8)] flex flex-col items-center justify-center z-20 cursor-pointer hover:scale-110 active:scale-95 transition-all border-4 border-emerald-900" onclick="window.spinNeonWheel()">
            <span class="text-[15px] leading-[20px] font-black text-slate-800 uppercase tracking-widest drop-shadow-sm">Quay</span>
          </div>
        </div>

        <!-- Mascot Celebrate -->
        <img id="wheel-mascot-celebrate-img" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-contain z-[150] drop-shadow-2xl hidden" alt="Mascot Ăn Mừng">
        <div id="neon-wheel-result" class="text-center font-bold text-[25px] leading-[35px] text-white opacity-0 transition-opacity duration-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] flex flex-col items-center justify-center h-[80px]">
          <span class="text-slate-300 text-[17.5px] leading-[25px] font-medium mb-1">Chúc mừng bạn nhận được:</span>
          <span id="neon-wheel-prize-text" class="text-[37.5px] leading-[45px] text-emerald-400 uppercase tracking-wider block"></span>
        </div>
        <button id="neon-wheel-apply-btn" onclick="applyNeonWheelPrize()" class="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full font-bold text-[22.5px] leading-[35px] shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all hidden">
          Sử Dụng Khuyến Mãi
        </button>
      </div>
    </div>

    <!-- Modal: Wheel Cooldown -->
    <div id="wheel-cooldown-modal" class="fixed inset-0 z-[210] hidden items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 animate-fade-in" onclick="if (event.target === this) closeCooldownModal();">
      <div class="relative w-full max-w-sm bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-2xl flex flex-col items-center text-center">
        <!-- Close button -->
        <button onclick="closeCooldownModal()" class="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors text-[25px] leading-[35px]">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div class="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 text-[37.5px] leading-[45px] mb-4 animate-pulse">
          <i class="fa-solid fa-clock-rotate-left"></i>
        </div>

        <h3 class="text-[25px] leading-[35px] font-black text-white mb-2 uppercase tracking-wide">
          Đang Trong Thời Gian Chờ
        </h3>
        <p class="text-[17.5px] leading-[25px] text-slate-400 mb-6 leading-relaxed">
          Mỗi thiết bị chỉ được tham gia vòng quay may mắn
          <span class="text-emerald-400 font-bold">1 lần mỗi 1 giờ</span> để đảm
          bảo tính công bằng.
        </p>

        <!-- Countdown Display -->
        <div class="bg-slate-900 rounded-2xl border border-slate-800/80 px-6 py-4 w-full mb-6">
          <span class="text-[15px] leading-[20px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Thời gian còn lại</span>
          <span id="cooldown-timer-display" class="text-[37.5px] leading-[45px] font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 tracking-widest drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]">00:00:00</span>
        </div>

        <button onclick="closeCooldownModal()" class="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-bold transition-colors">
          Xác Nhận
        </button>
      </div>
    </div>

    <!-- Rating Modal -->
    <div id="rating-modal" class="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4 transition-all duration-300 opacity-0 pointer-events-none">
      <div class="transform scale-95 transition-all duration-300 w-full max-w-sm bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden relative" id="rating-modal-content">
        <div class="p-6 text-center">
          <div class="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[30px] leading-[40px] text-amber-500">
            <i class="fa-solid fa-star"></i>
          </div>
          <h3 class="text-[25px] leading-[35px] font-black text-slate-800 mb-2">
            Đánh giá món ăn
          </h3>
          <p class="text-[17.5px] leading-[25px] text-slate-500 mb-6">
            Bạn cảm thấy món này thế nào? Đánh giá của bạn giúp chúng tôi cải
            thiện thực đơn.
          </p>
          <div class="flex justify-center gap-3 mb-6" id="star-rating-container">
            <button onclick="setRating(1)" class="text-[45px] leading-[50px] text-slate-200 hover:text-amber-400 hover:scale-110 transition-all star-btn">
              <i class="fa-solid fa-star"></i>
            </button>
            <button onclick="setRating(2)" class="text-[45px] leading-[50px] text-slate-200 hover:text-amber-400 hover:scale-110 transition-all star-btn">
              <i class="fa-solid fa-star"></i>
            </button>
            <button onclick="setRating(3)" class="text-[45px] leading-[50px] text-slate-200 hover:text-amber-400 hover:scale-110 transition-all star-btn">
              <i class="fa-solid fa-star"></i>
            </button>
            <button onclick="setRating(4)" class="text-[45px] leading-[50px] text-slate-200 hover:text-amber-400 hover:scale-110 transition-all star-btn">
              <i class="fa-solid fa-star"></i>
            </button>
            <button onclick="setRating(5)" class="text-[45px] leading-[50px] text-slate-200 hover:text-amber-400 hover:scale-110 transition-all star-btn">
              <i class="fa-solid fa-star"></i>
            </button>
          </div>
          <input type="hidden" id="rating-dish-id" value="">
          <button onclick="submitRating()" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-colors shadow-[0_4px_10px_rgba(16,185,129,0.3)]">
            Gửi đánh giá
          </button>
          <button onclick="closeRatingModal()" class="w-full mt-3 text-slate-400 hover:text-slate-600 font-semibold py-2 transition-colors">
            Bỏ qua
          </button>
        </div>
      </div>
    </div>

    <!-- Wrap-up Report Modal -->
    <div id="wrapup-modal" class="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4 transition-all duration-300 opacity-0 pointer-events-none">
      <div class="transform scale-95 transition-all duration-300 w-full max-w-lg bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-900 rounded-[2rem] shadow-2xl border-4 border-emerald-800/60 overflow-hidden relative" id="wrapup-modal-content">
        <!-- Confetti wrapper inside modal -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]" id="wrapup-confetti"></div>
        <div class="p-6 md:p-8 relative z-10 text-white" id="wrapup-modal-body-content">
          <!-- Dynamic content will be loaded here -->
        </div>
      </div>
    </div>

    <div id="toast-container" class="fixed bottom-5 right-5 z-[80] flex flex-col gap-2 pointer-events-none"></div>

    <!-- Center Success Overlay -->
    <div id="success-overlay" class="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4 transition-all duration-300 opacity-0 pointer-events-none">
      <div class="transform scale-95 transition-all duration-300 flex flex-col items-center text-center" id="success-overlay-content">
        <h3 class="text-[45px] leading-[50px] font-black text-white mb-6 drop-shadow-[0_4px_10px_rgba(16,185,129,0.8)] uppercase tracking-wider animate-bounce">
          Đăng Ký Thành Công!
        </h3>
        <div class="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-center">
          <img id="success-mascot-img" class="w-full h-full object-contain drop-shadow-2xl" alt="Mascot Ăn Mừng">
        </div>
        <p id="success-overlay-text" class="text-white/90 text-[17.5px] leading-[25px] mt-6 max-w-sm drop-shadow-md">
          Nuri Kitchen đã tiếp nhận thông tin và sẽ liên hệ với bạn trong thời
          gian sớm nhất.
        </p>
      </div>
    </div>

    <!-- Inventory Add/Edit Modal -->
    <div id="inventory-modal" class="fixed inset-0 z-[200] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 hidden">
      <div class="bg-white rounded-3xl w-full max-w-md shadow-2xl transform scale-95 transition-all duration-300" id="inventory-modal-content">
        <div class="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-3xl">
          <h3 class="font-bold text-slate-800 text-[22.5px] leading-[35px] flex items-center gap-2">
            <i class="fa-solid fa-boxes-stacked text-emerald-500"></i>
            <span id="inventory-modal-title">Thêm Nguyên liệu mới</span>
          </h3>
          <button onclick="closeInventoryModal()" class="text-slate-400 hover:text-slate-600 text-[25px] leading-[35px] transition-colors">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form id="inventory-form" onsubmit="saveInventory(event)" class="p-6 space-y-5">
          <input type="hidden" id="inv-id" value="">
          <div>
            <label class="block text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">Tên nguyên liệu</label>
            <input type="text" id="inv-name" required="" class="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 px-4 focus:bg-white focus:outline-none focus:border-emerald-500 transition-all text-[17.5px] leading-[25px] font-medium" placeholder="VD: Xà lách xoong...">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">Danh mục</label>
              <select id="inv-category" class="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 px-4 focus:bg-white focus:outline-none focus:border-emerald-500 transition-all text-[17.5px] leading-[25px] font-medium">
                <option value="Thịt">Thịt</option>
                <option value="Rau củ">Rau củ</option>
                <option value="Tinh bột">Tinh bột</option>
                <option value="Thủy Sản">Thủy Sản</option>
                <option value="Gia vị">Gia vị</option>
                <option value="Khác">Khác</option>
              </select>
            </div>
            <div>
              <label class="block text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">Đơn vị tính</label>
              <input type="text" id="inv-unit" required="" value="kg" oninput="
                  var el = document.getElementById('inv-unit-lbl');
                  if (el) el.innerText = this.value;
                " class="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 px-4 focus:bg-white focus:outline-none focus:border-emerald-500 transition-all text-[17.5px] leading-[25px] font-medium">
            </div>
          </div>
          <div>
            <label class="block text-[17.5px] leading-[25px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">Tồn kho hiện tại</label>
            <div class="relative">
              <input type="number" id="inv-stock" step="0.01" required="" min="0" value="0" class="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 px-4 pr-12 focus:bg-white focus:outline-none focus:border-emerald-500 transition-all text-[17.5px] leading-[25px] font-medium">
              <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[17.5px] leading-[25px]" id="inv-unit-lbl">kg</span>
            </div>
          </div>
          <div class="pt-4 flex gap-3">
            <button type="button" onclick="closeInventoryModal()" class="flex-1 px-4 py-3 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 font-bold transition-colors">
              Hủy
            </button>
            <button type="submit" class="flex-1 px-4 py-3 rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 font-bold transition-colors shadow-md shadow-emerald-500/20">
              Lưu lại
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Recent Sales Popup -->
    <div id="recent-sales-popup" class="fixed bottom-8 left-[calc(max(2rem,(100vw-1280px)/2+2rem))] z-[60] bg-white shadow-2xl rounded-2xl p-6 flex items-center gap-6 transition-all duration-500 transform translate-y-[150%] opacity-0 max-w-[560px] md:max-w-3xl pointer-events-none">
      <div class="bg-emerald-100 text-emerald-600 rounded-full w-20 h-20 flex items-center justify-center shrink-0">
        <i class="fa-solid fa-shopping-bag text-[37.5px] leading-[45px]"></i>
      </div>
      <div>
        <p class="text-[40px] md:text-[30px] leading-[40px] text-slate-800 leading-tight" id="rsp-text"></p>
        <p class="text-[30px] md:text-[22.5px] leading-[35px] text-slate-500 mt-1">
          Vài giây trước
        </p>
      </div>
    </div>

    

    

    <!-- Pricing Modal -->
    <div id="pricing-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4">
      <div id="pricing-modal-content" class="bg-[#FFFDF5] rounded-3xl w-full max-w-5xl shadow-2xl transform scale-95 transition-all duration-300 flex flex-col max-h-[90vh]" onclick="event.stopPropagation()">
        <!-- Header -->
        <div class="p-6 md:p-8 text-center relative border-b border-slate-200 bg-white rounded-t-3xl">
          <h2 class="text-[37.5px] leading-[45px] md:text-[45px] leading-[50px] font-black text-[#15803D] uppercase tracking-tight pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 transition-colors duration-200" id="pricing-title">
            Bảng Giá Tiết Kiệm
          </h2>
          <p class="text-slate-600 font-medium mt-2 pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 transition-colors duration-200" id="pricing-subtitle">
            Chỉ từ 64k/bữa - Giao hàng tận nơi mỗi ngày
          </p>
          <button onclick="closePricingModal()" class="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full flex items-center justify-center transition-colors focus:outline-none">
            <i class="fa-solid fa-xmark text-[22.5px] leading-[35px]"></i>
          </button>
        </div>

        <!-- Body -->
        <div class="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
          <!-- Gói 5 Ngày -->
          <div id="pricing-tab-5" class="pricing-tab hidden">
            <div class="text-center mb-6">
              <h3 class="text-[30px] leading-[40px] font-black text-[#0F172A] pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 inline-block" id="p-5-title">
                Gói 5 Ngày
              </h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <!-- Size Lean (S) -->
              <div class="flex flex-col">
                <div class="bg-[#15803D] text-white text-center py-3 rounded-t-2xl font-bold text-[22.5px] leading-[35px] uppercase tracking-wider shadow-sm pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-700 transition-colors duration-200" id="p-5-c0-title">
                  Size Lean (S)
                </div>
                <div class="bg-emerald-50 border-x-2 border-b-2 border-[#15803D] rounded-b-2xl p-4 md:p-5 space-y-4 flex-1 shadow-sm relative">
                  <!-- 1 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-0-1-c">1</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-0-1-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-5-0-1-p">320</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-0-1-u">64</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-0-1-ul">/bữa</span>
                    </div>
                  </div>
                  <!-- 2 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-0-2-c">2</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-0-2-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-5-0-2-p">620</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-0-2-u">62</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-0-2-ul">/bữa</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Size Balance (M) -->
              <div class="flex flex-col">
                <div class="bg-[#15803D] text-white text-center py-3 rounded-t-2xl font-bold text-[22.5px] leading-[35px] uppercase tracking-wider shadow-sm pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-700 transition-colors duration-200" id="p-5-c1-title">
                  Size Balance (M)
                </div>
                <div class="bg-emerald-50 border-x-2 border-b-2 border-[#15803D] rounded-b-2xl p-4 md:p-5 space-y-4 flex-1 shadow-sm relative">
                  <!-- 1 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-1-1-c">1</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-1-1-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-5-1-1-p">350</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-1-1-u">70</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-1-1-ul">/bữa</span>
                    </div>
                  </div>
                  <!-- 2 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-1-2-c">2</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-1-2-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-5-1-2-p">680</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-1-2-u">68</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-1-2-ul">/bữa</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Size Power (L) -->
              <div class="flex flex-col">
                <div class="bg-[#15803D] text-white text-center py-3 rounded-t-2xl font-bold text-[22.5px] leading-[35px] uppercase tracking-wider shadow-sm pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-700 transition-colors duration-200" id="p-5-c2-title">
                  Size Power (L)
                </div>
                <div class="bg-emerald-50 border-x-2 border-b-2 border-[#15803D] rounded-b-2xl p-4 md:p-5 space-y-4 flex-1 shadow-sm relative">
                  <!-- 1 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-2-1-c">1</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-2-1-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-5-2-1-p">450</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-2-1-u">90</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-2-1-ul">/bữa</span>
                    </div>
                  </div>
                  <!-- 2 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-2-2-c">2</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-5-2-2-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-5-2-2-p">880</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-2-2-u">88</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-5-2-2-ul">/bữa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gói 10 Ngày -->
          <div id="pricing-tab-10" class="pricing-tab hidden">
            <div class="text-center mb-6">
              <h3 class="text-[30px] leading-[40px] font-black text-[#0F172A] pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 inline-block" id="p-10-title">
                Gói 10 Ngày
              </h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <!-- Size Lean (S) -->
              <div class="flex flex-col">
                <div class="bg-[#15803D] text-white text-center py-3 rounded-t-2xl font-bold text-[22.5px] leading-[35px] uppercase tracking-wider shadow-sm pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-700 transition-colors duration-200" id="p-10-c0-title">
                  Size Lean (S)
                </div>
                <div class="bg-emerald-50 border-x-2 border-b-2 border-[#15803D] rounded-b-2xl p-4 md:p-5 space-y-4 flex-1 shadow-sm relative">
                  <!-- 1 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-0-1-c">1</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-0-1-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-10-0-1-p">620</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-0-1-u">62</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-0-1-ul">/bữa</span>
                    </div>
                  </div>
                  <!-- 2 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-0-2-c">2</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-0-2-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-10-0-2-p">1.320</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-0-2-u">66</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-0-2-ul">/bữa</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Size Balance (M) -->
              <div class="flex flex-col">
                <div class="bg-[#15803D] text-white text-center py-3 rounded-t-2xl font-bold text-[22.5px] leading-[35px] uppercase tracking-wider shadow-sm pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-700 transition-colors duration-200" id="p-10-c1-title">
                  Size Balance (M)
                </div>
                <div class="bg-emerald-50 border-x-2 border-b-2 border-[#15803D] rounded-b-2xl p-4 md:p-5 space-y-4 flex-1 shadow-sm relative">
                  <!-- 1 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-1-1-c">1</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-1-1-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-10-1-1-p">680</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-1-1-u">68</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-1-1-ul">/bữa</span>
                    </div>
                  </div>
                  <!-- 2 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-1-2-c">2</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-1-2-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-10-1-2-p">1.320</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-1-2-u">66</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-1-2-ul">/bữa</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Size Power (L) -->
              <div class="flex flex-col">
                <div class="bg-[#15803D] text-white text-center py-3 rounded-t-2xl font-bold text-[22.5px] leading-[35px] uppercase tracking-wider shadow-sm pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-700 transition-colors duration-200" id="p-10-c2-title">
                  Size Power (L)
                </div>
                <div class="bg-emerald-50 border-x-2 border-b-2 border-[#15803D] rounded-b-2xl p-4 md:p-5 space-y-4 flex-1 shadow-sm relative">
                  <!-- 1 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-2-1-c">1</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-2-1-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-10-2-1-p">900</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-2-1-u">90</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-2-1-ul">/bữa</span>
                    </div>
                  </div>
                  <!-- 2 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-2-2-c">2</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-10-2-2-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-10-2-2-p">1.760</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-2-2-u">88</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-10-2-2-ul">/bữa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gói 20 Ngày -->
          <div id="pricing-tab-20" class="pricing-tab hidden">
            <div class="text-center mb-6">
              <h3 class="text-[30px] leading-[40px] font-black text-[#0F172A] pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 inline-block" id="p-20-title">
                Gói 20 Ngày
              </h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <!-- Size Lean (S) -->
              <div class="flex flex-col">
                <div class="bg-[#15803D] text-white text-center py-3 rounded-t-2xl font-bold text-[22.5px] leading-[35px] uppercase tracking-wider shadow-sm pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-700 transition-colors duration-200" id="p-20-c0-title">
                  Size Lean (S)
                </div>
                <div class="bg-emerald-50 border-x-2 border-b-2 border-[#15803D] rounded-b-2xl p-4 md:p-5 space-y-4 flex-1 shadow-sm relative">
                  <!-- 1 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-0-1-c">1</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-0-1-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-20-0-1-p">1.320</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-0-1-u">66</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-0-1-ul">/bữa</span>
                    </div>
                  </div>
                  <!-- 2 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-0-2-c">2</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-0-2-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-20-0-2-p">2.560</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-0-2-u">64</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-0-2-ul">/bữa</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Size Balance (M) -->
              <div class="flex flex-col">
                <div class="bg-[#15803D] text-white text-center py-3 rounded-t-2xl font-bold text-[22.5px] leading-[35px] uppercase tracking-wider shadow-sm pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-700 transition-colors duration-200" id="p-20-c1-title">
                  Size Balance (M)
                </div>
                <div class="bg-emerald-50 border-x-2 border-b-2 border-[#15803D] rounded-b-2xl p-4 md:p-5 space-y-4 flex-1 shadow-sm relative">
                  <!-- 1 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-1-1-c">1</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-1-1-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-20-1-1-p">1.320</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-1-1-u">66</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-1-1-ul">/bữa</span>
                    </div>
                  </div>
                  <!-- 2 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-1-2-c">2</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-1-2-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-20-1-2-p">2.560</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-1-2-u">64</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-1-2-ul">/bữa</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Size Power (L) -->
              <div class="flex flex-col">
                <div class="bg-[#15803D] text-white text-center py-3 rounded-t-2xl font-bold text-[22.5px] leading-[35px] uppercase tracking-wider shadow-sm pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-700 transition-colors duration-200" id="p-20-c2-title">
                  Size Power (L)
                </div>
                <div class="bg-emerald-50 border-x-2 border-b-2 border-[#15803D] rounded-b-2xl p-4 md:p-5 space-y-4 flex-1 shadow-sm relative">
                  <!-- 1 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-2-1-c">1</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-2-1-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-20-2-1-p">1.800</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-2-1-u">90</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-2-1-ul">/bữa</span>
                    </div>
                  </div>
                  <!-- 2 Bữa -->
                  <div class="flex items-stretch h-[72px] bg-white shadow-sm rounded-xl overflow-visible border border-slate-100 relative group transition-transform hover:-translate-y-1">
                    <div class="w-16 bg-[#10B981] flex flex-col items-center justify-center rounded-l-xl border-r border-slate-200 shrink-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] relative">
                      <span class="font-black text-[37.5px] leading-[45px] text-white leading-none pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-2-2-c">2</span>
                      <span class="text-[15px] font-bold text-emerald-50 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-600 rounded transition-colors duration-200" id="p-20-2-2-l">BỮA</span>
                    </div>
                    <div class="flex-1 bg-white flex items-center justify-center z-10">
                      <span class="font-black text-[63px] text-[#15803D] tracking-tighter pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 transition-colors duration-200" id="p-20-2-2-p">3.520</span>
                    </div>
                    <div class="w-[72px] bg-[#15803D] flex flex-col items-center justify-center text-white shrink-0 rounded-r-xl relative z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-6 bg-[#166534] rounded-l-full z-0 shadow-inner"></div>
                      <span class="font-black text-[35px] leading-none z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-2-2-u">88</span>
                      <span class="text-[15px] font-semibold z-10 pricing-editable focus:outline-none focus:ring-2 focus:ring-white focus:bg-emerald-800 rounded px-1 transition-colors duration-200" id="p-20-2-2-ul">/bữa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Notes -->
          <div class="mt-8 bg-white border-2 border-emerald-100 rounded-3xl p-6 md:p-8 shadow-sm">
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <i class="fa-solid fa-leaf text-[#15803D] mt-1 text-[22.5px] leading-[35px] shrink-0"></i>
                <span class="text-slate-700 font-semibold text-[17.5px] leading-[25px] md:text-[20px] leading-[30px] pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 transition-colors duration-200" id="pricing-note1">Bảng giá trên là giá niêm yết chưa bao gồm phí vận
                  chuyển</span>
              </li>
              <li class="flex items-start gap-4">
                <i class="fa-solid fa-leaf text-[#15803D] mt-1 text-[22.5px] leading-[35px] shrink-0"></i>
                <span class="text-slate-700 font-semibold text-[17.5px] leading-[25px] md:text-[20px] leading-[30px] pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 transition-colors duration-200" id="pricing-note2">em.fresh phục vụ thứ 2 - thứ 6 hàng tuần</span>
              </li>
              <li class="flex items-start gap-4">
                <i class="fa-solid fa-leaf text-[#15803D] mt-1 text-[22.5px] leading-[35px] shrink-0"></i>
                <span class="text-slate-700 font-semibold text-[17.5px] leading-[25px] md:text-[20px] leading-[30px] pricing-editable focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 rounded px-1 -mx-1 transition-colors duration-200" id="pricing-note3">Đơn vị tính: nghìn đồng</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
  
    <!-- Modal: Order Platform Modal -->
    <div id="order-platform-modal" class="fixed inset-0 z-[110] hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="closeOrderPlatformModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl border border-slate-100">
            
            <!-- Nút đóng -->
            <button type="button" onclick="closeOrderPlatformModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10">
              <i class="fa-solid fa-xmark text-[22.5px] leading-[35px]"></i>
            </button>

            <div class="p-6 md:p-8">
              <h4 class="text-[22.5px] leading-[35px] font-bold text-[#0F172A] mb-6 text-center">Thông tin đặt hàng</h4>
              <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                          <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Gói đăng ký *</label>
                          <select id="modal-pkg-duration" required class="w-full rounded-xl border border-slate-300 py-3 px-4 text-[17.5px] leading-[25px] focus:border-[#15803D] focus:ring-1 focus:ring-[#15803D] outline-none transition-colors bg-slate-50 focus:bg-white">
                              <option value="7">Trải Nghiệm</option>
                              <option value="14">Chuyển Đổi</option>
                              <option value="30">Bứt Phá</option>
                          </select>
                      </div>
                      <div>
                          <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Size đăng ký *</label>
                          <select id="modal-pkg-size" required class="w-full rounded-xl border border-slate-300 py-3 px-4 text-[17.5px] leading-[25px] focus:border-[#15803D] focus:ring-1 focus:ring-[#15803D] outline-none transition-colors bg-slate-50 focus:bg-white">
                              <option value="lean">Size Lean (S)</option>
                              <option value="balance">Size Balance (M)</option>
                              <option value="power">Size Power (L)</option>
                          </select>
                      </div>
                      <div>
                          <label class="block text-[15px] leading-[20px] font-medium text-slate-500 mb-1">Số bữa ăn *</label>
                          <select id="modal-pkg-meals" required class="w-full rounded-xl border border-slate-300 py-3 px-4 text-[17.5px] leading-[25px] focus:border-[#15803D] focus:ring-1 focus:ring-[#15803D] outline-none transition-colors bg-slate-50 focus:bg-white">
                              <option value="1">1 Bữa</option>
                              <option value="2">2 Bữa</option>
                          </select>
                      </div>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input type="text" id="modal-pkg-name" required placeholder="Họ và tên *" class="w-full rounded-xl border border-slate-300 py-3 px-4 text-[17.5px] leading-[25px] focus:border-[#15803D] focus:ring-1 focus:ring-[#15803D] outline-none transition-colors bg-slate-50 focus:bg-white">
                      <input type="tel" id="modal-pkg-phone" required placeholder="Số điện thoại *" class="w-full rounded-xl border border-slate-300 py-3 px-4 text-[17.5px] leading-[25px] focus:border-[#15803D] focus:ring-1 focus:ring-[#15803D] outline-none transition-colors bg-slate-50 focus:bg-white">
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                      <select id="modal-pkg-district" required class="w-full rounded-xl border border-slate-300 py-3 px-4 text-[17.5px] leading-[25px] focus:border-[#15803D] focus:ring-1 focus:ring-[#15803D] outline-none transition-colors bg-slate-50 focus:bg-white" onchange="updateModalPkgWards()"><option value="">Quận/Huyện *</option></select>
                      <select id="modal-pkg-ward" required disabled class="w-full rounded-xl border border-slate-300 py-3 px-4 text-[17.5px] leading-[25px] disabled:bg-slate-100 disabled:text-slate-400 focus:border-[#15803D] focus:ring-1 focus:ring-[#15803D] outline-none transition-colors bg-slate-50 focus:bg-white"><option value="">Phường/Xã *</option></select>
                  </div>
                  <input type="text" id="modal-pkg-street" required placeholder="Số nhà, Tên đường cụ thể *" class="w-full rounded-xl border border-slate-300 py-3 px-4 text-[17.5px] leading-[25px] focus:border-[#15803D] focus:ring-1 focus:ring-[#15803D] outline-none transition-colors bg-slate-50 focus:bg-white">
                  <button type="button" onclick="submitModalPackage(event)" class="w-full bg-[linear-gradient(135deg,#15803D,#10B981)] lg:hover:bg-[linear-gradient(135deg,#166534,#059669)] text-white font-bold py-3.5 rounded-xl transition-all shadow-md lg:hover:shadow-lg lg:hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-2 mt-2">
                      Xác nhận đăng ký <i class="fa-solid fa-arrow-right"></i>
                  </button>
                  <!-- Trust Badges -->
                  <div class="mt-4 flex justify-center gap-4 flex-wrap">
                      <div class="flex items-center gap-1.5 text-slate-500">
                          <i class="fa-solid fa-shield-check text-emerald-500 text-[20px] leading-[30px]"></i>
                          <span class="text-[15px] leading-[20px] font-semibold">Cam kết hoàn tiền</span>
                      </div>
                      <div class="flex items-center gap-1.5 text-slate-500">
                          <i class="fa-solid fa-leaf text-emerald-500 text-[20px] leading-[30px]"></i>
                          <span class="text-[15px] leading-[20px] font-semibold">100% Nguyên liệu sạch</span>
                      </div>
                      <div class="flex items-center gap-1.5 text-slate-500">
                          <i class="fa-solid fa-user-doctor text-emerald-500 text-[20px] leading-[30px]"></i>
                          <span class="text-[15px] leading-[20px] font-semibold">Bác sĩ khuyên dùng</span>
                      </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
\r
`,ee=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),S=o(((e,t)=>{t.exports=ee()}))();function C(){return(0,_.useEffect)(()=>{if(document.getElementById(`legacy-script-loader`))return;let e=document.createElement(`script`);e.id=`legacy-script-loader`,e.src=`./legacy.js`,e.onload=()=>{let e=document.createElement(`script`);e.src=`./cms.js`,e.onload=()=>{if(window.document.dispatchEvent(new Event(`DOMContentLoaded`,{bubbles:!0,cancelable:!0})),JSON.parse(localStorage.getItem(`nutriadmin_settings`)||`{}`).bannerGrandOpeningEnabled!==!1&&!window.hasShownGrandOpeningPopup){let e=document.getElementById(`home-self-mix-banner`);if(e){let t=new IntersectionObserver(e=>{e[0].isIntersecting&&(window.hasShownGrandOpeningPopup=!0,window.openGrandOpeningPopup&&setTimeout(window.openGrandOpeningPopup,500),t.disconnect())},{threshold:.2});t.observe(e)}}},document.body.appendChild(e)},document.body.appendChild(e)},[]),(0,_.useEffect)(()=>{let e=()=>{let e=new URLSearchParams(window.location.search),t=document.querySelector(`meta[name=viewport]`);t&&(e.get(`mode`)===`admin`?t.setAttribute(`content`,`width=device-width, initial-scale=1.0`):t.setAttribute(`content`,`width=1280`))};e();let t=window.history.pushState;window.history.pushState=function(){t.apply(this,arguments),e()};let n=window.history.replaceState;return window.history.replaceState=function(){n.apply(this,arguments),e()},window.addEventListener(`popstate`,e),()=>{window.removeEventListener(`popstate`,e),window.history.pushState=t,window.history.replaceState=n}},[]),(0,_.useEffect)(()=>{let e=()=>{let e=document.getElementById(`scroll-animation-wrapper`);if(!e)return;let t=e.getBoundingClientRect(),n=window.innerHeight,r=e.offsetHeight,i=n-t.top,a=0;i>0&&(a=Math.min(1,i/r));let o=Math.min(1,a/.25),s=document.getElementById(`curtain-top`),c=document.getElementById(`curtain-bottom`);s&&(s.style.transform=`translateY(-${o*100}%)`),c&&(c.style.transform=`translateY(${o*100}%)`);let l=0;a>.15&&(l=Math.min(1,(a-.15)/.55));let u=document.getElementById(`anim-img-1`),d=document.getElementById(`anim-img-2`),f=document.getElementById(`anim-img-3`),p=document.getElementById(`anim-slogan-1`),m=document.getElementById(`anim-slogan-2`);u&&(u.style.transform=`translate(-50%, ${(1-l)*150}vh)`),d&&(d.style.transform=`translateX(${(1-l)*150}vw)`),f&&(f.style.transform=`translateX(-${(1-l)*150}vw)`),p&&(p.style.opacity=l,p.style.transform=`scale(${.5+.5*l}) translateY(${-50*(1-l)}px)`),m&&(m.style.opacity=l,m.style.transform=`scale(${.5+.5*l}) translateY(${50*(1-l)}px)`)};return window.addEventListener(`scroll`,e),setTimeout(e,500),()=>window.removeEventListener(`scroll`,e)},[]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:y}}),(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:b}}),(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:x}})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,S.jsx)(C,{}));