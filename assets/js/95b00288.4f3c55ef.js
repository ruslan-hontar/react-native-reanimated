"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>I,default:()=>_,frontMatter:()=>E,metadata:()=>N,toc:()=>P});var r=n(83117),a=n(67294),l=n(3905),o=n(67177),i=n(24404),s=n(14779),c=n(72862),d=n(82334),u=n(10758),m=n(56389),p=n(51969),f=n(72290);const y=10,b=100,v=10,h={code:"function anonymous(){const{scrollTo,animatedRef,scroll,ITEM_SIZE,ITEM_MARGIN}=this.__closure;scrollTo(animatedRef,0,scroll.value*(ITEM_SIZE+2*ITEM_MARGIN),true);}"};function k(){const e=(0,d.m)(),t=(0,u.y)(0);(0,m.o)(function(){const n=function(){(0,p.X)(e,0,t.value*(b+2*v),!0)};return n.__closure={scrollTo:p.X,animatedRef:e,scroll:t,ITEM_SIZE:b,ITEM_MARGIN:v},n.__workletHash=5883570412064,n.__initData=h,n}());const n=Array.from(Array(y).keys());return a.createElement(o.Z,{style:T.container},a.createElement(g,{increment:-1,scroll:t}),a.createElement(o.Z,{style:T.boxWrapper},a.createElement(f.n,{ref:e},n.map(((e,t)=>a.createElement(o.Z,{key:t,style:T.box},a.createElement(i.Z,{style:{textAlign:"center"}},t)))))),a.createElement(g,{increment:1,scroll:t}))}const g=e=>{let{increment:t,scroll:n}=e;return a.createElement(o.Z,{style:T.buttonWrapper},a.createElement(s.Z,{onPress:()=>{n.value=n.value+t>0?n.value+t:y-1+t,n.value>=y-2&&(n.value=0)},title:`Scroll ${Math.abs(t)} ${t>0?"down":"up"}`}))},T=c.Z.create({container:{flex:1,alignItems:"center"},buttonWrapper:{flex:1,alignItems:"center",justifyContent:"center"},box:{width:b,height:b,margin:v,borderRadius:15,backgroundColor:"#b58df1",alignItems:"center",justifyContent:"center"},boxWrapper:{width:"100%",height:250,alignItems:"center"}}),x="import React from 'react';\nimport { Button, View, Text, StyleSheet } from 'react-native';\nimport Animated, {\n  useAnimatedRef,\n  useDerivedValue,\n  useSharedValue,\n  scrollTo,\n} from 'react-native-reanimated';\n\nconst ITEM_COUNT = 10;\nconst ITEM_SIZE = 100;\nconst ITEM_MARGIN = 10;\n\nexport default function App() {\n  const animatedRef = useAnimatedRef();\n  const scroll = useSharedValue(0);\n\n  useDerivedValue(() => {\n    // highlight-start\n    scrollTo(\n      animatedRef,\n      0,\n      scroll.value * (ITEM_SIZE + 2 * ITEM_MARGIN),\n      true\n    );\n    // highlight-end\n  });\n\n  const items = Array.from(Array(ITEM_COUNT).keys());\n\n  return (\n    <View style={styles.container}>\n      <Incrementor increment={-1} scroll={scroll} />\n      <View style={styles.boxWrapper}>\n        <Animated.ScrollView ref={animatedRef}>\n          {items.map((_, i) => (\n            <View key={i} style={styles.box}>\n              <Text style={{ textAlign: 'center' }}>{i}</Text>\n            </View>\n          ))}\n        </Animated.ScrollView>\n      </View>\n      <Incrementor increment={1} scroll={scroll} />\n    </View>\n  );\n}\n\nconst Incrementor = ({ increment, scroll }) => (\n  <View style={styles.buttonWrapper}>\n    <Button\n      onPress={() => {\n        scroll.value =\n          scroll.value + increment > 0\n            ? scroll.value + increment\n            : ITEM_COUNT - 1 + increment;\n\n        if (scroll.value >= ITEM_COUNT - 2) scroll.value = 0;\n      }}\n      title={`Scroll ${Math.abs(increment)} ${increment > 0 ? 'down' : 'up'}`}\n    />\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  buttonWrapper: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    width: ITEM_SIZE,\n    height: ITEM_SIZE,\n    margin: ITEM_MARGIN,\n    borderRadius: 15,\n    backgroundColor: '#b58df1',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  boxWrapper: {\n    width: '100%',\n    height: 250,\n    alignItems: 'center',\n  },\n});\n",E={sidebar_position:1},I="scrollTo",N={unversionedId:"scroll/scrollTo",id:"scroll/scrollTo",title:"scrollTo",description:"scrollTo lets you synchronously scroll to a given X or Y offset.",source:"@site/docs/scroll/scrollTo.mdx",sourceDirName:"scroll",slug:"/scroll/scrollTo",permalink:"/react-native-reanimated/docs/scroll/scrollTo",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/scroll/scrollTo.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Scroll",permalink:"/react-native-reanimated/docs/category/scroll"},next:{title:"useScrollViewOffset",permalink:"/react-native-reanimated/docs/scroll/useScrollViewOffset"}},w={},P=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>animatedRef</code>",id:"animatedref",level:4},{value:"<code>x</code>",id:"x",level:4},{value:"<code>y</code>",id:"y",level:4},{value:"<code>animated</code>",id:"animated",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],R=(O="InteractiveExample",function(e){return console.warn("Component "+O+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var O;const C={toc:P},S="wrapper";function _(e){let{components:t,...n}=e;return(0,l.kt)(S,(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scrollto"},"scrollTo"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scrollTo")," lets you synchronously scroll to a given X or Y offset."),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { scrollTo } from 'react-native-reanimated';\n\nfunction App() {\n  const animatedRef = useAnimatedRef();\n  const scrollY = useSharedValue(0);\n\n  useDerivedValue(() => {\n    // highlight-next-line\n    scrollTo(animatedRef, 0, scrollY.value, true);\n  });\n\n  return (\n    <Animated.ScrollView ref={animatedRef}>{/* ... */}</Animated.ScrollView>\n  );\n}\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Type definitions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function scrollTo<T extends Component>(\n  animatedRef: AnimatedRef<T>,\n  x: number,\n  y: number,\n  animated: boolean\n): void;\n"))),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"animatedref"},(0,l.kt)("inlineCode",{parentName:"h4"},"animatedRef")),(0,l.kt)("p",null,"An ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedRef#returns"},"animated ref")," connected to the ScrollView component you'd want to scroll on. The animated ref has to be passed either to an ",(0,l.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animated-component"},"Animated component")," or a React Native built-in component."),(0,l.kt)("h4",{id:"x"},(0,l.kt)("inlineCode",{parentName:"h4"},"x")),(0,l.kt)("p",null,"Value in pixels to scroll to on the horizontal X axis."),(0,l.kt)("h4",{id:"y"},(0,l.kt)("inlineCode",{parentName:"h4"},"y")),(0,l.kt)("p",null,"Value in pixels to scroll to on the vertical Y axis."),(0,l.kt)("h4",{id:"animated"},(0,l.kt)("inlineCode",{parentName:"h4"},"animated")),(0,l.kt)("p",null,"Whether the scroll should be smooth (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),") or instant (",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scrollTo")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(R,{src:x,component:(0,l.kt)(k,{mdxType:"ScrollTo"}),mdxType:"InteractiveExample"}),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"scrollTo")," function can only be called from ",(0,l.kt)("a",{parentName:"li",href:"/docs/fundamentals/glossary#ui-thread"},"the UI thread"),".")),(0,l.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,l.kt)("div",{className:"platform-compatibility"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Android"),(0,l.kt)("th",{parentName:"tr",align:null},"iOS"),(0,l.kt)("th",{parentName:"tr",align:null},"Web"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}_.isMDXComponent=!0},51969:(e,t,n)=>{function r(e,t,n,r){const a=e();if(-1!==a){const e=a;null==e||e.scrollTo({x:t,y:n,animated:r})}}n.d(t,{X:()=>r})},14779:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(67294),a=n(72862),l=n(83117),o=n(80102),i=n(16528),s=n(94119),c=n(67177),d=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function u(e,t){var n=e.activeOpacity,a=e.delayPressIn,u=e.delayPressOut,p=e.delayLongPress,f=e.disabled,y=e.focusable,b=e.onLongPress,v=e.onPress,h=e.onPressIn,k=e.onPressOut,g=e.rejectResponderTermination,T=e.style,x=(0,o.Z)(e,d),E=(0,r.useRef)(null),I=(0,i.Z)(t,E),N=(0,r.useState)("0s"),w=N[0],P=N[1],R=(0,r.useState)(null),O=R[0],C=R[1],S=(0,r.useCallback)(((e,t)=>{C(e),P(t?t/1e3+"s":"0s")}),[C,P]),_=(0,r.useCallback)((e=>{S(null!=n?n:.2,e)}),[n,S]),A=(0,r.useCallback)((e=>{S(null,e)}),[S]),M=(0,r.useMemo)((()=>({cancelable:!g,disabled:f,delayLongPress:p,delayPressStart:a,delayPressEnd:u,onLongPress:b,onPress:v,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;_(t?0:150),null!=h&&h(e)},onPressEnd(e){A(250),null!=k&&k(e)}})),[p,a,u,f,b,v,h,k,g,_,A]),Z=(0,s.Z)(E,M);return r.createElement(c.Z,(0,l.Z)({},x,Z,{accessibilityDisabled:f,focusable:!f&&!1!==y,pointerEvents:f?"none":void 0,ref:I,style:[m.root,!f&&m.actionable,T,null!=O&&{opacity:O},{transitionDuration:w}]}))}var m=a.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=r.memo(r.forwardRef(u));p.displayName="TouchableOpacity";const f=p;var y=n(24404),b=r.forwardRef(((e,t)=>{var n=e.accessibilityLabel,a=e.color,l=e.disabled,o=e.onPress,i=e.testID,s=e.title;return r.createElement(f,{accessibilityLabel:n,accessibilityRole:"button",disabled:l,focusable:!l,onPress:o,ref:t,style:[v.button,a&&{backgroundColor:a},l&&v.buttonDisabled],testID:i},r.createElement(y.Z,{style:[v.text,l&&v.textDisabled]},s))}));b.displayName="Button";var v=a.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const h=b}}]);