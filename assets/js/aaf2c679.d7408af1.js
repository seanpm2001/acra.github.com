(self.webpackChunkacra=self.webpackChunkacra||[]).push([[131],{8442:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(6076),s=["components"],l={sidebar_position:3},d=void 0,p={unversionedId:"Senders",id:"Senders",isDocsHomePage:!1,title:"Senders",description:"The following sections details the possible destinations for your crash reports: server backend, email, or any other destination you can imagine (if you implement the sender). And you can even send reports to multiple destinations.",source:"@site/docs/Senders.mdx",sourceDirName:".",slug:"/Senders",permalink:"/docs/Senders",editUrl:"https://github.com/acra/acra/edit/master/web/docs/Senders.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Interactions",permalink:"/docs/Interactions"},next:{title:"Backends",permalink:"/docs/Backends"}},u=[{value:"Choosing a content type",id:"choosing-a-content-type",children:[],level:2},{value:"Sending reports via HTTP",id:"sending-reports-via-http",children:[],level:2},{value:"Sending reports by email",id:"sending-reports-by-email",children:[],level:2},{value:"Implementing your own sender",id:"implementing-your-own-sender",children:[{value:"Registering your sender",id:"registering-your-sender",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following sections details the possible destinations for your crash reports: server backend, email, or any other destination you can imagine (if you implement the sender). And you can even send reports to multiple destinations."),(0,a.kt)("h2",{id:"choosing-a-content-type"},"Choosing a content type"),(0,a.kt)("p",null,"All official report senders support two types of report formats: ",(0,a.kt)("inlineCode",{parentName:"p"},"StringFormat.JSON")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"StringFormat.KEY_VALUE_LIST")," (form-data-compliant for http). Choose whichever your backend requires / which you like best:"),(0,a.kt)(i.l7,{mdxType:"AndroidCode"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"initAcra {\n    reportFormat = StringFormat.JSON\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"coreConfigurationBuilder.withReportFormat(StringFormat.JSON)\n"))),(0,a.kt)("h2",{id:"sending-reports-via-http"},"Sending reports via HTTP"),(0,a.kt)("p",null,"The most convenient way to send your report with no necessary user interaction is via HTTP."),(0,a.kt)(i.l7,{mdxType:"AndroidCode"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'httpSender {\n    //required. Https recommended\n    uri = "https://your.server.com/report"\n    //optional. Enables http basic auth\n    basicAuthLogin = "acra"\n    //required if above set\n    basicAuthPassword = "password"\n    // defaults to POST\n    httpMethod = HttpSender.Method.POST\n    //defaults to 5000ms\n    connectionTimeout = 5000\n    //defaults to 20000ms\n    socketTimeout = 20000\n    // defaults to false\n    dropReportsOnTimeout = false\n    //the following options allow you to configure a self signed certificate\n    keyStoreFactoryClass = MyKeyStoreFactory::class.java\n    certificatePath = "asset://mycert.cer"\n    resCertificate = R.raw.mycert\n    certificateType = "X.509"\n    //defaults to false. Recommended if your backend supports it\n    compress = false\n    //defaults to all\n    tlsProtocols = arrayOf(TLS.V1_3, TLS.V1_2, TLS.V1_1, TLS.V1)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'getPluginConfigurationBuilder(HttpSenderConfigurationBuilder.class)\n    //required. Https recommended\n    .withUri("https://your.server.com/report")\n    //optional. Enables http basic auth\n    .withBasicAuthLogin("acra")\n    //required if above set\n    .withBasicAuthPassword("password")\n    // defaults to POST\n    .withHttpMethod(HttpSender.Method.POST)\n    //defaults to 5000ms\n    .withConnectionTimeout(5000)\n    //defaults to 20000ms\n    .withSocketTimeout(20000)\n    // defaults to false\n    .withDropReportsOnTimeout(false)\n    //the following options allow you to configure a self signed certificate\n    .withKeyStoreFactoryClass(MyKeyStoreFactory::class.java)\n    .withCertificatePath("asset://mycert.cer")\n    .withResCertificate(R.raw.mycert)\n    .withCertificateType("X.509")\n    //defaults to false. Recommended if your backend supports it\n    .withCompress(false)\n    //defaults to all\n    .withTlsProtocols(arrayOf(TLS.V1_3, TLS.V1_2, TLS.V1_1, TLS.V1))\n'))),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," mode, ACRA adds the Report ID at the end of ",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," automatically."),(0,a.kt)("p",null,"See also ",(0,a.kt)("a",{parentName:"p",href:"Backends"},"Backends")),(0,a.kt)("h2",{id:"sending-reports-by-email"},"Sending reports by email"),(0,a.kt)("p",null,"For some applications, sending reports to a http based solution is not an option. The problem is that they require the ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERNET")," permission."),(0,a.kt)("p",null,"For pure offline applications, users might even be frightened to grant this permission and can be suspicious about the\nreal goal of the app or the developer."),(0,a.kt)("p",null,"To get crash reports without granting ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERNET")," permission, you can use the mail sender:"),(0,a.kt)(i.l7,{mdxType:"AndroidCode"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'mailSender {\n    //required\n    mailTo = "acra@yourserver.com"\n    //defaults to true\n    reportAsFile = true\n    //defaults to ACRA-report.stacktrace\n    reportFileName = "Crash.txt"\n    //defaults to "<applicationId> Crash Report"\n    subject = getString(R.string.mail_subject)\n    //defaults to empty\n    body = getString(R.string.mail_body)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'getPluginConfigurationBuilder(MailSenderConfigurationBuilder.class)\n    //required\n    .withMailTo("acra@yourserver.com")\n    //defaults to true\n    .withReportAsFile(true)\n    //defaults to ACRA-report.stacktrace\n    .withReportFileName("Crash.txt")\n    //defaults to "<applicationId> Crash Report"\n    .withSubject(getString(R.string.mail_subject))\n    //defaults to empty\n    .withBody(getString(R.string.mail_body))\n'))),(0,a.kt)("p",null,"Emails are sent with an ",(0,a.kt)("inlineCode",{parentName:"p"},"ACTION_SEND_MULTIPLE")," intent. This means that the following steps are required for the application user before any report is sent:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pick preferred email client (if no default app set)"),(0,a.kt)("li",{parentName:"ul"},"review & actually send the email")),(0,a.kt)("h2",{id:"implementing-your-own-sender"},"Implementing your own sender"),(0,a.kt)("p",null,"You can implement your own ",(0,a.kt)("inlineCode",{parentName:"p"},"ReportSender")," and configure ACRA to use that instead of or in addition to other senders."),(0,a.kt)(i.l7,{mdxType:"AndroidCode"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class YourOwnSender : ReportSender {\n\n  override fun send(context: Context, report: CrashReportData) {\n    // Iterate over the CrashReportData instance and do whatever\n    // you need with each pair of ReportField key / String value\n  }\n}\n\nclass YourOwnSenderfactory : ReportSenderFactory {\n\n    // requires a no arg constructor.\n\n    override fun create(context: Context, config: ACRAConfiguration) : ReportSender {\n        return YourOwnSender()\n    }\n\n    //optional implementation in case you want to disable your sender in certain cases\n    override fun enabled(coreConfig : CoreConfiguration) : Boolean {\n        return true\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class YourOwnSender implements ReportSender {\n\n    @Override\n    public void send(Context context, CrashReportData report) throws ReportSenderException {\n        // Iterate over the CrashReportData instance and do whatever\n        // you need with each pair of ReportField key / String value\n    }\n}\n\npublic class YourOwnSenderfactory implements ReportSenderFactory {\n\n    // requires a no arg constructor.\n\n    @Override\n    public ReportSender create(Context context, ACRAConfiguration config) {\n        return new YourOwnSender(someConfigPerhaps);\n    }\n\n    //optional implementation in case you want to disable your sender in certain cases\n    @Override\n    public boolean enabled(@NonNull CoreConfiguration coreConfig) {\n        return true;\n    }\n}\n"))),(0,a.kt)("h3",{id:"registering-your-sender"},"Registering your sender"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/Custom-Extensions"},"Custom extensions"),"."),(0,a.kt)("p",null,"You can also look at our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ACRA/acra/tree/master/examples"},"example projects"),", which contain an example of a custom sender each."))}m.isMDXComponent=!0}}]);