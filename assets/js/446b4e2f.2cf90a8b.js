"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(n),h=a,s=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(s,i(i({ref:t},u),{},{components:n})):r.createElement(s,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={id:"create-a-new-module-python",title:"How to create a query module in Python",sidebar_label:"Create a Python query module"},i=void 0,p={unversionedId:"how-to-guides/create-a-new-module-python",id:"how-to-guides/create-a-new-module-python",title:"How to create a query module in Python",description:"The Python API",source:"@site/mage/how-to-guides/create-a-new-module-python.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-a-new-module-python",permalink:"/memgraph-docs/mage/how-to-guides/create-a-new-module-python",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/how-to-guides/create-a-new-module-python.md",tags:[],version:"current",frontMatter:{id:"create-a-new-module-python",title:"How to create a query module in Python",sidebar_label:"Create a Python query module"},sidebar:"mage",previous:{title:"weakly_connected_components",permalink:"/memgraph-docs/mage/query-modules/cpp/weakly-connected-components"},next:{title:"Create a C++ query module",permalink:"/memgraph-docs/mage/how-to-guides/create-a-new-module-cpp"}},l={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Developing a module",id:"developing-a-module",level:2},{value:"Terminate procedure execution",id:"terminate-procedure-execution",level:3},{value:"Importing, querying and testing a module",id:"importing-querying-and-testing-a-module",level:2},{value:"Working with the mock API",id:"working-with-the-mock-api",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/query-modules/api/python-api"},"Python API"),"\nprovided by Memgraph lets you develop query modules. It is accompanied by the\n",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/reference-guide/query-modules/api/mock-python-api"},"mock API"),", which\nmakes it possible to develop and test query modules for Memgraph without having\nto run a Memgraph instance."),(0,a.kt)("p",null,"In this tutorial, we will learn how to develop a query module in\nPython on the example of the ",(0,a.kt)("strong",{parentName:"p"},"random walk algorithm"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"There are three options for installing and working with Memgraph MAGE:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Pulling the ",(0,a.kt)("inlineCode",{parentName:"strong"},"memgraph/memgraph-mage")," image"),": check the ",(0,a.kt)("inlineCode",{parentName:"li"},"Docker Hub"),(0,a.kt)("a",{parentName:"li",href:"/memgraph-docs/mage/installation/docker-hub"},"installation guide"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Building a Docker image from the MAGE repository"),": check the ",(0,a.kt)("inlineCode",{parentName:"li"},"Docker\nbuild")," ",(0,a.kt)("a",{parentName:"li",href:"/memgraph-docs/mage/installation/docker-build"},"installation guide"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Building MAGE from source"),": check the ",(0,a.kt)("inlineCode",{parentName:"li"},"Build from source on Linux"),(0,a.kt)("a",{parentName:"li",href:"/memgraph-docs/mage/installation/source"},"installation guide"),".")),(0,a.kt)("h2",{id:"developing-a-module"},"Developing a module"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These steps are the same for all MAGE installation options (",(0,a.kt)("em",{parentName:"p"},"Docker Hub"),",\n",(0,a.kt)("em",{parentName:"p"},"Docker build")," and ",(0,a.kt)("em",{parentName:"p"},"Build from source on Linux"),").")),(0,a.kt)("p",null,"Position yourself in the ",(0,a.kt)("strong",{parentName:"p"},"MAGE repository")," you cloned earlier. Specifically,\ngo in the ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," subdirectory and create a new file named ",(0,a.kt)("inlineCode",{parentName:"p"},"random_walk.py"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"mage\n\u2514\u2500\u2500 python\n    \u2514\u2500\u2500 random_walk.py\n\n")),(0,a.kt)("p",null,"For coding the query module, we\u2019ll use the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgp"},(0,a.kt)("inlineCode",{parentName:"a"},"mgp"))," package that has the Memgraph Python\nAPI including the key graph data structures:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgp/blob/main/mgp.py#L260"},(0,a.kt)("strong",{parentName:"a"},"Vertex"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgp/blob/main/mgp.py#L182"},(0,a.kt)("strong",{parentName:"a"},"Edge")),".\nTo install ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp"),", run ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install mgp"),"."),(0,a.kt)("p",null,"Here's the code for the random walk algorithm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import mgp\nimport random\n\n\n@mgp.read_proc\ndef get_path(\n    start: mgp.Vertex,\n    length: int = 10,\n) -> mgp.Record(path=mgp.Path):\n    """Generates a random path of length `length` or less starting\n    from the `start` vertex.\n\n    :param mgp.Vertex start: The starting node of the walk.\n    :param int length: The number of edges to traverse.\n    :return: Random path.\n    :rtype: mgp.Record(mgp.Path)\n    """\n    path = mgp.Path(start)\n    vertex = start\n    for _ in range(length):\n        try:\n            edge = random.choice(list(vertex.out_edges))\n            path.expand(edge)\n            vertex = edge.to_vertex\n        except IndexError:\n            break\n\n    return mgp.Record(path=path)\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"get_path")," is decorated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@mgp.read_proc")," decorator, which tells\nMemgraph it's a ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," procedure, meaning it won't make changes to the graph.\nThe path is created from the ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," node, and edges are appended to it\niteratively."),(0,a.kt)("h3",{id:"terminate-procedure-execution"},"Terminate procedure execution"),(0,a.kt)("p",null,"Just as the execution of a Cypher query can be terminated with ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/transactions"},(0,a.kt)("inlineCode",{parentName:"a"},'TERMINATE\nTRANSACTIONS\n"id";'))," query,\nthe execution of the procedure can as well, if it takes too long to yield a\nresponse or gets stuck in an infinite loop due to unpredicted input data."),(0,a.kt)("p",null,"Transaction ID is visible upon calling the SHOW TRANSACTIONS; query. "),(0,a.kt)("p",null,"In order to be able to terminate the procedure, it has to contain function\n",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.check_must_abort()")," which precedes crucial parts of the code, such as\n",(0,a.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"until")," loops, or similar points where the procedure might become\ncostly."),(0,a.kt)("p",null,"Consider the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n@mgp.read_proc\ndef long_query(ctx: mgp.ProcCtx) -> mgp.Record(my_id=int):\n    id = 1\n    try:\n        while True:\n            if ctx.check_must_abort():\n                break\n            id += 1\n    except mgp.AbortError:\n        return mgp.Record(my_id=id)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.AbortError:")," ensures that the correct message about termination is sent\nto the session where the procedure was originally run. "),(0,a.kt)("h2",{id:"importing-querying-and-testing-a-module"},"Importing, querying and testing a module"),(0,a.kt)("p",null,"Now in order to import, query and test a module, check out the ",(0,a.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-query-module"},"following\npage"),"."),(0,a.kt)("p",null,"Feel free to create an issue or open a pull request on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},"GitHub\nrepo")," to speed up the development.",(0,a.kt)("br",null),"\nAlso, don't forget to throw us a star on GitHub. \u2b50"),(0,a.kt)("h2",{id:"working-with-the-mock-api"},"Working with the mock API"),(0,a.kt)("p",null,"The\n",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/reference-guide/query-modules/api/mock-python-api"},"mock Python API"),"\nlets you develop and test query modules for Memgraph without having to run a\nMemgraph instance. As it\u2019s compatible with the Python API you can add modules\ndeveloped with it to Memgraph as-is, without having to refactor your code."),(0,a.kt)("p",null,"The documentation on importing the mock API and running query modules with it\nis available\n",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/reference-guide/query-modules/api/mock-python-api#using-the-mock-api"},"here"),",\naccompanied by examples."))}d.isMDXComponent=!0}}]);