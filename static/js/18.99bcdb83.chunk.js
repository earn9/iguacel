/*! For license information please see 18.99bcdb83.chunk.js.LICENSE.txt */
(this["webpackJsonpraster-react-canvas2"]=this["webpackJsonpraster-react-canvas2"]||[]).push([[18],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(22),n=a.n(r),i=a(0),l=a.n(i);function c(e){var t=e.id,a=e.width,r=e.height,n=e.children;return l.a.createElement("defs",null,l.a.createElement("pattern",{id:t,width:a,height:r,patternUnits:"userSpaceOnUse"},n))}c.propTypes={id:n.a.string.isRequired,width:n.a.number.isRequired,height:n.a.number.isRequired,children:n.a.node.isRequired}},260:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),i=a.n(n),l=a(69),c=a(19),s=a(20),o=a(22),h=a.n(o),d=a(70),m=a.n(d),f=a(103),p="horizontal",u="vertical",v="diagonal";function y(e){var t=e.height;switch(e.orientation){case u:return"M "+t/2+", 0 l 0, "+t;case p:return"M 0,"+t/2+" l "+t+",0";case v:return"M 0,"+t+" l "+t+","+-t+" M "+-t/4+","+t/4+" l "+t/2+","+-t/2+"\n             M "+.75*t+","+5/4*t+" l "+t/2+","+-t/2;default:return"M "+t/2+", 0 l 0, "+t}}function E(e){var t=e.id,a=e.width,r=e.height,n=e.stroke,l=e.strokeWidth,c=e.strokeDasharray,s=e.strokeLinecap,o=void 0===s?"square":s,h=e.shapeRendering,d=void 0===h?"auto":h,p=e.orientation,u=void 0===p?["vertical"]:p,v=e.background,E=e.className,g=Array.isArray(u)?u:[u];return i.a.createElement(f.a,{id:t,width:a,height:r},!!v&&i.a.createElement("rect",{className:m()("vx-pattern-line-background"),width:a,height:r,fill:v}),g.map((function(e,a){return i.a.createElement("path",{key:"vx-"+t+"-line-"+e+"-"+a,className:m()("vx-pattern-line",E),d:y({orientation:e,height:r}),stroke:n,strokeWidth:l,strokeDasharray:c,strokeLinecap:o,shapeRendering:d})})))}E.propTypes={id:h.a.string.isRequired,width:h.a.number.isRequired,height:h.a.number.isRequired,className:h.a.string,background:h.a.string,stroke:h.a.string,strokeWidth:h.a.oneOfType([h.a.number,h.a.string]),strokeDasharray:h.a.oneOfType([h.a.string,h.a.number]),strokeLinecap:h.a.oneOf(["square","butt","round","inherit"]),shapeRendering:h.a.oneOfType([h.a.string,h.a.number]),orientation:h.a.array};var g=function(e,t){return[e-window.innerWidth/2,t-window.innerHeight/2]},k=function(e,t){return"translate3d(".concat(e/20,"px,").concat(t/20,"px,0) rotate(").concat(e/200,"deg) ")},x=function(e,t){return"translate3d(".concat(e/3,"px,").concat(t/3,"px,0) rotate(").concat(e/100,"deg)")};t.default=function(){var e=Object(l.a)(),t=Object(r.a)(e,2),a=t[0],o=t[1],h=o.width,d=o.height,m=Object(n.useContext)(c.b).dark,f=Object(n.useState)(1),p=Object(r.a)(f,2),u=p[0],v=p[1],y={white:"#F1F1F1",main:m?"#66adfe":"#F38762",label:"#ACB1B6",darkGray:"#2d2d2d",plastic:"#363636",disk:"#615C57",shadow:m?"black":"#ACB1B6"},M=Object(s.b)((function(){return{xy:[0,0],config:{mass:10,tension:550,friction:140}}})),w=Object(r.a)(M,2),z=w[0],b=w[1];return i.a.createElement("div",{ref:a},i.a.createElement(s.a.div,{onMouseMove:function(e){var t=e.clientX,a=e.clientY;return b({xy:g(t,a)})},onClick:function(){v(u>=3?1:u+1)},style:{cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column",zIndex:2,width:"100%",height:"100vh",transform:z.xy.interpolate(k),padding:"30px"}},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",flexBasis:"600px",overflow:"visible"},width:"".concat(h,"px"),height:"".concat(d,"px"),viewBox:"0 0 2000 2000"},i.a.createElement("defs",null,i.a.createElement("filter",{id:"shadow"},i.a.createElement("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"3"}),i.a.createElement("feOffset",{dx:"12",dy:"-12"}),i.a.createElement("feComponentTransfer",null,i.a.createElement("feFuncA",{type:"linear",slope:"0.2"})),i.a.createElement("feMerge",null,i.a.createElement("feMergeNode",null),i.a.createElement("feMergeNode",{in:"SourceGraphic"}))),i.a.createElement("filter",{id:"noise"},i.a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"25",result:"noisy"})),i.a.createElement("filter",{id:"blur"},i.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"20"}))),3===u&&i.a.createElement("g",{className:"small"},i.a.createElement(s.a.g,{style:{transform:z.xy.interpolate(x),transformOrigin:"".concat(200,"px ",1200,"px")},className:"shadowSmall",id:"d35"},i.a.createElement("path",{style:{opacity:"0.2"},filter:"url(#blur)",fill:y.shadow,d:"M1440,1462.2c5.8,0,10.5-4.7,10.5-10.5V548.3c0-5.8-4.7-10.5-10.5-10.5h-74.4v0H643.9v0H560 c-5.8,0-10.5,4.7-10.5,10.5v806.5h8.6v34.7h-8.6v14.3l69.7,58.3L1440,1462.2z M621,627.3h-46.6v-29.4H621V627.3z"})),i.a.createElement("path",{className:"plastic",filter:"url(#shadow)",fill:y.plastic,d:"M1440 537.9H560c-5.8 0-10.5 4.7-10.5 10.5v806.5h8.6v34.7h-8.6v14.3l69.7 58.3h18.7v-2.9h75.3l9.7-7.1h610.3v10H1440c5.8 0 10.5-4.7 10.5-10.5V548.3c0-5.8-4.7-10.4-10.5-10.4zm-819 89.4h-46.6v-29.4H621v29.4z"}),i.a.createElement("path",{fill:y.darkGray,d:"M1381.3 597.9h46.6v29.4h-46.6z"}),i.a.createElement("path",{fill:y.darkGray,d:"M1327.2 1148.3h-573v313.9H1343V1164c-.1-8.7-7.1-15.7-15.8-15.7z"}),i.a.createElement("path",{fill:"#ACB1B6",d:"M1221.2 1462.2V1164c0-8.7-7-15.7-15.7-15.7H749.1c-8.7 0-15.7 7-15.7 15.7v298.2h487.8zm-282.5-44.7H805.4v-247.8h133.3v247.8z"}),i.a.createElement("path",{fill:y.darkGray,d:"M1406 1360.2V1327h-22.2v33.2h-8.9l20 51.5 19.9-51.5z"}),i.a.createElement("g",{className:"etiqueta"},i.a.createElement("path",{fill:y.darkGray,d:"M643.9 537.8v522.4c0 9.2 7.4 16.5 16.6 16.5H1349c9.2 0 16.6-7.4 16.6-16.5V537.8H643.9z"}),i.a.createElement("path",{fill:y.white,d:"M1346.9 978.8V608.7c0-5.5-4.5-10-10-10H671.5c-5.5 0-10 4.5-10 10v370.1h685.4z"}),i.a.createElement("path",{style:{transition:"fill 400ms ease-in"},fill:y.main,d:"M661.5 977.3v66.6c0 8.7 7 15.7 15.7 15.7h654.9c8.7 0 15.7-7 15.7-15.7v-66.6H661.5z"}),i.a.createElement("path",{style:{transition:"stroke 400ms ease-in"},fill:"none",stroke:y.main,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:4,d:"M745.1 695.7h508M745.1 794.2h508M745.1 892.6h508"}),i.a.createElement("text",{x:"750",y:"765",fill:y.disc,style:{fontSize:"50px"}},'1981 - 3.5"'),i.a.createElement("text",{x:"740",y:"1030",fill:y.white,style:{fontSize:"40px"}},"INDEX")),i.a.createElement("g",{className:"hd",style:{transform:"translate(-15px, 10px)"}},i.a.createElement("g",{stroke:y.darkGray,strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10"},i.a.createElement("path",{fill:y.darkGray,d:"M696.2 1369.7v-71.4"}),i.a.createElement("path",{fill:"none",d:"M670.6 1369.7v-30.6h12.8v30.6M683.4 1298.3v29.2h-12.8v-29.2"}),i.a.createElement("path",{fill:y.darkGray,d:"M657.8 1369.7v-71.4"})),i.a.createElement("path",{fill:"none",stroke:y.darkGray,strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M647.6 1298.3c-19.2 0-30.8 14.9-30.8 35.7s11.6 35.7 30.8 35.7"}),i.a.createElement("path",{fill:"none",stroke:y.darkGray,strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M647.6 1310.2c-10.3 0-18.8 9.9-18.8 23.8 0 13.8 7.2 23.8 18.8 23.8"}))),2===u&&i.a.createElement("g",{className:"medium"},i.a.createElement("path",{style:{transition:"fill 400ms ease-in"},fill:y.main,d:"M960.4 598.3l43.8 43.8 43.8-43.8z"}),i.a.createElement("g",null,i.a.createElement(s.a.g,{className:"shadowMed",id:"d525",style:{transform:z.xy.interpolate(x),transformOrigin:"".concat(200,"px ",1200,"px")}},i.a.createElement("path",{filter:"url(#blur)",style:{opacity:"0.2"},fill:y.shadow,d:"M1650,677.6V360c0-5.5-4.5-10-10-10H360c-5.5,0-10,4.5-10,10v1280c0,5.5,4.5,10,10,10h489.8 c0.1-10.1,8.2-18.2,18.3-18.2c10.1,0,18.3,8.2,18.3,18.2h239.4c0.1-10.1,8.2-18.2,18.3-18.2c10.1,0,18.3,8.2,18.3,18.2H1640 c5.5,0,10-4.5,10-10V732.9h-23.4v-55.3H1650z M868.3,999c0-72.2,58.5-130.6,130.6-130.6s130.6,58.5,130.6,130.6 s-58.5,130.6-130.6,130.6S868.3,1071.1,868.3,999z M1232.7,1055.3c0-6.6,5.4-12,12-12s12,5.4,12,12c0,6.6-5.4,12-12,12 S1232.7,1061.9,1232.7,1055.3z"})),i.a.createElement("path",{className:"disk",filter:"url(#shadow)",fill:y.disk,d:"M999 368.1c-348.4 0-630.9 282.5-630.9 630.9s282.5 630.9 630.9 630.9 630.9-282.5 630.9-630.9S1347.4 368.1 999 368.1zm0 761.5c-72.2 0-130.6-58.5-130.6-130.6 0-72.2 58.5-130.6 130.6-130.6 72.2 0 130.6 58.5 130.6 130.6s-58.5 130.6-130.6 130.6zm245.7-62.3c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12c-.1 6.6-5.4 12-12 12z"}),i.a.createElement("path",{className:"plastic",filter:"url(#shadow)",fill:y.plastic,d:"M1626.6 732.9v-55.3h23.4V360c0-5.5-4.5-10-10-10H360c-5.5 0-10 4.5-10 10v1280c0 5.5 4.5 10 10 10h489.8c.1-10.1 8.2-18.2 18.3-18.2 10.1 0 18.3 8.2 18.3 18.2h239.4c.1-10.1 8.2-18.2 18.3-18.2 10.1 0 18.3 8.2 18.3 18.2H1640c5.5 0 10-4.5 10-10V732.9h-23.4zM1060.9 1553c0 34.2-27.7 62-62 62-34.2 0-62-27.7-62-62v-222.4c0-34.2 27.7-62 62-62 34.2 0 62 27.7 62 62V1553zM999 1199.7c-110.8 0-200.7-89.9-200.7-200.7S888.1 798.3 999 798.3s200.7 89.9 200.7 200.7-89.9 200.7-200.7 200.7zm245.6-114.9c-16.1 0-29.1-13-29.1-29.1s13-29.1 29.1-29.1 29.1 13 29.1 29.1c-.1 16.1-13.1 29.1-29.1 29.1z"}),i.a.createElement("g",{className:"etiqueta"},i.a.createElement("path",{fill:y.white,d:"M1551.8 382.5H984.3v354.4h567.5c8.7 0 15.7-7 15.7-15.7V398.3c.1-8.7-7-15.8-15.7-15.8z"}),i.a.createElement("g",{style:{transition:"stroke 400ms ease-in"},fill:"none",stroke:y.main,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:4},i.a.createElement("path",{d:"M1085.2 458h387M1085.2 556.5h387M1085.2 654.9h387"})),i.a.createElement("path",{style:{transition:"fill 400ms ease-in"},fill:y.main,d:"M989.2 382.5H913c-8.7 0-15.7 7-15.7 15.7v323.4c0 8.7 7 15.7 15.7 15.7h76.2V382.5z"}),i.a.createElement("path",{fill:y.label,style:{transition:"fill 400ms ease-in"},d:"M832.6 736.9c8.7 0 15.7-7 15.7-15.7V398.3c0-8.7-7-15.7-15.7-15.7H412.1c-8.7 0-15.7 7-15.7 15.7v323.4c0 8.7 7 15.7 15.7 15.7l420.5-.5z"})),i.a.createElement("text",{x:"430",y:"630",fill:y.white,style:{fontSize:"50px",fontWeight:"700"}},"IBM"),i.a.createElement("text",{x:"430",y:"690",fill:y.white,style:{fontSize:"50px"}},"Diskette 2D"),i.a.createElement("text",{x:"1085",y:"528",fill:y.disc,style:{fontSize:"50px"}},'1976 - 5.25"'))),1===u&&i.a.createElement("g",{className:"large"},i.a.createElement("path",{fill:"var(--foreground-color)",d:"M1034.6 1011.1c1.3-1.3 3.1-2.2 5.2-2.2 1.7 0 3.5.9 4.8 2.2s2.2 3.5 2.2 5.7v27c0 7-1.3 12.6-3.5 17.4-2.2 4.8-6.1 8.3-10.9 10.5h-29.6c-4.4-.9-7.8-2.6-10.5-6.1-3.1-3.1-6.1-7.8-9.2-13.9l-18.7-34 2.6-2.6c.9-.9 1.7-1.7 2.6-2.2 1.3-.4 2.2-.9 3.5-.4 1.3 0 2.6.4 3.9 1.3 1.3.9 2.6 1.7 3.9 3.5l7.4 10v-53.6c0-2.2.9-3.9 2.2-5.2s3.1-2.2 5.2-2.2c2.2 0 3.9.9 5.2 2.2s2.2 3.1 2.2 5.2v31.8h.9c0-1.7.4-3.5 1.7-4.8s2.6-2.2 4.8-2.2c1.7 0 3.5.9 4.8 2.2s2.2 3.1 2.2 4.8v5.7h.9c0-2.2.9-3.9 2.2-5.2s3.1-1.7 4.8-1.7c1.7 0 3.5.4 4.8 1.7s1.7 3.1 1.7 4.8v4.8h.9c.1-1.4.5-3.2 1.8-4.5zm-64-24c-1.7-3.9-3.1-8.3-3.1-13.1 0-17 13.9-30.9 30.9-30.9s30.9 13.9 30.9 30.9c0 4.8-.9 9.2-3.1 13.1l12.2 8.7c3.5-6.5 5.7-13.9 5.7-21.8 0-25.3-20.5-45.8-45.8-45.8-24.8.4-45.3 20.9-45.3 45.8 0 7.8 2.2 15.3 5.7 21.8l11.9-8.7z",opacity:".5"}),i.a.createElement(s.a.g,{filter:"url(#blur)",className:"shadowBig",id:"d8",style:{transform:z.xy.interpolate(x),transformOrigin:"".concat(200,"px ",1200,"px"),opacity:"0.2"}},i.a.createElement("path",{fill:y.shadow,d:"M44.9,515.9c0,8.7,7,15.7,15.7,15.7h469.5c8.7,0,15.7-7,15.7-15.7V54.6c0-8.7-7-15.7-15.7-15.7H60.7 c-8.7,0-15.7,7-15.7,15.7V515.9z"}),i.a.createElement("path",{fill:y.shadow,d:"M1990,0H10C4.5,0,0,4.5,0,10v1980c0,5.5,4.5,10,10,10h818.3c5.5,0,10-0.3,9.9-0.7c0,0,0,0,0-0.3 c0-9.1,7.3-16.4,16.4-16.4c9.1,0,16.4,7.3,16.4,16.4c0,0.3,0,0.3,0,0.3c0,0.4,4.4,0.7,9.9,0.7h224.5c5.5,0,10-0.3,9.9-0.7 c0,0,0,0,0-0.3c0-9.1,7.3-16.4,16.4-16.4s16.4,7.3,16.4,16.4c0,0.3,0,0.3,0,0.3c0,0.4,4.4,0.7,9.9,0.7H1990c5.5,0,10-4.5,10-10V10 C2000,4.5,1995.5,0,1990,0z M1145.2,657.4c0-9,7.3-16.3,16.3-16.3s16.3,7.3,16.3,16.3s-7.3,16.3-16.3,16.3 S1145.2,666.4,1145.2,657.4z M823.9,1003.5c0-98.8,80.1-178.9,178.9-178.9s178.9,80.1,178.9,178.9s-80.1,178.9-178.9,178.9 S823.9,1102.3,823.9,1003.5z"})),i.a.createElement("path",{className:"disk",fill:y.disk,filter:"url(#shadow)",d:"M1002.8 26.7C463.4 26.7 26.1 464 26.1 1003.5s437.3 976.7 976.7 976.7 976.7-437.3 976.7-976.7-437.2-976.8-976.7-976.8zm0 1155.7c-98.8 0-178.9-80.1-178.9-178.9s80.1-178.9 178.9-178.9 178.9 80.1 178.9 178.9-80 178.9-178.9 178.9zm158.6-508.7c-9 0-16.3-7.3-16.3-16.3s7.3-16.3 16.3-16.3 16.3 7.3 16.3 16.3-7.3 16.3-16.3 16.3z"}),i.a.createElement("path",{className:"plastic",filter:"url(#shadow)",fill:y.plastic,d:"M1990 0H10C4.5 0 0 4.5 0 10v1980c0 5.5 4.5 10 10 10h818.3c5.5 0 10-.3 9.9-.7v-.3c0-9.1 7.3-16.4 16.4-16.4 9.1 0 16.4 7.3 16.4 16.4v.3c0 .4 4.4.7 9.9.7h224.5c5.5 0 10-.3 9.9-.7v-.3c0-9.1 7.3-16.4 16.4-16.4 9.1 0 16.4 7.3 16.4 16.4v.3c0 .4 4.4.7 9.9.7h832c5.5 0 10-4.5 10-10V10c0-5.5-4.5-10-10-10zm-828.6 615c23.4 0 42.5 19 42.5 42.5 0 23.4-19 42.5-42.5 42.5s-42.5-19-42.5-42.5c.1-23.5 19.1-42.5 42.5-42.5zM1057 1895.5c0 34.3-27.8 62.1-62.1 62.1s-62.1-27.8-62.1-62.1v-388.3c0-34.3 27.8-62.1 62.1-62.1s62.1 27.8 62.1 62.1v388.3zm-57-596.8c-165 0-298.7-133.7-298.7-298.7S835 701.3 1000 701.3 1298.7 835 1298.7 1000 1165 1298.7 1000 1298.7z"}),i.a.createElement("g",{className:"etiqueta_large"},i.a.createElement("path",{fill:y.label,style:{transition:"fill 400ms ease-in"},d:"M44.9 515.9c0 8.7 7 15.7 15.7 15.7h469.5c8.7 0 15.7-7 15.7-15.7V54.6c0-8.7-7-15.7-15.7-15.7H60.7c-8.7 0-15.7 7-15.7 15.7v461.3z"}),i.a.createElement("path",{fill:y.white,d:"M1945 38.8H729.9v492.8H1945c8.7 0 15.7-7 15.7-15.7V54.6c.1-8.7-6.9-15.8-15.7-15.8z"}),i.a.createElement("path",{style:{transition:"fill 400ms ease-in"},fill:y.main,d:"M733.9 38.8H619.8c-8.7 0-15.7 7-15.7 15.7v461.3c0 8.7 7 15.7 15.7 15.7H734V38.8z"}),i.a.createElement("path",{style:{transition:"stroke 400ms ease-in"},fill:"none",stroke:y.main,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:4,d:"M795.7 136.4h508M795.7 234.9h508M795.7 333.4h508M795.7 431.8h508M1382 136.4h508M1382 234.9h508M1382 333.4h508M1382 431.8h508"})),i.a.createElement("text",{x:"100",y:"360",fill:y.white,style:{fontSize:"70px",fontWeight:"700"}},"IBM"),i.a.createElement("text",{x:"100",y:"430",fill:y.white,style:{fontSize:"70px"}},"Diskette 2D"),i.a.createElement("text",{x:"100",y:"430",fill:y.white,style:{fontSize:"70px"}},"Diskette 2D"),i.a.createElement("text",{x:"800",y:"205",fill:y.disc,style:{fontSize:"55px"}},'1967 - 8"')))),i.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",pointerEvents:"none",width:"".concat(h,"px"),height:"".concat(d,"px"),opacity:.1,zIndex:-2}},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",overflow:"visible"},width:"".concat(h,"px"),height:"".concat(d,"px"),viewBox:"0 0 ".concat(h,", ").concat(d)},i.a.createElement(E,{id:"hLines",height:100,width:100,stroke:"var(--foreground-color)",strokeWidth:1,orientation:["horizontal"]}),i.a.createElement(E,{id:"vLines",height:100,width:100,stroke:"var(--foreground-color)",strokeWidth:1}),i.a.createElement("rect",{fill:"url(#hLines)",height:d,width:h,x:0,y:0}),i.a.createElement("rect",{fill:"url(#vLines)",height:d,width:h,x:0,y:0}))))}},70:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===i)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=18.99bcdb83.chunk.js.map