(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),p=a("QH2O"),d=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,c=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),w=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,c=new RegExp(i+"/?(#.*)?$"),b=n.replace(c,a);return Object(m.b)("li",{key:e,className:u()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(m.b)(l.Link,{className:w.link,to:""+b},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:w.list},r))))))},t}(i.a.Component),N=a("MjG9"),A=a("CzIb"),x=a("Asxa"),v=a("OIbQ"),k=a.n(v),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(x.c,{className:k.a.row},Object(m.b)(x.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,p=t.titleType,d=s.tabs,g=s.title,j=s.theme,w=s.description,x=s.keywords,v=s.date,k=Object(A.a)().interiorTheme,E=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=E?n.pathname.replace(E,""):n.pathname,P=d?C.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",S=j||k;return Object(m.b)(b.a,{tabs:d,homepage:!1,theme:S,pageTitle:g,pageDescription:w,pageKeywords:x,titleType:p},Object(m.b)(h,{title:i?Object(m.b)(i,null):g,label:"label",tabs:d,theme:S}),d&&Object(m.b)(y,{title:g,slug:C,tabs:d,currentTab:P}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:u}),Object(m.b)(T,{date:v})),Object(m.b)(O.a,{pageContext:t,location:n,slug:C,tabs:d,currentTab:P}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},cBw7:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),function(){return Object(r.b)("span",null,"Configuring Apache Airflow on Kubernetes for use with Elyra")}),c={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=b("PageDescription"),u=b("InlineNotification"),p={Title:l,_frontmatter:c},d=o.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"Pipelines in Elyra can be run locally in JupyterLab, or remotely on Kubeflow Pipelines or Apache Airflow to take advantage of shared resources that speed up processing of compute intensive tasks.")),Object(r.b)(u,{mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Support for Apache Airflow is experimental.")),Object(r.b)("p",null,"This document outlines how to set up a new Elyra-enabled Apache Airflow environment or add Elyra support to an existing deployment."),Object(r.b)("p",null,"This guide assumes a general working knowledge of and administration of a Kubernetes cluster."),Object(r.b)("h2",null,"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A private repository on github.com or GitHub Enterprise that is used to store DAGs."),Object(r.b)("li",{parentName:"ul"},"S3-based cloud object storage e.g. IBM Cloud Object Storage, Amazon S3, MinIO")),Object(r.b)("p",null,"AND  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A Kubernetes Cluster without Apache Airflow installed",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Ensure Kubernetes is at least v1.18. Earlier versions might work  but have not been tested."),Object(r.b)("li",{parentName:"ul"},"Helm v3.0 or later"),Object(r.b)("li",{parentName:"ul"},"Use the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/airflow-helm/charts/tree/main/charts/airflow"}),"Helm chart")," available in the Airflow source distribution with the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://raw.githubusercontent.com/elyra-ai/elyra/v3.0.1/etc/kubernetes/airflow/helm/values.yaml"}),"Elyra sample configuration"),".")))),Object(r.b)("p",null,"OR  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An existing Apache Airflow cluster ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Ensure Apache Airflow is at least v1.10.8 and below v2.0.0. Other versions might work but have not been tested."),Object(r.b)("li",{parentName:"ul"},"Apache Airflow is configured to use the Kubernetes Executor."),Object(r.b)("li",{parentName:"ul"},"Ensure the KubernetesPodOperator is installed and available in the Apache Airflow deployment")))),Object(r.b)("h2",null,"Setting up a DAG repository on GitHub"),Object(r.b)("p",null,"In order to use Apache Airflow with Elyra, it must be configured to use a GitHub repository to store DAGs."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a private repository on github.com or GitHub Enterprise. (Elyra produces DAGs that contain credentials, which are not encrypted. Therefore you should not use a public repository.)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"}),"Generate a personal access token")," with push access to the repository. This token is used by Elyra to upload DAGs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"}),"Generate an SSH key")," with read access for the repository. Apache Airflow uses a git-sync container to keep its collection of DAGs in synch with the content of the GitHub Repository and the SSH key is used to authenticate.")),Object(r.b)("p",null,"Take note of the following information:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"GitHub API endpoint (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"https://api.github.com")," if the repository is hosted on github.com)"),Object(r.b)("li",{parentName:"ul"},"Repository name (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"your-git-org/your-dag-repo"),")"),Object(r.b)("li",{parentName:"ul"},"Repository branch name (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"main"),")"),Object(r.b)("li",{parentName:"ul"},"Personal access token (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"4d79206e616d6520697320426f6e642e204a616d657320426f6e64"),")")),Object(r.b)("p",null,"You need to provide this information in addition to your cloud object storage credentials when you ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../user_guide/runtime-conf"}),"create a runtime configuration")," in Elyra for the Apache Airflow deployment."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"759px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.91666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVQ4y42T6a6CMBCF+/5vZ4z/SUB2kEXcdfSbmyGlYnKbnHQo0zNnlro0TaWqKun7XtG2rWR1J0nRSpw3H9Syrzrdd7vdAtvtVjabzQIujmMpikIBeZZlUha5ZOle93Ho1S7yTINFUaR+SZKogHA5iJqmUaAU1HX9+W6l/NiHw0GOx6NM0yTn81mGYVCicRzlcrkoyev1muH4wQWccWA3+3q9yv1+n6M/n8/5ohFxZlBCIpoq4Ct+PB4zETaBuq5TdSGR2Y5UUOE7hE6+MkPoPytEFQotNUvn1/JTXluOApMGxUftf0h98i9CU1iW5aJuYWrY/KNR4Ha7/W4KZMwYe57nGoBvu2RgGphTfAB3w8COztnoWINQwNhgo8pAAHwpE2SAM/u/GBvU/Q10o+Q2Lj44p94EgsjIvsbGonGB6Chc66wp/zU+s0LeJjWx+tiAA2ppTy0MsNploloNAbYPMjidTqvvdg1vcjqLkakhPiwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example Apache Airflow runtime configuration",title:"Example Apache Airflow runtime configuration",src:"/website/static/3f9bdd7ed68b2f036e8a006839d55c29/710d1/airflow-runtime-config-sample.png",srcSet:["/website/static/3f9bdd7ed68b2f036e8a006839d55c29/7fc1e/airflow-runtime-config-sample.png 288w","/website/static/3f9bdd7ed68b2f036e8a006839d55c29/a5df1/airflow-runtime-config-sample.png 576w","/website/static/3f9bdd7ed68b2f036e8a006839d55c29/710d1/airflow-runtime-config-sample.png 759w"],sizes:"(max-width: 759px) 100vw, 759px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h2",null,"Deploying Airflow on a new Kubernetes cluster"),Object(r.b)("p",null,"To deploy Apache Airflow on a new Kubernetes cluster:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a Kubernetes secret containing the SSH key that you ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#setting-up-a-dag-repository-on-github"}),"created earlier"),".\nThe example below creates a secret named ",Object(r.b)("inlineCode",{parentName:"p"},"airflow-secret")," from three files. Replace the secret name, file names and locations as appropriate for your environment. "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create secret generic airflow-secret --from-file=id_rsa=.ssh/id_rsa --from-file=known_hosts=.ssh/known_hosts --from-file=id_rsa.pub=.ssh/id_rsa.pub -n airflow\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download, review, and customize the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/elyra-ai/elyra/v3.0.1/etc/kubernetes/airflow/helm/values.yaml"}),"sample ",Object(r.b)("inlineCode",{parentName:"a"},"helm")," configuration")," (or customize an existing configuration):"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Set ",Object(r.b)("inlineCode",{parentName:"li"},"git.url")," to the URL of the private repository you created earlier, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"ssh://git@github.com/your-git-org/your-dag-repo")),Object(r.b)("li",{parentName:"ul"},"Set ",Object(r.b)("inlineCode",{parentName:"li"},"git.ref")," to the DAG branch, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"main"),"."),Object(r.b)("li",{parentName:"ul"},"Set ",Object(r.b)("inlineCode",{parentName:"li"},"git.secret")," to the name of the secret you created, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"airflow-secret"),"."),Object(r.b)("li",{parentName:"ul"},"Adjust the ",Object(r.b)("inlineCode",{parentName:"li"},"git.gitSync.refreshTime")," as desired.")),Object(r.b)("p",{parentName:"li"},"Example excerpt from a customized configuration:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'## configs for the DAG git repository & sync container\n##\ngit:\n  ## url of the git repository\n  ##\n  ## EXAMPLE: (HTTP)\n  ##   url: "https://github.com/torvalds/linux.git"\n  ##\n  ## EXAMPLE: (SSH)\n  ##   url: "ssh://git@github.com:torvalds/linux.git"\n  ##\n  url: "ssh://git@github.com/your-git-org/your-dag-repo"\n\n  ## the branch/tag/sha1 which we clone\n  ##\n  ref: "main"\n\n  ## the name of a pre-created secret containing files for ~/.ssh/\n  ##\n  ## NOTE:\n  ## - this is ONLY RELEVANT for SSH git repos\n  ## - the secret commonly includes files: id_rsa, id_rsa.pub, known_hosts\n  ## - known_hosts is NOT NEEDED if `git.sshKeyscan` is true\n  ##\n  secret: "airflow-secret"\n  ...\n  gitSync:\n    ...\n    refreshTime: 10\n')),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"airflow:\n## configs for the docker image of the web/scheduler/worker\n##\nimage:\n  repository: elyra/airflow\n")),Object(r.b)("p",{parentName:"li"},"The container image is created using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/elyra-ai/elyra/tree/v3.0.1/etc/docker/airflow"}),"this ",Object(r.b)("inlineCode",{parentName:"a"},"Dockerfile"))," and published on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/r/elyra/airflow"}),"Docker Hub")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://quay.io/repository/elyra/airflow"}),"quay.io"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install Apache Airflow using the customized configuration."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'helm install "airflow" stable/airflow --values path/to/your_customized_helm_values.yaml\n')))),Object(r.b)("p",null,"Once Apache Airflow is deployed you are ready to create and run pipelines, as described in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../getting_started/tutorials"}),"tutorial"),"."),Object(r.b)("h2",null,"Enabling Elyra pipelines in an existing Apache Airflow deployment"),Object(r.b)("p",null,"To enable running of notebook pipelines on an existing Apache Airflow deployment  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Enable Git as DAG storage by customizing the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/apache/airflow/blob/6416d898060706787861ff8ecbc4363152a35f45/airflow/config_templates/default_airflow.cfg#L913"}),"Git settings in ",Object(r.b)("inlineCode",{parentName:"a"},"airflow.cfg")),".")),Object(r.b)("p",null,"Once Apache Airflow is deployed you are ready to create and run pipelines, as described in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../getting_started/tutorials"}),"tutorial"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-recipes-configuring-apache-mdx-f1e4643f9c5ee2d39f50.js.map