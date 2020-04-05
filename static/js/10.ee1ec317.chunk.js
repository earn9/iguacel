(this["webpackJsonpraster-react-canvas2"]=this["webpackJsonpraster-react-canvas2"]||[]).push([[10],{107:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(22),l=a(0),c=a.n(l),o=a(17),i=a(34),s=a(21),m=a(76),f={cursor:"pointer",willChange:"transform, opacity"},u=[{id:"0",name:"New Moon",abr:"New"},{id:"1",name:"Waxing Crescent",abr:""},{id:"2",name:"First Quarter",abr:"1Q"},{id:"3",name:"Waxing Gibbous",abr:""},{id:"4",name:"Full Moon",abr:"Full"},{id:"5",name:"Waning Gibbous",abr:""},{id:"6",name:"Third Quarter",abr:"3Q"},{id:"7",name:"Waning Crescent",abr:""}],y=function(e){var t=e.x,a=e.y,r=e.fraction,n=e.angle,l=e.wh,o=(void 0===l?80:l)/2,i=Math.trunc(4*r)%4,s=i<2?"gray":"#F5F0E6",f=0===i||3===i?"gray":"#F5F0E6",u=i<2?"#F5F0E6":"gray",y=+parseFloat(r%.25).toFixed(2),d=4*o*(i%2===1?0:.25-y),x=4*o*(i%2===0?0:y);return c.a.createElement("g",{style:{transform:"translate3d(".concat(t,"px, ").concat(a,"px, 0) rotate(").concat(360*r-n,"deg) scale(0.8)")}},c.a.createElement("circle",{fill:s,r:o}),!m.a&&c.a.createElement("g",{mask:"url(#showRightHalf)"},c.a.createElement("circle",{fill:u,r:o}),c.a.createElement("ellipse",{fill:f,ry:o,rx:d})),m.a&&c.a.createElement("g",{"clip-path":"url(#showRightHalf)"},c.a.createElement("circle",{fill:u,r:o}),c.a.createElement("ellipse",{fill:f,ry:o,rx:d})),c.a.createElement("ellipse",{fill:u,ry:o,rx:x}))},d=function(e){var t=e.x,a=e.y,r=e.abr;return c.a.createElement("text",{x:t,y:a,style:{textAnchor:"middle",opacity:.5},fill:"var(--foreground-color)"},r)},x=function(e){var t=e.x,a=e.y,r=e.name,n=e.fr;return c.a.createElement("text",{x:t,y:a-40,style:{textAnchor:"middle",opacity:.5},fill:"var(--foreground-color)"},r,c.a.createElement("tspan",{x:t,y:a,dy:50},0!==n?n.toFixed(2):"0 - 1"))};t.default=function(){var e=Object(l.useState)(0),t=Object(r.a)(e,2),a=t[0],g=t[1],p=Object(l.useContext)(s.b).dark,E=Object(l.useState)(0),b=Object(r.a)(E,2),h=b[0],v=b[1],w=Object(l.useCallback)((function(){return v((function(e){return(e+1)%3}))}),[]),F=Object(o.c)(h,(function(e){return e}),{from:{opacity:0,transform:"translate3d(100%,0,0)"},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{opacity:0,transform:"translate3d(-50%,0,0)"}});Object(i.a)((function(){g(a>=.99?0:a+.006)}),60);var k=u.length,j=Object(l.useMemo)((function(){return function(e,t){var a=2*Math.PI/e;return u.map((function(r,l){return Object(n.a)({},r,{x:-Math.cos(l*a)*t,y:+Math.sin(l*a)*t,xLabels:-Math.cos(l*a)*(t-80),yLabels:+Math.sin(l*a)*(t-80),fr:1/e*l,angle:1/e*l*360})}))}(k,180)}),[k]),O=[function(e){var t=e.style;return c.a.createElement(o.a.g,{style:Object(n.a)({},t,{},f)},c.a.createElement(c.a.Fragment,null,c.a.createElement("g",{style:{transform:"translate3d(calc(50% - 20px), calc(50% - 20px), 0)",opacity:.5,cursor:"pointer"}},c.a.createElement("path",{id:"click",fill:"var(--foreground-color)",d:"M27.8 22.5c.3-.3.7-.5 1.2-.5.4 0 .8.2 1.1.5.3.3.5.8.5 1.3V30c0 1.6-.3 2.9-.8 4s-1.4 1.9-2.5 2.4h-6.8c-1-.2-1.8-.6-2.4-1.4-.7-.7-1.4-1.8-2.1-3.2L11.7 24l.6-.6c.2-.2.4-.4.6-.5.3-.1.5-.2.8-.1.3 0 .6.1.9.3.3.2.6.4.9.8l1.7 2.3V13.9c0-.5.2-.9.5-1.2s.7-.5 1.2-.5.9.2 1.2.5c.3.3.5.7.5 1.2v7.3h.2c0-.4.1-.8.4-1.1.3-.3.6-.5 1.1-.5.4 0 .8.2 1.1.5s.5.7.5 1.1v1.3h.2c0-.5.2-.9.5-1.2s.7-.4 1.1-.4c.4 0 .8.1 1.1.4s.4.7.4 1.1v1.1h.2c0-.3.1-.7.4-1zM13.1 17c-.4-.9-.7-1.9-.7-3 0-3.9 3.2-7.1 7.1-7.1 3.9 0 7.1 3.2 7.1 7.1 0 1.1-.2 2.1-.7 3l2.8 2c.8-1.5 1.3-3.2 1.3-5 0-5.8-4.7-10.5-10.5-10.5C13.8 3.6 9.1 8.3 9.1 14c0 1.8.5 3.5 1.3 5l2.7-2z"})),c.a.createElement("g",{className:"rotateAll",style:{transform:"perspective(10px) translate3d(50%, 50%, 0) rotate(".concat(360*-a,"deg)"),cursor:"pointer"}},j.map((function(e,t){return c.a.createElement(y,{key:"moon".concat(e.id),x:e.x,y:e.y,fraction:e.fr+a,angle:e.angle})}))),c.a.createElement("g",{style:{transform:"translate3d(50%, 50%, 0)"}},j.map((function(e,t){return c.a.createElement(d,{key:"moonLabels".concat(e.id),x:e.xLabels,y:e.yLabels,name:e.name,abr:e.abr})})))))},function(e){var t=e.style;return c.a.createElement(o.a.g,{style:Object(n.a)({},t,{},f)},c.a.createElement("g",{style:{transform:"translate3d(50%, 50%, 0)"}},c.a.createElement(y,{wh:220,x:250,y:250,fraction:a}),c.a.createElement("text",{x:0,y:200,style:{textAnchor:"middle",opacity:.5,fontFeatureSettings:"tnum",fontVariantNumeric:"tabular-nums"},fill:"var(--foreground-color)"},c.a.createElement("tspan",{x:0,y:160,dy:0},"Fraction"),c.a.createElement("tspan",{x:0,y:160,dy:30}," ",a.toFixed(2)))))},function(e){var t=e.style;return c.a.createElement(o.a.g,{style:Object(n.a)({},t,{},f)},c.a.createElement("g",null,c.a.createElement("g",{style:{transform:"translate3d(50%, 50%, 0)"}},j.map((function(e,t){return c.a.createElement(x,{key:"moonLabelsFull".concat(e.id),x:e.x,y:e.y,name:e.name,abr:e.abr,fr:e.fr})})),j.map((function(e,t){return c.a.createElement(y,{key:"moonFull".concat(e.id),x:e.x,y:e.y,fraction:e.fr,angle:e.angle,wh:60})})))))}];return c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",zIndex:3,width:"100%",height:"100vh",cursor:"pointer",background:p?"#0E1016":"#77CCD2",border:"1px solid ".concat(p?"#0E1016":"#77CCD2")},onClick:w},c.a.createElement("svg",{style:{overflow:"visible",maxWidth:"600px"},viewBox:"0 40 ".concat(500," ",500)},c.a.createElement("defs",null,!m.a&&c.a.createElement("mask",{id:"showRightHalf"},c.a.createElement("rect",{y:-180,width:"50%",height:"100%",style:{stroke:"none",fill:"#ffffff"}})),m.a&&c.a.createElement("clipPath",{id:"showRightHalf"},c.a.createElement("rect",{y:-180,width:"50%",height:"100%",style:{stroke:"none",fill:"#ffffff"}}))),c.a.createElement("g",null,F.map((function(e){var t=e.item,a=e.props,r=e.key,n=O[t];return c.a.createElement(n,{key:r,style:a})})))))}},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=void 0!==window.safari}}]);
//# sourceMappingURL=10.ee1ec317.chunk.js.map