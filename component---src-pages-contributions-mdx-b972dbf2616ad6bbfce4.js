(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),s=a.n(r),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),u=a.n(m),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(d.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,s=o.subDirectory,i=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),y=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===o,i=new RegExp(o+"/?(#.*)?$"),c=n.replace(i,a);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(d.b)(l.Link,{className:N.link,to:""+c},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:N.list},r))))))},t}(o.a.Component),w=a("MjG9"),x=a("CzIb"),v=a("Asxa"),k=a("OIbQ"),T=a.n(k),C=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(v.c,{className:T.a.row},Object(d.b)(v.a,null,Object(d.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,p=t.relativePagePath,m=t.titleType,u=b.tabs,j=b.title,y=b.theme,N=b.description,v=b.keywords,k=b.date,T=Object(x.a)().interiorTheme,S=Object(l.useStaticQuery)("2456312558").site.pathPrefix,P=S?n.pathname.replace(S,""):n.pathname,L=u?P.split("/").filter(Boolean).slice(-1)[0]||s()(u[0],{lower:!0}):"",I=y||T;return Object(d.b)(c.a,{tabs:u,homepage:!1,theme:I,pageTitle:j,pageDescription:N,pageKeywords:v,titleType:m},Object(d.b)(h,{title:o?Object(d.b)(o,null):j,label:"label",tabs:u,theme:I}),u&&Object(d.b)(f,{title:j,slug:P,tabs:u,currentTab:L}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:p}),Object(d.b)(C,{date:k})),Object(d.b)(g.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:L}),Object(d.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},zeqw:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),l=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=i("PageDescription"),b=i("AnchorLinks"),p=i("AnchorLink"),m={_frontmatter:l},u=s.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"Use this guide to contribute to the theme. We’ll show you how to get the\ndevelopment environment set up as quickly as possible so you can start\ncontributing.")),Object(r.b)(b,{mdxType:"AnchorLinks"},Object(r.b)(p,{mdxType:"AnchorLink"},"Project setup"),Object(r.b)(p,{mdxType:"AnchorLink"},"Development"),Object(r.b)(p,{mdxType:"AnchorLink"},"Work in a branch"),Object(r.b)(p,{mdxType:"AnchorLink"},"Sass and CSS Modules"),Object(r.b)(p,{mdxType:"AnchorLink"},"VS Code"),Object(r.b)(p,{mdxType:"AnchorLink"},"Test pages"),Object(r.b)(p,{mdxType:"AnchorLink"},"Publishing")),Object(r.b)("h2",null,"Project setup"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon"}),"gatsby-theme-carbon"),"\nand click the ",Object(r.b)("inlineCode",{parentName:"p"},"Fork")," button in the top-right corner.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After it’s finished, click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Clone or Download")," button and copy the\ncontents.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In your terminal, clone the repo into your directory of choice"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git clone [PASTE_URL_HERE]\ncd gatsby-theme-carbon\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"When you clone your forked repo the ",Object(r.b)("inlineCode",{parentName:"li"},"origin")," is set to your fork by default.\nYou’ll want to add a remote that points to the upstream repo.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git remote add upstream git@github.com:carbon-design-system/gatsby-theme-carbon.git\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"In your terminal, verify that the remotes have been set")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git remote -v\n")),Object(r.b)("h2",null,"Development"),Object(r.b)("p",null,"We use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://yarnpkg.com/lang/en/docs/install/"}),"yarn")," and yarn workspaces to\ndevelop the Carbon Gatsby theme. This allows us to have a development\nenvironment that’s closely linked to the theme with minimal setup. Run\n",Object(r.b)("inlineCode",{parentName:"p"},"yarn install")," to install all of the projects dependencies."),Object(r.b)("p",null,"This project has two packages: the actual theme package (",Object(r.b)("inlineCode",{parentName:"p"},"gatsby-theme-carbon"),")\nand the ",Object(r.b)("inlineCode",{parentName:"p"},"example")," package. The example package emulates a project which uses the\ntheme. Its only dependencies are Gatsby, React, and the adjacent theme package.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"example")," package also serves as the theme’s documentation and\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gatsby-theme-carbon.now.sh"}),"website"),"; it’s deployed on every merge to\nmain."),Object(r.b)("p",null,"New theme development will happen in the theme package while documentation and\ntesting of that change will occur through changes in the example directory."),Object(r.b)("h3",null,"Development scripts"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn dev")," – start the development environment"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn dev:clean")," – clear cache and restart dev"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn format")," – format your code with prettier"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn lint")," - check for errors in your javascript"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn test:prefix")," – build and serve with a path prefix")),Object(r.b)("h2",null,"Work in a branch"),Object(r.b)("p",null,"You should always start a new project by pulling upstream changes into main and\nthen creating a new branch. This workflow ensures you don’t accidentally commit\nanything to your main branch and get stuck when trying to open a pull request."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout main\ngit pull upstream main\ngit checkout -b my-branch-name\n")),Object(r.b)("h3",null,"Commit messages"),Object(r.b)("p",null,"For commit messages we use\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153#allowed-type"}),"Angular commit conventions"),"\nto dictate whether a commit is for a feature, fix, docs, etc. You need to prefix\nyour commits with one of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"feat (feature)"),Object(r.b)("li",{parentName:"ul"},"fix (bug fix)"),Object(r.b)("li",{parentName:"ul"},"docs (documentation)"),Object(r.b)("li",{parentName:"ul"},"style (formatting, missing semi colons, …)"),Object(r.b)("li",{parentName:"ul"},"refactor"),Object(r.b)("li",{parentName:"ul"},"test (when adding missing tests)"),Object(r.b)("li",{parentName:"ul"},"chore (maintain)")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'git commit -m "chore: this is a test commit message"\n')),Object(r.b)("h3",null,"Opening a Pull request"),Object(r.b)("p",null,"When you’re ready to open a pull request, push to your origin remote."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git push origin my-branch-name\n")),Object(r.b)("p",null,"You’ll get a message in your terminal with a URL to open up a pull request in\nthe upstream repository. Navigate to that URL and be sure to give a detailed\nsummary of your pull request in the title and body section of the form."),Object(r.b)("h2",null,"Sass and CSS Modules"),Object(r.b)("p",null,"For internal theme components we use\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://sass-lang.com/documentation/syntax"}),"Sass")," and\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules#css-modules"}),"CSS Modules"),". This\nallows us to take advantage of the Carbon Design System resources while not\nworrying about className collisions. By default, each ",Object(r.b)("inlineCode",{parentName:"p"},".scss")," file will be\nsupplied with all of the Carbon Sass\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/blob/main/packages/components/src/globals/scss/_vars.scss"}),"variables"),":\ncolor, spacing, theme, and motion, as well as type and layout mixins, are\nimported automatically."),Object(r.b)("p",null,"You should colocate your stylesheet with the component(s) that import it. If the\ncomponent is ",Object(r.b)("inlineCode",{parentName:"p"},"TreeView")," then the stylesheet should be ",Object(r.b)("inlineCode",{parentName:"p"},"TreeView.module.scss"),".\nAll contained within the ",Object(r.b)("inlineCode",{parentName:"p"},"TreeView")," directory."),Object(r.b)("h3",null,"CSS Modules"),Object(r.b)("p",null,"You don’t need to prefix your classes as CSS Modules will generate unique class\nnames for you. Import the class from the ",Object(r.b)("inlineCode",{parentName:"p"},".scss")," file."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:"path=TreeView.module.scss",path:"TreeView.module.scss"}),".treeView {\n  color: $text-01;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"}),"import { treeView } from './style.css';\n\nconst TreeView = (props) => <div className={treeView} />;\n")),Object(r.b)("p",null,"For conditionally applying class names, use the ",Object(r.b)("inlineCode",{parentName:"p"},"classname")," library. Note how\nwe’re using a\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://tylermcginnis.com/computed-property-names/"}),"computed property name")," for\nthe property being based to ",Object(r.b)("inlineCode",{parentName:"p"},"cx"),". That’s because the className isn’t literally\n",Object(r.b)("inlineCode",{parentName:"p"},'"long"')," it’s a value generated by CSS Modules and placed in the ",Object(r.b)("inlineCode",{parentName:"p"},"long"),"\nvariable."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"}),"import cx from 'classname';\nimport { treeView, long } from './style.css';\n\nconst TreeView = (props) => {\n  const className = cx(treeView, {\n    [long]: props.long,\n  });\n  const TreeView = (props) => <div className={className} />;\n};\n")),Object(r.b)("p",null,"If you need to target a global class not processed by CSS Modules, you can do so\nwith the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules#exceptions"}),"global selector"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),":global(.bx--grid) .codeBlock {\n  @include carbon--type-style('code-01');\n}\n")),Object(r.b)("h2",null,"VS Code"),Object(r.b)("p",null,"To get linting error feedback while writing javascript and SCSS in VS Code,\ninstall the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint"}),"stylelint"),"\nand\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}),"ESlint"),"\nextensions. We use ESLint’s Prettier rules to format and lint all of our\nJavaScript in one pass. To get your code to format properly on save, add the\nfollowing to a ",Object(r.b)("inlineCode",{parentName:"p"},".vscode/settings.json")," in the root of your project"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"path=.vscode/settings.json",path:".vscode/settings.json"}),'{\n  "editor.formatOnSave": true,\n  "[javascript]": {\n    "editor.formatOnSave": false\n  },\n  "[javascriptreact]": {\n    "editor.formatOnSave": false\n  },\n  "eslint.autoFixOnSave": true,\n  "prettier.disableLanguages": ["javascript", "javascriptreact"]\n}\n')),Object(r.b)("p",null,"To lint the entire project and get errors in your ",Object(r.b)("inlineCode",{parentName:"p"},"Problems")," tray, you can add\nthe following to a ",Object(r.b)("inlineCode",{parentName:"p"},".vscode/tasks.json")," file in the root of your project. You\ncan run these tasks with ",Object(r.b)("inlineCode",{parentName:"p"},"cmd+shift+d")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"path=.vscode/tasks.json",path:".vscode/tasks.json"}),'{\n  "version": "2.0.0",\n  "tasks": [\n    {\n      "type": "npm",\n      "script": "lint:js",\n      "problemMatcher": "$eslint-stylish"\n    },\n    {\n      "type": "npm",\n      "script": "lint:scss",\n      "problemMatcher": {\n        "owner": "stylelint",\n        "fileLocation": ["relative", "${workspaceFolder}"],\n        "pattern": [\n          {\n            "regexp": "^([^\\\\s].*)$",\n            "file": 1\n          },\n          {\n            "regexp": "^\\\\s+(\\\\d+):(\\\\d+)\\\\s+(✖|warning)\\\\s+(.*)\\\\s\\\\s+(.*)$",\n            "line": 1,\n            "column": 2,\n            "severity": 3,\n            "message": 4,\n            "code": 5,\n            "loop": true\n          }\n        ]\n      }\n    }\n  ]\n}\n')),Object(r.b)("h2",null,"Test pages"),Object(r.b)("p",null,"If you want to add examples of what you are working on or see changes you’ve\nmade, you can add an MDX file to ",Object(r.b)("inlineCode",{parentName:"p"},"packages/src/pages/test")," that will be visible\nat ",Object(r.b)("inlineCode",{parentName:"p"},"(your-server-name)/test/(added-file)")," during development. If you do add a\npage to the ",Object(r.b)("inlineCode",{parentName:"p"},"/test")," directory, update the below list with the file you added and\nits purpose to be included with your pull request."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/test/spacing-audit"}),Object(r.b)("inlineCode",{parentName:"a"},"Spacing audit")),": use this page to test spacing around\ncomponents when combined in common patterns.")),Object(r.b)("h2",null,"Publishing"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Pull the latest from the main branch, usually by running\n",Object(r.b)("inlineCode",{parentName:"li"},"git pull upstream main")," on your local machine."),Object(r.b)("li",{parentName:"ol"},"From the root of the package run ",Object(r.b)("inlineCode",{parentName:"li"},"yarn release"),"."),Object(r.b)("li",{parentName:"ol"},"Follow the prompts accordingly."),Object(r.b)("li",{parentName:"ol"},"In the project’s\n",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon/releases"}),"release tab"),",\nedit the new release to include a summary of new changes.")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-contributions-mdx-b972dbf2616ad6bbfce4.js.map