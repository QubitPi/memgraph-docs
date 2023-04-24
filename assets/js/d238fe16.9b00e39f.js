"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85728],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={id:"manage-users-using-ldap",title:"How to manage authentication and authorization (Enterprise)",sidebar_label:"Manage authentication and authorization"},l=void 0,i={unversionedId:"how-to-guides/manage-users-using-ldap",id:"version-2.5.2/how-to-guides/manage-users-using-ldap",title:"How to manage authentication and authorization (Enterprise)",description:"Related - Reference Guide",source:"@site/memgraph_versioned_docs/version-2.5.2/how-to-guides/manage-users-using-ldap.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/manage-users-using-ldap",permalink:"/memgraph-docs/memgraph/2.5.2/how-to-guides/manage-users-using-ldap",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.2/how-to-guides/manage-users-using-ldap.md",tags:[],version:"2.5.2",frontMatter:{id:"manage-users-using-ldap",title:"How to manage authentication and authorization (Enterprise)",sidebar_label:"Manage authentication and authorization"},sidebar:"memgraph",previous:{title:"Work with indexes",permalink:"/memgraph-docs/memgraph/2.5.2/how-to-guides/indexes"},next:{title:"Manage user privileges",permalink:"/memgraph-docs/memgraph/2.5.2/how-to-guides/manage-user-privileges"}},s={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Where to next?",id:"where-to-next",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.2/reference-guide/ldap-security"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,r.kt)("p",null,"In large organizations it is often difficult to manage permissions that staff\nmembers have in the organization.  Organizations typically use an LDAP server\nto hold and manage the permissions.  Because LDAP servers are already set-up in\nmost large organizations, it is convenient for the organization to allow all\nstaff members to have access to the database using the already available\ncentralized user management system."),(0,r.kt)("p",null,"For this guide let's assume that we have an LDAP server that is serving the\nfollowing data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# Users root entry\ndn: ou=people,dc=memgraph,dc=com\nobjectclass: organizationalUnit\nobjectclass: top\nou: people\n\n# User dba\ndn: cn=dba,ou=people,dc=memgraph,dc=com\ncn: dba\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: dba\n\n# User alice\ndn: cn=alice,ou=people,dc=memgraph,dc=com\ncn: alice\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: alice\n\n# User bob\ndn: cn=bob,ou=people,dc=memgraph,dc=com\ncn: bob\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: bob\n\n# User carol\ndn: cn=carol,ou=people,dc=memgraph,dc=com\ncn: carol\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: carol\n\n# User dave\ndn: cn=dave,ou=people,dc=memgraph,dc=com\ncn: dave\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: dave\n\n# Roles root entry\ndn: ou=roles,dc=memgraph,dc=com\nobjectclass: organizationalUnit\nobjectclass: top\nou: roles\n\n# Role moderator\ndn: cn=moderator,ou=roles,dc=memgraph,dc=com\ncn: moderator\nmember: cn=alice,ou=people,dc=memgraph,dc=com\nobjectclass: groupOfNames\nobjectclass: top\n\n# Role admin\ndn: cn=admin,ou=roles,dc=memgraph,dc=com\ncn: admin\nmember: cn=carol,ou=people,dc=memgraph,dc=com\nmember: cn=dave,ou=people,dc=memgraph,dc=com\nobjectclass: groupOfNames\nobjectclass: top\n")),(0,r.kt)("p",null,"To summarize, in this dataset we have the following data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ou=people,dc=memgraph,dc=com")," - entry that holds all users",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cn=dba,ou=people,dc=memgraph,dc=com")," - user ",(0,r.kt)("inlineCode",{parentName:"li"},"dba")," that will be used as the database administrator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cn=alice,ou=people,dc=memgraph,dc=com")," - regular user ",(0,r.kt)("inlineCode",{parentName:"li"},"alice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cn=bob,ou=people,dc=memgraph,dc=com")," - regular user ",(0,r.kt)("inlineCode",{parentName:"li"},"bob")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cn=carol,ou=people,dc=memgraph,dc=com")," - regular user ",(0,r.kt)("inlineCode",{parentName:"li"},"carol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cn=dave,ou=people,dc=memgraph,dc=com")," - regular user ",(0,r.kt)("inlineCode",{parentName:"li"},"dave")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ou=roles,dc=memgraph,dc=com")," - entry that holds all roles",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cn=moderator,ou=roles,dc=memgraph,dc=com")," - role ",(0,r.kt)("inlineCode",{parentName:"li"},"moderator")," that has ",(0,r.kt)("inlineCode",{parentName:"li"},"alice")," as its member"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cn=admin,ou=roles,dc=memgraph,dc=com")," - role ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")," that has ",(0,r.kt)("inlineCode",{parentName:"li"},"carol")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"dave")," as its members")))),(0,r.kt)("p",null,"For detailed information about the LDAP integration you should first see the\nreference guide:\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.2/reference-guide/ldap-security"},"LDAP security"),"."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Before enabling LDAP authentication, Memgraph should be prepared for the\nintegration. Here we assume that you have an already running Memgraph instance\nthat doesn't have any users in its local authentication storage. For more\ndetails on how the native authentication storage works in Memgraph you should\nsee: ",(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.2/how-to-guides/manage-user-privileges"},"User privileges"),"."),(0,r.kt)("p",null,"First you should create the user that should be the database administrator.  It\nis important to have in mind that the username that you create ",(0,r.kt)("em",{parentName:"p"},"must")," exist in\nthe LDAP directory.  For the described LDAP directory we will connect to the\ndatabase and issue the following queries all in the same connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER dba;\nGRANT ALL PRIVILEGES TO dba;\n")),(0,r.kt)("p",null,"After the user is created and all privileges are granted, it is safe to\ndisconnect from the database and proceed with LDAP integration."),(0,r.kt)("p",null,"To enable LDAP integration you should specify the following flag to Memgraph:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"--auth-module-executable=/usr/lib/memgraph/auth_module/ldap.py\n")),(0,r.kt)("p",null,"You should also have the following LDAP module configuration in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/auth_module/ldap.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'server:\n  host: "<LDAP_SERVER_HOSTNAME>"\n  port: <LDAP_SERVER_PORT>\n  encryption: "disabled"\n  cert_file: ""\n  key_file: ""\n  ca_file: ""\n  validate_cert: false\n\nusers:\n  prefix: "cn="\n  suffix: ",ou=people,dc=memgraph,dc=com"\n\nroles:\n  root_dn: ""\n  root_objectclass: ""\n  user_attribute: ""\n  role_attribute: ""\n')),(0,r.kt)("p",null,"You should adjust the security settings according to your LDAP server security\nsettings."),(0,r.kt)("p",null,"After setting these configuration options you should restart your Memgraph\ninstance."),(0,r.kt)("p",null,"Now you can verify that you can still log in to the database using username\n",(0,r.kt)("inlineCode",{parentName:"p"},"dba")," and password ",(0,r.kt)("inlineCode",{parentName:"p"},"dba"),"."),(0,r.kt)("p",null,"Issuing ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW USERS;")," should list that currently only user ",(0,r.kt)("inlineCode",{parentName:"p"},"dba")," exists.  This\nis normal. It means that LDAP authentication is successfully enabled (because\nyou were able to log in) and no other users have yet logged in."),(0,r.kt)("p",null,"You should now be able to log in using username ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," and password ",(0,r.kt)("inlineCode",{parentName:"p"},"alice"),".\nBecause Alice has never before logged in to the database a new user will be\ncreated for Alice and she won't have any privileges (yet)."),(0,r.kt)("p",null,"Using user ",(0,r.kt)("inlineCode",{parentName:"p"},"dba")," we modify Alice's privileges to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH")," privilege."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"GRANT MATCH TO alice;\n")),(0,r.kt)("p",null,"After Alice logs in again into the database (to refresh her privileges) she\nwill be able to execute the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) RETURN n;\n")),(0,r.kt)("p",null,"Issuing ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW USERS;")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"dba")," should now yield both ",(0,r.kt)("inlineCode",{parentName:"p"},"dba")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"alice"),"."),(0,r.kt)("p",null,"Users Bob, Carol and Dave will also be able to log in to the database using\ntheir LDAP password.  As with Alice, their users will be created and won't have\nany privileges."),(0,r.kt)("p",null,"If automatic user account creation is disabled using the database flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"--auth-ldap-create-user=false\n")),(0,r.kt)("p",null,"The database administrator (user ",(0,r.kt)("inlineCode",{parentName:"p"},"dba"),") will first have to explicitly create\nthe users that he wishes to allow to connect to the database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER alice;\nCREATE USER bob;\n")),(0,r.kt)("p",null,"In this scenario only Alice and Bob will be allowed to log in to the database\nbecause they already have existing user accounts, but users Carol and Dave\nwon't be able to log in."),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"In the previous example users could only authenticate using LDAP. In this\nexample we will explain how to set-up the LDAP auth module to deduce the user's\nrole using LDAP search queries."),(0,r.kt)("p",null,"First, you should enable and verify that user authentication works. To enable\nrole mapping for the described LDAP schema, we will modify the LDAP auth module\nconfiguration file, specifically the section ",(0,r.kt)("inlineCode",{parentName:"p"},"roles"),", to have the following\ncontent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'roles:\n  root_dn: "ou=roles,dc=memgraph,dc=com"\n  root_objectclass: "groupOfNames"\n  user_attribute: "member"\n  role_attribute: "cn"\n')),(0,r.kt)("p",null,"This configuration tells the LDAP module that all role mapping entries are\nchildren of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ou=roles,dc=memgraph,dc=com")," entry, that the children have\nuser DNs specified in their ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," attribute and that the ",(0,r.kt)("inlineCode",{parentName:"p"},"cn")," attribute\nshould be used to determine the role name."),(0,r.kt)("p",null,"When a user logs in to the database, the LDAP auth module will go through all\nrole mapping entries and will try to find out which role mapping entry has the\nuser as its member."),(0,r.kt)("p",null,"So now when Alice logs in, the LDAP auth module will go through the following\nentries: ",(0,r.kt)("inlineCode",{parentName:"p"},"cn=admin,ou=roles,dc=memgraph,dc=com")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"cn=moderator,ou=roles,dc=memgraph,dc=com"),".  Because Alice is a member of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"moderator")," role mapping, the LDAP auth module will assign role moderator to\nAlice."),(0,r.kt)("p",null,"Now as the user ",(0,r.kt)("inlineCode",{parentName:"p"},"dba")," we can issue ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW ROLE FOR alice;")," and we will see that\nindeed Alice now has the role ",(0,r.kt)("inlineCode",{parentName:"p"},"moderator"),"."),(0,r.kt)("p",null,"Permissions for users and roles are still managed through Memgraph, they can't\nbe managed through the LDAP server."),(0,r.kt)("p",null,"If automatic role creation is disabled using the flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"--auth-ldap-create-role=false\n")),(0,r.kt)("p",null,"The database administrator (user ",(0,r.kt)("inlineCode",{parentName:"p"},"dba"),") will first have to explicitly create\nthe role for users that he wishes to allow to connect to the database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE ROLE moderator;\n")),(0,r.kt)("p",null,"In this scenario only Alice and Bob will be allowed to log in. Alice will be\nallowed to log in because her role (moderator) already exists. Bob will be\nallowed to log in because he doesn't have any role. Carol and Dave won't be\nallowed to log in because their role (administrator) doesn't exist."),(0,r.kt)("p",null,"If both automatic role creation and automatic user creation are disabled, then\nboth the user and the role must exist for a user to successfully log in to the\ndatabase."),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.2/reference-guide"},"Reference\nguide")),". For real-world examples of how to use\nMemgraph, we strongly suggest going through one of the available\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.2/tutorials"},"Tutorials")),"."))}p.isMDXComponent=!0}}]);