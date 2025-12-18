(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var gh={exports:{}},Io={};var J_;function hy(){if(J_)return Io;J_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var $_;function dy(){return $_||($_=1,gh.exports=hy()),gh.exports}var J=dy(),_h={exports:{}},ot={};var e0;function py(){if(e0)return ot;e0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function v(N,ae,_e){this.props=N,this.context=ae,this.refs=M,this.updater=_e||T}v.prototype.isReactComponent={},v.prototype.setState=function(N,ae){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ae,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=v.prototype;function L(N,ae,_e){this.props=N,this.context=ae,this.refs=M,this.updater=_e||T}var U=L.prototype=new P;U.constructor=L,b(U,v.prototype),U.isPureReactComponent=!0;var I=Array.isArray;function z(){}var B={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(N,ae,_e){var Ae=_e.ref;return{$$typeof:r,type:N,key:ae,ref:Ae!==void 0?Ae:null,props:_e}}function D(N,ae){return C(N.type,ae,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function oe(N){var ae={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(_e){return ae[_e]})}var j=/\/+/g;function ue(N,ae){return typeof N=="object"&&N!==null&&N.key!=null?oe(""+N.key):ae.toString(36)}function de(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(z,z):(N.status="pending",N.then(function(ae){N.status==="pending"&&(N.status="fulfilled",N.value=ae)},function(ae){N.status==="pending"&&(N.status="rejected",N.reason=ae)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,ae,_e,Ae,ze){var ne=typeof N;(ne==="undefined"||ne==="boolean")&&(N=null);var pe=!1;if(N===null)pe=!0;else switch(ne){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(N.$$typeof){case r:case e:pe=!0;break;case _:return pe=N._init,O(pe(N._payload),ae,_e,Ae,ze)}}if(pe)return ze=ze(N),pe=Ae===""?"."+ue(N,0):Ae,I(ze)?(_e="",pe!=null&&(_e=pe.replace(j,"$&/")+"/"),O(ze,ae,_e,"",function(Ge){return Ge})):ze!=null&&(k(ze)&&(ze=D(ze,_e+(ze.key==null||N&&N.key===ze.key?"":(""+ze.key).replace(j,"$&/")+"/")+pe)),ae.push(ze)),1;pe=0;var Re=Ae===""?".":Ae+":";if(I(N))for(var ke=0;ke<N.length;ke++)Ae=N[ke],ne=Re+ue(Ae,ke),pe+=O(Ae,ae,_e,ne,ze);else if(ke=E(N),typeof ke=="function")for(N=ke.call(N),ke=0;!(Ae=N.next()).done;)Ae=Ae.value,ne=Re+ue(Ae,ke++),pe+=O(Ae,ae,_e,ne,ze);else if(ne==="object"){if(typeof N.then=="function")return O(de(N),ae,_e,Ae,ze);throw ae=String(N),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return pe}function G(N,ae,_e){if(N==null)return N;var Ae=[],ze=0;return O(N,Ae,"","",function(ne){return ae.call(_e,ne,ze++)}),Ae}function te(N){if(N._status===-1){var ae=N._result;ae=ae(),ae.then(function(_e){(N._status===0||N._status===-1)&&(N._status=1,N._result=_e)},function(_e){(N._status===0||N._status===-1)&&(N._status=2,N._result=_e)}),N._status===-1&&(N._status=0,N._result=ae)}if(N._status===1)return N._result.default;throw N._result}var ye=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Se={map:G,forEach:function(N,ae,_e){G(N,function(){ae.apply(this,arguments)},_e)},count:function(N){var ae=0;return G(N,function(){ae++}),ae},toArray:function(N){return G(N,function(ae){return ae})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ot.Activity=x,ot.Children=Se,ot.Component=v,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=L,ot.StrictMode=s,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ot.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},ot.cache=function(N){return function(){return N.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(N,ae,_e){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ae=b({},N.props),ze=N.key;if(ae!=null)for(ne in ae.key!==void 0&&(ze=""+ae.key),ae)!K.call(ae,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ae.ref===void 0||(Ae[ne]=ae[ne]);var ne=arguments.length-2;if(ne===1)Ae.children=_e;else if(1<ne){for(var pe=Array(ne),Re=0;Re<ne;Re++)pe[Re]=arguments[Re+2];Ae.children=pe}return C(N.type,ze,Ae)},ot.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ot.createElement=function(N,ae,_e){var Ae,ze={},ne=null;if(ae!=null)for(Ae in ae.key!==void 0&&(ne=""+ae.key),ae)K.call(ae,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(ze[Ae]=ae[Ae]);var pe=arguments.length-2;if(pe===1)ze.children=_e;else if(1<pe){for(var Re=Array(pe),ke=0;ke<pe;ke++)Re[ke]=arguments[ke+2];ze.children=Re}if(N&&N.defaultProps)for(Ae in pe=N.defaultProps,pe)ze[Ae]===void 0&&(ze[Ae]=pe[Ae]);return C(N,ne,ze)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(N){return{$$typeof:d,render:N}},ot.isValidElement=k,ot.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:te}},ot.memo=function(N,ae){return{$$typeof:p,type:N,compare:ae===void 0?null:ae}},ot.startTransition=function(N){var ae=B.T,_e={};B.T=_e;try{var Ae=N(),ze=B.S;ze!==null&&ze(_e,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(z,ye)}catch(ne){ye(ne)}finally{ae!==null&&_e.types!==null&&(ae.types=_e.types),B.T=ae}},ot.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ot.use=function(N){return B.H.use(N)},ot.useActionState=function(N,ae,_e){return B.H.useActionState(N,ae,_e)},ot.useCallback=function(N,ae){return B.H.useCallback(N,ae)},ot.useContext=function(N){return B.H.useContext(N)},ot.useDebugValue=function(){},ot.useDeferredValue=function(N,ae){return B.H.useDeferredValue(N,ae)},ot.useEffect=function(N,ae){return B.H.useEffect(N,ae)},ot.useEffectEvent=function(N){return B.H.useEffectEvent(N)},ot.useId=function(){return B.H.useId()},ot.useImperativeHandle=function(N,ae,_e){return B.H.useImperativeHandle(N,ae,_e)},ot.useInsertionEffect=function(N,ae){return B.H.useInsertionEffect(N,ae)},ot.useLayoutEffect=function(N,ae){return B.H.useLayoutEffect(N,ae)},ot.useMemo=function(N,ae){return B.H.useMemo(N,ae)},ot.useOptimistic=function(N,ae){return B.H.useOptimistic(N,ae)},ot.useReducer=function(N,ae,_e){return B.H.useReducer(N,ae,_e)},ot.useRef=function(N){return B.H.useRef(N)},ot.useState=function(N){return B.H.useState(N)},ot.useSyncExternalStore=function(N,ae,_e){return B.H.useSyncExternalStore(N,ae,_e)},ot.useTransition=function(){return B.H.useTransition()},ot.version="19.2.1",ot}var t0;function ap(){return t0||(t0=1,_h.exports=py()),_h.exports}var ct=ap(),vh={exports:{}},zo={},xh={exports:{}},Sh={};var n0;function my(){return n0||(n0=1,(function(r){function e(O,G){var te=O.length;O.push(G);e:for(;0<te;){var ye=te-1>>>1,Se=O[ye];if(0<l(Se,G))O[ye]=G,O[te]=Se,te=ye;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var G=O[0],te=O.pop();if(te!==G){O[0]=te;e:for(var ye=0,Se=O.length,N=Se>>>1;ye<N;){var ae=2*(ye+1)-1,_e=O[ae],Ae=ae+1,ze=O[Ae];if(0>l(_e,te))Ae<Se&&0>l(ze,_e)?(O[ye]=ze,O[Ae]=te,ye=Ae):(O[ye]=_e,O[ae]=te,ye=ae);else if(Ae<Se&&0>l(ze,te))O[ye]=ze,O[Ae]=te,ye=Ae;else break e}}return G}function l(O,G){var te=O.sortIndex-G.sortIndex;return te!==0?te:O.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,y=3,E=!1,T=!1,b=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=O)s(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function I(O){if(b=!1,U(O),!T)if(i(m)!==null)T=!0,z||(z=!0,oe());else{var G=i(p);G!==null&&de(I,G.startTime-O)}}var z=!1,B=-1,K=5,C=-1;function D(){return M?!0:!(r.unstable_now()-C<K)}function k(){if(M=!1,z){var O=r.unstable_now();C=O;var G=!0;try{e:{T=!1,b&&(b=!1,P(B),B=-1),E=!0;var te=y;try{t:{for(U(O),x=i(m);x!==null&&!(x.expirationTime>O&&D());){var ye=x.callback;if(typeof ye=="function"){x.callback=null,y=x.priorityLevel;var Se=ye(x.expirationTime<=O);if(O=r.unstable_now(),typeof Se=="function"){x.callback=Se,U(O),G=!0;break t}x===i(m)&&s(m),U(O)}else s(m);x=i(m)}if(x!==null)G=!0;else{var N=i(p);N!==null&&de(I,N.startTime-O),G=!1}}break e}finally{x=null,y=te,E=!1}G=void 0}}finally{G?oe():z=!1}}}var oe;if(typeof L=="function")oe=function(){L(k)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ue=j.port2;j.port1.onmessage=k,oe=function(){ue.postMessage(null)}}else oe=function(){v(k,0)};function de(O,G){B=v(function(){O(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(O){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var te=y;y=G;try{return O()}finally{y=te}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var te=y;y=O;try{return G()}finally{y=te}},r.unstable_scheduleCallback=function(O,G,te){var ye=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ye+te:ye):te=ye,O){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=te+Se,O={id:_++,callback:G,priorityLevel:O,startTime:te,expirationTime:Se,sortIndex:-1},te>ye?(O.sortIndex=te,e(p,O),i(m)===null&&O===i(p)&&(b?(P(B),B=-1):b=!0,de(I,te-ye))):(O.sortIndex=Se,e(m,O),T||E||(T=!0,z||(z=!0,oe()))),O},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(O){var G=y;return function(){var te=y;y=G;try{return O.apply(this,arguments)}finally{y=te}}}})(Sh)),Sh}var i0;function gy(){return i0||(i0=1,xh.exports=my()),xh.exports}var yh={exports:{}},On={};var a0;function _y(){if(a0)return On;a0=1;var r=ap();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},On.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:E}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.1",On}var s0;function vy(){if(s0)return yh.exports;s0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yh.exports=_y(),yh.exports}var r0;function xy(){if(r0)return zo;r0=1;var r=gy(),e=ap(),i=vy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=f;break}if(A===o){S=!0,o=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=u;break}if(A===o){S=!0,o=f,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var j=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===j?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var de=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ye=[],Se=-1;function N(t){return{current:t}}function ae(t){0>Se||(t.current=ye[Se],ye[Se]=null,Se--)}function _e(t,n){Se++,ye[Se]=t.current,t.current=n}var Ae=N(null),ze=N(null),ne=N(null),pe=N(null);function Re(t,n){switch(_e(ne,n),_e(ze,t),_e(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?y_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=y_(n),t=M_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(Ae),_e(Ae,t)}function ke(){ae(Ae),ae(ze),ae(ne)}function Ge(t){t.memoizedState!==null&&_e(pe,t);var n=Ae.current,a=M_(n,t.type);n!==a&&(_e(ze,t),_e(Ae,a))}function mt(t){ze.current===t&&(ae(Ae),ae(ze)),pe.current===t&&(ae(pe),Oo._currentValue=te)}var Qt,_t;function gt(t){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+t+_t}var At=!1;function st(t,n){if(!t||At)return"";At=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(fe){var re=fe}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(fe){re=fe}t.call(ve.prototype)}}else{try{throw Error()}catch(fe){re=fe}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(fe){if(fe&&re&&typeof fe.stack=="string")return[fe.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var H=S.split(`
`),ee=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ee.length)for(o=H.length-1,u=ee.length-1;1<=o&&0<=u&&H[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ee[u]){var me=`
`+H[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{At=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?gt(a):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return st(t.type,!1);case 11:return st(t.type.render,!1);case 1:return st(t.type,!0);case 31:return gt("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Jt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qt=Object.prototype.hasOwnProperty,Mt=r.unstable_scheduleCallback,Rt=r.unstable_cancelCallback,qe=r.unstable_shouldYield,w=r.unstable_requestPaint,g=r.unstable_now,F=r.unstable_getCurrentPriorityLevel,Z=r.unstable_ImmediatePriority,he=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,Pe=r.unstable_LowPriority,Ce=r.unstable_IdlePriority,Ve=r.log,Je=r.unstable_setDisableYieldValue,Ee=null,be=null;function Ie(t){if(typeof Ve=="function"&&Je(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Ee,t)}catch{}}var Be=Math.clz32?Math.clz32:W,De=Math.log,ft=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(De(t)/ft|0)|0}var Ne=256,Te=262144,Fe=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Me(o):(S&=A,S!==0?u=Me(S):a||(a=A&~t,a!==0&&(u=Me(a))))):(A=o&~f,A!==0?u=Me(A):S!==0?u=Me(S):a||(a=o&~t,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function Ct(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ln(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yi(t,n,a,o,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,ee=t.hiddenUpdates;for(a=S&~a;0<a;){var me=31-Be(a),ve=1<<me;A[me]=0,H[me]=-1;var re=ee[me];if(re!==null)for(ee[me]=null,me=0;me<re.length;me++){var fe=re[me];fe!==null&&(fe.lane&=-536870913)}a&=~ve}o!==0&&ll(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function ll(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Wr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function zs(t,n){var a=n&-n;return a=(a&42)!==0?1:qr(a),(a&(t.suspendedLanes|n))!==0?0:a}function qr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Hs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Yr(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:W_(t.type))}function Ii(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var si=Math.random().toString(36).slice(2),ln="__reactFiber$"+si,Mn="__reactProps$"+si,Mi="__reactContainer$"+si,Gs="__reactEvents$"+si,Vs="__reactListeners$"+si,cl="__reactHandles$"+si,jr="__reactResources$"+si,ls="__reactMarker$"+si;function Zr(t){delete t[ln],delete t[Mn],delete t[Gs],delete t[Vs],delete t[cl]}function Aa(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Mi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=w_(t);t!==null;){if(a=t[ln])return a;t=w_(t)}return n}t=a,a=t.parentNode}return null}function Ra(t){if(t=t[ln]||t[Mi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function cs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ca(t){var n=t[jr];return n||(n=t[jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[ls]=!0}var q=new Set,ce={};function se(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(ce[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),He={},Le={};function Xe(t){return qt.call(Le,t)?!0:qt.call(He,t)?!1:Ue.test(t)?Le[t]=!0:(He[t]=!0,!1)}function Ye(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function je(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $t(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jt(t){if(!t._valueTracker){var n=Lt(t)?"checked":"value";t._valueTracker=$t(t,n,""+t[n])}}function Ft(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Ke(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function rt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(t,n,a,o,u,f,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?bn(t,S,et(n)):a!=null?bn(t,S,et(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+et(A):t.removeAttribute("name")}function Ji(t,n,a,o,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){jt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),jt(t)}function bn(t,n,a){n==="number"&&Ke(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ri(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function zt(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Tn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(de(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),jt(t)}function gn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ks(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Rn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Rn(t,f,n[f])}function Ei(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(t){return cx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var hu=null;function du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xs=null,Ws=null;function Sp(t){var n=Ra(t);if(n&&(t=n.stateNode)){var a=t[Mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(En(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Mn]||null;if(!u)throw Error(s(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ft(o)}break e;case"textarea":zt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ri(t,!!a.multiple,n,!1)}}}var pu=!1;function yp(t,n,a){if(pu)return t(n,a);pu=!0;try{var o=t(n);return o}finally{if(pu=!1,(Xs!==null||Ws!==null)&&(Ql(),Xs&&(n=Xs,t=Ws,Ws=Xs=null,Sp(n),t)))for(n=0;n<t.length;n++)Sp(t[n])}}function Kr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(ea)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{mu=!1}var wa=null,gu=null,fl=null;function Mp(){if(fl)return fl;var t,n=gu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return fl=u.slice(t,1<o?1-o:void 0)}function hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function Ep(){return!1}function Hn(t){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?dl:Ep,this.isPropagationStopped=Ep,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Hn(us),Jr=x({},us,{view:0,detail:0}),ux=Hn(Jr),_u,vu,$r,ml=x({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$r&&($r&&t.type==="mousemove"?(_u=t.screenX-$r.screenX,vu=t.screenY-$r.screenY):vu=_u=0,$r=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),bp=Hn(ml),fx=x({},ml,{dataTransfer:0}),hx=Hn(fx),dx=x({},Jr,{relatedTarget:0}),xu=Hn(dx),px=x({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),mx=Hn(px),gx=x({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_x=Hn(gx),vx=x({},us,{data:0}),Tp=Hn(vx),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=yx[t])?!!n[t]:!1}function Su(){return Mx}var Ex=x({},Jr,{key:function(t){if(t.key){var n=xx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bx=Hn(Ex),Tx=x({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=Hn(Tx),Ax=x({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),Rx=Hn(Ax),Cx=x({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=Hn(Cx),Dx=x({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=Hn(Dx),Nx=x({},us,{newState:0,oldState:0}),Lx=Hn(Nx),Ox=[9,13,27,32],yu=ea&&"CompositionEvent"in window,eo=null;ea&&"documentMode"in document&&(eo=document.documentMode);var Px=ea&&"TextEvent"in window&&!eo,Rp=ea&&(!yu||eo&&8<eo&&11>=eo),Cp=" ",wp=!1;function Dp(t,n){switch(t){case"keyup":return Ox.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qs=!1;function Bx(t,n){switch(t){case"compositionend":return Up(n);case"keypress":return n.which!==32?null:(wp=!0,Cp);case"textInput":return t=n.data,t===Cp&&wp?null:t;default:return null}}function Fx(t,n){if(qs)return t==="compositionend"||!yu&&Dp(t,n)?(t=Mp(),fl=gu=wa=null,qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rp&&n.locale!=="ko"?null:n.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ix[t.type]:n==="textarea"}function Lp(t,n,a,o){Xs?Ws?Ws.push(o):Ws=[o]:Xs=o,n=ac(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var to=null,no=null;function zx(t){m_(t,0)}function gl(t){var n=cs(t);if(Ft(n))return t}function Op(t,n){if(t==="change")return n}var Pp=!1;if(ea){var Mu;if(ea){var Eu="oninput"in document;if(!Eu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Eu=typeof Bp.oninput=="function"}Mu=Eu}else Mu=!1;Pp=Mu&&(!document.documentMode||9<document.documentMode)}function Fp(){to&&(to.detachEvent("onpropertychange",Ip),no=to=null)}function Ip(t){if(t.propertyName==="value"&&gl(no)){var n=[];Lp(n,no,t,du(t)),yp(zx,n)}}function Hx(t,n,a){t==="focusin"?(Fp(),to=n,no=a,to.attachEvent("onpropertychange",Ip)):t==="focusout"&&Fp()}function Gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(no)}function Vx(t,n){if(t==="click")return gl(n)}function kx(t,n){if(t==="input"||t==="change")return gl(n)}function Xx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Xx;function io(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qt.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,n){var a=zp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zp(a)}}function Gp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Vp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ke(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ke(t.document)}return n}function bu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Wx=ea&&"documentMode"in document&&11>=document.documentMode,Ys=null,Tu=null,ao=null,Au=!1;function kp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||Ys==null||Ys!==Ke(o)||(o=Ys,"selectionStart"in o&&bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=ac(Tu,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ys)))}function fs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var js={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Ru={},Xp={};ea&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function hs(t){if(Ru[t])return Ru[t];if(!js[t])return t;var n=js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xp)return Ru[t]=n[a];return t}var Wp=hs("animationend"),qp=hs("animationiteration"),Yp=hs("animationstart"),qx=hs("transitionrun"),Yx=hs("transitionstart"),jx=hs("transitioncancel"),jp=hs("transitionend"),Zp=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function bi(t,n){Zp.set(t,n),se(n,[t])}var _l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Zs=0,wu=0;function vl(){for(var t=Zs,n=wu=Zs=0;n<t;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Kp(a,u,f)}}function xl(t,n,a,o){oi[Zs++]=t,oi[Zs++]=n,oi[Zs++]=a,oi[Zs++]=o,wu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Du(t,n,a,o){return xl(t,n,a,o),Sl(t)}function ds(t,n){return xl(t,null,null,n),Sl(t)}function Kp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Be(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Sl(t){if(50<Ro)throw Ro=0,Hf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ks={};function Zx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new Zx(t,n,a,o)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Qp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,o,u,f){var S=0;if(o=t,typeof t=="function")Uu(t)&&(S=1);else if(typeof t=="string")S=ey(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Kn(31,a,n,u),t.elementType=C,t.lanes=f,t;case b:return ps(a.children,u,f,n);case M:S=8,u|=24;break;case v:return t=Kn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case I:return t=Kn(13,a,n,u),t.elementType=I,t.lanes=f,t;case z:return t=Kn(19,a,n,u),t.elementType=z,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case P:S=9;break e;case U:S=11;break e;case B:S=14;break e;case K:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Kn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ps(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function Nu(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Jp(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Lu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var $p=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=$p.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},$p.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Qs=[],Js=0,Ml=null,so=0,ci=[],ui=0,Da=null,zi=1,Hi="";function na(t,n){Qs[Js++]=so,Qs[Js++]=Ml,Ml=t,so=n}function em(t,n,a){ci[ui++]=zi,ci[ui++]=Hi,ci[ui++]=Da,Da=t;var o=zi;t=Hi;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var f=32-Be(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,zi=1<<32-Be(n)+u|a<<u|o,Hi=f+t}else zi=1<<f|a<<u|o,Hi=t}function Ou(t){t.return!==null&&(na(t,1),em(t,1,0))}function Pu(t){for(;t===Ml;)Ml=Qs[--Js],Qs[Js]=null,so=Qs[--Js],Qs[Js]=null;for(;t===Da;)Da=ci[--ui],ci[ui]=null,Hi=ci[--ui],ci[ui]=null,zi=ci[--ui],ci[ui]=null}function tm(t,n){ci[ui++]=zi,ci[ui++]=Hi,ci[ui++]=Da,zi=n.id,Hi=n.overflow,Da=t}var Cn=null,Zt=null,Et=!1,Ua=null,fi=!1,Bu=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(li(n,t)),Bu}function nm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[Mn]=o,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)xt(wo[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),Ji(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||x_(n.textContent,a)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Na(t,!0)}function im(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Cn=Cn.return}}function $s(t){if(t!==Cn)return!1;if(!Et)return im(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||th(t.type,t.memoizedProps)),a=!a),a&&Zt&&Na(t),im(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=C_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=C_(t)}else n===27?(n=Zt,qa(t.type)?(t=rh,rh=null,Zt=t):Zt=n):Zt=Cn?di(t.stateNode.nextSibling):null;return!0}function ms(){Zt=Cn=null,Et=!1}function Fu(){var t=Ua;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Ua=null),t}function ro(t){Ua===null?Ua=[t]:Ua.push(t)}var Iu=N(null),gs=null,ia=null;function La(t,n,a){_e(Iu,n._currentValue),n._currentValue=a}function aa(t){t._currentValue=Iu.current,ae(Iu)}function zu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Hu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),zu(f.return,a,t),o||(S=null);break e}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),zu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function er(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;Zn(u.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(u===pe.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}u=u.return}t!==null&&Hu(n,t,a,o),n.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _s(t){gs=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return am(gs,t)}function bl(t,n){return gs===null&&_s(t),am(t,n)}function am(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(t===null)throw Error(s(308));ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ia=ia.next=n;return a}var Kx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Qx=r.unstable_scheduleCallback,Jx=r.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new Kx,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&Qx(Jx,function(){t.controller.abort()})}var lo=null,Vu=0,tr=0,nr=null;function $x(t,n){if(lo===null){var a=lo=[];Vu=0,tr=qf(),nr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Vu++,n.then(sm,sm),n}function sm(){if(--Vu===0&&lo!==null){nr!==null&&(nr.status="fulfilled");var t=lo;lo=null,tr=0,nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function eS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var rm=O.S;O.S=function(t,n){kg=g(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$x(t,n),rm!==null&&rm(t,n)};var vs=N(null);function ku(){var t=vs.current;return t!==null?t:Yt.pooledCache}function Tl(t,n){n===null?_e(vs,vs.current):_e(vs,n.pool)}function om(){var t=ku();return t===null?null:{parent:cn._currentValue,pool:t}}var ir=Error(s(460)),Xu=Error(s(474)),Al=Error(s(542)),Rl={then:function(){}};function lm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fm(t),t;default:if(typeof n.status=="string")n.then($i,$i);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fm(t),t}throw Ss=n,ir}}function xs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,ir):a}}var Ss=null;function um(){if(Ss===null)throw Error(s(459));var t=Ss;return Ss=null,t}function fm(t){if(t===ir||t===Al)throw Error(s(483))}var ar=null,co=0;function Cl(t){var n=co;return co+=1,ar===null&&(ar=[]),cm(ar,t,n)}function uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function wl(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function hm(t){function n(Y,X){if(t){var $=Y.deletions;$===null?(Y.deletions=[X],Y.flags|=16):$.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function o(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=ta(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<X?(Y.flags|=67108866,X):$):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function S(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,X,$,ge){return X===null||X.tag!==6?(X=Nu($,Y.mode,ge),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function H(Y,X,$,ge){var Qe=$.type;return Qe===b?me(Y,X,$.props.children,ge,$.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===K&&xs(Qe)===X.type)?(X=u(X,$.props),uo(X,$),X.return=Y,X):(X=yl($.type,$.key,$.props,null,Y.mode,ge),uo(X,$),X.return=Y,X)}function ee(Y,X,$,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Lu($,Y.mode,ge),X.return=Y,X):(X=u(X,$.children||[]),X.return=Y,X)}function me(Y,X,$,ge,Qe){return X===null||X.tag!==7?(X=ps($,Y.mode,ge,Qe),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function ve(Y,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Nu(""+X,Y.mode,$),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return $=yl(X.type,X.key,X.props,null,Y.mode,$),uo($,X),$.return=Y,$;case T:return X=Lu(X,Y.mode,$),X.return=Y,X;case K:return X=xs(X),ve(Y,X,$)}if(de(X)||oe(X))return X=ps(X,Y.mode,$,null),X.return=Y,X;if(typeof X.then=="function")return ve(Y,Cl(X),$);if(X.$$typeof===L)return ve(Y,bl(Y,X),$);wl(Y,X)}return null}function re(Y,X,$,ge){var Qe=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qe!==null?null:A(Y,X,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===Qe?H(Y,X,$,ge):null;case T:return $.key===Qe?ee(Y,X,$,ge):null;case K:return $=xs($),re(Y,X,$,ge)}if(de($)||oe($))return Qe!==null?null:me(Y,X,$,ge,null);if(typeof $.then=="function")return re(Y,X,Cl($),ge);if($.$$typeof===L)return re(Y,X,bl(Y,$),ge);wl(Y,$)}return null}function fe(Y,X,$,ge,Qe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get($)||null,A(X,Y,""+ge,Qe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case E:return Y=Y.get(ge.key===null?$:ge.key)||null,H(X,Y,ge,Qe);case T:return Y=Y.get(ge.key===null?$:ge.key)||null,ee(X,Y,ge,Qe);case K:return ge=xs(ge),fe(Y,X,$,ge,Qe)}if(de(ge)||oe(ge))return Y=Y.get($)||null,me(X,Y,ge,Qe,null);if(typeof ge.then=="function")return fe(Y,X,$,Cl(ge),Qe);if(ge.$$typeof===L)return fe(Y,X,$,bl(X,ge),Qe);wl(X,ge)}return null}function We(Y,X,$,ge){for(var Qe=null,Dt=null,Ze=X,ht=X=0,yt=null;Ze!==null&&ht<$.length;ht++){Ze.index>ht?(yt=Ze,Ze=null):yt=Ze.sibling;var Ut=re(Y,Ze,$[ht],ge);if(Ut===null){Ze===null&&(Ze=yt);break}t&&Ze&&Ut.alternate===null&&n(Y,Ze),X=f(Ut,X,ht),Dt===null?Qe=Ut:Dt.sibling=Ut,Dt=Ut,Ze=yt}if(ht===$.length)return a(Y,Ze),Et&&na(Y,ht),Qe;if(Ze===null){for(;ht<$.length;ht++)Ze=ve(Y,$[ht],ge),Ze!==null&&(X=f(Ze,X,ht),Dt===null?Qe=Ze:Dt.sibling=Ze,Dt=Ze);return Et&&na(Y,ht),Qe}for(Ze=o(Ze);ht<$.length;ht++)yt=fe(Ze,Y,ht,$[ht],ge),yt!==null&&(t&&yt.alternate!==null&&Ze.delete(yt.key===null?ht:yt.key),X=f(yt,X,ht),Dt===null?Qe=yt:Dt.sibling=yt,Dt=yt);return t&&Ze.forEach(function(Qa){return n(Y,Qa)}),Et&&na(Y,ht),Qe}function tt(Y,X,$,ge){if($==null)throw Error(s(151));for(var Qe=null,Dt=null,Ze=X,ht=X=0,yt=null,Ut=$.next();Ze!==null&&!Ut.done;ht++,Ut=$.next()){Ze.index>ht?(yt=Ze,Ze=null):yt=Ze.sibling;var Qa=re(Y,Ze,Ut.value,ge);if(Qa===null){Ze===null&&(Ze=yt);break}t&&Ze&&Qa.alternate===null&&n(Y,Ze),X=f(Qa,X,ht),Dt===null?Qe=Qa:Dt.sibling=Qa,Dt=Qa,Ze=yt}if(Ut.done)return a(Y,Ze),Et&&na(Y,ht),Qe;if(Ze===null){for(;!Ut.done;ht++,Ut=$.next())Ut=ve(Y,Ut.value,ge),Ut!==null&&(X=f(Ut,X,ht),Dt===null?Qe=Ut:Dt.sibling=Ut,Dt=Ut);return Et&&na(Y,ht),Qe}for(Ze=o(Ze);!Ut.done;ht++,Ut=$.next())Ut=fe(Ze,Y,ht,Ut.value,ge),Ut!==null&&(t&&Ut.alternate!==null&&Ze.delete(Ut.key===null?ht:Ut.key),X=f(Ut,X,ht),Dt===null?Qe=Ut:Dt.sibling=Ut,Dt=Ut);return t&&Ze.forEach(function(fy){return n(Y,fy)}),Et&&na(Y,ht),Qe}function Wt(Y,X,$,ge){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:e:{for(var Qe=$.key;X!==null;){if(X.key===Qe){if(Qe=$.type,Qe===b){if(X.tag===7){a(Y,X.sibling),ge=u(X,$.props.children),ge.return=Y,Y=ge;break e}}else if(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===K&&xs(Qe)===X.type){a(Y,X.sibling),ge=u(X,$.props),uo(ge,$),ge.return=Y,Y=ge;break e}a(Y,X);break}else n(Y,X);X=X.sibling}$.type===b?(ge=ps($.props.children,Y.mode,ge,$.key),ge.return=Y,Y=ge):(ge=yl($.type,$.key,$.props,null,Y.mode,ge),uo(ge,$),ge.return=Y,Y=ge)}return S(Y);case T:e:{for(Qe=$.key;X!==null;){if(X.key===Qe)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Y,X.sibling),ge=u(X,$.children||[]),ge.return=Y,Y=ge;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}ge=Lu($,Y.mode,ge),ge.return=Y,Y=ge}return S(Y);case K:return $=xs($),Wt(Y,X,$,ge)}if(de($))return We(Y,X,$,ge);if(oe($)){if(Qe=oe($),typeof Qe!="function")throw Error(s(150));return $=Qe.call($),tt(Y,X,$,ge)}if(typeof $.then=="function")return Wt(Y,X,Cl($),ge);if($.$$typeof===L)return Wt(Y,X,bl(Y,$),ge);wl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Y,X.sibling),ge=u(X,$),ge.return=Y,Y=ge):(a(Y,X),ge=Nu($,Y.mode,ge),ge.return=Y,Y=ge),S(Y)):a(Y,X)}return function(Y,X,$,ge){try{co=0;var Qe=Wt(Y,X,$,ge);return ar=null,Qe}catch(Ze){if(Ze===ir||Ze===Al)throw Ze;var Dt=Kn(29,Ze,null,Y.mode);return Dt.lanes=ge,Dt.return=Y,Dt}finally{}}}var ys=hm(!0),dm=hm(!1),Oa=!1;function Wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(t),Kp(t,null,a),n}return xl(t,o,n,a),Sl(t)}function fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Wr(t,a)}}function Yu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ju=!1;function ho(){if(ju){var t=nr;if(t!==null)throw t}}function po(t,n,a,o){ju=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,ee=H.next;H.next=null,S===null?f=ee:S.next=ee,S=H;var me=t.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==S&&(A===null?me.firstBaseUpdate=ee:A.next=ee,me.lastBaseUpdate=H))}if(f!==null){var ve=u.baseState;S=0,me=ee=H=null,A=f;do{var re=A.lane&-536870913,fe=re!==A.lane;if(fe?(St&re)===re:(o&re)===re){re!==0&&re===tr&&(ju=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var We=t,tt=A;re=n;var Wt=a;switch(tt.tag){case 1:if(We=tt.payload,typeof We=="function"){ve=We.call(Wt,ve,re);break e}ve=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=tt.payload,re=typeof We=="function"?We.call(Wt,ve,re):We,re==null)break e;ve=x({},ve,re);break e;case 2:Oa=!0}}re=A.callback,re!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[re]:fe.push(re))}else fe={lane:re,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?(ee=me=fe,H=ve):me=me.next=fe,S|=re;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;fe=A,A=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);me===null&&(H=ve),u.baseState=H,u.firstBaseUpdate=ee,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Ga|=S,t.lanes=S,t.memoizedState=ve}}function pm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function mm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pm(a[t],n)}var sr=N(null),Dl=N(0);function gm(t,n){t=da,_e(Dl,t),_e(sr,n),da=t|n.baseLanes}function Zu(){_e(Dl,da),_e(sr,sr.current)}function Ku(){da=Dl.current,ae(sr),ae(Dl)}var Qn=N(null),hi=null;function Fa(t){var n=t.alternate;_e(sn,sn.current&1),_e(Qn,t),hi===null&&(n===null||sr.current!==null||n.memoizedState!==null)&&(hi=t)}function Qu(t){_e(sn,sn.current),_e(Qn,t),hi===null&&(hi=t)}function _m(t){t.tag===22?(_e(sn,sn.current),_e(Qn,t),hi===null&&(hi=t)):Ia()}function Ia(){_e(sn,sn.current),_e(Qn,Qn.current)}function Jn(t){ae(Qn),hi===t&&(hi=null),ae(sn)}var sn=N(0);function Ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ah(a)||sh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,ut=null,kt=null,un=null,Nl=!1,rr=!1,Ms=!1,Ll=0,mo=0,or=null,tS=0;function tn(){throw Error(s(321))}function Ju(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function $u(t,n,a,o,u,f){return sa=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?eg:mf,Ms=!1,f=a(o,u),Ms=!1,rr&&(f=xm(n,a,o,u)),vm(t),f}function vm(t){O.H=vo;var n=kt!==null&&kt.next!==null;if(sa=0,un=kt=ut=null,Nl=!1,mo=0,or=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&El(t)&&(fn=!0))}function xm(t,n,a,o){ut=t;var u=0;do{if(rr&&(or=null),mo=0,rr=!1,25<=u)throw Error(s(301));if(u+=1,un=kt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=tg,f=n(a,o)}while(rr);return f}function nS(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?go(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ut.flags|=1024),n}function ef(){var t=Ll!==0;return Ll=0,t}function tf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function nf(t){if(Nl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Nl=!1}sa=0,un=kt=ut=null,rr=!1,mo=Ll=0,or=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ut.memoizedState=un=t:un=un.next=t,un}function rn(){if(kt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=un===null?ut.memoizedState:un.next;if(n!==null)un=n,kt=t;else{if(t===null)throw ut.alternate===null?Error(s(467)):Error(s(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},un===null?ut.memoizedState=un=t:un=un.next=t}return un}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(t){var n=mo;return mo+=1,or===null&&(or=[]),t=cm(or,t,n),n=ut,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?eg:mf),t}function Pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return go(t);if(t.$$typeof===L)return wn(t)}throw Error(s(438,String(t)))}function af(t){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function Bl(t){var n=rn();return sf(n,kt,t)}function sf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=S=null,H=null,ee=n,me=!1;do{var ve=ee.lane&-536870913;if(ve!==ee.lane?(St&ve)===ve:(sa&ve)===ve){var re=ee.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ve===tr&&(me=!0);else if((sa&re)===re){ee=ee.next,re===tr&&(me=!0);continue}else ve={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(A=H=ve,S=f):H=H.next=ve,ut.lanes|=re,Ga|=re;ve=ee.action,Ms&&a(f,ve),f=ee.hasEagerState?ee.eagerState:a(f,ve)}else re={lane:ve,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(A=H=re,S=f):H=H.next=re,ut.lanes|=ve,Ga|=ve;ee=ee.next}while(ee!==null&&ee!==n);if(H===null?S=f:H.next=A,!Zn(f,t.memoizedState)&&(fn=!0,me&&(a=nr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function rf(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Zn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Sm(t,n,a){var o=ut,u=rn(),f=Et;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Zn((kt||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,cf(Em.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,lr(9,{destroy:void 0},Mm.bind(null,o,u,a,n),null),Yt===null)throw Error(s(349));f||(sa&127)!==0||ym(o,n,a)}return a}function ym(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Ol(),ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Mm(t,n,a,o){n.value=a,n.getSnapshot=o,bm(n)&&Tm(t)}function Em(t,n,a){return a(function(){bm(n)&&Tm(t)})}function bm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function Tm(t){var n=ds(t,2);n!==null&&Wn(n,t,2)}function of(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Ms){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function Am(t,n,a,o){return t.baseState=a,sf(t,kt,typeof o=="function"?o:ra)}function iS(t,n,a,o,u){if(zl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Rm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=O.T,S={};O.T=S;try{var A=a(u,o),H=O.S;H!==null&&H(S,A),Cm(t,n,A)}catch(ee){lf(t,n,ee)}finally{f!==null&&S.types!==null&&(f.types=S.types),O.T=f}}else try{f=a(u,o),Cm(t,n,f)}catch(ee){lf(t,n,ee)}}function Cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){wm(t,n,o)},function(o){return lf(t,n,o)}):wm(t,n,a)}function wm(t,n,a){n.status="fulfilled",n.value=a,Dm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Rm(t,a)))}function lf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Dm(n),n=n.next;while(n!==o)}t.action=null}function Dm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Um(t,n){return n}function Nm(t,n){if(Et){var a=Yt.formState;if(a!==null){e:{var o=ut;if(Et){if(Zt){t:{for(var u=Zt,f=fi;u.nodeType!==8;){if(!f){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=di(u.nextSibling),o=u.data==="F!";break e}}Na(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Um,lastRenderedState:n},a.queue=o,a=Qm.bind(null,ut,o),o.dispatch=a,o=of(!1),f=pf.bind(null,ut,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=iS.bind(null,ut,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Lm(t){var n=rn();return Om(n,kt,t)}function Om(t,n,a){if(n=sf(t,n,Um)[0],t=Bl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(S){throw S===ir?Al:S}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,lr(9,{destroy:void 0},aS.bind(null,u,a),null)),[o,f,t]}function aS(t,n){t.action=n}function Pm(t){var n=rn(),a=kt;if(a!==null)return Om(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function lr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Ol(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Bm(){return rn().memoizedState}function Fl(t,n,a,o){var u=Fn();ut.flags|=t,u.memoizedState=lr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Il(t,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;kt!==null&&o!==null&&Ju(o,kt.memoizedState.deps)?u.memoizedState=lr(n,f,a,o):(ut.flags|=t,u.memoizedState=lr(1|n,f,a,o))}function Fm(t,n){Fl(8390656,8,t,n)}function cf(t,n){Il(2048,8,t,n)}function sS(t){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Ol(),ut.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Im(t){var n=rn().memoizedState;return sS({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function zm(t,n){return Il(4,2,t,n)}function Hm(t,n){return Il(4,4,t,n)}function Gm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Vm(t,n,a){a=a!=null?a.concat([t]):null,Il(4,4,Gm.bind(null,n,t),a)}function uf(){}function km(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ju(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Xm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ju(n,o[1]))return o[0];if(o=t(),Ms){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[o,n],o}function ff(t,n,a){return a===void 0||(sa&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Wg(),ut.lanes|=t,Ga|=t,a)}function Wm(t,n,a,o){return Zn(a,n)?a:sr.current!==null?(t=ff(t,a,o),Zn(t,n)||(fn=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(St&261930)===0?(fn=!0,t.memoizedState=a):(t=Wg(),ut.lanes|=t,Ga|=t,n)}function qm(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var S=O.T,A={};O.T=A,pf(t,!1,n,a);try{var H=u(),ee=O.S;if(ee!==null&&ee(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=eS(H,o);_o(t,n,me,ti(t))}else _o(t,n,o,ti(t))}catch(ve){_o(t,n,{then:function(){},status:"rejected",reason:ve},ti())}finally{G.p=f,S!==null&&A.types!==null&&(S.types=A.types),O.T=S}}function rS(){}function hf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Ym(t).queue;qm(t,u,n,te,a===null?rS:function(){return jm(t),a(o)})}function Ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function jm(t){var n=Ym(t);n.next===null&&(n=t.alternate.memoizedState),_o(t,n.next.queue,{},ti())}function df(){return wn(Oo)}function Zm(){return rn().memoizedState}function Km(){return rn().memoizedState}function oS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Pa(a);var o=Ba(n,t,a);o!==null&&(Wn(o,n,a),fo(o,n,a)),n={cache:Gu()},t.payload=n;return}n=n.return}}function lS(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(t)?Jm(n,a):(a=Du(t,n,a,o),a!==null&&(Wn(a,t,o),$m(a,n,o)))}function Qm(t,n,a){var o=ti();_o(t,n,a,o)}function _o(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(t))Jm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,Zn(A,S))return xl(t,n,u,0),Yt===null&&vl(),!1}catch{}finally{}if(a=Du(t,n,u,o),a!==null)return Wn(a,t,o),$m(a,n,o),!0}return!1}function pf(t,n,a,o){if(o={lane:2,revertLane:qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(t)){if(n)throw Error(s(479))}else n=Du(t,a,o,2),n!==null&&Wn(n,t,2)}function zl(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function Jm(t,n){rr=Nl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function $m(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Wr(t,a)}}var vo={readContext:wn,use:Pl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};vo.useEffectEvent=tn;var eg={readContext:wn,use:Pl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Fm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Fl(4194308,4,Gm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Fl(4194308,4,t,n)},useInsertionEffect:function(t,n){Fl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(Ms){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(Ms){Ie(!0);try{a(n)}finally{Ie(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=lS.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=of(t);var n=t.queue,a=Qm.bind(null,ut,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(t,n){var a=Fn();return ff(a,t,n)},useTransition:function(){var t=of(!1);return t=qm.bind(null,ut,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ut,u=Fn();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Yt===null)throw Error(s(349));(St&127)!==0||ym(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Fm(Em.bind(null,o,f,t),[t]),o.flags|=2048,lr(9,{destroy:void 0},Mm.bind(null,o,f,a,n),null),a},useId:function(){var t=Fn(),n=Yt.identifierPrefix;if(Et){var a=Hi,o=zi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ll++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=tS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:df,useFormState:Nm,useActionState:Nm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,ut,!0,a),a.dispatch=n,[t,n]},useMemoCache:af,useCacheRefresh:function(){return Fn().memoizedState=oS.bind(null,ut)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},mf={readContext:wn,use:Pl,useCallback:km,useContext:wn,useEffect:cf,useImperativeHandle:Vm,useInsertionEffect:zm,useLayoutEffect:Hm,useMemo:Xm,useReducer:Bl,useRef:Bm,useState:function(){return Bl(ra)},useDebugValue:uf,useDeferredValue:function(t,n){var a=rn();return Wm(a,kt.memoizedState,t,n)},useTransition:function(){var t=Bl(ra)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:Sm,useId:Zm,useHostTransitionStatus:df,useFormState:Lm,useActionState:Lm,useOptimistic:function(t,n){var a=rn();return Am(a,kt,t,n)},useMemoCache:af,useCacheRefresh:Km};mf.useEffectEvent=Im;var tg={readContext:wn,use:Pl,useCallback:km,useContext:wn,useEffect:cf,useImperativeHandle:Vm,useInsertionEffect:zm,useLayoutEffect:Hm,useMemo:Xm,useReducer:rf,useRef:Bm,useState:function(){return rf(ra)},useDebugValue:uf,useDeferredValue:function(t,n){var a=rn();return kt===null?ff(a,t,n):Wm(a,kt.memoizedState,t,n)},useTransition:function(){var t=rf(ra)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:Sm,useId:Zm,useHostTransitionStatus:df,useFormState:Pm,useActionState:Pm,useOptimistic:function(t,n){var a=rn();return kt!==null?Am(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:Km};tg.useEffectEvent=Im;function gf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var _f={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Wn(n,t,o),fo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Wn(n,t,o),fo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(Wn(n,t,a),fo(n,t,a))}};function ng(t,n,a,o,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(u,f):!0}function ig(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&_f.enqueueReplaceState(n,n.state,null)}function Es(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function ag(t){_l(t)}function sg(t){console.error(t)}function rg(t){_l(t)}function Hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function og(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(t,n)},a}function lg(t){return t=Pa(t),t.tag=3,t}function cg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){og(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){og(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function cS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Jl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(t,o,u)),!1;case 22:return a.flags|=65536,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(t,o,u)),!1}throw Error(s(435,a.tag))}return kf(t,o,u),Jl(),!1}if(Et)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Bu&&(t=Error(s(422),{cause:o}),ro(li(t,a)))):(o!==Bu&&(n=Error(s(423),{cause:o}),ro(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=li(o,a),u=vf(t.stateNode,o,u),Yu(t,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=li(f,a),Ao===null?Ao=[f]:Ao.push(f),nn!==4&&(nn=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=vf(a.stateNode,o,t),Yu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=lg(u),cg(u,t,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var xf=Error(s(461)),fn=!1;function Dn(t,n,a,o){n.child=t===null?dm(n,null,a,o):ys(n,t.child,a,o)}function ug(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return _s(n),o=$u(t,n,a,S,f,u),A=ef(),t!==null&&!fn?(tf(t,n,u),oa(t,n,u)):(Et&&A&&Ou(n),n.flags|=1,Dn(t,n,o,u),n.child)}function fg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,hg(t,n,f,o,u)):(t=yl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Rf(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(S,o)&&t.ref===n.ref)return oa(t,n,u)}return n.flags|=1,t=ta(f,o),t.ref=n.ref,t.return=n,n.child=t}function hg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(io(f,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Rf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,oa(t,n,u)}return Sf(t,n,a,o,u)}function dg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return pg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tl(n,f!==null?f.cachePool:null),f!==null?gm(n,f):Zu(),_m(n);else return o=n.lanes=536870912,pg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Tl(n,f.cachePool),gm(n,f),Ia(),n.memoizedState=null):(t!==null&&Tl(n,null),Zu(),Ia());return Dn(t,n,u,a),n.child}function xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function pg(t,n,a,o,u){var f=ku();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Tl(n,null),Zu(),_m(n),t!==null&&er(t,n,o,!0),n.childLanes=u,null}function Gl(t,n){return n=kl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function mg(t,n,a){return ys(n,t.child,null,a),t=Gl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function uS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=Gl(n,o),n.lanes=536870912,xo(null,t);if(Qu(n),(t=Zt)?(t=R_(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Jp(t),a.return=n,n.child=a,Cn=n,Zt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Gl(n,o)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(Qu(n),u)if(n.flags&256)n.flags&=-257,n=mg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||er(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(o=Yt,o!==null&&(S=zs(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,ds(t,S),Wn(o,t,S),xf;Jl(),n=mg(t,n,a)}else t=f.treeContext,Zt=di(S.nextSibling),Cn=n,Et=!0,Ua=null,fi=!1,t!==null&&tm(n,t),n=Gl(n,o),n.flags|=4096;return n}return t=ta(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Sf(t,n,a,o,u){return _s(n),a=$u(t,n,a,o,void 0,u),o=ef(),t!==null&&!fn?(tf(t,n,u),oa(t,n,u)):(Et&&o&&Ou(n),n.flags|=1,Dn(t,n,a,u),n.child)}function gg(t,n,a,o,u,f){return _s(n),n.updateQueue=null,a=xm(n,o,a,u),vm(t),o=ef(),t!==null&&!fn?(tf(t,n,f),oa(t,n,f)):(Et&&o&&Ou(n),n.flags|=1,Dn(t,n,a,f),n.child)}function _g(t,n,a,o,u){if(_s(n),n.stateNode===null){var f=Ks,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=_f,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Wu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Ks,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(gf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&_f.enqueueReplaceState(f,f.state,null),po(n,o,f,u),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,H=Es(a,A);f.props=H;var ee=f.context,me=a.contextType;S=Ks,typeof me=="object"&&me!==null&&(S=wn(me));var ve=a.getDerivedStateFromProps;me=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ee!==S)&&ig(n,f,o,S),Oa=!1;var re=n.memoizedState;f.state=re,po(n,o,f,u),ho(),ee=n.memoizedState,A||re!==ee||Oa?(typeof ve=="function"&&(gf(n,a,ve,o),ee=n.memoizedState),(H=Oa||ng(n,a,H,o,re,ee,S))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),f.props=o,f.state=ee,f.context=S,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,qu(t,n),S=n.memoizedProps,me=Es(a,S),f.props=me,ve=n.pendingProps,re=f.context,ee=a.contextType,H=Ks,typeof ee=="object"&&ee!==null&&(H=wn(ee)),A=a.getDerivedStateFromProps,(ee=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==ve||re!==H)&&ig(n,f,o,H),Oa=!1,re=n.memoizedState,f.state=re,po(n,o,f,u),ho();var fe=n.memoizedState;S!==ve||re!==fe||Oa||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof A=="function"&&(gf(n,a,A,o),fe=n.memoizedState),(me=Oa||ng(n,a,me,o,re,fe,H)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,fe,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,fe,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),f.props=o,f.state=fe,f.context=H,o=me):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Vl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=ys(n,t.child,null,u),n.child=ys(n,null,a,u)):Dn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=oa(t,n,u),t}function vg(t,n,a,o){return ms(),n.flags|=256,Dn(t,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(t){return{baseLanes:t,cachePool:om()}}function Ef(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function xg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?Fa(n):Ia(),(t=Zt)?(t=R_(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Jp(t),a.return=n,n.child=a,Cn=n,Zt=null)):t=null,t===null)throw Na(n);return sh(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ia(),u=n.mode,A=kl({mode:"hidden",children:A},u),o=ps(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(t,S,a),n.memoizedState=yf,xo(null,o)):(Fa(n),bf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=Tf(t,n,a)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),A=o.fallback,u=n.mode,o=kl({mode:"visible",children:o.children},u),A=ps(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,ys(n,t.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(t,S,a),n.memoizedState=yf,n=xo(null,o));else if(Fa(n),sh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ee=S.dgst;S=ee,o=Error(s(419)),o.stack="",o.digest=S,ro({value:o,source:null,stack:null}),n=Tf(t,n,a)}else if(fn||er(t,n,a,!1),S=(a&t.childLanes)!==0,fn||S){if(S=Yt,S!==null&&(o=zs(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,ds(t,o),Wn(S,t,o),xf;ah(A)||Jl(),n=Tf(t,n,a)}else ah(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Zt=di(A.nextSibling),Cn=n,Et=!0,Ua=null,fi=!1,t!==null&&tm(n,t),n=bf(n,o.children),n.flags|=4096);return n}return u?(Ia(),A=o.fallback,u=n.mode,H=t.child,ee=H.sibling,o=ta(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ee!==null?A=ta(ee,A):(A=ps(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,xo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Mf(a):(u=A.cachePool,u!==null?(H=cn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=om(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Ef(t,S,a),n.memoizedState=yf,xo(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function bf(t,n){return n=kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function kl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Tf(t,n,a){return ys(n,t.child,null,a),t=bf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Sg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),zu(t.return,n,a)}function Af(t,n,a,o,u,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function yg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=sn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,_e(sn,S),Dn(t,n,o,a),o=Et?so:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,a,n);else if(t.tag===19)Sg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ul(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ul(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Af(n,!0,a,null,f,o);break;case"together":Af(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(er(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function fS(t,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),La(n,cn,t.memoizedState.cache),ms();break;case 27:case 5:Ge(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xg(t,n,a):(Fa(n),t=oa(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(er(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return yg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(sn,sn.current),o)break;return null;case 22:return n.lanes=0,dg(t,n,a,n.pendingProps);case 24:La(n,cn,t.memoizedState.cache)}return oa(t,n,a)}function Mg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Rf(t,a)&&(n.flags&128)===0)return fn=!1,fS(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,Et&&(n.flags&1048576)!==0&&em(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=xs(n.elementType),n.type=t,typeof t=="function")Uu(t)?(o=Es(t,o),n.tag=1,n=_g(null,n,t,o,a)):(n.tag=0,n=Sf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=ug(null,n,t,o,a);break e}else if(u===B){n.tag=14,n=fg(null,n,t,o,a);break e}}throw n=ue(t)||t,Error(s(306,n,""))}}return n;case 0:return Sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Es(o,n.pendingProps),_g(t,n,o,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,qu(t,n),po(n,o,null,a);var S=n.memoizedState;if(o=S.cache,La(n,cn,o),o!==f.cache&&Hu(n,[cn],a,!0),ho(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=vg(t,n,o,a);break e}else if(o!==u){u=li(Error(s(424)),n),ro(u),n=vg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=di(t.firstChild),Cn=n,Et=!0,Ua=null,fi=!0,a=dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ms(),o===u){n=oa(t,n,a);break e}Dn(t,n,o,a)}n=n.child}return n;case 26:return Vl(t,n),t===null?(a=L_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,o=sc(ne.current).createElement(a),o[ln]=n,o[Mn]=t,Un(o,a,t),R(o),n.stateNode=o):n.memoizedState=L_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&Et&&(o=n.stateNode=D_(n.type,n.pendingProps,ne.current),Cn=n,fi=!0,u=Zt,qa(n.type)?(rh=u,Zt=di(o.firstChild)):Zt=u),Dn(t,n,n.pendingProps.children,a),Vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=Zt)&&(o=GS(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,Cn=n,Zt=di(o.firstChild),fi=!1,u=!0):u=!1),u||Na(n)),Ge(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,th(u,f)?o=null:S!==null&&th(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(t,n,nS,null,null,a),Oo._currentValue=u),Vl(t,n),Dn(t,n,o,a),n.child;case 6:return t===null&&Et&&((t=a=Zt)&&(a=VS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Cn=n,Zt=null,t=!0):t=!1),t||Na(n)),null;case 13:return xg(t,n,a);case 4:return Re(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ys(n,null,o,a):Dn(t,n,o,a),n.child;case 11:return ug(t,n,n.type,n.pendingProps,a);case 7:return Dn(t,n,n.pendingProps,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Dn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,_s(n),u=wn(u),o=o(u),n.flags|=1,Dn(t,n,o,a),n.child;case 14:return fg(t,n,n.type,n.pendingProps,a);case 15:return hg(t,n,n.type,n.pendingProps,a);case 19:return yg(t,n,a);case 31:return uS(t,n,a);case 22:return dg(t,n,a,n.pendingProps);case 24:return _s(n),o=wn(cn),t===null?(u=ku(),u===null&&(u=Yt,f=Gu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Wu(n),La(n,cn,u)):((t.lanes&a)!==0&&(qu(t,n),po(n,null,null,a),ho()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,cn,o)):(o=f.cache,La(n,cn,o),o!==u.cache&&Hu(n,[cn],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(t){t.flags|=4}function Cf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Zg())t.flags|=8192;else throw Ss=Rl,Xu}else t.flags&=-16777217}function Eg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!I_(n))if(Zg())t.flags|=8192;else throw Ss=Rl,Xu}function Xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?It():536870912,t.lanes|=n,hr|=n)}function So(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function hS(t,n,a){var o=n.pendingProps;switch(Pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(cn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&($s(n)?la(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fu())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(la(n),f!==null?(Kt(n),Eg(n,f)):(Kt(n),Cf(n,u,null,o,a))):f?f!==t.memoizedState?(la(n),Kt(n),Eg(n,f)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&la(n),Kt(n),Cf(n,u,t,o,a)),null;case 27:if(mt(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=Ae.current,$s(n)?nm(n):(t=D_(u,o,a),n.stateNode=t,la(n))}return Kt(n),null;case 5:if(mt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(f=Ae.current,$s(n))nm(n);else{var S=sc(ne.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[ln]=n,f[Mn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&la(n)}}return Kt(n),Cf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,$s(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||x_(t.nodeValue,a)),t||Na(n,!0)}else t=sc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Kt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=$s(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else a=Fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=$s(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),Kt(n),null);case 4:return ke(),t===null&&Kf(n.stateNode.containerInfo),Kt(n),null;case 10:return aa(n.type),Kt(n),null;case 19:if(ae(sn),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)So(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ul(t),f!==null){for(n.flags|=128,So(o,!1),t=f.updateQueue,n.updateQueue=t,Xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Qp(a,t),a=a.sibling;return _e(sn,sn.current&1|2),Et&&na(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&g()>Zl&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ul(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Xl(n,t),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Et)return Kt(n),null}else 2*g()-o.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=g(),t.sibling=null,a=sn.current,_e(sn,u?a&1|2:a&1),Et&&na(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return Jn(n),Ku(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ae(vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(cn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function dS(t,n){switch(Pu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(cn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ae(sn),null;case 4:return ke(),null;case 10:return aa(n.type),null;case 22:case 23:return Jn(n),Ku(),t!==null&&ae(vs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(cn),null;case 25:return null;default:return null}}function bg(t,n){switch(Pu(n),n.tag){case 3:aa(cn),ke();break;case 26:case 27:case 5:mt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:ae(sn);break;case 10:aa(n.type);break;case 22:case 23:Jn(n),Ku(),t!==null&&ae(vs);break;case 24:aa(cn)}}function yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Gt(n,n.return,A)}}function za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var H=a,ee=A;try{ee()}catch(me){Gt(u,H,me)}}}o=o.next}while(o!==f)}}catch(me){Gt(n,n.return,me)}}function Tg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{mm(n,a)}catch(o){Gt(t,t.return,o)}}}function Ag(t,n,a){a.props=Es(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function Mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Gt(t,n,u)}}function Gi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function Rg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function wf(t,n,a){try{var o=t.stateNode;PS(o,t.type,a,n),o[Mn]=n}catch(u){Gt(t,t.return,u)}}function Cg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Uf(t,n,a),t=t.sibling;t!==null;)Uf(t,n,a),t=t.sibling}function Wl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Wl(t,n,a),t=t.sibling;t!==null;)Wl(t,n,a),t=t.sibling}function wg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[ln]=t,n[Mn]=a}catch(f){Gt(t,t.return,f)}}var ca=!1,hn=!1,Nf=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function pS(t,n){if(t=t.containerInfo,$f=hc,t=Vp(t),bu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,A=-1,H=-1,ee=0,me=0,ve=t,re=null;t:for(;;){for(var fe;ve!==a||u!==0&&ve.nodeType!==3||(A=S+u),ve!==f||o!==0&&ve.nodeType!==3||(H=S+o),ve.nodeType===3&&(S+=ve.nodeValue.length),(fe=ve.firstChild)!==null;)re=ve,ve=fe;for(;;){if(ve===t)break t;if(re===a&&++ee===u&&(A=S),re===f&&++me===o&&(H=S),(fe=ve.nextSibling)!==null)break;ve=re,re=ve.parentNode}ve=fe}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(eh={focusedElem:t,selectionRange:a},hc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Es(a.type,u);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Gt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ih(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ih(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Ug(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),o&4&&yo(5,a);break;case 1:if(fa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Gt(a,a.return,S)}else{var u=Es(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Gt(a,a.return,S)}}o&64&&Tg(a),o&512&&Mo(a,a.return);break;case 3:if(fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mm(t,n)}catch(S){Gt(a,a.return,S)}}break;case 27:n===null&&o&4&&wg(a);case 26:case 5:fa(t,a),n===null&&o&4&&Rg(a),o&512&&Mo(a,a.return);break;case 12:fa(t,a);break;case 31:fa(t,a),o&4&&Og(t,a);break;case 13:fa(t,a),o&4&&Pg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ES.bind(null,a),kS(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||hn,u=ca;var f=hn;ca=o,(hn=n)&&!f?ha(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),ca=u,hn=f}break;case 30:break;default:fa(t,a)}}function Ng(t){var n=t.alternate;n!==null&&(t.alternate=null,Ng(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Gn=!1;function ua(t,n,a){for(a=a.child;a!==null;)Lg(t,n,a),a=a.sibling}function Lg(t,n,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:hn||Gi(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Gi(a,n);var o=en,u=Gn;qa(a.type)&&(en=a.stateNode,Gn=!1),ua(t,n,a),Uo(a.stateNode),en=o,Gn=u;break;case 5:hn||Gi(a,n);case 6:if(o=en,u=Gn,en=null,ua(t,n,a),en=o,Gn=u,en!==null)if(Gn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(f){Gt(a,n,f)}else try{en.removeChild(a.stateNode)}catch(f){Gt(a,n,f)}break;case 18:en!==null&&(Gn?(t=en,T_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Sr(t)):T_(en,a.stateNode));break;case 4:o=en,u=Gn,en=a.stateNode.containerInfo,Gn=!0,ua(t,n,a),en=o,Gn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),hn||za(4,a,n),ua(t,n,a);break;case 1:hn||(Gi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ag(a,n,o)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,ua(t,n,a),hn=o;break;default:ua(t,n,a)}}function Og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Sr(t)}catch(a){Gt(n,n.return,a)}}}function Pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Sr(t)}catch(a){Gt(n,n.return,a)}}function mS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Dg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Dg),n;default:throw Error(s(435,t.tag))}}function ql(t,n){var a=mS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=bS.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(qa(A.type)){en=A.stateNode,Gn=!1;break e}break;case 5:en=A.stateNode,Gn=!1;break e;case 3:case 4:en=A.stateNode.containerInfo,Gn=!0;break e}A=A.return}if(en===null)throw Error(s(160));Lg(f,S,u),en=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bg(n,t),n=n.sibling}var Ti=null;function Bg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(za(3,t,t.return),yo(3,t),za(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(hn||a===null||Gi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Vn(n,t),kn(t),o&512&&(hn||a===null||Gi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ls]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[ln]=t,R(f),o=f;break e;case"link":var S=B_("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(S=B_("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=t,R(f),o=f}t.stateNode=o}else F_(u,t.type,t.stateNode);else t.stateNode=P_(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?F_(u,t.type,t.stateNode):P_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&wf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(hn||a===null||Gi(a,a.return)),a!==null&&o&4&&wf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(hn||a===null||Gi(a,a.return)),t.flags&32){u=t.stateNode;try{gn(u,"")}catch(We){Gt(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,wf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Nf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){Gt(t,t.return,We)}}break;case 3:if(lc=null,u=Ti,Ti=rc(n.containerInfo),Vn(n,t),Ti=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Sr(n.containerInfo)}catch(We){Gt(t,t.return,We)}Nf&&(Nf=!1,Fg(t));break;case 4:o=Ti,Ti=rc(t.stateNode.containerInfo),Vn(n,t),kn(t),Ti=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=g()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ee=ca,me=hn;if(ca=ee||u,hn=me||H,Vn(n,t),hn=me,ca=ee,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ca||hn||bs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var ve=H.memoizedProps.style,re=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(We){Gt(H,H.return,We)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(We){Gt(H,H.return,We)}}}else if(n.tag===18){if(a===null){H=n;try{var fe=H.stateNode;u?A_(fe,!0):A_(H.stateNode,!1)}catch(We){Gt(H,H.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ql(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Cg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Df(t);Wl(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(gn(S,""),a.flags&=-33);var A=Df(t);Wl(t,A,S);break;case 3:case 4:var H=a.stateNode.containerInfo,ee=Df(t);Uf(t,ee,H);break;default:throw Error(s(161))}}catch(me){Gt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ug(t,n.alternate,n),n=n.sibling}function bs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),bs(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ag(n,n.return,a),bs(n);break;case 27:Uo(n.stateNode);case 26:case 5:Gi(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),yo(4,f);break;case 1:if(ha(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Gt(o,o.return,ee)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)pm(H[u],A)}catch(ee){Gt(o,o.return,ee)}}a&&S&64&&Tg(f),Mo(f,f.return);break;case 27:wg(f);case 26:case 5:ha(u,f,a),a&&o===null&&S&4&&Rg(f),Mo(f,f.return);break;case 12:ha(u,f,a);break;case 31:ha(u,f,a),a&&S&4&&Og(u,f);break;case 13:ha(u,f,a),a&&S&4&&Pg(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),Mo(f,f.return);break;case 30:break;default:ha(u,f,a)}n=n.sibling}}function Lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&oo(a))}function Of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ig(t,n,a,o),n=n.sibling}function Ig(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),u&2048&&yo(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t)));break;case 12:if(u&2048){Ai(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Gt(n,n.return,H)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(t,n,a,o):Eo(t,n):f._visibility&2?Ai(t,n,a,o):(f._visibility|=2,cr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(S,n);break;case 24:Ai(t,n,a,o),u&2048&&Of(n.alternate,n);break;default:Ai(t,n,a,o)}}function cr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,A=a,H=o,ee=S.flags;switch(S.tag){case 0:case 11:case 15:cr(f,S,A,H,u),yo(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?cr(f,S,A,H,u):Eo(f,S):(me._visibility|=2,cr(f,S,A,H,u)),u&&ee&2048&&Lf(S.alternate,S);break;case 24:cr(f,S,A,H,u),u&&ee&2048&&Of(S.alternate,S);break;default:cr(f,S,A,H,u)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&Lf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&Of(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function ur(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)zg(t,n,a),t=t.sibling}function zg(t,n,a){switch(t.tag){case 26:ur(t,n,a),t.flags&bo&&t.memoizedState!==null&&ty(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:ur(t,n,a);break;case 3:case 4:var o=Ti;Ti=rc(t.stateNode.containerInfo),ur(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,ur(t,n,a),bo=o):ur(t,n,a));break;default:ur(t,n,a)}}function Hg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Vg(o,t)}Hg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gg(t),t=t.sibling}function Gg(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&za(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yl(t)):To(t);break;default:To(t)}}function Yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Vg(o,t)}Hg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}t=t.sibling}}function Vg(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(Ng(o),o===a){Sn=null;break e}if(u!==null){u.return=f,Sn=u;break e}Sn=f}}}var gS={getCacheForType:function(t){var n=wn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},_S=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Yt=null,vt=null,St=0,Ht=0,$n=null,Ha=!1,fr=!1,Pf=!1,da=0,nn=0,Ga=0,Ts=0,Bf=0,ei=0,hr=0,Ao=null,Xn=null,Ff=!1,jl=0,kg=0,Zl=1/0,Kl=null,Va=null,_n=0,ka=null,dr=null,pa=0,If=0,zf=null,Xg=null,Ro=0,Hf=null;function ti(){return(Pt&2)!==0&&St!==0?St&-St:O.T!==null?qf():Yr()}function Wg(){if(ei===0)if((St&536870912)===0||Et){var t=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function Wn(t,n,a){(t===Yt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(pr(t,0),Xa(t,St,ei,!1)),Ln(t,a),((Pt&2)===0||t!==Yt)&&(t===Yt&&((Pt&2)===0&&(Ts|=a),nn===4&&Xa(t,St,ei,!1)),Vi(t))}function qg(t,n,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?SS(t,n):Vf(t,n,!0),f=o;do{if(u===0){fr&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!vS(a)){u=Vf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=t;u=Ao;var H=A.current.memoizedState.isDehydrated;if(H&&(pr(A,S).flags|=256),S=Vf(A,S,!1),S!==2){if(Pf&&!H){A.errorRecoveryDisabledLanes|=f,Ts|=f,u=4;break e}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){pr(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ei,!Ha);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=jl+300-g(),10<u)){if(Xa(o,n,ei,!Ha),xe(o,0,!0)!==0)break e;pa=n,o.timeoutHandle=E_(Yg.bind(null,o,a,Xn,Kl,Ff,n,ei,Ts,hr,Ha,f,"Throttled",-0,0),u);break e}Yg(o,a,Xn,Kl,Ff,n,ei,Ts,hr,Ha,f,null,-0,0)}}break}while(!0);Vi(t)}function Yg(t,n,a,o,u,f,S,A,H,ee,me,ve,re,fe){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},zg(n,f,ve);var We=(f&62914560)===f?jl-g():(f&4194048)===f?kg-g():0;if(We=ny(ve,We),We!==null){pa=f,t.cancelPendingCommit=We(t_.bind(null,t,n,f,a,o,u,S,A,H,me,ve,null,re,fe)),Xa(t,f,S,!ee);return}}t_(t,n,f,a,o,u,S,A,H)}function vS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~Bf,n&=~Ts,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Be(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&ll(t,a,n)}function Ql(){return(Pt&6)===0?(Co(0),!1):!0}function Gf(){if(vt!==null){if(Ht===0)var t=vt.return;else t=vt,ia=gs=null,nf(t),ar=null,co=0,t=vt;for(;t!==null;)bg(t.alternate,t),t=t.return;vt=null}}function pr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,IS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pa=0,Gf(),Yt=t,vt=a=ta(t.current,null),St=n,Ht=0,$n=null,Ha=!1,fr=we(t,n),Pf=!1,hr=ei=Bf=Ts=Ga=nn=0,Xn=Ao=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),f=1<<u;n|=t[u],o&=~f}return da=n,vl(),a}function jg(t,n){ut=null,O.H=vo,n===ir||n===Al?(n=um(),Ht=3):n===Xu?(n=um(),Ht=4):Ht=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,vt===null&&(nn=1,Hl(t,li(n,t.current)))}function Zg(){var t=Qn.current;return t===null?!0:(St&4194048)===St?hi===null:(St&62914560)===St||(St&536870912)!==0?t===hi:!1}function Kg(){var t=O.H;return O.H=vo,t===null?vo:t}function Qg(){var t=O.A;return O.A=gS,t}function Jl(){nn=4,Ha||(St&4194048)!==St&&Qn.current!==null||(fr=!0),(Ga&134217727)===0&&(Ts&134217727)===0||Yt===null||Xa(Yt,St,ei,!1)}function Vf(t,n,a){var o=Pt;Pt|=2;var u=Kg(),f=Qg();(Yt!==t||St!==n)&&(Kl=null,pr(t,n)),n=!1;var S=nn;e:do try{if(Ht!==0&&vt!==null){var A=vt,H=$n;switch(Ht){case 8:Gf(),S=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var ee=Ht;if(Ht=0,$n=null,mr(t,A,H,ee),a&&fr){S=0;break e}break;default:ee=Ht,Ht=0,$n=null,mr(t,A,H,ee)}}xS(),S=nn;break}catch(me){jg(t,me)}while(!0);return n&&t.shellSuspendCounter++,ia=gs=null,Pt=o,O.H=u,O.A=f,vt===null&&(Yt=null,St=0,vl()),S}function xS(){for(;vt!==null;)Jg(vt)}function SS(t,n){var a=Pt;Pt|=2;var o=Kg(),u=Qg();Yt!==t||St!==n?(Kl=null,Zl=g()+500,pr(t,n)):fr=we(t,n);e:do try{if(Ht!==0&&vt!==null){n=vt;var f=$n;t:switch(Ht){case 1:Ht=0,$n=null,mr(t,n,f,1);break;case 2:case 9:if(lm(f)){Ht=0,$n=null,$g(n);break}n=function(){Ht!==2&&Ht!==9||Yt!==t||(Ht=7),Vi(t)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:lm(f)?(Ht=0,$n=null,$g(n)):(Ht=0,$n=null,mr(t,n,f,7));break;case 5:var S=null;switch(vt.tag){case 26:S=vt.memoizedState;case 5:case 27:var A=vt;if(S?I_(S):A.stateNode.complete){Ht=0,$n=null;var H=A.sibling;if(H!==null)vt=H;else{var ee=A.return;ee!==null?(vt=ee,$l(ee)):vt=null}break t}}Ht=0,$n=null,mr(t,n,f,5);break;case 6:Ht=0,$n=null,mr(t,n,f,6);break;case 8:Gf(),nn=6;break e;default:throw Error(s(462))}}yS();break}catch(me){jg(t,me)}while(!0);return ia=gs=null,O.H=o,O.A=u,Pt=a,vt!==null?0:(Yt=null,St=0,vl(),nn)}function yS(){for(;vt!==null&&!qe();)Jg(vt)}function Jg(t){var n=Mg(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?$l(t):vt=n}function $g(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=gg(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=gg(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:nf(n);default:bg(a,n),n=vt=Qp(n,da),n=Mg(a,n,da)}t.memoizedProps=t.pendingProps,n===null?$l(t):vt=n}function mr(t,n,a,o){ia=gs=null,nf(n),ar=null,co=0;var u=n.return;try{if(cS(t,u,n,a,St)){nn=1,Hl(t,li(a,t.current)),vt=null;return}}catch(f){if(u!==null)throw vt=u,f;nn=1,Hl(t,li(a,t.current)),vt=null;return}n.flags&32768?(Et||o===1?t=!0:fr||(St&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),e_(n,t)):$l(n)}function $l(t){var n=t;do{if((n.flags&32768)!==0){e_(n,Ha);return}t=n.return;var a=hS(n.alternate,n,da);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);nn===0&&(nn=5)}function e_(t,n){do{var a=dS(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);nn=6,vt=null}function t_(t,n,a,o,u,f,S,A,H){t.cancelPendingCommit=null;do ec();while(_n!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=wu,yi(t,a,f,S,A,H),t===Yt&&(vt=Yt=null,St=0),dr=n,ka=t,pa=a,If=f,zf=u,Xg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,TS(ie,function(){return r_(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=G.p,G.p=2,S=Pt,Pt|=4;try{pS(t,n,a)}finally{Pt=S,G.p=u,O.T=o}}_n=1,n_(),i_(),a_()}}function n_(){if(_n===1){_n=0;var t=ka,n=dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=G.p;G.p=2;var u=Pt;Pt|=4;try{Bg(n,t);var f=eh,S=Vp(t.containerInfo),A=f.focusedElem,H=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Gp(A.ownerDocument.documentElement,A)){if(H!==null&&bu(A)){var ee=H.start,me=H.end;if(me===void 0&&(me=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(me,A.value.length);else{var ve=A.ownerDocument||document,re=ve&&ve.defaultView||window;if(re.getSelection){var fe=re.getSelection(),We=A.textContent.length,tt=Math.min(H.start,We),Wt=H.end===void 0?tt:Math.min(H.end,We);!fe.extend&&tt>Wt&&(S=Wt,Wt=tt,tt=S);var Y=Hp(A,tt),X=Hp(A,Wt);if(Y&&X&&(fe.rangeCount!==1||fe.anchorNode!==Y.node||fe.anchorOffset!==Y.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var $=ve.createRange();$.setStart(Y.node,Y.offset),fe.removeAllRanges(),tt>Wt?(fe.addRange($),fe.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),fe.addRange($))}}}}for(ve=[],fe=A;fe=fe.parentNode;)fe.nodeType===1&&ve.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var ge=ve[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}hc=!!$f,eh=$f=null}finally{Pt=u,G.p=o,O.T=a}}t.current=n,_n=2}}function i_(){if(_n===2){_n=0;var t=ka,n=dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=G.p;G.p=2;var u=Pt;Pt|=4;try{Ug(t,n.alternate,n)}finally{Pt=u,G.p=o,O.T=a}}_n=3}}function a_(){if(_n===4||_n===3){_n=0,w();var t=ka,n=dr,a=pa,o=Xg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,dr=ka=null,s_(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Hs(a),n=n.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=G.p,G.p=2,O.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{O.T=n,G.p=u}}(pa&3)!==0&&ec(),Vi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Hf?Ro++:(Ro=0,Hf=t):Ro=0,Co(0)}}function s_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,oo(n)))}function ec(){return n_(),i_(),a_(),r_()}function r_(){if(_n!==5)return!1;var t=ka,n=If;If=0;var a=Hs(pa),o=O.T,u=G.p;try{G.p=32>a?32:a,O.T=null,a=zf,zf=null;var f=ka,S=pa;if(_n=0,dr=ka=null,pa=0,(Pt&6)!==0)throw Error(s(331));var A=Pt;if(Pt|=4,Gg(f.current),Ig(f,f.current,S,a),Pt=A,Co(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{G.p=u,O.T=o,s_(t,n)}}function o_(t,n,a){n=li(a,n),n=vf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(Ln(t,2),Vi(t))}function Gt(t,n,a){if(t.tag===3)o_(t,t,a);else for(;n!==null;){if(n.tag===3){o_(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=li(a,t),a=lg(2),o=Ba(n,a,2),o!==null&&(cg(a,o,n,t),Ln(o,2),Vi(o));break}}n=n.return}}function kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new _S;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),t=MS.bind(null,t,n,a),n.then(t,t))}function MS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(St&a)===a&&(nn===4||nn===3&&(St&62914560)===St&&300>g()-jl?(Pt&2)===0&&pr(t,0):Bf|=a,hr===St&&(hr=0)),Vi(t)}function l_(t,n){n===0&&(n=It()),t=ds(t,n),t!==null&&(Ln(t,n),Vi(t))}function ES(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),l_(t,a)}function bS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),l_(t,a)}function TS(t,n){return Mt(t,n)}var tc=null,gr=null,Xf=!1,nc=!1,Wf=!1,Wa=0;function Vi(t){t!==gr&&t.next===null&&(gr===null?tc=gr=t:gr=gr.next=t),nc=!0,Xf||(Xf=!0,RS())}function Co(t,n){if(!Wf&&nc){Wf=!0;do for(var a=!1,o=tc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Be(42|t)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,h_(o,f))}else f=St,f=xe(o,o===Yt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||we(o,f)||(a=!0,h_(o,f));o=o.next}while(a);Wf=!1}}function AS(){c_()}function c_(){nc=Xf=!1;var t=0;Wa!==0&&FS()&&(t=Wa);for(var n=g(),a=null,o=tc;o!==null;){var u=o.next,f=u_(o,n);f===0?(o.next=null,a===null?tc=u:a.next=u,u===null&&(gr=a)):(a=o,(t!==0||(f&3)!==0)&&(nc=!0)),o=u}_n!==0&&_n!==5||Co(t),Wa!==0&&(Wa=0)}function u_(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Be(f),A=1<<S,H=u[S];H===-1?((A&a)===0||(A&o)!==0)&&(u[S]=it(A,n)):H<=n&&(t.expiredLanes|=A),f&=~A}if(n=Yt,a=St,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Rt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Rt(o),Hs(a)){case 2:case 8:a=he;break;case 32:a=ie;break;case 268435456:a=Ce;break;default:a=ie}return o=f_.bind(null,t),a=Mt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Rt(o),t.callbackPriority=2,t.callbackNode=null,2}function f_(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ec()&&t.callbackNode!==a)return null;var o=St;return o=xe(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(qg(t,o,n),u_(t,g()),t.callbackNode!=null&&t.callbackNode===a?f_.bind(null,t):null)}function h_(t,n){if(ec())return null;qg(t,n,!0)}function RS(){zS(function(){(Pt&6)!==0?Mt(Z,AS):c_()})}function qf(){if(Wa===0){var t=tr;t===0&&(t=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Wa=t}return Wa}function d_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ul(""+t)}function p_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function CS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=d_((u[Mn]||null).action),S=o.submitter;S&&(n=(n=S[Mn]||null)?d_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new pl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var H=S?p_(u,S):new FormData(u);hf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=S?p_(u,S):new FormData(u),hf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Yf=0;Yf<Cu.length;Yf++){var jf=Cu[Yf],wS=jf.toLowerCase(),DS=jf[0].toUpperCase()+jf.slice(1);bi(wS,"on"+DS)}bi(Wp,"onAnimationEnd"),bi(qp,"onAnimationIteration"),bi(Yp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(qx,"onTransitionRun"),bi(Yx,"onTransitionStart"),bi(jx,"onTransitionCancel"),bi(jp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function m_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],H=A.instance,ee=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ee;try{f(u)}catch(me){_l(me)}u.currentTarget=null,f=H}else for(S=0;S<o.length;S++){if(A=o[S],H=A.instance,ee=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ee;try{f(u)}catch(me){_l(me)}u.currentTarget=null,f=H}}}}function xt(t,n){var a=n[Gs];a===void 0&&(a=n[Gs]=new Set);var o=t+"__bubble";a.has(o)||(g_(n,t,2,!1),a.add(o))}function Zf(t,n,a){var o=0;n&&(o|=4),g_(a,t,o,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function Kf(t){if(!t[ic]){t[ic]=!0,q.forEach(function(a){a!=="selectionchange"&&(US.has(a)||Zf(a,!1,t),Zf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ic]||(n[ic]=!0,Zf("selectionchange",!1,n))}}function g_(t,n,a,o){switch(W_(n)){case 2:var u=sy;break;case 8:u=ry;break;default:u=fh}a=u.bind(null,n,a,t),u=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Qf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Aa(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=f=S;continue e}A=A.parentNode}}o=o.return}yp(function(){var ee=f,me=du(a),ve=[];e:{var re=Zp.get(t);if(re!==void 0){var fe=pl,We=t;switch(t){case"keypress":if(hl(a)===0)break e;case"keydown":case"keyup":fe=bx;break;case"focusin":We="focus",fe=xu;break;case"focusout":We="blur",fe=xu;break;case"beforeblur":case"afterblur":fe=xu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Rx;break;case Wp:case qp:case Yp:fe=mx;break;case jp:fe=wx;break;case"scroll":case"scrollend":fe=ux;break;case"wheel":fe=Ux;break;case"copy":case"cut":case"paste":fe=_x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Ap;break;case"toggle":case"beforetoggle":fe=Lx}var tt=(n&4)!==0,Wt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?re!==null?re+"Capture":null:re;tt=[];for(var X=ee,$;X!==null;){var ge=X;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||Y===null||(ge=Kr(X,Y),ge!=null&&tt.push(Do(X,ge,$))),Wt)break;X=X.return}0<tt.length&&(re=new fe(re,We,null,a,me),ve.push({event:re,listeners:tt}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",re&&a!==hu&&(We=a.relatedTarget||a.fromElement)&&(Aa(We)||We[Mi]))break e;if((fe||re)&&(re=me.window===me?me:(re=me.ownerDocument)?re.defaultView||re.parentWindow:window,fe?(We=a.relatedTarget||a.toElement,fe=ee,We=We?Aa(We):null,We!==null&&(Wt=c(We),tt=We.tag,We!==Wt||tt!==5&&tt!==27&&tt!==6)&&(We=null)):(fe=null,We=ee),fe!==We)){if(tt=bp,ge="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Ap,ge="onPointerLeave",Y="onPointerEnter",X="pointer"),Wt=fe==null?re:cs(fe),$=We==null?re:cs(We),re=new tt(ge,X+"leave",fe,a,me),re.target=Wt,re.relatedTarget=$,ge=null,Aa(me)===ee&&(tt=new tt(Y,X+"enter",We,a,me),tt.target=$,tt.relatedTarget=Wt,ge=tt),Wt=ge,fe&&We)t:{for(tt=NS,Y=fe,X=We,$=0,ge=Y;ge;ge=tt(ge))$++;ge=0;for(var Qe=X;Qe;Qe=tt(Qe))ge++;for(;0<$-ge;)Y=tt(Y),$--;for(;0<ge-$;)X=tt(X),ge--;for(;$--;){if(Y===X||X!==null&&Y===X.alternate){tt=Y;break t}Y=tt(Y),X=tt(X)}tt=null}else tt=null;fe!==null&&__(ve,re,fe,tt,!1),We!==null&&Wt!==null&&__(ve,Wt,We,tt,!0)}}e:{if(re=ee?cs(ee):window,fe=re.nodeName&&re.nodeName.toLowerCase(),fe==="select"||fe==="input"&&re.type==="file")var Dt=Op;else if(Np(re))if(Pp)Dt=kx;else{Dt=Gx;var Ze=Hx}else fe=re.nodeName,!fe||fe.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ee&&Ei(ee.elementType)&&(Dt=Op):Dt=Vx;if(Dt&&(Dt=Dt(t,ee))){Lp(ve,Dt,a,me);break e}Ze&&Ze(t,re,ee),t==="focusout"&&ee&&re.type==="number"&&ee.memoizedProps.value!=null&&bn(re,"number",re.value)}switch(Ze=ee?cs(ee):window,t){case"focusin":(Np(Ze)||Ze.contentEditable==="true")&&(Ys=Ze,Tu=ee,ao=null);break;case"focusout":ao=Tu=Ys=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,kp(ve,a,me);break;case"selectionchange":if(Wx)break;case"keydown":case"keyup":kp(ve,a,me)}var ht;if(yu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else qs?Dp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Rp&&a.locale!=="ko"&&(qs||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&qs&&(ht=Mp()):(wa=me,gu="value"in wa?wa.value:wa.textContent,qs=!0)),Ze=ac(ee,yt),0<Ze.length&&(yt=new Tp(yt,t,null,a,me),ve.push({event:yt,listeners:Ze}),ht?yt.data=ht:(ht=Up(a),ht!==null&&(yt.data=ht)))),(ht=Px?Bx(t,a):Fx(t,a))&&(yt=ac(ee,"onBeforeInput"),0<yt.length&&(Ze=new Tp("onBeforeInput","beforeinput",null,a,me),ve.push({event:Ze,listeners:yt}),Ze.data=ht)),CS(ve,t,ee,a,me)}m_(ve,n)})}function Do(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ac(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Kr(t,a),u!=null&&o.unshift(Do(t,u,f)),u=Kr(t,n),u!=null&&o.push(Do(t,u,f))),t.tag===3)return o;t=t.return}return[]}function NS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function __(t,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,H=A.alternate,ee=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||ee===null||(H=ee,u?(ee=Kr(a,f),ee!=null&&S.unshift(Do(a,ee,H))):u||(ee=Kr(a,f),ee!=null&&S.push(Do(a,ee,H)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var LS=/\r\n?/g,OS=/\u0000|\uFFFD/g;function v_(t){return(typeof t=="string"?t:""+t).replace(LS,`
`).replace(OS,"")}function x_(t,n){return n=v_(n),v_(t)===n}function Xt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||gn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&gn(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,o);break;case"style":ks(t,o,f);break;case"data":if(n!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ul(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ul(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ul(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Ye(t,"popover",o);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=lx.get(a)||a,Ye(t,a,o))}}function Jf(t,n,a,o,u,f){switch(a){case"style":ks(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?gn(t,o):(typeof o=="number"||typeof o=="bigint")&&gn(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ce.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ye(t,a,o)}}}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,f,S,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),o&&Xt(t,n,"src",a.src,a,null);return;case"input":xt("invalid",t);var A=f=S=u=null,H=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":S=me;break;case"checked":H=me;break;case"defaultChecked":ee=me;break;case"value":f=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Xt(t,n,o,me,a,null)}}Ji(t,f,A,H,ee,S,u,!1);return;case"select":xt("invalid",t),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Xt(t,n,u,A,a,null)}n=f,a=S,t.multiple=!!o,n!=null?ri(t,!!o,n,!1):a!=null&&ri(t,!!o,a,!0);return;case"textarea":xt("invalid",t),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xt(t,n,S,A,a,null)}Tn(t,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xt(t,n,H,o,a,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<wo.length;o++)xt(wo[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,ee,o,a,null)}return;default:if(Ei(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Jf(t,n,me,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Xt(t,n,A,o,a,null))}function PS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,H=null,ee=null,me=null;for(fe in a){var ve=a[fe];if(a.hasOwnProperty(fe)&&ve!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=ve;default:o.hasOwnProperty(fe)||Xt(t,n,fe,null,o,ve)}}for(var re in o){var fe=o[re];if(ve=a[re],o.hasOwnProperty(re)&&(fe!=null||ve!=null))switch(re){case"type":f=fe;break;case"name":u=fe;break;case"checked":ee=fe;break;case"defaultChecked":me=fe;break;case"value":S=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==ve&&Xt(t,n,re,fe,o,ve)}}En(t,S,A,H,ee,me,f,u);return;case"select":fe=S=A=re=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":fe=H;default:o.hasOwnProperty(f)||Xt(t,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":re=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==H&&Xt(t,n,u,f,o,H)}n=A,a=S,o=fe,re!=null?ri(t,!!a,re,!1):!!o!=!!a&&(n!=null?ri(t,!!a,n,!0):ri(t,!!a,a?[]:"",!1));return;case"textarea":fe=re=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xt(t,n,A,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":re=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xt(t,n,S,u,o,f)}zt(t,re,fe);return;case"option":for(var We in a)if(re=a[We],a.hasOwnProperty(We)&&re!=null&&!o.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Xt(t,n,We,null,o,re)}for(H in o)if(re=o[H],fe=a[H],o.hasOwnProperty(H)&&re!==fe&&(re!=null||fe!=null))switch(H){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Xt(t,n,H,re,o,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)re=a[tt],a.hasOwnProperty(tt)&&re!=null&&!o.hasOwnProperty(tt)&&Xt(t,n,tt,null,o,re);for(ee in o)if(re=o[ee],fe=a[ee],o.hasOwnProperty(ee)&&re!==fe&&(re!=null||fe!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Xt(t,n,ee,re,o,fe)}return;default:if(Ei(n)){for(var Wt in a)re=a[Wt],a.hasOwnProperty(Wt)&&re!==void 0&&!o.hasOwnProperty(Wt)&&Jf(t,n,Wt,void 0,o,re);for(me in o)re=o[me],fe=a[me],!o.hasOwnProperty(me)||re===fe||re===void 0&&fe===void 0||Jf(t,n,me,re,o,fe);return}}for(var Y in a)re=a[Y],a.hasOwnProperty(Y)&&re!=null&&!o.hasOwnProperty(Y)&&Xt(t,n,Y,null,o,re);for(ve in o)re=o[ve],fe=a[ve],!o.hasOwnProperty(ve)||re===fe||re==null&&fe==null||Xt(t,n,ve,re,o,fe)}function S_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&S_(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ee=H.startTime;if(ee>A)break;var me=H.transferSize,ve=H.initiatorType;me&&S_(ve)&&(H=H.responseEnd,S+=me*(H<A?1:(A-ee)/(H-ee)))}if(--o,n+=8*(f+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var $f=null,eh=null;function sc(t){return t.nodeType===9?t:t.ownerDocument}function y_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function th(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nh=null;function FS(){var t=window.event;return t&&t.type==="popstate"?t===nh?!1:(nh=t,!0):(nh=null,!1)}var E_=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,b_=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof b_<"u"?function(t){return b_.resolve(null).then(t).catch(HS)}:E_;function HS(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function T_(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Sr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Uo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[ls]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Uo(t.ownerDocument.body);a=u}while(a);Sr(n)}function A_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ih(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ih(a),Zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function GS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ls])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function VS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function R_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function ah(t){return t.data==="$?"||t.data==="$~"}function sh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var rh=null;function C_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function w_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function D_(t,n,a){switch(n=sc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zr(t)}var pi=new Map,U_=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=G.d;G.d={f:XS,r:WS,D:qS,C:YS,L:jS,m:ZS,X:QS,S:KS,M:JS};function XS(){var t=ma.f(),n=Ql();return t||n}function WS(t){var n=Ra(t);n!==null&&n.tag===5&&n.type==="form"?jm(n):ma.r(t)}var _r=typeof document>"u"?null:document;function N_(t,n,a){var o=_r;if(o&&typeof n=="string"&&n){var u=rt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),U_.has(u)||(U_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",t),R(n),o.head.appendChild(n)))}}function qS(t){ma.D(t),N_("dns-prefetch",t,null)}function YS(t,n){ma.C(t,n),N_("preconnect",t,n)}function jS(t,n,a){ma.L(t,n,a);var o=_r;if(o&&t&&n){var u='link[rel="preload"][as="'+rt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+rt(a.imageSizes)+'"]')):u+='[href="'+rt(t)+'"]';var f=u;switch(n){case"style":f=vr(t);break;case"script":f=xr(t)}pi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(f))||n==="script"&&o.querySelector(Lo(f))||(n=o.createElement("link"),Un(n,"link",t),R(n),o.head.appendChild(n)))}}function ZS(t,n){ma.m(t,n);var a=_r;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+rt(o)+'"][href="'+rt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=xr(t)}if(!pi.has(f)&&(t=x({rel:"modulepreload",href:t},n),pi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(f)))return}o=a.createElement("link"),Un(o,"link",t),R(o),a.head.appendChild(o)}}}function KS(t,n,a){ma.S(t,n,a);var o=_r;if(o&&t){var u=Ca(o).hoistableStyles,f=vr(t);n=n||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(No(f)))A.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(f))&&oh(t,a);var H=S=o.createElement("link");R(H),Un(H,"link",t),H._p=new Promise(function(ee,me){H.onload=ee,H.onerror=me}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,oc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function QS(t,n){ma.X(t,n);var a=_r;if(a&&t){var o=Ca(a).hoistableScripts,u=xr(t),f=o.get(u);f||(f=a.querySelector(Lo(u)),f||(t=x({src:t,async:!0},n),(n=pi.get(u))&&lh(t,n),f=a.createElement("script"),R(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function JS(t,n){ma.M(t,n);var a=_r;if(a&&t){var o=Ca(a).hoistableScripts,u=xr(t),f=o.get(u);f||(f=a.querySelector(Lo(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&lh(t,n),f=a.createElement("script"),R(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function L_(t,n,a,o){var u=(u=ne.current)?rc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vr(a.href),a=Ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=vr(a.href);var f=Ca(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(No(t)))&&!f._p&&(S.instance=f,S.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),f||$S(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xr(a),a=Ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function vr(t){return'href="'+rt(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function O_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function $S(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),R(n),t.head.appendChild(n))}function xr(t){return'[src="'+rt(t)+'"]'}function Lo(t){return"script[async]"+t}function P_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+rt(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),Un(o,"style",u),oc(o,a.precedence,t),n.instance=o;case"stylesheet":u=vr(a.href);var f=t.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;o=O_(a),(u=pi.get(u))&&oh(o,u),f=(t.ownerDocument||t).createElement("link"),R(f);var S=f;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Un(f,"link",o),n.state.loading|=4,oc(f,a.precedence,t),n.instance=f;case"script":return f=xr(a.src),(u=t.querySelector(Lo(f)))?(n.instance=u,R(u),u):(o=a,(u=pi.get(f))&&(o=x({},a),lh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),Un(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,a.precedence,t));return n.instance}function oc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function oh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function lh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var lc=null;function B_(t,n,a){if(lc===null){var o=new Map,u=lc=new Map;u.set(a,o)}else u=lc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ls]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function F_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ey(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function I_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ty(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=vr(o.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=cc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,o=O_(o),(u=pi.get(u))&&oh(o,u),f=f.createElement("link"),R(f);var S=f;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Un(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ch=0;function ny(t,n){return t.stylesheets&&t.count===0&&fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ch===0&&(ch=62500*BS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ch?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uc=null;function fc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uc=new Map,n.forEach(iy,t),uc=null,cc.call(t))}function iy(t,n){if(!(n.state.loading&4)){var a=uc.get(t);if(a)var o=a.get(null);else{a=new Map,uc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:L,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ay(t,n,a,o,u,f,S,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function z_(t,n,a,o,u,f,S,A,H,ee,me,ve){return t=new ay(t,n,a,S,H,ee,me,ve,A),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Gu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Wu(f),t}function H_(t){return t?(t=Ks,t):Ks}function G_(t,n,a,o,u,f){u=H_(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ba(t,o,n),a!==null&&(Wn(a,t,n),fo(a,t,n))}function V_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function uh(t,n){V_(t,n),(t=t.alternate)&&V_(t,n)}function k_(t){if(t.tag===13||t.tag===31){var n=ds(t,67108864);n!==null&&Wn(n,t,67108864),uh(t,67108864)}}function X_(t){if(t.tag===13||t.tag===31){var n=ti();n=qr(n);var a=ds(t,n);a!==null&&Wn(a,t,n),uh(t,n)}}var hc=!0;function sy(t,n,a,o){var u=O.T;O.T=null;var f=G.p;try{G.p=2,fh(t,n,a,o)}finally{G.p=f,O.T=u}}function ry(t,n,a,o){var u=O.T;O.T=null;var f=G.p;try{G.p=8,fh(t,n,a,o)}finally{G.p=f,O.T=u}}function fh(t,n,a,o){if(hc){var u=hh(o);if(u===null)Qf(t,n,o,dc,a),q_(t,o);else if(ly(u,t,n,a,o))o.stopPropagation();else if(q_(t,o),n&4&&-1<oy.indexOf(t)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Me(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-Be(S);A.entanglements[1]|=H,S&=~H}Vi(f),(Pt&6)===0&&(Zl=g()+500,Co(0))}}break;case 31:case 13:A=ds(f,2),A!==null&&Wn(A,f,2),Ql(),uh(f,2)}if(f=hh(o),f===null&&Qf(t,n,o,dc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Qf(t,n,o,null,a)}}function hh(t){return t=du(t),dh(t)}var dc=null;function dh(t){if(dc=null,t=Aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return dc=t,null}function W_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(F()){case Z:return 2;case he:return 8;case ie:case Pe:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var ph=!1,Ya=null,ja=null,Za=null,Po=new Map,Bo=new Map,Ka=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q_(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Fo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&k_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ly(t,n,a,o,u){switch(n){case"focusin":return Ya=Fo(Ya,t,n,a,o,u),!0;case"dragenter":return ja=Fo(ja,t,n,a,o,u),!0;case"mouseover":return Za=Fo(Za,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Po.set(f,Fo(Po.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,Fo(Bo.get(f)||null,t,n,a,o,u)),!0}return!1}function Y_(t){var n=Aa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ii(t.priority,function(){X_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ii(t.priority,function(){X_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=hh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);hu=o,a.target.dispatchEvent(o),hu=null}else return n=Ra(a),n!==null&&k_(n),t.blockedOn=a,!1;n.shift()}return!0}function j_(t,n,a){pc(t)&&a.delete(n)}function cy(){ph=!1,Ya!==null&&pc(Ya)&&(Ya=null),ja!==null&&pc(ja)&&(ja=null),Za!==null&&pc(Za)&&(Za=null),Po.forEach(j_),Bo.forEach(j_)}function mc(t,n){t.blockedOn===n&&(t.blockedOn=null,ph||(ph=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,cy)))}var gc=null;function Z_(t){gc!==t&&(gc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gc===t&&(gc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(dh(o||a)===null)continue;break}var f=Ra(a);f!==null&&(t.splice(n,3),n-=3,hf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Sr(t){function n(H){return mc(H,t)}Ya!==null&&mc(Ya,t),ja!==null&&mc(ja,t),Za!==null&&mc(Za,t),Po.forEach(n),Bo.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Y_(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[Mn]||null;if(typeof f=="function")S||Z_(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Mn]||null)A=S.formAction;else if(dh(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Z_(a)}}}function K_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function mh(t){this._internalRoot=t}_c.prototype.render=mh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ti();G_(a,o,t,n,null,null)},_c.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;G_(t.current,2,null,t,null,null),Ql(),n[Mi]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var n=Yr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&Y_(t)}};var Q_=e.version;if(Q_!=="19.2.1")throw Error(s(527,Q_,"19.2.1"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var uy={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Ee=vc.inject(uy),be=vc}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=ag,f=sg,S=rg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=z_(t,1,!1,null,null,a,o,null,u,f,S,K_),t[Mi]=n.current,Kf(t),new mh(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=ag,S=sg,A=rg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=z_(t,1,!0,n,a??null,o,u,H,f,S,A,K_),n.context=H_(null),a=n.current,o=ti(),o=qr(o),u=Pa(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Vi(n),t[Mi]=n.current,Kf(t),new _c(n)},zo.version="19.2.1",zo}var o0;function Sy(){if(o0)return vh.exports;o0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vh.exports=xy(),vh.exports}var yy=Sy();const ji=Object.create(null);ji.open="0";ji.close="1";ji.ping="2";ji.pong="3";ji.message="4";ji.upgrade="5";ji.noop="6";const Xc=Object.create(null);Object.keys(ji).forEach(r=>{Xc[ji[r]]=r});const id={type:"error",data:"parser error"},hv=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",dv=typeof ArrayBuffer=="function",pv=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,sp=({type:r,data:e},i,s)=>hv&&e instanceof Blob?i?s(e):l0(e,s):dv&&(e instanceof ArrayBuffer||pv(e))?i?s(e):l0(new Blob([e]),s):s(ji[r]+(e||"")),l0=(r,e)=>{const i=new FileReader;return i.onload=function(){const s=i.result.split(",")[1];e("b"+(s||""))},i.readAsDataURL(r)};function c0(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let Mh;function My(r,e){if(hv&&r.data instanceof Blob)return r.data.arrayBuffer().then(c0).then(e);if(dv&&(r.data instanceof ArrayBuffer||pv(r.data)))return e(c0(r.data));sp(r,!1,i=>{Mh||(Mh=new TextEncoder),e(Mh.encode(i))})}const u0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Zo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<u0.length;r++)Zo[u0.charCodeAt(r)]=r;const Ey=r=>{let e=r.length*.75,i=r.length,s,l=0,c,h,d,m;r[r.length-1]==="="&&(e--,r[r.length-2]==="="&&e--);const p=new ArrayBuffer(e),_=new Uint8Array(p);for(s=0;s<i;s+=4)c=Zo[r.charCodeAt(s)],h=Zo[r.charCodeAt(s+1)],d=Zo[r.charCodeAt(s+2)],m=Zo[r.charCodeAt(s+3)],_[l++]=c<<2|h>>4,_[l++]=(h&15)<<4|d>>2,_[l++]=(d&3)<<6|m&63;return p},by=typeof ArrayBuffer=="function",rp=(r,e)=>{if(typeof r!="string")return{type:"message",data:mv(r,e)};const i=r.charAt(0);return i==="b"?{type:"message",data:Ty(r.substring(1),e)}:Xc[i]?r.length>1?{type:Xc[i],data:r.substring(1)}:{type:Xc[i]}:id},Ty=(r,e)=>{if(by){const i=Ey(r);return mv(i,e)}else return{base64:!0,data:r}},mv=(r,e)=>{switch(e){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},gv="",Ay=(r,e)=>{const i=r.length,s=new Array(i);let l=0;r.forEach((c,h)=>{sp(c,!1,d=>{s[h]=d,++l===i&&e(s.join(gv))})})},Ry=(r,e)=>{const i=r.split(gv),s=[];for(let l=0;l<i.length;l++){const c=rp(i[l],e);if(s.push(c),c.type==="error")break}return s};function Cy(){return new TransformStream({transform(r,e){My(r,i=>{const s=i.length;let l;if(s<126)l=new Uint8Array(1),new DataView(l.buffer).setUint8(0,s);else if(s<65536){l=new Uint8Array(3);const c=new DataView(l.buffer);c.setUint8(0,126),c.setUint16(1,s)}else{l=new Uint8Array(9);const c=new DataView(l.buffer);c.setUint8(0,127),c.setBigUint64(1,BigInt(s))}r.data&&typeof r.data!="string"&&(l[0]|=128),e.enqueue(l),e.enqueue(i)})}})}let Eh;function xc(r){return r.reduce((e,i)=>e+i.length,0)}function Sc(r,e){if(r[0].length===e)return r.shift();const i=new Uint8Array(e);let s=0;for(let l=0;l<e;l++)i[l]=r[0][s++],s===r[0].length&&(r.shift(),s=0);return r.length&&s<r[0].length&&(r[0]=r[0].slice(s)),i}function wy(r,e){Eh||(Eh=new TextDecoder);const i=[];let s=0,l=-1,c=!1;return new TransformStream({transform(h,d){for(i.push(h);;){if(s===0){if(xc(i)<1)break;const m=Sc(i,1);c=(m[0]&128)===128,l=m[0]&127,l<126?s=3:l===126?s=1:s=2}else if(s===1){if(xc(i)<2)break;const m=Sc(i,2);l=new DataView(m.buffer,m.byteOffset,m.length).getUint16(0),s=3}else if(s===2){if(xc(i)<8)break;const m=Sc(i,8),p=new DataView(m.buffer,m.byteOffset,m.length),_=p.getUint32(0);if(_>Math.pow(2,21)-1){d.enqueue(id);break}l=_*Math.pow(2,32)+p.getUint32(4),s=3}else{if(xc(i)<l)break;const m=Sc(i,l);d.enqueue(rp(c?m:Eh.decode(m),e)),s=0}if(l===0||l>r){d.enqueue(id);break}}}})}const _v=4;function pn(r){if(r)return Dy(r)}function Dy(r){for(var e in pn.prototype)r[e]=pn.prototype[e];return r}pn.prototype.on=pn.prototype.addEventListener=function(r,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(e),this};pn.prototype.once=function(r,e){function i(){this.off(r,i),e.apply(this,arguments)}return i.fn=e,this.on(r,i),this};pn.prototype.off=pn.prototype.removeListener=pn.prototype.removeAllListeners=pn.prototype.removeEventListener=function(r,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var i=this._callbacks["$"+r];if(!i)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var s,l=0;l<i.length;l++)if(s=i[l],s===e||s.fn===e){i.splice(l,1);break}return i.length===0&&delete this._callbacks["$"+r],this};pn.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),i=this._callbacks["$"+r],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(i){i=i.slice(0);for(var s=0,l=i.length;s<l;++s)i[s].apply(this,e)}return this};pn.prototype.emitReserved=pn.prototype.emit;pn.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};pn.prototype.hasListeners=function(r){return!!this.listeners(r).length};const ru=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,i)=>i(e,0),_i=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Uy="arraybuffer";function vv(r,...e){return e.reduce((i,s)=>(r.hasOwnProperty(s)&&(i[s]=r[s]),i),{})}const Ny=_i.setTimeout,Ly=_i.clearTimeout;function ou(r,e){e.useNativeTimers?(r.setTimeoutFn=Ny.bind(_i),r.clearTimeoutFn=Ly.bind(_i)):(r.setTimeoutFn=_i.setTimeout.bind(_i),r.clearTimeoutFn=_i.clearTimeout.bind(_i))}const Oy=1.33;function Py(r){return typeof r=="string"?By(r):Math.ceil((r.byteLength||r.size)*Oy)}function By(r){let e=0,i=0;for(let s=0,l=r.length;s<l;s++)e=r.charCodeAt(s),e<128?i+=1:e<2048?i+=2:e<55296||e>=57344?i+=3:(s++,i+=4);return i}function xv(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Fy(r){let e="";for(let i in r)r.hasOwnProperty(i)&&(e.length&&(e+="&"),e+=encodeURIComponent(i)+"="+encodeURIComponent(r[i]));return e}function Iy(r){let e={},i=r.split("&");for(let s=0,l=i.length;s<l;s++){let c=i[s].split("=");e[decodeURIComponent(c[0])]=decodeURIComponent(c[1])}return e}class zy extends Error{constructor(e,i,s){super(e),this.description=i,this.context=s,this.type="TransportError"}}class op extends pn{constructor(e){super(),this.writable=!1,ou(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,i,s){return super.emitReserved("error",new zy(e,i,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const i=rp(e,this.socket.binaryType);this.onPacket(i)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,i={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(i)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const i=Fy(e);return i.length?"?"+i:""}}class Hy extends op{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const i=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let s=0;this._polling&&(s++,this.once("pollComplete",function(){--s||i()})),this.writable||(s++,this.once("drain",function(){--s||i()}))}else i()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const i=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};Ry(e,this.socket.binaryType).forEach(i),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ay(e,i=>{this.doWrite(i,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",i=this.query||{};return this.opts.timestampRequests!==!1&&(i[this.opts.timestampParam]=xv()),!this.supportsBinary&&!i.sid&&(i.b64=1),this.createUri(e,i)}}let Sv=!1;try{Sv=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Gy=Sv;function Vy(){}class ky extends Hy{constructor(e){if(super(e),typeof location<"u"){const i=location.protocol==="https:";let s=location.port;s||(s=i?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}}doWrite(e,i){const s=this.request({method:"POST",data:e});s.on("success",i),s.on("error",(l,c)=>{this.onError("xhr post error",l,c)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(i,s)=>{this.onError("xhr poll error",i,s)}),this.pollXhr=e}}class qi extends pn{constructor(e,i,s){super(),this.createRequest=e,ou(this,s),this._opts=s,this._method=s.method||"GET",this._uri=i,this._data=s.data!==void 0?s.data:null,this._create()}_create(){var e;const i=vv(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");i.xdomain=!!this._opts.xd;const s=this._xhr=this.createRequest(i);try{s.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let l in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(l)&&s.setRequestHeader(l,this._opts.extraHeaders[l])}}catch{}if(this._method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(s),"withCredentials"in s&&(s.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(s.timeout=this._opts.requestTimeout),s.onreadystatechange=()=>{var l;s.readyState===3&&((l=this._opts.cookieJar)===null||l===void 0||l.parseCookies(s.getResponseHeader("set-cookie"))),s.readyState===4&&(s.status===200||s.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof s.status=="number"?s.status:0)},0))},s.send(this._data)}catch(l){this.setTimeoutFn(()=>{this._onError(l)},0);return}typeof document<"u"&&(this._index=qi.requestsCount++,qi.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Vy,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete qi.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}qi.requestsCount=0;qi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",f0);else if(typeof addEventListener=="function"){const r="onpagehide"in _i?"pagehide":"unload";addEventListener(r,f0,!1)}}function f0(){for(let r in qi.requests)qi.requests.hasOwnProperty(r)&&qi.requests[r].abort()}const Xy=(function(){const r=yv({xdomain:!1});return r&&r.responseType!==null})();class Wy extends ky{constructor(e){super(e);const i=e&&e.forceBase64;this.supportsBinary=Xy&&!i}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new qi(yv,this.uri(),e)}}function yv(r){const e=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Gy))return new XMLHttpRequest}catch{}if(!e)try{return new _i[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Mv=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class qy extends op{get name(){return"websocket"}doOpen(){const e=this.uri(),i=this.opts.protocols,s=Mv?{}:vv(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,i,s)}catch(l){return this.emitReserved("error",l)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let i=0;i<e.length;i++){const s=e[i],l=i===e.length-1;sp(s,this.supportsBinary,c=>{try{this.doWrite(s,c)}catch{}l&&ru(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",i=this.query||{};return this.opts.timestampRequests&&(i[this.opts.timestampParam]=xv()),this.supportsBinary||(i.b64=1),this.createUri(e,i)}}const bh=_i.WebSocket||_i.MozWebSocket;class Yy extends qy{createSocket(e,i,s){return Mv?new bh(e,i,s):i?new bh(e,i):new bh(e)}doWrite(e,i){this.ws.send(i)}}class jy extends op{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const i=wy(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(i).getReader(),l=Cy();l.readable.pipeTo(e.writable),this._writer=l.writable.getWriter();const c=()=>{s.read().then(({done:d,value:m})=>{d||(this.onPacket(m),c())}).catch(d=>{})};c();const h={type:"open"};this.query.sid&&(h.data=`{"sid":"${this.query.sid}"}`),this._writer.write(h).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let i=0;i<e.length;i++){const s=e[i],l=i===e.length-1;this._writer.write(s).then(()=>{l&&ru(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Zy={websocket:Yy,webtransport:jy,polling:Wy},Ky=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Qy=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ad(r){if(r.length>8e3)throw"URI too long";const e=r,i=r.indexOf("["),s=r.indexOf("]");i!=-1&&s!=-1&&(r=r.substring(0,i)+r.substring(i,s).replace(/:/g,";")+r.substring(s,r.length));let l=Ky.exec(r||""),c={},h=14;for(;h--;)c[Qy[h]]=l[h]||"";return i!=-1&&s!=-1&&(c.source=e,c.host=c.host.substring(1,c.host.length-1).replace(/;/g,":"),c.authority=c.authority.replace("[","").replace("]","").replace(/;/g,":"),c.ipv6uri=!0),c.pathNames=Jy(c,c.path),c.queryKey=$y(c,c.query),c}function Jy(r,e){const i=/\/{2,9}/g,s=e.replace(i,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function $y(r,e){const i={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,l,c){l&&(i[l]=c)}),i}const sd=typeof addEventListener=="function"&&typeof removeEventListener=="function",Wc=[];sd&&addEventListener("offline",()=>{Wc.forEach(r=>r())},!1);class rs extends pn{constructor(e,i){if(super(),this.binaryType=Uy,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(i=e,e=null),e){const s=ad(e);i.hostname=s.host,i.secure=s.protocol==="https"||s.protocol==="wss",i.port=s.port,s.query&&(i.query=s.query)}else i.host&&(i.hostname=ad(i.host).host);ou(this,i),this.secure=i.secure!=null?i.secure:typeof location<"u"&&location.protocol==="https:",i.hostname&&!i.port&&(i.port=this.secure?"443":"80"),this.hostname=i.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=i.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},i.transports.forEach(s=>{const l=s.prototype.name;this.transports.push(l),this._transportsByName[l]=s}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},i),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Iy(this.opts.query)),sd&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Wc.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const i=Object.assign({},this.opts.query);i.EIO=_v,i.transport=e,this.id&&(i.sid=this.id);const s=Object.assign({},this.opts,{query:i,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](s)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&rs.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const i=this.createTransport(e);i.open(),this.setTransport(i)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",i=>this._onClose("transport close",i))}onOpen(){this.readyState="open",rs.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const i=new Error("server error");i.code=e.data,this._onError(i);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let i=1;for(let s=0;s<this.writeBuffer.length;s++){const l=this.writeBuffer[s].data;if(l&&(i+=Py(l)),s>0&&i>this._maxPayload)return this.writeBuffer.slice(0,s);i+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,ru(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,i,s){return this._sendPacket("message",e,i,s),this}send(e,i,s){return this._sendPacket("message",e,i,s),this}_sendPacket(e,i,s,l){if(typeof i=="function"&&(l=i,i=void 0),typeof s=="function"&&(l=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const c={type:e,data:i,options:s};this.emitReserved("packetCreate",c),this.writeBuffer.push(c),l&&this.once("flush",l),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},i=()=>{this.off("upgrade",i),this.off("upgradeError",i),e()},s=()=>{this.once("upgrade",i),this.once("upgradeError",i)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}_onError(e){if(rs.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,i){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),sd&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const s=Wc.indexOf(this._offlineEventListener);s!==-1&&Wc.splice(s,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,i),this.writeBuffer=[],this._prevBufferLen=0}}}rs.protocol=_v;class eM extends rs{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let i=this.createTransport(e),s=!1;rs.priorWebsocketSuccess=!1;const l=()=>{s||(i.send([{type:"ping",data:"probe"}]),i.once("packet",x=>{if(!s)if(x.type==="pong"&&x.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",i),!i)return;rs.priorWebsocketSuccess=i.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(_(),this.setTransport(i),i.send([{type:"upgrade"}]),this.emitReserved("upgrade",i),i=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=i.name,this.emitReserved("upgradeError",y)}}))};function c(){s||(s=!0,_(),i.close(),i=null)}const h=x=>{const y=new Error("probe error: "+x);y.transport=i.name,c(),this.emitReserved("upgradeError",y)};function d(){h("transport closed")}function m(){h("socket closed")}function p(x){i&&x.name!==i.name&&c()}const _=()=>{i.removeListener("open",l),i.removeListener("error",h),i.removeListener("close",d),this.off("close",m),this.off("upgrading",p)};i.once("open",l),i.once("error",h),i.once("close",d),this.once("close",m),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{s||i.open()},200):i.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const i=[];for(let s=0;s<e.length;s++)~this.transports.indexOf(e[s])&&i.push(e[s]);return i}}let tM=class extends eM{constructor(e,i={}){const s=typeof e=="object"?e:i;(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(l=>Zy[l]).filter(l=>!!l)),super(e,s)}};function nM(r,e="",i){let s=r;i=i||typeof location<"u"&&location,r==null&&(r=i.protocol+"//"+i.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=i.protocol+r:r=i.host+r),/^(https?|wss?):\/\//.test(r)||(typeof i<"u"?r=i.protocol+"//"+r:r="https://"+r),s=ad(r)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const c=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+c+":"+s.port+e,s.href=s.protocol+"://"+c+(i&&i.port===s.port?"":":"+s.port),s}const iM=typeof ArrayBuffer=="function",aM=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,Ev=Object.prototype.toString,sM=typeof Blob=="function"||typeof Blob<"u"&&Ev.call(Blob)==="[object BlobConstructor]",rM=typeof File=="function"||typeof File<"u"&&Ev.call(File)==="[object FileConstructor]";function lp(r){return iM&&(r instanceof ArrayBuffer||aM(r))||sM&&r instanceof Blob||rM&&r instanceof File}function qc(r,e){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let i=0,s=r.length;i<s;i++)if(qc(r[i]))return!0;return!1}if(lp(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return qc(r.toJSON(),!0);for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i)&&qc(r[i]))return!0;return!1}function oM(r){const e=[],i=r.data,s=r;return s.data=rd(i,e),s.attachments=e.length,{packet:s,buffers:e}}function rd(r,e){if(!r)return r;if(lp(r)){const i={_placeholder:!0,num:e.length};return e.push(r),i}else if(Array.isArray(r)){const i=new Array(r.length);for(let s=0;s<r.length;s++)i[s]=rd(r[s],e);return i}else if(typeof r=="object"&&!(r instanceof Date)){const i={};for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=rd(r[s],e));return i}return r}function lM(r,e){return r.data=od(r.data,e),delete r.attachments,r}function od(r,e){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<e.length)return e[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let i=0;i<r.length;i++)r[i]=od(r[i],e);else if(typeof r=="object")for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&(r[i]=od(r[i],e));return r}const cM=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],uM=5;var bt;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(bt||(bt={}));class fM{constructor(e){this.replacer=e}encode(e){return(e.type===bt.EVENT||e.type===bt.ACK)&&qc(e)?this.encodeAsBinary({type:e.type===bt.EVENT?bt.BINARY_EVENT:bt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let i=""+e.type;return(e.type===bt.BINARY_EVENT||e.type===bt.BINARY_ACK)&&(i+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(i+=e.nsp+","),e.id!=null&&(i+=e.id),e.data!=null&&(i+=JSON.stringify(e.data,this.replacer)),i}encodeAsBinary(e){const i=oM(e),s=this.encodeAsString(i.packet),l=i.buffers;return l.unshift(s),l}}function h0(r){return Object.prototype.toString.call(r)==="[object Object]"}class cp extends pn{constructor(e){super(),this.reviver=e}add(e){let i;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");i=this.decodeString(e);const s=i.type===bt.BINARY_EVENT;s||i.type===bt.BINARY_ACK?(i.type=s?bt.EVENT:bt.ACK,this.reconstructor=new hM(i),i.attachments===0&&super.emitReserved("decoded",i)):super.emitReserved("decoded",i)}else if(lp(e)||e.base64)if(this.reconstructor)i=this.reconstructor.takeBinaryData(e),i&&(this.reconstructor=null,super.emitReserved("decoded",i));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let i=0;const s={type:Number(e.charAt(0))};if(bt[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===bt.BINARY_EVENT||s.type===bt.BINARY_ACK){const c=i+1;for(;e.charAt(++i)!=="-"&&i!=e.length;);const h=e.substring(c,i);if(h!=Number(h)||e.charAt(i)!=="-")throw new Error("Illegal attachments");s.attachments=Number(h)}if(e.charAt(i+1)==="/"){const c=i+1;for(;++i&&!(e.charAt(i)===","||i===e.length););s.nsp=e.substring(c,i)}else s.nsp="/";const l=e.charAt(i+1);if(l!==""&&Number(l)==l){const c=i+1;for(;++i;){const h=e.charAt(i);if(h==null||Number(h)!=h){--i;break}if(i===e.length)break}s.id=Number(e.substring(c,i+1))}if(e.charAt(++i)){const c=this.tryParse(e.substr(i));if(cp.isPayloadValid(s.type,c))s.data=c;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,i){switch(e){case bt.CONNECT:return h0(i);case bt.DISCONNECT:return i===void 0;case bt.CONNECT_ERROR:return typeof i=="string"||h0(i);case bt.EVENT:case bt.BINARY_EVENT:return Array.isArray(i)&&(typeof i[0]=="number"||typeof i[0]=="string"&&cM.indexOf(i[0])===-1);case bt.ACK:case bt.BINARY_ACK:return Array.isArray(i)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class hM{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const i=lM(this.reconPack,this.buffers);return this.finishedReconstruction(),i}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const dM=Object.freeze(Object.defineProperty({__proto__:null,Decoder:cp,Encoder:fM,get PacketType(){return bt},protocol:uM},Symbol.toStringTag,{value:"Module"}));function Di(r,e,i){return r.on(e,i),function(){r.off(e,i)}}const pM=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class bv extends pn{constructor(e,i,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=i,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Di(e,"open",this.onopen.bind(this)),Di(e,"packet",this.onpacket.bind(this)),Di(e,"error",this.onerror.bind(this)),Di(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...i){var s,l,c;if(pM.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(i.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(i),this;const h={type:bt.EVENT,data:i};if(h.options={},h.options.compress=this.flags.compress!==!1,typeof i[i.length-1]=="function"){const _=this.ids++,x=i.pop();this._registerAckCallback(_,x),h.id=_}const d=(l=(s=this.io.engine)===null||s===void 0?void 0:s.transport)===null||l===void 0?void 0:l.writable,m=this.connected&&!(!((c=this.io.engine)===null||c===void 0)&&c._hasPingExpired());return this.flags.volatile&&!d||(m?(this.notifyOutgoingListeners(h),this.packet(h)):this.sendBuffer.push(h)),this.flags={},this}_registerAckCallback(e,i){var s;const l=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(l===void 0){this.acks[e]=i;return}const c=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===e&&this.sendBuffer.splice(d,1);i.call(this,new Error("operation has timed out"))},l),h=(...d)=>{this.io.clearTimeoutFn(c),i.apply(this,d)};h.withError=!0,this.acks[e]=h}emitWithAck(e,...i){return new Promise((s,l)=>{const c=(h,d)=>h?l(h):s(d);c.withError=!0,i.push(c),this.emit(e,...i)})}_addToQueue(e){let i;typeof e[e.length-1]=="function"&&(i=e.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((l,...c)=>s!==this._queue[0]?void 0:(l!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),i&&i(l)):(this._queue.shift(),i&&i(null,...c)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const i=this._queue[0];i.pending&&!e||(i.pending=!0,i.tryCount++,this.flags=i.flags,this.emit.apply(this,i.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:bt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,i){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,i),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(s=>String(s.id)===e)){const s=this.acks[e];delete this.acks[e],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case bt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case bt.EVENT:case bt.BINARY_EVENT:this.onevent(e);break;case bt.ACK:case bt.BINARY_ACK:this.onack(e);break;case bt.DISCONNECT:this.ondisconnect();break;case bt.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const i=e.data||[];e.id!=null&&i.push(this.ack(e.id)),this.connected?this.emitEvent(i):this.receiveBuffer.push(Object.freeze(i))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const i=this._anyListeners.slice();for(const s of i)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const i=this;let s=!1;return function(...l){s||(s=!0,i.packet({type:bt.ACK,id:e,data:l}))}}onack(e){const i=this.acks[e.id];typeof i=="function"&&(delete this.acks[e.id],i.withError&&e.data.unshift(null),i.apply(this,e.data))}onconnect(e,i){this.id=e,this.recovered=i&&this._pid===i,this._pid=i,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:bt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const i=this._anyListeners;for(let s=0;s<i.length;s++)if(e===i[s])return i.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const i=this._anyOutgoingListeners;for(let s=0;s<i.length;s++)if(e===i[s])return i.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const i=this._anyOutgoingListeners.slice();for(const s of i)s.apply(this,e.data)}}}function Vr(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}Vr.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),i=Math.floor(e*this.jitter*r);r=(Math.floor(e*10)&1)==0?r-i:r+i}return Math.min(r,this.max)|0};Vr.prototype.reset=function(){this.attempts=0};Vr.prototype.setMin=function(r){this.ms=r};Vr.prototype.setMax=function(r){this.max=r};Vr.prototype.setJitter=function(r){this.jitter=r};class ld extends pn{constructor(e,i){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(i=e,e=void 0),i=i||{},i.path=i.path||"/socket.io",this.opts=i,ou(this,i),this.reconnection(i.reconnection!==!1),this.reconnectionAttempts(i.reconnectionAttempts||1/0),this.reconnectionDelay(i.reconnectionDelay||1e3),this.reconnectionDelayMax(i.reconnectionDelayMax||5e3),this.randomizationFactor((s=i.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new Vr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(i.timeout==null?2e4:i.timeout),this._readyState="closed",this.uri=e;const l=i.parser||dM;this.encoder=new l.Encoder,this.decoder=new l.Decoder,this._autoConnect=i.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var i;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(i=this.backoff)===null||i===void 0||i.setMin(e),this)}randomizationFactor(e){var i;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(i=this.backoff)===null||i===void 0||i.setJitter(e),this)}reconnectionDelayMax(e){var i;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(i=this.backoff)===null||i===void 0||i.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new tM(this.uri,this.opts);const i=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const l=Di(i,"open",function(){s.onopen(),e&&e()}),c=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),e?e(d):this.maybeReconnectOnOpen()},h=Di(i,"error",c);if(this._timeout!==!1){const d=this._timeout,m=this.setTimeoutFn(()=>{l(),c(new Error("timeout")),i.close()},d);this.opts.autoUnref&&m.unref(),this.subs.push(()=>{this.clearTimeoutFn(m)})}return this.subs.push(l),this.subs.push(h),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Di(e,"ping",this.onping.bind(this)),Di(e,"data",this.ondata.bind(this)),Di(e,"error",this.onerror.bind(this)),Di(e,"close",this.onclose.bind(this)),Di(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(i){this.onclose("parse error",i)}}ondecoded(e){ru(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,i){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new bv(this,e,i),this.nsps[e]=s),s}_destroy(e){const i=Object.keys(this.nsps);for(const s of i)if(this.nsps[s].active)return;this._close()}_packet(e){const i=this.encoder.encode(e);for(let s=0;s<i.length;s++)this.engine.write(i[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,i){var s;this.cleanup(),(s=this.engine)===null||s===void 0||s.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,i),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const i=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(l=>{l?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",l)):e.onreconnect()}))},i);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ho={};function Yc(r,e){typeof r=="object"&&(e=r,r=void 0),e=e||{};const i=nM(r,e.path||"/socket.io"),s=i.source,l=i.id,c=i.path,h=Ho[l]&&c in Ho[l].nsps,d=e.forceNew||e["force new connection"]||e.multiplex===!1||h;let m;return d?m=new ld(s,e):(Ho[l]||(Ho[l]=new ld(s,e)),m=Ho[l]),i.query&&!e.query&&(e.query=i.queryKey),m.socket(i.path,e)}Object.assign(Yc,{Manager:ld,Socket:bv,io:Yc,connect:Yc});const mM=window.location.hostname==="localhost",Tv=mM?"http://localhost:3000":"https://scribble-ioclone.onrender.com";console.log(`🔌 Socket connecting to: ${Tv}`);const nt=Yc(Tv);function gM({onJoin:r}){const[e,i]=ct.useState(""),[s,l]=ct.useState(""),[c,h]=ct.useState(!1),[d,m]=ct.useState(Math.random().toString()),p=()=>Math.random().toString(36).substring(2,8).toUpperCase(),_=b=>`https://api.dicebear.com/7.x/avataaars/svg?seed=${b}`,x=()=>{const b=["FunnyCat","SpeedyDog","HappyTree","CoolBean","SillyGoose","MegaMind","PixelArt","Sketchy"],M=b[Math.floor(Math.random()*b.length)],v=Math.random().toString();i(M),m(v)},y=()=>{m(Math.random().toString())},E=b=>{if(b.preventDefault(),!e)return alert("Please enter a name!");const M=p(),v=_(d);nt.emit("join_room",{username:e,roomId:M,avatar:v}),r(e)},T=b=>{if(b.preventDefault(),!e||!s)return alert("Please enter name and room ID!");const M=_(d);nt.emit("join_room",{username:e,roomId:s,avatar:M}),r(e)};return J.jsxs("div",{className:"lobby-container",children:[J.jsx("h1",{className:"game-title",children:"Drawble.io"}),J.jsxs("div",{className:"lobby-card",children:[J.jsxs("div",{className:"avatar-selection",children:[J.jsx("button",{className:"arrow-btn",onClick:y,children:"◀"}),J.jsx("div",{className:"avatar-preview",children:J.jsx("img",{src:_(d),alt:"avatar"})}),J.jsx("button",{className:"arrow-btn",onClick:y,children:"▶"})]}),J.jsx("button",{className:"randomize-btn",onClick:x,children:"🎲 Randomize"}),c?J.jsxs("form",{onSubmit:T,className:"lobby-form",children:[J.jsx("input",{type:"text",placeholder:"Enter your name",value:e,onChange:b=>i(b.target.value),className:"name-input"}),J.jsxs("div",{className:"room-code-container",children:[J.jsx("input",{type:"text",maxLength:6,value:s,onChange:b=>l(b.target.value.toUpperCase()),className:"room-code-hidden-input",autoFocus:!0}),J.jsx("div",{className:"room-code-display",children:[...Array(6)].map((b,M)=>J.jsx("div",{className:`code-digit ${s[M]?"filled":""}`,children:s[M]||"_"},M))})]}),J.jsxs("div",{className:"actions",children:[J.jsx("button",{type:"submit",className:"play-btn",children:"Play!"}),J.jsx("button",{type:"button",onClick:()=>h(!1),className:"back-btn",children:"Cancel"})]})]}):J.jsxs("div",{className:"menu-buttons",children:[J.jsx("input",{type:"text",placeholder:"Enter your name",value:e,onChange:b=>i(b.target.value),className:"name-input"}),J.jsxs("div",{className:"actions",children:[J.jsx("button",{onClick:E,className:"create-btn",children:"Create Private Room"}),J.jsx("button",{onClick:()=>h(!0),className:"join-btn",children:"Join Room"})]})]})]})]})}function _M({roomId:r,isDrawer:e,initialHistory:i}){const s=ct.useRef(null),[l,c]=ct.useState(!1),[h,d]=ct.useState("#000000");ct.useEffect(()=>{const T=s.current;T.width=800,T.height=600;const b=T.getContext("2d");b.lineCap="round",b.lineJoin="round",b.lineWidth=5,i&&i.length>0&&i.forEach(L=>{const U=b.strokeStyle,I=b.lineWidth;b.strokeStyle=L.color,b.lineWidth=L.size||5,b.beginPath(),b.moveTo(L.x0,L.y0),b.lineTo(L.x1,L.y1),b.stroke(),b.closePath(),b.strokeStyle=U,b.lineWidth=I});const M=({drawer:L})=>{const U=s.current;U.getContext("2d").clearRect(0,0,U.width,U.height),c(!1)},v=({x0:L,y0:U,x1:I,y1:z,color:B,size:K})=>{const C=s.current.getContext("2d"),D=C.strokeStyle,k=C.lineWidth;C.strokeStyle=B,C.lineWidth=K||5,C.beginPath(),C.moveTo(L,U),C.lineTo(I,z),C.stroke(),C.closePath(),C.strokeStyle=D,C.lineWidth=k},P=()=>{s.current.getContext("2d").clearRect(0,0,s.current.width,s.current.height)};return nt.on("round_start",M),nt.on("draw_line",v),nt.on("clear_canvas",P),()=>{nt.off("round_start",M),nt.off("draw_line",v),nt.off("clear_canvas",P)}},[i]);const m=T=>{if(!e)return;const{offsetX:b,offsetY:M}=T.nativeEvent;c(!0),s.current.lastX=b,s.current.lastY=M},p=T=>{if(!l)return;const{offsetX:b,offsetY:M}=T.nativeEvent,v=s.current.getContext("2d");v.strokeStyle=h,v.beginPath(),v.moveTo(s.current.lastX,s.current.lastY),v.lineTo(b,M),v.stroke(),v.closePath(),nt.emit("draw",{roomId:r,x0:s.current.lastX,y0:s.current.lastY,x1:b,y1:M,color:h,size:v.lineWidth}),s.current.lastX=b,s.current.lastY=M},_=()=>{c(!1)},x=T=>{if(!e)return;T.preventDefault();const b=T.touches[0],M=s.current,v=M.getBoundingClientRect(),P=M.width/v.width,L=M.height/v.height,U=(b.clientX-v.left)*P,I=(b.clientY-v.top)*L;c(!0),s.current.lastX=U,s.current.lastY=I},y=T=>{if(!l)return;T.preventDefault();const b=T.touches[0],M=s.current,v=M.getBoundingClientRect(),P=M.width/v.width,L=M.height/v.height,U=(b.clientX-v.left)*P,I=(b.clientY-v.top)*L,z=M.getContext("2d"),B=s.current.lastX,K=s.current.lastY;z.strokeStyle=h,z.beginPath(),z.moveTo(B,K),z.lineTo(U,I),z.stroke(),z.closePath(),nt.emit("draw",{roomId:r,x0:B,y0:K,x1:U,y1:I,color:h,size:z.lineWidth}),s.current.lastX=U,s.current.lastY=I},E=()=>{c(!1)};return J.jsxs("div",{className:"canvas-wrapper",children:[J.jsx("canvas",{ref:s,onMouseDown:m,onMouseMove:p,onMouseUp:_,onMouseLeave:_,onTouchStart:x,onTouchMove:y,onTouchEnd:E,className:"game-canvas"}),e&&J.jsxs("div",{className:"skribbl-toolbar",children:[J.jsx("div",{className:"current-color-preview",style:{backgroundColor:h}}),J.jsx("div",{className:"colors-container",children:["#FFFFFF","#C1C1C1","#EF130B","#FF7100","#FFE400","#00CC00","#00B2FF","#231FD3","#A300BA","#D37CAA","#A0522D","#000000","#4C4C4C","#740B07","#C23800","#E8A200","#005510","#00569E","#0E0865","#550069","#A75574","#63300D"].map(T=>J.jsx("div",{className:"skribbl-color",style:{backgroundColor:T},onClick:()=>d(T)},T))}),J.jsxs("div",{className:"tools-container",children:[J.jsx("div",{className:`tool-icon ${h!=="#FFFFFF"?"active":""}`,onClick:()=>d("#000000"),children:"✏️"}),J.jsx("div",{className:`tool-icon ${h==="#FFFFFF"?"active":""}`,onClick:()=>d("#FFFFFF"),children:"🧼"}),J.jsx("div",{className:"tool-icon",onClick:()=>{s.current.getContext("2d").clearRect(0,0,s.current.width,s.current.height),nt.emit("clear_canvas",{roomId:r})},children:"🗑️"})]}),J.jsx("div",{className:"sizes-container",children:[4,8,15,25].map(T=>J.jsx("div",{className:"size-option",onClick:()=>{const b=s.current.getContext("2d");b.lineWidth=T,s.current.currentLineWidth=T},children:J.jsx("div",{className:"size-circle",style:{width:T,height:T,background:"#000"}})},T))})]})]})}function vM({roomId:r,username:e}){const[i,s]=ct.useState([]),[l,c]=ct.useState(""),h=ct.useRef(null);ct.useEffect(()=>(nt.on("receive_message",m=>{s(p=>[...p,m])}),()=>{nt.off("receive_message")}),[]),ct.useEffect(()=>{h.current?.scrollIntoView({behavior:"smooth"})},[i]);const d=m=>{if(m.preventDefault(),!l.trim())return;const p={roomId:r,author:e,message:l,time:new Date().toLocaleTimeString()};nt.emit("send_message",p),c("")};return J.jsxs("div",{className:"chat-window",children:[J.jsx("div",{className:"chat-header",children:J.jsx("p",{children:"Live Chat"})}),J.jsxs("div",{className:"chat-body",children:[i.map((m,p)=>J.jsx("div",{className:`message ${m.author===e?"you":"other"} ${m.isSystem?"correct-guess":""} ${m.isClose?"close-guess":""}`,children:J.jsx("div",{className:"message-content",children:J.jsx("p",{children:m.message})})},p)),J.jsx("div",{ref:h})]}),J.jsx("div",{className:"chat-footer",children:J.jsxs("form",{onSubmit:d,children:[J.jsx("input",{type:"text",value:l,placeholder:"Type a guess...",onChange:m=>c(m.target.value)}),J.jsx("button",{type:"submit",className:"send-btn",children:"Go"})]})})]})}function xM({roomId:r,players:e,isHost:i,onStartGame:s}){const[l,c]=ct.useState("Copy"),[h,d]=ct.useState({maxRounds:3,drawTime:60,maxPlayers:8});ct.useEffect(()=>(nt.on("settings_update",_=>{d(_)}),()=>{nt.off("settings_update")}),[]);const m=(_,x)=>{if(!i)return;const y={...h,[_]:parseInt(x)};d(y),nt.emit("update_settings",{roomId:r,settings:y})},p=()=>{navigator.clipboard.writeText(r),c("Copied!"),setTimeout(()=>{c("Copy")},2e3)};return J.jsx("div",{className:"waiting-room-container",children:J.jsxs("div",{className:"waiting-card",children:[J.jsx("h2",{children:"Waiting Lobby"}),J.jsxs("div",{className:"room-info-section",children:[J.jsx("p",{children:"Room Code:"}),J.jsxs("div",{className:"code-display",children:[J.jsx("span",{children:r}),J.jsx("button",{onClick:p,className:"copy-btn",children:l})]})]}),J.jsxs("div",{className:"settings-section",children:[J.jsx("h3",{children:"Game Settings"}),J.jsxs("div",{className:"settings-grid",children:[J.jsxs("div",{className:"setting-item",children:[J.jsx("label",{children:"Rounds"}),J.jsxs("select",{value:h.maxRounds,onChange:_=>m("maxRounds",_.target.value),disabled:!i,children:[J.jsx("option",{value:"1",children:"1"}),J.jsx("option",{value:"2",children:"2"}),J.jsx("option",{value:"3",children:"3"}),J.jsx("option",{value:"4",children:"4"}),J.jsx("option",{value:"5",children:"5"}),J.jsx("option",{value:"6",children:"6"}),J.jsx("option",{value:"7",children:"7"}),J.jsx("option",{value:"8",children:"8"}),J.jsx("option",{value:"9",children:"9"}),J.jsx("option",{value:"10",children:"10"})]})]}),J.jsxs("div",{className:"setting-item",children:[J.jsx("label",{children:"Draw & Guess Time (s)"}),J.jsxs("select",{value:h.drawTime,onChange:_=>m("drawTime",_.target.value),disabled:!i,children:[J.jsx("option",{value:"30",children:"30"}),J.jsx("option",{value:"45",children:"45"}),J.jsx("option",{value:"60",children:"60"}),J.jsx("option",{value:"80",children:"80"}),J.jsx("option",{value:"100",children:"100"}),J.jsx("option",{value:"120",children:"120"}),J.jsx("option",{value:"150",children:"150"}),J.jsx("option",{value:"180",children:"180"})]})]}),J.jsxs("div",{className:"setting-item",children:[J.jsx("label",{children:"Max Players"}),J.jsxs("select",{value:h.maxPlayers,onChange:_=>m("maxPlayers",_.target.value),disabled:!i,children:[J.jsx("option",{value:"2",children:"2"}),J.jsx("option",{value:"4",children:"4"}),J.jsx("option",{value:"6",children:"6"}),J.jsx("option",{value:"8",children:"8"}),J.jsx("option",{value:"12",children:"12"})]})]})]}),!i&&J.jsx("div",{className:"host-control-msg",children:"Only the host can change settings"})]}),J.jsxs("div",{className:"players-section",children:[J.jsxs("h3",{children:["Players Joined (",e.length,"/",h.maxPlayers,")"]}),J.jsx("div",{className:"players-list",children:e.map(_=>J.jsxs("div",{className:"player-item",children:[J.jsx("img",{src:_.avatar,alt:_.username,className:"player-avatar-small"}),J.jsxs("span",{children:[_.username," ",_.id===nt.id?"(You)":""," ",_===e[0]?"👑":""]})]},_.id))})]}),J.jsx("div",{className:"action-section",children:i?J.jsx("button",{className:"start-game-btn",onClick:s,children:"Start Game"}):J.jsx("p",{className:"waiting-msg",children:"Waiting for host to start the game..."})})]})})}const up="182",SM=0,d0=1,yM=2,jc=1,MM=2,Ko=3,os=0,Yn=1,ya=2,Ma=0,Pr=1,cd=2,p0=3,m0=4,EM=5,Ls=100,bM=101,TM=102,AM=103,RM=104,CM=200,wM=201,DM=202,UM=203,ud=204,fd=205,NM=206,LM=207,OM=208,PM=209,BM=210,FM=211,IM=212,zM=213,HM=214,hd=0,dd=1,pd=2,Fr=3,md=4,gd=5,_d=6,vd=7,Av=0,GM=1,VM=2,Yi=0,Rv=1,Cv=2,wv=3,Dv=4,Uv=5,Nv=6,Lv=7,Ov=300,Is=301,Ir=302,xd=303,Sd=304,lu=306,yd=1e3,ai=1001,Md=1002,Nn=1003,kM=1004,yc=1005,mn=1006,Th=1007,Ps=1008,vi=1009,Pv=1010,Bv=1011,$o=1012,fp=1013,Zi=1014,Li=1015,Ki=1016,hp=1017,dp=1018,el=1020,Fv=35902,Iv=35899,zv=1021,Hv=1022,xi=1023,ba=1026,Bs=1027,Gv=1028,pp=1029,zr=1030,mp=1031,gp=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,Ed=35840,bd=35841,Td=35842,Ad=35843,Rd=36196,Cd=37492,wd=37496,Dd=37488,Ud=37489,Nd=37490,Ld=37491,Od=37808,Pd=37809,Bd=37810,Fd=37811,Id=37812,zd=37813,Hd=37814,Gd=37815,Vd=37816,kd=37817,Xd=37818,Wd=37819,qd=37820,Yd=37821,jd=36492,Zd=36494,Kd=36495,Qd=36283,Jd=36284,$d=36285,ep=36286,XM=3200,WM=0,qM=1,as="",gi="srgb",Hr="srgb-linear",eu="linear",Vt="srgb",yr=7680,g0=519,YM=512,jM=513,ZM=514,_p=515,KM=516,QM=517,vp=518,JM=519,_0=35044,v0="300 es",Wi=2e3,tu=2001;function Vv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $M(){const r=nu("canvas");return r.style.display="block",r}const x0={};function S0(...r){const e="THREE."+r.shift();console.log(e,...r)}function at(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Nt(...r){const e="THREE."+r.shift();console.error(e,...r)}function tl(...r){const e=r.join(" ");e in x0||(x0[e]=!0,at(...r))}function eE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=Math.PI/180,tp=180/Math.PI;function il(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Tt(r,e,i){return Math.max(e,Math.min(i,r))}function tE(r,e){return(r%e+e)%e}function Rh(r,e,i){return(1-i)*r+i*e}function Go(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,i=0){lt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class al{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],y=c[h+0],E=c[h+1],T=c[h+2],b=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x;return}if(d>=1){e[i+0]=y,e[i+1]=E,e[i+2]=T,e[i+3]=b;return}if(x!==b||m!==y||p!==E||_!==T){let M=m*y+p*E+_*T+x*b;M<0&&(y=-y,E=-E,T=-T,b=-b,M=-M);let v=1-d;if(M<.9995){const P=Math.acos(M),L=Math.sin(P);v=Math.sin(v*P)/L,d=Math.sin(d*P)/L,m=m*v+y*d,p=p*v+E*d,_=_*v+T*d,x=x*v+b*d}else{m=m*v+y*d,p=p*v+E*d,_=_*v+T*d,x=x*v+b*d;const P=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=P,p*=P,_*=P,x*=P}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[h],y=c[h+1],E=c[h+2],T=c[h+3];return e[i]=d*T+_*x+m*E-p*y,e[i+1]=m*T+_*y+p*x-d*E,e[i+2]=p*T+_*E+d*y-m*x,e[i+3]=_*T-d*x-m*y-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),y=m(s/2),E=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=y*_*x+p*E*T,this._y=p*E*x-y*_*T,this._z=p*_*T+y*E*x,this._w=p*_*x-y*E*T;break;case"YXZ":this._x=y*_*x+p*E*T,this._y=p*E*x-y*_*T,this._z=p*_*T-y*E*x,this._w=p*_*x+y*E*T;break;case"ZXY":this._x=y*_*x-p*E*T,this._y=p*E*x+y*_*T,this._z=p*_*T+y*E*x,this._w=p*_*x-y*E*T;break;case"ZYX":this._x=y*_*x-p*E*T,this._y=p*E*x+y*_*T,this._z=p*_*T-y*E*x,this._w=p*_*x+y*E*T;break;case"YZX":this._x=y*_*x+p*E*T,this._y=p*E*x+y*_*T,this._z=p*_*T-y*E*x,this._w=p*_*x-y*E*T;break;case"XZY":this._x=y*_*x-p*E*T,this._y=p*E*x-y*_*T,this._z=p*_*T+y*E*x,this._w=p*_*x+y*E*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],y=s+d+x;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(_-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>x){const E=2*Math.sqrt(1+s-d-x);this._w=(_-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>x){const E=2*Math.sqrt(1+d-s-x);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+_)/E}else{const E=2*Math.sqrt(1+x-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,s=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(y0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(y0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new le,y0=new al;class dt{constructor(e,i,s,l,c,h,d,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],y=s[2],E=s[5],T=s[8],b=l[0],M=l[3],v=l[6],P=l[1],L=l[4],U=l[7],I=l[2],z=l[5],B=l[8];return c[0]=h*b+d*P+m*I,c[3]=h*M+d*L+m*z,c[6]=h*v+d*U+m*B,c[1]=p*b+_*P+x*I,c[4]=p*M+_*L+x*z,c[7]=p*v+_*U+x*B,c[2]=y*b+E*P+T*I,c[5]=y*M+E*L+T*z,c[8]=y*v+E*U+T*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],x=_*h-d*p,y=d*m-_*c,E=p*c-h*m,T=i*x+s*y+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=x*b,e[1]=(l*p-_*s)*b,e[2]=(d*s-l*h)*b,e[3]=y*b,e[4]=(_*i-l*m)*b,e[5]=(l*c-d*i)*b,e[6]=E*b,e[7]=(s*m-p*i)*b,e[8]=(h*i-s*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(wh.makeScale(e,i)),this}rotate(e){return this.premultiply(wh.makeRotation(-e)),this}translate(e,i){return this.premultiply(wh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new dt,M0=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E0=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nE(){const r={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Vt&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Vt&&(l.r=Br(l.r),l.g=Br(l.g),l.b=Br(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Hr]:{primaries:e,whitePoint:s,transfer:eu,toXYZ:M0,fromXYZ:E0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:s,transfer:Vt,toXYZ:M0,fromXYZ:E0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const wt=nE();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Mr;class iE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Mr===void 0&&(Mr=nu("canvas")),Mr.width=e.width,Mr.height=e.height;const l=Mr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Mr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ea(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aE=0;class xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Dh(l[h].image)):c.push(Dh(l[h]))}else c=Dh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Dh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?iE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let sE=0;const Uh=new le;class zn extends kr{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=ai,l=ai,c=mn,h=Ps,d=xi,m=vi,p=zn.DEFAULT_ANISOTROPY,_=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=il(),this.name="",this.source=new xp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Ov;zn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],x=m[8],y=m[1],E=m[5],T=m[9],b=m[2],M=m[6],v=m[10];if(Math.abs(_-y)<.01&&Math.abs(x-b)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+b)<.1&&Math.abs(T+M)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(E+1)/2,I=(v+1)/2,z=(_+y)/4,B=(x+b)/4,K=(T+M)/4;return L>U&&L>I?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=z/s,c=B/s):U>I?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=z/l,c=K/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=B/c,l=K/c),this.set(s,l,c,i),this}let P=Math.sqrt((M-T)*(M-T)+(x-b)*(x-b)+(y-_)*(y-_));return Math.abs(P)<.001&&(P=1),this.x=(M-T)/P,this.y=(x-b)/P,this.z=(y-_)/P,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rE extends kr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new zn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new xp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends rE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class kv extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oE extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ri):Ri.fromBufferAttribute(c,h),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mc.copy(s.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Ec.subVectors(this.max,Vo),Er.subVectors(e.a,Vo),br.subVectors(e.b,Vo),Tr.subVectors(e.c,Vo),Ja.subVectors(br,Er),$a.subVectors(Tr,br),As.subVectors(Er,Tr);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-As.z,As.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,As.z,0,-As.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-As.y,As.x,0];return!Nh(i,Er,br,Tr,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Nh(i,Er,br,Tr,Ec))?!1:(bc.crossVectors(Ja,$a),i=[bc.x,bc.y,bc.z],Nh(i,Er,br,Tr,Ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new le,new le,new le,new le,new le,new le,new le,new le],Ri=new le,Mc=new sl,Er=new le,br=new le,Tr=new le,Ja=new le,$a=new le,As=new le,Vo=new le,Ec=new le,bc=new le,Rs=new le;function Nh(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Rs.fromArray(r,c);const d=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),m=e.dot(Rs),p=i.dot(Rs),_=s.dot(Rs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const lE=new sl,ko=new le,Lh=new le;class cu{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):lE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ko,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Lh)),this.expandByPoint(ko.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _a=new le,Oh=new le,Tc=new le,es=new le,Ph=new le,Ac=new le,Bh=new le;class Xv{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Oh.copy(e).add(i).multiplyScalar(.5),Tc.copy(i).sub(e).normalize(),es.copy(this.origin).sub(Oh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=es.dot(this.direction),m=-es.dot(Tc),p=es.lengthSq(),_=Math.abs(1-h*h);let x,y,E,T;if(_>0)if(x=h*m-d,y=h*d-m,T=c*_,x>=0)if(y>=-T)if(y<=T){const b=1/_;x*=b,y*=b,E=x*(x+h*y+2*d)+y*(h*x+y+2*m)+p}else y=c,x=Math.max(0,-(h*y+d)),E=-x*x+y*(y+2*m)+p;else y=-c,x=Math.max(0,-(h*y+d)),E=-x*x+y*(y+2*m)+p;else y<=-T?(x=Math.max(0,-(-h*c+d)),y=x>0?-c:Math.min(Math.max(-c,-m),c),E=-x*x+y*(y+2*m)+p):y<=T?(x=0,y=Math.min(Math.max(-c,-m),c),E=y*(y+2*m)+p):(x=Math.max(0,-(h*c+d)),y=x>0?c:Math.min(Math.max(-c,-m),c),E=-x*x+y*(y+2*m)+p);else y=h>0?-c:c,x=Math.max(0,-(h*y+d)),E=-x*x+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Oh).addScaledVector(Tc,y),E}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const s=_a.dot(this.direction),l=_a.dot(_a)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(c=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-y.z)*x,m=(e.max.z-y.z)*x):(d=(e.max.z-y.z)*x,m=(e.min.z-y.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,s,l,c){Ph.subVectors(i,e),Ac.subVectors(s,e),Bh.crossVectors(Ph,Ac);let h=this.direction.dot(Bh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;es.subVectors(this.origin,e);const m=d*this.direction.dot(Ac.crossVectors(es,Ac));if(m<0)return null;const p=d*this.direction.dot(Ph.cross(es));if(p<0||m+p>h)return null;const _=-d*es.dot(Bh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,s,l,c,h,d,m,p,_,x,y,E,T,b,M){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,_,x,y,E,T,b,M)}set(e,i,s,l,c,h,d,m,p,_,x,y,E,T,b,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=x,v[14]=y,v[3]=E,v[7]=T,v[11]=b,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ar.setFromMatrixColumn(e,0).length(),c=1/Ar.setFromMatrixColumn(e,1).length(),h=1/Ar.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const y=h*_,E=h*x,T=d*_,b=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=E+T*p,i[5]=y-b*p,i[9]=-d*m,i[2]=b-y*p,i[6]=T+E*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*_,E=m*x,T=p*_,b=p*x;i[0]=y+b*d,i[4]=T*d-E,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=E*d-T,i[6]=b+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*_,E=m*x,T=p*_,b=p*x;i[0]=y-b*d,i[4]=-h*x,i[8]=T+E*d,i[1]=E+T*d,i[5]=h*_,i[9]=b-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*_,E=h*x,T=d*_,b=d*x;i[0]=m*_,i[4]=T*p-E,i[8]=y*p+b,i[1]=m*x,i[5]=b*p+y,i[9]=E*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,E=h*p,T=d*m,b=d*p;i[0]=m*_,i[4]=b-y*x,i[8]=T*x+E,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=E*x+T,i[10]=y-b*x}else if(e.order==="XZY"){const y=h*m,E=h*p,T=d*m,b=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=y*x+b,i[5]=h*_,i[9]=E*x-T,i[2]=T*x-E,i[6]=d*_,i[10]=b*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cE,e,uE)}lookAt(e,i,s){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ts.crossVectors(s,ni),ts.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ts.crossVectors(s,ni)),ts.normalize(),Rc.crossVectors(ni,ts),l[0]=ts.x,l[4]=Rc.x,l[8]=ni.x,l[1]=ts.y,l[5]=Rc.y,l[9]=ni.y,l[2]=ts.z,l[6]=Rc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],y=s[9],E=s[13],T=s[2],b=s[6],M=s[10],v=s[14],P=s[3],L=s[7],U=s[11],I=s[15],z=l[0],B=l[4],K=l[8],C=l[12],D=l[1],k=l[5],oe=l[9],j=l[13],ue=l[2],de=l[6],O=l[10],G=l[14],te=l[3],ye=l[7],Se=l[11],N=l[15];return c[0]=h*z+d*D+m*ue+p*te,c[4]=h*B+d*k+m*de+p*ye,c[8]=h*K+d*oe+m*O+p*Se,c[12]=h*C+d*j+m*G+p*N,c[1]=_*z+x*D+y*ue+E*te,c[5]=_*B+x*k+y*de+E*ye,c[9]=_*K+x*oe+y*O+E*Se,c[13]=_*C+x*j+y*G+E*N,c[2]=T*z+b*D+M*ue+v*te,c[6]=T*B+b*k+M*de+v*ye,c[10]=T*K+b*oe+M*O+v*Se,c[14]=T*C+b*j+M*G+v*N,c[3]=P*z+L*D+U*ue+I*te,c[7]=P*B+L*k+U*de+I*ye,c[11]=P*K+L*oe+U*O+I*Se,c[15]=P*C+L*j+U*G+I*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],x=e[6],y=e[10],E=e[14],T=e[3],b=e[7],M=e[11],v=e[15],P=m*E-p*y,L=d*E-p*x,U=d*y-m*x,I=h*E-p*_,z=h*y-m*_,B=h*x-d*_;return i*(b*P-M*L+v*U)-s*(T*P-M*I+v*z)+l*(T*L-b*I+v*B)-c*(T*U-b*z+M*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],x=e[9],y=e[10],E=e[11],T=e[12],b=e[13],M=e[14],v=e[15],P=x*M*p-b*y*p+b*m*E-d*M*E-x*m*v+d*y*v,L=T*y*p-_*M*p-T*m*E+h*M*E+_*m*v-h*y*v,U=_*b*p-T*x*p+T*d*E-h*b*E-_*d*v+h*x*v,I=T*x*m-_*b*m-T*d*y+h*b*y+_*d*M-h*x*M,z=i*P+s*L+l*U+c*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return e[0]=P*B,e[1]=(b*y*c-x*M*c-b*l*E+s*M*E+x*l*v-s*y*v)*B,e[2]=(d*M*c-b*m*c+b*l*p-s*M*p-d*l*v+s*m*v)*B,e[3]=(x*m*c-d*y*c-x*l*p+s*y*p+d*l*E-s*m*E)*B,e[4]=L*B,e[5]=(_*M*c-T*y*c+T*l*E-i*M*E-_*l*v+i*y*v)*B,e[6]=(T*m*c-h*M*c-T*l*p+i*M*p+h*l*v-i*m*v)*B,e[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*E+i*m*E)*B,e[8]=U*B,e[9]=(T*x*c-_*b*c-T*s*E+i*b*E+_*s*v-i*x*v)*B,e[10]=(h*b*c-T*d*c+T*s*p-i*b*p-h*s*v+i*d*v)*B,e[11]=(_*d*c-h*x*c-_*s*p+i*x*p+h*s*E-i*d*E)*B,e[12]=I*B,e[13]=(_*b*l-T*x*l+T*s*y-i*b*y-_*s*M+i*x*M)*B,e[14]=(T*d*l-h*b*l-T*s*m+i*b*m+h*s*M-i*d*M)*B,e[15]=(h*x*l-_*d*l+_*s*m-i*x*m-h*s*y+i*d*y)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,x=d+d,y=c*p,E=c*_,T=c*x,b=h*_,M=h*x,v=d*x,P=m*p,L=m*_,U=m*x,I=s.x,z=s.y,B=s.z;return l[0]=(1-(b+v))*I,l[1]=(E+U)*I,l[2]=(T-L)*I,l[3]=0,l[4]=(E-U)*z,l[5]=(1-(y+v))*z,l[6]=(M+P)*z,l[7]=0,l[8]=(T+L)*B,l[9]=(M-P)*B,l[10]=(1-(y+b))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Ar.set(l[0],l[1],l[2]).length();const h=Ar.set(l[4],l[5],l[6]).length(),d=Ar.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ci.copy(this);const p=1/c,_=1/h,x=1/d;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=_,Ci.elements[5]*=_,Ci.elements[6]*=_,Ci.elements[8]*=x,Ci.elements[9]*=x,Ci.elements[10]*=x,i.setFromRotationMatrix(Ci),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Wi,m=!1){const p=this.elements,_=2*c/(i-e),x=2*c/(s-l),y=(i+e)/(i-e),E=(s+l)/(s-l);let T,b;if(m)T=c/(h-c),b=h*c/(h-c);else if(d===Wi)T=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===tu)T=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Wi,m=!1){const p=this.elements,_=2/(i-e),x=2/(s-l),y=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,b;if(m)T=1/(h-c),b=h/(h-c);else if(d===Wi)T=-2/(h-c),b=-(h+c)/(h-c);else if(d===tu)T=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ar=new le,Ci=new on,cE=new le(0,0,0),uE=new le(1,1,1),ts=new le,Rc=new le,ni=new le,b0=new on,T0=new al;class Ta{constructor(e=0,i=0,s=0,l=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],y=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,E),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return b0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(b0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return T0.setFromEuler(this),this.setFromQuaternion(T0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class Wv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fE=0;const A0=new le,Rr=new al,va=new on,Cc=new le,Xo=new le,hE=new le,dE=new al,R0=new le(1,0,0),C0=new le(0,1,0),w0=new le(0,0,1),D0={type:"added"},pE={type:"removed"},Cr={type:"childadded",child:null},Fh={type:"childremoved",child:null};class jn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new le,i=new Ta,s=new al,l=new le(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new dt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Rr.setFromAxisAngle(e,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,i){return Rr.setFromAxisAngle(e,i),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(R0,e)}rotateY(e){return this.rotateOnAxis(C0,e)}rotateZ(e){return this.rotateOnAxis(w0,e)}translateOnAxis(e,i){return A0.copy(e).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(R0,e)}translateY(e){return this.translateOnAxis(C0,e)}translateZ(e){return this.translateOnAxis(w0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Cc.copy(e):Cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Xo,Cc,this.up):va.lookAt(Cc,Xo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(va),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(D0),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(pE),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),va.multiply(e.parent.matrixWorld)),e.applyMatrix4(va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(D0),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,hE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,dE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),x=h(e.shapes),y=h(e.skeletons),E=h(e.animations),T=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}jn.DEFAULT_UP=new le(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new le,xa=new le,Ih=new le,Sa=new le,wr=new le,Dr=new le,U0=new le,zh=new le,Hh=new le,Gh=new le,Vh=new an,kh=new an,Xh=new an;class Ni{constructor(e=new le,i=new le,s=new le){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){wi.subVectors(l,i),xa.subVectors(s,i),Ih.subVectors(e,i);const h=wi.dot(wi),d=wi.dot(xa),m=wi.dot(Ih),p=xa.dot(xa),_=xa.dot(Ih),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const y=1/x,E=(p*m-d*_)*y,T=(h*_-d*m)*y;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(h,Sa.y),m.addScaledVector(d,Sa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return Vh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(e,i),kh.fromBufferAttribute(e,s),Xh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Vh,c.x),h.addScaledVector(kh,c.y),h.addScaledVector(Xh,c.z),h}static isFrontFacing(e,i,s,l){return wi.subVectors(s,i),xa.subVectors(e,i),wi.cross(xa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),wi.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ni.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;wr.subVectors(l,s),Dr.subVectors(c,s),zh.subVectors(e,s);const m=wr.dot(zh),p=Dr.dot(zh);if(m<=0&&p<=0)return i.copy(s);Hh.subVectors(e,l);const _=wr.dot(Hh),x=Dr.dot(Hh);if(_>=0&&x<=_)return i.copy(l);const y=m*x-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(wr,h);Gh.subVectors(e,c);const E=wr.dot(Gh),T=Dr.dot(Gh);if(T>=0&&E<=T)return i.copy(c);const b=E*p-m*T;if(b<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(Dr,d);const M=_*T-E*x;if(M<=0&&x-_>=0&&E-T>=0)return U0.subVectors(c,l),d=(x-_)/(x-_+(E-T)),i.copy(l).addScaledVector(U0,d);const v=1/(M+b+y);return h=b*v,d=y*v,i.copy(s).addScaledVector(wr,h).addScaledVector(Dr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Wh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Bt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=tE(e,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Wh(h,c,e+1/3),this.g=Wh(h,c,e),this.b=Wh(h,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const s=qv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return wt.workingToColorSpace(Bn.copy(this),e),Math.round(Tt(Bn.r*255,0,255))*65536+Math.round(Tt(Bn.g*255,0,255))*256+Math.round(Tt(Bn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,l=Bn.g,c=Bn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=gi){wt.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,s=Bn.g,l=Bn.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+i,ns.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ns),e.getHSL(wc);const s=Rh(ns.h,wc.h,i),l=Rh(ns.s,wc.s,i),c=Rh(ns.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Bt;Bt.NAMES=qv;let mE=0;class rl extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Pr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ud&&(s.blendSrc=this.blendSrc),this.blendDst!==fd&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yv extends rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=Av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new le,Dc=new lt;let gE=0;class Pi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=_0,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(e),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Go(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_0&&(e.usage=this.usage),e}}class jv extends Pi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Zv extends Pi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Bi extends Pi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let _E=0;const mi=new on,qh=new jn,Ur=new le,ii=new sl,Wo=new sl,yn=new le;class Fi extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vv(e)?Zv:jv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,s){return mi.makeTranslation(e,i,s),this.applyMatrix4(mi),this}scale(e,i,s){return mi.makeScale(e,i,s),this.applyMatrix4(mi),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Bi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ii.min,Wo.min),ii.expandByPoint(yn),yn.addVectors(ii.max,Wo.max),ii.expandByPoint(yn)):(ii.expandByPoint(Wo.min),ii.expandByPoint(Wo.max))}ii.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)yn.fromBufferAttribute(d,p),m&&(Ur.fromBufferAttribute(e,p),yn.add(Ur)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<s.count;K++)d[K]=new le,m[K]=new le;const p=new le,_=new le,x=new le,y=new lt,E=new lt,T=new lt,b=new le,M=new le;function v(K,C,D){p.fromBufferAttribute(s,K),_.fromBufferAttribute(s,C),x.fromBufferAttribute(s,D),y.fromBufferAttribute(c,K),E.fromBufferAttribute(c,C),T.fromBufferAttribute(c,D),_.sub(p),x.sub(p),E.sub(y),T.sub(y);const k=1/(E.x*T.y-T.x*E.y);isFinite(k)&&(b.copy(_).multiplyScalar(T.y).addScaledVector(x,-E.y).multiplyScalar(k),M.copy(x).multiplyScalar(E.x).addScaledVector(_,-T.x).multiplyScalar(k),d[K].add(b),d[C].add(b),d[D].add(b),m[K].add(M),m[C].add(M),m[D].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let K=0,C=P.length;K<C;++K){const D=P[K],k=D.start,oe=D.count;for(let j=k,ue=k+oe;j<ue;j+=3)v(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const L=new le,U=new le,I=new le,z=new le;function B(K){I.fromBufferAttribute(l,K),z.copy(I);const C=d[K];L.copy(C),L.sub(I.multiplyScalar(I.dot(C))).normalize(),U.crossVectors(z,C);const k=U.dot(m[K])<0?-1:1;h.setXYZW(K,L.x,L.y,L.z,k)}for(let K=0,C=P.length;K<C;++K){const D=P[K],k=D.start,oe=D.count;for(let j=k,ue=k+oe;j<ue;j+=3)B(e.getX(j+0)),B(e.getX(j+1)),B(e.getX(j+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,E=s.count;y<E;y++)s.setXYZ(y,0,0,0);const l=new le,c=new le,h=new le,d=new le,m=new le,p=new le,_=new le,x=new le;if(e)for(let y=0,E=e.count;y<E;y+=3){const T=e.getX(y+0),b=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,E=i.count;y<E;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,x=d.normalized,y=new p.constructor(m.length*_);let E=0,T=0;for(let b=0,M=m.length;b<M;b++){d.isInterleavedBufferAttribute?E=m[b]*d.data.stride+d.offset:E=m[b]*_;for(let v=0;v<_;v++)y[T++]=p[E++]}return new Pi(y,_,x)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const y=p[_],E=e(y,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,y=p.length;x<y;x++){const E=p[x];_.push(E.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],x=c[p];for(let y=0,E=x.length;y<E;y++)_.push(x[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N0=new on,Cs=new Xv,Uc=new cu,L0=new le,Nc=new le,Lc=new le,Oc=new le,Yh=new le,Pc=new le,O0=new le,Bc=new le;class Si extends jn{constructor(e=new Fi,i=new Yv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Yh.fromBufferAttribute(x,e),h?Pc.addScaledVector(Yh,_):Pc.addScaledVector(Yh.sub(i),_))}i.add(Pc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),Cs.copy(e.ray).recast(e.near),!(Uc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Uc,L0)===null||Cs.origin.distanceToSquared(L0)>(e.far-e.near)**2))&&(N0.copy(c).invert(),Cs.copy(e.ray).applyMatrix4(N0),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Cs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,y=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,b=y.length;T<b;T++){const M=y[T],v=h[M.materialIndex],P=Math.max(M.start,E.start),L=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let U=P,I=L;U<I;U+=3){const z=d.getX(U),B=d.getX(U+1),K=d.getX(U+2);l=Fc(this,v,e,s,p,_,x,z,B,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),b=Math.min(d.count,E.start+E.count);for(let M=T,v=b;M<v;M+=3){const P=d.getX(M),L=d.getX(M+1),U=d.getX(M+2);l=Fc(this,h,e,s,p,_,x,P,L,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,b=y.length;T<b;T++){const M=y[T],v=h[M.materialIndex],P=Math.max(M.start,E.start),L=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let U=P,I=L;U<I;U+=3){const z=U,B=U+1,K=U+2;l=Fc(this,v,e,s,p,_,x,z,B,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),b=Math.min(m.count,E.start+E.count);for(let M=T,v=b;M<v;M+=3){const P=M,L=M+1,U=M+2;l=Fc(this,h,e,s,p,_,x,P,L,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function vE(r,e,i,s,l,c,h,d){let m;if(e.side===Yn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===os,d),m===null)return null;Bc.copy(d),Bc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:r}}function Fc(r,e,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Nc),r.getVertexPosition(m,Lc),r.getVertexPosition(p,Oc);const _=vE(r,e,i,s,Nc,Lc,Oc,O0);if(_){const x=new le;Ni.getBarycoord(O0,Nc,Lc,Oc,x),l&&(_.uv=Ni.getInterpolatedAttribute(l,d,m,p,x,new lt)),c&&(_.uv1=Ni.getInterpolatedAttribute(c,d,m,p,x,new lt)),h&&(_.normal=Ni.getInterpolatedAttribute(h,d,m,p,x,new le),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new le,materialIndex:0};Ni.getNormal(Nc,Lc,Oc,y.normal),_.face=y,_.barycoord=x}return _}class ol extends Fi{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],x=[];let y=0,E=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Bi(p,3)),this.setAttribute("normal",new Bi(_,3)),this.setAttribute("uv",new Bi(x,2));function T(b,M,v,P,L,U,I,z,B,K,C){const D=U/B,k=I/K,oe=U/2,j=I/2,ue=z/2,de=B+1,O=K+1;let G=0,te=0;const ye=new le;for(let Se=0;Se<O;Se++){const N=Se*k-j;for(let ae=0;ae<de;ae++){const _e=ae*D-oe;ye[b]=_e*P,ye[M]=N*L,ye[v]=ue,p.push(ye.x,ye.y,ye.z),ye[b]=0,ye[M]=0,ye[v]=z>0?1:-1,_.push(ye.x,ye.y,ye.z),x.push(ae/B),x.push(1-Se/K),G+=1}}for(let Se=0;Se<K;Se++)for(let N=0;N<B;N++){const ae=y+N+de*Se,_e=y+N+de*(Se+1),Ae=y+(N+1)+de*(Se+1),ze=y+(N+1)+de*Se;m.push(ae,_e,ze),m.push(_e,Ae,ze),te+=6}d.addGroup(E,te,C),E+=te,y+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function In(r){const e={};for(let i=0;i<r.length;i++){const s=Gr(r[i]);for(const l in s)e[l]=s[l]}return e}function xE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Kv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const SE={clone:Gr,merge:In};var yE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ME=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yE,this.fragmentShader=ME,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=xE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class iu extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new le,P0=new lt,B0=new lt;class Ui extends iu{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ah*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(Ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,i){return this.getViewBounds(e,P0,B0),i.subVectors(B0,P0)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ah*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Nr=-90,Lr=1;class EE extends jn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(Nr,Lr,e,i);l.layers=this.layers,this.add(l);const c=new Ui(Nr,Lr,e,i);c.layers=this.layers,this.add(c);const h=new Ui(Nr,Lr,e,i);h.layers=this.layers,this.add(h);const d=new Ui(Nr,Lr,e,i);d.layers=this.layers,this.add(d);const m=new Ui(Nr,Lr,e,i);m.layers=this.layers,this.add(m);const p=new Ui(Nr,Lr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(x,y,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Qv extends zn{constructor(e=[],i=Is,s,l,c,h,d,m,p,_){super(e,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jv extends Oi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Qv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ol(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Gr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:Ma});c.uniforms.tEquirect.value=i;const h=new Si(l,c),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=mn),new EE(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Ic extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bE={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const b of e.hand.values()){const M=i.getJointPose(b,s),v=this._getHandJoint(p,b);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=_.position.distanceTo(x.position),E=.02,T=.005;p.inputState.pinching&&y>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(bE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ic;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class F0 extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class $v extends zn{constructor(e=null,i=1,s=1,l,c,h,d,m,p=Nn,_=Nn,x,y){super(null,h,d,m,p,_,l,c,x,y),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new le,TE=new le,AE=new dt;class Ns{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Zh.subVectors(s,i).cross(TE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Zh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||AE.getNormalMatrix(e),l=this.coplanarPoint(Zh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new cu,RE=new lt(.5,.5),zc=new le;class ex{constructor(e=new Ns,i=new Ns,s=new Ns,l=new Ns,c=new Ns,h=new Ns){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Wi,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],x=c[5],y=c[6],E=c[7],T=c[8],b=c[9],M=c[10],v=c[11],P=c[12],L=c[13],U=c[14],I=c[15];if(l[0].setComponents(p-h,E-_,v-T,I-P).normalize(),l[1].setComponents(p+h,E+_,v+T,I+P).normalize(),l[2].setComponents(p+d,E+x,v+b,I+L).normalize(),l[3].setComponents(p-d,E-x,v-b,I-L).normalize(),s)l[4].setComponents(m,y,M,U).normalize(),l[5].setComponents(p-m,E-y,v-M,I-U).normalize();else if(l[4].setComponents(p-m,E-y,v-M,I-U).normalize(),i===Wi)l[5].setComponents(p+m,E+y,v+M,I+U).normalize();else if(i===tu)l[5].setComponents(m,y,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const i=RE.distanceTo(e.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zc.x=l.normal.x>0?e.max.x:e.min.x,zc.y=l.normal.y>0?e.max.y:e.min.y,zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class CE extends rl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const au=new le,su=new le,I0=new on,qo=new Xv,Hc=new cu,Kh=new le,z0=new le;class wE extends jn{constructor(e=new Fi,i=new CE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)au.fromBufferAttribute(i,l-1),su.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=au.distanceTo(su);e.setAttribute("lineDistance",new Bi(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,e.ray.intersectsSphere(Hc)===!1)return;I0.copy(l).invert(),qo.copy(e.ray).applyMatrix4(I0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,y=s.attributes.position;if(_!==null){const E=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let b=E,M=T-1;b<M;b+=p){const v=_.getX(b),P=_.getX(b+1),L=Gc(this,e,qo,m,v,P,b);L&&i.push(L)}if(this.isLineLoop){const b=_.getX(T-1),M=_.getX(E),v=Gc(this,e,qo,m,b,M,T-1);v&&i.push(v)}}else{const E=Math.max(0,h.start),T=Math.min(y.count,h.start+h.count);for(let b=E,M=T-1;b<M;b+=p){const v=Gc(this,e,qo,m,b,b+1,b);v&&i.push(v)}if(this.isLineLoop){const b=Gc(this,e,qo,m,T-1,E,T-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Gc(r,e,i,s,l,c,h){const d=r.geometry.attributes.position;if(au.fromBufferAttribute(d,l),su.fromBufferAttribute(d,c),i.distanceSqToSegment(au,su,Kh,z0)>s)return;Kh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Kh);if(!(p<e.near||p>e.far))return{distance:p,point:z0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const H0=new le,G0=new le;class DE extends wE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)H0.fromBufferAttribute(i,l),G0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+H0.distanceTo(G0);e.setAttribute("lineDistance",new Bi(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nl extends zn{constructor(e,i,s=Zi,l,c,h,d=Nn,m=Nn,p,_=ba,x=1){if(_!==ba&&_!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:x};super(y,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class UE extends nl{constructor(e,i=Zi,s=Is,l,c,h=Nn,d=Nn,m,p=ba){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tx extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fs extends Fi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=e/d,y=i/m,E=[],T=[],b=[],M=[];for(let v=0;v<_;v++){const P=v*y-h;for(let L=0;L<p;L++){const U=L*x-c;T.push(U,-P,0),b.push(0,0,1),M.push(L/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<d;P++){const L=P+p*v,U=P+p*(v+1),I=P+1+p*(v+1),z=P+1+p*v;E.push(L,U,z),E.push(U,I,z)}this.setIndex(E),this.setAttribute("position",new Bi(T,3)),this.setAttribute("normal",new Bi(b,3)),this.setAttribute("uv",new Bi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qo extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NE extends rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nx extends iu{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class OE extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class PE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function V0(r,e,i,s){const l=BE(s);switch(i){case zv:return r*e;case Gv:return r*e/l.components*l.byteLength;case pp:return r*e/l.components*l.byteLength;case zr:return r*e*2/l.components*l.byteLength;case mp:return r*e*2/l.components*l.byteLength;case Hv:return r*e*3/l.components*l.byteLength;case xi:return r*e*4/l.components*l.byteLength;case gp:return r*e*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bd:case Ad:return Math.max(r,16)*Math.max(e,8)/4;case Ed:case Td:return Math.max(r,8)*Math.max(e,8)/2;case Rd:case Cd:case Dd:case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wd:case Nd:case Ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Id:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case jd:case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qd:case Jd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case $d:case ep:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function BE(r){switch(r){case vi:case Pv:return{byteLength:1,components:1};case $o:case Bv:case Ki:return{byteLength:2,components:1};case hp:case dp:return{byteLength:2,components:4};case Zi:case fp:case Li:return{byteLength:4,components:1};case Fv:case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);function ix(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function FE(r){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,_),d.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((E,T)=>E.start-T.start);let y=0;for(let E=1;E<x.length;E++){const T=x[y],b=x[E];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++y,x[y]=b)}x.length=y+1;for(let E=0,T=x.length;E<T;E++){const b=x[E];r.bufferSubData(p,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var IE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ob=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Db=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_T=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ET=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:IE,alphahash_pars_fragment:zE,alphamap_fragment:HE,alphamap_pars_fragment:GE,alphatest_fragment:VE,alphatest_pars_fragment:kE,aomap_fragment:XE,aomap_pars_fragment:WE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:jE,beginnormal_vertex:ZE,bsdfs:KE,iridescence_fragment:QE,bumpmap_pars_fragment:JE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:eb,clipping_planes_pars_vertex:tb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:ab,color_pars_vertex:sb,color_vertex:rb,common:ob,cube_uv_reflection_fragment:lb,defaultnormal_vertex:cb,displacementmap_pars_vertex:ub,displacementmap_vertex:fb,emissivemap_fragment:hb,emissivemap_pars_fragment:db,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:_b,envmap_pars_fragment:vb,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Db,envmap_vertex:Sb,fog_vertex:yb,fog_pars_vertex:Mb,fog_fragment:Eb,fog_pars_fragment:bb,gradientmap_pars_fragment:Tb,lightmap_pars_fragment:Ab,lights_lambert_fragment:Rb,lights_lambert_pars_fragment:Cb,lights_pars_begin:wb,lights_toon_fragment:Ub,lights_toon_pars_fragment:Nb,lights_phong_fragment:Lb,lights_phong_pars_fragment:Ob,lights_physical_fragment:Pb,lights_physical_pars_fragment:Bb,lights_fragment_begin:Fb,lights_fragment_maps:Ib,lights_fragment_end:zb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:kb,map_fragment:Xb,map_pars_fragment:Wb,map_particle_fragment:qb,map_particle_pars_fragment:Yb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:Zb,morphinstance_vertex:Kb,morphcolor_vertex:Qb,morphnormal_vertex:Jb,morphtarget_pars_vertex:$b,morphtarget_vertex:eT,normal_fragment_begin:tT,normal_fragment_maps:nT,normal_pars_fragment:iT,normal_pars_vertex:aT,normal_vertex:sT,normalmap_pars_fragment:rT,clearcoat_normal_fragment_begin:oT,clearcoat_normal_fragment_maps:lT,clearcoat_pars_fragment:cT,iridescence_pars_fragment:uT,opaque_fragment:fT,packing:hT,premultiplied_alpha_fragment:dT,project_vertex:pT,dithering_fragment:mT,dithering_pars_fragment:gT,roughnessmap_fragment:_T,roughnessmap_pars_fragment:vT,shadowmap_pars_fragment:xT,shadowmap_pars_vertex:ST,shadowmap_vertex:yT,shadowmask_pars_fragment:MT,skinbase_vertex:ET,skinning_pars_vertex:bT,skinning_vertex:TT,skinnormal_vertex:AT,specularmap_fragment:RT,specularmap_pars_fragment:CT,tonemapping_fragment:wT,tonemapping_pars_fragment:DT,transmission_fragment:UT,transmission_pars_fragment:NT,uv_pars_fragment:LT,uv_pars_vertex:OT,uv_vertex:PT,worldpos_vertex:BT,background_vert:FT,background_frag:IT,backgroundCube_vert:zT,backgroundCube_frag:HT,cube_vert:GT,cube_frag:VT,depth_vert:kT,depth_frag:XT,distance_vert:WT,distance_frag:qT,equirect_vert:YT,equirect_frag:jT,linedashed_vert:ZT,linedashed_frag:KT,meshbasic_vert:QT,meshbasic_frag:JT,meshlambert_vert:$T,meshlambert_frag:eA,meshmatcap_vert:tA,meshmatcap_frag:nA,meshnormal_vert:iA,meshnormal_frag:aA,meshphong_vert:sA,meshphong_frag:rA,meshphysical_vert:oA,meshphysical_frag:lA,meshtoon_vert:cA,meshtoon_frag:uA,points_vert:fA,points_frag:hA,shadow_vert:dA,shadow_frag:pA,sprite_vert:mA,sprite_frag:gA},Oe={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Xi={basic:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:In([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:In([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:In([Oe.points,Oe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:In([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:In([Oe.common,Oe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:In([Oe.sprite,Oe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:In([Oe.common,Oe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:In([Oe.lights,Oe.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Xi.physical={uniforms:In([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Vc={r:0,b:0,g:0},Ds=new Ta,_A=new on;function vA(r,e,i,s,l,c,h){const d=new Bt(0);let m=c===!0?0:1,p,_,x=null,y=0,E=null;function T(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?i:e).get(U)),U}function b(L){let U=!1;const I=T(L);I===null?v(d,m):I&&I.isColor&&(v(I,1),U=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,U){const I=T(U);I&&(I.isCubeTexture||I.mapping===lu)?(_===void 0&&(_=new Si(new ol(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Gr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ds.copy(U.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(Ds)),_.material.toneMapped=wt.getTransfer(I.colorSpace)!==Vt,(x!==I||y!==I.version||E!==r.toneMapping)&&(_.material.needsUpdate=!0,x=I,y=I.version,E=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Si(new Fs(2,2),new Qi({name:"BackgroundMaterial",uniforms:Gr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=wt.getTransfer(I.colorSpace)!==Vt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(x!==I||y!==I.version||E!==r.toneMapping)&&(p.material.needsUpdate=!0,x=I,y=I.version,E=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,U){L.getRGB(Vc,Kv(r)),s.buffers.color.setClear(Vc.r,Vc.g,Vc.b,U,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,U=1){d.set(L),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:b,addToRenderList:M,dispose:P}}function xA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(D,k,oe,j,ue){let de=!1;const O=x(j,oe,k);c!==O&&(c=O,p(c.object)),de=E(D,j,oe,ue),de&&T(D,j,oe,ue),ue!==null&&e.update(ue,r.ELEMENT_ARRAY_BUFFER),(de||h)&&(h=!1,U(D,k,oe,j),ue!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function _(D){return r.deleteVertexArray(D)}function x(D,k,oe){const j=oe.wireframe===!0;let ue=s[D.id];ue===void 0&&(ue={},s[D.id]=ue);let de=ue[k.id];de===void 0&&(de={},ue[k.id]=de);let O=de[j];return O===void 0&&(O=y(m()),de[j]=O),O}function y(D){const k=[],oe=[],j=[];for(let ue=0;ue<i;ue++)k[ue]=0,oe[ue]=0,j[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oe,attributeDivisors:j,object:D,attributes:{},index:null}}function E(D,k,oe,j){const ue=c.attributes,de=k.attributes;let O=0;const G=oe.getAttributes();for(const te in G)if(G[te].location>=0){const Se=ue[te];let N=de[te];if(N===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),Se===void 0||Se.attribute!==N||N&&Se.data!==N.data)return!0;O++}return c.attributesNum!==O||c.index!==j}function T(D,k,oe,j){const ue={},de=k.attributes;let O=0;const G=oe.getAttributes();for(const te in G)if(G[te].location>=0){let Se=de[te];Se===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor));const N={};N.attribute=Se,Se&&Se.data&&(N.data=Se.data),ue[te]=N,O++}c.attributes=ue,c.attributesNum=O,c.index=j}function b(){const D=c.newAttributes;for(let k=0,oe=D.length;k<oe;k++)D[k]=0}function M(D){v(D,0)}function v(D,k){const oe=c.newAttributes,j=c.enabledAttributes,ue=c.attributeDivisors;oe[D]=1,j[D]===0&&(r.enableVertexAttribArray(D),j[D]=1),ue[D]!==k&&(r.vertexAttribDivisor(D,k),ue[D]=k)}function P(){const D=c.newAttributes,k=c.enabledAttributes;for(let oe=0,j=k.length;oe<j;oe++)k[oe]!==D[oe]&&(r.disableVertexAttribArray(oe),k[oe]=0)}function L(D,k,oe,j,ue,de,O){O===!0?r.vertexAttribIPointer(D,k,oe,ue,de):r.vertexAttribPointer(D,k,oe,j,ue,de)}function U(D,k,oe,j){b();const ue=j.attributes,de=oe.getAttributes(),O=k.defaultAttributeValues;for(const G in de){const te=de[G];if(te.location>=0){let ye=ue[G];if(ye===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),ye!==void 0){const Se=ye.normalized,N=ye.itemSize,ae=e.get(ye);if(ae===void 0)continue;const _e=ae.buffer,Ae=ae.type,ze=ae.bytesPerElement,ne=Ae===r.INT||Ae===r.UNSIGNED_INT||ye.gpuType===fp;if(ye.isInterleavedBufferAttribute){const pe=ye.data,Re=pe.stride,ke=ye.offset;if(pe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<te.locationSize;Ge++)v(te.location+Ge,pe.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ge=0;Ge<te.locationSize;Ge++)M(te.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Ge=0;Ge<te.locationSize;Ge++)L(te.location+Ge,N/te.locationSize,Ae,Se,Re*ze,(ke+N/te.locationSize*Ge)*ze,ne)}else{if(ye.isInstancedBufferAttribute){for(let pe=0;pe<te.locationSize;pe++)v(te.location+pe,ye.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let pe=0;pe<te.locationSize;pe++)M(te.location+pe);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let pe=0;pe<te.locationSize;pe++)L(te.location+pe,N/te.locationSize,Ae,Se,N*ze,N/te.locationSize*pe*ze,ne)}}else if(O!==void 0){const Se=O[G];if(Se!==void 0)switch(Se.length){case 2:r.vertexAttrib2fv(te.location,Se);break;case 3:r.vertexAttrib3fv(te.location,Se);break;case 4:r.vertexAttrib4fv(te.location,Se);break;default:r.vertexAttrib1fv(te.location,Se)}}}}P()}function I(){K();for(const D in s){const k=s[D];for(const oe in k){const j=k[oe];for(const ue in j)_(j[ue].object),delete j[ue];delete k[oe]}delete s[D]}}function z(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const oe in k){const j=k[oe];for(const ue in j)_(j[ue].object),delete j[ue];delete k[oe]}delete s[D.id]}function B(D){for(const k in s){const oe=s[k];if(oe[D.id]===void 0)continue;const j=oe[D.id];for(const ue in j)_(j[ue].object),delete j[ue];delete oe[D.id]}}function K(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:M,disableUnusedAttributes:P}}function SA(r,e,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function d(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let E=0;for(let T=0;T<x;T++)E+=_[T];i.update(E,s,1)}function m(p,_,x,y){if(x===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<p.length;T++)h(p[T],_[T],y[T]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,_,0,y,0,x);let T=0;for(let b=0;b<x;b++)T+=_[b]*y[b];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function yA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==xi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const K=B===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==vi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Li&&!K)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(at("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:E,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:U,maxSamples:I,samples:z}}function MA(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Ns,d=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const E=x.length!==0||y||s!==0||l;return l=y,s=x.length,E},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){i=_(x,y,0)},this.setState=function(x,y,E){const T=x.clippingPlanes,b=x.clipIntersection,M=x.clipShadows,v=r.get(x);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const P=c?0:s,L=P*4;let U=v.clippingState||null;m.value=U,U=_(T,y,L,E);for(let I=0;I!==L;++I)U[I]=i[I];v.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,y,E,T){const b=x!==null?x.length:0;let M=null;if(b!==0){if(M=m.value,T!==!0||M===null){const v=E+b*4,P=y.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,U=E;L!==b;++L,U+=4)h.copy(x[L]).applyMatrix4(P,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,M}}function EA(r){let e=new WeakMap;function i(h,d){return d===xd?h.mapping=Is:d===Sd&&(h.mapping=Ir),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===xd||d===Sd)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Jv(m.height);return p.fromEquirectangularTexture(r,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ss=4,k0=[.125,.215,.35,.446,.526,.582],Os=20,bA=256,Yo=new nx,X0=new Bt;let Qh=null,Jh=0,$h=0,ed=!1;const TA=new le;class W0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=TA}=c;Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,Jh,$h),this._renderer.xr.enabled=ed,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Is||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ki,format:xi,colorSpace:Hr,depthBuffer:!1},l=q0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q0(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AA(c)),this._blurMaterial=CA(c,e,i),this._ggxMaterial=RA(c,e,i)}return l}_compileMaterial(e){const i=new Si(new Fi,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,s,l,c){const m=new Ui(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,E=x.toneMapping;x.getClearColor(X0),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new ol,new Yv({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,M=b.material;let v=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,v=!0):(M.color.copy(X0),v=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const I=this._cubeSize;Or(l,U*I,L>2?I:0,I,I),x.setRenderTarget(l),v&&x.render(b,m),x.render(e,m)}x.toneMapping=E,x.autoClear=y,e.background=P}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Is||e.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=j0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Or(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Yo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),y=0+p*1.25,E=x*y,{_lodMax:T}=this,b=this._sizeLods[s],M=3*b*(s>T-ss?s-T+ss:0),v=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Or(c,M,v,3*b,2*b),l.setRenderTarget(c),l.render(d,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Or(e,M,v,3*b,2*b),l.setRenderTarget(e),l.render(d,Yo)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const y=p.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Os-1),b=c/T,M=isFinite(c)?1+Math.floor(_*b):Os;M>Os&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const v=[];let P=0;for(let B=0;B<Os;++B){const K=B/b,C=Math.exp(-K*K/2);v.push(C),B===0?P+=C:B<M&&(P+=2*C)}for(let B=0;B<v.length;B++)v[B]=v[B]/P;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=T,y.mipInt.value=L-s;const U=this._sizeLods[l],I=3*U*(l>L-ss?l-L+ss:0),z=4*(this._cubeSize-U);Or(i,I,z,3*U,2*U),m.setRenderTarget(i),m.render(x,Yo)}}function AA(r){const e=[],i=[],s=[];let l=r;const c=r-ss+1+k0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>r-ss?m=k0[h-r+ss-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,y=[_,_,x,_,x,x,_,_,x,x,_,x],E=6,T=6,b=3,M=2,v=1,P=new Float32Array(b*T*E),L=new Float32Array(M*T*E),U=new Float32Array(v*T*E);for(let z=0;z<E;z++){const B=z%3*2/3-1,K=z>2?0:-1,C=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];P.set(C,b*T*z),L.set(y,M*T*z);const D=[z,z,z,z,z,z];U.set(D,v*T*z)}const I=new Fi;I.setAttribute("position",new Pi(P,b)),I.setAttribute("uv",new Pi(L,M)),I.setAttribute("faceIndex",new Pi(U,v)),s.push(new Si(I,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function q0(r,e,i){const s=new Oi(r,e,i);return s.texture.mapping=lu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Or(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function RA(r,e,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function CA(r,e,i){const s=new Float32Array(Os),l=new le(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Y0(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function j0(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wA(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===xd||m===Sd,_=m===Is||m===Ir;if(p||_){let x=e.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new W0(r)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const E=d.image;return p&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new W0(r)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function DA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&tl("WebGLRenderer: "+s+" extension not supported."),l}}}function UA(r,e,i,s){const l={},c=new WeakMap;function h(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",h),delete l[y.id];const E=c.get(y);E&&(e.remove(E),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const E in y)e.update(y[E],r.ARRAY_BUFFER)}function p(x){const y=[],E=x.index,T=x.attributes.position;let b=0;if(E!==null){const P=E.array;b=E.version;for(let L=0,U=P.length;L<U;L+=3){const I=P[L+0],z=P[L+1],B=P[L+2];y.push(I,z,z,B,B,I)}}else if(T!==void 0){const P=T.array;b=T.version;for(let L=0,U=P.length/3-1;L<U;L+=3){const I=L+0,z=L+1,B=L+2;y.push(I,z,z,B,B,I)}}else return;const M=new(Vv(y)?Zv:jv)(y,1);M.version=b;const v=c.get(x);v&&e.remove(v),c.set(x,M)}function _(x){const y=c.get(x);if(y){const E=x.index;E!==null&&y.version<E.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function NA(r,e,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,E){r.drawElements(s,E,c,y*h),i.update(E,s,1)}function p(y,E,T){T!==0&&(r.drawElementsInstanced(s,E,c,y*h,T),i.update(E,s,T))}function _(y,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,y,0,T);let M=0;for(let v=0;v<T;v++)M+=E[v];i.update(M,s,1)}function x(y,E,T,b){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)p(y[v]/h,E[v],b[v]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,c,y,0,b,0,T);let v=0;for(let P=0;P<T;P++)v+=E[P]*b[P];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function LA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Nt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function OA(r,e,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==x){let D=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var E=D;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),b===!0&&(U=2),M===!0&&(U=3);let I=d.attributes.position.count*U,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*z*4*x),K=new kv(B,I,z,x);K.type=Li,K.needsUpdate=!0;const C=U*4;for(let k=0;k<x;k++){const oe=v[k],j=P[k],ue=L[k],de=I*z*4*k;for(let O=0;O<oe.count;O++){const G=O*C;T===!0&&(l.fromBufferAttribute(oe,O),B[de+G+0]=l.x,B[de+G+1]=l.y,B[de+G+2]=l.z,B[de+G+3]=0),b===!0&&(l.fromBufferAttribute(j,O),B[de+G+4]=l.x,B[de+G+5]=l.y,B[de+G+6]=l.z,B[de+G+7]=0),M===!0&&(l.fromBufferAttribute(ue,O),B[de+G+8]=l.x,B[de+G+9]=l.y,B[de+G+10]=l.z,B[de+G+11]=ue.itemSize===4?l.w:1)}}y={count:x,texture:K,size:new lt(I,z)},s.set(d,y),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const b=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function PA(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,x=e.get(m,_);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const BA={[Rv]:"LINEAR_TONE_MAPPING",[Cv]:"REINHARD_TONE_MAPPING",[wv]:"CINEON_TONE_MAPPING",[Dv]:"ACES_FILMIC_TONE_MAPPING",[Nv]:"AGX_TONE_MAPPING",[Lv]:"NEUTRAL_TONE_MAPPING",[Uv]:"CUSTOM_TONE_MAPPING"};function FA(r,e,i,s,l){const c=new Oi(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Oi(e,i,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),d=new Fi;d.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Bi([0,2,0,0,2,0],2));const m=new Qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Si(d,m),_=new nx(-1,1,1,-1,0,1);let x=null,y=null,E=!1,T,b=null,M=[],v=!1;this.setSize=function(P,L){c.setSize(P,L),h.setSize(P,L);for(let U=0;U<M.length;U++){const I=M[U];I.setSize&&I.setSize(P,L)}},this.setEffects=function(P){M=P,v=M.length>0&&M[0].isRenderPass===!0;const L=c.width,U=c.height;for(let I=0;I<M.length;I++){const z=M[I];z.setSize&&z.setSize(L,U)}},this.begin=function(P,L){if(E||P.toneMapping===Yi&&M.length===0)return!1;if(b=L,L!==null){const U=L.width,I=L.height;(c.width!==U||c.height!==I)&&this.setSize(U,I)}return v===!1&&P.setRenderTarget(c),T=P.toneMapping,P.toneMapping=Yi,!0},this.hasRenderPass=function(){return v},this.end=function(P,L){P.toneMapping=T,E=!0;let U=c,I=h;for(let z=0;z<M.length;z++){const B=M[z];if(B.enabled!==!1&&(B.render(P,I,U,L),B.needsSwap!==!1)){const K=U;U=I,I=K}}if(x!==P.outputColorSpace||y!==P.toneMapping){x=P.outputColorSpace,y=P.toneMapping,m.defines={},wt.getTransfer(x)===Vt&&(m.defines.SRGB_TRANSFER="");const z=BA[y];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,P.setRenderTarget(b),P.render(p,_),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const ax=new zn,np=new nl(1,1),sx=new kv,rx=new oE,ox=new Qv,Z0=[],K0=[],Q0=new Float32Array(16),J0=new Float32Array(9),$0=new Float32Array(4);function Xr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Z0[l];if(c===void 0&&(c=new Float32Array(l),Z0[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(c,d)}return c}function vn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function xn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function fu(r,e){let i=K0[e];i===void 0&&(i=new Int32Array(e),K0[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function IA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function zA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2fv(this.addr,e),xn(i,e)}}function HA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;r.uniform3fv(this.addr,e),xn(i,e)}}function GA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4fv(this.addr,e),xn(i,e)}}function VA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;$0.set(s),r.uniformMatrix2fv(this.addr,!1,$0),xn(i,s)}}function kA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;J0.set(s),r.uniformMatrix3fv(this.addr,!1,J0),xn(i,s)}}function XA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;Q0.set(s),r.uniformMatrix4fv(this.addr,!1,Q0),xn(i,s)}}function WA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function qA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2iv(this.addr,e),xn(i,e)}}function YA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3iv(this.addr,e),xn(i,e)}}function jA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4iv(this.addr,e),xn(i,e)}}function ZA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function KA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2uiv(this.addr,e),xn(i,e)}}function QA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3uiv(this.addr,e),xn(i,e)}}function JA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4uiv(this.addr,e),xn(i,e)}}function $A(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(np.compareFunction=i.isReversedDepthBuffer()?vp:_p,c=np):c=ax,i.setTexture2D(e||c,l)}function e1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||rx,l)}function t1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||ox,l)}function n1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||sx,l)}function i1(r){switch(r){case 5126:return IA;case 35664:return zA;case 35665:return HA;case 35666:return GA;case 35674:return VA;case 35675:return kA;case 35676:return XA;case 5124:case 35670:return WA;case 35667:case 35671:return qA;case 35668:case 35672:return YA;case 35669:case 35673:return jA;case 5125:return ZA;case 36294:return KA;case 36295:return QA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function a1(r,e){r.uniform1fv(this.addr,e)}function s1(r,e){const i=Xr(e,this.size,2);r.uniform2fv(this.addr,i)}function r1(r,e){const i=Xr(e,this.size,3);r.uniform3fv(this.addr,i)}function o1(r,e){const i=Xr(e,this.size,4);r.uniform4fv(this.addr,i)}function l1(r,e){const i=Xr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function c1(r,e){const i=Xr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function u1(r,e){const i=Xr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function f1(r,e){r.uniform1iv(this.addr,e)}function h1(r,e){r.uniform2iv(this.addr,e)}function d1(r,e){r.uniform3iv(this.addr,e)}function p1(r,e){r.uniform4iv(this.addr,e)}function m1(r,e){r.uniform1uiv(this.addr,e)}function g1(r,e){r.uniform2uiv(this.addr,e)}function _1(r,e){r.uniform3uiv(this.addr,e)}function v1(r,e){r.uniform4uiv(this.addr,e)}function x1(r,e,i){const s=this.cache,l=e.length,c=fu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=np:h=ax;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function S1(r,e,i){const s=this.cache,l=e.length,c=fu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||rx,c[h])}function y1(r,e,i){const s=this.cache,l=e.length,c=fu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||ox,c[h])}function M1(r,e,i){const s=this.cache,l=e.length,c=fu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||sx,c[h])}function E1(r){switch(r){case 5126:return a1;case 35664:return s1;case 35665:return r1;case 35666:return o1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return f1;case 35667:case 35671:return h1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return M1}}class b1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=i1(i.type)}}class T1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=E1(i.type)}}class A1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const td=/(\w+)(\])?(\[|\.)?/g;function ev(r,e){r.seq.push(e),r.map[e.id]=e}function R1(r,e,i){const s=r.name,l=s.length;for(td.lastIndex=0;;){const c=td.exec(s),h=td.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){ev(i,p===void 0?new b1(d,r,e):new T1(d,r,e));break}else{let x=i.map[d];x===void 0&&(x=new A1(d),ev(i,x)),i=x}}}class $c{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);R1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function tv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const C1=37297;let w1=0;function D1(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const nv=new dt;function U1(r){wt._getMatrix(nv,wt.workingColorSpace,r);const e=`mat3( ${nv.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(r)){case eu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function iv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+D1(r.getShaderSource(e),d)}else return c}function N1(r,e){const i=U1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const L1={[Rv]:"Linear",[Cv]:"Reinhard",[wv]:"Cineon",[Dv]:"ACESFilmic",[Nv]:"AgX",[Lv]:"Neutral",[Uv]:"Custom"};function O1(r,e){const i=L1[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const kc=new le;function P1(){wt.getLuminanceCoefficients(kc);const r=kc.x.toFixed(4),e=kc.y.toFixed(4),i=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function F1(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function I1(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function Jo(r){return r!==""}function av(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(r){return r.replace(z1,G1)}const H1=new Map;function G1(r,e){let i=pt[e];if(i===void 0){const s=H1.get(e);if(s!==void 0)i=pt[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ip(i)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rv(r){return r.replace(V1,k1)}function k1(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ov(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const X1={[jc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function W1(r){return X1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q1={[Is]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[lu]:"ENVMAP_TYPE_CUBE_UV"};function Y1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":q1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const j1={[Ir]:"ENVMAP_MODE_REFRACTION"};function Z1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":j1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const K1={[Av]:"ENVMAP_BLENDING_MULTIPLY",[GM]:"ENVMAP_BLENDING_MIX",[VM]:"ENVMAP_BLENDING_ADD"};function Q1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":K1[r.combine]||"ENVMAP_BLENDING_NONE"}function J1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function $1(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=W1(i),p=Y1(i),_=Z1(i),x=Q1(i),y=J1(i),E=B1(i),T=F1(c),b=l.createProgram();let M,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jo).join(`
`),v.length>0&&(v+=`
`)):(M=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),v=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?O1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,N1("linearToOutputTexel",i.outputColorSpace),P1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),h=ip(h),h=av(h,i),h=sv(h,i),d=ip(d),d=av(d,i),d=sv(d,i),h=rv(h),d=rv(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===v0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===v0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=P+M+h,U=P+v+d,I=tv(l,l.VERTEX_SHADER,L),z=tv(l,l.FRAGMENT_SHADER,U);l.attachShader(b,I),l.attachShader(b,z),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function B(k){if(r.debug.checkShaderErrors){const oe=l.getProgramInfoLog(b)||"",j=l.getShaderInfoLog(I)||"",ue=l.getShaderInfoLog(z)||"",de=oe.trim(),O=j.trim(),G=ue.trim();let te=!0,ye=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,I,z);else{const Se=iv(l,I,"vertex"),N=iv(l,z,"fragment");Nt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+de+`
`+Se+`
`+N)}else de!==""?at("WebGLProgram: Program Info Log:",de):(O===""||G==="")&&(ye=!1);ye&&(k.diagnostics={runnable:te,programLog:de,vertexShader:{log:O,prefix:M},fragmentShader:{log:G,prefix:v}})}l.deleteShader(I),l.deleteShader(z),K=new $c(l,b),C=I1(l,b)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(b,C1)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=w1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=z,this}let eR=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new nR(e),i.set(e,s)),s}}class nR{constructor(e){this.id=eR++,this.code=e,this.usedTimes=0}}function iR(r,e,i,s,l,c,h){const d=new Wv,m=new tR,p=new Set,_=[],x=new Map,y=l.logarithmicDepthBuffer;let E=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,D,k,oe,j){const ue=oe.fog,de=j.geometry,O=C.isMeshStandardMaterial?oe.environment:null,G=(C.isMeshStandardMaterial?i:e).get(C.envMap||O),te=G&&G.mapping===lu?G.image.height:null,ye=T[C.type];C.precision!==null&&(E=l.getMaxPrecision(C.precision),E!==C.precision&&at("WebGLProgram.getParameters:",C.precision,"not supported, using",E,"instead."));const Se=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,N=Se!==void 0?Se.length:0;let ae=0;de.morphAttributes.position!==void 0&&(ae=1),de.morphAttributes.normal!==void 0&&(ae=2),de.morphAttributes.color!==void 0&&(ae=3);let _e,Ae,ze,ne;if(ye){const Ct=Xi[ye];_e=Ct.vertexShader,Ae=Ct.fragmentShader}else _e=C.vertexShader,Ae=C.fragmentShader,m.update(C),ze=m.getVertexShaderID(C),ne=m.getFragmentShaderID(C);const pe=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),ke=j.isInstancedMesh===!0,Ge=j.isBatchedMesh===!0,mt=!!C.map,Qt=!!C.matcap,_t=!!G,gt=!!C.aoMap,At=!!C.lightMap,st=!!C.bumpMap,Jt=!!C.normalMap,V=!!C.displacementMap,qt=!!C.emissiveMap,Mt=!!C.metalnessMap,Rt=!!C.roughnessMap,qe=C.anisotropy>0,w=C.clearcoat>0,g=C.dispersion>0,F=C.iridescence>0,Z=C.sheen>0,he=C.transmission>0,ie=qe&&!!C.anisotropyMap,Pe=w&&!!C.clearcoatMap,Ce=w&&!!C.clearcoatNormalMap,Ve=w&&!!C.clearcoatRoughnessMap,Je=F&&!!C.iridescenceMap,Ee=F&&!!C.iridescenceThicknessMap,be=Z&&!!C.sheenColorMap,Ie=Z&&!!C.sheenRoughnessMap,Be=!!C.specularMap,De=!!C.specularColorMap,ft=!!C.specularIntensityMap,W=he&&!!C.transmissionMap,Ne=he&&!!C.thicknessMap,Te=!!C.gradientMap,Fe=!!C.alphaMap,Me=C.alphaTest>0,xe=!!C.alphaHash,we=!!C.extensions;let it=Yi;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(it=r.toneMapping);const It={shaderID:ye,shaderType:C.type,shaderName:C.name,vertexShader:_e,fragmentShader:Ae,defines:C.defines,customVertexShaderID:ze,customFragmentShaderID:ne,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:E,batching:Ge,batchingColor:Ge&&j._colorsTexture!==null,instancing:ke,instancingColor:ke&&j.instanceColor!==null,instancingMorph:ke&&j.morphTexture!==null,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Hr,alphaToCoverage:!!C.alphaToCoverage,map:mt,matcap:Qt,envMap:_t,envMapMode:_t&&G.mapping,envMapCubeUVHeight:te,aoMap:gt,lightMap:At,bumpMap:st,normalMap:Jt,displacementMap:V,emissiveMap:qt,normalMapObjectSpace:Jt&&C.normalMapType===qM,normalMapTangentSpace:Jt&&C.normalMapType===WM,metalnessMap:Mt,roughnessMap:Rt,anisotropy:qe,anisotropyMap:ie,clearcoat:w,clearcoatMap:Pe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ve,dispersion:g,iridescence:F,iridescenceMap:Je,iridescenceThicknessMap:Ee,sheen:Z,sheenColorMap:be,sheenRoughnessMap:Ie,specularMap:Be,specularColorMap:De,specularIntensityMap:ft,transmission:he,transmissionMap:W,thicknessMap:Ne,gradientMap:Te,opaque:C.transparent===!1&&C.blending===Pr&&C.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Me,alphaHash:xe,combine:C.combine,mapUv:mt&&b(C.map.channel),aoMapUv:gt&&b(C.aoMap.channel),lightMapUv:At&&b(C.lightMap.channel),bumpMapUv:st&&b(C.bumpMap.channel),normalMapUv:Jt&&b(C.normalMap.channel),displacementMapUv:V&&b(C.displacementMap.channel),emissiveMapUv:qt&&b(C.emissiveMap.channel),metalnessMapUv:Mt&&b(C.metalnessMap.channel),roughnessMapUv:Rt&&b(C.roughnessMap.channel),anisotropyMapUv:ie&&b(C.anisotropyMap.channel),clearcoatMapUv:Pe&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:be&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&b(C.sheenRoughnessMap.channel),specularMapUv:Be&&b(C.specularMap.channel),specularColorMapUv:De&&b(C.specularColorMap.channel),specularIntensityMapUv:ft&&b(C.specularIntensityMap.channel),transmissionMapUv:W&&b(C.transmissionMap.channel),thicknessMapUv:Ne&&b(C.thicknessMap.channel),alphaMapUv:Fe&&b(C.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Jt||qe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!de.attributes.uv&&(mt||Fe),fog:!!ue,useFog:C.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Re,skinning:j.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ae,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:mt&&C.map.isVideoTexture===!0&&wt.getTransfer(C.map.colorSpace)===Vt,decodeVideoTextureEmissive:qt&&C.emissiveMap.isVideoTexture===!0&&wt.getTransfer(C.emissiveMap.colorSpace)===Vt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ya,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:we&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&C.extensions.multiDraw===!0||Ge)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function v(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)D.push(k),D.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(P(D,C),L(D,C),D.push(r.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function P(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function L(C,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const D=T[C.type];let k;if(D){const oe=Xi[D];k=SE.clone(oe.uniforms)}else k=C.uniforms;return k}function I(C,D){let k=x.get(D);return k!==void 0?++k.usedTimes:(k=new $1(r,D,C,c),_.push(k),x.set(D,k)),k}function z(C){if(--C.usedTimes===0){const D=_.indexOf(C);_[D]=_[_.length-1],_.pop(),x.delete(C.cacheKey),C.destroy()}}function B(C){m.remove(C)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:U,acquireProgram:I,releaseProgram:z,releaseShaderCache:B,programs:_,dispose:K}}function aR(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function sR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function lv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(x,y,E,T,b,M){let v=r[e];return v===void 0?(v={id:x.id,object:x,geometry:y,material:E,groupOrder:T,renderOrder:x.renderOrder,z:b,group:M},r[e]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=E,v.groupOrder=T,v.renderOrder=x.renderOrder,v.z=b,v.group=M),e++,v}function d(x,y,E,T,b,M){const v=h(x,y,E,T,b,M);E.transmission>0?s.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(x,y,E,T,b,M){const v=h(x,y,E,T,b,M);E.transmission>0?s.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,y){i.length>1&&i.sort(x||sR),s.length>1&&s.sort(y||lv),l.length>1&&l.sort(y||lv)}function _(){for(let x=e,y=r.length;x<y;x++){const E=r[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function rR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new cv,r.set(s,[h])):l>=c.length?(h=new cv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function oR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Bt};break;case"SpotLight":i={position:new le,direction:new le,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=i,i}}}function lR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let cR=0;function uR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fR(r){const e=new oR,i=lR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new le);const l=new le,c=new on,h=new on;function d(p){let _=0,x=0,y=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let E=0,T=0,b=0,M=0,v=0,P=0,L=0,U=0,I=0,z=0,B=0;p.sort(uR);for(let C=0,D=p.length;C<D;C++){const k=p[C],oe=k.color,j=k.intensity,ue=k.distance;let de=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===zr?de=k.shadow.map.texture:de=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=oe.r*j,x+=oe.g*j,y+=oe.b*j;else if(k.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(k.sh.coefficients[O],j);B++}else if(k.isDirectionalLight){const O=e.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,s.directionalShadow[E]=te,s.directionalShadowMap[E]=de,s.directionalShadowMatrix[E]=k.shadow.matrix,P++}s.directional[E]=O,E++}else if(k.isSpotLight){const O=e.get(k);O.position.setFromMatrixPosition(k.matrixWorld),O.color.copy(oe).multiplyScalar(j),O.distance=ue,O.coneCos=Math.cos(k.angle),O.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),O.decay=k.decay,s.spot[b]=O;const G=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,G.updateMatrices(k),k.castShadow&&z++),s.spotLightMatrix[b]=G.matrix,k.castShadow){const te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,s.spotShadow[b]=te,s.spotShadowMap[b]=de,U++}b++}else if(k.isRectAreaLight){const O=e.get(k);O.color.copy(oe).multiplyScalar(j),O.halfWidth.set(k.width*.5,0,0),O.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=O,M++}else if(k.isPointLight){const O=e.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),O.distance=k.distance,O.decay=k.decay,k.castShadow){const G=k.shadow,te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,te.shadowCameraNear=G.camera.near,te.shadowCameraFar=G.camera.far,s.pointShadow[T]=te,s.pointShadowMap[T]=de,s.pointShadowMatrix[T]=k.shadow.matrix,L++}s.point[T]=O,T++}else if(k.isHemisphereLight){const O=e.get(k);O.skyColor.copy(k.color).multiplyScalar(j),O.groundColor.copy(k.groundColor).multiplyScalar(j),s.hemi[v]=O,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=y;const K=s.hash;(K.directionalLength!==E||K.pointLength!==T||K.spotLength!==b||K.rectAreaLength!==M||K.hemiLength!==v||K.numDirectionalShadows!==P||K.numPointShadows!==L||K.numSpotShadows!==U||K.numSpotMaps!==I||K.numLightProbes!==B)&&(s.directional.length=E,s.spot.length=b,s.rectArea.length=M,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=U+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=B,K.directionalLength=E,K.pointLength=T,K.spotLength=b,K.rectAreaLength=M,K.hemiLength=v,K.numDirectionalShadows=P,K.numPointShadows=L,K.numSpotShadows=U,K.numSpotMaps=I,K.numLightProbes=B,s.version=cR++)}function m(p,_){let x=0,y=0,E=0,T=0,b=0;const M=_.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const L=p[v];if(L.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),x++}else if(L.isSpotLight){const U=s.spot[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),E++}else if(L.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),y++}else if(L.isHemisphereLight){const U=s.hemi[b];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(M),b++}}}return{setup:d,setupView:m,state:s}}function uv(r){const e=new fR(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function hR(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new uv(r),e.set(l,[d])):c>=h.length?(d=new uv(r),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mR=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],gR=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],fv=new on,jo=new le,nd=new le;function _R(r,e,i){let s=new ex;const l=new lt,c=new lt,h=new an,d=new NE,m=new LE,p={},_=i.maxTextureSize,x={[os]:Yn,[Yn]:os,[ya]:ya},y=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:dR,fragmentShader:pR}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const T=new Fi;T.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Si(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let v=this.type;this.render=function(z,B,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===MM&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=jc);const C=r.getRenderTarget(),D=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(Ma),oe.buffers.depth.getReversed()===!0?oe.buffers.color.setClear(0,0,0,0):oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const j=v!==this.type;j&&B.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(de=>de.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,de=z.length;ue<de;ue++){const O=z[ue],G=O.shadow;if(G===void 0){at("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const te=G.getFrameExtents();if(l.multiply(te),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/te.x),l.x=c.x*te.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/te.y),l.y=c.y*te.y,G.mapSize.y=c.y)),G.map===null||j===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ko){if(O.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Oi(l.x,l.y,{format:zr,type:Ki,minFilter:mn,magFilter:mn,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new nl(l.x,l.y,Li),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=ba,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Nn,G.map.depthTexture.magFilter=Nn}else{O.isPointLight?(G.map=new Jv(l.x),G.map.depthTexture=new UE(l.x,Zi)):(G.map=new Oi(l.x,l.y),G.map.depthTexture=new nl(l.x,l.y,Zi)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=ba;const Se=r.state.buffers.depth.getReversed();this.type===jc?(G.map.depthTexture.compareFunction=Se?vp:_p,G.map.depthTexture.minFilter=mn,G.map.depthTexture.magFilter=mn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Nn,G.map.depthTexture.magFilter=Nn)}G.camera.updateProjectionMatrix()}const ye=G.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<ye;Se++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,Se),r.clear();else{Se===0&&(r.setRenderTarget(G.map),r.clear());const N=G.getViewport(Se);h.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),oe.viewport(h)}if(O.isPointLight){const N=G.camera,ae=G.matrix,_e=O.distance||N.far;_e!==N.far&&(N.far=_e,N.updateProjectionMatrix()),jo.setFromMatrixPosition(O.matrixWorld),N.position.copy(jo),nd.copy(N.position),nd.add(mR[Se]),N.up.copy(gR[Se]),N.lookAt(nd),N.updateMatrixWorld(),ae.makeTranslation(-jo.x,-jo.y,-jo.z),fv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G._frustum.setFromProjectionMatrix(fv,N.coordinateSystem,N.reversedDepth)}else G.updateMatrices(O);s=G.getFrustum(),U(B,K,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Ko&&P(G,K),G.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(C,D,k)};function P(z,B){const K=e.update(b);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,E.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Oi(l.x,l.y,{format:zr,type:Ki})),y.uniforms.shadow_pass.value=z.map.depthTexture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(B,null,K,y,b,null),E.uniforms.shadow_pass.value=z.mapPass.texture,E.uniforms.resolution.value=z.mapSize,E.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(B,null,K,E,b,null)}function L(z,B,K,C){let D=null;const k=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)D=k;else if(D=K.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const oe=D.uuid,j=B.uuid;let ue=p[oe];ue===void 0&&(ue={},p[oe]=ue);let de=ue[j];de===void 0&&(de=D.clone(),ue[j]=de,B.addEventListener("dispose",I)),D=de}if(D.visible=B.visible,D.wireframe=B.wireframe,C===Ko?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:x[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,K.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const oe=r.properties.get(D);oe.light=K}return D}function U(z,B,K,C,D){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===Ko)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const j=e.update(z),ue=z.material;if(Array.isArray(ue)){const de=j.groups;for(let O=0,G=de.length;O<G;O++){const te=de[O],ye=ue[te.materialIndex];if(ye&&ye.visible){const Se=L(z,ye,C,D);z.onBeforeShadow(r,z,B,K,j,Se,te),r.renderBufferDirect(K,null,j,Se,z,te),z.onAfterShadow(r,z,B,K,j,Se,te)}}}else if(ue.visible){const de=L(z,ue,C,D);z.onBeforeShadow(r,z,B,K,j,de,null),r.renderBufferDirect(K,null,j,de,z,null),z.onAfterShadow(r,z,B,K,j,de,null)}}const oe=z.children;for(let j=0,ue=oe.length;j<ue;j++)U(oe[j],B,K,C,D)}function I(z){z.target.removeEventListener("dispose",I);for(const K in p){const C=p[K],D=z.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const vR={[hd]:dd,[pd]:_d,[md]:vd,[Fr]:gd,[dd]:hd,[_d]:pd,[vd]:md,[gd]:Fr};function xR(r,e){function i(){let W=!1;const Ne=new an;let Te=null;const Fe=new an(0,0,0,0);return{setMask:function(Me){Te!==Me&&!W&&(r.colorMask(Me,Me,Me,Me),Te=Me)},setLocked:function(Me){W=Me},setClear:function(Me,xe,we,it,It){It===!0&&(Me*=it,xe*=it,we*=it),Ne.set(Me,xe,we,it),Fe.equals(Ne)===!1&&(r.clearColor(Me,xe,we,it),Fe.copy(Ne))},reset:function(){W=!1,Te=null,Fe.set(-1,0,0,0)}}}function s(){let W=!1,Ne=!1,Te=null,Fe=null,Me=null;return{setReversed:function(xe){if(Ne!==xe){const we=e.get("EXT_clip_control");xe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Ne=xe;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return Ne},setTest:function(xe){xe?pe(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(xe){Te!==xe&&!W&&(r.depthMask(xe),Te=xe)},setFunc:function(xe){if(Ne&&(xe=vR[xe]),Fe!==xe){switch(xe){case hd:r.depthFunc(r.NEVER);break;case dd:r.depthFunc(r.ALWAYS);break;case pd:r.depthFunc(r.LESS);break;case Fr:r.depthFunc(r.LEQUAL);break;case md:r.depthFunc(r.EQUAL);break;case gd:r.depthFunc(r.GEQUAL);break;case _d:r.depthFunc(r.GREATER);break;case vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=xe}},setLocked:function(xe){W=xe},setClear:function(xe){Me!==xe&&(Ne&&(xe=1-xe),r.clearDepth(xe),Me=xe)},reset:function(){W=!1,Te=null,Fe=null,Me=null,Ne=!1}}}function l(){let W=!1,Ne=null,Te=null,Fe=null,Me=null,xe=null,we=null,it=null,It=null;return{setTest:function(Ct){W||(Ct?pe(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(Ct){Ne!==Ct&&!W&&(r.stencilMask(Ct),Ne=Ct)},setFunc:function(Ct,Ln,yi){(Te!==Ct||Fe!==Ln||Me!==yi)&&(r.stencilFunc(Ct,Ln,yi),Te=Ct,Fe=Ln,Me=yi)},setOp:function(Ct,Ln,yi){(xe!==Ct||we!==Ln||it!==yi)&&(r.stencilOp(Ct,Ln,yi),xe=Ct,we=Ln,it=yi)},setLocked:function(Ct){W=Ct},setClear:function(Ct){It!==Ct&&(r.clearStencil(Ct),It=Ct)},reset:function(){W=!1,Ne=null,Te=null,Fe=null,Me=null,xe=null,we=null,it=null,It=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},y=new WeakMap,E=[],T=null,b=!1,M=null,v=null,P=null,L=null,U=null,I=null,z=null,B=new Bt(0,0,0),K=0,C=!1,D=null,k=null,oe=null,j=null,ue=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(te)[1]),O=G>=1):te.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),O=G>=2);let ye=null,Se={};const N=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),_e=new an().fromArray(N),Ae=new an().fromArray(ae);function ze(W,Ne,Te,Fe){const Me=new Uint8Array(4),xe=r.createTexture();r.bindTexture(W,xe),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<Te;we++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Ne+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return xe}const ne={};ne[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),pe(r.DEPTH_TEST),h.setFunc(Fr),st(!1),Jt(d0),pe(r.CULL_FACE),gt(Ma);function pe(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Re(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function ke(W,Ne){return x[W]!==Ne?(r.bindFramebuffer(W,Ne),x[W]=Ne,W===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ne),W===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ge(W,Ne){let Te=E,Fe=!1;if(W){Te=y.get(Ne),Te===void 0&&(Te=[],y.set(Ne,Te));const Me=W.textures;if(Te.length!==Me.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,we=Me.length;xe<we;xe++)Te[xe]=r.COLOR_ATTACHMENT0+xe;Te.length=Me.length,Fe=!0}}else Te[0]!==r.BACK&&(Te[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(Te)}function mt(W){return T!==W?(r.useProgram(W),T=W,!0):!1}const Qt={[Ls]:r.FUNC_ADD,[bM]:r.FUNC_SUBTRACT,[TM]:r.FUNC_REVERSE_SUBTRACT};Qt[AM]=r.MIN,Qt[RM]=r.MAX;const _t={[CM]:r.ZERO,[wM]:r.ONE,[DM]:r.SRC_COLOR,[ud]:r.SRC_ALPHA,[BM]:r.SRC_ALPHA_SATURATE,[OM]:r.DST_COLOR,[NM]:r.DST_ALPHA,[UM]:r.ONE_MINUS_SRC_COLOR,[fd]:r.ONE_MINUS_SRC_ALPHA,[PM]:r.ONE_MINUS_DST_COLOR,[LM]:r.ONE_MINUS_DST_ALPHA,[FM]:r.CONSTANT_COLOR,[IM]:r.ONE_MINUS_CONSTANT_COLOR,[zM]:r.CONSTANT_ALPHA,[HM]:r.ONE_MINUS_CONSTANT_ALPHA};function gt(W,Ne,Te,Fe,Me,xe,we,it,It,Ct){if(W===Ma){b===!0&&(Re(r.BLEND),b=!1);return}if(b===!1&&(pe(r.BLEND),b=!0),W!==EM){if(W!==M||Ct!==C){if((v!==Ls||U!==Ls)&&(r.blendEquation(r.FUNC_ADD),v=Ls,U=Ls),Ct)switch(W){case Pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cd:r.blendFunc(r.ONE,r.ONE);break;case p0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case m0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Nt("WebGLState: Invalid blending: ",W);break}else switch(W){case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case p0:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m0:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",W);break}P=null,L=null,I=null,z=null,B.set(0,0,0),K=0,M=W,C=Ct}return}Me=Me||Ne,xe=xe||Te,we=we||Fe,(Ne!==v||Me!==U)&&(r.blendEquationSeparate(Qt[Ne],Qt[Me]),v=Ne,U=Me),(Te!==P||Fe!==L||xe!==I||we!==z)&&(r.blendFuncSeparate(_t[Te],_t[Fe],_t[xe],_t[we]),P=Te,L=Fe,I=xe,z=we),(it.equals(B)===!1||It!==K)&&(r.blendColor(it.r,it.g,it.b,It),B.copy(it),K=It),M=W,C=!1}function At(W,Ne){W.side===ya?Re(r.CULL_FACE):pe(r.CULL_FACE);let Te=W.side===Yn;Ne&&(Te=!Te),st(Te),W.blending===Pr&&W.transparent===!1?gt(Ma):gt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Fe=W.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),qt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(W){D!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),D=W)}function Jt(W){W!==SM?(pe(r.CULL_FACE),W!==k&&(W===d0?r.cullFace(r.BACK):W===yM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),k=W}function V(W){W!==oe&&(O&&r.lineWidth(W),oe=W)}function qt(W,Ne,Te){W?(pe(r.POLYGON_OFFSET_FILL),(j!==Ne||ue!==Te)&&(r.polygonOffset(Ne,Te),j=Ne,ue=Te)):Re(r.POLYGON_OFFSET_FILL)}function Mt(W){W?pe(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function Rt(W){W===void 0&&(W=r.TEXTURE0+de-1),ye!==W&&(r.activeTexture(W),ye=W)}function qe(W,Ne,Te){Te===void 0&&(ye===null?Te=r.TEXTURE0+de-1:Te=ye);let Fe=Se[Te];Fe===void 0&&(Fe={type:void 0,texture:void 0},Se[Te]=Fe),(Fe.type!==W||Fe.texture!==Ne)&&(ye!==Te&&(r.activeTexture(Te),ye=Te),r.bindTexture(W,Ne||ne[W]),Fe.type=W,Fe.texture=Ne)}function w(){const W=Se[ye];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function g(){try{r.compressedTexImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Z(){try{r.texSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function he(){try{r.texSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ie(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Pe(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ce(){try{r.texStorage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ve(){try{r.texStorage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Je(){try{r.texImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ee(){try{r.texImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function be(W){_e.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),_e.copy(W))}function Ie(W){Ae.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function Be(W,Ne){let Te=p.get(Ne);Te===void 0&&(Te=new WeakMap,p.set(Ne,Te));let Fe=Te.get(W);Fe===void 0&&(Fe=r.getUniformBlockIndex(Ne,W.name),Te.set(W,Fe))}function De(W,Ne){const Fe=p.get(Ne).get(W);m.get(Ne)!==Fe&&(r.uniformBlockBinding(Ne,Fe,W.__bindingPointIndex),m.set(Ne,Fe))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ye=null,Se={},x={},y=new WeakMap,E=[],T=null,b=!1,M=null,v=null,P=null,L=null,U=null,I=null,z=null,B=new Bt(0,0,0),K=0,C=!1,D=null,k=null,oe=null,j=null,ue=null,_e.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:pe,disable:Re,bindFramebuffer:ke,drawBuffers:Ge,useProgram:mt,setBlending:gt,setMaterial:At,setFlipSided:st,setCullFace:Jt,setLineWidth:V,setPolygonOffset:qt,setScissorTest:Mt,activeTexture:Rt,bindTexture:qe,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:Je,texImage3D:Ee,updateUBOMapping:Be,uniformBlockBinding:De,texStorage2D:Ce,texStorage3D:Ve,texSubImage2D:Z,texSubImage3D:he,compressedTexSubImage2D:ie,compressedTexSubImage3D:Pe,scissor:be,viewport:Ie,reset:ft}}function SR(r,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new lt,_=new WeakMap;let x;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(w,g){return E?new OffscreenCanvas(w,g):nu("canvas")}function b(w,g,F){let Z=1;const he=qe(w);if((he.width>F||he.height>F)&&(Z=F/Math.max(he.width,he.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ie=Math.floor(Z*he.width),Pe=Math.floor(Z*he.height);x===void 0&&(x=T(ie,Pe));const Ce=g?T(ie,Pe):x;return Ce.width=ie,Ce.height=Pe,Ce.getContext("2d").drawImage(w,0,0,ie,Pe),at("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ie+"x"+Pe+")."),Ce}else return"data"in w&&at("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),w;return w}function M(w){return w.generateMipmaps}function v(w){r.generateMipmap(w)}function P(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(w,g,F,Z,he=!1){if(w!==null){if(r[w]!==void 0)return r[w];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=g;if(g===r.RED&&(F===r.FLOAT&&(ie=r.R32F),F===r.HALF_FLOAT&&(ie=r.R16F),F===r.UNSIGNED_BYTE&&(ie=r.R8)),g===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(ie=r.R8UI),F===r.UNSIGNED_SHORT&&(ie=r.R16UI),F===r.UNSIGNED_INT&&(ie=r.R32UI),F===r.BYTE&&(ie=r.R8I),F===r.SHORT&&(ie=r.R16I),F===r.INT&&(ie=r.R32I)),g===r.RG&&(F===r.FLOAT&&(ie=r.RG32F),F===r.HALF_FLOAT&&(ie=r.RG16F),F===r.UNSIGNED_BYTE&&(ie=r.RG8)),g===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(ie=r.RG8UI),F===r.UNSIGNED_SHORT&&(ie=r.RG16UI),F===r.UNSIGNED_INT&&(ie=r.RG32UI),F===r.BYTE&&(ie=r.RG8I),F===r.SHORT&&(ie=r.RG16I),F===r.INT&&(ie=r.RG32I)),g===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(ie=r.RGB8UI),F===r.UNSIGNED_SHORT&&(ie=r.RGB16UI),F===r.UNSIGNED_INT&&(ie=r.RGB32UI),F===r.BYTE&&(ie=r.RGB8I),F===r.SHORT&&(ie=r.RGB16I),F===r.INT&&(ie=r.RGB32I)),g===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(ie=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(ie=r.RGBA16UI),F===r.UNSIGNED_INT&&(ie=r.RGBA32UI),F===r.BYTE&&(ie=r.RGBA8I),F===r.SHORT&&(ie=r.RGBA16I),F===r.INT&&(ie=r.RGBA32I)),g===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(ie=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(ie=r.R11F_G11F_B10F)),g===r.RGBA){const Pe=he?eu:wt.getTransfer(Z);F===r.FLOAT&&(ie=r.RGBA32F),F===r.HALF_FLOAT&&(ie=r.RGBA16F),F===r.UNSIGNED_BYTE&&(ie=Pe===Vt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function U(w,g){let F;return w?g===null||g===Zi||g===el?F=r.DEPTH24_STENCIL8:g===Li?F=r.DEPTH32F_STENCIL8:g===$o&&(F=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Zi||g===el?F=r.DEPTH_COMPONENT24:g===Li?F=r.DEPTH_COMPONENT32F:g===$o&&(F=r.DEPTH_COMPONENT16),F}function I(w,g){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nn&&w.minFilter!==mn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function z(w){const g=w.target;g.removeEventListener("dispose",z),K(g),g.isVideoTexture&&_.delete(g)}function B(w){const g=w.target;g.removeEventListener("dispose",B),D(g)}function K(w){const g=s.get(w);if(g.__webglInit===void 0)return;const F=w.source,Z=y.get(F);if(Z){const he=Z[g.__cacheKey];he.usedTimes--,he.usedTimes===0&&C(w),Object.keys(Z).length===0&&y.delete(F)}s.remove(w)}function C(w){const g=s.get(w);r.deleteTexture(g.__webglTexture);const F=w.source,Z=y.get(F);delete Z[g.__cacheKey],h.memory.textures--}function D(w){const g=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let he=0;he<g.__webglFramebuffer[Z].length;he++)r.deleteFramebuffer(g.__webglFramebuffer[Z][he]);else r.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)r.deleteFramebuffer(g.__webglFramebuffer[Z]);else r.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&r.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&r.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=w.textures;for(let Z=0,he=F.length;Z<he;Z++){const ie=s.get(F[Z]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),h.memory.textures--),s.remove(F[Z])}s.remove(w)}let k=0;function oe(){k=0}function j(){const w=k;return w>=l.maxTextures&&at("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),k+=1,w}function ue(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function de(w,g){const F=s.get(w);if(w.isVideoTexture&&Mt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const Z=w.image;if(Z===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(F,w,g);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+g)}function O(w,g){const F=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){ne(F,w,g);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+g)}function G(w,g){const F=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){ne(F,w,g);return}i.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+g)}function te(w,g){const F=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){pe(F,w,g);return}i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+g)}const ye={[yd]:r.REPEAT,[ai]:r.CLAMP_TO_EDGE,[Md]:r.MIRRORED_REPEAT},Se={[Nn]:r.NEAREST,[kM]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[Th]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},N={[YM]:r.NEVER,[JM]:r.ALWAYS,[jM]:r.LESS,[_p]:r.LEQUAL,[ZM]:r.EQUAL,[vp]:r.GEQUAL,[KM]:r.GREATER,[QM]:r.NOTEQUAL};function ae(w,g){if(g.type===Li&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===mn||g.magFilter===Th||g.magFilter===yc||g.magFilter===Ps||g.minFilter===mn||g.minFilter===Th||g.minFilter===yc||g.minFilter===Ps)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,ye[g.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ye[g.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ye[g.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,Se[g.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,N[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nn||g.minFilter!==yc&&g.minFilter!==Ps||g.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||s.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,l.getMaxAnisotropy())),s.get(g).__currentAnisotropy=g.anisotropy}}}function _e(w,g){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",z));const Z=g.source;let he=y.get(Z);he===void 0&&(he={},y.set(Z,he));const ie=ue(g);if(ie!==w.__cacheKey){he[ie]===void 0&&(he[ie]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,F=!0),he[ie].usedTimes++;const Pe=he[w.__cacheKey];Pe!==void 0&&(he[w.__cacheKey].usedTimes--,Pe.usedTimes===0&&C(g)),w.__cacheKey=ie,w.__webglTexture=he[ie].texture}return F}function Ae(w,g,F){return Math.floor(Math.floor(w/F)/g)}function ze(w,g,F,Z){const ie=w.updateRanges;if(ie.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,g.width,g.height,F,Z,g.data);else{ie.sort((Ee,be)=>Ee.start-be.start);let Pe=0;for(let Ee=1;Ee<ie.length;Ee++){const be=ie[Pe],Ie=ie[Ee],Be=be.start+be.count,De=Ae(Ie.start,g.width,4),ft=Ae(be.start,g.width,4);Ie.start<=Be+1&&De===ft&&Ae(Ie.start+Ie.count-1,g.width,4)===De?be.count=Math.max(be.count,Ie.start+Ie.count-be.start):(++Pe,ie[Pe]=Ie)}ie.length=Pe+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Ve=r.getParameter(r.UNPACK_SKIP_PIXELS),Je=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,be=ie.length;Ee<be;Ee++){const Ie=ie[Ee],Be=Math.floor(Ie.start/4),De=Math.ceil(Ie.count/4),ft=Be%g.width,W=Math.floor(Be/g.width),Ne=De,Te=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ft,W,Ne,Te,F,Z,g.data)}w.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,Je)}}function ne(w,g,F){let Z=r.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=r.TEXTURE_3D);const he=_e(w,g),ie=g.source;i.bindTexture(Z,w.__webglTexture,r.TEXTURE0+F);const Pe=s.get(ie);if(ie.version!==Pe.__version||he===!0){i.activeTexture(r.TEXTURE0+F);const Ce=wt.getPrimaries(wt.workingColorSpace),Ve=g.colorSpace===as?null:wt.getPrimaries(g.colorSpace),Je=g.colorSpace===as||Ce===Ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Ee=b(g.image,!1,l.maxTextureSize);Ee=Rt(g,Ee);const be=c.convert(g.format,g.colorSpace),Ie=c.convert(g.type);let Be=L(g.internalFormat,be,Ie,g.colorSpace,g.isVideoTexture);ae(Z,g);let De;const ft=g.mipmaps,W=g.isVideoTexture!==!0,Ne=Pe.__version===void 0||he===!0,Te=ie.dataReady,Fe=I(g,Ee);if(g.isDepthTexture)Be=U(g.format===Bs,g.type),Ne&&(W?i.texStorage2D(r.TEXTURE_2D,1,Be,Ee.width,Ee.height):i.texImage2D(r.TEXTURE_2D,0,Be,Ee.width,Ee.height,0,be,Ie,null));else if(g.isDataTexture)if(ft.length>0){W&&Ne&&i.texStorage2D(r.TEXTURE_2D,Fe,Be,ft[0].width,ft[0].height);for(let Me=0,xe=ft.length;Me<xe;Me++)De=ft[Me],W?Te&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,De.width,De.height,be,Ie,De.data):i.texImage2D(r.TEXTURE_2D,Me,Be,De.width,De.height,0,be,Ie,De.data);g.generateMipmaps=!1}else W?(Ne&&i.texStorage2D(r.TEXTURE_2D,Fe,Be,Ee.width,Ee.height),Te&&ze(g,Ee,be,Ie)):i.texImage2D(r.TEXTURE_2D,0,Be,Ee.width,Ee.height,0,be,Ie,Ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){W&&Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Be,ft[0].width,ft[0].height,Ee.depth);for(let Me=0,xe=ft.length;Me<xe;Me++)if(De=ft[Me],g.format!==xi)if(be!==null)if(W){if(Te)if(g.layerUpdates.size>0){const we=V0(De.width,De.height,g.format,g.type);for(const it of g.layerUpdates){const It=De.data.subarray(it*we/De.data.BYTES_PER_ELEMENT,(it+1)*we/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,it,De.width,De.height,1,be,It)}g.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Ee.depth,be,De.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Be,De.width,De.height,Ee.depth,0,De.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Te&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Ee.depth,be,Ie,De.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Me,Be,De.width,De.height,Ee.depth,0,be,Ie,De.data)}else{W&&Ne&&i.texStorage2D(r.TEXTURE_2D,Fe,Be,ft[0].width,ft[0].height);for(let Me=0,xe=ft.length;Me<xe;Me++)De=ft[Me],g.format!==xi?be!==null?W?Te&&i.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,De.width,De.height,be,De.data):i.compressedTexImage2D(r.TEXTURE_2D,Me,Be,De.width,De.height,0,De.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Te&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,De.width,De.height,be,Ie,De.data):i.texImage2D(r.TEXTURE_2D,Me,Be,De.width,De.height,0,be,Ie,De.data)}else if(g.isDataArrayTexture)if(W){if(Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Be,Ee.width,Ee.height,Ee.depth),Te)if(g.layerUpdates.size>0){const Me=V0(Ee.width,Ee.height,g.format,g.type);for(const xe of g.layerUpdates){const we=Ee.data.subarray(xe*Me/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,Ee.width,Ee.height,1,be,Ie,we)}g.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,Ie,Ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,Ee.width,Ee.height,Ee.depth,0,be,Ie,Ee.data);else if(g.isData3DTexture)W?(Ne&&i.texStorage3D(r.TEXTURE_3D,Fe,Be,Ee.width,Ee.height,Ee.depth),Te&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,Ie,Ee.data)):i.texImage3D(r.TEXTURE_3D,0,Be,Ee.width,Ee.height,Ee.depth,0,be,Ie,Ee.data);else if(g.isFramebufferTexture){if(Ne)if(W)i.texStorage2D(r.TEXTURE_2D,Fe,Be,Ee.width,Ee.height);else{let Me=Ee.width,xe=Ee.height;for(let we=0;we<Fe;we++)i.texImage2D(r.TEXTURE_2D,we,Be,Me,xe,0,be,Ie,null),Me>>=1,xe>>=1}}else if(ft.length>0){if(W&&Ne){const Me=qe(ft[0]);i.texStorage2D(r.TEXTURE_2D,Fe,Be,Me.width,Me.height)}for(let Me=0,xe=ft.length;Me<xe;Me++)De=ft[Me],W?Te&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,be,Ie,De):i.texImage2D(r.TEXTURE_2D,Me,Be,be,Ie,De);g.generateMipmaps=!1}else if(W){if(Ne){const Me=qe(Ee);i.texStorage2D(r.TEXTURE_2D,Fe,Be,Me.width,Me.height)}Te&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,be,Ie,Ee)}else i.texImage2D(r.TEXTURE_2D,0,Be,be,Ie,Ee);M(g)&&v(Z),Pe.__version=ie.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function pe(w,g,F){if(g.image.length!==6)return;const Z=_e(w,g),he=g.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+F);const ie=s.get(he);if(he.version!==ie.__version||Z===!0){i.activeTexture(r.TEXTURE0+F);const Pe=wt.getPrimaries(wt.workingColorSpace),Ce=g.colorSpace===as?null:wt.getPrimaries(g.colorSpace),Ve=g.colorSpace===as||Pe===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Je=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,be=[];for(let xe=0;xe<6;xe++)!Je&&!Ee?be[xe]=b(g.image[xe],!0,l.maxCubemapSize):be[xe]=Ee?g.image[xe].image:g.image[xe],be[xe]=Rt(g,be[xe]);const Ie=be[0],Be=c.convert(g.format,g.colorSpace),De=c.convert(g.type),ft=L(g.internalFormat,Be,De,g.colorSpace),W=g.isVideoTexture!==!0,Ne=ie.__version===void 0||Z===!0,Te=he.dataReady;let Fe=I(g,Ie);ae(r.TEXTURE_CUBE_MAP,g);let Me;if(Je){W&&Ne&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ft,Ie.width,Ie.height);for(let xe=0;xe<6;xe++){Me=be[xe].mipmaps;for(let we=0;we<Me.length;we++){const it=Me[we];g.format!==xi?Be!==null?W?Te&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,it.width,it.height,Be,it.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,ft,it.width,it.height,0,it.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,it.width,it.height,Be,De,it.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,ft,it.width,it.height,0,Be,De,it.data)}}}else{if(Me=g.mipmaps,W&&Ne){Me.length>0&&Fe++;const xe=qe(be[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ft,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ee){W?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,be[xe].width,be[xe].height,Be,De,be[xe].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ft,be[xe].width,be[xe].height,0,Be,De,be[xe].data);for(let we=0;we<Me.length;we++){const It=Me[we].image[xe].image;W?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,It.width,It.height,Be,De,It.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,ft,It.width,It.height,0,Be,De,It.data)}}else{W?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Be,De,be[xe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ft,Be,De,be[xe]);for(let we=0;we<Me.length;we++){const it=Me[we];W?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,Be,De,it.image[xe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,ft,Be,De,it.image[xe])}}}M(g)&&v(r.TEXTURE_CUBE_MAP),ie.__version=he.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Re(w,g,F,Z,he,ie){const Pe=c.convert(F.format,F.colorSpace),Ce=c.convert(F.type),Ve=L(F.internalFormat,Pe,Ce,F.colorSpace),Je=s.get(g),Ee=s.get(F);if(Ee.__renderTarget=g,!Je.__hasExternalTextures){const be=Math.max(1,g.width>>ie),Ie=Math.max(1,g.height>>ie);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?i.texImage3D(he,ie,Ve,be,Ie,g.depth,0,Pe,Ce,null):i.texImage2D(he,ie,Ve,be,Ie,0,Pe,Ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),qt(g)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,he,Ee.__webglTexture,0,V(g)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,he,Ee.__webglTexture,ie),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(w,g,F){if(r.bindRenderbuffer(r.RENDERBUFFER,w),g.depthBuffer){const Z=g.depthTexture,he=Z&&Z.isDepthTexture?Z.type:null,ie=U(g.stencilBuffer,he),Pe=g.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qt(g)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(g),ie,g.width,g.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(g),ie,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,ie,g.width,g.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,w)}else{const Z=g.textures;for(let he=0;he<Z.length;he++){const ie=Z[he],Pe=c.convert(ie.format,ie.colorSpace),Ce=c.convert(ie.type),Ve=L(ie.internalFormat,Pe,Ce,ie.colorSpace);qt(g)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(g),Ve,g.width,g.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(g),Ve,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,Ve,g.width,g.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(w,g,F){const Z=g.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=s.get(g.depthTexture);if(he.__renderTarget=g,(!he.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z){if(he.__webglInit===void 0&&(he.__webglInit=!0,g.depthTexture.addEventListener("dispose",z)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ae(r.TEXTURE_CUBE_MAP,g.depthTexture);const Je=c.convert(g.depthTexture.format),Ee=c.convert(g.depthTexture.type);let be;g.depthTexture.format===ba?be=r.DEPTH_COMPONENT24:g.depthTexture.format===Bs&&(be=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,be,g.width,g.height,0,Je,Ee,null)}}else de(g.depthTexture,0);const ie=he.__webglTexture,Pe=V(g),Ce=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,Ve=g.depthTexture.format===Bs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(g.depthTexture.format===ba)qt(g)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ve,Ce,ie,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,Ve,Ce,ie,0);else if(g.depthTexture.format===Bs)qt(g)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ve,Ce,ie,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,Ve,Ce,ie,0);else throw new Error("Unknown depthTexture format")}function mt(w){const g=s.get(w),F=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const he=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",he)};Z.addEventListener("dispose",he),g.__depthDisposeCallback=he}g.__boundDepthTexture=Z}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)Ge(g.__webglFramebuffer[Z],w,Z);else{const Z=w.texture.mipmaps;Z&&Z.length>0?Ge(g.__webglFramebuffer[0],w,0):Ge(g.__webglFramebuffer,w,0)}else if(F){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(i.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=r.createRenderbuffer(),ke(g.__webglDepthbuffer[Z],w,!1);else{const he=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,ie)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?i.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=r.createRenderbuffer(),ke(g.__webglDepthbuffer,w,!1);else{const he=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,ie)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(w,g,F){const Z=s.get(w);g!==void 0&&Re(Z.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&mt(w)}function _t(w){const g=w.texture,F=s.get(w),Z=s.get(g);w.addEventListener("dispose",B);const he=w.textures,ie=w.isWebGLCubeRenderTarget===!0,Pe=he.length>1;if(Pe||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=g.version,h.memory.textures++),ie){F.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[Ce]=[];for(let Ve=0;Ve<g.mipmaps.length;Ve++)F.__webglFramebuffer[Ce][Ve]=r.createFramebuffer()}else F.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let Ce=0;Ce<g.mipmaps.length;Ce++)F.__webglFramebuffer[Ce]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let Ce=0,Ve=he.length;Ce<Ve;Ce++){const Je=s.get(he[Ce]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),h.memory.textures++)}if(w.samples>0&&qt(w)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Ce=0;Ce<he.length;Ce++){const Ve=he[Ce];F.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[Ce]);const Je=c.convert(Ve.format,Ve.colorSpace),Ee=c.convert(Ve.type),be=L(Ve.internalFormat,Je,Ee,Ve.colorSpace,w.isXRRenderTarget===!0),Ie=V(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,be,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,F.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(F.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(r.TEXTURE_CUBE_MAP,g);for(let Ce=0;Ce<6;Ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ve=0;Ve<g.mipmaps.length;Ve++)Re(F.__webglFramebuffer[Ce][Ve],w,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ve);else Re(F.__webglFramebuffer[Ce],w,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);M(g)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let Ce=0,Ve=he.length;Ce<Ve;Ce++){const Je=he[Ce],Ee=s.get(Je);let be=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(be=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(be,Ee.__webglTexture),ae(be,Je),Re(F.__webglFramebuffer,w,Je,r.COLOR_ATTACHMENT0+Ce,be,0),M(Je)&&v(be)}i.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ce=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ce,Z.__webglTexture),ae(Ce,g),g.mipmaps&&g.mipmaps.length>0)for(let Ve=0;Ve<g.mipmaps.length;Ve++)Re(F.__webglFramebuffer[Ve],w,g,r.COLOR_ATTACHMENT0,Ce,Ve);else Re(F.__webglFramebuffer,w,g,r.COLOR_ATTACHMENT0,Ce,0);M(g)&&v(Ce),i.unbindTexture()}w.depthBuffer&&mt(w)}function gt(w){const g=w.textures;for(let F=0,Z=g.length;F<Z;F++){const he=g[F];if(M(he)){const ie=P(w),Pe=s.get(he).__webglTexture;i.bindTexture(ie,Pe),v(ie),i.unbindTexture()}}}const At=[],st=[];function Jt(w){if(w.samples>0){if(qt(w)===!1){const g=w.textures,F=w.width,Z=w.height;let he=r.COLOR_BUFFER_BIT;const ie=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(w),Ce=g.length>1;if(Ce)for(let Je=0;Je<g.length;Je++)i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ve=w.texture.mipmaps;Ve&&Ve.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Je=0;Je<g.length;Je++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Je]);const Ee=s.get(g[Je]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,F,Z,0,0,F,Z,he,r.NEAREST),m===!0&&(At.length=0,st.length=0,At.push(r.COLOR_ATTACHMENT0+Je),w.depthBuffer&&w.resolveDepthBuffer===!1&&(At.push(ie),st.push(ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,st)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,At))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Je=0;Je<g.length;Je++){i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Je]);const Ee=s.get(g[Je]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,Ee,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const g=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[g])}}}function V(w){return Math.min(l.maxSamples,w.samples)}function qt(w){const g=s.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Mt(w){const g=h.render.frame;_.get(w)!==g&&(_.set(w,g),w.update())}function Rt(w,g){const F=w.colorSpace,Z=w.format,he=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Hr&&F!==as&&(wt.getTransfer(F)===Vt?(Z!==xi||he!==vi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",F)),g}function qe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=oe,this.setTexture2D=de,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=te,this.rebindTextures=Qt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function yR(r,e){function i(s,l=as){let c;const h=wt.getTransfer(l);if(s===vi)return r.UNSIGNED_BYTE;if(s===hp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===dp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Fv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Iv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Pv)return r.BYTE;if(s===Bv)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===fp)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===Li)return r.FLOAT;if(s===Ki)return r.HALF_FLOAT;if(s===zv)return r.ALPHA;if(s===Hv)return r.RGB;if(s===xi)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===Bs)return r.DEPTH_STENCIL;if(s===Gv)return r.RED;if(s===pp)return r.RED_INTEGER;if(s===zr)return r.RG;if(s===mp)return r.RG_INTEGER;if(s===gp)return r.RGBA_INTEGER;if(s===Zc||s===Kc||s===Qc||s===Jc)if(h===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ed||s===bd||s===Td||s===Ad)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Td)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Nd||s===Ld)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Rd||s===Cd)return h===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===wd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Dd)return c.COMPRESSED_R11_EAC;if(s===Ud)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Nd)return c.COMPRESSED_RG11_EAC;if(s===Ld)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Od||s===Pd||s===Bd||s===Fd||s===Id||s===zd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===Yd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Od)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Id)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jd||s===Zd||s===Kd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===jd)return h===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qd||s===Jd||s===$d||s===ep)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Qd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$d)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const MR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ER=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new tx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Qi({vertexShader:MR,fragmentShader:ER,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Si(new Fs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TR extends kr{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,y=null,E=null,T=null;const b=typeof XRWebGLBinding<"u",M=new bR,v={},P=i.getContextAttributes();let L=null,U=null;const I=[],z=[],B=new lt;let K=null;const C=new Ui;C.viewport=new an;const D=new Ui;D.viewport=new an;const k=[C,D],oe=new OE;let j=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=I[ne];return pe===void 0&&(pe=new jh,I[ne]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=I[ne];return pe===void 0&&(pe=new jh,I[ne]=pe),pe.getGripSpace()},this.getHand=function(ne){let pe=I[ne];return pe===void 0&&(pe=new jh,I[ne]=pe),pe.getHandSpace()};function de(ne){const pe=z.indexOf(ne.inputSource);if(pe===-1)return;const Re=I[pe];Re!==void 0&&(Re.update(ne.inputSource,ne.frame,p||h),Re.dispatchEvent({type:ne.type,data:ne.inputSource}))}function O(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",G);for(let ne=0;ne<I.length;ne++){const pe=z[ne];pe!==null&&(z[ne]=null,I[ne].disconnect(pe))}j=null,ue=null,M.reset();for(const ne in v)delete v[ne];e.setRenderTarget(L),E=null,y=null,x=null,l=null,U=null,ze.stop(),s.isPresenting=!1,e.setPixelRatio(K),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return x===null&&b&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",O),l.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(B),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,ke=null,Ge=null;P.depth&&(Ge=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=P.stencil?Bs:ba,ke=P.stencil?el:Zi);const mt={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};x=this.getBinding(),y=x.createProjectionLayer(mt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new Oi(y.textureWidth,y.textureHeight,{format:xi,type:vi,depthTexture:new nl(y.textureWidth,y.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Re={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Oi(E.framebufferWidth,E.framebufferHeight,{format:xi,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),ze.setContext(l),ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(ne){for(let pe=0;pe<ne.removed.length;pe++){const Re=ne.removed[pe],ke=z.indexOf(Re);ke>=0&&(z[ke]=null,I[ke].disconnect(Re))}for(let pe=0;pe<ne.added.length;pe++){const Re=ne.added[pe];let ke=z.indexOf(Re);if(ke===-1){for(let mt=0;mt<I.length;mt++)if(mt>=z.length){z.push(Re),ke=mt;break}else if(z[mt]===null){z[mt]=Re,ke=mt;break}if(ke===-1)break}const Ge=I[ke];Ge&&Ge.connect(Re)}}const te=new le,ye=new le;function Se(ne,pe,Re){te.setFromMatrixPosition(pe.matrixWorld),ye.setFromMatrixPosition(Re.matrixWorld);const ke=te.distanceTo(ye),Ge=pe.projectionMatrix.elements,mt=Re.projectionMatrix.elements,Qt=Ge[14]/(Ge[10]-1),_t=Ge[14]/(Ge[10]+1),gt=(Ge[9]+1)/Ge[5],At=(Ge[9]-1)/Ge[5],st=(Ge[8]-1)/Ge[0],Jt=(mt[8]+1)/mt[0],V=Qt*st,qt=Qt*Jt,Mt=ke/(-st+Jt),Rt=Mt*-st;if(pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Rt),ne.translateZ(Mt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ge[10]===-1)ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const qe=Qt+Mt,w=_t+Mt,g=V-Rt,F=qt+(ke-Rt),Z=gt*_t/w*qe,he=At*_t/w*qe;ne.projectionMatrix.makePerspective(g,F,Z,he,qe,w),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function N(ne,pe){pe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let pe=ne.near,Re=ne.far;M.texture!==null&&(M.depthNear>0&&(pe=M.depthNear),M.depthFar>0&&(Re=M.depthFar)),oe.near=D.near=C.near=pe,oe.far=D.far=C.far=Re,(j!==oe.near||ue!==oe.far)&&(l.updateRenderState({depthNear:oe.near,depthFar:oe.far}),j=oe.near,ue=oe.far),oe.layers.mask=ne.layers.mask|6,C.layers.mask=oe.layers.mask&3,D.layers.mask=oe.layers.mask&5;const ke=ne.parent,Ge=oe.cameras;N(oe,ke);for(let mt=0;mt<Ge.length;mt++)N(Ge[mt],ke);Ge.length===2?Se(oe,C,D):oe.projectionMatrix.copy(C.projectionMatrix),ae(ne,oe,ke)};function ae(ne,pe,Re){Re===null?ne.matrix.copy(pe.matrixWorld):(ne.matrix.copy(Re.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=tp*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(!(y===null&&E===null))return m},this.setFoveation=function(ne){m=ne,y!==null&&(y.fixedFoveation=ne),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(oe)},this.getCameraTexture=function(ne){return v[ne]};let _e=null;function Ae(ne,pe){if(_=pe.getViewerPose(p||h),T=pe,_!==null){const Re=_.views;E!==null&&(e.setRenderTargetFramebuffer(U,E.framebuffer),e.setRenderTarget(U));let ke=!1;Re.length!==oe.cameras.length&&(oe.cameras.length=0,ke=!0);for(let _t=0;_t<Re.length;_t++){const gt=Re[_t];let At=null;if(E!==null)At=E.getViewport(gt);else{const Jt=x.getViewSubImage(y,gt);At=Jt.viewport,_t===0&&(e.setRenderTargetTextures(U,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(U))}let st=k[_t];st===void 0&&(st=new Ui,st.layers.enable(_t),st.viewport=new an,k[_t]=st),st.matrix.fromArray(gt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(gt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(At.x,At.y,At.width,At.height),_t===0&&(oe.matrix.copy(st.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),ke===!0&&oe.cameras.push(st)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){x=s.getBinding();const _t=x.getDepthInformation(Re[0]);_t&&_t.isValid&&_t.texture&&M.init(_t,l.renderState)}if(Ge&&Ge.includes("camera-access")&&b){e.state.unbindTexture(),x=s.getBinding();for(let _t=0;_t<Re.length;_t++){const gt=Re[_t].camera;if(gt){let At=v[gt];At||(At=new tx,v[gt]=At);const st=x.getCameraImage(gt);At.sourceTexture=st}}}}for(let Re=0;Re<I.length;Re++){const ke=z[Re],Ge=I[Re];ke!==null&&Ge!==void 0&&Ge.update(ke,pe,p||h)}_e&&_e(ne,pe),pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pe}),T=null}const ze=new ix;ze.setAnimationLoop(Ae),this.setAnimationLoop=function(ne){_e=ne},this.dispose=function(){}}}const Us=new Ta,AR=new on;function RR(r,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Kv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,P,L,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),x(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),y(M,v),v.isMeshPhysicalMaterial&&E(M,v,U)):v.isMeshMatcapMaterial?(c(M,v),T(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),b(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,P,L):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Yn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Yn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const P=e.get(v),L=P.envMap,U=P.envMapRotation;L&&(M.envMap.value=L,Us.copy(U),Us.x*=-1,Us.y*=-1,Us.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),M.envMapRotation.value.setFromMatrix4(AR.makeRotationFromEuler(Us)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,P,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*P,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function E(M,v,P){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,v){v.matcap&&(M.matcap.value=v.matcap)}function b(M,v){const P=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function CR(r,e,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,L){const U=L.program;s.uniformBlockBinding(P,U)}function p(P,L){let U=l[P.id];U===void 0&&(T(P),U=_(P),l[P.id]=U,P.addEventListener("dispose",M));const I=L.program;s.updateUBOMapping(P,I);const z=e.render.frame;c[P.id]!==z&&(y(P),c[P.id]=z)}function _(P){const L=x();P.__bindingPointIndex=L;const U=r.createBuffer(),I=P.__size,z=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,I,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const L=l[P.id],U=P.uniforms,I=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,B=U.length;z<B;z++){const K=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,D=K.length;C<D;C++){const k=K[C];if(E(k,z,C,I)===!0){const oe=k.__offset,j=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let de=0;de<j.length;de++){const O=j[de],G=b(O);typeof O=="number"||typeof O=="boolean"?(k.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,oe+ue,k.__data)):O.isMatrix3?(k.__data[0]=O.elements[0],k.__data[1]=O.elements[1],k.__data[2]=O.elements[2],k.__data[3]=0,k.__data[4]=O.elements[3],k.__data[5]=O.elements[4],k.__data[6]=O.elements[5],k.__data[7]=0,k.__data[8]=O.elements[6],k.__data[9]=O.elements[7],k.__data[10]=O.elements[8],k.__data[11]=0):(O.toArray(k.__data,ue),ue+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,oe,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(P,L,U,I){const z=P.value,B=L+"_"+U;if(I[B]===void 0)return typeof z=="number"||typeof z=="boolean"?I[B]=z:I[B]=z.clone(),!0;{const K=I[B];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return I[B]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function T(P){const L=P.uniforms;let U=0;const I=16;for(let B=0,K=L.length;B<K;B++){const C=Array.isArray(L[B])?L[B]:[L[B]];for(let D=0,k=C.length;D<k;D++){const oe=C[D],j=Array.isArray(oe.value)?oe.value:[oe.value];for(let ue=0,de=j.length;ue<de;ue++){const O=j[ue],G=b(O),te=U%I,ye=te%G.boundary,Se=te+ye;U+=ye,Se!==0&&I-Se<G.storage&&(U+=I-Se),oe.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=U,U+=G.storage}}}const z=U%I;return z>0&&(U+=I-z),P.__size=U,P.__cache={},this}function b(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",P),L}function M(P){const L=P.target;L.removeEventListener("dispose",M);const U=h.indexOf(L.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const wR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function DR(){return ki===null&&(ki=new $v(wR,16,16,zr,Ki),ki.name="DFG_LUT",ki.minFilter=mn,ki.magFilter=mn,ki.wrapS=ai,ki.wrapT=ai,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class UR{constructor(e={}){const{canvas:i=$M(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1,outputBufferType:E=vi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const b=E,M=new Set([gp,mp,pp]),v=new Set([vi,Zi,$o,el,hp,dp]),P=new Uint32Array(4),L=new Int32Array(4);let U=null,I=null;const z=[],B=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=gi;let k=0,oe=0,j=null,ue=-1,de=null;const O=new an,G=new an;let te=null;const ye=new Bt(0);let Se=0,N=i.width,ae=i.height,_e=1,Ae=null,ze=null;const ne=new an(0,0,N,ae),pe=new an(0,0,N,ae);let Re=!1;const ke=new ex;let Ge=!1,mt=!1;const Qt=new on,_t=new le,gt=new an,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Jt(){return j===null?_e:1}let V=s;function qt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${up}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),V===null){const q="webgl2";if(V=qt(q,R),V===null)throw qt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Nt("WebGLRenderer: "+R.message),R}let Mt,Rt,qe,w,g,F,Z,he,ie,Pe,Ce,Ve,Je,Ee,be,Ie,Be,De,ft,W,Ne,Te,Fe,Me;function xe(){Mt=new DA(V),Mt.init(),Te=new yR(V,Mt),Rt=new yA(V,Mt,e,Te),qe=new xR(V,Mt),Rt.reversedDepthBuffer&&y&&qe.buffers.depth.setReversed(!0),w=new LA(V),g=new aR,F=new SR(V,Mt,qe,g,Rt,Te,w),Z=new EA(C),he=new wA(C),ie=new FE(V),Fe=new xA(V,ie),Pe=new UA(V,ie,w,Fe),Ce=new PA(V,Pe,ie,w),ft=new OA(V,Rt,F),Ie=new MA(g),Ve=new iR(C,Z,he,Mt,Rt,Fe,Ie),Je=new RR(C,g),Ee=new rR,be=new hR(Mt),De=new vA(C,Z,he,qe,Ce,T,m),Be=new _R(C,Ce,Rt),Me=new CR(V,w,Rt,qe),W=new SA(V,Mt,w),Ne=new NA(V,Mt,w),w.programs=Ve.programs,C.capabilities=Rt,C.extensions=Mt,C.properties=g,C.renderLists=Ee,C.shadowMap=Be,C.state=qe,C.info=w}xe(),b!==vi&&(K=new FA(b,i.width,i.height,l,c));const we=new TR(C,V);this.xr=we,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(N,ae,!1))},this.getSize=function(R){return R.set(N,ae)},this.setSize=function(R,q,ce=!0){if(we.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,ae=q,i.width=Math.floor(R*_e),i.height=Math.floor(q*_e),ce===!0&&(i.style.width=R+"px",i.style.height=q+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(N*_e,ae*_e).floor()},this.setDrawingBufferSize=function(R,q,ce){N=R,ae=q,_e=ce,i.width=Math.floor(R*ce),i.height=Math.floor(q*ce),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(b===vi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,q,ce,se){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,q,ce,se),qe.viewport(O.copy(ne).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(pe)},this.setScissor=function(R,q,ce,se){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,q,ce,se),qe.scissor(G.copy(pe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(R){qe.setScissorTest(Re=R)},this.setOpaqueSort=function(R){Ae=R},this.setTransparentSort=function(R){ze=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ce=!0){let se=0;if(R){let Q=!1;if(j!==null){const Ue=j.texture.format;Q=M.has(Ue)}if(Q){const Ue=j.texture.type,He=v.has(Ue),Le=De.getClearColor(),Xe=De.getClearAlpha(),Ye=Le.r,$e=Le.g,je=Le.b;He?(P[0]=Ye,P[1]=$e,P[2]=je,P[3]=Xe,V.clearBufferuiv(V.COLOR,0,P)):(L[0]=Ye,L[1]=$e,L[2]=je,L[3]=Xe,V.clearBufferiv(V.COLOR,0,L))}else se|=V.COLOR_BUFFER_BIT}q&&(se|=V.DEPTH_BUFFER_BIT),ce&&(se|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),De.dispose(),Ee.dispose(),be.dispose(),g.dispose(),Z.dispose(),he.dispose(),Ce.dispose(),Fe.dispose(),Me.dispose(),Ve.dispose(),we.dispose(),we.removeEventListener("sessionstart",Hs),we.removeEventListener("sessionend",Yr),Ii.stop()};function it(R){R.preventDefault(),S0("WebGLRenderer: Context Lost."),D=!0}function It(){S0("WebGLRenderer: Context Restored."),D=!1;const R=w.autoReset,q=Be.enabled,ce=Be.autoUpdate,se=Be.needsUpdate,Q=Be.type;xe(),w.autoReset=R,Be.enabled=q,Be.autoUpdate=ce,Be.needsUpdate=se,Be.type=Q}function Ct(R){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ln(R){const q=R.target;q.removeEventListener("dispose",Ln),yi(q)}function yi(R){ll(R),g.remove(R)}function ll(R){const q=g.get(R).programs;q!==void 0&&(q.forEach(function(ce){Ve.releaseProgram(ce)}),R.isShaderMaterial&&Ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ce,se,Q,Ue){q===null&&(q=At);const He=Q.isMesh&&Q.matrixWorld.determinant()<0,Le=ls(R,q,ce,se,Q);qe.setMaterial(se,He);let Xe=ce.index,Ye=1;if(se.wireframe===!0){if(Xe=Pe.getWireframeAttribute(ce),Xe===void 0)return;Ye=2}const $e=ce.drawRange,je=ce.attributes.position;let et=$e.start*Ye,Lt=($e.start+$e.count)*Ye;Ue!==null&&(et=Math.max(et,Ue.start*Ye),Lt=Math.min(Lt,(Ue.start+Ue.count)*Ye)),Xe!==null?(et=Math.max(et,0),Lt=Math.min(Lt,Xe.count)):je!=null&&(et=Math.max(et,0),Lt=Math.min(Lt,je.count));const $t=Lt-et;if($t<0||$t===1/0)return;Fe.setup(Q,se,Le,ce,Xe);let jt,Ft=W;if(Xe!==null&&(jt=ie.get(Xe),Ft=Ne,Ft.setIndex(jt)),Q.isMesh)se.wireframe===!0?(qe.setLineWidth(se.wireframeLinewidth*Jt()),Ft.setMode(V.LINES)):Ft.setMode(V.TRIANGLES);else if(Q.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),qe.setLineWidth(Ke*Jt()),Q.isLineSegments?Ft.setMode(V.LINES):Q.isLineLoop?Ft.setMode(V.LINE_LOOP):Ft.setMode(V.LINE_STRIP)}else Q.isPoints?Ft.setMode(V.POINTS):Q.isSprite&&Ft.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ke=Q._multiDrawStarts,Ot=Q._multiDrawCounts,rt=Q._multiDrawCount,En=Xe?ie.get(Xe).bytesPerElement:1,Ji=g.get(se).currentProgram.getUniforms();for(let bn=0;bn<rt;bn++)Ji.setValue(V,"_gl_DrawID",bn),Ft.render(Ke[bn]/En,Ot[bn])}else if(Q.isInstancedMesh)Ft.renderInstances(et,$t,Q.count);else if(ce.isInstancedBufferGeometry){const Ke=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ot=Math.min(ce.instanceCount,Ke);Ft.renderInstances(et,$t,Ot)}else Ft.render(et,$t)};function Wr(R,q,ce){R.transparent===!0&&R.side===ya&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,Vs(R,q,ce),R.side=os,R.needsUpdate=!0,Vs(R,q,ce),R.side=ya):Vs(R,q,ce)}this.compile=function(R,q,ce=null){ce===null&&(ce=R),I=be.get(ce),I.init(q),B.push(I),ce.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),R!==ce&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights();const se=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const Le=Ue[He];Wr(Le,ce,Q),se.add(Le)}else Wr(Ue,ce,Q),se.add(Ue)}),I=B.pop(),se},this.compileAsync=function(R,q,ce=null){const se=this.compile(R,q,ce);return new Promise(Q=>{function Ue(){if(se.forEach(function(He){g.get(He).currentProgram.isReady()&&se.delete(He)}),se.size===0){Q(R);return}setTimeout(Ue,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let zs=null;function qr(R){zs&&zs(R)}function Hs(){Ii.stop()}function Yr(){Ii.start()}const Ii=new ix;Ii.setAnimationLoop(qr),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(R){zs=R,we.setAnimationLoop(R),R===null?Ii.stop():Ii.start()},we.addEventListener("sessionstart",Hs),we.addEventListener("sessionend",Yr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ce=we.enabled===!0&&we.isPresenting===!0,se=K!==null&&(j===null||ce)&&K.begin(C,j);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(q),q=we.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,j),I=be.get(R,B.length),I.init(q),B.push(I),Qt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ke.setFromProjectionMatrix(Qt,Wi,q.reversedDepth),mt=this.localClippingEnabled,Ge=Ie.init(this.clippingPlanes,mt),U=Ee.get(R,z.length),U.init(),z.push(U),we.enabled===!0&&we.isPresenting===!0){const He=C.xr.getDepthSensingMesh();He!==null&&si(He,q,-1/0,C.sortObjects)}si(R,q,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(Ae,ze),st=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,st&&De.addToRenderList(U,R),this.info.render.frame++,Ge===!0&&Ie.beginShadows();const Q=I.state.shadowsArray;if(Be.render(Q,R,q),Ge===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&K.hasRenderPass())===!1){const He=U.opaque,Le=U.transmissive;if(I.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Le.length>0)for(let Ye=0,$e=Xe.length;Ye<$e;Ye++){const je=Xe[Ye];Mn(He,Le,R,je)}st&&De.render(R);for(let Ye=0,$e=Xe.length;Ye<$e;Ye++){const je=Xe[Ye];ln(U,R,je,je.viewport)}}else Le.length>0&&Mn(He,Le,R,q),st&&De.render(R),ln(U,R,q)}j!==null&&oe===0&&(F.updateMultisampleRenderTarget(j),F.updateRenderTargetMipmap(j)),se&&K.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),Fe.resetDefaultState(),ue=-1,de=null,B.pop(),B.length>0?(I=B[B.length-1],Ge===!0&&Ie.setGlobalState(C.clippingPlanes,I.state.camera)):I=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function si(R,q,ce,se){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ke.intersectsSprite(R)){se&&gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Qt);const He=Ce.update(R),Le=R.material;Le.visible&&U.push(R,He,Le,ce,gt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ke.intersectsObject(R))){const He=Ce.update(R),Le=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),gt.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),gt.copy(He.boundingSphere.center)),gt.applyMatrix4(R.matrixWorld).applyMatrix4(Qt)),Array.isArray(Le)){const Xe=He.groups;for(let Ye=0,$e=Xe.length;Ye<$e;Ye++){const je=Xe[Ye],et=Le[je.materialIndex];et&&et.visible&&U.push(R,He,et,ce,gt.z,je)}}else Le.visible&&U.push(R,He,Le,ce,gt.z,null)}}const Ue=R.children;for(let He=0,Le=Ue.length;He<Le;He++)si(Ue[He],q,ce,se)}function ln(R,q,ce,se){const{opaque:Q,transmissive:Ue,transparent:He}=R;I.setupLightsView(ce),Ge===!0&&Ie.setGlobalState(C.clippingPlanes,ce),se&&qe.viewport(O.copy(se)),Q.length>0&&Mi(Q,q,ce),Ue.length>0&&Mi(Ue,q,ce),He.length>0&&Mi(He,q,ce),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Mn(R,q,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[se.id]===void 0){const et=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[se.id]=new Oi(1,1,{generateMipmaps:!0,type:et?Ki:vi,minFilter:Ps,samples:Rt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ue=I.state.transmissionRenderTarget[se.id],He=se.viewport||O;Ue.setSize(He.z*C.transmissionResolutionScale,He.w*C.transmissionResolutionScale);const Le=C.getRenderTarget(),Xe=C.getActiveCubeFace(),Ye=C.getActiveMipmapLevel();C.setRenderTarget(Ue),C.getClearColor(ye),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),st&&De.render(ce);const $e=C.toneMapping;C.toneMapping=Yi;const je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),I.setupLightsView(se),Ge===!0&&Ie.setGlobalState(C.clippingPlanes,se),Mi(R,ce,se),F.updateMultisampleRenderTarget(Ue),F.updateRenderTargetMipmap(Ue),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Lt=0,$t=q.length;Lt<$t;Lt++){const jt=q[Lt],{object:Ft,geometry:Ke,material:Ot,group:rt}=jt;if(Ot.side===ya&&Ft.layers.test(se.layers)){const En=Ot.side;Ot.side=Yn,Ot.needsUpdate=!0,Gs(Ft,ce,se,Ke,Ot,rt),Ot.side=En,Ot.needsUpdate=!0,et=!0}}et===!0&&(F.updateMultisampleRenderTarget(Ue),F.updateRenderTargetMipmap(Ue))}C.setRenderTarget(Le,Xe,Ye),C.setClearColor(ye,Se),je!==void 0&&(se.viewport=je),C.toneMapping=$e}function Mi(R,q,ce){const se=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ue=R.length;Q<Ue;Q++){const He=R[Q],{object:Le,geometry:Xe,group:Ye}=He;let $e=He.material;$e.allowOverride===!0&&se!==null&&($e=se),Le.layers.test(ce.layers)&&Gs(Le,q,ce,Xe,$e,Ye)}}function Gs(R,q,ce,se,Q,Ue){R.onBeforeRender(C,q,ce,se,Q,Ue),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(C,q,ce,se,R,Ue),Q.transparent===!0&&Q.side===ya&&Q.forceSinglePass===!1?(Q.side=Yn,Q.needsUpdate=!0,C.renderBufferDirect(ce,q,se,Q,R,Ue),Q.side=os,Q.needsUpdate=!0,C.renderBufferDirect(ce,q,se,Q,R,Ue),Q.side=ya):C.renderBufferDirect(ce,q,se,Q,R,Ue),R.onAfterRender(C,q,ce,se,Q,Ue)}function Vs(R,q,ce){q.isScene!==!0&&(q=At);const se=g.get(R),Q=I.state.lights,Ue=I.state.shadowsArray,He=Q.state.version,Le=Ve.getParameters(R,Q.state,Ue,q,ce),Xe=Ve.getProgramCacheKey(Le);let Ye=se.programs;se.environment=R.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(R.isMeshStandardMaterial?he:Z).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",Ln),Ye=new Map,se.programs=Ye);let $e=Ye.get(Xe);if($e!==void 0){if(se.currentProgram===$e&&se.lightsStateVersion===He)return jr(R,Le),$e}else Le.uniforms=Ve.getUniforms(R),R.onBeforeCompile(Le,C),$e=Ve.acquireProgram(Le,Xe),Ye.set(Xe,$e),se.uniforms=Le.uniforms;const je=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Ie.uniform),jr(R,Le),se.needsLights=Aa(R),se.lightsStateVersion=He,se.needsLights&&(je.ambientLightColor.value=Q.state.ambient,je.lightProbe.value=Q.state.probe,je.directionalLights.value=Q.state.directional,je.directionalLightShadows.value=Q.state.directionalShadow,je.spotLights.value=Q.state.spot,je.spotLightShadows.value=Q.state.spotShadow,je.rectAreaLights.value=Q.state.rectArea,je.ltc_1.value=Q.state.rectAreaLTC1,je.ltc_2.value=Q.state.rectAreaLTC2,je.pointLights.value=Q.state.point,je.pointLightShadows.value=Q.state.pointShadow,je.hemisphereLights.value=Q.state.hemi,je.directionalShadowMap.value=Q.state.directionalShadowMap,je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,je.spotShadowMap.value=Q.state.spotShadowMap,je.spotLightMatrix.value=Q.state.spotLightMatrix,je.spotLightMap.value=Q.state.spotLightMap,je.pointShadowMap.value=Q.state.pointShadowMap,je.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=$e,se.uniformsList=null,$e}function cl(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=$c.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function jr(R,q){const ce=g.get(R);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function ls(R,q,ce,se,Q){q.isScene!==!0&&(q=At),F.resetTextureUnits();const Ue=q.fog,He=se.isMeshStandardMaterial?q.environment:null,Le=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Hr,Xe=(se.isMeshStandardMaterial?he:Z).get(se.envMap||He),Ye=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,$e=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),je=!!ce.morphAttributes.position,et=!!ce.morphAttributes.normal,Lt=!!ce.morphAttributes.color;let $t=Yi;se.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&($t=C.toneMapping);const jt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ft=jt!==void 0?jt.length:0,Ke=g.get(se),Ot=I.state.lights;if(Ge===!0&&(mt===!0||R!==de)){const An=R===de&&se.id===ue;Ie.setState(se,R,An)}let rt=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ot.state.version||Ke.outputColorSpace!==Le||Q.isBatchedMesh&&Ke.batching===!1||!Q.isBatchedMesh&&Ke.batching===!0||Q.isBatchedMesh&&Ke.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ke.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ke.instancing===!1||!Q.isInstancedMesh&&Ke.instancing===!0||Q.isSkinnedMesh&&Ke.skinning===!1||!Q.isSkinnedMesh&&Ke.skinning===!0||Q.isInstancedMesh&&Ke.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ke.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ke.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ke.instancingMorph===!1&&Q.morphTexture!==null||Ke.envMap!==Xe||se.fog===!0&&Ke.fog!==Ue||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ie.numPlanes||Ke.numIntersection!==Ie.numIntersection)||Ke.vertexAlphas!==Ye||Ke.vertexTangents!==$e||Ke.morphTargets!==je||Ke.morphNormals!==et||Ke.morphColors!==Lt||Ke.toneMapping!==$t||Ke.morphTargetsCount!==Ft)&&(rt=!0):(rt=!0,Ke.__version=se.version);let En=Ke.currentProgram;rt===!0&&(En=Vs(se,q,Q));let Ji=!1,bn=!1,ri=!1;const zt=En.getUniforms(),Tn=Ke.uniforms;if(qe.useProgram(En.program)&&(Ji=!0,bn=!0,ri=!0),se.id!==ue&&(ue=se.id,bn=!0),Ji||de!==R){qe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(V,"projectionMatrix",R.projectionMatrix),zt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Rn=zt.map.cameraPosition;Rn!==void 0&&Rn.setValue(V,_t.setFromMatrixPosition(R.matrixWorld)),Rt.logarithmicDepthBuffer&&zt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&zt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),de!==R&&(de=R,bn=!0,ri=!0)}if(Ke.needsLights&&(Ot.state.directionalShadowMap.length>0&&zt.setValue(V,"directionalShadowMap",Ot.state.directionalShadowMap,F),Ot.state.spotShadowMap.length>0&&zt.setValue(V,"spotShadowMap",Ot.state.spotShadowMap,F),Ot.state.pointShadowMap.length>0&&zt.setValue(V,"pointShadowMap",Ot.state.pointShadowMap,F)),Q.isSkinnedMesh){zt.setOptional(V,Q,"bindMatrix"),zt.setOptional(V,Q,"bindMatrixInverse");const An=Q.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),zt.setValue(V,"boneTexture",An.boneTexture,F))}Q.isBatchedMesh&&(zt.setOptional(V,Q,"batchingTexture"),zt.setValue(V,"batchingTexture",Q._matricesTexture,F),zt.setOptional(V,Q,"batchingIdTexture"),zt.setValue(V,"batchingIdTexture",Q._indirectTexture,F),zt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&zt.setValue(V,"batchingColorTexture",Q._colorsTexture,F));const gn=ce.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ft.update(Q,ce,En),(bn||Ke.receiveShadow!==Q.receiveShadow)&&(Ke.receiveShadow=Q.receiveShadow,zt.setValue(V,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Tn.envMap.value=Xe,Tn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(Tn.envMapIntensity.value=q.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=DR()),bn&&(zt.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ke.needsLights&&Zr(Tn,ri),Ue&&se.fog===!0&&Je.refreshFogUniforms(Tn,Ue),Je.refreshMaterialUniforms(Tn,se,_e,ae,I.state.transmissionRenderTarget[R.id]),$c.upload(V,cl(Ke),Tn,F)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&($c.upload(V,cl(Ke),Tn,F),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&zt.setValue(V,"center",Q.center),zt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),zt.setValue(V,"normalMatrix",Q.normalMatrix),zt.setValue(V,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const An=se.uniformsGroups;for(let Rn=0,ks=An.length;Rn<ks;Rn++){const Ei=An[Rn];Me.update(Ei,En),Me.bind(Ei,En)}}return En}function Zr(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,q,ce){const se=g.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),g.get(R.texture).__webglTexture=q,g.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ce=g.get(R);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0};const Ra=V.createFramebuffer();this.setRenderTarget=function(R,q=0,ce=0){j=R,k=q,oe=ce;let se=null,Q=!1,Ue=!1;if(R){const Le=g.get(R);if(Le.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(V.FRAMEBUFFER,Le.__webglFramebuffer),O.copy(R.viewport),G.copy(R.scissor),te=R.scissorTest,qe.viewport(O),qe.scissor(G),qe.setScissorTest(te),ue=-1;return}else if(Le.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if(Le.__hasExternalTextures)F.rebindTextures(R,g.get(R.texture).__webglTexture,g.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&g.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);const Ye=g.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?se=Ye[q][ce]:se=Ye[q],Q=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?se=g.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?se=Ye[ce]:se=Ye,O.copy(R.viewport),G.copy(R.scissor),te=R.scissorTest}else O.copy(ne).multiplyScalar(_e).floor(),G.copy(pe).multiplyScalar(_e).floor(),te=Re;if(ce!==0&&(se=Ra),qe.bindFramebuffer(V.FRAMEBUFFER,se)&&qe.drawBuffers(R,se),qe.viewport(O),qe.scissor(G),qe.setScissorTest(te),Q){const Le=g.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,ce)}else if(Ue){const Le=q;for(let Xe=0;Xe<R.textures.length;Xe++){const Ye=g.get(R.textures[Xe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,ce,Le)}}else if(R!==null&&ce!==0){const Le=g.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,ce)}ue=-1},this.readRenderTargetPixels=function(R,q,ce,se,Q,Ue,He,Le=0){if(!(R&&R.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=g.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe){qe.bindFramebuffer(V.FRAMEBUFFER,Xe);try{const Ye=R.textures[Le],$e=Ye.format,je=Ye.type;if(!Rt.textureFormatReadable($e)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(je)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-se&&ce>=0&&ce<=R.height-Q&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(q,ce,se,Q,Te.convert($e),Te.convert(je),Ue))}finally{const Ye=j!==null?g.get(j).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,q,ce,se,Q,Ue,He,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=g.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe)if(q>=0&&q<=R.width-se&&ce>=0&&ce<=R.height-Q){qe.bindFramebuffer(V.FRAMEBUFFER,Xe);const Ye=R.textures[Le],$e=Ye.format,je=Ye.type;if(!Rt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.bufferData(V.PIXEL_PACK_BUFFER,Ue.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(q,ce,se,Q,Te.convert($e),Te.convert(je),0);const Lt=j!==null?g.get(j).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,Lt);const $t=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await eE(V,$t,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ue),V.deleteBuffer(et),V.deleteSync($t),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ce=0){const se=Math.pow(2,-ce),Q=Math.floor(R.image.width*se),Ue=Math.floor(R.image.height*se),He=q!==null?q.x:0,Le=q!==null?q.y:0;F.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ce,0,0,He,Le,Q,Ue),qe.unbindTexture()};const cs=V.createFramebuffer(),Ca=V.createFramebuffer();this.copyTextureToTexture=function(R,q,ce=null,se=null,Q=0,Ue=null){Ue===null&&(Q!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Q,Q=0):Ue=0);let He,Le,Xe,Ye,$e,je,et,Lt,$t;const jt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(ce!==null)He=ce.max.x-ce.min.x,Le=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,Ye=ce.min.x,$e=ce.min.y,je=ce.isBox3?ce.min.z:0;else{const gn=Math.pow(2,-Q);He=Math.floor(jt.width*gn),Le=Math.floor(jt.height*gn),R.isDataArrayTexture?Xe=jt.depth:R.isData3DTexture?Xe=Math.floor(jt.depth*gn):Xe=1,Ye=0,$e=0,je=0}se!==null?(et=se.x,Lt=se.y,$t=se.z):(et=0,Lt=0,$t=0);const Ft=Te.convert(q.format),Ke=Te.convert(q.type);let Ot;q.isData3DTexture?(F.setTexture3D(q,0),Ot=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(F.setTexture2DArray(q,0),Ot=V.TEXTURE_2D_ARRAY):(F.setTexture2D(q,0),Ot=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const rt=V.getParameter(V.UNPACK_ROW_LENGTH),En=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ji=V.getParameter(V.UNPACK_SKIP_PIXELS),bn=V.getParameter(V.UNPACK_SKIP_ROWS),ri=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ye),V.pixelStorei(V.UNPACK_SKIP_ROWS,$e),V.pixelStorei(V.UNPACK_SKIP_IMAGES,je);const zt=R.isDataArrayTexture||R.isData3DTexture,Tn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const gn=g.get(R),An=g.get(q),Rn=g.get(gn.__renderTarget),ks=g.get(An.__renderTarget);qe.bindFramebuffer(V.READ_FRAMEBUFFER,Rn.__webglFramebuffer),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let Ei=0;Ei<Xe;Ei++)zt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,g.get(R).__webglTexture,Q,je+Ei),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,g.get(q).__webglTexture,Ue,$t+Ei)),V.blitFramebuffer(Ye,$e,He,Le,et,Lt,He,Le,V.DEPTH_BUFFER_BIT,V.NEAREST);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||g.has(R)){const gn=g.get(R),An=g.get(q);qe.bindFramebuffer(V.READ_FRAMEBUFFER,cs),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ca);for(let Rn=0;Rn<Xe;Rn++)zt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,gn.__webglTexture,Q,je+Rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,gn.__webglTexture,Q),Tn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,Ue,$t+Rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,Ue),Q!==0?V.blitFramebuffer(Ye,$e,He,Le,et,Lt,He,Le,V.COLOR_BUFFER_BIT,V.NEAREST):Tn?V.copyTexSubImage3D(Ot,Ue,et,Lt,$t+Rn,Ye,$e,He,Le):V.copyTexSubImage2D(Ot,Ue,et,Lt,Ye,$e,He,Le);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ot,Ue,et,Lt,$t,He,Le,Xe,Ft,Ke,jt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ot,Ue,et,Lt,$t,He,Le,Xe,Ft,jt.data):V.texSubImage3D(Ot,Ue,et,Lt,$t,He,Le,Xe,Ft,Ke,jt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ue,et,Lt,He,Le,Ft,Ke,jt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ue,et,Lt,jt.width,jt.height,Ft,jt.data):V.texSubImage2D(V.TEXTURE_2D,Ue,et,Lt,He,Le,Ft,Ke,jt);V.pixelStorei(V.UNPACK_ROW_LENGTH,rt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,En),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ji),V.pixelStorei(V.UNPACK_SKIP_ROWS,bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ri),Ue===0&&q.generateMipmaps&&V.generateMipmap(Ot),qe.unbindTexture()},this.initRenderTarget=function(R){g.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),qe.unbindTexture()},this.resetState=function(){k=0,oe=0,j=null,qe.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}function NR({mouseForce:r=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:h=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:_=["#5227FF","#FF9FFC","#B19EEF"],style:x={},className:y="",autoDemo:E=!0,autoSpeed:T=.5,autoIntensity:b=2.2,takeoverDuration:M=.25,autoResumeDelay:v=1e3,autoRampDuration:P=.6}){const L=ct.useRef(null),U=ct.useRef(null),I=ct.useRef(null),z=ct.useRef(null),B=ct.useRef(null),K=ct.useRef(!0),C=ct.useRef(null);return ct.useEffect(()=>{if(!L.current)return;function D(w){let g;Array.isArray(w)&&w.length>0?w.length===1?g=[w[0],w[0]]:g=w:g=["#ffffff","#ffffff"];const F=g.length,Z=new Uint8Array(F*4);for(let ie=0;ie<F;ie++){const Pe=new Bt(g[ie]);Z[ie*4+0]=Math.round(Pe.r*255),Z[ie*4+1]=Math.round(Pe.g*255),Z[ie*4+2]=Math.round(Pe.b*255),Z[ie*4+3]=255}const he=new $v(Z,F,1,xi);return he.magFilter=mn,he.minFilter=mn,he.wrapS=ai,he.wrapT=ai,he.generateMipmaps=!1,he.needsUpdate=!0,he}const k=D(_),oe=new an(0,0,0,0);class j{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new UR({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Bt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new PE,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ue=new j;class de{constructor(){this.mouseMoved=!1,this.coords=new lt,this.coords_old=new lt,this.diff=new lt,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new lt,this.takeoverTo=new lt,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(g){this.container=g,this.docTarget=g.ownerDocument||null;const F=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);F&&(this.listenerTarget=F,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(g,F){if(!this.container)return!1;const Z=this.container.getBoundingClientRect();return Z.width===0||Z.height===0?!1:g>=Z.left&&g<=Z.right&&F>=Z.top&&F<=Z.bottom}updateHoverState(g,F){return this.isHoverInside=this.isPointInside(g,F),this.isHoverInside}setCoords(g,F){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Z=this.container.getBoundingClientRect();if(Z.width===0||Z.height===0)return;const he=(g-Z.left)/Z.width,ie=(F-Z.top)/Z.height;this.coords.set(he*2-1,-(ie*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,F){this.coords.set(g,F),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.updateHoverState(g.clientX,g.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const F=this.container.getBoundingClientRect();if(F.width===0||F.height===0)return;const Z=(g.clientX-F.left)/F.width,he=(g.clientY-F.top)/F.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Z*2-1,-(he*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}}onDocumentTouchStart(g){if(g.touches.length!==1)return;const F=g.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY),this.hasUserControl=!0)}onDocumentTouchMove(g){if(g.touches.length!==1)return;const F=g.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const F=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,F)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const O=new de;class G{constructor(g,F,Z){this.mouse=g,this.manager=F,this.enabled=Z.enabled,this.speed=Z.speed,this.resumeDelay=Z.resumeDelay||3e3,this.rampDurationMs=(Z.rampDuration||0)*1e3,this.active=!1,this.current=new lt(0,0),this.target=new lt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new lt,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let Z=(g-this.lastTime)/1e3;this.lastTime=g,Z>.2&&(Z=.016);const he=this._tmpDir.subVectors(this.target,this.current),ie=he.length();if(ie<.01){this.pickNewTarget();return}he.normalize();let Pe=1;if(this.rampDurationMs>0){const Je=Math.min(1,(g-this.activationTime)/this.rampDurationMs);Pe=Je*Je*(3-2*Je)}const Ce=this.speed*Z*Pe,Ve=Math.min(Ce,ie);this.current.addScaledVector(he,Ve),this.mouse.setNormalized(this.current.x,this.current.y)}}const te=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,ye=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Se=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,N=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,ae=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,_e=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Ae=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,ze=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ne=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,pe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Re{constructor(g){this.props=g||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new F0,this.camera=new iu,this.uniforms&&(this.material=new Qo(this.props.material),this.geometry=new Fs(2,2),this.plane=new Si(this.geometry,this.material),this.scene.add(this.plane))}update(){ue.renderer.setRenderTarget(this.props.output||null),ue.renderer.render(this.scene,this.camera),ue.renderer.setRenderTarget(null)}}class ke extends Re{constructor(g){super({material:{vertexShader:te,fragmentShader:N,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new Fi,F=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new Pi(F,3));const Z=new Qo({vertexShader:ye,fragmentShader:N,uniforms:this.uniforms});this.line=new DE(g,Z),this.scene.add(this.line)}update({dt:g,isBounce:F,BFECC:Z}){this.uniforms.dt.value=g,this.line.visible=F,this.uniforms.isBFECC.value=Z,super.update()}}class Ge extends Re{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const F=new Fs(1,1),Z=new Qo({vertexShader:Se,fragmentShader:Ae,blending:cd,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new lt(0,0)},center:{value:new lt(0,0)},scale:{value:new lt(g.cursor_size,g.cursor_size)}}});this.mouse=new Si(F,Z),this.scene.add(this.mouse)}update(g){const F=O.diff.x/2*g.mouse_force,Z=O.diff.y/2*g.mouse_force,he=g.cursor_size*g.cellScale.x,ie=g.cursor_size*g.cellScale.y,Pe=Math.min(Math.max(O.coords.x,-1+he+g.cellScale.x*2),1-he-g.cellScale.x*2),Ce=Math.min(Math.max(O.coords.y,-1+ie+g.cellScale.y*2),1-ie-g.cellScale.y*2),Ve=this.mouse.material.uniforms;Ve.force.value.set(F,Z),Ve.center.value.set(Pe,Ce),Ve.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class mt extends Re{constructor(g){super({material:{vertexShader:te,fragmentShader:pe,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:F,dt:Z}){let he,ie;this.uniforms.v.value=g;for(let Pe=0;Pe<F;Pe++)Pe%2===0?(he=this.props.output0,ie=this.props.output1):(he=this.props.output1,ie=this.props.output0),this.uniforms.velocity_new.value=he.texture,this.props.output=ie,this.uniforms.dt.value=Z,super.update();return ie}}class Qt extends Re{constructor(g){super({material:{vertexShader:te,fragmentShader:_e,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class _t extends Re{constructor(g){super({material:{vertexShader:te,fragmentShader:ze,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let F,Z;for(let he=0;he<g;he++)he%2===0?(F=this.props.output0,Z=this.props.output1):(F=this.props.output1,Z=this.props.output0),this.uniforms.pressure.value=F.texture,this.props.output=Z,super.update();return Z}}class gt extends Re{constructor(g){super({material:{vertexShader:te,fragmentShader:ne,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:F}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=F.texture,super.update()}}class At{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new lt,this.cellScale=new lt,this.boundarySpace=new lt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ki:Li}createAllFBO(){const F={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:mn,magFilter:mn,wrapS:ai,wrapT:ai};for(let Z in this.fbos)this.fbos[Z]=new Oi(this.fboSize.x,this.fboSize.y,F)}createShaderPass(){this.advection=new ke({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ge({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new mt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Qt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new _t({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new gt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*ue.width)),F=Math.max(1,Math.round(this.options.resolution*ue.height)),Z=1/g,he=1/F;this.cellScale.set(Z,he),this.fboSize.set(g,F)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const F=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:F})}}class st{constructor(){this.init()}init(){this.simulation=new At,this.scene=new F0,this.camera=new iu,this.output=new Si(new Fs(2,2),new Qo({vertexShader:te,fragmentShader:ae,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new lt},palette:{value:k},bgColor:{value:oe}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){ue.renderer.setRenderTarget(null),ue.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Jt{constructor(g){this.props=g,ue.init(g.$wrapper),O.init(g.$wrapper),O.autoIntensity=g.autoIntensity,O.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),O.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new G(O,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():K.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ue.renderer.domElement),this.output=new st}resize(){ue.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),O.update(),ue.update(),this.output.update()}loop(){this.running&&(this.render(),z.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,z.current&&(cancelAnimationFrame(z.current),z.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),O.dispose(),ue.renderer){const g=ue.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),ue.renderer.dispose()}}catch{}}}const V=L.current;V.style.position=V.style.position||"relative",V.style.overflow=V.style.overflow||"hidden";const qt=new Jt({$wrapper:V,autoDemo:E,autoSpeed:T,autoIntensity:b,takeoverDuration:M,autoResumeDelay:v,autoRampDuration:P});U.current=qt,(()=>{if(!U.current)return;const w=U.current.output?.simulation;if(!w)return;const g=w.options.resolution;Object.assign(w.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:h,BFECC:d,resolution:m,isBounce:p}),m!==g&&w.resize()})(),qt.start();const Rt=new IntersectionObserver(w=>{const g=w[0],F=g.isIntersecting&&g.intersectionRatio>0;K.current=F,U.current&&(F&&!document.hidden?U.current.start():U.current.pause())},{threshold:[0,.01,.1]});Rt.observe(V),B.current=Rt;const qe=new ResizeObserver(()=>{U.current&&(C.current&&cancelAnimationFrame(C.current),C.current=requestAnimationFrame(()=>{U.current&&U.current.resize()}))});return qe.observe(V),I.current=qe,()=>{if(z.current&&cancelAnimationFrame(z.current),I.current)try{I.current.disconnect()}catch{}if(B.current)try{B.current.disconnect()}catch{}U.current&&U.current.dispose(),U.current=null}},[d,e,h,p,i,c,l,r,m,s,_,E,T,b,M,v,P]),ct.useEffect(()=>{const D=U.current;if(!D)return;const k=D.output?.simulation;if(!k)return;const oe=k.options.resolution;Object.assign(k.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:h,BFECC:d,resolution:m,isBounce:p}),D.autoDriver&&(D.autoDriver.enabled=E,D.autoDriver.speed=T,D.autoDriver.resumeDelay=v,D.autoDriver.rampDurationMs=P*1e3,D.autoDriver.mouse&&(D.autoDriver.mouse.autoIntensity=b,D.autoDriver.mouse.takeoverDuration=M)),m!==oe&&k.resize()},[r,e,i,s,l,c,h,d,m,p,E,T,b,M,v,P]),J.jsx("div",{ref:L,className:`liquid-ether-container ${y||""}`,style:x})}const LR=()=>J.jsx("div",{style:{width:"100vw",height:"100vh",position:"fixed",top:0,left:0,zIndex:-1,background:"#543ABC"},children:J.jsx(NR,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:100,iterationsViscous:32,iterationsPoisson:32,resolution:.2,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})});function OR({roomId:r,drawerId:e,initialPlayers:i}){const[s,l]=ct.useState(i||[]);return ct.useEffect(()=>{i&&l(i)},[i]),ct.useEffect(()=>(nt.on("update_player_list",c=>{const h=[...c].sort((d,m)=>m.score-d.score);l(h)}),nt.on("room_joined",c=>{const h=[...c.players].sort((d,m)=>m.score-d.score);l(h)}),()=>{nt.off("update_player_list"),nt.off("room_joined")}),[]),J.jsx("div",{className:"player-list",children:s.map((c,h)=>{const d=e===c.id,m=h===0&&c.score>0;return J.jsxs("div",{className:`player-card ${d?"is-drawer":""}`,children:[J.jsxs("div",{className:"player-rank",children:["#",h+1]}),J.jsx("div",{className:"avatar",children:J.jsx("img",{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=${c.username}`,alt:c.username})}),J.jsxs("div",{className:"player-info",children:[J.jsxs("div",{className:"player-name",children:[c.username,d&&J.jsx("span",{className:"icon-drawer",children:" ✏️"}),m&&J.jsx("span",{className:"icon-leader",children:" 👑"})]}),J.jsxs("div",{className:"player-score",children:[c.score," pts"]})]})]},h)})})}function PR({options:r,roomId:e}){const i=s=>{nt.emit("select_word",{roomId:e,word:s})};return J.jsx("div",{className:"canvas-overlay",children:J.jsxs("div",{className:"modal-content",children:[J.jsx("h2",{children:"Choose a Word!"}),J.jsx("div",{className:"word-options",children:r.map(s=>J.jsx("button",{onClick:()=>i(s),className:"word-card",children:s},s))})]})})}const BR=({players:r,isHost:e,onPlayAgain:i})=>J.jsx("div",{className:"global-overlay",children:J.jsxs("div",{className:"game-over-modal funky-animate",children:[J.jsx("h1",{className:"funky-title",children:"GAME OVER!"}),J.jsx("div",{className:"podium",children:r.slice(0,3).map((s,l)=>J.jsxs("div",{className:`podium-step step-${l+1}`,children:[J.jsxs("div",{className:"rank",children:["#",l+1]}),J.jsx("img",{src:s.avatar,alt:"avatar",className:"winner-avatar"}),J.jsx("div",{className:"winner-name",children:s.username}),J.jsxs("div",{className:"winner-score",children:[s.score," pts"]})]},s.id))}),J.jsx("div",{className:"leaderboard-list",children:r.slice(3).map((s,l)=>J.jsxs("div",{className:"list-item",children:[J.jsxs("span",{className:"rank-small",children:["#",l+4]}),J.jsx("span",{className:"name-small",children:s.username}),J.jsx("span",{className:"score-small",children:s.score})]},s.id))}),J.jsx("button",{className:"funky-btn",onClick:i,children:"Play Again"})]})});function FR(){const[r,e]=ct.useState(!1),[i,s]=ct.useState(null),[l,c]=ct.useState(""),[h,d]=ct.useState(null),[m,p]=ct.useState([]),[_,x]=ct.useState(""),[y,E]=ct.useState(!1),[T,b]=ct.useState(60),[M,v]=ct.useState(60),[P,L]=ct.useState(null),[U,I]=ct.useState(null),[z,B]=ct.useState(null),[K,C]=ct.useState("WAITING");ct.useEffect(()=>(nt.on("room_joined",j=>{s(j),C(j.gameState||"WAITING"),e(!0)}),nt.on("update_player_list",j=>{s(ue=>({...ue,players:j}))}),nt.on("game_starting",()=>{let j=3;B(j);const ue=setInterval(()=>{j--,j>0?B(j):(B("GO!"),clearInterval(ue),setTimeout(()=>{B(null),C(de=>de==="SELECTING_WORD"?de:"PLAYING")},1e3))},1e3)}),nt.on("round_start",j=>{d(j),E(j.drawer===nt.id),p([]),x(""),b(15),v(15),L(null),C("SELECTING_WORD")}),nt.on("timer_update",j=>{b(j)}),nt.on("round_end",({reason:j,word:ue})=>{L({message:`${j} The word was: ${ue}`,type:"info"})}),nt.on("game_over",j=>{I(j)}),nt.on("choose_word",j=>{p(j)}),nt.on("word_selected",({dashes:j})=>{x(j),p([]),b(60),v(60),C("PLAYING")}),nt.on("your_word",j=>{x(j)}),nt.on("game_reset",j=>{I(null),C("WAITING"),d(null),setDrawingHistory([]),s(j),L(null)}),nt.on("room_expired",()=>{alert("Session expired (Server Restarted). Returning to lobby."),window.location.reload()}),()=>{nt.off("room_joined"),nt.off("update_player_list"),nt.off("game_starting"),nt.off("round_start"),nt.off("choose_word"),nt.off("word_selected"),nt.off("your_word"),nt.off("timer_update"),nt.off("round_end"),nt.off("game_reset"),nt.off("game_over")}),[]);const D=()=>{i?.id&&nt.emit("start_game",{roomId:i.id})},k=()=>{i?.id&&nt.emit("play_again",{roomId:i.id})},oe=i?.players?.[0]?.id===nt.id;return J.jsxs("div",{className:"app",children:[J.jsx(LR,{}),r?J.jsxs(J.Fragment,{children:[K==="WAITING"?J.jsx(xM,{roomId:i?.id,players:i?.players||[],isHost:oe,onStartGame:D}):J.jsxs("div",{className:"wrapper",children:[J.jsx("div",{className:"game-header",children:J.jsxs("div",{className:"header-content",children:[J.jsxs("div",{className:"header-left",children:[J.jsxs("div",{className:"round-badge",children:["ROUND ",h?.round||1]}),J.jsx("div",{className:"timer-pill-container",children:J.jsx("div",{className:"timer-pill-fill",style:{width:`${T/M*100}%`,backgroundColor:T>M*.5?"#58CC02":T>M*.2?"#FFC107":"#FF5252"}},K)})]}),J.jsx("div",{className:"current-word",children:K==="SELECTING_WORD"?`${h?.drawerName||"Drawer"} is choosing...`:_||"WAITING..."}),J.jsxs("div",{className:"room-info",children:["Room: ",i?.id]})]})}),J.jsxs("div",{className:"game-container",children:[J.jsx("div",{className:"sidebar-left",children:J.jsx(OR,{roomId:i?.id,drawerId:h?.drawer,initialPlayers:i?.players||[]})}),J.jsx("div",{className:"main-content",children:J.jsxs("div",{className:"overlay-container",children:[J.jsx(_M,{roomId:i?.id,isDrawer:y,initialHistory:i?.drawingHistory||[]}),m.length>0&&y&&J.jsx(PR,{options:m,roomId:i?.id}),K==="SELECTING_WORD"&&!y&&J.jsx("div",{className:"notification-overlay",children:J.jsxs("div",{className:"notification-content",children:[h?.drawerName||"Drawer"," is choosing a word..."]})}),P&&J.jsx("div",{className:"notification-overlay",children:J.jsx("div",{className:"notification-content",children:P.message})})]})}),J.jsx("div",{className:"sidebar-right",children:J.jsx(vM,{roomId:i?.id,username:l,initialMessages:i?.chatHistory||[]})})]})]}),z&&J.jsx("div",{className:"countdown-overlay",children:J.jsx("div",{className:"countdown-number",children:z})}),U&&J.jsx(BR,{players:U,isHost:oe,onPlayAgain:k})]}):J.jsx(gM,{onJoin:j=>c(j)})]})}yy.createRoot(document.getElementById("root")).render(J.jsx(ct.StrictMode,{children:J.jsx(FR,{})}));
