(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(2),s=a(11),i=a.n(s),l=(a(17),a(18),function(){return Object(c.jsx)("header",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("h1",{className:"title noselect",children:"CV Maker"})})})}),o=(a(19),a(3)),r=(a(20),a(4)),j=function(e){var t=e.setFirstName,a=e.setLastName,s=e.setPhone,i=e.setEmail,l=e.information,j=Object(n.useState)(!0),u=Object(o.a)(j,2),b=u[0],m=u[1],d=Object(n.useState)(l.firstName),O=Object(o.a)(d,2),h=O[0],p=O[1],f=Object(n.useState)(l.lastName),x=Object(o.a)(f,2),N=x[0],v=x[1],S=Object(n.useState)(l.phone),g=Object(o.a)(S,2),y=g[0],C=g[1],k=Object(n.useState)(l.email),F=Object(o.a)(k,2),E=F[0],J=F[1];return Object(c.jsxs)("div",{className:"form-container",children:[Object(c.jsx)(r.a,{className:"edit",onClick:function(){return m((function(e){return!e}))}}),Object(c.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(h),a(N),s(y),i(E)},autoComplete:"off",style:{display:b?"none":"block"},children:[Object(c.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(c.jsx)("input",{type:"text",placeholder:"First Name",id:"firstName",className:"first-name",value:h,onChange:function(e){return p(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(c.jsx)("input",{type:"text",placeholder:"Last Name",id:"lastName",className:"last-name",value:N,onChange:function(e){return v(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(c.jsx)("input",{type:"text",placeholder:"Phone Number",id:"phone",className:"phone",value:y,onChange:function(e){return C(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(c.jsx)("input",{type:"email",placeholder:"Email Address",id:"email",className:"email",value:E,onChange:function(e){return J(e.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Fill Details"})]})]})},u=function(){var e,t,a,s,i=Object(n.useState)((null===(e=JSON.parse(localStorage.getItem("general")))||void 0===e?void 0:e.firstName)||""),l=Object(o.a)(i,2),r=l[0],u=l[1],b=Object(n.useState)((null===(t=JSON.parse(localStorage.getItem("general")))||void 0===t?void 0:t.lastName)||""),m=Object(o.a)(b,2),d=m[0],O=m[1],h=Object(n.useState)((null===(a=JSON.parse(localStorage.getItem("general")))||void 0===a?void 0:a.phone)||""),p=Object(o.a)(h,2),f=p[0],x=p[1],N=Object(n.useState)((null===(s=JSON.parse(localStorage.getItem("general")))||void 0===s?void 0:s.email)||""),v=Object(o.a)(N,2),S=v[0],g=v[1];return Object(n.useEffect)((function(){localStorage.setItem("general",JSON.stringify({firstName:r,lastName:d,phone:f,email:S}))}),[r,d,f,S]),Object(c.jsxs)("div",{className:"general",children:[Object(c.jsx)(j,{setFirstName:u,setLastName:O,setPhone:x,setEmail:g,information:{firstName:r,lastName:d,phone:f,email:S}}),Object(c.jsxs)("div",{className:"details",children:[Object(c.jsxs)("h3",{className:"name",children:[r||"Enter your details =>"," ",d]}),Object(c.jsx)("p",{children:f}),Object(c.jsx)("p",{children:S})]})]})},b=(a(21),a(8)),m=a(24),d=function(e){var t=e.setSchools,a=Object(n.useState)(!0),s=Object(o.a)(a,2),i=s[0],l=s[1],j=Object(n.useState)(""),u=Object(o.a)(j,2),d=u[0],O=u[1],h=Object(n.useState)(""),p=Object(o.a)(h,2),f=p[0],x=p[1],N=Object(n.useState)(""),v=Object(o.a)(N,2),S=v[0],g=v[1];return Object(c.jsxs)("div",{className:"form-container",children:[Object(c.jsx)(r.a,{className:"edit",onClick:function(){return l((function(e){return!e}))}}),Object(c.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t((function(e){return[].concat(Object(b.a)(e),[{schoolName:d,qual:f,dates:S,id:Object(m.a)()}])})),O(""),x(""),g("")},autoComplete:"off",style:{display:i?"none":"block"},children:[Object(c.jsx)("label",{htmlFor:"schoolName",children:"School Name"}),Object(c.jsx)("input",{type:"text",placeholder:"School Name",id:"schoolName",value:d,onChange:function(e){return O(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"qual",children:"Qualification"}),Object(c.jsx)("input",{type:"text",placeholder:"Qualification",id:"qual",value:f,onChange:function(e){return x(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"dates",children:"Time of Study"}),Object(c.jsx)("input",{type:"text",placeholder:"Time of Study",id:"dates",value:S,onChange:function(e){return g(e.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Add School"})]})]})},O=a(7),h=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("education"))||[]),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){localStorage.setItem("education",JSON.stringify(a))}),[a]),Object(c.jsxs)("div",{className:"education",children:[Object(c.jsx)(d,{setSchools:s,schools:a}),Object(c.jsx)("h1",{className:"title",children:"Education"}),Object(c.jsx)("div",{className:"details",children:a.map((function(e){return Object(c.jsxs)("div",{className:"school-experience",children:[Object(c.jsxs)("div",{className:"school-container",children:[Object(c.jsx)("h3",{className:"school",children:e.schoolName}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){return t=e.id,void s((function(e){return e.filter((function(e){return e.id!==t}))}));var t},title:"Delete Work Experience",children:Object(c.jsx)(O.a,{})})]}),Object(c.jsx)("p",{className:"qual",children:e.qual}),Object(c.jsx)("p",{className:"dates",children:e.dates})]},e.id)}))})]})},p=(a(22),function(e){var t=e.companies,a=e.setCompanies,s=Object(n.useState)(!0),i=Object(o.a)(s,2),l=i[0],j=i[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),O=d[0],h=d[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),x=f[0],N=f[1],v=Object(n.useState)(""),S=Object(o.a)(v,2),g=S[0],y=S[1],C=Object(n.useRef)(null);return Object(c.jsxs)("div",{className:"form-container",ref:C,children:[Object(c.jsx)(r.a,{className:"edit",onClick:function(){l&&C.current.scrollIntoView(),j((function(e){return!e}))}}),Object(c.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),a([].concat(Object(b.a)(t),[{companyName:O,position:x,desc:g,id:Object(m.a)()}])),h(""),N(""),y("")},autoComplete:"off",style:{display:l?"none":"block"},children:[Object(c.jsx)("label",{htmlFor:"companyName",children:"Company Name"}),Object(c.jsx)("input",{type:"text",placeholder:"Company Name",id:"companyName",value:O,onChange:function(e){return h(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"positionTitle",children:"Position Title"}),Object(c.jsx)("input",{type:"text",placeholder:"Position Name",id:"positionTitle",value:x,onChange:function(e){return N(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"positionDescription",children:"Position Description"}),Object(c.jsx)("input",{type:"text",placeholder:"Position Dates, Job Description...",id:"positionDescription",value:g,onChange:function(e){return y(e.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Add Work"})]})]})}),f=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("work"))||[]),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){localStorage.setItem("work",JSON.stringify(a))}),[a]),Object(c.jsxs)("div",{className:"work",children:[Object(c.jsx)(p,{companies:a,setCompanies:s}),Object(c.jsx)("h1",{className:"title",children:"Work"}),Object(c.jsx)("div",{className:"details",children:a.map((function(e){return Object(c.jsxs)("div",{className:"work-experience",children:[Object(c.jsxs)("div",{className:"company-container",children:[Object(c.jsx)("h3",{className:"company",children:e.companyName}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){return t=e.id,void s((function(e){return e.filter((function(e){return e.id!==t}))}));var t},title:"Delete Work Experience",children:Object(c.jsx)(O.a,{})})]}),Object(c.jsx)("p",{children:e.position}),Object(c.jsx)("p",{children:e.desc})]},Object(m.a)())}))})]})},x=function(){return Object(c.jsx)("main",{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u,{}),Object(c.jsx)(h,{}),Object(c.jsx)(f,{})]})})},N=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{}),Object(c.jsx)(x,{})]})};i.a.render(Object(c.jsx)(N,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.a39610ea.chunk.js.map