"use strict";(self.webpackChunkelyra_ai_site=self.webpackChunkelyra_ai_site||[]).push([[7809],{5249:function(e,t,a){a.r(t),a.d(t,{Title:function(){return o},_frontmatter:function(){return s},default:function(){return h}});var n=a(3366),i=(a(7294),a(4983)),r=a(4295),l=["components"],o=function(){return(0,i.kt)("span",null,"Configuring Apache Airflow on Kubernetes for use with Elyra")},s={},u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},p=u("PageDescription"),c=u("InlineNotification"),m={Title:o,_frontmatter:s},d=r.Z;function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(p,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Pipelines in Elyra can be run locally in JupyterLab, or remotely on Kubeflow Pipelines or Apache Airflow to take advantage of shared resources that speed up processing of compute intensive tasks.")),(0,i.kt)(c,{mdxType:"InlineNotification"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Support for Apache Airflow is experimental.")),(0,i.kt)("p",null,"This document outlines how to set up a new Elyra-enabled Apache Airflow environment or add Elyra support to an existing deployment."),(0,i.kt)("p",null,"This guide assumes a general working knowledge of and administration of a Kubernetes cluster."),(0,i.kt)("h2",null,"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A private repository on github.com or GitHub Enterprise that is used to store DAGs."),(0,i.kt)("li",{parentName:"ul"},"S3-based cloud object storage e.g. IBM Cloud Object Storage, Amazon S3, MinIO")),(0,i.kt)("p",null,"AND  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Kubernetes Cluster without Apache Airflow installed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ensure Kubernetes is at least v1.18. Earlier versions might work  but have not been tested."),(0,i.kt)("li",{parentName:"ul"},"Helm v3.0 or later"),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airflow-helm/charts/tree/main/charts/airflow"},"Helm chart")," available in the Airflow source distribution with the ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/elyra-ai/elyra/v3.0.1/etc/kubernetes/airflow/helm/values.yaml"},"Elyra sample configuration"),".")))),(0,i.kt)("p",null,"OR  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An existing Apache Airflow cluster ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ensure Apache Airflow is at least v1.10.8 and below v2.0.0. Other versions might work but have not been tested."),(0,i.kt)("li",{parentName:"ul"},"Apache Airflow is configured to use the Kubernetes Executor."),(0,i.kt)("li",{parentName:"ul"},"Ensure the KubernetesPodOperator is installed and available in the Apache Airflow deployment")))),(0,i.kt)("h2",null,"Setting up a DAG repository on GitHub"),(0,i.kt)("p",null,"In order to use Apache Airflow with Elyra, it must be configured to use a GitHub repository to store DAGs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a private repository on github.com or GitHub Enterprise. (Elyra produces DAGs that contain credentials, which are not encrypted. Therefore you should not use a public repository.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"},"Generate a personal access token")," with push access to the repository. This token is used by Elyra to upload DAGs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"},"Generate an SSH key")," with read access for the repository. Apache Airflow uses a git-sync container to keep its collection of DAGs in synch with the content of the GitHub Repository and the SSH key is used to authenticate.")),(0,i.kt)("p",null,"Take note of the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GitHub API endpoint (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://api.github.com")," if the repository is hosted on github.com)"),(0,i.kt)("li",{parentName:"ul"},"Repository name (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"your-git-org/your-dag-repo"),")"),(0,i.kt)("li",{parentName:"ul"},"Repository branch name (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"main"),")"),(0,i.kt)("li",{parentName:"ul"},"Personal access token (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"4d79206e616d6520697320426f6e642e204a616d657320426f6e64"),")")),(0,i.kt)("p",null,"You need to provide this information in addition to your cloud object storage credentials when you ",(0,i.kt)("a",{parentName:"p",href:"../user_guide/runtime-conf"},"create a runtime configuration")," in Elyra for the Apache Airflow deployment."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"759px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.91666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbElEQVQ4y42T6YrDMAyE/f5vV0r/F5ImzuE0R+9Ly6dFwfGmsIbBiiOPRoddURTSNI0Mw6Douk7Ktpe86iTzQTLfyqHpdd/tdgtst1vZbDYLuCzLpKoqBeRlWUpdeSmLg+7TOKhd+VKD7fd79cvzXAWky0EUQlCgFLRtKyF0UjeNHI9HOZ1Ocj6f5Xq9yjiOSjRNk9xuNyX5fD4zHD+4gDMO7Gbf73d5Pp9z9Pf7PV80Is4MSkhEUwVixa/XaybCJlDf96ouJTLbkQoqYofUKVZmSP1nhahCoaVm6Xxbccpry1Fg0qD4qP0PaUz+h9AU1nW9qFuaGjb/aBR4PB7fmwIZM8buvdcAfNslA9PAnOIDuJsGdnTORscahALGBhtVBgLgS5kgA5zZ/8XYoO53oIOS27jE4Jx6EwgiI/szNhaNC0RH4VpnTfm38ZkV8japidXHBhxQS3tqaYDVLhPVagiwY5DB5XJZfbdr+AFyOouRr42jLAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example Apache Airflow runtime configuration",title:"Example Apache Airflow runtime configuration",src:"/elyra-ai-site/static/3f9bdd7ed68b2f036e8a006839d55c29/710d1/airflow-runtime-config-sample.png",srcSet:["/elyra-ai-site/static/3f9bdd7ed68b2f036e8a006839d55c29/7fc1e/airflow-runtime-config-sample.png 288w","/elyra-ai-site/static/3f9bdd7ed68b2f036e8a006839d55c29/a5df1/airflow-runtime-config-sample.png 576w","/elyra-ai-site/static/3f9bdd7ed68b2f036e8a006839d55c29/710d1/airflow-runtime-config-sample.png 759w"],sizes:"(max-width: 759px) 100vw, 759px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("h2",null,"Deploying Airflow on a new Kubernetes cluster"),(0,i.kt)("p",null,"To deploy Apache Airflow on a new Kubernetes cluster:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Kubernetes secret containing the SSH key that you ",(0,i.kt)("a",{parentName:"p",href:"#setting-up-a-dag-repository-on-github"},"created earlier"),".\nThe example below creates a secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"airflow-secret")," from three files. Replace the secret name, file names and locations as appropriate for your environment. "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic airflow-secret --from-file=id_rsa=.ssh/id_rsa --from-file=known_hosts=.ssh/known_hosts --from-file=id_rsa.pub=.ssh/id_rsa.pub -n airflow\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download, review, and customize the ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/elyra-ai/elyra/v3.0.1/etc/kubernetes/airflow/helm/values.yaml"},"sample ",(0,i.kt)("inlineCode",{parentName:"a"},"helm")," configuration")," (or customize an existing configuration):"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"git.url")," to the URL of the private repository you created earlier, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh://git@github.com/your-git-org/your-dag-repo")),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"git.ref")," to the DAG branch, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"main"),"."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"git.secret")," to the name of the secret you created, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"airflow-secret"),"."),(0,i.kt)("li",{parentName:"ul"},"Adjust the ",(0,i.kt)("inlineCode",{parentName:"li"},"git.gitSync.refreshTime")," as desired.")),(0,i.kt)("p",{parentName:"li"},"Example excerpt from a customized configuration:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'## configs for the DAG git repository & sync container\n##\ngit:\n  ## url of the git repository\n  ##\n  ## EXAMPLE: (HTTP)\n  ##   url: "https://github.com/torvalds/linux.git"\n  ##\n  ## EXAMPLE: (SSH)\n  ##   url: "ssh://git@github.com:torvalds/linux.git"\n  ##\n  url: "ssh://git@github.com/your-git-org/your-dag-repo"\n\n  ## the branch/tag/sha1 which we clone\n  ##\n  ref: "main"\n\n  ## the name of a pre-created secret containing files for ~/.ssh/\n  ##\n  ## NOTE:\n  ## - this is ONLY RELEVANT for SSH git repos\n  ## - the secret commonly includes files: id_rsa, id_rsa.pub, known_hosts\n  ## - known_hosts is NOT NEEDED if `git.sshKeyscan` is true\n  ##\n  secret: "airflow-secret"\n  ...\n  gitSync:\n    ...\n    refreshTime: 10\n')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"airflow:\n## configs for the docker image of the web/scheduler/worker\n##\nimage:\n  repository: elyra/airflow\n")),(0,i.kt)("p",{parentName:"li"},"The container image is created using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/elyra-ai/elyra/tree/v3.0.1/etc/docker/airflow"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"Dockerfile"))," and published on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/elyra/airflow"},"Docker Hub")," and ",(0,i.kt)("a",{parentName:"p",href:"https://quay.io/repository/elyra/airflow"},"quay.io"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Apache Airflow using the customized configuration."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'helm install "airflow" stable/airflow --values path/to/your_customized_helm_values.yaml\n')))),(0,i.kt)("p",null,"Once Apache Airflow is deployed you are ready to create and run pipelines, as described in the ",(0,i.kt)("a",{parentName:"p",href:"../getting_started/tutorials"},"tutorial"),"."),(0,i.kt)("h2",null,"Enabling Elyra pipelines in an existing Apache Airflow deployment"),(0,i.kt)("p",null,"To enable running of notebook pipelines on an existing Apache Airflow deployment  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable Git as DAG storage by customizing the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/airflow/blob/6416d898060706787861ff8ecbc4363152a35f45/airflow/config_templates/default_airflow.cfg#L913"},"Git settings in ",(0,i.kt)("inlineCode",{parentName:"a"},"airflow.cfg")),".")),(0,i.kt)("p",null,"Once Apache Airflow is deployed you are ready to create and run pipelines, as described in the ",(0,i.kt)("a",{parentName:"p",href:"../getting_started/tutorials"},"tutorial"),"."))}h.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),i=a(8650),r=a.n(i),l=a(5444),o=a(9403),s=a(5611),u=a(5900),p=a.n(u),c=function(e){var t,a=e.title,i=e.theme,r=e.tabs,l=void 0===r?[]:r;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,i=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||i,o=r.baseUrl,s=r.subDirectory,u=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},d=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===o,u=new RegExp(o+"/?(#.*)?$"),c=i.replace(u,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),f=g,k=a(2881),b=a(6958),y=a(36),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,i=e.location,u=e.Title,p=t.frontmatter,h=void 0===p?{}:p,g=t.relativePagePath,y=t.titleType,w=h.tabs,A=h.title,E=h.theme,v=h.description,x=h.keywords,P=h.date,T=(0,b.Z)().interiorTheme,D=(0,l.useStaticQuery)("2456312558").site.pathPrefix,C=D?i.pathname.replace(D,""):i.pathname,S=w?C.split("/").filter(Boolean).slice(-1)[0]||r()(w[0],{lower:!0}):"",G=E||T;return n.createElement(s.Z,{tabs:w,homepage:!1,theme:G,pageTitle:A,pageDescription:v,pageKeywords:x,titleType:y},n.createElement(c,{title:u?n.createElement(u,null):A,label:"label",tabs:w,theme:G}),w&&n.createElement(f,{title:A,slug:C,tabs:w,currentTab:S}),n.createElement(k.Z,{padded:!0},a,n.createElement(m,{relativePagePath:g}),n.createElement(N,{date:P})),n.createElement(d.Z,{pageContext:t,location:i,slug:C,tabs:w,currentTab:S}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-recipes-configuring-apache-mdx-680519ae8b22dc1c1dc6.js.map