"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67908:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>m,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162),u=n(83523);const i={id:"weakly-connected-components",title:"weakly_connected_components",sidebar_label:"weakly_connected_components"},c=void 0,s={unversionedId:"query-modules/cpp/weakly-connected-components",id:"query-modules/cpp/weakly-connected-components",title:"weakly_connected_components",description:"The first analysis that is most often run on a graph is usually a search for disconnected components.",source:"@site/mage/query-modules/cpp/weakly_connected_components.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/weakly-connected-components",permalink:"/memgraph-docs/mage/query-modules/cpp/weakly-connected-components",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/weakly_connected_components.md",tags:[],version:"current",frontMatter:{id:"weakly-connected-components",title:"weakly_connected_components",sidebar_label:"weakly_connected_components"},sidebar:"mage",previous:{title:"vrp",permalink:"/memgraph-docs/mage/query-modules/python/vrp"},next:{title:"Create a Python query module",permalink:"/memgraph-docs/mage/how-to-guides/create-a-new-module-python"}},d={},p=[{value:"Procedures",id:"procedures",level:2},{value:"<code>get()</code>",id:"get",level:3},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:p,Highlight:m};function g(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The first analysis that is most often run on a graph is usually a search for disconnected components.\nThe algorithm implemented within this module does exactly that, it searches for different components of\nthe graph. Within components, nodes have connections toward each other, while between components there\nis no edge that connects nodes from separate components."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/connectivity_module/connectivity_module.cpp"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-weakly_connected_components-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"algorithm")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"C++")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(u.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"get"},(0,r.kt)("inlineCode",{parentName:"h3"},"get()")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Vertex object with all properties which is going to be related to the component ID it belongs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"component_id")," \u27a1 Component ID for each node in the graph. Components are zero-indexed and there is no rule of how they will be appointed to node. The only guarantee is that divided components will have distinct component IDs.")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL weakly_connected_components.get()\nYIELD node, component_id;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(53855).Z})),(0,r.kt)(l.Z,{value:"cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\n"))),(0,r.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL weakly_connected_components.get()\nYIELD node, component_id\nRETURN node, component_id;\n"))),(0,r.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------------+-----------------+\n| node            | component_id    |\n+-----------------+-----------------+\n| (:Node {id: 5}) | 1               |\n| (:Node {id: 4}) | 1               |\n| (:Node {id: 3}) | 1               |\n| (:Node {id: 2}) | 0               |\n| (:Node {id: 0}) | 0               |\n| (:Node {id: 1}) | 0               |\n+-----------------+-----------------+\n")))))}g.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}l.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),u=n(16550),i=n(91980),c=n(67392),s=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,c]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=n(72389);const y="tabList__CuJ",f="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==u&&(d(t),i(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":u===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},53855:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/weakly-connected-components-1-179c7651963fee64816cc1689a12dff4.png"}}]);