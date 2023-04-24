"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93773],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38737:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>m,assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162),i=a(83523);const s={id:"pagerank-online",title:"pagerank_online",sidebar_label:"pagerank_online"},p=void 0,u={unversionedId:"query-modules/cpp/pagerank-online",id:"query-modules/cpp/pagerank-online",title:"pagerank_online",description:"Online PageRank is a streaming algorithm made for calculating",source:"@site/mage/query-modules/cpp/pagerank_online.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/pagerank-online",permalink:"/memgraph-docs/mage/query-modules/cpp/pagerank-online",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/pagerank_online.md",tags:[],version:"current",frontMatter:{id:"pagerank-online",title:"pagerank_online",sidebar_label:"pagerank_online"},sidebar:"mage",previous:{title:"pagerank",permalink:"/memgraph-docs/mage/query-modules/cpp/pagerank"},next:{title:"set_cover",permalink:"/memgraph-docs/mage/query-modules/python/set-cover"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Procedures",id:"procedures",level:2},{value:"<code>set(walks_per_node, walk_stop_epsilon)</code>",id:"setwalks_per_node-walk_stop_epsilon",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"<code>get(max_iterations, damping_factor, stop_epsilon)</code>",id:"getmax_iterations-damping_factor-stop_epsilon",level:3},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-2",level:4},{value:"<code>update(created_vertices, created_edges, deleted_vertices, deleted_edges)</code>",id:"updatecreated_vertices-created_edges-deleted_vertices-deleted_edges",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-2",level:4},{value:"Usage:",id:"usage-3",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:a}=e;return(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:c,Highlight:m};function k(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Online PageRank")," is a streaming algorithm made for calculating\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph-docs/mage/query-modules/cpp/pagerank"},"PageRank")," in a graph streaming scenario. Incremental- local\nchanges are introduced in the algorithm to prevent users from recalculating\nPageRank values each time a change occurs in the graph (something is added or\ndeleted)."),(0,r.kt)("p",null,'To make it as fast as possible, the online algorithm is only the approximation\nof PageRank but carrying the same information - the likelihood of random walk\nending in a particular vertex. The work is based on "',(0,r.kt)("a",{parentName:"p",href:"http://snap.stanford.edu/class/cs224w-readings/bahmani10pagerank.pdf"},"Fast Incremental and\nPersonalized\nPageRank"),'"\n',(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", where authors are deeply focused on providing the streaming experience of\na highly popular graph algorithm."),(0,r.kt)("p",null,"Approximating PageRank is done simply by exploring random walks and calculating\nthe frequency of a node within all walks. ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," walks are sampled by using a\nrandom walk with a stopping probability of ",(0,r.kt)("inlineCode",{parentName:"p"},"eps"),".Therefore, on average, walks\nwould have a length of ",(0,r.kt)("inlineCode",{parentName:"p"},"1/eps"),". Approximative PageRank is based on the formula\nbelow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"RankApprox(v) = X_v / (n * R / eps)\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"X_v")," is the number of walks where the node ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," appears. The theorem\nwritten in the paper explains that RankApprox(v) is sharply concentrated around\nits expectation, which is Rank(v)."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Online PageRank should be used in a specific way. To set the parameters, the\nuser should call a ",(0,r.kt)("inlineCode",{parentName:"p"},"set()")," procedure. This function also sets the context of a\nstreaming algorithm. ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," function only returns the resulting values stored\nin a cache. Therefore, if you try to get values before first calling ",(0,r.kt)("inlineCode",{parentName:"p"},"set()"),",\nthe run will fail with a proper message."),(0,r.kt)("p",null,"To make the incremental flow, you should set the proper trigger. For that, we'll\nuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"update()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE TRIGGER pagerank_trigger\n(BEFORE | AFTER) COMMIT\nEXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *\nSET node.rank = rank;\n")),(0,r.kt)("p",null,"Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"reset()")," function resets the context and enables the user to start\nnew runs."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("a",{parentName:"p",href:"http://snap.stanford.edu/class/cs224w-readings/bahmani10pagerank.pdf"},"Fast Incremental and Personalized\nPageRank"),",\nBahman Bahmani et al."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/pagerank_module/pagerank_online_module.cpp"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-pagerank_online-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"algorithm")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"C++")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"directed")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"setwalks_per_node-walk_stop_epsilon"},(0,r.kt)("inlineCode",{parentName:"h3"},"set(walks_per_node, walk_stop_epsilon)")),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"walks_per_node: integer (default=10)")," \u27a1 Number of sampled walks per node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"walk_stop_epsilon: double (default=0.1)")," \u27a1 The probability of stopping when deriving\nthe random walk. On average, it will create walks of length ",(0,r.kt)("inlineCode",{parentName:"li"},"1 /\nwalk_stop_epsilon"),".")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Node in the graph, for which PageRank is calculated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rank")," \u27a1 Normalized ranking of a node. Expresses the probability that a random\nsurfer will finish in a certain node by a random walk.")),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank_online.set(100, 0.2)\nYIELD node, rank;\n")),(0,r.kt)("h3",{id:"getmax_iterations-damping_factor-stop_epsilon"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(max_iterations, damping_factor, stop_epsilon)")),(0,r.kt)("p",null,"*"," This should be used if the trigger has been set or a ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," function has\nbeen called before adding changes to the graph."),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Node in the graph, for which PageRank is calculated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rank")," \u27a1 Normalized ranking of a node. Expresses the probability that a random\nsurfer will finish in a certain node by a random walk.")),(0,r.kt)("h4",{id:"usage-2"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank_online.get()\nYIELD node, rank;\n")),(0,r.kt)("h3",{id:"updatecreated_vertices-created_edges-deleted_vertices-deleted_edges"},(0,r.kt)("inlineCode",{parentName:"h3"},"update(created_vertices, created_edges, deleted_vertices, deleted_edges)")),(0,r.kt)("h4",{id:"input-1"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"created_vertices")," \u27a1 Vertices that were created in the last transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"created_edges")," \u27a1 Edges created in a period from the last transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deleted_vertices")," \u27a1 Vertices deleted from the last transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deleted_edges")," \u27a1 Edges deleted from the last transaction.")),(0,r.kt)("h4",{id:"output-2"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Node in the graph, for which PageRank is calculated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rank")," \u27a1 Normalized ranking of a node. Expresses the probability that a random\nsurfer will finish in a certain node by a random walk.")),(0,r.kt)("h4",{id:"usage-3"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE TRIGGER pagerank_trigger\n(BEFORE | AFTER) COMMIT\nEXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *\nSET node.rank = rank;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Set parameters and trigger",value:"cypher-preset"},{label:"Step 3: Load commands",value:"cypher-load"},{label:"Step 4: Running command",value:"run"},{label:"Step 5: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:a(17491).Z})),(0,r.kt)(o.Z,{value:"cypher-preset",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank_online.set(100, 0.2) YIELD *;\n\nCREATE TRIGGER pagerank_trigger\nBEFORE COMMIT\nEXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *\nSET node.rank = rank;\n"))),(0,r.kt)(o.Z,{value:"cypher-load",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\n"))),(0,r.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node)\nRETURN node.id AS node_id, node.rank AS rank;\n"))),(0,r.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------+-----------+\n| node_id   | rank      |\n+-----------+-----------+\n| 0         | 0.225225  |\n| 1         | 0.225225  |\n| 2         | 0.225225  |\n| 3         | 0.0675676 |\n| 4         | 0.0765766 |\n| 5         | 0.0585586 |\n| 6         | 0.121622  |\n+-----------+-----------+\n")))))}k.isMDXComponent=!0},83523:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={toc:[]};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}o.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),p=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=g({queryString:a,groupId:n}),[d,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var h=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(d(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},17491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memgraph-pagerank-online-760fe81a51c06c230b7b2954dcfd6e90.png"}}]);