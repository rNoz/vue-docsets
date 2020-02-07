(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{f4e2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("doc-page",{attrs:{title:"Injecting Quasar Plugin",nav:t.nav}},[n("p",[t._v("This guide is for when you want to ensure that a "),n("doc-link",{attrs:{to:"/quasar-plugins"}},[t._v("Quasar Plugin")]),t._v(" will be injected into the hosting app, because you depend on it for your own App Extension to work.")],1),n("div",{staticClass:"doc-note doc-note--tip"},[n("p",{staticClass:"doc-note__title"},[t._v("TIP")]),n("p",[t._v("In order for creating an App Extension project folder, please first read the "),n("doc-link",{attrs:{to:"/app-extensions/development-guide/introduction"}},[t._v("Development Guide > Introduction")]),t._v(".")],1)]),n("div",{staticClass:"doc-note doc-note--tip"},[n("p",{staticClass:"doc-note__title"},[t._v("Full Example")]),n("p",[t._v("To see an example of what we will build, head over to "),n("doc-link",{attrs:{to:"https://github.com/quasarframework/app-extension-examples/tree/master/inject-quasar-plugin"}},[t._v("full example")]),t._v(", which is a github repo with this App Extension.")],1)]),n("p",[t._v("We will only need the /index.js script for this, because we can use the "),n("doc-link",{attrs:{to:"/app-extensions/development-guide/index-api"}},[t._v("Index API")]),t._v(" to configure quasar.conf.js from the host app to include our required Quasar Plugin.")],1),n("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── package.json\n└── src\n    └── index.js              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Described in Index API")]),t._v("\n")])]),n("p",[t._v("And /index.js would look like this:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// file: /index.js")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (Optional!)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Quasar compatibility check; you may need")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// hard dependencies, as in a minimum version of the "quasar"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// package or a minimum version of "@quasar/app" CLI')]),t._v("\n  api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compatibleWith")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^1.0.0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compatibleWith")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@quasar/app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^1.0.0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here we extend /quasar.conf.js, so we can add")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a boot file which registers our new Vue directive;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "extendConf" will be defined below (keep reading the tutorial)')]),t._v("\n  api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendQuasarConf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extendConf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("Our “extendConf” method, in the same file as above:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// file: /index.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendConf")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("conf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we push to /quasar.conf.js > framework > plugins:")]),t._v("\n  conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("framework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AppVisibility'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},s=[],o=n("8669"),r="Injecting Quasar Plugin | Quasar Framework",p="Tips and tricks on how to use a Quasar App Extension to configure the host app to use a Quasar Plugin.",i={meta:{title:"Injecting Quasar Plugin",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:p},ogDesc:{name:"og:description",content:p},twitterDesc:{name:"twitter:description",content:p}}},preFetch:function(t){var e=t.store;e.commit("updateToc",[])},created:function(){this.nav=[{name:"Provide a directive",category:"Tips and Tricks",path:"/app-extensions/tips-and-tricks/provide-a-directive",dir:"left"},{name:"Starter kit equivalent",category:"Tips and Tricks",path:"/app-extensions/tips-and-tricks/starter-kit-equivalent",dir:"right"}]},methods:{copyHeading:o["a"]}},c=i,l=n("2877"),u=Object(l["a"])(c,a,s,!1,null,null,null);e["default"]=u.exports}}]);