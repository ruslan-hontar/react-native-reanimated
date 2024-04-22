"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4986],{87827:(t,e,n)=>{n.d(e,{o:()=>g});const r=4,a=.001,o=1e-7,u=10,i=11,s=1/(i-1);function l(t,e){return 1-3*e+3*t}function c(t,e){return 3*e-6*t}function p(t){return 3*t}function f(t,e,n){return((l(e,n)*t+c(e,n))*t+p(e))*t}function d(t,e,n){return 3*l(e,n)*t*t+2*c(e,n)*t+p(e)}function h(t,e,n,l){if(!(t>=0&&t<=1&&n>=0&&n<=1))throw new Error("[Reanimated] Bezier x values must be in [0, 1] range.");if(t===e&&n===l)return function(t){return t};const c=new Array(i);for(let r=0;r<i;++r)c[r]=f(r*s,t,n);function p(e){let l=0,p=1;const h=i-1;for(;p!==h&&c[p]<=e;++p)l+=s;--p;const g=l+(e-c[p])/(c[p+1]-c[p])*s,E=d(g,t,n);return E>=a?function(t,e,n,a){for(let o=0;o<r;++o){const r=d(e,n,a);if(0===r)return e;e-=(f(e,n,a)-t)/r}return e}(e,g,t,n):0===E?g:function(t,e,n,r,a){let i,s,l=0;do{s=e+(n-e)/2,i=f(s,r,a)-t,i>0?n=s:e=s}while(Math.abs(i)>o&&++l<u);return s}(e,l,l+s,t,n)}return function(r){return t===e&&n===l?r:0===r?0:1===r?1:f(p(r),e,l)}}const g={linear:function(t){return t},ease:function(t){return h(.42,0,1,1)(t)},quad:function(t){return t*t},cubic:function(t){return t*t*t},poly:function(t){return e=>Math.pow(e,t)},sin:function(t){return 1-Math.cos(t*Math.PI/2)},circle:function(t){return 1-Math.sqrt(1-t*t)},exp:function(t){return Math.pow(2,10*(t-1))},elastic:function(){const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return e=>1-Math.pow(Math.cos(e*Math.PI/2),3)*Math.cos(e*t)},back:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return e=>e*e*((t+1)*e-t)},bounce:function(t){if(t<1/2.75)return 7.5625*t*t;if(t<2/2.75){const e=t-1.5/2.75;return 7.5625*e*e+.75}if(t<2.5/2.75){const e=t-2.25/2.75;return 7.5625*e*e+.9375}const e=t-2.625/2.75;return 7.5625*e*e+.984375},bezier:function(t,e,n,r){return{factory:()=>h(t,e,n,r)}},bezierFn:function(t,e,n,r){return h(t,e,n,r)},steps:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n=>{const r=Math.min(Math.max(n,0),1)*t;return e?Math.ceil(r)/t:Math.floor(r)/t}},in:function(t){return t},out:function(t){return e=>1-t(1-e)},inOut:function(t){return e=>e<.5?t(2*e)/2:1-t(2*(1-e))/2}}},6328:(t,e,n)=>{n.d(e,{j:()=>o});var r=n(87827),a=n(76933);const o=function(t,e,n){return(0,a.oF)(t,(()=>{const o={duration:300,easing:r.o.inOut(r.o.quad)};return e&&Object.keys(e).forEach((t=>o[t]=e[t])),{type:"timing",onFrame:function(t,e){const{toValue:n,startTime:r,startValue:a}=t,u=e-r;if(u>=o.duration)return t.startTime=0,t.current=n,!0;const i=t.easing(u/o.duration);return t.current=a+(n-a)*i,!1},onStart:function(e,n,r,a){a&&"timing"===a.type&&a.toValue===t&&a.startTime?(e.startTime=a.startTime,e.startValue=a.startValue):(e.startTime=r,e.startValue=n),e.current=n,"object"==typeof o.easing?e.easing=o.easing.factory():e.easing=o.easing},progress:0,toValue:t,startValue:0,startTime:0,easing:()=>0,current:t,callback:n,reduceMotion:(0,a.uh)(null==e?void 0:e.reduceMotion)}}))}},49638:(t,e,n)=>{n.d(e,{n:()=>a});var r=n(67177);const a=(0,n(99435).F)(r.Z)},6316:(t,e,n)=>{n.d(e,{BM:()=>h,nn:()=>E,uH:()=>g,vl:()=>i});var r=n(43219),a=n(96085),o=n(74306),u=n(10758);const i=o.z2,s=(t,e,n,a)=>{let u=0;const{useCorrectedHSVInterpolation:i=!0}=a;if(i){const r=[e[0]],a=n.h,i=[a[0]];for(let t=1;t<a.length;++t){const n=a[t]-a[t-1];a[t]>a[t-1]&&n>.5?(r.push(e[t]),r.push(e[t]+1e-5),i.push(a[t]-1),i.push(a[t])):a[t]<a[t-1]&&n<-.5?(r.push(e[t]),r.push(e[t]+1e-5),i.push(a[t]+1),i.push(a[t])):(r.push(e[t]),i.push(a[t]))}u=((0,o.sX)(t,r,i,o.z2.CLAMP)+1)%1}else u=(0,o.sX)(t,e,n.h,o.z2.CLAMP);const s=(0,o.sX)(t,e,n.s,o.z2.CLAMP),l=(0,o.sX)(t,e,n.v,o.z2.CLAMP),c=(0,o.sX)(t,e,n.a,o.z2.CLAMP);return(0,r.De)(u,s,l,c)},l=(t,e)=>t.map((t=>Math.pow(t/255,e))),c=(t,e)=>Math.round(255*Math.pow(t,1/e)),p=(t,e,n,a)=>{const{gamma:u=2.2}=a;let{r:i,g:s,b:p}=n;1!==u&&(i=l(i,u),s=l(s,u),p=l(p,u));const f=(0,o.sX)(t,e,i,o.z2.CLAMP),d=(0,o.sX)(t,e,s,o.z2.CLAMP),h=(0,o.sX)(t,e,p,o.z2.CLAMP),g=(0,o.sX)(t,e,n.a,o.z2.CLAMP);return 1===u?(0,r.qX)(f,d,h,g):(0,r.qX)(c(f,u),c(d,u),c(h,u),g)},f=t=>{const e=[],n=[],a=[],o=[];for(let u=0;u<t.length;++u){const i=t[u],s=(0,r.aL)(i);null!=s&&(e.push((0,r.Q6)(s)),n.push((0,r.ek)(s)),a.push((0,r.iN)(s)),o.push((0,r.Oh)(s)))}return{r:e,g:n,b:a,a:o}},d=t=>{const e=[],n=[],a=[],o=[];for(let u=0;u<t.length;++u){const i=t[u],s=(0,r.aL)(i);if("number"==typeof s){const t=(0,r.Ls)((0,r.Q6)(s),(0,r.ek)(s),(0,r.iN)(s));e.push(t.h),n.push(t.s),a.push(t.v),o.push((0,r.Oh)(s))}}return{h:e,s:n,v:a,a:o}};function h(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"RGB",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if("HSV"===r)return s(t,e,d(n),a);if("RGB"===r)return p(t,e,f(n),a);throw new Error(`[Reanimated] Invalid color space provided: ${r}. Supported values are: ['RGB', 'HSV'].`)}let g=function(t){return t[t.RGB=0]="RGB",t[t.HSV=1]="HSV",t}({});function E(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.RGB,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return(0,u.y)({inputRange:t,outputRange:e,colorSpace:n,cache:(0,a.v)(null),options:r})}},74306:(t,e,n)=>{n.d(e,{sX:()=>u,uZ:()=>i,z2:()=>r});let r=function(t){return t.IDENTITY="identity",t.CLAMP="clamp",t.EXTEND="extend",t}({});function a(t,e,n,a,o,u){switch(t){case r.IDENTITY:return u;case r.CLAMP:return e*n<e*a?a:o;case r.EXTEND:default:return n}}function o(t){return t===r.EXTEND||t===r.CLAMP||t===r.IDENTITY}function u(t,e,n,u){if(e.length<2||n.length<2)throw new Error("[Reanimated] Interpolation input and output ranges should contain at least two values.");const i=function(t){const e={extrapolateLeft:r.EXTEND,extrapolateRight:r.EXTEND};if(!t)return e;if("string"==typeof t){if(!o(t))throw new Error('[Reanimated] Unsupported value for "interpolate" \nSupported values: ["extend", "clamp", "identity", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\n Valid example:\n        interpolate(value, [inputRange], [outputRange], "clamp")');return e.extrapolateLeft=t,e.extrapolateRight=t,e}if(t.extrapolateLeft&&!o(t.extrapolateLeft)||t.extrapolateRight&&!o(t.extrapolateRight))throw new Error('[Reanimated] Unsupported value for "interpolate" \nSupported values: ["extend", "clamp", "identity", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\n Valid example:\n      interpolate(value, [inputRange], [outputRange], {\n        extrapolateLeft: Extrapolation.CLAMP,\n        extrapolateRight: Extrapolation.IDENTITY\n      }})');return Object.assign(e,t),e}(u),s=e.length,l={leftEdgeInput:e[0],rightEdgeInput:e[1],leftEdgeOutput:n[0],rightEdgeOutput:n[1]};if(s>2)if(t>e[s-1])l.leftEdgeInput=e[s-2],l.rightEdgeInput=e[s-1],l.leftEdgeOutput=n[s-2],l.rightEdgeOutput=n[s-1];else for(let r=1;r<s;++r)if(t<=e[r]){l.leftEdgeInput=e[r-1],l.rightEdgeInput=e[r],l.leftEdgeOutput=n[r-1],l.rightEdgeOutput=n[r];break}return function(t,e,n){const{leftEdgeInput:r,rightEdgeInput:o,leftEdgeOutput:u,rightEdgeOutput:i}=e;if(o-r==0)return u;const s=u+(t-r)/(o-r)*(i-u),l=i>=u?1:-1;return l*s<l*u?a(n.extrapolateLeft,l,s,u,i,t):l*s>l*i?a(n.extrapolateRight,l,s,u,i,t):s}(t,l,i)}function i(t,e,n){return Math.min(Math.max(t,e),n)}},72400:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(67294),a=n(28033),o=n(88548),u=n(24404),i=r.forwardRef(((t,e)=>{var n=t.accessibilityLabel,a=t.color,i=t.disabled,l=t.onPress,c=t.testID,p=t.title;return r.createElement(o.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:i,focusable:!i,onPress:l,ref:e,style:[s.button,a&&{backgroundColor:a},i&&s.buttonDisabled],testID:c},r.createElement(u.Z,{style:[s.text,i&&s.textDisabled]},p))}));i.displayName="Button";var s=a.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const l=i},76636:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(83117),a=n(80102),o=n(67294),u=n(28033),i=n(67177),s=n(13145),l=["style"],c=s.Z&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",p=o.forwardRef(((t,e)=>{var n=t.style,s=(0,a.Z)(t,l);return o.createElement(i.Z,(0,r.Z)({},s,{ref:e,style:u.Z.compose(f.root,n)}))}));p.displayName="SafeAreaView";var f=u.Z.create({root:{paddingTop:c+"(safe-area-inset-top)",paddingRight:c+"(safe-area-inset-right)",paddingBottom:c+"(safe-area-inset-bottom)",paddingLeft:c+"(safe-area-inset-left)"}});const d=p}}]);