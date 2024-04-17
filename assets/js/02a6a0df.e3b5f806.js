"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=o,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},40683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(83117),o=(a(67294),a(3905));const i={slug:"/",title:"About React Native Reanimated",sidebar_label:"About"},r=void 0,s={unversionedId:"fundamentals/about",id:"version-2.x/fundamentals/about",title:"About React Native Reanimated",description:"Reanimated v2 only supports react-native 0.62+",source:"@site/versioned_docs/version-2.x/fundamentals/about.md",sourceDirName:"fundamentals",slug:"/",permalink:"/react-native-reanimated/docs/2.x/",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/fundamentals/about.md",tags:[],version:"2.x",frontMatter:{slug:"/",title:"About React Native Reanimated",sidebar_label:"About"},sidebar:"docs",next:{title:"Installation",permalink:"/react-native-reanimated/docs/2.x/fundamentals/installation"}},l={},c=[{value:"Motivation",id:"motivation",level:3},{value:"Library overview",id:"library-overview",level:3},{value:"Known problems and limitations",id:"known-problems-and-limitations",level:3},{value:"Sponsors",id:"sponsors",level:3}],d={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Reanimated v2 only supports ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," ",(0,o.kt)("inlineCode",{parentName:"p"},"0.62+"))),(0,o.kt)("p",null,"Reanimated is a React Native library that allows for creating smooth animations and interactions that runs on the UI thread."),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"In React Native apps, the application code is executed outside of the application's main thread.\nThis is one of the key elements of React Native's architecture and helps with preventing frame drops in cases where JavaScript has some heavy work to do.\nUnfortunately this design does not play well when it comes to event driven interactions.\nWhen interacting with a touch screen, the user expects effects on screen to be immediate.\nIf updates are happening in a separate thread it is often the case that changes done in the JavaScript thread cannot be reflected in the same frame.\nIn React Native by default all updates are delayed by at least one frame as the communication between the UI and JavaScript threads is asynchronous and the UI thread never waits for the JavaScript thread to finish processing events.\nOn top of the lag with JavaScript playing many roles like running react diffing and updates, executing app's business logic, processing network requests, etc., it is often the case that events can't be immediately processed thus causing even more significant delays.\nReanimated aims to provide ways of offloading animation and event handling logic off of the JavaScript thread and onto the UI thread.\nThis is achieved by defining Reanimated worklets \u2013 tiny chunks of JavaScript code that can be moved to a separate JavaScript VM and executed synchronously on the UI thread.\nThis makes it possible to respond to touch events immediately and update the UI within the same frame when the event happens without worrying about the load that is put on the main JavaScript thread."),(0,o.kt)("h3",{id:"library-overview"},"Library overview"),(0,o.kt)("p",null,"Version 1 of Reanimated has been designed to match React Native's Animated API while providing a more complete set of primitives for defining interactions.\nIn version 2 we decided to change the approach in order to address some limitations of version 1 that come from the declarative API design.\nBelow we present an overview of things that are new in Reanimated 2 and different from Reanimated 1.\nThis is a tl;dr of the remaining parts of the documentation.\nWe recommend that you check the full articles to learn the details about each of the listed aspects:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'interactions and animations are no longer written using an unintuitive declarative API, instead they can be written in pure JS, in the form of so-called "worklets".\nWorklets are pieces of JS code that we extract from the main React Native code and run in a separate JS context on the main thread.\nBecause of that, worklets have some limitations as to what part of the JS context they can access (we don\'t want to load the entire JS bundle into the context which runs on the UI thread).'),(0,o.kt)("li",{parentName:"ol"},'It is still possible to define and pass around "Animated Values", however thanks to the new API, we expect that you\'ll create much fewer of those for a single animation.\nAlso, now, they are actually called "Shared Values" and can carry not only primitive types but also arrays, objects and functions.'),(0,o.kt)("li",{parentName:"ol"},"Shared Values are no longer directly connected to view props.\nInstead, we expose a ",(0,o.kt)("inlineCode",{parentName:"li"},"useAnimatedStyle")," hook that returns a style object which can be passed as a View's style param.\nThe ",(0,o.kt)("inlineCode",{parentName:"li"},"useAnimatedStyle")," hook takes a worklet that, when executed, should return styles that will be applied to the connected View.\nThe style worklet will update whenever shared values used by that worklet change (we detect dependencies on shared values automatically)."),(0,o.kt)("li",{parentName:"ol"},"Animations can be started in two ways: by triggering animated change on a shared value, or by returning animated value from ",(0,o.kt)("inlineCode",{parentName:"li"},"useAnimatedStyle")," hook."),(0,o.kt)("li",{parentName:"ol"},"With reanimated, we can hook worklets to serve as event handlers.\nMost common case for an event worklet is to modify some shared values.\nAs a result, changes made to those values will be reflected in the animated style worklet being triggered, which in turn will result in some view properties being updated.\nFor convenience, Reanimated provides an event hook that is tailored to work together with Gesture Handler library and allows you to define a separate worklet for handling different handler states (e.g., onStart, onActive, etc.)")),(0,o.kt)("h3",{id:"known-problems-and-limitations"},"Known problems and limitations"),(0,o.kt)("p",null,"Reanimated 2 is in an early version.\nAs we wanted to share it with the community as soon as we could, the library still has some rough edges and limitations that we plan to address soon.\nUnfortunately some of the limitations come from the immaturity of React Native's TurboModule architecture that Reanimated 2 relies on.\nAs a consequence we won't be able to support older versions of React Native and some issues that we yet plan to resolve may require full support of TurboModules which is not yet available to the public."),(0,o.kt)("p",null,"Below we highlight some of the problems that we are aware of (in most cases we are actively working on improving these):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As the library uses JSI for synchronous native methods access, remote debugging is no longer possible.\nYou can use Flipper for debugging your JS code, however connecting the debugger to the JS context which runs on the UI thread is not currently supported."),(0,o.kt)("li",{parentName:"ul"},"Objects passed to worklets from React Native don't have the correct prototype set in JavaScript.\nAs a result, such objects aren't enumerable, that is you can't use \"for in\" constructs, spread operator (three dots), or functions like Object.assign with them."),(0,o.kt)("li",{parentName:"ul"},"With Reanimated you can't animate virtual components of a layout. For example, you can\u2019t animate nested ",(0,o.kt)("inlineCode",{parentName:"li"},"<Text>")," components because React Native changes",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"<Text>\n   string1\n   <Text>string2</Text>\n</Text>\n")),"to",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"<RCTTextView>\n   string1\n   <RCTVirtualText>string2</RCTVirtualText>\n</RCTTextView>\n")),"and ",(0,o.kt)("inlineCode",{parentName:"li"},"RCTVirtualText")," is a virtual component.")),(0,o.kt)("h3",{id:"sponsors"},"Sponsors"),(0,o.kt)("p",null,"We really appreciate our sponsors! Thanks to them we can develop our library and make the React Native world a better place. Special thanks for:"),(0,o.kt)("div",{class:"community-holder-container"},(0,o.kt)("div",{class:"community-holder-container-item"},(0,o.kt)("a",{href:"https://www.shopify.com/"},(0,o.kt)("img",{class:"community-imageHolder",src:"https://avatars1.githubusercontent.com/u/8085?v=3&s=100"}),(0,o.kt)("div",null,"Shopify"))),(0,o.kt)("div",{class:"community-holder-container-item"},(0,o.kt)("a",{href:"https://expo.dev"},(0,o.kt)("img",{class:"community-imageHolder",src:"https://avatars2.githubusercontent.com/u/12504344?v=3&s=100"}),(0,o.kt)("div",null,"Expo")))))}u.isMDXComponent=!0}}]);