"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42910:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>m,assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162),i=n(83523);const u={id:"union-find",title:"union_find",sidebar_label:"union_find"},s=void 0,d={unversionedId:"query-modules/python/union-find",id:"query-modules/python/union-find",title:"union_find",description:"Analysis of connected components is a common task in graph analytics.",source:"@site/mage/query-modules/python/union-find.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/union-find",permalink:"/memgraph-docs/mage/query-modules/python/union-find",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/union-find.md",tags:[],version:"current",frontMatter:{id:"union-find",title:"union_find",sidebar_label:"union_find"},sidebar:"mage",previous:{title:"tsp",permalink:"/memgraph-docs/mage/query-modules/python/tsp"},next:{title:"uuid_generator",permalink:"/memgraph-docs/mage/query-modules/cpp/uuid-generator"}},p={},c=[{value:"Procedures",id:"procedures",level:2},{value:"<code>connected(nodes1, nodes2, mode, update)</code>",id:"connectednodes1-nodes2-mode-update",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},f={toc:c,Highlight:m};function h(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Analysis of connected components is a common task in graph analytics."),(0,r.kt)("p",null,"By using a disjoint-set data structure that keeps track of them, the algorithm implemented in this module enables the user to quickly check whether a pair of given nodes is in the same or different connected component.\nA check on a pair of nodes is effectively executed in O(1) time."),(0,r.kt)("p",null,"The implementation of the disjoint-set data structure and its operations uses the ",(0,r.kt)("em",{parentName:"p"},"union by rank")," and ",(0,r.kt)("em",{parentName:"p"},"path splitting"),' optimizations described in "',(0,r.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/10.1145/62.2160"},"Worst-case Analysis of Set Union Algorithms"),'" ',(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", and presented with examples ",(0,r.kt)("a",{parentName:"p",href:"https://www.cs.princeton.edu/~rs/AlgsDS07/01UnionFind.pdf"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/10.1145/62.2160"},"Worst-case Analysis of Set Union Algorithms"),", Robert E. Tarjan and Jan van Leeuwen"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/union_find.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-union_find-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"module")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"Python")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("admonition",{title:"Too slow?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If this algorithm implementation is too slow for your use case, ",(0,r.kt)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"contact us")," and request a rewrite to C++ !")),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"connectednodes1-nodes2-mode-update"},(0,r.kt)("inlineCode",{parentName:"h3"},"connected(nodes1, nodes2, mode, update)")),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nodes1: Union[Vertex, List[Vertex]]")," \u27a1 First value (or list thereof) in connectedness calculation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nodes2: Union[Vertex, List[Vertex]]")," \u27a1 Second value (or list thereof) in connectedness calculation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'mode: string (default="pairwise")')," \u27a1 Mode of combining ",(0,r.kt)("inlineCode",{parentName:"li"},"nodes1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"nodes2"),". Can be ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"p"))," or ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"pairwise"))," for a pairwise product, or ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"c"))," or ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"cartesian"))," for a Cartesian product of the arguments. Pairwise by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update: boolean (default=True)")," \u27a1 Specifies whether the disjoint-set data structure should be reinitialized. Enabled by default. If the graph has been modified since the previous call of this procedure, turning ",(0,r.kt)("inlineCode",{parentName:"li"},"update")," off ensures that the changes are not visible in the output.")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node1: Vertex")," \u27a1 Node in ",(0,r.kt)("inlineCode",{parentName:"li"},"nodes1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node2: Vertex")," \u27a1 Node in ",(0,r.kt)("inlineCode",{parentName:"li"},"nodes2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connected: boolean")," \u27a1 ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," if the above nodes are in the same connected component of the graph.")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (m:Node)\nWITH collect(m) AS nodes1\nMATCH (n:Node)\nWITH collect(n) AS nodes2, nodes1\nCALL union_find.connected(nodes1, nodes2) YIELD *\nRETURN node1, node2, connected;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(23678).Z})),(0,r.kt)(l.Z,{value:"cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\n"))),(0,r.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (m:Node)\nWHERE m.id = 0 OR m.id = 1\nWITH collect(m) AS nodes1\nMATCH (n:Node)\nWHERE n.id = 2 OR n.id = 3\nWITH collect(n) AS nodes2, nodes1\nCALL union_find.connected(nodes1, nodes2) YIELD *\nRETURN node1, node2, connected;\n"))),(0,r.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------------+-----------------+-----------------+\n| node1           | node2           | connected       |\n+-----------------+-----------------+-----------------+\n| (:Node {id: 0}) | (:Node {id: 2}) | false           |\n| (:Node {id: 1}) | (:Node {id: 3}) | false           |\n+-----------------+-----------------+-----------------+\n")))))}h.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}l.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),u=n(91980),s=n(67392),d=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var g=n(72389);const k="tabList__CuJ",b="tabItem_LNqP";function N(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=s[n].value;a!==i&&(p(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},23678:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/union-find-1-179c7651963fee64816cc1689a12dff4.png"}}]);