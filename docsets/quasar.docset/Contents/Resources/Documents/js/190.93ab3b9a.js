(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[190],{f9b0:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("doc-page",{attrs:{title:"Stylus Variables",related:t.related,nav:t.nav}},[a("p",[t._v("There are Stylus variables built into Quasar that you can change and/or use within devland should you wish to. This applies to apps built with Quasar CLI or Vue CLI only. It does NOT apply to UMD.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(s){return t.copyHeading("Usage")}}},[t._v("Usage")]),a("p",[t._v("In your app’s "),a("code",{staticClass:"doc-token"},[t._v("*.vue")]),t._v(" files or in the stylus files you can use any Quasar Stylus variables (examples: "),a("code",{staticClass:"doc-token"},[t._v("$primary")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("$red-1")]),t._v("), and any other Stylus variables that you declared in your "),a("code",{staticClass:"doc-token"},[t._v("/src/css/quasar.variables.styl")]),t._v(" (when using Quasar CLI) and "),a("code",{staticClass:"doc-token"},[t._v("src/styles/quasar.variables.styl")]),t._v(" (when using Vue CLI).")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- Notice lang="stylus" --\x3e')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\ndiv\n  color $red-1\n  background-color $grey-5\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[a("strong",[t._v("If using Vue CLI")]),t._v(", then you need to also add: "),a("code",{staticClass:"doc-token"},[t._v("@import '~quasar-variables'")]),t._v(" before using any Stylus variables.")])]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("Starting with "),a("code",{staticClass:"doc-token"},[t._v("@quasar/app")]),t._v(" v1.1+, you don’t need to necessarily have the "),a("code",{staticClass:"doc-token"},[t._v("src/css/quasar.variables.styl")]),t._v(" file if you want to access the Quasar Stylus variables. Create it only if you want to customize the variables.")])]),a("div",{staticClass:"doc-note doc-note--danger"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("When creating or deleting any of the "),a("code",{staticClass:"doc-token"},[t._v("src/css/quasar.variables.*")]),t._v(" files, you will need to restart your devserver in order for it to take effect. However, when you change the content of these files it won’t be necessary to also restart.")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Caveat"},on:{click:function(s){return t.copyHeading("Caveat")}}},[t._v("Caveat")]),a("p",[t._v("Quasar CLI detects if the file contains at least one ‘$’ character, and if so, it automatically imports the Quasar stylus variables.")]),a("p",[t._v("If, however, you have a nested importing statement and the file from which you are importing does not contain any ‘$’ characters, this won’t work. In this case, you need to add a simple comment ("),a("code",{staticClass:"doc-token"},[t._v("// $")]),t._v(") so Quasar can detect at least one ‘$’ character:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n// $\n\n@import "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-file'")]),t._v("\n// now some-file.styl can benefit\n// from Quasar stylus variables too\n// due to comment above\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("Same is required for stylus files that are included from quasar.conf.js > css.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Customizing"},on:{click:function(s){return t.copyHeading("Customizing")}}},[t._v("Customizing")]),a("p",[t._v("Depending on whether you are using Quasar CLI or Vue CLI, you will notice that your project folder has "),a("code",{staticClass:"doc-token"},[t._v("src/css/quasar.variables.styl")]),t._v(" (Quasar CLI) or "),a("code",{staticClass:"doc-token"},[t._v("src/styles/quasar.variables.styl")]),t._v(" (Vue CLI).")]),a("p",[t._v("You can freely override any of Quasar’s variables (see next section) in those files. For convenience, if you picked Stylus when you created your Quasar project folder, this file initially contains only the brand color-related variables.")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("Quasar is very easy to customize without the need of tampering with the Stylus variables, so make sure that you really need to do that. Not having this file will actually speed up your build while the default variables will still be supplied to .sass/.scss/.vue files.")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Quasar%E2%80%99s-CSS"},on:{click:function(s){return t.copyHeading("Quasar%E2%80%99s-CSS")}}},[t._v("Quasar’s CSS")]),a("p",[t._v("Quasar’s own CSS is compiled using the variables file (if it exists), but you can also use "),a("doc-link",{attrs:{to:"/style/sass-scss-variables"}},[t._v("Sass/SCSS variables")]),t._v(". So there has to be a priority list for Quasar CLI:")],1),a("ul",[a("li",[t._v("Does "),a("code",{staticClass:"doc-token"},[t._v("src/css/quasar.variables.styl")]),t._v(" exists? Use that.")]),a("li",[t._v("If not, then does "),a("code",{staticClass:"doc-token"},[t._v("src/css/quasar.variables.scss")]),t._v(" exists? Use that.")]),a("li",[t._v("If not, then does "),a("code",{staticClass:"doc-token"},[t._v("src/css/quasar.variables.sass")]),t._v(" exists? Use that.")]),a("li",[t._v("If not, then use pre-compiled Quasar CSS.")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Variables-list"},on:{click:function(s){return t.copyHeading("Variables-list")}}},[t._v("Variables list")]),a("stylus-variables")],1)},n=[],o=a("8669"),r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.ready?a("q-card",{attrs:{flat:"",bordered:""}},[a("doc-code",{attrs:{lang:"markup"}},[t._v(t._s(t.file))])],1):t._e()},i=[],l=a("0035"),c={name:"StylusVariables",components:{DocCode:l["a"]},data:function(){return{ready:!1}},mounted:function(){var t=this;a.e(0).then(a.bind(null,"3f25")).then((function(s){t.file=s.default,t.ready=!0}))}},u=c,d=a("2877"),p=Object(d["a"])(u,r,i,!1,null,null,null),v=p.exports,_="Stylus Variables | Quasar Framework",y="How to use the Stylus variables defined by Quasar.",h={meta:{title:"Stylus Variables",meta:{title:{name:"title",content:_},ogTitle:{name:"og:title",content:_},twitterTitle:{name:"twitter:title",content:_},description:{name:"description",content:y},ogDesc:{name:"og:description",content:y},twitterDesc:{name:"twitter:description",content:y}}},preFetch:function(t){var s=t.store;s.commit("updateToc",[{id:"Usage",title:"Usage"},{id:"Caveat",title:"Caveat"},{id:"Customizing",title:"Customizing"},{id:"Quasar%E2%80%99s-CSS",title:"Quasar’s CSS"},{id:"Variables-list",title:"Variables list"}])},components:{StylusVariables:v},created:function(){this.related=[{name:"CSS Preprocessors",category:"CLI Documentation",path:"/quasar-cli/cli-documentation/css-preprocessors"},{name:"Sass/SCSS Variables",category:"Style & Identity",path:"/style/sass-scss-variables"}],this.nav=[{name:"Sass/SCSS Variables",category:"Style & Identity",path:"/style/sass-scss-variables",dir:"left"},{name:"Other Helper Classes",category:"Style & Identity",path:"/style/other-helper-classes",dir:"right"}]},methods:{copyHeading:o["a"]}},g=h,f=Object(d["a"])(g,e,n,!1,null,null,null);s["default"]=f.exports}}]);