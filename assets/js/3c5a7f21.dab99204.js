"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>M,contentTitle:()=>g,default:()=>E,frontMatter:()=>h,metadata:()=>k,toc:()=>R});var r=n(87462),a=n(67294),o=n(3905),i=n(67177),c=n(28033),l=n(10758),s=n(21739),d=n(35842),u=n(347),m=n(6328),p=n(49638);const f={code:"function anonymous(){const{reduceMotion,sv}=this.__closure;return{transform:[{translateX:reduceMotion?0:sv.value}]};}"};function y(){const e=(0,l.y)(-200),t=(0,s.J)(),n=(0,d.l)(function(){const n=()=>({transform:[{translateX:t?0:e.value}]});return n.__closure={reduceMotion:t,sv:e},n.__workletHash=8897056240564,n.__initData=f,n}());return a.useEffect((()=>{e.value=(0,u.D)((0,m.j)(200,{duration:2e3}),-1,!0)})),a.createElement(i.Z,{style:v.container},a.createElement(p.n,{style:[v.box,n]}))}const v=c.Z.create({box:{height:100,width:100,backgroundColor:"#b58df1",borderRadius:20},container:{flex:1,alignItems:"center"}}),b="import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useReducedMotion,\n  useSharedValue,\n  withRepeat,\n  withTiming,\n} from 'react-native-reanimated';\n\nexport default function App() {\n  const sv = useSharedValue<number>(-200);\n  // highlight-next-line\n  const reduceMotion = useReducedMotion();\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    // highlight-next-line\n    transform: [{ translateX: reduceMotion ? 0 : sv.value }],\n  }));\n\n  React.useEffect(() => {\n    sv.value = withRepeat(withTiming(200, { duration: 2000 }), -1, true);\n  });\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 100,\n    width: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n  },\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n",h={id:"useReducedMotion",title:"useReducedMotion",sidebar_label:"useReducedMotion",sidebar_position:3},g=void 0,k={unversionedId:"device/useReducedMotion",id:"device/useReducedMotion",title:"useReducedMotion",description:"useReducedMotion lets you query the reduced motion system setting. You can use it to disable animations.",source:"@site/docs/device/useReducedMotion.mdx",sourceDirName:"device",slug:"/device/useReducedMotion",permalink:"/react-native-reanimated/docs/device/useReducedMotion",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/device/useReducedMotion.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"useReducedMotion",title:"useReducedMotion",sidebar_label:"useReducedMotion",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useAnimatedSensor",permalink:"/react-native-reanimated/docs/device/useAnimatedSensor"},next:{title:"Layout Animations",permalink:"/react-native-reanimated/docs/category/layout-animations"}},M={},R=[{value:"Reference",id:"reference",level:2},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],w=(x="InteractiveExample",function(e){return console.warn("Component "+x+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var x;const O={toc:R},N="wrapper";function E(e){let{components:t,...n}=e;return(0,o.kt)(N,(0,r.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useReducedMotion")," lets you query the reduced motion system setting. You can use it to disable animations."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useReducedMotion } from 'react-native-reanimated';\n\nfunction App() {\n  const reduceMotion = useReducedMotion();\n\n  if (reduceMotion) {\n    // display static content \u2728\n  } else {\n    // run animations \u2728\n  }\n\n  // ...\n}\n")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useReducedMotion")," returns a boolean indicating whether the reduced motion setting was enabled when the app started."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(w,{src:b,component:(0,o.kt)(y,{mdxType:"UseReducedMotion"}),mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changing the reduced motion system setting doesn't cause your components to rerender."),(0,o.kt)("li",{parentName:"ul"},"In contrast to ",(0,o.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/accessibilityinfo#isreducemotionenabled"},(0,o.kt)("inlineCode",{parentName:"a"},"AccessibilityInfo.isReduceMotionEnabled()"))," the ",(0,o.kt)("inlineCode",{parentName:"li"},"useReducedMotion")," hook lets you get the value synchronously.")),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,o.kt)("div",{className:"platform-compatibility"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Android"),(0,o.kt)("th",{parentName:"tr",align:null},"iOS"),(0,o.kt)("th",{parentName:"tr",align:null},"Web"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}E.isMDXComponent=!0},21739:(e,t,n)=>{n.d(t,{J:()=>a});const r=(0,n(83442).rP)();function a(){return r}}}]);