import{S as n,P as o,W as e,a,M as s,b as t,c as i,T as w,A as r,d,e as c,f as p,g as l,G as m,O as g,h as f}from"./vendor.2f3a38a5.js";const h=new n,u=new o(75,window.innerWidth/window.innerHeight,.1,1e3),y=new e({canvas:document.querySelector("#bg")});y.setPixelRatio(window.devicePixelRatio),y.setSize(window.innerWidth,window.innerHeight),u.position.setZ(60),y.render(h,u);const M=new a(10,32,32),x=new s({color:16768571}),b=new t(M,x);h.add(b);var z=new d(new i({map:(new w).load("/assets/glow.392142c7.png"),useScreenCoordinates:!1,color:16768571,blending:r}));z.scale.set(45,45,1),b.add(z);const v=new c(16777215);v.position.set(0,0,0);const S=new p(16777215);h.add(v,S);const j=new l(v);new m(200,50),h.add(j);const A=new g(u,y.domElement);Array(400).fill().forEach((function(){const n=new a(.1,24,24),o=new s({color:16777215}),e=new t(n,o),[i,w,r]=Array(3).fill().map((()=>f.randFloatSpread(100)));e.position.set(i,w,r),h.add(e)}));const P=(new w).load("/assets/space.c763411d.jpg");h.background=P;const W=(new w).load("/assets/moon.b246064f.jpg"),q=(new w).load("/assets/normal.8e277ece.jpg"),E=new t(new a(3,32,32),new s({map:W,normalMap:q})),F=new t(new a(3,32,32),new s({map:W,normalMap:q}));function H(){E.rotation.x+=.05,E.rotation.y+=.075,E.rotation.z+=.05}new t(new a(3,32,32),new s({map:W,normalMap:q})),new t(new a(3,32,32),new s({map:W,normalMap:q})),h.add(E,F),E.position.z=35,E.position.x=-15,F.position.z=-30,F.position.x=-30,F.position.y=1,document.body.onscroll=H,H();var R=0;!function n(){requestAnimationFrame(n),R+=.01,b.rotation.y+=.005,E.rotation.y+=.03,E.position.x=20*Math.cos(R),E.position.z=20*Math.sin(R),F.rotation.y+=.03,F.position.x=45*Math.cos(.5*R),F.position.z=45*Math.sin(.5*R),A.update(),y.render(h,u)}();
