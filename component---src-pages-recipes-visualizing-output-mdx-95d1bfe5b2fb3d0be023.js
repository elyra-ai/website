(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),p=a("TSYQ"),b=a.n(p),u=a("QH2O"),m=a.n(u),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(d.b)("div",{className:b()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,c=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),x=a("dI71"),y=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===i,c=new RegExp(i+"/?(#.*)?$"),l=n.replace(c,a);return Object(d.b)("li",{key:e,className:b()((t={},t[y.selectedItem]=o,t),y.listItem)},Object(d.b)(s.Link,{className:y.link,to:""+l},e))}));return Object(d.b)("div",{className:y.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:y.list},o))))))},t}(i.a.Component),j=a("MjG9"),A=a("CzIb"),k=a("Asxa"),v=a("OIbQ"),T=a.n(v),P=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(k.c,{className:T.a.row},Object(d.b)(k.a,null,Object(d.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,p=void 0===o?{}:o,b=t.relativePagePath,u=t.titleType,m=p.tabs,h=p.title,x=p.theme,y=p.description,k=p.keywords,v=p.date,T=Object(A.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,C=N?n.pathname.replace(N,""):n.pathname,E=m?C.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",I=x||T;return Object(d.b)(l.a,{tabs:m,homepage:!1,theme:I,pageTitle:h,pageDescription:y,pageKeywords:k,titleType:u},Object(d.b)(g,{title:i?Object(d.b)(i,null):h,label:"label",tabs:m,theme:I}),m&&Object(d.b)(w,{title:h,slug:C,tabs:m,currentTab:E}),Object(d.b)(j.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:b}),Object(d.b)(P,{date:v})),Object(d.b)(O.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:E}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"k27/":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n,i=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),c=(a("qKvR"),function(){return Object(r.b)("span",null,"Visualizing output from your notebooks or Python scripts")}),l={},p=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),b={Title:c,_frontmatter:l},u=s.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(p,{mdxType:"PageDescription"},Object(r.b)("p",null,"Pipelines that you run on Kubeflow Pipelines can optionally produce output that is rendered in the Kubeflow Pipelines UI. For example, a model training script might expose quality metrics.")),Object(r.b)("p",null,"You can try the visualizations shown in this document using ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/elyra-ai/examples/tree/master/pipelines/visualize_output_in_kubeflow_pipelines_ui"}),"this pipeline in the Elyra examples repository"),"."),Object(r.b)("h2",null,"Visualizing output using the Kubeflow Pipelines output viewer"),Object(r.b)("p",null,"The output viewer in the Kubeflow Pipelines UI can render output such as a confusion matrix, ROC curve, or markdown, that is displayed in the Kubeflow Pipelines UI."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVQoz5WSu24VMRCGz3PkMXgf3iFNRIeQeIIUNKGjQECDRJtESkGKSFCSCBCCSIEke072Ynvtvdj+GHs3l1MgdCz9Wnt25vM/thfXN5qLQmOMZrlaUVU1TdPIt6JtjcQnWWvxfiSNGCP/GgujG4xWnF9WLEtN6wK/65rTywtUozO8lnWGu5HSBHwIsm5RWjOOI851Oa/vexZKiZta8WclxcbRi4nStvwoCppao5SiluTOWao2SDwweARoBaIYhgR0U07XJaDK9FKKb0TLUmWVskna7PZ/ciTN4qzBtY1Mu7nJSHhwAouUnIpSsX6gCaTWgCG3ajg7V3z6bpGm6AYwXZTOfD7bO4epeF23G90DvQ/Zxc5b2NqGVx8jPwtPY1M0iNMZ+D+tAyPP3kcePY28PIocfwsUagaGTYFhAr45iTx5F9l+HXm8B59/TUC/KTDMwIMv8OIQdvfh+Qf4ejVdzkbA6WH7/DT6ftIwq5dYiqdL+Qti7vpvrwNrzwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example notebook output",title:"Example notebook output",src:"/website/static/4a9481a79856de262c6262323b7e9bfc/acfc1/kfp_mlpipeline_ui_metadata.png",srcSet:["/website/static/4a9481a79856de262c6262323b7e9bfc/7fc1e/kfp_mlpipeline_ui_metadata.png 288w","/website/static/4a9481a79856de262c6262323b7e9bfc/a5df1/kfp_mlpipeline_ui_metadata.png 576w","/website/static/4a9481a79856de262c6262323b7e9bfc/acfc1/kfp_mlpipeline_ui_metadata.png 800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"To produce this output add code to your notebook or Python script that creates a file named ",Object(r.b)("inlineCode",{parentName:"p"},"mlpipeline-ui-metadata.json")," in the current working directory. Refer to ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.kubeflow.org/docs/pipelines/sdk/output-viewer/#introduction"}),Object(r.b)("em",{parentName:"a"},"Visualize Results in the Pipelines UI")," in the Kubeflow Pipelines documentation")," to learn about supported visualizations and the format of the ",Object(r.b)("inlineCode",{parentName:"p"},"mlpipeline-ui-metadata.json")," file. "),Object(r.b)("p",null,"The following code snippet produces a confusion matrix that is rendered in the output viewer as shown above: "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'import json\nimport pandas as pd \n\nmatrix = [\n    [\'yummy\', \'yummy\', 10],\n    [\'yummy\', \'not yummy\', 2],\n    [\'not yummy\', \'yummy\', 6],\n    [\'not yummy\', \'not yummy\', 7]\n]\n\ndf = pd.DataFrame(matrix,columns=[\'target\',\'predicted\',\'count\'])\n\nmetadata = {\n    "outputs": [\n        {\n            "type": "confusion_matrix",\n            "format": "csv",\n            "schema": [\n                {\n                    "name": "target",\n                    "type": "CATEGORY"\n                },\n                {\n                    "name": "predicted",\n                    "type": "CATEGORY"\n                },\n                {\n                    "name": "count",\n                    "type": "NUMBER"\n                }\n            ],\n            "source": df.to_csv(header=False, index=False),\n            "storage": "inline",\n            "labels": [\n                "yummy",\n                "not yummy"\n            ]\n        }\n    ]\n}\n\nwith open(\'mlpipeline-ui-metadata.json\', \'w\') as f:\n    json.dump(metadata, f)\n')),Object(r.b)("p",null,"Note that the output is displayed only after notebook or Python script processing has completed."),Object(r.b)("h2",null,"Visualizing scalar performance metrics in the Kubeflow Pipelines UI"),Object(r.b)("p",null,"If your notebooks or Python scripts calculate scalar performance metrics they can be displayed as part of the run output in the Kubeflow Pipelines UI."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"318px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVQoz41S0W6DMAzk/3+qe9oTiD5AoUPVGFSFAqUqo4KEhBv2BGIUpFk6QuzEPvtiYLC+7zEa/c/3k39xbssM+mRZDsc9IEmv7AzzDlYoYH9JvAcCZa3ZT3H34OGSJH+Kz2ForV8q55XC6SrxmUl8pJSwG25rKKXRdR2EkKB7a2CGUkpcLgnu9ztDazVr9HddFt0aDSd8Pp/Y7d5gWhZM08J3XeO/9tLyUhCiTYyFEJsY49T+ki0zpMDtduN2y7LE8XiE67oMz/Ow3+8RhiF83598tm0PYmbbCYMggOM4iKKID9IaxzGapkHbtqiHMZzPZy5M7MhPTMdEU8u0oTbTNOULRVHwTB+PB6qq4tgoHO0p+Xw8S2GMLbXWhr4lxIsoVEkptYrxfa351vADu+tYuOheHH4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example notebook output",title:"Example notebook output",src:"/website/static/a544baad145c817707f57e0fb244be6e/9c955/kfp_run_metrics.png",srcSet:["/website/static/a544baad145c817707f57e0fb244be6e/7fc1e/kfp_run_metrics.png 288w","/website/static/a544baad145c817707f57e0fb244be6e/9c955/kfp_run_metrics.png 318w"],sizes:"(max-width: 318px) 100vw, 318px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"To expose the metrics, add code to the notebook or Python script that stores them in a file named ",Object(r.b)("inlineCode",{parentName:"p"},"mlpipeline-metrics.json")," in the current working directory. Refer to ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.kubeflow.org/docs/pipelines/sdk/pipelines-metrics/"}),Object(r.b)("em",{parentName:"a"},"Pipeline Metrics")," in the Kubeflow Pipelines documentation")," to learn more about the content of this file."),Object(r.b)("p",null,"The following code snippet produces this file and records two metrics: "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"  import json\n   \n  # ...\n  # calculate Accuracy classification score\n  accuracy_score = 0.6\n  # calculate Area Under the Receiver Operating Characteristic Curve (ROC AUC)\n  roc_auc_score = 0.75\n \n  metrics = {\n    'metrics': [\n        {\n            'name': 'accuracy-score',\n            'numberValue':  accuracy_score,\n            'format': 'PERCENTAGE'\n        },\n        {\n            'name': 'roc-auc-score',\n            'numberValue':  roc_auc_score,\n            'format': 'RAW'       \n        }\n    ]\n  }\n\n  with open('mlpipeline-metrics.json', 'w') as f:\n    json.dump(metrics, f)\n")),Object(r.b)("p",null,"Note that the metrics are displayed after notebook or Python script processing has completed."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-recipes-visualizing-output-mdx-95d1bfe5b2fb3d0be023.js.map