"use strict";(self.webpackChunkacra=self.webpackChunkacra||[]).push([[131],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6966:function(e,t,n){n.d(t,{l7:function(){return g},TP:function(){return h}});var r=n(7294),a=n(7462),o=n(2389),i=n(9443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),u=n(6010),c="tabItem_1uMI";function p(e){var t,n,a,o=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),k=b.tabGroupChoices,w=b.setTabGroupChoices,S=(0,r.useState)(v),C=S[0],T=S[1],N=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=k[m];null!=R&&R!==C&&g.some((function(e){return e.value===R}))&&T(R)}var E=function(e){var t=e.currentTarget,n=N.indexOf(t),r=g[n].value;r!==C&&(O(t),T(r),null!=m&&w(m,r))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},f)},g.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":C===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:E,onClick:E},null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}var m=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)};function f(e){var t=e.children,n=e.type,a=e.languages;return r.createElement(d,{defaultValue:"kotlin",groupId:n,values:a},t.map((function(e){var t=e.props.children.props,n=t&&t.className?t.className.replace(/^(language-)/,""):"kotlin";return r.createElement(m,{key:n,value:n},e)})))}function h(e){var t=e.children;return r.createElement(f,{type:"gradle",languages:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}]},t)}function g(e){var t=e.children;return r.createElement(f,{type:"android",languages:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}]},t)}},8442:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(6966),l=["components"],s={sidebar_position:3},u=void 0,c={unversionedId:"Senders",id:"Senders",title:"Senders",description:"The following sections details the possible destinations for your crash reports: server backend, email, or any other destination you can imagine (if you implement the sender). And you can even send reports to multiple destinations.",source:"@site/docs/Senders.mdx",sourceDirName:".",slug:"/Senders",permalink:"/docs/Senders",editUrl:"https://github.com/acra/acra/edit/master/web/docs/Senders.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Interactions",permalink:"/docs/Interactions"},next:{title:"Backends",permalink:"/docs/Backends"}},p=[{value:"Choosing a content type",id:"choosing-a-content-type",children:[],level:2},{value:"Sending reports via HTTP",id:"sending-reports-via-http",children:[],level:2},{value:"Sending reports by email",id:"sending-reports-by-email",children:[],level:2},{value:"Implementing your own sender",id:"implementing-your-own-sender",children:[{value:"Registering your sender",id:"registering-your-sender",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following sections details the possible destinations for your crash reports: server backend, email, or any other destination you can imagine (if you implement the sender). And you can even send reports to multiple destinations."),(0,o.kt)("h2",{id:"choosing-a-content-type"},"Choosing a content type"),(0,o.kt)("p",null,"All official report senders support two types of report formats: ",(0,o.kt)("inlineCode",{parentName:"p"},"StringFormat.JSON")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"StringFormat.KEY_VALUE_LIST")," (form-data-compliant for http). Choose whichever your backend requires / which you like best:"),(0,o.kt)(i.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"initAcra {\n    reportFormat = StringFormat.JSON\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"coreConfigurationBuilder.withReportFormat(StringFormat.JSON)\n"))),(0,o.kt)("h2",{id:"sending-reports-via-http"},"Sending reports via HTTP"),(0,o.kt)("p",null,"The most convenient way to send your report with no necessary user interaction is via HTTP."),(0,o.kt)(i.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'httpSender {\n    //required. Https recommended\n    uri = "https://your.server.com/report"\n    //optional. Enables http basic auth\n    basicAuthLogin = "acra"\n    //required if above set\n    basicAuthPassword = "password"\n    // defaults to POST\n    httpMethod = HttpSender.Method.POST\n    //defaults to 5000ms\n    connectionTimeout = 5000\n    //defaults to 20000ms\n    socketTimeout = 20000\n    // defaults to false\n    dropReportsOnTimeout = false\n    //the following options allow you to configure a self signed certificate\n    keyStoreFactoryClass = MyKeyStoreFactory::class.java\n    certificatePath = "asset://mycert.cer"\n    resCertificate = R.raw.mycert\n    certificateType = "X.509"\n    //defaults to false. Recommended if your backend supports it\n    compress = false\n    //defaults to all\n    tlsProtocols = arrayOf(TLS.V1_3, TLS.V1_2, TLS.V1_1, TLS.V1)\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'getPluginConfigurationBuilder(HttpSenderConfigurationBuilder.class)\n    //required. Https recommended\n    .withUri("https://your.server.com/report")\n    //optional. Enables http basic auth\n    .withBasicAuthLogin("acra")\n    //required if above set\n    .withBasicAuthPassword("password")\n    // defaults to POST\n    .withHttpMethod(HttpSender.Method.POST)\n    //defaults to 5000ms\n    .withConnectionTimeout(5000)\n    //defaults to 20000ms\n    .withSocketTimeout(20000)\n    // defaults to false\n    .withDropReportsOnTimeout(false)\n    //the following options allow you to configure a self signed certificate\n    .withKeyStoreFactoryClass(MyKeyStoreFactory::class.java)\n    .withCertificatePath("asset://mycert.cer")\n    .withResCertificate(R.raw.mycert)\n    .withCertificateType("X.509")\n    //defaults to false. Recommended if your backend supports it\n    .withCompress(false)\n    //defaults to all\n    .withTlsProtocols(arrayOf(TLS.V1_3, TLS.V1_2, TLS.V1_1, TLS.V1))\n'))),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT")," mode, ACRA adds the Report ID at the end of ",(0,o.kt)("inlineCode",{parentName:"p"},"uri")," automatically."),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"Backends"},"Backends")),(0,o.kt)("h2",{id:"sending-reports-by-email"},"Sending reports by email"),(0,o.kt)("p",null,"For some applications, sending reports to a http based solution is not an option. The problem is that they require the ",(0,o.kt)("inlineCode",{parentName:"p"},"INTERNET")," permission."),(0,o.kt)("p",null,"For pure offline applications, users might even be frightened to grant this permission and can be suspicious about the\nreal goal of the app or the developer."),(0,o.kt)("p",null,"To get crash reports without granting ",(0,o.kt)("inlineCode",{parentName:"p"},"INTERNET")," permission, you can use the mail sender:"),(0,o.kt)(i.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'mailSender {\n    //required\n    mailTo = "acra@yourserver.com"\n    //defaults to true\n    reportAsFile = true\n    //defaults to ACRA-report.stacktrace\n    reportFileName = "Crash.txt"\n    //defaults to "<applicationId> Crash Report"\n    subject = getString(R.string.mail_subject)\n    //defaults to empty\n    body = getString(R.string.mail_body)\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'getPluginConfigurationBuilder(MailSenderConfigurationBuilder.class)\n    //required\n    .withMailTo("acra@yourserver.com")\n    //defaults to true\n    .withReportAsFile(true)\n    //defaults to ACRA-report.stacktrace\n    .withReportFileName("Crash.txt")\n    //defaults to "<applicationId> Crash Report"\n    .withSubject(getString(R.string.mail_subject))\n    //defaults to empty\n    .withBody(getString(R.string.mail_body))\n'))),(0,o.kt)("p",null,"Emails are sent with an ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTION_SEND_MULTIPLE")," intent. This means that the following steps are required for the application user before any report is sent:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pick preferred email client (if no default app set)"),(0,o.kt)("li",{parentName:"ul"},"review & actually send the email")),(0,o.kt)("h2",{id:"implementing-your-own-sender"},"Implementing your own sender"),(0,o.kt)("p",null,"You can implement your own ",(0,o.kt)("inlineCode",{parentName:"p"},"ReportSender")," and configure ACRA to use that instead of or in addition to other senders."),(0,o.kt)(i.l7,{mdxType:"AndroidCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class YourOwnSender : ReportSender {\n\n  override fun send(context: Context, report: CrashReportData) {\n    // Iterate over the CrashReportData instance and do whatever\n    // you need with each pair of ReportField key / String value\n  }\n}\n\nclass YourOwnSenderfactory : ReportSenderFactory {\n\n    // requires a no arg constructor.\n\n    override fun create(context: Context, config: ACRAConfiguration) : ReportSender {\n        return YourOwnSender()\n    }\n\n    //optional implementation in case you want to disable your sender in certain cases\n    override fun enabled(coreConfig : CoreConfiguration) : Boolean {\n        return true\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class YourOwnSender implements ReportSender {\n\n    @Override\n    public void send(Context context, CrashReportData report) throws ReportSenderException {\n        // Iterate over the CrashReportData instance and do whatever\n        // you need with each pair of ReportField key / String value\n    }\n}\n\npublic class YourOwnSenderfactory implements ReportSenderFactory {\n\n    // requires a no arg constructor.\n\n    @Override\n    public ReportSender create(Context context, ACRAConfiguration config) {\n        return new YourOwnSender(someConfigPerhaps);\n    }\n\n    //optional implementation in case you want to disable your sender in certain cases\n    @Override\n    public boolean enabled(@NonNull CoreConfiguration coreConfig) {\n        return true;\n    }\n}\n"))),(0,o.kt)("h3",{id:"registering-your-sender"},"Registering your sender"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/Custom-Extensions"},"Custom extensions"),"."),(0,o.kt)("p",null,"You can also look at our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ACRA/acra/tree/master/examples"},"example projects"),", which contain an example of a custom sender each."))}m.isMDXComponent=!0}}]);