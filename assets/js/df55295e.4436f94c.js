"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(m,l(l({ref:t},f),{},{components:r})):n.createElement(m,l({ref:t},f))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={id:"useScrollViewOffset",title:"useScrollViewOffset",sidebar_label:"useScrollViewOffset"},l=void 0,i={unversionedId:"api/hooks/useScrollViewOffset",id:"version-2.x/api/hooks/useScrollViewOffset",title:"useScrollViewOffset",description:"useScrollViewOffset is available since v2.11.0",source:"@site/versioned_docs/version-2.x/api/hooks/useScrollViewOffset.md",sourceDirName:"api/hooks",slug:"/api/hooks/useScrollViewOffset",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useScrollViewOffset",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/hooks/useScrollViewOffset.md",tags:[],version:"2.x",frontMatter:{id:"useScrollViewOffset",title:"useScrollViewOffset",sidebar_label:"useScrollViewOffset"},sidebar:"docs",previous:{title:"useHandler",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useHandler"},next:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useSharedValue"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>aref</code> RefObject<Animated.ScrollView>",id:"aref-refobjectanimatedscrollview",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],f={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"useScrollViewOffset is available since v2.11.0")),(0,a.kt)("p",null,"This hook allows you to create animations based on the offset of a ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),".\nThe hook automatically detects if the ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," is horizontal or vertical."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"useScrollViewOffset(aref: RefObject<Animated.ScrollView>) => [SharedValue<number>]\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"aref-refobjectanimatedscrollview"},(0,a.kt)("inlineCode",{parentName:"h4"},"aref")," ","[RefObject","<","Animated.ScrollView",">]"),(0,a.kt)("p",null,"An Animated reference to a ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),". The reference should be passed to the\nappropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," prop."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"A shared value which holds the current offset of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function ScrollViewOffsetExample() {\n  const aref = useAnimatedRef<Animated.ScrollView>();\n  const scrollHandler = useScrollViewOffset(aref);\n\n  useAnimatedStyle(() => {\n    console.log(scrollHandler.value);\n    return {};\n  });\n\n  return (\n    <>\n      <View style={styles.positionView}>\n        <Text>Test</Text>\n      </View>\n      <View style={styles.divider} />\n      <Animated.ScrollView\n        ref={aref}\n        scrollEventThrottle={16}\n        style={styles.scrollView}>\n        {[...Array(100)].map((_, i) => (\n          <Text key={i} style={styles.text}>\n            {i}\n          </Text>\n        ))}\n      </Animated.ScrollView>\n    </>\n  );\n}\n")))}p.isMDXComponent=!0}}]);