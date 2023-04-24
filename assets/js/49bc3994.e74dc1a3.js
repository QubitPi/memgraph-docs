"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={id:"gss-viewstyle-directive",title:"Graph Style Script @ViewStyle directive properties",sidebar_label:"ViewStyle directive properties"},l=void 0,o={unversionedId:"style-script/gss-viewstyle-directive",id:"style-script/gss-viewstyle-directive",title:"Graph Style Script @ViewStyle directive properties",description:"@ViewStyle directive is used for defining style properties of a general",source:"@site/lab/style-script/gss-graphstyle-directive.md",sourceDirName:"style-script",slug:"/style-script/gss-viewstyle-directive",permalink:"/memgraph-docs/memgraph-lab/style-script/gss-viewstyle-directive",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/lab/style-script/gss-graphstyle-directive.md",tags:[],version:"current",frontMatter:{id:"gss-viewstyle-directive",title:"Graph Style Script @ViewStyle directive properties",sidebar_label:"ViewStyle directive properties"}},s={},p=[{value:"<code>@ViewStyle</code>",id:"viewstyle",level:2},{value:"<code>collision-radius: number</code>",id:"collision-radius-number",level:3},{value:"<code>repel-force: number</code>",id:"repel-force-number",level:3},{value:"<code>link-distance: number</code>",id:"link-distance-number",level:3},{value:"<code>physics-enabled: boolean</code>",id:"physics-enabled-boolean",level:3},{value:"<code>view: string: &quot;default&quot; | &quot;map&quot;</code>",id:"view-string-default--map",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@ViewStyle")," directive is used for defining style properties of a general\ngraph view: link distance, view, physics, repel force, etc. You can read more about\neach property in the following sections."),(0,r.kt)("h2",{id:"viewstyle"},(0,r.kt)("inlineCode",{parentName:"h2"},"@ViewStyle")),(0,r.kt)("p",null,"Here is the list of all properties that can be defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@ViewStyle")," directive,\nalong with their expected types."),(0,r.kt)("h3",{id:"collision-radius-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"collision-radius: number")),(0,r.kt)("p",null,"Sets the margin radius for each node from its centre. If node ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"collision-radius")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"20"),", it means there will be ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," spaces left around each\nnode. No other node can be in that space."),(0,r.kt)("p",null,"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"collision-radius")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"15"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collision-radius: 15")," sets the margin radius for each node from its centre to ",(0,r.kt)("inlineCode",{parentName:"li"},"15"),".")),(0,r.kt)("h3",{id:"repel-force-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"repel-force: number")),(0,r.kt)("p",null,"Sets the strength of repel force between all nodes. If positive, it adds a force that\nmoves nodes away from each other, if negative, it moves nodes towards each other."),(0,r.kt)("p",null,"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"repel-force")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"-100"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repel-force: -100")," sets the repel force between all nodes to ",(0,r.kt)("inlineCode",{parentName:"li"},"-100"),".")),(0,r.kt)("h3",{id:"link-distance-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"link-distance: number")),(0,r.kt)("p",null,"Sets the minimum required distance between two connected nodes from their centres."),(0,r.kt)("p",null,"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"link-distance")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"30"),". If node sizes are ",(0,r.kt)("inlineCode",{parentName:"p"},"20")," and link distance is ",(0,r.kt)("inlineCode",{parentName:"p"},"30"),",\nnodes might overlap because the minimum distance from one node centre to another is\n",(0,r.kt)("inlineCode",{parentName:"p"},"20 + 20 = 40"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"link-distance: 30")," sets the minimum required distance to ",(0,r.kt)("inlineCode",{parentName:"li"},"30"),".")),(0,r.kt)("h3",{id:"physics-enabled-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"physics-enabled: boolean")),(0,r.kt)("p",null,"Enables or disables physics which is a real-time simulation for graph node positions.\nWhen physics is enabled, the graph is not static anymore."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"physics-enabled: True")," enables the physics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"physics-enabled: Greater(NodeCount(graph), 100)")," enables the physics for graphs with more than 100 nodes.")),(0,r.kt)("h3",{id:"view-string-default--map"},(0,r.kt)("inlineCode",{parentName:"h3"},'view: string: "default" | "map"')),(0,r.kt)("p",null,"Sets the current graph view that can be either ",(0,r.kt)("inlineCode",{parentName:"p"},'"default"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"map"'),". The ",(0,r.kt)("inlineCode",{parentName:"p"},'"default"')," view is\na graph visualization on a blank background. The ",(0,r.kt)("inlineCode",{parentName:"p"},'"map"')," view is a graph visualization with a map\nas a background where each node needs to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"latitude")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"longitude")," to be positioned\non the map."),(0,r.kt)("p",null,"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"view")," is ",(0,r.kt)("inlineCode",{parentName:"p"},'"default"'),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'view: "default"')," sets the view to the default view."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'view: "map"')," sets the view to the map view that will be shown only if at least one node has\nrequired geo information: ",(0,r.kt)("inlineCode",{parentName:"li"},"latitude")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"longitude"),".")))}c.isMDXComponent=!0}}]);