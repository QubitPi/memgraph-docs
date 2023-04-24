"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47157],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>c});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),d=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=d(e.components);return o.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=d(t),c=n,h=p["".concat(i,".").concat(c)]||p[c]||m[c]||a;return t?o.createElement(h,l(l({ref:r},s),{},{components:t})):o.createElement(h,l({ref:r},s))}));function c(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=p;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var d=2;d<a;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},89810:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var o=t(87462),n=(t(67294),t(3905));const a={id:"query-modules",title:"How to use query modules",sidebar_label:"Use query modules",slug:"/how-to-guides/query-modules"},l=void 0,u={unversionedId:"how-to-guides/query-modules",id:"how-to-guides/query-modules",title:"How to use query modules",description:"Related - Reference Guide",source:"@site/docs/how-to-guides/query-modules.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/query-modules",permalink:"/memgraph-docs/memgraph/next/how-to-guides/query-modules",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/how-to-guides/query-modules.md",tags:[],version:"current",frontMatter:{id:"query-modules",title:"How to use query modules",sidebar_label:"Use query modules",slug:"/how-to-guides/query-modules"},sidebar:"memgraph",previous:{title:"Use Font Awesome for node images",permalink:"/memgraph-docs/memgraph/next/how-to-guides/font-awesome-for-node-images"},next:{title:"Use SSL encryption",permalink:"/memgraph-docs/memgraph/next/how-to-guides/encryption"}},i={},d=[{value:"How to import the MAGE library and its query modules into Memgraph?",id:"how-to-import-the-mage-library-and-its-query-modules-into-memgraph",level:2},{value:"How to implement custom query modules?",id:"how-to-implement-custom-query-modules",level:2},{value:"How to list all loaded .py query modules?",id:"how-to-list-all-loaded-py-query-modules",level:2},{value:"How to list all loaded procedures, user-defined functions and their signatures?",id:"how-to-list-all-loaded-procedures-user-defined-functions-and-their-signatures",level:2},{value:"How to load a query module?",id:"how-to-load-a-query-module",level:2},{value:"How to call a query module procedure?",id:"how-to-call-a-query-module-procedure",level:2},{value:"How to call a user-defined function?",id:"how-to-call-a-user-defined-function",level:2},{value:"How to control the memory usage of a procedure?",id:"how-to-control-the-memory-usage-of-a-procedure",level:2},{value:"How to change the default query module directories?",id:"how-to-change-the-default-query-module-directories",level:2}],s={toc:d};function m(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/next/reference-guide/query-modules"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))," "),(0,n.kt)("p",null,"Query modules are extensions of the Cypher query language. They are groups of\nprocedures and functions written in ",(0,n.kt)("strong",{parentName:"p"},"C"),", ",(0,n.kt)("strong",{parentName:"p"},"C++"),", ",(0,n.kt)("strong",{parentName:"p"},"Python"),", and ",(0,n.kt)("strong",{parentName:"p"},"Rust")," and\nbundled up in either ",(0,n.kt)("inlineCode",{parentName:"p"},"*.so")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"*.py")," query modules files."),(0,n.kt)("p",null,"Some query modules are built-in, and others, like those that can help you solve\ncomplex graph issues, are available as part of the MAGE library you can add to\nyour Memgraph installation. The library is already included if you are using\nMemgraph Platform or Memgraph MAGE Docker images to run Memgraph."),(0,n.kt)("p",null,"You can also implement custom query modules."),(0,n.kt)("p",null,"Regardless of where they come from and who wrote them, all modules need to be\nloaded into Memgraph so that they can be called while querying the database.\nThey are either loaded automatically when Memgraph starts or manually if they\nwere added while Memgraph was already running."),(0,n.kt)("p",null,"On this page, you will find the answers to the following questions regarding\nquery modules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-import-the-mage-library-and-its-query-modules-into-memgraph"},"How to import the MAGE library and its query modules into\nMemgraph?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-implement-custom-query-modules"},"How to implement custom query\nmodules?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-list-all-loaded-py-query-modules"},"How to list all loaded .py query\nmodules?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-list-all-loaded-procedures-and-their-signatures"},"How to list all loaded procedures and their\nsignatures?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-load-a-query-module"},"How to load a query module?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-call-a-query-module-procedure"},"How to call a query module procedure?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-control-the-memory-usage-of-a-procedure"},"How to control the memory usage of a\nprocedure?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-change-the-default-query-module-directories"},"How to change the default query module\ndirectories?"))),(0,n.kt)("h2",{id:"how-to-import-the-mage-library-and-its-query-modules-into-memgraph"},"How to import the MAGE library and its query modules into Memgraph?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/mage"},(0,n.kt)("strong",{parentName:"a"},"Memgraph Advanced Graph Extensions")),", ",(0,n.kt)("strong",{parentName:"p"},"MAGE")," to friends, is an\nopen-source repository that contains graph algorithms and procedures as query\nmodules, thus giving everyone the tools they need to tackle the most interesting\nand challenging graph analytics problems."),(0,n.kt)("p",null,"If you installed Memgraph with Docker using the ",(0,n.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," or\n",(0,n.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," images, the MAGE library is already loaded into Memgraph, and\nyou can proceed ",(0,n.kt)("a",{parentName:"p",href:"#how-to-call-a-query-module-procedure"},"to call any of the available\nprocedures"),"."),(0,n.kt)("p",null,"Otherwise, please check the ",(0,n.kt)("a",{parentName:"p",href:"/mage/installation"},"MAGE installation guide"),"."),(0,n.kt)("h2",{id:"how-to-implement-custom-query-modules"},"How to implement custom query modules?"),(0,n.kt)("p",null,"If you need to expand the Cypher language with custom procedures, Memgraph\nprovides public APIs for writing custom query modules in Python, C/C++ and Rust."),(0,n.kt)("p",null,"Please check ",(0,n.kt)("a",{parentName:"p",href:"../reference-guide/query-modules/implement-custom-query-modules/overview"},"the reference guide on implementing custom query\nmodules"),"\nthat will provide you with the C and Python APIs and ",(0,n.kt)("a",{parentName:"p",href:"../reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example"},"give an\nexample"),"\nto help you start implementing a custom query module."),(0,n.kt)("p",null,"You can develop query modules in Python directly from Memgraph Lab (v2.0 or\nnewer). To start, just navigate to ",(0,n.kt)("strong",{parentName:"p"},"Query Modules")," and click on ",(0,n.kt)("strong",{parentName:"p"},"New\nModule"),"."),(0,n.kt)("img",{src:t(65274).Z,className:"imgBorder"}),(0,n.kt)("h2",{id:"how-to-list-all-loaded-py-query-modules"},"How to list all loaded .py query modules?"),(0,n.kt)("p",null,"To list the value of an ",(0,n.kt)("inlineCode",{parentName:"p"},"is_editable")," flag and the absolute path of each Python\nquery module file in all the query module directories, run the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.get_module_files() YIELD *;\n")),(0,n.kt)("p",null,"Check the reference guide for more ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/next/reference-guide/query-modules/module-file-utilities"},"utility procedures for query\nmodules"),"."),(0,n.kt)("h2",{id:"how-to-list-all-loaded-procedures-user-defined-functions-and-their-signatures"},"How to list all loaded procedures, user-defined functions and their signatures?"),(0,n.kt)("p",null,"To list loaded procedures and their signatures, run the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.procedures() YIELD *;\n")),(0,n.kt)("p",null,"On the other side, if you are interested in listing all user-defined functions,\nrun this query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.functions() YIELD *;\n")),(0,n.kt)("p",null,"Check the reference guide for more ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/next/reference-guide/query-modules/module-file-utilities"},"utility procedures for query\nmodules"),"."),(0,n.kt)("h2",{id:"how-to-load-a-query-module"},"How to load a query module?"),(0,n.kt)("p",null,"Upon startup, Memgraph will attempt to load the query modules from all ",(0,n.kt)("inlineCode",{parentName:"p"},"*.so"),"\nand ",(0,n.kt)("inlineCode",{parentName:"p"},"*.py")," files it finds in the default query module directories\n(",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules"),")."),(0,n.kt)("p",null,"You can also (re)load all or specific modules manually."),(0,n.kt)("p",null,"To (re)load all query modules in all the query module directories, run the\nfollowing query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,n.kt)("p",null,"If the response is an ",(0,n.kt)("inlineCode",{parentName:"p"},"Empty set (x.x sec)")," and there are no error messages, the\nupdate was successful."),(0,n.kt)("p",null,"To (re)load a specific module, run the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("py_example");\n')),(0,n.kt)("p",null,"If the response is an ",(0,n.kt)("inlineCode",{parentName:"p"},"Empty set (x.x sec)")," and there are no error messages, the\nupdate was successful."),(0,n.kt)("p",null,"For more information on loading procedures please read the ",(0,n.kt)("a",{parentName:"p",href:"../reference-guide/query-modules/load-call-query-modules#loading-query-modules"},"reference\nguide"),"."),(0,n.kt)("h2",{id:"how-to-call-a-query-module-procedure"},"How to call a query module procedure?"),(0,n.kt)("p",null,"Each query module file corresponds to one query module, and file names are\nmapped as query module names. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"example.so")," will be mapped as\n",(0,n.kt)("inlineCode",{parentName:"p"},"example")," module, and ",(0,n.kt)("inlineCode",{parentName:"p"},"py_example.py")," will be mapped as ",(0,n.kt)("inlineCode",{parentName:"p"},"py_example")," module. If\neach module file has a procedure called ",(0,n.kt)("inlineCode",{parentName:"p"},"procedure")," defined, those procedures\nwould be mapped in the Cypher query language as ",(0,n.kt)("inlineCode",{parentName:"p"},"example.procedure()")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"py_example.procedure()"),", respectively."),(0,n.kt)("p",null,"The syntax for calling procedures in loaded query modules is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) YIELD res1, res2, ...;\n")),(0,n.kt)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",(0,n.kt)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. If the\nprocedure doesn't return any fields, the ",(0,n.kt)("inlineCode",{parentName:"p"},"YIELD")," part can be omitted."),(0,n.kt)("p",null,"Procedures can also be a part of a larger query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(node) YIELD result RETURN *;\n")),(0,n.kt)("p",null,"For more information and constrictions on calling procedures, please read the\n",(0,n.kt)("a",{parentName:"p",href:"../reference-guide/query-modules/load-call-query-modules#calling-query-modules"},"reference\nguide"),"."),(0,n.kt)("h2",{id:"how-to-call-a-user-defined-function"},"How to call a user-defined function?"),(0,n.kt)("p",null,"Similarly, query procedure rules apply to the functions. Although their context\nis different, the mechanism behind functions maps the written functions to\n",(0,n.kt)("inlineCode",{parentName:"p"},"example.function()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"py_example.function()")," respectively, just as was the\ncase above."),(0,n.kt)("p",null,"The syntax for calling functions in loaded query modules is similar to the\nbuilt-in functions, with the difference being case sensitivity. User-defined\nfunctions do have a case sensitive name, while builtin ones don't:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"RETURN example.function();\n")),(0,n.kt)("p",null,"Since functions do not require a heavy context around them, they are easily\nnested and combined with other Cypher syntax."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(module.function(node)) YIELD result RETURN ABS(result);\n")),(0,n.kt)("h2",{id:"how-to-control-the-memory-usage-of-a-procedure"},"How to control the memory usage of a procedure?"),(0,n.kt)("p",null,"When a procedure cannot yield results using the default 100 MB, you can increase\nthe maximum memory usage by adding the following clause in the query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 KB YIELD res1, res2, ...;\nCALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 MB YIELD res1, res2, ...;\nCALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY UNLIMITED YIELD res1, res2, ...;\n")),(0,n.kt)("p",null,"The limit can be specified to a specific value (in ",(0,n.kt)("inlineCode",{parentName:"p"},"KB")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"MB"),") or set to\n",(0,n.kt)("inlineCode",{parentName:"p"},"UNLIMITED"),"."),(0,n.kt)("p",null,"For more information on controlling the memory usage of procedures please read\nthe ",(0,n.kt)("a",{parentName:"p",href:"../reference-guide/query-modules/load-call-query-modules#controlling-procedure-memory-usage"},"reference\nguide"),"."),(0,n.kt)("h2",{id:"how-to-change-the-default-query-module-directories"},"How to change the default query module directories?"),(0,n.kt)("p",null,"If you want to change the default query module directories\n(",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules"),"),\nthat is, the directories in which Memgraph searches for query modules, change\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main configuration file\n(",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it as a command-line parameter (e.g.\nwhen using Docker)."),(0,n.kt)("p",null,"You can find all the ",(0,n.kt)("a",{parentName:"p",href:"../reference-guide/configuration"},"configuration settings"),"\nin the reference guide or check our guide on ",(0,n.kt)("a",{parentName:"p",href:"./config-logs"},"how to change the Memgraph\nconfiguration"),"."))}m.isMDXComponent=!0},65274:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/memgraph_lab_query_modules-e5619e8b4b458425c680c0ce3cefb22c.png"}}]);