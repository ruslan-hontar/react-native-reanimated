"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5310],{79271:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(67294);const s="collapseButton_X7H2",a="arrow_XdVJ";var i;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}const r=e=>{let{title:t,titleId:n,...s}=e;return o.createElement("svg",l({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},s),t?o.createElement("title",{id:n},t):null,i||(i=o.createElement("path",{d:"m1 1 5 5 5-5",stroke:"#001A72",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var c;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...s}=e;return o.createElement("svg",d({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},s),t?o.createElement("title",{id:n},t):null,c||(c=o.createElement("path",{d:"m1 1 5 5 5-5",stroke:"#F8F9FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var p=n(92949),u=n(86010);const f=e=>{let{label:t,labelCollapsed:n,collapsed:i,onCollapse:l,className:c}=e;const{colorMode:d}=(0,p.I)();return o.createElement("div",{className:(0,u.default)(s,c),"data-collapsed":i,onClick:()=>l()},"light"===d?o.createElement(r,{className:a}):o.createElement(m,{className:a}),o.createElement("button",null,i?n:t))}},61837:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(67294),s=n(60614);const a={container:"container_oGcb",collapseButton:"collapseButton_YVdr"};var i=n(79271);function l(e){let{src:t,showLines:n}=e;const[l,r]=(0,o.useState)(!0);if(!n)return o.createElement(s.Z,{language:"jsx"},t);const[c,d]=n,m=t.split("\n").slice(c,d+1).join("\n");return o.createElement("div",{className:a.container},o.createElement(i.Z,{label:"Collapse the full code",labelCollapsed:"Expand the full code",collapsed:l,onCollapse:()=>r(!l),className:a.collapseButton}),o.createElement(s.Z,{language:"jsx"},l?m:t))}},83760:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(67294);function s(e){let{sources:t}=e;return o.createElement("div",{style:{flexDirection:"row",justifyContent:"space-between",marginBottom:"16px",display:"flex"}},o.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},o.createElement("source",{src:t.android,type:"video/mp4"}),"Your browser does not support the video tag."),o.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},o.createElement("source",{src:t.ios,type:"video/mp4"}),"Your browser does not support the video tag."))}},9900:(e,t,n)=>{n.d(t,{Z:()=>k});var o=n(69116),s=n(67294),a=n(28033),i=n(67177),l=n(24404),r=n(70399),c=n(76636),d=n(35842),m=n(68171),p=n(10758);const u=a.Z.create({squaresContainer:{display:"flex",flexDirection:"row",gap:16},square:{display:"flex",justifyContent:"center",alignItems:"center",width:100,height:100,backgroundColor:"#f8f9ff",borderRadius:20},listContainer:{display:"flex",flexDirection:"column",gap:6},listWrapper:{borderRadius:16,backgroundColor:"#f8f9ff"},listItem:{display:"flex",alignItems:"center",flexDirection:"row",gap:2,padding:8,paddingHorizontal:32}}),f=["#fa7f7c","#b58df1","#ffe780","#82cab2"],h=[{name:"Overview",content:"You can put here \u2728 anything \u2728 you want!"},{name:"Squares",content:s.createElement(i.Z,{style:u.squaresContainer},s.createElement(i.Z,{style:u.square},s.createElement(l.Z,null,"1")),s.createElement(i.Z,{style:u.square},s.createElement(l.Z,null,"2")),s.createElement(i.Z,{style:u.square},s.createElement(l.Z,null,"3")))},{name:"Shopping list",content:s.createElement(i.Z,{style:u.listContainer},s.createElement(i.Z,{style:u.listWrapper},s.createElement(l.Z,{style:u.listItem},"\ud83c\udf4e Apple ")),s.createElement(i.Z,{style:u.listWrapper},s.createElement(l.Z,{style:u.listItem},"\ud83c\udf4c Banana")),s.createElement(i.Z,{style:u.listWrapper},s.createElement(l.Z,{style:u.listItem},"\ud83e\udd56 Bread")))}];function y(e,t){let n;return void 0===t&&(t=100),function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];clearTimeout(n),n=setTimeout((()=>{e(...s)}),t)}}const C={code:"function anonymous(){const{selectedItem,item}=this.__closure;return{fontWeight:selectedItem.value===item?'600':'400',borderBottomWidth:selectedItem.value===item?1:0};}"},b=e=>{let{item:t,index:n,visibleIndex:o,sectionCardsRef:a}=e;const i=((e,t)=>(0,d.l)(function(){const n=()=>({fontWeight:e.value===t?"600":"400",borderBottomWidth:e.value===t?1:0});return n.__closure={selectedItem:e,item:t},n.__workletHash=4737429578150,n.__initData=C,n}()))(o,n);return s.createElement(r.Z,{onPress:()=>{a.current?.scrollToIndex({index:n,animated:!0}),o.value=n},style:x.tableOfContentsElement},s.createElement(m.V,{style:[i,x.tableOfContentsElement]},t))},g=e=>{let{data:t,visibleIndex:n,sectionCardsRef:a,tableOfContentsRef:l}=e;return s.createElement(i.Z,{style:x.tableOfContents},s.createElement(o.FlashList,{horizontal:!0,showsHorizontalScrollIndicator:!1,renderItem:e=>{let{item:t,index:o}=e;return s.createElement(b,{item:t,visibleIndex:n,index:o,sectionCardsRef:a})},data:t,estimatedItemSize:52,ref:l}))},x=a.Z.create({cardsContainer:{flex:1,justifyContent:"center",height:600},flex:{flex:1},tableOfContentsElement:{padding:4,color:"#001a72",marginHorizontal:4,borderBottomColor:"#001a72",margin:8,overflow:"hidden"},tableOfContents:{top:0}}),v=e=>{let{sections:t,visibleIndex:n,sectionCardsRef:a,tableOfContentsRef:r}=e;const c=t.map((e=>350)),d=e=>{const t=e.nativeEvent?.contentOffset?.y;if(void 0!==t){const e=c.map(((e,t)=>c.slice(0,t).reduce(((e,t)=>e+t),0))).map((e=>Math.abs(e-t))),o=e.indexOf(Math.min.apply(null,e));n.value!==o&&r.current?.scrollToIndex({index:o,animated:!0}),n.value=o}};return s.createElement(i.Z,{style:x.flex},s.createElement(o.FlashList,{ref:a,estimatedItemSize:52,estimatedFirstItemOffset:0,renderItem:e=>{let{item:t}=e;return s.createElement(i.Z,null,s.createElement(l.Z,{style:I.header}," ",t.name),s.createElement(w,null,s.createElement(l.Z,{style:I.content},t.content)))},data:t,onScrollBeginDrag:d,onScrollEndDrag:d,onScroll:y(d),onMomentumScrollBegin:d,onMomentumScrollEnd:d}))},S=()=>{const e=Math.floor(Math.random()*f.length);return f[e]},w=e=>{let{children:t}=e;const[n,o]=(0,s.useState)(S());return s.createElement(i.Z,{style:[I.container,{backgroundColor:n}]},t,s.createElement(r.Z,{style:I.button,onPress:()=>o(S())},s.createElement(l.Z,{style:I.buttonText},"Toggle section color \ud83c\udfa8")))},I=a.Z.create({container:{height:350,margin:16,display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:24},header:{color:"#001a72",textAlign:"center",fontSize:24,fontWeight:"bold"},content:{color:"#001a72"},button:{backgroundColor:"#f8f9ff",padding:12,borderRadius:48},buttonText:{color:"#001a72",padding:"0.5rem"}}),k=()=>{(0,p.y)("");const e=(0,p.y)(0),t=h.map((e=>e.name)),n=(0,s.useRef)(null),o=(0,s.useRef)(null);return s.createElement(c.Z,{style:x.cardsContainer},s.createElement(g,{data:t,visibleIndex:e,sectionCardsRef:n,tableOfContentsRef:o}),s.createElement(v,{sections:h,visibleIndex:e,tableOfContentsRef:o,sectionCardsRef:n}))}},19858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var o=n(83117),s=(n(67294),n(3905)),a=n(9900),i=n(27549),l=n(83760),r=n(61837);const c={slug:"sectionlist",title:"Section List"},d=void 0,m={permalink:"/react-native-reanimated/examples/sectionlist",source:"@site/blog/section-list.md",title:"Section List",description:"Section lists allow you to organize long lists of content by dividing them with headings.",date:"2024-04-19T09:03:59.000Z",formattedDate:"April 19, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"sectionlist",title:"Section List"},prevItem:{title:"Marquee",permalink:"/react-native-reanimated/examples/marquee"}},p={authorsImageUrls:[]},u=[],f=(h="InteractiveExample",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var h;const y={toc:u},C="wrapper";function b(e){let{components:t,...n}=e;return(0,s.kt)(C,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Section lists allow you to organize long lists of content by dividing them with headings."),(0,s.kt)(f,{src:i.Z,component:(0,s.kt)(a.Z,{mdxType:"SectionList"}),mdxType:"InteractiveExample"}),(0,s.kt)("p",null,"The primary component, ",(0,s.kt)("strong",{parentName:"p"},"SectionList"),", acts as the main orchestrator of the entire Section List interface. It coordinates the rendering of the table of contents and individual content sections."),(0,s.kt)("samp",{id:"SectionList"},"Section List"),(0,s.kt)(r.Z,{src:i.Z,showLines:[150,174],mdxType:"CollapsibleCode"}),(0,s.kt)("p",null,"Within ",(0,s.kt)("strong",{parentName:"p"},"SectionList"),", there are two key components: ",(0,s.kt)("strong",{parentName:"p"},"TableOfContents")," and ",(0,s.kt)("strong",{parentName:"p"},"SectionCards"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"TableOfContents")," is responsible for rendering the list of section names as a table of contents. It receives props such as ",(0,s.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"visibleIndex"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"sectionCardsRef"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"tableOfContentsRef")," to manage navigation and synchronization between the table of contents and section content."),(0,s.kt)("samp",{id:"SectionList"},"Section List"),(0,s.kt)(r.Z,{src:i.Z,showLines:[123,148],mdxType:"CollapsibleCode"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SectionCards"),", on the other hand, manages the rendering of individual sections and their corresponding content. It receives props: ",(0,s.kt)("inlineCode",{parentName:"p"},"sections"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"visibleIndex"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"sectionCardsRef"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"tableOfContentsRef")," to render the content sections and handle scrolling interactions."),(0,s.kt)("samp",{id:"SectionList"},"Section List"),(0,s.kt)(r.Z,{src:i.Z,showLines:[198,256],mdxType:"CollapsibleCode"}),(0,s.kt)(l.Z,{sources:{android:"/react-native-reanimated/recordings/examples/section_list_android.mov",ios:"/react-native-reanimated/recordings/examples/section_list_ios.mov"},mdxType:"ExampleVideo"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"onScroll")," in ",(0,s.kt)("strong",{parentName:"p"},"SectionCards")," calculates the offset as the user scrolls through the content and determines which section is currently most visible on the screen. It is done by comparing the distance of each section from the top of the screen - it identifies the section closest to the viewport's top edge."),(0,s.kt)(r.Z,{src:i.Z,showLines:[204,227],mdxType:"CollapsibleCode"}),(0,s.kt)("p",null,"We use the ",(0,s.kt)("inlineCode",{parentName:"p"},"useSharedValue")," hook to create mutable shared values across different components. For instance, ",(0,s.kt)("inlineCode",{parentName:"p"},"selectedItem")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"visibleIndex")," are ",(0,s.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#shared-value"},"shared values")," used to manage the currently selected section and its visibility index."),(0,s.kt)(r.Z,{src:i.Z,showLines:[151,152],mdxType:"CollapsibleCode"}),(0,s.kt)("p",null,"Additionally, we use ",(0,s.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook to define ",(0,s.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/core/useAnimatedStyle/"},"animated styles")," based on the shared values. Then, we apply these animated styles to components to create dynamic visual effects, such as changing font weights and adding bottom borders."),(0,s.kt)(r.Z,{src:i.Z,showLines:[96,99],mdxType:"CollapsibleCode"}),(0,s.kt)("p",null,"To enable interaction with the FlashList component - such as scrolling to specific sections, the code utilizes variables created using ",(0,s.kt)("inlineCode",{parentName:"p"},"useRef")," such as ",(0,s.kt)("inlineCode",{parentName:"p"},"sectionCardsRef")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"tableContentsRef")),(0,s.kt)(r.Z,{src:i.Z,showLines:[154,155],mdxType:"CollapsibleCode"}),(0,s.kt)("p",null,"Here, the ",(0,s.kt)("inlineCode",{parentName:"p"},"debounce")," function throttles the invocations of ",(0,s.kt)("inlineCode",{parentName:"p"},"onScroll")," event handler which improves the perfomrance."),(0,s.kt)(r.Z,{src:i.Z,showLines:[85,93],mdxType:"CollapsibleCode"}))}b.isMDXComponent=!0},27549:(e,t,n)=>{n.d(t,{Z:()=>o});const o="import { FlashList } from '@shopify/flash-list';\nimport React, { useRef, useState } from 'react';\nimport { Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useSharedValue,\n} from 'react-native-reanimated';\n\nconst exampleStyles = StyleSheet.create({\n  squaresContainer: {\n    display: 'flex',\n    flexDirection: 'row',\n    gap: 16,\n  },\n  square: {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    width: 100,\n    height: 100,\n    backgroundColor: '#f8f9ff',\n    borderRadius: 20,\n  },\n  listContainer: {\n    display: 'flex',\n    flexDirection: 'column',\n    gap: 6,\n  },\n  listWrapper: {\n    borderRadius: 16,\n    backgroundColor: '#f8f9ff',\n  },\n  listItem: {\n    display: 'flex',\n    alignItems: 'center',\n    flexDirection: 'row',\n    gap: 2,\n    padding: 8,\n    paddingHorizontal: 32,\n  },\n});\n\nconst SECTION_HEIGHT = 350;\n\nconst BRAND_COLORS = ['#fa7f7c', '#b58df1', '#ffe780', '#82cab2'];\n\nconst SECTIONS = [\n  {\n    name: 'Overview',\n    content: 'You can put here \u2728 anything \u2728 you want!',\n  },\n  {\n    name: 'Squares',\n    content: (\n      <View style={exampleStyles.squaresContainer}>\n        <View style={exampleStyles.square}>\n          <Text>1</Text>\n        </View>\n        <View style={exampleStyles.square}>\n          <Text>2</Text>\n        </View>\n        <View style={exampleStyles.square}>\n          <Text>3</Text>\n        </View>\n      </View>\n    ),\n  },\n  {\n    name: 'Shopping list',\n    content: (\n      <View style={exampleStyles.listContainer}>\n        <View style={exampleStyles.listWrapper}>\n          <Text style={exampleStyles.listItem}>\ud83c\udf4e Apple </Text>\n        </View>\n        <View style={exampleStyles.listWrapper}>\n          <Text style={exampleStyles.listItem}>\ud83c\udf4c Banana</Text>\n        </View>\n        <View style={exampleStyles.listWrapper}>\n          <Text style={exampleStyles.listItem}>\ud83e\udd56 Bread</Text>\n        </View>\n      </View>\n    ),\n  },\n];\n\nfunction debounce(func, timeout = 100) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      func(...args);\n    }, timeout);\n  };\n}\n\nconst useSelectedStyle = (selectedItem, item) =>\n  useAnimatedStyle(() => ({\n    fontWeight: selectedItem.value === item ? '600' : '400',\n    borderBottomWidth: selectedItem.value === item ? 1 : 0,\n  }));\n\nconst TableOfContentsElement = ({\n  item,\n  index,\n  visibleIndex,\n  sectionCardsRef,\n}) => {\n  const style = useSelectedStyle(visibleIndex, index);\n\n  return (\n    <Pressable\n      onPress={() => {\n        sectionCardsRef.current?.scrollToIndex({ index, animated: true });\n        visibleIndex.value = index;\n      }}\n      style={sectionListStyles.tableOfContentsElement}>\n      <Animated.Text style={[style, sectionListStyles.tableOfContentsElement]}>\n        {item}\n      </Animated.Text>\n    </Pressable>\n  );\n};\n\nconst TableOfContents = ({\n  data,\n  visibleIndex,\n  sectionCardsRef,\n  tableOfContentsRef,\n}) => {\n  return (\n    <View style={sectionListStyles.tableOfContents}>\n      <FlashList\n        horizontal\n        showsHorizontalScrollIndicator={false}\n        renderItem={({ item, index }) => (\n          <TableOfContentsElement\n            item={item}\n            visibleIndex={visibleIndex}\n            index={index}\n            sectionCardsRef={sectionCardsRef}\n          />\n        )}\n        data={data}\n        estimatedItemSize={52}\n        ref={tableOfContentsRef}\n      />\n    </View>\n  );\n};\n\nconst SectionList = () => {\n  const selectedItem = useSharedValue('');\n  const visibleIndex = useSharedValue(0);\n  const sectionNames = SECTIONS.map((s) => s.name);\n  const sectionCardsRef = useRef(null);\n  const tableOfContentsRef = useRef(null);\n\n  return (\n    <SafeAreaView style={sectionListStyles.cardsContainer}>\n      <TableOfContents\n        data={sectionNames}\n        visibleIndex={visibleIndex}\n        sectionCardsRef={sectionCardsRef}\n        tableOfContentsRef={tableOfContentsRef}\n      />\n      <SectionCards\n        sections={SECTIONS}\n        visibleIndex={visibleIndex}\n        tableOfContentsRef={tableOfContentsRef}\n        sectionCardsRef={sectionCardsRef}\n      />\n    </SafeAreaView>\n  );\n};\n\nconst sectionListStyles = StyleSheet.create({\n  cardsContainer: {\n    flex: 1,\n    justifyContent: 'center',\n    height: 600,\n  },\n  flex: {\n    flex: 1,\n  },\n  tableOfContentsElement: {\n    padding: 4,\n    color: '#001a72',\n    marginHorizontal: 4,\n    borderBottomColor: '#001a72',\n    margin: 8,\n    overflow: 'hidden',\n  },\n  tableOfContents: {\n    top: 0,\n  },\n});\n\nconst SectionCards = ({\n  sections,\n  visibleIndex,\n  sectionCardsRef,\n  tableOfContentsRef,\n}) => {\n  const heights = sections.map((_) => SECTION_HEIGHT);\n\n  const getOffsetStarts = () =>\n    heights.map((v, i) => heights.slice(0, i).reduce((x, acc) => x + acc, 0));\n\n  const onScroll = (event) => {\n    const offset = event.nativeEvent?.contentOffset?.y;\n\n    if (offset !== undefined) {\n      const distancesFromTop = getOffsetStarts().map((v) =>\n        Math.abs(v - offset)\n      );\n      const newIndex = distancesFromTop.indexOf(\n        Math.min.apply(null, distancesFromTop)\n      );\n      if (visibleIndex.value !== newIndex) {\n        tableOfContentsRef.current?.scrollToIndex({\n          index: newIndex,\n          animated: true,\n        });\n      }\n      visibleIndex.value = newIndex;\n    }\n  };\n\n  const renderItem = ({ item }) => {\n    return (\n      <View>\n        <Text style={sectionCardStyles.header}> {item.name}</Text>\n        <SectionCardsElement>\n          <Text style={sectionCardStyles.content}>{item.content}</Text>\n        </SectionCardsElement>\n      </View>\n    );\n  };\n\n  return (\n    <View style={sectionListStyles.flex}>\n      <FlashList\n        ref={sectionCardsRef}\n        estimatedItemSize={52}\n        estimatedFirstItemOffset={0}\n        renderItem={renderItem}\n        data={sections}\n        onScrollBeginDrag={onScroll}\n        onScrollEndDrag={onScroll}\n        onScroll={debounce(onScroll)}\n        onMomentumScrollBegin={onScroll}\n        onMomentumScrollEnd={onScroll}\n      />\n    </View>\n  );\n};\n\nconst getRandomBrandColor = () => {\n  const colorIndex = Math.floor(Math.random() * BRAND_COLORS.length);\n  return BRAND_COLORS[colorIndex];\n};\n\nconst SectionCardsElement = ({ children }) => {\n  const [backgroundColor, setBackgroundColor] = useState(getRandomBrandColor());\n\n  return (\n    <View style={[sectionCardStyles.container, { backgroundColor }]}>\n      {children}\n      <Pressable\n        style={sectionCardStyles.button}\n        onPress={() => setBackgroundColor(getRandomBrandColor())}>\n        <Text style={sectionCardStyles.buttonText}>\n          Toggle section color \ud83c\udfa8\n        </Text>\n      </Pressable>\n    </View>\n  );\n};\n\nconst sectionCardStyles = StyleSheet.create({\n  container: {\n    height: SECTION_HEIGHT,\n    margin: 16,\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'space-evenly',\n    borderRadius: 24,\n  },\n  header: {\n    color: '#001a72',\n    textAlign: 'center',\n    fontSize: 24,\n    fontWeight: 'bold',\n  },\n  content: {\n    color: '#001a72',\n  },\n  button: {\n    backgroundColor: '#f8f9ff',\n    padding: 12,\n    borderRadius: 48,\n  },\n  buttonText: {\n    color: '#001a72',\n    padding: '0.5rem',\n  },\n});\n\nexport default SectionList;\n"}}]);