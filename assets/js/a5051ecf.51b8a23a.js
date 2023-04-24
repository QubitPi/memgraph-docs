"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25295],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):m(m({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(t),g=a,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return t?n.createElement(d,m(m({ref:r},l),{},{components:t})):n.createElement(d,m({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,m=new Array(o);m[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,m[1]=p;for(var i=2;i<o;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94575:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=t(87462),a=(t(67294),t(3905));const o={id:"kubernetes",title:"Memgraph Helm Chart",sidebar_label:"Kubernetes"},m=void 0,p={unversionedId:"reference-guide/deployment/kubernetes",id:"version-2.5.2/reference-guide/deployment/kubernetes",title:"Memgraph Helm Chart",description:"If you need Memgraph as a part of your Kubernetes cluster, you can use the below Helm Chart for a simple setup. The Helm Chart is a collection of files that describe a related set of Kubernetes resources. Memgraph is a stateful application because it saves data to persistent disk storage for the server, clients, and other applications. The apiVersion is set to apps/v1, which means the below chart supports Helm version 3 or less.",source:"@site/memgraph_versioned_docs/version-2.5.2/reference-guide/deployment/kubernetes.md",sourceDirName:"reference-guide/deployment",slug:"/reference-guide/deployment/kubernetes",permalink:"/memgraph-docs/memgraph/2.5.2/reference-guide/deployment/kubernetes",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.2/reference-guide/deployment/kubernetes.md",tags:[],version:"2.5.2",frontMatter:{id:"kubernetes",title:"Memgraph Helm Chart",sidebar_label:"Kubernetes"},sidebar:"memgraph",previous:{title:"Docker",permalink:"/memgraph-docs/memgraph/2.5.2/reference-guide/deployment/docker"},next:{title:"Indexing",permalink:"/memgraph-docs/memgraph/2.5.2/reference-guide/indexing"}},s={},i=[],l={toc:i};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you need Memgraph as a part of your ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes")," cluster, you can use the below ",(0,a.kt)("strong",{parentName:"p"},"Helm Chart")," for a simple setup. The Helm Chart is a collection of files that describe a related set of Kubernetes resources. Memgraph is a ",(0,a.kt)("strong",{parentName:"p"},"stateful application")," because it saves data to persistent disk storage for the server, clients, and other applications. The ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersion")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"apps/v1"),", which means the below chart supports Helm version 3 or less."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# StatefulSet\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: memgraph\n  labels:\n    app.kubernetes.io/name: memgraph\n    app.kubernetes.io/managed-by: Helm\nspec:\n  replicas: 1\n  serviceName: memgraph-svc\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: memgraph\n  podManagementPolicy: OrderedReady\n  updateStrategy:\n        type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: memgraph\n    spec:\n      containers:\n        - name: memgraph\n          image: "memgraph/memgraph:latest"\n          imagePullPolicy: Never\n          ports:\n            - name: memgraph\n              containerPort: 7687\n          volumeMounts:\n            - name: memgraph-lib-storage\n              mountPath: /var/lib/memgraph\n            - name: memgraph-log-storage\n              mountPath: /var/log/memgraph\n            - name: memgraph-etc-config\n              mountPath: /etc/memgraph/memgraph.conf\n              subPath: memgraph.conf\n      volumes:\n        - name: memgraph-lib-storage\n          persistentVolumeClaim:\n            claimName: memgraph-lib-pv-claim\n        - name: memgraph-log-storage\n          persistentVolumeClaim:\n            claimName: memgraph-log-pv-claim\n        - name: memgraph-etc-config\n          configMap:\n            name: memgraph-config\n---\n# Service\napiVersion: v1\nkind: Service\nmetadata:\n  name: memgraph-svc\n  labels:\n    app.kubernetes.io/name: memgraph\n    app.kubernetes.io/managed-by: Helm\nspec:\n  type: ClusterIP\n  ports:\n    - port: 7687\n      targetPort: 7687\n      protocol: TCP\n      name: bolt\n  selector:\n    app.kubernetes.io/name: memgraph\n')))}c.isMDXComponent=!0}}]);