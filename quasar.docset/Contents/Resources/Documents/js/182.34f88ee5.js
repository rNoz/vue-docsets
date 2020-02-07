(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[182],{"20a8":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("doc-page",{attrs:{title:"Vue CLI Quasar Plugin",nav:e.nav}},[a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),a("p",[e._v("Cross-platform support with Vue CLI is handled by a number of community plugins. This means, putting together what Quasar offers out-of-the-box will take you extra time and effort, will not guarantee you the best experience and you won’t have access to a number of features which only Quasar CLI has. Quasar was also not specifically tested with these plugins and thus you could possibly run into issues. This, however, will be valid for any component library, unless they specifically mention having tested their components with third-party plugins.")]),a("p",[e._v("So, before you begin on this path of development with Quasar, we’d like you to understand the following. To guarantee you the best developer experience with Quasar, we highly recommend using Quasar’s CLI and building your project with it, because you won’t miss any feature that Vue CLI has. You’ll get the full range of features offered by Quasar, like full cross-platform build support (but this is just the tip of the iceberg) and you can still do practically everything you’d like to do with Vue too, i.e. use Vue plugins via Quasar’s "),a("doc-link",{attrs:{to:"/quasar-cli/cli-documentation/boot-files#Anatomy-of-an-boot-file"}},[e._v("Boot Files")]),e._v(".")],1)]),a("p",[e._v("To work with Quasar via its Vue CLI plugin, you will need to make sure you have @vue/cli installed globally. To make sure you have the right version, use this command:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ vue --version\n")])]),a("p",[e._v("Should you have Vue CLI 2.x.x. installed, you’ll need to uninstall it with:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" uninstall -g vue-cli\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or (depending with which you've installed it)")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global remove vue-cli\n")])]),a("p",[e._v("Install Vue CLI (v4+) as follows:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @vue/cli\n")])]),a("p",[e._v("If you don’t yet have a project created with @vue/cli, then do so with the command below. "),a("strong",[e._v("Make sure that you checkmark on Babel from the Vue CLI feature list prompt that will appear on screen")]),e._v(".")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ vue create my-app\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Add-Vue-CLI-Quasar-Plugin"},on:{click:function(t){return e.copyHeading("Add-Vue-CLI-Quasar-Plugin")}}},[e._v("Add Vue CLI Quasar Plugin")]),a("p",[e._v("Navigate to the newly created project folder and add the cli plugin. Before installing it, make sure to commit your current changes should you wish to revert them later.")]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),a("p",[e._v("Cross-platform support with Vue CLI is handled by community plugins. These are not tightly integrated with Quasar as with Quasar CLI and may have issues.")])]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" my-app\n$ vue "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" quasar\n")])]),a("p",[e._v("The CLI will ask you if you want the plugin to replace some existing files. It is recommended that you do this, if you wish to have an example, so you can quickly develop your app.")]),a("p",[e._v("Your Vue config (in package.json or vue.config.js file, depending on what you chose when you created your vue app) will also contain a "),a("code",{staticClass:"doc-token"},[e._v("quasar")]),e._v(" object with some basic Quasar configuration.")])])},n=[],s=a("8669"),i="Vue CLI Quasar Plugin | Quasar Framework",r="How to embed Quasar into a Vue CLI app.",u={meta:{title:"Vue CLI Quasar Plugin",meta:{title:{name:"title",content:i},ogTitle:{name:"og:title",content:i},twitterTitle:{name:"twitter:title",content:i},description:{name:"description",content:r},ogDesc:{name:"og:description",content:r},twitterDesc:{name:"twitter:description",content:r}}},preFetch:function(e){var t=e.store;t.commit("updateToc",[{id:"Add-Vue-CLI-Quasar-Plugin",title:"Add Vue CLI Quasar Plugin"}])},created:function(){this.nav=[{name:"UMD / Standalone",category:"Quasar Flavours",path:"/start/umd",dir:"left"},{name:"How to use Vue",category:"Getting Started",path:"/start/how-to-use-vue",dir:"right"}]},methods:{copyHeading:s["a"]}},l=u,c=a("2877"),d=Object(c["a"])(l,o,n,!1,null,null,null);t["default"]=d.exports}}]);