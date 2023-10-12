"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9043],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(25773),r=(n(27378),n(35318));const i={sidebar_position:10,title:"Push an image to Kind",description:"Pushing an image to your Kind cluster",keywords:["podman desktop","podman","containers","images","migrating","kubernetes"],tags:["migrating-to-kubernetes","images"]},o="Pushing an image to your local Kind-powered Kubernetes cluster",l={unversionedId:"kubernetes/kind/pushing-an-image-to-kind",id:"kubernetes/kind/pushing-an-image-to-kind",title:"Push an image to Kind",description:"Pushing an image to your Kind cluster",source:"@site/docs/kubernetes/kind/pushing-an-image-to-kind.md",sourceDirName:"kubernetes/kind",slug:"/kubernetes/kind/pushing-an-image-to-kind",permalink:"/docs/kubernetes/kind/pushing-an-image-to-kind",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/kind/pushing-an-image-to-kind.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"images",permalink:"/docs/tags/images"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Push an image to Kind",description:"Pushing an image to your Kind cluster",keywords:["podman desktop","podman","containers","images","migrating","kubernetes"],tags:["migrating-to-kubernetes","images"]},sidebar:"mySidebar",previous:{title:"Building and testing an image",permalink:"/docs/kubernetes/kind/building-an-image-and-testing-it-in-kind"},next:{title:"Working with Lima",permalink:"/docs/kubernetes/lima/"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pushing-an-image-to-your-local-kind-powered-kubernetes-cluster"},"Pushing an image to your local Kind-powered Kubernetes cluster"),(0,r.kt)("p",null,"With Podman Desktop, you can push an image to your local Kind-powered Kubernetes cluster."),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/onboarding-for-containers"},"You onboarded a container engine"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/onboarding-for-kubernetes/kind"},"You onboarded a Kind cluster"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/kubernetes/kind/working-with-your-local-kind-cluster"},"You have set your Kubernetes context to your local Kind-powered Kubernetes cluster"),"."),(0,r.kt)("li",{parentName:"ul"},"Your image is available on the ",(0,r.kt)("strong",{parentName:"li"},"Images")," page: ",(0,r.kt)("inlineCode",{parentName:"li"},"<my_image>:<my_tag>"),".")),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Podman Desktop dashboard > ",(0,r.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-search",size:"lg"})," Search images"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"<your_image>:<your_tag>"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,r.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," Push image to Kind cluster"),"."),(0,r.kt)("li",{parentName:"ol"},"If you created many Kind clusters, select your Kind cluster from the list.")),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("p",null,"Kind does not enable you to list loaded images.\nTherefore, create a Pod that uses the loaded image."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"verify_my_image.yaml")," Kubernetes YAML file on your workstation.\nReplace the placeholders:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pod ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," and container ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," value must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character."),(0,r.kt)("li",{parentName:"ul"},"Container ",(0,r.kt)("inlineCode",{parentName:"li"},"image")," value is the image you pushed.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: <verify-my-image>\nspec:\n  containers:\n    - name: <my-image>\n      image: <my_image>:<my_tag>\n      imagePullPolicy: Never\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods > Play Kubernetes YAML"),"."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Kubernetes YAML file"),": select your ",(0,r.kt)("inlineCode",{parentName:"li"},"verify_my_image.yaml")," file."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Select Runtime"),": ",(0,r.kt)("strong",{parentName:"li"},"Using a Kubernetes cluster"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Play"),"."),(0,r.kt)("li",{parentName:"ol"},"Clik ",(0,r.kt)("strong",{parentName:"li"},"Done")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-search",size:"lg"})," Search pods"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"<verify-my-image>"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The pod ",(0,r.kt)("strong",{parentName:"p"},"Status")," is ",(0,r.kt)("strong",{parentName:"p"},"Running"),"."))))}p.isMDXComponent=!0}}]);