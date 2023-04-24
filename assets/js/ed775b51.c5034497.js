"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"rust",title:"Rust quick start",sidebar_label:"Rust"},i=void 0,l={unversionedId:"connect-to-memgraph/drivers/rust",id:"version-2.5.1/connect-to-memgraph/drivers/rust",title:"Rust quick start",description:"At the end of this guide, you will have created a simple Rust Hello, World! program that connects to the Memgraph database and executes simple",source:"@site/memgraph_versioned_docs/version-2.5.1/connect-to-memgraph/drivers/rust.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/rust",permalink:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/rust",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.1/connect-to-memgraph/drivers/rust.md",tags:[],version:"2.5.1",frontMatter:{id:"rust",title:"Rust quick start",sidebar_label:"Rust"},sidebar:"memgraph",previous:{title:"Python",permalink:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/python"},next:{title:"C#",permalink:"/memgraph-docs/memgraph/2.5.1/connect-to-memgraph/drivers/c-sharp"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic setup",id:"basic-setup",level:2},{value:"Where to next?",id:"where-to-next",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the end of this guide, you will have created a simple Rust ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple\nqueries."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow this guide, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,a.kt)("a",{parentName:"li",href:"/memgraph-docs/memgraph/2.5.1/installation"},"Installation guide"),"."),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker")," installed and running. Instructions on how to setup Docker can be\nfound on the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),"."),(0,a.kt)("li",{parentName:"ul"},"A locally installed ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/memgraph/rsmgclient"},(0,a.kt)("strong",{parentName:"a"},"rsmgclient\ndriver"))," if you are not using Docker\nto build the program.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," We recommend using Docker because it simplifies installing the driver\ndependencies. If you don't wish to use Docker, you will need to install the\n",(0,a.kt)("strong",{parentName:"p"},"rsmgclient driver")," locally.")),(0,a.kt)("h2",{id:"basic-setup"},"Basic setup"),(0,a.kt)("p",null,"We'll use a ",(0,a.kt)("strong",{parentName:"p"},"Dockerized Rust program")," to demonstrate how to connect to a\nrunning Memgraph database instance. If you won't use Docker, the steps\nmight be slightly different, but the code is either the same or very\nsimilar.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Create a new Rust project with the name ",(0,a.kt)("strong",{parentName:"p"},"memgraph_rust")," by running the\nfollowing command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo new memgraph_rust --bin\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Add the following line to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file under the line\n",(0,a.kt)("inlineCode",{parentName:"p"},"[dependencies]")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'rsmgclient = "1.0.0"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," To create the actual program, add the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main.rs"),"\nfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use rsmgclient::{ConnectParams, Connection, SSLMode};\n\nfn main(){\n    // Parameters for connecting to database.\n    let connect_params = ConnectParams {\n        host: Some(String::from("172.17.0.2")),\n        sslmode: SSLMode::Disable,\n        ..Default::default()\n    };\n\n    // Make a connection to the database.\n    let mut connection = match Connection::connect(&connect_params) {\n        Ok(c) => c,\n        Err(err) => panic!("{}", err)\n    };\n\n    // Execute a query.\n    let query = "CREATE (u:User {name: \'Alice\'})-[:Likes]->(m:Software {name: \'Memgraph\'}) RETURN u, m";\n    match connection.execute(query, None) {\n        Ok(columns) => println!("Columns: {}", columns.join(", ")),\n        Err(err) => panic!("{}", err)\n    };\n\n    // Fetch all query results.\n    match connection.fetchall() {\n        Ok(records) => {\n            for value in &records[0].values {\n                println!("{}", value);\n            }\n        },\n        Err(err) => panic!("{}", err)\n    };\n\n    // Commit any pending transaction to the database.\n    match connection.commit() {\n        Ok(()) => {},\n        Err(err) => panic!("{}", err)\n    };\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.")," Create a new file in the project root directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/memgraph_rust")," and name\nit ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," . Add the following code to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# Set base image (host OS)\nFROM rust:1.56\n\n# Install CMake\nRUN apt-get update && \\\n  apt-get --yes install cmake\n\n# Install mgclient\nRUN apt-get install -y git cmake make gcc g++ libssl-dev clang && \\\n  git clone https://github.com/memgraph/mgclient.git /mgclient && \\\n  cd mgclient && \\\n  git checkout 5ae69ea4774e9b525a2be0c9fc25fb83490f13bb && \\\n  mkdir build && \\\n  cd build && \\\n  cmake .. && \\\n  make && \\\n  make install\n\n# Set the working directory in the container\nWORKDIR /code\n\n# Copy the dependencies file to the working directory\nCOPY Cargo.toml .\n\n# Copy the content of the local src directory to the working directory\nRUN mkdir src\nCOPY src/ ./src\n\n# Generate binary using the Rust compiler\nRUN cargo build\n\n# Command to run on container start\nCMD [ "cargo", "run" ]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.")," Don't forget to change the host address in your code.",(0,a.kt)("br",null)," Find the\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CONTAINER_ID"))," with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")," and use it in the following command to\nretrieve the address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER_ID\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"6.")," To run the application, first, you need to create a Docker image with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t memgraph_rust .\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"7.")," Now, you can start the application with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run memgraph_rust\n")),(0,a.kt)("p",null,"You should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Columns: u, m\n(:User {'name': 'Alice'})\n(:Software {'name': 'Memgraph'})\n")),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.1/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph-docs/memgraph/2.5.1/how-to-guides"},"How-to guides")),"\nsection to get an overview of all the functionalities Memgraph offers."))}m.isMDXComponent=!0}}]);