(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(91)),i=r(95),c=r.p+"assets/images/logcat_filter-d1bcda6c33a5d6e6e82103c6f4fcf741.png",l={sidebar_position:70,title:"How to Debug"},u={unversionedId:"How-to-debug",id:"How-to-debug",isDocsHomePage:!1,title:"How to Debug",description:"This page describes how to capture logs for ACRA.",source:"@site/docs/How-to-debug.mdx",sourceDirName:".",slug:"/How-to-debug",permalink:"/docs/How-to-debug",editUrl:"https://github.com/acra/acra/edit/master/web/docs/How-to-debug.mdx",version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"How to Debug"},sidebar:"tutorialSidebar",previous:{title:"Custom Extensions",permalink:"/docs/Custom-Extensions"},next:{title:"Troubleshooting Guide",permalink:"/docs/Troubleshooting-Guide"}},s=[{value:"Gathering logs",id:"gathering-logs",children:[]}],b={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page describes how to capture logs for ACRA."),Object(o.b)("h2",{id:"gathering-logs"},"Gathering logs"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Enable dev logging by inserting this snippet before ",Object(o.b)("inlineCode",{parentName:"li"},"ACRA.init"),":")),Object(o.b)(i.a,{mdxType:"AndroidCode"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"ACRA.DEV_LOGGING = true\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"ACRA.DEV_LOGGING = true;\n"))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Create a new logcat filter, with log tag parameter ",Object(o.b)("inlineCode",{parentName:"li"},"ACRA"),":")),Object(o.b)("img",{src:c,alt:"logcat filter"}),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"If you want to report a bug or get help, stop your app and clear your logcat. Then start your app and do whatever you want to show, e.g. let it crash. Post all logs using the filter you created in 2.")))}p.isMDXComponent=!0},89:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";var n=r(0),a=r(93);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},93:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},95:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return m}));var n=r(0),a=r.n(n),o=r(92),i=r(89),c=r(56),l=r.n(c);var u=37,s=39;var b=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,b=e.values,p=e.groupId,d=e.className,f=Object(o.a)(),m=f.tabGroupChoices,g=f.setTabGroupChoices,v=Object(n.useState)(c),y=v[0],O=v[1],h=n.Children.toArray(e.children),j=[];if(null!=p){var w=m[p];null!=w&&w!==y&&b.some((function(e){return e.value===w}))&&O(w)}var C=function(e){var t=e.currentTarget,r=j.indexOf(t),n=b[r].value;O(n),null!=p&&(g(p,n),setTimeout((function(){var e,r,n,a,o,i,c,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,u=i.innerWidth,r>=0&&o<=u&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},E=function(e){var t,r;switch(e.keyCode){case s:var n=j.indexOf(e.target)+1;r=j[n]||j[0];break;case u:var a=j.indexOf(e.target)-1;r=j[a]||j[j.length-1]}null===(t=r)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},d)},b.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:C,onClick:C},r)}))),t?Object(n.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))};var p=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)};function d(e){var t=e.children,r=e.type,n=e.languages;return a.a.createElement(b,{defaultValue:"kotlin",groupId:r,values:n},t.map((function(e){var t=e.props.children.props,r=t&&t.className?t.className.replace(/^(language-)/,""):"kotlin";return a.a.createElement(p,{key:r,value:r},e)})))}function f(e){var t=e.children;return a.a.createElement(d,{type:"gradle",languages:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}]},t)}function m(e){var t=e.children;return a.a.createElement(d,{type:"android",languages:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}]},t)}}}]);