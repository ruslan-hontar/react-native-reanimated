"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[f]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87827:(e,t,n)=>{n.d(t,{o:()=>m});const r=4,o=.001,a=1e-7,i=10,u=11,s=1/(u-1);function c(e,t){return 1-3*t+3*e}function l(e,t){return 3*t-6*e}function f(e){return 3*e}function p(e,t,n){return((c(t,n)*e+l(t,n))*e+f(t))*e}function d(e,t,n){return 3*c(t,n)*e*e+2*l(t,n)*e+f(t)}function y(e,t,n,c){if(!(e>=0&&e<=1&&n>=0&&n<=1))throw new Error("[Reanimated] Bezier x values must be in [0, 1] range.");if(e===t&&n===c)return function(e){return e};const l=new Array(u);for(let r=0;r<u;++r)l[r]=p(r*s,e,n);function f(t){let c=0,f=1;const y=u-1;for(;f!==y&&l[f]<=t;++f)c+=s;--f;const m=c+(t-l[f])/(l[f+1]-l[f])*s,v=d(m,e,n);return v>=o?function(e,t,n,o){for(let a=0;a<r;++a){const r=d(t,n,o);if(0===r)return t;t-=(p(t,n,o)-e)/r}return t}(t,m,e,n):0===v?m:function(e,t,n,r,o){let u,s,c=0;do{s=t+(n-t)/2,u=p(s,r,o)-e,u>0?n=s:t=s}while(Math.abs(u)>a&&++c<i);return s}(t,c,c+s,e,n)}return function(r){return e===t&&n===c?r:0===r?0:1===r?1:p(f(r),t,c)}}const m={linear:function(e){return e},ease:function(e){return y(.42,0,1,1)(e)},quad:function(e){return e*e},cubic:function(e){return e*e*e},poly:function(e){return t=>Math.pow(t,e)},sin:function(e){return 1-Math.cos(e*Math.PI/2)},circle:function(e){return 1-Math.sqrt(1-e*e)},exp:function(e){return Math.pow(2,10*(e-1))},elastic:function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return t=>1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*e)},back:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return t=>t*t*((e+1)*t-e)},bounce:function(e){if(e<1/2.75)return 7.5625*e*e;if(e<2/2.75){const t=e-1.5/2.75;return 7.5625*t*t+.75}if(e<2.5/2.75){const t=e-2.25/2.75;return 7.5625*t*t+.9375}const t=e-2.625/2.75;return 7.5625*t*t+.984375},bezier:function(e,t,n,r){return{factory:()=>y(e,t,n,r)}},bezierFn:function(e,t,n,r){return y(e,t,n,r)},steps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n=>{const r=Math.min(Math.max(n,0),1)*e;return t?Math.ceil(r)/e:Math.floor(r)/e}},in:function(e){return e},out:function(e){return t=>1-e(1-t)},inOut:function(e){return t=>t<.5?e(2*t)/2:1-e(2*(1-t))/2}}},65641:(e,t,n)=>{n.d(t,{p:()=>o});var r=n(76933);const o=function(e,t,n){return(0,r.oF)(t,(()=>{const o="function"==typeof t?t():t;return{isHigherOrder:!0,onFrame:function(t,n){const{startTime:r,started:a,previousAnimation:i}=t,u=t.current;if(n-r>e||t.reduceMotion){a||(o.onStart(o,u,n,i),t.previousAnimation=null,t.started=!0);const e=o.onFrame(o,n);return t.current=o.current,e}if(i){const e=i.finished||i.onFrame(i,n);t.current=i.current,e&&(t.previousAnimation=null)}return!1},onStart:function(e,t,n,r){e.startTime=n,e.started=!1,e.current=t,e.previousAnimation=r===e?r.previousAnimation:r,void 0===o.reduceMotion&&(o.reduceMotion=e.reduceMotion)},current:o.current,callback:e=>{o.callback&&o.callback(e)},previousAnimation:null,startTime:0,started:!1,reduceMotion:(0,r.uh)(n)}}))}},6328:(e,t,n)=>{n.d(t,{j:()=>a});var r=n(87827),o=n(76933);const a=function(e,t,n){return(0,o.oF)(e,(()=>{const a={duration:300,easing:r.o.inOut(r.o.quad)};return t&&Object.keys(t).forEach((e=>a[e]=t[e])),{type:"timing",onFrame:function(e,t){const{toValue:n,startTime:r,startValue:o}=e,i=t-r;if(i>=a.duration)return e.startTime=0,e.current=n,!0;const u=e.easing(i/a.duration);return e.current=o+(n-o)*u,!1},onStart:function(t,n,r,o){o&&"timing"===o.type&&o.toValue===e&&o.startTime?(t.startTime=o.startTime,t.startValue=o.startValue):(t.startTime=r,t.startValue=n),t.current=n,"object"==typeof a.easing?t.easing=a.easing.factory():t.easing=a.easing},progress:0,toValue:e,startValue:0,startTime:0,easing:()=>0,current:e,callback:n,reduceMotion:(0,o.uh)(null==t?void 0:t.reduceMotion)}}))}},49638:(e,t,n)=>{n.d(t,{n:()=>o});var r=n(67177);const o=(0,n(99435).F)(r.Z)},56389:(e,t,n)=>{n.d(t,{o:()=>s});var r=n(67294),o=n(76933),a=n(96085),i=n(97604),u=n(83442);function s(e,t){const n=(0,r.useRef)(null);let s=Object.values(e.__closure??{});var c;(0,u.Wr)()&&(!s.length&&null!==(c=t)&&void 0!==c&&c.length&&(s=t));void 0===t?t=[...s,e.__workletHash]:t.push(e.__workletHash),null===n.current&&(n.current=(0,a.v)((0,o.AX)(e)));const l=n.current;return(0,r.useEffect)((()=>{const t=(0,i.R)((()=>{l.value=e()}),s,[l]);return()=>{(0,i.B)(t)}}),t),(0,r.useEffect)((()=>()=>{n.current=null}),[]),l}},76636:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),o=n(63366),a=n(67294),i=n(28033),u=n(67177),s=n(13145),c=["style"],l=s.Z&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",f=a.forwardRef(((e,t)=>{var n=e.style,s=(0,o.Z)(e,c);return a.createElement(u.Z,(0,r.Z)({},s,{ref:t,style:i.Z.compose(p.root,n)}))}));f.displayName="SafeAreaView";var p=i.Z.create({root:{paddingTop:l+"(safe-area-inset-top)",paddingRight:l+"(safe-area-inset-right)",paddingBottom:l+"(safe-area-inset-bottom)",paddingLeft:l+"(safe-area-inset-left)"}});const d=f},88548:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(87462),o=n(63366),a=n(67294),i=n(16528),u=n(94119),s=n(28033),c=n(67177),l=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function f(e,t){var n=e.activeOpacity,s=e.delayPressIn,f=e.delayPressOut,d=e.delayLongPress,y=e.disabled,m=e.focusable,v=e.onLongPress,b=e.onPress,g=e.onPressIn,h=e.onPressOut,O=e.rejectResponderTermination,P=e.style,w=(0,o.Z)(e,l),M=(0,a.useRef)(null),j=(0,i.Z)(t,M),T=(0,a.useState)("0s"),k=T[0],E=T[1],S=(0,a.useState)(null),Z=S[0],C=S[1],_=(0,a.useCallback)(((e,t)=>{C(e),E(t?t/1e3+"s":"0s")}),[C,E]),x=(0,a.useCallback)((e=>{_(null!=n?n:.2,e)}),[n,_]),A=(0,a.useCallback)((e=>{_(null,e)}),[_]),R=(0,a.useMemo)((()=>({cancelable:!O,disabled:y,delayLongPress:d,delayPressStart:s,delayPressEnd:f,onLongPress:v,onPress:b,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;x(t?0:150),null!=g&&g(e)},onPressEnd(e){A(250),null!=h&&h(e)}})),[d,s,f,y,v,b,g,h,O,x,A]),F=(0,u.Z)(M,R);return a.createElement(c.Z,(0,r.Z)({},w,F,{accessibilityDisabled:y,focusable:!y&&!1!==m,pointerEvents:y?"none":void 0,ref:j,style:[p.root,!y&&p.actionable,P,null!=Z&&{opacity:Z},{transitionDuration:k}]}))}var p=s.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),d=a.memo(a.forwardRef(f));d.displayName="TouchableOpacity";const y=d}}]);