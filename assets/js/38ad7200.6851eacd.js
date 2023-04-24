"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),c=a,h=p["".concat(s,".").concat(c)]||p[c]||d[c]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={id:"social-network-analysis",title:"Social network analysis with NetworkX",sidebar_label:"Social network analysis with NetworkX"},i=void 0,l={unversionedId:"tutorials/social-network-analysis",id:"version-2.7.0/tutorials/social-network-analysis",title:"Social network analysis with NetworkX",description:"Introduction",source:"@site/memgraph_versioned_docs/version-2.7.0/tutorials/social-network-analysis.md",sourceDirName:"tutorials",slug:"/tutorials/social-network-analysis",permalink:"/memgraph-docs/memgraph/tutorials/social-network-analysis",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.7.0/tutorials/social-network-analysis.md",tags:[],version:"2.7.0",frontMatter:{id:"social-network-analysis",title:"Social network analysis with NetworkX",sidebar_label:"Social network analysis with NetworkX"},sidebar:"memgraph",previous:{title:"Implement a custom query module in Python",permalink:"/memgraph-docs/memgraph/tutorials/implement-custom-query-module-in-python"},next:{title:"Exploring a music social network",permalink:"/memgraph-docs/memgraph/tutorials/understanding-music-with-modules"}},s={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Data model",id:"data-model",level:2},{value:"Import the dataset",id:"import-the-dataset",level:2},{value:"Use existing NetworkX algorithms",id:"use-existing-networkx-algorithms",level:2},{value:"Betweenness centrality",id:"betweenness-centrality",level:3},{value:"Link prediction",id:"link-prediction",level:3},{value:"Add new NetworkX algorithms as query modules",id:"add-new-networkx-algorithms-as-query-modules",level:2},{value:"Community detection algorithm",id:"community-detection-algorithm",level:3},{value:"Call the query module",id:"call-the-query-module",level:3},{value:"Further reading",id:"further-reading",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this tutorial, we will show you how to perform a simple network analysis with\nthe NetworkX library and data stored in Memgraph. You will also acquire a basic\nunderstanding of ",(0,a.kt)("strong",{parentName:"p"},"query modules"),", an easy method for extending the query\nlanguage with user-written procedures."),(0,a.kt)("p",null,"To get started, sign up to ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/cloud"},"Memgraph Cloud"),", create\na new instance and connect to it using in-browser Memgraph Lab. If you require\nhelp, check out the ",(0,a.kt)("a",{parentName:"p",href:"/memgraph-cloud"},"documentation on Memgraph Cloud"),". "),(0,a.kt)("p",null,"You can also install Memgraph using the ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image by following\nthe ",(0,a.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/installation"},"installment instructions")," for your OS. Once\nMemgraph is up and running, connect to it using ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Lab"),", a visual user\ninterface that you can also use from your browser at\n",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,a.kt)("inlineCode",{parentName:"a"},"http://localhost:3000"))," or ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"download as an\napplication"),"."),(0,a.kt)("h2",{id:"data-model"},"Data model"),(0,a.kt)("p",null,"We are going to use the Karate Club graph, a network of friendships between 34\nmembers of a karate club at a US university, as described by Wayne Zachary in\n1977. It is a very popular data set in social network analysis and is very often\nreferenced in such tutorials. The nodes in the graph represent the members while\nthe relationships between them are of type ",(0,a.kt)("inlineCode",{parentName:"p"},"FRIENDS_WITH"),". You can differentiate\nthe nodes by using their unique ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property."),(0,a.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/karate_club.png",alt:"Karate club",style:{height:400}}),(0,a.kt)("h2",{id:"import-the-dataset"},"Import the dataset"),(0,a.kt)("p",null,"To import the dataset, open Memgraph Lab and navigate to the ",(0,a.kt)("em",{parentName:"p"},"Datasets")," tab in\nthe sidebar. From there, load the ",(0,a.kt)("inlineCode",{parentName:"p"},"Karate club friendship network")," dataset, wait\nfor the import to finish, move to the ",(0,a.kt)("em",{parentName:"p"},"Query")," tab and continue with the\ntutorial."),(0,a.kt)("h2",{id:"use-existing-networkx-algorithms"},"Use existing NetworkX algorithms"),(0,a.kt)("p",null,"Execute the following command to get all the relationships inside our network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (s)-[r]-(t)\nRETURN s, r, t;\n")),(0,a.kt)("p",null,"Now we have a better overview of what we are dealing with, so it\u2019s time to get\nsome useful information about the network."),(0,a.kt)("p",null,"To analyze the network we will use the built-in procedure ",(0,a.kt)("inlineCode",{parentName:"p"},"analyze()")," from the\n",(0,a.kt)("inlineCode",{parentName:"p"},"graph_analyzer")," query module. This module utilizes the NetworkX library to\nretrieve graph information. Run the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL graph_analyzer.analyze() YIELD *;\n")),(0,a.kt)("p",null,"You will get details about the graph, such as the number of nodes, edges,\nbridges and many more."),(0,a.kt)("h3",{id:"betweenness-centrality"},"Betweenness centrality"),(0,a.kt)("p",null,"Now let's try to find the betweenness centrality of a node, i.e. the number of\ntimes a node acts as a bridge along the shortest path between two other nodes.\nRun the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.betweenness_centrality() YIELD *;\n")),(0,a.kt)("p",null,"The procedure ",(0,a.kt)("inlineCode",{parentName:"p"},"betweenness_centrality()")," is one of over 70 algorithms available\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"nxalg")," module."),(0,a.kt)("p",null,"The result should be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nocopy"},'+--------------+--------------+\n| betweenness  | node         |\n+--------------+--------------+\n| 0            | ({id: "0"})  |\n| 0.000473485  | ({id: "1"})  |\n| 0.0083649    | ({id: "2"})  |\n| 0.00189394   | ({id: "3"})  |\n| 0            | ({id: "4"})  |\n| 0.000473485  | ({id: "5"})  |\n| ...          | ...          |\n')),(0,a.kt)("h3",{id:"link-prediction"},"Link prediction"),(0,a.kt)("p",null,"A very common problem in network analysis is link prediction. The algorithm\npredicts which new interactions among the network members are likely to occur in\nthe near future. One way of predicting these links is by measuring the\n\u201cproximity\u201d of nodes in a network. This can be done by using the Jaccard\ncoefficient. Let's try running the algorithm on a node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," 13 and\nordering the results descending by the value of the coefficient:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.jaccard_coefficient()\nYIELD *\nWITH  u, v, coef\nWHERE u.id = '13'\nRETURN u, v, coef\nORDER BY coef DESC;\n")),(0,a.kt)("p",null,"The results are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nocopy"},'+--------------+--------------+--------------+\n| u            | v            | coef         |\n+--------------+--------------+--------------+\n| ({id: "13"}) | ({id: "19"}) | 0.6          |\n| ({id: "13"}) | ({id: "17"}) | 0.4          |\n| ({id: "13"}) | ({id: "21"}) | 0.4          |\n| ({id: "13"}) | ({id: "28"}) | 0.333333     |\n| ({id: "13"}) | ({id: "30"}) | 0.285714     |\n| ({id: "13"}) | ({id: "27"}) | 0.285714     |\n| ({id: "13"}) | ({id: "31"}) | 0.222222     |\n| ({id: "13"}) | ({id: "15"}) | 0.166667     |\n| ({id: "13"}) | ({id: "14"}) | 0.166667     |\n| ({id: "13"}) | ({id: "18"}) | 0.166667     |\n| ({id: "13"}) | ({id: "20"}) | 0.166667     |\n| ({id: "13"}) | ({id: "22"}) | 0.166667     |\n| ({id: "13"}) | ({id: "26"}) | 0.166667     |\n| ({id: "13"}) | ({id: "32"}) | 0.133333     |\n| ({id: "13"}) | ({id: "29"}) | 0.125        |\n| ({id: "13"}) | ({id: "23"}) | 0.111111     |\n| ({id: "13"}) | ({id: "25"}) | 0            |\n| ({id: "13"}) | ({id: "24"}) | 0            |\n| ({id: "13"}) | ({id: "16"}) | 0            |\n+--------------+--------------+--------------+\n')),(0,a.kt)("h2",{id:"add-new-networkx-algorithms-as-query-modules"},"Add new NetworkX algorithms as query modules"),(0,a.kt)("p",null,"Memgraph comes with over 70 NetworkX algorithms, but if the algorithm you\nrequire is missing, you can add it yourself as a ",(0,a.kt)("strong",{parentName:"p"},"query module"),"."),(0,a.kt)("p",null,"Let's create a custom query module!"),(0,a.kt)("h3",{id:"community-detection-algorithm"},"Community detection algorithm"),(0,a.kt)("p",null,"Detecting communities in a network is a very common problem. Therefore, we need\ncommunity detection algorithms that can partition the network into multiple\ncommunities. Let's create our own module that accomplishes this task."),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("strong",{parentName:"p"},"Query Modules")," section in Memgraph Lab and click on the ",(0,a.kt)("em",{parentName:"p"},"+ New\nModule")," button. Give it a name, such as ",(0,a.kt)("em",{parentName:"p"},"communities")," and ",(0,a.kt)("em",{parentName:"p"},"Create")," it. A new\nquery module will be created with example procedures. Feel free to erase them\nand copy the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\nimport networkx as nx\nfrom networkx.algorithms import community\nfrom mgp_networkx import MemgraphDiGraph\n\n\n@mgp.read_proc\ndef detect(\n    ctx: mgp.ProcCtx\n    ) -> mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]]):\n\n    networkxGraph = nx.DiGraph(MemgraphDiGraph(ctx=ctx))\n    communities_generator = community.girvan_newman(networkxGraph)\n\n    return mgp.Record(communities=[\n        list(s) for s in next(communities_generator)])\n")),(0,a.kt)("p",null,"Click ",(0,a.kt)("em",{parentName:"p"},"Save")," and you should be able to see the procedure and its signature as\n",(0,a.kt)("em",{parentName:"p"},"Detected procedures & transformations"),". This query module with the procedure\n",(0,a.kt)("inlineCode",{parentName:"p"},"detect()")," utilizes the Girvan\u2013Newman method to find communities in a graph. "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Save and close")," the window then move to the ",(0,a.kt)("em",{parentName:"p"},"Query Execution")," section to use the\nprocedure. "),(0,a.kt)("h3",{id:"call-the-query-module"},"Call the query module"),(0,a.kt)("p",null,"Let's call the custom query module with Cypher:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL communities.detect()\nYIELD communities\nUNWIND communities AS community\nRETURN community;\n")),(0,a.kt)("p",null,"The resulting communities are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nocopy"},'+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| community                                                                                                                                                                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [({id: "0"}), ({id: "1"}), ({id: "3"}), ({id: "4"}), ({id: "5"}), ({id: "6"}), ({id: "7"}), ({id: "10"}), ({id: "11"}), ({id: "12"}), ({id: "13"}), ({id: "16"}), ({id: "17"}), ({id: "19"}), ({id: "21"})]                                                             |\n| [({id: "2"}), ({id: "8"}), ({id: "9"}), ({id: "14"}), ({id: "15"}), ({id: "18"}), ({id: "20"}), ({id: "22"}), ({id: "23"}), ({id: "24"}), ({id: "25"}), ({id: "26"}), ({id: "27"}), ({id: "28"}), ({id: "29"}), ({id: "30"}), ({id: "31"}), ({id: "32"}), ({id: "33"})] |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')),(0,a.kt)("h2",{id:"further-reading"},"Further reading"),(0,a.kt)("p",null,"To find out more about query modules, take a look at our guide on\nhow to create your own: ",(0,a.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example"},"Implement custom query\nmodules"),". You can also visit our ",(0,a.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/how-to-guides/networkx"},"NetworkX how-to guide")," to\nlearn how to utilize the NetworkX library."),(0,a.kt)("p",null,"If you want to learn more about how to use Memgraph with NetworkX, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=docs%2Btutorialsocialnetwork&utm_content=resources"},(0,a.kt)("strong",{parentName:"a"},"Memgraph for NetworkX developers resources")),"."))}d.isMDXComponent=!0}}]);