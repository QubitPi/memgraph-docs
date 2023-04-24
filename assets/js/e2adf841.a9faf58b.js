"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,h=m["".concat(u,".").concat(g)]||m[g]||s[g]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),u=n(91980),p=n(67392),c=n(50012);function s(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,p]=h({queryString:n,groupId:a}),[s,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=u??s;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),d(e)}),[p,d,o]),tabValues:o}}var f=n(72389);const k="tabList__CuJ",N="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==i&&(s(t),u(a))},g=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:m},l,{className:(0,o.Z)("tabs__item",N,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=d(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},23452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={id:"config-logs",title:"How to change configuration settings and access log files",sidebar_label:"Change configuration and access logs"},u=void 0,p={unversionedId:"how-to-guides/config-logs",id:"version-2.5.2/how-to-guides/config-logs",title:"How to change configuration settings and access log files",description:"Related - Reference Guide",source:"@site/memgraph_versioned_docs/version-2.5.2/how-to-guides/config-logs.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/config-logs",permalink:"/memgraph-docs/memgraph/2.5.2/how-to-guides/config-logs",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.2/how-to-guides/config-logs.md",tags:[],version:"2.5.2",frontMatter:{id:"config-logs",title:"How to change configuration settings and access log files",sidebar_label:"Change configuration and access logs"},sidebar:"memgraph",previous:{title:"Backup and restore data",permalink:"/memgraph-docs/memgraph/2.5.2/how-to-guides/create-backup"},next:{title:"Existence constraint",permalink:"/memgraph-docs/memgraph/2.5.2/how-to-guides/constraints/existence-constraint"}},c={},s=[{value:"Docker",id:"docker",level:2},{value:"Configuring Memgraph",id:"configuring-memgraph",level:3},{value:"Changing the configuration file",id:"file",level:4},{value:"Passing configuration options within the <code>docker run</code> command",id:"command",level:4},{value:"Accessing logs",id:"accessing-logs",level:3},{value:"Linux",id:"linux",level:2},{value:"Configuring Memgraph",id:"configuring-memgraph-1",level:3},{value:"Accessing logs",id:"accessing-logs-1",level:3}],m={toc:s};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.2/reference-guide/configuration"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,r.kt)("p",null,"This how-to guide will show you how to change ",(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.2/reference-guide/configuration"},"configuration settings")," for\nMemgraph and check the log files."),(0,r.kt)("p",null,"Continue reading if you are using ",(0,r.kt)("a",{parentName:"p",href:"#docker"},"Memgraph with Docker"),", or skip to\nthe ",(0,r.kt)("a",{parentName:"p",href:"#linux"},"Linux chapter")," if you are using MemgraphDB with ",(0,r.kt)("strong",{parentName:"p"},"WSL"),",\n",(0,r.kt)("strong",{parentName:"p"},"Ubuntu"),", ",(0,r.kt)("strong",{parentName:"p"},"Debian"),", or ",(0,r.kt)("strong",{parentName:"p"},"RPM package"),"."),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("p",null,"Below you will find instructions on configuring Memgraph and ",(0,r.kt)("a",{parentName:"p",href:"#accessing-logs"},"checking\nlogs")," if you are using Memgraph with Docker."),(0,r.kt)("h3",{id:"configuring-memgraph"},"Configuring Memgraph"),(0,r.kt)("p",null,"If you want a custom configuration to be in effect every time you run Memgraph,\n",(0,r.kt)("a",{parentName:"p",href:"#file"},"change the main configuration file"),". "),(0,r.kt)("p",null,"If you want a certain configuration setting to be applied during this run only,\n",(0,r.kt)("a",{parentName:"p",href:"#command"},"pass the configuration option within the ",(0,r.kt)("inlineCode",{parentName:"a"},"docker run")," command"),"."),(0,r.kt)("h4",{id:"file"},"Changing the configuration file"),(0,r.kt)("p",null,"Begin with starting Memgraph and finding out the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Start Memgraph with a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command but be sure to include the\nfollowing flag ",(0,r.kt)("inlineCode",{parentName:"p"},"-v mg_etc:/etc/memgraph"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker ps\n")),(0,r.kt)("p",null,"Now, you can choose to either modify the main configuration file outside of\nDocker, or within Docker with a command-line text editor (such as ",(0,r.kt)("strong",{parentName:"p"},"vim"),")."),(0,r.kt)(o.Z,{groupId:"container",defaultValue:"outside",values:[{label:"Changing configuration outside the container",value:"outside"},{label:"Changing configuration inside the container",value:"inside"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"outside",mdxType:"TabItem"},(0,r.kt)("p",null,"To change the configuration file outside the Docker container continue with the\nfollowing steps:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Place yourself in the directory where you want to copy the configuration\nfile. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," Copy the file from the container to your current directory with the\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker cp <CONTAINER ID>:/etc/memgraph/memgraph.conf memgraph.conf\n")),(0,r.kt)("p",null,"Be sure to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,r.kt)("p",null,"The example below will copy the configuration file to the user's Desktop: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"C:\\Users\\Vlasta\\Desktop>docker cp bb3de2634afe:/etc/memgraph/memgraph.conf memgraph.conf\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.")," Open the configuration file with a text editor. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6.")," Modify the configuration file and save the changes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7.")," Copy the file from your current directory to the container with the\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker cp  memgraph.conf <CONTAINER ID>:/etc/memgraph/memgraph.conf\n")),(0,r.kt)("p",null,"Be sure to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,r.kt)("p",null,"The example below will replace the configuration file with the one from the\nuser's Desktop: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"C:\\Users\\Vlasta\\Desktop>docker cp memgraph.conf bb3de2634afe:/etc/memgraph/memgraph.conf\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"8.")," Restart Memgraph."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"9.")," You can check the current configuration by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW CONFIG;")," query.")),(0,r.kt)(l.Z,{value:"inside",mdxType:"TabItem"},(0,r.kt)("p",null,"To change the configuration file inside the Docker container continue with the\nfollowing steps:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Enter the Docker container with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker exec -it <CONTAINER ID> bash\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," Install the text editor of your choice."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.")," Edit the configuration file located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6.")," Restart Memgraph."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7.")," You can check the current configuration by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW CONFIG;")," query."))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"command"},"Passing configuration options within the ",(0,r.kt)("inlineCode",{parentName:"h4"},"docker run")," command"),(0,r.kt)("p",null,"Select the image you are using to find out how to customize the configuration by\npassing configuration options within the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command."),(0,r.kt)(o.Z,{groupId:"platform",defaultValue:"platform",values:[{label:"memgraph-platform image",value:"platform"},{label:"Other images",value:"other"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"platform",mdxType:"TabItem"},(0,r.kt)("p",null,"If you are working with the ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image, you should pass\nconfiguration options with environment variables."),(0,r.kt)("p",null,"For example, if you want to limit memory usage for the whole instance to 50 MiB\nand set the log level to ",(0,r.kt)("inlineCode",{parentName:"p"},"TRACE"),", pass the configuration like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker run -it -p 7687:7687 -p 3000:3000 -p 7444:7444 -e MEMGRAPH="--memory-limit=50 --log-level=TRACE" memgraph/memgraph-platform\n'))),(0,r.kt)(l.Z,{value:"other",mdxType:"TabItem"},(0,r.kt)("p",null,"When you are working with ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," images, you should pass\nconfiguration options as arguments."),(0,r.kt)("p",null,"For example, if you want to limit memory usage for the whole instance to 50 MiB\nand set the log level to ",(0,r.kt)("inlineCode",{parentName:"p"},"TRACE"),", pass the configuration argument like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 -p 7444:7444 memgraph/memgraph --memory-limit=50 --log-level=TRACE\n")))),(0,r.kt)("p",null,"You can check the current configuration by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW CONFIG;")," query. "),(0,r.kt)("h3",{id:"accessing-logs"},"Accessing logs"),(0,r.kt)("p",null,"To access the logs of a running instance:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1."),"  Open a new terminal and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker ps\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker exec -it <CONTAINER ID> bash\n")),(0,r.kt)("p",null,"Be sure to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Position yourself in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/memgraph")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"cd /var/log/memgraph\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," List all the log files with ",(0,r.kt)("inlineCode",{parentName:"p"},"ls"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.")," List the content of the log with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cat <memgraph_date>.log")," command."),(0,r.kt)("p",null,"For example, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," command returned ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph_2022-03-04.log")," you would\nlist the contents using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"cat memgraph_2022-03-04.log\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6.")," If you want to save the log to your computer, exit the container with\n",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL+D"),", place yourself in a directory where you want to save the copy and run\nthe following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker cp  <memgraph_date>.log <CONTAINER ID>:/var/log/memgraph/<memgraph_date>.log\n")),(0,r.kt)("p",null,"For example, the following command will make a copy of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph_2022-03-04.log")," file on the user's desktop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"C:\\Users\\Vlasta\\Desktop>docker cp memgraph_2022-03-04.log bb3de2634afe:/var/log/memgraph/memgraph_2022-03-04.log.log\n")),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("p",null,"This section of the how-to guide will explain how to change the configuration\nfile and access logs if you are using MemgraphDB with WSL, Ubuntu, Debian or\nRPM package."),(0,r.kt)("h3",{id:"configuring-memgraph-1"},"Configuring Memgraph"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Install and run Memgraph."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Open the configuration file available at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Modify the configuration file and save the changes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," Restart Memgraph."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.")," You can check the current configuration by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW CONFIG;")," query. "),(0,r.kt)("h3",{id:"accessing-logs-1"},"Accessing logs"),(0,r.kt)("p",null,"Logs can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/memgraph")," directory."))}g.isMDXComponent=!0}}]);