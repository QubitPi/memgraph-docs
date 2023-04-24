"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),s=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=s(r),h=n,u=g["".concat(m,".").concat(h)]||g[h]||c[h]||o;return r?a.createElement(u,p(p({ref:t},l),{},{components:r})):a.createElement(u,p({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=g;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},16976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={id:"overview",title:"Drivers overview",sidebar_label:"Drivers overview",slug:"/connect-to-memgraph/drivers"},p=void 0,i={unversionedId:"connect-to-memgraph/drivers/overview",id:"version-2.5.1/connect-to-memgraph/drivers/overview",title:"Drivers overview",description:"Quick start guides",source:"@site/memgraph_versioned_docs/version-2.5.1/connect-to-memgraph/drivers/overview.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers",permalink:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.1/connect-to-memgraph/drivers/overview.md",tags:[],version:"2.5.1",frontMatter:{id:"overview",title:"Drivers overview",sidebar_label:"Drivers overview",slug:"/connect-to-memgraph/drivers"},sidebar:"memgraph",previous:{title:"mgconsole",permalink:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/mgconsole"},next:{title:"Python",permalink:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/python"}},m={},s=[{value:"Quick start guides",id:"quick-start-guides",level:2},{value:"Supported Languages",id:"supported-languages",level:2},{value:"Secure Sockets Layer (SSL)",id:"secure-sockets-layer",level:2}],l={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"quick-start-guides"},"Quick start guides"),(0,n.kt)("p",null,"Find out how to create a simple ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to\nMemgraph and executes simple queries:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/python"},"Python"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/rust"},"Rust"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/c-sharp"},"C#"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/java"},"Java"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/go"},"Go"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/nodejs"},"Node.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/javascript"},"JavaScript"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/php"},"PHP")))),(0,n.kt)("h2",{id:"supported-languages"},"Supported Languages"),(0,n.kt)("p",null,"If you want to query Memgraph programmatically, you can do so using the ",(0,n.kt)("a",{parentName:"p",href:"https://7687.org/"},"Bolt\nprotocol"),". The Bolt protocol was designed for efficient\ncommunication with graph databases and ",(0,n.kt)("strong",{parentName:"p"},"Memgraph supports versions 1 and 4")," of\nthe protocol. Check out the Bolt protocol drivers for the following programming\nlanguages: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/pymgclient"},"Python"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mgclient"},"C/C++"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/rsmgclient"},"Rust"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/neo4j/neo4j-javascript-driver"},"Node.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/neo4j/neo4j-dotnet-driver"},"C#"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/neo4j/neo4j-go-driver"},"Go"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/zmactep/hasbolt"},"Haskell"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/neo4j/neo4j-java-driver"},"Java"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/neo4j/neo4j-javascript-driver"},"JavaScript"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/neo4j-php/Bolt"},"PHP"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/neo4jrb/neo4j"},"Ruby")))),(0,n.kt)("h2",{id:"secure-sockets-layer"},"Secure Sockets Layer (SSL)"),(0,n.kt)("p",null,"Secure connections are supported and disabled by default. The server initially\nships with a self-signed testing certificate located at ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/ssl/"),".\nYou can use it by ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.1/how-to-guides/config-logs"},"changing the configuration")," and passing its path within the\nfollowing parameters:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"--bolt-cert-file=/etc/memgraph/ssl/cert.pem\n--bolt-key-file=/etc/memgraph/ssl/key.pem\n")),(0,n.kt)("p",null,"If you are using your own certificate be sure to enter the correct path to the\ncertificate."),(0,n.kt)("p",null,"To disable SSL support and use insecure connections to the database erase or\nmake comments out of both parameters (",(0,n.kt)("inlineCode",{parentName:"p"},"--bolt-cert-file")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"--bolt-key-file"),") by adding a hashtag in front of them."))}c.isMDXComponent=!0}}]);