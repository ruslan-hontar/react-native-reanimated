"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[8490],{10919:(t,e,a)=>{a.d(e,{V:()=>i});var o=a(76933);function n(t,e,a){if(e.skipAnimation)return 0;const{stiffness:o,dampingRatio:n,restSpeedThreshold:i,duration:s}=e;return function(t){let{min:e,max:a,func:o,maxIterations:n=20}=t,i=n,s=(a+e)/2;for(;Math.abs(o(s))>5e-5&&i>0;)i-=1,o(s)<0?e=s:a=s,s=(e+a)/2;return s}({min:0,max:100,func:e=>{const r=(e*a*a+o*t*t)/(Math.exp(1-.5*n)*o);return-2*e/(2*n*Math.sqrt(o*e))*1e3*Math.log(.01*i/r)-s}})}const i=(t,e,a)=>(0,o.oF)(t,(()=>{const i={...{damping:10,mass:1,stiffness:100,overshootClamping:!1,restDisplacementThreshold:.01,restSpeedThreshold:2,velocity:0,duration:2e3,dampingRatio:.5,reduceMotion:void 0,clamp:void 0},...e,useDuration:!!(null!=e&&e.duration||null!=e&&e.dampingRatio),skipAnimation:!1};return i.skipAnimation=!function(t){var e,a;let o="";return["stiffness","damping","dampingRatio","restDisplacementThreshold","restSpeedThreshold","mass"].forEach((e=>{const a=t[e];a<=0&&(o+=`, ${e} must be grater than zero but got ${a}`)})),t.duration<0&&(o+=`, duration can't be negative, got ${t.duration}`),null!==(e=t.clamp)&&void 0!==e&&e.min&&null!==(a=t.clamp)&&void 0!==a&&a.max&&t.clamp.min>t.clamp.max&&(o+=`, clamp.min should be lower than clamp.max, got clamp: {min: ${t.clamp.min}, max: ${t.clamp.max}} `),""!==o&&console.warn("[Reanimated] Invalid spring config"+o),""===o}(i),0===i.duration&&(i.skipAnimation=!0),{onFrame:function(t,e){const{toValue:a,startTimestamp:o,current:n}=t,s=e-o;if(i.useDuration&&s>=i.duration)return t.current=a,t.lastTimestamp=0,!0;if(i.skipAnimation)return t.current=a,t.lastTimestamp=0,!0;const{lastTimestamp:r,velocity:l}=t,u=Math.min(e-r,64);t.lastTimestamp=e;const m=u/1e3,c=-l,d=a-n,{zeta:v,omega0:h,omega1:p}=t,{position:g,velocity:f}=v<1?function(t,e){const{toValue:a,current:o,velocity:n}=t,{zeta:i,t:s,omega0:r,omega1:l}=e,u=-n,m=a-o,c=Math.sin(l*s),d=Math.cos(l*s),v=Math.exp(-i*r*s),h=v*(c*((u+i*r*m)/l)+m*d);return{position:a-h,velocity:i*r*h-v*(d*(u+i*r*m)-l*m*c)}}(t,{zeta:v,v0:c,x0:d,omega0:h,omega1:p,t:m}):function(t,e){const{toValue:a}=t,{v0:o,x0:n,omega0:i,t:s}=e,r=Math.exp(-i*s);return{position:a-r*(n+(o+i*n)*s),velocity:r*(o*(s*i-1)+s*n*i*i)}}(t,{v0:c,x0:d,omega0:h,t:m});t.current=g,t.velocity=f;const{isOvershooting:M,isVelocity:T,isDisplacement:b}=function(t,e){const{toValue:a,velocity:o,startValue:n,current:i}=t;return{isOvershooting:!!e.overshootClamping&&(i>a&&n<a||i<a&&n>a),isVelocity:Math.abs(o)<e.restSpeedThreshold,isDisplacement:Math.abs(a-i)<e.restDisplacementThreshold}}(t,i),y=M||T&&b;return!(i.useDuration||!y)&&(t.velocity=0,t.current=a,t.lastTimestamp=0,!0)},onStart:function(t,e,a,o){t.current=e,t.startValue=e;let s=i.mass;const r=function(t,e){return(null==t?void 0:t.lastTimestamp)&&(null==t?void 0:t.startTimestamp)&&(null==t?void 0:t.toValue)===e.toValue&&(null==t?void 0:t.duration)===e.duration&&(null==t?void 0:t.dampingRatio)===e.dampingRatio}(o,t),l=i.duration,u=r?null==o?void 0:o.startValue:Number(t.toValue)-e;if(t.velocity=o?(r?null==o?void 0:o.velocity:(null==o?void 0:o.velocity)+i.velocity)||0:i.velocity||0,r)t.zeta=(null==o?void 0:o.zeta)||0,t.omega0=(null==o?void 0:o.omega0)||0,t.omega1=(null==o?void 0:o.omega1)||0;else{if(i.useDuration){const e=r?l-(((null==o?void 0:o.lastTimestamp)||0)-((null==o?void 0:o.startTimestamp)||0)):l;i.duration=e,s=n(u,i,t.velocity)}const{zeta:e,omega0:a,omega1:m}=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if(e.skipAnimation)return{zeta:0,omega0:0,omega1:0};if(e.useDuration){const{stiffness:a,dampingRatio:o}=e,n=Math.sqrt(a/t);return{zeta:o,omega0:n,omega1:n*Math.sqrt(1-o**2)}}{const{damping:t,mass:a,stiffness:o}=e,n=t/(2*Math.sqrt(o*a)),i=Math.sqrt(o/a);return{zeta:n,omega0:i,omega1:i*Math.sqrt(1-n**2)}}}(s,i);t.zeta=e,t.omega0=a,t.omega1=m,void 0!==i.clamp&&(t.zeta=function(t,e){const{zeta:a,toValue:o,startValue:n}=t,i=Number(o);if(i===n)return a;const[s,r]=i-n>0?[e.min,e.max]:[e.max,e.min],l=void 0!==r?Math.abs((r-i)/(i-n)):void 0,u=void 0!==s?Math.abs((s-i)/(i-n)):void 0,m=[void 0!==l?Math.abs(Math.log(l)/Math.PI):void 0,void 0!==u?Math.abs(Math.log(u)/(2*Math.PI)):void 0].filter((t=>void 0!==t));return Math.max(...m,a)}(t,i.clamp))}t.lastTimestamp=(null==o?void 0:o.lastTimestamp)||a,t.startTimestamp=r&&(null==o?void 0:o.startTimestamp)||a},toValue:t,velocity:i.velocity||0,current:t,startValue:0,callback:a,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:(0,o.uh)(i.reduceMotion)}}))},72510:(t,e,a)=>{a.d(e,{J:()=>r});var o=a(67294),n=a(97604),i=a(10758),s=a(83442);function r(t,e,a){const r=(0,i.y)(null);let l=Object.values(t.__closure??{});var u;(0,s.Wr)()&&(!l.length&&null!==(u=a)&&void 0!==u&&u.length&&(l=a));void 0===a?a=[...Object.values(t.__closure??{}),...Object.values(e.__closure??{}),t.__workletHash,e.__workletHash]:a.push(t.__workletHash,e.__workletHash),(0,o.useEffect)((()=>{const a=(0,n.R)((()=>{const a=t();e(a,r.value),r.value=a}),l);return()=>{(0,n.B)(a)}}),a)}},82334:(t,e,a)=>{a.d(e,{m:()=>h});var o=a(67294),n=a(10758),i=a(7737),s=a(86425),r=a(26496),l=a(82747),u=a(22805),m=a(83442);const c=(0,m.$L)();function d(t){return(0,m.aw)()&&t.getNativeScrollRef?t.getNativeScrollRef():!(0,m.aw)()&&t.getScrollableNode?t.getScrollableNode():t}const v=(0,m.aw)()?i.b:l.Z;function h(){const t=(0,n.y)(-1),e=(0,n.y)(null),a=(0,o.useRef)();if(!a.current){const o=a=>{var n;a&&(t.value=c?d(a):v(d(a)),o.current=a,"ios"!==u.Z.OS||(0,m.aw)()||(e.value=(null==a||null===(n=a.viewConfig)||void 0===n?void 0:n.uiViewClassName)||"RCTView"));return t.value};o.current=null;const n=(0,s.wH)({__init:()=>{const a=()=>t.value;return a.viewName=e,a}});r.z.set(o,n),a.current=o}return a.current}},26503:(t,e,a)=>{function o(t){const e=t();if(-1===e)return console.warn(`[Reanimated] The view with tag ${e} is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).`),null;const a=e.getBoundingClientRect();return{width:e.offsetWidth,height:e.offsetHeight,x:e.offsetLeft,y:e.offsetTop,pageX:a.left,pageY:a.top}}a.d(e,{L:()=>o})}}]);