"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>w,default:()=>T,frontMatter:()=>g,metadata:()=>D,toc:()=>_});var a=n(87462),r=n(67294),l=n(3905),o=n(67177),i=n(28033),u=n(10758),s=n(56389),c=n(35842),d=n(347),p=n(6328),m=n(49638);const f={code:'function anonymous(){const{scale}=this.__closure;return scale.value*2+"rad";}'},v={code:"function anonymous(){const{scale}=this.__closure;return{transform:[{scale:scale.value}]};}"},h={code:"function anonymous(){const{rotate}=this.__closure;return{transform:[{rotate:rotate.value}]};}"};function y(){const e=(0,u.y)(1),t=(0,s.o)(function(){const t=function(){return 2*e.value+"rad"};return t.__closure={scale:e},t.__workletHash=0xf78b6c2df5d,t.__initData=f,t}()),n=(0,c.l)(function(){const t=()=>({transform:[{scale:e.value}]});return t.__closure={scale:e},t.__workletHash=4183451682571,t.__initData=v,t}()),a=(0,c.l)(function(){const e=()=>({transform:[{rotate:t.value}]});return e.__closure={rotate:t},e.__workletHash=9944796578474,e.__initData=h,e}());return r.useEffect((()=>{e.value=(0,d.D)((0,p.j)(2*e.value,{duration:1e3}),-1,!0)}),[]),r.createElement(o.Z,{style:k.container},r.createElement(m.n,{style:[k.ball,n]}),r.createElement(m.n,{style:[k.box,a]}))}const k=i.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%",flexDirection:"row"},ball:{height:50,width:50,backgroundColor:"#b58df1",borderRadius:50,marginRight:80},box:{height:100,width:100,backgroundColor:"#b58df1",borderRadius:15}}),b="import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n  withRepeat,\n  useDerivedValue,\n} from 'react-native-reanimated';\n\nexport default function App() {\n  const scale = useSharedValue<number>(1);\n\n  // highlight-start\n  const rotate = useDerivedValue(() => {\n    return `${scale.value * 2}rad`;\n  });\n  // highlight-end\n\n  const scaleStyles = useAnimatedStyle(() => ({\n    transform: [{ scale: scale.value }],\n  }));\n\n  const rotateStyles = useAnimatedStyle(() => ({\n    transform: [{ rotate: rotate.value }],\n  }));\n\n  React.useEffect(() => {\n    scale.value = withRepeat(\n      withTiming(scale.value * 2, { duration: 1000 }),\n      -1,\n      true\n    );\n  }, []);\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.ball, scaleStyles]} />\n      <Animated.View style={[styles.box, rotateStyles]} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n    flexDirection: 'row',\n  },\n  ball: {\n    height: 50,\n    width: 50,\n    backgroundColor: '#b58df1',\n    borderRadius: 50,\n    marginRight: 80,\n  },\n  box: {\n    height: 100,\n    width: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 15,\n  },\n});\n",g={sidebar_position:5},w="useDerivedValue",D={unversionedId:"core/useDerivedValue",id:"core/useDerivedValue",title:"useDerivedValue",description:"useDerivedValue lets you create new shared values based on existing ones while keeping them reactive.",source:"@site/docs/core/useDerivedValue.mdx",sourceDirName:"core",slug:"/core/useDerivedValue",permalink:"/react-native-reanimated/docs/core/useDerivedValue",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/core/useDerivedValue.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"useAnimatedRef",permalink:"/react-native-reanimated/docs/core/useAnimatedRef"},next:{title:"createAnimatedComponent",permalink:"/react-native-reanimated/docs/core/createAnimatedComponent"}},N={},_=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>updater</code>",id:"updater",level:4},{value:"<code>dependencies</code> <Optional/>",id:"dependencies-",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],x=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},O=x("Optional"),V=x("InteractiveExample"),R={toc:_},C="wrapper";function T(e){let{components:t,...n}=e;return(0,l.kt)(C,(0,a.Z)({},R,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"usederivedvalue"},"useDerivedValue"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useDerivedValue")," lets you create new ",(0,l.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared values")," based on existing ones while keeping them reactive."),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useDerivedValue } from 'react-native-reanimated';\n\nfunction App() {\n  const derivedValue = useDerivedValue(() => {\n    return sv.value * 50;\n  });\n}\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Type definitions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type SharedValue<T> = { value: T };\ntype DerivedValue<T> = Readonly<SharedValue<T>>;\n\nfunction useDerivedValue<T>(\n  updater: () => T,\n  dependencies?: DependencyList\n): DerivedValue<T>;\n"))),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"updater"},(0,l.kt)("inlineCode",{parentName:"h4"},"updater")),(0,l.kt)("p",null,"A function that should return a value constructed of shared values, React state or any other JavaScript value. This function is called whenever at least one of the shared values or state used in the function body changes."),(0,l.kt)("h4",{id:"dependencies-"},(0,l.kt)("inlineCode",{parentName:"h4"},"dependencies")," ",(0,l.kt)(O,{mdxType:"Optional"})),(0,l.kt)("p",null,"An optional array of dependencies."),(0,l.kt)("p",null,"Only relevant when using Reanimated ",(0,l.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/guides/web-support#web-without-the-babel-plugin"},"without the Babel plugin on the Web"),"."),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useDerivedValue")," returns a new readonly ",(0,l.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," based on a value returned from the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/useDerivedValue#updater"},(0,l.kt)("inlineCode",{parentName:"a"},"updater"))," function."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(V,{src:b,component:(0,l.kt)(y,{mdxType:"DerivedValue"}),mdxType:"InteractiveExample"}),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The callback passed to the first argument is automatically ",(0,l.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," and ran on the ",(0,l.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"useDerivedValue")," without returning a value in the ",(0,l.kt)("inlineCode",{parentName:"p"},"updater")," function to react to a change of a shared value. If you need to access the previous value stored in a shared value use ",(0,l.kt)("a",{parentName:"p",href:"/docs/advanced/useAnimatedReaction"},(0,l.kt)("inlineCode",{parentName:"a"},"useAnimatedReaction"))," instead."))),(0,l.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,l.kt)("div",{className:"platform-compatibility"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Android"),(0,l.kt)("th",{parentName:"tr",align:null},"iOS"),(0,l.kt)("th",{parentName:"tr",align:null},"Web"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}T.isMDXComponent=!0},56389:(e,t,n)=>{n.d(t,{o:()=>u});var a=n(67294),r=n(76933),l=n(96085),o=n(97604),i=n(83442);function u(e,t){const n=(0,a.useRef)(null);let u=Object.values(e.__closure??{});var s;(0,i.Wr)()&&(!u.length&&null!==(s=t)&&void 0!==s&&s.length&&(u=t));void 0===t?t=[...u,e.__workletHash]:t.push(e.__workletHash),null===n.current&&(n.current=(0,l.v)((0,r.AX)(e)));const c=n.current;return(0,a.useEffect)((()=>{const t=(0,o.R)((()=>{c.value=e()}),u,[c]);return()=>{(0,o.B)(t)}}),t),(0,a.useEffect)((()=>()=>{n.current=null}),[]),c}}}]);