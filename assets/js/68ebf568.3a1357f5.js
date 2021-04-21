(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(90)),a={sidebar_position:90,title:"Troubleshooting Guide"},c={unversionedId:"Troubleshooting-Guide",id:"Troubleshooting-Guide",isDocsHomePage:!1,title:"Troubleshooting Guide",description:"On this page you'll find some common issues and their solutions.",source:"@site/docs/Troubleshooting-Guide.mdx",sourceDirName:".",slug:"/Troubleshooting-Guide",permalink:"/docs/Troubleshooting-Guide",editUrl:"https://github.com/acra/acra/edit/master/web/docs/Troubleshooting-Guide.mdx",version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90,title:"Troubleshooting Guide"},sidebar:"tutorialSidebar",previous:{title:"Custom Extensions",permalink:"/docs/Custom-Extensions"}},s=[{value:"Instant Run",id:"instant-run",children:[]},{value:"Legacy Multidex",id:"legacy-multidex",children:[]},{value:"Application.onCreate()",id:"applicationoncreate",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"On this page you'll find some common issues and their solutions."),Object(i.b)("h2",{id:"instant-run"},"Instant Run"),Object(i.b)("p",null,"We cannot guarantee ACRA will work with instant run enabled. Always try to reproduce an error with instant run disabled before reporting it. "),Object(i.b)("h2",{id:"legacy-multidex"},"Legacy Multidex"),Object(i.b)("p",null,"If you are using legacy multidex, ensure that ",Object(i.b)("inlineCode",{parentName:"p"},"ACRA.init(...)")," is called ",Object(i.b)("strong",{parentName:"p"},"after")," ",Object(i.b)("inlineCode",{parentName:"p"},"Multidex.install()"),"."),Object(i.b)("h2",{id:"applicationoncreate"},"Application.onCreate()"),Object(i.b)("p",null,"ACRA uses a service to send crash reports. This service runs in a ",Object(i.b)("strong",{parentName:"p"},"separate process")," to ensure that reports can be sent even when your own VM is dying from an unhandled exception. This means that a new instance of your application will be started and ",Object(i.b)("inlineCode",{parentName:"p"},"Application.onCreate()")," will be called again. If you are performing once only tasks in ",Object(i.b)("inlineCode",{parentName:"p"},"Application.onCreate()")," then check the name of the current process and don't do them if the process name is ",Object(i.b)("inlineCode",{parentName:"p"},":acra"),". You can use ",Object(i.b)("inlineCode",{parentName:"p"},"ACRA.isACRASenderServiceProcess()")," for this."))}l.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);