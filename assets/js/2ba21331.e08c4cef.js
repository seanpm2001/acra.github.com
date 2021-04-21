(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return f})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return h})),n.d(t,"default",(function(){return w}));var i=n(3),a=n(7),o=n(0),r=n.n(o),l=n(90),s=n(94),c=n(75),d=n.n(c);function u(e){var t=e.children,n=e.src,i=e.alt;return r.a.createElement("div",{id:d.a.container},r.a.createElement("img",{id:d.a.float,src:n,alt:i}),t)}var g=n.p+"assets/images/toast-2906fe51ada0457d3659be83b99b46c2.png",m=n.p+"assets/images/dialog-9664f2575b9591f672c285a494c87502.png",p=n.p+"assets/images/notification-1995232157133ae76345efb2882b385c.png",f={sidebar_position:2},b={unversionedId:"Interactions",id:"Interactions",isDocsHomePage:!1,title:"Interactions",description:"The default behavior of ACRA is to send crash reports silently. From the application user point of view, the app closes, and that's all. Though, a report has been sent without the user being aware of it.",source:"@site/docs/Interactions.mdx",sourceDirName:".",slug:"/Interactions",permalink:"/docs/Interactions",editUrl:"https://github.com/acra/acra/edit/master/web/docs/Interactions.mdx",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/Setup"},next:{title:"Senders",permalink:"/docs/Senders"}},h=[{value:"Silent",id:"silent",children:[]},{value:"Toast",id:"toast",children:[]},{value:"Dialog",id:"dialog",children:[]},{value:"Notification",id:"notification",children:[]}],v={toc:h};function w(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The default behavior of ACRA is to send crash reports silently. From the application user point of view, the app closes, and that's all. Though, a report has been sent without the user being aware of it."),Object(l.b)("p",null,"Depending on the state of your application and your concern of your users data plan usage and private data handling, you might prefer notifying them that a crash report has been sent, or even ask them the authorization to send one... and why not ask them to describe what they were doing during the crash.\nThe following section details those user interactions."),Object(l.b)("h2",{id:"silent"},"Silent"),Object(l.b)("p",null,"Nothing shown, nothing to configure."),Object(l.b)(u,{src:g,alt:"Toast Example",mdxType:"SideImage"},Object(l.b)("h2",{id:"toast"},"Toast"),Object(l.b)("p",null,"A Toast with your text is shown. No user interaction."),Object(l.b)(s.a,{mdxType:"AndroidCode"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"toast { \n     //required\n    text = getString(R.string.toast_text)\n    //defaults to Toast.LENGTH_LONG\n    length = Toast.LENGTH_LONG \n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"getPluginConfigurationBuilder(ToastConfigurationBuilder.class)\n    //required\n    .withEnabled(true) \n    //required\n    .withResText(R.string.toast_text) \n    //defaults to Toast.LENGTH_LONG\n    .withLength(Toast.LENGTH_LONG) \n")))),Object(l.b)(u,{src:m,alt:"Dialog Example",mdxType:"SideImage"},Object(l.b)("h2",{id:"dialog"},"Dialog"),Object(l.b)("p",null,"A widely customizeable dialog is shown. A report will only be sent if the user agrees."),Object(l.b)(s.a,{mdxType:"AndroidCode"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"dialog {\n    //required\n    text = getString(R.string.dialog_text)\n    //optional, enables the dialog title\n    title = getString(R.string.dialog_title)\n    //defaults to android.R.string.ok\n    positiveButtonText = getString(R.string.dialog_positive)\n    //defaults to android.R.string.cancel\n    negativeButtonText = getString(R.string.dialog_negative)\n    //optional, enables the comment input\n    commentPrompt = getString(R.string.dialog_comment)\n    //optional, enables the email input\n    emailPrompt = getString(R.string.dialog_email)\n    //defaults to android.R.drawable.ic_dialog_alert\n    resIcon = R.drawable.dialog_icon\n    //optional, defaults to @android:style/Theme.Dialog\n    resTheme = R.style.dialog_theme\n    //allows other customization\n    reportDialogClass = MyCustomDialog::class.java\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"getPluginConfigurationBuilder(DialogConfigurationBuilder.class)\n    //required\n    .withEnabled(true)\n    //required\n    .withResText(R.string.dialog_text)\n    //optional, enables the dialog title\n    .withResTitle(R.string.dialog_title)\n    //defaults to android.R.string.ok\n    .withResPositiveButtonText(R.string.dialog_positive)\n    //defaults to android.R.string.cancel\n    .withResNegativeButtonText(R.string.dialog_negative)\n    //optional, enables the comment input\n    .withResCommentPrompt(R.string.dialog_comment)\n    //optional, enables the email input\n    .withResEmailPrompt(R.string.dialog_email)\n    //defaults to android.R.drawable.ic_dialog_alert\n    .withResIcon(R.drawable.dialog_icon)\n    //optional, defaults to @android:style/Theme.Dialog\n    .withResTheme(R.style.dialog_theme)\n    //allows other customization\n    .withReportDialogClass(MyCustomDialog.class)\n"))),Object(l.b)("p",null,"If you need more control than the configuration provides, you can set your own dialogactivity in ",Object(l.b)("inlineCode",{parentName:"p"},"reportDialogClass"),". Remember, activities have to be registered in the ",Object(l.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},'<activity\n    \x3c!-- required --\x3e\n    android:name="my.package.MyCustomDialog"\n    android:process=":acra"\n    \x3c!-- recommended --\x3e\n    android:excludeFromRecents="true"\n    android:finishOnTaskLaunch="true"\n    android:launchMode="singleInstance"/>\n'))),Object(l.b)(u,{src:p,alt:"Notification Example",mdxType:"SideImage"},Object(l.b)("h2",{id:"notification"},"Notification"),Object(l.b)("p",null,"A notification is shown. A report will only be sent if the user agrees."),Object(l.b)(s.a,{mdxType:"AndroidCode"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"notification {\n    //required\n    title = getString(R.string.notification_title)\n    //required\n    text = getString(R.string.notification_text)\n    //required\n    channelName = getString(R.string.notification_channel)\n    //optional channel description\n    channelDescription = getString(R.string.notification_channel_desc)\n    //defaults to NotificationManager.IMPORTANCE_HIGH\n    resChannelImportance = NotificationManager.IMPORTANCE_MAX\n    //optional, enables ticker text\n    tickerText = getString(R.string.notification_ticker)\n    //defaults to android.R.drawable.stat_sys_warning\n    resIcon = R.drawable.notification_icon\n    //defaults to android.R.string.ok\n    sendButtonText = getString(R.string.notification_send)\n    //defaults to android.R.drawable.ic_menu_send\n    resSendButtonIcon = R.drawable.notification_send\n    //defaults to android.R.string.cancel\n    discardButtonText = getString(R.string.notification_discard)\n    //defaults to android.R.drawable.ic_menu_delete\n    resDiscardButtonIcon = R.drawable.notification_discard\n    //optional, enables inline comment button\n    sendWithCommentButtonText = getString(R.string.notification_send_with_comment)\n    //required if above is set\n    resSendWithCommentButtonIcon = R.drawable.notification_send_with_comment\n    //optional inline comment hint\n    commentPrompt = getString(R.string.notification_comment)\n    //defaults to false\n    sendOnClick = false\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"getPluginConfigurationBuilder(NotificationConfigurationBuilder.class)\n    //required\n    .withEnabled(true)\n    //required\n    .withResTitle(R.string.notification_title)\n    //required\n    .withResText(R.string.notification_text)\n    //required\n    .withResChannelName(R.string.notification_channel)\n    //optional channel description\n    .withResChannelDescription(R.string.notification_channel_desc)\n    //defaults to NotificationManager.IMPORTANCE_HIGH\n    .withResChannelImportance(NotificationManager.IMPORTANCE_MAX)\n    //optional, enables ticker text\n    .withResTickerText(R.string.notification_ticker)\n    //defaults to android.R.drawable.stat_sys_warning\n    .withResIcon(R.drawable.notification_icon)\n    //defaults to android.R.string.ok\n    .withResSendButtonText(R.string.notification_send)\n    //defaults to android.R.drawable.ic_menu_send\n    .withResSendButtonIcon(R.drawable.notification_send)\n    //defaults to android.R.string.cancel\n    .withResDiscardButtonText(R.string.notification_discard)\n    //defaults to android.R.drawable.ic_menu_delete\n    .withResDiscardButtonIcon(R.drawable.notification_discard)\n    //optional, enables inline comment button\n    .withResSendWithCommentButtonText(R.string.notification_send_with_comment)\n    //required if above is set\n    .withResSendWithCommentButtonIcon(R.drawable.notification_send_with_comment)\n    //optional inline comment hint\n    .withResCommentPrompt(R.string.notification_comment)\n    //defaults to false\n    .withSendOnClick(false)\n")))))}w.isMDXComponent=!0},88:function(e,t,n){"use strict";function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,p=u["".concat(r,".").concat(m)]||u[m]||g[m]||o;return n?a.a.createElement(p,l(l({ref:t},c),{},{components:n})):a.a.createElement(p,l({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";var i=n(0),a=n(92);t.a=function(){var e=Object(i.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},92:function(e,t,n){"use strict";var i=n(0),a=Object(i.createContext)(void 0);t.a=a},94:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f}));var i=n(0),a=n.n(i),o=n(91),r=n(88),l=n(56),s=n.n(l);var c=37,d=39;var u=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,g=e.groupId,m=e.className,p=Object(o.a)(),f=p.tabGroupChoices,b=p.setTabGroupChoices,h=Object(i.useState)(l),v=h[0],w=h[1],R=i.Children.toArray(e.children),y=[];if(null!=g){var O=f[g];null!=O&&O!==v&&u.some((function(e){return e.value===O}))&&w(O)}var _=function(e){var t=e.currentTarget,n=y.indexOf(t),i=u[n].value;w(i),null!=g&&(b(g,i),setTimeout((function(){var e,n,i,a,o,r,l,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,o=e.right,r=window,l=r.innerHeight,c=r.innerWidth,n>=0&&o<=c&&a<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case d:var i=y.indexOf(e.target)+1;n=y[i]||y[0];break;case c:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:j,onFocus:_,onClick:_},n)}))),t?Object(i.cloneElement)(R.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},R.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var g=function(e){var t=e.children,n=e.hidden,i=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)};function m(e){var t=e.children,n=e.type,i=e.languages;return a.a.createElement(u,{defaultValue:"kotlin",groupId:n,values:i},t.map((function(e){var t=e.props.children.props,n=t&&t.className?t.className.replace(/^(language-)/,""):"kotlin";return a.a.createElement(g,{key:n,value:n},e)})))}function p(e){var t=e.children;return a.a.createElement(m,{type:"gradle",languages:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}]},t)}function f(e){var t=e.children;return a.a.createElement(m,{type:"android",languages:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}]},t)}}}]);