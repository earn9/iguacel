(this["webpackJsonpraster-react-canvas2"]=this["webpackJsonpraster-react-canvas2"]||[]).push([[10],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(69),o=function(e,t){void 0===t&&console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');var n=this,o=-1,a=0,i=1,c=2,u=3,s=4;this.object=e,this.domElement=t,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.mouseButtons={LEFT:r.MOUSE.ROTATE,MIDDLE:r.MOUSE.ZOOM,RIGHT:r.MOUSE.PAN},this.target=new r.Vector3;var l=new r.Vector3,d=1,h=o,f=o,p=new r.Vector3,m=new r.Vector2,v=new r.Vector2,g=new r.Vector3,y=0,b=new r.Vector2,j=new r.Vector2,w=0,O=0,E=new r.Vector2,k=new r.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom;var V={type:"change"},C={type:"start"},x={type:"end"};this.handleResize=function(){var e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height};var A=function(){var e=new r.Vector2;return function(t,r){return e.set((t-n.screen.left)/n.screen.width,(r-n.screen.top)/n.screen.height),e}}(),L=function(){var e=new r.Vector2;return function(t,r){return e.set((t-.5*n.screen.width-n.screen.left)/(.5*n.screen.width),(n.screen.height+2*(n.screen.top-r))/n.screen.width),e}}();function P(e){!1!==n.enabled&&(window.removeEventListener("keydown",P),f===o&&(e.keyCode!==n.keys[a]||n.noRotate?e.keyCode!==n.keys[i]||n.noZoom?e.keyCode!==n.keys[c]||n.noPan||(f=c):f=i:f=a))}function T(){!1!==n.enabled&&(f=o,window.addEventListener("keydown",P,!1))}function S(e){if(!1!==n.enabled){if(e.preventDefault(),e.stopPropagation(),h===o)switch(e.button){case n.mouseButtons.LEFT:h=a;break;case n.mouseButtons.MIDDLE:h=i;break;case n.mouseButtons.RIGHT:h=c;break;default:h=o}var t=f!==o?f:h;t!==a||n.noRotate?t!==i||n.noZoom?t!==c||n.noPan||(E.copy(A(e.pageX,e.pageY)),k.copy(E)):(b.copy(A(e.pageX,e.pageY)),j.copy(b)):(v.copy(L(e.pageX,e.pageY)),m.copy(v)),document.addEventListener("mousemove",R,!1),document.addEventListener("mouseup",M,!1),n.dispatchEvent(C)}}function R(e){if(!1!==n.enabled){e.preventDefault(),e.stopPropagation();var t=f!==o?f:h;t!==a||n.noRotate?t!==i||n.noZoom?t!==c||n.noPan||k.copy(A(e.pageX,e.pageY)):j.copy(A(e.pageX,e.pageY)):(m.copy(v),v.copy(L(e.pageX,e.pageY)))}}function M(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),h=o,document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",M),n.dispatchEvent(x))}function q(e){if(!1!==n.enabled&&!0!==n.noZoom){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:b.y-=.025*e.deltaY;break;case 1:b.y-=.01*e.deltaY;break;default:b.y-=25e-5*e.deltaY}n.dispatchEvent(C),n.dispatchEvent(x)}}function D(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:h=u,v.copy(L(e.touches[0].pageX,e.touches[0].pageY)),m.copy(v);break;default:h=s;var t=e.touches[0].pageX-e.touches[1].pageX,r=e.touches[0].pageY-e.touches[1].pageY;O=w=Math.sqrt(t*t+r*r);var o=(e.touches[0].pageX+e.touches[1].pageX)/2,a=(e.touches[0].pageY+e.touches[1].pageY)/2;E.copy(A(o,a)),k.copy(E)}n.dispatchEvent(C)}}function z(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:m.copy(v),v.copy(L(e.touches[0].pageX,e.touches[0].pageY));break;default:var t=e.touches[0].pageX-e.touches[1].pageX,r=e.touches[0].pageY-e.touches[1].pageY;O=Math.sqrt(t*t+r*r);var o=(e.touches[0].pageX+e.touches[1].pageX)/2,a=(e.touches[0].pageY+e.touches[1].pageY)/2;k.copy(A(o,a))}}function F(e){if(!1!==n.enabled){switch(e.touches.length){case 0:h=o;break;case 1:h=u,v.copy(L(e.touches[0].pageX,e.touches[0].pageY)),m.copy(v)}n.dispatchEvent(x)}}function Y(e){!1!==n.enabled&&e.preventDefault()}this.rotateCamera=function(){var e,t=new r.Vector3,o=new r.Quaternion,a=new r.Vector3,i=new r.Vector3,c=new r.Vector3,u=new r.Vector3;return function(){u.set(v.x-m.x,v.y-m.y,0),(e=u.length())?(p.copy(n.object.position).sub(n.target),a.copy(p).normalize(),i.copy(n.object.up).normalize(),c.crossVectors(i,a).normalize(),i.setLength(v.y-m.y),c.setLength(v.x-m.x),u.copy(i.add(c)),t.crossVectors(u,p).normalize(),e*=n.rotateSpeed,o.setFromAxisAngle(t,e),p.applyQuaternion(o),n.object.up.applyQuaternion(o),g.copy(t),y=e):!n.staticMoving&&y&&(y*=Math.sqrt(1-n.dynamicDampingFactor),p.copy(n.object.position).sub(n.target),o.setFromAxisAngle(g,y),p.applyQuaternion(o),n.object.up.applyQuaternion(o)),m.copy(v)}}(),this.zoomCamera=function(){var e;h===s?(e=w/O,w=O,n.object.isPerspectiveCamera?p.multiplyScalar(e):n.object.isOrthographicCamera?(n.object.zoom*=e,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(1!==(e=1+(j.y-b.y)*n.zoomSpeed)&&e>0&&(n.object.isPerspectiveCamera?p.multiplyScalar(e):n.object.isOrthographicCamera?(n.object.zoom/=e,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?b.copy(j):b.y+=(j.y-b.y)*this.dynamicDampingFactor)},this.panCamera=function(){var e=new r.Vector2,t=new r.Vector3,o=new r.Vector3;return function(){if(e.copy(k).sub(E),e.lengthSq()){if(n.object.isOrthographicCamera){var r=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,a=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;e.x*=r,e.y*=a}e.multiplyScalar(p.length()*n.panSpeed),o.copy(p).cross(n.object.up).setLength(e.x),o.add(t.copy(n.object.up).setLength(e.y)),n.object.position.add(o),n.target.add(o),n.staticMoving?E.copy(k):E.add(e.subVectors(k,E).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){n.noZoom&&n.noPan||(p.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,p.setLength(n.maxDistance)),b.copy(j)),p.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,p.setLength(n.minDistance)),b.copy(j)))},this.update=function(){p.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,p),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),l.distanceToSquared(n.object.position)>1e-6&&(n.dispatchEvent(V),l.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(l.distanceToSquared(n.object.position)>1e-6||d!==n.object.zoom)&&(n.dispatchEvent(V),l.copy(n.object.position),d=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){h=o,f=o,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),p.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(V),l.copy(n.object.position),d=n.object.zoom},this.dispose=function(){this.domElement.removeEventListener("contextmenu",Y,!1),this.domElement.removeEventListener("mousedown",S,!1),this.domElement.removeEventListener("wheel",q,!1),this.domElement.removeEventListener("touchstart",D,!1),this.domElement.removeEventListener("touchend",F,!1),this.domElement.removeEventListener("touchmove",z,!1),document.removeEventListener("mousemove",R,!1),document.removeEventListener("mouseup",M,!1),window.removeEventListener("keydown",P,!1),window.removeEventListener("keyup",T,!1)},this.domElement.addEventListener("contextmenu",Y,!1),this.domElement.addEventListener("mousedown",S,!1),this.domElement.addEventListener("wheel",q,!1),this.domElement.addEventListener("touchstart",D,!1),this.domElement.addEventListener("touchend",F,!1),this.domElement.addEventListener("touchmove",z,!1),window.addEventListener("keydown",P,!1),window.addEventListener("keyup",T,!1),this.handleResize(),this.update()};o.prototype=Object.create(r.EventDispatcher.prototype),o.prototype.constructor=o},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return we}));var r,o,a=n(15),i=n(12),c=n(9),u=n(5),s=n(13),l=n(8),d=n(4),h=n(17),f=n(69),p=n(73),m=n(1),v=n(3),g=n(0),y=n.n(g),b=function(){function e(){Object(d.a)(this,e),this.payload=void 0,this.children=[]}return Object(h.a)(e,[{key:"getAnimatedValue",value:function(){return this.getValue()}},{key:"getPayload",value:function(){return this.payload||this}},{key:"attach",value:function(){}},{key:"detach",value:function(){}},{key:"getChildren",value:function(){return this.children}},{key:"addChild",value:function(e){0===this.children.length&&this.attach(),this.children.push(e)}},{key:"removeChild",value:function(e){var t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()}}]),e}(),j=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).apply(this,arguments))).payload=[],e.attach=function(){return e.payload.forEach((function(t){return t instanceof b&&t.addChild(Object(s.a)(e))}))},e.detach=function(){return e.payload.forEach((function(t){return t instanceof b&&t.removeChild(Object(s.a)(e))}))},e}return Object(l.a)(t,e),t}(b),w=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).apply(this,arguments))).payload={},e.attach=function(){return Object.values(e.payload).forEach((function(t){return t instanceof b&&t.addChild(Object(s.a)(e))}))},e.detach=function(){return Object.values(e.payload).forEach((function(t){return t instanceof b&&t.removeChild(Object(s.a)(e))}))},e}return Object(l.a)(t,e),Object(h.a)(t,[{key:"getValue",value:function(e){void 0===e&&(e=!1);var t={};for(var n in this.payload){var r=this.payload[n];(!e||r instanceof b)&&(t[n]=r instanceof b?r[e?"getAnimatedValue":"getValue"]():r)}return t}},{key:"getAnimatedValue",value:function(){return this.getValue(!0)}}]),t}(b);function O(e,t){r={fn:e,transform:t}}function E(e){o=e}var k,V=function(e){return"undefined"!==typeof window?window.requestAnimationFrame(e):-1};function C(e){k=e}var x=function(){return Date.now()};function A(e){e}var L,P,T=function(e){return e.current};function S(e){P=e}function R(e,t,n){if("function"===typeof e)return e;if(Array.isArray(e))return R({range:e,output:t,extrapolate:n});if(k&&"string"===typeof e.output[0])return k(e);var r=e,o=r.output,a=r.range||[0,1],i=r.extrapolateLeft||r.extrapolate||"extend",c=r.extrapolateRight||r.extrapolate||"extend",u=r.easing||function(e){return e};return function(e){var t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,o,a,i,c,u){var s=u?u(e):e;if(s<t){if("identity"===i)return s;"clamp"===i&&(s=t)}if(s>n){if("identity"===c)return s;"clamp"===c&&(s=n)}if(r===o)return r;if(t===n)return e<=t?r:o;t===-1/0?s=-s:n===1/0?s-=t:s=(s-t)/(n-t);s=a(s),r===-1/0?s=-s:o===1/0?s+=r:s=s*(o-r)+r;return s}(e,a[t],a[t+1],o[t],o[t+1],u,i,c,r.map)}}var M=function(e){function t(e,n,r,o){var a;return Object(d.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this))).calc=void 0,a.payload=e instanceof j&&!(e instanceof t)?e.getPayload():Array.isArray(e)?e:[e],a.calc=R(n,r,o),a}return Object(l.a)(t,e),Object(h.a)(t,[{key:"getValue",value:function(){return this.calc.apply(this,Object(i.a)(this.payload.map((function(e){return e.getValue()}))))}},{key:"updateConfig",value:function(e,t,n){this.calc=R(e,t,n)}},{key:"interpolate",value:function(e,n,r){return new t(this,e,n,r)}}]),t}(j),q={arr:Array.isArray,obj:function(e){return"[object Object]"===Object.prototype.toString.call(e)},fun:function(e){return"function"===typeof e},str:function(e){return"string"===typeof e},num:function(e){return"number"===typeof e},und:function(e){return void 0===e},nul:function(e){return null===e},set:function(e){return e instanceof Set},map:function(e){return e instanceof Map},equ:function(e,t){if(typeof e!==typeof t)return!1;if(q.str(e)||q.num(e))return e===t;if(q.obj(e)&&q.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;var n;for(n in e)if(!(n in t))return!1;for(n in t)if(e[n]!==t[n])return!1;return!q.und(n)||e===t}};function D(){var e=Object(g.useState)(!1)[1];return Object(g.useCallback)((function(){return e((function(e){return!e}))}),[])}function z(e,t){return q.und(e)||q.nul(e)?t:e}function F(e){return q.und(e)?[]:q.arr(e)?e:[e]}function Y(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return q.fun(e)?e.apply(void 0,n):e}function X(e){var t=function(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,Object(v.a)(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(e);if(q.und(t))return Object(m.a)({to:t},e);var n=Object.keys(e).reduce((function(n,r){return q.und(t[r])?Object(m.a)({},n,Object(a.a)({},r,e[r])):n}),{});return Object(m.a)({to:t},n)}var I=function(e){function t(e,n){var r;return Object(d.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this))).update=void 0,r.payload=e.style?Object(m.a)({},e,{style:L(e.style)}):e,r.update=n,r.attach(),r}return Object(l.a)(t,e),t}(w),H=function(e){return Object(g.forwardRef)((function(t,n){var o=D(),a=Object(g.useRef)(!0),i=Object(g.useRef)(null),c=Object(g.useRef)(null),u=Object(g.useCallback)((function(e){var t=i.current;i.current=new I(e,(function(){var e=!1;c.current&&(e=r.fn(c.current,i.current.getAnimatedValue())),c.current&&!1!==e||o()})),t&&t.detach()}),[]);Object(g.useEffect)((function(){return function(){a.current=!1,i.current&&i.current.detach()}}),[]),Object(g.useImperativeHandle)(n,(function(){return T(c,a,o)})),u(t);var s,l=i.current.getValue(),d=(l.scrollTop,l.scrollLeft,Object(v.a)(l,["scrollTop","scrollLeft"])),h=(s=e,!q.fun(s)||s.prototype instanceof y.a.Component?function(e){return c.current=function(e,t){return t&&(q.fun(t)?t(e):q.obj(t)&&(t.current=e)),e}(e,n)}:void 0);return y.a.createElement(e,Object(m.a)({},d,{ref:h}))}))},Q={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Z="[-+]?\\d*\\.?\\d+",U=Z+"%";function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var $=new RegExp("rgb"+B(Z,Z,Z)),W=new RegExp("rgba"+B(Z,Z,Z,Z)),G=new RegExp("hsl"+B(Z,U,U)),J=new RegExp("hsla"+B(Z,U,U,Z)),N=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,K=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,_=/^#([0-9a-fA-F]{6})$/,ee=/^#([0-9a-fA-F]{8})$/;function te(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ne(e,t,n){var r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,a=te(o,r,e+1/3),i=te(o,r,e),c=te(o,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*i)<<16|Math.round(255*c)<<8}function re(e){var t=parseInt(e,10);return t<0?0:t>255?255:t}function oe(e){return(parseFloat(e)%360+360)%360/360}function ae(e){var t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ie(e){var t=parseFloat(e);return t<0?0:t>100?1:t/100}function ce(e){var t=function(e){var t;return"number"===typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=_.exec(e))?parseInt(t[1]+"ff",16)>>>0:Q.hasOwnProperty(e)?Q[e]:(t=$.exec(e))?(re(t[1])<<24|re(t[2])<<16|re(t[3])<<8|255)>>>0:(t=W.exec(e))?(re(t[1])<<24|re(t[2])<<16|re(t[3])<<8|ae(t[4]))>>>0:(t=N.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ee.exec(e))?parseInt(t[1],16)>>>0:(t=K.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=G.exec(e))?(255|ne(oe(t[1]),ie(t[2]),ie(t[3])))>>>0:(t=J.exec(e))?(ne(oe(t[1]),ie(t[2]),ie(t[3]))|ae(t[4]))>>>0:null}(e);if(null===t)return e;var n=(16711680&(t=t||0))>>>16,r=(65280&t)>>>8,o=(255&t)/255;return"rgba(".concat((4278190080&t)>>>24,", ").concat(n,", ").concat(r,", ").concat(o,")")}var ue=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,se=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,le=new RegExp("(".concat(Object.keys(Q).join("|"),")"),"g");var de,he,fe=function(e){function t(e){var n,r;return Object(d.a)(this,t),n=Object(c.a)(this,Object(u.a)(t).call(this)),r=Object(s.a)(n),n.animatedStyles=new Set,n.value=void 0,n.startPosition=void 0,n.lastPosition=void 0,n.lastVelocity=void 0,n.startTime=void 0,n.lastTime=void 0,n.done=!1,n.setValue=function(e,t){void 0===t&&(t=!0),r.value=e,t&&r.flush()},n.value=e,n.startPosition=e,n.lastPosition=e,n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"flush",value:function(){0===this.animatedStyles.size&&function e(t,n){"update"in t?n.add(t):t.getChildren().forEach((function(t){return e(t,n)}))}(this,this.animatedStyles),this.animatedStyles.forEach((function(e){return e.update()}))}},{key:"clearStyles",value:function(){this.animatedStyles.clear()}},{key:"getValue",value:function(){return this.value}},{key:"interpolate",value:function(e,t,n){return new M(this,e,t,n)}}]),t}(b),pe=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this))).payload=e.map((function(e){return new fe(e)})),n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"setValue",value:function(e,t){var n=this;void 0===t&&(t=!0),Array.isArray(e)?e.length===this.payload.length&&e.forEach((function(e,r){return n.payload[r].setValue(e,t)})):this.payload.forEach((function(n){return n.setValue(e,t)}))}},{key:"getValue",value:function(){return this.payload.map((function(e){return e.getValue()}))}},{key:"interpolate",value:function(e,t){return new M(this,e,t)}}]),t}(j),me=!1,ve=new Set,ge=function e(){if(!me)return!1;var t=x(),n=!0,r=!1,o=void 0;try{for(var a,i=ve[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){for(var c=a.value,u=!1,s=0;s<c.configs.length;s++){for(var l=c.configs[s],d=void 0,h=void 0,f=0;f<l.animatedValues.length;f++){var p=l.animatedValues[f];if(!p.done){var m=l.fromValues[f],v=l.toValues[f],g=p.lastPosition,y=v instanceof b,j=Array.isArray(l.initialVelocity)?l.initialVelocity[f]:l.initialVelocity;if(y&&(v=v.getValue()),l.immediate)p.setValue(v),p.done=!0;else if("string"!==typeof m&&"string"!==typeof v){if(void 0!==l.duration)g=m+l.easing((t-p.startTime)/l.duration)*(v-m),d=t>=p.startTime+l.duration;else if(l.decay)g=m+j/(1-.998)*(1-Math.exp(-(1-.998)*(t-p.startTime))),(d=Math.abs(p.lastPosition-g)<.1)&&(v=g);else{h=void 0!==p.lastTime?p.lastTime:t,j=void 0!==p.lastVelocity?p.lastVelocity:l.initialVelocity,t>h+64&&(h=t);for(var w=Math.floor(t-h),O=0;O<w;++O){g+=1*(j+=1*((-l.tension*(g-v)+-l.friction*j)/l.mass)/1e3)/1e3}var E=!(!l.clamp||0===l.tension)&&(m<v?g>v:g<v),k=Math.abs(j)<=l.precision,C=0===l.tension||Math.abs(v-g)<=l.precision;d=E||k&&C,p.lastVelocity=j,p.lastTime=t}y&&!l.toValues[f].done&&(d=!1),d?(p.value!==v&&(g=v),p.done=!0):u=!0,p.setValue(g),p.lastPosition=g}else p.setValue(v),p.done=!0}}c.props.onFrame&&(c.values[l.name]=l.interpolation.getValue())}c.props.onFrame&&c.props.onFrame(c.values),u||(ve.delete(c),c.stop(!0))}}catch(A){r=!0,o=A}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return ve.size?P?P():V(e):me=!1,me},ye=0,be=function(){function e(){var t=this;Object(d.a)(this,e),this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=function(){return t.interpolations},this.id=ye++}return Object(h.a)(e,[{key:"update",value:function(e){if(!e)return this;var t=X(e),n=t.delay,r=void 0===n?0:n,o=t.to,i=Object(v.a)(t,["delay","to"]);if(q.arr(o)||q.fun(o))this.queue.push(Object(m.a)({},i,{delay:r,to:o}));else if(o){var c={};Object.entries(o).forEach((function(e){var t=e[0],n=e[1],o=Object(m.a)({to:Object(a.a)({},t,n),delay:Y(r,t)},i),u=c[o.delay]&&c[o.delay].to;c[o.delay]=Object(m.a)({},c[o.delay],o,{to:Object(m.a)({},u,o.to)})})),this.queue=Object.values(c)}return this.queue=this.queue.sort((function(e,t){return e.delay-t.delay})),this.diff(i),this}},{key:"start",value:function(e){var t,n=this;if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach((function(e){var t=e.from,r=void 0===t?{}:t,o=e.to,a=void 0===o?{}:o;q.obj(r)&&(n.merged=Object(m.a)({},r,n.merged)),q.obj(a)&&(n.merged=Object(m.a)({},n.merged,a))}));var r=this.local=++this.guid,o=this.localQueue=this.queue;this.queue=[],o.forEach((function(t,a){var i=t.delay,c=Object(v.a)(t,["delay"]),u=function(t){a===o.length-1&&r===n.guid&&t&&(n.idle=!0,n.props.onRest&&n.props.onRest(n.merged)),e&&e()},s=q.arr(c.to)||q.fun(c.to);i?setTimeout((function(){r===n.guid&&(s?n.runAsync(c,u):n.diff(c).start(u))}),i):s?n.runAsync(c,u):n.diff(c).start(u)}))}else q.fun(e)&&this.listeners.push(e),this.props.onStart&&this.props.onStart(),t=this,ve.has(t)||ve.add(t),me||(me=!0,V(P||ge));return this}},{key:"stop",value:function(e){return this.listeners.forEach((function(t){return t(e)})),this.listeners=[],this}},{key:"pause",value:function(e){var t;return this.stop(!0),e&&(t=this,ve.has(t)&&ve.delete(t)),this}},{key:"runAsync",value:function(e,t){var n=this,r=this,o=(e.delay,Object(v.a)(e,["delay"])),a=this.local,i=Promise.resolve(void 0);if(q.arr(o.to))for(var c=function(e){var t=e,r=Object(m.a)({},o,X(o.to[t]));q.arr(r.config)&&(r.config=r.config[t]),i=i.then((function(){if(a===n.guid)return new Promise((function(e){return n.diff(r).start(e)}))}))},u=0;u<o.to.length;u++)c(u);else if(q.fun(o.to)){var s,l=0;i=i.then((function(){return o.to((function(e){var t=Object(m.a)({},o,X(e));if(q.arr(t.config)&&(t.config=t.config[l]),l++,a===n.guid)return s=new Promise((function(e){return n.diff(t).start(e)}))}),(function(e){return void 0===e&&(e=!0),r.stop(e)})).then((function(){return s}))}))}i.then(t)}},{key:"diff",value:function(e){var t=this;this.props=Object(m.a)({},this.props,e);var n=this.props,r=n.from,i=void 0===r?{}:r,c=n.to,u=void 0===c?{}:c,s=n.config,l=void 0===s?{}:s,d=n.reverse,h=n.attach,f=n.reset,p=n.immediate;if(d){var v=[u,i];i=v[0],u=v[1]}this.merged=Object(m.a)({},i,this.merged,u),this.hasChanged=!1;var g=h&&h(this);if(this.animations=Object.entries(this.merged).reduce((function(e,n){var r=n[0],c=n[1],u=e[r]||{},s=q.num(c),d=q.str(c)&&!c.startsWith("#")&&!/\d/.test(c)&&!o[c],h=q.arr(c),v=!s&&!h&&!d,y=q.und(i[r])?c:i[r],b=s||h?c:d?c:1,j=Y(l,r);g&&(b=g.animations[r].parent);var w,O=u.parent,E=u.interpolation,V=F(g?b.getPayload():b),C=c;v&&(C=k({range:[0,1],output:[c,c]})(1));var A=E&&E.getValue(),L=!q.und(O)&&u.animatedValues.some((function(e){return!e.done})),P=!q.equ(C,A),T=!q.equ(C,u.previous),S=!q.equ(j,u.config);if(f||T&&P||S){if(s||d)O=E=u.parent||new fe(y);else if(h)O=E=u.parent||new pe(y);else if(v){var R=u.interpolation&&u.interpolation.calc(u.parent.value);R=void 0===R||f?y:R,u.parent?(O=u.parent).setValue(0,!1):O=new fe(0);var M={output:[R,c]};u.interpolation?(E=u.interpolation,u.interpolation.updateConfig(M)):E=O.interpolate(M)}return V=F(g?b.getPayload():b),w=F(O.getPayload()),f&&!v&&O.setValue(y,!1),t.hasChanged=!0,w.forEach((function(e){e.startPosition=e.value,e.lastPosition=e.value,e.lastVelocity=L?e.lastVelocity:void 0,e.lastTime=L?e.lastTime:void 0,e.startTime=x(),e.done=!1,e.animatedStyles.clear()})),Y(p,r)&&O.setValue(v?b:c,!1),Object(m.a)({},e,Object(a.a)({},r,Object(m.a)({},u,{name:r,parent:O,interpolation:E,animatedValues:w,toValues:V,previous:C,config:j,fromValues:F(O.getValue()),immediate:Y(p,r),initialVelocity:z(j.velocity,0),clamp:z(j.clamp,!1),precision:z(j.precision,.01),tension:z(j.tension,170),friction:z(j.friction,26),mass:z(j.mass,1),duration:j.duration,easing:z(j.easing,(function(e){return e})),decay:j.decay})))}return P?e:(v&&(O.setValue(1,!1),E.updateConfig({output:[C,C]})),O.done=!0,t.hasChanged=!0,Object(m.a)({},e,Object(a.a)({},r,Object(m.a)({},e[r],{previous:C}))))}),this.animations),this.hasChanged)for(var y in this.configs=Object.values(this.animations),this.values={},this.interpolations={},this.animations)this.interpolations[y]=this.animations[y].interpolation,this.values[y]=this.animations[y].interpolation.getValue();return this}},{key:"destroy",value:function(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0}}]),e}(),je=function(e,t){var n=Object(g.useRef)(!1),r=Object(g.useRef)(),o=q.fun(t),a=Object(g.useMemo)((function(){var n;return(r.current&&(r.current.map((function(e){return e.destroy()})),r.current=void 0),[new Array(e).fill().map((function(e,r){var a=new be,i=o?Y(t,r,a):t[r];return 0===r&&(n=i.ref),a.update(i),n||a.start(),a})),n])}),[e]),i=a[0],c=a[1];r.current=i;Object(g.useImperativeHandle)(c,(function(){return{start:function(){return Promise.all(r.current.map((function(e){return new Promise((function(t){return e.start(t)}))})))},stop:function(e){return r.current.forEach((function(t){return t.stop(e)}))},get controllers(){return r.current}}}));var u=Object(g.useMemo)((function(){return function(e){return r.current.map((function(t,n){t.update(o?Y(e,n,t):e[n]),c||t.start()}))}}),[e]);Object(g.useEffect)((function(){n.current?o||u(t):c||r.current.forEach((function(e){return e.start()}))})),Object(g.useEffect)((function(){return n.current=!0,function(){return r.current.forEach((function(e){return e.destroy()}))}}),[]);var s=r.current.map((function(e){return e.getValues()}));return o?[s,u,function(e){return r.current.forEach((function(t){return t.pause(e)}))}]:s},we=function(e){var t=q.fun(e),n=je(1,t?e:[e]),r=n[0],o=n[1],a=n[2];return t?[r[0],o,a]:r};(de=H,void 0===he&&(he=!0),function(e){return(q.arr(e)?e:Object.keys(e)).reduce((function(e,t){var n=he?t[0].toLowerCase()+t.substring(1):t;return e[n]=de(n),e}),de)})(f).primitive=H("primitive"),p.b&&(Object(p.b)(ge),S((function(){return Object(p.e)()}))),A("group"),C((function(e){var t=e.output.map((function(e){return e.replace(se,ce)})).map((function(e){return e.replace(le,ce)})),n=t[0].match(ue).map((function(){return[]}));t.forEach((function(e){e.match(ue).forEach((function(e,t){return n[t].push(+e)}))}));var r=t[0].match(ue).map((function(t,r){return R(Object(m.a)({},e,{output:n[r]}))}));return function(e){var n=0;return t[0].replace(ue,(function(){return r[n++](e)})).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,(function(e,t,n,r,o){return"rgba(".concat(Math.round(t),", ").concat(Math.round(n),", ").concat(Math.round(r),", ").concat(o,")")}))}})),E(Q),O(p.c,(function(e){return e}))},113:function(e,t,n){"use strict";var r=n(0);t.a=function(e,t){var n=Object(r.useRef)((function(){}));Object(r.useEffect)((function(){n.current=e})),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current()}),t||0);return function(){return clearInterval(e)}}}),[t])}}}]);
//# sourceMappingURL=10.4efa6528.chunk.js.map