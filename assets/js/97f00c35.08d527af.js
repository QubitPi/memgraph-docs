"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={id:"transportation",title:"Transportation",sidebar_label:"Transportation"},i=void 0,s={unversionedId:"use-cases/transportation",id:"use-cases/transportation",title:"Transportation",description:"Introduction",source:"@site/mage/use-cases/transportation.md",sourceDirName:"use-cases",slug:"/use-cases/transportation",permalink:"/memgraph-docs/mage/use-cases/transportation",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/use-cases/transportation.md",tags:[],version:"current",frontMatter:{id:"transportation",title:"Transportation",sidebar_label:"Transportation"},sidebar:"mage",previous:{title:"Telecommunication",permalink:"/memgraph-docs/mage/use-cases/telecommunication"},next:{title:"Contributing",permalink:"/memgraph-docs/mage/contributing"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Navigation",id:"navigation",level:3},{value:"Airline",id:"airline",level:3},{value:"Detecting congestion",id:"detecting-congestion",level:3},{value:"Where to next?",id:"where-to-next",level:2}],c={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Driving down the roads may seem like a simple task, but some kind of navigation\nsystem is navigating almost all cars and trains, as well as boats and airplanes.\nWe use those systems for personal navigation every day too. Graphs are used for\nmodeling and navigating complex network problems, such as ",(0,r.kt)("strong",{parentName:"p"},"transportation\nnetwork"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"memgraph-graph-algorithm-applications-transportation",src:n(35546).Z,width:"1000",height:"300"})),(0,r.kt)("h3",{id:"navigation"},"Navigation"),(0,r.kt)("p",null,"Pathfinding algorithms are one of the classical graph problems and have been\nresearched since the 19th century. The ",(0,r.kt)("strong",{parentName:"p"},"shortest path")," algorithm calculates a\npath between two nodes in a graph such that the total sum of the edge weights is\nminimized. A navigation system that always navigates you down the shortest\nroutes and makes your trip as fast as possible can be created using the shortest\npath algorithm."),(0,r.kt)("h3",{id:"airline"},"Airline"),(0,r.kt)("p",null,"When traveling from one airport to another, airplanes use specific locations to\nnavigate in the sky. These locations are called waypoints and are defined by\ntheir coordinates. Modern airplanes track these waypoints using radio navigation\nsystems such as GPS or VOR. Like many other aviation elements, both airports and\nwaypoints have unique ICAO code names, and as such, can be represented by nodes\nof a graph. Airports and waypoints can be different nodes, and the airways\nbetween them can be the relationships."),(0,r.kt)("h3",{id:"detecting-congestion"},"Detecting congestion"),(0,r.kt)("p",null,"Real-time road congestion detection can improve traffic safety and route\nplanning. If we put all data into a graph database and use ",(0,r.kt)("strong",{parentName:"p"},"streaming graph\nalgorithms"),", we can detect road congestion."),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"This text is a ",(0,r.kt)("strong",{parentName:"p"},"summary")," of one area that fits perfectly with the application\nof graphs. Therefore, we would like to have you with us when ",(0,r.kt)("strong",{parentName:"p"},"implementing"),"\nsome of these solutions. Share ",(0,r.kt)("strong",{parentName:"p"},"opinions"),", ",(0,r.kt)("strong",{parentName:"p"},"experiences")," and ",(0,r.kt)("strong",{parentName:"p"},"problems"),"\nyou encounter when working with ",(0,r.kt)("strong",{parentName:"p"},"Memgraph")," on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord\nserver"),". We are here for you and we will help you\nalong the way."))}u.isMDXComponent=!0},35546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/memgraph-graph-algorithm-applications-transportation-af39bf7b3ff87021ee1076b617e88e1b.png"}}]);