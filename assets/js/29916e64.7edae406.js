"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70591],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>u});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),m=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=m(e.components);return r.createElement(s.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=m(t),u=n,g=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return t?r.createElement(g,i(i({ref:a},l),{},{components:t})):r.createElement(g,i({ref:a},l))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30935:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=t(87462),n=(t(67294),t(3905));const o={id:"getting-started",title:"Getting started with Memgraph",sidebar_label:"Getting started",slug:"/"},i=void 0,p={unversionedId:"getting-started",id:"version-2.6.0/getting-started",title:"Getting started with Memgraph",description:"Memgraph is an open source graph database built for teams who expect highly",source:"@site/memgraph_versioned_docs/version-2.6.0/getting-started.md",sourceDirName:".",slug:"/",permalink:"/memgraph-docs/memgraph/2.6.0/",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.6.0/getting-started.md",tags:[],version:"2.6.0",frontMatter:{id:"getting-started",title:"Getting started with Memgraph",sidebar_label:"Getting started",slug:"/"},sidebar:"memgraph",next:{title:"Install Memgraph overview",permalink:"/memgraph-docs/memgraph/2.6.0/installation"}},s={},m=[{value:"Quick start",id:"quick-start",level:2},{value:"1. Download and install Memgraph or run it in Cloud",id:"1-download-and-install-memgraph-or-run-it-in-cloud",level:3},{value:"2. Connect to Memgraph",id:"2-connect-to-memgraph",level:3},{value:"3. Import data",id:"3-import-data",level:3},{value:"What to do next?",id:"what-to-do-next",level:2},{value:"Dive into learning",id:"dive-into-learning",level:3},{value:"Memgraph Playground",id:"memgraph-playground",level:4},{value:"Tutorials and How-to guides",id:"tutorials-and-how-to-guides",level:4},{value:"Email courses",id:"email-courses",level:4},{value:"Video courses",id:"video-courses",level:4},{value:"Run an example streaming application",id:"run-an-example-streaming-application",level:4},{value:"Look under the hood",id:"look-under-the-hood",level:3},{value:"Power up with MAGE",id:"power-up-with-mage",level:3},{value:"Browse through the Changelog",id:"browse-through-the-changelog",level:3}],l={toc:m};function h(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Memgraph is an open source graph database built for teams who expect highly\nperformant, advanced analytical insights - as compatible with your current\ninfrastructure as Neo4j (but up to 120x faster). Memgraph is powered by an\nin-memory graph database built to handle real-time use cases at enterprise\nscale. Memgraph supports strongly-consistent ACID transactions and uses the\nstandardized Cypher query language for structuring, manipulating, and exploring\ndata."),(0,n.kt)("p",null,"If you're interested in trying out Memgraph from the comfort of your browser,\nyou can run an instance on ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-cloud"},"Memgraph Cloud")," and\nexplore Memgraph during the 2-week trial period or you can play around with\ndatasets and queries on ",(0,n.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground"),"."),(0,n.kt)("p",null,"Are you eager to start working with the real thing? Read on!"),(0,n.kt)("h2",{id:"quick-start"},"Quick start"),(0,n.kt)("p",null,"Follow these three steps, and you will have Memgraph as a full-running graph\napplication platform in no time at all. Here is what you need to do:"),(0,n.kt)("h3",{id:"1-download-and-install-memgraph-or-run-it-in-cloud"},"1. Download and install Memgraph or run it in Cloud"),(0,n.kt)("p",null,"Start your journey through the world of graph analytics by ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/installation"},"downloading and\ninstalling")," Memgraph. You can install Memgraph using\nDocker on Windows and macOS, or natively on Linux and WSL."),(0,n.kt)("p",null,"For a quick start, register at ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.memgraph.com/"},"Memgraph Cloud")," and\ncreate a project in few easy steps!"),(0,n.kt)("h3",{id:"2-connect-to-memgraph"},"2. Connect to Memgraph"),(0,n.kt)("p",null,"Once your Memgraph instance is up and running, you are ready to ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph"},"connect to\nMemgraph"),". If you are a command line fan, you\ncan query using ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/mgconsole"},"mgconsole"),". If you prefer to\nquery using a visual interface, go ahead and use ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-lab"},"Memgraph Lab"),".\nYou can also connect to Memgraph using\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers"},"drivers")," for your favorite\nprogramming language (as long as your favorite programming language is either\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers/python"},"Python"),",\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers/rust"},"Rust"),",\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers/c-sharp"},"C#"),",\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers/java"},"Java"),",\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers/go"},"Go"),",\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers/javascript"},"JavaScript")," or\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers/php"},"PHP"),"). The choice is yours!"),(0,n.kt)("h3",{id:"3-import-data"},"3. Import data"),(0,n.kt)("p",null,"Now it's time to ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/import-data"},"import your data")," into Memgraph and\nyou can use different sources. Memgraph supports importing ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/import-data/load-csv-clause"},"CSV\nfiles"),", establishing ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/import-data/data-streams/overview"},"connections to data\nstreams")," with Kafka, Pulsar and Redpanda, as\nwell as migrating data from SQL databases like\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/import-data/migrate/postgresql"},"PostgreSQL")," and\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/import-data/migrate/mysql"},"MySQL"),"."),(0,n.kt)("h2",{id:"what-to-do-next"},"What to do next?"),(0,n.kt)("p",null,"Now that your data is safe and sound within Memgraph, it's time to discover all\nthe possibilities Memgraph offers."),(0,n.kt)("h3",{id:"dive-into-learning"},"Dive into learning"),(0,n.kt)("h4",{id:"memgraph-playground"},"Memgraph Playground"),(0,n.kt)("p",null,"You can start your learning on ",(0,n.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground")," where guided lessons will help you\nbecome familiar with graph databases and Cypher queries. Lessons vary in\ndifficulty and datasets, so feel free to choose the topic that will keep you\nextra motivated. For example, you can start with ",(0,n.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/dataset/ted-talks"},"TED-talks\nlessons")," that use real-world\ndata related to TED talks providing you with tips and tricks that will help you\nexplore your own datasets."),(0,n.kt)("h4",{id:"tutorials-and-how-to-guides"},"Tutorials and How-to guides"),(0,n.kt)("p",null,"All the datasets and most of the queries used in the guided lessons can be also\nexplored here, in the ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/tutorials"},"Tutorials")," section. If you are\ninterested in using a particular Memgraph feature or you are stuck solving a\ntricky problem, try to find the solution in the ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/how-to-guides"},"How-to\nguides"),". Even more tutorials dealing with specific\nissues are available on our ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/category/tutorials"},"Blog"),"."),(0,n.kt)("h4",{id:"email-courses"},"Email courses"),(0,n.kt)("p",null,"We have created two free email courses for you. The first one covers ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/learn-cypher-query-language"},"Cypher\nquery language"),". By the end of\nthe ten days, you'll have learned everything you need to start with Cypher and\ngraph database. The second one is a ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/learn-graph-modeling"},"Graph modeling\ncourse"),". After ten days of this\ncourse, you will know how to model graphs."),(0,n.kt)("h4",{id:"video-courses"},"Video courses"),(0,n.kt)("p",null,"For those of you who are more visual and auditory learners, you can find the\nbest materials related to graphs and graphs analytics in our ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCZ3HOJvHGxtQ_JHxOselBYg/playlists"},"list of\nrecommended\ncontent"),",\nmost of which is free."),(0,n.kt)("h4",{id:"run-an-example-streaming-application"},"Run an example streaming application"),(0,n.kt)("p",null,"We've built an example streaming application to get you started quickly. Pull\nthe code from our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub\nrepository")," and get started."),(0,n.kt)("h3",{id:"look-under-the-hood"},"Look under the hood"),(0,n.kt)("p",null,"If you want to know more about Memgraph and learn details of implemented\nfeatures, take a deep dive into our ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/reference-guide"},"Reference\nguide")," and look ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/under-the-hood"},"under Memgraph's\nhood"),"."),(0,n.kt)("h3",{id:"power-up-with-mage"},"Power up with MAGE"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/mage"},"Memgraph Advanced Graph Extensions (MAGE)")," is an open-source repository that\ncontains graph algorithms and modules in the form of query modules written by\nthe team behind Memgraph and its users. It aims to help you tackle the most\ninteresting and challenging graph analytics problems."),(0,n.kt)("h3",{id:"browse-through-the-changelog"},"Browse through the Changelog"),(0,n.kt)("p",null,"Want to know what's new in Memgraph? Take a look at ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.6.0/changelog"},"Changelog"),"\nto see a list of new features."))}h.isMDXComponent=!0}}]);