(this["webpackJsonpraster-react-canvas2"]=this["webpackJsonpraster-react-canvas2"]||[]).push([[2],{105:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function i(t){if(!(e=r.exec(t)))throw new Error("invalid format: "+t);var e;return new o({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function o(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}i.prototype=o.prototype,o.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}},118:function(t,e,n){"use strict";function r(t){return t[0]}function i(t){return t[1]}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))},119:function(t,e,n){"use strict";e.a=function(t){return function(){return t}}},120:function(t,e,n){"use strict";function r(t){this._context=t}r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},e.a=function(t){return new r(t)}},129:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return f}));var r=n(134),i=n(85),o=n(84),c=n(105),s=n(135),u=n(218),a=n(136),l=n(137);function h(t){var e=t.domain;return t.ticks=function(t){var n=e();return Object(r.a)(n[0],n[n.length-1],null==t?10:t)},t.tickFormat=function(t,n){var i=e();return function(t,e,n,i){var o,h=Object(r.c)(t,e,n);switch((i=Object(c.a)(null==i?",f":i)).type){case"s":var f=Math.max(Math.abs(t),Math.abs(e));return null!=i.precision||isNaN(o=Object(s.a)(h,f))||(i.precision=o),Object(u.b)(i,f);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=Object(a.a)(h,Math.max(Math.abs(t),Math.abs(e))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=Object(l.a)(h))||(i.precision=o-2*("%"===i.type))}return Object(u.a)(i)}(i[0],i[i.length-1],null==t?10:t,n)},t.nice=function(n){null==n&&(n=10);var i,o=e(),c=0,s=o.length-1,u=o[c],a=o[s];return a<u&&(i=u,u=a,a=i,i=c,c=s,s=i),(i=Object(r.b)(u,a,n))>0?(u=Math.floor(u/i)*i,a=Math.ceil(a/i)*i,i=Object(r.b)(u,a,n)):i<0&&(u=Math.ceil(u*i)/i,a=Math.floor(a*i)/i,i=Object(r.b)(u,a,n)),i>0?(o[c]=Math.floor(u/i)*i,o[s]=Math.ceil(a/i)*i,e(o)):i<0&&(o[c]=Math.ceil(u*i)/i,o[s]=Math.floor(a*i)/i,e(o)),t},t}function f(){var t=Object(i.b)();return t.copy=function(){return Object(i.a)(t,f())},o.a.apply(t,arguments),h(t)}},135:function(t,e,n){"use strict";var r=n(75);e.a=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(r.a)(e)/3)))-Object(r.a)(Math.abs(t)))}},136:function(t,e,n){"use strict";var r=n(75);e.a=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,Object(r.a)(e)-Object(r.a)(t))+1}},137:function(t,e,n){"use strict";var r=n(75);e.a=function(t){return Math.max(0,-Object(r.a)(Math.abs(t)))}},146:function(t,e,n){"use strict";var r=n(253),i=n(119),o=n(120),c=n(118);e.a=function(){var t=c.a,e=c.b,n=Object(i.a)(!0),s=null,u=o.a,a=null;function l(i){var o,c,l,h=i.length,f=!1;for(null==s&&(a=u(l=Object(r.a)())),o=0;o<=h;++o)!(o<h&&n(c=i[o],o,i))===f&&((f=!f)?a.lineStart():a.lineEnd()),f&&a.point(+t(c,o,i),+e(c,o,i));if(l)return a=null,l+""||null}return l.x=function(e){return arguments.length?(t="function"===typeof e?e:Object(i.a)(+e),l):t},l.y=function(t){return arguments.length?(e="function"===typeof t?t:Object(i.a)(+t),l):e},l.defined=function(t){return arguments.length?(n="function"===typeof t?t:Object(i.a)(!!t),l):n},l.curve=function(t){return arguments.length?(u=t,null!=s&&(a=u(s)),l):u},l.context=function(t){return arguments.length?(null==t?s=a=null:a=u(s=t),l):s},l}},218:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r,i,o,c,s=n(75),u=n(105),a=n(82),l=function(t,e){var n=Object(a.a)(t,e);if(!n)return t+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")},h={"%":function(t,e){return(100*t).toFixed(e)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,e){return t.toExponential(e)},f:function(t,e){return t.toFixed(e)},g:function(t,e){return t.toPrecision(e)},o:function(t){return Math.round(t).toString(8)},p:function(t,e){return l(100*t,e)},r:l,s:function(t,e){var n=Object(a.a)(t,e);if(!n)return t+"";var i=n[0],o=n[1],c=o-(r=3*Math.max(-8,Math.min(8,Math.floor(o/3))))+1,s=i.length;return c===s?i:c>s?i+new Array(c-s+1).join("0"):c>0?i.slice(0,c)+"."+i.slice(c):"0."+new Array(1-c).join("0")+Object(a.a)(t,Math.max(0,e+c-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},f=function(t){return t},d=Array.prototype.map,v=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"];i=function(t){var e,n,i=void 0===t.grouping||void 0===t.thousands?f:(e=d.call(t.grouping,Number),n=t.thousands+"",function(t,r){for(var i=t.length,o=[],c=0,s=e[0],u=0;i>0&&s>0&&(u+s+1>r&&(s=Math.max(1,r-u)),o.push(t.substring(i-=s,i+s)),!((u+=s+1)>r));)s=e[c=(c+1)%e.length];return o.reverse().join(n)}),o=void 0===t.currency?"":t.currency[0]+"",c=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",l=void 0===t.numerals?f:function(t){return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}}(d.call(t.numerals,String)),p=void 0===t.percent?"%":t.percent+"",b=void 0===t.minus?"-":t.minus+"",g=void 0===t.nan?"NaN":t.nan+"";function y(t){var e=(t=Object(u.a)(t)).fill,n=t.align,s=t.sign,f=t.symbol,d=t.zero,y=t.width,m=t.comma,x=t.precision,w=t.trim,O=t.type;"n"===O?(m=!0,O="g"):h[O]||(void 0===x&&(x=12),w=!0,O="g"),(d||"0"===e&&"="===n)&&(d=!0,e="0",n="=");var _="$"===f?o:"#"===f&&/[boxX]/.test(O)?"0"+O.toLowerCase():"",M="$"===f?c:/[%p]/.test(O)?p:"",E=h[O],j=/[defgprs%]/.test(O);function z(t){var o,c,u,h=_,f=M;if("c"===O)f=E(t)+f,t="";else{var p=(t=+t)<0||1/t<0;if(t=isNaN(t)?g:E(Math.abs(t),x),w&&(t=function(t){t:for(var e,n=t.length,r=1,i=-1;r<n;++r)switch(t[r]){case".":i=e=r;break;case"0":0===i&&(i=r),e=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}(t)),p&&0===+t&&"+"!==s&&(p=!1),h=(p?"("===s?s:b:"-"===s||"("===s?"":s)+h,f=("s"===O?v[8+r/3]:"")+f+(p&&"("===s?")":""),j)for(o=-1,c=t.length;++o<c;)if(48>(u=t.charCodeAt(o))||u>57){f=(46===u?a+t.slice(o+1):t.slice(o))+f,t=t.slice(0,o);break}}m&&!d&&(t=i(t,1/0));var z=h.length+t.length+f.length,T=z<y?new Array(y-z+1).join(e):"";switch(m&&d&&(t=i(T+t,T.length?y-f.length:1/0),T=""),n){case"<":t=h+t+f+T;break;case"=":t=h+T+t+f;break;case"^":t=T.slice(0,z=T.length>>1)+h+t+f+T.slice(z);break;default:t=T+h+t+f}return l(t)}return x=void 0===x?6:/[gprs]/.test(O)?Math.max(1,Math.min(21,x)):Math.max(0,Math.min(20,x)),z.toString=function(){return t+""},z}return{format:y,formatPrefix:function(t,e){var n=y(((t=Object(u.a)(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(Object(s.a)(e)/3))),i=Math.pow(10,-r),o=v[8+r/3];return function(t){return n(i*t)+o}}}}({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),o=i.format,c=i.formatPrefix},252:function(t,e,n){"use strict";var r=n(253),i=n(119),o=n(120),c=n(146),s=n(118);e.a=function(){var t=s.a,e=null,n=Object(i.a)(0),u=s.b,a=Object(i.a)(!0),l=null,h=o.a,f=null;function d(i){var o,c,s,d,v,p=i.length,b=!1,g=new Array(p),y=new Array(p);for(null==l&&(f=h(v=Object(r.a)())),o=0;o<=p;++o){if(!(o<p&&a(d=i[o],o,i))===b)if(b=!b)c=o,f.areaStart(),f.lineStart();else{for(f.lineEnd(),f.lineStart(),s=o-1;s>=c;--s)f.point(g[s],y[s]);f.lineEnd(),f.areaEnd()}b&&(g[o]=+t(d,o,i),y[o]=+n(d,o,i),f.point(e?+e(d,o,i):g[o],u?+u(d,o,i):y[o]))}if(v)return f=null,v+""||null}function v(){return Object(c.a)().defined(a).curve(h).context(l)}return d.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(i.a)(+n),e=null,d):t},d.x0=function(e){return arguments.length?(t="function"===typeof e?e:Object(i.a)(+e),d):t},d.x1=function(t){return arguments.length?(e=null==t?null:"function"===typeof t?t:Object(i.a)(+t),d):e},d.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(i.a)(+t),u=null,d):n},d.y0=function(t){return arguments.length?(n="function"===typeof t?t:Object(i.a)(+t),d):n},d.y1=function(t){return arguments.length?(u=null==t?null:"function"===typeof t?t:Object(i.a)(+t),d):u},d.lineX0=d.lineY0=function(){return v().x(t).y(n)},d.lineY1=function(){return v().x(t).y(u)},d.lineX1=function(){return v().x(e).y(n)},d.defined=function(t){return arguments.length?(a="function"===typeof t?t:Object(i.a)(!!t),d):a},d.curve=function(t){return arguments.length?(h=t,null!=l&&(f=h(l)),d):h},d.context=function(t){return arguments.length?(null==t?l=f=null:f=h(l=t),d):l},d}},253:function(t,e,n){"use strict";var r=Math.PI,i=2*r,o=i-1e-6;function c(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new c}c.prototype=s.prototype={constructor:c,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,r){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(t,e,n,r,i,o){this._+="C"+ +t+","+ +e+","+ +n+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,e,n,i,o){t=+t,e=+e,n=+n,i=+i,o=+o;var c=this._x1,s=this._y1,u=n-t,a=i-e,l=c-t,h=s-e,f=l*l+h*h;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(f>1e-6)if(Math.abs(h*u-a*l)>1e-6&&o){var d=n-c,v=i-s,p=u*u+a*a,b=d*d+v*v,g=Math.sqrt(p),y=Math.sqrt(f),m=o*Math.tan((r-Math.acos((p+f-b)/(2*g*y)))/2),x=m/y,w=m/g;Math.abs(x-1)>1e-6&&(this._+="L"+(t+x*l)+","+(e+x*h)),this._+="A"+o+","+o+",0,0,"+ +(h*d>l*v)+","+(this._x1=t+w*u)+","+(this._y1=e+w*a)}else this._+="L"+(this._x1=t)+","+(this._y1=e);else;},arc:function(t,e,n,c,s,u){t=+t,e=+e,u=!!u;var a=(n=+n)*Math.cos(c),l=n*Math.sin(c),h=t+a,f=e+l,d=1^u,v=u?c-s:s-c;if(n<0)throw new Error("negative radius: "+n);null===this._x1?this._+="M"+h+","+f:(Math.abs(this._x1-h)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+h+","+f),n&&(v<0&&(v=v%i+i),v>o?this._+="A"+n+","+n+",0,1,"+d+","+(t-a)+","+(e-l)+"A"+n+","+n+",0,1,"+d+","+(this._x1=h)+","+(this._y1=f):v>1e-6&&(this._+="A"+n+","+n+",0,"+ +(v>=r)+","+d+","+(this._x1=t+n*Math.cos(s))+","+(this._y1=e+n*Math.sin(s))))},rect:function(t,e,n,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}},e.a=s},74:function(t,e,n){"use strict";(function(t){var r=n(12),i=n(3),o=n(5),c=n(0),s=n(77);function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debounce:0,scroll:!1},e=t.debounce,n=t.scroll,r=t.polyfill,u=r||("undefined"===typeof window?function t(){Object(o.a)(this,t)}:window.ResizeObserver);if(!u)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");var f=Object(c.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),v=Object(i.a)(f,2),p=v[0],b=v[1],g=Object(c.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:p}),y=e?"number"===typeof e?e:e.scroll:null,m=e?"number"===typeof e?e:e.resize:null,x=Object(c.useMemo)((function(){var t=function(){if(g.current.element){var t=g.current.element.getBoundingClientRect(),e={left:t.left,top:t.top,width:t.width,height:t.height,bottom:t.bottom,right:t.right,x:t.x,y:t.y};Object.freeze(e),d(g.current.lastBounds,e)||b(g.current.lastBounds=e)}};return[t,m?Object(s.debounce)(t,m):t,y?Object(s.debounce)(t,y):t]}),[b,y,m]),w=Object(i.a)(x,3),O=w[0],_=w[1],M=w[2];function E(){g.current.scrollContainers&&(g.current.scrollContainers.forEach((function(t){return t.removeEventListener("scroll",M,!0)})),g.current.scrollContainers=null),g.current.resizeObserver&&(g.current.resizeObserver.disconnect(),g.current.resizeObserver=null)}function j(){g.current.element&&(g.current.resizeObserver=new u(M),g.current.resizeObserver.observe(g.current.element),n&&g.current.scrollContainers&&g.current.scrollContainers.forEach((function(t){return t.addEventListener("scroll",M,{capture:!0,passive:!0})})))}var z=function(t){t&&t!==g.current.element&&(E(),g.current.element=t,g.current.scrollContainers=h(t),j())};return l(M,Boolean(n)),a(_),Object(c.useEffect)((function(){E(),j()}),[n,M,_]),Object(c.useEffect)((function(){return E}),[]),[z,p,O]}function a(t){Object(c.useEffect)((function(){var e=t;return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[t])}function l(t,e){Object(c.useEffect)((function(){if(e){var n=t;return window.addEventListener("scroll",n,{capture:!0,passive:!0}),function(){window.removeEventListener("scroll",n,!0)}}}),[t,e])}function h(t){var e=[];if(!t||t===document.body)return e;var n=window.getComputedStyle(t);return[n.overflow,n.overflowX,n.overflowY].some((function(t){return"auto"===t||"scroll"===t}))&&e.push(t),[].concat(e,Object(r.a)(h(t.parentElement)))}var f=["x","y","top","bottom","left","right","width","height"],d=function(t,e){return f.every((function(n){return t[n]===e[n]}))};Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(t,"exports").writable&&(t.exports=u),e.a=u}).call(this,n(76)(t))},75:function(t,e,n){"use strict";var r=n(82);e.a=function(t){return(t=Object(r.a)(Math.abs(t)))?t[1]:NaN}},76:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},77:function(t,e){function n(t,e,n){var r,i,o,c,s;function u(){var a=Date.now()-c;a<e&&a>=0?r=setTimeout(u,e-a):(r=null,n||(s=t.apply(o,i),o=i=null))}null==e&&(e=100);var a=function(){o=this,i=arguments,c=Date.now();var a=n&&!r;return r||(r=setTimeout(u,e)),a&&(s=t.apply(o,i),o=i=null),s};return a.clear=function(){r&&(clearTimeout(r),r=null)},a.flush=function(){r&&(s=t.apply(o,i),o=i=null,clearTimeout(r),r=null)},a}n.debounce=n,t.exports=n},79:function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));var r,i=[],o="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var c,s=function(){function t(t,e,n,r){return this.x=t,this.y=e,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),u=function(t){return t instanceof SVGElement&&"getBBox"in t},a=function(t){if(u(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,o=i.offsetWidth,c=i.offsetHeight;return!(o||c||t.getClientRects().length)},l=function(t){var e,n,r=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},h="undefined"!==typeof window?window:{},f=new WeakMap,d=/auto|scroll/,v=/^tb|vertical/,p=/msie|trident/i.test(h.navigator&&h.navigator.userAgent),b=function(t){return parseFloat(t||"0")},g=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},y=Object.freeze({devicePixelContentBoxSize:g(),borderBoxSize:g(),contentBoxSize:g(),contentRect:new s(0,0,0,0)}),m=function(t,e){if(void 0===e&&(e=!1),f.has(t)&&!e)return f.get(t);if(a(t))return f.set(t,y),y;var n=getComputedStyle(t),r=u(t)&&t.ownerSVGElement&&t.getBBox(),i=!p&&"border-box"===n.boxSizing,o=v.test(n.writingMode||""),c=!r&&d.test(n.overflowY||""),l=!r&&d.test(n.overflowX||""),h=r?0:b(n.paddingTop),m=r?0:b(n.paddingRight),x=r?0:b(n.paddingBottom),w=r?0:b(n.paddingLeft),O=r?0:b(n.borderTopWidth),_=r?0:b(n.borderRightWidth),M=r?0:b(n.borderBottomWidth),E=w+m,j=h+x,z=(r?0:b(n.borderLeftWidth))+_,T=O+M,S=l?t.offsetHeight-T-t.clientHeight:0,B=c?t.offsetWidth-z-t.clientWidth:0,k=i?E+z:0,C=i?j+T:0,R=r?r.width:b(n.width)-k-B,N=r?r.height:b(n.height)-C-S,P=R+E+B+z,A=N+j+S+T,L=Object.freeze({devicePixelContentBoxSize:g(Math.round(R*devicePixelRatio),Math.round(N*devicePixelRatio),o),borderBoxSize:g(P,A,o),contentBoxSize:g(R,N,o),contentRect:new s(w,h,R,N)});return f.set(t,L),L},x=function(t,e,n){var i=m(t,n),o=i.borderBoxSize,c=i.contentBoxSize,s=i.devicePixelContentBoxSize;switch(e){case r.DEVICE_PIXEL_CONTENT_BOX:return s;case r.BORDER_BOX:return o;default:return c}},w=function(t){var e=m(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},O=function(t){if(a(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},_=function(){var t=1/0,e=[];i.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(e){var n=new w(e.target),i=O(e.target);r.push(n),e.lastReportedSize=x(e.target,e.observedBox),i<t&&(t=i)})),e.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=e;n<r.length;n++){(0,r[n])()}return t},M=function(t){i.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(O(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},E=function(){var t=0;for(M(t);i.some((function(t){return t.activeTargets.length>0}));)t=_(),M(t);return i.some((function(t){return t.skippedTargets.length>0}))&&function(){var t;"function"===typeof ErrorEvent?t=new ErrorEvent("error",{message:o}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=o),window.dispatchEvent(t)}(),t>0},j=[],z=function(t){if(!c){var e=0,n=document.createTextNode("");new MutationObserver((function(){return j.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),c=function(){n.textContent=""+(e?e--:e++)}}j.push(t),c()},T=0,S={attributes:!0,characterData:!0,childList:!0,subtree:!0},B=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],k=function(t){return void 0===t&&(t=0),Date.now()+t},C=!1,R=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!C){C=!0;var n,r=k(t);n=function(){var n=!1;try{n=E()}finally{if(C=!1,t=r-k(),!T)return;n?e.run(1e3):t>0?e.run(t):e.start()}},z((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,S)};document.body?e():h.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),B.forEach((function(e){return h.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),B.forEach((function(e){return h.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),N=function(t){!T&&t>0&&R.start(),!(T+=t)&&R.stop()},P=function(){function t(t,e){this.target=t,this.observedBox=e||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=x(this.target,this.observedBox,!0);return t=this.target,u(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),A=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},L=new WeakMap,D=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},X=function(){function t(){}return t.connect=function(t,e){var n=new A(t,e);L.set(t,n)},t.observe=function(t,e,n){var r=L.get(t),o=0===r.observationTargets.length;D(r.observationTargets,e)<0&&(o&&i.push(r),r.observationTargets.push(new P(e,n&&n.box)),N(1),R.schedule())},t.unobserve=function(t,e){var n=L.get(t),r=D(n.observationTargets,e),o=1===n.observationTargets.length;r>=0&&(o&&i.splice(i.indexOf(n),1),n.observationTargets.splice(r,1),N(-1))},t.disconnect=function(t){var e=this,n=L.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),F=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");X.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");X.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");X.unobserve(this,t)},t.prototype.disconnect=function(){X.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}()},82:function(t,e,n){"use strict";e.a=function(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}}}]);
//# sourceMappingURL=2.3dc82635.chunk.js.map