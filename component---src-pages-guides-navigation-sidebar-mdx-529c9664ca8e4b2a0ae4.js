(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),o=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),d=a.n(c),m=a("QH2O"),p=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,s=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),v=a("dI71"),x=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===i,s=new RegExp(i+"/?(#.*)?$"),b=n.replace(s,a);return Object(u.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=r,t),x.listItem)},Object(u.b)(o.Link,{className:x.link,to:""+b},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:x.list},r))))))},t}(i.a.Component),N=a("MjG9"),w=a("CzIb"),y=a("Asxa"),P=a("OIbQ"),T=a.n(P),k=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(y.c,{className:T.a.row},Object(u.b)(y.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,d=t.relativePagePath,m=t.titleType,p=c.tabs,h=c.title,v=c.theme,x=c.description,y=c.keywords,P=c.date,T=Object(w.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,D=p?C.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",M=v||T;return Object(u.b)(b.a,{tabs:p,homepage:!1,theme:M,pageTitle:h,pageDescription:x,pageKeywords:y,titleType:m},Object(u.b)(g,{title:i?Object(u.b)(i,null):h,label:"label",tabs:p,theme:M}),p&&Object(u.b)(f,{title:h,slug:C,tabs:p,currentTab:D}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:d}),Object(u.b)(k,{date:P})),Object(u.b)(O.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:D}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},dnMk:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n,i=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),{}),b=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),c={_frontmatter:s},d=o.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(d,Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b,{mdxType:"PageDescription"},Object(l.b)("p",null,"One of the most important pieces of making a working site is to define your\nnavigation items. This allows the theme to inform the SideNav component as well\nas the next/previous components at the bottom of each page.")),Object(l.b)("h2",null,"Yaml data"),Object(l.b)("p",null,"Unfortunately, genenerating left nav contents purely from the pages directory\nhas some fatal flaws. It makes it very difficult to establish the order of items\nor to hide items all together. In ",Object(l.b)("inlineCode",{parentName:"p"},"src/data/nav-items.yaml"),", you’ll list your\nnav items in order."),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"- title: Menu\n  pages:\n    - title: Page 1\n      path: /menu/Page-1\n    - title: Page 2\n      path: /menu/Page-2\n- title: Single Page\n  pages:\n    - path: /single-page\n")),Object(l.b)("p",null,"Some important things to note here:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You only need to link to the first tab if using page tabs"),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"title")," refers to the menu and item text, it’s allowed to have spaces"),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"path")," refer to the relative path to the mdx file in your pages"),Object(l.b)("li",{parentName:"ul"},"You can make a ",Object(l.b)("inlineCode",{parentName:"li"},"Page/index.mdx")," file if you’d prefer to have assets in a\nfolder. The path would still just look like ",Object(l.b)("inlineCode",{parentName:"li"},"/Page"))),Object(l.b)("h2",null,"Adding a divider"),Object(l.b)("p",null,"You can insert a divider below any top-level nav item by adding the\n",Object(l.b)("inlineCode",{parentName:"p"},"hasDivider: true")," property to it’s configuration under\n",Object(l.b)("inlineCode",{parentName:"p"},"src/data/nav-items.yaml"),". ",Object(l.b)("strong",{parentName:"p"},"Note:")," dividers can only be use with top-level nav\nitems and are incompatible with the\n",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/website/guides/configuration#navigation-style"}),"header navigation style"),"."),Object(l.b)("p",null,"When shadowed, the ",Object(l.b)("inlineCode",{parentName:"p"},"ResourceLinks")," component can optionally receive an\n",Object(l.b)("inlineCode",{parentName:"p"},"includeDividerSpace")," prop. Set this to false if you want to remove the margin\nabove and below the ",Object(l.b)("inlineCode",{parentName:"p"},"ResourceLinks")," divider."),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"- title: Menu\n  pages:\n    - title: Page 1\n      path: /menu/Page-1\n    - title: Page 2\n      path: /menu/Page-2\n  hasDivider: true\n- title: Single Page\n  pages:\n    - path: /single-page\n")),Object(l.b)("p",null,"In the example above, a divider will appear between ",Object(l.b)("strong",{parentName:"p"},"Menu")," and ",Object(l.b)("strong",{parentName:"p"},"Single\nPage"),"."),Object(l.b)("h2",null,"Customizing"),Object(l.b)("p",null,"The nav item list can be customized using Gatsby theme\n",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/website/guides/shadowing"}),"shadowing"),". Simply provide your own implementation of\n",Object(l.b)("inlineCode",{parentName:"p"},"/src/util/NavItems.js")," which can augment or replace the nav items read from\n",Object(l.b)("inlineCode",{parentName:"p"},"src/data/nav-items.yaml"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"// /src/util/NavItems.js\nimport { useNavItems as themeUseNavItems } from 'gatsby-theme-carbon/src/util/NavItems';\n\n// add nav items\nexport function useNavItems() {\n  const navItems = themeUseNavItems();\n  return navItems.concat({\n    title: 'Additional Nav Item',\n    pages: [\n      { path: '/page1', title: 'New Page 1' },\n      { path: '/page2', title: 'New Page 2' },\n    ],\n  });\n}\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-navigation-sidebar-mdx-529c9664ca8e4b2a0ae4.js.map