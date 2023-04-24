"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=l(a),g=o,c=d["".concat(p,".").concat(g)]||d[g]||h[g]||n;return a?r.createElement(c,i(i({ref:t},s),{},{components:a})):r.createElement(c,i({ref:t},s))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},41344:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>m,toc:()=>l});var r=a(87462),o=(a(67294),a(3905));const n={id:"overview",title:"Import data",sidebar_label:"Import data overview",slug:"/import-data"},i=void 0,m={unversionedId:"import-data/overview",id:"version-2.5.0/import-data/overview",title:"Import data",description:"There are a few methods for importing data into Memgraph and they cover:",source:"@site/memgraph_versioned_docs/version-2.5.0/import-data/overview.md",sourceDirName:"import-data",slug:"/import-data",permalink:"/memgraph-docs/memgraph/2.5.0/import-data",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.0/import-data/overview.md",tags:[],version:"2.5.0",frontMatter:{id:"overview",title:"Import data",sidebar_label:"Import data overview",slug:"/import-data"},sidebar:"memgraph",previous:{title:"WebSocket",permalink:"/memgraph-docs/memgraph/2.5.0/connect-to-memgraph/websocket"},next:{title:"Import data from various file formats into Memgraph",permalink:"/memgraph-docs/memgraph/2.5.0/import-data/files/overview"}},p={},l=[{value:"How to import CSV files into Memgraph?",id:"how-to-import-csv-files-into-memgraph",level:2},{value:"How to import JSON files into Memgraph?",id:"how-to-import-json-files-into-memgraph",level:2},{value:"How to import CYPHERL files with Cypher queries into Memgraph?",id:"how-to-import-cypherl-files-with-cypher-queries-into-memgraph",level:2},{value:"How to migrate data from a relational database?",id:"how-to-migrate-data-from-a-relational-database",level:2},{value:"How to import streaming data into Memgraph?",id:"how-to-import-streaming-data-into-memgraph",level:2},{value:"How to import data directly from an application or a program?",id:"how-to-import-data-directly-from-an-application-or-a-program",level:2},{value:"Where to next?",id:"where-to-next",level:2}],s={toc:l};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are a few methods for importing data into Memgraph and they cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-import-csv-files-into-memgraph"},"How to import CSV files into Memgraph?")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-import-json-files-into-memgraph"},"How to import JSON files into Memgraph?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-import-cypherl-files-with-cypher-queries-into-memgraph"},"How to import CYPHERL files with Cypher queries into Memgraph?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-migrate-data-from-a-relational-database"},"How to migrate data from a relational database?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-import-streaming-data-into-memgraph"},"How to import streaming data into Memgraph?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-import-data-directly-from-an-application-or-a-program"},"How to import data directly from an application/program?"))),(0,o.kt)("h2",{id:"how-to-import-csv-files-into-memgraph"},"How to import CSV files into Memgraph?"),(0,o.kt)("p",null,"To import data from CSV files into Memgraph, use the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/import-data/load-csv-clause"},(0,o.kt)("strong",{parentName:"a"},"LOAD CSV\nclause")),", which is used as a standard\nCypher clause, and can be invoked straight from a running Memgraph instance."),(0,o.kt)("h2",{id:"how-to-import-json-files-into-memgraph"},"How to import JSON files into Memgraph?"),(0,o.kt)("p",null,"You can import the JSON file into Memgraph by using the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/import-data/files/load-json"},(0,o.kt)("strong",{parentName:"a"},"JSON query\nmodule")),", which has procedures for loading JSON\nfile from a local file  from a remote address."),(0,o.kt)("h2",{id:"how-to-import-cypherl-files-with-cypher-queries-into-memgraph"},"How to import CYPHERL files with Cypher queries into Memgraph?"),(0,o.kt)("p",null,"If your data is in the form of Cypher queries (",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MERGE")," clauses)\nwithin a ",(0,o.kt)("strong",{parentName:"p"},"CYPHERL")," file it can be ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/import-data/files/cypherl"},"imported via Memgraph\nLab or mgconsole"),"."),(0,o.kt)("h2",{id:"how-to-migrate-data-from-a-relational-database"},"How to migrate data from a relational database?"),(0,o.kt)("p",null,"You can migrate data from a ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/import-data/migrate/mysql"},(0,o.kt)("strong",{parentName:"a"},"MySQL"))," or\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/import-data/migrate/postgresql"},(0,o.kt)("strong",{parentName:"a"},"PostgresSQL"))," database using the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgmigrate"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"mgmigrate"))," tool"),"."),(0,o.kt)("h2",{id:"how-to-import-streaming-data-into-memgraph"},"How to import streaming data into Memgraph?"),(0,o.kt)("p",null,"Memgraph comes with full streaming support, and you can connect directly to a\n",(0,o.kt)("strong",{parentName:"p"},"Kafka"),", ",(0,o.kt)("strong",{parentName:"p"},"Redpanda")," or ",(0,o.kt)("strong",{parentName:"p"},"Pulsar")," stream using ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/import-data/data-streams/manage-streams"},"Cypher\nqueries")," or ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/import-data/data-streams/manage-streams-lab"},"Memgraph Lab\nwizard"),"."),(0,o.kt)("h2",{id:"how-to-import-data-directly-from-an-application-or-a-program"},"How to import data directly from an application or a program?"),(0,o.kt)("p",null,"Memgraph offers a wide range of drivers that can be used to connect directly to\nthe platform. You can find a list of all the supported drivers\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/connect-to-memgraph/drivers"},"here"),"."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"You can also connect to streams and import data from CYPHERL files to an\ninstance running in ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-cloud"},"Memgraph Cloud"),". To learn more\nabout the Cypher language, check out our ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," for interactive guides.\nFor real-world examples of how to use Memgraph, we strongly suggest going\nthrough one of the available ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/tutorials"},"tutorials"),"."))}h.isMDXComponent=!0}}]);