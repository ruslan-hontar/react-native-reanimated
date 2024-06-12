"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[7949],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(b,i(i({ref:n},c),{},{components:t})):a.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={id:"troubleshooting",title:"Troubleshooting common problems",sidebar_label:"Troubleshooting"},i=void 0,l={unversionedId:"fundamentals/troubleshooting",id:"version-2.x/fundamentals/troubleshooting",title:"Troubleshooting common problems",description:"TypeError: Cannot convert undefined value to object on someVariable._closure",source:"@site/versioned_docs/version-2.x/fundamentals/troubleshooting.md",sourceDirName:"fundamentals",slug:"/fundamentals/troubleshooting",permalink:"/react-native-reanimated/docs/2.x/fundamentals/troubleshooting",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/fundamentals/troubleshooting.md",tags:[],version:"2.x",frontMatter:{id:"troubleshooting",title:"Troubleshooting common problems",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Web Support",permalink:"/react-native-reanimated/docs/2.x/fundamentals/web-support"},next:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/2.x/api/animations/cancelAnimation"}},s={},p=[{value:"<code>TypeError: Cannot convert undefined value to object</code> on <code>someVariable._closure</code>",id:"typeerror-cannot-convert-undefined-value-to-object-on-somevariable_closure",level:3},{value:"<code>undefined is not an object (evaluating &#39;_toConsumableArray(Array(length)).map&#39;)</code>",id:"undefined-is-not-an-object-evaluating-_toconsumablearrayarraylengthmap",level:3},{value:"<code>Export namespace should be first transformed by &#39;babel/plugin-proposal-export-namespace-from&#39;</code>",id:"export-namespace-should-be-first-transformed-by-babelplugin-proposal-export-namespace-from",level:3},{value:"Multiple versions of Reanimated were detected",id:"multiple-versions-of-reanimated-were-detected",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"typeerror-cannot-convert-undefined-value-to-object-on-somevariable_closure"},(0,r.kt)("inlineCode",{parentName:"h3"},"TypeError: Cannot convert undefined value to object")," on ",(0,r.kt)("inlineCode",{parentName:"h3"},"someVariable._closure")),(0,r.kt)("p",null,"This error frequently happens when metro cache is not updated. Clear it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"watchman watch-del-all\nyarn start --reset-cache\n")),(0,r.kt)("p",null,"Also, make sure that you installed the babel plugin."),(0,r.kt)("h3",{id:"undefined-is-not-an-object-evaluating-_toconsumablearrayarraylengthmap"},(0,r.kt)("inlineCode",{parentName:"h3"},"undefined is not an object (evaluating '_toConsumableArray(Array(length)).map')")),(0,r.kt)("p",null,"This error shows when you use spread (",(0,r.kt)("inlineCode",{parentName:"p"},"...array"),") inside worklets. See ",(0,r.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/2.x/#known-problems-and-limitations"},"Known problems and limitations")," section for more information about spread support.\nDepending on how spread is used you may try one of the following alternatives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"copying array: ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"},(0,r.kt)("inlineCode",{parentName:"a"},"array.slice()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[...Array(length)].map")," idiom: ",(0,r.kt)("inlineCode",{parentName:"li"},"Array(length).fill().map()")),(0,r.kt)("li",{parentName:"ul"},"merging objects: ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},(0,r.kt)("inlineCode",{parentName:"a"},"Object.assign()"))),(0,r.kt)("li",{parentName:"ul"},"spreading args in function: ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"},(0,r.kt)("inlineCode",{parentName:"a"},"func.apply()")))),(0,r.kt)("h3",{id:"export-namespace-should-be-first-transformed-by-babelplugin-proposal-export-namespace-from"},(0,r.kt)("inlineCode",{parentName:"h3"},"Export namespace should be first transformed by 'babel/plugin-proposal-export-namespace-from'")),(0,r.kt)("p",null,"This error usually happens, when you forget to add the babel plugin in your ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.plugin.js"),". Please make\nsure you have added it."),(0,r.kt)("h3",{id:"multiple-versions-of-reanimated-were-detected"},"Multiple versions of Reanimated were detected"),(0,r.kt)("p",null,"This error usually happens when in your project there exists more than one instance of Reanimated. It can occur when some of your dependency has installed Reanimated inside their own ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of using it as a peer dependency. In this case two different versions of Reanimated JS module try to install the same Native Module. You can resolve this problem manually by modifying your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,r.kt)("p",null,"You can check which libraries are using Reanimated, for example, with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm why react-native-reanimated\n")),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," you should add ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/"},(0,r.kt)("inlineCode",{parentName:"a"},"resolution")," property"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"resolutions": {\n  "react-native-reanimated": <Reanimated version>\n}\n')),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," you should add ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides"},(0,r.kt)("inlineCode",{parentName:"a"},"overrides")," property"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"overrides": {\n  "react-native-reanimated": <Reanimated version>\n}\n')),(0,r.kt)("p",null,"After that you need to run you package manager again"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")))}u.isMDXComponent=!0}}]);