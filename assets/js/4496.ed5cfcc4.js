"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4496],{24404:(e,t,n)=>{n.d(t,{Z:()=>P});var o=n(61328),r=n(63366),s=n(67294),i=n(37353),a=n(13250),l=n(45819),u=n(30042),c=n(16528),h=n(60091),d=n(72359),S=n(28033),R=n(84370),E=n(72931),_=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],p=Object.assign({},a.lG,a.LO,a._T,a.YB,a.Uy,a.hJ,a.E5,a.vr,{href:!0,lang:!0,pointerEvents:!0}),T=s.forwardRef(((e,t)=>{var n=e.hrefAttrs,o=e.numberOfLines,a=e.onClick,S=e.onLayout,T=e.onPress,v=e.onMoveShouldSetResponder,P=e.onMoveShouldSetResponderCapture,D=e.onResponderEnd,f=e.onResponderGrant,m=e.onResponderMove,O=e.onResponderReject,N=e.onResponderRelease,A=e.onResponderStart,y=e.onResponderTerminate,b=e.onResponderTerminationRequest,C=e.onScrollShouldSetResponder,L=e.onScrollShouldSetResponderCapture,w=e.onSelectionChangeShouldSetResponder,x=e.onSelectionChangeShouldSetResponderCapture,M=e.onStartShouldSetResponder,k=e.onStartShouldSetResponderCapture,G=e.selectable,I=(0,r.Z)(e,_),Z=s.useContext(R.Z),Y=s.useRef(null),H=(0,E.PE)().direction;(0,u.Z)(Y,S),(0,d.Z)(Y,{onMoveShouldSetResponder:v,onMoveShouldSetResponderCapture:P,onResponderEnd:D,onResponderGrant:f,onResponderMove:m,onResponderReject:O,onResponderRelease:N,onResponderStart:A,onResponderTerminate:y,onResponderTerminationRequest:b,onScrollShouldSetResponder:C,onScrollShouldSetResponderCapture:L,onSelectionChangeShouldSetResponder:w,onSelectionChangeShouldSetResponderCapture:x,onStartShouldSetResponder:M,onStartShouldSetResponderCapture:k});var V=s.useCallback((e=>{null!=a?a(e):null!=T&&(e.stopPropagation(),T(e))}),[a,T]),W=Z?"span":"div",j=null!=e.lang?(0,E.w1)(e.lang):null,q=e.dir||j,X=q||H,$=(e=>(0,l.Z)(e,p))(I);if($.dir=q,Z||($.dir=null!=q?q:"auto"),(a||T)&&($.onClick=V),$.style=[null!=o&&o>1&&{WebkitLineClamp:o},!0===Z?g.textHasAncestor$raw:g.text$raw,1===o&&g.textOneLine,null!=o&&o>1&&g.textMultiLine,e.style,!0===G&&g.selectable,!1===G&&g.notSelectable,T&&g.pressable],null!=e.href&&(W="a",null!=n)){var z=n.download,B=n.rel,K=n.target;null!=z&&($.download=z),null!=B&&($.rel=B),"string"==typeof K&&($.target="_"!==K.charAt(0)?"_"+K:K)}var J=(0,h.Z)($),U=(0,c.Z)(Y,J,t);$.ref=U;var F=(0,i.Z)(W,$,{writingDirection:X});return Z?F:s.createElement(R.Z.Provider,{value:!0},F)}));T.displayName="Text";var v={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,textAlign:"inherit",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},g=S.Z.create({text$raw:v,textHasAncestor$raw:(0,o.Z)((0,o.Z)({},v),{},{color:"inherit",font:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const P=T},94119:(e,t,n)=>{n.d(t,{Z:()=>P});var o="DELAY",r="ERROR",s="LONG_PRESS_DETECTED",i="NOT_RESPONDER",a="RESPONDER_ACTIVE_LONG_PRESS_START",l="RESPONDER_ACTIVE_PRESS_START",u="RESPONDER_INACTIVE_PRESS_START",c="RESPONDER_RELEASE",h="RESPONDER_TERMINATED",d=Object.freeze({NOT_RESPONDER:{DELAY:r,RESPONDER_GRANT:u,RESPONDER_RELEASE:r,RESPONDER_TERMINATED:r,LONG_PRESS_DETECTED:r},RESPONDER_INACTIVE_PRESS_START:{DELAY:l,RESPONDER_GRANT:r,RESPONDER_RELEASE:i,RESPONDER_TERMINATED:i,LONG_PRESS_DETECTED:r},RESPONDER_ACTIVE_PRESS_START:{DELAY:r,RESPONDER_GRANT:r,RESPONDER_RELEASE:i,RESPONDER_TERMINATED:i,LONG_PRESS_DETECTED:a},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:r,RESPONDER_GRANT:r,RESPONDER_RELEASE:i,RESPONDER_TERMINATED:i,LONG_PRESS_DETECTED:a},ERROR:{DELAY:i,RESPONDER_GRANT:u,RESPONDER_RELEASE:i,RESPONDER_TERMINATED:i,LONG_PRESS_DETECTED:i}}),S=e=>e===l||e===a,R=e=>"button"===e.getAttribute("role"),E=e=>e===u||e===l||e===a,_=e=>{var t=e.key,n=e.target.getAttribute("role");return"Enter"===t||(" "===t||"Spacebar"===t)&&"button"===n};class p{constructor(e){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=i,this.configure(e)}configure(e){this._config=e}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return null==this._eventHandlers&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var e=(e,t)=>{e.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=i,this._isPointerTouch="touchstart"===e.nativeEvent.type,this._receiveSignal("RESPONDER_GRANT",e);var n=T(this._config.delayPressStart,0,50);!1!==t&&n>0?this._pressDelayTimeout=setTimeout((()=>{this._receiveSignal(o,e)}),n):this._receiveSignal(o,e);var r=T(this._config.delayLongPress,10,450);this._longPressDelayTimeout=setTimeout((()=>{this._handleLongPress(e)}),r+n)},t=e=>{this._receiveSignal(c,e)},n=e=>{var o=this._config.onPress,r=e.target;if(this._touchState!==i&&_(e)){t(e),document.removeEventListener("keyup",n);var s=r.getAttribute("role"),a=r.tagName.toLowerCase();null==o||("link"===s||"a"===a||"button"===a||"input"===a||"select"===a||"textarea"===a)||o(e)}};return{onStartShouldSetResponder:e=>{var t=this._config.disabled;return t&&R(e.currentTarget)&&e.stopPropagation(),null==t||!t},onKeyDown:t=>{var o=this._config.disabled,r=t.key,s=t.target;if(!o&&_(t)){this._touchState===i&&(e(t,!1),document.addEventListener("keyup",n));var a=s.getAttribute("role");(" "===r||"Spacebar"===r)&&("button"===a||"menuitem"===a)&&t.preventDefault(),t.stopPropagation()}},onResponderGrant:t=>e(t),onResponderMove:e=>{null!=this._config.onPressMove&&this._config.onPressMove(e);var t=v(e);if(null!=this._touchActivatePosition){var n=this._touchActivatePosition.pageX-t.pageX,o=this._touchActivatePosition.pageY-t.pageY;Math.hypot(n,o)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:e=>t(e),onResponderTerminate:e=>{"selectionchange"===e.nativeEvent.type&&(this._selectionTerminated=!0),this._receiveSignal(h,e)},onResponderTerminationRequest:e=>{var t=this._config,n=t.cancelable,o=t.disabled,r=t.onLongPress;return!(!o&&null!=r&&this._isPointerTouch&&"contextmenu"===e.nativeEvent.type)&&(null==n||n)},onClick:e=>{var t=this._config,n=t.disabled,o=t.onPress;n?R(e.currentTarget)&&e.stopPropagation():(e.stopPropagation(),this._longPressDispatched||this._selectionTerminated?e.preventDefault():null!=o&&!1===e.altKey&&o(e))},onContextMenu:e=>{var t=this._config,n=t.disabled,o=t.onLongPress;n?R(e.currentTarget)&&e.stopPropagation():null!=o&&this._isPointerTouch&&!e.defaultPrevented&&(e.preventDefault(),e.stopPropagation())}}}_receiveSignal(e,t){var n=this._touchState,o=null;null!=d[n]&&(o=d[n][e]),this._touchState===i&&e===c||(null==o||o===r?console.error("PressResponder: Invalid signal "+e+" for state "+n+" on responder"):n!==o&&(this._performTransitionSideEffects(n,o,e,t),this._touchState=o))}_performTransitionSideEffects(e,t,n,o){if((e=>e===h||e===c)(n)&&(setTimeout((()=>{this._isPointerTouch=!1}),0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),E(e)&&n===s){var r=this._config.onLongPress;null!=r&&null==o.nativeEvent.key&&(r(o),this._longPressDispatched=!0)}var i=S(e),l=S(t);if(!i&&l?this._activate(o):i&&!l&&this._deactivate(o),E(e)&&n===c){var u=this._config,d=u.onLongPress;if(null!=u.onPress)null!=d&&e===a||l||i||(this._activate(o),this._deactivate(o))}this._cancelPressDelayTimeout()}_activate(e){var t=this._config,n=t.onPressChange,o=t.onPressStart,r=v(e);this._touchActivatePosition={pageX:r.pageX,pageY:r.pageY},null!=o&&o(e),null!=n&&n(!0)}_deactivate(e){var t=this._config,n=t.onPressChange,o=t.onPressEnd;function r(){null!=o&&o(e),null!=n&&n(!1)}var s=T(this._config.delayPressEnd);s>0?this._pressOutDelayTimeout=setTimeout((()=>{r()}),s):r()}_handleLongPress(e){this._touchState!==l&&this._touchState!==a||this._receiveSignal(s,e)}_cancelLongPressDelayTimeout(){null!=this._longPressDelayTimeout&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){null!=this._pressDelayTimeout&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){null!=this._pressOutDelayTimeout&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function T(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=0),Math.max(t,null!=e?e:n)}function v(e){var t=e.nativeEvent,n=t.changedTouches,o=t.touches;return null!=o&&o.length>0?o[0]:null!=n&&n.length>0?n[0]:e.nativeEvent}var g=n(67294);function P(e,t){var n=(0,g.useRef)(null);null==n.current&&(n.current=new p(t));var o=n.current;return(0,g.useEffect)((()=>{o.configure(t)}),[t,o]),(0,g.useEffect)((()=>()=>{o.reset()}),[o]),(0,g.useDebugValue)(t),o.getEventHandlers()}}}]);