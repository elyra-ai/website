(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),c=a("Wbzz"),l=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),m=a.n(d),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,l=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("dI71"),f=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===i,l=new RegExp(i+"/?(#.*)?$"),b=n.replace(l,a);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(u.b)(c.Link,{className:f.link,to:""+b},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},o))))))},t}(i.a.Component),y=a("MjG9"),x=a("CzIb"),w=a("Asxa"),v=a("OIbQ"),C=a.n(v),T=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(w.c,{className:C.a.row},Object(u.b)(w.a,null,Object(u.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,m=s.tabs,O=s.title,N=s.theme,f=s.description,w=s.keywords,v=s.date,C=Object(x.a)().interiorTheme,D=Object(c.useStaticQuery)("2456312558").site.pathPrefix,P=D?n.pathname.replace(D,""):n.pathname,I=m?P.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",E=N||C;return Object(u.b)(b.a,{tabs:m,homepage:!1,theme:E,pageTitle:O,pageDescription:f,pageKeywords:w,titleType:d},Object(u.b)(h,{title:i?Object(u.b)(i,null):O,label:"label",tabs:m,theme:E}),m&&Object(u.b)(k,{title:O,slug:P,tabs:m,currentTab:I}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:p}),Object(u.b)(T,{date:v})),Object(u.b)(g.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:I}),Object(u.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},CKDN:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var n,i=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),function(){return Object(r.b)("span",null,"Creating a custom runtime container image")}),b={},s=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),p={Title:l,_frontmatter:b},d=c.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(d,Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"A runtime image provides the execution environment in which nodes are executed when a Jupyter notebook is processed as part of a pipeline. Elyra includes a number of runtime images for popular configurations, such as TensorFlow or Pytorch.")),Object(r.b)("p",null,"Should none of these images meet your needs, you can utilize a custom container image, as long as it meets the following pre-requisites:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The image is stored in a container registry in a public or private network that the container platform in which the pipeline is executed can connect to. Examples of such registries are ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://hub.docker.com"}),"hub.docker.com")," or a self-managed registry in an intranet environment."),Object(r.b)("li",{parentName:"ul"},"The image can be pulled from the registry without the need to authenticate. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.python.org/"}),"Python 3")," is pre-installed and in the search path. Python versions that have reached their “end of life” are not supported."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://curl.haxx.se/"}),Object(r.b)("inlineCode",{parentName:"a"},"curl"))," is pre-installed and in the search path.")),Object(r.b)("p",null,"Refer to the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#additional-considerations"}),"Additional considerations")," section for important implementation details."),Object(r.b)("h2",null,"Requirements"),Object(r.b)("p",null,"To create a custom container image and publish it on ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://hub.docker.com"}),"hub.docker.com")," you need"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Docker Desktop",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Available for ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac"}),"MacOS")," and\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows"}),"Windows")))),Object(r.b)("li",{parentName:"ul"},"A Docker id at ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://hub.docker.com"}),"https://hub.docker.com/"),".")),Object(r.b)("h2",null,"Creating a basic Python runtime container image"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://hub.docker.com/_/python"}),"default Python 3 Docker image")," has Python and ",Object(r.b)("inlineCode",{parentName:"p"},"curl")," pre-installed and it is therefore a good starting point."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a file named ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," and add the following content."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"FROM python:3\n\nCOPY requirements.txt ./\nRUN pip3 install --no-cache-dir -r requirements.txt\n")),Object(r.b)("p",{parentName:"li"},"When you create a container image using this ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://hub.docker.com/_/python"}),"default Python 3 Docker image")," is loaded and the requirements listed in ",Object(r.b)("inlineCode",{parentName:"p"},"requirements.txt")," ",Object(r.b)("inlineCode",{parentName:"p"},"pip"),"-installed.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"in the same directory create a ",Object(r.b)("inlineCode",{parentName:"p"},"requirements.txt")," file and add the packages your notebooks depend on. For example, if your notebooks require the latest version of ",Object(r.b)("inlineCode",{parentName:"p"},"Pandas")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Numpy"),",  add the appropriate package names."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"pandas\nnumpy\n")),Object(r.b)("p",{parentName:"li"},"Note: If your notebooks require packages that are not pre-installed on this image they need to ",Object(r.b)("inlineCode",{parentName:"p"},"pip"),"-install them explicitly.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open a terminal to the location where you’ve created the ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," and ",Object(r.b)("inlineCode",{parentName:"p"},"requirements.txt"),"."))),Object(r.b)("h2",null,"Using Docker"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Build the container image by running the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/build/"}),Object(r.b)("inlineCode",{parentName:"a"},"docker build"))," command in the terminal window, replacing ",Object(r.b)("inlineCode",{parentName:"p"},"my-runtime-image")," with the desired Docker image name."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t my-runtime-image .\n")))),Object(r.b)("h2",null,"Publishing the basic runtime container image"),Object(r.b)("p",null,"When a notebook is processed as part of a pipeline the associated container image is downloaded from the container registry stated in the URL of the image."),Object(r.b)("p",null,"For example, the following steps publish the container image you’ve just created on ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://hub.docker.com"}),"Docker Hub")," using docker."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log in to Docker Hub using ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/login/"}),Object(r.b)("inlineCode",{parentName:"a"},"docker login"))," and provide your Docker id and password."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker login\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/images/"}),Object(r.b)("inlineCode",{parentName:"a"},"docker images"))," and locate the image id for your Docker image. The image id uniquely identifies your Docker image."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker images\n\nREPOSITORY         TAG      IMAGE ID            CREATED             SIZE \nmy-runtime-image   latest   0d1bd98fdd84        2 hours ago         887MB\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Tag the container image using ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/tag/"}),Object(r.b)("inlineCode",{parentName:"a"},"docker tag")),", replacing ",Object(r.b)("inlineCode",{parentName:"p"},"my-image-id"),", ",Object(r.b)("inlineCode",{parentName:"p"},"docker-id-or-org-id"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"my-runtime-image")," as necessary. (",Object(r.b)("inlineCode",{parentName:"p"},"docker-id-or-org-id")," is either your Docker id or, if you are a member of a team in an organization, the id of that organization.)"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker tag my-image-id docker-id-or-org-id/my-runtime-image:latest\n")),Object(r.b)("p",{parentName:"li"},"Note: For illustrative purposes this image is tagged ",Object(r.b)("inlineCode",{parentName:"p"},"latest"),", which makes it the default image. If desired, replace the tag with a specific version number or identifier, such as ",Object(r.b)("inlineCode",{parentName:"p"},"Vx.y.z"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Publish the container image on Docker Hub by running ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/push/"}),Object(r.b)("inlineCode",{parentName:"a"},"docker push")),", replacing ",Object(r.b)("inlineCode",{parentName:"p"},"docker-id-or-org-id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"my-runtime-image")," as necessary."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"docker push docker-id-or-org-id/my-runtime-image:latest\n")))),Object(r.b)("p",null,"Once the image is published on Docker Hub you can ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/website/user_guide/runtime-image-conf.md"}),"create a runtime image configuration using the Elyra UI or ",Object(r.b)("inlineCode",{parentName:"a"},"elyra-metadata")," CLI")," and reference the published ",Object(r.b)("inlineCode",{parentName:"p"},"docker-id-or-org-id/my-runtime-image:latest")," Docker image."),Object(r.b)("h2",null,"Additional Considerations"),Object(r.b)("p",null,"Prior to notebook processing Elyra modifies the associated container by changing the default execution command and installing additional packages.\nPlease review the following section if"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"your Dockerfile ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#dockerfiles-with-cmd-instructions"}),"includes a CMD instruction")),Object(r.b)("li",{parentName:"ul"},"your Dockerfile ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#dockerfiles-with-entrypoint-instructions"}),"includes an ENTRYPOINT instruction")),Object(r.b)("li",{parentName:"ul"},"your package requirements ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#conflicting-package-dependencies"}),"include pinned versions"))),Object(r.b)("h3",null,"Dockerfiles with CMD instructions"),Object(r.b)("p",null,"If a ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," includes a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/#cmd"}),Object(r.b)("inlineCode",{parentName:"a"},"CMD"))," instruction, which is used to specify defaults for an executing container, you might have to customize your notebooks. When a notebook is processed as part of a pipeline the ",Object(r.b)("inlineCode",{parentName:"p"},"CMD")," instruction is overriden, which might have side effects. The following examples illustrate two scenarios."),Object(r.b)("h4",null,"Scenario 1 - override has no side-effects"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CMD")," instruction launches an application that does not need to be running when the notebook is executed. For example, the official Python container images might launch the interactive Python shell by default, like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'...\nCMD ["python3"]\n')),Object(r.b)("p",null,"Notebooks will work as is because Python is explicitly run during notebook processing."),Object(r.b)("h4",null,"Scenario 2 - override has side-effects"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CMD")," instruction launches an application or service that a notebook consumes. For example, a container image might by default launch an application that provides computational (or connectivity) services that notebooks rely on."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'...\nCMD ["python3", "/path/to/application-or-service"]\n')),Object(r.b)("p",null,"When the container started to process a notebook, the referenced application is unavailable because it wasn’t automatically started. If feasible, the notebook could launch the application in the background in a code cell like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'import os\nimport time\n# launch application in the background\nos.system("python /path/to/application-or-service &")\n# wait to allow for application initialization\ntime.sleep(2)\n')),Object(r.b)("h3",null,"Dockerfiles with ENTRYPOINT instructions"),Object(r.b)("p",null,"If a container is configured to run as an executable by using the  ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/#entrypoint"}),Object(r.b)("inlineCode",{parentName:"a"},"ENTRYPOINT"))," instruction in the ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile"),", you likely have to customize your notebook. "),Object(r.b)("h4",null,"Scenario 1 - override has side-effects"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ENTRYPOINT")," instruction launches an application or service that a notebook consumes."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'ENTRYPOINT ["python3", "/path/to/application-or-service"]\n')),Object(r.b)("p",null,"When the container is launched to process a notebook the application or service is unavailable because it wasn’t automatically started. If feasible, the notebook could launch the application or service in the background in a code cell like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'import os\nimport time\n# launch application in the background\nos.system("python /path/to/application-or-service &")\n# wait to allow for application initialization\ntime.sleep(2)\n')),Object(r.b)("h3",null,"Conflicting package dependencies"),Object(r.b)("p",null,"Elyra installs additional packages in the container prior to notebook processing. If a pre-installed package is not compatible with the version requirements defined in ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/elyra-ai/elyra/blob/master/etc/generic/requirements-elyra.txt"}),"requirements-elyra.txt"),", it is replaced. You should review any version discrepancies as they might lead to unexpected processing results."))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-recipes-create-custom-runtime-mdx-6827b0bc736f9e6de050.js.map