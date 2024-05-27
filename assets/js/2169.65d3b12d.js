"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2169,4216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=o,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87827:(e,t,n)=>{n.d(t,{o:()=>y});const r=4,o=.001,a=1e-7,i=10,s=11,c=1/(s-1);function l(e,t){return 1-3*t+3*e}function u(e,t){return 3*t-6*e}function f(e){return 3*e}function d(e,t,n){return((l(t,n)*e+u(t,n))*e+f(t))*e}function p(e,t,n){return 3*l(t,n)*e*e+2*u(t,n)*e+f(t)}function m(e,t,n,l){if(!(e>=0&&e<=1&&n>=0&&n<=1))throw new Error("[Reanimated] Bezier x values must be in [0, 1] range.");if(e===t&&n===l)return function(e){return e};const u=new Array(s);for(let r=0;r<s;++r)u[r]=d(r*c,e,n);function f(t){let l=0,f=1;const m=s-1;for(;f!==m&&u[f]<=t;++f)l+=c;--f;const y=l+(t-u[f])/(u[f+1]-u[f])*c,b=p(y,e,n);return b>=o?function(e,t,n,o){for(let a=0;a<r;++a){const r=p(t,n,o);if(0===r)return t;t-=(d(t,n,o)-e)/r}return t}(t,y,e,n):0===b?y:function(e,t,n,r,o){let s,c,l=0;do{c=t+(n-t)/2,s=d(c,r,o)-e,s>0?n=c:t=c}while(Math.abs(s)>a&&++l<i);return c}(t,l,l+c,e,n)}return function(r){return e===t&&n===l?r:0===r?0:1===r?1:d(f(r),t,l)}}const y={linear:function(e){return e},ease:function(e){return m(.42,0,1,1)(e)},quad:function(e){return e*e},cubic:function(e){return e*e*e},poly:function(e){return t=>Math.pow(t,e)},sin:function(e){return 1-Math.cos(e*Math.PI/2)},circle:function(e){return 1-Math.sqrt(1-e*e)},exp:function(e){return Math.pow(2,10*(e-1))},elastic:function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return t=>1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*e)},back:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return t=>t*t*((e+1)*t-e)},bounce:function(e){if(e<1/2.75)return 7.5625*e*e;if(e<2/2.75){const t=e-1.5/2.75;return 7.5625*t*t+.75}if(e<2.5/2.75){const t=e-2.25/2.75;return 7.5625*t*t+.9375}const t=e-2.625/2.75;return 7.5625*t*t+.984375},bezier:function(e,t,n,r){return{factory:()=>m(e,t,n,r)}},bezierFn:function(e,t,n,r){return m(e,t,n,r)},steps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n=>{const r=Math.min(Math.max(n,0),1)*e;return t?Math.ceil(r)/e:Math.floor(r)/e}},in:function(e){return e},out:function(e){return t=>1-e(1-t)},inOut:function(e){return t=>t<.5?e(2*t)/2:1-e(2*(1-t))/2}}},6328:(e,t,n)=>{n.d(t,{j:()=>a});var r=n(87827),o=n(76933);const a=function(e,t,n){return(0,o.oF)(e,(()=>{const a={duration:300,easing:r.o.inOut(r.o.quad)};return t&&Object.keys(t).forEach((e=>a[e]=t[e])),{type:"timing",onFrame:function(e,t){const{toValue:n,startTime:r,startValue:o}=e,i=t-r;if(i>=a.duration)return e.startTime=0,e.current=n,!0;const s=e.easing(i/a.duration);return e.current=o+(n-o)*s,!1},onStart:function(t,n,r,o){o&&"timing"===o.type&&o.toValue===e&&o.startTime?(t.startTime=o.startTime,t.startValue=o.startValue):(t.startTime=r,t.startValue=n),t.current=n,"object"==typeof a.easing?t.easing=a.easing.factory():t.easing=a.easing},progress:0,toValue:e,startValue:0,startTime:0,easing:()=>0,current:e,callback:n,reduceMotion:(0,o.uh)(null==t?void 0:t.reduceMotion)}}))}},49638:(e,t,n)=>{n.d(t,{n:()=>o});var r=n(67177);const o=(0,n(99435).F)(r.Z)},35842:(e,t,n)=>{n.d(t,{l:()=>b});var r=n(67294),o=n(86425),a=n(97604),i=n(49402),s=n(76933),c=n(10758),l=n(40093),u=n(41956),f=n(83442);const d=(0,f.Wr)();function p(e,t,n,r){if(Array.isArray(t)&&t.forEach(((t,o)=>{p(e,t,n&&n[o],r&&r[o])})),"object"==typeof t&&t.onFrame){const o=t;let a=o.current;null!=r&&("object"==typeof r?void 0!==r.value?a=r.value:void 0!==r.onFrame&&(void 0!==(null==n?void 0:n.current)?a=n.current:void 0!==(null==r?void 0:r.current)&&(a=r.current)):a=r),o.callStart=e=>{o.onStart(o,a,e,n)},o.callStart(e),o.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((o=>p(e,t[o],n&&n[o],r&&r[o])))}function m(e,t,n,r,o){if(!o.value)return!0;if(Array.isArray(e)){r[n]=[];let a=!0;return e.forEach(((e,i)=>{m(e,t,i,r[n],o)||(a=!1)})),a}if("object"==typeof e&&e.onFrame){let o=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),o=e.onFrame(e,t),e.timestamp=t,o&&(e.finished=!0,e.callback&&e.callback(!0))),r[n]=e.current,o}if("object"==typeof e){r[n]={};let a=!0;return Object.keys(e).forEach((i=>{m(e[i],t,i,r[n],o)||(a=!1)})),a}return r[n]=e,!0}function y(e,t){if(Array.isArray(e))for(const n of e)y(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))y(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function b(e,t,b){let v=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const g=(0,u.H)(),h=(0,r.useRef)();let w=Object.values(e.__closure??{});var O;d&&(!w.length&&null!==(O=t)&&void 0!==O&&O.length&&(w=t));const P=b?Array.isArray(b)?b:[b]:[],j=b?(0,l.Nq)(P):null,A=(0,c.y)(!0),E=(0,r.useRef)({});if(t?t.push(e.__workletHash):t=[...w,e.__workletHash],j&&t.push(j),!h.current){const t=(0,s.AX)(e);0,h.current={initial:{value:t,updater:e},remoteState:(0,o.Uv)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,u.G)()}}const{initial:R,remoteState:k,viewDescriptors:S}=h.current,C=S.shareableViewDescriptors;t.push(C),(0,r.useEffect)((()=>{let t,r=e;b&&(r=()=>{const t=e();return P.forEach((e=>{e(t)})),t}),t=(0,f.V5)()?()=>{!function(e,t,r,o,a,s,c){const u=r.animations??{},f=t()??{},d=r.last;let y,b=!1;Object.keys(u).forEach((e=>{const t=f[e];(0,l.mE)(t)||delete u[e]})),Object.keys(f).forEach((e=>{const t=f[e];(0,l.mE)(t)&&(y=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),p(y,t,u[e],d[e]),u[e]=t,b=!0)})),b?(r.animations=u,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,function t(n){const{animations:l,last:u,isAnimationCancelled:f}=r;if(f)return void(r.isAnimationRunning=!1);const d={};let p=!0;Object.keys(l).forEach((e=>{m(l[e],n,e,d,a)?(u[e]=d[e],delete l[e]):p=!1})),Object.keys(d).length&&(0,i.R)(e,d,o,s,c),p?r.isAnimationRunning=!1:requestAnimationFrame(t)}(y))):(r.isAnimationCancelled=!0,r.animations=[]),r.last=f,(0,l.wU)(d,f)||(0,i.R)(e,f,o,s,c)}(C,e,k,g,A,E,P)}:()=>{!function(e,t,r,o,a){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const c=r.animations??{},u=t()??{},f=r.last,d={};let y,b=!1,v=!1;for(const i in u){const e=u[i];(0,l.mE)(e)?(y=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),p(y,e,c[i],f[i]),c[i]=e,b=!0):(v=!0,d[i]=e,delete c[i])}if(b){const t=n=>{const{animations:s,last:c,isAnimationCancelled:l}=r;if(l)return void(r.isAnimationRunning=!1);const u={};let f=!0;for(const e in s)m(s[e],n,e,u,a)?(c[e]=u[e],delete s[e]):f=!1;u&&(0,i.Z)(e,u,o),f?r.isAnimationRunning=!1:requestAnimationFrame(t)};r.animations=c,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,t(y)),v&&(0,i.Z)(e,d,o)}else r.isAnimationCancelled=!0,r.animations=[],(0,l.wU)(f,u)||(0,i.Z)(e,u,o,s);r.last=u}(C,r,k,g,A,v)};const o=(0,a.R)(t,w);return()=>{(0,a.B)(o)}}),t),(0,r.useEffect)((()=>(A.value=!0,()=>{A.value=!1})),[A]),y(R.value);const _=(0,r.useRef)(null);return _.current||(_.current=(0,f.V5)()?{viewDescriptors:S,initial:R,viewsRef:g,jestAnimatedStyle:E}:{initial:R,viewsRef:g,viewDescriptors:S}),_.current}},56389:(e,t,n)=>{n.d(t,{o:()=>c});var r=n(67294),o=n(76933),a=n(96085),i=n(97604),s=n(83442);function c(e,t){const n=(0,r.useRef)(null);let c=Object.values(e.__closure??{});var l;(0,s.Wr)()&&(!c.length&&null!==(l=t)&&void 0!==l&&l.length&&(c=t));void 0===t?t=[...c,e.__workletHash]:t.push(e.__workletHash),null===n.current&&(n.current=(0,a.v)((0,o.AX)(e)));const u=n.current;return(0,r.useEffect)((()=>{const t=(0,i.R)((()=>{u.value=e()}),c,[u]);return()=>{(0,i.B)(t)}}),t),(0,r.useEffect)((()=>()=>{n.current=null}),[]),u}},72400:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(28033),a=n(88548),i=n(24404),s=r.forwardRef(((e,t)=>{var n=e.accessibilityLabel,o=e.color,s=e.disabled,l=e.onPress,u=e.testID,f=e.title;return r.createElement(a.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:s,focusable:!s,onPress:l,ref:t,style:[c.button,o&&{backgroundColor:o},s&&c.buttonDisabled],testID:u},r.createElement(i.Z,{style:[c.text,s&&c.textDisabled]},f))}));s.displayName="Button";var c=o.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const l=s},76636:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),o=n(63366),a=n(67294),i=n(28033),s=n(67177),c=n(13145),l=["style"],u=c.Z&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",f=a.forwardRef(((e,t)=>{var n=e.style,c=(0,o.Z)(e,l);return a.createElement(s.Z,(0,r.Z)({},c,{ref:t,style:i.Z.compose(d.root,n)}))}));f.displayName="SafeAreaView";var d=i.Z.create({root:{paddingTop:u+"(safe-area-inset-top)",paddingRight:u+"(safe-area-inset-right)",paddingBottom:u+"(safe-area-inset-bottom)",paddingLeft:u+"(safe-area-inset-left)"}});const p=f},88548:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(63366),a=n(67294),i=n(16528),s=n(94119),c=n(28033),l=n(67177),u=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function f(e,t){var n=e.activeOpacity,c=e.delayPressIn,f=e.delayPressOut,p=e.delayLongPress,m=e.disabled,y=e.focusable,b=e.onLongPress,v=e.onPress,g=e.onPressIn,h=e.onPressOut,w=e.rejectResponderTermination,O=e.style,P=(0,o.Z)(e,u),j=(0,a.useRef)(null),A=(0,i.Z)(t,j),E=(0,a.useState)("0s"),R=E[0],k=E[1],S=(0,a.useState)(null),C=S[0],_=S[1],T=(0,a.useCallback)(((e,t)=>{_(e),k(t?t/1e3+"s":"0s")}),[_,k]),Z=(0,a.useCallback)((e=>{T(null!=n?n:.2,e)}),[n,T]),D=(0,a.useCallback)((e=>{T(null,e)}),[T]),M=(0,a.useMemo)((()=>({cancelable:!w,disabled:m,delayLongPress:p,delayPressStart:c,delayPressEnd:f,onLongPress:b,onPress:v,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;Z(t?0:150),null!=g&&g(e)},onPressEnd(e){D(250),null!=h&&h(e)}})),[p,c,f,m,b,v,g,h,w,Z,D]),x=(0,s.Z)(j,M);return a.createElement(l.Z,(0,r.Z)({},P,x,{accessibilityDisabled:m,focusable:!m&&!1!==y,pointerEvents:m?"none":void 0,ref:A,style:[d.root,!m&&d.actionable,O,null!=C&&{opacity:C},{transitionDuration:R}]}))}var d=c.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=a.memo(a.forwardRef(f));p.displayName="TouchableOpacity";const m=p}}]);