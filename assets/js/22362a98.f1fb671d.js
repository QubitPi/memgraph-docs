"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),s=n(16550),u=n(91980),i=n(67392),p=n(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,i]=h({queryString:n,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=u??c;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),g(e)}),[i,g,l]),tabValues:l}}var f=n(72389);const k="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=i[n].value;r!==s&&(c(t),u(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},92422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),o=n(85162);const s={id:"users",title:"User management",sidebar_label:"User management"},u=void 0,i={unversionedId:"reference-guide/users",id:"reference-guide/users",title:"User management",description:"The community edition of Memgraph enables creating users that can access the",source:"@site/docs/reference-guide/users.md",sourceDirName:"reference-guide",slug:"/reference-guide/users",permalink:"/memgraph-docs/memgraph/next/reference-guide/users",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/users.md",tags:[],version:"current",frontMatter:{id:"users",title:"User management",sidebar_label:"User management"},sidebar:"memgraph",previous:{title:"Triggers",permalink:"/memgraph-docs/memgraph/next/reference-guide/triggers"},next:{title:"Enabling Memgraph Enterprise",permalink:"/memgraph-docs/memgraph/next/reference-guide/enabling-enterprise"}},p={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Password encryption algorithm",id:"password-encryption-algorithm",level:2},{value:"BCrypt",id:"bcrypt",level:3},{value:"SHA256 and SHA256 with multiple iterations",id:"sha256-and-sha256-with-multiple-iterations",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The community edition of Memgraph enables creating users that can access the\ndatabase with or without a password."),(0,a.kt)("p",null,"To create a user, execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER user_name [IDENTIFIED BY 'password'];\n")),(0,a.kt)("p",null,"Setting up a password is optional. If the password is not set, the user can\nlog in using any password, or none, provided that they enter the correct\nusername."),(0,a.kt)("p",null,"To set or change a user's password, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"SET PASSWORD FOR user_name TO 'new_password';\n")),(0,a.kt)("p",null,"To check all the users created on an instance, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW USERS;\n")),(0,a.kt)("p",null,"To remove a user's password, set it to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"SET PASSWORD FOR user_name TO null;\n")),(0,a.kt)("p",null,"To delete a user use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP USER user_name;\n")),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"memgraph-platform")," image")),(0,a.kt)("p",null,"If you are using Docker and ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image, you should pass the\n",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," environment variables when starting Memgraph:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MGCONSOLE="--username <username> --password <password>" memgraph/memgraph-platform\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MGCONSOLE="--username vlasta --password vp" memgraph/memgraph-platform\n')),(0,a.kt)("p",null,"Upon connecting with Memgraph Lab you should select ",(0,a.kt)("em",{parentName:"p"},"Connect Manually")," and enter\nusername (and password)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"memgraph")," and ",(0,a.kt)("inlineCode",{parentName:"strong"},"memgraph-mage")," images")),(0,a.kt)("p",null,"If you are using Docker and ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," image enter username\nand password when connecting manually to Memgraph Lab. "),(0,a.kt)("p",null,"If you are connecting with mgconsole you should add the username and password\nflags to the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -it --entrypoint=mgconsole memgraph/memgraph --host CONTAINER_IP --username=<username> --password=<password>\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -it --entrypoint=mgconsole memgraph/memgraph --host 172.17.0.2 --username=vlasta --password=vp\n"))),(0,a.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,a.kt)("p",null,"If you are using Linux and connecting with Memgraph Lab, select ",(0,a.kt)("em",{parentName:"p"},"Connect\nManually")," and enter username (and password). "),(0,a.kt)("p",null,"When connecting with mgconsole, set\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"--username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--password")," flags:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687 --username <username> --password <password>\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687 --username vlasta --password vp\n")))),(0,a.kt)("h2",{id:"password-encryption-algorithm"},"Password encryption algorithm"),(0,a.kt)("p",null,"Memgraph offers multiple password encryption algorithms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BCrypt"),(0,a.kt)("li",{parentName:"ul"},"SHA256"),(0,a.kt)("li",{parentName:"ul"},"SHA256 with multiple iterations (currently set to 1024 iterations)")),(0,a.kt)("p",null,"The above algorithms can be specified at runtime using the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--password-encryption-algorithm")," with the\nappropriate values of ",(0,a.kt)("inlineCode",{parentName:"p"},"bcrypt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sha256")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"sha256-multiple"),"."),(0,a.kt)("h3",{id:"bcrypt"},"BCrypt"),(0,a.kt)("p",null,"This algorithm is the default algorithm for password encryption. It's the most secure algorithm and has the best\nprotection against brute-force attack. However, if you're running connecting multiple concurrent enterprise users with\npasswords at the same time, it may not be the best choice for you as you might experience slower performance. The performance\nis slower only during authentication of the users, and should not degrade once the connection has been established."),(0,a.kt)("h3",{id:"sha256-and-sha256-with-multiple-iterations"},"SHA256 and SHA256 with multiple iterations"),(0,a.kt)("p",null,"SHA256 is an encryption algorithm that's usually not used for password encryption but is fast and secure enough to\noffer optimal performance when running a lot of concurrent opening connections to Memgraph."))}d.isMDXComponent=!0}}]);