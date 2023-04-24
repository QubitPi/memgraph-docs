"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:r}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=s??u;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==i&&(u(t),s(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function S(e){const t=(0,f.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},5111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={id:"encryption",title:"SSL encryption",sidebar_label:"SSL encryption"},s=void 0,c={unversionedId:"reference-guide/encryption",id:"version-2.5.1/reference-guide/encryption",title:"SSL encryption",description:"Memgraph uses SSL (Secure Sockets Layer) protocol for establishing an",source:"@site/memgraph_versioned_docs/version-2.5.1/reference-guide/encryption.md",sourceDirName:"reference-guide",slug:"/reference-guide/encryption",permalink:"/memgraph-docs/memgraph/2.5.1/reference-guide/encryption",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.1/reference-guide/encryption.md",tags:[],version:"2.5.1",frontMatter:{id:"encryption",title:"SSL encryption",sidebar_label:"SSL encryption"},sidebar:"memgraph",previous:{title:"Transactions",permalink:"/memgraph-docs/memgraph/2.5.1/reference-guide/transactions"},next:{title:"Triggers",permalink:"/memgraph-docs/memgraph/2.5.1/reference-guide/triggers"}},p={},u=[{value:"SSL certificate",id:"ssl-certificate",level:2},{value:"Configure the server",id:"configure-the-server",level:2},{value:"Enable SSL connection",id:"enable-ssl-connection",level:2}],m={toc:u};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Memgraph uses SSL (Secure Sockets Layer) protocol for establishing an\nauthenticated and encrypted connection to a database instance."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.1/how-to-guides/encryption"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related -\nHow-to"}))),(0,a.kt)("p",null,"Achieving a secure connection is a three-step process that requires"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Owning a SSL certificate"),(0,a.kt)("li",{parentName:"ol"},"Configuring the server"),(0,a.kt)("li",{parentName:"ol"},"Enabling SSL connection")),(0,a.kt)("p",null,"For any errors that might come up, check out ",(0,a.kt)("a",{parentName:"p",href:"/errors/memgraph/ssl"},"the Help center page on\nerrors"),"."),(0,a.kt)("h2",{id:"ssl-certificate"},"SSL certificate"),(0,a.kt)("p",null,"SSL certificate is a pair of ",(0,a.kt)("inlineCode",{parentName:"p"},".pem")," documents issued by self-signing, or by a\nCertification Authority. Memgraph contains a self-signed testing certificate\n(",(0,a.kt)("inlineCode",{parentName:"p"},"cert.pem")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key.pem"),") located at ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/ssl/"),"."),(0,a.kt)("p",null,"If you are using Docker and want to use your own certificates, you need to ",(0,a.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.1/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container"},"copy\nthem into a Docker\ncontainer"),"\nin order to utilize them."),(0,a.kt)("h2",{id:"configure-the-server"},"Configure the server"),(0,a.kt)("p",null,"To use a certain SSL certificate, change the configuration file to include the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--bolt-cert-file")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--bolt-key-file")," flags and set them to the location of\nthe certification files."),(0,a.kt)("p",null,"If you are using the Memgraph self-signed certificate, set the configuration\nflags to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--bolt-cert-file=/etc/memgraph/ssl/cert.pem\n--bolt-key-file=/etc/memgraph/ssl/key.pem\n")),(0,a.kt)("p",null,"When using Linux, be sure that the user ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph")," has permissions (400) to\naccess the files."),(0,a.kt)("p",null,"Once the flags are included in the configuration, you cannot establish an\ninsecure connection."),(0,a.kt)("h2",{id:"enable-ssl-connection"},"Enable SSL connection"),(0,a.kt)(o.Z,{groupId:"connectiontype",defaultValue:"lab",values:[{label:"Memgraph Lab",value:"lab"},{label:"mgconsole",value:"mgconsole"},{label:"Drivers",value:"drivers"},{label:"WebSocket",value:"websocket"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"lab",mdxType:"TabItem"},(0,a.kt)("p",null,"To enable SSL connection in Memgraph Lab, switch to ",(0,a.kt)("strong",{parentName:"p"},"Connect Manually")," view\nand turn the SSL on."),(0,a.kt)("img",{src:n(88618).Z,className:"imgBorder"}),(0,a.kt)("p",null,"When Memgraph Lab is connected to MemgraphDB using SSL encryption, logs cannot\nbe viewed inside the Lab.")),(0,a.kt)(l.Z,{value:"mgconsole",mdxType:"TabItem"},(0,a.kt)("p",null,"When starting mgconsol include the ",(0,a.kt)("inlineCode",{parentName:"p"},"--use-ssl=true")," flag. Flag can also be\nexplicitly set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," if needed."),(0,a.kt)("p",null,"When working with Memgraph Platform, you should pass configuration flags inside\nof environment variables as a part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," command, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -e MGCONSOLE="--use-ssl=true" memgraph/memgraph-platform\n')),(0,a.kt)("p",null,"In all other cases passed them on as regular configuration flags."),(0,a.kt)("p",null,"For example, if you are starting mgconsole on Linux:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mgconsole --host 127.0.0.1 --port 7687 --use-ssl=true\n")),(0,a.kt)("p",null,"or if you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," Docker images:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph memgraph/memgraph-mage --use-ssl=true\n"))),(0,a.kt)(l.Z,{value:"drivers",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Javascript")),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://neo4j.com/developer/javascript/"},"Neo4j driver for JavaScript"),", and\nadd ",(0,a.kt)("inlineCode",{parentName:"p"},"+ssc")," to the UNI when defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"MEMGRAPH_URI")," constant: ",(0,a.kt)("br",null)),(0,a.kt)("code",null,"MEMGRAPH_URI = 'bolt+ssc://18.196.53.118:7687'"),".",(0,a.kt)("p",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Python")),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/pymgclient"},"pymgclient"),", and add\n",(0,a.kt)("inlineCode",{parentName:"p"},"sslmode=mgclient.MG_SSLMODE_REQUIRE")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgclient.connect"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"C/C++")),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgclient"},"mgclient"),", and add set the\n",(0,a.kt)("inlineCode",{parentName:"p"},"params.use_ssl")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Go")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://neo4j.com/developer/go/"},"Neo4j driver for Go"),", and add ",(0,a.kt)("inlineCode",{parentName:"p"},"+ssc"),"\nto the UNI: ",(0,a.kt)("inlineCode",{parentName:"p"},'"bolt+ssc://18.196.53.118:7687"'),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PHP")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neo4j-php/Bolt"},"Bolt protocol library by\nstefanak-michal")," and add the following code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"$conn->setSslContextOptions([\n 'passphrase' => 'bolt',\n 'allow_self_signed' => true,\n 'verify_peer' => false,\n 'verify_peer_name' => false\n]);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"C#")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://neo4j.com/developer/dotnet/"},"Neo4j.Driver.Simple"),", and add\n",(0,a.kt)("inlineCode",{parentName:"p"},"+ssc")," to the UNI: ",(0,a.kt)("inlineCode",{parentName:"p"},'"bolt+ssc://18.196.53.118:7687"'),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Java")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://neo4j.com/developer/java/"},"Neo4j driver for Java")," and add\n",(0,a.kt)("inlineCode",{parentName:"p"},"+ssc")," to the UNI: ",(0,a.kt)("inlineCode",{parentName:"p"},'"bolt+ssc://18.196.53.118:7687"'),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rust")),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgclient"},"mgclient"),", and add ",(0,a.kt)("inlineCode",{parentName:"p"},"sslmode:\nSSLMode::Require")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectParams"),".")),(0,a.kt)(l.Z,{value:"websocket",mdxType:"TabItem"},(0,a.kt)("p",null,"WebSocket over SSL is currently not supported in Memgraph."))))}d.isMDXComponent=!0},88618:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/memgraph_lab_ssl-4a62089750bda0627ba554500eaa3d4f.png"}}]);