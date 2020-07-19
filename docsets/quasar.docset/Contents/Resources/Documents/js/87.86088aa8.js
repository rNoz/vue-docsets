(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[87],{"2c27":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("doc-page",{attrs:{title:"Directory Structure",nav:t.nav}},[s("p",[t._v("This is the structure of a project with all modes installed. There’s no reason to be intimidated though!")]),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIP")]),s("p",[t._v("If you are a beginner, all you’ll need to care about is "),s("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(" (Quasar App Config file), "),s("code",{staticClass:"doc-token"},[t._v("/src/router")]),t._v(", "),s("code",{staticClass:"doc-token"},[t._v("/src/layouts")]),t._v(", "),s("code",{staticClass:"doc-token"},[t._v("/src/pages")]),t._v(" and optionally "),s("code",{staticClass:"doc-token"},[t._v("/src/assets")]),t._v(".")])]),s("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── src/\n│   ├── assets/              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dynamic assets (processed by webpack)")]),t._v("\n│   ├── statics/             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pure static assets (directly copied)")]),t._v("\n│   ├── components/          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .vue components used in pages & layouts")]),t._v("\n│   ├── css/                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CSS/Stylus/Sass/... files for your app")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── app.styl\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │   └── quasar.variables.styl "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Quasar Stylus variables for you to tweak")]),t._v("\n│   ├── layouts/             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# layout .vue files")]),t._v("\n│   ├── pages/               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# page .vue files")]),t._v("\n│   ├── boot/                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# boot files (app initialization code)")]),t._v("\n│   ├── router/              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vue Router")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── index.js         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vue Router definition")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │   └── routes.js        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App Routes definitions")]),t._v("\n│   ├── store/               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── index.js         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store definition")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │   ├── "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("folder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store Module...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │   └── "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("folder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store Module...")]),t._v("\n│   ├── App.vue              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# root Vue component of your App")]),t._v("\n│   └── index.template.html  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Template for index.html")]),t._v("\n├── src-ssr/                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SSR specific code (like production Node webserver)")]),t._v("\n├── src-pwa/                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PWA specific code (like Service Worker)")]),t._v("\n├── src-cordova/             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Cordova generated folder used to create Mobile Apps")]),t._v("\n├── src-electron/            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Electron specific code (like "main" thread)')]),t._v("\n├── dist/                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# where production builds go")]),t._v("\n│   ├── spa/                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example when building SPA")]),t._v("\n│   ├── ssr/                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example when building SSR")]),t._v("\n│   ├── electron/            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example when building Electron")]),t._v("\n│   └── "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n├── quasar.conf.js           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Quasar App Config file")]),t._v("\n├── babel.config.js          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Babeljs config")]),t._v("\n├── .editorconfig            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# editor config")]),t._v("\n├── .eslintignore            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ESlint ignore paths")]),t._v("\n├── .eslintrc.js             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ESlint config")]),t._v("\n├── .postcssrc.js            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PostCSS config")]),t._v("\n├── .stylintrc               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Stylus lint config")]),t._v("\n├── .gitignore               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GIT ignore paths")]),t._v("\n├── package.json             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm scripts and dependencies")]),t._v("\n└── README.md                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# readme for your website/App")]),t._v("\n")])])])},a=[],o=s("8669"),r="Directory Structure | Quasar Framework",c="The structure of a Quasar app with explanations for each folder and file.",p={meta:{title:"Directory Structure",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},preFetch:function(t){var e=t.store;e.commit("updateToc",[])},created:function(){this.nav=[{name:"Testing & Auditing",category:"Quasar CLI",path:"/quasar-cli/testing-and-auditing",dir:"left"},{name:"Build Commands",category:"CLI Documentation",path:"/quasar-cli/cli-documentation/build-commands",dir:"right"}]},methods:{copyHeading:o["a"]}},i=p,l=s("2877"),v=Object(l["a"])(i,n,a,!1,null,null,null);e["default"]=v.exports}}]);