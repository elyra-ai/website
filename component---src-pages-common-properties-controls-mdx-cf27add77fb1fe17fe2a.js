(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("NmYn"),o=a.n(i),r=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),u=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,l=e.tabs,i=void 0===l?[]:l;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,i=l.baseUrl,o=l.subDirectory,c=i+"/edit/"+l.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),g=a("dI71"),N=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===l,c=new RegExp(l+"/?(#.*)?$"),b=n.replace(c,a);return Object(m.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(m.b)(r.Link,{className:N.link,to:""+b},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:N.list},i))))))},t}(l.a.Component),y=a("MjG9"),w=a("CzIb"),C=a("Asxa"),v=a("OIbQ"),T=a.n(v),A=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(C.c,{className:T.a.row},Object(m.b)(C.a,null,Object(m.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,p=t.titleType,u=s.tabs,j=s.title,g=s.theme,N=s.description,C=s.keywords,v=s.date,T=Object(w.a)().interiorTheme,k=Object(r.useStaticQuery)("2456312558").site.pathPrefix,P=k?n.pathname.replace(k,""):n.pathname,I=u?P.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",_=g||T;return Object(m.b)(b.a,{tabs:u,homepage:!1,theme:_,pageTitle:j,pageDescription:N,pageKeywords:C,titleType:p},Object(m.b)(h,{title:l?Object(m.b)(l,null):j,label:"label",tabs:u,theme:_}),u&&Object(m.b)(x,{title:j,slug:P,tabs:u,currentTab:I}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:d}),Object(m.b)(A,{date:v})),Object(m.b)(f.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:I}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},rT3B:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return h}));var n=a("wx14"),l=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),r=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=c("PageDescription"),s=c("AnchorLinks"),d=c("AnchorLink"),p=c("Title"),u={_frontmatter:r},m=o.a;function h(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"PageDescription"},Object(i.b)("p",null,"The editor determines the most appropriate control and panel type for each parameter based on the context (parameter type, role, group type, etc.). Although an author can specify a desired control for a given parameter via its uihints, this should be used sparingly and carefully - specifying an inappropriate control for a parameter will lead to undefined behavior.")),Object(i.b)("p",null,"A visual documentation containing examples of the following group/panels and control types are available at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wdp-common-canvas-dev.stage1.mybluemix.net/#/properties"}),"https://wdp-common-canvas-dev.stage1.mybluemix.net/#/properties"),"."),Object(i.b)(s,{mdxType:"AnchorLinks"},Object(i.b)(d,{mdxType:"AnchorLink"},"Group/panel controls"),Object(i.b)(d,{mdxType:"AnchorLink"},"Parameter controls")),Object(i.b)("h2",null,"Group/panel controls"),Object(i.b)("p",null,"Controls are grouped and arranged on panels and sub-panels within the “group_info” section of operator uihints. Some panels appear as tab controls, others are for managing shared dataset metadata, while still others contain nested sub-panels."),Object(i.b)(p,{mdxType:"Title"},"Group types"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"controls")," A general panel type containing parameter controls."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tabs")," A tabbed control, each tab containing sub-panels and controls."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"subTabs")," A vertical sub-tabbed control, each tab containing sub-panels and controls."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"panels")," A panel type that contains sub-panels."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"panelSelector")," A panel containing sub-panels that are shown or hidden based upon a controlling radio selection."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"columnSelection")," A panel type containing field-selection controls that share a common set of fields."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"customPanel")," A custom panel for displaying user defined control. Found ",Object(i.b)("a",{href:"custom-components"},"here")," ."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"summaryPanel")," A panel used in the flyout editor that will provide a link to open a wide flyout that can contain panels and parameter."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"actionPanel")," A panel used for containing action controls."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"textPanel")," A panel used to display static label and/or description."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"twistyPanel")," A panel used to display a panel title that expands to the panel content when clicked."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"columnPanel")," A panel used to display children side by side.")),Object(i.b)("h2",null,"Parameter controls"),Object(i.b)("p",null,"The following controls are supported in the Common Properties editor. Control types are intended for use with particular parameter types:"),Object(i.b)(p,{mdxType:"Title"},"Control types"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"readonly")," A read only text field. Used for fields users shouldn’t edit."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hidden")," A control that has no UI to display."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"textfield")," A single line editable text field."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"passwordfield")," A masked single line text field."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"textarea")," A multi-line text area."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"list")," A single column table for editing a list of values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"expression")," An expression editing field that provides language specific syntax highlighting and text auto complete. An expression builder addon is available with the expression control. You must provide the ",Object(i.b)("inlineCode",{parentName:"li"},"expressionInfo")," field for the ",Object(i.b)("inlineCode",{parentName:"li"},"propertiesInfo")," config. Found ",Object(i.b)("a",{href:"properties-documentation"},"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"code")," An code editing field that provides language specific syntax highlighting and text auto complete."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"numberfield")," A numeric text field. Number fields can also optionally display a random number generator beside the control label. See the uihints schema for details."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"spinner")," A standard spinner control to increment/decrement the number value."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"checkbox")," A standard checkbox control."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"radioset")," A radio set where a parameter value is selected from a small range of options. See the Conditions wiki page for special radio button disabling options."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"checkboxset")," A checkbox set for list type parameters with enumerated options where the count is less than 5."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"oneofselect")," A standard dropdown list control."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"multiselect")," A standard dropdown list control that allows for multiple selection."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"someofselect")," A multi-selection control for enumerated list parameters where the count is greater than 4."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"selectcolumn")," A droplist control that selects from available column names."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"selectcolumns")," A multi-select control for column selections."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"toggletext")," A two-state control with optional icons that can exist on its own or within table cells."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"structuretable")," Table control for editing lists or maps of complex types that have field names in the first column."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"structurelisteditor")," For lists or maps of complex types that are not field-oriented parameters."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"structureeditor")," Allows one to define a structure and use it directly on a panel. Each structure member is surfaced as an individual control. Supports a layout setting that allows one to position structureeditor controls in a grid (see below)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"readonlyTable")," A read only table. Used for tables to display fields that users shouldn’t edit."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"custom")," A custom control for displaying a user defined control. Found ",Object(i.b)("a",{href:"custom-components"},"here")," .")),Object(i.b)(p,{mdxType:"Title"},"A Note on field name storage"),Object(i.b)("p",null,"When a given node can accept more than a single datarecord-metadata object as input, it becomes necessary to store the schema name (a.k.a. ‘link_name’) along with each field name that is stored in parameter sets. In those cases, instead of using strings to store field names, they are represented in parameter sets as compound objects containing both ‘link_ref’ and ‘field_name’ elements:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'"current_parameters": {  \n    "field": { "link_ref": "Schema-1", "field_name": "Age" },\n    ...\n\n')),Object(i.b)("p",null,"In order to indicate that a given node can potentially accept multiple input data links and would thus require compound field name storage, all parameter definitions within the node that contain ",Object(i.b)("inlineCode",{parentName:"p"},'"role": "column"'),", whether located at the top level or within complex types, should declare their data types as “object” instead of “string”:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'"parameters": [\n  {\n    "id": "fields",\n    "type": "array[object]",\n    "role": "column",\n    "required": true\n  },\n  ...\n\n')),Object(i.b)(p,{mdxType:"Title"},"edit_style"),Object(i.b)("p",null,"When editing complex type values in tables one can either edit cell values inline or in a sub panel:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"subpanel")," A small sub-dialog is launched to edit cell values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inline")," Controls appear inline within table cells for editing values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"on_panel")," Control appears below the table when the row is selected.")),Object(i.b)(p,{mdxType:"Title"},"Miscellaneous"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"moveable_rows")," boolean - A value that appears in “complex_type_definition” sections. If set to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," allows rows in the table to be moved up and down for reordering."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"row_selection")," enum ","[“single”, “multiple”]"," - Determines how many rows can be selected in a table at one time. Defaults to multiple."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sortable")," boolean - Both sortable and filterable apply to table columns. When set within the “key_definition” or the “parameters” sections of a structure definition, those columns are sortable and/or can be filtered upon."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filterable")," boolean (see sortable above)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"language")," enum ","[“CLEM”, “text/x-hive”]"," - The language for the expression control syntax highlight and text auto complete feature. If not specified, the expression control does not have syntax highlighting or text auto complete."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"layout")," A two-dimensional string array value that appears in “complex_type_definition” sections and allows one to layout structureeditor controls in a two dimensional grid.")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-common-properties-controls-mdx-cf27add77fb1fe17fe2a.js.map