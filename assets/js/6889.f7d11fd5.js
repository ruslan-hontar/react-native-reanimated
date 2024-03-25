"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,d=h["".concat(l,".").concat(p)]||h[p]||f[p]||s;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[h]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73759:e=>{var t=function(e){};e.exports=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),s=2;s<r;s++)o[s-2]=arguments[s];if(t(n),!e){var i;if(void 0===n)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=0;(i=new Error(n.replace(/%s/g,(function(){return String(o[a++])})))).name="Invariant Violation"}throw i.framesToPop=1,i}}},87827:(e,t,n)=>{n.d(t,{o:()=>E});const r=4,o=.001,s=1e-7,i=10,a=11,l=1/(a-1);function u(e,t){return 1-3*t+3*e}function c(e,t){return 3*t-6*e}function h(e){return 3*e}function f(e,t,n){return((u(t,n)*e+c(t,n))*e+h(t))*e}function p(e,t,n){return 3*u(t,n)*e*e+2*c(t,n)*e+h(t)}function d(e,t,n,u){if(!(e>=0&&e<=1&&n>=0&&n<=1))throw new Error("[Reanimated] Bezier x values must be in [0, 1] range.");if(e===t&&n===u)return function(e){return e};const c=new Array(a);for(let r=0;r<a;++r)c[r]=f(r*l,e,n);function h(t){let u=0,h=1;const d=a-1;for(;h!==d&&c[h]<=t;++h)u+=l;--h;const E=u+(t-c[h])/(c[h+1]-c[h])*l,R=p(E,e,n);return R>=o?function(e,t,n,o){for(let s=0;s<r;++s){const r=p(t,n,o);if(0===r)return t;t-=(f(t,n,o)-e)/r}return t}(t,E,e,n):0===R?E:function(e,t,n,r,o){let a,l,u=0;do{l=t+(n-t)/2,a=f(l,r,o)-e,a>0?n=l:t=l}while(Math.abs(a)>s&&++u<i);return l}(t,u,u+l,e,n)}return function(r){return e===t&&n===u?r:0===r?0:1===r?1:f(h(r),t,u)}}const E={linear:function(e){return e},ease:function(e){return d(.42,0,1,1)(e)},quad:function(e){return e*e},cubic:function(e){return e*e*e},poly:function(e){return t=>Math.pow(t,e)},sin:function(e){return 1-Math.cos(e*Math.PI/2)},circle:function(e){return 1-Math.sqrt(1-e*e)},exp:function(e){return Math.pow(2,10*(e-1))},elastic:function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return t=>1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*e)},back:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return t=>t*t*((e+1)*t-e)},bounce:function(e){if(e<1/2.75)return 7.5625*e*e;if(e<2/2.75){const t=e-1.5/2.75;return 7.5625*t*t+.75}if(e<2.5/2.75){const t=e-2.25/2.75;return 7.5625*t*t+.9375}const t=e-2.625/2.75;return 7.5625*t*t+.984375},bezier:function(e,t,n,r){return{factory:()=>d(e,t,n,r)}},bezierFn:function(e,t,n,r){return d(e,t,n,r)},steps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n=>{const r=Math.min(Math.max(n,0),1)*e;return t?Math.ceil(r)/e:Math.floor(r)/e}},in:function(e){return e},out:function(e){return t=>1-e(1-t)},inOut:function(e){return t=>t<.5?e(2*t)/2:1-e(2*(1-t))/2}}},6328:(e,t,n)=>{n.d(t,{j:()=>s});var r=n(87827),o=n(76933);const s=function(e,t,n){return(0,o.oF)(e,(()=>{const s={duration:300,easing:r.o.inOut(r.o.quad)};return t&&Object.keys(t).forEach((e=>s[e]=t[e])),{type:"timing",onFrame:function(e,t){const{toValue:n,startTime:r,startValue:o}=e,i=t-r;if(i>=s.duration)return e.startTime=0,e.current=n,!0;const a=e.easing(i/s.duration);return e.current=o+(n-o)*a,!1},onStart:function(t,n,r,o){o&&"timing"===o.type&&o.toValue===e&&o.startTime?(t.startTime=o.startTime,t.startValue=o.startValue):(t.startTime=r,t.startValue=n),t.current=n,"object"==typeof s.easing?t.easing=s.easing.factory():t.easing=s.easing},progress:0,toValue:e,startValue:0,startTime:0,easing:()=>0,current:e,callback:n,reduceMotion:(0,o.uh)(null==t?void 0:t.reduceMotion)}}))}},68592:(e,t,n)=>{n.d(t,{u:()=>i});var r=n(35842),o=n(83442);const s=r.l,i=(0,o.Wr)()?function(e,t,n){return(0,r.l)(e,t,n,!0)}:s},35842:(e,t,n)=>{n.d(t,{l:()=>R});var r=n(67294),o=n(86425),s=n(97604),i=n(49402),a=n(76933),l=n(10758),u=n(40093),c=n(41956),h=n(83442);const f=(0,h.Wr)();function p(e,t,n,r){if(Array.isArray(t)&&t.forEach(((t,o)=>{p(e,t,n&&n[o],r&&r[o])})),"object"==typeof t&&t.onFrame){const o=t;let s=o.current;null!=r&&("object"==typeof r?void 0!==r.value?s=r.value:void 0!==r.onFrame&&(void 0!==(null==n?void 0:n.current)?s=n.current:void 0!==(null==r?void 0:r.current)&&(s=r.current)):s=r),o.callStart=e=>{o.onStart(o,s,e,n)},o.callStart(e),o.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((o=>p(e,t[o],n&&n[o],r&&r[o])))}function d(e,t,n,r,o){if(!o.value)return!0;if(Array.isArray(e)){r[n]=[];let s=!0;return e.forEach(((e,i)=>{d(e,t,i,r[n],o)||(s=!1)})),s}if("object"==typeof e&&e.onFrame){let o=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),o=e.onFrame(e,t),e.timestamp=t,o&&(e.finished=!0,e.callback&&e.callback(!0))),r[n]=e.current,o}if("object"==typeof e){r[n]={};let s=!0;return Object.keys(e).forEach((i=>{d(e[i],t,i,r[n],o)||(s=!1)})),s}return r[n]=e,!0}function E(e,t){if(Array.isArray(e))for(const n of e)E(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))E(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function R(e,t,R){let g=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const b=(0,c.H)(),S=(0,r.useRef)();let m=Object.values(e.__closure??{});var _;f&&(!m.length&&null!==(_=t)&&void 0!==_&&_.length&&(m=t));const P=R?Array.isArray(R)?R:[R]:[],v=R?(0,u.Nq)(P):null,T=(0,l.y)(!0),y=(0,r.useRef)({});if(t?t.push(e.__workletHash):t=[...m,e.__workletHash],v&&t.push(v),!S.current){const t=(0,a.AX)(e);0,S.current={initial:{value:t,updater:e},remoteState:(0,o.Uv)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,c.G)()}}const{initial:O,remoteState:A,viewDescriptors:D}=S.current,N=D.shareableViewDescriptors;t.push(N),(0,r.useEffect)((()=>{let t,r=e;R&&(r=()=>{const t=e();return P.forEach((e=>{e(t)})),t}),t=(0,h.V5)()?()=>{!function(e,t,r,o,s,a,l){const c=r.animations??{},h=t()??{},f=r.last;let E,R=!1;Object.keys(c).forEach((e=>{const t=h[e];(0,u.mE)(t)||delete c[e]})),Object.keys(h).forEach((e=>{const t=h[e];(0,u.mE)(t)&&(E=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),p(E,t,c[e],f[e]),c[e]=t,R=!0)})),R?(r.animations=c,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,function t(n){const{animations:u,last:c,isAnimationCancelled:h}=r;if(h)return void(r.isAnimationRunning=!1);const f={};let p=!0;Object.keys(u).forEach((e=>{d(u[e],n,e,f,s)?(c[e]=f[e],delete u[e]):p=!1})),Object.keys(f).length&&(0,i.R)(e,f,o,a,l),p?r.isAnimationRunning=!1:requestAnimationFrame(t)}(E))):(r.isAnimationCancelled=!0,r.animations=[]),r.last=h,(0,u.wU)(f,h)||(0,i.R)(e,h,o,a,l)}(N,e,A,b,T,y,P)}:()=>{!function(e,t,r,o,s){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const l=r.animations??{},c=t()??{},h=r.last,f={};let E,R=!1,g=!1;for(const i in c){const e=c[i];(0,u.mE)(e)?(E=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),p(E,e,l[i],h[i]),l[i]=e,R=!0):(g=!0,f[i]=e,delete l[i])}if(R){const t=n=>{const{animations:a,last:l,isAnimationCancelled:u}=r;if(u)return void(r.isAnimationRunning=!1);const c={};let h=!0;for(const e in a)d(a[e],n,e,c,s)?(l[e]=c[e],delete a[e]):h=!1;c&&(0,i.Z)(e,c,o),h?r.isAnimationRunning=!1:requestAnimationFrame(t)};r.animations=l,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,t(E)),g&&(0,i.Z)(e,f,o)}else r.isAnimationCancelled=!0,r.animations=[],(0,u.wU)(h,c)||(0,i.Z)(e,c,o,a);r.last=c}(N,r,A,b,T,g)};const o=(0,s.R)(t,m);return()=>{(0,s.B)(o)}}),t),(0,r.useEffect)((()=>(T.value=!0,()=>{T.value=!1})),[T]),E(O.value);const C=(0,r.useRef)(null);return C.current||(C.current=(0,h.V5)()?{viewDescriptors:D,initial:O,viewsRef:b,jestAnimatedStyle:y}:{initial:O,viewsRef:b,viewDescriptors:D}),C.current}},93525:(e,t,n)=>{n.d(t,{Cd:()=>ge,ny:()=>be});var r=n(67294),o=n(37353),s=n(80102),i=n(3058),a=n(56861),l=(n(73759),function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)}),u=function(e){var t=this;e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},c=l;const h={addPoolingTo:function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=10),n.release=u,n},twoArgumentPooler:l};var f=h.twoArgumentPooler;function p(e,t){this.width=e,this.height=t}p.prototype.destructor=function(){this.width=null,this.height=null},p.getPooledFromElement=function(e){return p.getPooled(e.offsetWidth,e.offsetHeight)},h.addPoolingTo(p,f);const d=p;var E=n(82747),R=n(28059),g=n.n(R),b=h.twoArgumentPooler;function S(e,t){this.left=e,this.top=t}S.prototype.destructor=function(){this.left=null,this.top=null},h.addPoolingTo(S,b);const m=S;var _=n(90005),P=n(67177),v=e=>{var t=e.touches,n=e.changedTouches,r=t&&t.length>0,o=n&&n.length>0;return!r&&o?n[0]:r?t[0]:e},T="NOT_RESPONDER",y="RESPONDER_INACTIVE_PRESS_IN",O="RESPONDER_INACTIVE_PRESS_OUT",A="RESPONDER_ACTIVE_PRESS_IN",D="RESPONDER_ACTIVE_PRESS_OUT",N="RESPONDER_ACTIVE_LONG_PRESS_IN",C="RESPONDER_ACTIVE_LONG_PRESS_OUT",w="ERROR",L={NOT_RESPONDER:!1,RESPONDER_INACTIVE_PRESS_IN:!1,RESPONDER_INACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_PRESS_IN:!1,RESPONDER_ACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_LONG_PRESS_IN:!1,RESPONDER_ACTIVE_LONG_PRESS_OUT:!1,ERROR:!1},I=(0,i.Z)((0,i.Z)({},L),{},{RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0}),H=(0,i.Z)((0,i.Z)({},L),{},{RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),M=(0,i.Z)((0,i.Z)({},L),{},{RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),x="DELAY",j="RESPONDER_GRANT",G="RESPONDER_RELEASE",k="RESPONDER_TERMINATED",V="ENTER_PRESS_RECT",F="LEAVE_PRESS_RECT",Z="LONG_PRESS_DETECTED",Y={NOT_RESPONDER:{DELAY:w,RESPONDER_GRANT:y,RESPONDER_RELEASE:w,RESPONDER_TERMINATED:w,ENTER_PRESS_RECT:w,LEAVE_PRESS_RECT:w,LONG_PRESS_DETECTED:w},RESPONDER_INACTIVE_PRESS_IN:{DELAY:A,RESPONDER_GRANT:w,RESPONDER_RELEASE:T,RESPONDER_TERMINATED:T,ENTER_PRESS_RECT:y,LEAVE_PRESS_RECT:O,LONG_PRESS_DETECTED:w},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:D,RESPONDER_GRANT:w,RESPONDER_RELEASE:T,RESPONDER_TERMINATED:T,ENTER_PRESS_RECT:y,LEAVE_PRESS_RECT:O,LONG_PRESS_DETECTED:w},RESPONDER_ACTIVE_PRESS_IN:{DELAY:w,RESPONDER_GRANT:w,RESPONDER_RELEASE:T,RESPONDER_TERMINATED:T,ENTER_PRESS_RECT:A,LEAVE_PRESS_RECT:D,LONG_PRESS_DETECTED:N},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:w,RESPONDER_GRANT:w,RESPONDER_RELEASE:T,RESPONDER_TERMINATED:T,ENTER_PRESS_RECT:A,LEAVE_PRESS_RECT:D,LONG_PRESS_DETECTED:w},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:w,RESPONDER_GRANT:w,RESPONDER_RELEASE:T,RESPONDER_TERMINATED:T,ENTER_PRESS_RECT:N,LEAVE_PRESS_RECT:C,LONG_PRESS_DETECTED:N},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:w,RESPONDER_GRANT:w,RESPONDER_RELEASE:T,RESPONDER_TERMINATED:T,ENTER_PRESS_RECT:N,LEAVE_PRESS_RECT:C,LONG_PRESS_DETECTED:w},error:{DELAY:T,RESPONDER_GRANT:y,RESPONDER_RELEASE:T,RESPONDER_TERMINATED:T,ENTER_PRESS_RECT:T,LEAVE_PRESS_RECT:T,LONG_PRESS_DETECTED:T}},U={componentDidMount:function(){this._touchableNode=(0,E.Z)(this),this._touchableNode&&this._touchableNode.addEventListener&&(this._touchableBlurListener=e=>{this._isTouchableKeyboardActive&&(this.state.touchable.touchState&&this.state.touchable.touchState!==T&&this.touchableHandleResponderTerminate({nativeEvent:e}),this._isTouchableKeyboardActive=!1)},this._touchableNode.addEventListener("blur",this._touchableBlurListener))},componentWillUnmount:function(){this._touchableNode&&this._touchableNode.addEventListener&&this._touchableNode.removeEventListener("blur",this._touchableBlurListener),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressInLocation=null,this.state.touchable.responderID=null,this._touchableNode=null},touchableGetInitialState:function(){return{touchable:{touchState:void 0,responderID:null}}},touchableHandleResponderTerminationRequest:function(){return!this.props.rejectResponderTermination},touchableHandleStartShouldSetResponder:function(){return!this.props.disabled},touchableLongPressCancelsPress:function(){return!0},touchableHandleResponderGrant:function(e){var t=e.currentTarget;e.persist(),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null,this.state.touchable.touchState=T,this.state.touchable.responderID=t,this._receiveSignal(j,e);var n=void 0!==this.touchableGetHighlightDelayMS?Math.max(this.touchableGetHighlightDelayMS(),0):130;0!==(n=isNaN(n)?130:n)?this.touchableDelayTimeout=setTimeout(this._handleDelay.bind(this,e),n):this._handleDelay(e);var r=void 0!==this.touchableGetLongPressDelayMS?Math.max(this.touchableGetLongPressDelayMS(),10):370;r=isNaN(r)?370:r,this.longPressDelayTimeout=setTimeout(this._handleLongDelay.bind(this,e),r+n)},touchableHandleResponderRelease:function(e){this.pressInLocation=null,this._receiveSignal(G,e)},touchableHandleResponderTerminate:function(e){this.pressInLocation=null,this._receiveSignal(k,e)},touchableHandleResponderMove:function(e){if(this.state.touchable.positionOnActivate){var t=this.state.touchable.positionOnActivate,n=this.state.touchable.dimensionsOnActivate,r=this.touchableGetPressRectOffset?this.touchableGetPressRectOffset():{left:20,right:20,top:20,bottom:20},o=r.left,s=r.top,i=r.right,a=r.bottom,l=this.touchableGetHitSlop?this.touchableGetHitSlop():null;l&&(o+=l.left||0,s+=l.top||0,i+=l.right||0,a+=l.bottom||0);var u=v(e.nativeEvent),c=u&&u.pageX,h=u&&u.pageY;if(this.pressInLocation)this._getDistanceBetweenPoints(c,h,this.pressInLocation.pageX,this.pressInLocation.pageY)>10&&this._cancelLongPressDelayTimeout();if(c>t.left-o&&h>t.top-s&&c<t.left+n.width+i&&h<t.top+n.height+a){var f=this.state.touchable.touchState;this._receiveSignal(V,e),this.state.touchable.touchState===y&&f!==y&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(F,e)}},touchableHandleFocus:function(e){this.props.onFocus&&this.props.onFocus(e)},touchableHandleBlur:function(e){this.props.onBlur&&this.props.onBlur(e)},_remeasureMetricsOnActivation:function(){var e=this.state.touchable.responderID;null!=e&&_.Z.measure(e,this._handleQueryLayout)},_handleQueryLayout:function(e,t,n,r,o,s){(e||t||n||r||o||s)&&(this.state.touchable.positionOnActivate&&m.release(this.state.touchable.positionOnActivate),this.state.touchable.dimensionsOnActivate&&d.release(this.state.touchable.dimensionsOnActivate),this.state.touchable.positionOnActivate=m.getPooled(o,s),this.state.touchable.dimensionsOnActivate=d.getPooled(n,r))},_handleDelay:function(e){this.touchableDelayTimeout=null,this._receiveSignal(x,e)},_handleLongDelay:function(e){this.longPressDelayTimeout=null;var t=this.state.touchable.touchState;t!==A&&t!==N?console.error("Attempted to transition from state `"+t+"` to `"+N+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(Z,e)},_receiveSignal:function(e,t){var n=this.state.touchable.responderID,r=this.state.touchable.touchState,o=Y[r]&&Y[r][e];if(n||e!==G){if(!o)throw new Error("Unrecognized signal `"+e+"` or state `"+r+"` for Touchable responder `"+n+"`");if(o===w)throw new Error("Touchable cannot transition from `"+r+"` to `"+e+"` for responder `"+n+"`");r!==o&&(this._performSideEffectsForTransition(r,o,e,t),this.state.touchable.touchState=o)}},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null},_isHighlight:function(e){return e===A||e===N},_savePressInLocation:function(e){var t=v(e.nativeEvent),n=t&&t.pageX,r=t&&t.pageY,o=t&&t.locationX,s=t&&t.locationY;this.pressInLocation={pageX:n,pageY:r,locationX:o,locationY:s}},_getDistanceBetweenPoints:function(e,t,n,r){var o=e-n,s=t-r;return Math.sqrt(o*o+s*s)},_performSideEffectsForTransition:function(e,t,n,r){var o=this._isHighlight(e),s=this._isHighlight(t);(n===k||n===G)&&this._cancelLongPressDelayTimeout();var i=e===T&&t===y,a=!I[e]&&I[t];if((i||a)&&this._remeasureMetricsOnActivation(),H[e]&&n===Z&&this.touchableHandleLongPress&&this.touchableHandleLongPress(r),s&&!o?this._startHighlight(r):!s&&o&&this._endHighlight(r),H[e]&&n===G){var l=!!this.props.onLongPress,u=M[e]&&(!l||!this.touchableLongPressCancelsPress());(!M[e]||u)&&this.touchableHandlePress&&(s||o||(this._startHighlight(r),this._endHighlight(r)),this.touchableHandlePress(r))}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null},_playTouchSound:function(){_.Z.playTouchSound()},_startHighlight:function(e){this._savePressInLocation(e),this.touchableHandleActivePressIn&&this.touchableHandleActivePressIn(e)},_endHighlight:function(e){this.touchableHandleActivePressOut&&(this.touchableGetPressOutDelayMS&&this.touchableGetPressOutDelayMS()?this.pressOutDelayTimeout=setTimeout((()=>{this.touchableHandleActivePressOut(e)}),this.touchableGetPressOutDelayMS()):this.touchableHandleActivePressOut(e))},touchableHandleKeyEvent:function(e){var t=e.type,n=e.key;"Enter"!==n&&" "!==n||("keydown"===t?this._isTouchableKeyboardActive||this.state.touchable.touchState&&this.state.touchable.touchState!==T||(this.touchableHandleResponderGrant(e),this._isTouchableKeyboardActive=!0):"keyup"===t&&this._isTouchableKeyboardActive&&this.state.touchable.touchState&&this.state.touchable.touchState!==T&&(this.touchableHandleResponderRelease(e),this._isTouchableKeyboardActive=!1),e.stopPropagation(),"Enter"===n&&"link"===a.Z.propsToAriaRole(this.props)||e.preventDefault())},withoutDefaultFocusAndBlur:{}},B=(U.touchableHandleFocus,U.touchableHandleBlur,(0,s.Z)(U,["touchableHandleFocus","touchableHandleBlur"]));U.withoutDefaultFocusAndBlur=B;var X={Mixin:U,TOUCH_TARGET_DEBUG:!1,renderDebugView:e=>{var t=e.color,n=e.hitSlop;if(!X.TOUCH_TARGET_DEBUG)return null;var o={};for(var s in n=n||{top:0,bottom:0,left:0,right:0})o[s]=-n[s];var a=g()(t);if("number"!=typeof a)return null;var l="#"+("00000000"+a.toString(16)).substr(-8);return r.createElement(P.Z,{pointerEvents:"none",style:(0,i.Z)({position:"absolute",borderColor:l.slice(0,-2)+"55",borderWidth:1,borderStyle:"dashed",backgroundColor:l.slice(0,-2)+"0F"},o)})}};const $=X,q={top:20,left:20,right:20,bottom:30},{Mixin:z}=$,{touchableHandleStartShouldSetResponder:W,touchableHandleResponderTerminationRequest:K,touchableHandleResponderGrant:Q,touchableHandleResponderMove:J,touchableHandleResponderRelease:ee,touchableHandleResponderTerminate:te,touchableGetInitialState:ne}=z,re={...z,touchableHandleStartShouldSetResponder(e){const{onStartShouldSetResponder:t}=this.props;return t?t(e):W.call(this,e)},touchableHandleResponderTerminationRequest(e){const{onResponderTerminationRequest:t}=this.props;return t?t(e):K.call(this,e)},touchableHandleResponderGrant(e){const{onResponderGrant:t}=this.props;return t?t(e):Q.call(this,e)},touchableHandleResponderMove(e){const{onResponderMove:t}=this.props;return t?t(e):J.call(this,e)},touchableHandleResponderRelease(e){const{onResponderRelease:t}=this.props;return t?t(e):ee.call(this,e)},touchableHandleResponderTerminate(e){const{onResponderTerminate:t}=this.props;return t?t(e):te.call(this,e)},touchableHandlePress(e){const{onPress:t}=this.props;t&&t(e)},touchableHandleActivePressIn(e){const{onPressIn:t}=this.props;t&&t(e)},touchableHandleActivePressOut(e){const{onPressOut:t}=this.props;t&&t(e)},touchableHandleLongPress(e){const{onLongPress:t}=this.props;t&&t(e)},touchableGetPressRectOffset(){const{pressRetentionOffset:e}=this.props;return e||q},touchableGetHitSlop(){const{hitSlop:e}=this.props;return e},touchableGetHighlightDelayMS(){const{delayPressIn:e}=this.props;return e||0},touchableGetLongPressDelayMS(){const{delayLongPress:e}=this.props;return 0===e?0:e||500},touchableGetPressOutDelayMS(){const{delayPressOut:e}=this.props;return e||0}},oe=Object.keys(re),se=oe.map((e=>re[e])),ie=oe.length;var ae=n(72862);Math.PI;n(70357);function le(e){const t={};return null==e||e.forEach((e=>{const n=Object.keys(e);1!==n.length&&console.error("You must specify exactly one property per transform object.");const r=n[0],o=e[r];t[r]=o})),t}const ue=e=>e.onPress||e.onPressIn||e.onPressOut||e.onLongPress;function ce(e){const t=[];return null!=e.translate&&t.push(`translate(${e.translate})`),null==e.translateX&&null==e.translateY||t.push(`translate(${e.translateX||0}, ${e.translateY||0})`),null!=e.scale&&t.push(`scale(${e.scale})`),null==e.scaleX&&null==e.scaleY||t.push(`scale(${e.scaleX||1}, ${e.scaleY||1})`),null!=e.rotation&&t.push(`rotate(${e.rotation})`),null!=e.skewX&&t.push(`skewX(${e.skewX})`),null!=e.skewY&&t.push(`skewY(${e.skewY})`),t}function he(e,t){const n=[];if(t&&n.push(...ce(t)),Array.isArray(e))if("number"==typeof e[0])n.push(`matrix(${e.join(" ")})`);else{const t=le(e);n.push(...ce(t))}else"string"==typeof e&&n.push(e);return n.length?n.join(" "):void 0}const fe=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.props;const{transform:n,origin:r,originX:o,originY:s,fontFamily:i,fontSize:a,fontWeight:l,fontStyle:u,style:c,forwardedRef:h,gradientTransform:f,patternTransform:p,...d}=t,E={...ue(t)?{onStartShouldSetResponder:e.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:e.touchableHandleResponderTerminationRequest,onResponderGrant:e.touchableHandleResponderGrant,onResponderMove:e.touchableHandleResponderMove,onResponderRelease:e.touchableHandleResponderRelease,onResponderTerminate:e.touchableHandleResponderTerminate}:null,...d};null!=r?E["transform-origin"]=r.toString().replace(","," "):null==o&&null==s||(E["transform-origin"]=`${o||0} ${s||0}`);const R=he(n,t);R&&(E.transform=R);const g=he(f);g&&(E.gradientTransform=g);const b=he(p);b&&(E.patternTransform=b),E.ref=t=>{e.elementRef.current=t,"function"==typeof h?h(t):h&&(h.current=t)};const S={};var m,_;return null!=i&&(S.fontFamily=i),null!=a&&(S.fontSize=a),null!=l&&(S.fontWeight=l),null!=u&&(S.fontStyle=u),E.style=(_=S,(m=c)?ae.Z?[m,_]:m[Symbol.iterator]?Object.assign({},...m,_):Object.assign({},m,_):_),E},pe=e=>{if(e){if(1===e.nodeType&&"function"==typeof e.getBoundingClientRect)return e.getBoundingClientRect()}throw new Error("Can not get boundingClientRect of "+e||0)},de=(e,t)=>{const n=null==e?void 0:e.parentNode;n&&setTimeout((()=>{const r=pe(n),{height:o,left:s,top:i,width:a}=pe(e),l=s-r.left,u=i-r.top;t(l,u,a,o,s,i)}),0)};function Ee(){const e=this.state.touchable.responderID;null!==e&&de(e,this._handleQueryLayout)}class Re extends r.Component{prepareProps(e){return e}elementRef=r.createRef();lastMergedProps={};setNativeProps(e){const t=Object.assign({},this.props,this.lastMergedProps,e.style);this.lastMergedProps=t;const n=fe(this,this.prepareProps(t)),r=this.elementRef.current;if(r)for(const o of Object.keys(n)){const e=n[o];switch(o){case"ref":case"children":break;case"style":for(const e of[].concat(n.style??[]))Object.assign(r.style,e);break;default:r.setAttribute(o.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),e)}}}constructor(e){super(e),ue(e)&&(e=>{for(let t=0;t<ie;t++){const n=oe[t],r=se[t];e[n]="function"==typeof r?r.bind(e):r}e.state=ne()})(this),this._remeasureMetricsOnActivation=Ee.bind(this)}render(){if(!this.tag)throw new Error("When extending `WebShape` you need to overwrite either `tag` or `render`!");return this.lastMergedProps={},(0,o.Z)(this.tag,fe(this,this.prepareProps(this.props)))}}class ge extends Re{tag="circle"}class be extends Re{tag="svg";toDataURL(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.elementRef.current;if(null===n)return;const r=pe(n),o=Number(t.width)||r.width,s=Number(t.height)||r.height,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox",`0 0 ${r.width} ${r.height}`),i.setAttribute("width",String(o)),i.setAttribute("height",String(s)),i.appendChild(n.cloneNode(!0));const a=new window.Image;var l;a.onload=()=>{const t=document.createElement("canvas");t.width=o,t.height=s;const n=t.getContext("2d");null==n||n.drawImage(a,0,0),e(t.toDataURL().replace("data:image/png;base64,",""))},a.src=`data:image/svg+xml;utf8,${l=(new window.XMLSerializer).serializeToString(i),l.replace("<svg",~l.indexOf("xmlns")?"<svg":'<svg xmlns="http://www.w3.org/2000/svg"').replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}`}}},70357:e=>{function t(e,n,r,o){this.message=e,this.expected=n,this.found=r,this.location=o,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}!function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(t,Error),t.buildMessage=function(e,t){var n={literal:function(e){return'"'+o(e.text)+'"'},class:function(e){var t,n="";for(t=0;t<e.parts.length;t++)n+=e.parts[t]instanceof Array?s(e.parts[t][0])+"-"+s(e.parts[t][1]):s(e.parts[t]);return"["+(e.inverted?"^":"")+n+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function o(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function s(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}return"Expected "+function(e){var t,r,o,s=new Array(e.length);for(t=0;t<e.length;t++)s[t]=(o=e[t],n[o.type](o));if(s.sort(),s.length>0){for(t=1,r=1;t<s.length;t++)s[t-1]!==s[t]&&(s[r]=s[t],r++);s.length=r}switch(s.length){case 1:return s[0];case 2:return s[0]+" or "+s[1];default:return s.slice(0,-1).join(", ")+", or "+s[s.length-1]}}(e)+" but "+function(e){return e?'"'+o(e)+'"':"end of input"}(t)+" found."},e.exports={SyntaxError:t,parse:function(e,n){n=void 0!==n?n:{};var r,o={},s={transformList:he},i=he,a=function(e){return e},l=function(e,t){return r=t,o=(n=e)[0],s=n[1],i=n[2],a=n[3],l=n[4],u=n[5],c=r[0],h=r[1],f=r[2],p=r[3],d=r[4],E=r[5],[o*c+s*p,o*h+s*d,o*f+s*E+i,a*c+l*p,a*h+l*d,a*f+l*E+u];var n,r,o,s,i,a,l,u,c,h,f,p,d,E},u="matrix",c=oe("matrix",!1),h="(",f=oe("(",!1),p=")",d=oe(")",!1),E=function(e,t,n,r,o,s){return[e,n,o,t,r,s]},R="translate",g=oe("translate",!1),b=function(e,t){return[1,0,e,0,1,t||0]},S="scale",m=oe("scale",!1),_=function(e,t){return[e,0,0,0,null===t?e:t,0]},P="rotate",v=oe("rotate",!1),T=function(e,t){var n=Math.cos(ve*e),r=Math.sin(ve*e);if(null!==t){var o=t[0],s=t[1];return[n,-r,n*-o+-r*-s+o,r,n,r*-o+n*-s+s]}return[n,-r,0,r,n,0]},y="skewX",O=oe("skewX",!1),A=function(e){return[1,Math.tan(ve*e),0,0,1,0]},D="skewY",N=oe("skewY",!1),C=function(e){return[1,0,0,Math.tan(ve*e),1,0]},w=function(e){return parseFloat(e.join(""))},L=function(e){return parseInt(e.join(""))},I=function(e){return e},H=function(e,t){return[e,t]},M=",",x=oe(",",!1),j=function(e){return e.join("")},G=function(e){return e.join("")},k=function(e){return e.join("")},V=ie("fractionalConstant"),F=".",Z=oe(".",!1),Y=function(e,t){return[e?e.join(""):null,".",t.join("")].join("")},U=/^[eE]/,B=se(["e","E"],!1,!1),X=function(e){return[e[0],e[1],e[2].join("")].join("")},$=/^[+\-]/,q=se(["+","-"],!1,!1),z=/^[0-9]/,W=se([["0","9"]],!1,!1),K=/^[ \t\r\n]/,Q=se([" ","\t","\r","\n"],!1,!1),J=0,ee=[{line:1,column:1}],te=0,ne=[],re=0;if("startRule"in n){if(!(n.startRule in s))throw new Error("Can't start parsing from rule \""+n.startRule+'".');i=s[n.startRule]}function oe(e,t){return{type:"literal",text:e,ignoreCase:t}}function se(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function ie(e){return{type:"other",description:e}}function ae(t){var n,r=ee[t];if(r)return r;for(n=t-1;!ee[n];)n--;for(r={line:(r=ee[n]).line,column:r.column};n<t;)10===e.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++;return ee[t]=r,r}function le(e,t){var n=ae(e),r=ae(t);return{start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:r.line,column:r.column}}}function ue(e){J<te||(J>te&&(te=J,ne=[]),ne.push(e))}function ce(e,n,r){return new t(t.buildMessage(e,n),e,n,r)}function he(){var e,t,n,r,s;for(e=J,t=[],n=Pe();n!==o;)t.push(n),n=Pe();if(t!==o)if((n=fe())===o&&(n=null),n!==o){for(r=[],s=Pe();s!==o;)r.push(s),s=Pe();r!==o?(e,e=t=a(n)):(J=e,e=o)}else J=e,e=o;else J=e,e=o;return e}function fe(){var e,t,n,r;if(e=J,(t=pe())!==o){for(n=[],r=Re();r!==o;)n.push(r),r=Re();n!==o&&(r=fe())!==o?(e,e=t=l(t,r)):(J=e,e=o)}else J=e,e=o;return e===o&&(e=pe()),e}function pe(){var t;return(t=function(){var t,n,r,s,i,a,l,R,g,b,S,m,_;t=J,e.substr(J,6)===u?(n=u,J+=6):(n=o,0===re&&ue(c));if(n!==o){for(r=[],s=Pe();s!==o;)r.push(s),s=Pe();if(r!==o)if(40===e.charCodeAt(J)?(s=h,J++):(s=o,0===re&&ue(f)),s!==o){for(i=[],a=Pe();a!==o;)i.push(a),a=Pe();if(i!==o)if((a=de())!==o)if(Re()!==o)if((l=de())!==o)if(Re()!==o)if((R=de())!==o)if(Re()!==o)if((g=de())!==o)if(Re()!==o)if((b=de())!==o)if(Re()!==o)if((S=de())!==o){for(m=[],_=Pe();_!==o;)m.push(_),_=Pe();m!==o?(41===e.charCodeAt(J)?(_=p,J++):(_=o,0===re&&ue(d)),_!==o?(t,t=n=E(a,l,R,g,b,S)):(J=t,t=o)):(J=t,t=o)}else J=t,t=o;else J=t,t=o;else J=t,t=o;else J=t,t=o;else J=t,t=o;else J=t,t=o;else J=t,t=o;else J=t,t=o;else J=t,t=o;else J=t,t=o;else J=t,t=o;else J=t,t=o}else J=t,t=o;else J=t,t=o}else J=t,t=o;return t}())===o&&(t=function(){var t,n,r,s,i,a,l,u,c;t=J,e.substr(J,9)===R?(n=R,J+=9):(n=o,0===re&&ue(g));if(n!==o){for(r=[],s=Pe();s!==o;)r.push(s),s=Pe();if(r!==o)if(40===e.charCodeAt(J)?(s=h,J++):(s=o,0===re&&ue(f)),s!==o){for(i=[],a=Pe();a!==o;)i.push(a),a=Pe();if(i!==o)if((a=de())!==o)if((l=Ee())===o&&(l=null),l!==o){for(u=[],c=Pe();c!==o;)u.push(c),c=Pe();u!==o?(41===e.charCodeAt(J)?(c=p,J++):(c=o,0===re&&ue(d)),c!==o?(t,t=n=b(a,l)):(J=t,t=o)):(J=t,t=o)}else J=t,t=o;else J=t,t=o;else J=t,t=o}else J=t,t=o;else J=t,t=o}else J=t,t=o;return t}())===o&&(t=function(){var t,n,r,s,i,a,l,u,c;t=J,e.substr(J,5)===S?(n=S,J+=5):(n=o,0===re&&ue(m));if(n!==o){for(r=[],s=Pe();s!==o;)r.push(s),s=Pe();if(r!==o)if(40===e.charCodeAt(J)?(s=h,J++):(s=o,0===re&&ue(f)),s!==o){for(i=[],a=Pe();a!==o;)i.push(a),a=Pe();if(i!==o)if((a=de())!==o)if((l=Ee())===o&&(l=null),l!==o){for(u=[],c=Pe();c!==o;)u.push(c),c=Pe();u!==o?(41===e.charCodeAt(J)?(c=p,J++):(c=o,0===re&&ue(d)),c!==o?(t,t=n=_(a,l)):(J=t,t=o)):(J=t,t=o)}else J=t,t=o;else J=t,t=o;else J=t,t=o}else J=t,t=o;else J=t,t=o}else J=t,t=o;return t}())===o&&(t=function(){var t,n,r,s,i,a,l,u,c;t=J,e.substr(J,6)===P?(n=P,J+=6):(n=o,0===re&&ue(v));if(n!==o){for(r=[],s=Pe();s!==o;)r.push(s),s=Pe();if(r!==o)if(40===e.charCodeAt(J)?(s=h,J++):(s=o,0===re&&ue(f)),s!==o){for(i=[],a=Pe();a!==o;)i.push(a),a=Pe();if(i!==o)if((a=de())!==o)if(l=function(){var e,t,n,r;e=J,t=Re(),t!==o&&(n=de())!==o&&Re()!==o&&(r=de())!==o?(e,e=t=H(n,r)):(J=e,e=o);return e}(),l===o&&(l=null),l!==o){for(u=[],c=Pe();c!==o;)u.push(c),c=Pe();u!==o?(41===e.charCodeAt(J)?(c=p,J++):(c=o,0===re&&ue(d)),c!==o?(t,t=n=T(a,l)):(J=t,t=o)):(J=t,t=o)}else J=t,t=o;else J=t,t=o;else J=t,t=o}else J=t,t=o;else J=t,t=o}else J=t,t=o;return t}())===o&&(t=function(){var t,n,r,s,i,a,l,u;t=J,e.substr(J,5)===y?(n=y,J+=5):(n=o,0===re&&ue(O));if(n!==o){for(r=[],s=Pe();s!==o;)r.push(s),s=Pe();if(r!==o)if(40===e.charCodeAt(J)?(s=h,J++):(s=o,0===re&&ue(f)),s!==o){for(i=[],a=Pe();a!==o;)i.push(a),a=Pe();if(i!==o)if((a=de())!==o){for(l=[],u=Pe();u!==o;)l.push(u),u=Pe();l!==o?(41===e.charCodeAt(J)?(u=p,J++):(u=o,0===re&&ue(d)),u!==o?(t,t=n=A(a)):(J=t,t=o)):(J=t,t=o)}else J=t,t=o;else J=t,t=o}else J=t,t=o;else J=t,t=o}else J=t,t=o;return t}())===o&&(t=function(){var t,n,r,s,i,a,l,u;t=J,e.substr(J,5)===D?(n=D,J+=5):(n=o,0===re&&ue(N));if(n!==o){for(r=[],s=Pe();s!==o;)r.push(s),s=Pe();if(r!==o)if(40===e.charCodeAt(J)?(s=h,J++):(s=o,0===re&&ue(f)),s!==o){for(i=[],a=Pe();a!==o;)i.push(a),a=Pe();if(i!==o)if((a=de())!==o){for(l=[],u=Pe();u!==o;)l.push(u),u=Pe();l!==o?(41===e.charCodeAt(J)?(u=p,J++):(u=o,0===re&&ue(d)),u!==o?(t,t=n=C(a)):(J=t,t=o)):(J=t,t=o)}else J=t,t=o;else J=t,t=o}else J=t,t=o;else J=t,t=o}else J=t,t=o;return t}()),t}function de(){var t,n,r,s;return t=J,n=J,(r=Se())===o&&(r=null),r!==o?(s=function(){var t,n,r,s;t=J,n=J,r=function(){var t,n,r,s;re++,t=J,n=me(),n===o&&(n=null);n!==o?(46===e.charCodeAt(J)?(r=F,J++):(r=o,0===re&&ue(Z)),r!==o&&(s=me())!==o?(t,t=n=Y(n,s)):(J=t,t=o)):(J=t,t=o);t===o&&(t=J,(n=me())!==o?(46===e.charCodeAt(J)?(r=F,J++):(r=o,0===re&&ue(Z)),r!==o?(t,t=n=k(n)):(J=t,t=o)):(J=t,t=o));re--,t===o&&(n=o,0===re&&ue(V));return t}(),r!==o?((s=be())===o&&(s=null),s!==o?n=r=[r,s]:(J=n,n=o)):(J=n,n=o);n!==o&&(t,n=G(n));t=n,t===o&&(t=J,n=J,(r=me())!==o&&(s=be())!==o?n=r=[r,s]:(J=n,n=o),n!==o&&(t,n=k(n)),t=n);return t}(),s!==o?n=r=[r,s]:(J=n,n=o)):(J=n,n=o),n!==o&&(t,n=w(n)),(t=n)===o&&(t=J,n=J,(r=Se())===o&&(r=null),r!==o?(s=function(){var e,t;e=J,t=me(),t!==o&&(e,t=j(t));return e=t,e}(),s!==o?n=r=[r,s]:(J=n,n=o)):(J=n,n=o),n!==o&&(t,n=L(n)),t=n),t}function Ee(){var e,t;return e=J,Re()!==o&&(t=de())!==o?(e,e=I(t)):(J=e,e=o),e}function Re(){var e,t,n,r,s;if(e=J,t=[],(n=Pe())!==o)for(;n!==o;)t.push(n),n=Pe();else t=o;if(t!==o)if((n=ge())===o&&(n=null),n!==o){for(r=[],s=Pe();s!==o;)r.push(s),s=Pe();r!==o?e=t=[t,n,r]:(J=e,e=o)}else J=e,e=o;else J=e,e=o;if(e===o)if(e=J,(t=ge())!==o){for(n=[],r=Pe();r!==o;)n.push(r),r=Pe();n!==o?e=t=[t,n]:(J=e,e=o)}else J=e,e=o;return e}function ge(){var t;return 44===e.charCodeAt(J)?(t=M,J++):(t=o,0===re&&ue(x)),t}function be(){var t,n,r,s,i;return t=J,n=J,U.test(e.charAt(J))?(r=e.charAt(J),J++):(r=o,0===re&&ue(B)),r!==o?((s=Se())===o&&(s=null),s!==o&&(i=me())!==o?n=r=[r,s,i]:(J=n,n=o)):(J=n,n=o),n!==o&&(t,n=X(n)),t=n}function Se(){var t;return $.test(e.charAt(J))?(t=e.charAt(J),J++):(t=o,0===re&&ue(q)),t}function me(){var e,t;if(e=[],(t=_e())!==o)for(;t!==o;)e.push(t),t=_e();else e=o;return e}function _e(){var t;return z.test(e.charAt(J))?(t=e.charAt(J),J++):(t=o,0===re&&ue(W)),t}function Pe(){var t;return K.test(e.charAt(J))?(t=e.charAt(J),J++):(t=o,0===re&&ue(Q)),t}var ve=Math.PI/180;if((r=i())!==o&&J===e.length)return r;throw r!==o&&J<e.length&&ue({type:"end"}),ce(ne,te<e.length?e.charAt(te):null,te<e.length?le(te,te+1):le(te,te))}}},14779:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),o=n(72862),s=n(83117),i=n(80102),a=n(16528),l=n(94119),u=n(67177),c=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function h(e,t){var n=e.activeOpacity,o=e.delayPressIn,h=e.delayPressOut,p=e.delayLongPress,d=e.disabled,E=e.focusable,R=e.onLongPress,g=e.onPress,b=e.onPressIn,S=e.onPressOut,m=e.rejectResponderTermination,_=e.style,P=(0,i.Z)(e,c),v=(0,r.useRef)(null),T=(0,a.Z)(t,v),y=(0,r.useState)("0s"),O=y[0],A=y[1],D=(0,r.useState)(null),N=D[0],C=D[1],w=(0,r.useCallback)(((e,t)=>{C(e),A(t?t/1e3+"s":"0s")}),[C,A]),L=(0,r.useCallback)((e=>{w(null!=n?n:.2,e)}),[n,w]),I=(0,r.useCallback)((e=>{w(null,e)}),[w]),H=(0,r.useMemo)((()=>({cancelable:!m,disabled:d,delayLongPress:p,delayPressStart:o,delayPressEnd:h,onLongPress:R,onPress:g,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;L(t?0:150),null!=b&&b(e)},onPressEnd(e){I(250),null!=S&&S(e)}})),[p,o,h,d,R,g,b,S,m,L,I]),M=(0,l.Z)(v,H);return r.createElement(u.Z,(0,s.Z)({},P,M,{accessibilityDisabled:d,focusable:!d&&!1!==E,pointerEvents:d?"none":void 0,ref:T,style:[f.root,!d&&f.actionable,_,null!=N&&{opacity:N},{transitionDuration:O}]}))}var f=o.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=r.memo(r.forwardRef(h));p.displayName="TouchableOpacity";const d=p;var E=n(24404),R=r.forwardRef(((e,t)=>{var n=e.accessibilityLabel,o=e.color,s=e.disabled,i=e.onPress,a=e.testID,l=e.title;return r.createElement(d,{accessibilityLabel:n,accessibilityRole:"button",disabled:s,focusable:!s,onPress:i,ref:t,style:[g.button,o&&{backgroundColor:o},s&&g.buttonDisabled],testID:a},r.createElement(E.Z,{style:[g.text,s&&g.textDisabled]},l))}));R.displayName="Button";var g=o.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const b=R}}]);