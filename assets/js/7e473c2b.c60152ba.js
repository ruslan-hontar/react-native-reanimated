"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>x,frontMatter:()=>h,metadata:()=>g,toc:()=>P});var a=n(87462),r=n(67294),o=n(3905),i=n(67177),s=n(72400),l=n(28033),d=n(82334),c=n(12717),p=n(14301),u=n(49638);const m=["#FFE780","#87CCE8","#FFA3A1","#B1DFD0","#B58DF1"],f={code:"function anonymous(){const{setNativeProps,animatedRef,COLORS}=this.__closure;setNativeProps(animatedRef,{backgroundColor:COLORS[Math.floor(Math.random()*COLORS.length)]});}"};function v(){const e=(0,d.m)();return r.createElement(i.Z,{style:y.container},r.createElement(u.n,{ref:e,style:y.box}),r.createElement(s.Z,{title:"change color",onPress:()=>{(0,c.m_)(function(){const t=function(){(0,p.R)(e,{backgroundColor:m[Math.floor(Math.random()*m.length)]})};return t.__closure={setNativeProps:p.R,animatedRef:e,COLORS:m},t.__workletHash=8389294944519,t.__initData=f,t}())()}}))}const y=l.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center"},box:{height:120,width:120,backgroundColor:"#B58DF1",borderRadius:20,marginBottom:30}}),b="import React from 'react';\nimport { Button, StyleSheet, View } from 'react-native';\nimport Animated, {\n  runOnUI,\n  setNativeProps,\n  useAnimatedRef,\n} from 'react-native-reanimated';\n\nconst COLORS = ['#FFE780', '#87CCE8', '#FFA3A1', '#B1DFD0', '#B58DF1'];\n\nexport default function Example() {\n  const animatedRef = useAnimatedRef<Animated.View>();\n\n  const handlePress = () => {\n    runOnUI(() => {\n      // highlight-next-line\n      setNativeProps(animatedRef, {\n        backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],\n        // highlight-next-line\n      });\n    })();\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View ref={animatedRef} style={styles.box} />\n      <Button title=\"change color\" onPress={handlePress} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#B58DF1',\n    borderRadius: 20,\n    marginBottom: 30,\n  },\n});\n",h={sidebar_position:7},k="setNativeProps",g={unversionedId:"advanced/setNativeProps",id:"advanced/setNativeProps",title:"setNativeProps",description:"setNativeProps lets you imperatively update component properties.",source:"@site/docs/advanced/setNativeProps.mdx",sourceDirName:"advanced",slug:"/advanced/setNativeProps",permalink:"/react-native-reanimated/docs/advanced/setNativeProps",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/advanced/setNativeProps.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"dispatchCommand",permalink:"/react-native-reanimated/docs/advanced/dispatchCommand"},next:{title:"Guides",permalink:"/react-native-reanimated/docs/category/guides"}},N={},P=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>animatedRef</code>",id:"animatedref",level:4},{value:"<code>updates</code>",id:"updates",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],C=(w="InteractiveExample",function(e){return console.warn("Component "+w+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var w;const O={toc:P},R="wrapper";function x(e){let{components:t,...n}=e;return(0,o.kt)(R,(0,a.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setnativeprops"},"setNativeProps"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," lets you imperatively update component properties."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," is an escape hatch for specific edge-cases."),(0,o.kt)("p",{parentName:"admonition"},"You should always reach for ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedStyle"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedProps"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedProps"))," first when animating styles or properties.")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { setNativeProps } from 'react-native-reanimated';\n\nfunction App() {\n  const animatedRef = useAnimatedRef();\n\n  const tap = Gesture.Tap().onEnd(() => {\n    // highlight-start\n    setNativeProps(animatedRef, { text: '' });\n    // highlight-end\n  });\n\n  return <TextInput ref={animatedRef} />;\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Type definitions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function setNativeProps<T extends Component>(\n  animatedRef: AnimatedRef<T>,\n  updates: StyleProps\n) => void;\n"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"animatedref"},(0,o.kt)("inlineCode",{parentName:"h4"},"animatedRef")),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedRef#returns"},"animated ref")," connected to the component you'd want to update. The animated ref has to be passed either to an ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animated-component"},"Animated component")," or a React Native built-in component."),(0,o.kt)("h4",{id:"updates"},(0,o.kt)("inlineCode",{parentName:"h4"},"updates")),(0,o.kt)("p",null,"An object with properties you want to update. These could be both style props (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor"),") and regular props (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),")."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(C,{src:b,component:(0,o.kt)(v,{mdxType:"SetNativeProps"}),mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You should always reach for ",(0,o.kt)("a",{parentName:"p",href:"docs/core/useAnimatedStyle"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle"))," and ",(0,o.kt)("a",{parentName:"p",href:"docs/core/useAnimatedProps"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedProps"))," first when animating styles or properties.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," is supposed to only be used on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," function was created to allow updating props imperatively from gesture handlers. Because in other cases, you need to wrap ",(0,o.kt)("inlineCode",{parentName:"p"},"setNativeProps")," with an additional ",(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI")," call, React Native's ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animations#setnativeprops"},"built-in ",(0,o.kt)("inlineCode",{parentName:"a"},"setNativeProps"))," proves to work better with fewer jumps between runtimes."))),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,o.kt)("div",{className:"platform-compatibility"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Android"),(0,o.kt)("th",{parentName:"tr",align:null},"iOS"),(0,o.kt)("th",{parentName:"tr",align:null},"Web"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}x.isMDXComponent=!0},49638:(e,t,n)=>{n.d(t,{n:()=>r});var a=n(67177);const r=(0,n(99435).F)(a.Z)},82334:(e,t,n)=>{n.d(t,{m:()=>f});var a=n(67294),r=n(10758),o=n(7737),i=n(86425),s=n(26496),l=n(82747),d=n(22805),c=n(83442);const p=(0,c.$L)();function u(e){return(0,c.aw)()&&e.getNativeScrollRef?e.getNativeScrollRef():!(0,c.aw)()&&e.getScrollableNode?e.getScrollableNode():e}const m=(0,c.aw)()?o.b:l.Z;function f(){const e=(0,r.y)(-1),t=(0,r.y)(null),n=(0,a.useRef)();if(!n.current){const a=n=>{var r;n&&(e.value=p?u(n):m(u(n)),a.current=n,"ios"!==d.Z.OS||(0,c.aw)()||(t.value=(null==n||null===(r=n.viewConfig)||void 0===r?void 0:r.uiViewClassName)||"RCTView"));return e.value};a.current=null;const r=(0,i.wH)({__init:()=>{const n=()=>e.value;return n.viewName=t,n}});s.z.set(a,r),n.current=a}return n.current}},14301:(e,t,n)=>{n.d(t,{R:()=>r});var a=n(79773);function r(e,t){const n=e();(0,a.n)(t,{_component:n})}},72400:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(28033),o=n(88548),i=n(24404),s=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,r=e.color,s=e.disabled,d=e.onPress,c=e.testID,p=e.title;return a.createElement(o.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:s,focusable:!s,onPress:d,ref:t,style:[l.button,r&&{backgroundColor:r},s&&l.buttonDisabled],testID:c},a.createElement(i.Z,{style:[l.text,s&&l.textDisabled]},p))}));s.displayName="Button";var l=r.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const d=s},88548:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),r=n(63366),o=n(67294),i=n(16528),s=n(94119),l=n(28033),d=n(67177),c=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function p(e,t){var n=e.activeOpacity,l=e.delayPressIn,p=e.delayPressOut,m=e.delayLongPress,f=e.disabled,v=e.focusable,y=e.onLongPress,b=e.onPress,h=e.onPressIn,k=e.onPressOut,g=e.rejectResponderTermination,N=e.style,P=(0,r.Z)(e,c),C=(0,o.useRef)(null),w=(0,i.Z)(t,C),O=(0,o.useState)("0s"),R=O[0],x=O[1],S=(0,o.useState)(null),A=S[0],E=S[1],D=(0,o.useCallback)(((e,t)=>{E(e),x(t?t/1e3+"s":"0s")}),[E,x]),j=(0,o.useCallback)((e=>{D(null!=n?n:.2,e)}),[n,D]),T=(0,o.useCallback)((e=>{D(null,e)}),[D]),_=(0,o.useMemo)((()=>({cancelable:!g,disabled:f,delayLongPress:m,delayPressStart:l,delayPressEnd:p,onLongPress:y,onPress:b,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;j(t?0:150),null!=h&&h(e)},onPressEnd(e){T(250),null!=k&&k(e)}})),[m,l,p,f,y,b,h,k,g,j,T]),Z=(0,s.Z)(C,_);return o.createElement(d.Z,(0,a.Z)({},P,Z,{accessibilityDisabled:f,focusable:!f&&!1!==v,pointerEvents:f?"none":void 0,ref:w,style:[u.root,!f&&u.actionable,N,null!=A&&{opacity:A},{transitionDuration:R}]}))}var u=l.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),m=o.memo(o.forwardRef(p));m.displayName="TouchableOpacity";const f=m}}]);