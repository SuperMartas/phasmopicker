(this.webpackJsonpphasmopicker=this.webpackJsonpphasmopicker||[]).push([[0],{45:function(e){e.exports=JSON.parse('{"Common":["Anybody here?","Anybody in the room?","Anybody with us?","Are you angry?","Are you a boy?","Are you a child?","Are you a girl?","Are you a woman?","Are you close?","Are you female?","Are you friendly?","Are you here?","Are you male?","Are you male or female?","Are you old?","Are you with us?","Are you young?","Can we help?","Can you give me your name?","Can you show yourself?","Can you talk?","Do you want to hurt us?","Do you want us here?","Do you want us to leave?","Give us a sign!","Hello?","How old are you?","How young are you?","Is anyone here?","Is there a ghost here?","Is there a spirit here?","Let us know you are here.","Shall we leave?","Should we leave?","Show yourself!","Speak to us!","What are you?","What is your age?","What is your gender?","What is your location?","What is your name?","What do you want?","What should we do?","When were you born?","Where are you?","Who am I talking to?","Who are we talking to?","Who are you?","Who is this?","Why are you here?"],"Spirit Box":["Are there any ghosts?","Are you happy?","Are you here all the time?","Are you male or female?","Are you the only one here?","Are you waiting?","Can I ask you?","Can we speak?","Can you make a sound?","Can you speak?","Can you speak to us?","Do something.","Do you know who we are?","Do you want us to leave?","Give us a sign.","Is there anyone here?","Is there anyone with me?","Is there anything I can do?","Show me.","Show us.","Show us your presence.","Talk to me.","Talk to us.","Throw something.","Turn off the light.","Turn on the light.","We are friends.","We mean you no harm.","We would like to speak to you.","We would like to speak with you.","Would you like to talk?"],"Ouija Bord":["Who did you kill?","Who is your victim?","What is the name of the person you killed?","What is the name of the person you murdered?","What is your victim?","Did you murder?","Who did you murder?","Who died?","How old are you?","What is your age?","Are you old?","Are you young?","How long have you been dead?","How many years ago did you die?","How long have you been here?","How long ago did you die?","When did you die?","How many are in this room?","How many people are in this room?","How many people are in here?","How many ghosts are in this room?","How many ghosts are in here?","Are you alone?","Are we alone?","Who is here?","Who is in this room?","Where are you?","What is your favourite room?","Where is your room?","What is your room?","Are you here?","Are you close?","Are there any spirits?","Are you near?","Are you around?"]}')},76:function(e,t,a){e.exports=a(88)},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),s=a(41),l=a(23),c=a(12),u=a(25),h=a(122),m=a(124),p=a(123),d=a(118),y=a(120),g=a(60),f=a.n(g),w=a(119),v="EMF",b=a(62),k=a(115),x=a(113),E=Object(x.a)({button:{color:function(e){return e.color},margin:"0 5px"},buttonSelected:{color:function(e){return e.color},border:"2px solid red",margin:"0 2px"}}),W=function(e){var t=e.text,a=e.handleClick,n=e.isActive,o=Object(b.a)(e,["text","handleClick","isActive"]),i=E(o);return r.a.createElement(k.a,{className:n?i.buttonSelected:i.button,onClick:function(){return a(t,!n)}},t)};W.defaultProps={handleClick:function(){return null}};var O,j=W,A=a(117),S=Object(x.a)((function(){return{root:{width:200,padding:20},content:{display:"flex",alignItems:"center"},accent:{color:"green"}}})),C=function(e){var t=e.data,a=e.selectedEvidences,o=Object(n.useState)(!1),i=Object(l.a)(o,2),s=i[0],c=i[1],u=S(),h=t.name,p=t.strength,y=t.weakness,g=t.evidences;return Object(n.useEffect)((function(){return c(!0),function(){c(!1)}}),[]),r.a.createElement(A.a,{in:s,timeout:1e3},r.a.createElement(m.a,{className:u.root},r.a.createElement(d.a,{variant:"h4"},h),r.a.createElement(d.a,{variant:"h6",color:"secondary"},"Evidences"),g.map((function(e){return r.a.createElement(m.a,{key:e},r.a.createElement(d.a,{className:a.includes(e)?u.accent:""},e))})),r.a.createElement(d.a,{variant:"h6"},"Strength"),r.a.createElement(d.a,{className:u.content},p),r.a.createElement(d.a,{variant:"h6"},"Weakness"),r.a.createElement(d.a,{className:u.content},y)))},G=Object(x.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"100%",minHeight:"100%",padding:"20px 0",background:t.primary.main,color:t.primary.contrastText},inputWrapper:{display:"flex",justifyContent:"center",padding:"20px 20px",flexWrap:"wrap"},evidencesButtonsWrapper:{display:"flex",justifyContent:"center",padding:"20px px",flexWrap:"wrap"},ghostsWrapper:{display:"flex",flexWrap:"wrap",alignContent:"center",justifyContent:"center",padding:"0 50px"},noEvidenceWrapper:{padding:50},changePageButtonWrapper:{width:"100%",display:"flex",justifyContent:"flex-end"},pageLabel:{margin:"0 auto"}}})),N=function(e){var t=e.changePage,a=e.updateGhostName,n=e.updateSelectedEvidences,o=e.handleAnswersButton,i=e.selectedEvidences,s=e.ghostName,l=e.filteredGhosts,c=e.buttonsState,h=G();return r.a.createElement(w.a,{direction:"right",in:!0,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(m.a,{className:h.wrapper},r.a.createElement(m.a,{className:h.changePageButtonWrapper},r.a.createElement(d.a,{variant:"h3",className:h.pageLabel},"Ghost Picker"),r.a.createElement(y.a,{onClick:function(){return t("questions")}},r.a.createElement(f.a,null))),r.a.createElement(m.a,{className:h.inputWrapper},r.a.createElement(p.a,{id:"ghost-name",label:"Ghost Name",variant:"outlined",value:s,onChange:function(e){return a(e.target.value)}}),r.a.createElement(j,{color:"grey",text:"Answers everyone",isActive:c.talksToEveryOne,handleClick:o})),r.a.createElement(m.a,{className:h.evidencesButtonsWrapper},r.a.createElement(j,{color:"red",text:v,isActive:c.EMF,handleClick:n}),r.a.createElement(j,{color:"green",text:"Fingerprints",isActive:c.Fingerprints,handleClick:n}),r.a.createElement(j,{color:"blue",text:"Temperature",isActive:c.Temperature,handleClick:n}),r.a.createElement(j,{color:"purple",text:"Ghost Writing",isActive:c["Ghost Writing"],handleClick:n}),r.a.createElement(j,{color:"grey",text:"Spirit Box",isActive:c["Spirit Box"],handleClick:n}),r.a.createElement(j,{color:"brown",text:"Ghost Orb",isActive:c["Ghost Orb"],handleClick:n})),r.a.createElement(m.a,{className:h.ghostsWrapper},l.map((function(e){return r.a.createElement(C,{data:e,key:e.name,selectedEvidences:i})})),Object(u.isEmpty)(l)?r.a.createElement(m.a,{className:h.noEvidenceWrapper},r.a.createElement(d.a,{variant:"h6"},"No ghosts with such combination of evidences")):null)))},B=a(61),T=a.n(B),H=Object(x.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"100%",minHeight:"100%",padding:"20px 0",background:t.primary.main,color:t.primary.contrastText},changePageButtonWrapper:{width:"100%",display:"flex",justifyContent:"flex-start",paddingBottom:10},pageLabel:{margin:"0 auto"},questionsWrapper:{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"flex-start",justifyContent:"space-around"},columnWrapper:{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}})),I=a(45),D=function(e){var t=e.changePage,a=H();return r.a.createElement(w.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(m.a,{className:a.wrapper},r.a.createElement(m.a,{className:a.changePageButtonWrapper},r.a.createElement(y.a,{onClick:function(){return t("picker")}},r.a.createElement(T.a,null)),r.a.createElement(d.a,{variant:"h3",className:a.pageLabel},"Questions")),r.a.createElement(m.a,{className:a.questionsWrapper},Object.keys(I).map((function(e){return r.a.createElement(m.a,{className:a.columnWrapper},r.a.createElement(d.a,{variant:"h4"},e),I[e].map((function(e){return r.a.createElement(d.a,null,e)})))})))))},F=a(121),P=a(46),M=a.n(P),q=Object(F.a)({palette:{type:"dark",primary:{main:M.a[900]},secondary:{main:M.a[50]}},overrides:{MuiTypography:{body1:{fontSize:".8vw",fontFamily:"SyneMono","@media screen and (max-width: 1000px)":{fontSize:"3vw"}},h4:{fontFamily:"Teko-Medium",color:"red",fontSize:"2vw","@media screen and (max-width: 1000px)":{fontSize:"8vw"}},h6:{fontFamily:"Teko-Medium",fontSize:"1vw","@media screen and (max-width: 1000px)":{fontSize:"5vw"}}}}}),z=[{name:"Banshee",evidences:[v,"Fingerprints","Temperature"],strength:"Only targets one player at a time",weakness:"Hates the Crucifix"},{name:"Demon",evidences:["Temperature","Ghost Writing","Spirit Box"],strength:"Extremely aggressive",weakness:"Using the Ouija board to ask questions does not drain sanity"},{name:"Jinn",evidences:[v,"Spirit Box","Ghost Orb"],strength:"Moves faster the further away you are from it",weakness:"Cutting off the location\u2019s power supply will limit the Jinn\u2019s speed"},{name:"Mare",evidences:["Temperature","Spirit Box","Ghost Orb"],strength:"Attacks more frequently in the dark, tends to switch off lights",weakness:"Keeping the lights on"},{name:"Oni",evidences:[v,"Ghost Writing","Spirit Box"],strength:"Extremely active and moves objects quickly",weakness:"Extreme activity with lots of players nearby makes it easy to identify"},{name:"Phantom",evidences:[v,"Temperature","Ghost Orb"],strength:"Looking at the Phantom will reduce your sanity",weakness:"Capturing a photo will cause it to disappear, not during a hunt"},{name:"Poltergeist",evidences:["Fingerprints","Spirit Box","Ghost Orb"],strength:"Throws multiple objects about at once",weakness:"Rooms without any stuff in to throw"},{name:"Revenant",evidences:[v,"Fingerprints","Ghost Writing"],strength:"Attacks anyone, regardless of sanity levels",weakness:"Moves extremely slowly when players hide"},{name:"Shade",evidences:[v,"Ghost Writing","Ghost Orb"],strength:"Minimal activity, hard to find and detect",weakness:"Does not hunt if players are in a group"},{name:"Spirit",evidences:["Fingerprints","Ghost Writing","Spirit Box"],strength:"No strengths",weakness:"Using smudge sticks stops from starting for a long time"},{name:"Wraith",evidences:["Fingerprints","Temperature","Spirit Box"],strength:"Can fly through walls and does not leave footprints",weakness:"Salt is toxic for Wraith"},{name:"Yurei",evidences:["Temperature","Ghost Writing","Ghost Orb"],strength:"Drains player sanity especially quickly",weakness:"Smudge stick in the same room will stop the Yurei from moving"}],L=function(e,t){return Object(u.filter)(e,(function(e){return 0===Object(u.difference)(t,e.evidences).length}))},J=(O={},Object(c.a)(O,v,!1),Object(c.a)(O,"Fingerprints",!1),Object(c.a)(O,"Temperature",!1),Object(c.a)(O,"Ghost Writing",!1),Object(c.a)(O,"Spirit Box",!1),Object(c.a)(O,"Ghost Orb",!1),Object(c.a)(O,"talksToEveryOne",!1),O),R=function(){var e=Object(n.useState)("picker"),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)([]),m=Object(l.a)(i,2),p=m[0],d=m[1],y=Object(n.useState)(z),g=Object(l.a)(y,2),f=g[0],w=g[1],v=Object(n.useState)(J),b=Object(l.a)(v,2),k=b[0],x=b[1],E=Object(n.useState)(""),W=Object(l.a)(E,2),O=W[0],j=W[1],A=function(e,t){var a=p;t?(a.push(e),d(a),x(Object(s.a)({},k,Object(c.a)({},e,t)))):(Object(u.remove)(a,(function(t){return t===e})),d(a),x(Object(s.a)({},k,Object(c.a)({},e,t))));var n=L(z,a);w(n)},S=function(e,t){x(Object(s.a)({},k,{talksToEveryOne:t}))},C=function(e){j(e)},G=function(e){o(e)};return r.a.createElement(h.a,{theme:q},function(){switch(a){case"picker":return r.a.createElement(N,{changePage:G,filteredGhosts:f,selectedEvidences:p,updateSelectedEvidences:A,buttonsState:k,ghostName:O,updateGhostName:C,handleAnswersButton:S});case"questions":return r.a.createElement(D,{changePage:G});default:return null}}())};a(87);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.892b4776.chunk.js.map