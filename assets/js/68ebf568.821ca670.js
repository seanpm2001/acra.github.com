"use strict";(self.webpackChunkacra=self.webpackChunkacra||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7698:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],u={sidebar_position:90,title:"Troubleshooting Guide"},l=void 0,c={unversionedId:"Troubleshooting-Guide",id:"Troubleshooting-Guide",title:"Troubleshooting Guide",description:"On this page you'll find some common issues and their solutions.",source:"@site/docs/Troubleshooting-Guide.mdx",sourceDirName:".",slug:"/Troubleshooting-Guide",permalink:"/docs/Troubleshooting-Guide",editUrl:"https://github.com/acra/acra/edit/master/web/docs/Troubleshooting-Guide.mdx",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90,title:"Troubleshooting Guide"},sidebar:"tutorialSidebar",previous:{title:"How to Debug",permalink:"/docs/How-to-debug"}},s={},p=[{value:"Instant Run",id:"instant-run",level:2},{value:"Legacy Multidex",id:"legacy-multidex",level:2},{value:"Application.onCreate()",id:"applicationoncreate",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"On this page you'll find some common issues and their solutions."),(0,i.kt)("h2",{id:"instant-run"},"Instant Run"),(0,i.kt)("p",null,"We cannot guarantee ACRA will work with instant run enabled. Always try to reproduce an error with instant run disabled before reporting it. "),(0,i.kt)("h2",{id:"legacy-multidex"},"Legacy Multidex"),(0,i.kt)("p",null,"If you are using legacy multidex, ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"ACRA.init(...)")," is called ",(0,i.kt)("strong",{parentName:"p"},"after")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Multidex.install()"),"."),(0,i.kt)("h2",{id:"applicationoncreate"},"Application.onCreate()"),(0,i.kt)("p",null,"ACRA uses a service to send crash reports. This service runs in a ",(0,i.kt)("strong",{parentName:"p"},"separate process")," to ensure that reports can be sent even when your own VM is dying from an unhandled exception. This means that a new instance of your application will be started and ",(0,i.kt)("inlineCode",{parentName:"p"},"Application.onCreate()")," will be called again. If you are performing once only tasks in ",(0,i.kt)("inlineCode",{parentName:"p"},"Application.onCreate()")," then check the name of the current process and don't do them if the process name is ",(0,i.kt)("inlineCode",{parentName:"p"},":acra"),". You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ACRA.isACRASenderServiceProcess()")," for this."))}f.isMDXComponent=!0}}]);