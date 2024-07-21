import{j as e}from"./jsx-runtime-BZf_YgVj.js";import{r as p}from"./index-CEThVCg_.js";const d={title:"Welcome to Mate-UI"},t=()=>{const[o,n]=p.useState(""),r=()=>{navigator.clipboard.writeText("npm install mate-ui").then(()=>{n("Copied!"),setTimeout(()=>n(""),2e3)},()=>{n("Failed to copy")})};return e.jsxs("div",{style:{margin:"0 auto",maxWidth:"960px",padding:"40px"},children:[e.jsx("h1",{style:{fontSize:"48px",textAlign:"left"},children:"Welcome to Mate-UI"}),e.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6"},children:"Mate-UI is a comprehensive library of UI components designed to facilitate the development of rich, interactive web applications. Crafted with attention to detail and a focus on ease of use, Mate-UI is built using React, a popular JavaScript library for building user interfaces."}),e.jsxs("div",{style:{position:"relative",marginBottom:"20px"},children:[e.jsx("pre",{style:{background:"#f4f4f4",padding:"20px",fontSize:"16px",borderRadius:"10px"},children:"npm install mate-ui"}),e.jsx("button",{onClick:r,style:{position:"absolute",top:"20px",right:"20px"},children:"Copy"}),o&&e.jsx("span",{style:{color:"green",marginLeft:"10px"},children:o})]})]})};var i,s,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [copySuccess, setCopySuccess] = useState('');
  const copyToClipboard = () => {
    navigator.clipboard.writeText('npm install mate-ui').then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Reset message after 2 seconds
    }, () => {
      setCopySuccess('Failed to copy');
    });
  };
  return <div style={{
    margin: '0 auto',
    maxWidth: '960px',
    padding: '40px'
  }}>\r
            <h1 style={{
      fontSize: '48px',
      textAlign: 'left'
    }}>Welcome to Mate-UI</h1>\r
            <p style={{
      fontSize: '18px',
      lineHeight: '1.6'
    }}>\r
                Mate-UI is a comprehensive library of UI components designed to facilitate the development of rich, interactive web applications. Crafted with attention to detail and a focus on ease of use, Mate-UI is built using React, a popular JavaScript library for building user interfaces.\r
            </p>\r
            {/* Other paragraphs */}\r
            <div style={{
      position: 'relative',
      marginBottom: '20px'
    }}>\r
            <pre style={{
        background: '#f4f4f4',
        padding: '20px',
        fontSize: '16px',
        borderRadius: '10px'
      }}>\r
                npm install mate-ui\r
            </pre>\r
                <button onClick={copyToClipboard} style={{
        position: 'absolute',
        top: '20px',
        right: '20px'
      }}>\r
                    Copy\r
                </button>\r
                {copySuccess && <span style={{
        color: 'green',
        marginLeft: '10px'
      }}>{copySuccess}</span>}\r
            </div>\r
            {/* Remaining content */}\r
        </div>;
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const u=["Welcome"];export{t as Welcome,u as __namedExportsOrder,d as default};
