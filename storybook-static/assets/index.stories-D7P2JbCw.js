import{j as t}from"./jsx-runtime-BZf_YgVj.js";import{r as S}from"./index-CEThVCg_.js";import{c as w,a as C}from"./index-3cYtZ4w6.js";const A=C(["space-y-4"],{variants:{variant:{basic:"",withBackground:"bg-gray-100",withBorder:""}},defaultVariants:{variant:"basic"}}),c=({items:a,variant:d})=>{const[l,B]=S.useState(null),y=e=>{B(l===e?null:e)};return t.jsx("div",{className:w(A({variant:d})),children:a.map((e,s)=>t.jsxs("div",{className:`rounded-lg overflow-hidden ${d==="withBorder"?"border border-[#18181B] bg-gray-100":""}`,children:[t.jsx("button",{onClick:()=>y(s),className:"w-full text-left ml-4 py-4 text-lg font-semibold text-[#18181B]",children:e.title}),t.jsx("div",{className:`transition-all duration-300 ease-in-out ${l===s?"max-h-screen":"max-h-0"}`,children:t.jsx("div",{className:"p-4 text-gray-500",children:e.content})})]},s))})};try{c.displayName="Accordion",c.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItem[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"withBackground"'},{value:'"withBorder"'}]}}}}}catch{}const N={title:"Components/Accordion",component:c,parameters:{layout:"fullscreen",docs:{description:{component:"The Accordion component is a reusable component that can be used to display collapsible sections of content. It can be customized to include different variants such as basic, with background, and with border."}}},tags:["autodocs"]},i=a=>t.jsx(c,{...a}),o=i.bind({});o.args={items:[{title:"Section 1",content:"Content for section 1"},{title:"Section 2",content:"Content for section 2"},{title:"Section 3",content:"Content for section 3"}],variant:"basic"};const n=i.bind({});n.args={items:[{title:"Section 1",content:"Content for section 1"},{title:"Section 2",content:"Content for section 2"},{title:"Section 3",content:"Content for section 3"}],variant:"withBackground"};const r=i.bind({});r.args={items:[{title:"Section 1",content:"Content for section 1"},{title:"Section 2",content:"Content for section 2"},{title:"Section 3",content:"Content for section 3"}],variant:"withBorder"};var m,u,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Accordion {...args} />",...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,f,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Accordion {...args} />",...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,v,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Accordion {...args} />",...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const I=["Basic","WithBackground","WithBorder"];export{o as Basic,n as WithBackground,r as WithBorder,I as __namedExportsOrder,N as default};