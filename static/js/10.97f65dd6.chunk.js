/*! For license information please see 10.97f65dd6.chunk.js.LICENSE.txt */
(this["webpackJsonpraster-react-canvas2"]=this["webpackJsonpraster-react-canvas2"]||[]).push([[10],{112:function(n,t,r){"use strict";r.d(t,"a",(function(){return i}));var e=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function i(n){if(!(t=e.exec(n)))throw new Error("invalid format: "+n);var t;return new a({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function a(n){this.fill=void 0===n.fill?" ":n.fill+"",this.align=void 0===n.align?">":n.align+"",this.sign=void 0===n.sign?"-":n.sign+"",this.symbol=void 0===n.symbol?"":n.symbol+"",this.zero=!!n.zero,this.width=void 0===n.width?void 0:+n.width,this.comma=!!n.comma,this.precision=void 0===n.precision?void 0:+n.precision,this.trim=!!n.trim,this.type=void 0===n.type?"":n.type+""}i.prototype=a.prototype,a.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}},113:function(n,t,r){"use strict";var e=r(88);t.a=function(n){var t;return 1===n.length&&(t=n,n=function(n,r){return Object(e.a)(t(n),r)}),{left:function(t,r,e,i){for(null==e&&(e=0),null==i&&(i=t.length);e<i;){var a=e+i>>>1;n(t[a],r)<0?e=a+1:i=a}return e},right:function(t,r,e,i){for(null==e&&(e=0),null==i&&(i=t.length);e<i;){var a=e+i>>>1;n(t[a],r)>0?i=a:e=a+1}return e}}}},143:function(n,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"a",(function(){return f}));var e=r(150),i=r(86),a=r(85),o=r(112),u=r(151),c=r(244),s=r(152),l=r(153);function h(n){var t=n.domain;return n.ticks=function(n){var r=t();return Object(e.a)(r[0],r[r.length-1],null==n?10:n)},n.tickFormat=function(n,r){var i=t();return function(n,t,r,i){var a,h=Object(e.c)(n,t,r);switch((i=Object(o.a)(null==i?",f":i)).type){case"s":var f=Math.max(Math.abs(n),Math.abs(t));return null!=i.precision||isNaN(a=Object(u.a)(h,f))||(i.precision=a),Object(c.b)(i,f);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(a=Object(s.a)(h,Math.max(Math.abs(n),Math.abs(t))))||(i.precision=a-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(a=Object(l.a)(h))||(i.precision=a-2*("%"===i.type))}return Object(c.a)(i)}(i[0],i[i.length-1],null==n?10:n,r)},n.nice=function(r){null==r&&(r=10);var i,a=t(),o=0,u=a.length-1,c=a[o],s=a[u];return s<c&&(i=c,c=s,s=i,i=o,o=u,u=i),(i=Object(e.b)(c,s,r))>0?(c=Math.floor(c/i)*i,s=Math.ceil(s/i)*i,i=Object(e.b)(c,s,r)):i<0&&(c=Math.ceil(c*i)/i,s=Math.floor(s*i)/i,i=Object(e.b)(c,s,r)),i>0?(a[o]=Math.floor(c/i)*i,a[u]=Math.ceil(s/i)*i,t(a)):i<0&&(a[o]=Math.ceil(c*i)/i,a[u]=Math.floor(s*i)/i,t(a)),n},n}function f(){var n=Object(i.b)();return n.copy=function(){return Object(i.a)(n,f())},a.a.apply(n,arguments),h(n)}},150:function(n,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return u}));var e=Math.sqrt(50),i=Math.sqrt(10),a=Math.sqrt(2);function o(n,t,r){var o=(t-n)/Math.max(0,r),u=Math.floor(Math.log(o)/Math.LN10),c=o/Math.pow(10,u);return u>=0?(c>=e?10:c>=i?5:c>=a?2:1)*Math.pow(10,u):-Math.pow(10,-u)/(c>=e?10:c>=i?5:c>=a?2:1)}function u(n,t,r){var o=Math.abs(t-n)/Math.max(0,r),u=Math.pow(10,Math.floor(Math.log(o)/Math.LN10)),c=o/u;return c>=e?u*=10:c>=i?u*=5:c>=a&&(u*=2),t<n?-u:u}t.a=function(n,t,r){var e,i,a,u,c=-1;if(r=+r,(n=+n)===(t=+t)&&r>0)return[n];if((e=t<n)&&(i=n,n=t,t=i),0===(u=o(n,t,r))||!isFinite(u))return[];if(u>0)for(n=Math.ceil(n/u),t=Math.floor(t/u),a=new Array(i=Math.ceil(t-n+1));++c<i;)a[c]=(n+c)*u;else for(n=Math.floor(n*u),t=Math.ceil(t*u),a=new Array(i=Math.ceil(n-t+1));++c<i;)a[c]=(n-c)/u;return e&&a.reverse(),a}},151:function(n,t,r){"use strict";var e=r(75);t.a=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(e.a)(t)/3)))-Object(e.a)(Math.abs(n)))}},152:function(n,t,r){"use strict";var e=r(75);t.a=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Object(e.a)(t)-Object(e.a)(n))+1}},153:function(n,t,r){"use strict";var e=r(75);t.a=function(n){return Math.max(0,-Object(e.a)(Math.abs(n)))}},154:function(n,t,r){"use strict";t.a=function(n,t){return n=+n,t=+t,function(r){return Math.round(n*(1-r)+t*r)}}},243:function(n,t,r){"use strict";var e=function(n,t,r){n.prototype=t.prototype=r,r.constructor=n};function i(n,t){var r=Object.create(n.prototype);for(var e in t)r[e]=t[e];return r}function a(){}var o="\\s*([+-]?\\d+)\\s*",u="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",c="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",s=/^#([0-9a-f]{3,8})$/,l=new RegExp("^rgb\\("+[o,o,o]+"\\)$"),h=new RegExp("^rgb\\("+[c,c,c]+"\\)$"),f=new RegExp("^rgba\\("+[o,o,o,u]+"\\)$"),g=new RegExp("^rgba\\("+[c,c,c,u]+"\\)$"),d=new RegExp("^hsl\\("+[u,c,c]+"\\)$"),p=new RegExp("^hsla\\("+[u,c,c,u]+"\\)$"),m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function b(){return this.rgb().formatHex()}function v(){return this.rgb().formatRgb()}function y(n){var t,r;return n=(n+"").trim().toLowerCase(),(t=s.exec(n))?(r=t[1].length,t=parseInt(t[1],16),6===r?M(t):3===r?new k(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===r?w(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===r?w(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=l.exec(n))?new k(t[1],t[2],t[3],1):(t=h.exec(n))?new k(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=f.exec(n))?w(t[1],t[2],t[3],t[4]):(t=g.exec(n))?w(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=d.exec(n))?R(t[1],t[2]/100,t[3]/100,1):(t=p.exec(n))?R(t[1],t[2]/100,t[3]/100,t[4]):m.hasOwnProperty(n)?M(m[n]):"transparent"===n?new k(NaN,NaN,NaN,0):null}function M(n){return new k(n>>16&255,n>>8&255,255&n,1)}function w(n,t,r,e){return e<=0&&(n=t=r=NaN),new k(n,t,r,e)}function x(n){return n instanceof a||(n=y(n)),n?new k((n=n.rgb()).r,n.g,n.b,n.opacity):new k}function N(n,t,r,e){return 1===arguments.length?x(n):new k(n,t,r,null==e?1:e)}function k(n,t,r,e){this.r=+n,this.g=+t,this.b=+r,this.opacity=+e}function j(){return"#"+A(this.r)+A(this.g)+A(this.b)}function O(){var n=this.opacity;return(1===(n=isNaN(n)?1:Math.max(0,Math.min(1,n)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===n?")":", "+n+")")}function A(n){return((n=Math.max(0,Math.min(255,Math.round(n)||0)))<16?"0":"")+n.toString(16)}function R(n,t,r,e){return e<=0?n=t=r=NaN:r<=0||r>=1?n=t=NaN:t<=0&&(n=NaN),new E(n,t,r,e)}function z(n){if(n instanceof E)return new E(n.h,n.s,n.l,n.opacity);if(n instanceof a||(n=y(n)),!n)return new E;if(n instanceof E)return n;var t=(n=n.rgb()).r/255,r=n.g/255,e=n.b/255,i=Math.min(t,r,e),o=Math.max(t,r,e),u=NaN,c=o-i,s=(o+i)/2;return c?(u=t===o?(r-e)/c+6*(r<e):r===o?(e-t)/c+2:(t-r)/c+4,c/=s<.5?o+i:2-o-i,u*=60):c=s>0&&s<1?0:u,new E(u,c,s,n.opacity)}function E(n,t,r,e){this.h=+n,this.s=+t,this.l=+r,this.opacity=+e}function q(n,t,r){return 255*(n<60?t+(r-t)*n/60:n<180?r:n<240?t+(r-t)*(240-n)/60:t)}function S(n,t,r,e,i){var a=n*n,o=a*n;return((1-3*n+3*a-o)*t+(4-6*a+3*o)*r+(1+3*n+3*a-3*o)*e+o*i)/6}e(a,y,{copy:function(n){return Object.assign(new this.constructor,this,n)},displayable:function(){return this.rgb().displayable()},hex:b,formatHex:b,formatHsl:function(){return z(this).formatHsl()},formatRgb:v,toString:v}),e(k,N,i(a,{brighter:function(n){return n=null==n?1/.7:Math.pow(1/.7,n),new k(this.r*n,this.g*n,this.b*n,this.opacity)},darker:function(n){return n=null==n?.7:Math.pow(.7,n),new k(this.r*n,this.g*n,this.b*n,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:j,formatHex:j,formatRgb:O,toString:O})),e(E,(function(n,t,r,e){return 1===arguments.length?z(n):new E(n,t,r,null==e?1:e)}),i(a,{brighter:function(n){return n=null==n?1/.7:Math.pow(1/.7,n),new E(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=null==n?.7:Math.pow(.7,n),new E(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=this.h%360+360*(this.h<0),t=isNaN(n)||isNaN(this.s)?0:this.s,r=this.l,e=r+(r<.5?r:1-r)*t,i=2*r-e;return new k(q(n>=240?n-240:n+120,i,e),q(n,i,e),q(n<120?n+240:n-120,i,e),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var n=this.opacity;return(1===(n=isNaN(n)?1:Math.max(0,Math.min(1,n)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===n?")":", "+n+")")}}));var $=function(n){return function(){return n}};function P(n,t){return function(r){return n+r*t}}function H(n){return 1===(n=+n)?I:function(t,r){return r-t?function(n,t,r){return n=Math.pow(n,r),t=Math.pow(t,r)-n,r=1/r,function(e){return Math.pow(n+e*t,r)}}(t,r,n):$(isNaN(t)?r:t)}}function I(n,t){var r=t-n;return r?P(n,r):$(isNaN(n)?t:n)}var F=function n(t){var r=H(t);function e(n,t){var e=r((n=N(n)).r,(t=N(t)).r),i=r(n.g,t.g),a=r(n.b,t.b),o=I(n.opacity,t.opacity);return function(t){return n.r=e(t),n.g=i(t),n.b=a(t),n.opacity=o(t),n+""}}return e.gamma=n,e}(1);function C(n){return function(t){var r,e,i=t.length,a=new Array(i),o=new Array(i),u=new Array(i);for(r=0;r<i;++r)e=N(t[r]),a[r]=e.r||0,o[r]=e.g||0,u[r]=e.b||0;return a=n(a),o=n(o),u=n(u),e.opacity=1,function(n){return e.r=a(n),e.g=o(n),e.b=u(n),e+""}}}C((function(n){var t=n.length-1;return function(r){var e=r<=0?r=0:r>=1?(r=1,t-1):Math.floor(r*t),i=n[e],a=n[e+1],o=e>0?n[e-1]:2*i-a,u=e<t-1?n[e+2]:2*a-i;return S((r-e/t)*t,o,i,a,u)}})),C((function(n){var t=n.length;return function(r){var e=Math.floor(((r%=1)<0?++r:r)*t),i=n[(e+t-1)%t],a=n[e%t],o=n[(e+1)%t],u=n[(e+2)%t];return S((r-e/t)*t,i,a,o,u)}}));var L=function(n,t){t||(t=[]);var r,e=n?Math.min(t.length,n.length):0,i=t.slice();return function(a){for(r=0;r<e;++r)i[r]=n[r]*(1-a)+t[r]*a;return i}};function T(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function D(n,t){var r,e=t?t.length:0,i=n?Math.min(e,n.length):0,a=new Array(i),o=new Array(e);for(r=0;r<i;++r)a[r]=Y(n[r],t[r]);for(;r<e;++r)o[r]=t[r];return function(n){for(r=0;r<i;++r)o[r]=a[r](n);return o}}var J=function(n,t){var r=new Date;return n=+n,t=+t,function(e){return r.setTime(n*(1-e)+t*e),r}},V=r(89),X=function(n,t){var r,e={},i={};for(r in null!==n&&"object"===typeof n||(n={}),null!==t&&"object"===typeof t||(t={}),t)r in n?e[r]=Y(n[r],t[r]):i[r]=t[r];return function(n){for(r in e)i[r]=e[r](n);return i}},B=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,G=new RegExp(B.source,"g");var U=function(n,t){var r,e,i,a=B.lastIndex=G.lastIndex=0,o=-1,u=[],c=[];for(n+="",t+="";(r=B.exec(n))&&(e=G.exec(t));)(i=e.index)>a&&(i=t.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(r=r[0])===(e=e[0])?u[o]?u[o]+=e:u[++o]=e:(u[++o]=null,c.push({i:o,x:Object(V.a)(r,e)})),a=G.lastIndex;return a<t.length&&(i=t.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?c[0]?function(n){return function(t){return n(t)+""}}(c[0].x):function(n){return function(){return n}}(t):(t=c.length,function(n){for(var r,e=0;e<t;++e)u[(r=c[e]).i]=r.x(n);return u.join("")})},Y=t.a=function(n,t){var r,e=typeof t;return null==t||"boolean"===e?$(t):("number"===e?V.a:"string"===e?(r=y(t))?(t=r,F):U:t instanceof y?F:t instanceof Date?J:T(t)?L:Array.isArray(t)?D:"function"!==typeof t.valueOf&&"function"!==typeof t.toString||isNaN(t)?X:V.a)(n,t)}},244:function(n,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var e,i,a,o,u=r(75),c=r(112),s=r(83),l=function(n,t){var r=Object(s.a)(n,t);if(!r)return n+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")},h={"%":function(n,t){return(100*n).toFixed(t)},b:function(n){return Math.round(n).toString(2)},c:function(n){return n+""},d:function(n){return Math.round(n).toString(10)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},g:function(n,t){return n.toPrecision(t)},o:function(n){return Math.round(n).toString(8)},p:function(n,t){return l(100*n,t)},r:l,s:function(n,t){var r=Object(s.a)(n,t);if(!r)return n+"";var i=r[0],a=r[1],o=a-(e=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,u=i.length;return o===u?i:o>u?i+new Array(o-u+1).join("0"):o>0?i.slice(0,o)+"."+i.slice(o):"0."+new Array(1-o).join("0")+Object(s.a)(n,Math.max(0,t+o-1))[0]},X:function(n){return Math.round(n).toString(16).toUpperCase()},x:function(n){return Math.round(n).toString(16)}},f=function(n){return n},g=Array.prototype.map,d=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"];i=function(n){var t,r,i=void 0===n.grouping||void 0===n.thousands?f:(t=g.call(n.grouping,Number),r=n.thousands+"",function(n,e){for(var i=n.length,a=[],o=0,u=t[0],c=0;i>0&&u>0&&(c+u+1>e&&(u=Math.max(1,e-c)),a.push(n.substring(i-=u,i+u)),!((c+=u+1)>e));)u=t[o=(o+1)%t.length];return a.reverse().join(r)}),a=void 0===n.currency?"":n.currency[0]+"",o=void 0===n.currency?"":n.currency[1]+"",s=void 0===n.decimal?".":n.decimal+"",l=void 0===n.numerals?f:function(n){return function(t){return t.replace(/[0-9]/g,(function(t){return n[+t]}))}}(g.call(n.numerals,String)),p=void 0===n.percent?"%":n.percent+"",m=void 0===n.minus?"-":n.minus+"",b=void 0===n.nan?"NaN":n.nan+"";function v(n){var t=(n=Object(c.a)(n)).fill,r=n.align,u=n.sign,f=n.symbol,g=n.zero,v=n.width,y=n.comma,M=n.precision,w=n.trim,x=n.type;"n"===x?(y=!0,x="g"):h[x]||(void 0===M&&(M=12),w=!0,x="g"),(g||"0"===t&&"="===r)&&(g=!0,t="0",r="=");var N="$"===f?a:"#"===f&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",k="$"===f?o:/[%p]/.test(x)?p:"",j=h[x],O=/[defgprs%]/.test(x);function A(n){var a,o,c,h=N,f=k;if("c"===x)f=j(n)+f,n="";else{var p=(n=+n)<0||1/n<0;if(n=isNaN(n)?b:j(Math.abs(n),M),w&&(n=function(n){n:for(var t,r=n.length,e=1,i=-1;e<r;++e)switch(n[e]){case".":i=t=e;break;case"0":0===i&&(i=e),t=e;break;default:if(!+n[e])break n;i>0&&(i=0)}return i>0?n.slice(0,i)+n.slice(t+1):n}(n)),p&&0===+n&&"+"!==u&&(p=!1),h=(p?"("===u?u:m:"-"===u||"("===u?"":u)+h,f=("s"===x?d[8+e/3]:"")+f+(p&&"("===u?")":""),O)for(a=-1,o=n.length;++a<o;)if(48>(c=n.charCodeAt(a))||c>57){f=(46===c?s+n.slice(a+1):n.slice(a))+f,n=n.slice(0,a);break}}y&&!g&&(n=i(n,1/0));var A=h.length+n.length+f.length,R=A<v?new Array(v-A+1).join(t):"";switch(y&&g&&(n=i(R+n,R.length?v-f.length:1/0),R=""),r){case"<":n=h+n+f+R;break;case"=":n=h+R+n+f;break;case"^":n=R.slice(0,A=R.length>>1)+h+n+f+R.slice(A);break;default:n=R+h+n+f}return l(n)}return M=void 0===M?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M)),A.toString=function(){return n+""},A}return{format:v,formatPrefix:function(n,t){var r=v(((n=Object(c.a)(n)).type="f",n)),e=3*Math.max(-8,Math.min(8,Math.floor(Object(u.a)(t)/3))),i=Math.pow(10,-e),a=d[8+e/3];return function(n){return r(i*n)+a}}}}({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),a=i.format,o=i.formatPrefix},246:function(n,t,r){"use strict";r.d(t,"a",(function(){return u}));var e=Math.PI/3,i=[0,e,2*e,3*e,4*e,5*e];function a(n){return n[0]}function o(n){return n[1]}var u=function(){var n,t,r,u=0,c=0,s=1,l=1,h=a,f=o;function g(n){var e,i={},a=[],o=n.length;for(e=0;e<o;++e)if(!isNaN(c=+h.call(null,u=n[e],e,n))&&!isNaN(s=+f.call(null,u,e,n))){var u,c,s,l=Math.round(s/=r),g=Math.round(c=c/t-(1&l)/2),d=s-l;if(3*Math.abs(d)>1){var p=c-g,m=g+(c<g?-1:1)/2,b=l+(s<l?-1:1),v=c-m,y=s-b;p*p+d*d>v*v+y*y&&(g=m+(1&l?1:-1)/2,l=b)}var M=g+"-"+l,w=i[M];w?w.push(u):(a.push(w=i[M]=[u]),w.x=(g+(1&l)/2)*t,w.y=l*r)}return a}function d(n){var t=0,r=0;return i.map((function(e){var i=Math.sin(e)*n,a=-Math.cos(e)*n,o=i-t,u=a-r;return t=i,r=a,[o,u]}))}return g.hexagon=function(t){return"m"+d(null==t?n:+t).join("l")+"z"},g.centers=function(){for(var e=[],i=Math.round(c/r),a=Math.round(u/t),o=i*r;o<l+n;o+=r,++i)for(var h=a*t+(1&i)*t/2;h<s+t/2;h+=t)e.push([h,o]);return e},g.mesh=function(){var t=d(n).slice(0,4).join("l");return g.centers().map((function(n){return"M"+n+"m"+t})).join("")},g.x=function(n){return arguments.length?(h=n,g):h},g.y=function(n){return arguments.length?(f=n,g):f},g.radius=function(i){return arguments.length?(t=2*(n=+i)*Math.sin(e),r=1.5*n,g):n},g.size=function(n){return arguments.length?(u=c=0,s=+n[0],l=+n[1],g):[s-u,l-c]},g.extent=function(n){return arguments.length?(u=+n[0][0],c=+n[0][1],s=+n[1][0],l=+n[1][1],g):[[u,c],[s,l]]},g.radius(1)}},314:function(n,t,r){"use strict";r.d(t,"a",(function(){return f}));var e=r(22),i=r.n(e),a=r(0),o=r.n(a),u=r(72),c=r.n(u);function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n}).apply(this,arguments)}var l={x:0,y:0},h=function(n){var t=n.sides,r=n.size,e=n.center,i=void 0===e?l:e,a=n.rotate,o=void 0===a?0:a,u=function(n){return Math.PI/180*n}(360/t*n.side-o);return{x:i.x+r*Math.cos(u),y:i.y+r*Math.sin(u)}};function f(n){var t=n.sides,r=n.size,e=void 0===r?25:r,i=n.center,a=void 0===i?l:i,u=n.rotate,f=void 0===u?0:u,g=n.className,d=n.children,p=n.innerRef,m=function(n,t){if(null==n)return{};var r,e,i={},a=Object.keys(n);for(e=0;e<a.length;e++)r=a[e],t.indexOf(r)>=0||(i[r]=n[r]);return i}(n,["sides","size","center","rotate","className","children","innerRef"]),b=function(n){var t=n.sides,r=n.size,e=n.center,i=n.rotate;return new Array(t).fill(0).map((function(n,a){return h({sides:t,size:r,center:e,rotate:i,side:a})}))}({sides:t,size:e,center:a,rotate:f}).map((function(n){return[n.x,n.y]}));return d?o.a.createElement(o.a.Fragment,null,d({points:b})):o.a.createElement("polygon",s({ref:p,className:c()("vx-polygon",g),points:b.join(" ")},m))}f.propTypes={sides:i.a.number.isRequired,size:i.a.number.isRequired,className:i.a.string,rotate:i.a.number,children:i.a.func,innerRef:i.a.oneOfType([i.a.string,i.a.func,i.a.object]),center:i.a.shape({x:i.a.number.isRequired,y:i.a.number.isRequired})}},72:function(n,t,r){var e;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var n=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var a=typeof e;if("string"===a||"number"===a)n.push(e);else if(Array.isArray(e)&&e.length){var o=i.apply(null,e);o&&n.push(o)}else if("object"===a)for(var u in e)r.call(e,u)&&e[u]&&n.push(u)}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(e=function(){return i}.apply(t,[]))||(n.exports=e)}()},75:function(n,t,r){"use strict";var e=r(83);t.a=function(n){return(n=Object(e.a)(Math.abs(n)))?n[1]:NaN}},83:function(n,t,r){"use strict";t.a=function(n,t){if((r=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var r,e=n.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+n.slice(r+1)]}},85:function(n,t,r){"use strict";function e(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n)}return this}r.d(t,"a",(function(){return e}))},86:function(n,t,r){"use strict";r.d(t,"c",(function(){return g})),r.d(t,"a",(function(){return b})),r.d(t,"d",(function(){return v})),r.d(t,"b",(function(){return y}));var e=r(88),i=r(113),a=Object(i.a)(e.a),o=a.right,u=(a.left,o),c=r(243),s=r(89),l=r(154),h=function(n){return+n},f=[0,1];function g(n){return n}function d(n,t){return(t-=n=+n)?function(r){return(r-n)/t}:(r=isNaN(t)?NaN:.5,function(){return r});var r}function p(n,t,r){var e=n[0],i=n[1],a=t[0],o=t[1];return i<e?(e=d(i,e),a=r(o,a)):(e=d(e,i),a=r(a,o)),function(n){return a(e(n))}}function m(n,t,r){var e=Math.min(n.length,t.length)-1,i=new Array(e),a=new Array(e),o=-1;for(n[e]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<e;)i[o]=d(n[o],n[o+1]),a[o]=r(t[o],t[o+1]);return function(t){var r=u(n,t,1,e)-1;return a[r](i[r](t))}}function b(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function v(){var n,t,r,e,i,a,o=f,u=f,d=c.a,b=g;function v(){var n=Math.min(o.length,u.length);return b!==g&&(b=function(n,t){var r;return n>t&&(r=n,n=t,t=r),function(r){return Math.max(n,Math.min(t,r))}}(o[0],o[n-1])),e=n>2?m:p,i=a=null,y}function y(t){return isNaN(t=+t)?r:(i||(i=e(o.map(n),u,d)))(n(b(t)))}return y.invert=function(r){return b(t((a||(a=e(u,o.map(n),s.a)))(r)))},y.domain=function(n){return arguments.length?(o=Array.from(n,h),v()):o.slice()},y.range=function(n){return arguments.length?(u=Array.from(n),v()):u.slice()},y.rangeRound=function(n){return u=Array.from(n),d=l.a,v()},y.clamp=function(n){return arguments.length?(b=!!n||g,v()):b!==g},y.interpolate=function(n){return arguments.length?(d=n,v()):d},y.unknown=function(n){return arguments.length?(r=n,y):r},function(r,e){return n=r,t=e,v()}}function y(){return v()(g,g)}},88:function(n,t,r){"use strict";t.a=function(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}},89:function(n,t,r){"use strict";t.a=function(n,t){return n=+n,t=+t,function(r){return n*(1-r)+t*r}}}}]);
//# sourceMappingURL=10.97f65dd6.chunk.js.map