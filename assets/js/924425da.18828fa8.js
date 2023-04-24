"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71902],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,c=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"manage-user-privileges",title:"How to manage user privileges (Enterprise)",sidebar_label:"Manage user privileges"},l=void 0,o={unversionedId:"how-to-guides/manage-user-privileges",id:"version-2.5.0/how-to-guides/manage-user-privileges",title:"How to manage user privileges (Enterprise)",description:"Related - Reference Guide",source:"@site/memgraph_versioned_docs/version-2.5.0/how-to-guides/manage-user-privileges.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/manage-user-privileges",permalink:"/memgraph-docs/memgraph/2.5.0/how-to-guides/manage-user-privileges",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.0/how-to-guides/manage-user-privileges.md",tags:[],version:"2.5.0",frontMatter:{id:"manage-user-privileges",title:"How to manage user privileges (Enterprise)",sidebar_label:"Manage user privileges"},sidebar:"memgraph",previous:{title:"Manage authentication and authorization",permalink:"/memgraph-docs/memgraph/2.5.0/how-to-guides/manage-users-using-ldap"},next:{title:"Manage label-based access control",permalink:"/memgraph-docs/memgraph/2.5.0/how-to-guides/manage-label-based-access-control"}},s={},p=[{value:"Creating an administrator",id:"creating-an-administrator",level:2},{value:"Creating other users",id:"creating-other-users",level:2},{value:"Creating user roles",id:"creating-user-roles",level:2},{value:"Where to next?",id:"where-to-next",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/reference-guide/security"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This is an Enterprise feature.\nIf the Memgraph Enterprise is not activated, all the created users will be granted\nall of the privileges.\nRegardless, all of the previously defined privileges will still be applied.")),(0,r.kt)("p",null,"Most databases have multiple users accessing and modifying\ndata within the database. This might pose a serious security concern for the\nsystem administrators that wish to grant only certain privileges to certain\nusers. A typical example would be an internal database of some company which\ntracks data about their employees. Naturally, only certain users of the database\nshould be able to perform queries which modify that data."),(0,r.kt)("p",null,"At Memgraph, we provide the administrators with the option of granting,\ndenying or revoking a certain set of privileges to some users or groups of users\n(i.e. users that are assigned a specific user role), thereby eliminating such\nsecurity concerns."),(0,r.kt)("p",null,"By default, anyone can connect to Memgraph and is granted all privileges.\nAfter the first user is created, Memgraph will execute a query if and only\nif either a user or its role is granted that privilege and neither the\nuser nor its role are denied that privilege. Otherwise, Memgraph will not\nexecute that specific query. Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"DENY")," is a stronger\noperation than ",(0,r.kt)("inlineCode",{parentName:"p"},"GRANT"),". This is also notable from the fact that if neither the\nuser nor its role are explicitly granted or denied a certain privilege, that\nuser will not be able to perform that specific query. This effect also is known\nas a silent deny. The information above is neatly condensed in the following\ntable:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Role Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Effective Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,r.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,r.kt)("td",{parentName:"tr",align:null},"GRANT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"GRANT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DENY"),(0,r.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DENY"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DENY"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,r.kt)("td",{parentName:"tr",align:null},"GRANT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"DENY")))),(0,r.kt)("p",null,"All supported commands that deal with accessing or modifying users, user\nroles and privileges can only be executed by users that are granted the\n",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH")," privilege. All of those commands are listed in the appropriate\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/reference-guide/security"},"reference guide"),"."),(0,r.kt)("p",null,"At the moment, privileges are confined to users' abilities to perform certain\n",(0,r.kt)("inlineCode",{parentName:"p"},"OpenCypher")," queries. Namely users can be given permission to execute a subset\nof the following commands: ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MERGE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SET"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"REMOVE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INDEX"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"STATS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLICATION"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"READ_FILE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DURABILITY"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"FREE_MEMORY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TRIGGER"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"STREAM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CONSTRAINT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DUMP"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"MODULE_READ"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MODULE_WRITE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WEBSOCKET"),"."),(0,r.kt)("p",null,"We could naturally cluster those privileges into groups:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Privilege to access data (",(0,r.kt)("inlineCode",{parentName:"li"},"MATCH"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to modify data (",(0,r.kt)("inlineCode",{parentName:"li"},"MERGE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SET"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to create and delete data (",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"REMOVE"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to index data (",(0,r.kt)("inlineCode",{parentName:"li"},"INDEX"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to obtain statistics and information from Memgraph (",(0,r.kt)("inlineCode",{parentName:"li"},"STATS"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to view and alter users, roles and privileges (",(0,r.kt)("inlineCode",{parentName:"li"},"AUTH"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to use replication queries (",(0,r.kt)("inlineCode",{parentName:"li"},"REPLICATION"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to access files in queries, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"LOAD CSV")," clause (",(0,r.kt)("inlineCode",{parentName:"li"},"READ_FILE"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to manage durability files (",(0,r.kt)("inlineCode",{parentName:"li"},"DURABILITY"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to try freeing memory (",(0,r.kt)("inlineCode",{parentName:"li"},"FREE_MEMORY"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to use trigger queries (",(0,r.kt)("inlineCode",{parentName:"li"},"TRIGGER"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to use stream queries (",(0,r.kt)("inlineCode",{parentName:"li"},"STREAM"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to configure Memgraph during runtime and to attain the configuration of the given Memgraph instance(",(0,r.kt)("inlineCode",{parentName:"li"},"CONFIG"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to read the content of Python query module files (",(0,r.kt)("inlineCode",{parentName:"li"},"MODULE_READ"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to modify the content of Python query modules files (",(0,r.kt)("inlineCode",{parentName:"li"},"MODULE_WRITE"),")"),(0,r.kt)("li",{parentName:"ul"},"Privilege to connect to ",(0,r.kt)("a",{parentName:"li",href:"/memgraph-docs/memgraph/2.5.0/reference-guide/monitoring-server"},"Memgraph monitoring server")," (",(0,r.kt)("inlineCode",{parentName:"li"},"WEBSOCKET"),")")),(0,r.kt)("p",null,"If you are unfamiliar with any of these commands, you can look them up in our\n",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),"."),(0,r.kt)("p",null,"Similarly, the complete list of commands which can be executed under ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH"),"\nprivilege can be viewed in the\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.0/reference-guide/security"},"appropriate article")," within  our reference\nguide."),(0,r.kt)("p",null,"The remainder of this article outlines a recommended workflow of\nuser management within an internal database of a fictitious company."),(0,r.kt)("h2",{id:"creating-an-administrator"},"Creating an administrator"),(0,r.kt)("p",null,"After the first user is created, Memgraph will grant all the privileges to them.\nTherefore, let's create a user named ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," and set its' password to ",(0,r.kt)("inlineCode",{parentName:"p"},"0000"),".\nThis can be done by executing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER admin IDENTIFIED BY '0000';\n")),(0,r.kt)("h2",{id:"creating-other-users"},"Creating other users"),(0,r.kt)("p",null,"Our fictitious company is internally divided into teams, and each team has\nits own supervisor. All employees of the company need to access and modify\ndata within the database."),(0,r.kt)("p",null,"Creating a user account for a new hire named Alice can be done as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER alice IDENTIFIED BY '0042';\n")),(0,r.kt)("p",null,"Alice should also be granted a privilege to access data, which can be done by\nexecuting the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"GRANT MATCH, MERGE, SET TO alice;\n")),(0,r.kt)("h2",{id:"creating-user-roles"},"Creating user roles"),(0,r.kt)("p",null,"Each team supervisor needs to have additional privileges that allow them to\ncreate new data or delete existing data from the database. Instead of tediously\ngranting additional privileges to each supervisor using language constructs from\nthe previous chapter, we could do so by creating a new user role for\nsupervisors."),(0,r.kt)("p",null,"Creating a user role named ",(0,r.kt)("inlineCode",{parentName:"p"},"supervisor")," can be done by executing the following\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE ROLE supervisor;\n")),(0,r.kt)("p",null,"Granting the privilege to create and delete data to our newly created role can\nbe done as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"GRANT CREATE, DELETE, REMOVE TO supervisor;\n")),(0,r.kt)("p",null,"Finally, we need to assign that role to each of the supervisors. Suppose, a user\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," is indeed a supervisor within the company. Assigning them that role\nwithin the database can be done by the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"SET ROLE FOR bob TO supervisor;\n")),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"If you are in need for a finer granularity in authorizing your graph, visit\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.0/how-to-guides/manage-label-based-access-control"},"Manage label-based access control")),"\nfor authorizing specific nodes and relationships."),(0,r.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.0/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.0/tutorials"},"Tutorials")),"."))}d.isMDXComponent=!0}}]);