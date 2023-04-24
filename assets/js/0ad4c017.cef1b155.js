"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34690],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>u});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,c=h["".concat(l,".").concat(u)]||h[u]||m[u]||s;return n?t.createElement(c,o(o({ref:a},d),{},{components:n})):t.createElement(c,o({ref:a},d))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28438:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var t=n(87462),r=(n(67294),n(3905));const s={toc:[]};function o(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"You can also use this feature with Neo4j:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'db = Neo4j(host="localhost", port="7687", username="neo4j", password="test")\n'))))}o.isMDXComponent=!0;const i={title:"How to use object graph mapper",sidebar_label:"Use object graph mapper"},l=void 0,p={unversionedId:"how-to-guides/ogm",id:"how-to-guides/ogm",title:"How to use object graph mapper",description:"Through this guide, you will learn how to use GQLAlchemy object graph mapper to:",source:"@site/gqlalchemy/how-to-guides/ogm.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/ogm",permalink:"/memgraph-docs/gqlalchemy/how-to-guides/ogm",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/how-to-guides/ogm.md",tags:[],version:"current",frontMatter:{title:"How to use object graph mapper",sidebar_label:"Use object graph mapper"},sidebar:"gqlalchemy",previous:{title:"How-to guides overview",permalink:"/memgraph-docs/gqlalchemy/how-to-guides"},next:{title:"Use query builder",permalink:"/memgraph-docs/gqlalchemy/how-to-guides/query-builder"}},d={},m=[{value:"Map nodes and relationships",id:"map-nodes-and-relationships",level:2},{value:"Save nodes and relationships",id:"save-nodes-and-relationships",level:2},{value:"Load nodes and relationships",id:"load-nodes-and-relationships",level:2},{value:"Find node properties",id:"find-node-properties",level:3},{value:"Create relationship between existing nodes",id:"create-relationship-between-existing-nodes",level:3},{value:"Merge nodes and relationships",id:"merge-nodes-and-relationships",level:3},{value:"Create indexes",id:"create-indexes",level:2},{value:"Create constraints",id:"create-constraints",level:2},{value:"Full code example",id:"full-code-example",level:2}],h={toc:m};function u(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Through this guide, you will learn how to use GQLAlchemy object graph mapper to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#map-nodes-and-relationships"},(0,r.kt)("strong",{parentName:"a"},"Map nodes and relationships"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#save-nodes-and-relationships"},(0,r.kt)("strong",{parentName:"a"},"Save nodes and relationships"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#load-nodes-and-relationships"},(0,r.kt)("strong",{parentName:"a"},"Load nodes and relationships")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#find-node-properties"},(0,r.kt)("strong",{parentName:"a"},"Find node properties"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-relationship-between-existing-nodes"},(0,r.kt)("strong",{parentName:"a"},"Create relationship between existing nodes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#merge-nodes-and-relationships"},(0,r.kt)("strong",{parentName:"a"},"Merge nodes and relationships"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-indexes"},(0,r.kt)("strong",{parentName:"a"},"Create indexes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-constraints"},(0,r.kt)("strong",{parentName:"a"},"Create constraints")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hopefully, this guide will teach you how to properly use GQLAlchemy object graph mapper. If you\nhave any more questions, join our community and ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To test the above features, you must ",(0,r.kt)("a",{parentName:"p",href:"/gqlalchemy/installation"},"install GQLAlchemy")," and have a running Memgraph instance. If you're unsure how to run Memgraph, check out the Memgraph ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/#quick-start"},"Quick start"),".")),(0,r.kt)("h2",{id:"map-nodes-and-relationships"},"Map nodes and relationships"),(0,r.kt)("p",null,"First, we need to import all the necessary classes from GQLAlchemy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from gqlalchemy import Memgraph, Node, Relationship\n")),(0,r.kt)("p",null,"After that, instantiate Memgraph and ",(0,r.kt)("strong",{parentName:"p"},"create classes representing nodes"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"db = Memgraph()\n\nclass User(Node):\n    id: str\n    username: str\n\nclass Streamer(User):\n    id: str\n    username: str\n    followers: int\n\nclass Language(Node):\n    name: str\n")),(0,r.kt)(o,{mdxType:"Neo4jOption"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Node")," is a Python class which maps to a graph object in Memgraph. ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Streamer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Language")," are classes which inherit from ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," and they map to a label in a graph database. Class ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," maps to a single ",(0,r.kt)("inlineCode",{parentName:"p"},":User")," label with properties ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),", class ",(0,r.kt)("inlineCode",{parentName:"p"},"Streamer")," maps to multiple labels ",(0,r.kt)("inlineCode",{parentName:"p"},":Streamer:User")," with properties ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"followers"),", and class Language maps to a single ",(0,r.kt)("inlineCode",{parentName:"p"},":Language")," label with ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property."),(0,r.kt)("p",null,"In a similar way, you can ",(0,r.kt)("strong",{parentName:"p"},"create relationship classes"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class ChatsWith(Relationship, type="CHATS_WITH"):\n    last_chatted: str\n\nclass Speaks(Relationship):\n    since: str\n')),(0,r.kt)("p",null,"The code above maps to a relationship of type ",(0,r.kt)("inlineCode",{parentName:"p"},"CHATS_WITH")," with the string property ",(0,r.kt)("inlineCode",{parentName:"p"},"last_chatted")," and to a relationship of type ",(0,r.kt)("inlineCode",{parentName:"p"},"SPEAKS")," with the string property since. There was no need to add type argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"Speaks")," class, since the label it maps to will automatically be set to uppercase class name in a graph database. "),(0,r.kt)("p",null,"If you want to ",(0,r.kt)("strong",{parentName:"p"},"create a node class without any properties"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class User(Node):\n    pass\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"relationships without any properties")," also use ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class ChatsWith(Relationship, type="CHATS_WITH"):\n    pass\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Objects are modeled using GQLAlchemy\u2019s Object Graph Mapper (OGM) which provides schema validation, so you can be sure that the data inside Memgraph is accurate. If you tried saving data that is not following the defined schema, you will get a ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationError"),". ")),(0,r.kt)("p",null,"To use the above classes, you need to ",(0,r.kt)("a",{parentName:"p",href:"#save-nodes-and-relationships"},"save")," or ",(0,r.kt)("a",{parentName:"p",href:"#load-nodes-and-relationships"},"load")," data first. "),(0,r.kt)("h2",{id:"save-nodes-and-relationships"},"Save nodes and relationships"),(0,r.kt)("p",null,"In order to save a node using the object graph mapper, first define node classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from gqlalchemy import Memgraph, Node, Relationship\n\ndb = Memgraph()\n\nclass User(Node):\n    id: str \n    username: str\n\nclass Language(Node):\n    name: str\n")),(0,r.kt)("p",null,"The above classes map to ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Language")," nodes in the database. ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," nodes have properties ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Language")," nodes have property ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),". "),(0,r.kt)(o,{mdxType:"Neo4jOption"}),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"create and save node objects")," use the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'john = User(id="1", username="John").save(db)\njane = Streamer(id="2", username="janedoe", followers=111).save(db)\nlanguage = Language(name="en").save(db)\n')),(0,r.kt)("p",null,"There is ",(0,r.kt)("strong",{parentName:"p"},"another way of creating and saving node objects"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'john = User(id="1", username="John")\ndb.save_node(john)\n\njane = Streamer(id="2", username="janedoe", followers=111)\ndb.save_node(jane)\n\nlanguage = Language(name="en")\ndb.save_node(language)\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"save()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"save_node()")," procedures will save nodes in Memgraph even if they already exist. This means that if you run the above code twice, you will have duplicate nodes in the database. To avoid that, ",(0,r.kt)("a",{parentName:"p",href:"#create-constraints"},"add constraints")," for properties or first ",(0,r.kt)("a",{parentName:"p",href:"#load-nodes-and-relationships"},"load")," the node from the database to check if it already exists.")),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"save relationships")," using the object graph mapper, first define relationship classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class ChatsWith(Relationship, type="CHATS_WITH"):\n    last_chatted: str\n\nclass Speaks(Relationship):\n    since: str\n')),(0,r.kt)("p",null,"The code above maps to a relationship of type ",(0,r.kt)("inlineCode",{parentName:"p"},"CHATS_WITH")," with the string property ",(0,r.kt)("inlineCode",{parentName:"p"},"last_chatted")," and to a relationship of type ",(0,r.kt)("inlineCode",{parentName:"p"},"SPEAKS")," with the string property since. There was no need to add type argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"Speaks")," class, since the label it maps to will automatically be set to uppercase class name in a graph database. "),(0,r.kt)("p",null,"To save relationships, create them with appropriate start and end nodes and then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"save()")," procedure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ChatsWith(\n    _start_node_id=john._id, _end_node_id=jane._id, last_chatted="2023-02-14"\n).save(db)\n\nSpeaks(_start_node_id=john._id, _end_node_id=language._id, since="2023-02-14").save(db)\n')),(0,r.kt)("p",null,"The property ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," is an ",(0,r.kt)("strong",{parentName:"p"},"internal Memgraph id")," - an id given to each node upon saving to the database. This means that you have to first load nodes from the database or save them to variables in order to create a relationship between them."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Objects are modeled using GQLAlchemy\u2019s Object Graph Mapper (OGM) which provides schema validation, so you can be sure that the data inside Memgraph is accurate. If you tried saving data that is not following the defined schema, you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationError"),". ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Another way of saving relationships")," is by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"save_relationship()")," procedure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'db.save_relationship(\n    ChatsWith(_start_node_id=john._id, _end_node_id=jane._id, last_chatted="2023-02-14")\n)\n\ndb.save_relationship(\n    Speaks(_start_node_id=user._id, _end_node_id=language._id, since="2023-02-14")\n)\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"save()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"save_relationship()")," procedures will save relationships in Memgraph even if they already exist. This means that if you run the above code twice, you will have duplicate relationships in the database. To avoid that, first ",(0,r.kt)("a",{parentName:"p",href:"#load-nodes-and-relationships"},"load")," the relationship from the database to check if it already exists.")),(0,r.kt)("h2",{id:"load-nodes-and-relationships"},"Load nodes and relationships"),(0,r.kt)("p",null,"Let's continue with the previously defined classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class User(Node):\n    id: str\n    username: str\n\n\nclass Streamer(User):\n    id: str\n    username: str\n    followers: int\n\n\nclass Language(Node):\n    name: str\n\n\nclass ChatsWith(Relationship, type="CHATS_WITH"):\n    last_chatted: str\n\n\nclass Speaks(Relationship, type="SPEAKS"):\n    since: str\n')),(0,r.kt)("p",null,"For this example, we will also use previously saved nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'jane = Streamer(id="2", username="janedoe", followers=111).save(db)\nlanguage = Language(name="en").save(db)\n')),(0,r.kt)("p",null,"There are many examples of when ",(0,r.kt)("strong",{parentName:"p"},"loading a node")," from the database may come in\nhandy, but let's cover the two most common. "),(0,r.kt)("h3",{id:"find-node-properties"},"Find node properties"),(0,r.kt)("p",null,"Suppose you just have the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the streamer and you want to know the\nstreamer's name. You have to load that node from the database to check its\n",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property. If you try running the following code: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'loaded_streamer = Streamer(id="2").load(db=db)\n')),(0,r.kt)("p",null,"you will get a ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationError"),". This happens because the schema you defined expects ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"followers")," properties for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Streamer")," instance. To avoid that, define Streamer class like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Streamer(User):\n    id: str\n    username: Optional[str]\n    followers: Optional[str]\n")),(0,r.kt)("p",null,"The above class definition is not ideal, since it is not enforcing schema as before. To do that, ",(0,r.kt)("a",{parentName:"p",href:"#create-constraints"},"add constraints"),"."),(0,r.kt)("p",null,"If you try loading the node again, the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'loaded_streamer = Streamer(id="2").load(db=db)\n')),(0,r.kt)("p",null,"will print out the username of the streamer whose ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," equals ",(0,r.kt)("inlineCode",{parentName:"p"},'"2"'),", that is, ",(0,r.kt)("inlineCode",{parentName:"p"},'"janedoe"'),". "),(0,r.kt)("h3",{id:"create-relationship-between-existing-nodes"},"Create relationship between existing nodes"),(0,r.kt)("p",null,"To create a new relationship of type ",(0,r.kt)("inlineCode",{parentName:"p"},"SPEAKS"),", between already saved streamer and language you need to first load those nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'loaded_streamer = Streamer(id="2").load(db=db)\nloaded_language = Language(name="en").load(db=db)\n')),(0,r.kt)("p",null,"The load() method returns one result above, since it matches unique database objects. When the matching object is not unique, the ",(0,r.kt)("inlineCode",{parentName:"p"},"load()")," method will return a list of matching results. "),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"create a relationship")," between ",(0,r.kt)("inlineCode",{parentName:"p"},"loaded_streamer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"loaded_language")," nodes run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'Speaks(\n    _start_node_id=loaded_streamer._id,\n    _end_node_id=loaded_language._id,\n    since="2023-02-15",\n).save(db)\n')),(0,r.kt)("p",null,"In the above example, the relationship will be created even if it existed before. To avoid that, check ",(0,r.kt)("a",{parentName:"p",href:"#merging-nodes-and-relationships"},"merging nodes and relationships section"),"."),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"load a relationship")," from the database based on its start and end node, first mark its property as optional:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Speaks(Relationship, type="SPEAKS"):\n    since: Optional[str]\n')),(0,r.kt)("p",null,"The above class definition is not ideal, since it is not enforcing schema as before. To do that, ",(0,r.kt)("a",{parentName:"p",href:"#create-constraints"},"add constraints"),"."),(0,r.kt)("p",null,"To load the relationship, run the following: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"loaded_speaks = Speaks(\n        _start_node_id=streamer._id,\n        _end_node_id=language._id\n    ).load(db)\n")),(0,r.kt)("p",null,"It's easy to get its ",(0,r.kt)("inlineCode",{parentName:"p"},"since")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(loaded_speaks.since)\n")),(0,r.kt)("p",null,"The output of the above print is ",(0,r.kt)("inlineCode",{parentName:"p"},"2023-02-15"),"."),(0,r.kt)("h3",{id:"merge-nodes-and-relationships"},"Merge nodes and relationships"),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"merge nodes"),", first try loading them from the database to see if they exist, and if not, save them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'try:\n    streamer = Streamer(id="3").load(db=db)\nexcept:\n    print("Creating new Streamer node in the database.")\n    streamer = Streamer(id="3", username="anne", followers=222).save(db=db)\n')),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"merge relationships")," first try loading them from the database to see if they exist, and if not, save them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'try:\n    speaks = Speaks(_start_node_id=streamer._id, _end_node_id=language._id).load(db)\nexcept:\n    print("Creating new Speaks relationship in the database.")\n    speaks = Speaks(\n        _start_node_id=streamer._id,\n        _end_node_id=language._id,\n        since="2023-02-20",\n    ).save(db)\n')),(0,r.kt)("h2",{id:"create-indexes"},"Create indexes"),(0,r.kt)("p",null,"To create indexes you need to do one additional import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from gqlalchemy import Field\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Field")," class originates from ",(0,r.kt)("inlineCode",{parentName:"p"},"pydantic"),", a Python library data validation and settings management. Here is the example of how ",(0,r.kt)("inlineCode",{parentName:"p"},"Field")," class helps in creating label and label-property indexes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class User(Node):\n    id: str = Field(index=True, db=db)\n    username: str\n\nclass Language(Node, index=True, db=db):\n    name: str\n")),(0,r.kt)("p",null,"The indexes will be set on class definition, before instantiation. This ensures that the index creation is run only once for each index type. To check which indexes were created, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(db.get_indexes())\n")),(0,r.kt)("p",null,"To learn more about indexes, head over to the ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/indexing"},"indexing reference guide"),"."),(0,r.kt)("h2",{id:"create-constraints"},"Create constraints"),(0,r.kt)("p",null,"Uniqueness constraint enforces that each ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"property_set")," pair is unique. Here is how you can ",(0,r.kt)("strong",{parentName:"p"},"enforce uniqueness constraint")," with GQLAlchemy's OGM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Language(Node):\n    name: str = Field(unique=True, db=db)\n")),(0,r.kt)("p",null,"The above is the same as running the Cypher query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Language) ASSERT n.name IS UNIQUE;\n")),(0,r.kt)("p",null,"Read more about it at ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/how-to-guides/constraints/uniqueness-constraint"},"uniqueness constraint how-to guide"),"."),(0,r.kt)("p",null,"Existence constraint enforces that each vertex that has a specific label also must have the specified property.  Here is how you can ",(0,r.kt)("strong",{parentName:"p"},"enforce existence constraint")," with GQLAlchemy's OGM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Streamer(User):\n    id: str\n    username: Optional[str] = Field(exists=True, db=db)\n    followers: Optional[str]\n")),(0,r.kt)("p",null,"The above is the same as running the Cypher query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Streamer) ASSERT EXISTS (n.username);\n")),(0,r.kt)("p",null,"Read more about it at ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/how-to-guides/constraints/existence-constraint"},"existence constraint how-to guide"),"."),(0,r.kt)("p",null,"To check which constraints have been created, run: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(db.get_constraints())\n")),(0,r.kt)("h2",{id:"full-code-example"},"Full code example"),(0,r.kt)("p",null,"The above mentioned examples can be merged into a working code example which you can run. Here is the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Memgraph, Node, Relationship, Field\nfrom typing import Optional\n\ndb = Memgraph()\n\nclass User(Node):\n    id: str = Field(index=True, db=db)\n    username: str = Field(exists=True, db=db)\n\nclass Streamer(User):\n    id: str\n    username: Optional[str] = Field(exists=True, db=db)\n    followers: Optional[str]\n\nclass Language(Node, index=True, db=db):\n    name: str = Field(unique=True, db=db)\n\nclass ChatsWith(Relationship, type="CHATS_WITH"):\n    last_chatted: str\n\nclass Speaks(Relationship, type="SPEAKS"):\n    since: Optional[str]\n\njohn = User(id="1", username="John").save(db)\njane = Streamer(id="2", username="janedoe", followers=111).save(db)\nlanguage = Language(name="en").save(db)\n\nChatsWith(\n    _start_node_id=john._id, _end_node_id=jane._id, last_chatted="2023-02-14"\n).save(db)\n\nSpeaks(_start_node_id=john._id, _end_node_id=language._id, since="2023-02-14").save(db)\n\nstreamer = Streamer(id="2").load(db=db)\nlanguage = Language(name="en").load(db=db)\n\nspeaks = Speaks(\n    _start_node_id=streamer._id,\n    _end_node_id=language._id,\n    since="2023-02-20",\n).save(db)\n\nspeaks = Speaks(_start_node_id=streamer._id, _end_node_id=language._id).load(db)\nprint(speaks.since)\n\ntry:\n    streamer = Streamer(id="3").load(db=db)\nexcept:\n    print("Creating new Streamer node in the database.")\n    streamer = Streamer(id="3", username="anne", followers=222).save(db=db)\n\ntry:\n    speaks = Speaks(_start_node_id=streamer._id, _end_node_id=language._id).load(db)\nexcept:\n    print("Creating new Speaks relationship in the database.")\n    speaks = Speaks(\n        _start_node_id=streamer._id,\n        _end_node_id=language._id,\n        since="2023-02-20",\n    ).save(db)\n\nprint(db.get_indexes())\nprint(db.get_constraints())\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hopefully, this guide has taught you how to properly use GQLAlchemy object graph mapper. If you\nhave any more questions, join our community and ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord"),".")))}u.isMDXComponent=!0}}]);