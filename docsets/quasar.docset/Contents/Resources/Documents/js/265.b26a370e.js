(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[265],{f1b9:function(t,e,o){"use strict";o.r(e);var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("doc-page",{attrs:{title:"Virtual Scroll",related:t.related,nav:t.nav,badge:t.badge}},[o("p",[t._v("The QVirtualScroll component allows you to display only a part of a long list of items and update the visible items as the user scrolls in the container. This has several advantages: only visible items are rendered, so the smallest number of nodes are in the DOM tree at any given point in time and the memory consumption is kept at its lowest.")]),o("p",[t._v("There are currently two types of QVirtualScroll: “list” (using QItems) and “table” (using a tabular style to display rows of data).")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(e){return t.copyHeading("Installation")}}},[t._v("Installation")]),o("doc-installation",{attrs:{components:"QVirtualScroll"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(e){return t.copyHeading("Usage")}}},[t._v("Usage")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[t._v("TIP")]),o("ul",[o("li",[t._v("To get the best performance while using large lists freeze the array you are passing in the "),o("code",{staticClass:"doc-token"},[t._v("items")]),t._v(" prop using "),o("code",{staticClass:"doc-token"},[t._v("Object.freeze(items)")]),t._v(". This allows Vue to skip making the list “responsive” to changes.")]),o("li",[t._v("The number of items that will be rendered will be calculated based on the "),o("code",{staticClass:"doc-token"},[t._v("virtual-scroll-item-size")]),t._v(" prop and the size of the scrolling container, but you can fit it to your needs using the "),o("code",{staticClass:"doc-token"},[t._v("virtual-scroll-slice-size")]),t._v(" prop.")]),o("li",[t._v("Use the "),o("code",{staticClass:"doc-token"},[t._v("virtual-scroll-item-size")]),t._v(" to specify the size of elements (pixels of height or width, if horizontal). After an element is rendered on screen its size is updated automatically, but if you specify an element size close to the real size you’ll get a better initial indication of the scroll position. Regardless if you will be using this property or not, QVirtualScroll will still work, but without it you may experience the scrollbar not following the mouse grab position while continuously scrolling (on desktop) or the actual scroll of the container getting slightly off by one or two elements when on mobile and continuously scrolling.")])])]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("ul",[o("li",[t._v("There is a maximum height of the scrolling container, imposed by the browser. In IE11 this is around 1,000,000px, while in the rest of the browsers it’s much more, but still limited.")])])]),o("p",[t._v("Scroll the examples below to see QVirtualScroll in action.")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Basic"},on:{click:function(e){return t.copyHeading("Basic")}}},[t._v("Basic")]),o("doc-example",{attrs:{title:"Basic",file:"QVirtualScroll/Basic"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Horizontal"},on:{click:function(e){return t.copyHeading("Horizontal")}}},[t._v("Horizontal")]),o("doc-example",{attrs:{title:"Horizontal",file:"QVirtualScroll/BasicHorizontal"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Different-templates"},on:{click:function(e){return t.copyHeading("Different-templates")}}},[t._v("Different templates")]),o("doc-example",{attrs:{title:"Different templates for items",file:"QVirtualScroll/VariousContent"}}),o("doc-example",{attrs:{title:"Different templates for horizontal items",file:"QVirtualScroll/VariousContentHorizontal"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Table-type"},on:{click:function(e){return t.copyHeading("Table-type")}}},[t._v("Table type")]),o("p",[t._v("Notice the "),o("code",{staticClass:"doc-token"},[t._v('type="table"')]),t._v(" property.")]),o("doc-example",{attrs:{title:"Basic table",file:"QVirtualScroll/TableBasic"}}),o("p",[t._v("With header that scrolls along with content (doesn’t stay in place).")]),o("doc-example",{attrs:{title:"Table with scrolling header/footer",file:"QVirtualScroll/TableBasicHeader"}}),o("p",[t._v("Notice (in the example below) the CSS required to make the table header and footer “sticky”. Also note the additional scoped slots which define the header and footer content.")]),o("div",{staticClass:"doc-note doc-note--danger"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("p",[t._v("IE11 does not supports the sticky header/footer.")])]),o("doc-example",{attrs:{title:"Sticky headers table",file:"QVirtualScroll/TableSticky"}}),o("p",[t._v("A more involved example below, playing with sticky headers and footers.")]),o("doc-example",{attrs:{title:"Playing with sticky headers",file:"QVirtualScroll/TableSticky2"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Scroll-target"},on:{click:function(e){return t.copyHeading("Scroll-target")}}},[t._v("Scroll target")]),o("p",[t._v("If you need to specify the scroll target (because the auto detected one is not the desired one) pass a CSS selector (as string) or the DOM element to the "),o("code",{staticClass:"doc-token"},[t._v("scroll-target")]),t._v(" prop.")]),o("p",[t._v("If you need to use the virtual list with the whole page as the scrolling element then please set  "),o("code",{staticClass:"doc-token"},[t._v('scroll-target="body"')]),t._v(".")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("ul",[o("li",[t._v("If you pass a custom scroll target container with "),o("code",{staticClass:"doc-token"},[t._v("scroll-target")]),t._v(" prop you must make sure that the element exists and that it can be overflowed (it must have a maximum height and an overflow that allows scrolling).")]),o("li",[t._v("If the scroll target container cannot be overflowed you’ll get the whole list rendered.")])])]),o("div",{staticClass:"doc-note doc-note--danger"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("p",[t._v("If you want to use a Vue reference for "),o("code",{staticClass:"doc-token"},[t._v("scroll-target")]),t._v(", please take care to set it after mounting the component, like in the example below.")])]),o("doc-example",{attrs:{title:"Custom scroll target by id",file:"QVirtualScroll/ScrollTargetId"}}),o("doc-example",{attrs:{title:"Custom scroll target by ref",file:"QVirtualScroll/ScrollTargetRef"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Scroll-to-position"},on:{click:function(e){return t.copyHeading("Scroll-to-position")}}},[t._v("Scroll to position")]),o("doc-example",{attrs:{title:"Scroll to position",file:"QVirtualScroll/ScrollTo"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Sync-and-async"},on:{click:function(e){return t.copyHeading("Sync-and-async")}}},[t._v("Sync and async")]),o("p",[t._v("You can also generate the items to be displayed on the list by using the "),o("code",{staticClass:"doc-token"},[t._v("items-fn")]),t._v(" prop.")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("p",[t._v("Make sure to use a synchronous function that returns the list of items to be displayed.")])]),o("p",[t._v("If you need async data use a component that retrieves and renders the data.")]),o("doc-example",{attrs:{title:"Generate items on the fly",file:"QVirtualScroll/GenerateItems"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Utility-classes"},on:{click:function(e){return t.copyHeading("Utility-classes")}}},[t._v("Utility classes")]),o("q-badge",{attrs:{label:"v1.8.4+"}}),o("p",[t._v("There are two CSS classes that you can use (should you need to) to control VirtualScroll size calculation:")]),o("ul",[o("li",[t._v("Use "),o("code",{staticClass:"doc-token"},[t._v("q-virtual-scroll--with-prev")]),t._v(" class on an element rendered by the VirtualScroll to indicate the element should be grouped with the previous one (main use case is for multiple table rows generated from the same row of data).")]),o("li",[t._v("Use "),o("code",{staticClass:"doc-token"},[t._v("q-virtual-scroll--skip")]),t._v(" class on an element rendered by the VirtualScroll to indicate the element size should be ignored in size calculations.")])]),o("doc-example",{attrs:{title:"Virtual scroll with multiple rows for a data row",file:"QTable/VirtscrollMultipleRows"}}),o("doc-example",{attrs:{title:"Virtual scroll with expansion model",file:"QTable/VirtscrollExpandedRow"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QVirtualScroll-API"},on:{click:function(e){return t.copyHeading("QVirtualScroll-API")}}},[t._v("QVirtualScroll API")]),o("doc-api",{attrs:{file:"QVirtualScroll"}})],1)},i=[],a=o("8669"),s="Virtual Scroll | Quasar Framework",n="The QVirtualScroll component renders a big list of items as the user scrolls in the container, keeping DOM tree clean and eating the lowest amount of memory possible.",r={meta:{title:"Virtual Scroll",meta:{title:{name:"title",content:s},ogTitle:{name:"og:title",content:s},twitterTitle:{name:"twitter:title",content:s},description:{name:"description",content:n},ogDesc:{name:"og:description",content:n},twitterDesc:{name:"twitter:description",content:n}}},preFetch:function(t){var e=t.store;e.commit("updateToc",[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Basic",title:"Basic",sub:!0},{id:"Horizontal",title:"Horizontal",sub:!0},{id:"Different-templates",title:"Different templates",sub:!0},{id:"Table-type",title:"Table type",sub:!0},{id:"Scroll-target",title:"Scroll target",sub:!0},{id:"Scroll-to-position",title:"Scroll to position",sub:!0},{id:"Sync-and-async",title:"Sync and async",sub:!0},{id:"Utility-classes",title:"Utility classes",sub:!0},{id:"QVirtualScroll-API",title:"QVirtualScroll API"}])},created:function(){this.related=[{name:"Select",category:"Form Components",path:"/vue-components/select"}],this.nav=[{name:"Video",category:"Vue Components",path:"/vue-components/video",dir:"left"},{name:"Close Popup",category:"Vue Directives",path:"/vue-directives/close-popup",dir:"right"}],this.badge="v1.1+"},methods:{copyHeading:a["a"]}},c=r,d=o("2877"),u=Object(d["a"])(c,l,i,!1,null,null,null);e["default"]=u.exports}}]);