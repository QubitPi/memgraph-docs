"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36488],{3905:(e,r,n)=>{n.d(r,{Zo:()=>m,kt:()=>c});var a=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=a.createContext({}),d=function(e){var r=a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},m=function(e){var r=d(e.components);return a.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=d(n),c=t,g=s["".concat(i,".").concat(c)]||s[c]||p[c]||o;return n?a.createElement(g,l(l({ref:r},m),{},{components:n})):a.createElement(g,l({ref:r},m))}));function c(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=s;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:t,l[1]=u;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71574:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>g,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>h});var a=n(87462),t=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},o,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Once you start Memgraph, it will attempt to load query modules from all ",(0,t.kt)("inlineCode",{parentName:"p"},"*.so"),"\nand ",(0,t.kt)("inlineCode",{parentName:"p"},"*.py")," files from the default (",(0,t.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and\n",(0,t.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules"),") directories. "),(0,t.kt)("p",null,"MAGE modules are located at\n",(0,t.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and custom modules developed via Memgraph Lab at\n",(0,t.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules"),"."),(0,t.kt)("p",null,"Memgraph can load query modules from additional directories, if their path is\nadded to the ",(0,t.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main configuration file\n(",(0,t.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supplied as a command-line parameter (e.g.\nwhen using Docker). "),(0,t.kt)("p",null,"If you are supplying the additional directory as a parameter, do not forget to\ninclude the path to ",(0,t.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),", otherwise queries from\nthat directory will not be loaded when Memgraph starts."),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"When working with Docker and ",(0,t.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image, you should pass\nconfiguration flags inside of environment variables, for example:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-terminal"},'docker run -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--query-modules-directory=/usr/lib/memgraph/query_modules,/usr/lib/memgraph/my_modules" memgraph/memgraph-platform`\n')),(0,t.kt)("p",{parentName:"admonition"},"If you are working with ",(0,t.kt)("inlineCode",{parentName:"p"},"memgraph")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," images you should pass\nconfiguration options like this: "),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -p 7687:7687 -p 7444:7444 memgraph/memgraph --query-modules-directory=/usr/lib/memgraph/query_modules,/usr/lib/memgraph/my_modules\n"))),(0,t.kt)("p",null,"If a certain query module was added while Memgraph was already running, you need\nto load it manually using the ",(0,t.kt)("inlineCode",{parentName:"p"},'mg.load("module_name")')," procedure within a query:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("py_example");\n')),(0,t.kt)("p",null,"If there is no response (no error message), the load was successful."),(0,t.kt)("p",null,"If you want to reload all existing modules and load any newly added ones, use\n",(0,t.kt)("inlineCode",{parentName:"p"},"mg.load_all()"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,t.kt)("p",null,"If there is no response (no error message), the load was successful."),(0,t.kt)("p",null,"You can check if the query module has been loaded by using the ",(0,t.kt)("inlineCode",{parentName:"p"},"mg.procedures()"),"\nprocedure within a query:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.procedures() YIELD *;\n")))}l.isMDXComponent=!0;const u={toc:[]};function i(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Once the MAGE query modules or any custom modules you developed have been\nloaded into Memgraph, you can call them within queries using the following Cypher\nsyntax:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL module.procedure([optional parameter], arg1, "string_argument", ...) YIELD res1, res2, ...;\n')),(0,t.kt)("p",null,"Every procedure has a first optional parameter and the rest of them depend on the procedure you are trying to call. The optional parameter must be result of the aggregation function ",(0,t.kt)("a",{parentName:"p",href:"/cypher-manual/functions#aggregation-functions"},(0,t.kt)("inlineCode",{parentName:"a"},"project()")),". If such a parameter is provided, ",(0,t.kt)("strong",{parentName:"p"},"all")," operations will be executed on a projected graph. Otherwise, you will work on the whole graph stored inside Memgraph. "),(0,t.kt)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",(0,t.kt)("inlineCode",{parentName:"p"},"YIELD")," clause is used to select fields you are interested in or all\nof them (*). If you are not interested in any fields, omit the ",(0,t.kt)("inlineCode",{parentName:"p"},"YIELD")," clause.\nThe procedure will still run, but the record fields will not be stored in\nvariables. If you are trying to ",(0,t.kt)("inlineCode",{parentName:"p"},"YIELD")," fields that are not a part of the\nproduced record, the query will result in an error."),(0,t.kt)("p",null,"Procedures can be standalone as in the example above, or a part of a larger\nquery when we want the procedure to work on data the query is\nproducing. "),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(node) YIELD result RETURN *;\n")),(0,t.kt)("p",null,"When the ",(0,t.kt)("inlineCode",{parentName:"p"},"CALL")," clause is a part of a larger query, results from the query are\nreturned using the ",(0,t.kt)("inlineCode",{parentName:"p"},"RETURN")," clause. If the ",(0,t.kt)("inlineCode",{parentName:"p"},"CALL")," clause is followed by a clause\nthat only updates the data and doesn't read it, ",(0,t.kt)("inlineCode",{parentName:"p"},"RETURN")," is unnecessary. It is\nthe Cypher convention that read-only queries need to end with a ",(0,t.kt)("inlineCode",{parentName:"p"},"RETURN"),", while\nqueries that update something don't need to ",(0,t.kt)("inlineCode",{parentName:"p"},"RETURN")," anything."),(0,t.kt)("p",null,"Also, if the procedure itself writes into the database, all the rest of the\nclauses in the query can only read from the database, and the ",(0,t.kt)("inlineCode",{parentName:"p"},"CALL")," clause can\nonly be followed by the ",(0,t.kt)("inlineCode",{parentName:"p"},"YIELD")," clause and/or ",(0,t.kt)("inlineCode",{parentName:"p"},"RETURN")," clause. "),(0,t.kt)("p",null,"If a procedure returns a record with the same field name as some variable we\nalready have in the query, that field name can be aliased with some other name\nusing the ",(0,t.kt)("inlineCode",{parentName:"p"},"AS")," sub-clause:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (result) CALL module.procedure(42) YIELD result AS procedure_result RETURN *;\n")))}i.isMDXComponent=!0;const d={toc:[]};function m(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"When running a procedure, Memgraph controls the maximum memory usage that the\nprocedure may consume during its execution.  By default, the upper memory limit\nwhen running a procedure is ",(0,t.kt)("inlineCode",{parentName:"p"},"100 MB"),".  If your query procedure requires more\nmemory to yield its results, you can increase the memory limit using the\nfollowing syntax:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 KB YIELD result;\nCALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 MB YIELD result;\nCALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY UNLIMITED YIELD result;\n")),(0,t.kt)("p",null,"The limit can either be specified to a specific value (either in ",(0,t.kt)("inlineCode",{parentName:"p"},"KB")," or in\n",(0,t.kt)("inlineCode",{parentName:"p"},"MB"),"), or it can be set to unlimited."))}m.isMDXComponent=!0;const p={id:"load-call-query-modules",title:"Load and call query modules",sidebar_label:"Load and call query modules"},s=void 0,c={unversionedId:"reference-guide/query-modules/load-call-query-modules",id:"version-2.5.0/reference-guide/query-modules/load-call-query-modules",title:"Load and call query modules",description:"The following page describes how query modules are loaded into Memgraph and",source:"@site/memgraph_versioned_docs/version-2.5.0/reference-guide/query-modules/load-call-query-modules.md",sourceDirName:"reference-guide/query-modules",slug:"/reference-guide/query-modules/load-call-query-modules",permalink:"/memgraph-docs/memgraph/2.5.0/reference-guide/query-modules/load-call-query-modules",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.0/reference-guide/query-modules/load-call-query-modules.md",tags:[],version:"2.5.0",frontMatter:{id:"load-call-query-modules",title:"Load and call query modules",sidebar_label:"Load and call query modules"},sidebar:"memgraph",previous:{title:"Example of a custom query module",permalink:"/memgraph-docs/memgraph/2.5.0/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example"},next:{title:"Utility query module",permalink:"/memgraph-docs/memgraph/2.5.0/reference-guide/query-modules/module-file-utilities"}},g={},h=[{value:"Loading query modules",id:"loading-query-modules",level:2},{value:"Calling query modules",id:"calling-query-modules",level:2},{value:"Managing query modules from Memgraph Lab",id:"managing-query-modules-from-memgraph-lab",level:2},{value:"Controlling procedure memory usage",id:"controlling-procedure-memory-usage",level:2}],y={toc:h};function f(e){let{components:r,...o}=e;return(0,t.kt)("wrapper",(0,a.Z)({},y,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"The following page describes how query modules are loaded into Memgraph and\ncalled within a Cypher query. "),(0,t.kt)("p",null,"If you require more information about what query modules are, please\nread ",(0,t.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/reference-guide/query-modules"},"the query modules overview page"),"."),(0,t.kt)("h2",{id:"loading-query-modules"},"Loading query modules"),(0,t.kt)(l,{mdxType:"Loading"}),(0,t.kt)("h2",{id:"calling-query-modules"},"Calling query modules"),(0,t.kt)(i,{mdxType:"Calling"}),(0,t.kt)("h2",{id:"managing-query-modules-from-memgraph-lab"},"Managing query modules from Memgraph Lab"),(0,t.kt)("p",null,"You can inspect query modules in Memgraph Lab (v2.0 and newer).\nJust navigate to ",(0,t.kt)("strong",{parentName:"p"},"Query Modules"),"."),(0,t.kt)("img",{src:n(96064).Z,className:"imgBorder"}),(0,t.kt)("p",null,"There you can see all the loaded query modules, delete them, or see procedures\nand transformations they define by clicking on the arrow icon."),(0,t.kt)("p",null,"By expanding procedures you can receive information about the procedure's\nsignature, input and output variables and their data type, as well as the ",(0,t.kt)("inlineCode",{parentName:"p"},"CALL"),"\nquery you can run directly from the ",(0,t.kt)("strong",{parentName:"p"},"Query Modules")," view."),(0,t.kt)("p",null,"Custom modules developed via Memgraph Lab are located at\n",(0,t.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules"),"."),(0,t.kt)("img",{src:n(30981).Z,className:"imgBorder"}),(0,t.kt)("h2",{id:"controlling-procedure-memory-usage"},"Controlling procedure memory usage"),(0,t.kt)(m,{mdxType:"Controlling"}))}f.isMDXComponent=!0},96064:(e,r,n)=>{n.d(r,{Z:()=>a});const a=n.p+"assets/images/memgraph_lab_query_modules-e5619e8b4b458425c680c0ce3cefb22c.png"},30981:(e,r,n)=>{n.d(r,{Z:()=>a});const a=n.p+"assets/images/memgraph_lab_query_modules_details-5c9afbcc421f5fbba30df00aac7d2542.png"}}]);