(this["webpackJsonpraster-react-canvas2"]=this["webpackJsonpraster-react-canvas2"]||[]).push([[16],{113:function(e,t,a){"use strict";a.r(t);var r=a(68),o=a(0),n=a.n(o),i=a(72),s=a(21),c=a(31),l=new r.Object3D,m=new r.Color,u=function(e){var t=e.colors,a=Object(o.useRef)(),s=Object(o.useRef)(),u=Object(o.useRef)(),h=31,f=new Float32Array(2883),p=Object(o.useMemo)((function(){return new Array(961).fill(0).map((function(e,t){return{id:t,isEven:t%2===0,x:10*Math.floor(t%h)-150,y:10*Math.floor(t/h)-150,col:Math.floor(t/h),colIsEven:Math.floor(t/h)%2===0}}),[])}));return Object(i.f)((function(e){var r=e.clock.getElapsedTime();u.current.visible=!(r<5),p.map((function(o){var n=Object(c.b)(r/10*360);l.position.set(o.x,o.y,0),e.camera.rotation.z=Object(c.b)(r/10*90),o.isEven&&(m.set(t.dark),o.colIsEven?l.rotation.x=n:l.rotation.x=-n,r>5&&(l.rotation.x=0,l.position.set(-200,-200,-200))),o.isEven||(m.set(t.main),o.colIsEven?l.rotation.x=n:l.rotation.x=-n,r<5&&(l.rotation.x=0,l.position.set(-200,-200,-200))),l.updateMatrix(),a.current.setMatrixAt(o.id,l.matrix),a.current.instanceMatrix.needsUpdate=!0,m.toArray(f,3*o.id),s.current.needsUpdate=!0,e.camera.updateProjectionMatrix()})),r>10&&(e.clock.elapsedTime=0)})),n.a.createElement("group",null,n.a.createElement("instancedMesh",{ref:a,args:[null,null,961]},n.a.createElement("cylinderBufferGeometry",{attach:"geometry",args:[5,5,10,32]},n.a.createElement("instancedBufferAttribute",{ref:s,attachObject:["attributes","color"],args:[f,3]})),n.a.createElement("meshBasicMaterial",{attachArray:"material",vertexColors:r.VertexColors}),n.a.createElement("meshLambertMaterial",{attachArray:"material",emissiveIntensity:2,vertexColors:r.VertexColors}),n.a.createElement("meshLambertMaterial",{attachArray:"material",emissiveIntensity:2,vertexColors:r.VertexColors})),n.a.createElement("mesh",{position:[0,0,-10],ref:u},n.a.createElement("planeBufferGeometry",{attach:"geometry",args:[820,820,1]}),n.a.createElement("meshBasicMaterial",{attach:"material",color:t.dark})))};t.default=function(){var e={dark:Object(o.useContext)(s.b).dark?"#1A1E21":"#212733",main:"#4DC0CB"};return n.a.createElement(i.a,{orthographic:!0,pixelRatio:1===window.devicePixelRatio?1:2,style:{position:"fixed",width:"100%",height:"100vh",top:0,left:0,right:0,bottom:0},gl:{antialias:!0,alpha:!1},camera:{zoom:8,position:[0,0,200]},onCreated:function(t){t.gl.setClearColor(new r.Color(e.main))}},n.a.createElement("hemisphereLight",{intensity:.9}),n.a.createElement("spotLight",{position:[0,0,400],intensity:2}),n.a.createElement(u,{colors:e}))}}}]);
//# sourceMappingURL=16.807ddd85.chunk.js.map