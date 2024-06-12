"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[7477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={id:"useAnimatedSensor",title:"useAnimatedSensor",sidebar_label:"useAnimatedSensor"},o=void 0,l={unversionedId:"api/hooks/useAnimatedSensor",id:"version-2.x/api/hooks/useAnimatedSensor",title:"useAnimatedSensor",description:"useAnimatedSensor is available since v2.5.0",source:"@site/versioned_docs/version-2.x/api/hooks/useAnimatedSensor.md",sourceDirName:"api/hooks",slug:"/api/hooks/useAnimatedSensor",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedSensor",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/hooks/useAnimatedSensor.md",tags:[],version:"2.x",frontMatter:{id:"useAnimatedSensor",title:"useAnimatedSensor",sidebar_label:"useAnimatedSensor"},sidebar:"docs",previous:{title:"useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedScrollHandler"},next:{title:"useAnimatedStyle",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useAnimatedStyle"}},s={},m=[{value:"Arguments",id:"arguments",level:3},{value:"<code>sensorType</code> - [SensorType]",id:"sensortype---sensortype",level:4},{value:"<code>config</code> - [UserConfig]",id:"config---userconfig",level:4},{value:"Returns",id:"returns",level:3},{value:"Types",id:"types",level:3},{value:"<code>AnimatedSensor: [object]</code>",id:"animatedsensor-object",level:4},{value:"<code>SensorType: [enum]</code>",id:"sensortype-enum",level:4},{value:"<code>UserConfig: [object]</code>",id:"userconfig-object",level:4},{value:"<code>IOSReferenceFrame: [enum]</code>",id:"iosreferenceframe-enum",level:4},{value:"<code>3DVector: [object]</code>",id:"3dvector-object",level:4},{value:"<code>RotationVector: [object]</code>",id:"rotationvector-object",level:4},{value:"<code>InterfaceOrientation: [enum]</code>",id:"interfaceorientation-enum",level:4},{value:"Example",id:"example",level:3},{value:"Live example",id:"live-example",level:3},{value:"Tips",id:"tips",level:3}],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"useAnimatedSensor is available since v2.5.0")),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedSensor")," hook, you can easily create cool interactive animations based on data from sensors in the device such as gyroscope, accelerometer etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useAnimatedSensor(sensorType: [SensorType], config?: [UserConfig]) -> [AnimatedSensor]\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"sensortype---sensortype"},(0,r.kt)("inlineCode",{parentName:"h4"},"sensorType")," - [",(0,r.kt)("a",{parentName:"h4",href:"#sensortype-enum"},"SensorType"),"]"),(0,r.kt)("p",null,"You can select the sensor available in [",(0,r.kt)("a",{parentName:"p",href:"#sensortype-enum"},"SensorType"),"] enum."),(0,r.kt)("h4",{id:"config---userconfig"},(0,r.kt)("inlineCode",{parentName:"h4"},"config")," - [",(0,r.kt)("a",{parentName:"h4",href:"#userconfig-object"},"UserConfig"),"]"),(0,r.kt)("p",null,"Optionally, you can pass configuration to customize the sensor behavior."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"Hook ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedSensor")," returns an instance of [",(0,r.kt)("a",{parentName:"p",href:"#animatedsensor-object"},"AnimatedSensor"),"];"),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("h4",{id:"animatedsensor-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"AnimatedSensor: [object]")),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sensor"),": [",(0,r.kt)("a",{parentName:"li",href:"/docs/2.x/api/hooks/useSharedValue"},"SharedValue"),"] contains [",(0,r.kt)("a",{parentName:"li",href:"#3dvector-object"},"3DVector"),"] or [",(0,r.kt)("a",{parentName:"li",href:"#rotationvector-object"},"RotationVector"),"] or ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),(0,r.kt)("br",{parentName:"li"}),"contains actual sensor measurements as a shared value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unregister: [function]"),(0,r.kt)("br",{parentName:"li"}),"allows you to stop listening to sensor updates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isAvailable: [boolean]"),(0,r.kt)("br",{parentName:"li"}),"the flag contains information on the availability of sensors in a device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config"),": [",(0,r.kt)("a",{parentName:"li",href:"#userconfig-object"},"UserConfig"),"]",(0,r.kt)("br",{parentName:"li"}),"the configuration provided by a user")),(0,r.kt)("h4",{id:"sensortype-enum"},(0,r.kt)("inlineCode",{parentName:"h4"},"SensorType: [enum]")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SensorType")," is an enum that contains possibly supported sensors.\nValues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ACCELEROMETER"),(0,r.kt)("br",{parentName:"li"}),"measurements output as [",(0,r.kt)("a",{parentName:"li",href:"#3dvector-object"},"3DVector"),"]. Measured in m/s\xb2, excluding gravity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GYROSCOPE"),(0,r.kt)("br",{parentName:"li"}),"measurements output as [",(0,r.kt)("a",{parentName:"li",href:"#3dvector-object"},"3DVector"),"]. Measured in rad/s."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GRAVITY"),(0,r.kt)("br",{parentName:"li"}),"measurements output as [",(0,r.kt)("a",{parentName:"li",href:"#3dvector-object"},"3DVector"),"]. Measured in m/s\xb2."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MAGNETIC_FIELD"),(0,r.kt)("br",{parentName:"li"}),"measurements output as [",(0,r.kt)("a",{parentName:"li",href:"#3dvector-object"},"3DVector"),"]. Measured in \u03bcT."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ROTATION"),(0,r.kt)("br",{parentName:"li"}),"measurements output as [",(0,r.kt)("a",{parentName:"li",href:"#rotationvector-object"},"RotationVector"),"]. ","[qx, qy, qz, qw]"," is a normalized quaternion. ","[yaw, pitch, roll]"," are rotations measured in radians along respective axes. We follow the iOS ",(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/coremotion/getting_processed_device-motion_data#2870658"},"convention"),".")),(0,r.kt)("h4",{id:"userconfig-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"UserConfig: [object]")),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interval: [number | auto]")," - interval in milliseconds between shared value updates. Pass ",(0,r.kt)("inlineCode",{parentName:"li"},"'auto'")," to select interval based on device frame rate. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'auto'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"iosReferenceFrame: [[IOSReferenceFrame](#iosreferenceframe-enum)]")," - reference frame to use on iOS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"Auto"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"adjustToInterfaceOrientation: [boolean]")," - whether to adjust measurements to the current interface orientation. For example, in the landscape orientation axes x and y may need to be reversed when drawn on the screen. It's ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," by default.")),(0,r.kt)("h4",{id:"iosreferenceframe-enum"},(0,r.kt)("inlineCode",{parentName:"h4"},"IOSReferenceFrame: [enum]")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IOSReferenceFrame")," is an enum describing reference frame to use on iOS. It follows Apple's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/coremotion/cmattitudereferenceframe"},"documentation"),". Possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"XArbitraryZVertical")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"XArbitraryCorrectedZVertical")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"XMagneticNorthZVertical")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"XTrueNorthZVertical")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Auto")," - on devices without magnetometer (for example iPods) ",(0,r.kt)("inlineCode",{parentName:"li"},"XArbitraryZVertical"),", on devices with magnetometer ",(0,r.kt)("inlineCode",{parentName:"li"},"XArbitraryCorrectedZVertical"))),(0,r.kt)("h4",{id:"3dvector-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"3DVector: [object]")),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"z: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interfaceOrientation: [[InterfaceOrientation](#interfaceorientation-enum)]"))),(0,r.kt)("h4",{id:"rotationvector-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"RotationVector: [object]")),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"qw: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"qx: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"qy: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"qz: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yaw: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pitch: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roll: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interfaceOrientation: [[InterfaceOrientation](#interfaceorientation-enum)]"))),(0,r.kt)("h4",{id:"interfaceorientation-enum"},(0,r.kt)("inlineCode",{parentName:"h4"},"InterfaceOrientation: [enum]")),(0,r.kt)("p",null,"Values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ROTATION_0")," - default rotation on Android, portrait orientation on iOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ROTATION_90")," - 90 degrees rotation on Android, landscape right orientation on iOS (landscape and home button on the right)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ROTATION_180")," - 180 degrees rotation on Android, upside down orientation on iOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ROTATION_270")," - 270 degrees rotation on Android, landscape left orientation on iOS (landscape and home button on the left)")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function UseAnimatedSensorExample() {\n  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, {\n    interval: 10,\n  }); // <- initialization\n  const style = useAnimatedStyle(() => {\n    const yaw = Math.abs(animatedSensor.sensor.value.yaw);\n    const pitch = Math.abs(animatedSensor.sensor.value.pitch);\n    return {\n      height: withTiming(yaw * 200 + 20, { duration: 100 }), // <- usage\n      width: withTiming(pitch * 200 + 20, { duration: 100 }), // <- usage\n    };\n  });\n\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Animated.View style={[{ backgroundColor: 'black' }, style]} />\n    </View>\n  );\n}\n")),(0,r.kt)("h3",{id:"live-example"},"Live example"),(0,r.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/158634922-eaad656e-c837-44d5-8d51-8e7fa27c5a16.mp4",controls:"controls",muted:"muted",width:"400"}),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"On iOS, if you want to read sensor data you need to enable location services on your device (",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > Privacy > Location Services"),").")))}d.isMDXComponent=!0}}]);