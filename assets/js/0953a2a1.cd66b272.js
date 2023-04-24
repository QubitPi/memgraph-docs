"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12204],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return a?o.createElement(f,l(l({ref:t},m),{},{components:a})):o.createElement(f,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},48357:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={id:"load-json",title:"Loading from JSON format",sidebar_label:"JSON",pagination_prev:"import-data/overview"},l=void 0,i={unversionedId:"import-data/files/load-json",id:"version-2.5.2/import-data/files/load-json",title:"Loading from JSON format",description:"A JSON file is a file that stores simple data structures and objects in",source:"@site/memgraph_versioned_docs/version-2.5.2/import-data/files/load-json.md",sourceDirName:"import-data/files",slug:"/import-data/files/load-json",permalink:"/memgraph-docs/memgraph/2.5.2/import-data/files/load-json",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.2/import-data/files/load-json.md",tags:[],version:"2.5.2",frontMatter:{id:"load-json",title:"Loading from JSON format",sidebar_label:"JSON",pagination_prev:"import-data/overview"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/memgraph-docs/memgraph/2.5.2/import-data"},next:{title:"CYPHERL",permalink:"/memgraph-docs/memgraph/2.5.2/import-data/files/cypherl"}},s={},p=[{value:"Examples",id:"examples",level:2},{value:"Load JSON from a local file",id:"load-json-from-a-local-file",level:3},{value:"Load JSON from a remote address",id:"load-json-from-a-remote-address",level:3}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A JSON file is a file that stores simple data structures and objects in\nJavaScript Object Notation format, which is a standard data interchange format.\nThe data you want to import to the database is often saved in JSON format, and\nyou might want to import parts of that data as graph objects - nodes or\nrelationships."),(0,n.kt)("p",null,"Below, you can find two examples of how to use the load JSON methods depending\non the data source:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#load-json-from-a-local-file"},"Load JSON from a local file")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#load-json-from-a-remote-address"},"Load JSON from a remote address"))),(0,n.kt)("p",null,"The above methods are procedures of query module implemented in MAGE (Memgraph Advanced\nGraph Extensions) and you can read more about them in the ",(0,n.kt)("a",{parentName:"p",href:"/mage/query-modules/python/json-util"},"MAGE\ndocumentation"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To be able to call JSON load procedures, you need to install MAGE and load query\nmodules. To learn how to do that, check out the ",(0,n.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-query-module"},"Run a query\nmodule")," how-to guide.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The following examples will show how to load data from a local JSON file or a\nremote address."),(0,n.kt)("h3",{id:"load-json-from-a-local-file"},"Load JSON from a local file"),(0,n.kt)("p",null,"To import data from a local JSON file, use ",(0,n.kt)("inlineCode",{parentName:"p"},"load_from_path(path)")," procedure that\ntakes one string argument (",(0,n.kt)("inlineCode",{parentName:"p"},"path"),") and returns a list of JSON objects from the\nfile located at the provided path."),(0,n.kt)("p",null,"Let's import data from a file ",(0,n.kt)("inlineCode",{parentName:"p"},"data.json")," with the following content:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "first_name": "Jessica",\n  "last_name": "Rabbit",\n  "pets": ["dog", "cat", "bird"]\n}\n')),(0,n.kt)("p",null,"If you are using Docker to run Memgraph, you will need to ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.2/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-Docker-container"},"copy the files from\nyour local directory into the\nDocker"),"\ncontainer where Memgraph can access them."),(0,n.kt)("p",null,"To create a node with the label ",(0,n.kt)("inlineCode",{parentName:"p"},"Person")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"first_name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"last_name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"pets"),"\nas properties, run the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL json_util.load_from_path("path/to/data.json")\nYIELD objects\nUNWIND objects AS o\nCREATE (:Person {first_name: o.first_name, last_name: o.last_name, pets: o.pets});\n')),(0,n.kt)("details",null,(0,n.kt)("summary",null,"After you execute the above query, the graph in Memgraph should look like this:"),(0,n.kt)("div",null,(0,n.kt)("img",{src:a(10350).Z}))),(0,n.kt)("h3",{id:"load-json-from-a-remote-address"},"Load JSON from a remote address"),(0,n.kt)("p",null,"To import data from a remote JSON file, use ",(0,n.kt)("inlineCode",{parentName:"p"},"load_from_url(url)")," procedure that\ntakes one string argument (",(0,n.kt)("inlineCode",{parentName:"p"},"url"),") and returns a list of JSON objects from the\nfile located at the provided URL."),(0,n.kt)("p",null,"For example, at ",(0,n.kt)("inlineCode",{parentName:"p"},'"https://download.memgraph.com/asset/mage/data.json"'),", you can\nfind the following ",(0,n.kt)("inlineCode",{parentName:"p"},"data.json")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "first_name": "James",\n  "last_name": "Bond",\n  "pets": ["dog", "cat", "fish"]\n}\n')),(0,n.kt)("p",null,"To create a node with the label ",(0,n.kt)("inlineCode",{parentName:"p"},"Person")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"first_name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"last_name")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"pets")," as properties from the ",(0,n.kt)("inlineCode",{parentName:"p"},"data.json")," file. You can run the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL json_util.load_from_url("https://download.memgraph.com/asset/mage/data.json")\nYIELD objects\nUNWIND objects AS o\nCREATE (:Person {first_name: o.first_name, last_name: o.last_name, pets: o.pets});\n')),(0,n.kt)("details",null,(0,n.kt)("summary",null,"After you run the above query, the graph in Memgraph should look like this:"),(0,n.kt)("div",null,(0,n.kt)("img",{src:a(3029).Z}))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To load JSON files from another local or remote location, just replace the\nargument of the procedure with the appropriate path or URL. If you want to\ncreate a different kind of graph, you need to change the query accordingly. To\nlearn more about querying, check out the ",(0,n.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),".")))}d.isMDXComponent=!0},10350:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/load_json_from_path-cd0c47fff320681902646cd494e63ef4.png"},3029:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/load_json_from_url-9fa43d2bb5e1f494536f12e3c6eb6550.png"}}]);