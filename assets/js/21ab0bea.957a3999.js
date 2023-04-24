"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72403],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||a;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={id:"managing-python-environment",title:"How to manage Python environment",sidebar_label:"Managing Python environment"},i=void 0,l={unversionedId:"how-to-guides/managing-python-environment",id:"version-2.6.0/how-to-guides/managing-python-environment",title:"How to manage Python environment",description:"[![Related - Reference",source:"@site/memgraph_versioned_docs/version-2.6.0/how-to-guides/managing-python-environment.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/managing-python-environment",permalink:"/memgraph-docs/memgraph/2.6.0/how-to-guides/managing-python-environment",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.6.0/how-to-guides/managing-python-environment.md",tags:[],version:"2.6.0",frontMatter:{id:"managing-python-environment",title:"How to manage Python environment",sidebar_label:"Managing Python environment"},sidebar:"memgraph",previous:{title:"Uniqueness constraint",permalink:"/memgraph-docs/memgraph/2.6.0/how-to-guides/constraints/uniqueness-constraint"},next:{title:"Set up replication",permalink:"/memgraph-docs/memgraph/2.6.0/how-to-guides/replication"}},p={},s=[{value:"Managing Memgraph&#39;s Python environment",id:"managing-memgraphs-python-environment",level:3}],m={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/query-modules/module-file-utilities"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference\nGuide"}))),(0,o.kt)("h3",{id:"managing-memgraphs-python-environment"},"Managing Memgraph's Python environment"),(0,o.kt)("p",null,"After some time, any production system requires updates for the packages it uses. For example, when developing a new query module that requires the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"networkx")," version. "),(0,o.kt)("p",null,"If Memgraph is already deployed somewhere with an installed ",(0,o.kt)("inlineCode",{parentName:"p"},"networkx")," package, you would probably like to use some package manager, e.g. pip or conda, to delete the old ",(0,o.kt)("inlineCode",{parentName:"p"},"networkx"),", and install a new ",(0,o.kt)("inlineCode",{parentName:"p"},"networkx")," package. You definitely wouldn't want to redeploy the whole Memgraph just because of one Python package."),(0,o.kt)("p",null,"However, Python caches all modules, packages and the compiled bytecode, so this procedure cannot work out of the box. So after installing the new package, you need to use the utility procedure ",(0,o.kt)("inlineCode",{parentName:"p"},"mg.load_all()"),". "),(0,o.kt)("p",null,"So the whole process looks like this:"),(0,o.kt)("p",null,"Uninstall the old package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip uninstall networkx\n")),(0,o.kt)("p",null,"Install a new package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install networkx=<new_version>\n")),(0,o.kt)("p",null,"Reload all query modules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")))}c.isMDXComponent=!0}}]);