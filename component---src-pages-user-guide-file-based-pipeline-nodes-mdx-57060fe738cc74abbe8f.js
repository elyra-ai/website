(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("NmYn"),l=a.n(r),o=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),p=a.n(c),d=a("QH2O"),m=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===i,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},f=a("BAC9"),A=function(e){var t=e.relativePagePath,a=e.repository,i=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,r=n.baseUrl,l=n.subDirectory,s=r+"/edit/"+n.branch+l+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},y=a("FCXl"),O=a("dI71"),h=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===n,s=new RegExp(n+"/?(#.*)?$"),b=i.replace(s,a);return Object(u.b)("li",{key:e,className:p()((t={},t[h.selectedItem]=r,t),h.listItem)},Object(u.b)(o.Link,{className:h.link,to:""+b},e))}));return Object(u.b)("div",{className:h.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:h.list},r))))))},t}(n.a.Component),j=a("MjG9"),x=a("CzIb"),N=a("Asxa"),w=a("OIbQ"),k=a.n(w),E=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(N.c,{className:k.a.row},Object(u.b)(N.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,r=t.frontmatter,c=void 0===r?{}:r,p=t.relativePagePath,d=t.titleType,m=c.tabs,f=c.title,O=c.theme,h=c.description,N=c.keywords,w=c.date,k=Object(x.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,T=I?i.pathname.replace(I,""):i.pathname,R=m?T.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",C=O||k;return Object(u.b)(b.a,{tabs:m,homepage:!1,theme:C,pageTitle:f,pageDescription:h,pageKeywords:N,titleType:d},Object(u.b)(g,{title:n?Object(u.b)(n,null):f,label:"label",tabs:m,theme:C}),m&&Object(u.b)(v,{title:f,slug:T,tabs:m,currentTab:R}),Object(u.b)(j.a,{padded:!0},a,Object(u.b)(A,{relativePagePath:p}),Object(u.b)(E,{date:w})),Object(u.b)(y.a,{pageContext:t,location:i,slug:T,tabs:m,currentTab:R}),Object(u.b)(s.a,null))}},APtG:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return s})),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var i,n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),function(){return Object(l.b)("span",null,"Best practices for file-based pipeline nodes")}),b={},c=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),p={Title:s,_frontmatter:b},d=o.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(c,{mdxType:"PageDescription"},Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"pipelines.md"}),"Generic pipelines and typed pipelines")," support natively file-based nodes for Jupyter notebooks, Python scripts, and R scripts. In order to support heterogeneous execution - that is making them runnable in any runtime environment (JupyterLab, Kubeflow Pipelines, and Apache Airflow) - follow the guidelines listed below.")),Object(l.b)("h2",null,"Runtime image"),Object(l.b)("p",null,"On Kubeflow Pipelines and Apache Airflow, notebooks and scripts are executed in containers. Elyra provides ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"runtime-image-conf.md"}),"example runtime images")," to get you started, but you should consider utilizing ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"../recipes/creating-a-custom-runtime-image.md"}),"purpose-built images")," instead. If possible, pre-install all software prerequisites in the runtime image you are using instead of installing them on the fly (e.g. by running ",Object(l.b)("inlineCode",{parentName:"p"},"pip install my-package==1.2.3")," in a notebook cell)."),Object(l.b)("h2",null,"File I/O"),Object(l.b)("p",null,"In runtime environments (like Kubeflow Pipelines and Apache Airflow) where containers are used to run notebooks/scripts special consideration must be given to file input and output operations."),Object(l.b)("h3",null,"File input"),Object(l.b)("p",null,"If a notebook/script requires access to files that are stored on you local system, those files must be declared as ",Object(l.b)("em",{parentName:"p"},"File dependencies"),". Elyra collects declared files and uploads them to cloud storage and makes them available to the notebook/script at runtime."),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"473px"}},"\n      ",Object(l.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2klEQVQoz52RSYqEQBBF8/4XcKUbRVwooqILV4KuBF0qOIMDegaHX0RAFdVNNzUkPDL4SfwYUvR9j2EYmK7rMM8zruvCcRw4z5P5L/4N5YmiKFBVFcqyRF3XaNsWy7L8gIqs68rxOI7Yto21+/s0Tayx4XMiVSf2fX/Ez/ylk3bX2TAMQ0RRhDiOkef5gyzLPiJNU9C0QpIkyLIMVVVhWRYMw4BpmvA8D77vv43rukiSBIIMbNtmHMdhM9Koc/qopml4r6+g/dMuhaIo0HWdO6Rb0zSQFgQBvjk3rOryUs+01y4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Define file dependencies",title:"Define file dependencies",src:"/website/static/fbc175efe851f8cffd7f7b5f74a9ae69/739ea/vpe-node-input-files.png",srcSet:["/website/static/fbc175efe851f8cffd7f7b5f74a9ae69/7fc1e/vpe-node-input-files.png 288w","/website/static/fbc175efe851f8cffd7f7b5f74a9ae69/739ea/vpe-node-input-files.png 473w"],sizes:"(max-width: 473px) 100vw, 473px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("p",null,"File dependencies must be located in the notebook/script file directory or a subdirectory of that location. Symlinks can be used to avoid the need to maintain multiple copies if files are shared among pipelines."),Object(l.b)("p",null,"Valid directory layout examples:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"./my-pipeline.pipeline\n./my-notebook.ipynb\n./a-notebook-symlink.ipynb      # can reference a notebook in any local directory\n./a-dependency-file               \n./a-symlink                     # can reference any file or directory\n./a-subdir/a-dependency-file\n./a-subdir/a-symlink            # can reference any file or directory\n./a-subdir/a-script-symlink.py  # can reference a script in any local directory\n")),Object(l.b)("p",null,"Invalid directory layout examples:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"./my-pipeline.pipeline\n./my-script.py\n../my-other-notebook.ipynb     # must be symlinked\n../a-dependency-in-parent-dir  # must be symlinked \n/some/dir/some-dependency      # must be symlinked\n")),Object(l.b)("h3",null,"File output"),Object(l.b)("p",null,"All changes to the file system (e.g. new files or modified files) are discarded after processing of the notebook/script has completed. To retain these files you must store those files on cloud storage, or declare those files as output files in the notebook/script node properties. "),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"542px"}},"\n      ",Object(l.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.041666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVQY06WPPQqEMBCFc/872HgA8QZWFkIkgmUSRSEE/AE1Ucu3zBS7i9XCDny8vMn8MGKeZ1hr0fc9pmnCfd84z5O5rot5+hDCO08aY+Q+CrEsC4wxGIYBzjku3raN2fed/XEc7EkJ6vnOr+v6Gei9R13XaNuW0Vqj6zqM48hLCHo//VPpQrpWNE2DJEmQpimyLENRFCjLkpdIKX+Caquq4qFCKYU8zxn6+DdeT/lwEQeo5RUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Define output files",title:"Define output files",src:"/website/static/256490feee84e84a0b78b9c0db40fee3/3b1a6/vpe-node-output-files.png",srcSet:["/website/static/256490feee84e84a0b78b9c0db40fee3/7fc1e/vpe-node-output-files.png 288w","/website/static/256490feee84e84a0b78b9c0db40fee3/3b1a6/vpe-node-output-files.png 542w"],sizes:"(max-width: 542px) 100vw, 542px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("h2",null,"Environment variables"),Object(l.b)("p",null,"You can customize notebooks/scripts by setting environment variables in the pipeline node. Environment variable values are not shared across nodes belonging to the same pipeline."),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"563px"}},"\n      ",Object(l.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/klEQVQoz53Ry6qDQAwG4Hn/d3BRF0KrqNCCWquovUD3pQiKVusVxJ0LrfIfJovDWRxo6cBHyDCEJMMejweyLMPz+aQYRRH6vsfr9cI0TWQcR/I35/G/w3ghrixL5HmOJElQ1zWapiFt26KqKsLveV4UBUVedJ7nX8uygO12O1iWRY7HI67XKy6Xy1vn85nec6fTCZ7nIY5jsNVqhfV6DUmSoOs6bNvGfr+neDgcPuI4DkzTRBiGYLIsQ1VVaJpGhYIggO/71LFhGPTwE9vtFvf7HUwQBIiiSBRFwWazIbfbjT6J7/SdNE1p3K7rwPhovCu+A851XRpjGAZ8c34AkiPntL22LbkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Define environment variables",title:"Define environment variables",src:"/website/static/9d814240d0de074d3d77d452cd34f0f9/e80e2/vpe-node-env-vars.png",srcSet:["/website/static/9d814240d0de074d3d77d452cd34f0f9/7fc1e/vpe-node-env-vars.png 288w","/website/static/9d814240d0de074d3d77d452cd34f0f9/e80e2/vpe-node-env-vars.png 563w"],sizes:"(max-width: 563px) 100vw, 563px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("p",null,"The Visual Pipeline Editor can detect which environment variables notebooks/scripts are accessing and automatically adds those variables to the runtime properties if the following approaches are used to read variable values:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Python"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"os.getenv(key[,...])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"os.environ[key]")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"os.environ.get(key[,...])")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"R script"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Sys.getenv(...)"))))),Object(l.b)("p",null,"Refer to the next section for a list of proprietary environment variables that cannot be modified using the node properties settings."),Object(l.b)("h2",null,"Proprietary environment variables"),Object(l.b)("p",null,"Elyra makes a set of proprietary environment variables available to notebooks and scripts during execution. Unless indicated otherwise, these variables are defined in all runtime environments."),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"460px"}},"\n      ",Object(l.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.819444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVQY052R226EMAxE+f8fbLW7KgskIdyzQAKBak8Nvb1WtTSy8zI+niSzj0zThpsdelDYztK1HdZa6qqirmvmpmHMMh5a4/IcJ/OQpvRdhw+BIPLeE2Mk8WGTx07rWrI6oygLtNJoI9IKpRRdWdKIwWHsG1lwLJFl4+PBuq6n0dH3fSfhq6ZxojIV1lhyoTgISzEyxmBkLmT+SyVxexd30bYyLSNhDcQ1nmccWpaFXfo2jixCFIaB0PcE51hEfp5Puh9CN644F7F9xdVeSE2KKhT37E4mWd2FdpDs2teXz9xuV/rLRfoN9/ZGc5w+Tb8ZfqO6QT4l1/y3ns/nqQ+DjctbOEP02wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Access proprietary environment variables",title:"Access proprietary environment variables",src:"/website/static/2127f5de807a597e95aaf8439b74c469/37e4f/elyra-env-vars.png",srcSet:["/website/static/2127f5de807a597e95aaf8439b74c469/7fc1e/elyra-env-vars.png 288w","/website/static/2127f5de807a597e95aaf8439b74c469/37e4f/elyra-env-vars.png 460w"],sizes:"(max-width: 460px) 100vw, 460px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("h3",null,"ELYRA_RUN_NAME"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ELYRA_RUN_NAME")," is an identifier that is unique for each pipeline run but the same for all nodes in the pipeline. You can use this identifier to generate predictable file names."),Object(l.b)("p",null,"Example value: ",Object(l.b)("inlineCode",{parentName:"p"},"unicorn-0617153527")),Object(l.b)("h3",null,"ELYRA_RUNTIME_ENV"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ELYRA_RUNTIME_ENV")," identifies the runtime environment that the\nnotebook or script is executed in:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"local")," - JupyterLab"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"kfp")," - Kubeflow Pipelines"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"airflow")," - Apache Airflow")))}m.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-user-guide-file-based-pipeline-nodes-mdx-57060fe738cc74abbe8f.js.map