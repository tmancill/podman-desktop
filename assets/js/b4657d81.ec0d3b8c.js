"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38502],{79549:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=o(24246),s=o(71670);const r={sidebar_position:3,title:"In your containers",description:"Using Podman Desktop behind a proxy requiring custom Certificate Authorities (CA).",tags:["podman-desktop","installing","windows","macos","linux"],keywords:["podman desktop","containers","podman","installing","installation","windows","macos","linux"]},t="Using a proxy in your containers on macOS and Windows",a={id:"proxy/using-a-proxy-in-your-containers",title:"In your containers",description:"Using Podman Desktop behind a proxy requiring custom Certificate Authorities (CA).",source:"@site/docs/proxy/using-a-proxy-in-your-containers.md",sourceDirName:"proxy",slug:"/proxy/using-a-proxy-in-your-containers",permalink:"/docs/proxy/using-a-proxy-in-your-containers",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/proxy/using-a-proxy-in-your-containers.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"installing",permalink:"/docs/tags/installing"},{label:"windows",permalink:"/docs/tags/windows"},{label:"macos",permalink:"/docs/tags/macos"},{label:"linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"In your containers",description:"Using Podman Desktop behind a proxy requiring custom Certificate Authorities (CA).",tags:["podman-desktop","installing","windows","macos","linux"],keywords:["podman desktop","containers","podman","installing","installation","windows","macos","linux"]},sidebar:"mySidebar",previous:{title:"Custom Certificate Authorities",permalink:"/docs/proxy/using-a-proxy-requiring-a-custom-ca"},next:{title:"Linux",permalink:"/docs/proxy/using-a-proxy-on-linux"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4}];function l(n){const e={code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"using-a-proxy-in-your-containers-on-macos-and-windows",children:"Using a proxy in your containers on macOS and Windows"}),"\n",(0,i.jsx)(e.p,{children:"You can configure your Podman machine to use a proxy for your containers."}),"\n",(0,i.jsx)(e.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"<your.proxy.tld:port>"}),": Your proxy URL."]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"procedure",children:"Procedure"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Open a shell prompt on the Podman machine:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine ssh\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Edit the ",(0,i.jsx)(e.code,{children:"containers.conf"})," file to pass the proxy environment variables to Podman CLI."]}),"\n",(0,i.jsx)(e.p,{children:"The file location depends on your connection mode:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"rootless"}),": ",(0,i.jsx)(e.code,{children:"$HOME/.config/containers/containers.conf"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"rootful"}),": ",(0,i.jsx)(e.code,{children:"/etc/containers/containers.conf"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Set the proxy environment variables to pass into the containers:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-toml",children:'[containers]\nhttp_proxy = true\nenv = ["http_proxy=<your.proxy.tld:port>", "https_proxy=<your.proxy.tld:port>"]\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Go to ",(0,i.jsx)(e.strong,{children:"Settings > Resources"})," and restart the Podman machine."]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},71670:(n,e,o)=>{o.d(e,{Z:()=>a,a:()=>t});var i=o(27378);const s={},r=i.createContext(s);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);