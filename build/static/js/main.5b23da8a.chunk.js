(this.webpackJsonpgeek_synergy=this.webpackJsonpgeek_synergy||[]).push([[0],{28:function(e,t,a){e.exports=a(58)},33:function(e,t,a){},34:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a.n(o),i=a(6),c=(a(33),a(27)),s=a(5),m=a(1);a(34);var u=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){o&&e.logedIn(o)})),r.a.createElement("form",{id:"login",onSubmit:function(t){var a,n;t.preventDefault(),n=t.target.email.value,e.user.some((function(e){return e.Email===n}))?(a=t.target.password.value,e.user.some((function(e){return e.Password===a}))?l(!0):alert("Invalid Credentials.")):alert("User doesn't exist")}},r.a.createElement("input",{type:"email",placeholder:"email@example.com",id:"email",name:"email"}),r.a.createElement("input",{type:"password",placeholder:"*******",id:"password",name:"password"}),r.a.createElement("input",{type:"submit",value:"Login"}))};var d=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){return console.log(o)}),[o]),o?r.a.createElement(m.a,{to:"/login"}):r.a.createElement("form",{id:"signup",onSubmit:function(t){var a;t.preventDefault(),t.target.pwd1.value!==t.target.pwd2.value?alert("Mismatch password!"):(a=t.target.email.value,e.user.some((function(e){return e.Email===a}))?alert("Already registered with this email address."):(e.register({Name:t.target.name.value,Password:t.target.pwd1.value,Email:t.target.email.value,PhoneNo:t.target.phone.value,Profession:t.target.profession.value}),l(!0)))}},r.a.createElement("input",{type:"text",placeholder:"Name",id:"name",name:"name",required:!0}),r.a.createElement("input",{type:"email",placeholder:"email@example.com",id:"email",name:"email",required:!0}),r.a.createElement("input",{type:"text",placeholder:"Mob. no.",id:"phone",name:"phone"}),r.a.createElement("select",{name:"profession",id:"profession"},r.a.createElement("option",{value:"web_developer"},"Web Developer"),r.a.createElement("option",{value:"digital_marketing"},"Digital Marketing"),r.a.createElement("option",{value:"system_admin"},"System Administrator")),r.a.createElement("input",{type:"password",placeholder:"password",id:"pwd1",name:"pwd1"}),r.a.createElement("input",{type:"password",placeholder:"confirm password",id:"pwd2",name:"pwd2"}),r.a.createElement("input",{type:"submit",value:"Signup"}))},p=a(26),g=a.n(p);a(57);function v(e){return r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"movieInfo"},r.a.createElement("div",{className:"votes"},r.a.createElement("span",null,"^"),r.a.createElement("p",null,e.movie.voting),r.a.createElement("span",null,"V")),r.a.createElement("img",{src:e.movie.poster,alt:"na"}),r.a.createElement("div",{className:"details"},r.a.createElement("h3",null,e.movie.title," "),r.a.createElement("p",null,"Genre: ",e.movie.genre),r.a.createElement("p",null,"Director: ",e.movie.director.forEach((function(e,t){return 0===t?e:","+e}))," "),r.a.createElement("p",null,"Starring: ",e.movie.stars.forEach((function(e,t){return r.a.createElement("span",null,t)}))),r.a.createElement("p",null,e.movie.runTime," Mins | ",e.movie.language," | ",e.movie.releasedDate," "))),r.a.createElement("div",{className:"watchButton"},r.a.createElement("a",{href:"https://youtube.com",className:"trailer"},"Watch Trailer")))}var E=function(){var e=Object(n.useState)([{_id:"5d9448106e6974498e97e844",description:"",director:["Prashanth Neel"],writers:["Prashanth Neel"],stars:["Sanjay Dutt,Raveena Tandon,Yash,Srinidhi Shetty"],productionCompany:["Prashanth Neel"],pageViews:90,upVoted:[],downVoted:[],title:"K.G.F: Chapter 2",language:"Kannada",runTime:null,releasedDate:1601580599,genre:"action,drama",voted:[{upVoted:[],downVoted:[],_id:"5d9448106e6974498e97e846",updatedAt:1569998864,genre:"action"},{upVoted:["5e1d4475416a070ee7add99c"],downVoted:[],_id:"5d9448106e6974498e97e845",updatedAt:1569998864,genre:"drama"}],poster:"https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1569998864699_K.G.F:_Chapter 2.jpg",totalVoted:0,voting:0}]),t=Object(s.a)(e,2),a=t[0],o=t[1];return g.a.post("https://hoblist.com/movieList",{category:"movies",language:"kannada",genre:"all",sort:"voting"},{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"}}).then((function(e){o(e.data.result)})).catch((function(e){return console.log(e)})),Object(n.useEffect)((function(){return console.log("updated")}),[a]),r.a.createElement("div",{id:"movieList"},a.map((function(e){return r.a.createElement(v,{key:e._id,movie:e})})))};var h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,1)[0],a=Object(n.useState)(!1),o=Object(s.a)(a,2),l=o[0],p=o[1];if(localStorage.getItem("user")){var g=JSON.parse(localStorage.getItem("user"));t.push.apply(t,Object(c.a)(g))}function v(e){t.push(e),localStorage.setItem("user",JSON.stringify(t))}function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];p(e)}return Object(n.useEffect)((function(){return console.log(l)}),[l]),l?r.a.createElement(E,null):r.a.createElement("div",null,r.a.createElement("div",{id:"links"},r.a.createElement(i.b,{className:"link",to:"/signup"},"Signup"),r.a.createElement(i.b,{className:"link",to:"/login"},"Login")),r.a.createElement(m.d,null,r.a.createElement(m.b,{component:function(){return r.a.createElement(d,{register:v,user:t})},exact:!0,path:"/"}),r.a.createElement(m.b,{component:function(){return r.a.createElement(d,{register:v,user:t})},exact:!0,path:"/signup"}),r.a.createElement(m.b,{component:function(){return r.a.createElement(u,{user:t,logedIn:h})},exact:!0,path:"/login"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.5b23da8a.chunk.js.map