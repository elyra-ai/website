(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),i=a("NmYn"),b=a.n(i),r=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a.n(m),g=a("qKvR"),u=function(e){var t,a=e.title,o=e.theme,n=e.tabs,i=void 0===n?[]:n;return Object(g.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===o,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.a.text},a)))))},f=a("BAC9"),A=function(e){var t=e.relativePagePath,a=e.repository,o=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||o,i=n.baseUrl,b=n.subDirectory,l=i+"/edit/"+n.branch+b+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+f.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:f.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),j=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,n=o.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),i=a===n,l=new RegExp(n+"/?(#.*)?$"),c=o.replace(l,a);return Object(g.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(g.b)(r.Link,{className:j.link,to:""+c},e))}));return Object(g.b)("div",{className:j.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:j.list},i))))))},t}(n.a.Component),w=a("MjG9"),N=a("CzIb"),y=a("Asxa"),x=a("OIbQ"),v=a.n(x),E=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(y.c,{className:v.a.row},Object(g.b)(y.a,null,Object(g.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,n=e.Title,i=t.frontmatter,s=void 0===i?{}:i,p=t.relativePagePath,m=t.titleType,d=s.tabs,f=s.title,h=s.theme,j=s.description,y=s.keywords,x=s.date,v=Object(N.a)().interiorTheme,C=Object(r.useStaticQuery)("2456312558").site.pathPrefix,T=C?o.pathname.replace(C,""):o.pathname,I=d?T.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",S=h||v;return Object(g.b)(c.a,{tabs:d,homepage:!1,theme:S,pageTitle:f,pageDescription:j,pageKeywords:y,titleType:m},Object(g.b)(u,{title:n?Object(g.b)(n,null):f,label:"label",tabs:d,theme:S}),d&&Object(g.b)(k,{title:f,slug:T,tabs:d,currentTab:I}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(A,{relativePagePath:p}),Object(g.b)(E,{date:x})),Object(g.b)(O.a,{pageContext:t,location:o,slug:T,tabs:d,currentTab:I}),Object(g.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},MDVD:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var o,n=a("wx14"),i=a("zLVn"),b=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),function(){return Object(b.b)("span",null,"Using Elyra with the Kubeflow Notebook Server")}),c={},s=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),p={Title:l,_frontmatter:c},m=r.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(b.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(s,{mdxType:"PageDescription"},Object(b.b)("p",null,"In this example we will show how to launch Elyra using ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.kubeflow.org/docs/components/notebooks/"}),"Kubeflow’s Notebook Server"),". ")),Object(b.b)("h2",null,"Requirements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"A Kubeflow Cluster"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"A standard installation of Kubeflow will include the Notebook Server as part of the application stack"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.kubeflow.org/docs/started/getting-started/"}),"Installation Documentation")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Select the desired Elyra container image version from the ",Object(b.b)("inlineCode",{parentName:"p"},"elyra/kf-notebook")," repositories on ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/r/elyra/kf-notebook"}),"Docker Hub")," or ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://quay.io/repository/elyra/kf-notebook"}),"quay.io"),". Do NOT use other images, such as the ones in ",Object(b.b)("inlineCode",{parentName:"p"},"elyra/elyra"),"."),Object(b.b)("p",{parentName:"li"},"OR"),Object(b.b)("p",{parentName:"li"},"Create a custom Elyra container image following the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/elyra-ai/elyra/tree/3.0.1/etc/docker/kubeflow"}),"instructions in this directory"),".\n"))),Object(b.b)("h2",null,"Launching Elyra in the Kubeflow Notebook Server"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"In the default Kubeflow welcome page, in the left side menu, click on ",Object(b.b)("inlineCode",{parentName:"p"},"Notebook Servers"),"   "),Object(b.b)("p",{parentName:"li"},Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"../images/ai/ai/elyra-with-kf-notebook-splash-screen.png",alt:"Elyra"})),"  ")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Click on ",Object(b.b)("inlineCode",{parentName:"p"},"NEW SERVER"),"   "),Object(b.b)("p",{parentName:"li"},Object(b.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.166666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVQY03WO2w7DIAxD+f8fnSZ2ARKgXD1g7crW7uHIUexYERepoMiCmeGcR6kVpVSknJFnSkFuXqoYWktuuc0vI2/9AkFs0TENpTWkvIGIRsFWmvqBd0jPO7K8IqoH7h4gF2BaVhN/EMoQNrpprYXzHiFGhBDe9LntFibERrAM9hF+CZjvO2Ju75hVf4ODvl/RxrRc3/Pxw61g1r9M/n6zz+Kr4FBGK2f++SMvtPLPc3QTfJUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Elyra",title:"Elyra",src:"/static/31ab878b79565d78f8cdd2bc148c2aa3/3cbba/elyra-with-kf-notebook-notebook-server.png",srcSet:["/static/31ab878b79565d78f8cdd2bc148c2aa3/7fc1e/elyra-with-kf-notebook-notebook-server.png 288w","/static/31ab878b79565d78f8cdd2bc148c2aa3/a5df1/elyra-with-kf-notebook-notebook-server.png 576w","/static/31ab878b79565d78f8cdd2bc148c2aa3/3cbba/elyra-with-kf-notebook-notebook-server.png 1152w","/static/31ab878b79565d78f8cdd2bc148c2aa3/4ece7/elyra-with-kf-notebook-notebook-server.png 1471w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  ")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Choose a ",Object(b.b)("inlineCode",{parentName:"p"},"name")," for your notebook server, and under ",Object(b.b)("inlineCode",{parentName:"p"},"Image")," check the box labeled ",Object(b.b)("inlineCode",{parentName:"p"},"Custom Image"),".   "),Object(b.b)("p",{parentName:"li"},Object(b.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.2361111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZklEQVQ4y3WSC3ODIBCE8///ZCfTTidVo7zxfd3FkFBMGVfhGD9u77go6+XWafEhiHNepmmWZV3PWv7RY3+F4jjJxQBiATM+iDJGnAd0nhP4KaznZZF5roSYxf/KWNHWyaC0XBReqh9E970YpSQAPk2TjOP4/FIGh23bKvVwKZED2BOomx8x31+irx8Shl6WbRPZdzyHODbEnHPpuxd7lK2BioEwiopTsh5jSD+uj7pk5dheHfYmw0Y0MjSfV9FtIzeutU7WS8UYUwlq4ClDjZceUMP7Xby1CUZ7Hs3JMM4XNIAjg16WfWUZE14dhW5pbDhAmQkt1iK0LAOBZ8tY5IAxR4YW0NxdinaZ9Zyu06vzPOAMxIRiMISYTn43CHo3yhoOGZgDCtk1aErbtimjshl5lDUsu0wZ/PMHaGCVF5i2u66TOxpFKK0RSssE5Vqegf5sOV9eZkgxQwL4ZW25T3Duuq0y/AVrHfNvAcg35AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Elyra",title:"Elyra",src:"/static/fe209e2ef2c43637fc29547a35a69673/3cbba/elyra-with-kf-notebook-config-1.png",srcSet:["/static/fe209e2ef2c43637fc29547a35a69673/7fc1e/elyra-with-kf-notebook-config-1.png 288w","/static/fe209e2ef2c43637fc29547a35a69673/a5df1/elyra-with-kf-notebook-config-1.png 576w","/static/fe209e2ef2c43637fc29547a35a69673/3cbba/elyra-with-kf-notebook-config-1.png 1152w","/static/fe209e2ef2c43637fc29547a35a69673/73d17/elyra-with-kf-notebook-config-1.png 1465w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  ")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"In ",Object(b.b)("em",{parentName:"p"},"Kubeflow version 1.3 (and later)")," choose ",Object(b.b)("inlineCode",{parentName:"p"},"jupyterlab")," as image type.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"As ",Object(b.b)("inlineCode",{parentName:"p"},"Custom Image")," enter ",Object(b.b)("inlineCode",{parentName:"p"},"elyra/kf-notebook:<ELYRA_VERSION>"),", replacing ",Object(b.b)("inlineCode",{parentName:"p"},"<ELYRA_VERSION>")," with the desired image tag, e.g. ",Object(b.b)("inlineCode",{parentName:"p"},"2.1.0"),".   "),Object(b.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.791666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYklEQVQI13XO0QqAIAyF4d7/QQO9CNvOcSLlyrwRqu9qCP/mkhRKQqWU4u7nl9aaT+4XAXbFsqsm5DWmEALIe4WZ5ccYSNZaf2OhxU16DPiPNjl6zB4nUTAXy3iMT759Xr4ARmvp4QM6m9sAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Elyra",title:"Elyra",src:"/static/edb062200c3e34ca5e615f1e2db753f6/3cbba/elyra-with-kf-notebook-image-config.png",srcSet:["/static/edb062200c3e34ca5e615f1e2db753f6/7fc1e/elyra-with-kf-notebook-image-config.png 288w","/static/edb062200c3e34ca5e615f1e2db753f6/a5df1/elyra-with-kf-notebook-image-config.png 576w","/static/edb062200c3e34ca5e615f1e2db753f6/3cbba/elyra-with-kf-notebook-image-config.png 1152w","/static/edb062200c3e34ca5e615f1e2db753f6/8a0a9/elyra-with-kf-notebook-image-config.png 1163w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(b.b)("blockquote",{parentName:"li"},Object(b.b)("p",{parentName:"blockquote"},"To pull an image from quay.io prefix the image name with ",Object(b.b)("inlineCode",{parentName:"p"},"quay.io"),", e.g. ",Object(b.b)("inlineCode",{parentName:"p"},"quay.io/kf-notebook:2.1.0"),".  "))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Customize the resources as required. We recommend at least 1 CPU and 1Gi of memory.\n")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Your notebook server with Elyra should begin the provisioning process now. When complete, you’ll notice a green light and arrow to the left of your notebook. Click on ",Object(b.b)("inlineCode",{parentName:"p"},"Connect")," to launch Elyra.   "),Object(b.b)("p",{parentName:"li"},Object(b.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"939px"}}),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVQY04VQ2Q4CMQj0///RGKO7fdrTlkKvETAxvtmGMOUYmF6maUIIAfM8g5lhZ4zx36xO78kDz6NjpQHKGRdKhJQSYoyotTph7/1rrTW33/dQP7ZFCxtqVyJtkzqQSAmjRJ8oIr6hNZVSQETebDHD5i3OnH0owgNyu0IUtvJR5oT39Q4mxvk6sW079v3wjZdlQVYJho/jdAU5s8dYh0sRhJUwrdm/zHKvmPAG8Hw3u37oVQwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Elyra",title:"Elyra",src:"/static/61911bf2262a8c66437b09401ebed19d/9f734/elyra-with-kf-notebook-start-notebook.png",srcSet:["/static/61911bf2262a8c66437b09401ebed19d/7fc1e/elyra-with-kf-notebook-start-notebook.png 288w","/static/61911bf2262a8c66437b09401ebed19d/a5df1/elyra-with-kf-notebook-start-notebook.png 576w","/static/61911bf2262a8c66437b09401ebed19d/9f734/elyra-with-kf-notebook-start-notebook.png 939w"],sizes:"(max-width: 939px) 100vw, 939px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "))),Object(b.b)("h3",null,"Next step:"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://elyra.readthedocs.io/en/latest/user_guide/runtime-conf.html"}),"Creating a runtime metadata configuration")),Object(b.b)("h2",null,"Additional Resources and Documentation"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.kubeflow.org/docs/components/notebooks/setup/"}),"Official Kubeflow Notebook Server Documentation - Creating a Jupyter Notebook Server")))}d.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-recipes-using-with-notebook-mdx-e0ef650ecb16e35c801f.js.map