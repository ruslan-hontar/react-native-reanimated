"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[4206],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||r;return t?a.createElement(f,o(o({ref:n},d),{},{components:t})):a.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={id:"declarative",title:"Declarative Animation API",sidebar_label:"Declarative Animation API"},o=void 0,s={unversionedId:"declarative",id:"version-1.x/declarative",title:"Declarative Animation API",description:"Invoking animation differs from the way it is done when using the original Animated API.",source:"@site/versioned_docs/version-1.x/declarative.md",sourceDirName:".",slug:"/declarative",permalink:"/react-native-reanimated/docs/1.x/declarative",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-1.x/declarative.md",tags:[],version:"1.x",frontMatter:{id:"declarative",title:"Declarative Animation API",sidebar_label:"Declarative Animation API"},sidebar:"version-1.x/docs",previous:{title:"Getting started",permalink:"/react-native-reanimated/docs/1.x/getting_started"},next:{title:"Examples",permalink:"/react-native-reanimated/docs/1.x/examples"}},c={},l=[{value:"Backward compatible API",id:"backward-compatible-api",level:2}],d={toc:l},m="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Invoking animation differs from the way it is done when using the original ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," API.\nHere, instead of having animation objects we operate on nodes that can perform single animation steps.\nIn order to map an animation into a value, we will make the value to be assigned to a node that among few other things will call into the animation step node. Check ",(0,i.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x/animations/timing"},(0,i.kt)("inlineCode",{parentName:"a"},"timing")),", ",(0,i.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x/animations/decay"},(0,i.kt)("inlineCode",{parentName:"a"},"decay"))," and ",(0,i.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x/animations/spring"},(0,i.kt)("inlineCode",{parentName:"a"},"spring"))," nodes documentation for some details about how animation step nodes can be configured."),(0,i.kt)("p",null,"The example below shows a component that renders:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Animated, { Easing } from 'react-native-reanimated';\n\nconst {\n  Clock,\n  Value,\n  set,\n  cond,\n  startClock,\n  clockRunning,\n  timing,\n  debug,\n  stopClock,\n  block,\n} = Animated;\n\nfunction runTiming(clock, value, dest) {\n  const state = {\n    finished: new Value(0),\n    position: new Value(0),\n    time: new Value(0),\n    frameTime: new Value(0),\n  };\n\n  const config = {\n    duration: 5000,\n    toValue: new Value(0),\n    easing: Easing.inOut(Easing.ease),\n  };\n\n  return block([\n    cond(\n      clockRunning(clock),\n      [\n        // if the clock is already running we update the toValue, in case a new dest has been passed in\n        set(config.toValue, dest),\n      ],\n      [\n        // if the clock isn't running we reset all the animation params and start the clock\n        set(state.finished, 0),\n        set(state.time, 0),\n        set(state.position, value),\n        set(state.frameTime, 0),\n        set(config.toValue, dest),\n        startClock(clock),\n      ]\n    ),\n    // we run the step here that is going to update position\n    timing(clock, state, config),\n    // if the animation is over we stop the clock\n    cond(state.finished, debug('stop clock', stopClock(clock))),\n    // we made the block return the updated position\n    state.position,\n  ]);\n}\n\nexport class AnimatedBox extends Component {\n  // we create a clock node\n  clock = new Clock();\n  // and use runTiming method defined above to create a node that is going to be mapped\n  // to the translateX transform.\n  transX = runTiming(this.clock, -120, 120);\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Animated.View\n          style={[styles.box, { transform: [{ translateX: this.transX }] }]}\n        />\n      </View>\n    );\n  }\n}\n")),(0,i.kt)("h2",{id:"backward-compatible-api"},"Backward compatible API"),(0,i.kt)("p",null,"As it might sometimes be impractical to use the API above, there's an alternative way of invoking animation, which is similar to the original ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'class Example extends Component {\n  constructor(props) {\n    super(props);\n    this._transX = new Value(0);\n    this._config = {\n      duration: 5000,\n      toValue: 120,\n      easing: Easing.inOut(Easing.ease),\n    };\n    this._anim = timing(this._transX, this._config);\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Animated.View\n          style={[styles.box, { transform: [{ translateX: this._transX }] }]}\n        />\n        <Button\n          onPress={() => {\n            this._anim.start();\n          }}\n          title="Start"\n        />\n      </View>\n    );\n  }\n}\n')),(0,i.kt)("p",null,"This API gives the possibility to use animation with original ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," API. It's also a way of running animation on some interaction without necessity or rerendering view."))}p.isMDXComponent=!0}}]);