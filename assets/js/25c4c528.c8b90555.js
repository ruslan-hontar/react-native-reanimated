"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[816],{83760:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{sources:t}=e;return a.createElement("div",{style:{flexDirection:"row",justifyContent:"space-between",marginBottom:"16px",display:"flex"}},a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},a.createElement("source",{src:t.android,type:"video/mp4"}),"Your browser does not support the video tag."),a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},a.createElement("source",{src:t.ios,type:"video/mp4"}),"Your browser does not support the video tag."))}},61516:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),r=n(67177),i=n(24404),o=n(28033),l=n(76636),s=n(70399),d=n(35842),c=n(74306),p=n(6328),u=n(49638),m=n(10758);const f=()=>a.createElement(r.Z,{style:g.card},a.createElement(i.Z,{style:g.text},"Regular content \u2728")),g=o.Z.create({card:{flex:1,backgroundColor:"#b6cff7",borderRadius:16,justifyContent:"center",alignItems:"center"},text:{color:"#001a72"}}),y=()=>a.createElement(r.Z,{style:h.card},a.createElement(i.Z,{style:h.text},"Flipped content \ud83d\ude80")),h=o.Z.create({card:{flex:1,backgroundColor:"#baeee5",borderRadius:16,justifyContent:"center",alignItems:"center"},text:{color:"#001a72"}}),C={code:'function anonymous(){const{interpolate,isFlipped,withTiming,duration,isDirectionX}=this.__closure;const spinValue=interpolate(Number(isFlipped.value),[0,1],[0,180]);const rotateValue=withTiming(spinValue+"deg",{duration:duration});return{transform:[isDirectionX?{rotateX:rotateValue}:{rotateY:rotateValue}]};}'},w={code:'function anonymous(){const{interpolate,isFlipped,withTiming,duration,isDirectionX}=this.__closure;const spinValue=interpolate(Number(isFlipped.value),[0,1],[180,360]);const rotateValue=withTiming(spinValue+"deg",{duration:duration});return{transform:[isDirectionX?{rotateX:rotateValue}:{rotateY:rotateValue}]};}'},b=e=>{let{isFlipped:t,cardStyle:n,direction:i="y",duration:o=500,RegularContent:l,FlippedContent:s}=e;const m="x"===i,f=(0,d.l)(function(){const e=function(){const e=(0,c.sX)(Number(t.value),[0,1],[0,180]),n=(0,p.j)(`${e}deg`,{duration:o});return{transform:[m?{rotateX:n}:{rotateY:n}]}};return e.__closure={interpolate:c.sX,isFlipped:t,withTiming:p.j,duration:o,isDirectionX:m},e.__workletHash=0xfaf2ecc5110,e.__initData=C,e}()),g=(0,d.l)(function(){const e=function(){const e=(0,c.sX)(Number(t.value),[0,1],[180,360]),n=(0,p.j)(`${e}deg`,{duration:o});return{transform:[m?{rotateX:n}:{rotateY:n}]}};return e.__closure={interpolate:c.sX,isFlipped:t,withTiming:p.j,duration:o,isDirectionX:m},e.__workletHash=9122135380725,e.__initData=w,e}());return a.createElement(r.Z,null,a.createElement(u.n,{style:[x.regularCard,n,f]},l),a.createElement(u.n,{style:[x.flippedCard,n,g]},s))},x=o.Z.create({regularCard:{position:"absolute",zIndex:1},flippedCard:{backfaceVisibility:"hidden",zIndex:2}});function v(){const e=(0,m.y)(!1);return a.createElement(l.Z,{style:k.container},a.createElement(b,{isFlipped:e,cardStyle:k.flipCard,FlippedContent:a.createElement(y,null),RegularContent:a.createElement(f,null)}),a.createElement(r.Z,{style:k.buttonContainer},a.createElement(s.Z,{style:k.toggleButton,onPress:()=>{e.value=!e.value}},a.createElement(i.Z,{style:k.toggleButtonText},"Toggle card"))))}const k=o.Z.create({container:{flex:1,height:300,alignItems:"center",justifyContent:"center"},buttonContainer:{marginTop:16,justifyContent:"center",alignItems:"center"},toggleButton:{backgroundColor:"#b58df1",padding:12,borderRadius:48},toggleButtonText:{color:"#fff",textAlign:"center"},flipCard:{width:170,height:200}})},35523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>C,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(61516),o=n(29313),l=n(83760);const s={slug:"flipCard",title:"Flip Card"},d=void 0,c={permalink:"/react-native-reanimated/examples/flipCard",source:"@site/blog/flip-card.md",title:"Flip Card",description:"Flip card allows you to display different content depending on whether the card is flipped or not. It can be especially useful when you do not want to display some data immediately after entering the screen (e.g. secure data) and only after fulfilling a certain condition or performing an action.",date:"2024-05-27T17:24:20.000Z",formattedDate:"May 27, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"flipCard",title:"Flip Card"},prevItem:{title:"Bottom Sheet",permalink:"/react-native-reanimated/examples/bottomsheet"},nextItem:{title:"Marquee",permalink:"/react-native-reanimated/examples/marquee"}},p={authorsImageUrls:[]},u=[],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},f=m("InteractiveExample"),g=m("CollapsibleCode"),y={toc:u},h="wrapper";function C(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Flip card allows you to display different content depending on whether the card is flipped or not. It can be especially useful when you do not want to display some data immediately after entering the screen (e.g. secure data) and only after fulfilling a certain condition or performing an action."),(0,r.kt)(f,{src:o.Z,component:i.Z,mdxType:"InteractiveExample"}),(0,r.kt)("p",null,"For storing information about whether the card is flipped or not we use ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSharedValue")," hook. Using shared values helps to prevent unnecessary re-renders."),(0,r.kt)(g,{src:o.Z,showLines:[117,117],mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"This allows us to ",(0,r.kt)("a",{parentName:"p",href:"/docs/utilities/interpolate"},"interpolate")," values between 0-180 and 180-360 degrees, depending on whether the card is flipped or not. In addition, we use ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withTiming"},"withTiming")," util which makes our animation smooth."),(0,r.kt)(g,{src:o.Z,showLines:[62,64],mdxType:"CollapsibleCode"}),(0,r.kt)(l.Z,{sources:{android:"/react-native-reanimated/recordings/examples/flip_card_android.mov",ios:"/react-native-reanimated/recordings/examples/flip_card_ios.mov"},mdxType:"ExampleVideo"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"FlipCard")," component accepts several props: ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," allows you to change the duration of the animation, setting ",(0,r.kt)("inlineCode",{parentName:"p"},"direction")," to the value ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," allows you to change the direction of our animation, ",(0,r.kt)("strong",{parentName:"p"},"RegularContent")," and ",(0,r.kt)("strong",{parentName:"p"},"FlippedContent")," give ability to display different content for flipped and non flipped variants."),(0,r.kt)("samp",{id:"FlipCard"},"Flip Card"),(0,r.kt)(g,{src:o.Z,showLines:[51,103],mdxType:"CollapsibleCode"}))}C.isMDXComponent=!0},29313:(e,t,n)=>{n.d(t,{Z:()=>a});const a="import React from 'react';\nimport { Pressable, SafeAreaView, View, StyleSheet, Text } from 'react-native';\nimport Animated, {\n  interpolate,\n  useAnimatedStyle,\n  useSharedValue,\n  withTiming,\n} from 'react-native-reanimated';\n\nconst RegularContent = () => {\n  return (\n    <View style={regularContentStyles.card}>\n      <Text style={regularContentStyles.text}>Regular content \u2728</Text>\n    </View>\n  );\n};\n\nconst regularContentStyles = StyleSheet.create({\n  card: {\n    flex: 1,\n    backgroundColor: '#b6cff7',\n    borderRadius: 16,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  text: {\n    color: '#001a72',\n  },\n});\n\nconst FlippedContent = () => {\n  return (\n    <View style={flippedContentStyles.card}>\n      <Text style={flippedContentStyles.text}>Flipped content \ud83d\ude80</Text>\n    </View>\n  );\n};\n\nconst flippedContentStyles = StyleSheet.create({\n  card: {\n    flex: 1,\n    backgroundColor: '#baeee5',\n    borderRadius: 16,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  text: {\n    color: '#001a72',\n  },\n});\n\nconst FlipCard = ({\n  isFlipped,\n  cardStyle,\n  direction = 'y',\n  duration = 500,\n  RegularContent,\n  FlippedContent,\n}) => {\n  const isDirectionX = direction === 'x';\n\n  const regularCardAnimatedStyle = useAnimatedStyle(() => {\n    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);\n    const rotateValue = withTiming(`${spinValue}deg`, { duration });\n\n    return {\n      transform: [\n        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },\n      ],\n    };\n  });\n\n  const flippedCardAnimatedStyle = useAnimatedStyle(() => {\n    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);\n    const rotateValue = withTiming(`${spinValue}deg`, { duration });\n\n    return {\n      transform: [\n        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },\n      ],\n    };\n  });\n\n  return (\n    <View>\n      <Animated.View\n        style={[\n          flipCardStyles.regularCard,\n          cardStyle,\n          regularCardAnimatedStyle,\n        ]}>\n        {RegularContent}\n      </Animated.View>\n      <Animated.View\n        style={[\n          flipCardStyles.flippedCard,\n          cardStyle,\n          flippedCardAnimatedStyle,\n        ]}>\n        {FlippedContent}\n      </Animated.View>\n    </View>\n  );\n};\n\nconst flipCardStyles = StyleSheet.create({\n  regularCard: {\n    position: 'absolute',\n    zIndex: 1,\n  },\n  flippedCard: {\n    backfaceVisibility: 'hidden',\n    zIndex: 2,\n  },\n});\n\nexport default function App() {\n  const isFlipped = useSharedValue(false);\n\n  const handlePress = () => {\n    isFlipped.value = !isFlipped.value;\n  };\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <FlipCard\n        isFlipped={isFlipped}\n        cardStyle={styles.flipCard}\n        FlippedContent={<FlippedContent />}\n        RegularContent={<RegularContent />}\n      />\n      <View style={styles.buttonContainer}>\n        <Pressable style={styles.toggleButton} onPress={handlePress}>\n          <Text style={styles.toggleButtonText}>Toggle card</Text>\n        </Pressable>\n      </View>\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    height: 300,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  buttonContainer: {\n    marginTop: 16,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  toggleButton: {\n    backgroundColor: '#b58df1',\n    padding: 12,\n    borderRadius: 48,\n  },\n  toggleButtonText: {\n    color: '#fff',\n    textAlign: 'center',\n  },\n  flipCard: {\n    width: 170,\n    height: 200,\n  },\n});\n"}}]);