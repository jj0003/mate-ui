import{j as r}from"./jsx-runtime-BZf_YgVj.js";import{c as w,a as v}from"./index-3cYtZ4w6.js";import{r as B}from"./index-CEThVCg_.js";import{B as x}from"./index-M48116fj.js";const y=v(["rounded-lg","shadow-lg","overflow-hidden","p-6","bg-white","flex","flex-col","gap-4"],{variants:{variant:{basic:"",withBackground:"bg-gray-100",withBorder:"border border-gray-300"}},defaultVariants:{variant:"basic"}}),t=B.forwardRef(({variant:s,className:h,...b},f)=>r.jsxs("div",{ref:f,className:w(y({variant:s,className:h})),...b,children:[r.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Login"}),r.jsx("input",{type:"text",placeholder:"Username",className:"w-full p-2 border border-gray-200 rounded-lg"}),r.jsx("input",{type:"password",placeholder:"Password",className:"w-full p-2 border border-gray-200 rounded-lg"}),r.jsx(x,{size:"md",variant:"solid",colorscheme:"primary",children:"Login"})]}));try{t.displayName="LoginSection",t.__docgenInfo={description:"",displayName:"LoginSection",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"basic" | "withBackground" | "withBorder" | null'}}}}}catch{}const L={title:"Components/LoginSection",component:t,parameters:{layout:"centered",docs:{description:{component:"The LoginSection component is a reusable component that can be used to display a login form. It can be customized to include different variants such as basic, with background, and with border."}}},tags:["autodocs"]},a={args:{variant:"basic"}},e={args:{variant:"withBackground"}},o={args:{variant:"withBorder"}};var n,i,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "basic"
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "withBackground"
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "withBorder"
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const N=["Basic","WithBackground","WithBorder"];export{a as Basic,e as WithBackground,o as WithBorder,N as __namedExportsOrder,L as default};
