(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"/0HZ":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n,r=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),function(){return Object(o.b)("span",null,"Starting Elyra")}),c={},s=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),d={Title:l,_frontmatter:c},u=b.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(u,Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"PageDescription"},Object(o.b)("p",null,"After verifying Elyra has been installed, start Elyra with: ",Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"jupyter lab"),".")))}m.isMDXComponent=!0},"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),b=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),x=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(x.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12"},Object(x.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,l=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(x.b)("div",{className:"bx--row "+g.row},Object(x.b)("div",{className:"bx--col"},Object(x.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),T=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(x.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=i,t),T.listItem)},Object(x.b)(b.Link,{className:T.link,to:""+c},e))}));return Object(x.b)("div",{className:T.tabsContainer},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(x.b)("nav",{"aria-label":t},Object(x.b)("ul",{className:T.list},i))))))},t}(r.a.Component),h=a("MjG9"),w=a("CzIb"),P=a("Asxa"),y=a("OIbQ"),k=a.n(y),N=function(e){var t=e.date,a=new Date(t);return t?Object(x.b)(P.c,{className:k.a.row},Object(x.b)(P.a,null,Object(x.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,f=s.theme,T=s.description,P=s.keywords,y=s.date,k=Object(w.a)().interiorTheme,E=Object(b.useStaticQuery)("2456312558").site.pathPrefix,I=E?n.pathname.replace(E,""):n.pathname,C=m?I.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",H=f||k;return Object(x.b)(c.a,{tabs:m,homepage:!1,theme:H,pageTitle:g,pageDescription:T,pageKeywords:P,titleType:u},Object(x.b)(p,{title:r?Object(x.b)(r,null):g,label:"label",tabs:m,theme:H}),m&&Object(x.b)(v,{title:g,slug:I,tabs:m,currentTab:C}),Object(x.b)(h.a,{padded:!0},a,Object(x.b)(j,{relativePagePath:d}),Object(x.b)(N,{date:y})),Object(x.b)(O.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:C}),Object(x.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-getting-started-ai-starting-elyra-mdx-59f8888e69df9a770d15.js.map