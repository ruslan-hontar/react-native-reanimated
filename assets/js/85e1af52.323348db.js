"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[65],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"getRelativeCoords",title:"getRelativeCoords",sidebar_label:"getRelativeCoords"},i=void 0,l={unversionedId:"api/miscellaneous/getRelativeCoords",id:"version-2.x/api/miscellaneous/getRelativeCoords",title:"getRelativeCoords",description:"Determines the location on the screen, relative to the given view. It might be useful when there are only absolute coordinates available and you need coordinates relative to the parent.",source:"@site/versioned_docs/version-2.x/api/miscellaneous/getRelativeCoords.md",sourceDirName:"api/miscellaneous",slug:"/api/miscellaneous/getRelativeCoords",permalink:"/react-native-reanimated/docs/2.x/api/miscellaneous/getRelativeCoords",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/miscellaneous/getRelativeCoords.md",tags:[],version:"2.x",frontMatter:{id:"getRelativeCoords",title:"getRelativeCoords",sidebar_label:"getRelativeCoords"},sidebar:"docs",previous:{title:"scrollTo",permalink:"/react-native-reanimated/docs/2.x/api/nativeMethods/scrollTo"},next:{title:"Interpolate",permalink:"/react-native-reanimated/docs/2.x/api/miscellaneous/interpolate"}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:"animatedRef",id:"animatedref",level:4},{value:"x",id:"x",level:4},{value:"y",id:"y",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Determines the location on the screen, relative to the given view. It might be useful when there are only absolute coordinates available and you need coordinates relative to the parent."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"animatedref"},"animatedRef"),(0,a.kt)("p",null,"The product of ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.x/api/hooks/useAnimatedRef"},(0,a.kt)("inlineCode",{parentName:"a"},"useAnimatedRef"))," is Reanimated's extension of a standard React ref (delivers the view tag on the UI thread). This ref should be passed as a prop to the view relative to which we want to know coordinates."),(0,a.kt)("h4",{id:"x"},"x"),(0,a.kt)("p",null,"Absolute ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," coordinate."),(0,a.kt)("h4",{id:"y"},"y"),(0,a.kt)("p",null,"Absolute ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," coordinate"),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Object which contains relative coordinates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y"))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef();\n  // ...\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onEnd: (event) => {\n      getRelativeCoords(aref, event.absoluteX, event.absoluteY);\n    },\n  });\n\n  return (\n    <View ref={aref}>\n      <PanGestureHandler onGestureEvent={gestureHandler}>\n        <Animated.View style={[styles.box]} />\n      </PanGestureHandler>\n    </View>\n  );\n};\n")))}p.isMDXComponent=!0}}]);