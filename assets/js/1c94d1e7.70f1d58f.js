"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[5793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,h=m["".concat(s,".").concat(f)]||m[f]||d[f]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>U,default:()=>G,frontMatter:()=>Y,metadata:()=>V,toc:()=>X});var a=n(87462),r=n(67294),i=n(3905),o=n(67177),l=n(28033),s=n(10758),c=n(17020),u=n(35842),m=n(49638);const d={code:"function anonymous(frameInfo){const{t}=this.__closure;t.value=frameInfo.timeSinceFirstFrame/350;}"},f={code:"function anonymous(){const{t,width}=this.__closure;const scale=2/(3-Math.cos(2*t.value));return{transform:[{translateX:scale*Math.cos(t.value)*Math.min(width/2-120,200)},{translateY:scale*(Math.sin(2*t.value)/2)*200}]};}"};function h(e){let{width:t}=e;const n=(0,s.y)(0);(0,c.N)(function(){const e=function(e){n.value=e.timeSinceFirstFrame/350};return e.__closure={t:n},e.__workletHash=0xda127f42ef9,e.__initData=d,e}());const a=(0,u.l)(function(){const e=function(){const e=2/(3-Math.cos(2*n.value));return{transform:[{translateX:e*Math.cos(n.value)*Math.min(t/2-120,200)},{translateY:e*(Math.sin(2*n.value)/2)*200}]}};return e.__closure={t:n,width:t},e.__workletHash=0xdeef9b51b5a,e.__initData=f,e}());return r.createElement(o.Z,{style:b.container},r.createElement(m.n,{style:[b.dot,a]}))}const b=l.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:150},dot:{width:60,height:60,borderRadius:30,backgroundColor:"#b58df1",position:"absolute"}}),v="import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useFrameCallback,\n  useSharedValue,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\ninterface AppProps {\n  width: number;\n}\n\nexport default function App({ width }: AppProps) {\n  const t = useSharedValue<number>(0);\n\n  // highlight-start\n  useFrameCallback((frameInfo) => {\n    t.value = frameInfo.timeSinceFirstFrame / 350;\n  });\n  // highlight-end\n\n  const infinityStyle = useAnimatedStyle(() => {\n    const scale = 2 / (3 - Math.cos(2 * t.value));\n    return {\n      transform: [\n        {\n          translateX:\n            scale * Math.cos(t.value) * Math.min(width / 2 - 120, 200),\n        },\n        { translateY: scale * (Math.sin(2 * t.value) / 2) * 200 },\n      ],\n    };\n  });\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.dot, infinityStyle]} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: 150,\n  },\n  dot: {\n    width: 60,\n    height: 60,\n    borderRadius: 30,\n    backgroundColor: '#b58df1',\n    position: 'absolute',\n  },\n});\n";var p=n(12448),y=n(6328),g=n(87827),k=n(68171),C=n(70399),E=n(24404);const F=.6,_=5e-5,A=40,w=1e3,T={height:85,width:82,x:0,y:A},S={height:85,width:82,x:0,y:A},x={code:"function anonymous(frameInfo){const{DEFAULT_HORSE,horseY,DEFAULT_OBSTACLE,obstacleX,isColliding,gameOver,vx,width,VELOCITY_INCREMENT}=this.__closure;const{timeSincePreviousFrame:dt}=frameInfo;if(dt==null){return;}const horse={...DEFAULT_HORSE,y:horseY.value};const obstacle={...DEFAULT_OBSTACLE,x:obstacleX.value};if(isColliding(horse,obstacle)||gameOver.value){gameOver.value=true;return;}obstacleX.value=obstacleX.value>-100?obstacleX.value-vx.value*dt:width.value;vx.value+=VELOCITY_INCREMENT;}"},O={code:"function anonymous(){const{obstacleX,DEFAULT_OBSTACLE}=this.__closure;return{transform:[{translateX:obstacleX.value},{translateY:DEFAULT_OBSTACLE.y}]};}"},j={code:"function anonymous(){const{DEFAULT_HORSE,horseY}=this.__closure;return{transform:[{translateX:DEFAULT_HORSE.x},{translateY:horseY.value},{rotateY:'180deg'}]};}"},I={code:"function anonymous(){const{gameOver}=this.__closure;return{transform:[{translateY:gameOver.value===true?0:-1000}]};}"};function R(){const e=(0,s.y)(F),t=(0,s.y)(0),n=(0,s.y)(w),a=(0,s.y)(A),i=(0,s.y)(!1);(0,c.N)(function(){const r=function(r){const{timeSincePreviousFrame:o}=r;if(null==o)return;const l={...S,y:a.value},s={...T,x:n.value};N(l,s)||i.value?i.value=!0:(n.value=n.value>-100?n.value-e.value*o:t.value,e.value+=_)};return r.__closure={DEFAULT_HORSE:S,horseY:a,DEFAULT_OBSTACLE:T,obstacleX:n,isColliding:N,gameOver:i,vx:e,width:t,VELOCITY_INCREMENT:_},r.__workletHash=1605437373042,r.__initData=x,r}());const l=(0,u.l)(function(){const e=()=>({transform:[{translateX:n.value},{translateY:T.y}]});return e.__closure={obstacleX:n,DEFAULT_OBSTACLE:T},e.__workletHash=9093535215385,e.__initData=O,e}()),d=(0,u.l)(function(){const e=()=>({transform:[{translateX:S.x},{translateY:a.value},{rotateY:"180deg"}]});return e.__closure={DEFAULT_HORSE:S,horseY:a},e.__workletHash=3538270412631,e.__initData=j,e}()),f=(0,u.l)(function(){const e=()=>({transform:[{translateY:!0===i.value?0:-1e3}]});return e.__closure={gameOver:i},e.__workletHash=5862240301278,e.__initData=I,e}()),h=()=>{a.value===A&&(a.value=(0,p.u)((0,y.j)(A-120,{easing:g.o.bezier(.3,.11,.15,.97)}),(0,y.j)(A,{easing:g.o.poly(4)})))},b=()=>{i.value=!1,n.value=w,a.value=A,e.value=F};return r.createElement(r.Fragment,null,r.createElement(C.Z,{style:D.container,onLayout:e=>{t.value=e.nativeEvent.layout.width},onPressIn:()=>{i.value?b():h()}},r.createElement(m.n,{style:[D.overlay,f]},r.createElement(E.Z,{style:D.text},"Game Over")),r.createElement(k.V,{style:[D.obstacle,l]},"\ud83c\udf35"),r.createElement(k.V,{style:[D.horse,d]},"\ud83d\udc0e"),r.createElement(o.Z,{style:D.ground})))}const D=l.Z.create({container:{flex:1,height:200},horse:{position:"absolute",fontSize:80},ground:{position:"absolute",right:0,bottom:70,width:"100%",height:2,backgroundColor:"#000"},obstacle:{position:"absolute",fontSize:80},text:{fontSize:40,color:"white",backgroundColor:"rgba(0,0,0,0.5)",paddingHorizontal:8},overlay:{justifyContent:"center",alignItems:"center",position:"absolute",width:"100%",zIndex:1}}),L={code:"function isColliding(obj1,obj2){return obj1.x<obj2.x+obj2.width&&obj1.x+obj1.width>obj2.x&&obj1.y<obj2.y+obj2.height&&obj1.y+obj1.height>obj2.y;}"},N=function(){const e=function(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y};return e.__closure={},e.__workletHash=3023621340167,e.__initData=L,e}(),M="import Animated, {\n  useSharedValue,\n  useFrameCallback,\n  useAnimatedStyle,\n  withSequence,\n  withTiming,\n  Easing,\n  FrameInfo,\n} from 'react-native-reanimated';\nimport {\n  View,\n  StyleSheet,\n  Pressable,\n  Text,\n  LayoutChangeEvent,\n} from 'react-native';\nimport React from 'react';\n\ninterface CollisionObject {\n  height: number;\n  width: number;\n  x: number;\n  y: number;\n}\n\nconst HEIGHT = 200;\nconst DEFAULT_VELOCITY = 0.6;\nconst VELOCITY_INCREMENT = 0.00005;\nconst GROUND_LEVEL = 80;\nconst DEFAULT_Y = HEIGHT - GROUND_LEVEL - 80;\nconst DEFAULT_X = 1000;\n\nconst DEFAULT_OBSTACLE = {\n  height: 85,\n  width: 82,\n  x: 0,\n  y: DEFAULT_Y,\n};\nconst DEFAULT_HORSE = {\n  height: 85,\n  width: 82,\n  x: 0,\n  y: DEFAULT_Y,\n};\n\nexport default function FrameCallbackDino() {\n  const vx = useSharedValue<number>(DEFAULT_VELOCITY);\n  const width = useSharedValue<number>(0);\n\n  const obstacleX = useSharedValue<number>(DEFAULT_X);\n  const horseY = useSharedValue<number>(DEFAULT_Y);\n\n  const gameOver = useSharedValue<boolean>(false);\n\n  const getDimensions = (event: LayoutChangeEvent) => {\n    width.value = event.nativeEvent.layout.width;\n  };\n\n  // highlight-next-line\n  useFrameCallback((frameInfo: FrameInfo) => {\n    const { timeSincePreviousFrame: dt } = frameInfo;\n    if (dt == null) {\n      return;\n    }\n\n    const horse: CollisionObject = { ...DEFAULT_HORSE, y: horseY.value };\n    const obstacle: CollisionObject = {\n      ...DEFAULT_OBSTACLE,\n      x: obstacleX.value,\n    };\n\n    if (isColliding(horse, obstacle) || gameOver.value) {\n      gameOver.value = true;\n      return;\n    }\n\n    obstacleX.value =\n      obstacleX.value > -100 ? obstacleX.value - vx.value * dt : width.value;\n\n    vx.value += VELOCITY_INCREMENT;\n    // highlight-next-line\n  });\n\n  const obstacleStyles = useAnimatedStyle(() => ({\n    transform: [\n      { translateX: obstacleX.value },\n      { translateY: DEFAULT_OBSTACLE.y },\n    ],\n  }));\n\n  const horseStyles = useAnimatedStyle(() => ({\n    transform: [\n      { translateX: DEFAULT_HORSE.x },\n      { translateY: horseY.value },\n      { rotateY: '180deg' },\n    ],\n  }));\n\n  const overlayStyles = useAnimatedStyle(() => ({\n    transform: [{ translateY: gameOver.value === true ? 0 : -1000 }],\n  }));\n\n  const handleTap = () => {\n    if (gameOver.value) {\n      handleRestart();\n    } else {\n      handleJump();\n    }\n  };\n\n  const handleJump = () => {\n    if (horseY.value === DEFAULT_Y) {\n      horseY.value = withSequence(\n        withTiming(DEFAULT_Y - 120, {\n          easing: Easing.bezier(0.3, 0.11, 0.15, 0.97),\n        }),\n        withTiming(DEFAULT_Y, { easing: Easing.poly(4) })\n      );\n    }\n  };\n\n  const handleRestart = () => {\n    gameOver.value = false;\n    obstacleX.value = DEFAULT_X;\n    horseY.value = DEFAULT_Y;\n    vx.value = DEFAULT_VELOCITY;\n  };\n\n  return (\n    <>\n      <Pressable\n        style={styles.container}\n        onLayout={getDimensions}\n        onPressIn={handleTap}>\n        <Animated.View style={[styles.overlay, overlayStyles]}>\n          <Text style={styles.text}>Game Over</Text>\n        </Animated.View>\n        <Animated.Text style={[styles.obstacle, obstacleStyles]}>\n          \ud83c\udf35\n        </Animated.Text>\n        <Animated.Text style={[styles.horse, horseStyles]}>\ud83d\udc0e</Animated.Text>\n        <View style={styles.ground} />\n      </Pressable>\n    </>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    height: 200,\n  },\n  horse: {\n    position: 'absolute',\n    fontSize: 80,\n  },\n  ground: {\n    position: 'absolute',\n    right: 0,\n    bottom: GROUND_LEVEL - 10,\n    width: '100%',\n    height: 2,\n    backgroundColor: '#000',\n  },\n  obstacle: {\n    position: 'absolute',\n    fontSize: 80,\n  },\n  text: {\n    fontSize: 40,\n    color: 'white',\n    backgroundColor: 'rgba(0,0,0,0.5)',\n    paddingHorizontal: 8,\n  },\n  overlay: {\n    justifyContent: 'center',\n    alignItems: 'center',\n    position: 'absolute',\n    width: '100%',\n    zIndex: 1,\n  },\n});\n\nfunction isColliding(obj1: CollisionObject, obj2: CollisionObject) {\n  'worklet';\n  return (\n    obj1.x < obj2.x + obj2.width &&\n    obj1.x + obj1.width > obj2.x &&\n    obj1.y < obj2.y + obj2.height &&\n    obj1.y + obj1.height > obj2.y\n  );\n}\n",Y={sidebar_position:3},U="useFrameCallback",V={unversionedId:"advanced/useFrameCallback",id:"advanced/useFrameCallback",title:"useFrameCallback",description:"useFrameCallback lets you run a function on every frame update.",source:"@site/docs/advanced/useFrameCallback.mdx",sourceDirName:"advanced",slug:"/advanced/useFrameCallback",permalink:"/react-native-reanimated/docs/advanced/useFrameCallback",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/advanced/useFrameCallback.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useAnimatedReaction",permalink:"/react-native-reanimated/docs/advanced/useAnimatedReaction"},next:{title:"useEvent",permalink:"/react-native-reanimated/docs/advanced/useEvent"}},P={},X=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>callback</code>",id:"callback",level:4},{value:"<code>autostart</code> <Optional />",id:"autostart-",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],H=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},z=H("InteractiveExample"),Z=H("Optional"),q={toc:X},B="wrapper";function G(e){let{components:t,...n}=e;return(0,i.kt)(B,(0,a.Z)({},q,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"useframecallback"},"useFrameCallback"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useFrameCallback")," lets you run a function on every frame update."),(0,i.kt)(z,{src:v,component:h,mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useFrameCallback } from 'react-native-reanimated';\n\nfunction App() {\n  const frameCallback = useFrameCallback((frameInfo) => {\n    // Increment a value on every frame update\n    sv.value += 1;\n  });\n\n  return (\n    <Button\n      title=\"Start/Stop\"\n      onPress={() => frameCallback.setActive(!frameCallback.isActive)}\n    />\n  );\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type FrameInfo = {\n  timestamp: number;\n  timeSincePreviousFrame: number | null;\n  timeSinceFirstFrame: number;\n};\n\ntype FrameCallback = {\n  setActive: (isActive: boolean) => void;\n  isActive: boolean;\n  callbackId: number;\n};\n\nfunction useFrameCallback(\n  callback: (frameInfo: FrameInfo) => void,\n  autostart = true\n): FrameCallback;\n"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"callback"},(0,i.kt)("inlineCode",{parentName:"h4"},"callback")),(0,i.kt)("p",null,"A function executed on every frame update. This function receives a ",(0,i.kt)("inlineCode",{parentName:"p"},"frameInfo")," object containing the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," a number indicating the system time (in milliseconds) when the last frame was rendered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeSincePreviousFrame")," a number indicating the time (in milliseconds) since last frame. This value will be null on the first frame after activation. Starting from the second frame, it should be ~16 ms on 60 Hz, and ~8 ms on 120 Hz displays (provided there are no frame dropped)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeSinceFirstFrame")," a number indicating the time (in milliseconds) since the callback was activated.")),(0,i.kt)("h4",{id:"autostart-"},(0,i.kt)("inlineCode",{parentName:"h4"},"autostart")," ",(0,i.kt)(Z,{mdxType:"Optional"})),(0,i.kt)("p",null,"Whether the callback should start automatically. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useFrameCallback")," returns an object containing these fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setActive")," a function that lets you start the frame callback or stop it from running"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isActive")," a boolean indicating whether a callback is running"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"callbackId")," a number indicating a unique identifier of the frame callback")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(z,{src:M,component:R,label:"Tap to jump",mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A function passed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"callback")," argument is automatically ",(0,i.kt)("a",{parentName:"li",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," and ran on the ",(0,i.kt)("a",{parentName:"li",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),".")),(0,i.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,i.kt)("div",{className:"platform-compatibility"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"),(0,i.kt)("th",{parentName:"tr",align:null},"Web"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}G.isMDXComponent=!0},87827:(e,t,n)=>{n.d(t,{o:()=>b});const a=4,r=.001,i=1e-7,o=10,l=11,s=1/(l-1);function c(e,t){return 1-3*t+3*e}function u(e,t){return 3*t-6*e}function m(e){return 3*e}function d(e,t,n){return((c(t,n)*e+u(t,n))*e+m(t))*e}function f(e,t,n){return 3*c(t,n)*e*e+2*u(t,n)*e+m(t)}function h(e,t,n,c){if(!(e>=0&&e<=1&&n>=0&&n<=1))throw new Error("[Reanimated] Bezier x values must be in [0, 1] range.");if(e===t&&n===c)return function(e){return e};const u=new Array(l);for(let a=0;a<l;++a)u[a]=d(a*s,e,n);function m(t){let c=0,m=1;const h=l-1;for(;m!==h&&u[m]<=t;++m)c+=s;--m;const b=c+(t-u[m])/(u[m+1]-u[m])*s,v=f(b,e,n);return v>=r?function(e,t,n,r){for(let i=0;i<a;++i){const a=f(t,n,r);if(0===a)return t;t-=(d(t,n,r)-e)/a}return t}(t,b,e,n):0===v?b:function(e,t,n,a,r){let l,s,c=0;do{s=t+(n-t)/2,l=d(s,a,r)-e,l>0?n=s:t=s}while(Math.abs(l)>i&&++c<o);return s}(t,c,c+s,e,n)}return function(a){return e===t&&n===c?a:0===a?0:1===a?1:d(m(a),t,c)}}const b={linear:function(e){return e},ease:function(e){return h(.42,0,1,1)(e)},quad:function(e){return e*e},cubic:function(e){return e*e*e},poly:function(e){return t=>Math.pow(t,e)},sin:function(e){return 1-Math.cos(e*Math.PI/2)},circle:function(e){return 1-Math.sqrt(1-e*e)},exp:function(e){return Math.pow(2,10*(e-1))},elastic:function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return t=>1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*e)},back:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return t=>t*t*((e+1)*t-e)},bounce:function(e){if(e<1/2.75)return 7.5625*e*e;if(e<2/2.75){const t=e-1.5/2.75;return 7.5625*t*t+.75}if(e<2.5/2.75){const t=e-2.25/2.75;return 7.5625*t*t+.9375}const t=e-2.625/2.75;return 7.5625*t*t+.984375},bezier:function(e,t,n,a){return{factory:()=>h(e,t,n,a)}},bezierFn:function(e,t,n,a){return h(e,t,n,a)},steps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n=>{const a=Math.min(Math.max(n,0),1)*e;return t?Math.ceil(a)/e:Math.floor(a)/e}},in:function(e){return e},out:function(e){return t=>1-e(1-t)},inOut:function(e){return t=>t<.5?e(2*t)/2:1-e(2*(1-t))/2}}},12448:(e,t,n)=>{n.d(t,{u:()=>r});var a=n(76933);function r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];let i;return e&&("string"==typeof e?i=e:n.unshift(e)),0===n.length?(console.warn("[Reanimated] No animation was provided for the sequence"),(0,a.oF)(0,(()=>({onStart:(e,t)=>e.current=t,onFrame:()=>!0,current:0,animationIndex:0,reduceMotion:(0,a.uh)(i)})))):(0,a.oF)(n[0],(()=>{const e=n.map((e=>{const t="function"==typeof e?e():e;return t.finished=!1,t}));function t(t){for(;t<e.length-1&&e[t].reduceMotion;)t++;return t}return{isHigherOrder:!0,onFrame:function(n,a){const r=e[n.animationIndex],i=r.onFrame(r,a);if(n.current=r.current,i){if(r.callback&&r.callback(!0),r.finished=!0,n.animationIndex=t(n.animationIndex+1),n.animationIndex<e.length){const t=e[n.animationIndex];return t.onStart(t,r.current,a,r),!1}return!0}return!1},onStart:function(n,a,r,i){e.forEach((e=>{void 0===e.reduceMotion&&(e.reduceMotion=n.reduceMotion)})),n.animationIndex=t(0),void 0===i&&(i=e[e.length-1]);const o=e[n.animationIndex];o.onStart(o,a,r,i)},animationIndex:0,current:e[0].current,callback:t=>{t||e.forEach((e=>{"function"!=typeof e.callback||e.finished||e.callback(t)}))},reduceMotion:(0,a.uh)(i)}}))}},6328:(e,t,n)=>{n.d(t,{j:()=>i});var a=n(87827),r=n(76933);const i=function(e,t,n){return(0,r.oF)(e,(()=>{const i={duration:300,easing:a.o.inOut(a.o.quad)};return t&&Object.keys(t).forEach((e=>i[e]=t[e])),{type:"timing",onFrame:function(e,t){const{toValue:n,startTime:a,startValue:r}=e,o=t-a;if(o>=i.duration)return e.startTime=0,e.current=n,!0;const l=e.easing(o/i.duration);return e.current=r+(n-r)*l,!1},onStart:function(t,n,a,r){r&&"timing"===r.type&&r.toValue===e&&r.startTime?(t.startTime=r.startTime,t.startValue=r.startValue):(t.startTime=a,t.startValue=n),t.current=n,"object"==typeof i.easing?t.easing=i.easing.factory():t.easing=i.easing},progress:0,toValue:e,startValue:0,startTime:0,easing:()=>0,current:e,callback:n,reduceMotion:(0,r.uh)(null==t?void 0:t.reduceMotion)}}))}},68171:(e,t,n)=>{n.d(t,{V:()=>r});var a=n(24404);const r=(0,n(99435).F)(a.Z)},49638:(e,t,n)=>{n.d(t,{n:()=>r});var a=n(67177);const r=(0,n(99435).F)(a.Z)},35842:(e,t,n)=>{n.d(t,{l:()=>v});var a=n(67294),r=n(86425),i=n(97604),o=n(49402),l=n(76933),s=n(10758),c=n(40093),u=n(41956),m=n(83442);const d=(0,m.Wr)();function f(e,t,n,a){if(Array.isArray(t)&&t.forEach(((t,r)=>{f(e,t,n&&n[r],a&&a[r])})),"object"==typeof t&&t.onFrame){const r=t;let i=r.current;null!=a&&("object"==typeof a?void 0!==a.value?i=a.value:void 0!==a.onFrame&&(void 0!==(null==n?void 0:n.current)?i=n.current:void 0!==(null==a?void 0:a.current)&&(i=a.current)):i=a),r.callStart=e=>{r.onStart(r,i,e,n)},r.callStart(e),r.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((r=>f(e,t[r],n&&n[r],a&&a[r])))}function h(e,t,n,a,r){if(!r.value)return!0;if(Array.isArray(e)){a[n]=[];let i=!0;return e.forEach(((e,o)=>{h(e,t,o,a[n],r)||(i=!1)})),i}if("object"==typeof e&&e.onFrame){let r=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),r=e.onFrame(e,t),e.timestamp=t,r&&(e.finished=!0,e.callback&&e.callback(!0))),a[n]=e.current,r}if("object"==typeof e){a[n]={};let i=!0;return Object.keys(e).forEach((o=>{h(e[o],t,o,a[n],r)||(i=!1)})),i}return a[n]=e,!0}function b(e,t){if(Array.isArray(e))for(const n of e)b(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))b(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function v(e,t,v){let p=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const y=(0,u.H)(),g=(0,a.useRef)();let k=Object.values(e.__closure??{});var C;d&&(!k.length&&null!==(C=t)&&void 0!==C&&C.length&&(k=t));const E=v?Array.isArray(v)?v:[v]:[],F=v?(0,c.Nq)(E):null,_=(0,s.y)(!0),A=(0,a.useRef)({});if(t?t.push(e.__workletHash):t=[...k,e.__workletHash],F&&t.push(F),!g.current){const t=(0,l.AX)(e);0,g.current={initial:{value:t,updater:e},remoteState:(0,r.Uv)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,u.G)()}}const{initial:w,remoteState:T,viewDescriptors:S}=g.current,x=S.shareableViewDescriptors;t.push(x),(0,a.useEffect)((()=>{let t,a=e;v&&(a=()=>{const t=e();return E.forEach((e=>{e(t)})),t}),t=(0,m.V5)()?()=>{!function(e,t,a,r,i,l,s){const u=a.animations??{},m=t()??{},d=a.last;let b,v=!1;Object.keys(u).forEach((e=>{const t=m[e];(0,c.mE)(t)||delete u[e]})),Object.keys(m).forEach((e=>{const t=m[e];(0,c.mE)(t)&&(b=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),f(b,t,u[e],d[e]),u[e]=t,v=!0)})),v?(a.animations=u,a.isAnimationRunning||(a.isAnimationCancelled=!1,a.isAnimationRunning=!0,function t(n){const{animations:c,last:u,isAnimationCancelled:m}=a;if(m)return void(a.isAnimationRunning=!1);const d={};let f=!0;Object.keys(c).forEach((e=>{h(c[e],n,e,d,i)?(u[e]=d[e],delete c[e]):f=!1})),Object.keys(d).length&&(0,o.R)(e,d,r,l,s),f?a.isAnimationRunning=!1:requestAnimationFrame(t)}(b))):(a.isAnimationCancelled=!0,a.animations=[]),a.last=m,(0,c.wU)(d,m)||(0,o.R)(e,m,r,l,s)}(x,e,T,y,_,A,E)}:()=>{!function(e,t,a,r,i){let l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const s=a.animations??{},u=t()??{},m=a.last,d={};let b,v=!1,p=!1;for(const o in u){const e=u[o];(0,c.mE)(e)?(b=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),f(b,e,s[o],m[o]),s[o]=e,v=!0):(p=!0,d[o]=e,delete s[o])}if(v){const t=n=>{const{animations:l,last:s,isAnimationCancelled:c}=a;if(c)return void(a.isAnimationRunning=!1);const u={};let m=!0;for(const e in l)h(l[e],n,e,u,i)?(s[e]=u[e],delete l[e]):m=!1;u&&(0,o.Z)(e,u,r),m?a.isAnimationRunning=!1:requestAnimationFrame(t)};a.animations=s,a.isAnimationRunning||(a.isAnimationCancelled=!1,a.isAnimationRunning=!0,t(b)),p&&(0,o.Z)(e,d,r)}else a.isAnimationCancelled=!0,a.animations=[],(0,c.wU)(m,u)||(0,o.Z)(e,u,r,l);a.last=u}(x,a,T,y,_,p)};const r=(0,i.R)(t,k);return()=>{(0,i.B)(r)}}),t),(0,a.useEffect)((()=>(_.value=!0,()=>{_.value=!1})),[_]),b(w.value);const O=(0,a.useRef)(null);return O.current||(O.current=(0,m.V5)()?{viewDescriptors:S,initial:w,viewsRef:y,jestAnimatedStyle:A}:{initial:w,viewsRef:y,viewDescriptors:S}),O.current}},17020:(e,t,n)=>{n.d(t,{N:()=>s});var a=n(67294),r=n(12717);const i=(0,r.Um)((()=>{const e={frameCallbackRegistry:new Map,activeFrameCallbacks:new Set,previousFrameTimestamp:null,nextCallId:0,runCallbacks(e){const t=n=>{if(e!==this.nextCallId)return;null===this.previousFrameTimestamp&&(this.previousFrameTimestamp=n);const a=n-this.previousFrameTimestamp;this.activeFrameCallbacks.forEach((e=>{const t=this.frameCallbackRegistry.get(e),{startTime:r}=t;null===r?(t.startTime=n,t.callback({timestamp:n,timeSincePreviousFrame:null,timeSinceFirstFrame:0})):t.callback({timestamp:n,timeSincePreviousFrame:a,timeSinceFirstFrame:n-r})})),this.activeFrameCallbacks.size>0?(this.previousFrameTimestamp=n,requestAnimationFrame(t)):this.previousFrameTimestamp=null};1===this.activeFrameCallbacks.size&&e===this.nextCallId&&requestAnimationFrame(t)},registerFrameCallback(e,t){this.frameCallbackRegistry.set(t,{callback:e,startTime:null})},unregisterFrameCallback(e){this.manageStateFrameCallback(e,!1),this.frameCallbackRegistry.delete(e)},manageStateFrameCallback(e,t){if(-1!==e)if(t)this.activeFrameCallbacks.add(e),this.runCallbacks(this.nextCallId);else{this.frameCallbackRegistry.get(e).startTime=null,this.activeFrameCallbacks.delete(e),0===this.activeFrameCallbacks.size&&(this.nextCallId+=1)}}};n.g._frameCallbackRegistry=e}));function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=new class{constructor(){o(this,"nextCallbackId",0),i()}registerFrameCallback(e){if(!e)return-1;const t=this.nextCallbackId;return this.nextCallbackId++,(0,r.m_)((()=>{n.g._frameCallbackRegistry.registerFrameCallback(e,t)}))(),t}unregisterFrameCallback(e){(0,r.m_)((()=>{n.g._frameCallbackRegistry.unregisterFrameCallback(e)}))()}manageStateFrameCallback(e,t){(0,r.m_)((()=>{n.g._frameCallbackRegistry.manageStateFrameCallback(e,t)}))()}};function s(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=(0,a.useRef)({setActive:e=>{l.manageStateFrameCallback(n.current.callbackId,e),n.current.isActive=e},isActive:t,callbackId:-1});return(0,a.useEffect)((()=>(n.current.callbackId=l.registerFrameCallback(e),n.current.setActive(n.current.isActive),()=>{l.unregisterFrameCallback(n.current.callbackId),n.current.callbackId=-1})),[e,t]),n.current}}}]);