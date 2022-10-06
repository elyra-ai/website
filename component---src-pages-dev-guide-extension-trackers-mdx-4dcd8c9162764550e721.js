"use strict";(self.webpackChunkelyra_ai_site=self.webpackChunkelyra_ai_site||[]).push([[1098],{2532:function(e,t,a){a.r(t),a.d(t,{Title:function(){return s},_frontmatter:function(){return d},default:function(){return m}});var r,n=a(3366),i=(a(7294),a(4983)),o=a(4295),l=["components"],s=function(){return(0,i.kt)("span",null,"Extension trackers")},d={},c=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),p={Title:s,_frontmatter:d},u=o.Z;function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)(u,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"This section will go over how extension trackers in Elyra are created and how they can be used.")),(0,i.kt)("p",null,"JupyterLab is designed to follow a modular architecture, where every component is built to be extended. Extensions interact with each other through ",(0,i.kt)("a",{parentName:"p",href:"https://jupyterlab.readthedocs.io/en/stable/extension/extension_points.html?#core-tokens"},"token objects"),", such as ",(0,i.kt)("a",{parentName:"p",href:"https://jupyterlab.readthedocs.io/en/stable/extension/extension_points.html?token#widget-tracker"},"widget trackers"),". Widget trackers keep track of widget instances on an application shell, also commonly used to restore their state."),(0,i.kt)("p",null,"Since Elyra is a collection of JupyterLab extensions, every extension in Elyra requires core extension tokens in order to interact with them and implement its own usage. Elyra also exposes their own trackers to the application, which are currently being used for restoring state upon page reload, but could also be used by further extensions to add their own widgets."),(0,i.kt)("h3",null,"Script Editor Trackers"),(0,i.kt)("p",null,"The Python Editor and R Editor extensions in Elyra extends ",(0,i.kt)("a",{parentName:"p",href:"https://jupyterlab.readthedocs.io/en/stable/api/classes/fileeditor.fileeditor-2.html"},"JupyterLab File Editor"),".\nThey are implemented by a common ",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptEditor")," class."),(0,i.kt)("p",null,"When the Python and R Editor extensions are activated, they request a File Editor Tracker. This is how the extensions are able to track the editor widget it extends.\nIn order to File Editors to recognize Python and R script editor widgets as File Editors, which they are, the script editor widgets are added to the File Editor Tracker, therefore both can properly inherit all default components and behaviors of a File Editor."),(0,i.kt)("p",null,"Both Python Editor and R Editor widgets have their own trackers, which are used by the ILayoutRestorer to track their state and allow activity restoration on page refresh.\nThe Python Editor ",(0,i.kt)("a",{parentName:"p",href:"https://jupyterlab.readthedocs.io/en/stable/api/classes/apputils.widgettracker-1.html"},"WidgetTracker")," is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const tracker = new WidgetTracker<ScriptEditor>({\n  namespace: PYTHON_EDITOR_NAMESPACE\n});\n")),(0,i.kt)("p",null,"where"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PYTHON_EDITOR_NAMESPACE = 'elyra-python-editor-extension'\n")),(0,i.kt)("p",null,"Similarly, the R Editor tracker is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const tracker = new WidgetTracker<ScriptEditor>({\n  namespace: R_EDITOR_NAMESPACE\n});\n")),(0,i.kt)("p",null,"where"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"R_EDITOR_NAMESPACE = 'elyra-r-editor-extension'\n")),(0,i.kt)("h3",null,"Pipeline Editor Trackers"),(0,i.kt)("p",null,"The Pipeline Editor extension in Elyra extends ",(0,i.kt)("a",{parentName:"p",href:"https://jupyterlab.readthedocs.io/en/latest/extension/documents.html"},"JupyterLab Document Widget"),". Similar to the Script Editor widget trackers, the Pipeline Editor tracker is used by a restorer, and it is defined as below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const tracker = new WidgetTracker<DocumentWidget>({\n  namespace: PIPELINE_EDITOR_NAMESPACE\n});\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"PIPELINE_EDITOR_NAMESPACE = 'elyra-pipeline-editor-extension'")),(0,i.kt)("p",null,"In this case, Pipeline Editor tracker has a broader scope when compared to the Script Editor tracker, as it allows other Document Widget instances to be added to it. For instance, if Pipeline Editor is further extended, its API would allow it to have a new File Editor widget, which actually is a ",(0,i.kt)("inlineCode",{parentName:"p"},"DocumentWidget<FileEditor>")," type."),(0,i.kt)("p",null,"More information about the architecture of Document Widgets can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://jupyterlab.readthedocs.io/en/stable/index.html"},"JupyterLab documentation"),"."))}m.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(7294),n=a(8650),i=a.n(n),o=a(5444),l=a(9403),s=a(5611),d=a(5900),c=a.n(d),p=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return r.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,l=i.baseUrl,s=i.subDirectory,d=l+"/edit/"+i.branch+s+"/src/pages"+t;return l?r.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},m=a(4275),h=a(1721),E=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===l,d=new RegExp(l+"/?(#.*)?$"),p=n.replace(d,a);return r.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},r.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(r.Component),k=E,b=a(2881),g=a(6958),y=a(36),w=function(e){var t=e.date,a=new Date(t);return t?r.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(y.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},f=function(e){var t=e.pageContext,a=e.children,n=e.location,d=e.Title,c=t.frontmatter,h=void 0===c?{}:c,E=t.relativePagePath,y=t.titleType,f=h.tabs,x=h.title,P=h.theme,N=h.description,v=h.keywords,T=h.date,D=(0,g.Z)().interiorTheme,_=(0,o.useStaticQuery)("2456312558").site.pathPrefix,S=_?n.pathname.replace(_,""):n.pathname,C=f?S.split("/").filter(Boolean).slice(-1)[0]||i()(f[0],{lower:!0}):"",R=P||D;return r.createElement(s.Z,{tabs:f,homepage:!1,theme:R,pageTitle:x,pageDescription:N,pageKeywords:v,titleType:y},r.createElement(p,{title:d?r.createElement(d,null):x,label:"label",tabs:f,theme:R}),f&&r.createElement(k,{title:x,slug:S,tabs:f,currentTab:C}),r.createElement(b.Z,{padded:!0},a,r.createElement(u,{relativePagePath:E}),r.createElement(w,{date:T})),r.createElement(m.Z,{pageContext:t,location:n,slug:S,tabs:f,currentTab:C}),r.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-dev-guide-extension-trackers-mdx-4dcd8c9162764550e721.js.map