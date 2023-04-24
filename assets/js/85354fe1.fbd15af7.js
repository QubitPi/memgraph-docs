"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,f=d["".concat(m,".").concat(u)]||d[u]||l[u]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"overview",title:"Connect to data streams",sidebar_label:"Connect to data streams"},s=void 0,i={unversionedId:"import-data/data-streams/overview",id:"version-2.5.2/import-data/data-streams/overview",title:"Connect to data streams",description:"Memgraph can natively ingest streaming data from upstream sources using [Apache",source:"@site/memgraph_versioned_docs/version-2.5.2/import-data/data-streams/overview.md",sourceDirName:"import-data/data-streams",slug:"/import-data/data-streams/overview",permalink:"/memgraph-docs/memgraph/2.5.2/import-data/data-streams/overview",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.2/import-data/data-streams/overview.md",tags:[],version:"2.5.2",frontMatter:{id:"overview",title:"Connect to data streams",sidebar_label:"Connect to data streams"},sidebar:"memgraph",previous:{title:"CYPHERL",permalink:"/memgraph-docs/memgraph/2.5.2/import-data/files/cypherl"},next:{title:"Connect using Cypher queries",permalink:"/memgraph-docs/memgraph/2.5.2/import-data/data-streams/manage-streams"}},m={},p=[],c={toc:p};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Memgraph can natively ingest streaming data from upstream sources using ",(0,n.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache\nKafka"),", ",(0,n.kt)("a",{parentName:"p",href:"https://redpanda.com/"},"Redpanda")," and\n",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/"},"Pulsar"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.2/reference-guide/streams"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,n.kt)("p",null,"The following pages instruct how to connect to data streams to ingest the data\nand manage the connection using:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/memgraph-docs/memgraph/2.5.2/import-data/data-streams/manage-streams"},"Cypher queries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/memgraph-docs/memgraph/2.5.2/import-data/data-streams/manage-streams-lab"},"a wizard in the ",(0,n.kt)("strong",{parentName:"a"},"Stream")," section of Memgraph Lab"))))}l.isMDXComponent=!0}}]);