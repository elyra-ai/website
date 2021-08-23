(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),b=a.n(o),s=a("Wbzz"),l=a("Xrax"),i=a("k4MR"),c=a("TSYQ"),d=a.n(c),m=a("QH2O"),u=a.n(m),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},x=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,l=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),g=a("dI71"),w=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),o=a===r,l=new RegExp(r+"/?(#.*)?$"),i=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=o,t),w.listItem)},Object(p.b)(s.Link,{className:w.link,to:""+i},e))}));return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:w.list},o))))))},t}(r.a.Component),f=a("MjG9"),v=a("CzIb"),N=a("Asxa"),y=a("OIbQ"),k=a.n(y),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(N.c,{className:k.a.row},Object(p.b)(N.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,c=void 0===o?{}:o,d=t.relativePagePath,m=t.titleType,u=c.tabs,x=c.title,g=c.theme,w=c.description,N=c.keywords,y=c.date,k=Object(v.a)().interiorTheme,C=Object(s.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,D=u?I.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"",E=g||k;return Object(p.b)(i.a,{tabs:u,homepage:!1,theme:E,pageTitle:x,pageDescription:w,pageKeywords:N,titleType:m},Object(p.b)(h,{title:r?Object(p.b)(r,null):x,label:"label",tabs:u,theme:E}),u&&Object(p.b)(T,{title:x,slug:I,tabs:u,currentTab:D}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(P,{date:y})),Object(p.b)(O.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:D}),Object(p.b)(l.a,null))}},AsDm:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),b=a("013z"),s=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},i=l("PageDescription"),c=l("Title"),d={_frontmatter:s},m=b.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i,{mdxType:"PageDescription"},Object(o.b)("p",null,"When authoring markdown using the Carbon Gatsby theme, code blocks have some\nextra super powers you can take advantage of. We provide carbon-themed syntax\nhighlighting as well as optional ",Object(o.b)("inlineCode",{parentName:"p"},"path")," and ",Object(o.b)("inlineCode",{parentName:"p"},"src")," features.")),Object(o.b)("h2",null,"Example"),Object(o.b)(c,{mdxType:"Title"},"Horizontal overflow"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"}),"## Path and src w/ overflow\n\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\n")),Object(o.b)(c,{mdxType:"Title"},"Vertical overflow"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"}),"## Path and src w/ overflow\n\nThis example demonstrates the show more button. This example demonstrates the\nshow more button. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button.\n")),Object(o.b)("h2",null,"Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"```markdown path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh\n### Path and src\n\nThis code snippet provides both a `path` and a `src`.\n```\n")),Object(o.b)("h3",null,"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"property"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"propType"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"language"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"}),"Available languages."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"src"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The full url of a relevant link (source)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"path"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A string indicating the filename or path. Due to markdown limitations this can only be a single word")))))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-code-blocks-mdx-fc5864816caac50ac958.js.map