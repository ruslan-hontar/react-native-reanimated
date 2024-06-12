"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[2029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"useAnimatedGestureHandler",title:"useAnimatedGestureHandler",sidebar_label:"useAnimatedGestureHandler"},o=void 0,s={unversionedId:"api/hooks/useAnimatedGestureHandler",id:"version-2.x/api/hooks/useAnimatedGestureHandler",title:"useAnimatedGestureHandler",description:"This hook allows for defining worklet handlers that can serve in a process of handling gestures.",source:"@site/versioned_docs/version-2.x/api/hooks/useAnimatedGestureHandler.md",sourceDirName:"api/hooks",slug:"/api/hooks/useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedGestureHandler",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/hooks/useAnimatedGestureHandler.md",tags:[],version:"2.x",frontMatter:{id:"useAnimatedGestureHandler",title:"useAnimatedGestureHandler",sidebar_label:"useAnimatedGestureHandler"},sidebar:"docs",previous:{title:"withTiming",permalink:"/react-native-reanimated/docs/2.x/api/animations/withTiming"},next:{title:"useAnimatedKeyboard",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedKeyboard"}},l={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>gestureHandlers</code> object with worklets",id:"gesturehandlers-object-with-worklets",level:4},{value:"<code>dependencies</code> Array",id:"dependencies-array",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This hook allows for defining worklet handlers that can serve in a process of handling gestures."),(0,r.kt)("p",null,"Before you can use the hook, make sure that you have ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/#installation"},"installed and configured")," with your project."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"gesturehandlers-object-with-worklets"},(0,r.kt)("inlineCode",{parentName:"h4"},"gestureHandlers")," ","[object with worklets]"),(0,r.kt)("p",null,"The first argument to this hook is an object that can carry one or more worklet handlers.\nThe handlers can be set under the following keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"onStart"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onActive"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onEnd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onFail"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onCancel"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinish"),"."),(0,r.kt)("p",null,"Read more about gesture handling states in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/under-the-hood/state"},"Gesture Handler library documentation"),".\nEach of the specified handlers will be triggered depending on the current state of the attached Gesture Handler.\nThe handler worklet will receive the following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"event")," ","[object]"," - event object carrying the event payload.\nThe payload will be different depending on the type of the Gesture Handler to which the worklet is attached (",(0,r.kt)("inlineCode",{parentName:"p"},"PanGestureHandler"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RotationGestureHandler"),", etc.).\nPlease check the documentation section on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/"},"selected handler type")," to learn about the event structure.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"context")," ","[object]"," - plain JS object that can be used to store some state.\nThis object will persist in between events and across worklet handlers for all the selected states and you can read and write any data to it."))),(0,r.kt)("h4",{id:"dependencies-array"},(0,r.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,r.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{11}","{11}":!0},"const App = () => {\n  const [state, setState] = useState(0);\n  const sv = useSharedValue(0);\n\n  const handler = useAnimatedGestureHandler(\n    {\n      onEnd: (_) => {\n        sv.value = state;\n      },\n    },\n    dependencies\n  );\n  //...\n  return <></>;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in any of the callbacks' bodies or any values from their closure(variables from outer scope used in worklet),"),(0,r.kt)("li",{parentName:"ul"},"empty array(",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if any of the callbacks' bodies changes,"),(0,r.kt)("li",{parentName:"ul"},"array of values(",(0,r.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in any of the callbacks' bodies or in any values from the given array.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"The hook returns a handler object that can be attached to one of the gesture handler components provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," library.\nThe handler should be passed under ",(0,r.kt)("inlineCode",{parentName:"p"},"onGestureEvent")," parameter regardless of what gesture states we are interested in processing."),(0,r.kt)("p",null,"Note: Since version 2.10.0 of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler"),", to use this hook on web, you have to pass returned handler object to both ",(0,r.kt)("inlineCode",{parentName:"p"},"onGestureEvent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onHandlerStateChange")," parameters."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"In the below example we use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gesture-handlers/pan-gh/"},(0,r.kt)("inlineCode",{parentName:"a"},"PanGestureHandler"))," to register for pan gesture events performed on the rendered View.\nWe attach three handler worklets that are going to be triggered when the gesture starts, when it is active and the user is panning, and when the gesture is over.\nWe create a shared value ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," that will correspond to the x-translation of the box.\nIn ",(0,r.kt)("inlineCode",{parentName:"p"},"onStart")," handler worklet we use ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," to save the current value of ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and therefore remember the place at which the gesture started.\nWhen the user is panning, in ",(0,r.kt)("inlineCode",{parentName:"p"},"onActive")," handler we update the translation by taking the starting point remembered in ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," object and adding the translation that is coming from the gesture.\nFinally, in ",(0,r.kt)("inlineCode",{parentName:"p"},"onEnd")," handler we initiate an animation that'd make the box return to the initial point."),(0,r.kt)("p",null,"Thanks to the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," object, where we remember the initial position, the interaction can be made interruptible.\nThat is, we can continue the gesture from the place where we pick up the box, regardless of whether it is in the middle of animating back to the initial point."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n  useAnimatedGestureHandler,\n} from 'react-native-reanimated';\nimport { PanGestureHandler } from 'react-native-gesture-handler';\n\nfunction App() {\n  const x = useSharedValue(0);\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onStart: (_, ctx) => {\n      ctx.startX = x.value;\n    },\n    onActive: (event, ctx) => {\n      x.value = ctx.startX + event.translationX;\n    },\n    onEnd: (_) => {\n      x.value = withSpring(0);\n    },\n  });\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </PanGestureHandler>\n  );\n}\n")))}c.isMDXComponent=!0}}]);