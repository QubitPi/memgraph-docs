"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"ldap-security",title:"LDAP Security (Enterprise)",sidebar_label:"LDAP Security"},o=void 0,l={unversionedId:"reference-guide/ldap-security",id:"version-2.5.2/reference-guide/ldap-security",title:"LDAP Security (Enterprise)",description:"Related - How to",source:"@site/memgraph_versioned_docs/version-2.5.2/reference-guide/ldap-security.md",sourceDirName:"reference-guide",slug:"/reference-guide/ldap-security",permalink:"/memgraph-docs/memgraph/2.5.2/reference-guide/ldap-security",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.2/reference-guide/ldap-security.md",tags:[],version:"2.5.2",frontMatter:{id:"ldap-security",title:"LDAP Security (Enterprise)",sidebar_label:"LDAP Security"},sidebar:"memgraph",previous:{title:"Auth module",permalink:"/memgraph-docs/memgraph/2.5.2/reference-guide/auth-module"},next:{title:"Security",permalink:"/memgraph-docs/memgraph/2.5.2/reference-guide/security"}},u={},s=[{value:"Authentication",id:"authentication",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Module requirements",id:"module-requirements",level:2},{value:"Module configuration",id:"module-configuration",level:2},{value:"Database configuration",id:"database-configuration",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.2/how-to-guides/manage-users-using-ldap"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How to"}))),(0,r.kt)("p",null,"For the purpose of supporting LDAP authentication and (optional)\nauthorization, we have built an auth module that is packaged with Memgraph\nEnterprise. For more information about auth modules see the\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.2/reference-guide/auth-module"},"reference guide"),"."),(0,r.kt)("p",null,"The module supports two operation modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"authentication only (LDAP bind request)"),(0,r.kt)("li",{parentName:"ul"},"authentication and authorization (LDAP bind and search requests)")),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"When using LDAP authentication the module builds the DN used for authentication\nusing the user specified username and the following formula:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"DN = prefix + username + suffix\n")),(0,r.kt)("p",null,"In most common situations the ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"cn=")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"suffix")," will be\n",(0,r.kt)("inlineCode",{parentName:"p"},",dc=example,dc=com"),". With an example username ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," that would yield a DN\nequal to ",(0,r.kt)("inlineCode",{parentName:"p"},"cn=alice,dc=example,dc=com")," which will then be used for the LDAP bind\noperation with the user specified password."),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"Authentication is performed in the same way as above. After the user is\nauthenticated, the module searches through the role mapping root DN object that\ncontains role mappings. A role mapping object that has the current bound user\nas its ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," attribute is used as the user's role. The role that is mapped\nto the user is the ",(0,r.kt)("inlineCode",{parentName:"p"},"CN")," attribute of the role mapping object.  The attribute\nthat contains the user DN in the mapping object, as well as the attribute that\ncontains the role name, can be changed in the module configuration file to\naccommodate your LDAP schema."),(0,r.kt)("p",null,"Note: When searching for a role in directories that have thousands of roles,\nthe search process could take a long time. That could cause long login times."),(0,r.kt)("h2",{id:"module-requirements"},"Module requirements"),(0,r.kt)("p",null,"The module is written in Python 3 and it must be installed on the server for\nyou to be able to use it. The Python version should be at least ",(0,r.kt)("inlineCode",{parentName:"p"},"3.5"),".  Also,\nyou must have the following Python 3 libraries installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ldap3")," - used to communicate with the LDAP server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PyYAML")," - used to parse the configuration file")),(0,r.kt)("h2",{id:"module-configuration"},"Module configuration"),(0,r.kt)("p",null,"The module configuration file is ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/auth_module/ldap.yaml"),".  An\ninitial example configuration file that has all settings documented and\nexplained is ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/auth_module/ldap.example.yaml"),". You can copy the\nexample configuration file into the module configuration file to get you up and\nrunning quickly."),(0,r.kt)("h2",{id:"database-configuration"},"Database configuration"),(0,r.kt)("p",null,"In order to enable use of the LDAP authentication and authorization module you\nhave to specify to Memgraph to use it. You should specify the flag\n",(0,r.kt)("inlineCode",{parentName:"p"},"--auth-module-executable /usr/lib/memgraph/auth_module/ldap.py"),"."),(0,r.kt)("p",null,"Other flags that change the behavior of the database to module integration\ncan be specified according to your needs."))}p.isMDXComponent=!0}}]);