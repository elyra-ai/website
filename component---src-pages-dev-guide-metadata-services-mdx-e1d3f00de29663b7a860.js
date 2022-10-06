"use strict";(self.webpackChunkelyra_ai_site=self.webpackChunkelyra_ai_site||[]).push([[3754],{2291:function(e,a,t){t.r(a),t.d(a,{Title:function(){return l},_frontmatter:function(){return m},default:function(){return u}});var n,r=t(3366),i=(t(7294),t(4983)),s=t(4295),o=["components"],l=function(){return(0,i.kt)("span",null,"Metadata services")},m={},d=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),c={Title:l,_frontmatter:m},p=s.Z;function u(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)(p,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"PageDescription"},(0,i.kt)("p",null,"While building Enterprise extensions for the Elyra project we identified that there is very often a requirement to integrate with external runtimes, data sources, and other components hosted in remote locations or that need additional metadata in order to connect to these external components.")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Metadata Service")," provides a generic service that can be used to store metadata\nthat can be easily integrated with Elyra backend and/or frontend components."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"482px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"92.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlklEQVQ4y31UCW6DQAzk//+rKlVKm6SEEEK4cgB7TWV3DUs4LFkRwTvM2OONnHMwxszSWosxHMKgd2tnovAwgVNS9ErjWlS4lhXK5o5b3SAvaxR1g65Xs3r5CAPKn2EQYHorcLmVDEJgWVEhr2q0fT+rF6URISulZmmNkUo4a+GcBTgds9Faz5IlC1X6DZMKCPi9T3LYeWCRLedYMsXj1eI7PnPPKPiQtbg/X9gnF+yTFNX9we/oQxT0vIsTKK2HPk4YmjeGlEvTDBkKy4EhPSz1UMDge+d8/4zRi/0berg2ZZamNU+W2nCrGp56r0bLLE55G9BMAM95gc4DrtpmTbLIJpkTyX76i1bbso3k0npt1W1KpiCZX4cYxzTDKcuxVjrZlH/0gM0KizVWE4biOSsvvc+kh+wzn3IwtAkbOvBmJMi0KYfkwsuvzdjXZ9vh8+eIj92eJ81b5Lfr1XXsAnLDZFOU0kiyHL9phvhy5ZUSWQTyczpzD9O8GFhStF3PBJR3w7ApMphw0cd7cn65So1MKLwo/gCRcoeImAocYgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Metadata Services",title:"Metadata Services",src:"/elyra-ai-site/static/fddd1ee2424905c925b025d22f329a32/20d66/metadata-components.png",srcSet:["/elyra-ai-site/static/fddd1ee2424905c925b025d22f329a32/7fc1e/metadata-components.png 288w","/elyra-ai-site/static/fddd1ee2424905c925b025d22f329a32/20d66/metadata-components.png 482w"],sizes:"(max-width: 482px) 100vw, 482px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("h3",null,"Metadata Services structure using the default file system store"),(0,i.kt)("p",null,"The default implementation is for the metadata services to store metadata files in the file system, grouped\nby directories based on the type of metadata. "),(0,i.kt)("p",null,"The root directory for metadata is relative to the ‘Jupyter Data directory’ (e.g. jupyter —data-dir)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/Users/xxx/Library/Jupyter/metadata/\n")),(0,i.kt)("p",null,"Each type of metadata is then stored in a child directory, which internally is\nreferred to as the ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),". "),(0,i.kt)("p",null,"As an example ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimes")," is the namespace for runtime metadata instances that reside in the following directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/Users/xxx/Library/Jupyter/metadata/runtimes\n")),(0,i.kt)("p",null,"The contents of this folder would then include multiple metadata files, each associated with a type or schema corresponding to the desired runtime platform."),(0,i.kt)("p",null,"For example, the following contains runtime metadata for two runtime platforms, airflow and kfp,\nwhere each runtime type has 1 or 2 runtimes defined, respectively."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/Users/xxx/Library/Jupyter/metadata/runtimes/airflow-cloud.json\n/Users/xxx/Library/Jupyter/metadata/runtimes/kfp-fyre.json\n/Users/xxx/Library/Jupyter/metadata/runtimes/kfp-qa.json\n")),(0,i.kt)("p",null,"And each metadata file looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "display_name": "Kubeflow Pipeline - Fyre",\n  "schema_name": "kfp",\n  "metadata": {\n    "api_endpoint": "http://weakish1.fyre.ibm.com:32488/pipeline",\n    "api_username": "username@email.com",\n    "api_password": "mypassword",\n    "cos_endpoint": "http://weakish1.fyre.ibm.com:30427",\n    "cos_username": "minio",\n    "cos_password": "minio123",\n    "cos_bucket": "test-bucket",\n    "tags": [\n      "kfp", "v1.1"\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Because the runtime platform schemas are considered “factory data”, the schema files are provided as part of the distribution and are located in the Elyra distribution under ",(0,i.kt)("inlineCode",{parentName:"p"},"elyra/metadata/schemas"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[path to python distributions]/elyra/metadata/schemas/kfp.json\n[path to python distributions]/elyra/metadata/schemas/airflow.json\n")),(0,i.kt)("h3",null,"Metadata Client API"),(0,i.kt)("p",null,"Users can easily manipulate metadata via the Client API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"elyra-metadata list runtimes\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Available metadata instances for runtimes (includes invalid):\n\nSchema   Instance       Resource  \n------   --------       -------- \nkfp      kfp-fyre       /Users/lresende/Library/Jupyter/metadata/runtimes/kfp-fyre.json\nkfp      kfp-qa         /Users/lresende/Library/Jupyter/metadata/runtimes/kfp-qa.json\nairflow  airflow-cloud  /Users/lresende/Library/Jupyter/metadata/runtimes/airflow-cloud.json\n")),(0,i.kt)("h3",null,"Metadata Service REST API"),(0,i.kt)("p",null,"A REST API is available for easy integration with frontend components:"),(0,i.kt)("p",null,"Retrieve all metadata for a given namespace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-REST"},"GET /elyra/metadata/<namespace>\n")),(0,i.kt)("p",null,"Retrieve a given metadata resource from a given namespace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-REST"},"GET /elyra/metadata/<namespace>/<resource>\n")),(0,i.kt)("h3",null,"Metadata APIs"),(0,i.kt)("p",null,"A Python API is also available for accessing and manipulating metadata.  This is accomplished using the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataManager")," along with a corresponding storage class.  The default storage class is ",(0,i.kt)("inlineCode",{parentName:"p"},"FileMetadataStore"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"from elyra.metadata import MetadataManager, FileMetadataStore\n\nmetadata_manager = MetadataManager(namespace=\"runtimes\",\n                                   store=FileMetadataStore(namespace='runtimes'))\n\nruntime_configuration = metadata_manager.get('kfp')\n\nif not runtime_configuration:\n    raise RuntimeError(\"Runtime metadata not available.\")\n\napi_endpoint = runtime_configuration.metadata['api_endpoint']\napi_username = runtime_configuration.metadata['api_username']\napi_password = runtime_configuration.metadata['api_password']\ncos_endpoint = runtime_configuration.metadata['cos_endpoint']\ncos_username = runtime_configuration.metadata['cos_username']\ncos_password = runtime_configuration.metadata['cos_password']\nbucket_name = runtime_configuration.metadata['cos_bucket']\ntags = runtime_configuration.metadata['tags']\n\n")))}u.isMDXComponent=!0},4295:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(7294),r=t(8650),i=t.n(r),s=t(5444),o=t(9403),l=t(5611),m=t(5900),d=t.n(m),c=function(e){var a,t=e.title,r=e.theme,i=e.tabs,s=void 0===i?[]:i;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=s.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===r,a))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},p=function(e){var a=e.relativePagePath,t=e.repository,r=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||r,o=i.baseUrl,l=i.subDirectory,m=o+"/edit/"+i.branch+l+"/src/pages"+a;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=t(4275),g=t(1721),f=function(e){function a(){return e.apply(this,arguments)||this}return(0,g.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var a,t=i()(e,{lower:!0,strict:!0}),l=t===o,m=new RegExp(o+"/?(#.*)?$"),c=r.replace(m,t);return n.createElement("li",{key:e,className:d()((a={},a["PageTabs-module--selected-item--aBB0K"]=l,a),"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":a},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},a}(n.Component),h=f,k=t(2881),y=t(6958),b=t(36),v=function(e){var a=e.date,t=new Date(a);return a?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var a=e.pageContext,t=e.children,r=e.location,m=e.Title,d=a.frontmatter,g=void 0===d?{}:d,f=a.relativePagePath,b=a.titleType,w=g.tabs,E=g.title,A=g.theme,x=g.description,N=g.keywords,T=g.date,P=(0,y.Z)().interiorTheme,_=(0,s.useStaticQuery)("2456312558").site.pathPrefix,M=_?r.pathname.replace(_,""):r.pathname,S=w?M.split("/").filter(Boolean).slice(-1)[0]||i()(w[0],{lower:!0}):"",L=A||P;return n.createElement(l.Z,{tabs:w,homepage:!1,theme:L,pageTitle:E,pageDescription:x,pageKeywords:N,titleType:b},n.createElement(c,{title:m?n.createElement(m,null):E,label:"label",tabs:w,theme:L}),w&&n.createElement(h,{title:E,slug:M,tabs:w,currentTab:S}),n.createElement(k.Z,{padded:!0},t,n.createElement(p,{relativePagePath:f}),n.createElement(v,{date:T})),n.createElement(u.Z,{pageContext:a,location:r,slug:M,tabs:w,currentTab:S}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-dev-guide-metadata-services-mdx-e1d3f00de29663b7a860.js.map