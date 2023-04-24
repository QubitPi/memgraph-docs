"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49263],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>c});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},m=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(l),c=n,h=s["".concat(d,".").concat(c)]||s[c]||p[c]||r;return l?a.createElement(h,o(o({ref:t},m),{},{components:l})):a.createElement(h,o({ref:t},m))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<r;u++)o[u]=l[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}s.displayName="MDXCreateElement"},28251:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=l(87462),n=(l(67294),l(3905));const r={id:"module-file-utilities",title:"Utility query module",sidebar_label:"Utility query module"},o=void 0,i={unversionedId:"reference-guide/query-modules/module-file-utilities",id:"version-2.7.0/reference-guide/query-modules/module-file-utilities",title:"Utility query module",description:"Built-in utility query module (mg) contains procedures that enable you to",source:"@site/memgraph_versioned_docs/version-2.7.0/reference-guide/query-modules/module-file-utilities.md",sourceDirName:"reference-guide/query-modules",slug:"/reference-guide/query-modules/module-file-utilities",permalink:"/memgraph-docs/memgraph/reference-guide/query-modules/module-file-utilities",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.7.0/reference-guide/query-modules/module-file-utilities.md",tags:[],version:"2.7.0",frontMatter:{id:"module-file-utilities",title:"Utility query module",sidebar_label:"Utility query module"},sidebar:"memgraph",previous:{title:"Load and call query modules",permalink:"/memgraph-docs/memgraph/reference-guide/query-modules/load-call-query-modules"},next:{title:"Replication",permalink:"/memgraph-docs/memgraph/reference-guide/replication"}},d={},u=[{value:"General procedures",id:"general-procedures",level:2},{value:"<code>mg.procedures</code>",id:"mgprocedures",level:3},{value:"<code>mg.load_all</code>",id:"mgload_all",level:3},{value:"<code>mg.load</code>",id:"mgload",level:3},{value:"Procedures for <code>.py</code> query modules",id:"procedures-for-py-query-modules",level:2},{value:"<code>mg.get_module_files</code>",id:"mgget_module_files",level:3},{value:"<code>mg.get_module_file</code>",id:"mgget_module_file",level:3},{value:"<code>mg.create_module_file</code>",id:"mgcreate_module_file",level:3},{value:"<code>mg.update_module_file</code>",id:"mgupdate_module_file",level:3},{value:"<code>mg.delete_module_file</code>",id:"mgdelete_module_file",level:3}],m={toc:u};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Built-in utility query module (",(0,n.kt)("inlineCode",{parentName:"p"},"mg"),") contains procedures that enable you to\nmanage query modules files."),(0,n.kt)("h2",{id:"general-procedures"},"General procedures"),(0,n.kt)("p",null,"Here is the list of procedures from the ",(0,n.kt)("inlineCode",{parentName:"p"},"mg")," query module that can be used with\nall other query module files and their signatures:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"mg.procedures() -> (name","|","STRING, signature","|","STRING)")),(0,n.kt)("td",{parentName:"tr",align:null},"Lists loaded procedures and their signatures.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"mg.load(module_name","|","STRING) -> ()")),(0,n.kt)("td",{parentName:"tr",align:null},"Loads or reloads the given module.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"mg.load_all() -> ()")),(0,n.kt)("td",{parentName:"tr",align:null},"Loads or reloads all modules.")))),(0,n.kt)("h3",{id:"mgprocedures"},(0,n.kt)("inlineCode",{parentName:"h3"},"mg.procedures")),(0,n.kt)("p",null,"Lists loaded procedures and their signatures."),(0,n.kt)("p",null,"Example of a Cypher query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.procedures() YIELD *;\n")),(0,n.kt)("p",null,"Example of a result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},'+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+\n| is_editable | name                | path              | signature                                                                                                             |\n+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+\n| ...         | ...                 | ...               | ...                                                                                                                   |\n| true        | graph_analyzer.help | "/path/to/module" | graph_analyzer.help() :: (name :: STRING, value :: STRING)                                                            |\n| false       | mg.load             | "builtin"         | mg.load(module_name :: STRING) :: ()                                                                                  |\n| false       | mg.load_all         | "builtin"         | mg.load_all() :: ()                                                                                                   |\n| false       | mg.procedures       | "builtin"         | mg.procedures() :: (name :: STRING, signature :: STRING, is_write :: BOOLEAN, path :: STRING, is_editable :: BOOLEAN) |\n| ...         | ...                 | ...               | ...                                                                                                                   |\n+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+\n')),(0,n.kt)("h3",{id:"mgload_all"},(0,n.kt)("inlineCode",{parentName:"h3"},"mg.load_all")),(0,n.kt)("p",null,"Loads or reloads all modules."),(0,n.kt)("p",null,"Example of a Cypher query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,n.kt)("p",null,"If the response is ",(0,n.kt)("inlineCode",{parentName:"p"},"Empty set (x.x sec)")," and there are no error messages, the\nupdate was successful."),(0,n.kt)("h3",{id:"mgload"},(0,n.kt)("inlineCode",{parentName:"h3"},"mg.load")),(0,n.kt)("p",null,"Loads or reloads the given module."),(0,n.kt)("p",null,"Example of a Cypher query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("py_example");\n')),(0,n.kt)("p",null,"If the response is ",(0,n.kt)("inlineCode",{parentName:"p"},"Empty set (x.x sec)")," and there are no error messages, the\nupdate was successful."),(0,n.kt)("p",null,"Upon loading the module, all dependent Python's submodules that are imported will be reloaded too. To support this functionality Memgraph parses module's code into Abstract Syntax Tree and then determines which modules are being imported. For example, let's say that you have a following query_modules_directory structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- query_modules/\n  - python/\n    - module1.py\n    - module2.py\n    - mage/\n      - module1/\n        - module1_utility.py\n      - module2/\n        - module2_utility.py\n  - cpp/\n    - module3.cpp\n    - module4.cpp\n")),(0,n.kt)("p",null,"By calling:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("module1");\n')),(0,n.kt)("p",null,"Memgraph will reload ",(0,n.kt)("inlineCode",{parentName:"p"},"module1.py"),", all its imported Python packages and it will conclude that there is a subdirectory ",(0,n.kt)("inlineCode",{parentName:"p"},"module1")," which contains Python utility files for ",(0,n.kt)("inlineCode",{parentName:"p"},"module1.py")," and it will reload them too. Note, that if ",(0,n.kt)("inlineCode",{parentName:"p"},"module1")," directory contains some subdirectories, they will also get reloaded. By reloading, it is assumed clearing from the ",(0,n.kt)("inlineCode",{parentName:"p"},"sys")," cache and deleting compiled code from the ",(0,n.kt)("inlineCode",{parentName:"p"},"__pycache__"),". The repository which contains subdirectories can be organized in a different way too, so e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"module1/")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"module2/")," folders can be placed directly in the ",(0,n.kt)("inlineCode",{parentName:"p"},"python/")," folder."),(0,n.kt)("h2",{id:"procedures-for-py-query-modules"},"Procedures for ",(0,n.kt)("inlineCode",{parentName:"h2"},".py")," query modules"),(0,n.kt)("p",null,"Memgraph includes several built-in procedures for editing and inspecting Python\nmodule files."),(0,n.kt)("p",null,"Below is a list of the procedures, their signatures, description and required\nprivilege.",(0,n.kt)("br",null)," Privileges can be assigned only in the enterprise edition of\nMemgraph. ",(0,n.kt)("br",null),"Click on a procedure to see an example of a Cypher query and\npossible result."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required privilege"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#mgget_module_files"},(0,n.kt)("code",null,"mg.get_module_files() -> (is_editable","|","STRING, path","|","STRING)"))),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the value of a ",(0,n.kt)("inlineCode",{parentName:"td"},"is_editable")," flag and the absolute path of each Python query module file in all the query module directories."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MODULE_READ"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#mgget_module_file"},(0,n.kt)("code",null,"mg.get_module_file(path","|","STRING) -> (path","|","STRING)"))),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the content of a file located at the absolute path in one of the query module directories."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MODULE_READ"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#mgcreate_module_file"},(0,n.kt)("code",null,"mg.create_module_file(filename","|","STRING, content","|","STRING) -> (path","|","STRING)"))),(0,n.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,n.kt)("inlineCode",{parentName:"td"},"filename")," Python module with ",(0,n.kt)("inlineCode",{parentName:"td"},"content")," inside the internal query module directory (",(0,n.kt)("inlineCode",{parentName:"td"},"/var/lib/memgraph/internal_modules"),") and returns the path to the newly created file. The flag ",(0,n.kt)("inlineCode",{parentName:"td"},"is_editable")," should be set to true if the module is located in the internal query module directory. ",(0,n.kt)("br",null)," The ",(0,n.kt)("inlineCode",{parentName:"td"},"filename")," can consist of multiple nested directories (e.g. ",(0,n.kt)("inlineCode",{parentName:"td"},"subdir1/subdir2/module.py"),") which will create all the necessary subdirectories. After successful creation, all the modules are reloaded."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MODULE_WRITE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#mgupdate_module_file"},(0,n.kt)("code",null,"mg.update_module_file(path","|","STRING, content","|","STRING)"))),(0,n.kt)("td",{parentName:"tr",align:null},"Updates a Python module file at an absolute ",(0,n.kt)("inlineCode",{parentName:"td"},"path")," in one of the query module directories with ",(0,n.kt)("inlineCode",{parentName:"td"},"content")," and reloads all the modules. You can only change the files with ",(0,n.kt)("inlineCode",{parentName:"td"},"is_editable")," flag set to ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),"."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MODULE_WRITE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#mgdelete_module_file"},(0,n.kt)("code",null,"mg.delete_module_file(path","|","STRING)"))),(0,n.kt)("td",{parentName:"tr",align:null},"Deletes a Python module file at an absolute ",(0,n.kt)("inlineCode",{parentName:"td"},"path")," in one of the query module directories and reloads all the modules. You can only delete the files with ",(0,n.kt)("inlineCode",{parentName:"td"},"is_editable")," flag set to ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),"."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MODULE_WRITE"))))),(0,n.kt)("h3",{id:"mgget_module_files"},(0,n.kt)("inlineCode",{parentName:"h3"},"mg.get_module_files")),(0,n.kt)("p",null,"Returns the value of an ",(0,n.kt)("inlineCode",{parentName:"p"},"is_editable")," flag and the absolute path of each Python\nquery module file in all the query module directories."),(0,n.kt)("p",null,"Example of a Cypher query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.get_module_files() YIELD *;\n")),(0,n.kt)("p",null,"Example of a result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},'+-----------------------------------------------------+-----------------------------------------------------+\n| is_editable                                         | path                                                |\n+-----------------------------------------------------+-----------------------------------------------------+\n| false                                               | "/usr/lib/memgraph/query_modules/mgp_networkx.py"   |\n| false                                               | "/usr/lib/memgraph/query_modules/wcc.py"            |\n| false                                               | "/usr/lib/memgraph/query_modules/graph_analyzer.py" |\n| false                                               | "/usr/lib/memgraph/query_modules/py_example.py"     |\n| false                                               | "/usr/lib/memgraph/query_modules/nxalg.py"          |\n| true                                                | "/var/lib/memgraph/internal_modules/module1.py"     |\n+-----------------------------------------------------+-----------------------------------------------------+\n')),(0,n.kt)("h3",{id:"mgget_module_file"},(0,n.kt)("inlineCode",{parentName:"h3"},"mg.get_module_file")),(0,n.kt)("p",null,"Returns the content of a file located at the absolute path in one of the query\nmodule directories."),(0,n.kt)("p",null,"Example of a Cypher query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.get_module_file("/usr/lib/memgraph/query_modules/py_example.py") YIELD *;\n')),(0,n.kt)("h3",{id:"mgcreate_module_file"},(0,n.kt)("inlineCode",{parentName:"h3"},"mg.create_module_file")),(0,n.kt)("p",null,"Creates a ",(0,n.kt)("inlineCode",{parentName:"p"},"filename")," Python module with ",(0,n.kt)("inlineCode",{parentName:"p"},"content")," inside the internal query\nmodule directory (",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules"),") and returns the path to\nthe newly created file. The flag ",(0,n.kt)("inlineCode",{parentName:"p"},"is_editable")," should be true if the module is\nlocated in the internal query module directory. The ",(0,n.kt)("inlineCode",{parentName:"p"},"filename")," can consist of\nmultiple nested directories (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"subdir1/subdir2/module.py"),") and all the\nnecessary subdirectories will be created. After successful creation, all the\nmodules are reloaded."),(0,n.kt)("p",null,"Examples of a Cypher query:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Without defining the absolute path:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.create_module_file("my_module.py", "Start of my query module.") YIELD *;\n')),(0,n.kt)("p",{parentName:"li"},"Result:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},'+---------------------------------------------------+\n| path                                              |\n+---------------------------------------------------+\n| "/var/lib/memgraph/internal_modules/my_module.py" |\n+---------------------------------------------------+\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"With absolute path:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.create_module_file("my_modules/my_module.py", "Start of my query module.") YIELD *;\n')),(0,n.kt)("p",{parentName:"li"},"Result:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},'+--------------------------------------------------------------+\n| path                                                         |\n+--------------------------------------------------------------+\n| "/var/lib/memgraph/internal_modules/my_modules/my_module.py" |\n+--------------------------------------------------------------+\n')))),(0,n.kt)("h3",{id:"mgupdate_module_file"},(0,n.kt)("inlineCode",{parentName:"h3"},"mg.update_module_file")),(0,n.kt)("p",null,"Updates a Python module file at an absolute ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," in one of the query module\ndirectories with ",(0,n.kt)("inlineCode",{parentName:"p"},"content"),". You can only change the files with ",(0,n.kt)("inlineCode",{parentName:"p"},"is_editable"),"\nflag set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("p",null,"Example of a Cypher query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.update_module_file("/var/lib/memgraph/internal_modules/my_module.py", "Start of my query module. Another line.");\n')),(0,n.kt)("p",null,"If the response is ",(0,n.kt)("inlineCode",{parentName:"p"},"Empty set (x.x sec)")," and there are no error messages, the\nupdate was successful."),(0,n.kt)("h3",{id:"mgdelete_module_file"},(0,n.kt)("inlineCode",{parentName:"h3"},"mg.delete_module_file")),(0,n.kt)("p",null,"Deletes a Python module file at an absolute ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," in one of the query module\ndirectories and reloads all the modules. You can only delete the files with\n",(0,n.kt)("inlineCode",{parentName:"p"},"is_editable")," flag set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("p",null,"Example of a Cypher query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.delete_module_file("/var/lib/memgraph/internal_modules/my_module.py");\n')),(0,n.kt)("p",null,"If the response is ",(0,n.kt)("inlineCode",{parentName:"p"},"Empty set (x.x sec)")," and there are no error messages, the\nupdate was successful."))}p.isMDXComponent=!0}}]);