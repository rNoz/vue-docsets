(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[97],{7214:function(t,n,a){"use strict";a.r(n);var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("doc-page",{attrs:{title:"App Icons for Capacitor",nav:t.nav}},[a("p",[t._v("Capacitor is one of the most complicated of all of the build targets as far as icons go, because not only do you need to place the icons in specific folders, you also need to register them in config files for both platforms (Android, iOS).")]),a("img",{staticStyle:{float:"right","max-width":"15%","min-width":"240px","padding-top":"40px"},attrs:{src:"https://cdn.quasar.dev/img/iconfactory.png"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"The-Icon-Genie"},on:{click:function(n){return t.copyHeading("The-Icon-Genie")}}},[t._v("The Icon Genie")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("We highly recommend using our official "),a("doc-link",{attrs:{to:"https://github.com/quasarframework/app-extension-icon-genie/"}},[t._v("Icon Genie")]),t._v(" app extension, because it consumes a source icon and automatically clones, scales, minifies and places the icons in the appropriate directories for you. When you change this source file (or some of the extension’s settings) the icons will be automatically rebuilt on the next dev or build command.")],1)]),a("p",[t._v("Note that you will need Icon Genie app extension v1.1+ for Capacitor mode to be picked up.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Manual-instructions"},on:{click:function(n){return t.copyHeading("Manual-instructions")}}},[t._v("Manual instructions")]),a("p",[t._v("Unless you are using the Icon Genie app extension, these are the files that you need to replace:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n├── android\n│   └── app\n│       └── src\n│           └── main\n│               └── res\n│                   ├── drawable\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("land"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("hdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("land"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("land"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("land"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("land"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxxhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("hdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── drawable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxxhdpi\n│                   │   └── splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── mipmap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("hdpi\n│                   │   ├── ic_launcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   ├── ic_launcher_foreground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   └── ic_launcher_round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── mipmap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mdpi\n│                   │   ├── ic_launcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   ├── ic_launcher_foreground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   └── ic_launcher_round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── mipmap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xhdpi\n│                   │   ├── ic_launcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   ├── ic_launcher_foreground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   └── ic_launcher_round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   ├── mipmap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxhdpi\n│                   │   ├── ic_launcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   ├── ic_launcher_foreground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   │   └── ic_launcher_round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                   └── mipmap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxxhdpi\n│                       ├── ic_launcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                       ├── ic_launcher_foreground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n│                       └── ic_launcher_round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n└── ios\n    └── App\n        └── App\n            └── Assets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xcassets\n                ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appiconset\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("x20@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("x20@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("x20@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("x20@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v("x29@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v("x29@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v("x29@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v("x29@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("x40@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("x40@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("x40@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("x40@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("x60@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("x60@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("76")]),t._v("x76@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   ├── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("76")]),t._v("x76@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                │   └── AppIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("83.5")]),t._v("x83"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n                └── Splash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageset\n                    ├── splash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2732")]),t._v("x2732"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("png\n                    ├── splash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2732")]),t._v("x2732"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("png\n                    └── splash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2732")]),t._v("x2732"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n")])])])},e=[],p=a("8669"),r="App Icons for Capacitor | Quasar Framework",o="How to manage the app icons for a Quasar hybrid mobile app with Capacitor.",c={meta:{title:"App Icons for Capacitor",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:o},ogDesc:{name:"og:description",content:o},twitterDesc:{name:"twitter:description",content:o}}},preFetch:function(t){var n=t.store;n.commit("updateToc",[{id:"The-Icon-Genie",title:"The Icon Genie"},{id:"Manual-instructions",title:"Manual instructions"}])},created:function(){this.nav=[{name:"Configuring Capacitor",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/configuring-capacitor",dir:"left"},{name:"Capacitor API",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/capacitor-api",dir:"right"}]},methods:{copyHeading:p["a"]}},_=c,v=a("2877"),l=Object(v["a"])(_,s,e,!1,null,null,null);n["default"]=l.exports}}]);