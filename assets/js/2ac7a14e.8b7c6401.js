"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7261],{61487:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),s=n(67177),r=n(28033),i=n(10758),o=n(36617),l=n(35842),c=n(49638),u=n(68413);const d=120,h={code:"function anonymous(event){const{offset}=this.__closure;offset.value+=event.changeX;}"},p={code:"function anonymous(event){const{offset,withDecay,width,SIZE}=this.__closure;offset.value=withDecay({velocity:event.velocityX,rubberBandEffect:true,clamp:[-(width.value/2)+SIZE/2,width.value/2-SIZE/2]});}"},m={code:"function anonymous(){const{offset}=this.__closure;return{transform:[{translateX:offset.value}]};}"};function g(){const e=(0,i.y)(0),t=(0,i.y)(0),n=u.oF.Pan().onChange(function(){const t=function(t){e.value+=t.changeX};return t.__closure={offset:e},t.__workletHash=7961514168757,t.__initData=h,t}()).onFinalize(function(){const n=function(n){e.value=(0,o.$)({velocity:n.velocityX,rubberBandEffect:!0,clamp:[-t.value/2+d/2,t.value/2-d/2]})};return n.__closure={offset:e,withDecay:o.$,width:t,SIZE:d},n.__workletHash=0xd691977aa61,n.__initData=p,n}()),r=(0,l.l)(function(){const t=()=>({transform:[{translateX:e.value}]});return t.__closure={offset:e},t.__workletHash=0xf945d52c70d,t.__initData=m,t}());return a.createElement(u.cS,{style:f.container},a.createElement(s.Z,{onLayout:e=>{t.value=e.nativeEvent.layout.width},style:f.wrapper},a.createElement(u.Le,{gesture:n},a.createElement(c.n,{style:[f.box,r]}))))}const f=r.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},wrapper:{flex:1,width:"100%",alignItems:"center",justifyContent:"center"},box:{height:d,width:d,backgroundColor:"#b58df1",borderRadius:20,cursor:"grab",alignItems:"center",justifyContent:"center"}})},48026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>R,contentTitle:()=>E,default:()=>X,frontMatter:()=>T,metadata:()=>H,toc:()=>V});var a=n(87462),s=n(67294),r=n(3905),i=n(68413),o=n(67177),l=n(28033),c=n(10758),u=n(35842),d=n(6328),h=n(49638);const p={code:"function anonymous(){const{pressed}=this.__closure;pressed.value=true;}"},m={code:"function anonymous(){const{pressed}=this.__closure;pressed.value=false;}"},g={code:"function anonymous(){const{pressed,withTiming}=this.__closure;return{backgroundColor:pressed.value?'#FFE04B':'#B58DF1',transform:[{scale:withTiming(pressed.value?1.2:1)}]};}"};function f(){const e=(0,c.y)(!1),t=i.oF.Tap().onBegin(function(){const t=function(){e.value=!0};return t.__closure={pressed:e},t.__workletHash=9733417743160,t.__initData=p,t}()).onFinalize(function(){const t=function(){e.value=!1};return t.__closure={pressed:e},t.__workletHash=200209545011,t.__initData=m,t}()),n=(0,u.l)(function(){const t=()=>({backgroundColor:e.value?"#FFE04B":"#B58DF1",transform:[{scale:(0,d.j)(e.value?1.2:1)}]});return t.__closure={pressed:e,withTiming:d.j},t.__workletHash=1834590992963,t.__initData=g,t}());return s.createElement(i.cS,{style:w.container},s.createElement(o.Z,{style:w.container},s.createElement(i.Le,{gesture:t},s.createElement(h.n,{style:[w.circle,n]}))))}const w=l.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},circle:{height:120,width:120,borderRadius:500}}),y="import 'react-native-gesture-handler';\nimport React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useSharedValue,\n  withTiming,\n} from 'react-native-reanimated';\n// highlight-start\nimport {\n  Gesture,\n  GestureDetector,\n  GestureHandlerRootView,\n} from 'react-native-gesture-handler';\n// highlight-end\n\nexport default function App() {\n  const pressed = useSharedValue<boolean>(false);\n\n  const tap = Gesture.Tap()\n    .onBegin(() => {\n      pressed.value = true;\n    })\n    .onFinalize(() => {\n      pressed.value = false;\n    });\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    backgroundColor: pressed.value ? '#FFE04B' : '#B58DF1',\n    transform: [{ scale: withTiming(pressed.value ? 1.2 : 1) }],\n  }));\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <View style={styles.container}>\n        {/* highlight-next-line */}\n        <GestureDetector gesture={tap}>\n          <Animated.View style={[styles.circle, animatedStyles]} />\n          {/* highlight-next-line */}\n        </GestureDetector>\n      </View>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  circle: {\n    height: 120,\n    width: 120,\n    borderRadius: 500,\n  },\n});\n";var k=n(10919);const v={code:"function anonymous(){const{pressed}=this.__closure;pressed.value=true;}"},b={code:"function anonymous(event){const{offset}=this.__closure;offset.value=event.translationX;}"},C={code:"function anonymous(){const{offset,withSpring,pressed}=this.__closure;offset.value=withSpring(0);pressed.value=false;}"},_={code:"function anonymous(){const{offset,withTiming,pressed}=this.__closure;return{transform:[{translateX:offset.value},{scale:withTiming(pressed.value?1.2:1)}],backgroundColor:pressed.value?'#FFE04B':'#b58df1'};}"};function N(){const e=(0,c.y)(!1),t=(0,c.y)(0),n=i.oF.Pan().onBegin(function(){const t=function(){e.value=!0};return t.__closure={pressed:e},t.__workletHash=9733417743160,t.__initData=v,t}()).onChange(function(){const e=function(e){t.value=e.translationX};return e.__closure={offset:t},e.__workletHash=5437248460915,e.__initData=b,e}()).onFinalize(function(){const n=function(){t.value=(0,k.V)(0),e.value=!1};return n.__closure={offset:t,withSpring:k.V,pressed:e},n.__workletHash=3551330256065,n.__initData=C,n}()),a=(0,u.l)(function(){const n=()=>({transform:[{translateX:t.value},{scale:(0,d.j)(e.value?1.2:1)}],backgroundColor:e.value?"#FFE04B":"#b58df1"});return n.__closure={offset:t,withTiming:d.j,pressed:e},n.__workletHash=0xc0528674be4,n.__initData=_,n}());return s.createElement(i.cS,{style:S.container},s.createElement(o.Z,{style:S.container},s.createElement(i.Le,{gesture:n},s.createElement(h.n,{style:[S.circle,a]}))))}const S=l.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},circle:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:500,cursor:"grab"}}),x="import 'react-native-gesture-handler';\nimport React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useSharedValue,\n  withSpring,\n  withTiming,\n} from 'react-native-reanimated';\nimport {\n  Gesture,\n  GestureDetector,\n  GestureHandlerRootView,\n} from 'react-native-gesture-handler';\n\nexport default function App() {\n  const pressed = useSharedValue<boolean>(false);\n  // highlight-next-line\n\n  const offset = useSharedValue<number>(0);\n\n  const pan = Gesture.Pan()\n    .onBegin(() => {\n      pressed.value = true;\n    })\n    // highlight-start\n    .onChange((event) => {\n      offset.value = event.translationX;\n    })\n    // highlight-end\n    .onFinalize(() => {\n      // highlight-next-line\n      offset.value = withSpring(0);\n      pressed.value = false;\n    });\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [\n      // highlight-next-line\n      { translateX: offset.value },\n      { scale: withTiming(pressed.value ? 1.2 : 1) },\n    ],\n    backgroundColor: pressed.value ? '#FFE04B' : '#b58df1',\n  }));\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <View style={styles.container}>\n        <GestureDetector gesture={pan}>\n          <Animated.View style={[styles.circle, animatedStyles]} />\n        </GestureDetector>\n      </View>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  circle: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 500,\n    cursor: 'grab',\n  },\n});\n";var G=n(61487),D=n(52074);const T={sidebar_position:6},E="Handling gestures",H={unversionedId:"fundamentals/handling-gestures",id:"fundamentals/handling-gestures",title:"Handling gestures",description:"In this section, we'll learn how to handle gestures with Reanimated. To achieve this, Reanimated integrates tightly with React Native Gesture Handler, another library created by Software Mansion.",source:"@site/docs/fundamentals/handling-gestures.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/handling-gestures",permalink:"/react-native-reanimated/docs/fundamentals/handling-gestures",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/fundamentals/handling-gestures.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Applying modifiers",permalink:"/react-native-reanimated/docs/fundamentals/applying-modifiers"},next:{title:"Glossary of terms",permalink:"/react-native-reanimated/docs/fundamentals/glossary"}},R={},V=[{value:"Handling tap gestures",id:"handling-tap-gestures",level:2},{value:"Handling pan gestures",id:"handling-pan-gestures",level:2},{value:"Using <code>withDecay</code>",id:"using-withdecay",level:2},{value:"Summary",id:"summary",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],I=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},F=I("CollapsibleCode"),A=I("InteractiveExample"),j={toc:V},L="wrapper";function X(e){let{components:t,...n}=e;return(0,r.kt)(L,(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"handling-gestures"},"Handling gestures"),(0,r.kt)("p",null,"In this section, we'll learn how to handle gestures with Reanimated. To achieve this, Reanimated integrates tightly with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/"},"React Native Gesture Handler"),", another library created by Software Mansion."),(0,r.kt)("p",null,"Gesture Handler comes with plentiful gestures like ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/pinch-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"Pinch"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/fling-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"Fling")),". Right now we'll start simple and get to know ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/tap-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"Tap"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/pan-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"Pan"))," gestures as well as how to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withDecay"},(0,r.kt)("inlineCode",{parentName:"a"},"withDecay"))," animation function."),(0,r.kt)("p",null,"Just make sure to go through the Gesture Handler ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation"},"installation steps")," first and come back here to learn how to use it with Reanimated."),(0,r.kt)("h2",{id:"handling-tap-gestures"},"Handling tap gestures"),(0,r.kt)("p",null,"Let's start with the simplest gesture - tapping. Tap gesture detects fingers touching the screen for a short period of time. You can use them to implement custom buttons or pressable elements from scratch."),(0,r.kt)("p",null,"In this example, we'll create a circle that will grow and change color on touch."),(0,r.kt)("p",null,"First, let's wrap our app with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation/#js"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureHandlerRootView")),". Make sure to keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," as close to the actual root view as possible. That'll ensure that our gestures will work as expected with each other."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { GestureHandlerRootView } from 'react-native-gesture-handler';\n\nfunction App() {\n  return (\n    <GestureHandlerRootView style={{ flex: 1 }}>\n      {/* rest of the app */}\n    </GestureHandlerRootView>\n  );\n}\n")),(0,r.kt)("p",null,"New tap gestures are defined with ",(0,r.kt)("inlineCode",{parentName:"p"},"Gesture.Tap()")," in your component's body. You can define the behavior of the gesture by chaining methods like ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/tap-gesture/#onbegincallback"},(0,r.kt)("inlineCode",{parentName:"a"},"onBegin")),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/tap-gesture/#onstartcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"onStart")),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/tap-gesture/#onendcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"onEnd")),", or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/tap-gesture/#onfinalizecallback"},(0,r.kt)("inlineCode",{parentName:"a"},"onFinalize"))," on the gesture. We'll use them to update a shared value just after the gesture begins and return to the initial value when the gesture finishes."),(0,r.kt)(F,{showLines:[16,25],src:y,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"You can safely access the shared values because callbacks passed to gestures are automatically ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," for you."),(0,r.kt)("p",null,"We'd like our circle to change color from violet to yellow and smoothly scale by 20% on tap. Let's define that animation logic using ",(0,r.kt)("inlineCode",{parentName:"p"},"withTiming")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle"),":"),(0,r.kt)(F,{showLines:[27,30],src:y,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"You need to pass your defined gesture to the ",(0,r.kt)("inlineCode",{parentName:"p"},"gesture")," prop of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," component. That component should wrap the view you'd like to handle gestures on. Also, remember to pass the defined ",(0,r.kt)("inlineCode",{parentName:"p"},"animatedStyles")," to the view you want to animate like so:"),(0,r.kt)(F,{showLines:[32,43],src:y,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"And that's it! Pretty straightforward, isn't it? Let's see it in its full glory in an interactive example:"),(0,r.kt)(A,{src:y,component:f,label:"Tap the circle",mdxType:"InteractiveExample"}),(0,r.kt)("p",null,"You can make use of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/gesture-composition/"},"composing gestures")," to more complex behaviors. But what if we'd like to create something a bit more interesting?"),(0,r.kt)("h2",{id:"handling-pan-gestures"},"Handling pan gestures"),(0,r.kt)("p",null,"Let's spice things up a bit by making the circle draggable and have it bounce back to its starting position when released. Let's also keep the color highlight and scale effect we've added in the previous example. Implementing this behavior it's not possible with just a simple tap gesture. We need to reach for a pan gesture instead."),(0,r.kt)("p",null,"Luckily, all the gestures share a similar API so implementing this is nearly as easy as renaming the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tap")," gesture to ",(0,r.kt)("inlineCode",{parentName:"p"},"Pan")," and chaining an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," method."),(0,r.kt)(F,{showLines:[17,33],src:x,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"The callback passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," comes with some ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/pan-gesture#event-data"},"event data")," that has a bunch of handy properties. One of them is ",(0,r.kt)("inlineCode",{parentName:"p"},"translationX")," which indicates how much the object has moved on the X axis. We stored that in a shared value to move the circle accordingly. To make the circle come back to its initial place all you have to do is to reset the ",(0,r.kt)("inlineCode",{parentName:"p"},"offset.value")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinalize")," method. We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"withSpring")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"withTiming")," functions to make it come back with an animation."),(0,r.kt)("p",null,"All that's left to do is to adjust the logic in ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," to handle the offset."),(0,r.kt)(F,{showLines:[35,43],src:x,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"You can play around with the example below and see how the circle changes and reacts to the gesture:"),(0,r.kt)(A,{src:x,component:N,label:"Grab and drag the circle",mdxType:"InteractiveExample"}),(0,r.kt)("h2",{id:"using-withdecay"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"withDecay")),(0,r.kt)("p",null,"Remember when some time ago we said that we'll come back to ",(0,r.kt)("inlineCode",{parentName:"p"},"withDecay"),"? Now this is the time!"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"withDecay")," lets you retain the velocity of the gesture and animate with some deceleration. That means when you release a grabbed object with some velocity you can slowly bring it to stop. Sounds complicated but it really isn't!"),(0,r.kt)("p",null,"Simply pass the final velocity in ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinalize")," method to the ",(0,r.kt)("inlineCode",{parentName:"p"},"velocity")," property of ",(0,r.kt)("inlineCode",{parentName:"p"},"withDecay")," function and let Reanimated handle it for you. To retain the new position of an object update the change on the X axis in ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," method like so:"),(0,r.kt)(F,{showLines:[23,36],src:D.Z,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"The rest of the code is just to make sure the square stays inside the screen."),(0,r.kt)("p",null,"Play around and see how the square decelerates when let go with some speed!"),(0,r.kt)(A,{src:D.Z,component:G.Z,label:"Grab and release the square",mdxType:"InteractiveExample"}),(0,r.kt)("p",null,"Make sure to check the full ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withDecay"},(0,r.kt)("inlineCode",{parentName:"a"},"withDecay")," API reference")," to get to know the rest of the configuration options."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this section, we went through the basics of handling gestures with Reanimated and Gesture Handler. We learned about ",(0,r.kt)("inlineCode",{parentName:"p"},"Tap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Pan")," gestures and ",(0,r.kt)("inlineCode",{parentName:"p"},"withDecay")," function. To sum up:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reanimated integrates with a different package called React Native Gesture Handler to provide seamless interactions."),(0,r.kt)("li",{parentName:"ul"},"We create new gestures, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"Gesture.Pan()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Gesture.Tap()"),", and pass them to ",(0,r.kt)("inlineCode",{parentName:"li"},"GestureDetector"),", which has to wrap the element we want to handle interactions on."),(0,r.kt)("li",{parentName:"ul"},"You can access and modify shared values inside gesture callbacks without any additional boilerplate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withDecay")," lets you create decelerating animations based on velocity coming from a gesture.")),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"In this article, we've barely scratched the surface of what's possible with gestures in Reanimated. Besides ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/tap-gesture"},"Tap")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/pan-gesture"},"Pan")," gestures Gesture Handler comes with many more e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/pinch-gesture"},"Pinch")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/fling-gesture"},"Fling"),". We welcome you to dive into the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/quickstart"},"Quick start")," section of the React Native Gesture Handler documentation and explore all the possibilities that this library comes with."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary"},"the next section"),", Let's explore a glossary of terms together!"))}X.isMDXComponent=!0},52074:(e,t,n)=>{n.d(t,{Z:()=>a});const a="import React from 'react';\nimport { LayoutChangeEvent, StyleSheet, View } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useSharedValue,\n  withDecay,\n} from 'react-native-reanimated';\nimport {\n  Gesture,\n  GestureDetector,\n  GestureHandlerRootView,\n} from 'react-native-gesture-handler';\n\nconst SIZE = 120;\n\nexport default function App() {\n  const offset = useSharedValue<number>(0);\n  const width = useSharedValue<number>(0);\n\n  const onLayout = (event: LayoutChangeEvent) => {\n    width.value = event.nativeEvent.layout.width;\n  };\n\n  const pan = Gesture.Pan()\n    .onChange((event) => {\n      // highlight-next-line\n      offset.value += event.changeX;\n    })\n    .onFinalize((event) => {\n      // highlight-start\n      offset.value = withDecay({\n        velocity: event.velocityX,\n        rubberBandEffect: true,\n        clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],\n      });\n      // highlight-end\n    });\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <View onLayout={onLayout} style={styles.wrapper}>\n        <GestureDetector gesture={pan}>\n          <Animated.View style={[styles.box, animatedStyles]} />\n        </GestureDetector>\n      </View>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  wrapper: {\n    flex: 1,\n    width: '100%',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    height: SIZE,\n    width: SIZE,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    cursor: 'grab',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n"}}]);