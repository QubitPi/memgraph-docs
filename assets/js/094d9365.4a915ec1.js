"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48887],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),f=l(r),u=o,d=f["".concat(p,".").concat(u)]||f[u]||c[u]||n;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=f;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>m,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={id:"overview",title:"Import data from various file formats into Memgraph"},i=void 0,m={unversionedId:"import-data/files/overview",id:"version-2.6.0/import-data/files/overview",title:"Import data from various file formats into Memgraph",description:"At the moment, Memgraph supports importing data from:",source:"@site/memgraph_versioned_docs/version-2.6.0/import-data/files/overview.md",sourceDirName:"import-data/files",slug:"/import-data/files/overview",permalink:"/memgraph-docs/memgraph/2.6.0/import-data/files/overview",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.6.0/import-data/files/overview.md",tags:[],version:"2.6.0",frontMatter:{id:"overview",title:"Import data from various file formats into Memgraph"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/memgraph-docs/memgraph/2.6.0/import-data"},next:{title:"CSV",permalink:"/memgraph-docs/memgraph/2.6.0/import-data/load-csv-clause"}},p={},l=[],s={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the moment, Memgraph supports importing data from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CSV files")," with ",(0,o.kt)("a",{parentName:"li",href:"/memgraph-docs/memgraph/2.6.0/import-data/load-csv-clause"},"LOAD CSV clause")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"JSON files")," with ",(0,o.kt)("a",{parentName:"li",href:"/memgraph-docs/memgraph/2.6.0/import-data/files/load-json"},"JSON query module"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CYPHERL files")," via ",(0,o.kt)("a",{parentName:"li",href:"/memgraph-docs/memgraph/2.6.0/import-data/files/cypherl"},"Memgraph Lab or ",(0,o.kt)("inlineCode",{parentName:"a"},"mgconsole")))))}c.isMDXComponent=!0}}]);