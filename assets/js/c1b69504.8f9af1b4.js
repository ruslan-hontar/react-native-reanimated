"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[9546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_position:4},o="getRelativeCoords",l={unversionedId:"utilities/getRelativeCoords",id:"utilities/getRelativeCoords",title:"getRelativeCoords",description:"This page was ported from an old version of the documentation.",source:"@site/docs/utilities/getRelativeCoords.mdx",sourceDirName:"utilities",slug:"/utilities/getRelativeCoords",permalink:"/react-native-reanimated/docs/utilities/getRelativeCoords",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/utilities/getRelativeCoords.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"interpolateColor",permalink:"/react-native-reanimated/docs/utilities/interpolateColor"},next:{title:"Advanced APIs",permalink:"/react-native-reanimated/docs/category/advanced-apis"}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:"animatedRef",id:"animatedref",level:4},{value:"x",id:"x",level:4},{value:"y",id:"y",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getrelativecoords"},"getRelativeCoords"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page was ported from an old version of the documentation."),(0,a.kt)("p",{parentName:"admonition"},"As we're rewriting the documentation some of the pages might be a little outdated.")),(0,a.kt)("p",null,"Determines the location on the screen, relative to the given view. It might be useful when there are only absolute coordinates available and you need coordinates relative to the parent."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"animatedref"},"animatedRef"),(0,a.kt)("p",null,"The product of ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedRef"},(0,a.kt)("inlineCode",{parentName:"a"},"useAnimatedRef"))," is Reanimated's extension of a standard React ref (delivers the view tag on the UI thread). This ref should be passed as a prop to the view relative to which we want to know coordinates."),(0,a.kt)("h4",{id:"x"},"x"),(0,a.kt)("p",null,"Absolute ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," coordinate."),(0,a.kt)("h4",{id:"y"},"y"),(0,a.kt)("p",null,"Absolute ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," coordinate"),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Object which contains relative coordinates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y"))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef();\n  // ...\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onEnd: (event) => {\n      getRelativeCoords(aref, event.absoluteX, event.absoluteY);\n    },\n  });\n\n  return (\n    <View ref={aref}>\n      <PanGestureHandler onGestureEvent={gestureHandler}>\n        <Animated.View style={[styles.box]} />\n      </PanGestureHandler>\n    </View>\n  );\n};\n")))}p.isMDXComponent=!0}}]);