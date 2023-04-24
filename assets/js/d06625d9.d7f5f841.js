"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63125],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),g=n,h=m["".concat(u,".").concat(g)]||m[g]||p[g]||l;return t?a.createElement(h,o(o({ref:r},s),{},{components:t})):a.createElement(h,o({ref:r},s))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53890:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const l={sidebar_label:"query_builder",title:"gqlalchemy.graph_algorithms.query_builder"},o=void 0,i={unversionedId:"reference/graph_algorithms/query_builder",id:"reference/graph_algorithms/query_builder",title:"gqlalchemy.graph_algorithms.query_builder",description:"MemgraphQueryBuilder Objects",source:"@site/gqlalchemy/reference/graph_algorithms/query_builder.md",sourceDirName:"reference/graph_algorithms",slug:"/reference/graph_algorithms/query_builder",permalink:"/memgraph-docs/gqlalchemy/reference/graph_algorithms/query_builder",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/reference/graph_algorithms/query_builder.md",tags:[],version:"current",frontMatter:{sidebar_label:"query_builder",title:"gqlalchemy.graph_algorithms.query_builder"},sidebar:"gqlalchemy",previous:{title:"integrated_algorithms",permalink:"/memgraph-docs/gqlalchemy/reference/graph_algorithms/integrated_algorithms"},next:{title:"query_modules",permalink:"/memgraph-docs/gqlalchemy/reference/graph_algorithms/query_modules"}},u={},c=[{value:"MemgraphQueryBuilder Objects",id:"memgraphquerybuilder-objects",level:2},{value:"MageQueryBuilder Objects",id:"magequerybuilder-objects",level:2}],s={toc:c};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"memgraphquerybuilder-objects"},"MemgraphQueryBuilder Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class MemgraphQueryBuilder(QueryBuilder)\n")),(0,n.kt)("p",null,"This query builder extends the usual Cypher query builder capabilities with Memgraph","'","s query modules.\nUser gets with this module autocomplete features of graph algorithms.\nDocumentation on the methods can be found on Memgraph","'","s web page."),(0,n.kt)("h2",{id:"magequerybuilder-objects"},"MageQueryBuilder Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class MageQueryBuilder(MemgraphQueryBuilder)\n")),(0,n.kt)("p",null,"This query builder extends the Memgraph query builder with Memgraph MAGE graph algorithm Cypher options.\nUser gets with this module autocomplete features of graph algorithms written in MAGE library.\nDocumentation on the methods can be found on Memgraph","'","s web page."))}p.isMDXComponent=!0}}]);