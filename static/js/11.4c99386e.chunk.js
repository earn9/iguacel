(this["webpackJsonpraster-react-canvas2"]=this["webpackJsonpraster-react-canvas2"]||[]).push([[11],{132:function(t,n,e){"use strict";function r(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,u,a,s,c,f,h,l,p=t._root,_={data:r},y=t._x0,v=t._y0,d=t._x1,g=t._y1;if(!p)return t._root=_,t;for(;p.length;)if((c=n>=(o=(y+d)/2))?y=o:d=o,(f=e>=(u=(v+g)/2))?v=u:g=u,i=p,!(p=p[h=f<<1|c]))return i[h]=_,t;if(a=+t._x.call(null,p.data),s=+t._y.call(null,p.data),n===a&&e===s)return _.next=p,i?i[h]=_:t._root=_,t;do{i=i?i[h]=new Array(4):t._root=new Array(4),(c=n>=(o=(y+d)/2))?y=o:d=o,(f=e>=(u=(v+g)/2))?v=u:g=u}while((h=f<<1|c)===(l=(s>=u)<<1|a>=o));return i[l]=p,i[h]=_,t}var i=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i};function o(t){return t[0]}function u(t){return t[1]}function a(t,n,e){var r=new s(null==n?o:n,null==e?u:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function s(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function c(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var f=a.prototype=s.prototype;f.copy=function(){var t,n,e=new s(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=c(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=c(n));return e},f.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return r(this.cover(n,e),n,e,t)},f.addAll=function(t){var n,e,i,o,u=t.length,a=new Array(u),s=new Array(u),c=1/0,f=1/0,h=-1/0,l=-1/0;for(e=0;e<u;++e)isNaN(i=+this._x.call(null,n=t[e]))||isNaN(o=+this._y.call(null,n))||(a[e]=i,s[e]=o,i<c&&(c=i),i>h&&(h=i),o<f&&(f=o),o>l&&(l=o));if(c>h||f>l)return this;for(this.cover(c,f).cover(h,l),e=0;e<u;++e)r(this,a[e],s[e],t[e]);return this},f.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{for(var u,a,s=i-e,c=this._root;e>t||t>=i||r>n||n>=o;)switch(a=(n<r)<<1|t<e,(u=new Array(4))[a]=c,c=u,s*=2,a){case 0:i=e+s,o=r+s;break;case 1:e=i-s,o=r+s;break;case 2:i=e+s,r=o-s;break;case 3:e=i-s,r=o-s}this._root&&this._root.length&&(this._root=c)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},f.data=function(){var t=[];return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},f.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},f.find=function(t,n,e){var r,o,u,a,s,c,f,h=this._x0,l=this._y0,p=this._x1,_=this._y1,y=[],v=this._root;for(v&&y.push(new i(v,h,l,p,_)),null==e?e=1/0:(h=t-e,l=n-e,p=t+e,_=n+e,e*=e);c=y.pop();)if(!(!(v=c.node)||(o=c.x0)>p||(u=c.y0)>_||(a=c.x1)<h||(s=c.y1)<l))if(v.length){var d=(o+a)/2,g=(u+s)/2;y.push(new i(v[3],d,g,a,s),new i(v[2],o,g,d,s),new i(v[1],d,u,a,g),new i(v[0],o,u,d,g)),(f=(n>=g)<<1|t>=d)&&(c=y[y.length-1],y[y.length-1]=y[y.length-1-f],y[y.length-1-f]=c)}else{var w=t-+this._x.call(null,v.data),x=n-+this._y.call(null,v.data),m=w*w+x*x;if(m<e){var A=Math.sqrt(e=m);h=t-A,l=n-A,p=t+A,_=n+A,r=v.data}}return r},f.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(u=+this._y.call(null,t)))return this;var n,e,r,i,o,u,a,s,c,f,h,l,p=this._root,_=this._x0,y=this._y0,v=this._x1,d=this._y1;if(!p)return this;if(p.length)for(;;){if((c=o>=(a=(_+v)/2))?_=a:v=a,(f=u>=(s=(y+d)/2))?y=s:d=s,n=p,!(p=p[h=f<<1|c]))return this;if(!p.length)break;(n[h+1&3]||n[h+2&3]||n[h+3&3])&&(e=n,l=h)}for(;p.data!==t;)if(r=p,!(p=p.next))return this;return(i=p.next)&&delete p.next,r?(i?r.next=i:delete r.next,this):n?(i?n[h]=i:delete n[h],(p=n[0]||n[1]||n[2]||n[3])&&p===(n[3]||n[2]||n[1]||n[0])&&!p.length&&(e?e[l]=p:this._root=p),this):(this._root=i,this)},f.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},f.root=function(){return this._root},f.size=function(){var t=0;return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},f.visit=function(t){var n,e,r,o,u,a,s=[],c=this._root;for(c&&s.push(new i(c,this._x0,this._y0,this._x1,this._y1));n=s.pop();)if(!t(c=n.node,r=n.x0,o=n.y0,u=n.x1,a=n.y1)&&c.length){var f=(r+u)/2,h=(o+a)/2;(e=c[3])&&s.push(new i(e,f,h,u,a)),(e=c[2])&&s.push(new i(e,r,h,f,a)),(e=c[1])&&s.push(new i(e,f,o,u,h)),(e=c[0])&&s.push(new i(e,r,o,f,h))}return this},f.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new i(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var o=n.node;if(o.length){var u,a=n.x0,s=n.y0,c=n.x1,f=n.y1,h=(a+c)/2,l=(s+f)/2;(u=o[0])&&e.push(new i(u,a,s,h,l)),(u=o[1])&&e.push(new i(u,h,s,c,l)),(u=o[2])&&e.push(new i(u,a,l,h,f)),(u=o[3])&&e.push(new i(u,h,l,c,f))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},f.x=function(t){return arguments.length?(this._x=t,this):this._x},f.y=function(t){return arguments.length?(this._y=t,this):this._y};var h=function(t){return function(){return t}},l=function(){return 1e-6*(Math.random()-.5)};function p(t){return t.index}function _(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}var y=function(t){var n,e,r,i,o,u=p,a=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},s=h(30),c=1;function f(r){for(var i=0,u=t.length;i<c;++i)for(var a,s,f,h,p,_,y,v=0;v<u;++v)s=(a=t[v]).source,h=(f=a.target).x+f.vx-s.x-s.vx||l(),p=f.y+f.vy-s.y-s.vy||l(),h*=_=((_=Math.sqrt(h*h+p*p))-e[v])/_*r*n[v],p*=_,f.vx-=h*(y=o[v]),f.vy-=p*y,s.vx+=h*(y=1-y),s.vy+=p*y}function y(){if(r){var a,s,c=r.length,f=t.length,h=new Map(r.map((function(t,n){return[u(t,n,r),t]})));for(a=0,i=new Array(c);a<f;++a)(s=t[a]).index=a,"object"!==typeof s.source&&(s.source=_(h,s.source)),"object"!==typeof s.target&&(s.target=_(h,s.target)),i[s.source.index]=(i[s.source.index]||0)+1,i[s.target.index]=(i[s.target.index]||0)+1;for(a=0,o=new Array(f);a<f;++a)s=t[a],o[a]=i[s.source.index]/(i[s.source.index]+i[s.target.index]);n=new Array(f),v(),e=new Array(f),d()}}function v(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+a(t[e],e,t)}function d(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+s(t[n],n,t)}return null==t&&(t=[]),f.initialize=function(t){r=t,y()},f.links=function(n){return arguments.length?(t=n,y(),f):t},f.id=function(t){return arguments.length?(u=t,f):u},f.iterations=function(t){return arguments.length?(c=+t,f):c},f.strength=function(t){return arguments.length?(a="function"===typeof t?t:h(+t),v(),f):a},f.distance=function(t){return arguments.length?(s="function"===typeof t?t:h(+t),d(),f):s},f},v={value:function(){}};function d(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new g(r)}function g(t){this._=t}function w(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function x(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function m(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=v,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}g.prototype=d.prototype={constructor:g,on:function(t,n){var e,r=this._,i=w(t+"",r),o=-1,u=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!==typeof n)throw new Error("invalid callback: "+n);for(;++o<u;)if(e=(t=i[o]).type)r[e]=m(r[e],t.name,n);else if(null==n)for(e in r)r[e]=m(r[e],t.name,null);return this}for(;++o<u;)if((e=(t=i[o]).type)&&(e=x(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new g(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var A,N,b=d,E=0,C=0,M=0,T=0,S=0,k=0,j="object"===typeof performance&&performance.now?performance:Date,O="object"===typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function q(){return S||(O(P),S=j.now()+k)}function P(){S=0}function D(){this._call=this._time=this._next=null}function R(t,n,e){var r=new D;return r.restart(t,n,e),r}function U(){S=(T=j.now())+k,E=C=0;try{!function(){q(),++E;for(var t,n=A;n;)(t=S-n._time)>=0&&n._call.call(null,t),n=n._next;--E}()}finally{E=0,function(){var t,n,e=A,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:A=n);N=t,B(r)}(),S=0}}function z(){var t=j.now(),n=t-T;n>1e3&&(k-=n,T=t)}function B(t){E||(C&&(C=clearTimeout(C)),t-S>24?(t<1/0&&(C=setTimeout(U,t-j.now()-k)),M&&(M=clearInterval(M))):(M||(T=j.now(),M=setInterval(z,1e3)),E=1,O(U)))}D.prototype=R.prototype={constructor:D,restart:function(t,n,e){if("function"!==typeof t)throw new TypeError("callback is not a function");e=(null==e?q():+e)+(null==n?0:+n),this._next||N===this||(N?N._next=this:A=this,N=this),this._call=t,this._time=e,B()},stop:function(){this._call&&(this._call=null,this._time=1/0,B())}};var L=Math.PI*(3-Math.sqrt(5)),I=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,u=.6,a=new Map,s=R(f),c=b("tick","end");function f(){h(),c.call("tick",n),e<r&&(s.stop(),c.call("end",n))}function h(r){var s,c,f=t.length;void 0===r&&(r=1);for(var h=0;h<r;++h)for(e+=(o-e)*i,a.forEach((function(t){t(e)})),s=0;s<f;++s)null==(c=t[s]).fx?c.x+=c.vx*=u:(c.x=c.fx,c.vx=0),null==c.fy?c.y+=c.vy*=u:(c.y=c.fy,c.vy=0);return n}function l(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=10*Math.sqrt(e),o=e*L;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function p(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),l(),n={tick:h,restart:function(){return s.restart(f),n},stop:function(){return s.stop(),n},nodes:function(e){return arguments.length?(t=e,l(),a.forEach(p),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(u=1-t,n):1-u},force:function(t,e){return arguments.length>1?(null==e?a.delete(t):a.set(t,p(e)),n):a.get(t)},find:function(n,e,r){var i,o,u,a,s,c=0,f=t.length;for(null==r?r=1/0:r*=r,c=0;c<f;++c)(u=(i=n-(a=t[c]).x)*i+(o=e-a.y)*o)<r&&(s=a,r=u);return s},on:function(t,e){return arguments.length>1?(c.on(t,e),n):c.on(t)}}},V=function(t){var n,e,r,i=h(.1);function o(t){for(var i,o=0,u=n.length;o<u;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function u(){if(n){var o,u=n.length;for(e=new Array(u),r=new Array(u),o=0;o<u;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!==typeof t&&(t=h(null==t?0:+t)),o.initialize=function(t){n=t,u()},o.strength=function(t){return arguments.length?(i="function"===typeof t?t:h(+t),u(),o):i},o.x=function(n){return arguments.length?(t="function"===typeof n?n:h(+n),u(),o):t},o},H=function(t){var n,e,r,i=h(.1);function o(t){for(var i,o=0,u=n.length;o<u;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function u(){if(n){var o,u=n.length;for(e=new Array(u),r=new Array(u),o=0;o<u;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!==typeof t&&(t=h(null==t?0:+t)),o.initialize=function(t){n=t,u()},o.strength=function(t){return arguments.length?(i="function"===typeof t?t:h(+t),u(),o):i},o.y=function(n){return arguments.length?(t="function"===typeof n?n:h(+n),u(),o):t},o};e.d(n,"a",(function(){return y})),e.d(n,"b",(function(){return I})),e.d(n,"c",(function(){return V})),e.d(n,"d",(function(){return H}))},155:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e(98),i=e(80),o=e(78);function u(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function a(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function s(t){return t<0?-t*t:t*t}function c(t){var n=t(i.c,i.c),e=1;function o(){return 1===e?t(i.c,i.c):.5===e?t(a,s):t(u(e),u(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,o()):e},Object(r.b)(n)}function f(){var t=c(Object(i.d)());return t.copy=function(){return Object(i.a)(t,f()).exponent(t.exponent())},o.a.apply(t,arguments),t}function h(){return f.apply(null,arguments).exponent(.5)}},156:function(t,n,e){"use strict";function r(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function i(t){this._context=t}i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:r(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:r(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},n.a=function(t){return new i(t)}},157:function(t,n,e){"use strict";function r(){}var i=function(t){return null==t?r:function(){return this.querySelector(t)}};function o(){return[]}var u=function(t){return new Array(t.length)};function a(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}a.prototype={constructor:a,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function s(t,n,e,r,i,o){for(var u,s=0,c=n.length,f=o.length;s<f;++s)(u=n[s])?(u.__data__=o[s],r[s]=u):e[s]=new a(t,o[s]);for(;s<c;++s)(u=n[s])&&(i[s]=u)}function c(t,n,e,r,i,o,u){var s,c,f,h={},l=n.length,p=o.length,_=new Array(l);for(s=0;s<l;++s)(c=n[s])&&(_[s]=f="$"+u.call(c,c.__data__,s,n),f in h?i[s]=c:h[f]=c);for(s=0;s<p;++s)(c=h[f="$"+u.call(t,o[s],s,o)])?(r[s]=c,c.__data__=o[s],h[f]=null):e[s]=new a(t,o[s]);for(s=0;s<l;++s)(c=n[s])&&h[_[s]]===c&&(i[s]=c)}function f(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}var h="http://www.w3.org/1999/xhtml",l={svg:"http://www.w3.org/2000/svg",xhtml:h,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},p=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),l.hasOwnProperty(n)?{space:l[n],local:t}:t};function _(t){return function(){this.removeAttribute(t)}}function y(t){return function(){this.removeAttributeNS(t.space,t.local)}}function v(t,n){return function(){this.setAttribute(t,n)}}function d(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function g(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function w(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var x=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function m(t){return function(){this.style.removeProperty(t)}}function A(t,n,e){return function(){this.style.setProperty(t,n,e)}}function N(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function b(t,n){return t.style.getPropertyValue(n)||x(t).getComputedStyle(t,null).getPropertyValue(n)}function E(t){return function(){delete this[t]}}function C(t,n){return function(){this[t]=n}}function M(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function T(t){return t.trim().split(/^|\s+/)}function S(t){return t.classList||new k(t)}function k(t){this._node=t,this._names=T(t.getAttribute("class")||"")}function j(t,n){for(var e=S(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function O(t,n){for(var e=S(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function q(t){return function(){j(this,t)}}function P(t){return function(){O(this,t)}}function D(t,n){return function(){(n.apply(this,arguments)?j:O)(this,t)}}k.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function R(){this.textContent=""}function U(t){return function(){this.textContent=t}}function z(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function B(){this.innerHTML=""}function L(t){return function(){this.innerHTML=t}}function I(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function V(){this.nextSibling&&this.parentNode.appendChild(this)}function H(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function F(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===h&&n.documentElement.namespaceURI===h?n.createElement(t):n.createElementNS(e,t)}}function J(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var Z=function(t){var n=p(t);return(n.local?J:F)(n)};function $(){return null}function X(){var t=this.parentNode;t&&t.removeChild(this)}function Y(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function G(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}var K={},Q=null;"undefined"!==typeof document&&("onmouseenter"in document.documentElement||(K={mouseenter:"mouseover",mouseleave:"mouseout"}));function W(t,n,e){return t=tt(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function tt(t,n,e){return function(r){var i=Q;Q=r;try{t.call(this,this.__data__,n,e)}finally{Q=i}}}function nt(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function et(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function rt(t,n,e){var r=K.hasOwnProperty(t.type)?W:tt;return function(i,o,u){var a,s=this.__on,c=r(n,o,u);if(s)for(var f=0,h=s.length;f<h;++f)if((a=s[f]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=c,a.capture=e),void(a.value=n);this.addEventListener(t.type,c,e),a={type:t.type,name:t.name,value:n,listener:c,capture:e},s?s.push(a):this.__on=[a]}}function it(t,n,e){var r=x(t),i=r.CustomEvent;"function"===typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ot(t,n){return function(){return it(this,t,n)}}function ut(t,n){return function(){return it(this,t,n.apply(this,arguments))}}var at=[null];function st(t,n){this._groups=t,this._parents=n}function ct(){return new st([[document.documentElement]],at)}st.prototype=ct.prototype={constructor:st,select:function(t){"function"!==typeof t&&(t=i(t));for(var n=this._groups,e=n.length,r=new Array(e),o=0;o<e;++o)for(var u,a,s=n[o],c=s.length,f=r[o]=new Array(c),h=0;h<c;++h)(u=s[h])&&(a=t.call(u,u.__data__,h,s))&&("__data__"in u&&(a.__data__=u.__data__),f[h]=a);return new st(r,this._parents)},selectAll:function(t){var n;"function"!==typeof t&&(t=null==(n=t)?o:function(){return this.querySelectorAll(n)});for(var e=this._groups,r=e.length,i=[],u=[],a=0;a<r;++a)for(var s,c=e[a],f=c.length,h=0;h<f;++h)(s=c[h])&&(i.push(t.call(s,s.__data__,h,c)),u.push(s));return new st(i,u)},filter:function(t){var n;"function"!==typeof t&&(n=t,t=function(){return this.matches(n)});for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o)for(var u,a=e[o],s=a.length,c=i[o]=[],f=0;f<s;++f)(u=a[f])&&t.call(u,u.__data__,f,a)&&c.push(u);return new st(i,this._parents)},data:function(t,n){if(!t)return v=new Array(this.size()),l=-1,this.each((function(t){v[++l]=t})),v;var e,r=n?c:s,i=this._parents,o=this._groups;"function"!==typeof t&&(e=t,t=function(){return e});for(var u=o.length,a=new Array(u),f=new Array(u),h=new Array(u),l=0;l<u;++l){var p=i[l],_=o[l],y=_.length,v=t.call(p,p&&p.__data__,l,i),d=v.length,g=f[l]=new Array(d),w=a[l]=new Array(d);r(p,_,g,w,h[l]=new Array(y),v,n);for(var x,m,A=0,N=0;A<d;++A)if(x=g[A]){for(A>=N&&(N=A+1);!(m=w[N])&&++N<d;);x._next=m||null}}return(a=new st(a,i))._enter=f,a._exit=h,a},enter:function(){return new st(this._enter||this._groups.map(u),this._parents)},exit:function(){return new st(this._exit||this._groups.map(u),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"===typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var s,c=n[a],f=e[a],h=c.length,l=u[a]=new Array(h),p=0;p<h;++p)(s=c[p]||f[p])&&(l[p]=s);for(;a<r;++a)u[a]=n[a];return new st(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=f);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],s=a.length,c=i[o]=new Array(s),h=0;h<s;++h)(u=a[h])&&(c[h]=u);c.sort(n)}return new st(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each((function(){t[++n]=this})),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each((function(){++t})),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=p(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?y:_:"function"===typeof n?e.local?w:g:e.local?d:v)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?m:"function"===typeof n?N:A)(t,n,null==e?"":e)):b(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?E:"function"===typeof n?M:C)(t,n)):this.node()[t]},classed:function(t,n){var e=T(t+"");if(arguments.length<2){for(var r=S(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"===typeof n?D:n?q:P)(e,n))},text:function(t){return arguments.length?this.each(null==t?R:("function"===typeof t?z:U)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?B:("function"===typeof t?I:L)(t)):this.node().innerHTML},raise:function(){return this.each(V)},lower:function(){return this.each(H)},append:function(t){var n="function"===typeof t?t:Z(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"===typeof t?t:Z(t),r=null==n?$:"function"===typeof n?n:i(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(X)},clone:function(t){return this.select(t?G:Y)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=nt(t+""),u=o.length;if(!(arguments.length<2)){for(a=n?rt:et,null==e&&(e=!1),r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var s,c=0,f=a.length;c<f;++c)for(r=0,s=a[c];r<u;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"===typeof n?ut:ot)(t,n))}};n.a=function(t){return"string"===typeof t?new st([[document.querySelector(t)]],[document.documentElement]):new st([[t]],at)}},170:function(t,n,e){"use strict";var r={},i={};function o(t){return new Function("d","return {"+t.map((function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'})).join(",")+"}")}function u(t){var n=Object.create(null),e=[];return t.forEach((function(t){for(var r in t)r in n||e.push(n[r]=r)})),e}function a(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}function s(t){var n,e=t.getUTCHours(),r=t.getUTCMinutes(),i=t.getUTCSeconds(),o=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((n=t.getUTCFullYear())<0?"-"+a(-n,6):n>9999?"+"+a(n,6):a(n,4))+"-"+a(t.getUTCMonth()+1,2)+"-"+a(t.getUTCDate(),2)+(o?"T"+a(e,2)+":"+a(r,2)+":"+a(i,2)+"."+a(o,3)+"Z":i?"T"+a(e,2)+":"+a(r,2)+":"+a(i,2)+"Z":r||e?"T"+a(e,2)+":"+a(r,2)+"Z":"")}e.d(n,"a",(function(){return f}));var c=function(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function a(t,n){var o,u=[],a=t.length,s=0,c=0,f=a<=0,h=!1;function l(){if(f)return i;if(h)return h=!1,r;var n,o,u=s;if(34===t.charCodeAt(u)){for(;s++<a&&34!==t.charCodeAt(s)||34===t.charCodeAt(++s););return(n=s)>=a?f=!0:10===(o=t.charCodeAt(s++))?h=!0:13===o&&(h=!0,10===t.charCodeAt(s)&&++s),t.slice(u+1,n-1).replace(/""/g,'"')}for(;s<a;){if(10===(o=t.charCodeAt(n=s++)))h=!0;else if(13===o)h=!0,10===t.charCodeAt(s)&&++s;else if(o!==e)continue;return t.slice(u,n)}return f=!0,t.slice(u,a)}for(10===t.charCodeAt(a-1)&&--a,13===t.charCodeAt(a-1)&&--a;(o=l())!==i;){for(var p=[];o!==r&&o!==i;)p.push(o),o=l();n&&null==(p=n(p,c++))||u.push(p)}return u}function c(n,e){return n.map((function(n){return e.map((function(t){return h(n[t])})).join(t)}))}function f(n){return n.map(h).join(t)}function h(t){return null==t?"":t instanceof Date?s(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,r,i=a(t,(function(t,i){if(e)return e(t,i-1);r=t,e=n?function(t,n){var e=o(t);return function(r,i){return n(e(r),i,t)}}(t,n):o(t)}));return i.columns=r||[],i},parseRows:a,format:function(n,e){return null==e&&(e=u(n)),[e.map(h).join(t)].concat(c(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=u(t)),c(t,n).join("\n")},formatRows:function(t){return t.map(f).join("\n")},formatRow:f,formatValue:h}}(","),f=c.parse;c.parseRows,c.format,c.formatBody,c.formatRows,c.formatRow,c.formatValue}}]);
//# sourceMappingURL=11.4c99386e.chunk.js.map