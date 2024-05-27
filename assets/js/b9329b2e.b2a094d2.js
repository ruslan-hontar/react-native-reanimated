"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2249],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(v,i(i({ref:t},d),{},{components:n})):a.createElement(v,i({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>x,frontMatter:()=>v,metadata:()=>y,toc:()=>b});var a=n(87462),r=n(67294),l=n(3905),i=n(67177),o=n(72400),s=n(28033),u=n(10758),d=n(49638);function c(){const e=(0,u.y)(100);return r.createElement(i.Z,{style:p.container},r.createElement(d.n,{style:{...p.box,width:e}}),r.createElement(o.Z,{onPress:()=>{e.value+=50},title:"Click me"}))}const p=s.Z.create({container:{flex:1,alignItems:"center"},box:{height:100,backgroundColor:"#b58df1",borderRadius:20,marginVertical:64}}),m="import React from 'react';\nimport { Button, StyleSheet, View } from 'react-native';\nimport Animated, { useSharedValue } from 'react-native-reanimated';\n\nexport default function App() {\n  // highlight-next-line\n  const width = useSharedValue<number>(100);\n\n  const handlePress = () => {\n    // highlight-next-line\n    width.value += 50;\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={{ ...styles.box, width }} />\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 64,\n  },\n});\n",v={sidebar_position:1},h="useSharedValue",y={unversionedId:"core/useSharedValue",id:"core/useSharedValue",title:"useSharedValue",description:"useSharedValue lets you define shared values in your components.",source:"@site/docs/core/useSharedValue.mdx",sourceDirName:"core",slug:"/core/useSharedValue",permalink:"/react-native-reanimated/docs/core/useSharedValue",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/core/useSharedValue.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/react-native-reanimated/docs/category/core"},next:{title:"useAnimatedStyle",permalink:"/react-native-reanimated/docs/core/useAnimatedStyle"}},f={},b=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>initialValue</code>",id:"initialvalue",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},g=k("InteractiveExample"),N=k("Indent"),w={toc:b},S="wrapper";function x(e){let{components:t,...n}=e;return(0,l.kt)(S,(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"usesharedvalue"},"useSharedValue"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useSharedValue")," lets you define ",(0,l.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared values")," in your components."),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useSharedValue } from 'react-native-reanimated';\n\nfunction App() {\n  const sv = useSharedValue(100);\n\n  // read a shared value\n  console.log(sv.value);\n\n  // and modify it\n  sv.value += 50;\n}\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Type definitions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SharedValue<Value = unknown> {\n  value: Value;\n  addListener: (listenerID: number, listener: (value: Value) => void) => void;\n  removeListener: (listenerID: number) => void;\n  modify: (\n    modifier?: <T extends Value>(value: T) => T,\n    forceUpdate?: boolean\n  ) => void;\n}\n\nfunction useSharedValue<Value>(\n  initialValue: Value,\n  oneWayReadsOnly?: boolean\n): SharedValue<Value>;\n"))),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"initialvalue"},(0,l.kt)("inlineCode",{parentName:"h4"},"initialValue")),(0,l.kt)("p",null,"The value you want to be initially stored to a ",(0,l.kt)("inlineCode",{parentName:"p"},".value")," property. It can be any JavaScript value like ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," but also data structures such as ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useSharedValue")," returns a shared value with a single ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property initially set to the ",(0,l.kt)("inlineCode",{parentName:"p"},"initialValue"),"."),(0,l.kt)("p",null,"Values stored in shared values can be accessed and modified by their ",(0,l.kt)("inlineCode",{parentName:"p"},".value")," property."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(g,{src:m,component:c,showCode:!0,mdxType:"InteractiveExample"}),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When you change the ",(0,l.kt)("inlineCode",{parentName:"p"},"sv.value")," Reanimated will update the styles and keep the shared value in sync between the threads. However, this won't trigger a typical React re-render because a shared value is a plain JavaScript object.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When you change the ",(0,l.kt)("inlineCode",{parentName:"p"},"sv.value")," the update will happen synchronously on the ",(0,l.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". On the other hand, on the ",(0,l.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread")," the update is asynchronous. This means when you try to immediately log the ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," after the change it will log the previously stored value."))),(0,l.kt)(N,{mdxType:"Indent"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function App() {\n  const sv = useSharedValue(100); // initially set 100\n\n  sv.value += 50; // changing value stored in a shared value\n\n  console.log(sv.value); // will still log 100\n}\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stay away from ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"destructuring assignment")," when working with shared values. While this is a completely valid JavaScript code it will make Reanimated unable to keep the reactivity of a shared value.")),(0,l.kt)(N,{mdxType:"Indent"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function App() {\n  let { value } = sv; // don't do this\n\n  console.log(value); // you can read the value just fine\n\n  value += 50; // but this won't update the styles\n}\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When storing objects in a shared value, make sure to reassign an object instead of changing the properties individually.")),(0,l.kt)(N,{mdxType:"Indent"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function App() {\n  const sv = useSharedValue({ x: 0, y: 0 });\n\n  sv.value.x = 50; // Reanimated loses reactivity \ud83d\udea8\n\n  sv.value = { x: 50, y: 0 }; // \u2705\n}\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When storing large arrays or complex objects in a shared value, you can use ",(0,l.kt)("inlineCode",{parentName:"li"},".modify")," method to alter the existing value instead of creating a new one.")),(0,l.kt)(N,{mdxType:"Indent"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function App() {\n  const sv = useSharedValue([1, 2, 3]);\n\n  sv.value.push(1000); // Reanimated loses reactivity \ud83d\udea8\n\n  sv.value = [...sv.value, 1000]; // works, but creates a new copy \u26a0\ufe0f\n\n  sv.modify((value) => {\n    'worklet';\n    value.push(1000); // \u2705\n    return value;\n  });\n}\n"))),(0,l.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,l.kt)("div",{className:"platform-compatibility"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Android"),(0,l.kt)("th",{parentName:"tr",align:null},"iOS"),(0,l.kt)("th",{parentName:"tr",align:null},"Web"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}x.isMDXComponent=!0},49638:(e,t,n)=>{n.d(t,{n:()=>r});var a=n(67177);const r=(0,n(99435).F)(a.Z)},72400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(28033),l=n(88548),i=n(24404),o=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,r=e.color,o=e.disabled,u=e.onPress,d=e.testID,c=e.title;return a.createElement(l.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:o,focusable:!o,onPress:u,ref:t,style:[s.button,r&&{backgroundColor:r},o&&s.buttonDisabled],testID:d},a.createElement(i.Z,{style:[s.text,o&&s.textDisabled]},c))}));o.displayName="Button";var s=r.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const u=o},88548:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(63366),l=n(67294),i=n(16528),o=n(94119),s=n(28033),u=n(67177),d=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function c(e,t){var n=e.activeOpacity,s=e.delayPressIn,c=e.delayPressOut,m=e.delayLongPress,v=e.disabled,h=e.focusable,y=e.onLongPress,f=e.onPress,b=e.onPressIn,k=e.onPressOut,g=e.rejectResponderTermination,N=e.style,w=(0,r.Z)(e,d),S=(0,l.useRef)(null),x=(0,i.Z)(t,S),P=(0,l.useState)("0s"),V=P[0],C=P[1],O=(0,l.useState)(null),j=O[0],R=O[1],T=(0,l.useCallback)(((e,t)=>{R(e),C(t?t/1e3+"s":"0s")}),[R,C]),E=(0,l.useCallback)((e=>{T(null!=n?n:.2,e)}),[n,T]),D=(0,l.useCallback)((e=>{T(null,e)}),[T]),I=(0,l.useMemo)((()=>({cancelable:!g,disabled:v,delayLongPress:m,delayPressStart:s,delayPressEnd:c,onLongPress:y,onPress:f,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;E(t?0:150),null!=b&&b(e)},onPressEnd(e){D(250),null!=k&&k(e)}})),[m,s,c,v,y,f,b,k,g,E,D]),Z=(0,o.Z)(S,I);return l.createElement(u.Z,(0,a.Z)({},w,Z,{accessibilityDisabled:v,focusable:!v&&!1!==h,pointerEvents:v?"none":void 0,ref:x,style:[p.root,!v&&p.actionable,N,null!=j&&{opacity:j},{transitionDuration:V}]}))}var p=s.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),m=l.memo(l.forwardRef(c));m.displayName="TouchableOpacity";const v=m}}]);