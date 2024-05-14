"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[1080],{87827:(t,n,e)=>{e.d(n,{o:()=>m});const r=4,o=.001,u=1e-7,i=10,a=11,c=1/(a-1);function s(t,n){return 1-3*n+3*t}function f(t,n){return 3*n-6*t}function l(t){return 3*t}function d(t,n,e){return((s(n,e)*t+f(n,e))*t+l(n))*t}function h(t,n,e){return 3*s(n,e)*t*t+2*f(n,e)*t+l(n)}function p(t,n,e,s){if(!(t>=0&&t<=1&&e>=0&&e<=1))throw new Error("[Reanimated] Bezier x values must be in [0, 1] range.");if(t===n&&e===s)return function(t){return t};const f=new Array(a);for(let r=0;r<a;++r)f[r]=d(r*c,t,e);function l(n){let s=0,l=1;const p=a-1;for(;l!==p&&f[l]<=n;++l)s+=c;--l;const m=s+(n-f[l])/(f[l+1]-f[l])*c,v=h(m,t,e);return v>=o?function(t,n,e,o){for(let u=0;u<r;++u){const r=h(n,e,o);if(0===r)return n;n-=(d(n,e,o)-t)/r}return n}(n,m,t,e):0===v?m:function(t,n,e,r,o){let a,c,s=0;do{c=n+(e-n)/2,a=d(c,r,o)-t,a>0?e=c:n=c}while(Math.abs(a)>u&&++s<i);return c}(n,s,s+c,t,e)}return function(r){return t===n&&e===s?r:0===r?0:1===r?1:d(l(r),n,s)}}const m={linear:function(t){return t},ease:function(t){return p(.42,0,1,1)(t)},quad:function(t){return t*t},cubic:function(t){return t*t*t},poly:function(t){return n=>Math.pow(n,t)},sin:function(t){return 1-Math.cos(t*Math.PI/2)},circle:function(t){return 1-Math.sqrt(1-t*t)},exp:function(t){return Math.pow(2,10*(t-1))},elastic:function(){const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return n=>1-Math.pow(Math.cos(n*Math.PI/2),3)*Math.cos(n*t)},back:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return n=>n*n*((t+1)*n-t)},bounce:function(t){if(t<1/2.75)return 7.5625*t*t;if(t<2/2.75){const n=t-1.5/2.75;return 7.5625*n*n+.75}if(t<2.5/2.75){const n=t-2.25/2.75;return 7.5625*n*n+.9375}const n=t-2.625/2.75;return 7.5625*n*n+.984375},bezier:function(t,n,e,r){return{factory:()=>p(t,n,e,r)}},bezierFn:function(t,n,e,r){return p(t,n,e,r)},steps:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e=>{const r=Math.min(Math.max(e,0),1)*t;return n?Math.ceil(r)/t:Math.floor(r)/t}},in:function(t){return t},out:function(t){return n=>1-t(1-n)},inOut:function(t){return n=>n<.5?t(2*n)/2:1-t(2*(1-n))/2}}},65641:(t,n,e)=>{e.d(n,{p:()=>o});var r=e(76933);const o=function(t,n,e){return(0,r.oF)(n,(()=>{const o="function"==typeof n?n():n;return{isHigherOrder:!0,onFrame:function(n,e){const{startTime:r,started:u,previousAnimation:i}=n,a=n.current;if(e-r>t||n.reduceMotion){u||(o.onStart(o,a,e,i),n.previousAnimation=null,n.started=!0);const t=o.onFrame(o,e);return n.current=o.current,t}if(i){const t=i.finished||i.onFrame(i,e);n.current=i.current,t&&(n.previousAnimation=null)}return!1},onStart:function(t,n,e,r){t.startTime=e,t.started=!1,t.current=n,t.previousAnimation=r===t?r.previousAnimation:r,void 0===o.reduceMotion&&(o.reduceMotion=t.reduceMotion)},current:o.current,callback:t=>{o.callback&&o.callback(t)},previousAnimation:null,startTime:0,started:!1,reduceMotion:(0,r.uh)(e)}}))}},6328:(t,n,e)=>{e.d(n,{j:()=>u});var r=e(87827),o=e(76933);const u=function(t,n,e){return(0,o.oF)(t,(()=>{const u={duration:300,easing:r.o.inOut(r.o.quad)};return n&&Object.keys(n).forEach((t=>u[t]=n[t])),{type:"timing",onFrame:function(t,n){const{toValue:e,startTime:r,startValue:o}=t,i=n-r;if(i>=u.duration)return t.startTime=0,t.current=e,!0;const a=t.easing(i/u.duration);return t.current=o+(e-o)*a,!1},onStart:function(n,e,r,o){o&&"timing"===o.type&&o.toValue===t&&o.startTime?(n.startTime=o.startTime,n.startValue=o.startValue):(n.startTime=r,n.startValue=e),n.current=e,"object"==typeof u.easing?n.easing=u.easing.factory():n.easing=u.easing},progress:0,toValue:t,startValue:0,startTime:0,easing:()=>0,current:t,callback:e,reduceMotion:(0,o.uh)(null==n?void 0:n.reduceMotion)}}))}},49638:(t,n,e)=>{e.d(n,{n:()=>o});var r=e(67177);const o=(0,e(99435).F)(r.Z)},56389:(t,n,e)=>{e.d(n,{o:()=>c});var r=e(67294),o=e(76933),u=e(96085),i=e(97604),a=e(83442);function c(t,n){const e=(0,r.useRef)(null);let c=Object.values(t.__closure??{});var s;(0,a.Wr)()&&(!c.length&&null!==(s=n)&&void 0!==s&&s.length&&(c=n));void 0===n?n=[...c,t.__workletHash]:n.push(t.__workletHash),null===e.current&&(e.current=(0,u.v)((0,o.AX)(t)));const f=e.current;return(0,r.useEffect)((()=>{const n=(0,i.R)((()=>{f.value=t()}),c,[f]);return()=>{(0,i.B)(n)}}),n),(0,r.useEffect)((()=>()=>{e.current=null}),[]),f}},76636:(t,n,e)=>{e.d(n,{Z:()=>h});var r=e(87462),o=e(63366),u=e(67294),i=e(28033),a=e(67177),c=e(13145),s=["style"],f=c.Z&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",l=u.forwardRef(((t,n)=>{var e=t.style,c=(0,o.Z)(t,s);return u.createElement(a.Z,(0,r.Z)({},c,{ref:n,style:i.Z.compose(d.root,e)}))}));l.displayName="SafeAreaView";var d=i.Z.create({root:{paddingTop:f+"(safe-area-inset-top)",paddingRight:f+"(safe-area-inset-right)",paddingBottom:f+"(safe-area-inset-bottom)",paddingLeft:f+"(safe-area-inset-left)"}});const h=l}}]);