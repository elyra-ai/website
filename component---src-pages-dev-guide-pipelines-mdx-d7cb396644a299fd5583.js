(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("NmYn"),o=n.n(r),s=n("Wbzz"),l=n("Xrax"),c=n("k4MR"),p=n("TSYQ"),b=n.n(p),d=n("QH2O"),m=n.n(d),u=n("qKvR"),h=function(e){var t,n=e.title,a=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(u.b)("div",{className:b()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===a,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},n)))))},f=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=n||a,r=i.baseUrl,o=i.subDirectory,l=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:l},"Edit this page on GitHub"))):null},y=n("FCXl"),j=n("dI71"),O=n("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),r=n===i,l=new RegExp(i+"/?(#.*)?$"),c=a.replace(l,n);return Object(u.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(u.b)(s.Link,{className:O.link,to:""+c},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:O.list},r))))))},t}(i.a.Component),w=n("MjG9"),v=n("CzIb"),N=n("Asxa"),P=n("OIbQ"),_=n.n(P),T=function(e){var t=e.date,n=new Date(t);return t?Object(u.b)(N.c,{className:_.a.row},Object(u.b)(N.a,null,Object(u.b)("div",{className:_.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,i=e.Title,r=t.frontmatter,p=void 0===r?{}:r,b=t.relativePagePath,d=t.titleType,m=p.tabs,f=p.title,j=p.theme,O=p.description,N=p.keywords,P=p.date,_=Object(v.a)().interiorTheme,k=Object(s.useStaticQuery)("2456312558").site.pathPrefix,A=k?a.pathname.replace(k,""):a.pathname,C=m?A.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",E=j||_;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:E,pageTitle:f,pageDescription:O,pageKeywords:N,titleType:d},Object(u.b)(h,{title:i?Object(u.b)(i,null):f,label:"label",tabs:m,theme:E}),m&&Object(u.b)(x,{title:f,slug:A,tabs:m,currentTab:C}),Object(u.b)(w.a,{padded:!0},n,Object(u.b)(g,{relativePagePath:b}),Object(u.b)(T,{date:P})),Object(u.b)(y.a,{pageContext:t,location:a,slug:A,tabs:m,currentTab:C}),Object(u.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},wNcH:function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return l})),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var a,i=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),s=n("013z"),l=(n("qKvR"),function(){return Object(o.b)("span",null,"Pipelines")}),c={},p=(a="PageDescription",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={Title:l,_frontmatter:c},d=s.a;function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(p,{mdxType:"PageDescription"},Object(o.b)("p",null,"The following sections cover the details relative to working with pipelines in a development capacity.")),Object(o.b)("h2",null,"Pipeline definition"),Object(o.b)("p",null,"Below is a json representation of the pipeline that is generated by the ",Object(o.b)("strong",{parentName:"p"},"Pipeline Editor")," and referred to as the ",Object(o.b)("em",{parentName:"p"},"pipeline definition"),". "),Object(o.b)("p",null,"The pipeline is then submitted to the ",Object(o.b)("strong",{parentName:"p"},"Elyra Scheduler")," which parses, properly packages and\nsubmits the pipeline definition to the chosen target runtime (e.g. Kubeflow Pipelines)."),Object(o.b)("p",null,"For more details on the ",Object(o.b)("strong",{parentName:"p"},"pipeline json definition")," see it’s ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/elyra-ai/pipeline-schemas/blob/master/common-pipeline/pipeline-flow/pipeline-flow-v3-schema.json"}),"json schema")),Object(o.b)("h3",null,"Pipeline definition json example"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n    "doc_type": "pipeline",\n    "version": "3.0",\n    "json_schema": "http://api.dataplatform.ibm.com/schemas/common-pipeline/pipeline-flow/pipeline-flow-v3-schema.json",\n    "id": "582f2dd2-b329-4bfd-8326-3e0dc8c69744",\n    "primary_pipeline": "f757f14a-4494-46b5-bb27-aeaa8a065477",\n    "pipelines": [{\n        "id": "f757f14a-4494-46b5-bb27-aeaa8a065477",\n        "nodes": [{\n            "id": "db9f3f5b-b2e3-4824-aadd-c1c6bf652534",\n            "type": "execution_node",\n            "app_data": {\n                "label": "generate-contributions",\n                "component_parameters": {\n                    "filename": "demo-pipelines/generate-contributions.ipynb",\n                    "runtime_image": "tensorflow/tensorflow:2.0.0-py3",\n                    "outputs": ["community_contributions.csv"],\n                    "env_vars": ["GITHUB_TOKEN=xxxx"],\n                    "dependencies": ["contributors.csv"],\n                    "include_subdirectories": false\n                },\n                "ui_data": {\n                    "label": "generate-contributions",\n                    "x_pos": 387,\n                    "y_pos": 73,\n                    "description": "Notebook file"\n                }\n            },\n            "inputs": [{\n                "id": "inPort",\n                "app_data": {\n                    "ui_data": {\n                        "cardinality": {\n                            "min": 0,\n                            "max": 1\n                        },\n                        "label": "Input Port"\n                    }\n                }\n            }],\n            "outputs": [{\n                "id": "outPort",\n                "app_data": {\n                    "ui_data": {\n                        "cardinality": {\n                            "min": 0,\n                            "max": -1\n                        },\n                        "label": "Output Port"\n                    }\n                }\n            }]\n        }, {\n            "id": "f6584209-6f22-434f-9820-41327b6c749d",\n            "type": "execution_node",\n            "app_data": {\n                "label": "generate-stats",\n                "component_parameters": {\n                    "filename": "demo-pipelines/generate-stats.ipynb",\n                    "runtime_image": "tensorflow/tensorflow:2.0.0-py3",\n                    "outputs": ["community_stats.csv"],\n                    "env_vars": ["GITHUB_TOKEN=xxxx"],\n                    "dependencies": ["contributors.csv"],\n                    "include_subdirectories": false\n                },\n                "ui_data": {\n                    "label": "generate-stats",\n                    "x_pos": 77,\n                    "y_pos": 79,\n                    "description": "Notebook file"\n                }\n            },\n            "inputs": [{\n                "id": "inPort",\n                "app_data": {\n                    "ui_data": {\n                        "label": ""\n                    }\n                }\n            }],\n            "outputs": [{\n                "id": "outPort",\n                "app_data": {\n                    "ui_data": {\n                        "label": ""\n                    }\n                }\n            }]\n        }, {\n            "id": "079c0e12-eb5f-4fcc-983b-09e011869fee",\n            "type": "execution_node",\n            "app_data": {\n                "label": "overview",\n                "component_parameters": {\n                    "filename": "demo-pipelines/overview.ipynb",\n                    "runtime_image": "elyra/tensorflow:1.15.2-py3",\n                    "include_subdirectories": false\n                },\n                "ui_data": {\n                    "label": "overview",\n                    "x_pos": 318,\n                    "y_pos": 312,\n                    "description": "Notebook file"\n                }\n            },\n            "inputs": [{\n                "id": "inPort",\n                "app_data": {\n                    "ui_data": {\n                        "label": ""\n                    }\n                },\n                "links": [{\n                    "node_id_ref": "db9f3f5b-b2e3-4824-aadd-c1c6bf652534",\n                    "port_id_ref": "outPort"\n                }, {\n                    "node_id_ref": "f6584209-6f22-434f-9820-41327b6c749d",\n                    "port_id_ref": "outPort"\n                }]\n            }],\n            "outputs": [{\n                "id": "outPort",\n                "app_data": {\n                    "ui_data": {\n                        "label": ""\n                    }\n                }\n            }]\n        }],\n        "app_data": {\n            "ui_data": {\n                "comments": []\n            },\n            "title": "pipeline-title",\n            "runtime": "kfp",\n            "runtime-config": "kfp-yukked1",\n                        "version": 1\n        },\n        "runtime_ref": ""\n    }],\n    "schemas": []\n}\n')),Object(o.b)("h2",null,"Pipeline Processor Customization"),Object(o.b)("p",null,"Elyra implements an extensible ",Object(o.b)("strong",{parentName:"p"},"pipeline processor engine"),", which enables the addition of new pipeline processors utilizing\na service discovery mechanism.  The pipeline processor class hierarchy is depicted here:\n",Object(o.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"720px"}}),"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAhOAAAITgGMMQDsAAABlUlEQVQoz41RS0sDMRDuv/TiUUFQe9CTIPbmRRT14FurUBQUBKkeRGjV4kWLtqtS1wda3WYfSXfb7G7pJpvEbFGqVsSPYZiZfMM3mYmJ7+CcGxK6hqBhGUB6aOnQ1DVNo5T+IMdEB2R/BTZedP/VjEwGMmWcdzLbzfJRMrjgNORjqzfxmUJi7TYKpi9HlxRKw4jCWYv4pzL2SN0jUvDNaiCPI5cRJv5S9hq0bHhyTrWMnyreY8V1XBKSwNefmwg4QGtWdQLLtA6/NHPOWps4K5gDU/nEijKyUEysXvdNnGeukHCBsdiLkv1oYxCux63ZLvtwPpqb0e/KgQBYGL54MgOAmYydQMiPBgFt+l6AHeq70hglbWVSgzif9kun1cKxoxzXzvfc52unkKkrWfMy6ygnuHiE1QtsAl1VKvc3QFWshyJ+vWMhizW0EkoOVlPD1dSQ9HCu28ltwt1xOzVstypoucdOT5rFnHqwVs5ugdwOON22L/YpCX7Z9v8RLUywUDD2aWF0zHYl/KjIA3LGWcuiNDrdOx4NXK5fMkhOAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pipeline Processor Class Hierachy",title:"Pipeline Processor Class Hierachy",src:"/elyra-ai-site/static/8c4b746099461e9dcbd0299d6777f483/b85f6/pipeline-processor-class-hierarchy.png",srcSet:["/elyra-ai-site/static/8c4b746099461e9dcbd0299d6777f483/7fc1e/pipeline-processor-class-hierarchy.png 288w","/elyra-ai-site/static/8c4b746099461e9dcbd0299d6777f483/a5df1/pipeline-processor-class-hierarchy.png 576w","/elyra-ai-site/static/8c4b746099461e9dcbd0299d6777f483/b85f6/pipeline-processor-class-hierarchy.png 720w"],sizes:"(max-width: 720px) 100vw, 720px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nThis section outlines what is needed to introduce your own runtime for integration with Elyra.  In essence, two criteria must be fulfilled to introduce a new runtime: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A schema describing the necessary runtime metadata"),Object(o.b)("li",{parentName:"ol"},"A pipeline processor implementation appropriately associated to the runtime")),Object(o.b)("h3",null,"Custom Runtime Schema"),Object(o.b)("p",null,"The first requirement for introducing a new runtime for use in Elyra is to define the necessary metadata corresponding to the runtime.  This is accomplished via a JSON schema file describing the necessary metadata used to integrate with the targeted runtime platform."),Object(o.b)("p",null,"This file must reside in the ",Object(o.b)("inlineCode",{parentName:"p"},"elyra/metadata/schemas")," directory in which Elyra has been installed.  (This location will change to better accommodate custom runtimes in the future.)"),Object(o.b)("p",null,"The schema name, represented by the value of the top-level ",Object(o.b)("inlineCode",{parentName:"p"},"name")," property or, if absent, the file’s basename, is what the pipeline engine uses to locate the appropriate pipeline processor implementation.  This value is also set into the pipeline definition’s ",Object(o.b)("inlineCode",{parentName:"p"},"runtime")," property in Elyra’s UI, thereby tying the pipeline to the appropriate processor."),Object(o.b)("p",null,"The schema should minimally include property definitions for the Cloud Object Storage (cos) properties found in the built-in schema definitions for ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/elyra-ai/elyra/blob/62e1964244ec8ada3e63c9c6d39befd7c046df08/elyra/metadata/schemas/kfp.json#L83-L129"}),"Kubeflow Pipelines")," and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/elyra-ai/elyra/blob/62e1964244ec8ada3e63c9c6d39befd7c046df08/elyra/metadata/schemas/airflow.json#L93-L139"}),"Apache Airflow"),"."),Object(o.b)("h3",null,"Custom Runtime Pipeline Processor Implementation"),Object(o.b)("p",null,"The pipeline processor implementation that corresponds to the targeted runtime platform must be a subclass of ",Object(o.b)("inlineCode",{parentName:"p"},"elyra.pipeline.processor.RuntimePipelineProcessor")," - which, itself, derives from ",Object(o.b)("inlineCode",{parentName:"p"},"elyra.pipeline.processor.PipelineProcessor"),"."),Object(o.b)("p",null,"To facilitate discovery by the pipeline engine, this implementation must use a value for its ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/elyra-ai/elyra/blob/62e1964244ec8ada3e63c9c6d39befd7c046df08/elyra/pipeline/processor.py#L156"}),Object(o.b)("inlineCode",{parentName:"a"},"type")," property")," identical to its schema name."),Object(o.b)("h4",null,"Processor Registration"),Object(o.b)("p",null,"The pipeline processor should be registered using ",Object(o.b)("strong",{parentName:"p"},"entry_points")," with a ",Object(o.b)("em",{parentName:"p"},"name")," that matches both the schema name corresponding to the new runtime and the pipeline processor’s ",Object(o.b)("inlineCode",{parentName:"p"},"type")," property value.  Although this is not technically required, we would like to possibly utilize this during discovery in the future (and is true relative to the built-in processors)."),Object(o.b)("p",null,"Entrypoint definitions are typically found in the package’s ",Object(o.b)("strong",{parentName:"p"},"setup.py")," or ",Object(o.b)("strong",{parentName:"p"},"setup.cfg")," files similar to the following example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"    entry_points = {\n        'elyra.pipeline.processors': [\n            'my_runtime = acme.my_runtime:MyRuntimePipelineProcessor'\n        ]\n    },\n")),Object(o.b)("p",null,"In this example, and corresponding to the criteria above, pipeline processor ",Object(o.b)("inlineCode",{parentName:"p"},"acme.my_runtime.MyRuntimePipelineProcessor")," will:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"derive from ",Object(o.b)("inlineCode",{parentName:"li"},"elyra.pipeline.processor.RuntimePipelineProcessor")),Object(o.b)("li",{parentName:"ul"},"use a value of ",Object(o.b)("inlineCode",{parentName:"li"},"my_runtime")," for its ",Object(o.b)("inlineCode",{parentName:"li"},"type")," property value"),Object(o.b)("li",{parentName:"ul"},"place a ",Object(o.b)("inlineCode",{parentName:"li"},"my_runtime.json")," schema file into Elyra’s installation’s ",Object(o.b)("inlineCode",{parentName:"li"},"metadata/schemas")," directory")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-dev-guide-pipelines-mdx-d7cb396644a299fd5583.js.map