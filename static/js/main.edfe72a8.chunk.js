(this["webpackJsonpreact-three-fiber"]=this["webpackJsonpreact-three-fiber"]||[]).push([[0],{49:function(e,t,n){},60:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),o=n(36),a=n.n(o),c=(n(60),n(10)),s=n(17),u=(n(49),n(25)),l=n(20),d=n(69),j=n(33),h=n(26),b=n(42),f=Object(b.a)((function(e,t){return{activeElement:void 0,setActiveElement:function(t){return e((function(e){return{activeElement:t}}))},screenWidth:void 0,setScreenWidth:function(t){return e((function(e){return{screenWidth:t}}))},getIsMobile:function(){var e;return(null===(e=t())||void 0===e?void 0:e.screenWidth)<=576}}})),m=n(8);function O(e){return e*(Math.PI/180)}var v=function(e){var t=e.isPaused,n=f(),r=n.setActiveElement,o=n.activeElement,a=n.getIsMobile,l=a()?-10:-14,d=a()?1.5:2,j=Object(i.useRef)({x:l,y:0,z:0}),b=Object(i.useRef)({x:d,y:0,z:0}),v=Object(i.useRef)(0),p=Object(i.useRef)(0),x=Object(i.useRef)(),g=Object(i.useRef)(),y=Object(i.useRef)(),w=Object(i.useRef)(),P=Object(i.useRef)(),M=Object(i.useState)(!1),S=Object(c.a)(M,2);S[0],S[1];Object(s.b)((function(){if(!t){v.current-=.25,p.current-=3.38;var e=O(v.current),n=l*Math.cos(e),i=l*Math.sin(e),r=O(p.current),o=d*Math.cos(r),a=d*Math.sin(r);x.current&&j.current&&(j.current={x:n,z:i,y:0},b.current={x:o,y:0,z:a},x.current.position.x=j.current.x,x.current.position.z=j.current.z,P.current.position.x=b.current.x,P.current.position.z=b.current.z,g.current.visible=!1,x.current.visible=!1,y.current.material.visible=!1,w.current.position.setFromMatrixPosition(x.current.matrixWorld),w.current.rotateY(O(2.5)),y.current.position.setFromMatrixPosition(g.current.matrixWorld))}}));var E=Object(s.c)(h.a,"earthTexture.jpg"),R=Object(s.c)(h.a,"moonTexture.jpg"),k=Object(u.useSpring)({scale:"Earth"===(null===o||void 0===o?void 0:o.name)?[1.5,1.5,1.5]:[.5,.5,.5],moonScale:"Moon"===(null===o||void 0===o?void 0:o.name)?[1,1,1]:[.25,.25,.25]}),z=k.scale,F=k.moonScale;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("group",{children:Object(m.jsx)(L,{mesh:x,children:Object(m.jsx)(L,{texture:E,mesh:g,position:[0,0,0]})})}),Object(m.jsx)(L,{rotation:[O(24),0,0],mesh:w,isPaused:t,layers:3,scale:Object(i.useMemo)((function(){return z}),[null===o||void 0===o?void 0:o.name]),texture:E,onPointerOver:function(e){return r({name:"Earth"})},onPointerOut:function(e){return"Earth"===(null===o||void 0===o?void 0:o.name)?r(null):void 0}}),Object(m.jsx)(L,{rotation:[O(-5),0,0],layers:1,isPaused:t,mesh:y,children:Object(m.jsx)(L,{mesh:P,texture:R,scale:Object(i.useMemo)((function(){return F}),[null===o||void 0===o?void 0:o.name]),onPointerOver:function(e){return r({name:"Moon"})},onPointerOut:function(e){return"Moon"===(null===o||void 0===o?void 0:o.name)?r(null):void 0}})})]})},p=n(6),x=Object(i.createContext)({}),g=function(e){var t=e.children,n=Object(i.useState)(),r=Object(c.a)(n,2),o={activeElement:r[0],setActiveElement:r[1]};return Object(m.jsx)(x.Provider,{value:o,children:t})},y=function(e){var t=e.isPaused,n=(e.toScreenPosition,e.tooltipRef,f()),r=n.activeElement,o=n.setActiveElement,a=n.getIsMobile,c=(Object(i.useRef)({x:0,y:0,z:0}),Object(i.useRef)(0),Object(i.useRef)()),l="Sun"===(null===r||void 0===r?void 0:r.name),d=a(),j=Object(u.useSpring)({scale:function(){var e=l?[4,4,4]:[3,3,3];return d?e.map((function(e){return.9*e})):e}(),_spotlightIntensity:l?.4:.5}),b=j.scale;j._spotlightIntensity;Object(s.b)((function(){t||c.current.rotateY(O(.3))}));var v=Object(s.c)(h.a,"sunTexture.jpg"),x={angle:Math.PI/150,penumbra:.5,distance:300,intensity:.4};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("spotLight",{intensity:.4,position:[0,0,d?7:10]}),Object(m.jsx)("spotLight",Object(p.a)(Object(p.a)({angle:Math.PI/150},x),{},{position:[-100,100,50]})),Object(m.jsx)("spotLight",Object(p.a)(Object(p.a)({angle:Math.PI/150},x),{},{position:[100,100,50]})),Object(m.jsx)("spotLight",Object(p.a)(Object(p.a)({angle:Math.PI/150},x),{},{position:[100,-100,50]})),Object(m.jsx)("spotLight",Object(p.a)(Object(p.a)({angle:Math.PI/150},x),{},{position:[-100,-100,50]})),Object(m.jsx)(L,{layers:2,onPointerOver:function(e){return o({name:"Sun"})},onPointerOut:function(e){return l?o(null):void 0},isPaused:t,scale:Object(i.useMemo)((function(){return b}),[l]),hover:l,texture:v,mesh:c})]})},w=n(11),P=function(e){var t=e.isPaused,n=Object(i.useRef)(),r=Object(i.useMemo)((function(){for(var e=[],t=0;t<2e3;t++){var n=new w.Vector3(600*Math.random()-300,600*Math.random()-300,600*Math.random()-300);n.velocity=0,n.acceleration=.025,e.push(n)}return e}),[]),o=Object(s.c)(h.a,"star.png"),a=Object(i.useRef)();return Object(s.b)((function(){t||(r.forEach((function(e){e.z+=e.acceleration,e.z>-40&&(e.z=-90,e.velocity=0)})),a.current.setFromPoints(r))})),Object(m.jsxs)("points",{ref:n,children:[Object(m.jsx)("bufferGeometry",{attach:"geometry",ref:a}),Object(m.jsx)("pointsMaterial",{color:11184810,size:.3,map:o})]})},M=function(e){var t=e.isPaused,n=(e.canvasRef,e.tooltipRef),r=Object(s.d)(),o=r.camera,a=(r.viewport,r.size),c=Object(i.useRef)();Object(i.useRef)();Object(i.useEffect)((function(){}),[]);Object(i.useCallback)((function(e){return function(e){var t=Object(j.cloneDeep)(e),n=new w.Vector3,i=.5*a.width,r=.5*a.height;return t.updateMatrixWorld(),n.setFromMatrixPosition(t.matrixWorld),n.project(o),n.x=n.x*i+i,n.y=-n.y*r+r,{x:n.x,y:n.y}}(e)}),[]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ambientLight",{ref:c,intensity:.05}),Object(m.jsx)("pointLight",{position:[0,0,0]}),Object(m.jsx)("group",{children:Object(m.jsxs)(i.Suspense,{fallback:null,children:[Object(m.jsx)(P,{isPaused:t}),Object(m.jsx)(v,{tooltipRef:n,isPaused:t}),Object(m.jsx)(y,{tooltipRef:n,isPaused:t})]})})]})},S=function(e){var t=e.children;return Object(m.jsx)(g,{children:t})},E=n(12),R={Earth:["Earth is the only planet known to support life because it has two very important things that living creatures need to survive \u2013\u2013 lots of oxygen and lots of water.","The Earth\u2019s diameter measures a huge 12,800 kilometres, making it the fifth largest planet in the solar system.","Earth spinning on its axis is why we have daytime and nighttime. As the planet rotates, the side facing the sun receives daylight and the the other is in darkness."],Sun:["The Sun is a star found at the center of the Solar System.","Light from the Sun reaches Earth in around 8 minutes.","At around 1,392,000 kilometres (865,000 miles) wide, the Sun\u2019s diameter is about 110 times wider than Earth\u2019s."],Moon:["The moon was created when a rock the size of Mars slammed into Earth, shortly after the solar system began forming about 4.5 billion years ago.","The Moon is drifting away from the Earth. The Moon is moving approximately 3.8 cm away from our planet every year.","The Sun and the Moon aren't the same size, even though they look it from earth. This is because the moon is 400x smaller than the sun, but 400x closer than the sun to earth."]},k=function(e){var t=e.height,n=(e.isPaused,f().activeElement),r=Object(i.useState)(!1),o=Object(c.a)(r,2),a=(o[0],o[1],Object(l.useSpring)({config:{duration:250},opacity:n?1:0,height:n?"100%":"25%"})),s=a.opacity,u=a.height,d=Object(i.useState)(1),h=Object(c.a)(d,2),b=h[0],O=h[1],v=Object(i.useState)({1:0,2:0,3:0}),x=Object(c.a)(v,2),g=x[0],y=x[1],w=Object(l.useSpring)({pause:!n,reset:!n,onRest:function(){3!==b&&y(Object(p.a)(Object(p.a)({},g),{},Object(E.a)({},b,1))),setTimeout((function(){O(b+1>3?1:b+1)}),0)},loop:!0,from:{transform:"scaleX(0)"},to:{transform:"scaleX(1)"},config:{duration:3e3}}).transform;Object(i.useEffect)((function(){n||O(1)}),[n]);var P={transform:w},M=function(e){return b>e?{transform:"scaleX(1)"}:b<e?{transform:"scaleX(0)"}:e!==b?{transform:"scaleX(".concat(g[e],")")}:P};return Object(m.jsxs)(l.animated.div,{className:"info2",style:{height:"30%",maxHeight:260,maxWidth:360,width:"40%",position:"absolute",top:"".concat(t,"vh"),right:0,padding:0,color:"white",borderBottomLeftRadius:5,opacity:s},children:[Object(m.jsx)(l.animated.h2,{style:{background:"#111011",margin:0,padding:20,height:64},children:null===n||void 0===n?void 0:n.name}),Object(m.jsxs)(l.animated.div,{className:"info-body",style:{padding:"5px 20px",height:u,background:"rgba(255, 255, 255, 0.08)",overflow:"hidden"},children:[Object(m.jsx)("p",{children:"Fun Facts:"}),Object(m.jsx)("p",{style:{padding:"0 15px",margin:"10px 0",fontSize:20},children:Object(j.get)(R,"".concat(null===n||void 0===n?void 0:n.name,"[").concat(b-1,"]"),"")}),Object(m.jsx)("div",{style:{opacity:n?1:0,display:"flex",width:"100%",justifyContent:"space-between",marginTop:"auto",marginBottom:10},children:n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"timebar",children:Object(m.jsx)(l.animated.div,{style:M(1),className:"timebar-inner"})}),Object(m.jsx)("div",{className:"timebar",children:Object(m.jsx)(l.animated.div,{style:M(2),className:"timebar-inner"})}),Object(m.jsx)("div",{className:"timebar",children:Object(m.jsx)(l.animated.div,{style:M(3),className:"timebar-inner"})})]}):null})]})]})},z=function(){var e=f().setScreenWidth;return Object(i.useLayoutEffect)((function(){var t=function(){var t,n,i=null===(t=document.body)||void 0===t||null===(n=t.getBoundingClientRect())||void 0===n?void 0:n.width;e(i)};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),null},L=function(e){e.isPaused;var t=e.rotation,n=e.position,i=e.mesh,r=e.scale,o=e.texture,a=e.children,c=e.onPointerOver,s=e.onPointerOut;return Object(m.jsxs)(u.a.mesh,{scale:r,rotation:t,onPointerOver:c,onPointerOut:s,position:n,ref:i,castShadow:!0,children:[Object(m.jsx)("sphereGeometry",{attach:"geometry",args:[1,16,16]}),Object(m.jsx)(d.a,{attach:"material",factor:0,speed:1,map:o}),a]})};L.defaultProps={onPointerOut:function(){},onPointerOver:function(){}};var F=function(){var e=f(),t=(e.activeElement,e.getIsMobile),n=11.5,r=Object(i.useState)(!1),o=Object(c.a)(r,2),a=o[0],u=o[1],l=Object(i.useRef)(),d=Object(i.useRef)();return Object(i.useEffect)((function(){var e=function(e){"Space"===e.code&&u((function(e){return!e}))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),Object(m.jsxs)(S,{children:[Object(m.jsx)(z,{}),Object(m.jsx)(s.a,{colorManagement:!0,shadowMap:!0,camera:{position:[0,0,20],fov:90},onClick:function(){return u((function(e){return!e}))},children:Object(m.jsx)(M,{isPaused:a,canvasRef:l,tooltipRef:d})}),Object(m.jsx)("div",{style:{position:"absolute",minHeight:"".concat(n,"vh"),width:"100vw",background:"black",fontSize:t()?25:28,fontWight:400,fontFamily:"monospace",top:0,display:"flex"},children:Object(m.jsx)("div",{style:{padding:20,paddingLeft:25,marginTop:"auto",marginBottom:"auto",display:"flex",width:"100%"},children:Object(m.jsxs)("div",{className:"title-header",children:["Orbitting ",Object(m.jsxs)("span",{style:{fontSize:16,marginLeft:-5},children:["by\xa0",Object(m.jsx)("a",{className:"my-name-link",href:"https://www.linkedin.com/in/benjwexler/",children:"Ben Wexler"})]})]})})}),Object(m.jsx)("div",{style:{minHeight:"".concat(n,"vh"),width:"100vw",background:"black",bottom:0,left:0,position:"absolute",display:"flex",fontSize:28,fontWight:400},children:Object(m.jsx)("div",{style:{margin:"auto"},children:Object(m.jsx)("i",{onClick:function(){return u((function(e){return!e}))},className:"fas ".concat(a?"fa-play":"fa-pause")})})}),Object(m.jsx)("div",{ref:d,id:"tooltip",style:{position:"absolute",color:"white"},children:"Sun"}),Object(m.jsx)(k,{isPaused:a,height:n})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),o(e),a(e)}))};a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),T()}},[[68,1,2]]]);
//# sourceMappingURL=main.edfe72a8.chunk.js.map