"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9817],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(5773),o=(n(7378),n(5318));const a={sidebar_position:4,title:"Linux",description:"Using Podman Desktop behind a proxy on Linux.",tags:["podman-desktop","proxy","linux"],keywords:["podman desktop","containers","podman","proxy","linux"]},i="Using Podman Desktop behind a proxy on Linux",p={unversionedId:"proxy/using-a-proxy-on-linux",id:"proxy/using-a-proxy-on-linux",title:"Linux",description:"Using Podman Desktop behind a proxy on Linux.",source:"@site/docs/proxy/using-a-proxy-on-linux.md",sourceDirName:"proxy",slug:"/proxy/using-a-proxy-on-linux",permalink:"/docs/proxy/using-a-proxy-on-linux",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/proxy/using-a-proxy-on-linux.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"proxy",permalink:"/docs/tags/proxy"},{label:"linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Linux",description:"Using Podman Desktop behind a proxy on Linux.",tags:["podman-desktop","proxy","linux"],keywords:["podman desktop","containers","podman","proxy","linux"]},sidebar:"mySidebar",previous:{title:"In your containers",permalink:"/docs/proxy/using-a-proxy-in-your-containers"},next:{title:"Podman behind a VPN on Windows",permalink:"/docs/proxy/using-a-vpn-on-windows"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-podman-desktop-behind-a-proxy-on-linux"},"Using Podman Desktop behind a proxy on Linux"),(0,o.kt)("p",null,"You can configure Podman to run behind a proxy."),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<proxy_ca.pem>"),": Your proxy Certificate Authorities (CA), in Privacy-Enhanced Mail (PEM) format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<your.proxy.tld:port>"),": Your proxy URL.")),(0,o.kt)("h4",{id:"procedure"},"Procedure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"containers.conf")," file to pass the proxy environment variables to Podman CLI."),(0,o.kt)("p",{parentName:"li"},"The file location depends on your connection mode:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"rootless"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.config/containers/containers.conf"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"rootful"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/containers/containers.conf"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the proxy environment variables to pass into the containers:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[containers]\nhttp_proxy = true\nenv = ["http_proxy=<your.proxy.tld:port>", "https_proxy=<your.proxy.tld:port>"]\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the proxy environment variables to pass into the Podman engine:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[engine]\nenv = ["http_proxy=<your.proxy.tld:port>", "https_proxy=<your.proxy.tld:port>"]\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the custom Certificate Authorities (CA) for your proxy:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ sudo cp <proxy_ca.pem> /etc/pki/ca-trust/source/anchors/\n$ sudo update-ca-trust\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart all ",(0,o.kt)("inlineCode",{parentName:"p"},"podman")," processes."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ pkill podman\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart Podman Desktop: ",(0,o.kt)("kbd",null,"Ctrl")," + ",(0,o.kt)("kbd",null,"q"),"."))),(0,o.kt)("h4",{id:"verification"},"Verification"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Images"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Pull an image"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Image to Pull"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"bash")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Pull image"),"."),(0,o.kt)("li",{parentName:"ol"},"Podman Desktop reports ",(0,o.kt)("inlineCode",{parentName:"li"},"Download complete"),".")))}c.isMDXComponent=!0}}]);