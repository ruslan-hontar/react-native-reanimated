"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[3143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"useFrameCallback",title:"useFrameCallback",sidebar_label:"useFrameCallback"},i=void 0,o={unversionedId:"api/hooks/useFrameCallback",id:"version-2.x/api/hooks/useFrameCallback",title:"useFrameCallback",description:"useFrameCallback is available since v2.10.0",source:"@site/versioned_docs/version-2.x/api/hooks/useFrameCallback.md",sourceDirName:"api/hooks",slug:"/api/hooks/useFrameCallback",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useFrameCallback",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/hooks/useFrameCallback.md",tags:[],version:"2.x",frontMatter:{id:"useFrameCallback",title:"useFrameCallback",sidebar_label:"useFrameCallback"},sidebar:"docs",previous:{title:"useEvent",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useEvent"},next:{title:"useHandler",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useHandler"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>callback</code> Function",id:"callback-function",level:4},{value:"<code>autostart</code> boolean",id:"autostart-boolean",level:4},{value:"Returns",id:"returns",level:3},{value:"Types",id:"types",level:3},{value:"<code>FrameCallback: [object]</code>",id:"framecallback-object",level:4},{value:"<code>FrameInfo: [object]</code>",id:"frameinfo-object",level:4},{value:"Example",id:"example",level:2}],m={toc:s},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"useFrameCallback is available since v2.10.0")),(0,r.kt)("p",null,"This hook allows you to run a piece of code on every frame update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useFrameCallback(callback: (frameInfo: FrameInfo) => void, autostart = true): [FrameCallback]\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"callback-function"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback")," ","[Function]"),(0,r.kt)("p",null,"A single worklet function that will be called on every frame update.\nThis function receives a ",(0,r.kt)("a",{parentName:"p",href:"#frameinfo-object"},(0,r.kt)("inlineCode",{parentName:"a"},"FrameInfo"))," object as an argument."),(0,r.kt)("h4",{id:"autostart-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"autostart")," ","[boolean]"),(0,r.kt)("p",null,"Optional boolean that specifies if the callback should start running when\nregistration is complete. This argument defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An object of type ",(0,r.kt)("a",{parentName:"p",href:"#framecallback-object"},(0,r.kt)("inlineCode",{parentName:"a"},"FrameCallback"))," which allows you to read and control the\ncallback state."),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("h4",{id:"framecallback-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"FrameCallback: [object]")),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setActive: (isActive: boolean) => void"),": begins / stops listening for frame updates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isActive: boolean"),": indicates whether the callback is active (",(0,r.kt)("inlineCode",{parentName:"li"},"true"),")\nor not (",(0,r.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callbackId: number"),": a unique identifier of the callback function")),(0,r.kt)("h4",{id:"frameinfo-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"FrameInfo: [object]")),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp: number"),": the system time (in milliseconds) when the last\nframe was rendered"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeSincePreviousFrame: number | null"),": time (in milliseconds) since last frame. This value\nwill be ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," on the first frame after activation. Starting from the second frame,\nit should be ~16 ms on 60 Hz or ~8 ms on 120 Hz displays (when there is no lag)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeSinceFirstFrame: number"),": time (in milliseconds) since the callback was last activated")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{13-21}","{13-21}":!0},"import Animated, {\n  useAnimatedStyle,\n  useFrameCallback,\n  useSharedValue,\n} from 'react-native-reanimated';\nimport { Button, StyleSheet, View } from 'react-native';\n\nimport React from 'react';\n\nexport default function FrameCallbackExample() {\n  const x = useSharedValue(0);\n\n  const frameCallback = useFrameCallback((frameInfo) => {\n    if (frameInfo.timeSincePreviousFrame === null) {\n      console.log('First frame!');\n    } else {\n      console.log(\n        `${frameInfo.timeSincePreviousFrame} ms have passed since the previous frame`\n      );\n    }\n    // Move the box by one pixel on every frame\n    x.value += 1;\n  }, false);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <View>\n      <Animated.View style={[styles.box, animatedStyle]} />\n      <Button\n        title=\"Start/stop\"\n        onPress={() => frameCallback.setActive(!frameCallback.isActive)}\n      />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    width: 100,\n    height: 100,\n    backgroundColor: 'red',\n  },\n});\n")))}p.isMDXComponent=!0}}]);