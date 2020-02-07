(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[85],{"5f1c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("doc-page",{attrs:{title:"Build Commands",nav:t.nav}},[n("p",[t._v("We will be covering Development and Production build commands.")]),n("div",{staticClass:"doc-note doc-note--tip"},[n("p",{staticClass:"doc-note__title"},[t._v("TIP")]),n("p",[t._v("Full list of Quasar CLI commands: "),n("doc-link",{attrs:{to:"/quasar-cli/cli-documentation/commands-list"}},[t._v("Commands List")]),t._v(".")],1)]),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Development"},on:{click:function(e){return t.copyHeading("Development")}}},[t._v("Development")]),n("blockquote",{staticClass:"doc-note"},[n("p",[t._v("Starts a Node.js local development server.")])]),n("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run development server (with default theme)")]),t._v("\n$ quasar dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# on specific port")]),t._v("\n$ quasar dev -p "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SSR")]),t._v("\n$ quasar dev -m ssr\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PWA")]),t._v("\n$ quasar dev -m pwa\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mobile App")]),t._v("\n$ quasar dev -m cordova -T "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("android"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or the shorter form:")]),t._v("\n$ quasar dev -m "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("android"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Electron App")]),t._v("\n$ quasar dev -m electron\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# passing extra parameters and/or options to")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# underlying "cordova" or "electron" executables:')]),t._v("\n$ quasar dev -m ios -- some params --and options --here\n$ quasar dev -m electron -- --no-sandbox --disable-setuid-sandbox\n")])]),n("p",[t._v("While developing with the Dev Server you will have:")]),n("ul",[n("li",[t._v("Babel, so you can write ES6 code")]),n("li",[t._v("Webpack + vue-loader for Vue SFC (single file components)")]),n("li",[t._v("State preserving hot-reload")]),n("li",[t._v("State preserving compilation error overlay")]),n("li",[t._v("Lint-on-save with ESLint")]),n("li",[t._v("Source maps")]),n("li",[t._v("Develop right on a device emulator (or a real phone connected to your machine) if you target a Mobile App")]),n("li",[t._v("Develop right on an Electron window with Developer Tools included if you target an Electron App")])]),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Production"},on:{click:function(e){return t.copyHeading("Production")}}},[t._v("Production")]),n("blockquote",{staticClass:"doc-note"},[n("p",[t._v("Build assets for production.")])]),n("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build for production")]),t._v("\n$ quasar build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SSR")]),t._v("\n$ quasar build -m ssr\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PWA")]),t._v("\n$ quasar build -m pwa\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mobile App")]),t._v("\n$ quasar build -m cordova -T "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("android"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or the short form:")]),t._v("\n$ quasar build -m "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("android"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# passing extra parameters and/or options to")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# underlying "cordova" executable:')]),t._v("\n$ quasar build -m ios -- some params --and options --here\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Electron App")]),t._v("\n$ quasar build -m electron\n")])]),n("p",[t._v("In addition to what you get while developing your website/app, for production builds you also take advantage of:")]),n("ul",[n("li",[t._v("Javascript minified with "),n("doc-link",{attrs:{to:"https://github.com/mishoo/UglifyJS2"}},[t._v("UglifyJS")])],1),n("li",[t._v("HTML minified with "),n("doc-link",{attrs:{to:"https://github.com/kangax/html-minifier"}},[t._v("html-minifier")])],1),n("li",[t._v("CSS across all components extracted (and auto-prefixed) into a single file and minified with "),n("doc-link",{attrs:{to:"https://github.com/ben-eb/cssnano"}},[t._v("cssnano")])],1),n("li",[t._v("All static assets are compiled with version hashes for efficient long-term caching, and a production index.html is auto-generated with proper URLs to these generated assets.")])])])},o=[],s=n("8669"),r="Build Commands | Quasar Framework",i="Quasar CLI list of commands for developing and building a Quasar app.",c={meta:{title:"Build Commands",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:i},ogDesc:{name:"og:description",content:i},twitterDesc:{name:"twitter:description",content:i}}},preFetch:function(t){var e=t.store;e.commit("updateToc",[{id:"Development",title:"Development",sub:!0},{id:"Production",title:"Production",sub:!0}])},created:function(){this.nav=[{name:"Directory Structure",category:"CLI Documentation",path:"/quasar-cli/cli-documentation/directory-structure",dir:"left"},{name:"Commands List",category:"CLI Documentation",path:"/quasar-cli/cli-documentation/commands-list",dir:"right"}]},methods:{copyHeading:s["a"]}},l=c,p=n("2877"),d=Object(p["a"])(l,a,o,!1,null,null,null);e["default"]=d.exports}}]);