(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[121],{"6a97":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("doc-page",{attrs:{title:"Electron Static Assets",nav:t.nav}},[a("p",[t._v("Please read about "),a("doc-link",{attrs:{to:"/quasar-cli/cli-documentation/handling-assets"}},[t._v("Handling Assets")]),t._v(" first, which applies to the renderer process. However, when we deal with Electron then Quasar CLI offers a handy "),a("code",{staticClass:"doc-token"},[t._v("__static")]),t._v(" variable in addition. Statics can be consumed by both the main process and renderer process, but since the paths change when building for production (due to packaging), then usage with "),a("code",{staticClass:"doc-token"},[t._v("fs")]),t._v(" and other modules that need a full path can be a little tricky. So "),a("code",{staticClass:"doc-token"},[t._v("__statics")]),t._v(" can come into play.")],1),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("These features require that you don’t disable the "),a("doc-link",{attrs:{to:"/quasar-cli/developing-electron-apps/node-integration"}},[t._v("Node Integration")]),t._v(".")],1)]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"On-the-subject-of-using-__dirname-%26-__filename"},on:{click:function(e){return t.copyHeading("On-the-subject-of-using-__dirname-%26-__filename")}}},[t._v("On the subject of using __dirname & __filename")]),a("p",[t._v("Since the main process is bundled using webpack, the use of "),a("code",{staticClass:"doc-token"},[t._v("__dirname")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("__filename")]),t._v(" will not provide an expected value in production. Referring to the File Tree, you’ll notice that in production the electron-main.js is placed inside the "),a("code",{staticClass:"doc-token"},[t._v("dist/electron-*")]),t._v(" folder. Based on this knowledge, use "),a("code",{staticClass:"doc-token"},[t._v("__dirname")]),t._v(" & "),a("code",{staticClass:"doc-token"},[t._v("__filename")]),t._v(" accordingly.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("app.asar\n└─ dist\n   └─ electron-*\n      ├─ statics/\n      ├─ js/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n      ├─ node_modules/\n      ├─ index.html\n      ├─ package.json\n      └─ electron-main.js\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Static-assets-with-fs%2C-path-and-__statics"},on:{click:function(e){return t.copyHeading("Static-assets-with-fs%2C-path-and-__statics")}}},[t._v("Static assets with fs, path and __statics")]),a("p",[t._v("Let’s say we have a static asset that we need to read into our application using "),a("code",{staticClass:"doc-token"},[t._v("fs")]),t._v(", but how do we get a reliable path, in both development and production, to the statics/ folder? Quasar provides a global variable named "),a("code",{staticClass:"doc-token"},[t._v("__statics")]),t._v(" that will yield a proper path to it. Here’s how we can use it to read a simple text file in both development and production.")]),a("p",[t._v("Let’s assume we have a file called "),a("code",{staticClass:"doc-token"},[t._v("someFile.txt")]),t._v(" in "),a("code",{staticClass:"doc-token"},[t._v("/src/statics")]),t._v(". Now, in main or renderer process, we can access it like this:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("// main or renderer process\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" fs from "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" path from "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" fileContents "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs.readFileSync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  path.join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__statics, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/someFile.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},n=[],o=a("8669"),i="Electron Static Assets | Quasar Framework",c="Handling the static assets in a Quasar desktop app.",r={meta:{title:"Electron Static Assets",meta:{title:{name:"title",content:i},ogTitle:{name:"og:title",content:i},twitterTitle:{name:"twitter:title",content:i},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},preFetch:function(t){var e=t.store;e.commit("updateToc",[{id:"On-the-subject-of-using-__dirname-%26-__filename",title:"On the subject of using __dirname & __filename"},{id:"Static-assets-with-fs%2C-path-and-__statics",title:"Static assets with fs, path and __statics"}])},created:function(){this.nav=[{name:"Build Commands",category:"Developing Electron Apps",path:"/quasar-cli/developing-electron-apps/build-commands",dir:"left"},{name:"Frameless Electron Window",category:"Developing Electron Apps",path:"/quasar-cli/developing-electron-apps/frameless-electron-window",dir:"right"}]},methods:{copyHeading:o["a"]}},d=r,l=a("2877"),p=Object(l["a"])(d,s,n,!1,null,null,null);e["default"]=p.exports}}]);