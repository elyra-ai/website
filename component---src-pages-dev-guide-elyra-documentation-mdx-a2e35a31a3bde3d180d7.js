"use strict";(self.webpackChunkelyra_ai_site=self.webpackChunkelyra_ai_site||[]).push([[7550],{9095:function(e,t,a){a.r(t),a.d(t,{Title:function(){return s},_frontmatter:function(){return m},default:function(){return u}});var n,r=a(3366),i=(a(7294),a(4983)),l=a(4295),o=["components"],s=function(){return(0,i.kt)("span",null,"Elyra documentation")},m={},d=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),c={Title:s,_frontmatter:m},p=l.Z;function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"PageDescription"},(0,i.kt)("p",null,"The Elyra documentation’s source is stored in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/elyra-ai/elyra"},"Elyra repository")," and hosted at ",(0,i.kt)("a",{parentName:"p",href:"https://elyra.readthedocs.io/"},"Elyra’s Read the Docs"),". The documentation is written in ",(0,i.kt)("a",{parentName:"p",href:"https://www.sphinx-doc.org/en/master/usage/markdown.html"},"Markdown")," and built using ",(0,i.kt)("a",{parentName:"p",href:"https://www.sphinx-doc.org/en/master/"},"Sphinx"),".")),(0,i.kt)("h2",null,"Contributing to the Elyra documentation"),(0,i.kt)("p",null,"To contribute content to the Elyra documentation follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fork the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/elyra-ai/elyra"},"repository"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone your fork."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/git-id-or-org/elyra\n")),(0,i.kt)("p",{parentName:"li"},"The documentation assets are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs")," directory."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To add a new document create a new markdown file in the appropriate section subdirectory (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"/docs/source/getting_started"),") and add an entry to that section in ",(0,i.kt)("inlineCode",{parentName:"li"},"/docs/source/index.rst"),"."),(0,i.kt)("li",{parentName:"ul"},"To update an existing document edit the corresponding markdown file."),(0,i.kt)("li",{parentName:"ul"},"Place new or updated images in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/docs/source/images")," directory. ",(0,i.kt)("inlineCode",{parentName:"li"},"PNG")," is the recommended format."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Build the documentation assets locally."),(0,i.kt)("p",{parentName:"li"},"In the repository’s ",(0,i.kt)("em",{parentName:"p"},"root directory")," (not the ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs")," directory) run"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"make docs\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Review the build output and verify that your updates introduced no warnings or errors.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Review the updated documentation assets."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"/docs/_build/html/")," directory."),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," in a web browser."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Commit your updates to a new branch and open a pull request."))))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),r=a(8650),i=a.n(r),l=a(5444),o=a(9403),s=a(5611),m=a(5900),d=a.n(m),c=function(e){var t,a=e.title,r=e.theme,i=e.tabs,l=void 0===i?[]:i;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,r=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,o=i.baseUrl,s=i.subDirectory,m=o+"/edit/"+i.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(4275),h=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===o,m=new RegExp(o+"/?(#.*)?$"),c=r.replace(m,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),g=k,N=a(2881),b=a(6958),y=a(36),f=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},E=function(e){var t=e.pageContext,a=e.children,r=e.location,m=e.Title,d=t.frontmatter,h=void 0===d?{}:d,k=t.relativePagePath,y=t.titleType,E=h.tabs,w=h.title,v=h.theme,x=h.description,P=h.keywords,T=h.date,C=(0,b.Z)().interiorTheme,D=(0,l.useStaticQuery)("2456312558").site.pathPrefix,Z=D?r.pathname.replace(D,""):r.pathname,_=E?Z.split("/").filter(Boolean).slice(-1)[0]||i()(E[0],{lower:!0}):"",B=v||C;return n.createElement(s.Z,{tabs:E,homepage:!1,theme:B,pageTitle:w,pageDescription:x,pageKeywords:P,titleType:y},n.createElement(c,{title:m?n.createElement(m,null):w,label:"label",tabs:E,theme:B}),E&&n.createElement(g,{title:w,slug:Z,tabs:E,currentTab:_}),n.createElement(N.Z,{padded:!0},a,n.createElement(p,{relativePagePath:k}),n.createElement(f,{date:T})),n.createElement(u.Z,{pageContext:t,location:r,slug:Z,tabs:E,currentTab:_}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-dev-guide-elyra-documentation-mdx-a2e35a31a3bde3d180d7.js.map