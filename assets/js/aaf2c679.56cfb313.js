(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(90)),i=n(94),s={sidebar_position:3},c={unversionedId:"Senders",id:"Senders",isDocsHomePage:!1,title:"Senders",description:"The following sections details the possible destinations for your crash reports: server backend, email, or any other destination you can imagine (if you implement the sender). And you can even send reports to multiple destinations.",source:"@site/docs/Senders.mdx",sourceDirName:".",slug:"/Senders",permalink:"/docs/Senders",editUrl:"https://github.com/acra/acra.github.com/edit/master/website/docs/Senders.mdx",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Interactions",permalink:"/docs/Interactions"},next:{title:"Backends",permalink:"/docs/Backends"}},l=[{value:"Choosing a content type",id:"choosing-a-content-type",children:[]},{value:"Sending reports via HTTP",id:"sending-reports-via-http",children:[]},{value:"Sending reports by email",id:"sending-reports-by-email",children:[]},{value:"Implementing your own sender",id:"implementing-your-own-sender",children:[{value:"Registering your sender",id:"registering-your-sender",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following sections details the possible destinations for your crash reports: server backend, email, or any other destination you can imagine (if you implement the sender). And you can even send reports to multiple destinations."),Object(o.b)("h2",{id:"choosing-a-content-type"},"Choosing a content type"),Object(o.b)("p",null,"All official report senders support two types of report formats: ",Object(o.b)("inlineCode",{parentName:"p"},"StringFormat.JSON")," and ",Object(o.b)("inlineCode",{parentName:"p"},"StringFormat.KEY_VALUE_LIST")," (form-data-compliant for http). Choose whichever your backend requires / which you like best:"),Object(o.b)(i.a,{mdxType:"AndroidCode"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"initAcra {\n    reportFormat = StringFormat.JSON\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"coreConfigurationBuilder.withReportFormat(StringFormat.JSON)\n"))),Object(o.b)("h2",{id:"sending-reports-via-http"},"Sending reports via HTTP"),Object(o.b)("p",null,"The most convenient way to send your report with no necessary user interaction is via HTTP."),Object(o.b)(i.a,{mdxType:"AndroidCode"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'httpSender {\n    //required. Https recommended\n    uri = "https://your.server.com/report"\n    //optional. Enables http basic auth\n    basicAuthLogin = "acra"\n    //required if above set\n    basicAuthPassword = "password"\n    // defaults to POST\n    httpMethod = HttpSender.Method.POST\n    //defaults to 5000ms\n    connectionTimeout = 5000\n    //defaults to 20000ms\n    socketTimeout = 20000\n    // defaults to false\n    dropReportsOnTimeout = false\n    //the following options allow you to configure a self signed certificate\n    keyStoreFactoryClass = MyKeyStoreFactory::class.java\n    certificatePath = "asset://mycert.cer"\n    resCertificate = R.raw.mycert\n    certificateType = "X.509"\n    //defaults to false. Recommended if your backend supports it\n    compress = false\n    //defaults to all\n    tlsProtocols = arrayOf(TLS.V1_3, TLS.V1_2, TLS.V1_1, TLS.V1)\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'getPluginConfigurationBuilder(HttpSenderConfigurationBuilder.class)\n    //required. Https recommended\n    .withUri("https://your.server.com/report")\n    //optional. Enables http basic auth\n    .withBasicAuthLogin("acra")\n    //required if above set\n    .withBasicAuthPassword("password")\n    // defaults to POST\n    .withHttpMethod(HttpSender.Method.POST)\n    //defaults to 5000ms\n    .withConnectionTimeout(5000)\n    //defaults to 20000ms\n    .withSocketTimeout(20000)\n    // defaults to false\n    .withDropReportsOnTimeout(false)\n    //the following options allow you to configure a self signed certificate\n    .withKeyStoreFactoryClass(MyKeyStoreFactory::class.java)\n    .withCertificatePath("asset://mycert.cer")\n    .withResCertificate(R.raw.mycert)\n    .withCertificateType("X.509")\n    //defaults to false. Recommended if your backend supports it\n    .withCompress(false)\n    //defaults to all\n    .withTlsProtocols(arrayOf(TLS.V1_3, TLS.V1_2, TLS.V1_1, TLS.V1))\n'))),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"PUT")," mode, ACRA adds the Report ID at the end of ",Object(o.b)("inlineCode",{parentName:"p"},"uri")," automatically."),Object(o.b)("p",null,"See also ",Object(o.b)("a",{parentName:"p",href:"Backends"},"Backends")),Object(o.b)("h2",{id:"sending-reports-by-email"},"Sending reports by email"),Object(o.b)("p",null,"For some applications, sending reports to a http based solution is not an option. The problem is that they require the ",Object(o.b)("inlineCode",{parentName:"p"},"INTERNET")," permission."),Object(o.b)("p",null,"For pure offline applications, users might even be frightened to grant this permission and can be suspicious about the\nreal goal of the app or the developer."),Object(o.b)("p",null,"To get crash reports without granting ",Object(o.b)("inlineCode",{parentName:"p"},"INTERNET")," permission, you can use the mail sender:"),Object(o.b)(i.a,{mdxType:"AndroidCode"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'mailSender {\n    //required\n    mailTo = "acra@yourserver.com"\n    //defaults to true\n    reportAsFile = true\n    //defaults to ACRA-report.stacktrace\n    reportFileName = "Crash.txt"\n    //defaults to "<applicationId> Crash Report"\n    subject = getString(R.string.mail_subject)\n    //defaults to empty\n    body = getString(R.string.mail_body)\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'getPluginConfigurationBuilder(MailSenderConfigurationBuilder.class)\n    //required\n    .withMailTo("acra@yourserver.com")\n    //defaults to true\n    .withReportAsFile(true)\n    //defaults to ACRA-report.stacktrace\n    .withReportFileName("Crash.txt")\n    //defaults to "<applicationId> Crash Report"\n    .withSubject(getString(R.string.mail_subject))\n    //defaults to empty\n    .withBody(getString(R.string.mail_body))\n'))),Object(o.b)("p",null,"Emails are sent with an ",Object(o.b)("inlineCode",{parentName:"p"},"ACTION_SEND_MULTIPLE")," intent. This means that the following steps are required for the application user before any report is sent:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"pick preferred email client (if no default app set)"),Object(o.b)("li",{parentName:"ul"},"review & actually send the email")),Object(o.b)("h2",{id:"implementing-your-own-sender"},"Implementing your own sender"),Object(o.b)("p",null,"You can implement your own ",Object(o.b)("inlineCode",{parentName:"p"},"ReportSender")," and configure ACRA to use that instead of or in addition to other senders."),Object(o.b)(i.a,{mdxType:"AndroidCode"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"class YourOwnSender : ReportSender {\n\n  override fun send(context: Context, report: CrashReportData) {\n    // Iterate over the CrashReportData instance and do whatever\n    // you need with each pair of ReportField key / String value\n  }\n}\n\nclass YourOwnSenderfactory : ReportSenderFactory {\n\n    // requires a no arg constructor.\n\n    override fun create(context: Context, config: ACRAConfiguration) : ReportSender {\n        return YourOwnSender()\n    }\n\n    //optional implementation in case you want to disable your sender in certain cases\n    override fun enabled(coreConfig : CoreConfiguration) : Boolean {\n        return true\n    }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public class YourOwnSender implements ReportSender {\n\n    @Override\n    public void send(Context context, CrashReportData report) throws ReportSenderException {\n        // Iterate over the CrashReportData instance and do whatever\n        // you need with each pair of ReportField key / String value\n    }\n}\n\npublic class YourOwnSenderfactory implements ReportSenderFactory {\n\n    // requires a no arg constructor.\n\n    @Override\n    public ReportSender create(Context context, ACRAConfiguration config) {\n        return new YourOwnSender(someConfigPerhaps);\n    }\n\n    //optional implementation in case you want to disable your sender in certain cases\n    @Override\n    public boolean enabled(@NonNull CoreConfiguration coreConfig) {\n        return true;\n    }\n}\n"))),Object(o.b)("h3",{id:"registering-your-sender"},"Registering your sender"),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"Custom-Extensions"},"Custom extensions")))}d.isMDXComponent=!0},88:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";var r=n(0),a=n(92);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},92:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},94:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r),o=n(91),i=n(88),s=n(56),c=n.n(s);var l=37,u=39;var d=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(o.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,g=Object(r.useState)(s),y=g[0],v=g[1],O=r.Children.toArray(e.children),j=[];if(null!=p){var w=f[p];null!=w&&w!==y&&d.some((function(e){return e.value===w}))&&v(w)}var C=function(e){var t=e.currentTarget,n=j.indexOf(t),r=d[n].value;v(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,a,o,i,s,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case u:var r=j.indexOf(e.target)+1;n=j[r]||j[0];break;case l:var a=j.indexOf(e.target)-1;n=j[a]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:C,onClick:C},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))};var p=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)};function b(e){var t=e.children,n=e.type,r=e.languages;return a.a.createElement(d,{defaultValue:"kotlin",groupId:n,values:r},t.map((function(e){var t=e.props.children.props,n=t&&t.className?t.className.replace(/^(language-)/,""):"kotlin";return a.a.createElement(p,{key:n,value:n},e)})))}function m(e){var t=e.children;return a.a.createElement(b,{type:"gradle",languages:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}]},t)}function f(e){var t=e.children;return a.a.createElement(b,{type:"android",languages:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}]},t)}}}]);