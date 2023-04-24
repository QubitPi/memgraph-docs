"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19969],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},17428:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>m,assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),i=a(85162),o=a(83523);const u={id:"distance-calculator",title:"distance_calculator",sidebar_label:"distance_calculator"},s=void 0,c={unversionedId:"query-modules/cpp/distance-calculator",id:"query-modules/cpp/distance-calculator",title:"distance_calculator",description:"The distance calculator is a module for calculating distance between two geographic locations. It measures the distance along the surface of the earth.",source:"@site/mage/query-modules/cpp/distance-calculator.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/distance-calculator",permalink:"/memgraph-docs/mage/query-modules/cpp/distance-calculator",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/distance-calculator.md",tags:[],version:"current",frontMatter:{id:"distance-calculator",title:"distance_calculator",sidebar_label:"distance_calculator"},sidebar:"mage",previous:{title:"degree_centrality",permalink:"/memgraph-docs/mage/query-modules/cpp/degree-centrality"},next:{title:"elasticsearch_synchronization",permalink:"/memgraph-docs/mage/query-modules/python/elasticsearch-synchronization"}},d={},p=[{value:"Procedures",id:"procedures",level:2},{value:"<code>single(start, end, metrics, decimals)</code>",id:"singlestart-end-metrics-decimals",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>multiple(start_points, end_points, metrics, decimals)</code>",id:"multiplestart_points-end_points-metrics-decimals",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:a}=e;return(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:p,Highlight:m};function h(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The distance calculator is a module for calculating distance between two geographic locations. It measures the distance along the surface of the earth.\nFormula takes into consideration the radius of the earth. For this algorithm, it is necessary to define an object that has longitude and latitude properties like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"(location:Location {lat: 44.1194, lng: 15.2314})\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/distance_calculator.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-distance_calculator-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"module")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"C++")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(o.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"singlestart-end-metrics-decimals"},(0,r.kt)("inlineCode",{parentName:"h3"},"single(start, end, metrics, decimals)")),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start: Vertex")," \u27a1 Starting point to measure distance. Required to have ",(0,r.kt)("em",{parentName:"li"},"lng")," and ",(0,r.kt)("em",{parentName:"li"},"lat")," properties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end: Vertex")," \u27a1 Ending point to measure distance. Required to have ",(0,r.kt)("em",{parentName:"li"},"lng")," and ",(0,r.kt)("em",{parentName:"li"},"lat")," properties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics: string"),' \u27a1 Can be either "m" or "km". These stand for meters and kilometers respectively.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decimals:int")," \u27a1 Number of decimals on which you want to round up number.")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"distance: double")," \u27a1 The final result obtained by calculating distance (in 'm' or 'km') between the 2 points that each have its latitude and longitude properties.")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Location), (m:Location)\nCALL distance_calculator.single(m, n, 'km')\nYIELD distance\nRETURN distance;\n")),(0,r.kt)("h3",{id:"multiplestart_points-end_points-metrics-decimals"},(0,r.kt)("inlineCode",{parentName:"h3"},"multiple(start_points, end_points, metrics, decimals)")),(0,r.kt)("h4",{id:"input-1"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start_points: List[Vertex]")," \u27a1 Starting points to measure distance collected in a list. Required to have ",(0,r.kt)("em",{parentName:"li"},"lng")," and ",(0,r.kt)("em",{parentName:"li"},"lat")," properties. Must be of the same size as ",(0,r.kt)("em",{parentName:"li"},"end_points"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end_points: List[Vertex]")," \u27a1 Ending points to measure distance collected in a list. Required to have ",(0,r.kt)("em",{parentName:"li"},"lng")," and ",(0,r.kt)("em",{parentName:"li"},"lat")," properties. Must be of the same size as ",(0,r.kt)("em",{parentName:"li"},"start_points"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics: string"),' \u27a1 Can be either "m" or "km". These stand for metres and kilometres respectively.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decimals:int")," \u27a1 Number of decimals on which you want to round up number.")),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"distance: List[double]")," \u27a1 The final result obtained by calculating distance (in meters) between the 2 points who each have its latitude and longitude.")),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n), (m)\nWITH COLLECT(n) AS location_set1, COLLECT(m) AS location_set2\nCALL distance_calculator.multiple(location_set1, location_set2, 'km') YIELD distances\nRETURN distances;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:a(91369).Z})),(0,r.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (location:Location {name: 'Zagreb', lat: 45.8150, lng: 15.9819});\nCREATE (location:Location {name: 'Zadar', lat: 44.1194, lng: 15.2314});\n"))),(0,r.kt)(i.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {name: 'Zagreb'}), (m {name: 'Zadar'})\nCALL distance_calculator.single(n, m, 'km') YIELD distance\nRETURN distance;\n"))),(0,r.kt)(i.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+----------+\n| distance |\n+----------+\n| 197.568  |\n+----------+\n")))))}h.isMDXComponent=!0},83523:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={toc:[]};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}i.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),u=a(91980),s=a(67392),c=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=g({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var k=a(72389);const b="tabList__CuJ",f="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(d(t),u(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},91369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/distance-calculator-1-fb031216949e92c44ed88927ae1b9f6d.png"}}]);