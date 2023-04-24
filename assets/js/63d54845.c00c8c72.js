"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36399],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),g=i,f=m["".concat(l,".").concat(g)]||m[g]||c[g]||a;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20813:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=t(87462),i=(t(67294),t(3905));const a={id:"profiling-queries",title:"Profiling queries",sidebar_label:"Profiling queries",slug:"/reference-guide/profiling-queries"},o=void 0,p={unversionedId:"reference-guide/optimizing-queries/profiling-queries",id:"version-2.5.0/reference-guide/optimizing-queries/profiling-queries",title:"Profiling queries",description:"Along with inspecting a query's plan as described in the [Inspecting",source:"@site/memgraph_versioned_docs/version-2.5.0/reference-guide/optimizing-queries/profiling-queries.md",sourceDirName:"reference-guide/optimizing-queries",slug:"/reference-guide/profiling-queries",permalink:"/memgraph-docs/memgraph/2.5.0/reference-guide/profiling-queries",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.0/reference-guide/optimizing-queries/profiling-queries.md",tags:[],version:"2.5.0",frontMatter:{id:"profiling-queries",title:"Profiling queries",sidebar_label:"Profiling queries",slug:"/reference-guide/profiling-queries"},sidebar:"memgraph",previous:{title:"Inspecting queries",permalink:"/memgraph-docs/memgraph/2.5.0/reference-guide/inspecting-queries"},next:{title:"Metadata",permalink:"/memgraph-docs/memgraph/2.5.0/reference-guide/metadata"}},l={},s=[{value:"Where to next?",id:"where-to-next",level:2}],u={toc:s};function c(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Along with inspecting a query's plan as described in the ",(0,i.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/reference-guide/inspecting-queries"},"Inspecting\nqueries")," guide, it is also possible to profile the\nexecution of a query and get a detailed report on how the query's plan behaved.\nFor every logical operator the following info is provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"OPERATOR")," ","\u2014"," the name of the operator, just like in the output of an\n",(0,i.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," query.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ACTUAL HITS")," ","\u2014"," the number of times a particular logical operator was\npulled from.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"RELATIVE TIME")," ","\u2014"," the amount of time that was spent processing a\nparticular logical operator, relative to the execution of the whole plan.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ABSOLUTE TIME")," ","\u2014"," the amount of time that was spent processing a\nparticular logical operator."))),(0,i.kt)("p",null,"A simple example to illustrate the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"PROFILE MATCH (n :Node)-[:Edge]-(m :Node) WHERE n.prop = 42 RETURN *;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"+---------------+---------------+---------------+---------------+\n| OPERATOR      | ACTUAL HITS   | RELATIVE TIME | ABSOLUTE TIME |\n+---------------+---------------+---------------+---------------+\n| * Produce     | 1             |   7.134628 %  |   0.003949 ms |\n| * Filter      | 1             |  12.734765 %  |   0.007049 ms |\n| * Expand      | 1             |   5.181460 %  |   0.002868 ms |\n| * ScanAll     | 1             |   3.325061 %  |   0.001840 ms |\n| * ScanAll     | 1             |  71.061241 %  |   0.039334 ms |\n| * Once        | 2             |   0.562844 %  |   0.000312 ms |\n+---------------+---------------+---------------+---------------+\n")),(0,i.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.0/reference-guide"},"Reference\nguide")),". For real-world examples of how to use\nMemgraph, we strongly suggest going through one of the available\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.0/tutorials"},"Tutorials")),"."))}c.isMDXComponent=!0}}]);