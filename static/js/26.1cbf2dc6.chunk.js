(this["webpackJsonpraster-react-canvas2"]=this["webpackJsonpraster-react-canvas2"]||[]).push([[26],{111:function(t,e,a){"use strict";a.r(e);var r=a(3),n=a(68),i=a(0),c=a.n(i),o=a(72),s=a(100),l=a(112),u=a(99);Object(o.d)({TrackballControls:u.a});var f=new Array(1e4).fill().map((function(t,e){return{id:e}})),m="#2B638E",h="#F5C22C",v="#2F8E5C";function d(t,e){for(var a=t.length,r=function(t){var e=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271],a=Math.PI,r=[],n=1,i=function(t){var a=t;for(var r in e)t%e[r]===0&&(a=e[r]);return a};return function t(e,c,o,s){var l,u,f;if(1===e)n++,r.push({x:c,y:o,z:0,s:s*a/2,ide:n});else{var m=i(e);2===m?(l=0,e%4===0?(u=2*s/((m=4)+2),f=m*s/(m+2)):(m=2,u=1.5*s/4,f=2*s/4)):(u=2*s/(m+2),l=(f=m*s/(m+2))/2*(1-Math.cos(a/m)));for(var h=0;h<m;h++){t(e/m,c+Math.sin(a+2*a*(h+.5)/m+0)*f,o-Math.cos(a+2*a*(h+.5)/m+0)*f+l,u)}}}(t,0,0,30),r}(e),n=0;n<a;++n){var i=t[n];n<r.length?(i.x=r[n].x,i.y=r[n].y,i.z=r[n].z,i.s=r[n].s):(i.x=0,i.y=0,i.z=0,i.s=0)}}function g(t){var e=t.data,a=t.int;c.a.useEffect((function(){for(var t=0;t<e.length;++t)e[t].sourceX=e[t].x||0,e[t].sourceY=e[t].y||0,e[t].sourceZ=e[t].z||0,e[t].sourceS=e[t].s||0}),[e,a]),function(t){var e=t.data,a=t.int,r=void 0===a?1:a;Object(i.useEffect)((function(){d(e,r)}),[e,r])}({data:e,int:a}),c.a.useEffect((function(){for(var t=0;t<e.length;++t)e[t].targetX=e[t].x,e[t].targetY=e[t].y,e[t].targetZ=e[t].z,e[t].targetS=e[t].s}),[e,a])}var E=new n.Object3D;function y(t){var e=t.data,a=t.int,r=Object(i.useRef)(),n=Object(i.useRef)(),l=e.length;return function(t){var e=t.data,a=t.int,r=t.onFrame;g({data:e,int:a});var n=c.a.useRef(a);Object(s.a)({animationProgress:1,from:{animationProgress:0},reset:a!==n.current,onFrame:function(t){var a=t.animationProgress;!function(t,e){for(var a=0;a<t.length;++a)t[a].x=(1-e)*t[a].sourceX+e*t[a].targetX,t[a].y=(1-e)*t[a].sourceY+e*t[a].targetY,t[a].z=(1-e)*t[a].sourceZ+e*t[a].targetZ,t[a].s=(1-e)*t[a].sourceS+e*t[a].targetS}(e,a),r({animationProgress:a})}}),n.current=a}({data:e,int:a,onFrame:function(){!function(t){var e=t.mesh,a=t.data;if(e){for(var r=0;r<a.length;++r){var n=a[r],i=n.x,c=n.y,o=n.z,s=n.s;E.position.set(i,c,o),E.position.set(i,c,o),E.scale.set(s,s,s),E.updateMatrix(),e.setMatrixAt(r,E.matrix)}e.instanceMatrix.needsUpdate=!0}}({mesh:r.current,data:e})}}),Object(o.f)((function(t){var e=t.clock.getElapsedTime();r.current.rotation.x=Math.sin(e/Math.PI*2),r.current.rotation.y=Math.sin(e/Math.PI),r.current.instanceMatrix.needsUpdate=!0})),c.a.createElement("instancedMesh",{ref:r,args:[null,null,l],frustumCulled:!1},c.a.createElement("boxBufferGeometry",{attach:"geometry"},c.a.createElement("instancedBufferAttribute",{ref:n})),c.a.createElement("meshBasicMaterial",{attachArray:"material",color:v}),c.a.createElement("meshBasicMaterial",{attachArray:"material",color:v}),c.a.createElement("meshBasicMaterial",{attachArray:"material",color:h}),c.a.createElement("meshBasicMaterial",{attachArray:"material",color:h}),c.a.createElement("meshBasicMaterial",{attachArray:"material",color:m}),c.a.createElement("meshBasicMaterial",{attachArray:"material",color:m}))}var M=function(){var t=Object(i.useRef)(),e=Object(o.g)(),a=e.camera,r=e.gl;return Object(o.f)((function(){t.current.update()})),c.a.createElement("trackballControls",{ref:t,args:[a,r.domElement],dynamicDampingFactor:.1,keys:[18,17,91],mouseButtons:{LEFT:n.MOUSE.PAN,MIDDLE:n.MOUSE.ZOOM,RIGHT:n.MOUSE.ROTATE}})};e.default=function(){var t=Object(i.useState)(1),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(l.a)((function(){n(a<1e4?a+1:1)}),1e3),c.a.createElement("div",{style:{width:"100%",height:"100vh",position:"relative",cursor:"grabbing"}},c.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100vh",top:0,left:0,right:0,bottom:0,zIndex:-1,display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("h1",{style:{fontSize:100,opacity:.2,fontFeatureSettings:"tnum",fontVariantNumeric:"tabular-nums"}},a)),c.a.createElement(o.a,{sRGB:!0,pixelRatio:window.devicePixelRatio||1,gl:{antialias:!0,alpha:!0},camera:{fov:10,position:[0,0,500]}},c.a.createElement(y,{data:f,int:a}),c.a.createElement(M,null)))}}}]);
//# sourceMappingURL=26.1cbf2dc6.chunk.js.map