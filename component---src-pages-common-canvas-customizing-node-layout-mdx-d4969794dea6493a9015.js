(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"013z":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),i=n("NmYn"),r=n.n(i),l=n("Wbzz"),s=n("Xrax"),d=n("k4MR"),c=n("TSYQ"),p=n.n(c),b=n("QH2O"),h=n.n(b),u=n("qKvR"),m=function(e){var t,n=e.title,o=e.theme,a=e.tabs,i=void 0===a?[]:a;return Object(u.b)("div",{className:p()(h.a.pageHeader,(t={},t[h.a.withTabs]=i.length,t[h.a.darkMode]="dark"===o,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:h.a.text},n)))))},f=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,o=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,a=n||o,i=a.baseUrl,r=a.subDirectory,s=i+"/edit/"+a.branch+r+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},j=n("FCXl"),w=n("dI71"),y=n("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,o=e.slug,a=o.split("/").filter(Boolean).slice(-1)[0],i=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),i=n===a,s=new RegExp(a+"/?(#.*)?$"),d=o.replace(s,n);return Object(u.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(u.b)(l.Link,{className:y.link,to:""+d},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:y.list},i))))))},t}(a.a.Component),v=n("MjG9"),P=n("CzIb"),x=n("Asxa"),T=n("OIbQ"),N=n.n(T),L=function(e){var t=e.date,n=new Date(t);return t?Object(u.b)(x.c,{className:N.a.row},Object(u.b)(x.a,null,Object(u.b)("div",{className:N.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,a=e.Title,i=t.frontmatter,c=void 0===i?{}:i,p=t.relativePagePath,b=t.titleType,h=c.tabs,f=c.title,w=c.theme,y=c.description,x=c.keywords,T=c.date,N=Object(P.a)().interiorTheme,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=k?o.pathname.replace(k,""):o.pathname,D=h?C.split("/").filter(Boolean).slice(-1)[0]||r()(h[0],{lower:!0}):"",z=w||N;return Object(u.b)(d.a,{tabs:h,homepage:!1,theme:z,pageTitle:f,pageDescription:y,pageKeywords:x,titleType:b},Object(u.b)(m,{title:a?Object(u.b)(a,null):f,label:"label",tabs:h,theme:z}),h&&Object(u.b)(O,{title:f,slug:C,tabs:h,currentTab:D}),Object(u.b)(v.a,{padded:!0},n,Object(u.b)(g,{relativePagePath:p}),Object(u.b)(L,{date:T})),Object(u.b)(j.a,{pageContext:t,location:o,slug:C,tabs:h,currentTab:D}),Object(u.b)(s.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},czPv:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n("wx14"),a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("013z"),l=(n("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},d=s("PageDescription"),c=s("AnchorLinks"),p=s("AnchorLink"),b={_frontmatter:l},h=r.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(h,Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(d,{mdxType:"PageDescription"},Object(i.b)("p",null,"Node layout properties define how all the elements of a node are displayed such as: the position and size of the main image; the position of the main label; even the shape of the node itself!")),Object(i.b)(c,{mdxType:"AnchorLinks"},Object(i.b)(p,{mdxType:"AnchorLink"},"Properties override"),Object(i.b)(p,{mdxType:"AnchorLink"},"Default properties from Common canvas"),Object(i.b)(p,{mdxType:"AnchorLink"},"Default values"),Object(i.b)(p,{mdxType:"AnchorLink"},"Default properties override"),Object(i.b)(p,{mdxType:"AnchorLink"},"Customizing individual nodes")),Object(i.b)("h2",null,"Properties override"),Object(i.b)("p",null,"You can change just about anything to do with the way the nodes appear in your canvas. So you can get a very different looking canvas to suit your needs."),Object(i.b)("h2",null,"Default properties from Common canvas"),Object(i.b)("p",null,"There are two possible sets of node layout properties provided by common-canvas. The set of properties that are used by common-canvas are controlled by the ",Object(i.b)("inlineCode",{parentName:"p"},"enableNodeFormatType")," configuration property which can be set to either “Horizontal” or “Vertical”."),Object(i.b)("h2",null,"Default values"),Object(i.b)("p",null,"The possible node layout properties (that are currently supported) are shown below with the values they have when ",Object(i.b)("inlineCode",{parentName:"p"},'enableNodeFormatType = "Horizontal"'),". You can see the values for the other two sets of properties by looking at the ",Object(i.b)("a",{href:"https://github.com/elyra-ai/canvas/blob/master/canvas_modules/common-canvas/src/object-model/layout-dimensions.js"},"layout-dimensions.js program"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// Default node sizes. The height might be overridden for nodes with more ports\n// than will fit in the default size.\ndefaultNodeWidth: 160,\ndefaultNodeHeight: 40,\n\n// Default node shape. Can be "rectangle" or "port-arcs"\nnodeShape: "port-arcs",\n\n// SVG path strings to define the shape of your node and its\n// selection highlighting. If set to null the paths will be set by default\n// based on the nodeShape setting.\nbodyPath: null,\nselectionPath: null,\n\n// Display image\nimageDisplay: true,\n\n// Image dimensions\nimageWidth: 26,\nimageHeight: 26,\n\n// Image position\nimagePosition: "topLeft",\nimagePosX: 6,\nimagePosY: 7,\n\n// Label dimensions\nlabelWidth: 112,\nlabelHeight: 19,\n\n// Label position\nlabelPosition: "topLeft",\nlabelPosX: 36,\nlabelPosY: 12,\n\n// Label appearance\nlabelEditable: false,\nlabelAlign: "left", // can be "left" or "center"\nlabelSingleLine: true, // false allow multi-line labels\nlabelOutline: false,\nlabelMaxCharacters: null, // null allows unlimited characters\nlabelAllowReturnKey: false, // true allows line feed to be inserted into label\n\n// An array of decorations to be applied to the node. For details see:\n// https://github.com/elyra-ai/canvas/wiki/2.4.2-Decoration-Specification\ndecorations: [],\n\n// Positions and dimensions for 9 enumerated default decorator positions.\n// decoratorWidth and decoratorHeight are the dimensions of the outline\n// rectangle and decoratorPadding is the padding for the image within the\n// outline rectangle.\ndecoratorTopY: 2,\ndecoratorMiddleY: -8,\ndecoratorBottomY: -18,\n\ndecoratorLeftX: 2,\ndecoratorCenterX: -8,\ndecoratorRightX: -30,\n\n// Width, height and padding for image decorators\ndecoratorWidth: 16,\ndecoratorHeight: 16,\ndecoratorPadding: 2,\n\n// Width and height for label decorators\ndecoratorLabelWidth: 80,\ndecoratorLabelHeight: 15,\n\n// Display drop shadow under and round the nodes\ndropShadow: true,\n\n// The gap between a node and its selection highlight rectangle\nnodeHighlightGap: 1,\n\n// The size of the node sizing area that extends around the node, over\n// which the mouse pointer will change to the sizing arrows.\nnodeSizingArea: 10,\n\n// Error indicator dimensions\nerrorPosition: "topLeft",\nerrorXPos: 24,\nerrorYPos: 5,\nerrorWidth: 10.5,\nerrorHeight: 10.5,\n\n// When sizing a supernode this decides the size of the corner area for\n// diagonal sizing.\nnodeCornerResizeArea: 10,\n\n// What point to draw the data links from and to when enableLinkType is set\n// to "Straight". Possible values are "image_center" or "node_center".\ndrawNodeLinkLineFromTo: "node_center",\n\n// What point to draw the comment to node link line to. Possible values\n// are "image_center" or "node_center".\ndrawCommentLinkLineTo: "node_center",\n\n// This is the size of the horizontal line protruding from the\n// port on the source node when drawing an elbow or straight connection line.\nminInitialLine: 30,\n\n// For the elbow connection type with nodes with multiple output ports,\n// this is used to increment the minInitialLine so that connection lines\n// do not overlap each other when they turn up or down after the elbow.\nminInitialLineIncrement: 8,\n\n// This is the minimum size of the horizontal line entering the\n// target port on the target node when drawing an Elbow connection line.\nminFinalLine: 30,\n\n// Display input ports.\ninputPortDisplay: true,\n\n// Object for input port can be "circle" or "image".\ninputPortObject: "circle",\n\n// If input port object is "image" use this image.\ninputPortImage: "",\n\n// If input port dimensions for "image".\ninputPortWidth: 12,\ninputPortHeight: 12,\n\n// Position of left single input port. Multiple input ports will be\n// automatically positioned with the Y coordinate being overriden. These\n// values are an offset from the top left corner of the node outline.\n// Used when linkDirection is "LeftRight".\ninputPortLeftPosX: 0,\ninputPortLeftPosY: 20,\n\n// Position of top single input port. Multiple input ports will be\n// automatically positioned with the X coordinate being overriden. These\n// values are an offset from the top left corner of the node outline.\n// Used when linkDirection is "TopBottom".\ninputPortTopPosX: 80,\ninputPortTopPosY: 0,\n\n// Position of bottom single input port. Multiple input ports will be\n// automatically positioned with the X coordinate being overriden. These\n// values are an offset from the bottom left corner of the node outline.\n// Used when linkDirection is "BottomTop".\ninputPortBottomPosX: 80,\ninputPortBottomPosY: 0,\n\n// The \'guide\' is the object drawn at the mouse position as a new line\n// is being dragged outwards.\n// Object for input port guide can be "circle" or "image".\ninputPortGuideObject: "circle",\n\n// If input port guide object is "image" use this image.\ninputPortGuideImage: "",\n\n// Display output ports.\noutputPortDisplay: true,\n\n// Object for output port can be "circle" or "image".\noutputPortObject: "circle",\n\n// If output port object is "image" use this image.\noutputPortImage: "",\n\n// Output port dimensions for "image".\noutputPortWidth: 12,\noutputPortHeight: 12,\n\n// Position of right single input port. Multiple input ports will be\n// automatically positioned with the Y coordinate being overriden. These\n// values are an offset from the top right corner of the node outline.\n// Used when linkDirection is "LeftRight".\noutputPortRightPosX: 0,\noutputPortRightPosY: 20,\n\n// Position of top single input port. Multiple input ports will be\n// automatically positioned with the X coordinate being overriden. These\n// values are an offset from the top left corner of the node outline.\n// Used when linkDirection is "BottomTop".\noutputPortTopPosX: 80,\noutputPortTopPosY: 0,\n\n// Position of bottom single input port. Multiple input ports will be\n// automatically positioned with the X coordinate being overriden. These\n// values are an offset from the bottom left corner of the node outline.\n// Used when linkDirection is "TopBottom".\noutputPortBottomPosX: 80,\noutputPortBottomPosY: 0,\n\n// The \'guide\' is the object drawn at the mouse position as a new line\n// is being dragged outwards.\n// Object for output port guide can be "circle" or "image".\noutputPortGuideObject: "circle",\n\n// If output port guide object is "image" use this image.\noutputPortGuideImage: "",\n\n// Radius of the either the input or output ports when they are set to "circle"\nportRadius: 3,\n\n// Size of an offset above and below the set of port arcs.\nportArcOffset: 3,\n\n// Radius of an imaginary circle around the port. This controls the\n// spacing of ports and the size of port arcs when nodeShape is set to\n// port-arcs.\nportArcRadius: 6,\n\n// Spacing between the port arcs around the ports.\nportArcSpacing: 3,\n\n// Display of vertical ellipsis to show context menu\nellipsisDisplay: true,\nellipsisPosition: "topLeft",\nellipsisWidth: 10,\nellipsisHeight: 22,\nellipsisPosX: 145,\nellipsisPosY: 9,\nellipsisHoverAreaPadding: 2\n\n')),Object(i.b)("h4",null,"Notes"),Object(i.b)("p",null,"All coordinate positions for elements are based on one of nine anchor points around the node:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'       "topLeft", "topCenter", "topRight",  \n       "middleLeft", "middleCenter", "middleRight",   \n       "bottomLeft", "bottomCenter", "bottomRight".   \n\n')),Object(i.b)("p",null,"The PosX and PosY position for each element is an offset from the associated anchor point where PosX is the number of pixels ",Object(i.b)("strong",{parentName:"p"},"to the right of")," the anchor point and PosY is a number of pixels ",Object(i.b)("strong",{parentName:"p"},"down from")," the anchor point. Negative values can be provided to specify an offset ",Object(i.b)("strong",{parentName:"p"},"to the left and up from")," the anchor point. The default anchor point for all elements is ",Object(i.b)("inlineCode",{parentName:"p"},"topLeft"),". By the way, the top left corner of the node is also the point that the node will be positioned at based on its ",Object(i.b)("inlineCode",{parentName:"p"},"x_pos")," and ",Object(i.b)("inlineCode",{parentName:"p"},"y_pos")," fields in the pipelineFlow document."),Object(i.b)("p",null,"Elements like the node image and vertical ellipsis are positioned based on the top left corner of that element. Text is positioned based on the top left corner of its containing ",Object(i.b)("inlineCode",{parentName:"p"},"<div>"),"."),Object(i.b)("p",null,"The values for ",Object(i.b)("inlineCode",{parentName:"p"},"bodyPath")," and ",Object(i.b)("inlineCode",{parentName:"p"},"selectionPath")," must be ",Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths"},"SVG path strings")," which describe how to draw the node body shape and its selection highlight shape. For example, the following would draw a triangular node body and a triangular selection outline 5 pixels away from it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'    bodyPath: "     M  0 0 L  70 35  0 70 Z",\n    selectionPath: "M -5 -5 L 75 35 -5 75 Z",\n')),Object(i.b)("h2",null,"Default properties override"),Object(i.b)("p",null,"There are a couple of ways to do this depending on your needs. First, if you just want to change the look of all nodes on your canvas you can specify the ",Object(i.b)("inlineCode",{parentName:"p"},"enableNodeLayout")," configuration parameter in the ",Object(i.b)("a",{href:"config/canvas-config#canvas-config-object"},"main canvas configuration object"),". The properties from this object will replace any properties in the default set, which was chosen based on the settings of ",Object(i.b)("inlineCode",{parentName:"p"},"enableNodeFormatType"),". So you don’t need to provide all of the properties; just the ones you want to replace."),Object(i.b)("p",null,"Let’s say you want to go crazy and have your nodes be displayed as ellipses. You could provide the following settings in ",Object(i.b)("inlineCode",{parentName:"p"},"enableNodeLayout"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),' {\n    bodyPath: "     M  0 30 Q  0  0 60  0 Q 120  0 120 30 Q 120 60 60 60 Q  0 60  0 30 Z",\n    selectionPath: "M -5 30 Q -5 -5 60 -5 Q 125 -5 125 30 Q 125 65 60 65 Q -5 65 -5 30 Z",\n    defaultNodeWidth: 120,\n    defaultNodeHeight: 60,\n    imageWidth: 30,\n    imageHeight: 30,\n    imagePosX: 20,\n    imagePosY: 10,\n    labelEditable: true,\n    labelPosX: 60,\n    labelPosY: 37,\n    labelWidth: 90,\n    labelHeight: 17, // Should match the font size specified in css + padding\n    ellipsisDisplay: true,\n    ellipsisPosX: 100,\n    ellipsisPosY: 20,\n    haloDisplay: false,\n    portPosY: 30\n}\n')),Object(i.b)("h4",null,"Notes"),Object(i.b)("p",null,"In the test harness you can see some of these layout values in action by:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Opening the Common Canvas side panel (click the hamburger icon)"),Object(i.b)("li",{parentName:"ol"},"Select the ",Object(i.b)("inlineCode",{parentName:"li"},"Blue Ellipses")," example app. You should see all the nodes shown as blue ellipses. 3 Checkout some of the other sample apps to see how the default styling has been overridden.")),Object(i.b)("p",null,"If you experiment, you will see the nodes can be selected, moved and manipulated just like regular nodes. Even if you drag a node from the palette, it will appear with the overridden layout properties."),Object(i.b)("h2",null,"Customizing individual nodes"),Object(i.b)("p",null,"If you want each node to have a different layout based on some criteria you can use the second method for overriding the node layout properties. This employs the ",Object(i.b)("a",{href:"callbacks#layouthandler"},"layoutHandler callback method"),". When you specify this callback method to common canvas your layout handler method will be called for each node on the canvas, during initialization and occasionally at other times."),Object(i.b)("p",null,"The method should return a simple Javascript object that contains any node layout properties you want to override from the defaults and the ones specified in ",Object(i.b)("inlineCode",{parentName:"p"},"enableNodeLayout")," config field. This is an important point: there are three levels of properties provided where each overrides the previous set:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"First we take the full default set of node layout properties based on the value for ",Object(i.b)("inlineCode",{parentName:"li"},"enableNodeFormatType"),"."),Object(i.b)("li",{parentName:"ol"},"Then we override these with the properties from the ",Object(i.b)("inlineCode",{parentName:"li"},"enableNodeLayout")," field in the config object, if any are provided."),Object(i.b)("li",{parentName:"ol"},"Finally we override the combined set with any properties from the object returned from the layoutHandler method if one is specified.")),Object(i.b)("p",null,"The callback is provided with a parameter ",Object(i.b)("inlineCode",{parentName:"p"},"data")," which is the node object from the pipelineFlow so your code can examine the node object and return node layout properties as appropriate."),Object(i.b)("p",null,"Here is a simple example of a ",Object(i.b)("inlineCode",{parentName:"p"},"layoutHandler")," callback method which will override the width of the node based on the width of the main label for any node where the node’s ",Object(i.b)("inlineCode",{parentName:"p"},"op")," field is set to ",Object(i.b)("inlineCode",{parentName:"p"},"Sort"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'layoutHandler(data) {\n    let nodeFormat = {};\n    if (data.op === "Sort") {\n        const labLen = data.label ? data.label.length : 0;\n        const width = (labLen * 9) + 30; // Allow 9 pixels for each character and a bit extra for padding\n        nodeFormat = {\n            defaultNodeWidth: width // Override default width with calculated width\n        };\n    }\n    return nodeFormat;\n\n`layoutHandler(data) {\n    let nodeFormat = {};\n    if (data.op === "Sort") {\n        const labLen = data.label ? data.label.length : 0;\n        const width = (labLen * 9) + 30; // Allow 9 pixels for each character and a bit extra for padding\n        nodeFormat = {\n            defaultNodeWidth: width // Override default width with calculated width\n        };\n    }\n    return nodeFormat;\n')),Object(i.b)("p",null,"OK, it’s not a very complicated example but hopefully you get the message :)"),Object(i.b)("p",null,"You can see an example application that use the ",Object(i.b)("a",{href:"callbacks#layouthandler"},"layoutHandler callback method"),". In the test harness:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open the Common Canvas side panel (click the hamburger icon)"),Object(i.b)("li",{parentName:"ol"},"Select the ",Object(i.b)("inlineCode",{parentName:"li"},"Explain")," sample application")),Object(i.b)("p",null,"You will see the nodes have different shapes and colors based on their type. You can examine the ",Object(i.b)("a",{href:"https://github.com/elyra-ai/canvas/blob/master/canvas_modules/harness/src/client/components/custom-canvases/explain/explain-canvas.jsx"},"Explain sample app code")," to see how it works. This involves these three parts:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{href:"https://github.com/elyra-ai/canvas/blob/3e2a1be61047b6ea85fe13020a00ec5dc8a41405/canvas_modules/harness/src/client/components/custom-canvases/explain/explain-canvas.jsx#L15"},"This line")," sets the `enableConnectionType` which will set all nodeLayout properties to their defaults."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{href:"https://github.com/elyra-ai/canvas/blob/3e2a1be61047b6ea85fe13020a00ec5dc8a41405/canvas_modules/harness/src/client/components/custom-canvases/explain/explain-canvas.jsx#L17"},"This line")," will override the node layout defaults with ones specified for all nodes."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{href:"https://github.com/elyra-ai/canvas/blob/3e2a1be61047b6ea85fe13020a00ec5dc8a41405/canvas_modules/harness/src/client/components/custom-canvases/explain/explain-canvas.jsx#L39"},"The layout handler")," will override layout properties on a node by node basis.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-common-canvas-customizing-node-layout-mdx-d4969794dea6493a9015.js.map