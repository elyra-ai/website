(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("NmYn"),r=a.n(l),A=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),o=a.n(c),d=a("QH2O"),u=a.n(d),p=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,i=e.tabs,l=void 0===i?[]:i;return Object(p.b)("div",{className:o()(u.a.pageHeader,(t={},t[u.a.withTabs]=l.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(A.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,l=i.baseUrl,r=i.subDirectory,b=l+"/edit/"+i.branch+r+"/src/pages"+t;return l?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),x=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),l=a===i,b=new RegExp(i+"/?(#.*)?$"),s=n.replace(b,a);return Object(p.b)("li",{key:e,className:o()((t={},t[x.selectedItem]=l,t),x.listItem)},Object(p.b)(A.Link,{className:x.link,to:""+s},e))}));return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:x.list},l))))))},t}(i.a.Component),f=a("MjG9"),y=a("CzIb"),w=a("Asxa"),v=a("OIbQ"),B=a.n(v),E=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:B.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:B.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,l=t.frontmatter,c=void 0===l?{}:l,o=t.relativePagePath,d=t.titleType,u=c.tabs,j=c.title,h=c.theme,x=c.description,w=c.keywords,v=c.date,B=Object(y.a)().interiorTheme,T=Object(A.useStaticQuery)("2456312558").site.pathPrefix,k=T?n.pathname.replace(T,""):n.pathname,C=u?k.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",Q=h||B;return Object(p.b)(s.a,{tabs:u,homepage:!1,theme:Q,pageTitle:j,pageDescription:x,pageKeywords:w,titleType:d},Object(p.b)(m,{title:i?Object(p.b)(i,null):j,label:"label",tabs:u,theme:Q}),u&&Object(p.b)(N,{title:j,slug:k,tabs:u,currentTab:C}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:o}),Object(p.b)(E,{date:v})),Object(p.b)(O.a,{pageContext:t,location:n,slug:k,tabs:u,currentTab:C}),Object(p.b)(b.a,null))}},"2qMs":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var n,i=a("wx14"),l=a("zLVn"),r=(a("q1tI"),a("7ljp")),A=a("013z"),b=(a("qKvR"),{}),s=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),c={_frontmatter:b},o=A.a;function d(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(o,Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"Sites built with the Carbon Gatsby theme starter come ready to go with some\nhelpful npm scripts. You can run these commands by typing ",Object(r.b)("inlineCode",{parentName:"p"},"yarn [command]")," or\n",Object(r.b)("inlineCode",{parentName:"p"},"npm run [command]"))),Object(r.b)("h2",null,"Clean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"clean")," - this is used to clean gatsby’s cache and public directory. It\nshould be used sparingly, only when you’re experiencing weird errors or\ncaching issues.")),Object(r.b)("h2",null,"Develop"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"develop")," - this is your primary for starting up your gatsby site for\ndevelopment"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"develop:clean")," - this is provided as a convenience; it first runs ",Object(r.b)("inlineCode",{parentName:"li"},"clean"),"\nthen ",Object(r.b)("inlineCode",{parentName:"li"},"develop"))),Object(r.b)("h2",null,"Build"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"build")," - this is what you’ll use to bundle your site. Gatsby will minimize\nyour images and create a static, blazing fast site in your ",Object(r.b)("inlineCode",{parentName:"li"},"public")," directory"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"serve")," - this can be run to serve the bundle locally after running ",Object(r.b)("inlineCode",{parentName:"li"},"build"),".\nIt can be used to debug locally if any issues are encountered durring build."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"build:clean")," - this is a provided as a convenience, it first runs ",Object(r.b)("inlineCode",{parentName:"li"},"clean"),"\nthen ",Object(r.b)("inlineCode",{parentName:"li"},"build")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"build:prefix")," - this will append all of your links with a\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.gatsbyjs.org/docs/path-prefix/"}),Object(r.b)("inlineCode",{parentName:"a"},"pathPrefix"))," specified in your\n",Object(r.b)("inlineCode",{parentName:"li"},"gatsby-config.js")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"serve:prefix")," - this will allow you to serve the file locally using a\nprefixed site built with ",Object(r.b)("inlineCode",{parentName:"li"},"build:prefix")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"test:prefix")," - this is provided as a convenience; it first runs\n",Object(r.b)("inlineCode",{parentName:"li"},"build:prefix")," then ",Object(r.b)("inlineCode",{parentName:"li"},"test:prefix")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"build:analyze")," - this will run build while also running\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"}),"webpack-bundle-analyzer"),"\nto help debug bundle size issues\n",Object(r.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.05555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAA//aAAwDAQACEAMQAAAB001rlnlBsv/EABkQAQADAQEAAAAAAAAAAAAAAAEAAiEREv/aAAgBAQABBQLzWOLfessDGhP/xAAZEQABBQAAAAAAAAAAAAAAAAAAAhESEzH/2gAIAQMBAT8Bk2lyT//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwFOkP/EABcQAAMBAAAAAAAAAAAAAAAAAAEgMZH/2gAIAQEABj8Cpxv/xAAZEAADAQEBAAAAAAAAAAAAAAAAARFRITH/2gAIAQEAAT8hq4RVPCUVi2Z1Wirw/9oADAMBAAIAAwAAABC43//EABcRAAMBAAAAAAAAAAAAAAAAAAABEWH/2gAIAQMBAT8QVhiz/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8QaH//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMVFh/9oACAEBAAE/EN9RhSjv2LgZ01HegnS5SO3dpiiC3zIltJ//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"webpack bundle analysis screenshot",title:"webpack bundle analysis screenshot",src:"/elyra-ai-site/static/5a0d65a36b365c77a7edd79cd3dfe445/f6133/analyzer.jpg",srcSet:["/elyra-ai-site/static/5a0d65a36b365c77a7edd79cd3dfe445/69549/analyzer.jpg 288w","/elyra-ai-site/static/5a0d65a36b365c77a7edd79cd3dfe445/473e3/analyzer.jpg 576w","/elyra-ai-site/static/5a0d65a36b365c77a7edd79cd3dfe445/f6133/analyzer.jpg 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-guides-npm-scripts-mdx-f7b34bbed0aa233b6376.js.map