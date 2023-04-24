"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76251],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),g=o,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={id:"monitoring-server",title:"Monitoring server",sidebar_label:"Monitoring server"},a=void 0,s={unversionedId:"reference-guide/monitoring-server",id:"version-2.5.2/reference-guide/monitoring-server",title:"Monitoring server",description:"Memgraph allows you to connect to its monitoring server via WebSocket and",source:"@site/memgraph_versioned_docs/version-2.5.2/reference-guide/monitoring-server.md",sourceDirName:"reference-guide",slug:"/reference-guide/monitoring-server",permalink:"/memgraph-docs/memgraph/2.5.2/reference-guide/monitoring-server",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.2/reference-guide/monitoring-server.md",tags:[],version:"2.5.2",frontMatter:{id:"monitoring-server",title:"Monitoring server",sidebar_label:"Monitoring server"},sidebar:"memgraph",previous:{title:"Metadata",permalink:"/memgraph-docs/memgraph/2.5.2/reference-guide/metadata"},next:{title:"Query modules overview",permalink:"/memgraph-docs/memgraph/2.5.2/reference-guide/query-modules"}},l={},c=[{value:"Connecting",id:"connecting",level:2},{value:"Connecting with a secure connection (WSS)",id:"connecting-with-a-secure-connection-wss",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Authorization (Enterprise)",id:"authorization-enterprise",level:3},{value:"Messages",id:"messages",level:2},{value:"Logs",id:"logs",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Memgraph allows you to connect to its monitoring server via WebSocket and\nreceive certain information from it.",(0,o.kt)("br",{parentName:"p"}),"\n","For example, each log will be forwarded to all the connected clients."),(0,o.kt)("h2",{id:"connecting"},"Connecting"),(0,o.kt)("p",null,"To connect to Memgraph's WebSocket Server use the following URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"ws://host:port\n")),(0,o.kt)("p",null,"The default host used is ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," but that can be changed using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--monitoring-host")," configuration flag.",(0,o.kt)("br",{parentName:"p"}),"\n","The default port used is ",(0,o.kt)("inlineCode",{parentName:"p"},"7444")," but that can be changed using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--monitoring-port")," configuration flag."),(0,o.kt)("h3",{id:"connecting-with-a-secure-connection-wss"},"Connecting with a secure connection (WSS)"),(0,o.kt)("p",null,"As for the Bolt connection, SSL is also supported. Same flags are used for both\ntypes of connection - ",(0,o.kt)("inlineCode",{parentName:"p"},"--bolt-cert-file")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--bolt-key-file"),"."),(0,o.kt)("p",null,"If both of them are set, you will need to use the following URL to connect to\nthe WebSocket server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"wss://host:port\n")),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"If the authentication is used, Memgraph won't send the message to a certain\nconnection until it's authenticated."),(0,o.kt)("p",null,"To authenticate, a JSON with the credentials in the following format is\nrequired:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "<username>",\n  "password": "<password>"\n}\n')),(0,o.kt)("p",null,"If the credentials are valid, the connection will be made, and the client will\nreceive the messages. As a response, the client should receive the following\nmessage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "User has been successfully authenticated!"\n}\n')),(0,o.kt)("p",null,"If they are invalid or the first message is in the invalid format, the\nconnection is dropped. As a response, the following message is sent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": false,\n  "message": "<error-message>"\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If authentication is not used (there are no users present in Memgraph),\nno authentication message is expected, and no response will be returned. ")),(0,o.kt)("h3",{id:"authorization-enterprise"},"Authorization (Enterprise)"),(0,o.kt)("p",null,"Permission for connecting through WebSocket is controlled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"WEBSOCKET"),"\nprivilege."),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"logs"},"Logs"),(0,o.kt)("p",null,"Each log that is written to the log file is forwarded to the connected clients\nin the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  event: "log",\n  level: "trace"|"debug"|"info"|"warning"|"error"|"critical",\n  message: "<log-message>"\n}\n')))}u.isMDXComponent=!0}}]);