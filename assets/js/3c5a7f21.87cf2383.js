"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[6597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,p=d["".concat(c,".").concat(f)]||d[f]||m[f]||o;return n?r.createElement(p,a(a({ref:t},l),{},{components:n})):r.createElement(p,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[d]="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>g,default:()=>E,frontMatter:()=>b,metadata:()=>k,toc:()=>M});var r=n(87462),i=n(67294),o=n(3905),a=n(67177),u=n(28033),c=n(10758),s=n(21739),l=n(35842),d=n(347),m=n(6328),f=n(49638);const p={code:"function anonymous(){const{reduceMotion,sv}=this.__closure;return{transform:[{translateX:reduceMotion?0:sv.value}]};}"};function v(e){let{width:t}=e;const n=(0,c.y)(-t/2+160),r=(0,s.J)(),o=(0,l.l)(function(){const e=()=>({transform:[{translateX:r?0:n.value}]});return e.__closure={reduceMotion:r,sv:n},e.__workletHash=8897056240564,e.__initData=p,e}());return i.useEffect((()=>{n.value=(0,d.D)((0,m.j)(t/2-160,{duration:2e3}),-1,!0)})),i.createElement(a.Z,{style:h.container},i.createElement(f.n,{style:[h.box,o]}))}const h=u.Z.create({box:{height:100,width:100,backgroundColor:"#b58df1",borderRadius:20},container:{flex:1,alignItems:"center"}}),y="import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useReducedMotion,\n  useSharedValue,\n  withRepeat,\n  withTiming,\n} from 'react-native-reanimated';\n\ninterface AppProps {\n  width: number;\n}\n\nexport default function App({ width }: AppProps) {\n  const sv = useSharedValue<number>(-width / 2 + 160);\n  // highlight-next-line\n  const reduceMotion = useReducedMotion();\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    // highlight-next-line\n    transform: [{ translateX: reduceMotion ? 0 : sv.value }],\n  }));\n\n  React.useEffect(() => {\n    sv.value = withRepeat(\n      withTiming(width / 2 - 160, { duration: 2000 }),\n      -1,\n      true\n    );\n  });\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 100,\n    width: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n  },\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n",b={id:"useReducedMotion",title:"useReducedMotion",sidebar_label:"useReducedMotion",sidebar_position:3},g=void 0,k={unversionedId:"device/useReducedMotion",id:"device/useReducedMotion",title:"useReducedMotion",description:"useReducedMotion lets you query the reduced motion system setting. You can use it to disable animations.",source:"@site/docs/device/useReducedMotion.mdx",sourceDirName:"device",slug:"/device/useReducedMotion",permalink:"/react-native-reanimated/docs/device/useReducedMotion",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/device/useReducedMotion.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"useReducedMotion",title:"useReducedMotion",sidebar_label:"useReducedMotion",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useAnimatedSensor",permalink:"/react-native-reanimated/docs/device/useAnimatedSensor"},next:{title:"Layout Animations",permalink:"/react-native-reanimated/docs/category/layout-animations"}},w={},M=[{value:"Reference",id:"reference",level:2},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],R=(A="InteractiveExample",function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var A;const O={toc:M},j="wrapper";function E(e){let{components:t,...n}=e;return(0,o.kt)(j,(0,r.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useReducedMotion")," lets you query the reduced motion system setting. You can use it to disable animations."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useReducedMotion } from 'react-native-reanimated';\n\nfunction App() {\n  const reduceMotion = useReducedMotion();\n\n  if (reduceMotion) {\n    // display static content \u2728\n  } else {\n    // run animations \u2728\n  }\n\n  // ...\n}\n")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useReducedMotion")," returns a boolean indicating whether the reduced motion setting was enabled when the app started."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(R,{src:y,component:v,mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changing the reduced motion system setting doesn't cause your components to rerender."),(0,o.kt)("li",{parentName:"ul"},"In contrast to ",(0,o.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/accessibilityinfo#isreducemotionenabled"},(0,o.kt)("inlineCode",{parentName:"a"},"AccessibilityInfo.isReduceMotionEnabled()"))," the ",(0,o.kt)("inlineCode",{parentName:"li"},"useReducedMotion")," hook lets you get the value synchronously.")),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,o.kt)("div",{className:"platform-compatibility"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Android"),(0,o.kt)("th",{parentName:"tr",align:null},"iOS"),(0,o.kt)("th",{parentName:"tr",align:null},"Web"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}E.isMDXComponent=!0},87827:(e,t,n)=>{n.d(t,{o:()=>v});const r=4,i=.001,o=1e-7,a=10,u=11,c=1/(u-1);function s(e,t){return 1-3*t+3*e}function l(e,t){return 3*t-6*e}function d(e){return 3*e}function m(e,t,n){return((s(t,n)*e+l(t,n))*e+d(t))*e}function f(e,t,n){return 3*s(t,n)*e*e+2*l(t,n)*e+d(t)}function p(e,t,n,s){if(!(e>=0&&e<=1&&n>=0&&n<=1))throw new Error("[Reanimated] Bezier x values must be in [0, 1] range.");if(e===t&&n===s)return function(e){return e};const l=new Array(u);for(let r=0;r<u;++r)l[r]=m(r*c,e,n);function d(t){let s=0,d=1;const p=u-1;for(;d!==p&&l[d]<=t;++d)s+=c;--d;const v=s+(t-l[d])/(l[d+1]-l[d])*c,h=f(v,e,n);return h>=i?function(e,t,n,i){for(let o=0;o<r;++o){const r=f(t,n,i);if(0===r)return t;t-=(m(t,n,i)-e)/r}return t}(t,v,e,n):0===h?v:function(e,t,n,r,i){let u,c,s=0;do{c=t+(n-t)/2,u=m(c,r,i)-e,u>0?n=c:t=c}while(Math.abs(u)>o&&++s<a);return c}(t,s,s+c,e,n)}return function(r){return e===t&&n===s?r:0===r?0:1===r?1:m(d(r),t,s)}}const v={linear:function(e){return e},ease:function(e){return p(.42,0,1,1)(e)},quad:function(e){return e*e},cubic:function(e){return e*e*e},poly:function(e){return t=>Math.pow(t,e)},sin:function(e){return 1-Math.cos(e*Math.PI/2)},circle:function(e){return 1-Math.sqrt(1-e*e)},exp:function(e){return Math.pow(2,10*(e-1))},elastic:function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return t=>1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*e)},back:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return t=>t*t*((e+1)*t-e)},bounce:function(e){if(e<1/2.75)return 7.5625*e*e;if(e<2/2.75){const t=e-1.5/2.75;return 7.5625*t*t+.75}if(e<2.5/2.75){const t=e-2.25/2.75;return 7.5625*t*t+.9375}const t=e-2.625/2.75;return 7.5625*t*t+.984375},bezier:function(e,t,n,r){return{factory:()=>p(e,t,n,r)}},bezierFn:function(e,t,n,r){return p(e,t,n,r)},steps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n=>{const r=Math.min(Math.max(n,0),1)*e;return t?Math.ceil(r)/e:Math.floor(r)/e}},in:function(e){return e},out:function(e){return t=>1-e(1-t)},inOut:function(e){return t=>t<.5?e(2*t)/2:1-e(2*(1-t))/2}}},347:(e,t,n)=>{n.d(t,{D:()=>i});var r=n(76933);const i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return(0,r.oF)(e,(()=>{const a="function"==typeof e?e():e;return{isHigherOrder:!0,onFrame:function(e,r){const i=a.onFrame(a,r);if(e.current=a.current,i){if(e.reps+=1,a.callback&&a.callback(!0,e.current),e.reduceMotion||t>0&&e.reps>=t)return!0;const i=n?a.current:e.startValue;return n&&(a.toValue=e.startValue,e.startValue=i),a.onStart(a,i,r,a.previousAnimation),!1}return!1},onStart:function(e,r,i,o){e.startValue=r,e.reps=0,void 0===a.reduceMotion&&(a.reduceMotion=e.reduceMotion),e.reduceMotion&&n&&(t<=0||t%2==0)?(e.current=e.startValue,e.onFrame=()=>!0):a.onStart(a,r,i,o)},reps:0,current:a.current,callback:e=>{i&&i(e),!e&&a.callback&&a.callback(!1)},startValue:0,reduceMotion:(0,r.uh)(o)}}))}},6328:(e,t,n)=>{n.d(t,{j:()=>o});var r=n(87827),i=n(76933);const o=function(e,t,n){return(0,i.oF)(e,(()=>{const o={duration:300,easing:r.o.inOut(r.o.quad)};return t&&Object.keys(t).forEach((e=>o[e]=t[e])),{type:"timing",onFrame:function(e,t){const{toValue:n,startTime:r,startValue:i}=e,a=t-r;if(a>=o.duration)return e.startTime=0,e.current=n,!0;const u=e.easing(a/o.duration);return e.current=i+(n-i)*u,!1},onStart:function(t,n,r,i){i&&"timing"===i.type&&i.toValue===e&&i.startTime?(t.startTime=i.startTime,t.startValue=i.startValue):(t.startTime=r,t.startValue=n),t.current=n,"object"==typeof o.easing?t.easing=o.easing.factory():t.easing=o.easing},progress:0,toValue:e,startValue:0,startTime:0,easing:()=>0,current:e,callback:n,reduceMotion:(0,i.uh)(null==t?void 0:t.reduceMotion)}}))}},49638:(e,t,n)=>{n.d(t,{n:()=>i});var r=n(67177);const i=(0,n(99435).F)(r.Z)},35842:(e,t,n)=>{n.d(t,{l:()=>h});var r=n(67294),i=n(86425),o=n(97604),a=n(49402),u=n(76933),c=n(10758),s=n(40093),l=n(41956),d=n(83442);const m=(0,d.Wr)();function f(e,t,n,r){if(Array.isArray(t)&&t.forEach(((t,i)=>{f(e,t,n&&n[i],r&&r[i])})),"object"==typeof t&&t.onFrame){const i=t;let o=i.current;null!=r&&("object"==typeof r?void 0!==r.value?o=r.value:void 0!==r.onFrame&&(void 0!==(null==n?void 0:n.current)?o=n.current:void 0!==(null==r?void 0:r.current)&&(o=r.current)):o=r),i.callStart=e=>{i.onStart(i,o,e,n)},i.callStart(e),i.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((i=>f(e,t[i],n&&n[i],r&&r[i])))}function p(e,t,n,r,i){if(!i.value)return!0;if(Array.isArray(e)){r[n]=[];let o=!0;return e.forEach(((e,a)=>{p(e,t,a,r[n],i)||(o=!1)})),o}if("object"==typeof e&&e.onFrame){let i=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),i=e.onFrame(e,t),e.timestamp=t,i&&(e.finished=!0,e.callback&&e.callback(!0))),r[n]=e.current,i}if("object"==typeof e){r[n]={};let o=!0;return Object.keys(e).forEach((a=>{p(e[a],t,a,r[n],i)||(o=!1)})),o}return r[n]=e,!0}function v(e,t){if(Array.isArray(e))for(const n of e)v(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))v(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function h(e,t,h){let y=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const b=(0,l.H)(),g=(0,r.useRef)();let k=Object.values(e.__closure??{});var w;m&&(!k.length&&null!==(w=t)&&void 0!==w&&w.length&&(k=t));const M=h?Array.isArray(h)?h:[h]:[],R=h?(0,s.Nq)(M):null,A=(0,c.y)(!0),O=(0,r.useRef)({});if(t?t.push(e.__workletHash):t=[...k,e.__workletHash],R&&t.push(R),!g.current){const t=(0,u.AX)(e);0,g.current={initial:{value:t,updater:e},remoteState:(0,i.Uv)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,l.G)()}}const{initial:j,remoteState:E,viewDescriptors:x}=g.current,S=x.shareableViewDescriptors;t.push(S),(0,r.useEffect)((()=>{let t,r=e;h&&(r=()=>{const t=e();return M.forEach((e=>{e(t)})),t}),t=(0,d.V5)()?()=>{!function(e,t,r,i,o,u,c){const l=r.animations??{},d=t()??{},m=r.last;let v,h=!1;Object.keys(l).forEach((e=>{const t=d[e];(0,s.mE)(t)||delete l[e]})),Object.keys(d).forEach((e=>{const t=d[e];(0,s.mE)(t)&&(v=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),f(v,t,l[e],m[e]),l[e]=t,h=!0)})),h?(r.animations=l,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,function t(n){const{animations:s,last:l,isAnimationCancelled:d}=r;if(d)return void(r.isAnimationRunning=!1);const m={};let f=!0;Object.keys(s).forEach((e=>{p(s[e],n,e,m,o)?(l[e]=m[e],delete s[e]):f=!1})),Object.keys(m).length&&(0,a.R)(e,m,i,u,c),f?r.isAnimationRunning=!1:requestAnimationFrame(t)}(v))):(r.isAnimationCancelled=!0,r.animations=[]),r.last=d,(0,s.wU)(m,d)||(0,a.R)(e,d,i,u,c)}(S,e,E,b,A,O,M)}:()=>{!function(e,t,r,i,o){let u=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const c=r.animations??{},l=t()??{},d=r.last,m={};let v,h=!1,y=!1;for(const a in l){const e=l[a];(0,s.mE)(e)?(v=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),f(v,e,c[a],d[a]),c[a]=e,h=!0):(y=!0,m[a]=e,delete c[a])}if(h){const t=n=>{const{animations:u,last:c,isAnimationCancelled:s}=r;if(s)return void(r.isAnimationRunning=!1);const l={};let d=!0;for(const e in u)p(u[e],n,e,l,o)?(c[e]=l[e],delete u[e]):d=!1;l&&(0,a.Z)(e,l,i),d?r.isAnimationRunning=!1:requestAnimationFrame(t)};r.animations=c,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,t(v)),y&&(0,a.Z)(e,m,i)}else r.isAnimationCancelled=!0,r.animations=[],(0,s.wU)(d,l)||(0,a.Z)(e,l,i,u);r.last=l}(S,r,E,b,A,y)};const i=(0,o.R)(t,k);return()=>{(0,o.B)(i)}}),t),(0,r.useEffect)((()=>(A.value=!0,()=>{A.value=!1})),[A]),v(j.value);const _=(0,r.useRef)(null);return _.current||(_.current=(0,d.V5)()?{viewDescriptors:x,initial:j,viewsRef:b,jestAnimatedStyle:O}:{initial:j,viewsRef:b,viewDescriptors:x}),_.current}},21739:(e,t,n)=>{n.d(t,{J:()=>i});const r=(0,n(83442).rP)();function i(){return r}}}]);