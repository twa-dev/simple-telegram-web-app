import{r as s,j as e,b as a,c as t,N as r}from"./index--35zMAUf.js";import{r as i,C as n,E as c}from"./index-DVwtvdYL.js";import"./phaser-CyRpi3Lo.js";const d=()=>{const[d,l]=s.useState(!1),o=c.getInstance(),[j,x]=s.useState(!1);return s.useEffect((()=>{window.screen.availHeight<700&&l(!0),o.addListener("showCongrates",(s=>{x(!0)}))}),[]),e.jsx(e.Fragment,{children:d?e.jsxs("div",{className:"qrCode",children:[e.jsx("div",{children:"Play with telegram app."}),e.jsx("img",{src:"/assets/frenpet.png",alt:"qrCode"}),e.jsx("div",{children:"@frenpetgame_bot"})]}):e.jsxs("div",{className:"layout",children:[e.jsx("div",{className:"content",children:e.jsxs(a,{children:[i.map((s=>e.jsx(t,{...s},s.path))),e.jsx(t,{path:"*",element:e.jsx(r,{to:"/"})})]})}),e.jsx(n,{visible:j,callBack:()=>x(!1)})]})})};export{d as default};