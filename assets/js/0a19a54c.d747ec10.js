"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[3372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60582:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),r=n(67177),i=n(14779),o=n(72862),l=n(87827),s=n(10758),c=n(35842),d=n(12448),u=n(6328),m=n(347),p=n(49638);const f=10,h=100,b=l.o.elastic(1.5),y={code:'function anonymous(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.value+"deg"}]};}'};function g(){const e=(0,s.y)(0),t=(0,c.l)(function(){const t=()=>({transform:[{rotateZ:`${e.value}deg`}]});return t.__closure={rotation:e},t.__workletHash=0x95e5764a83d,t.__initData=y,t}());return a.createElement(r.Z,{style:v.container},a.createElement(p.n,{style:[v.box,t]}),a.createElement(i.Z,{title:"wobble",onPress:()=>{e.value=(0,d.u)((0,u.j)(-f,{duration:h/2,easing:b}),(0,m.D)((0,u.j)(f,{duration:h,easing:b}),7,!0),(0,u.j)(0,{duration:h/2,easing:b}))}}))}const v=o.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20,marginBottom:30}})},21174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>N,default:()=>I,frontMatter:()=>x,metadata:()=>S,toc:()=>O});var a=n(83117),r=n(67294),i=n(3905),o=n(87827),l=n(10758),s=n(347),c=n(6328),d=n(35842),u=n(49638),m=n(67177),p=n(72862);const f=2e3,h=o.o.bezier(.25,-.5,.25,1),b={code:'function anonymous(){const{sv}=this.__closure;return{transform:[{rotate:sv.value*360+"deg"}]};}'};function y(){const e=(0,l.y)(0);r.useEffect((()=>{e.value=(0,s.D)((0,c.j)(1,{duration:f,easing:h}),-1)}),[]);const t=(0,d.l)(function(){const t=()=>({transform:[{rotate:360*e.value+"deg"}]});return t.__closure={sv:e},t.__workletHash=0xebfae8efff8,t.__initData=b,t}());return r.createElement(m.Z,{style:g.container},r.createElement(u.n,{style:[g.box,t]}))}const g=p.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20}}),v="import React from 'react';\nimport Animated, {\n  Easing,\n  useAnimatedStyle,\n  useSharedValue,\n  withRepeat,\n  withTiming,\n} from 'react-native-reanimated';\nimport { StyleSheet, View } from 'react-native';\n\nconst duration = 2000;\nconst easing = Easing.bezier(0.25, -0.5, 0.25, 1);\n\nexport default function App() {\n  const sv = useSharedValue(0);\n\n  React.useEffect(() => {\n    // highlight-next-line\n    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);\n  }, []);\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [{ rotate: `${sv.value * 360}deg` }],\n  }));\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n  },\n});\n";var k=n(60582),w=n(28709);const x={sidebar_position:5},N="withRepeat",S={unversionedId:"animations/withRepeat",id:"animations/withRepeat",title:"withRepeat",description:"withRepeat is an animation modifier that lets you repeat an animation given number of times or run it indefinitely.",source:"@site/docs/animations/withRepeat.mdx",sourceDirName:"animations",slug:"/animations/withRepeat",permalink:"/react-native-reanimated/docs/animations/withRepeat",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/animations/withRepeat.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"withSequence",permalink:"/react-native-reanimated/docs/animations/withSequence"},next:{title:"withDelay",permalink:"/react-native-reanimated/docs/animations/withDelay"}},E={},O=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>animation</code>",id:"animation",level:4},{value:"<code>numberOfReps</code> <Optional />",id:"numberofreps-",level:4},{value:"<code>reverse</code> <Optional />",id:"reverse-",level:4},{value:"<code>callback</code> <Optional />",id:"callback-",level:4},{value:"<code>reduceMotion</code> <Optional />",id:"reducemotion-",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],R=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},P=R("InteractiveExample"),A=R("Optional"),C={toc:O},T="wrapper";function I(e){let{components:t,...n}=e;return(0,i.kt)(T,(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"withrepeat"},"withRepeat"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"withRepeat")," is an ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-modifier"},"animation modifier")," that lets you repeat an animation given number of times or run it indefinitely."),(0,i.kt)(P,{src:v,component:(0,i.kt)(y,{mdxType:"RepeatBasic"}),mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withRepeat } from 'react-native-reanimated';\n\nfunction App() {\n  sv.value = withRepeat(withSpring(0), 5);\n  // ...\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type AnimatableValue = number | string | number[];\n\nfunction withRepeat<T extends AnimatableValue>(\n  animation: T,\n  numberOfReps?: number,\n  reverse?: boolean,\n  callback?: (finished?: boolean, current?: AnimatableValue) => void,\n  reduceMotion?: ReduceMotion\n): T;\n\nenum ReduceMotion {\n  System = 'system',\n  Always = 'always',\n  Never = 'never',\n}\n"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"animation"},(0,i.kt)("inlineCode",{parentName:"h4"},"animation")),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-object"},"animation object")," you want to repeat."),(0,i.kt)("h4",{id:"numberofreps-"},(0,i.kt)("inlineCode",{parentName:"h4"},"numberOfReps")," ",(0,i.kt)(A,{mdxType:"Optional"})),(0,i.kt)("p",null,"The number of times the animation is going to be repeated. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,i.kt)("p",null,"A non-positive value (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),") will cause the animation to repeat indefinitely until it is cancelled or torn down. For example, if the component unmounts or ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/cancelAnimation"},(0,i.kt)("inlineCode",{parentName:"a"},"cancelAnimation"))," was called."),(0,i.kt)("h4",{id:"reverse-"},(0,i.kt)("inlineCode",{parentName:"h4"},"reverse")," ",(0,i.kt)(A,{mdxType:"Optional"})),(0,i.kt)("p",null,"Whether the animation should run in reverse every other repetition. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"This option only supports ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-function"},"animation functions")," (eg. ",(0,i.kt)("a",{parentName:"p",href:"/docs/animations/withSpring"},(0,i.kt)("inlineCode",{parentName:"a"},"withSpring")),") and doesn't work with ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-modifier"},"animation modifiers")," (eg. ",(0,i.kt)("a",{parentName:"p",href:"/docs/animations/withSequence"},(0,i.kt)("inlineCode",{parentName:"a"},"withSequence")),")."),(0,i.kt)("h4",{id:"callback-"},(0,i.kt)("inlineCode",{parentName:"h4"},"callback")," ",(0,i.kt)(A,{mdxType:"Optional"})),(0,i.kt)("p",null,"A function called on animation complete. In case the animation is cancelled, the callback will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h4",{id:"reducemotion-"},(0,i.kt)("inlineCode",{parentName:"h4"},"reduceMotion")," ",(0,i.kt)(A,{mdxType:"Optional"})),(0,i.kt)("p",null,"A parameter that determines how the animation responds to the device's reduced motion accessibility setting."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"withRepeat")," returns an ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-object"},"animation object")," which holds the current state of the animation. It can be either assigned directly to a ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," or can be used as a value for a style object returned from ",(0,i.kt)("a",{parentName:"p",href:"docs/core/useAnimatedStyle"},"useAnimatedStyle"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(P,{src:w.Z,component:(0,i.kt)(k.Z,{mdxType:"SequenceWobble"}),mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The callback passed to the 4th argument is automatically ",(0,i.kt)("a",{parentName:"li",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," and ran on the ",(0,i.kt)("a",{parentName:"li",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),".")),(0,i.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,i.kt)("div",{className:"platform-compatibility"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"),(0,i.kt)("th",{parentName:"tr",align:null},"Web"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}I.isMDXComponent=!0},28709:(e,t,n)=>{n.d(t,{Z:()=>a});const a="import React from 'react';\nimport { View, Button, StyleSheet } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withTiming,\n  Easing,\n  useAnimatedStyle,\n  withRepeat,\n  withSequence,\n} from 'react-native-reanimated';\n\nconst ANGLE = 10;\nconst TIME = 100;\nconst EASING = Easing.elastic(1.5);\n\nexport default function App() {\n  const rotation = useSharedValue(0);\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [{ rotateZ: `${rotation.value}deg` }],\n  }));\n\n  const handlePress = () => {\n    // highlight-next-line\n    rotation.value = withSequence(\n      // deviate left to start from -ANGLE\n      withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),\n      // wobble between -ANGLE and ANGLE 7 times\n      withRepeat(\n        withTiming(ANGLE, {\n          duration: TIME,\n          easing: EASING,\n        }),\n        7,\n        true\n      ),\n      // go back to 0 at the end\n      withTiming(0, { duration: TIME / 2, easing: EASING })\n      // highlight-next-line\n    );\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n      <Button title=\"wobble\" onPress={handlePress} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginBottom: 30,\n  },\n});\n"},12448:(e,t,n)=>{n.d(t,{u:()=>r});var a=n(76933);function r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];let i;return e&&("string"==typeof e?i=e:n.unshift(e)),0===n.length?(console.warn("[Reanimated] No animation was provided for the sequence"),(0,a.oF)(0,(()=>({onStart:(e,t)=>e.current=t,onFrame:()=>!0,current:0,animationIndex:0,reduceMotion:(0,a.uh)(i)})))):(0,a.oF)(n[0],(()=>{const e=n.map((e=>{const t="function"==typeof e?e():e;return t.finished=!1,t}));function t(t){for(;t<e.length-1&&e[t].reduceMotion;)t++;return t}return{isHigherOrder:!0,onFrame:function(n,a){const r=e[n.animationIndex],i=r.onFrame(r,a);if(n.current=r.current,i){if(r.callback&&r.callback(!0),r.finished=!0,n.animationIndex=t(n.animationIndex+1),n.animationIndex<e.length){const t=e[n.animationIndex];return t.onStart(t,r.current,a,r),!1}return!0}return!1},onStart:function(n,a,r,i){e.forEach((e=>{void 0===e.reduceMotion&&(e.reduceMotion=n.reduceMotion)})),n.animationIndex=t(0),void 0===i&&(i=e[e.length-1]);const o=e[n.animationIndex];o.onStart(o,a,r,i)},animationIndex:0,current:e[0].current,callback:t=>{t||e.forEach((e=>{"function"!=typeof e.callback||e.finished||e.callback(t)}))},reduceMotion:(0,a.uh)(i)}}))}},14779:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),r=n(72862),i=n(83117),o=n(80102),l=n(16528),s=n(94119),c=n(67177),d=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function u(e,t){var n=e.activeOpacity,r=e.delayPressIn,u=e.delayPressOut,p=e.delayLongPress,f=e.disabled,h=e.focusable,b=e.onLongPress,y=e.onPress,g=e.onPressIn,v=e.onPressOut,k=e.rejectResponderTermination,w=e.style,x=(0,o.Z)(e,d),N=(0,a.useRef)(null),S=(0,l.Z)(t,N),E=(0,a.useState)("0s"),O=E[0],R=E[1],P=(0,a.useState)(null),A=P[0],C=P[1],T=(0,a.useCallback)(((e,t)=>{C(e),R(t?t/1e3+"s":"0s")}),[C,R]),I=(0,a.useCallback)((e=>{T(null!=n?n:.2,e)}),[n,T]),j=(0,a.useCallback)((e=>{T(null,e)}),[T]),D=(0,a.useMemo)((()=>({cancelable:!k,disabled:f,delayLongPress:p,delayPressStart:r,delayPressEnd:u,onLongPress:b,onPress:y,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;I(t?0:150),null!=g&&g(e)},onPressEnd(e){j(250),null!=v&&v(e)}})),[p,r,u,f,b,y,g,v,k,I,j]),_=(0,s.Z)(N,D);return a.createElement(c.Z,(0,i.Z)({},x,_,{accessibilityDisabled:f,focusable:!f&&!1!==h,pointerEvents:f?"none":void 0,ref:S,style:[m.root,!f&&m.actionable,w,null!=A&&{opacity:A},{transitionDuration:O}]}))}var m=r.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=a.memo(a.forwardRef(u));p.displayName="TouchableOpacity";const f=p;var h=n(24404),b=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,r=e.color,i=e.disabled,o=e.onPress,l=e.testID,s=e.title;return a.createElement(f,{accessibilityLabel:n,accessibilityRole:"button",disabled:i,focusable:!i,onPress:o,ref:t,style:[y.button,r&&{backgroundColor:r},i&&y.buttonDisabled],testID:l},a.createElement(h.Z,{style:[y.text,i&&y.textDisabled]},s))}));b.displayName="Button";var y=r.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const g=b}}]);