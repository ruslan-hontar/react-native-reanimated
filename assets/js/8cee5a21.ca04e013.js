"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[5440],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={id:"runOnUI",title:"runOnUI",sidebar_label:"runOnUI"},i=void 0,l={unversionedId:"api/miscellaneous/runOnUI",id:"version-2.x/api/miscellaneous/runOnUI",title:"runOnUI",description:"Enables executing worklet functions on the UI thread. Note that UI execution is asynchronous from the caller\u2019s perspective. When you pass arguments, they will be copied to the UI context.",source:"@site/versioned_docs/version-2.x/api/miscellaneous/runOnUI.md",sourceDirName:"api/miscellaneous",slug:"/api/miscellaneous/runOnUI",permalink:"/react-native-reanimated/docs/2.x/api/miscellaneous/runOnUI",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/miscellaneous/runOnUI.md",tags:[],version:"2.x",frontMatter:{id:"runOnUI",title:"runOnUI",sidebar_label:"runOnUI"},sidebar:"docs",previous:{title:"runOnJS",permalink:"/react-native-reanimated/docs/2.x/api/miscellaneous/runOnJS"},next:{title:"interpolateColor",permalink:"/react-native-reanimated/docs/2.x/api/miscellaneous/interpolateColors"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>fn</code> function",id:"fn-function",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Enables executing worklet functions on the UI thread. Note that UI execution is asynchronous from the caller\u2019s perspective. When you pass arguments, they will be copied to the UI context."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"fn-function"},(0,o.kt)("inlineCode",{parentName:"h4"},"fn")," ","[function]"),(0,o.kt)("p",null,"The first and only argument is a worklet function that is supposed to be run."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI")," returns a function which will be executed on UI thread."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12}","{12}":!0},"import { runOnUI } from 'react-native-reanimated';\nimport { View, Button } from 'react-native';\nimport React from 'react';\n\nexport default function App() {\n  const someWorklet = (greeting) => {\n    'worklet';\n    console.log(greeting, 'From the UI thread');\n  };\n\n  const onPress = () => {\n    runOnUI(someWorklet)('Howdy');\n  };\n\n  return (\n    <View>\n      <Button title=\"toggle\" onPress={onPress} />\n    </View>\n  );\n}\n")))}m.isMDXComponent=!0}}]);