(this.webpackJsonpphasmopicker=this.webpackJsonpphasmopicker||[]).push([[0],{66:function(e,t,n){e.exports=n(79)},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),s=n(25),c=n(9),l=n(114),m=n(116),u=n(24),g=n(107),p=n(115),h=n(118),d=n(56),f=n.n(d),b=n(106),k=Object(b.a)((function(e){var t=e.palette;return{menuIconContainer:{position:"absolute",top:0,left:0,width:"fit-content",borderRadius:2,background:t.primary.dark,zIndex:100},menu:{background:t.primary.dark},list:{background:t.primary.dark},paper:{background:t.primary.dark,borderRadius:5},menuItem:{background:t.primary.dark,color:t.secondary.main,"&:hover":{background:t.primary.main,color:t.secondary.main}}}})),y=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(c.f)(),s=k(),l=function(e){o.push(e),i(null)};return r.a.createElement(m.a,{className:s.menuIconContainer},r.a.createElement(g.a,{"aria-controls":"app-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},color:"primary"},r.a.createElement(f.a,{color:"secondary"})),r.a.createElement(p.a,{id:"app-menu",anchorEl:n,keepMounted:!0,classes:{list:s.list,paper:s.paper},open:Boolean(n),onClose:l},r.a.createElement(h.a,{className:s.menuItem,onClick:function(){return l("".concat("","/"))}},"Ghost Picker"),r.a.createElement(h.a,{className:s.menuItem,onClick:function(){return l("".concat("","/questions"))}},"Questions")))},E=Object(b.a)((function(){return{content:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",minHeight:"100%"},background:{position:"absolute",top:0,width:"100%",height:"100%",zIndex:-100,background:"black",backgroundSize:"cover"}}})),v=function(e){var t=e.content,n=E();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(m.a,{className:n.content},t),r.a.createElement(m.a,{className:n.background}))},x=n(30),w=n(117),O="EMF",j=[{name:"Banshee",evidences:[O,"Fingerprints","Temperature"],strength:"Only targets one player at a time",weakness:"Hates the Crucifix",image:"/images/ghosts/ghost.png"},{name:"Demon",evidences:["Temperature","Ghost Writing","Spirit Box"],strength:"Extremely aggressive",weakness:"Using the Ouija board to ask questions does not drain sanity",image:"/images/ghosts/ghost.png"},{name:"Jinn",evidences:[O,"Spirit Box","Ghost Orb"],strength:"Moves faster the further away you are from it",weakness:"Cutting off the location\u2019s power supply will limit the Jinn\u2019s speed",image:"/images/ghosts/ghost.png"},{name:"Mare",evidences:["Temperature","Spirit Box","Ghost Orb"],strength:"Attacks more frequently in the dark, tends to switch off lights",weakness:"Keeping the lights on",image:"/images/ghosts/ghost.png"},{name:"Oni",evidences:[O,"Ghost Writing","Spirit Box"],strength:"Extremely active and moves objects quickly",weakness:"Extreme activity with lots of players nearby makes it easy to identify",image:"/images/ghosts/ghost.png"},{name:"Phantom",evidences:[O,"Temperature","Ghost Orb"],strength:"Looking at the Phantom will reduce your sanity",weakness:"Capturing a photo will cause it to disappear, not during a hunt",image:"/images/ghosts/ghost.png"},{name:"Poltergeist",evidences:["Fingerprints","Spirit Box","Ghost Orb"],strength:"Throws multiple objects about at once",weakness:"Rooms without any stuff in to throw",image:"/images/ghosts/ghost.png"},{name:"Revenant",evidences:[O,"Fingerprints","Ghost Writing"],strength:"Attacks anyone, regardless of sanity levels",weakness:"Moves extremely slowly when players hide",image:"/images/ghosts/ghost.png"},{name:"Shade",evidences:[O,"Ghost Writing","Ghost Orb"],strength:"Minimal activity, hard to find and detect",weakness:"Does not hunt if players are in a group",image:"/images/ghosts/ghost.png"},{name:"Spirit",evidences:["Fingerprints","Ghost Writing","Spirit Box"],strength:"No strengths",weakness:"Using smudge sticks stops from starting for a long time",image:"/images/ghosts/ghost.png"},{name:"Wraith",evidences:["Fingerprints","Temperature","Spirit Box"],strength:"Can fly through walls and does not leave footprints",weakness:"Salt is toxic for Wraith",image:"/images/ghosts/ghost.png"},{name:"Yurei",evidences:["Temperature","Ghost Writing","Ghost Orb"],strength:"Drains player sanity especially quickly",weakness:"Smudge stick in the same room will stop the Yurei from moving",image:"/images/ghosts/ghost.png"}],C=function(e,t){return Object(x.filter)(e,(function(e){return 0===Object(x.difference)(t,e.evidences).length}))},S=n(57),B=n(109),N=Object(b.a)({button:{color:function(e){return e.color}},buttonSelected:{color:function(e){return e.color},border:"1px solid white"}}),G=function(e){var t=e.text,n=e.handleClick,i=Object(S.a)(e,["text","handleClick"]),o=N(i),s=Object(a.useState)(!1),c=Object(u.a)(s,2),l=c[0],m=c[1];return r.a.createElement(B.a,{className:l?o.buttonSelected:o.button,onClick:function(){m(!l),n(t,!l)}},t)},W=n(110),I=n(111),T=n(112),F=Object(b.a)((function(){return{root:{width:110,margin:"0 2px",padding:"2px"},media:{height:110},content:{display:"flex",alignItems:"center",justifyContent:"center"}}})),M=function(e){var t=e.data,n=F(),a=t.name,i=t.image;return r.a.createElement(W.a,{className:n.root},r.a.createElement(I.a,{className:n.media,image:i}),r.a.createElement(T.a,{className:n.content},a))},q=Object(b.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",margin:"5%",background:t.primary.main,color:t.primary.contrastText},inputWrapper:{display:"flex"},input:{color:t.primary.contrastText,borderBottom:"1px solid white","&::after":{borderBottom:"1px solid white"}},underline:{borderBottom:"1px solid white"},evidencesButtonsWrapper:{display:"flex"},ghostsWrapper:{display:"flex",padding:10}}})),P=function(){var e=q(),t=Object(a.useState)([]),n=Object(u.a)(t,2),i=n[0],o=n[1],s=Object(a.useState)(j),c=Object(u.a)(s,2),l=c[0],g=c[1],p=function(e,t){var n=i;t?(n.push(e),o(n)):(Object(x.remove)(n,(function(t){return t===e})),o(n));var a=C(j,n);g(a)};return r.a.createElement(m.a,{className:e.wrapper},r.a.createElement(m.a,{className:e.inputWrapper},r.a.createElement(w.a,{placeholder:"Ghost's Name",classes:{root:e.input,underline:e.underline}})),r.a.createElement(m.a,{className:e.evidencesButtonsWrapper},r.a.createElement(G,{color:"red",text:O,handleClick:p}),r.a.createElement(G,{color:"green",text:"Fingerprints",handleClick:p}),r.a.createElement(G,{color:"blue",text:"Temperature",handleClick:p}),r.a.createElement(G,{color:"purple",text:"Ghost Writing",handleClick:p}),r.a.createElement(G,{color:"grey",text:"Spirit Box",handleClick:p}),r.a.createElement(G,{color:"brown",text:"Ghost Orb",handleClick:p})),r.a.createElement(m.a,{className:e.ghostsWrapper},l.map((function(e){return r.a.createElement(M,{data:e,key:e.name})})),Object(x.isEmpty)(l)?"No ghosts with such combination of evidences":null))},R=function(){return r.a.createElement("div",null,"Questions")},D=function(){return r.a.createElement(m.a,null,"Page not found",r.a.createElement(s.b,{to:"/",activeClassName:"active",exact:!0},"Return to main"))},J=n(113),z=n(46),A=n.n(z),H=Object(J.a)({palette:{primary:{main:A.a[900]},secondary:{main:A.a[50]},evidenceButton:{emf:"#FC0303"}}}),Q=function(){return r.a.createElement(l.a,{theme:H},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"".concat("","/"),render:function(){return r.a.createElement(v,{content:r.a.createElement(P,null)})}}),r.a.createElement(c.a,{exact:!0,path:"".concat("","/questions"),render:function(){return r.a.createElement(v,{content:r.a.createElement(R,null)})}}),r.a.createElement(c.a,{component:D})))};n(78);o.a.render(r.a.createElement(s.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null))),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d5182bb6.chunk.js.map