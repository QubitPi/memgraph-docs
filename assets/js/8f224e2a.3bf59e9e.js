"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58336],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(o),u=n,g=c["".concat(m,".").concat(u)]||c[u]||d[u]||a;return o?r.createElement(g,i(i({ref:t},p),{},{components:o})):r.createElement(g,i({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},76491:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={id:"font-awesome-for-node-images",title:"How to use Font Awesome icons for node images",sidebar_label:"Use Font Awesome for node images"},i=void 0,s={unversionedId:"how-to-guides/font-awesome-for-node-images",id:"version-2.5.2/how-to-guides/font-awesome-for-node-images",title:"How to use Font Awesome icons for node images",description:"Related - Tutorial [![Related - Blog",source:"@site/memgraph_versioned_docs/version-2.5.2/how-to-guides/font-awesome-for-node-images.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/font-awesome-for-node-images",permalink:"/memgraph-docs/memgraph/2.5.2/how-to-guides/font-awesome-for-node-images",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.2/how-to-guides/font-awesome-for-node-images.md",tags:[],version:"2.5.2",frontMatter:{id:"font-awesome-for-node-images",title:"How to use Font Awesome icons for node images",sidebar_label:"Use Font Awesome for node images"},sidebar:"memgraph",previous:{title:"Set up triggers",permalink:"/memgraph-docs/memgraph/2.5.2/how-to-guides/set-up-triggers"},next:{title:"Use query modules",permalink:"/memgraph-docs/memgraph/2.5.2/how-to-guides/query-modules"}},m={},l=[],p={toc:l};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/memgraph-docs/memgraph/2.5.2/tutorials/style-your-graphs-in-memgraph-lab"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related - Tutorial"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/how-to-style-your-graphs-in-memgraph-lab"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge",alt:"Related - Blog\nPost"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://fontawesome.com/"},"Font Awesome")," is a popular icon library. If you ever\ntried to use a font awesome icon as a background image for a node, you might\nhave noticed you were not able to do that by using the icon directly. Memgraph\nLab doesn't support ",(0,n.kt)("inlineCode",{parentName:"p"},"SVG")," format at this time, but it supports ",(0,n.kt)("inlineCode",{parentName:"p"},"PNG"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"JPEG"),",\n",(0,n.kt)("inlineCode",{parentName:"p"},"GIF")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"WEBP")," formats. Here is a workaround for this problem."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Find the Font Awesome icon that you want to convert to PNG. Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://fontawesome.com/icons/"},"Font\nAwesome")," website and locate the icon that you\nwant to use as a node background and download it in SVG format.")),(0,n.kt)("img",{src:o(92660).Z,className:"imgBorder"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Convert SVG file to PNG with your favorite image editing program, or you can use one of the dozen online services for file conversion.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can use programs such as ",(0,n.kt)("a",{parentName:"p",href:"https://www.gimp.org/"},"Gimp")," or\n",(0,n.kt)("a",{parentName:"p",href:"https://inkscape.org/"},"Inkscape")," to convert SVG to PNG.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upload the PNG file to a web server so that you can set it for node background.\nIf you are using an image hosting service, make a note of the URL. Some of those\nservices use URLs unrelated to the image name and are hard to come by at a\nlatter time.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit the code of the Graph Style Editor in Memgraph Lab by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"image-url")," property to the ",(0,n.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," class. Here is an example:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'image-url: "https://i.imgur.com/bLF8qWQ.png"\n')),(0,n.kt)("p",null,"Your ",(0,n.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," block of code should look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'@NodeStyle {\n  size: 6\n  color: #DD2222\n  border-width: 0.6\n  border-color: #1d1d1d\n  font-size: 3\n  image-url: "https://i.imgur.com/bLF8qWQ.png"\n}\n')),(0,n.kt)("p",null,"You can look at ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-lab/style-script/gss-nodestyle-directive#image-url-string"},"Graph Style Script @NodeStyle directive\nproperties"),"\nfor additional info on the syntax."),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Apply the style and review changes.")),(0,n.kt)("img",{src:o(96798).Z,className:"imgBorder"}))}d.isMDXComponent=!0},92660:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/font-awesome-locate-icon-442ffab31aeb6947abcbb224a144d7f8.png"},96798:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/font-awesome-node-style-c64d6fdff1db0392288d6c3e41420819.png"}}]);