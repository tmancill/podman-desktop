"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3296],{34593:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(24246),s=i(71670);const o={sidebar_position:5,title:"Installing in a restricted environment",description:"Installing Podman Desktop on Windows in a restricted environment",tags:["podman-desktop","installing","windows","restricted-environment"],keywords:["podman desktop","containers","podman","installing","installation","windows","restricted-environment"]},r="Installing Podman Desktop and Podman in a restricted environment",l={id:"installation/windows-install/installing-podman-desktop-and-podman-in-a-restricted-environment",title:"Installing in a restricted environment",description:"Installing Podman Desktop on Windows in a restricted environment",source:"@site/docs/installation/windows-install/installing-podman-desktop-and-podman-in-a-restricted-environment.md",sourceDirName:"installation/windows-install",slug:"/installation/windows-install/installing-podman-desktop-and-podman-in-a-restricted-environment",permalink:"/docs/installation/windows-install/installing-podman-desktop-and-podman-in-a-restricted-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/installation/windows-install/installing-podman-desktop-and-podman-in-a-restricted-environment.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"installing",permalink:"/docs/tags/installing"},{label:"windows",permalink:"/docs/tags/windows"},{label:"restricted-environment",permalink:"/docs/tags/restricted-environment"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Installing in a restricted environment",description:"Installing Podman Desktop on Windows in a restricted environment",tags:["podman-desktop","installing","windows","restricted-environment"],keywords:["podman desktop","containers","podman","installing","installation","windows","restricted-environment"]},sidebar:"mySidebar",previous:{title:"Installing with Scoop",permalink:"/docs/installation/windows-install/installing-podman-desktop-with-scoop"},next:{title:"Installing with Winget",permalink:"/docs/installation/windows-install/installing-podman-desktop-with-winget"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Next steps",id:"next-steps",level:4}];function c(n){const e={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"installing-podman-desktop-and-podman-in-a-restricted-environment",children:"Installing Podman Desktop and Podman in a restricted environment"}),"\n",(0,t.jsx)(e.p,{children:"Consider using the Windows installer for restricted environments to install the Podman Desktop and Podman in a restricted environment."}),"\n",(0,t.jsx)(e.p,{children:"The Windows installer for restricted environments:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Has all artifacts required to install Podman Desktop and Podman."}),"\n",(0,t.jsx)(e.li,{children:"Does not require Internet access to download resources during installation."}),"\n",(0,t.jsx)(e.li,{children:"Does not contain additional utilities such as Compose or Kind."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed",children:"Windows Subsystem for Linux (WSL) prerequisites"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"User with administrator privileges"}),"\n",(0,t.jsx)(e.li,{children:"Windows 64bit"}),"\n",(0,t.jsx)(e.li,{children:"Windows 10 Build 18362 or greater, or Windows 11"}),"\n",(0,t.jsxs)(e.li,{children:["On a virtual machine: ",(0,t.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization#configure-nested-virtualization",children:"Nested Virtualization enabled"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install",children:"You installed WSL"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-powershell",children:"> wsl --install --no-distribution\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/downloads",children:"Download the Windows installer for restricted environments"}),", and copy the downloaded file to the Windows host in a restricted environment."]}),"\n",(0,t.jsx)(e.li,{children:"Run the Windows installer for restricted environments to install Podman Desktop."}),"\n",(0,t.jsxs)(e.li,{children:["Open Podman Desktop and click the ",(0,t.jsx)(e.strong,{children:"Install"})," button to install Podman."]}),"\n",(0,t.jsxs)(e.li,{children:["(Optionally) ",(0,t.jsx)(e.a,{href:"/docs/proxy/using-a-proxy",children:"Configure Podman Desktop to run behind your proxy"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["(Optionally) ",(0,t.jsx)(e.a,{href:"/docs/proxy/using-a-vpn-on-windows",children:"Configure Podman to run behind your VPN"}),"."]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/podman/creating-a-podman-machine",children:"Create and start a Podman machine"})}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/containers",children:"Onboard for container workloads"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/kubernetes",children:"Onboard for Kubernetes workloads"}),"."]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},71670:(n,e,i)=>{i.d(e,{Z:()=>l,a:()=>r});var t=i(27378);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);