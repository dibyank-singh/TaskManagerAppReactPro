(this.webpackJsonptaskmanagerapp=this.webpackJsonptaskmanagerapp||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var l=a(2),n=a.n(l),c=a(9),r=a.n(c),s=(a(22),a(23),a(7)),o=a(40),i=a(36),j=a(37),b=a(38),d=a(39),m=a(1),u=function(e){var t=e.modal,a=e.toggle,n=e.savealltask,c=Object(l.useState)(""),r=Object(s.a)(c,2),u=r[0],p=r[1],x=Object(l.useState)(""),O=Object(s.a)(x,2),f=O[0],h=O[1],g=Object(l.useState)(""),v=Object(s.a)(g,2),k=v[0],y=v[1],C=function(e){var t=e.target,a=t.name,l=t.value;"fullname"===a?p(l):"abilityname"===a?h(l):"taskname"===a&&y(l)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.a,{isOpen:t,toggle:a,children:[Object(m.jsx)(i.a,{toggle:a,children:"Create Your Task"}),Object(m.jsx)(j.a,{children:Object(m.jsxs)("form",{action:"",children:[Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:" Name"}),Object(m.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Your Name",value:u,onChange:C,name:"fullname"})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Ability"}),Object(m.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"EX-Programing",value:f,onChange:C,name:"abilityname"})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Task"}),Object(m.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"EX-Fix bug in App",value:k,onChange:C,name:"taskname"})]})]})}),Object(m.jsxs)(b.a,{children:[Object(m.jsx)(d.a,{color:"primary",onClick:function(){var e={};e.fullname=u,e.abilityname=f,e.taskname=k,n(e)},children:"Save Task"}),Object(m.jsx)(d.a,{color:"secondary",onClick:a,children:"Cancel"})]})]})})},p=function(e){var t=e.modal,a=e.toggle,n=(e.savealltask,e.updatetask),c=e.val,r=Object(l.useState)(""),u=Object(s.a)(r,2),p=u[0],x=u[1],O=Object(l.useState)(""),f=Object(s.a)(O,2),h=f[0],g=f[1],v=Object(l.useState)(""),k=Object(s.a)(v,2),y=k[0],C=k[1],F=function(e){var t=e.target,a=t.name,l=t.value;"fullname"===a?x(l):"abilityname"===a?g(l):"taskname"===a&&C(l)};Object(l.useEffect)((function(){x(c.fullname),g(c.abilityname),C(c.taskname)}),[]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.a,{isOpen:t,toggle:a,children:[Object(m.jsx)(i.a,{toggle:a,children:"Update Your Task"}),Object(m.jsx)(j.a,{children:Object(m.jsxs)("form",{action:"",children:[Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:" Name"}),Object(m.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"Enter Your Name",value:p,onChange:F,name:"fullname"})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Ability"}),Object(m.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"EX-Programing",value:h,onChange:F,name:"abilityname"})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Task"}),Object(m.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"EX-Fix bug in App",value:y,onChange:F,name:"taskname"})]})]})}),Object(m.jsxs)(b.a,{children:[Object(m.jsx)(d.a,{color:"primary",onClick:function(e){e.preventDefault();var t={};t.fullname=p,t.abilityname=h,t.taskname=y,n(t)},children:"Update the Task"}),Object(m.jsx)(d.a,{color:"secondary",onClick:a,children:"Cancel"})]})]})})},x=function(e){var t=e.val,a=e.index,n=e.deletetask,c=e.updatelistarray,r=Object(l.useState)(!1),o=Object(s.a)(r,2),i=o[0],j=o[1];return Object(m.jsxs)("div",{class:"card-wrapper mr-4",children:[Object(m.jsx)("div",{class:"card-top",style:{"background-color":"#f8cdda"}}),Object(m.jsxs)("div",{class:"task-holder",children:[Object(m.jsxs)("span",{class:"card-header",style:{"background-color":"#ffffff","border-radius":"10px",textTransform:"capitalize"},children:["  ",t.fullname]}),Object(m.jsx)("span",{class:"card-header",style:{"background-color":"#dae2f8","border-radius":"10px",textTransform:"capitalize"},children:t.abilityname}),Object(m.jsx)("span",{class:"card-header",style:{"background-color":"#CCCCB2","border-radius":"10px",textTransform:"capitalize"},children:t.taskname}),Object(m.jsxs)("div",{style:{position:"absolute",right:"20px",bottom:"12px"},children:[Object(m.jsx)("i",{class:"far fa-edit mr-3",style:{color:"#a044ff",cursor:"pointer"},onClick:function(){return j(!0)}}),Object(m.jsx)("i",{class:"fas fa-trash-alt",style:{color:"#00C9FF",cursor:"pointer"},onClick:function(){n(a)}})]})]}),Object(m.jsx)(p,{modal:i,toggle:function(){j(!i)},updatetask:function(e){c(e,a)},val:t})]})},O=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)([]),r=Object(s.a)(c,2),o=r[0],i=r[1];Object(l.useEffect)((function(){var e=localStorage.getItem("localitems");if(e){var t=JSON.parse(e);i(t)}}),[]);var j=function(e,t){var a=o;a[t]=e,localStorage.setItem("localitems",JSON.stringify(a)),i(a),window.location.reload()},b=function(){var e=o;e.splice("index",1),localStorage.setItem("localitems",JSON.stringify(e)),i(e),window.location.reload()};return console.log(o),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"Headerstyle text-center ",children:[Object(m.jsx)("h3",{children:"Task Manager"}),Object(m.jsx)("button",{className:"btnstyle btn btn-primary mt-2",onClick:function(){return n(!0)},children:"Create Task"})]}),Object(m.jsx)("div",{className:"cardstyle",children:o.map((function(e,t){return Object(m.jsx)(x,{val:e,index:t,deletetask:b,updatelistarray:j})}))}),Object(m.jsx)(u,{toggle:function(){return n(!a)},modal:a,savealltask:function(e){var t=o;t.push(e),localStorage.setItem("localitems",JSON.stringify(t)),i(t),n(!1)}})]})};a(34);var f=function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(O,{})})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),l(e),n(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),h()}},[[35,1,2]]]);
//# sourceMappingURL=main.5ef4ef37.chunk.js.map