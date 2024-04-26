"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>_,default:()=>X,frontMatter:()=>T,metadata:()=>O,toc:()=>j});var r=n(87462),o=n(67294),a=n(3905),i=n(67177),l=n(28033),s=n(10758),p=n(35842),u=n(74306),d=n(347),c=n(6328),m=n(49638);const f={code:"function anonymous(){const{interpolate,offset}=this.__closure;return{opacity:interpolate(offset.value,[-200,200],[1,0]),transform:[{translateX:offset.value}]};}"};function h(){const e=(0,s.y)(200),t=(0,p.l)(function(){const t=()=>({opacity:(0,u.sX)(e.value,[-200,200],[1,0]),transform:[{translateX:e.value}]});return t.__closure={interpolate:u.sX,offset:e},t.__workletHash=8810153802155,t.__initData=f,t}());return o.useEffect((()=>{e.value=(0,d.D)((0,c.j)(-e.value,{duration:1500}),-1,!0)}),[]),o.createElement(i.Z,{style:g.container},o.createElement(m.n,{style:[g.box,t]}))}const g=l.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20}}),y="import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n  withRepeat,\n  interpolate,\n} from 'react-native-reanimated';\n\nexport default function App() {\n  const offset = useSharedValue<number>(200);\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    // highlight-next-line\n    opacity: interpolate(offset.value, [-200, 200], [1, 0]),\n    transform: [{ translateX: offset.value }],\n  }));\n\n  React.useEffect(() => {\n    offset.value = withRepeat(\n      withTiming(-offset.value, { duration: 1500 }),\n      -1,\n      true\n    );\n  }, []);\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyles]} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n  },\n});\n";var v=n(44996),x=n(68413),b=n(24404);function S(){const e=(0,s.y)(0);return o.createElement(x.cS,{style:E.container},o.createElement(i.Z,{style:E.wrapper},o.createElement(w,{offset:e,extrapolation:u.z2.EXTEND}),o.createElement(w,{offset:e,extrapolation:u.z2.CLAMP}),o.createElement(w,{offset:e,extrapolation:u.z2.IDENTITY})))}const k={code:"function anonymous(event){const{offset}=this.__closure;offset.value=event.translationX;}"},C={code:"function anonymous(){const{offset,withTiming}=this.__closure;offset.value=withTiming(0);}"},R={code:"function anonymous(){const{offset,interpolate,extrapolation}=this.__closure;return{transform:[{translateX:offset.value},{rotate:interpolate(offset.value,[-100,0,100],[-360,0,360],extrapolation)+'deg'}]};}"};function w(e){let{offset:t,extrapolation:n}=e;const r=x.oF.Pan().onChange(function(){const e=function(e){t.value=e.translationX};return e.__closure={offset:t},e.__workletHash=5437248460915,e.__initData=k,e}()).onFinalize(function(){const e=function(){t.value=(0,c.j)(0)};return e.__closure={offset:t,withTiming:c.j},e.__workletHash=4770049740371,e.__initData=C,e}()),a=(0,p.l)(function(){const e=()=>({transform:[{translateX:t.value},{rotate:(0,u.sX)(t.value,[-100,0,100],[-360,0,360],n)+"deg"}]});return e.__closure={offset:t,interpolate:u.sX,extrapolation:n},e.__workletHash=6175869681676,e.__initData=R,e}());return o.createElement(x.Le,{gesture:r},o.createElement(m.n,{style:[E.box,a]},o.createElement(b.Z,{style:E.text},n.toUpperCase())))}const E=l.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},wrapper:{flex:1,alignItems:"center",justifyContent:"center",height:"100%",width:200,borderLeftColor:"#b58df1",borderLeftWidth:1,borderRightColor:"#b58df1",borderRightWidth:1,borderStyle:"dashed"},box:{height:80,width:80,margin:20,borderWidth:1,borderColor:"#b58df1",borderRadius:20,alignItems:"center",justifyContent:"center",cursor:"grab"},text:{color:"#b58df1",textTransform:"uppercase",fontWeight:"bold"}}),N="import 'react-native-gesture-handler';\nimport React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useSharedValue,\n  withTiming,\n  interpolate,\n  Extrapolation,\n} from 'react-native-reanimated';\nimport {\n  Gesture,\n  GestureDetector,\n  GestureHandlerRootView,\n} from 'react-native-gesture-handler';\nimport type { SharedValue } from 'react-native-reanimated';\n\nexport default function App() {\n  const offset = useSharedValue<number>(0);\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <View style={styles.wrapper}>\n        <Box offset={offset} extrapolation={Extrapolation.EXTEND} />\n        <Box offset={offset} extrapolation={Extrapolation.CLAMP} />\n        <Box offset={offset} extrapolation={Extrapolation.IDENTITY} />\n      </View>\n    </GestureHandlerRootView>\n  );\n}\n\ninterface BoxProps {\n  offset: SharedValue<number>;\n  extrapolation: Extrapolation;\n}\n\nfunction Box({ offset, extrapolation }: BoxProps) {\n  const pan = Gesture.Pan()\n    .onChange((event) => {\n      offset.value = event.translationX;\n    })\n    .onFinalize(() => {\n      offset.value = withTiming(0);\n    });\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [\n      { translateX: offset.value },\n      {\n        // highlight-start\n        rotate:\n          interpolate(\n            offset.value,\n            [-100, 0, 100],\n            [-360, 0, 360],\n            extrapolation\n          ) + 'deg',\n        // highlight-end\n      },\n    ],\n  }));\n\n  return (\n    <GestureDetector gesture={pan}>\n      <Animated.View style={[styles.box, animatedStyles]}>\n        <Text style={styles.text}>{extrapolation.toUpperCase()}</Text>\n      </Animated.View>\n    </GestureDetector>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  wrapper: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n    width: 200,\n    borderLeftColor: '#b58df1',\n    borderLeftWidth: 1,\n    borderRightColor: '#b58df1',\n    borderRightWidth: 1,\n    borderStyle: 'dashed',\n  },\n  box: {\n    height: 80,\n    width: 80,\n    margin: 20,\n    borderWidth: 1,\n    borderColor: '#b58df1',\n    borderRadius: 20,\n    alignItems: 'center',\n    justifyContent: 'center',\n    cursor: 'grab',\n  },\n  text: {\n    color: '#b58df1',\n    textTransform: 'uppercase',\n    fontWeight: 'bold',\n  },\n});\n",T={sidebar_position:1},_="interpolate",O={unversionedId:"utilities/interpolate",id:"utilities/interpolate",title:"interpolate",description:"interpolate lets you map a value from one range to another using linear interpolation.",source:"@site/docs/utilities/interpolate.mdx",sourceDirName:"utilities",slug:"/utilities/interpolate",permalink:"/react-native-reanimated/docs/utilities/interpolate",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/utilities/interpolate.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Utilities",permalink:"/react-native-reanimated/docs/category/utilities"},next:{title:"clamp",permalink:"/react-native-reanimated/docs/utilities/clamp"}},A={},j=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>value</code>",id:"value",level:4},{value:"<code>input</code>",id:"input",level:4},{value:"<code>output</code>",id:"output",level:4},{value:"<code>extrapolate</code> <Optional/>",id:"extrapolate-",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],P=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},D=P("InteractiveExample"),I=P("Optional"),L={toc:j},M="wrapper";function X(e){let{components:t,...n}=e;return(0,a.kt)(M,(0,r.Z)({},L,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interpolate"},"interpolate"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"interpolate")," lets you map a value from one range to another using linear interpolation."),(0,a.kt)(D,{src:y,component:(0,a.kt)(h,{mdxType:"Interpolate"}),mdxType:"InteractiveExample"}),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { interpolate } from 'react-native-reanimated';\n\nfunction App() {\n  const animatedStyle = useAnimatedStyle(() => ({\n    // highlight-next-line\n    opacity: interpolate(sv.value, [0, 100], [0, 1], Extrapolation.CLAMP),\n  }));\n}\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Type definitions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Extrapolation {\n  IDENTITY = 'identity',\n  CLAMP = 'clamp',\n  EXTEND = 'extend',\n}\n\ntype ExtrapolationAsString = 'identity' | 'clamp' | 'extend';\n\nexport type ExtrapolationType =\n  | ExtrapolationConfig\n  | Extrapolation\n  | ExtrapolationAsString\n  | undefined;\n\nfunction interpolate(\n  value: number,\n  input: readonly number[],\n  output: readonly number[],\n  extrapolate?: ExtrapolationType\n): number;\n"))),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"value"},(0,a.kt)("inlineCode",{parentName:"h4"},"value")),(0,a.kt)("p",null,"A number from the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," range that is going to be mapped to the ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," range."),(0,a.kt)("h4",{id:"input"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")),(0,a.kt)("p",null,"An array of numbers specifying the input range of the interpolation."),(0,a.kt)("h4",{id:"output"},(0,a.kt)("inlineCode",{parentName:"h4"},"output")),(0,a.kt)("p",null,"An array of numbers specifying the output range of the interpolation. It should have at least the same number of points as the input range."),(0,a.kt)("h4",{id:"extrapolate-"},(0,a.kt)("inlineCode",{parentName:"h4"},"extrapolate")," ",(0,a.kt)(I,{mdxType:"Optional"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"extrapolate")," parameter determines what happens when the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," goes beyond the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," range. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"Extrapolation.EXTEND"),"."),(0,a.kt)("p",null,"Available types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extrapolation.EXTEND")," - predicts the values beyond the output range."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extrapolation.CLAMP")," - clamps the value to the edge of the output range."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Extrapolation.IDENTITY")," - returns the provided value as is.")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center",textAlign:"center"}},(0,a.kt)("div",{style:{maxWidth:320}},(0,a.kt)("img",{src:(0,v.Z)("/img/extrapolation/extend.png")}),(0,a.kt)("p",null,"EXTEND")),(0,a.kt)("div",{style:{maxWidth:320}},(0,a.kt)("img",{src:(0,v.Z)("/img/extrapolation/clamp.png")}),(0,a.kt)("p",null,"CLAMP")),(0,a.kt)("div",{style:{maxWidth:320}},(0,a.kt)("img",{src:(0,v.Z)("/img/extrapolation/identity.png")}),(0,a.kt)("p",null,"IDENTITY"))),(0,a.kt)("p",null,"This parameter also accepts string values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"extend"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"clamp"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"identity"'))),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"extrapolate")," parameter applies the value passed to both edges of the range. To specify extrapolation to a particular edge, you can pass an object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const opacity = interpolate(\n  sv.value,\n  [0, 100],\n  [0, 1],\n  // highlight-next-line\n  { extrapolateLeft: Extrapolation.CLAMP }\n);\n")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"interpolate")," returns a mapped value within the output range."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(D,{src:N,component:(0,a.kt)(S,{mdxType:"InterpolateRotation"}),label:"Grab and drag any of the squares. The dashed lines indicate the range of the interpolation.",mdxType:"InteractiveExample"}),(0,a.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,a.kt)("div",{className:"platform-compatibility"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Android"),(0,a.kt)("th",{parentName:"tr",align:null},"iOS"),(0,a.kt)("th",{parentName:"tr",align:null},"Web"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}X.isMDXComponent=!0},24404:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(61328),o=n(63366),a=n(67294),i=n(37353),l=n(13250),s=n(45819),p=n(30042),u=n(16528),d=n(60091),c=n(72359),m=n(28033),f=n(84370),h=n(72931),g=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],y=Object.assign({},l.lG,l.LO,l._T,l.YB,l.Uy,l.hJ,l.E5,l.vr,{href:!0,lang:!0,pointerEvents:!0}),v=a.forwardRef(((e,t)=>{var n=e.hrefAttrs,r=e.numberOfLines,l=e.onClick,m=e.onLayout,v=e.onPress,x=e.onMoveShouldSetResponder,S=e.onMoveShouldSetResponderCapture,k=e.onResponderEnd,C=e.onResponderGrant,R=e.onResponderMove,w=e.onResponderReject,E=e.onResponderRelease,N=e.onResponderStart,T=e.onResponderTerminate,_=e.onResponderTerminationRequest,O=e.onScrollShouldSetResponder,A=e.onScrollShouldSetResponderCapture,j=e.onSelectionChangeShouldSetResponder,P=e.onSelectionChangeShouldSetResponderCapture,D=e.onStartShouldSetResponder,I=e.onStartShouldSetResponderCapture,L=e.selectable,M=(0,o.Z)(e,g),X=a.useContext(f.Z),Z=a.useRef(null),V=(0,h.PE)().direction;(0,p.Z)(Z,m),(0,c.Z)(Z,{onMoveShouldSetResponder:x,onMoveShouldSetResponderCapture:S,onResponderEnd:k,onResponderGrant:C,onResponderMove:R,onResponderReject:w,onResponderRelease:E,onResponderStart:N,onResponderTerminate:T,onResponderTerminationRequest:_,onScrollShouldSetResponder:O,onScrollShouldSetResponderCapture:A,onSelectionChangeShouldSetResponder:j,onSelectionChangeShouldSetResponderCapture:P,onStartShouldSetResponder:D,onStartShouldSetResponderCapture:I});var W=a.useCallback((e=>{null!=l?l(e):null!=v&&(e.stopPropagation(),v(e))}),[l,v]),G=X?"span":"div",B=null!=e.lang?(0,h.w1)(e.lang):null,H=e.dir||B,z=H||V,Y=(e=>(0,s.Z)(e,y))(M);if(Y.dir=H,X||(Y.dir=null!=H?H:"auto"),(l||v)&&(Y.onClick=W),Y.style=[null!=r&&r>1&&{WebkitLineClamp:r},!0===X?b.textHasAncestor$raw:b.text$raw,1===r&&b.textOneLine,null!=r&&r>1&&b.textMultiLine,e.style,!0===L&&b.selectable,!1===L&&b.notSelectable,v&&b.pressable],null!=e.href&&(G="a",null!=n)){var U=n.download,q=n.rel,F=n.target;null!=U&&(Y.download=U),null!=q&&(Y.rel=q),"string"==typeof F&&(Y.target="_"!==F.charAt(0)?"_"+F:F)}var $=(0,d.Z)(Y),J=(0,u.Z)(Z,$,t);Y.ref=J;var K=(0,i.Z)(G,Y,{writingDirection:z});return X?K:a.createElement(f.Z.Provider,{value:!0},K)}));v.displayName="Text";var x={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,textAlign:"inherit",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},b=m.Z.create({text$raw:x,textHasAncestor$raw:(0,r.Z)((0,r.Z)({},x),{},{color:"inherit",font:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const S=v}}]);