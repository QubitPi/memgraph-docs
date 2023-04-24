"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(a),m=i,g=h["".concat(u,".").concat(m)]||h[m]||d[m]||r;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5308:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>d,assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var n=a(87462),i=(a(67294),a(3905)),r=(a(74866),a(85162),a(83523));const l={id:"igraphalg",title:"igraphalg",sidebar_label:"igraphalg"},o=void 0,u={unversionedId:"query-modules/python/igraphalg",id:"query-modules/python/igraphalg",title:"igraphalg",description:"The  igraphalg module provides a comprehensive set of thin wrappers around some of the algorithms present in the igraph package. The wrapper functions can create an igraph compatible graph-like object that can stream the native database graph directly, significantly lowering memory usage.",source:"@site/mage/query-modules/python/igraphalg.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/igraphalg",permalink:"/memgraph-docs/mage/query-modules/python/igraphalg",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/igraphalg.md",tags:[],version:"current",frontMatter:{id:"igraphalg",title:"igraphalg",sidebar_label:"igraphalg"},sidebar:"mage",previous:{title:"graph_util",permalink:"/memgraph-docs/mage/query-modules/cpp/graph-util"},next:{title:"import_util",permalink:"/memgraph-docs/mage/query-modules/python/import-util"}},p={},s=[{value:"Procedures",id:"procedures",level:2},{value:"<code>get_all_simple_paths(v, to, cutoff)</code>",id:"get_all_simple_pathsv-to-cutoff",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>spanning_tree(weights, directed)</code>",id:"spanning_treeweights-directed",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"<code>pagerank(damping, weights, directed,implementation)</code>",id:"pagerankdamping-weights-directedimplementation",level:3},{value:"Input:",id:"input-2",level:4},{value:"Output:",id:"output-2",level:4},{value:"Usage:",id:"usage-2",level:4},{value:"<code>get_shortest_path(source, target, weights, directed)</code>",id:"get_shortest_pathsource-target-weights-directed",level:3},{value:"Input:",id:"input-3",level:4},{value:"Output:",id:"output-3",level:4},{value:"Usage:",id:"usage-3",level:4},{value:"<code>shortest_path_length(source, target, weights, directed)</code>",id:"shortest_path_lengthsource-target-weights-directed",level:3},{value:"Input:",id:"input-4",level:4},{value:"Output:",id:"output-4",level:4},{value:"Usage:",id:"usage-4",level:4},{value:"<code>topological_sort(mode)</code>",id:"topological_sortmode",level:3},{value:"Input:",id:"input-5",level:4},{value:"Output:",id:"output-5",level:4},{value:"Usage:",id:"usage-5",level:4},{value:"<code>maxflow(source, target, capacity)</code>",id:"maxflowsource-target-capacity",level:3},{value:"Input:",id:"input-6",level:4},{value:"Output:",id:"output-6",level:4},{value:"Usage:",id:"usage-6",level:4},{value:"<code>mincut(source, target, capacity,directed)</code>",id:"mincutsource-target-capacitydirected",level:3},{value:"Input:",id:"input-7",level:4},{value:"Output:",id:"output-7",level:4},{value:"Usage:",id:"usage-7",level:4},{value:"<code>community_leiden(objective_function, weights, resolution_parameter, beta, initial_membership, n_iterations, node_weights)</code>",id:"community_leidenobjective_function-weights-resolution_parameter-beta-initial_membership-n_iterations-node_weights",level:3},{value:"Input:",id:"input-8",level:4},{value:"Output:",id:"output-8",level:4},{value:"Usage:",id:"usage-8",level:4},{value:"<code>all_shortest_path_lengths( weights, directed)</code>",id:"all_shortest_path_lengths-weights-directed",level:3},{value:"Input:",id:"input-9",level:4},{value:"Output:",id:"output-9",level:4},{value:"Usage:",id:"usage-9",level:4}],d=e=>{let{children:t,color:a}=e;return(0,i.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:s,Highlight:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The  ",(0,i.kt)("strong",{parentName:"p"},"igraphalg")," module provides a comprehensive set of thin wrappers around some of the algorithms present in the ",(0,i.kt)("a",{parentName:"p",href:"https://igraph.org/"},"igraph")," package. The wrapper functions can create an igraph compatible graph-like object that can stream the native database graph directly, significantly lowering memory usage."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/igraphalg.py"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-igraphalg-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Module type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"module")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Implementation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"Python")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Graph direction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"directed")),"/",(0,i.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"undirected")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Edge weights")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"weighted")),"/",(0,i.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"unweighted")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Parallelism")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"sequential")))))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are not satisfied with the performance of algorithms from the igraphalg\nmodule, check Memgraph's native implementation of algorithms such as PageRank,\nshortest path, and others written in C++")),(0,i.kt)("h2",{id:"procedures"},"Procedures"),(0,i.kt)(r.ZP,{mdxType:"RunOnSubgraph"}),(0,i.kt)("h3",{id:"get_all_simple_pathsv-to-cutoff"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_all_simple_paths(v, to, cutoff)")),(0,i.kt)("p",null,"Returns all simple paths in the graph ",(0,i.kt)("inlineCode",{parentName:"p"},"G")," from source to target. A simple path is a path with no repeated nodes."),(0,i.kt)("h4",{id:"input"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"v: Vertex")," \u27a1 Path's starting node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to: Vertex")," \u27a1 Path's ending node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cutoff: int (default=-1)")," \u27a1 Maximum length of the considered path. If negative, paths of all lengths are considered.")),(0,i.kt)("h4",{id:"output"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path: List[Vertex]")," \u27a1 List of vertices for a certain path. If there are no paths between the source and the target within the given cutoff, there is no output.")),(0,i.kt)("h4",{id:"usage"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Label), (m:Label)\nCALL igraphalg.get_all_simple_paths(n, m, 5) YIELD *\nRETURN path;\n")),(0,i.kt)("h3",{id:"spanning_treeweights-directed"},(0,i.kt)("inlineCode",{parentName:"h3"},"spanning_tree(weights, directed)")),(0,i.kt)("p",null,"Returns a minimum spanning tree on a graph ",(0,i.kt)("inlineCode",{parentName:"p"},"G"),".\nA ",(0,i.kt)("em",{parentName:"p"},"minimum spanning tree")," is a subset of the edges of a connected graph that connects all of the vertices without any cycles."),(0,i.kt)("h4",{id:"input-1"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weights: string (default=NULL)")," \u27a1 Data key to use for edge weights."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directed: bool (default=False)")," \u27a1 If ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," the graph is directed, otherwise it's undirected.")),(0,i.kt)("h4",{id:"output-1"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tree: List[List[Vertex]]")," \u27a1 A minimum spanning tree or forest.")),(0,i.kt)("h4",{id:"usage-1"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL igraphalg.spanning_tree() \nYIELD *\nRETURN tree;\n")),(0,i.kt)("h3",{id:"pagerankdamping-weights-directedimplementation"},(0,i.kt)("inlineCode",{parentName:"h3"},"pagerank(damping, weights, directed,implementation)")),(0,i.kt)("p",null,"Returns the PageRank of the nodes in the graph."),(0,i.kt)("p",null,"PageRank computes a ranking of the nodes in graph G based on the structure of the incoming links. It was originally designed as an algorithm to rank web pages."),(0,i.kt)("h4",{id:"input-2"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"damping: double (default=0.85)")," \u27a1 Damping parameter for PageRank."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'weights: string (default="weight")')," \u27a1 Edge data key to use as a weight. If ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),", weights are set to 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directed: bool (default=True)")," \u27a1 If ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," the graph is directed, otherwise it's undirected."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'implementation: string (default="prpack")')," \u27a1 Algorithm used for calculating PageRank values. The algorithm can be either ",(0,i.kt)("inlineCode",{parentName:"li"},"prpack")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"arpack"),".")),(0,i.kt)("h4",{id:"output-2"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Vertex for which the PageRank is calculated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rank: double")," \u27a1 Node's PageRank value.")),(0,i.kt)("h4",{id:"usage-2"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL igraphalg.pagerank() YIELD *\nRETURN node, rank;\n")),(0,i.kt)("h3",{id:"get_shortest_pathsource-target-weights-directed"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_shortest_path(source, target, weights, directed)")),(0,i.kt)("p",null,"Compute the shortest path in the graph."),(0,i.kt)("h4",{id:"input-3"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source: Vertex (default=NULL)")," \u27a1 Path's starting node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target: Vertex (default=NULL)")," \u27a1 Path's ending node. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weights: string (default=NULL)")," \u27a1 If ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),", every edge has weight/distance/cost 1. If the value is a property name, use that property as the edge weight. If an edge doesn't have a property, the value defaults to 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directed: bool (default=True)")," \u27a1 If ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the graph is directed, otherwise, it's undirected.")),(0,i.kt)("h4",{id:"output-3"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path: List[Vertex]")," \u27a1  Path between ",(0,i.kt)("inlineCode",{parentName:"li"},"source")," node and ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," node.")),(0,i.kt)("h4",{id:"usage-3"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Label), (m:Label)\nCALL igraphalg.get_shortest_path(n, m) YIELD *\nRETURN path;\n")),(0,i.kt)("h3",{id:"shortest_path_lengthsource-target-weights-directed"},(0,i.kt)("inlineCode",{parentName:"h3"},"shortest_path_length(source, target, weights, directed)")),(0,i.kt)("p",null,"Compute the shortest path length in the graph."),(0,i.kt)("h4",{id:"input-4"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source: Vertex (default=NULL)")," \u27a1 Path's starting node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target: Vertex (default=NULL)")," \u27a1 Path's ending node. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weights: string (default=NULL)")," \u27a1 If ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),", every edge has weight/distance/cost 1. If the value is a property name, use that property as the edge weight. If an edge doesn't have a property, the value defaults to 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directed: bool (default=True)")," \u27a1 If ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the graph is directed, otherwise, it's undirected.")),(0,i.kt)("h4",{id:"output-4"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"length: double")," \u27a1 Shortest path length between the ",(0,i.kt)("inlineCode",{parentName:"li"},"source")," node and ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," node. If there is no path it returns ",(0,i.kt)("inlineCode",{parentName:"li"},"inf"),".")),(0,i.kt)("h4",{id:"usage-4"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Label), (m:Label)\nCALL igraphalg.shortest_path_length(n, m) YIELD length\nRETURN length;\n")),(0,i.kt)("h3",{id:"topological_sortmode"},(0,i.kt)("inlineCode",{parentName:"h3"},"topological_sort(mode)")),(0,i.kt)("p",null,"Returns nodes in topologically sorted order.\nA ",(0,i.kt)("em",{parentName:"p"},"topological sort")," is a non-unique permutation of the nodes such that an edge from ",(0,i.kt)("inlineCode",{parentName:"p"},"u")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," implies that ",(0,i.kt)("inlineCode",{parentName:"p"},"u")," appears before ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," in the topological sort order."),(0,i.kt)("h4",{id:"input-5"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'mode: string (default="out")')," \u27a1 Specifies how to use the direction of the edges. For ",(0,i.kt)("inlineCode",{parentName:"li"},"out"),", the sorting order ensures that each node comes before all nodes to which it has edges, so nodes with no incoming edges go first. For ",(0,i.kt)("inlineCode",{parentName:"li"},"in"),", it is quite the opposite: each node comes before all nodes from which it receives edges. Nodes with no outgoing edges go first.")),(0,i.kt)("h4",{id:"output-5"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodes: List[Vertex]")," \u27a1 A list of nodes in topological sorted order.")),(0,i.kt)("h4",{id:"usage-5"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL igraphalg.topological_sort() YIELD *\nRETURN nodes;\n")),(0,i.kt)("h3",{id:"maxflowsource-target-capacity"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxflow(source, target, capacity)")),(0,i.kt)("p",null,"The maximum flow problem consists of finding a flow through a graph such that it is the maximum possible flow."),(0,i.kt)("h4",{id:"input-6"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source: Vertex")," \u27a1 Source node from which the maximum flow is calculated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target: Vertex")," \u27a1 Sink node to which the max flow is calculated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'capacity: string (default="weight")')," \u27a1 Edge property which is used as the flow capacity of the edge.")),(0,i.kt)("h4",{id:"output-6"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_flow: Number")," \u27a1 Maximum flow of the network, from source to sink")),(0,i.kt)("h4",{id:"usage-6"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (source {id: 0}), (sink {id: 5})\nCALL igraphalg.maxflow(source, sink, "weight")\nYIELD max_flow\nRETURN max_flow;\n')),(0,i.kt)("h3",{id:"mincutsource-target-capacitydirected"},(0,i.kt)("inlineCode",{parentName:"h3"},"mincut(source, target, capacity,directed)")),(0,i.kt)("p",null,"Minimum cut calculates the minimum st-cut between two vertices in a graph."),(0,i.kt)("h4",{id:"input-7"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source: Vertex")," \u27a1 Source node from which the maximum flow is calculated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target: Vertex")," \u27a1 Sink node to which the max flow is calculated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'capacity: string (default="weight")')," \u27a1 Edge property which is used as the capacity of the edge.")),(0,i.kt)("h4",{id:"output-7"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Vertex in graph."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"partition_id: int")," \u27a1 Id of the partition where ",(0,i.kt)("inlineCode",{parentName:"li"},"node")," belongs after min-cut.")),(0,i.kt)("h4",{id:"usage-7"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  MATCH (source {id: 0}), (sink {id: 5})\n  CALL igraphalg.mincut(source, sink)\n  YIELD node, partition_id \n  RETURN node, partition_id;\n")),(0,i.kt)("h3",{id:"community_leidenobjective_function-weights-resolution_parameter-beta-initial_membership-n_iterations-node_weights"},(0,i.kt)("inlineCode",{parentName:"h3"},"community_leiden(objective_function, weights, resolution_parameter, beta, initial_membership, n_iterations, node_weights)")),(0,i.kt)("p",null,"Finding community structure of a graph using the Leiden algorithm of Traag, van Eck & Waltman."),(0,i.kt)("h4",{id:"input-8"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'objective_function: string (default="CPM")')," \u27a1 Whether to use the Constant Potts Model (CPM) or modularity. Must be either ",(0,i.kt)("inlineCode",{parentName:"li"},"CPM")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"modularity"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weights: string (default=NULL)")," \u27a1 If a string is present, use this edge attribute as the edge weight if it isn't edge weights default to 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolution_parameter: float (default=1.0)")," \u27a1 Higher resolutions lead to smaller communities, while lower resolutions lead to fewer larger communities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"beta: float (default=0.01)")," \u27a1 Parameter affecting the randomness in the Leiden algorithm. This affects only the refinement step of the algorithm."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial_membership: List[int](default=NULL)")," \u27a1  If provided, the Leiden algorithm will try to improve this provided membership. If no argument is provided, the algorithm simply starts from the singleton partition."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n_iterations: int (default=2)")," \u27a1 The number of iterations to iterate the Leiden algorithm. Each iteration may improve the partition further.\n",(0,i.kt)("inlineCode",{parentName:"li"},"vertex_weights: List[float] (default=NULL)")," \u27a1 The vertex weights used in the Leiden algorithm. If this is not provided, it will be automatically determined based on the objective_function.")),(0,i.kt)("h4",{id:"output-8"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Vertex in graph."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"community_id: int")," \u27a1 Id of community where ",(0,i.kt)("inlineCode",{parentName:"li"},"node")," belongs.")),(0,i.kt)("h4",{id:"usage-8"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"    CALL igraphalg.community_leiden() \n    YIELD node, community_id\n    RETURN node, community_id;\n")),(0,i.kt)("h3",{id:"all_shortest_path_lengths-weights-directed"},(0,i.kt)("inlineCode",{parentName:"h3"},"all_shortest_path_lengths( weights, directed)")),(0,i.kt)("p",null,"Compute all shortest path lengths in the graph."),(0,i.kt)("h4",{id:"input-9"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weights: string (default=NULL)")," \u27a1 If ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),", every edge has weight/distance/cost 1. If the value is a property name, use that property as the edge weight. If an edge doesn't have a property, the value defaults to 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directed: bool (default=True)")," \u27a1 If ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the graph is directed, otherwise, it's undirected.")),(0,i.kt)("h4",{id:"output-9"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src_node: Vertex")," \u27a1 ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dest_node: Vertex")," \u27a1 ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"length: double")," \u27a1 If ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the graph is directed, otherwise, it's undirected.")),(0,i.kt)("h4",{id:"usage-9"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL igraphalg.all_shortest_path_length()\n  YIELD src_node, dest_node, length\n  RETURN src_node, dest_node, length;\n")))}m.isMDXComponent=!0},83523:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,i.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}l.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),i=a(67294),r=a(86010),l=a(12466),o=a(16550),u=a(91980),p=a(67392),s=a(50012);function d(e){return function(e){return i.Children.map(e,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function h(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function c(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=h(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[u,p]=g({queryString:a,groupId:n}),[d,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,s.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=u??d;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),c(e)}),[p,c,r]),tabValues:r}}var k=a(72389);const f="tabList__CuJ",N="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),h=e=>{const t=e.currentTarget,a=s.indexOf(t),n=p[a].value;n!==o&&(d(t),u(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}null==(t=a)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:h},l,{className:(0,r.Z)("tabs__item",N,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=c(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",f)},i.createElement(v,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return i.createElement(b,(0,n.Z)({key:String(t)},e))}}}]);