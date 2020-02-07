(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[243],{f65b:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("doc-page",{attrs:{title:"Scroll Observer",related:t.related,nav:t.nav}},[e("p",[t._v("QScrollObserver is a Quasar component that emits a "),e("code",{staticClass:"doc-token"},[t._v("scroll")]),t._v(" event whenever the user scrolls the page or overflowed container with "),e("code",{staticClass:"doc-token"},[t._v(".scroll")]),t._v(" CSS class applied to it.")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(a){return t.copyHeading("Installation")}}},[t._v("Installation")]),e("doc-installation",{attrs:{components:"QScrollObserver"}}),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(a){return t.copyHeading("Usage")}}},[t._v("Usage")]),e("p",[t._v("Scroll this page to see the example below in action.")]),e("doc-example",{attrs:{title:"Basic",file:"QScrollObserver/Basic"}}),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Determining-Scrolling-Container"},on:{click:function(a){return t.copyHeading("Determining-Scrolling-Container")}}},[t._v("Determining Scrolling Container")]),e("p",[t._v("All components or directives in Quasar have a simple algorithm to determine the container that supports the scroll:")]),e("ul",[e("li",[t._v("if a "),e("code",{staticClass:"doc-token"},[t._v("scroll-target")]),t._v(" property is available on the component then it tries to use it as scroll container")]),e("li",[t._v("then it searches for a parent DOM element which has the "),e("code",{staticClass:"doc-token"},[t._v("scroll")]),t._v(", "),e("code",{staticClass:"doc-token"},[t._v("scroll-y")]),t._v(" or "),e("code",{staticClass:"doc-token"},[t._v("overflow-auto")]),t._v(" Quasar CSS helper classes attached to it,")]),e("li",[t._v("if none is found, then it considers that the scrolling takes place on the document itself.")])]),e("p",[t._v("Components like "),e("doc-link",{attrs:{to:"/vue-components/scroll-area"}},[t._v("QScrollArea")]),t._v(", for example, respect this design and have the "),e("code",{staticClass:"doc-token"},[t._v("scroll")]),t._v(" class embedded into it, so that QScrollObservable (or any other scrolling component or directive) can successfully detect it and attach the necessary event handlers to it.")],1),e("p",[t._v("Please note that simply attaching "),e("code",{staticClass:"doc-token"},[t._v("scroll")]),t._v(" CSS class to a DOM element or on a Vue component will have no effect if the respective element is not overflowed (example, with: CSS "),e("code",{staticClass:"doc-token"},[t._v("overflow: hidden")]),t._v(" and a height smaller than its inner content height).")]),e("p",[t._v("Example of good container:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n  Quasar CSS helper 'overflow-hidden' is\n  equivalent to style=\"overflow: hidden\"\n--\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scroll overflow-hidden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...content expanding over the 100px height from container...\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-scroll-observer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@scroll")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- example with `v-scroll` directive --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-scroll")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),e("p",[t._v("One more example with QScrollArea:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-scroll-area")]),e("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bg-yellow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...content expanding over the 500px height from container...\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-scroll-observer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@scroll")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-scroll-area")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Horizontal"},on:{click:function(a){return t.copyHeading("Horizontal")}}},[t._v("Horizontal")]),e("p",[t._v("For capturing horizontal scrolling, use the "),e("code",{staticClass:"doc-token"},[t._v("horizontal")]),t._v(" Boolean prop:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-scroll-observer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("horizontal")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@scroll")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Layout-Scrolling"},on:{click:function(a){return t.copyHeading("Layout-Scrolling")}}},[t._v("Layout Scrolling")]),e("p",[t._v("When scrolling on a Layout with a Page, rather than injecting a QScrollObservable (and by so doing registering additional scroll events) you can take advantage of "),e("doc-link",{attrs:{to:"/layout/layout"}},[t._v("QLayout")]),t._v("´s "),e("code",{staticClass:"doc-token"},[t._v("@scroll")]),t._v(" event directly on your component defining the Layout.")],1),e("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-layout")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@scroll")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-layout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QScrollObserver-API"},on:{click:function(a){return t.copyHeading("QScrollObserver-API")}}},[t._v("QScrollObserver API")]),e("doc-api",{attrs:{file:"QScrollObserver"}})],1)},n=[],r=e("8669"),o="Scroll Observer | Quasar Framework",c="The QScrollObserver Vue component emits an event whenever the user scrolls the page or the parent scrollable container.",l={meta:{title:"Scroll Observer",meta:{title:{name:"title",content:o},ogTitle:{name:"og:title",content:o},twitterTitle:{name:"twitter:title",content:o},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},preFetch:function(t){var a=t.store;a.commit("updateToc",[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Determining-Scrolling-Container",title:"Determining Scrolling Container"},{id:"Horizontal",title:"Horizontal"},{id:"Layout-Scrolling",title:"Layout Scrolling"},{id:"QScrollObserver-API",title:"QScrollObserver API"}])},created:function(){this.related=[{name:"Resize Observer (for Element)",category:"Observers",path:"/vue-components/resize-observer"}],this.nav=[{name:"Resize Observer (for Element)",category:"Observers",path:"/vue-components/resize-observer",dir:"left"},{name:"Pagination",category:"Vue Components",path:"/vue-components/pagination",dir:"right"}]},methods:{copyHeading:r["a"]}},p=l,i=e("2877"),v=Object(i["a"])(p,s,n,!1,null,null,null);a["default"]=v.exports}}]);