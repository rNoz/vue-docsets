(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[194],{"77cb":function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("doc-page",{attrs:{title:"Ajax Bar",related:a.related,nav:a.nav}},[e("p",[a._v("In most mobile apps and even some desktop apps, you will most likely have some API communication to a server via an "),e("doc-link",{attrs:{to:"https://en.wikipedia.org/wiki/Ajax_(programming)"}},[a._v("Ajax call")]),a._v(". Since these calls can take more than a second or two, it is good UX to offer the user feedback, when such an API call is being made. Which is where QAjaxBar comes into helping you out.")],1),e("p",[a._v("QAjaxBar is a component which displays a loading bar (like Youtube) whenever an Ajax call (regardless of Ajax library used) is in progress. It can be manually triggered as well.")]),e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[a._v("TIP")]),e("p",[a._v("If you’d like "),e("strong",[a._v("a simpler and more convenient way")]),a._v(" to offer an Ajax Bar to your users, have a look at the "),e("doc-link",{attrs:{to:"/quasar-plugins/loading-bar"}},[a._v("Loading Bar Plugin")]),a._v(", which is actually "),e("strong",[a._v("the recommended way")]),a._v(".")],1)]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(t){return a.copyHeading("Installation")}}},[a._v("Installation")]),e("doc-installation",{attrs:{components:"QAjaxBar"}}),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(t){return a.copyHeading("Usage")}}},[a._v("Usage")]),e("p",[a._v("The QAjaxBar component captures Ajax calls automatically (unless told not to).")]),e("p",[a._v("The example below triggers events manually for demonstrating purposes only. This one is set to appear at bottom (multiple positions available!) of the page, with a 10px size (default is different) and uses a custom color.")]),e("doc-example",{attrs:{title:"Basic",file:"QAjaxBar/Basic"}}),e("p",[a._v("Please check out the API section for all properties that you can use.")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Tips"},on:{click:function(t){return a.copyHeading("Tips")}}},[a._v("Tips")]),e("ul",[e("li",[e("p",[a._v("If multiple events are captured by Ajax Bar simultaneously, "),e("code",{staticClass:"doc-token"},[a._v("@start")]),a._v(" and "),e("code",{staticClass:"doc-token"},[a._v("@stop")]),a._v(" will still be triggered only once: when bar starts showing up and when it becomes hidden.")])]),e("li",[e("p",[a._v("Each Ajax call makes a "),e("code",{staticClass:"doc-token"},[a._v("start()")]),a._v(" call when it is triggered. When it ends, it calls "),e("code",{staticClass:"doc-token"},[a._v("stop()")]),a._v(". So yes, if you also manually trigger QAjaxBar you must call "),e("code",{staticClass:"doc-token"},[a._v("start()")]),a._v(" each time a new event is starting and "),e("code",{staticClass:"doc-token"},[a._v("stop()")]),a._v(" each time an event finished. QAjaxBar knows to handle multiple events simultaneously.")])])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QAjaxBar-API"},on:{click:function(t){return a.copyHeading("QAjaxBar-API")}}},[a._v("QAjaxBar API")]),e("doc-api",{attrs:{file:"QAjaxBar"}})],1)},n=[],s=e("8669"),i="Ajax Bar | Quasar Framework",l="The QAjaxBar Vue component displays a loading bar whenever an Ajax call is in progress.",r={meta:{title:"Ajax Bar",meta:{title:{name:"title",content:i},ogTitle:{name:"og:title",content:i},twitterTitle:{name:"twitter:title",content:i},description:{name:"description",content:l},ogDesc:{name:"og:description",content:l},twitterDesc:{name:"twitter:description",content:l}}},preFetch:function(a){var t=a.store;t.commit("updateToc",[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Tips",title:"Tips"},{id:"QAjaxBar-API",title:"QAjaxBar API"}])},created:function(){this.related=[{name:"Loading",category:"Quasar Plugins",path:"/quasar-plugins/loading"},{name:"Loading Bar",category:"Quasar Plugins",path:"/quasar-plugins/loading-bar"},{name:"Ajax Requests",category:"Quasar CLI",path:"/quasar-cli/ajax-requests"}],this.nav=[{name:"Page Scroller",category:"Layout and Grid",path:"/layout/page-scroller",dir:"left"},{name:"Avatar",category:"Vue Components",path:"/vue-components/avatar",dir:"right"}]},methods:{copyHeading:s["a"]}},c=r,d=e("2877"),p=Object(d["a"])(c,o,n,!1,null,null,null);t["default"]=p.exports}}]);