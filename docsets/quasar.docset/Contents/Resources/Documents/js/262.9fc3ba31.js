(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[262],{7778:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("doc-page",{attrs:{title:"Tree",nav:e.nav}},[o("p",[e._v("Quasar Tree represents a highly configurable component that displays hierarchical data, such as a table of contents in a tree structure.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(t){return e.copyHeading("Installation")}}},[e._v("Installation")]),o("doc-installation",{attrs:{components:"QTree"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(t){return e.copyHeading("Usage")}}},[e._v("Usage")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Basic"},on:{click:function(t){return e.copyHeading("Basic")}}},[e._v("Basic")]),o("doc-example",{attrs:{title:"Basic",file:"QTree/Basic"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"No-connector-lines"},on:{click:function(t){return e.copyHeading("No-connector-lines")}}},[e._v("No connector lines")]),o("q-badge",{attrs:{label:"v1.5.10+"}}),o("doc-example",{attrs:{title:"No connectors",file:"QTree/NoConnectors"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Dark"},on:{click:function(t){return e.copyHeading("Dark")}}},[e._v("Dark")]),o("doc-example",{attrs:{title:"Dark",file:"QTree/Dark",dark:""}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Integrated-example"},on:{click:function(t){return e.copyHeading("Integrated-example")}}},[e._v("Integrated example")]),o("doc-example",{attrs:{title:"With QSplitter and QTabPanels",file:"QTree/Splitter"}}),o("p",[e._v("More info: "),o("doc-link",{attrs:{to:"/vue-components/splitter"}},[e._v("QSplitter")]),e._v(", "),o("doc-link",{attrs:{to:"/vue-components/tab-panels"}},[e._v("QTabPanels")]),e._v(".")],1),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Customize-content"},on:{click:function(t){return e.copyHeading("Customize-content")}}},[e._v("Customize content")]),o("p",[e._v("Notice (in the example below) the default header and body slot customization.")]),o("doc-example",{attrs:{title:"Default header and body slots",file:"QTree/SlotsDefault"}}),o("p",[e._v("Notice (in the example below) the custom header and body slots.")]),o("doc-example",{attrs:{title:"Customizing nodes",file:"QTree/SlotsCustomized"}}),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("Clicking or pressing "),o("code",{staticClass:"doc-token"},[e._v("SPACE")]),e._v(" or "),o("code",{staticClass:"doc-token"},[e._v("ENTER")]),e._v(" on the custom header selects the tree item (and the custom header is blurred).")]),o("p",[e._v("If you don’t want this to happen just wrap the content of the custom header in a "),o("code",{staticClass:"doc-token"},[e._v("<div @click.stop @keyup.13.32.stop>")]),e._v(".")])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Accordion%2C-filtering-and-selectable"},on:{click:function(t){return e.copyHeading("Accordion%2C-filtering-and-selectable")}}},[e._v("Accordion, filtering and selectable")]),o("p",[e._v("In the example below, sibling nodes get contracted when one gets expanded.")]),o("doc-example",{attrs:{title:"Accordion mode",file:"QTree/Accordion"}}),o("doc-example",{attrs:{title:"Filtering nodes",file:"QTree/FilterDefault"}}),o("doc-example",{attrs:{title:"Selectable nodes",file:"QTree/Selectable"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Lazy-loading"},on:{click:function(t){return e.copyHeading("Lazy-loading")}}},[e._v("Lazy loading")]),o("doc-example",{attrs:{title:"Lazy loading nodes",file:"QTree/LazyLoad"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Selection-vs-ticking%2C-expansion"},on:{click:function(t){return e.copyHeading("Selection-vs-ticking%2C-expansion")}}},[e._v("Selection vs ticking, expansion")]),o("ul",[o("li",[e._v("Selection (through QTree "),o("code",{staticClass:"doc-token"},[e._v("selected")]),e._v(" prop) refers to the currently selected node (gets highlighted with different background).")]),o("li",[e._v("Ticking (through QTree "),o("code",{staticClass:"doc-token"},[e._v("ticked")]),e._v(" prop) refers to the checkbox associated with each node.")]),o("li",[e._v("Expansion (through QTree "),o("code",{staticClass:"doc-token"},[e._v("expanded")]),e._v(" prop) refers to the nodes that are expanded.")])]),o("p",[e._v("All properties above require to be dynamically bound using "),o("code",{staticClass:"doc-token"},[e._v(".sync")]),e._v(" modifier in order for them to work correctly ("),o("code",{staticClass:"doc-token"},[e._v("v-bind:<prop_name>.sync")]),e._v(" or "),o("code",{staticClass:"doc-token"},[e._v(":<prop_name>.sync")]),e._v(").\n"),o("doc-example",{attrs:{title:"Syncing node properties",file:"QTree/Sync"}})],1),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Tick-strategy"},on:{click:function(t){return e.copyHeading("Tick-strategy")}}},[e._v("Tick strategy")]),o("p",[e._v("There are three ticking strategy: ‘leaf’, ‘leaf-filtered’, ‘strict’ with an additional (and default) ‘none’ which disables ticking.")]),o("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[e._v("Strategy")]),o("th",{staticClass:"text-left"},[e._v("Description")])])]),o("tbody",[o("tr",[o("td",[e._v("leaf")]),o("td",[e._v("Ticked nodes are only the leaves. Ticking a node influences the parent’s ticked state too (parent becomes partially ticked or ticked), as well as its children (all tickable children become ticked).")])]),o("tr",[o("td",[e._v("leaf-filtered")]),o("td",[e._v("Same concept as "),o("code",{staticClass:"doc-token"},[e._v("leaf")]),e._v(", only that this strategy applies only to filtered nodes (the nodes that remain visible after filtering).")])]),o("tr",[o("td",[e._v("strict")]),o("td",[e._v("Ticked nodes are independent of parent or children tick state.")])])])]),o("p",[e._v("You can apply a global tick strategy for a QTree and locally change the ticking strategy for a certain node by specifying the "),o("code",{staticClass:"doc-token"},[e._v("tickStrategy")]),e._v(" in the "),o("code",{staticClass:"doc-token"},[e._v("nodes")]),e._v(" model.")]),o("doc-example",{attrs:{title:"Tick strategy",file:"QTree/TickStrategy"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Custom-filter-method"},on:{click:function(t){return e.copyHeading("Custom-filter-method")}}},[e._v("Custom filter method")]),o("p",[e._v("You can customize the filtering method by specifying the "),o("code",{staticClass:"doc-token"},[e._v("filter-method")]),e._v(" prop. The method below filters by input if it also has ‘(*)’:")]),o("doc-example",{attrs:{title:"Custom filter",file:"QTree/FilterCustom"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QTree-API"},on:{click:function(t){return e.copyHeading("QTree-API")}}},[e._v("QTree API")]),o("doc-api",{attrs:{file:"QTree"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Nodes-model-structure"},on:{click:function(t){return e.copyHeading("Nodes-model-structure")}}},[e._v("Nodes model structure")]),o("p",[e._v("The following describes a node’s properties that are taken into account by QTree’s v-model.")]),o("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[e._v("Node Property")]),o("th",{staticClass:"text-left"},[e._v("Type")]),o("th",{staticClass:"text-left"},[e._v("Behavior when not present")]),o("th",{staticClass:"text-left"},[e._v("Description")])])]),o("tbody",[o("tr",[o("td",[e._v("<nodeKey>")]),o("td",[e._v("String, Number")]),o("td",[e._v("An error is generated")]),o("td",[e._v("Node’s key. The key is picked from the key specified in "),o("code",{staticClass:"doc-token"},[e._v("nodeKey")]),e._v(" property.")])]),o("tr",[o("td",[e._v("label")]),o("td",[e._v("String")]),o("td",[e._v("The item has no label")]),o("td",[e._v("Node’s label. When "),o("code",{staticClass:"doc-token"},[e._v("labelKey")]),e._v(" prop is set the label is picked from that key.")])]),o("tr",[o("td",[e._v("icon")]),o("td",[e._v("String")]),o("td",[e._v("The default icon is used")]),o("td",[e._v("Node’s icon.")])]),o("tr",[o("td",[e._v("iconColor")]),o("td",[e._v("String")]),o("td",[e._v("The inherited color is used")]),o("td",[e._v("Node’s icon color. One from Quasar Color Palette.")])]),o("tr",[o("td",[e._v("img")]),o("td",[e._v("String")]),o("td",[e._v("No image is displayed")]),o("td",[e._v("Node’s image. Use statics folder. Example: ‘statics/mountains.png’")])]),o("tr",[o("td",[e._v("avatar")]),o("td",[e._v("String")]),o("td",[e._v("No avatar is displayed")]),o("td",[e._v("Node’s avatar. Use statics folder. Example: ‘statics/boy-avatar.png’")])]),o("tr",[o("td",[e._v("children")]),o("td",[e._v("Array")]),o("td",[e._v("This node has no sub-nodes")]),o("td",[e._v("Array of nodes as children.")])]),o("tr",[o("td",[e._v("disabled")]),o("td",[e._v("Boolean")]),o("td",[e._v("The node is enabled")]),o("td",[e._v("Is node disabled?")])]),o("tr",[o("td",[e._v("expandable")]),o("td",[e._v("Boolean")]),o("td",[e._v("The node is expandable")]),o("td",[e._v("Is node expandable?")])]),o("tr",[o("td",[e._v("selectable")]),o("td",[e._v("Boolean")]),o("td",[e._v("The node is selectable")]),o("td",[e._v("Is node selectable?")])]),o("tr",[o("td",[e._v("handler")]),o("td",[e._v("Function")]),o("td",[e._v("No extra function is called")]),o("td",[e._v("Custom function that should be called on click on node. Receives "),o("code",{staticClass:"doc-token"},[e._v("node")]),e._v(" as parameter.")])]),o("tr",[o("td",[e._v("tickable")]),o("td",[e._v("Boolean")]),o("td",[e._v("The node is tickable according to tick strategy")]),o("td",[e._v("When using a tick strategy, each node shows a checkbox. Should a node’s checkbox be disabled?")])]),o("tr",[o("td",[e._v("noTick")]),o("td",[e._v("Boolean")]),o("td",[e._v("Node displays a checkbox")]),o("td",[e._v("When using a tick strategy, should node display a checkbox?")])]),o("tr",[o("td",[e._v("tickStrategy")]),o("td",[e._v("String")]),o("td",[e._v("Tick strategy ‘none’ is used")]),o("td",[e._v("Override global tick strategy for this node only. One of ‘leaf’, ‘leaf-filtered’, ‘strict’, ‘none’.")])]),o("tr",[o("td",[e._v("lazy")]),o("td",[e._v("Boolean")]),o("td",[e._v("Children are not lazy loaded")]),o("td",[e._v("Should children be lazy loaded? In this case also don’t specify ‘children’ prop.")])]),o("tr",[o("td",[e._v("header")]),o("td",[e._v("String")]),o("td",[e._v("Slot ‘default-header’ is used")]),o("td",[e._v("Node header scoped slot name, without the required ‘header-’ prefix. Example: ‘story’ refers to ‘header-story’ scoped slot.")])]),o("tr",[o("td",[e._v("body")]),o("td",[e._v("String")]),o("td",[e._v("Slot ‘default-body’ is used")]),o("td",[e._v("Node body scoped slot name, without the required ‘body-’ prefix. Example: ‘story’ refers to ‘body-story’ scoped slot.")])])])])],1)},i=[],n=o("8669"),d="Tree | Quasar Framework",s="The QTree is a highly configurable Vue component which displays hierarchical data, such as a table of contents in a tree structure.",c={meta:{title:"Tree",meta:{title:{name:"title",content:d},ogTitle:{name:"og:title",content:d},twitterTitle:{name:"twitter:title",content:d},description:{name:"description",content:s},ogDesc:{name:"og:description",content:s},twitterDesc:{name:"twitter:description",content:s}}},preFetch:function(e){var t=e.store;t.commit("updateToc",[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Basic",title:"Basic",sub:!0},{id:"No-connector-lines",title:"No connector lines",sub:!0},{id:"Dark",title:"Dark",sub:!0},{id:"Integrated-example",title:"Integrated example",sub:!0},{id:"Customize-content",title:"Customize content",sub:!0},{id:"Accordion%2C-filtering-and-selectable",title:"Accordion, filtering and selectable",sub:!0},{id:"Lazy-loading",title:"Lazy loading",sub:!0},{id:"Selection-vs-ticking%2C-expansion",title:"Selection vs ticking, expansion",sub:!0},{id:"Tick-strategy",title:"Tick strategy",sub:!0},{id:"Custom-filter-method",title:"Custom filter method",sub:!0},{id:"QTree-API",title:"QTree API"},{id:"Nodes-model-structure",title:"Nodes model structure",sub:!0}])},created:function(){this.nav=[{name:"Tooltip",category:"Vue Components",path:"/vue-components/tooltip",dir:"left"},{name:"Uploader",category:"Vue Components",path:"/vue-components/uploader",dir:"right"}]},methods:{copyHeading:n["a"]}},r=c,l=o("2877"),h=Object(l["a"])(r,a,i,!1,null,null,null);t["default"]=h.exports}}]);