"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[5226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"measure",title:"measure",sidebar_label:"measure"},o=void 0,s={unversionedId:"api/nativeMethods/measure",id:"version-2.x/api/nativeMethods/measure",title:"measure",description:"Determines the location on screen, width, and height in the viewport of the given view synchronously and returns an object with measured dimensions or null if the view cannot be measured.",source:"@site/versioned_docs/version-2.x/api/nativeMethods/measure.md",sourceDirName:"api/nativeMethods",slug:"/api/nativeMethods/measure",permalink:"/react-native-reanimated/docs/2.x/api/nativeMethods/measure",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/nativeMethods/measure.md",tags:[],version:"2.x",frontMatter:{id:"measure",title:"measure",sidebar_label:"measure"},sidebar:"docs",previous:{title:"Layout Transitions",permalink:"/react-native-reanimated/docs/2.x/api/LayoutAnimations/layoutTransitions"},next:{title:"scrollTo",permalink:"/react-native-reanimated/docs/2.x/api/nativeMethods/scrollTo"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:"animatedRef",id:"animatedref",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Determines the location on screen, width, and height in the viewport of the given view synchronously and returns an object with measured dimensions or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the view cannot be measured."),(0,r.kt)("p",null,"If you need the measurements as soon as possible and you don't need ",(0,r.kt)("inlineCode",{parentName:"p"},"pageX")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pageY"),", consider using the ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#onlayout"},(0,r.kt)("inlineCode",{parentName:"a"},"onLayout"))," property instead."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"measure()")," only on rendered components. For example, calling ",(0,r.kt)("inlineCode",{parentName:"p"},"measure()")," on an offscreen ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," item will return ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". It is therefore a good practice to perform a ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"-check before using the response.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you call ",(0,r.kt)("inlineCode",{parentName:"p"},"measure")," inside ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/api/hooks/useAnimatedStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),", you may get the following warning:"),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"[Reanimated]"," measure() was called from the main JS context. Measure is only available\nin the UI runtime. (...)")),(0,r.kt)("p",{parentName:"admonition"},"That's because in React Native apps, ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," worklet is first evaluated on the JS context during the first render, thus before rendering has been completed in native. This is safe to ignore, but if you don't want this warning to appear then wrap the call like this:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (_WORKLET || isWeb) {\n  const measured = measure(animatedRef);\n  if (measured !== null) {\n    // ...\n  }\n}\n"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"measure")," is not available when Chrome Developer Tools (remote JS debugger) is attached. However, the recommended tool for debugging React Native apps is Flipper (Chrome DevTools) which supports ",(0,r.kt)("inlineCode",{parentName:"p"},"measure"),". Check out more details ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/guide/debugging"},"here"),".")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"animatedref"},"animatedRef"),(0,r.kt)("p",null,"The product of ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/api/hooks/useAnimatedRef"},(0,r.kt)("inlineCode",{parentName:"a"},"useAnimatedRef"))," which is Reanimated's extension of a standard React ref (delivers the view tag on the UI thread)."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"MeasuredDimensions"),", which contains these fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"width")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"height")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageY"))),(0,r.kt)("p",null,"If the measurement could not be performed, returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef();\n\n  useDerivedValue(() => {\n    const measured = measure(aref);\n    if (measured !== null) {\n      const { x, y, width, height, pageX, pageY } = measured;\n      console.log({ x, y, width, height, pageX, pageY });\n    } else {\n      console.warn('measure: could not measure view');\n    }\n  });\n\n  return <View ref={aref} />;\n};\n")))}u.isMDXComponent=!0}}]);