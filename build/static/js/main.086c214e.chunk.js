(this.webpackJsonpvj03=this.webpackJsonpvj03||[]).push([[0],{39:function(n,t,e){"use strict";e.r(t);var o=e(2),c=e(15),r=e.n(c),a=e(6),u=e(4),i=e(0),s=function(n){var t=n.poruka,e=n.promjenaVaznosti,o=n.brisiPoruku,c=t.vazno?"oznaci kao nevazno":"oznaci kao vazno";return Object(i.jsxs)("li",{children:[t.sadrzaj,Object(i.jsx)("button",{onClick:e,children:c}),Object(i.jsx)("button",{onClick:o,children:"-"})]})},j=e(3),f=e.n(j),b="http://localhost:3001/api/poruke",l=function(){return f.a.get(b)},d=function(n){return f.a.post(b,n)},v=function(n,t){return f.a.put("".concat(b,"/").concat(n),t)},h=function(n){return f.a.delete("".concat(b,"/").concat(n))},p=function(){var n=Object(o.useState)([]),t=Object(u.a)(n,2),e=t[0],c=t[1],r=Object(o.useState)("Unesi poruku..."),j=Object(u.a)(r,2),f=j[0],b=j[1],p=Object(o.useState)(!0),O=Object(u.a)(p,2),k=O[0],m=O[1],z=k?e:e.filter((function(n){return!0===n.vazno}));Object(o.useEffect)((function(){console.log("Effect hook"),l().then((function(n){c(n.data)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Poruke"}),Object(i.jsxs)("button",{onClick:function(){return m(!k)},children:["Prika\u017ei ",k?"samo va\u017ene":"sve"]}),Object(i.jsx)("ul",{children:z.map((function(n){return Object(i.jsx)(s,{poruka:n,promjenaVaznosti:function(){return function(n){var t=e.find((function(t){return t.id===n})),o=Object(a.a)(Object(a.a)({},t),{},{vazno:!t.vazno});v(n,o).then((function(t){c(e.map((function(e){return e.id!==n?e:t.data})))}))}(n.id)},brisiPoruku:function(){return t=n.id,void h(t).then((function(n){console.log(n),c(e.filter((function(n){return n.id!==t})))}));var t}},n.id)}))}),Object(i.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t={sadrzaj:f,datum:(new Date).toUTCString(),vazno:Math.random>.5};d(t).then((function(n){c(e.concat(t)),b("")}))},children:[Object(i.jsx)("input",{value:f,onChange:function(n){console.log(n.target.value),b(n.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"Spremi"})]})]})};r.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.086c214e.chunk.js.map