"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"load-csv",title:"LOAD CSV clause",sidebar_label:"LOAD CSV"},i=void 0,l={unversionedId:"clauses/load-csv",id:"clauses/load-csv",title:"LOAD CSV clause",description:"The LOAD CSV clause enables you to load and use data from a CSV file of your",source:"@site/cypher-manual/clauses/load-csv.md",sourceDirName:"clauses",slug:"/clauses/load-csv",permalink:"/memgraph-docs/cypher-manual/clauses/load-csv",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/load-csv.md",tags:[],version:"current",frontMatter:{id:"load-csv",title:"LOAD CSV clause",sidebar_label:"LOAD CSV"},sidebar:"cypher_manual",previous:{title:"EXPLAIN",permalink:"/memgraph-docs/cypher-manual/clauses/explain"},next:{title:"MATCH",permalink:"/memgraph-docs/cypher-manual/clauses/match"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause enables you to load and use data from a CSV file of your\nchoosing in a row-based manner within a query. We support the Excel CSV dialect,\nas it's the most commonly used one."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/load-csv-clause"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How-to"}))),(0,r.kt)("p",null,"The syntax of the clause is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"LOAD CSV FROM <csv-file-path> ( WITH | NO ) HEADER [IGNORE BAD] [DELIMITER <delimiter-string>] [QUOTE <quote-string>] AS <variable-name>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<csv-file-path>")," is a string holding the path to the CSV file. There are no\nrestrictions on where in your filesystem the file can be located, as long as\nthe path is valid (i.e., the file exists).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"( WITH | NO ) HEADER ")," flag specifies whether the CSV file is to be parsed as\nthough it has or hasn't got a header.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IGNORE BAD")," flag specifies whether rows containing errors should be ignored\nor not. If it's set, the parser attempts to return the first valid row from\nthe CSV file. If it isn't set, an exception will be thrown on the first\ninvalid row encountered.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DELIMITER <delimiter-string>")," option enables you to specify the CSV delimiter\ncharacter. If it isn't set, the default delimiter character ",(0,r.kt)("inlineCode",{parentName:"p"},",")," is assumed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"QUOTE <quote-string>")," option enables you to specify the CSV quote character.\nIf it isn't set, the default quote character ",(0,r.kt)("inlineCode",{parentName:"p"},'"')," is assumed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<variable-name>")," is a symbolic name representing the variable to which the\ncontents of the parsed row will be bound to, enabling access to the row\ncontents later in the query."))),(0,r.kt)("p",null,"The clause reads row by row from a CSV file and binds the contents of the parsed\nrow to the variable you specified."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It's important to note that the parser parses the values as strings.\nIt's up to the user to convert the parsed row values to the appropriate type.\nThis can be done using the built-in conversion functions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ToInteger"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"ToFloat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ToBoolean")," etc. Consult the ",(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/cypher-manual/functions"},"documentation")," on the\navailable conversion functions.")))}u.isMDXComponent=!0}}]);