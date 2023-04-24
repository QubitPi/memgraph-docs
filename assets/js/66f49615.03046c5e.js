"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57827],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),h=a,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||r;return t?i.createElement(m,l(l({ref:n},d),{},{components:t})):i.createElement(m,l({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const r={id:"reference-guide",title:"Graph Style Script reference guide",sidebar_label:"GSS reference guide"},l=void 0,o={unversionedId:"style-script/reference-guide",id:"style-script/reference-guide",title:"Graph Style Script reference guide",description:"The main building blocks of Graph Style Script (GSS) are expressions and",source:"@site/lab/style-script/reference-guide.md",sourceDirName:"style-script",slug:"/style-script/reference-guide",permalink:"/memgraph-docs/memgraph-lab/style-script/reference-guide",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/lab/style-script/reference-guide.md",tags:[],version:"current",frontMatter:{id:"reference-guide",title:"Graph Style Script reference guide",sidebar_label:"GSS reference guide"},sidebar:"lab",previous:{title:"Graph Style Script language",permalink:"/memgraph-docs/memgraph-lab/graph-style-script-language"},next:{title:"GSS colors",permalink:"/memgraph-docs/memgraph-lab/style-script/gss-colors"}},p={},s=[{value:"Expressions",id:"expressions",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>@NodeStyle</code>",id:"nodestyle",level:3},{value:"<code>@EdgeStyle</code>",id:"edgestyle",level:3},{value:"<code>@ViewStyle</code>",id:"viewstyle",level:3},{value:"<code>@ViewStyle.Map</code>",id:"viewstylemap",level:3},{value:"Built-in functions",id:"built-in-functions",level:2},{value:"Built-in colors",id:"built-in-colors",level:2},{value:"Built-in variables",id:"built-in-variables",level:2},{value:"File Structure",id:"file-structure",level:2}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The main building blocks of Graph Style Script (GSS) are expressions and\ndirectives. GSS files are a sequence of expressions and directives."),(0,a.kt)("h2",{id:"expressions"},"Expressions"),(0,a.kt)("p",null,"Expressions are used to combine values to create new values using functions. For\nexample, the expression:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Add(2, 5)\n  -> 7\n")),(0,a.kt)("p",null,"creates a new value 7 from values 2 and 5. There are a lot of functions built\ninto Graph Style Script so there are even more ways to combine values. There is\neven a function to create new functions."),(0,a.kt)("p",null,"When expressions are evaluated, values are created. There are several types of\nGraph Style Script values: ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Color"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Function"),"and ",(0,a.kt)("inlineCode",{parentName:"p"},"Null"),"."),(0,a.kt)("p",null,"An expression can be either literal expressions, name expressions or function\napplications. Literal expressions exist for ",(0,a.kt)("inlineCode",{parentName:"p"},"Color"),"s, ",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),"s and ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"s."),(0,a.kt)("p",null,"This is a literal expression for ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"s."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"Hello"\n  -> Hello\n')),(0,a.kt)("p",null,"It evaluates to the value ",(0,a.kt)("inlineCode",{parentName:"p"},'"Hello"')," of the type ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),". The newline character\nand double quotes can be escaped in strings using ","\\"," (backslash)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"In the end he said: \\"I am Iron Man!\\""\n  -> In the end he said: "I am Iron Man!"\n')),(0,a.kt)("p",null,"These are literal expressions for ",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),"s."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"123\n  -> 123\n3.14159\n  -> 3.14159\n")),(0,a.kt)("p",null,"Literal expressions for colors are hex strings starting with '#'. This is a\nliteral expression for the color red."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#ff0000\n  -> #ff0000\n")),(0,a.kt)("p",null,"Name expressions are names that can be evaluated if there are values bound to\nthem in the environment (lexical scope). Names can start with any of the lower\ncase or upper case letters of the English alphabet and apart from those can\ncontain digits and the following characters: -, ","_",". Names can be defined using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Define")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Define(superhero, "Iron Man")\nsuperhero\n  -> Iron Man\n')),(0,a.kt)("p",null,"In the previous example the value ",(0,a.kt)("inlineCode",{parentName:"p"},'"Iron Man"')," was bound to the name\n",(0,a.kt)("inlineCode",{parentName:"p"},"superhero"),". After that name expression ",(0,a.kt)("inlineCode",{parentName:"p"},"superhero")," evaluates the value ",(0,a.kt)("inlineCode",{parentName:"p"},'"Iron\nMan"')," to type ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,a.kt)("p",null,"There are many built-in names that are bound to useful values. Most used are\nboolean values which are bound to ",(0,a.kt)("inlineCode",{parentName:"p"},"True")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"False")," and null value which is\nbound to ",(0,a.kt)("inlineCode",{parentName:"p"},"Null"),". Also, all the CSS web colors are bound to their names."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dodgerblue\n  -> #1e90ff\nforestgreen\n  -> #228b22\n")),(0,a.kt)("p",null,"The third type of expressions are function application expressions. A function\ncan be applied to the list of expressions (arguments) in the following way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Concat("Agents", " ", "of", " ", "S.H.I.E.L.D.")\n  -> Agents of S.H.I.E.L.D.\n')),(0,a.kt)("p",null,"Here the function ",(0,a.kt)("inlineCode",{parentName:"p"},"Concat")," was applied to the list of string literal expressions\nto produce their concatenation. Any expression can be an argument."),(0,a.kt)("p",null,"Not all expressions have to be evaluated. For example, when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"If"),"\nfunction one argument will not be evaluated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Define(mood, "happy")\nDefine(name, "Happy Hogan")\nIf(Equals(mood, "happy"),\n   Format("{} is happy today.", name),\n   Format("{} is not happy today.", name))\n  -> Happy Hogan is happy today.\n')),(0,a.kt)("p",null,"In the previous example expression ",(0,a.kt)("inlineCode",{parentName:"p"},'Format("{} is not happy today", name)')," will\nnot be evaluated because its value is not needed."),(0,a.kt)("p",null,"Some other function will not evaluate their arguments because they are\ninterested in their names and not values. For example, when creating a new\nfunction argument names aren't evaluated, but are remembered to be later bound\nto the function arguments when the function is called."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Define(square, Function(x, Mul(x, x)))\nsquare(2)\n  -> 4\n")),(0,a.kt)("p",null,"In the previous example the name ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," isn't evaluated in the first line, and\nneither is the expression ",(0,a.kt)("inlineCode",{parentName:"p"},"Mul(x, x)"),". In the second line when the function\n",(0,a.kt)("inlineCode",{parentName:"p"},"square")," is called number 2 will be bound to the name ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and only then will\n",(0,a.kt)("inlineCode",{parentName:"p"},"Mul(x, x)")," be evaluated."),(0,a.kt)("h2",{id:"directives"},"Directives"),(0,a.kt)("p",null,"Directives are the second building block of style script. Directive names start\nwith '@'. The name is followed by the optional expression (filter) which is\nfollowed by an opening curly brace, directive body and a closing curly brace.\nThe directive body is a list of pairs of property names and expressions.\nProperty names and expressions are separated by a colon and after every\nexpression, a new line must follow. The directive structure is the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@<DirectiveName> <expression> {\n  <property-name-1>: <expression-1>\n  ...\n  ...\n  <property-name-n>: <expression-n>\n}\n")),(0,a.kt)("p",null,"Like in CSS, directives defined later override properties of the previous\ndirectives."),(0,a.kt)("p",null,"Graph Style Script currently has four directives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@NodeStyle")," - for defining the visual style of graph nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@EdgeStyle")," - for defining the visual style of graph relationships."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@ViewStyle")," - for defining the general graph style properties."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@ViewStyle.Map")," - for defining the graph style properties when map\nis in the background.")),(0,a.kt)("p",null,"An example of a directive is ",(0,a.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," directive which can be used to specify\nstyle properties of a graph node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@NodeStyle {\n  border-width: 2\n  color: #abcdef\n  label: "Hello, World!"\n}\n')),(0,a.kt)("h3",{id:"nodestyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"@NodeStyle")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," directive is used for defining style properties of a graph\nnode. It is possible to filter the nodes to which the directive applies by\nproviding an optional predicate after the directive name and before the opening\ncurly brace."),(0,a.kt)("p",null,"Before any expressions are evaluated (including the predicate) the name ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),"\nis bound to the graph node for which the directive is being evaluated. Graph\nnode is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary")," and has all information about the node (properties,\nlabels)."),(0,a.kt)("p",null,"Here is an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," directive that is applied to all graph\nnodes with the label superhero:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@NodeStyle HasLabel(node, vehicle) {\n  label: Format("{}, horsepower: {}",\n                Property(node, "model"),\n                Property(node, "horsepower"))\n}\n')),(0,a.kt)("p",null,"The predicate can be any expression that returns a value of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean"),". It\nshould depend on ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),", because if it doesn't, it will either be applied to all\nnodes or to no nodes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@NodeStyle And(HasProperty(node, "name"),\n               Equals(Property(node, "name"), "Tony Stark")) {\n  color: gold\n  shadow-color: red\n  label: "You know who I am"\n}\n')),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/gss-nodestyle-directive"},"GSS @NodeStyle directive\nproperties")," page to see\nall node styling possibilities."),(0,a.kt)("h3",{id:"edgestyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"@EdgeStyle")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@EdgeStyle")," directive is used for defining the style properties of a graph\nrelationship. Most things work like the ",(0,a.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," directive with one\nexception: the directive will bind the name ",(0,a.kt)("inlineCode",{parentName:"p"},"edge")," to the relationship for which\nthe directive is being evaluated (",(0,a.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," binds the name ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),")."),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/gss-edgestyle-directive"},"GSS @EdgeStyle directive\nproperties")," page to see\nall relationship styling possibilities."),(0,a.kt)("h3",{id:"viewstyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"@ViewStyle")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@ViewStyle")," directive is used for defining style properties of a general\ngraph view: link distance, view, physics, repel force, etc. It is also\npossible to use a predicate expression which acts as a filter to apply\nthe defined properties to the final directive output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@ViewStyle <predicate expression> {\n  <property-name-1>: <value expression-1>\n  ...\n  <property-name-n>: <value expression-n>\n}\n")),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@EdgeStyle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@ViewStyle")," has a built-in variable\n",(0,a.kt)("inlineCode",{parentName:"p"},"graph")," which can be used for directive filter or property assignment."),(0,a.kt)("p",null,"An example below shows a general directive style definition and a directive where\nstyle properties will only be applied if there are more than 10 nodes in the graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@ViewStyle {\n  collision-radius: 15\n  physics-enabled: True\n}\n\n@ViewStyle Greater(NodeCount(graph), 10) {\n  physics-enabled: False\n  repel-force: -300\n}\n")),(0,a.kt)("p",null,"If there are less than 10 nodes in the graph, the final default graph style properties\nwill be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "collision-radius": 15,\n  "physics-enabled": true\n}\n')),(0,a.kt)("p",null,"Otherwise, if there are more than 10 nodes in the graph, the final default graph style\nproperties will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "collision-radius": 15,\n  "physics-enabled": false,\n  "repel-force": -300\n}\n')),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/gss-viewstyle-directive"},"GSS @ViewStyle directive\nproperties")," page to see\nall styling possibilities."),(0,a.kt)("h3",{id:"viewstylemap"},(0,a.kt)("inlineCode",{parentName:"h3"},"@ViewStyle.Map")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@ViewStyle.Map")," directive is a subset of ",(0,a.kt)("inlineCode",{parentName:"p"},"@ViewStyle")," because it defines additional style\nproperties for a graph view when there is a map background. The map view will be available\nonly if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@ViewStyle")," contains a property ",(0,a.kt)("inlineCode",{parentName:"li"},"view")," set to value ",(0,a.kt)("inlineCode",{parentName:"li"},'"map"'),"."),(0,a.kt)("li",{parentName:"ul"},"There is at least one node with defined ",(0,a.kt)("inlineCode",{parentName:"li"},"latitude")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"longitude")," properties")),(0,a.kt)("p",null,"It is also possible to use a predicate expression which acts as a filter to\napply the defined properties to the final directive output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@ViewStyle.Map <predicate expression> {\n  <property-name-1>: <value expression-1>\n  ...\n  <property-name-n>: <value expression-n>\n}\n")),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"@ViewStyle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@ViewStyle.Map")," also has a built-in\nvariable ",(0,a.kt)("inlineCode",{parentName:"p"},"graph")," which can be used for directive filter or property assignment."),(0,a.kt)("p",null,"An example below shows a general directive style definition and a directive where\nstyle properties will be only applied if there are more than 10 nodes in the graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@ViewStyle {\n  view: "map"\n}\n\n@ViewStyle.Map {\n  tile-layer: "detailed"\n}\n\n@ViewStyle.Map Greater(NodeCount(graph), 10) {\n  tile-layer: "dark"\n}\n')),(0,a.kt)("p",null,"If there are less than 10 nodes in the graph, the final map graph style properties\nwill be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tile-layer": "detailed"\n}\n')),(0,a.kt)("p",null,"Otherwise, if there are more than 10 nodes in the graph, the final map graph style\nproperties will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tile-layer": "dark"\n}\n')),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/gss-viewstyle-map-directive"},"GSS @ViewStyle.Map directive\nproperties")," page to see\nall styling possibilities."),(0,a.kt)("h2",{id:"built-in-functions"},"Built-in functions"),(0,a.kt)("p",null,"Graph Style Script has a large number of built-in functions that can help you\nwith achieving the right style for your graph. Take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/gss-functions"},"list of GSS\nbuilt-in functions"),"."),(0,a.kt)("h2",{id:"built-in-colors"},"Built-in colors"),(0,a.kt)("p",null,"Graph Style Script comes with built-in colors that you can use the color's name.\nTake a look at the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/gss-colors"},"list of built-in\ncolors"),"."),(0,a.kt)("h2",{id:"built-in-variables"},"Built-in variables"),(0,a.kt)("p",null,"Graph Style Script has a few built-in variables that you can use: ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"edge"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"graph"),". Read more about it in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/gss-variables"},"list of built-in\nvariables"),"."),(0,a.kt)("h2",{id:"file-structure"},"File Structure"),(0,a.kt)("p",null,"Style script files are composed of expressions and directives. All expressions\noutside directives are evaluated first in the global environment. This is useful\nfor defining names using function ",(0,a.kt)("inlineCode",{parentName:"p"},"Define"),". After that ",(0,a.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"@EdgeStyle")," directives are evaluated for each node and relationship,\nrespectively. All the names in the global environment are visible while applying\nthe directives so they can be used for defining property values inside\ndirectives."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Define(square, Function(x, Mul(x, x)))\nDefine(maxAllowedDebt, 10000)\n\n@NodeStyle HasLabel(node, "BankUser") {\n  size: square(Property(node, "debt"))\n  color: If(Greater(Property(node, "debt"), maxAllowedDebt),\n            red,\n            lightblue)\n}\n')),(0,a.kt)("p",null,"Names ",(0,a.kt)("inlineCode",{parentName:"p"},"square")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"maxAllowedDebt")," are visible inside ",(0,a.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," directive."))}u.isMDXComponent=!0}}]);