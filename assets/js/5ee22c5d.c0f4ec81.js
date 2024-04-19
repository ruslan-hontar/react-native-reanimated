"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4893],{79271:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(67294);const a="collapseButton_X7H2",r="arrow_XdVJ";var s;function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}const l=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",i({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,s||(s=o.createElement("path",{d:"m1 1 5 5 5-5",stroke:"#001A72",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var c;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",d({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,c||(c=o.createElement("path",{d:"m1 1 5 5 5-5",stroke:"#F8F9FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var m=n(92949),p=n(86010);const h=e=>{let{label:t,labelCollapsed:n,collapsed:s,onCollapse:i,className:c}=e;const{colorMode:d}=(0,m.I)();return o.createElement("div",{className:(0,p.default)(a,c),"data-collapsed":s,onClick:()=>i()},"light"===d?o.createElement(l,{className:r}):o.createElement(u,{className:r}),o.createElement("button",null,s?n:t))}},61837:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(60614);const r={container:"container_oGcb",collapseButton:"collapseButton_YVdr"};var s=n(79271);function i(e){let{src:t,showLines:n}=e;const[i,l]=(0,o.useState)(!0);if(!n)return o.createElement(a.Z,{language:"jsx"},t);const[c,d]=n,u=t.split("\n").slice(c,d+1).join("\n");return o.createElement("div",{className:r.container},o.createElement(s.Z,{label:"Collapse the full code",labelCollapsed:"Expand the full code",collapsed:i,onCollapse:()=>l(!i),className:r.collapseButton}),o.createElement(a.Z,{language:"jsx"},i?u:t))}},83760:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294);function a(e){let{sources:t}=e;return o.createElement("div",{style:{flexDirection:"row",justifyContent:"space-between",marginBottom:"16px",display:"flex"}},o.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},o.createElement("source",{src:t.android,type:"video/mp4"}),"Your browser does not support the video tag."),o.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},o.createElement("source",{src:t.ios,type:"video/mp4"}),"Your browser does not support the video tag."))}},13505:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(67294),a=n(88548),r=n(28033),s=n(76636),i=n(67177),l=n(70399),c=n(24404),d=n(10758),u=n(56389),m=n(6328),p=n(35842),h=n(65641),g=n(49638);const y={code:"function anonymous(){const{withTiming,isOpen,duration}=this.__closure;return withTiming(isOpen.value?0:1,{duration:duration});}"},f={code:"function anonymous(){const{progress,height}=this.__closure;return{transform:[{translateY:progress.value*2*height.value}]};}"},b={code:"function anonymous(){const{progress,isOpen,withDelay,duration,withTiming}=this.__closure;return{opacity:1-progress.value,zIndex:isOpen.value?1:withDelay(duration,withTiming(-1,{duration:0}))};}"};function v(e){let{isOpen:t,toggleSheet:n,duration:r=500,children:s}=e;const i=(0,d.y)(0),l=(0,u.o)(function(){const e=()=>(0,m.j)(t.value?0:1,{duration:r});return e.__closure={withTiming:m.j,isOpen:t,duration:r},e.__workletHash=0x98fa114ec52,e.__initData=y,e}()),c=(0,p.l)(function(){const e=()=>({transform:[{translateY:2*l.value*i.value}]});return e.__closure={progress:l,height:i},e.__workletHash=1721792371703,e.__initData=f,e}()),v=(0,p.l)(function(){const e=()=>({opacity:1-l.value,zIndex:t.value?1:(0,h.p)(r,(0,m.j)(-1,{duration:0}))});return e.__closure={progress:l,isOpen:t,withDelay:h.p,duration:r,withTiming:m.j},e.__workletHash=0xc83f4a1c74d,e.__initData=b,e}());return o.createElement(o.Fragment,null,o.createElement(g.n,{style:[w.backdrop,v]},o.createElement(a.Z,{style:k.flex,onPress:n})),o.createElement(g.n,{onLayout:e=>{i.value=e.nativeEvent.layout.height},style:[w.sheet,c]},s))}const w=r.Z.create({sheet:{backgroundColor:"#f8f9ff",padding:16,paddingRight:"2rem",paddingLeft:"2rem",height:150,width:"100%",position:"absolute",bottom:0,borderTopRightRadius:20,borderTopLeftRadius:20,zIndex:2,alignItems:"center",justifyContent:"center"},backdrop:{...r.Z.absoluteFillObject,backgroundColor:"rgba(0, 0, 0, 0.3)"}});function x(){const e=(0,d.y)(!1),t=()=>{e.value=!e.value};return o.createElement(s.Z,{style:k.container},o.createElement(i.Z,{style:k.safeArea},o.createElement(i.Z,{style:k.flex}),o.createElement(l.Z,{style:k.toggleButton,onPress:t},o.createElement(c.Z,{style:k.toggleButtonText},"Toggle bottom sheet")),o.createElement(i.Z,{style:k.flex})),o.createElement(v,{isOpen:e,toggleSheet:t},o.createElement(c.Z,{style:k.bottomSheetContent},"Discover the indispensable convenience of a bottom sheet in mobile app. Seamlessly integrated, it provides quick access to supplementary features and refined details."),o.createElement(i.Z,{style:k.buttonContainer},o.createElement(l.Z,{style:k.bottomSheetButton},o.createElement(c.Z,{style:k.bottomSheetButtonText},"Read more")))))}const k=r.Z.create({flex:{flex:1},container:{flex:1,height:250},buttonContainer:{marginTop:16,display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around"},toggleButton:{backgroundColor:"#b58df1",padding:12,borderRadius:48},toggleButtonText:{color:"white",padding:"0.5rem"},safeArea:{alignItems:"center",justifyContent:"center",flex:1},bottomSheetButton:{display:"flex",flexDirection:"row",alignItems:"center",gap:8,borderBottomWidth:1,borderBottomColor:"#001a72",paddingBottom:2},bottomSheetButtonText:{fontWeight:600,color:"#001a72"},bottomSheetContent:{color:"#001a72"}})},74996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var o=n(83117),a=(n(67294),n(3905)),r=n(13505),s=n(55964),i=n(83760),l=n(61837);const c={slug:"bottomsheet",title:"Bottom Sheet"},d=void 0,u={permalink:"/react-native-reanimated/examples/bottomsheet",source:"@site/blog/bottom-sheet.md",title:"Bottom Sheet",description:"Bottom sheets are surfaces containing supplementary content, anchored to the bottom of the screen. They can provide users with quick access to contextual information, actions, or settings without interrupting their current workflow.",date:"2024-04-19T09:03:59.000Z",formattedDate:"April 19, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"bottomsheet",title:"Bottom Sheet"},prevItem:{title:"Accordion",permalink:"/react-native-reanimated/examples/accordion"},nextItem:{title:"Marquee",permalink:"/react-native-reanimated/examples/marquee"}},m={authorsImageUrls:[]},p=[],h=(g="InteractiveExample",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var g;const y={toc:p},f="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bottom sheets are surfaces containing supplementary content, anchored to the bottom of the screen. They can provide users with quick access to contextual information, actions, or settings without interrupting their current workflow."),(0,a.kt)(h,{src:s.Z,component:(0,a.kt)(r.Z,{mdxType:"BottomSheet"}),mdxType:"InteractiveExample"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"BottomSheet")," component accepts props such as ",(0,a.kt)("inlineCode",{parentName:"p"},"isOpen")," - a ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," indicating whether the bottom sheet is open or closed, ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleSheet")," - a function to toggle the visibility of the bottom sheet, and an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"duration")," for animation."),(0,a.kt)("samp",{id:"BottomSheet"},"Bottom Sheet"),(0,a.kt)(l.Z,{src:s.Z,showLines:[17,48],mdxType:"CollapsibleCode"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," shared value is used to track the height of the bottom sheet, while the ",(0,a.kt)("inlineCode",{parentName:"p"},"progress")," derived value interpolates between 0 and 1 based on the state of ",(0,a.kt)("inlineCode",{parentName:"p"},"isOpen"),", controlling the animation of the bottom sheet."),(0,a.kt)(i.Z,{sources:{android:"/react-native-reanimated/recordings/examples/bottom_sheet_android.mov",ios:"/react-native-reanimated/recordings/examples/bottom_sheet_ios.mov"},mdxType:"ExampleVideo"}),(0,a.kt)(l.Z,{src:s.Z,showLines:[18,21],mdxType:"CollapsibleCode"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook helps in creating ",(0,a.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/core/useAnimatedStyle/"},"animated styles")," based on shared values. These styles are then applied to ",(0,a.kt)("strong",{parentName:"p"},"BottomSheet")," to make it visually dynamic by adding backdrop and translating bottom sheet to the top."),(0,a.kt)(l.Z,{src:s.Z,showLines:[23,32],mdxType:"CollapsibleCode"}))}b.isMDXComponent=!0},55964:(e,t,n)=>{n.d(t,{Z:()=>o});const o="import React from 'react';\nimport {\n  Pressable,\n  SafeAreaView,\n  StyleSheet,\n  Text,\n  View,\n  TouchableOpacity,\n} from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  useDerivedValue,\n  withDelay,\n  withTiming,\n} from 'react-native-reanimated';\n\nfunction BottomSheet({ isOpen, toggleSheet, duration = 500, children }) {\n  const height = useSharedValue(0);\n  const progress = useDerivedValue(() =>\n    withTiming(isOpen.value ? 0 : 1, { duration })\n  );\n\n  const sheetStyle = useAnimatedStyle(() => ({\n    transform: [{ translateY: progress.value * 2 * height.value }],\n  }));\n\n  const backdropStyle = useAnimatedStyle(() => ({\n    opacity: 1 - progress.value,\n    zIndex: isOpen.value\n      ? 1\n      : withDelay(duration, withTiming(-1, { duration: 0 })),\n  }));\n\n  return (\n    <>\n      <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>\n        <TouchableOpacity style={styles.flex} onPress={toggleSheet} />\n      </Animated.View>\n      <Animated.View\n        onLayout={(e) => {\n          height.value = e.nativeEvent.layout.height;\n        }}\n        style={[sheetStyles.sheet, sheetStyle]}>\n        {children}\n      </Animated.View>\n    </>\n  );\n}\n\nconst sheetStyles = StyleSheet.create({\n  sheet: {\n    backgroundColor: '#f8f9ff',\n    padding: 16,\n    paddingRight: '2rem',\n    paddingLeft: '2rem',\n    height: 150,\n    width: '100%',\n    position: 'absolute',\n    bottom: 0,\n    borderTopRightRadius: 20,\n    borderTopLeftRadius: 20,\n    zIndex: 2,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  backdrop: {\n    ...StyleSheet.absoluteFillObject,\n    backgroundColor: 'rgba(0, 0, 0, 0.3)',\n  },\n});\n\nexport default function App() {\n  const isOpen = useSharedValue(false);\n\n  const toggleSheet = () => {\n    isOpen.value = !isOpen.value;\n  };\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <View style={styles.safeArea}>\n        <View style={styles.flex} />\n        <Pressable style={styles.toggleButton} onPress={toggleSheet}>\n          <Text style={styles.toggleButtonText}>Toggle bottom sheet</Text>\n        </Pressable>\n        <View style={styles.flex} />\n      </View>\n      <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>\n        <Text style={styles.bottomSheetContent}>\n          Discover the indispensable convenience of a bottom sheet in mobile\n          app. Seamlessly integrated, it provides quick access to supplementary\n          features and refined details.\n        </Text>\n        <View style={styles.buttonContainer}>\n          <Pressable style={styles.bottomSheetButton}>\n            <Text style={styles.bottomSheetButtonText}>Read more</Text>\n          </Pressable>\n        </View>\n      </BottomSheet>\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  flex: {\n    flex: 1,\n  },\n  container: {\n    flex: 1,\n    height: 250,\n  },\n  buttonContainer: {\n    marginTop: 16,\n    display: 'flex',\n    flexDirection: 'row',\n    width: '100%',\n    justifyContent: 'space-around',\n  },\n  toggleButton: {\n    backgroundColor: '#b58df1',\n    padding: 12,\n    borderRadius: 48,\n  },\n  toggleButtonText: {\n    color: 'white',\n    padding: '0.5rem',\n  },\n  safeArea: {\n    alignItems: 'center',\n    justifyContent: 'center',\n    flex: 1,\n  },\n  bottomSheetButton: {\n    display: 'flex',\n    flexDirection: 'row',\n    alignItems: 'center',\n    gap: 8,\n    borderBottomWidth: 1,\n    borderBottomColor: '#001a72',\n    paddingBottom: 2,\n  },\n  bottomSheetButtonText: {\n    fontWeight: 600,\n    color: '#001a72',\n  },\n  bottomSheetContent: {\n    color: '#001a72',\n  },\n});\n"}}]);