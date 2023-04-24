"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),g=r,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(28135);const i={id:"overview",title:"Installation overview",sidebar_label:"Installation overview",slug:"/installation"},l=void 0,p={unversionedId:"installation/overview",id:"installation/overview",title:"Installation overview",description:"We recommend you use the memgraph/memgraph-platform Docker image to install",source:"@site/lab/installation/overview.md",sourceDirName:"installation",slug:"/installation",permalink:"/memgraph-docs/memgraph-lab/installation",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/lab/installation/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Installation overview",sidebar_label:"Installation overview",slug:"/installation"},sidebar:"lab",previous:{title:"Getting started",permalink:"/memgraph-docs/memgraph-lab/"},next:{title:"Windows",permalink:"/memgraph-docs/memgraph-lab/installation/windows"}},m={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We recommend you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-platform")," Docker image to install\n",(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," and get the complete streaming graph application platform\nthat includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MemgraphDB")," - the database that holds your data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memgraph Lab")," - visual user interface for running queries and visualizing\ngraph data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mgconsole")," - command-line interface for running queries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAGE")," - graph algorithms and modules library")),(0,r.kt)("p",null,"After running the image, mgconsole will open in the terminal while Memgraph Lab\nis available on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),". "),(0,r.kt)("p",null,"You can install Memgraph Platform on:"),(0,r.kt)("p",{align:"left"},(0,r.kt)("a",{href:"/memgraph/install-memgraph-on-windows-docker",style:{paddingRight:"70px"}},(0,r.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png",alt:"windows",title:"windows",width:"80"})),(0,r.kt)("a",{href:"/memgraph/install-memgraph-on-macos-docker",style:{paddingRight:"70px"}},(0,r.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MacOS_logo.svg/1024px-MacOS_logo.svg.png",alt:"macos",title:"macos",width:"80"})),(0,r.kt)("a",{href:"/memgraph/install-memgraph-on-linux-docker"},(0,r.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg",alt:"linux",title:"linux",width:"80"}))),(0,r.kt)("p",null,"If you already have a running Memgraph database instance and you want to install\nMemgraph Lab as a desktop application, check out the installation instructions\nfor ",(0,r.kt)("a",{parentName:"p",href:"/memgraph-lab/installation/windows"},"Windows"),",\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph-lab/installation/macos"},"macOS")," and\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph-lab/installation/linux"},"Linux"),"."),(0,r.kt)(o.ZP,{mdxType:"CompatibilityWarning"}))}u.isMDXComponent=!0},28135:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"In order to use Memgraph Lab 2.0 features, you need to run ",(0,r.kt)("strong",{parentName:"p"},"MemgraphDB 2.2.0"),"\nor newer. If you are using Memgraph with Docker, expose the port ",(0,r.kt)("inlineCode",{parentName:"p"},"7444")," in order\nfor Memgraph Lab to access log files. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform\n"))))}i.isMDXComponent=!0}}]);