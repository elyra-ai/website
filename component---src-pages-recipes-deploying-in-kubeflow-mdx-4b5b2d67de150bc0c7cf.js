"use strict";(self.webpackChunkelyra_ai_site=self.webpackChunkelyra_ai_site||[]).push([[6207],{4294:function(e,t,a){a.r(t),a.d(t,{Title:function(){return s},_frontmatter:function(){return u},default:function(){return d}});var n,r=a(3366),l=(a(7294),a(4983)),i=a(4295),o=["components"],s=function(){return(0,l.kt)("span",null,"Deploying Elyra & JupyterHub in a Kubernetes environment")},u={},p=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),m={Title:s,_frontmatter:u},c=i.Z;function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)(c,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(p,{mdxType:"PageDescription"},(0,l.kt)("p",null,"This document goes over how to integrate Elyra into a self-service Jupyter Notebook platform\nmanaged by JupyterHub in a Kubernetes environment.")),(0,l.kt)("p",null,"The links below provide more details on how to install/configure JupyterHub:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zero-to-jupyterhub.readthedocs.io/en/latest/index.html"},"Zero to JupyterHub with Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lresende/ansible-kubernetes-cluster"},"Ansible script to deploy Elyra, JupyterHub, Jupyter Enterprise Gateway"))),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2ElEQVQoz21TTWvbQBDV/78UcujPyCnQHgrtIaSUJhjatHUc2ySWcaIPe+WVZGl3Z/aFGcmOD10Y7Qdvvt4bJRhXjFF3Zj6ZvDnnYJsDmqZFXdfoQxhwRGAWH8Ym3+PbpIDrOyRN1yGMoGPAY3DEiEAR3eoO2WaF16xEtVyizjIQR8VFZtRmhywr0bYtkn9fr5DP7sFM8K4fQGNA2SUB6i321Q7W1uCiQJtlCNIFseJeWeocVjL9cYNNusbizwRmW/63Sjl1pMf3Toj1/fA4w/3lF5jntQZNTPmC4iVFsTUgIpBkHT2FCrnSwWKxrtAH1hbjyJ0sf32NePEBNH8cAm6n31H8vUHw/iSGJ0ZqIpz3ypVrLdr9Ds55rbzzjPVOEjNIEr8ri6QuCzxMbrGc/lbnEBhN2+Fp8QzvnOKeVilm8wXyPNe7qSx+/nrUjiCCBn+iJhHA1hjYulawtDwAu6E9ALba4WFVofdSjyQl9N1B8QWAteSNpEwl8Yzpc4VlyQzK2FC7R1OVIKUkjhwCLs+xufiIzeUVAgX1TY5B4pkQfd+ryVlHJ0atXEVS4WjgzhjQ50+gu9thjJiHls//FBnO+XyulqYprLX65r0/zaWOFQ8qx9GO3zeY6lQGCOUJiQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"JupyterHub Deployment",title:"JupyterHub Deployment",src:"/elyra-ai-site/static/cb96880091925480504d85b0d4537224/3cbba/elyra-deployment-diagram.png",srcSet:["/elyra-ai-site/static/cb96880091925480504d85b0d4537224/7fc1e/elyra-deployment-diagram.png 288w","/elyra-ai-site/static/cb96880091925480504d85b0d4537224/a5df1/elyra-deployment-diagram.png 576w","/elyra-ai-site/static/cb96880091925480504d85b0d4537224/3cbba/elyra-deployment-diagram.png 1152w","/elyra-ai-site/static/cb96880091925480504d85b0d4537224/0b124/elyra-deployment-diagram.png 1728w","/elyra-ai-site/static/cb96880091925480504d85b0d4537224/a91d8/elyra-deployment-diagram.png 1820w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("h2",null,"Configuring JupyterHub Deployment"),(0,l.kt)("p",null,"In this case, JupyterHub is the recommended entry point for Elyra, as it will manage the user\nauthorization and provisioning of individual Notebook servers for each user."),(0,l.kt)("p",null,"JupyterHub is configured via a config.yaml file, and the following settings are required:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configure JupyterHub to use Elyra docker image when instantiating the notebook environment for each user")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'singleuser:\n  defaultUrl: "/lab"\n  image:\n    name: elyra/elyra\n    # change to a specific release version as appropriate\n    tag: 3.0.1\n    # disable this in a production environment\n    pullPolicy: "Always"\n  storage:\n    dynamic:\n      storageClass: nfs-dynamic\n')),(0,l.kt)("h2",null,"Deploying Jupyter Enterprise Gateway"),(0,l.kt)("p",null,"Jupyter Enterprise Gateway enables support for remote kernels in a Jupyter Deployment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deploying Jupyter Enterprise gateway")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/jupyter/enterprise_gateway/v2.1.1/etc/kubernetes/enterprise-gateway.yaml\n")),(0,l.kt)("h2",null,"Connecting JupyterHub and Jupyter Enterprise Gateway"),(0,l.kt)("p",null,"Now that all components are deployed, we need to make them aware of each other via some\nadditional environment variables."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flowing current user from JupyterHub to Jupyter Enterprise Gateway")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"hub:\n  ...\n  extraConfig: |-\n    from kubespawner import KubeSpawner\n    from tornado import gen\n    import yaml\n\n    class CustomKubeSpawner(KubeSpawner):\n        def get_env(self):\n            env = super().get_env()\n\n            env['KERNEL_USERNAME'] =  self.user.name\n\n            return env\n    c.JupyterHub.spawner_class = CustomKubeSpawner\n    c.Spawner.start_timeout = 500\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Integrating Elyra (Jupyter Notebook) with Jupyter Enterprise Gateway")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'singleuser:\n  defaultUrl: "/lab"\n  image:\n    name: elyra/elyra\n    # change to a specific release version as appropriated\n    tag: 3.0.1\n    # disable this in a production environment\n    pullPolicy: "Always"\n  storage:\n    dynamic:\n      storageClass: nfs-dynamic\n  extraEnv:\n    JUPYTER_GATEWAY_URL: <FQDN of Gateway Service Endpoint>\n    JUPYTER_GATEWAY_REQUEST_TIMEOUT: "120"\n')),(0,l.kt)("h2",null,"Customizing the docker image to be used"),(0,l.kt)("p",null,"We have created an ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/elyra/elyra"},"Elyra docker image")," with specific dependencies\nrequired to run elyra, and that could be used to customize your environment with other additional\npackages required by your workloads, or any other customizations needed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM elyra/elyra:3.0.1\n\n...\n\n\n")))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(9403),s=a(5611),u=a(5900),p=a.n(u),m=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},c=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,u=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},d=a(4275),g=a(1721),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,u=new RegExp(o+"/?(#.*)?$"),m=r.replace(u,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),b=y,h=a(2881),k=a(6958),f=a(36),E=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,r=e.location,u=e.Title,p=t.frontmatter,g=void 0===p?{}:p,y=t.relativePagePath,f=t.titleType,w=g.tabs,v=g.title,N=g.theme,A=g.description,J=g.keywords,x=g.date,P=(0,k.Z)().interiorTheme,T=(0,i.useStaticQuery)("2456312558").site.pathPrefix,C=T?r.pathname.replace(T,""):r.pathname,H=w?C.split("/").filter(Boolean).slice(-1)[0]||l()(w[0],{lower:!0}):"",Q=N||P;return n.createElement(s.Z,{tabs:w,homepage:!1,theme:Q,pageTitle:v,pageDescription:A,pageKeywords:J,titleType:f},n.createElement(m,{title:u?n.createElement(u,null):v,label:"label",tabs:w,theme:Q}),w&&n.createElement(b,{title:v,slug:C,tabs:w,currentTab:H}),n.createElement(h.Z,{padded:!0},a,n.createElement(c,{relativePagePath:y}),n.createElement(E,{date:x})),n.createElement(d.Z,{pageContext:t,location:r,slug:C,tabs:w,currentTab:H}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-recipes-deploying-in-kubeflow-mdx-4b5b2d67de150bc0c7cf.js.map