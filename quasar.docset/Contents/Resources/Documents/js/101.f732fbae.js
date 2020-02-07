(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[101],{7570:function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("doc-page",{attrs:{title:"Configuring Capacitor",related:a.related,nav:a.nav}},[e("p",[a._v("We’ll be using Quasar CLI to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.")]),e("p",[a._v("There are two configuration files of great importance to your mobile apps. We’ll go over each one.")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"capacitor.config.json"},on:{click:function(t){return a.copyHeading("capacitor.config.json")}}},[a._v("capacitor.config.json")]),e("p",[a._v("The most important config file for your mobile app is "),e("code",{staticClass:"doc-token"},[a._v("/src-capacitor/capacitor.config.json")]),a._v(". The "),e("code",{staticClass:"doc-token"},[a._v("/src-capacitor")]),a._v(" folder is a Capacitor project, so please refer to "),e("doc-link",{attrs:{to:"https://capacitor.ionicframework.com"}},[a._v("Capacitor documentation")]),a._v(" in order to understand what each file from there does. But for now, have a few moments to read about "),e("doc-link",{attrs:{to:"https://capacitor.ionicframework.com/docs/basics/configuring-your-app/"}},[a._v("capacitor.config.json")]),a._v(".")],1),e("p",[a._v("Some properties from this file will get overwritten as we’ll see in next section.")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"quasar.conf.js"},on:{click:function(t){return a.copyHeading("quasar.conf.js")}}},[a._v("quasar.conf.js")]),e("p",[a._v("There are two places in "),e("code",{staticClass:"doc-token"},[a._v("/quasar.conf.js")]),a._v(" where you can configure Quasar specific features for Capacitor.")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  capacitor"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// requires @quasar/app v1.3+")]),a._v("\n    hideSplashscreen"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// disables auto-hiding the Splashscreen by Quasar CLI")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),e("p",[a._v("And you can also configure:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  framework"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    config"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      capacitor"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        iosStatusBarPadding"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// add the dynamic top padding on iOS mobile devices")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])},n=[],s=e("8669"),r="Configuring Capacitor | Quasar Framework",c="How to manage your Capacitor apps with Quasar CLI.",p={meta:{title:"Configuring Capacitor",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},preFetch:function(a){var t=a.store;t.commit("updateToc",[{id:"capacitor.config.json",title:"capacitor.config.json"},{id:"quasar.conf.js",title:"quasar.conf.js"}])},created:function(){this.related=[{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js"}],this.nav=[{name:"Preparation",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/preparation",dir:"left"},{name:"App Icons for Capacitor",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/app-icons-capacitor",dir:"right"}]},methods:{copyHeading:s["a"]}},i=p,l=e("2877"),u=Object(l["a"])(i,o,n,!1,null,null,null);t["default"]=u.exports}}]);