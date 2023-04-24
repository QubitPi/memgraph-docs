"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74979],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var o=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,o,n=function(e,t){if(null==e)return{};var l,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)l=r[o],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)l=r[o],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=s(l),m=n,u=h["".concat(d,".").concat(m)]||h[m]||p[m]||r;return l?o.createElement(u,i(i({ref:t},c),{},{components:l})):o.createElement(u,i({ref:t},c))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=h;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var s=2;s<r;s++)i[s]=l[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,l)}h.displayName="MDXCreateElement"},48512:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=l(87462),n=(l(67294),l(3905));const r={id:"gss-edgestyle-directive",title:"Graph Style Script @EdgeStyle directive properties",sidebar_label:"EdgeStyle directive properties"},i=void 0,a={unversionedId:"style-script/gss-edgestyle-directive",id:"style-script/gss-edgestyle-directive",title:"Graph Style Script @EdgeStyle directive properties",description:"@EdgeStyle",source:"@site/lab/style-script/gss-edgestyle-directive.md",sourceDirName:"style-script",slug:"/style-script/gss-edgestyle-directive",permalink:"/memgraph-docs/memgraph-lab/style-script/gss-edgestyle-directive",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/lab/style-script/gss-edgestyle-directive.md",tags:[],version:"current",frontMatter:{id:"gss-edgestyle-directive",title:"Graph Style Script @EdgeStyle directive properties",sidebar_label:"EdgeStyle directive properties"},sidebar:"lab",previous:{title:"GSS variables",permalink:"/memgraph-docs/memgraph-lab/style-script/gss-variables"},next:{title:"NodeStyle directive properties",permalink:"/memgraph-docs/memgraph-lab/style-script/gss-nodestyle-directive"}},d={},s=[{value:"<code>@EdgeStyle</code>",id:"edgestyle",level:2},{value:"<code>arrow-size</code>: <code>Number</code>",id:"arrow-size-number",level:3},{value:"<code>color</code>: <code>Color</code>",id:"color-color",level:3},{value:"<code>color-hover</code>: <code>Color</code>",id:"color-hover-color",level:3},{value:"<code>color-selected</code>: <code>Color</code>",id:"color-selected-color",level:3},{value:"<code>font-background-color</code>: <code>Color</code>",id:"font-background-color-color",level:3},{value:"<code>font-color</code>: <code>Color</code>",id:"font-color-color",level:3},{value:"<code>font-family</code>: <code>String</code>",id:"font-family-string",level:3},{value:"<code>font-size</code>: <code>Number</code>",id:"font-size-number",level:3},{value:"<code>label</code>: <code>String</code>",id:"label-string",level:3},{value:"<code>shadow-color</code>: <code>Color</code>",id:"shadow-color-color",level:3},{value:"<code>shadow-size</code>: <code>Number</code>",id:"shadow-size-number",level:3},{value:"<code>shadow-offset-x</code>: <code>Number</code>",id:"shadow-offset-x-number",level:3},{value:"<code>shadow-offset-y</code>: <code>Number</code>",id:"shadow-offset-y-number",level:3},{value:"<code>width</code>: <code>Number</code>",id:"width-number",level:3},{value:"<code>width-hover</code>: <code>Number</code>",id:"width-hover-number",level:3},{value:"<code>width-selected</code>: <code>Number</code>",id:"width-selected-number",level:3}],c={toc:s};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"edgestyle"},(0,n.kt)("inlineCode",{parentName:"h2"},"@EdgeStyle")),(0,n.kt)("p",null,"Here is the list of all properties that can be defined in the ",(0,n.kt)("inlineCode",{parentName:"p"},"@EdgeStyle"),"\ndirective, along with their expected types."),(0,n.kt)("h3",{id:"arrow-size-number"},(0,n.kt)("inlineCode",{parentName:"h3"},"arrow-size"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Number")),(0,n.kt)("p",null,"Sets the size of the arrow on the relationship line end."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"arrow-size: 10")," sets the arrow size to be 10 pixels.")),(0,n.kt)("h3",{id:"color-color"},(0,n.kt)("inlineCode",{parentName:"h3"},"color"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Color")),(0,n.kt)("p",null,"Sets the background color of an element."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color: #FF0000")," sets the background color of the element to red."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color: limegreen")," sets the background color of the element to lime green.")),(0,n.kt)("h3",{id:"color-hover-color"},(0,n.kt)("inlineCode",{parentName:"h3"},"color-hover"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Color")),(0,n.kt)("p",null,"Sets the background color of an element on mouse hover event."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color-hover: #FF0000")," sets the background color of the shape to red on mouse\nhover event."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color-hover: limegreen")," sets the background color of the shape to lime green\non mouse hover event.")),(0,n.kt)("h3",{id:"color-selected-color"},(0,n.kt)("inlineCode",{parentName:"h3"},"color-selected"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Color")),(0,n.kt)("p",null,"Sets the background color of an element on mouse select event."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color-selected: #FF0000")," sets the background color of the shape to red on\nmouse select event."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color-selected: limegreen")," sets the background color of the shape to lime\ngreen on mouse select event.")),(0,n.kt)("h3",{id:"font-background-color-color"},(0,n.kt)("inlineCode",{parentName:"h3"},"font-background-color"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Color")),(0,n.kt)("p",null,"Sets the background color of an element's label (text). Text can be defined with\nproperty ",(0,n.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"font-background-color: #FF0000")," sets the text background color to red."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"font-background-color: limegreen")," sets the text background color to lime\ngreen.")),(0,n.kt)("h3",{id:"font-color-color"},(0,n.kt)("inlineCode",{parentName:"h3"},"font-color"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Color")),(0,n.kt)("p",null,"Sets the color of the element's label (text). Text can be defined with property\n",(0,n.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"font-color: #FF0000")," sets the text color to red."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"font-color: limegreen")," sets the text color to lime green.")),(0,n.kt)("h3",{id:"font-family-string"},(0,n.kt)("inlineCode",{parentName:"h3"},"font-family"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"String")),(0,n.kt)("p",null,"Sets a font family for the element's text. Text can be defined with property\n",(0,n.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'font-family: "sans-serif"')," sets the text family font to sans-serif."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'font-family: "cursive"')," sets the text family font to cursive.")),(0,n.kt)("h3",{id:"font-size-number"},(0,n.kt)("inlineCode",{parentName:"h3"},"font-size"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Number")),(0,n.kt)("p",null,"Sets the size of the element's text. Text can be defined with property ",(0,n.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"font-size: 10")," sets the size of the font to 10 pixels.")),(0,n.kt)("h3",{id:"label-string"},(0,n.kt)("inlineCode",{parentName:"h3"},"label"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"String")),(0,n.kt)("p",null,"Sets the element's text label. The text is shown below the element (node or\nrelationship)."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'label: "Text"'),' sets the text "Text" as a label for every single element.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'label: Property(edge, "quantity")')," sets the text for the element's label\ndynamically by using the ",(0,n.kt)("inlineCode",{parentName:"li"},"edge")," property ",(0,n.kt)("inlineCode",{parentName:"li"},'"quantity"'),".")),(0,n.kt)("h3",{id:"shadow-color-color"},(0,n.kt)("inlineCode",{parentName:"h3"},"shadow-color"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Color")),(0,n.kt)("p",null,"Sets the color of the element's shadow."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shadow-color: #FF0000")," sets the shadow color to red."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shadow-color: limegreen")," sets the shadow color to lime green.")),(0,n.kt)("h3",{id:"shadow-size-number"},(0,n.kt)("inlineCode",{parentName:"h3"},"shadow-size"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Number")),(0,n.kt)("p",null,"Sets the blur size of the element's shadow. If the value is 0, the shadow will\nbe a solid color defined by the property ",(0,n.kt)("inlineCode",{parentName:"p"},"shadow-color"),"."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shadow-size: 5")," indicates that the shadow will be diffused across 5 pixels.")),(0,n.kt)("h3",{id:"shadow-offset-x-number"},(0,n.kt)("inlineCode",{parentName:"h3"},"shadow-offset-x"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Number")),(0,n.kt)("p",null,"Sets the horizontal offset of the element's shadow. A positive value puts the\nshadow on the right side of the shape, a negative value puts the shadow on the\nleft side of the shape."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shadow-offset-x: 0")," indicates that the shadow is exactly behind the shape."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shadow-offset-x: 20")," indicates that the shadow starts 20 pixels to the right.")),(0,n.kt)("h3",{id:"shadow-offset-y-number"},(0,n.kt)("inlineCode",{parentName:"h3"},"shadow-offset-y"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Number")),(0,n.kt)("p",null,"Sets the vertical offset of the element's shadow. A positive value puts the\nshadow below the shape, a negative value puts the shadow above the shape."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shadow-offset-y: 0")," indicates that the shadow is exactly behind the shape."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shadow-offset-y: 20")," indicates that the shadow starts 20 pixels below the\nshape position.")),(0,n.kt)("h3",{id:"width-number"},(0,n.kt)("inlineCode",{parentName:"h3"},"width"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Number")),(0,n.kt)("p",null,"Sets the width of the relationship line."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"width: 2")," indicates that the width of the relationship line will be 2 pixels\nwide.")),(0,n.kt)("h3",{id:"width-hover-number"},(0,n.kt)("inlineCode",{parentName:"h3"},"width-hover"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Number")),(0,n.kt)("p",null,"Sets the width of the relationship line on mouse hover event."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"width-hover: 2")," indicates that the width of the relationship will be 2 pixels\nwide on mouse hover event.")),(0,n.kt)("h3",{id:"width-selected-number"},(0,n.kt)("inlineCode",{parentName:"h3"},"width-selected"),": ",(0,n.kt)("inlineCode",{parentName:"h3"},"Number")),(0,n.kt)("p",null,"Sets the width of the relationship line on mouse select event."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"width-selected: 2")," indicates that the width of the relationship will be 2\npixels wide on mouse select event.")))}p.isMDXComponent=!0}}]);