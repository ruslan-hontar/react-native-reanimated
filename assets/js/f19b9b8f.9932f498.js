"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[6372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79271:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294);const o="collapseButton_X7H2",r="arrow_XdVJ";var s;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const i=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",l({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,s||(s=a.createElement("path",{d:"m1 1 5 5 5-5",stroke:"#001A72",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var c;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",u({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,c||(c=a.createElement("path",{d:"m1 1 5 5 5-5",stroke:"#F8F9FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var p=n(92949),h=n(86010);const m=e=>{let{label:t,labelCollapsed:n,collapsed:s,onCollapse:l,className:c}=e;const{colorMode:u}=(0,p.I)();return a.createElement("div",{className:(0,h.default)(o,c),"data-collapsed":s,onClick:()=>l()},"light"===u?a.createElement(i,{className:r}):a.createElement(d,{className:r}),a.createElement("button",null,s?n:t))}},61837:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(60614);const r={container:"container_oGcb",collapseButton:"collapseButton_YVdr"};var s=n(79271);function l(e){let{src:t,showLines:n}=e;const[l,i]=(0,a.useState)(!0);if(!n)return a.createElement(o.Z,{language:"jsx"},t);const[c,u]=n,d=t.split("\n").slice(c,u+1).join("\n");return a.createElement("div",{className:r.container},a.createElement(s.Z,{label:"Collapse the full code",labelCollapsed:"Expand the full code",collapsed:l,onCollapse:()=>i(!l),className:r.collapseButton}),a.createElement(o.Z,{language:"jsx"},l?d:t))}},83760:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);function o(e){let{sources:t}=e;return a.createElement("div",{style:{flexDirection:"row",justifyContent:"space-between",marginBottom:"16px",display:"flex"}},a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},a.createElement("source",{src:t.android,type:"video/mp4"}),"Your browser does not support the video tag."),a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},a.createElement("source",{src:t.ios,type:"video/mp4"}),"Your browser does not support the video tag."))}},59261:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(67294),o=n(70399),r=n(28033),s=n(76636),l=n(67177),i=n(72400),c=n(10758),u=n(35842),d=n(6316),p=n(6328),h=n(74306),m=n(49638);const f={code:"function anonymous(){const{interpolateColor,value,trackColors,withTiming,duration,height}=this.__closure;const color=interpolateColor(value.value,[0,1],[trackColors.off,trackColors.on]);const colorValue=withTiming(color,{duration:duration});return{backgroundColor:colorValue,borderRadius:height.value/2};}"},v={code:"function anonymous(){const{interpolate,value,width,height,withTiming,duration}=this.__closure;const moveValue=interpolate(Number(value.value),[0,1],[0,width.value-height.value]);const translateValue=withTiming(moveValue,{duration:duration});return{transform:[{translateX:translateValue}],borderRadius:height.value/2};}"},y=e=>{let{value:t,onPress:n,style:r,duration:s=400,trackColors:l={on:"#82cab2",off:"#fa7f7c"}}=e;const i=(0,c.y)(0),y=(0,c.y)(0),b=(0,u.l)(function(){const e=function(){const e=(0,d.BM)(t.value,[0,1],[l.off,l.on]);return{backgroundColor:(0,p.j)(e,{duration:s}),borderRadius:i.value/2}};return e.__closure={interpolateColor:d.BM,value:t,trackColors:l,withTiming:p.j,duration:s,height:i},e.__workletHash=4355305055808,e.__initData=f,e}()),w=(0,u.l)(function(){const e=function(){const e=(0,h.sX)(Number(t.value),[0,1],[0,y.value-i.value]);return{transform:[{translateX:(0,p.j)(e,{duration:s})}],borderRadius:i.value/2}};return e.__closure={interpolate:h.sX,value:t,width:y,height:i,withTiming:p.j,duration:s},e.__workletHash=1950949026036,e.__initData=v,e}());return a.createElement(o.Z,{onPress:n},a.createElement(m.n,{onLayout:e=>{i.value=e.nativeEvent.layout.height,y.value=e.nativeEvent.layout.width},style:[g.track,r,b]},a.createElement(m.n,{style:[g.thumb,w]})))},g=r.Z.create({track:{alignItems:"flex-start",width:100,height:40,padding:5},thumb:{height:"100%",aspectRatio:1,backgroundColor:"white"}});function b(){const e=(0,c.y)(!1),t=()=>{e.value=!e.value};return a.createElement(s.Z,{style:w.container},a.createElement(y,{value:e,onPress:t,style:w.switch}),a.createElement(l.Z,{style:w.buttonContainer},a.createElement(i.Z,{onPress:t,title:"Click me"})))}const w=r.Z.create({switch:{width:200,height:80,padding:10},container:{flex:1,height:300,alignItems:"center",justifyContent:"center"},buttonContainer:{paddingTop:"1rem",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}})},70894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(87462),o=(n(67294),n(3905)),r=n(59261),s=n(80220),l=n(83760),i=n(61837);const c={slug:"switch",title:"Switch"},u=void 0,d={permalink:"/react-native-reanimated/examples/switch",source:"@site/blog/switch.md",title:"Switch",description:"A switch element is a user interface component that allows users to toggle between two or more states. It is commonly used to turn on/off a setting, enable/disable a feature, or select between options.",date:"2024-06-12T13:28:28.000Z",formattedDate:"June 12, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"switch",title:"Switch"},prevItem:{title:"Slider",permalink:"/react-native-reanimated/examples/slider"}},p={authorsImageUrls:[]},h=[],m=(f="InteractiveExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var f;const v={toc:h},y="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A switch element is a user interface component that allows users to toggle between two or more states. It is commonly used to turn on/off a setting, enable/disable a feature, or select between options."),(0,o.kt)(m,{src:s.Z,component:r.Z,mdxType:"InteractiveExample"}),(0,o.kt)("p",null,"The following implementation of a switch relies on ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animatable-value"},"animatable values"),". Leveraging animatable values of color and position enables smooth transition between the two states."),(0,o.kt)("samp",{id:"Switch"},"Switch"),(0,o.kt)(i.Z,{src:s.Z,showLines:[26,52],mdxType:"CollapsibleCode"}),(0,o.kt)(l.Z,{sources:{android:"/react-native-reanimated/recordings/examples/switch_android.mp4",ios:"/react-native-reanimated/recordings/examples/switch_ios.mov"},mdxType:"ExampleVideo"}),(0,o.kt)("p",null,"We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSharedValue")," hook to store the dimensions of the element, which allows for precise calculation of position changes during the animation. The hook is there to prevent unnecessary re-renders."),(0,o.kt)(i.Z,{src:s.Z,showLines:[23,25],mdxType:"CollapsibleCode"}),(0,o.kt)("p",null,"The values are updated during the ",(0,o.kt)("inlineCode",{parentName:"p"},"onLayout")," event of the element."),(0,o.kt)(i.Z,{src:s.Z,showLines:[56,61],mdxType:"CollapsibleCode"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Switch")," component can represent any boolean value passed as a prop. The state dynamically adjusts based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," prop resulting in smooth transition animations. It enables passing any function using the ",(0,o.kt)("inlineCode",{parentName:"p"},"onPress")," prop. The ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," prop controls the duration of the animation. The ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"trackColors")," props enable personalization."),(0,o.kt)("samp",{id:"Switch"},"Switch"),(0,o.kt)(i.Z,{src:s.Z,showLines:[16,67],mdxType:"CollapsibleCode"}))}g.isMDXComponent=!0},80220:(e,t,n)=>{n.d(t,{Z:()=>a});const a="import React from 'react';\nimport {\n  Pressable,\n  SafeAreaView,\n  View,\n  StyleSheet,\n  Button,\n} from 'react-native';\nimport Animated, {\n  interpolate,\n  interpolateColor,\n  useAnimatedStyle,\n  useSharedValue,\n  withTiming,\n} from 'react-native-reanimated';\n\nconst Switch = ({\n  value,\n  onPress,\n  style,\n  duration = 400,\n  trackColors = { on: '#82cab2', off: '#fa7f7c' },\n}) => {\n  const height = useSharedValue(0);\n  const width = useSharedValue(0);\n\n  const trackAnimatedStyle = useAnimatedStyle(() => {\n    const color = interpolateColor(\n      value.value,\n      [0, 1],\n      [trackColors.off, trackColors.on]\n    );\n    const colorValue = withTiming(color, { duration });\n\n    return {\n      backgroundColor: colorValue,\n      borderRadius: height.value / 2,\n    };\n  });\n\n  const thumbAnimatedStyle = useAnimatedStyle(() => {\n    const moveValue = interpolate(\n      Number(value.value),\n      [0, 1],\n      [0, width.value - height.value]\n    );\n    const translateValue = withTiming(moveValue, { duration });\n\n    return {\n      transform: [{ translateX: translateValue }],\n      borderRadius: height.value / 2,\n    };\n  });\n\n  return (\n    <Pressable onPress={onPress}>\n      <Animated.View\n        onLayout={(e) => {\n          height.value = e.nativeEvent.layout.height;\n          width.value = e.nativeEvent.layout.width;\n        }}\n        style={[switchStyles.track, style, trackAnimatedStyle]}>\n        <Animated.View\n          style={[switchStyles.thumb, thumbAnimatedStyle]}></Animated.View>\n      </Animated.View>\n    </Pressable>\n  );\n};\n\nconst switchStyles = StyleSheet.create({\n  track: {\n    alignItems: 'flex-start',\n    width: 100,\n    height: 40,\n    padding: 5,\n  },\n  thumb: {\n    height: '100%',\n    aspectRatio: 1,\n    backgroundColor: 'white',\n  },\n});\n\nexport default function App() {\n  const isOn = useSharedValue(false);\n\n  const handlePress = () => {\n    isOn.value = !isOn.value;\n  };\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <Switch value={isOn} onPress={handlePress} style={styles.switch} />\n      <View style={styles.buttonContainer}>\n        <Button onPress={handlePress} title=\"Click me\" />\n      </View>\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  switch: {\n    width: 200,\n    height: 80,\n    padding: 10,\n  },\n  container: {\n    flex: 1,\n    height: 300,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  buttonContainer: {\n    paddingTop: '1rem',\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n"},6316:(e,t,n)=>{n.d(t,{BM:()=>m,nn:()=>v,uH:()=>f,vl:()=>l});var a=n(43219),o=n(96085),r=n(74306),s=n(10758);const l=r.z2,i=(e,t,n,o)=>{let s=0;const{useCorrectedHSVInterpolation:l=!0}=o;if(l){const a=[t[0]],o=n.h,l=[o[0]];for(let e=1;e<o.length;++e){const n=o[e]-o[e-1];o[e]>o[e-1]&&n>.5?(a.push(t[e]),a.push(t[e]+1e-5),l.push(o[e]-1),l.push(o[e])):o[e]<o[e-1]&&n<-.5?(a.push(t[e]),a.push(t[e]+1e-5),l.push(o[e]+1),l.push(o[e])):(a.push(t[e]),l.push(o[e]))}s=((0,r.sX)(e,a,l,r.z2.CLAMP)+1)%1}else s=(0,r.sX)(e,t,n.h,r.z2.CLAMP);const i=(0,r.sX)(e,t,n.s,r.z2.CLAMP),c=(0,r.sX)(e,t,n.v,r.z2.CLAMP),u=(0,r.sX)(e,t,n.a,r.z2.CLAMP);return(0,a.De)(s,i,c,u)},c=(e,t)=>e.map((e=>Math.pow(e/255,t))),u=(e,t)=>Math.round(255*Math.pow(e,1/t)),d=(e,t,n,o)=>{const{gamma:s=2.2}=o;let{r:l,g:i,b:d}=n;1!==s&&(l=c(l,s),i=c(i,s),d=c(d,s));const p=(0,r.sX)(e,t,l,r.z2.CLAMP),h=(0,r.sX)(e,t,i,r.z2.CLAMP),m=(0,r.sX)(e,t,d,r.z2.CLAMP),f=(0,r.sX)(e,t,n.a,r.z2.CLAMP);return 1===s?(0,a.qX)(p,h,m,f):(0,a.qX)(u(p,s),u(h,s),u(m,s),f)},p=e=>{const t=[],n=[],o=[],r=[];for(let s=0;s<e.length;++s){const l=e[s],i=(0,a.aL)(l);null!=i&&(t.push((0,a.Q6)(i)),n.push((0,a.ek)(i)),o.push((0,a.iN)(i)),r.push((0,a.Oh)(i)))}return{r:t,g:n,b:o,a:r}},h=e=>{const t=[],n=[],o=[],r=[];for(let s=0;s<e.length;++s){const l=e[s],i=(0,a.aL)(l);if("number"==typeof i){const e=(0,a.Ls)((0,a.Q6)(i),(0,a.ek)(i),(0,a.iN)(i));t.push(e.h),n.push(e.s),o.push(e.v),r.push((0,a.Oh)(i))}}return{h:t,s:n,v:o,a:r}};function m(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"RGB",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if("HSV"===a)return i(e,t,h(n),o);if("RGB"===a)return d(e,t,p(n),o);throw new Error(`[Reanimated] Invalid color space provided: ${a}. Supported values are: ['RGB', 'HSV'].`)}let f=function(e){return e[e.RGB=0]="RGB",e[e.HSV=1]="HSV",e}({});function v(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.RGB,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return(0,s.y)({inputRange:e,outputRange:t,colorSpace:n,cache:(0,o.v)(null),options:a})}},72400:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),o=n(28033),r=n(88548),s=n(24404),l=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,o=e.color,l=e.disabled,c=e.onPress,u=e.testID,d=e.title;return a.createElement(r.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:l,focusable:!l,onPress:c,ref:t,style:[i.button,o&&{backgroundColor:o},l&&i.buttonDisabled],testID:u},a.createElement(s.Z,{style:[i.text,l&&i.textDisabled]},d))}));l.displayName="Button";var i=o.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const c=l},76636:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),o=n(63366),r=n(67294),s=n(28033),l=n(67177),i=n(13145),c=["style"],u=i.Z&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",d=r.forwardRef(((e,t)=>{var n=e.style,i=(0,o.Z)(e,c);return r.createElement(l.Z,(0,a.Z)({},i,{ref:t,style:s.Z.compose(p.root,n)}))}));d.displayName="SafeAreaView";var p=s.Z.create({root:{paddingTop:u+"(safe-area-inset-top)",paddingRight:u+"(safe-area-inset-right)",paddingBottom:u+"(safe-area-inset-bottom)",paddingLeft:u+"(safe-area-inset-left)"}});const h=d},88548:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(63366),r=n(67294),s=n(16528),l=n(94119),i=n(28033),c=n(67177),u=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,i=e.delayPressIn,d=e.delayPressOut,h=e.delayLongPress,m=e.disabled,f=e.focusable,v=e.onLongPress,y=e.onPress,g=e.onPressIn,b=e.onPressOut,w=e.rejectResponderTermination,C=e.style,k=(0,o.Z)(e,u),P=(0,r.useRef)(null),S=(0,s.Z)(t,P),E=(0,r.useState)("0s"),x=E[0],O=E[1],Z=(0,r.useState)(null),T=Z[0],j=Z[1],V=(0,r.useCallback)(((e,t)=>{j(e),O(t?t/1e3+"s":"0s")}),[j,O]),L=(0,r.useCallback)((e=>{V(null!=n?n:.2,e)}),[n,V]),A=(0,r.useCallback)((e=>{V(null,e)}),[V]),R=(0,r.useMemo)((()=>({cancelable:!w,disabled:m,delayLongPress:h,delayPressStart:i,delayPressEnd:d,onLongPress:v,onPress:y,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;L(t?0:150),null!=g&&g(e)},onPressEnd(e){A(250),null!=b&&b(e)}})),[h,i,d,m,v,y,g,b,w,L,A]),N=(0,l.Z)(P,R);return r.createElement(c.Z,(0,a.Z)({},k,N,{accessibilityDisabled:m,focusable:!m&&!1!==f,pointerEvents:m?"none":void 0,ref:S,style:[p.root,!m&&p.actionable,C,null!=T&&{opacity:T},{transitionDuration:x}]}))}var p=i.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),h=r.memo(r.forwardRef(d));h.displayName="TouchableOpacity";const m=h}}]);