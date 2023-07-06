(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(2699)}])},2699:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return g}});var t=a(5893),s=a(7294);let i=[{command:"<br />about",description:"<br />About Me"},{command:"education",description:"My Education"},{command:"skills",description:"My Tech Skills"},{command:"experience",description:"Work Experience"},{command:"contact",description:"Contact Me"},{command:"blog",description:"Visit My Blog"},{command:"clear",description:"Clear Terminal"}],r=async()=>{let e=await (await fetch("/api/experiences")).json(),n="<br /><h3>Work Experience:</h3>"+e.map(e=>'<div class="command">\n          <a><b class="command">'.concat(e.name,"</b></a> - <b>").concat(e.stack.join(" to "),'</b>\n          <p class="meaning">').concat(e.description,"</p>\n        </div>")).join("");return n},o=async()=>{let e=await (await fetch("/api/contacts")).json();return e.map(e=>'<div style="display: flex; justify-content: space-between;">\n        <p style="font-size: 15px">'.concat(e.medium,'</p>\n        <a class="meaning" href="').concat(e.link,'" target="_blank">').concat(e.username,"</a>\n      </div>")).join("")},c={help:()=>i.map(e=>'<div style="display: flex; justify-content: space-between;">\n          <p style="font-size: 15px">'.concat(e.command,"</p>\n          <p>").concat(e.description,"</p>\n        </div>")).join("")+'<br />\n        <div class="command">Type one of the above commands to view it. For eg. <span style="color: var(--secondary)">about</span></div><br />',about:()=>'<br/>Hi! My name is Roberto.\n      <br/><br/>        \n      I currently live in San Luis Potos\xed, Mexico, working as IT Technical Analyst at the company <a href="https://www.cummins.com/es/" target="_blank">Cummins Inc.</a>\n      <br/><br/>        \n      I\'m an IT professional with experience as a Full Stack developer, database analysis, BI development and design, development and support of ERP systems and web applications.<br/><br/>\n    ',education:()=>'<br />I have an Engineering Degree in Computer Systems from the <a href="https://slp.tecnm.mx/" target="_blank">Instituto Tecnol\xf3gico de San Luis Potos\xed.</a><br /><br />',skills:()=>'\n    <br />I have experience with Java, C#, Python, PHP and JavaScript programming languages, as well as the following technologies:<br /><br />\n    <div class="skill"><b>Databases:</b> MySQL, SQL Server, Oracle SQL, MongoDB.<br /></div>\n    <div class="skill"><b>Microsoft Office:</b> Word, Excel, Power Point, Publisher, Project, Access.<br /></div>\n    <div class="skill"><b>Servers:</b> Windows Server, Ubuntu Server.<br /></div>\n    <div class="skill"><b>Operating Systems:</b> Windows, Linux (Ubuntu, Debian), Mac Os.<br /></div>\n    <div class="skill"><b>Frameworks:</b> Django, .NET, React Native, Laravel, Bootstrap, MDBootstrap.<br /></div>\n    <div class="skill"><b>Web Development:</b> HTML, CSS, Express.js, React.js, Node.js.<br /></div>\n    <div class="skill"><b>Virtualization:</b> Oracle VM VirtualBox, VMware Workstation, Microsoft Hyper-V.<br /></div>\n    <div class="skill"><b>Business Intelligence (BI):</b> Microsoft Power BI, Cognos Analytics IBM.<br /></div>\n    <div class="skill"><b>Cloud Computing Services:</b> Google Cloud, AWS (EC2, S3, Lambda, SNS), Firebase, Heroku, DigitalOcean.<br /></div>  \n    <div class="skill"><b>Version Control:</b> GitHub, GitLab, TFS (Team Foundation Server).<br /><br />\n    ',experience:r,contact:o,error:e=>'<br /><div class="help-command">sh: Unknown command: '.concat(e,"</div><div class=\"help-command\">See 'help' for info<br /><br />"),blog:()=>(window.open("https://geeknik.netlify.app/#/","_blank"),"")};var l=a(3141),d=a.n(l);function p(e){let{command:n,onSubmit:a}=e,[i,r]=(0,s.useState)(n||""),o=e=>(e.preventDefault(),r(""),a(i));return(0,t.jsxs)("form",{onSubmit:e=>o(e),children:[(0,t.jsxs)("label",{htmlFor:"command",children:[(0,t.jsx)("span",{style:{color:"#ff9e64"},children:"λ"})," ::"," ",(0,t.jsx)("span",{style:{color:"var(--primary)"},children:"~"})," ",(0,t.jsx)("span",{style:{color:"var(--secondary)"},children:">>"})]}),(0,t.jsx)("input",{type:"text",className:d().input,value:i,onChange:e=>r(e.target.value),disabled:!!n,ref:e=>e&&!n&&e.focus(),autoFocus:""===n})]})}function u(e){let{output:n}=e;return n?(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:n}}):(0,t.jsx)(t.Fragment,{})}function b(e){let{command:n,output:a,onSubmit:s}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)(p,{command:n,onSubmit:e=>s(e)}),a&&(0,t.jsx)(u,{output:a})]})}var m=a(94),v=a.n(m);function h(){let[e,n]=(0,s.useState)([]),[a,i]=(0,s.useState)(!1),r=(0,s.useRef)(null),o=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),l=async a=>{let t;if(i(!0),n([...e,{command:a,output:"Loading..."}]),"".concat(a) in c)t=await c["".concat(a)]();else{if("clear"===a)return i(!1),n([]);t=c.error(o(a))}i(!1),n([...e.slice(0,e.length),{command:a,output:t}]),r&&(r.current.scrollTop=r.current.scrollHeight)};return(0,t.jsxs)("div",{className:v().terminal,ref:r,children:[e.map((e,n)=>{let{command:a,output:s}=e;return(0,t.jsx)(b,{command:a,output:s},n)}),!a&&(0,t.jsx)(b,{onSubmit:e=>l(e)})]})}var f=a(9034),x=a.n(f);function g(){return(0,t.jsxs)("div",{className:x().container,children:[(0,t.jsxs)("h1",{children:["rnino:$ ",(0,t.jsx)("span",{className:x().help,children:"type help to start"})]}),(0,t.jsxs)("p",{children:["Visit"," ",(0,t.jsx)("a",{href:"#",rel:"noreferrer",children:"Normal Website"})]}),(0,t.jsx)("br",{}),(0,t.jsx)(h,{})]})}},3141:function(e){e.exports={input:"Input_input__SBSuV"}},94:function(e){e.exports={terminal:"Terminal_terminal__zGiUc"}},9034:function(e){e.exports={container:"Home_container__d256j",help:"Home_help__X5Pgz"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);