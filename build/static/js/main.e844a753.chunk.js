(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),c=(a(56),a(9)),o=a(10),s=a(12),m=a(11),u=a(13),d=(a(57),a(3)),h=a(134),f=a(135),p=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(d.Grid,{className:"landing-grid"},r.a.createElement(d.Cell,{col:12},r.a.createElement("img",{src:"https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png",alt:"avatar",className:"avatar-img"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"A Website to Share CVs")))))}}]),t}(n.Component),E=a(48),v=a(23),b=a(49),g=a.n(b),y=a(39),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).curriculum=r.a.createRef(),a.name=r.a.createRef(),a.University=r.a.createRef(),a.Major=r.a.createRef(),a.file=r.a.createRef(),a.state={isSnackbarActive:!1,msg:""},a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(){var e=this,t=y.serialize(this.file.current.files[0]),a={name:this.name.current.inputRef.value,University:this.University.current.inputRef.value,Major:this.Major.current.inputRef.value,file:t};g.a.post("http://localhost:5000/api/items/",a).then(function(t){e.setState({msg:"Submit Succeed",isSnackbarActive:!0}),console.log(t)}).catch(function(t){e.setState({msg:"Submit Failed",isSnackbarActive:!0}),console.log(t)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.Layout,null,r.a.createElement(d.Grid,{className:"contact-grid"},r.a.createElement(d.Cell,null,r.a.createElement("p",null,"In this page, you can upload your CV"),r.a.createElement(d.Content,null),r.a.createElement(d.Content,{style:{width:"100%"}},r.a.createElement(d.Textfield,{ref:this.name,label:"Name...",style:{width:"200px"}})),r.a.createElement(d.Content,{style:{width:"100%"}},r.a.createElement(d.Textfield,{ref:this.University,label:"Univercity...",style:{width:"200px"}})),r.a.createElement(d.Content,{style:{width:"100%"}},r.a.createElement(d.Textfield,{ref:this.Major,label:"Major...",style:{width:"200px"}})),r.a.createElement(d.Content,{style:{width:"100%"}},r.a.createElement("input",{ref:this.file,type:"file"})),r.a.createElement(d.Content,null,r.a.createElement(d.Button,{primary:!0,onClick:this.handleSubmit},"Submit"))))),r.a.createElement(d.Snackbar,{active:this.state.isSnackbarActive,onClick:this.handleClickActionSnackbar,action:""},this.state.msg))}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-body"},r.a.createElement(d.Grid,{className:"contact-grid"},r.a.createElement(d.Cell,{col:6},r.a.createElement("img",{src:"http://simpleicon.com/wp-content/uploads/multy-user.png",alt:"avatar",className:"avatar-img"}),r.a.createElement("h2",null,"Team H"),r.a.createElement("p",{style:{width:"75%",margin:"auto",paddingTop:"1em"}},"We, Tomader, Lina, and Ghaliah, have developed this site using React.")),r.a.createElement(d.Cell,{col:6},r.a.createElement("h2",null,"Contact Us"),r.a.createElement("hr",null),r.a.createElement("div",{className:"contact-list"},r.a.createElement(d.List,null,r.a.createElement(d.ListItem,null,r.a.createElement(d.ListItemContent,{style:{fontSize:"25px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"(123) 456-7890")),r.a.createElement(d.ListItem,null,r.a.createElement(d.ListItemContent,{style:{fontSize:"25px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-fax","aria-hidden":"true"}),"(123) 456-7890")),r.a.createElement(d.ListItem,null,r.a.createElement(d.ListItemContent,{style:{fontSize:"25px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"someone@example.com")),r.a.createElement(d.ListItem,null,r.a.createElement(d.ListItemContent,{style:{fontSize:"25px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-skype","aria-hidden":"true"}),"MySkypeID")))))))}}]),t}(n.Component),j=function(){return r.a.createElement(h.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:p}),r.a.createElement(f.a,{path:"/aboutus",component:C}),r.a.createElement(f.a,{path:"/Preview",component:E.a}),r.a.createElement(f.a,{path:"/Upload",component:w}))},k=a(132),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(d.Layout,null,r.a.createElement(d.Header,{className:"header-color",title:r.a.createElement(k.a,{style:{textDecoration:"none",color:"white"},to:"/"},"CVs"),scroll:!0},r.a.createElement(d.Navigation,null,r.a.createElement(k.a,{to:"/Upload"},"Upload CV"),r.a.createElement(k.a,{to:"/Preview"},"Preview Others' CVs"),r.a.createElement(k.a,{to:"/AboutUs"},"About Us"))),r.a.createElement(d.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(j,null))))}}]),t}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(128),a(129);var N=a(133);i.a.render(r.a.createElement(N.a,null,r.a.createElement(O,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Group-h/build",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Group-h/build","/service-worker.js");S?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):x(e)})}}()},48:function(e,t,a){"use strict";(function(e){var n=a(9),r=a(10),l=a(12),i=a(11),c=a(13),o=a(0),s=a.n(o),m=a(3),u=a(39),d=function(t){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(i.a)(a).call(this,e))).state={CVs:[]},fetch("http://localhost:5000/api/items/").then(function(e){return e.json()}).then(function(e){t.setState({CVs:e})}),t}return Object(c.a)(a,t),Object(r.a)(a,[{key:"toggleCategories",value:function(){return s.a.createElement("div",{className:"projects-grid"},this.state.CVs.map(function(t){return s.a.createElement(m.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},s.a.createElement(m.CardTitle,{style:{color:"#black",height:"176px",background:"url(https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png) center / cover"}},t.name),s.a.createElement(m.CardText,null,"University: ",t.University),s.a.createElement(m.CardText,null,"Major: ",t.Major),s.a.createElement(m.Grid,null,s.a.createElement(m.CardActions,{border:!0},s.a.createElement("a",{href:u.deserialize(e.from(t.file.data)).name,download:!0},"Download"))))}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m.Grid,null,s.a.createElement(m.Cell,{col:12},s.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),a}(o.Component);t.a=d}).call(this,a(8).Buffer)},51:function(e,t,a){e.exports=a(130)},56:function(e,t,a){},57:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.e844a753.chunk.js.map