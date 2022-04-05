"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[262,724,248,505],{544:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7378),a=n(1309),l=function(){var e=(0,a.If)().colorMode;(0,r.useEffect)((function(){var t=document.documentElement;return"dark"===e?t.classList.add("dark"):t.classList.remove("dark"),function(){}}),[e])};function o(){return l(),r.createElement("div",null)}},6187:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(353),a=n(2676),l=n(7378),o=n(544),s=n(919),c=n(36),i=n(3963);function u(){var e=(0,r.Z)().siteConfig;return l.createElement(a.Z,{title:e.title,description:"Downloads"},l.createElement(o.Z,null),l.createElement(s.MacOSDownloads,null),l.createElement(c.WindowsDownloads,null),l.createElement(i.LinuxDownloads,null))}},3963:function(e,t,n){n.r(t),n.d(t,{LinuxDownloads:function(){return f},default:function(){return x}});var r=n(7791),a=n(7135),l=n.n(a),o=n(353),s=n(2676),c=n(7378),i=n(544),u=n(1884),m=!1;function d(){return(d=(0,r.Z)(l().mark((function e(t){var n,r,a,o,s,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://api.github.com/repos/containers/desktop/releases/latest");case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,a=r.assets,1===(o=a.filter((function(e){return e.name.endsWith(".tar.gz")}))).length){e.next=12;break}throw new Error("Unable to grab .tar.gz");case 12:s=o[0],c={version:r.name,binary:s.browser_download_url},t(c),m=!0;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){var e=(0,c.useState)({version:"",binary:"",setup:""}),t=e[0],n=e[1];return(0,c.useEffect)((function(){!function(e){d.apply(this,arguments)}(n)})),c.createElement("section",{className:"text-gray-400 bg-gray-900 min-h-full"},c.createElement("div",{className:"container px-5 py-24 mx-auto center"},c.createElement("h1",{className:"text-3xl font-medium title-font text-white mb-12 text-center"},t.version,": Downloads for Linux"),c.createElement("div",{className:"w-2/3 flex mx-auto justify-center center"},c.createElement("div",{className:"p-4 "},c.createElement("div",{className:"h-full bg-gray-800 bg-opacity-40 p-8 rounded"},c.createElement("div",{className:"w-full flex flex-col justify-center center"},c.createElement("p",{className:"mb-6 text-5xl"},"Tgz archive of binary"),c.createElement(u.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",to:t.binary},c.createElement("svg",{className:"w-5 h-5 mr-2 mt-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},c.createElement("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})),"Download .tgz")))))))}function x(){var e=(0,o.Z)().siteConfig;return c.createElement(s.Z,{title:e.title,description:"Downloads for macOS"},c.createElement(i.Z,null),c.createElement("main",{className:"h-screen"}),c.createElement(f,null))}},919:function(e,t,n){n.r(t),n.d(t,{MacOSDownloads:function(){return f},default:function(){return x}});var r=n(7791),a=n(7135),l=n.n(a),o=n(353),s=n(2676),c=n(7378),i=n(544),u=n(1884),m=!1;function d(){return(d=(0,r.Z)(l().mark((function e(t){var n,r,a,o,s,c,i,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://api.github.com/repos/containers/desktop/releases/latest");case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,a=r.assets,1===(o=a.filter((function(e){return e.name.endsWith("-arm64.dmg")}))).length){e.next=12;break}throw new Error("Unable to grab arm64 dmg");case 12:s=o[0],c=a.filter((function(e){return e.name.endsWith(".dmg")&&e.name!==s.name})),i=c[0],u={version:r.name,x64:i.browser_download_url,arm64:s.browser_download_url},t(u),m=!0;case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){var e=(0,c.useState)({version:"",x64:"",arm64:""}),t=e[0],n=e[1];return(0,c.useEffect)((function(){!function(e){d.apply(this,arguments)}(n)})),c.createElement("section",{className:"text-gray-400 bg-gray-900 min-h-full"},c.createElement("div",{className:"container px-5 py-24 mx-auto center"},c.createElement("h1",{className:"text-3xl font-medium title-font text-white mb-12 text-center"},t.version,": Downloads for macOS"),c.createElement("div",{className:"w-2/3 flex mx-auto justify-center center"},c.createElement("div",{className:"grid grid-cols-2"},c.createElement("div",{className:"p-4 "},c.createElement("div",{className:"h-full bg-gray-800 bg-opacity-40 p-8 rounded"},c.createElement("div",{className:"w-full flex flex-col justify-center center"},c.createElement("p",{className:"mb-6 text-5xl"},"Mac Intel"),c.createElement(u.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",to:t.x64},c.createElement("svg",{className:"w-5 h-5 mr-2 mt-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},c.createElement("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})),"Download x64 dmg")))),c.createElement("div",{className:"p-4 "},c.createElement("div",{className:"h-full bg-gray-800 bg-opacity-40 p-8 rounded"},c.createElement("div",{className:"w-full flex flex-col mx-auto justify-center center"},c.createElement("p",{className:" mb-6 text-5xl"},"Mac Silicon/M1"),c.createElement(u.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",to:t.arm64},c.createElement("svg",{className:"w-5 h-5 mr-2 mt-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},c.createElement("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})),"Download arm64 dmg"))))))))}function x(){var e=(0,o.Z)().siteConfig;return c.createElement(s.Z,{title:e.title,description:"Downloads for macOS"},c.createElement(i.Z,null),c.createElement("main",{className:"h-screen"},c.createElement(f,null)))}},36:function(e,t,n){n.r(t),n.d(t,{WindowsDownloads:function(){return f},default:function(){return x}});var r=n(7791),a=n(7135),l=n.n(a),o=n(353),s=n(2676),c=n(7378),i=n(544),u=n(1884),m=!1;function d(){return(d=(0,r.Z)(l().mark((function e(t){var n,r,a,o,s,c,i,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://api.github.com/repos/containers/desktop/releases/latest");case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,a=r.assets,1===(o=a.filter((function(e){return e.name.endsWith("-setup.exe")}))).length){e.next=12;break}throw new Error("Unable to grab setup.exe");case 12:s=o[0],c=a.filter((function(e){return e.name.endsWith(".exe")&&e.name!==s.name})),i=c[0],u={version:r.name,binary:i.browser_download_url,setup:s.browser_download_url},t(u),m=!0;case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){var e=(0,c.useState)({version:"",binary:"",setup:""}),t=e[0],n=e[1];return(0,c.useEffect)((function(){!function(e){d.apply(this,arguments)}(n)})),c.createElement("section",{className:"text-gray-400 bg-gray-900 min-h-full"},c.createElement("div",{className:"container px-5 py-24 mx-auto center"},c.createElement("h1",{className:"text-3xl font-medium title-font text-white mb-12 text-center"},t.version,": Downloads for Windows"),c.createElement("div",{className:"w-2/3 flex mx-auto justify-center center"},c.createElement("div",{className:"grid grid-cols-2"},c.createElement("div",{className:"p-4 "},c.createElement("div",{className:"h-full bg-gray-800 bg-opacity-40 p-8 rounded"},c.createElement("div",{className:"w-full flex flex-col justify-center center"},c.createElement("p",{className:"mb-6 text-5xl"},"Binary only"),c.createElement(u.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",to:t.binary},c.createElement("svg",{className:"w-5 h-5 mr-2 mt-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},c.createElement("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})),"Download exe")))),c.createElement("div",{className:"p-4 "},c.createElement("div",{className:"h-full bg-gray-800 bg-opacity-40 p-8 rounded"},c.createElement("div",{className:"w-full flex flex-col mx-auto justify-center center"},c.createElement("p",{className:" mb-6 text-5xl"},"Installer"),c.createElement(u.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",to:t.setup},c.createElement("svg",{className:"w-5 h-5 mr-2 mt-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},c.createElement("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})),"Download setup.exe"))))))))}function x(){var e=(0,o.Z)().siteConfig;return c.createElement(s.Z,{title:e.title,description:"Downloads for macOS"},c.createElement(i.Z,null),c.createElement("main",{className:"h-screen"},c.createElement(f,null)))}}}]);