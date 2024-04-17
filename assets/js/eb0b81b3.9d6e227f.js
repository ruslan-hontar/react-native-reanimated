"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,y=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(y,r(r({ref:t},m),{},{components:n})):a.createElement(y,r({ref:t},m))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>G,contentTitle:()=>z,default:()=>J,frontMatter:()=>Y,metadata:()=>F,toc:()=>U});var a=n(83117),i=n(67294),o=n(3905);const r="container_ttGD",s="roundedStep_Tvyp",l="description_cmPV",c="stepTitle_FQH1",m="code_Wm5Z",p="codeInactive_UsiA";var d=n(86010);const u=e=>{let{children:t,title:n}=e;const[a,o]=(0,i.useState)(!1),u=(0,i.useRef)(),y=()=>{const e=window.innerHeight,t=window.pageYOffset,n=u.current.offsetTop-e/3,a=u.current.offsetTop+u.current.scrollHeight+60-e/3;o(t>n&&t<a)};return(0,i.useEffect)((()=>(y(),window.addEventListener("scroll",y,{passive:!0}),()=>{window.removeEventListener("scroll",y)})),[]),i.createElement("div",{className:(0,d.default)(r),ref:u},i.createElement("div",{className:(0,d.default)(l)},i.createElement("div",{className:(0,d.default)(s),style:a?{borderColor:"#001a72"}:{}},i.createElement("div",{className:(0,d.default)(c)},n),t[0])),i.createElement("div",{className:(0,d.default)(a?m:[m,p])},t[1]))},y="container_Zd1s",f="gifs_ufg8",g="rightArrow_ZdOg",h="downArrow_jGSi",w=e=>{let{before:t,after:n}=e;const[a,o]=(0,i.useState)(null);return(0,i.useEffect)((()=>{function e(){const{innerWidth:e}=window;o(e)}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),i.createElement("div",{className:(0,d.default)(y)},i.createElement("img",{src:t,className:(0,d.default)(f)}),a&&a>=650&&i.createElement("div",{className:(0,d.default)(g)},"\u2192"),a&&a<650&&i.createElement("div",{className:(0,d.default)(h)},"\u2193"),i.createElement("img",{src:n,className:(0,d.default)(f)}))},v={toc:[]},x="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(x,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}) {\n  return (\n    <View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title=\"Remove\" color=\"red\" onPress={onRemove} />\n    </View>\n  );\n}\n\nexport default function AnimatedListExample() {\n  const [inputValue, setInputValue] = useState('');\n  const [participantList, setParticipantList] = useState<EventParticipant[]>(\n    []\n  );\n\n  const addParticipant = () => {\n    setParticipantList(\n      [{ name: inputValue, id: Date.now().toString() }].concat(participantList)\n    );\n    setInputValue('');\n  };\n\n  const removeParticipant = (id: string) => {\n    setParticipantList(\n      participantList.filter((participant) => participant.id !== id)\n    );\n  };\n\n  return (\n    <View\n      style={[styles.listView]}>\n      <ScrollView style={[{ width: '100%' }]}>\n        {participantList.map((participant) => (\n          <Participant\n            key={participant.id}\n            name={participant.name}\n            onRemove={() => removeParticipant(participant.id)}\n          />\n        ))}\n      </ScrollView>\n\n      <View\n        style={[ styles.bottomRow]}>\n        <View\n          style={[styles.textInput]}>\n          <Text>Add participant: </Text>\n          <TextInput\n            placeholder=\"Name\"\n            value={inputValue}\n            onChangeText={setInputValue}\n          />\n        </View>\n\n        <Button\n          title=\"Add\"\n          disabled={inputValue === ''}\n          onPress={addParticipant}\n        />\n      </View>\n    </View>\n  );\n}\n")))}k.isMDXComponent=!0;const b={toc:[]},T="wrapper";function L(e){let{components:t,...n}=e;return(0,o.kt)(T,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4-8}","{4-8}":!0},"...\n<ScrollView style={[{ width: '100%' }]}>\n  {participantList.map((participant) => (\n    <Participant\n      key={participant.id}\n      name={participant.name}\n      onRemove={() => removeParticipant(participant.id)}\n    />\n  ))}\n</ScrollView>\n...\n")))}L.isMDXComponent=!0;const A={toc:[]},P="wrapper";function S(e){let{components:t,...n}=e;return(0,o.kt)(P,(0,a.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{10,14}","{10,14}":!0},'...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}) {\n  return (\n    <View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </View>\n  );\n}\n...\n')))}S.isMDXComponent=!0;const V={toc:[]},R="wrapper";function N(e){let{components:t,...n}=e;return(0,o.kt)(R,(0,a.Z)({},V,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,11,15}","{1,11,15}":!0},'import Animated from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}) {\n  return (\n    <Animated.View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}N.isMDXComponent=!0;const O={toc:[]},E="wrapper";function _(e){let{components:t,...n}=e;return(0,o.kt)(E,(0,a.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,12}","{1,12}":!0},'import Animated, {LightSpeedInLeft} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}) {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}_.isMDXComponent=!0;const j={toc:[]},D="wrapper";function C(e){let{components:t,...n}=e;return(0,o.kt)(D,(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,16}","{3,16}":!0},'import Animated, {\n  LightSpeedInLeft,\n  Layout\n} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}) {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      layout={Layout.springify()}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}C.isMDXComponent=!0;const M={toc:[]},I="wrapper";function X(e){let{components:t,...n}=e;return(0,o.kt)(I,(0,a.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,17}","{3,17}":!0},'import Animated, {\n  LightSpeedInLeft,\n  LightSpeedOutRight\n  Layout\n} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}) {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      exiting={LightSpeedOutRight}\n      layout={Layout.springify()}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}X.isMDXComponent=!0;const Z=n.p+"assets/images/before-ccd07f388857274c1860e64e5155bc9c.gif",H=n.p+"assets/images/entering-2ec23ca10dce1dad1319cc6c5e195267.gif",B=n.p+"assets/images/layout-341920cb35d6f1c27bad9e20059bdaf6.gif",W=n.p+"assets/images/after-e3e04aaf52902a396d6f5887bdc1bdb5.gif",Y={id:"layoutAnimations",title:"How to easily animate your screens and components",sidebar_label:"Layout Animations",hide_table_of_contents:!0},z=void 0,F={unversionedId:"tutorials/LayoutAnimations/layoutAnimations",id:"version-2.x/tutorials/LayoutAnimations/layoutAnimations",title:"How to easily animate your screens and components",description:"Layout Animations are available since v2.3.0",source:"@site/versioned_docs/version-2.x/tutorials/LayoutAnimations/animated_list.mdx",sourceDirName:"tutorials/LayoutAnimations",slug:"/tutorials/LayoutAnimations/layoutAnimations",permalink:"/react-native-reanimated/docs/2.x/tutorials/LayoutAnimations/layoutAnimations",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/tutorials/LayoutAnimations/animated_list.mdx",tags:[],version:"2.x",frontMatter:{id:"layoutAnimations",title:"How to easily animate your screens and components",sidebar_label:"Layout Animations",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Debugging worklets",permalink:"/react-native-reanimated/docs/2.x/guide/debugging"},next:{title:"Community",permalink:"/react-native-reanimated/docs/2.x/community"}},G={},U=[{value:"And that&#39;s all! You can see that adding layout animations to our list was super easy and the user experience is way better. You can find the full code of the animated list here.",id:"and-thats-all-you-can-see-that-adding-layout-animations-to-our-list-was-super-easy-and-the-user-experience-is-way-better-you-can-find-the-full-code-of-the-animated-list-here",level:4}],Q={toc:U},q="wrapper";function J(e){let{components:t,...n}=e;return(0,o.kt)(q,(0,a.Z)({},Q,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Layout Animations are available since v2.3.0")),(0,o.kt)("p",null,"This tutorial will help you make your screens and components more smooth by adding animations.\nWe will use a new feature from the Reanimated library - Layout Animations which lets us animate:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"components appearance"),(0,o.kt)("li",{parentName:"ul"},"components disappearance"),(0,o.kt)("li",{parentName:"ul"},"layout changes")),(0,o.kt)("p",null,"using predefined animations. There are plenty of predefined animations you can use, however,\nif you need to create more customized animation, you can easily implemented your own."),(0,o.kt)("p",null,"To give you a better understanding of how to use those animations,\nwe are gonna prettify an already existing screen - participant list, by adding layout animations to its components.\nHere you can see the effect of the changes we will make going through this tutorial."),(0,o.kt)(w,{before:Z,after:W,mdxType:"BeforeAndAfter"}),(0,o.kt)(u,{title:"Screen Introduction",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Here we have an already existing Participant list component (you can find the full code to edit yourself\xa0",(0,o.kt)("a",{href:"https://gist.github.com/jmysliv/87b15453aab173a63a4d22fcc5b1d603"},"here"),"). Let's focus on the parts that we will animate, in this case - the Participant component."),(0,o.kt)(k,{mdxType:"FullCode"})),(0,o.kt)(u,{title:"Participant component",mdxType:"TutorialStep"},(0,o.kt)("div",null,"The Participant component is responsible for displaying a list item, which we will be animating."),(0,o.kt)(L,{mdxType:"ParticipantComponent"})),(0,o.kt)(u,{title:"Participant component internals",mdxType:"TutorialStep"},(0,o.kt)("div",null,"As you can see the Participant component is wrapped in one View component, and that's the place where will be adding our animations. We can only animate components that are provided by Reanimated (e.g. Animated.View), or components we changed using createAnimatedComponent."),(0,o.kt)(S,{mdxType:"ParticipantInternals"})),(0,o.kt)(u,{title:"Step 1",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Let's import Animated from Reanimated and replace View with Animated.View, so we can add animations to our component."),(0,o.kt)(N,{mdxType:"Step1"})),(0,o.kt)(u,{title:"Step 2",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Now let's add an entering animation. There is plenty of available\xa0",(0,o.kt)("a",{href:"https://docs.swmansion.com/react-native-reanimated/docs/2.x/api/LayoutAnimations/entryAnimations"},"predefined animations"),"\xa0that we can choose from. We will go with the LightSpeedInLeft effect."),(0,o.kt)(_,{mdxType:"Step2"})),(0,o.kt)(u,{title:"Current result",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Here you can see the effect we have achieved by adding the entering animation."),(0,o.kt)("img",{src:H,style:{height:"500px",width:"auto",borderRadius:"5%"}})),(0,o.kt)(u,{title:"Step 3",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Now let's add a layout transition."),(0,o.kt)(C,{mdxType:"Step3"})),(0,o.kt)(u,{title:"Current result",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Here you can see the effect we have achieved by adding a layout transition."),(0,o.kt)("img",{src:B,style:{height:"500px",width:"auto",borderRadius:"5%"}})),(0,o.kt)(u,{title:"Step 4",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Now let's add an exiting animation. Again there are many\xa0",(0,o.kt)("a",{href:"https://docs.swmansion.com/react-native-reanimated/docs/2.x/api/LayoutAnimations/exitAnimations"},"predefined animations"),"\xa0 we can choose from. We will go with the LightSpeedOutRight effect."),(0,o.kt)(X,{mdxType:"Step4"})),(0,o.kt)("h4",{id:"and-thats-all-you-can-see-that-adding-layout-animations-to-our-list-was-super-easy-and-the-user-experience-is-way-better-you-can-find-the-full-code-of-the-animated-list-here"},"And that's all! You can see that adding layout animations to our list was super easy and the user experience is way better. You can find the full code of the animated list ",(0,o.kt)("a",{parentName:"h4",href:"https://gist.github.com/jmysliv/0056d6cd3021883ea0f2c7f4af0526b2"},"here"),"."),(0,o.kt)("center",null,(0,o.kt)("img",{src:W,height:"500px",style:{borderRadius:"5%"}})))}J.isMDXComponent=!0}}]);