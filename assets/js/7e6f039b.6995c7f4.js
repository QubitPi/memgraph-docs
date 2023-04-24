"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"c-sharp",title:"C# quick start",sidebar_label:"C#"},i=void 0,s={unversionedId:"connect-to-memgraph/drivers/c-sharp",id:"version-2.6.0/connect-to-memgraph/drivers/c-sharp",title:"C# quick start",description:"At the end of this guide, you will have created a simple . NET console `Hello,",source:"@site/memgraph_versioned_docs/version-2.6.0/connect-to-memgraph/drivers/c-sharp.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/c-sharp",permalink:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers/c-sharp",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.6.0/connect-to-memgraph/drivers/c-sharp.md",tags:[],version:"2.6.0",frontMatter:{id:"c-sharp",title:"C# quick start",sidebar_label:"C#"},sidebar:"memgraph",previous:{title:"Drivers overview",permalink:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers"},next:{title:"Go",permalink:"/memgraph-docs/memgraph/2.6.0/connect-to-memgraph/drivers/go"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Driver",id:"driver",level:2},{value:"Basic Setup",id:"basic-setup",level:2},{value:"Alternative Setup",id:"alternative-setup",level:2},{value:"Where to next?",id:"where-to-next",level:2}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the end of this guide, you will have created a simple . NET console ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello,\nWorld!"))," program that connects to the Memgraph database and executes simple\nqueries."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"For this guide you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,a.kt)("a",{parentName:"li",href:"/memgraph-docs/memgraph/2.6.0/installation"},"Installation guide"),". ",(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"  In order for the Neo4j driver to work, you need ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"modify configuration\nsetting"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"--bolt-server-name-for-init"),". When running Memgraph, set\n",(0,a.kt)("inlineCode",{parentName:"p"},"--bolt-server-name-for-init=Neo4j/5.2.0"),". If you use other version of Neo4j\ndriver, make sure to put the appropriate version number."))),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model.")),(0,a.kt)("h2",{id:"driver"},"Driver"),(0,a.kt)("p",null,"Please note that the code samples in this guide utilize the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Neo4j.Driver.Simple")," package which implements a blocking interface around the\n'main' driver. It should be used as a tool for getting started quickly. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"Neo4j.Driver")," package contains the official and complete driver for real-world\nprojects. The driver documentation can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neo4j/neo4j-dotnet-driver"},"Neo4j . NET\nDriver"),"."),(0,a.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,a.kt)("p",null,"We'll be using Visual Studio 2022 on Windows 10 to connect a simple . NET\nconsole application to a running Memgraph instance. If you're using a different\nIDE, the steps might be slightly different, but the code is either the same or\nvery similar.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Open ",(0,a.kt)("strong",{parentName:"p"},"Visual Studio")," and create a new project.",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"2.")," Find and\nselect the ",(0,a.kt)("strong",{parentName:"p"},"Console App (. NET Core)")," template by using the search box.",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"3.")," Name your project ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"MemgraphApp")),", choose an appropriate location for\nit, and click ",(0,a.kt)("strong",{parentName:"p"},"Create"),".",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"4.")," Select the ",(0,a.kt)("strong",{parentName:"p"},"Tools > Manage NuGet\nPackages")," menu command.",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"5.")," Once the window opens, search for the\n",(0,a.kt)("strong",{parentName:"p"},"Neo4j.Driver.Simple"),".",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"6.")," Select the appropriate driver and click ",(0,a.kt)("strong",{parentName:"p"},"Add\npackage"),"."),(0,a.kt)("p",null,"Now, you should have the newest version of the driver installed and can proceed\nto copy the following code into the ",(0,a.kt)("strong",{parentName:"p"},"Program.cs")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using Neo4j.Driver;\n\nnamespace MemgraphApp\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            string message = "Hello, World!";\n\n            using var _driver = GraphDatabase.Driver("bolt://localhost:7687", AuthTokens.None);\n            using var session = _driver.Session();\n\n            var greeting = session.ExecuteWrite(tx =>\n            {\n                var result = tx.Run("CREATE (n:FirstNode) " +\n                                    "SET n.message = $message " +\n                                    "RETURN \'Node \'  + id(n) + \': \' + n.message",\n                    new { message });\n                return result.Single()[0].As<string>();\n            });\n            Console.WriteLine(greeting);\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Once you run the program, you should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,a.kt)("h2",{id:"alternative-setup"},"Alternative Setup"),(0,a.kt)("p",null,"If you want to try out more complex operations, feel free to use the refactored\ncode below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using Neo4j.Driver;\n\nnamespace MemgraphApp\n{\n    public class Program : IDisposable\n    {\n        private readonly IDriver _driver;\n\n        public Program(string uri, string user, string password)\n        {\n            _driver = GraphDatabase.Driver(uri, AuthTokens.Basic(user, password));\n        }\n\n        public void PrintGreeting(string message)\n        {\n            using (var session = _driver.Session())\n            {\n                var greeting = session.ExecuteWrite(tx =>\n                {\n                    var result = tx.Run("CREATE (n:FirstNode) " +\n                                        "SET n.message = $message " +\n                                        "RETURN \'Node \'  + id(n) + \': \' + n.message",\n                        new { message });\n                    return result.Single()[0].As<string>();\n                });\n                Console.WriteLine(greeting);\n            }\n        }\n\n        public void Dispose()\n        {\n            _driver?.Dispose();\n        }\n\n        public static void Main()\n        {\n            using (var greeter = new Program("bolt://localhost:7687", "", ""))\n            {\n                greeter.PrintGreeting("Hello, World!");\n            }\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.6.0/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.6.0/how-to-guides"},"How-to guides"))," section to get an overview\nof all the functionalities Memgraph offers."))}m.isMDXComponent=!0}}]);