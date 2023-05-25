(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{30:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),s=c(20),n=c.n(s),o=c(21),i=c(22),l=c(23),j=c(25),b=c(7),d=c(2),h=(c(30),c(0));var m=function(){return Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("ul",{className:"flex-row",children:[Object(h.jsx)("li",{className:"mx-2",children:Object(h.jsx)(b.b,{to:"/about",children:"About Me"})}),Object(h.jsx)("li",{className:"mx-2",children:Object(h.jsx)(b.b,{to:"/portfolio",children:"Portfolio"})}),Object(h.jsx)("li",{className:"mx-2",children:Object(h.jsx)(b.b,{to:"/contact",children:"Contact"})})]})})};var x=function(){return Object(h.jsxs)("header",{className:"flex-row px-1",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)("h1",{children:Object(h.jsx)(b.b,{to:"/",children:"Lavinia Boettcher"})})}),Object(h.jsx)(m,{})]})},O=c.p+"static/media/Profile.9b05c8f5.png";var u=function(){return Object(h.jsxs)("section",{className:"home my-5",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h2",{children:"Hi, I'm Lavinia"}),Object(h.jsx)("p",{children:"Welcome to my Portfolio!"}),Object(h.jsx)(b.b,{to:"portfolio",children:Object(h.jsx)("button",{children:"View my Projects"})})]}),Object(h.jsx)("div",{className:"portrait",children:Object(h.jsx)("img",{src:O,alt:"self portrait"})})]})};var p=function(){return Object(h.jsxs)("section",{class:"about",children:[Object(h.jsx)("h1",{id:"about",children:"About Me"}),Object(h.jsx)("p",{children:"I have a certificate in Full Stack Development from UCLA Extension, which I completed in April 2023. This bootcamp helped me to develop a number of programming skills with the help of experienced, working developers. Over the course of six months, I worked on both individual and group projects. I am now comfortable with React.js, Express.js, CSS libraries such as Tailwind and Chakra UI, Node.js, MongoDB and MongoODM, JavaScript, and MySQL. However, I am constantly learning more about programming and furthering my skills."}),Object(h.jsx)("a",{href:"https://docs.google.com/document/d/e/2PACX-1vSMhqC9qk4zhoCUQ1MSMYWgxZ2paBOrfPq5AUYrI2yiukqQUNzz-yvIbspIolmRC5Z5G6QI7tAjdS9o/pub",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"My Resume"})})]})},g=c(12),f=c(17),v=c(18);var k=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(v.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(""),n=Object(v.a)(s,2),o=n[0],i=n[1],l=c.name,j=c.email,b=c.message,d=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);i(t?"":"Your email is invalid.")}else e.target.value.length?i(""):i("".concat(e.target.name," is required."));o||(a(Object(f.a)(Object(f.a)({},c),{},Object(g.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{"data-testid":"h1tag",children:"Contact Me"}),Object(h.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||(i("Your message has been sent!"),console.log("Submit Form",c)),setTimeout((function(){window.location.reload()}),5e3)},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{type:"text",name:"name",defaultValue:l,onBlur:d})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(h.jsx)("input",{type:"email",name:"email",defaultValue:j,onBlur:d})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(h.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:d})]}),o&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error-text",children:o})}),Object(h.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]}),Object(h.jsx)("h3",{children:"Or Email Me: laboettcher@outlook.com"})]})},w=c.p+"static/media/mood-mixer.f7eeea8d.gif",y=c.p+"static/media/work-wrangler.0e8447a6.png",M=c.p+"static/media/vroom-vroom.0175691a.png",N=c.p+"static/media/tech-talk.77b59db6.png",S=c.p+"static/media/Note-Taker.9c6d1f54.gif",A=c.p+"static/media/Weather-Dashboard.565cba28.png";var C=function(){return Object(h.jsx)("section",{class:"portfolio",children:Object(h.jsxs)("div",{class:"row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4",children:[Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:w,alt:"Mood Mixer",class:"card-img-top"}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("a",{href:"https://github.com/sieraford/mood-mixer",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"GitHub"})}),Object(h.jsx)("a",{href:"https://sieraford.github.io/mood-mixer/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Application"})})]})]})}),Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:y,alt:"Work Wrangler",class:"card-img-top"}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("a",{href:"https://github.com/srlevit94/Personal-Task-Manager",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"GitHub"})}),Object(h.jsx)("a",{href:"https://work-wrangler.herokuapp.com/login",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Application"})})]})]})}),Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:M,alt:"Vroom Vroom",class:"card-img-top"}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("a",{href:"https://github.com/sjuan634/vROOM-vROOM",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"GitHub"})}),Object(h.jsx)("a",{href:"https://prj3-vroom-vroom.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Application"})})]})]})}),Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:N,alt:"Tech Talk",class:"card-img-top"}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("a",{href:"https://github.com/laboettcher/tech-talk-blog",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"GitHub"})}),Object(h.jsx)("a",{href:"https://tech-talk-blog-2.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Application"})})]})]})}),Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:S,alt:"Note Taker",class:"card-img-top"}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("a",{href:"https://github.com/laboettcher/Express-Note-Taker",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"GitHub"})}),Object(h.jsx)("a",{href:"https://note-taker-express-challenge.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Application"})})]})]})}),Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:A,alt:"Weather Dashboard",class:"card-img-top"}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("a",{href:"https://github.com/laboettcher/Weather-Dashboard",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"GitHub"})}),Object(h.jsx)("a",{href:"https://laboettcher.github.io/Weather-Dashboard/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Application"})})]})]})})]})})},I=c(14);var _=function(){return Object(h.jsx)("div",{className:"footer-div",children:Object(h.jsx)("footer",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("a",{href:"https://github.com/laboettcher",target:"blank",children:Object(h.jsx)("li",{children:Object(h.jsx)(I.a,{})})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/lavinia-b-8b171ba3/",target:"blank",children:Object(h.jsx)("li",{children:Object(h.jsx)(I.b,{})})}),Object(h.jsx)("a",{href:"https://stackoverflow.com/",target:"blank",children:Object(h.jsx)("li",{children:Object(h.jsx)(I.c,{})})})]})})})},T=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsx)(b.a,{basename:"/",children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(x,{}),Object(h.jsxs)("main",{children:[Object(h.jsx)(d.a,{exact:!0,path:"/",component:u}),Object(h.jsx)(d.a,{exact:!0,path:"/about",component:p}),Object(h.jsx)(d.a,{exact:!0,path:"/contact",component:k}),Object(h.jsx)(d.a,{exact:!0,path:"/portfolio",component:C})]}),Object(h.jsx)(_,{})]})})}}]),c}(r.Component),F=T;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),r(e),a(e),s(e),n(e)}))};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),W()}},[[40,1,2]]]);
//# sourceMappingURL=main.d322c478.chunk.js.map