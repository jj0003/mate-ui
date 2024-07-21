import{j as a}from"./jsx-runtime-BZf_YgVj.js";import{c as k,a as y}from"./index-3cYtZ4w6.js";import{r as T}from"./index-CEThVCg_.js";import{B as N}from"./index-M48116fj.js";const _=y(["rounded-lg","shadow-lg","overflow-hidden","transition","duration-300","ease-in-out","hover:shadow-xl","cursor-pointer"],{variants:{variant:{basic:"",withButton:"",image:""}},compoundVariants:[{variant:"basic",className:"bg-white p-6"},{variant:"withButton",className:"bg-white p-6"},{variant:"image",className:"bg-white p-0"}],defaultVariants:{variant:"basic"}}),i=T.forwardRef(({variant:t,title:s,content:v,imageSrc:c,buttonText:o,onClick:d,className:w,...x},B)=>a.jsxs("div",{ref:B,className:k(_({variant:t,className:w})),...x,onClick:d,children:[t==="image"&&c&&a.jsx("img",{src:c,alt:s,className:"w-full h-48 object-cover"}),a.jsxs("div",{className:"p-6",children:[a.jsx("h3",{className:"text-2xl font-bold mb-2",children:s}),a.jsx("p",{className:"text-gray-700 mb-4",children:v}),t==="withButton"&&o&&a.jsx(N,{size:"md",variant:"solid",colorscheme:"primary",onClick:d,children:o})]})]}));try{i.displayName="Card",i.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"image" | "basic" | "withButton" | null'}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Components/Card",component:i,parameters:{layout:"centered",docs:{description:{component:"The Card component is a reusable component that can be used to display content in a card format. It can be customized to include different variants such as basic, with button, and with image. The image can be added as a URL."}}},tags:["autodocs"]},e={args:{variant:"basic",title:"Basic Card",content:"This is a basic card with a title and content.",onClick:()=>alert("Card clicked!")}},n={args:{variant:"withButton",title:"Card with Button",content:"This card includes a button for additional actions.",buttonText:"Click Me",onClick:()=>alert("Card clicked!")}},r={args:{variant:"image",title:"Card with Image",content:"This card includes an image, a title, and content.",imageSrc:"https://via.placeholder.com/400x300",onClick:()=>alert("Card clicked!")}};var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "basic",
    title: "Basic Card",
    content: "This is a basic card with a title and content.",
    onClick: () => alert('Card clicked!')
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,h,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "withButton",
    title: "Card with Button",
    content: "This card includes a button for additional actions.",
    buttonText: "Click Me",
    onClick: () => alert('Card clicked!')
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,C,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "image",
    title: "Card with Image",
    content: "This card includes an image, a title, and content.",
    imageSrc: "https://via.placeholder.com/400x300",
    onClick: () => alert('Card clicked!')
  }
}`,...(f=(C=r.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const E=["Basic","WithButton","Image"];export{e as Basic,r as Image,n as WithButton,E as __namedExportsOrder,q as default};
