"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13751],{84889:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});s(27378);var a=s(40624),r=s(1123),l=s(75484),n=s(75846),c=s(34672),i=s(60505),o=s(1999),g=s(24246);function u(t){let{title:e}=t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.d,{title:e}),(0,g.jsx)(i.Z,{tag:"doc_tags_list"})]})}function d(t){let{tags:e,title:s}=t;return(0,g.jsx)(r.FG,{className:(0,a.Z)(l.k.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.Z,{as:"h1",children:s}),(0,g.jsx)(c.Z,{tags:e})]})})})})}function h(t){const e=(0,n.M)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...t,title:e}),(0,g.jsx)(d,{...t,title:e})]})}},51478:(t,e,s)=>{s.d(e,{Z:()=>c});s(27378);var a=s(40624),r=s(36641);const l={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};var n=s(24246);function c(t){let{permalink:e,label:s,count:c}=t;return(0,n.jsxs)(r.Z,{href:e,className:(0,a.Z)(l.tag,c?l.tagWithCount:l.tagRegular),children:[s,c&&(0,n.jsx)("span",{children:c})]})}},34672:(t,e,s)=>{s.d(e,{Z:()=>o});s(27378);var a=s(75846),r=s(51478),l=s(1999);const n={tag:"tag_FHL6"};var c=s(24246);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(l.Z,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(r.Z,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function o(t){let{tags:e}=t;const s=(0,a.P)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},75846:(t,e,s)=>{s.d(e,{M:()=>r,P:()=>l});var a=s(99213);const r=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);