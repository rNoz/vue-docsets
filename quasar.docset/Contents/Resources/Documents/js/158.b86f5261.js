(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[158],{e06d:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("doc-page",{attrs:{title:"Dark Plugin",related:t.related,nav:t.nav,badge:t.badge}},[s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIP")]),s("p",[t._v("For a better understanding of this Quasar plugin, please head to the Style & Identity "),s("doc-link",{attrs:{to:"/style/dark-mode"}},[t._v("Dark Mode")]),t._v(" page.")],1)]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(a){return t.copyHeading("Installation")}}},[t._v("Installation")]),s("p",[t._v("This plugin is automatically installed. No need to do anything but directly use it.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(a){return t.copyHeading("Usage")}}},[t._v("Usage")]),s("div",{staticClass:"doc-note doc-note--warning"},[s("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),s("p",[t._v("Do not manually assign a value to "),s("code",{staticClass:"doc-token"},[t._v("isActive")]),t._v(" or "),s("code",{staticClass:"doc-token"},[t._v("mode")]),t._v(" from below. Instead, use the "),s("code",{staticClass:"doc-token"},[t._v("set(val)")]),t._v(" method.")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Inside-of-a-Vue-file"},on:{click:function(a){return t.copyHeading("Inside-of-a-Vue-file")}}},[t._v("Inside of a Vue file")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get status")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isActive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true, false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get configured status")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "auto", true, false')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set status")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// or false or "auto"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// toggle")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toggle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("On a "),s("strong",[t._v("SSR build")]),t._v(", you can set this from a "),s("code",{staticClass:"doc-token"},[t._v("created")]),t._v(" hook from your "),s("code",{staticClass:"doc-token"},[t._v("/src/App.vue")]),t._v(":")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Outside-of-a-Vue-file"},on:{click:function(a){return t.copyHeading("Outside-of-a-Vue-file")}}},[t._v("Outside of a Vue file")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Warning! This method will not")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// work on SSR builds.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Dark "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get status")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isActive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get configured status")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "auto", true, false')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set status")]),t._v("\nDark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// or false or "auto"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// toggle")]),t._v("\nDark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toggle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Through-quasar.conf.js"},on:{click:function(a){return t.copyHeading("Through-quasar.conf.js")}}},[t._v("Through quasar.conf.js")]),s("p",[t._v("You can also use "),s("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(" to set the Dark mode status:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("framework"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dark"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or Boolean true/false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Note-about-SSR"},on:{click:function(a){return t.copyHeading("Note-about-SSR")}}},[t._v("Note about SSR")]),s("p",[t._v("When on a SSR build:")]),s("ul",[s("li",[s("code",{staticClass:"doc-token"},[t._v("import { Dark } from 'quasar'")]),t._v(" method of using Dark mode will not error out but it will not work (won’t do anything). But you can use the other two ways (see previous section). We recommend through quasar.conf.js.")]),s("li",[t._v("It’s preferred to avoid setting Dark mode to ‘auto’ for SSR builds. It’s because the client dark mode preference cannot be inferred, so SSR will always render in light mode then when the client takes over, it will switch to Dark (if it will be the case). As a result, a quick flicker of the screen will occur.")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Watching-for-status-change"},on:{click:function(a){return t.copyHeading("Watching-for-status-change")}}},[t._v("Watching for status change")]),s("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  watch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$q.dark.isActive'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'On dark mode'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'On light mode'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Dark-API"},on:{click:function(a){return t.copyHeading("Dark-API")}}},[t._v("Dark API")]),s("doc-api",{attrs:{file:"Dark"}})],1)},e=[],o=s("8669"),r="Dark Plugin | Quasar Framework",c="A Quasar plugin to toggle or configure the Dark Mode state of your app.",p={meta:{title:"Dark Plugin",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},preFetch:function(t){var a=t.store;a.commit("updateToc",[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Inside-of-a-Vue-file",title:"Inside of a Vue file",sub:!0},{id:"Outside-of-a-Vue-file",title:"Outside of a Vue file",sub:!0},{id:"Through-quasar.conf.js",title:"Through quasar.conf.js",sub:!0},{id:"Note-about-SSR",title:"Note about SSR"},{id:"Watching-for-status-change",title:"Watching for status change"},{id:"Dark-API",title:"Dark API"}])},created:function(){this.related=[{name:"Dark Mode",category:"Style & Identity",path:"/style/dark-mode"},{name:"Theme Builder",category:"Style & Identity",path:"/style/theme-builder"}],this.nav=[{name:"Cookies",category:"Quasar Plugins",path:"/quasar-plugins/cookies",dir:"left"},{name:"Dialog",category:"Quasar Plugins",path:"/quasar-plugins/dialog",dir:"right"}],this.badge="v1.3+"},methods:{copyHeading:o["a"]}},i=p,l=s("2877"),u=Object(l["a"])(i,n,e,!1,null,null,null);a["default"]=u.exports}}]);