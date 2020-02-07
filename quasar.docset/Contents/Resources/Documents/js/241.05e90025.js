(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[241],{e3e2:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("doc-page",{attrs:{title:"Responsive",nav:e.nav,badge:e.badge}},[o("p",[e._v("QResponsive is a component which forces the content to maintain an aspect ratio based on its width.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(t){return e.copyHeading("Installation")}}},[e._v("Installation")]),o("doc-installation",{attrs:{components:"QResponsive"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(t){return e.copyHeading("Usage")}}},[e._v("Usage")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIPS")]),o("ul",[o("li",[e._v("The component can be used with any content, as long you specify "),o("strong",[e._v("only one direct child")]),e._v(". If you need multiple elements inside of it, wrap them in a "),o("code",{staticClass:"doc-token"},[e._v("<div>")]),e._v(".")]),o("li",[e._v("It is your responsibility to make sure that your content won’t overflow the container.")])])]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("Do not use it on Quasar components that already have a "),o("code",{staticClass:"doc-token"},[e._v("ratio")]),e._v(" property, like QImg or QVideo, or on components that have a forced height.")])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Basic"},on:{click:function(t){return e.copyHeading("Basic")}}},[e._v("Basic")]),o("doc-example",{attrs:{title:"Basic usage",file:"QResponsive/Basic"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Flex-row"},on:{click:function(t){return e.copyHeading("Flex-row")}}},[e._v("Flex row")]),o("p",[e._v("Note below that we are using a vertical alignment ("),o("code",{staticClass:"doc-token"},[e._v("items-start")]),e._v(") other than the default, so that flexbox won’t force the height on each QResponsive component.")]),o("doc-example",{attrs:{title:"Basic usage",file:"QResponsive/FlexRow"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"On-some-components"},on:{click:function(t){return e.copyHeading("On-some-components")}}},[e._v("On some components")]),o("p",[e._v("Below are just a few examples. QResponsive is not restricted to only QCard and QCarousel.")]),o("doc-example",{attrs:{title:"On QCard",file:"QResponsive/Card"}}),o("doc-example",{attrs:{title:"On QCardSection",file:"QResponsive/CardSection"}}),o("doc-example",{attrs:{title:"On QTable",file:"QResponsive/Table"}}),o("p",[e._v("Notice that we will not supply a "),o("code",{staticClass:"doc-token"},[e._v("height")]),e._v(" prop to QCarousel when we use QResponsive on it, since it’s QResponsive who will take care of that.")]),o("doc-example",{attrs:{title:"On QCarousel",file:"QResponsive/Carousel"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Maximum-height"},on:{click:function(t){return e.copyHeading("Maximum-height")}}},[e._v("Maximum height")]),o("p",[e._v("Apply the max height (or max width, etc etc) directly on the QResponsive component through a CSS class or inline. Remember that it is still your responsibility to ensure that the content won’t overflow the container.")]),o("doc-example",{attrs:{title:"On QCard",file:"QResponsive/MaxHeight"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QResponsive-API"},on:{click:function(t){return e.copyHeading("QResponsive-API")}}},[e._v("QResponsive API")]),o("doc-api",{attrs:{file:"QResponsive"}})],1)},i=[],s=o("8669"),a="Responsive | Quasar Framework",c="The QResponsive Vue component forces the content to maintain an aspect ratio based on its width.",l={meta:{title:"Responsive",meta:{title:{name:"title",content:a},ogTitle:{name:"og:title",content:a},twitterTitle:{name:"twitter:title",content:a},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},preFetch:function(e){var t=e.store;t.commit("updateToc",[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Basic",title:"Basic",sub:!0},{id:"Flex-row",title:"Flex row",sub:!0},{id:"On-some-components",title:"On some components",sub:!0},{id:"Maximum-height",title:"Maximum height",sub:!0},{id:"QResponsive-API",title:"QResponsive API"}])},created:function(){this.nav=[{name:"Rating",category:"Vue Components",path:"/vue-components/rating",dir:"left"},{name:"Scroll Area",category:"Vue Components",path:"/vue-components/scroll-area",dir:"right"}],this.badge="v1.9+"},methods:{copyHeading:s["a"]}},r=l,d=o("2877"),p=Object(d["a"])(r,n,i,!1,null,null,null);t["default"]=p.exports}}]);