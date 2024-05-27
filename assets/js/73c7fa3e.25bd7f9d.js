"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,p=d["".concat(s,".").concat(f)]||d[f]||m[f]||i;return n?r.createElement(p,o(o({ref:t},u),{},{components:n})):r.createElement(p,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>k,default:()=>x,frontMatter:()=>g,metadata:()=>A,toc:()=>P});var r=n(87462),a=n(67294),i=n(3905),o=n(67177),l=n(72400),s=n(28033),c=n(10758),u=n(35842),d=n(347),m=n(6328),f=n(76933),p=n(49638);const h={code:"function anonymous(){const{offset}=this.__closure;return{transform:[{translateX:offset.value}]};}"};function y(e){let{width:t}=e;const n=(0,c.y)(t/2-160),r=(0,u.l)(function(){const e=()=>({transform:[{translateX:n.value}]});return e.__closure={offset:n},e.__workletHash=0xf945d52c70d,e.__initData=h,e}()),i=()=>{n.value=(0,d.D)((0,m.j)(n.value>0?-t/2+160:t/2-160,{duration:1500}),-1,!0)};a.useEffect((()=>{i()}),[]);return a.createElement(o.Z,{style:v.container},a.createElement(p.n,{style:[v.box,r]}),a.createElement(o.Z,{style:v.row},a.createElement(l.Z,{title:"Cancel animation",onPress:()=>{(0,f.RE)(n)}}),a.createElement(l.Z,{title:"Start animation",onPress:i})))}const v=s.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20,marginBottom:30},row:{flexDirection:"row",gap:10}}),b="import React from 'react';\nimport { StyleSheet, View, Button } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n  withRepeat,\n  cancelAnimation,\n} from 'react-native-reanimated';\n\ninterface AppProps {\n  width: number;\n}\n\nexport default function App({ width }: AppProps) {\n  const offset = useSharedValue<number>(width / 2 - 160);\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n\n  const startAnimation = () => {\n    offset.value = withRepeat(\n      withTiming(offset.value > 0 ? -width / 2 + 160 : width / 2 - 160, {\n        duration: 1500,\n      }),\n      -1,\n      true\n    );\n  };\n\n  React.useEffect(() => {\n    startAnimation();\n  }, []);\n\n  const handleCancelAnimation = () => {\n    // highlight-next-line\n    cancelAnimation(offset);\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyles]} />\n      <View style={styles.row}>\n        <Button title=\"Cancel animation\" onPress={handleCancelAnimation} />\n        <Button title=\"Start animation\" onPress={startAnimation} />\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginBottom: 30,\n  },\n  row: {\n    flexDirection: 'row',\n    gap: 10,\n  },\n});\n",g={sidebar_position:7},k="cancelAnimation",A={unversionedId:"core/cancelAnimation",id:"core/cancelAnimation",title:"cancelAnimation",description:"cancelAnimation lets you cancel a running animation paired to a shared value.",source:"@site/docs/core/cancelAnimation.mdx",sourceDirName:"core",slug:"/core/cancelAnimation",permalink:"/react-native-reanimated/docs/core/cancelAnimation",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/core/cancelAnimation.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"createAnimatedComponent",permalink:"/react-native-reanimated/docs/core/createAnimatedComponent"},next:{title:"Scroll",permalink:"/react-native-reanimated/docs/category/scroll"}},w={},P=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>sharedValue</code>",id:"sharedvalue",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],O=(E="InteractiveExample",function(e){return console.warn("Component "+E+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var E;const S={toc:P},j="wrapper";function x(e){let{components:t,...n}=e;return(0,i.kt)(j,(0,r.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cancelanimation"},"cancelAnimation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cancelAnimation")," lets you cancel a running animation paired to a ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value"),"."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { cancelAnimation } from 'react-native-reanimated';\n\nfunction App() {\n  const offset = useSharedValue(100);\n\n  const handleCancel = () => {\n    // highlight-next-line\n    cancelAnimation(offset);\n  };\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type SharedValue<T> = { value: T };\n\nfunction cancelAnimation<T>(sharedValue: SharedValue<T>): void;\n"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"sharedvalue"},(0,i.kt)("inlineCode",{parentName:"h4"},"sharedValue")),(0,i.kt)("p",null,"The shared value of a running animation that you want to cancel. If no animation is running, the ",(0,i.kt)("inlineCode",{parentName:"p"},"cancelAnimation")," function does nothing."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cancelAnimation")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(O,{src:b,component:y,mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can resume the animation by assigning the same animation (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"withSpring"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"withTiming"),") to the shared value again.")),(0,i.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,i.kt)("div",{className:"platform-compatibility"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"),(0,i.kt)("th",{parentName:"tr",align:null},"Web"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}x.isMDXComponent=!0},87827:(e,t,n)=>{n.d(t,{o:()=>h});const r=4,a=.001,i=1e-7,o=10,l=11,s=1/(l-1);function c(e,t){return 1-3*t+3*e}function u(e,t){return 3*t-6*e}function d(e){return 3*e}function m(e,t,n){return((c(t,n)*e+u(t,n))*e+d(t))*e}function f(e,t,n){return 3*c(t,n)*e*e+2*u(t,n)*e+d(t)}function p(e,t,n,c){if(!(e>=0&&e<=1&&n>=0&&n<=1))throw new Error("[Reanimated] Bezier x values must be in [0, 1] range.");if(e===t&&n===c)return function(e){return e};const u=new Array(l);for(let r=0;r<l;++r)u[r]=m(r*s,e,n);function d(t){let c=0,d=1;const p=l-1;for(;d!==p&&u[d]<=t;++d)c+=s;--d;const h=c+(t-u[d])/(u[d+1]-u[d])*s,y=f(h,e,n);return y>=a?function(e,t,n,a){for(let i=0;i<r;++i){const r=f(t,n,a);if(0===r)return t;t-=(m(t,n,a)-e)/r}return t}(t,h,e,n):0===y?h:function(e,t,n,r,a){let l,s,c=0;do{s=t+(n-t)/2,l=m(s,r,a)-e,l>0?n=s:t=s}while(Math.abs(l)>i&&++c<o);return s}(t,c,c+s,e,n)}return function(r){return e===t&&n===c?r:0===r?0:1===r?1:m(d(r),t,c)}}const h={linear:function(e){return e},ease:function(e){return p(.42,0,1,1)(e)},quad:function(e){return e*e},cubic:function(e){return e*e*e},poly:function(e){return t=>Math.pow(t,e)},sin:function(e){return 1-Math.cos(e*Math.PI/2)},circle:function(e){return 1-Math.sqrt(1-e*e)},exp:function(e){return Math.pow(2,10*(e-1))},elastic:function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return t=>1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*e)},back:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return t=>t*t*((e+1)*t-e)},bounce:function(e){if(e<1/2.75)return 7.5625*e*e;if(e<2/2.75){const t=e-1.5/2.75;return 7.5625*t*t+.75}if(e<2.5/2.75){const t=e-2.25/2.75;return 7.5625*t*t+.9375}const t=e-2.625/2.75;return 7.5625*t*t+.984375},bezier:function(e,t,n,r){return{factory:()=>p(e,t,n,r)}},bezierFn:function(e,t,n,r){return p(e,t,n,r)},steps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n=>{const r=Math.min(Math.max(n,0),1)*e;return t?Math.ceil(r)/e:Math.floor(r)/e}},in:function(e){return e},out:function(e){return t=>1-e(1-t)},inOut:function(e){return t=>t<.5?e(2*t)/2:1-e(2*(1-t))/2}}},347:(e,t,n)=>{n.d(t,{D:()=>a});var r=n(76933);const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return(0,r.oF)(e,(()=>{const o="function"==typeof e?e():e;return{isHigherOrder:!0,onFrame:function(e,r){const a=o.onFrame(o,r);if(e.current=o.current,a){if(e.reps+=1,o.callback&&o.callback(!0,e.current),e.reduceMotion||t>0&&e.reps>=t)return!0;const a=n?o.current:e.startValue;return n&&(o.toValue=e.startValue,e.startValue=a),o.onStart(o,a,r,o.previousAnimation),!1}return!1},onStart:function(e,r,a,i){e.startValue=r,e.reps=0,void 0===o.reduceMotion&&(o.reduceMotion=e.reduceMotion),e.reduceMotion&&n&&(t<=0||t%2==0)?(e.current=e.startValue,e.onFrame=()=>!0):o.onStart(o,r,a,i)},reps:0,current:o.current,callback:e=>{a&&a(e),!e&&o.callback&&o.callback(!1)},startValue:0,reduceMotion:(0,r.uh)(i)}}))}},6328:(e,t,n)=>{n.d(t,{j:()=>i});var r=n(87827),a=n(76933);const i=function(e,t,n){return(0,a.oF)(e,(()=>{const i={duration:300,easing:r.o.inOut(r.o.quad)};return t&&Object.keys(t).forEach((e=>i[e]=t[e])),{type:"timing",onFrame:function(e,t){const{toValue:n,startTime:r,startValue:a}=e,o=t-r;if(o>=i.duration)return e.startTime=0,e.current=n,!0;const l=e.easing(o/i.duration);return e.current=a+(n-a)*l,!1},onStart:function(t,n,r,a){a&&"timing"===a.type&&a.toValue===e&&a.startTime?(t.startTime=a.startTime,t.startValue=a.startValue):(t.startTime=r,t.startValue=n),t.current=n,"object"==typeof i.easing?t.easing=i.easing.factory():t.easing=i.easing},progress:0,toValue:e,startValue:0,startTime:0,easing:()=>0,current:e,callback:n,reduceMotion:(0,a.uh)(null==t?void 0:t.reduceMotion)}}))}},49638:(e,t,n)=>{n.d(t,{n:()=>a});var r=n(67177);const a=(0,n(99435).F)(r.Z)},35842:(e,t,n)=>{n.d(t,{l:()=>y});var r=n(67294),a=n(86425),i=n(97604),o=n(49402),l=n(76933),s=n(10758),c=n(40093),u=n(41956),d=n(83442);const m=(0,d.Wr)();function f(e,t,n,r){if(Array.isArray(t)&&t.forEach(((t,a)=>{f(e,t,n&&n[a],r&&r[a])})),"object"==typeof t&&t.onFrame){const a=t;let i=a.current;null!=r&&("object"==typeof r?void 0!==r.value?i=r.value:void 0!==r.onFrame&&(void 0!==(null==n?void 0:n.current)?i=n.current:void 0!==(null==r?void 0:r.current)&&(i=r.current)):i=r),a.callStart=e=>{a.onStart(a,i,e,n)},a.callStart(e),a.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((a=>f(e,t[a],n&&n[a],r&&r[a])))}function p(e,t,n,r,a){if(!a.value)return!0;if(Array.isArray(e)){r[n]=[];let i=!0;return e.forEach(((e,o)=>{p(e,t,o,r[n],a)||(i=!1)})),i}if("object"==typeof e&&e.onFrame){let a=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),a=e.onFrame(e,t),e.timestamp=t,a&&(e.finished=!0,e.callback&&e.callback(!0))),r[n]=e.current,a}if("object"==typeof e){r[n]={};let i=!0;return Object.keys(e).forEach((o=>{p(e[o],t,o,r[n],a)||(i=!1)})),i}return r[n]=e,!0}function h(e,t){if(Array.isArray(e))for(const n of e)h(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))h(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function y(e,t,y){let v=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const b=(0,u.H)(),g=(0,r.useRef)();let k=Object.values(e.__closure??{});var A;m&&(!k.length&&null!==(A=t)&&void 0!==A&&A.length&&(k=t));const w=y?Array.isArray(y)?y:[y]:[],P=y?(0,c.Nq)(w):null,O=(0,s.y)(!0),E=(0,r.useRef)({});if(t?t.push(e.__workletHash):t=[...k,e.__workletHash],P&&t.push(P),!g.current){const t=(0,l.AX)(e);0,g.current={initial:{value:t,updater:e},remoteState:(0,a.Uv)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,u.G)()}}const{initial:S,remoteState:j,viewDescriptors:x}=g.current,C=x.shareableViewDescriptors;t.push(C),(0,r.useEffect)((()=>{let t,r=e;y&&(r=()=>{const t=e();return w.forEach((e=>{e(t)})),t}),t=(0,d.V5)()?()=>{!function(e,t,r,a,i,l,s){const u=r.animations??{},d=t()??{},m=r.last;let h,y=!1;Object.keys(u).forEach((e=>{const t=d[e];(0,c.mE)(t)||delete u[e]})),Object.keys(d).forEach((e=>{const t=d[e];(0,c.mE)(t)&&(h=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),f(h,t,u[e],m[e]),u[e]=t,y=!0)})),y?(r.animations=u,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,function t(n){const{animations:c,last:u,isAnimationCancelled:d}=r;if(d)return void(r.isAnimationRunning=!1);const m={};let f=!0;Object.keys(c).forEach((e=>{p(c[e],n,e,m,i)?(u[e]=m[e],delete c[e]):f=!1})),Object.keys(m).length&&(0,o.R)(e,m,a,l,s),f?r.isAnimationRunning=!1:requestAnimationFrame(t)}(h))):(r.isAnimationCancelled=!0,r.animations=[]),r.last=d,(0,c.wU)(m,d)||(0,o.R)(e,d,a,l,s)}(C,e,j,b,O,E,w)}:()=>{!function(e,t,r,a,i){let l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const s=r.animations??{},u=t()??{},d=r.last,m={};let h,y=!1,v=!1;for(const o in u){const e=u[o];(0,c.mE)(e)?(h=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),f(h,e,s[o],d[o]),s[o]=e,y=!0):(v=!0,m[o]=e,delete s[o])}if(y){const t=n=>{const{animations:l,last:s,isAnimationCancelled:c}=r;if(c)return void(r.isAnimationRunning=!1);const u={};let d=!0;for(const e in l)p(l[e],n,e,u,i)?(s[e]=u[e],delete l[e]):d=!1;u&&(0,o.Z)(e,u,a),d?r.isAnimationRunning=!1:requestAnimationFrame(t)};r.animations=s,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,t(h)),v&&(0,o.Z)(e,m,a)}else r.isAnimationCancelled=!0,r.animations=[],(0,c.wU)(d,u)||(0,o.Z)(e,u,a,l);r.last=u}(C,r,j,b,O,v)};const a=(0,i.R)(t,k);return()=>{(0,i.B)(a)}}),t),(0,r.useEffect)((()=>(O.value=!0,()=>{O.value=!1})),[O]),h(S.value);const R=(0,r.useRef)(null);return R.current||(R.current=(0,d.V5)()?{viewDescriptors:x,initial:S,viewsRef:b,jestAnimatedStyle:E}:{initial:S,viewsRef:b,viewDescriptors:x}),R.current}},72400:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(28033),i=n(88548),o=n(24404),l=r.forwardRef(((e,t)=>{var n=e.accessibilityLabel,a=e.color,l=e.disabled,c=e.onPress,u=e.testID,d=e.title;return r.createElement(i.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:l,focusable:!l,onPress:c,ref:t,style:[s.button,a&&{backgroundColor:a},l&&s.buttonDisabled],testID:u},r.createElement(o.Z,{style:[s.text,l&&s.textDisabled]},d))}));l.displayName="Button";var s=a.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const c=l},88548:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(63366),i=n(67294),o=n(16528),l=n(94119),s=n(28033),c=n(67177),u=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,s=e.delayPressIn,d=e.delayPressOut,f=e.delayLongPress,p=e.disabled,h=e.focusable,y=e.onLongPress,v=e.onPress,b=e.onPressIn,g=e.onPressOut,k=e.rejectResponderTermination,A=e.style,w=(0,a.Z)(e,u),P=(0,i.useRef)(null),O=(0,o.Z)(t,P),E=(0,i.useState)("0s"),S=E[0],j=E[1],x=(0,i.useState)(null),C=x[0],R=x[1],T=(0,i.useCallback)(((e,t)=>{R(e),j(t?t/1e3+"s":"0s")}),[R,j]),N=(0,i.useCallback)((e=>{T(null!=n?n:.2,e)}),[n,T]),V=(0,i.useCallback)((e=>{T(null,e)}),[T]),M=(0,i.useMemo)((()=>({cancelable:!k,disabled:p,delayLongPress:f,delayPressStart:s,delayPressEnd:d,onLongPress:y,onPress:v,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;N(t?0:150),null!=b&&b(e)},onPressEnd(e){V(250),null!=g&&g(e)}})),[f,s,d,p,y,v,b,g,k,N,V]),D=(0,l.Z)(P,M);return i.createElement(c.Z,(0,r.Z)({},w,D,{accessibilityDisabled:p,focusable:!p&&!1!==h,pointerEvents:p?"none":void 0,ref:O,style:[m.root,!p&&m.actionable,A,null!=C&&{opacity:C},{transitionDuration:S}]}))}var m=s.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),f=i.memo(i.forwardRef(d));f.displayName="TouchableOpacity";const p=f}}]);