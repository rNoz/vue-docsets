(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[121],{6100:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("doc-page",{attrs:{title:"Electron Security Concerns",nav:e.nav}},[o("p",[e._v("If you are not vigilant when building Electron apps, you will probably be placing the users of your app in tangible digital danger. Things like XSS (Cross Site Scripting) and remote code execution can literally enable attackers to get deep access to the data in your app - and potentially even the underlying operating system.")]),o("p",[e._v("Especially when working “in the open”, i.e. as an open-source project, you will definitely want to consider hardening your application with code-signing and integrity checking. (See “Tips” section)")]),o("div",{staticClass:"doc-note doc-note--danger"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("Under no circumstances should you load and execute remote code with Node.js integration enabled. Instead, use only local files (packaged together with your application) to execute Node.js code.")])]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Checklist%3A-Security-Recommendations"},on:{click:function(t){return e.copyHeading("Checklist%3A-Security-Recommendations")}}},[e._v("Checklist: Security Recommendations")]),o("p",[e._v("The Electron team itself makes the following recommendations:")]),o("ol",[o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#1-only-load-secure-content"}},[e._v("Only load secure content")])],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#2-disable-nodejs-integration-for-remote-content"}},[e._v("Disable the Node.js integration in all renderers that display remote content")]),e._v(". How to "),o("doc-link",{attrs:{to:"/quasar-cli/developing-electron-apps/node-integration"}},[e._v("turn it off in Quasar")]),e._v(".")],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#4-handle-session-permission-requests-from-remote-content"}},[e._v("Use  "),o("code",{staticClass:"doc-token"},[e._v("ses.setPermissionRequestHandler()")]),e._v("  in all sessions that load remote content")])],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#6-define-a-content-security-policy"}},[e._v("Define a  "),o("code",{staticClass:"doc-token"},[e._v("Content-Security-Policy")])]),e._v("  and use restrictive rules (i.e.  "),o("code",{staticClass:"doc-token"},[e._v("script-src 'self'")]),e._v(")")],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#5-do-not-disable-websecurity"}},[e._v("Do not disable  "),o("code",{staticClass:"doc-token"},[e._v("webSecurity")])])],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#7-do-not-set-allowrunninginsecurecontent-to-true"}},[e._v("Do not set  "),o("code",{staticClass:"doc-token"},[e._v("allowRunningInsecureContent")]),e._v("  to  "),o("code",{staticClass:"doc-token"},[e._v("true")])])],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#8-do-not-enable-experimental-features"}},[e._v("Do not enable experimental features")])],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#9-do-not-use-enableblinkfeatures"}},[e._v("Do not use  "),o("code",{staticClass:"doc-token"},[e._v("enableBlinkFeatures")])])],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#10-do-not-use-allowpopups"}},[o("code",{staticClass:"doc-token"},[e._v("<webview>")]),e._v(": Do not use  "),o("code",{staticClass:"doc-token"},[e._v("allowpopups")])])],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#11-verify-webview-options-before-creation"}},[o("code",{staticClass:"doc-token"},[e._v("<webview>")]),e._v(": Verify options and params")])],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#12-disable-or-limit-navigation"}},[e._v("Disable or limit navigation")])],1),o("li",[o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security#13-disable-or-limit-creation-of-new-windows"}},[e._v("Disable or limit creation of new windows")])],1)]),o("p",[e._v("Except for items 3 and 4 above, Electron will put a warning in the dev console if one of the these issues have been detected.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Tips-and-Tricks"},on:{click:function(t){return e.copyHeading("Tips-and-Tricks")}}},[e._v("Tips and Tricks")]),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Communication-Protocols"},on:{click:function(t){return e.copyHeading("Communication-Protocols")}}},[e._v("Communication Protocols")]),o("p",[e._v("You should know this by now, but if you are not using "),o("strong",[e._v("https")]),e._v(" / "),o("strong",[e._v("sftp")]),e._v(" / "),o("strong",[e._v("wss")]),e._v(" then the app’s communications with the outside world can be very easily tampered with. Whatever you are building, please use a secure protocol everywhere.")]),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Filesystem-Access"},on:{click:function(t){return e.copyHeading("Filesystem-Access")}}},[e._v("Filesystem Access")]),o("p",[e._v("Having read & write permissions to the filesystem is the holy grail for penetration testers, and if your app enables this type of interaction, consider using IPC and multiple windows (with varying permissions) in order to minimize the attack surface.")]),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Encryption"},on:{click:function(t){return e.copyHeading("Encryption")}}},[e._v("Encryption")]),o("p",[e._v("If the user of your application has secrets like wallet addresses, personal information or some other kind of trade secrets, keep that information encrypted when at rest, un-encrypt it in-memory only when it is needed and make sure to overwrite / destroy the object in memory when you are done with it. But no matter how you approach this, follow these four rules:")]),o("ol",[o("li",[e._v("use strong crypto (i.e. collision resistant and not md5)")]),o("li",[e._v("do not invent a novel type of encryption")]),o("li",[e._v("follow the implementation instructions explicitly")]),o("li",[e._v("think about the user-experience")])]),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Disable-developer-tools-in-production"},on:{click:function(t){return e.copyHeading("Disable-developer-tools-in-production")}}},[e._v("Disable developer tools in production")]),o("p",[e._v("You probably don’t want rogue hoody-wearing menaces to be executing something like this in the console of your app:")]),o("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[o("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e._v("window"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("location"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://evilsite.com/looks-just-like-your-app'")]),e._v("\n")])]),o("p",[e._v("The key-combination "),o("kbd",[e._v("CTRL")]),e._v("+"),o("kbd",[e._v("SHIFT")]),e._v("+"),o("kbd",[e._v("I")]),e._v(" (or "),o("kbd",[e._v("ALT")]),e._v("+"),o("kbd",[e._v("CMD")]),e._v("+"),o("kbd",[e._v("I")]),e._v(" on Mac) will open the dev tools and enable inspection of the application. It will even enable some degree of modification. Prevent the simple "),o("code",{staticClass:"doc-token"},[e._v("evil maid")]),e._v(" attack by catching these keypresses and "),o("code",{staticClass:"doc-token"},[e._v("return false")]),e._v(".")]),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Publish-checksums"},on:{click:function(t){return e.copyHeading("Publish-checksums")}}},[e._v("Publish checksums")]),o("p",[e._v("When you have built your binary blobs and want to publish them e.g. on GitHub, use "),o("code",{staticClass:"doc-token"},[e._v("shasum")]),e._v(" and post these results somewhere prominent (like on the GitHub release page for your project) and potentially on a public blockchain, such as "),o("doc-link",{attrs:{to:"https://steemworld.org/@quasarframework"}},[e._v("Steem")]),e._v(".")],1),o("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[o("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[e._v("$ shasum -a "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("256")]),e._v(" myApp-v1.0.0_darwin-x64.dmg\n40ed03e0fb3c422e554c7e75d41ba71405a4a49d560b1bf92a00ea6f5cbd8daa myApp-v1.0.0_darwin-x64.dmg\n")])]),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Sign-the-builds"},on:{click:function(t){return e.copyHeading("Sign-the-builds")}}},[e._v("Sign the builds")]),o("p",[e._v("Although not a hard requirement for sharing your app, signing code is a best practice - and it is required by both the MacOS and Windows stores. Read more about it at this "),o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/code-signing"}},[e._v("official Electron tutorial")]),e._v(".")],1),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Use-SNYK"},on:{click:function(t){return e.copyHeading("Use-SNYK")}}},[e._v("Use SNYK")]),o("p",[o("doc-link",{attrs:{to:"https://snyk.io"}},[e._v("Snyk.io")]),e._v(" is a service, CLI and even GitHub integration bot that tracks vulnerabilities in node modules by comparing the dependencies in your package.json with its list of compromised modules. In many cases their service can recommend minimum update versions or even provide modules that they themselves have patched. They also undertake research and vulnerability disclosure. For an example of something that should scare the socks off of you if you are doing anything with compressed files (zip, tar, etc.) check out their "),o("doc-link",{attrs:{to:"https://snyk.io/research/zip-slip-vulnerability"}},[e._v("writeup")]),e._v(" and "),o("doc-link",{attrs:{to:"https://github.com/snyk/zip-slip-vulnerability"}},[e._v("list of affected software")]),e._v(".")],1),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"For-the-truly-paranoid"},on:{click:function(t){return e.copyHeading("For-the-truly-paranoid")}}},[e._v("For the truly paranoid")]),o("p",[e._v("Use a dedicated physical desktop machine for each platform target. If you have to keep this device online, make sure the OS is always updated, permits zero inbound connections from the internet / bluetooth (especially for shell / ssh) and run constant virus and rootkit checks.")]),o("p",[e._v("Permit only GPG-signed commits to be merged and require at least two team members (who did not make the PR) to review and approve the commit.")]),o("p",[e._v("Reconsider your node package management system:")]),o("ul",[o("li",[e._v("use a private npm registry (like "),o("doc-link",{attrs:{to:"https://jfrog.com/"}},[e._v("JFrog")]),e._v(")")],1),o("li",[e._v("fix your packages to specific versions known to work")]),o("li",[e._v("use pnpm")]),o("li",[e._v("audit each and every single module and its dependencies")])]),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Pay-to-get-hacked"},on:{click:function(t){return e.copyHeading("Pay-to-get-hacked")}}},[e._v("Pay to get hacked")]),o("p",[e._v("Somebody smart might have hacked your project (or an underlying library). If you are making money with this app, consider getting a "),o("doc-link",{attrs:{to:"https://hackerone.com"}},[e._v("Hacker One")]),e._v(" account and running a constant bounty award. At least you’ll be able to convince the hacker to be ethical and NOT sell the exploit to your competitor.")],1),o("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"Get-help"},on:{click:function(t){return e.copyHeading("Get-help")}}},[e._v("Get help")]),o("p",[e._v("You may feel overwhelmed, because the awesomeness of Electron brings with it a great many headaches that you never wanted to think about. If this is the case, consider "),o("doc-link",{attrs:{to:"mailto:razvan.stoenescu@gmail.com"}},[e._v("reaching out")]),e._v(" and getting expert support for the review, audit and hardening of your app by the team of seasoned devs that brought you the Quasar Framework.")],1),o("q-separator",{staticClass:"q-mt-xl"}),o("blockquote",{staticClass:"doc-note"},[o("p",[e._v("Parts of this page have been taken from the official "),o("doc-link",{attrs:{to:"https://electronjs.org/docs/tutorial/security"}},[e._v("Electron Security Guide")]),e._v(".")],1)])],1)},n=[],s=o("8669"),a="Electron Security Concerns | Quasar Framework",r="The things you should know about security in a Quasar desktop app.",c={meta:{title:"Electron Security Concerns",meta:{title:{name:"title",content:a},ogTitle:{name:"og:title",content:a},twitterTitle:{name:"twitter:title",content:a},description:{name:"description",content:r},ogDesc:{name:"og:description",content:r},twitterDesc:{name:"twitter:description",content:r}}},preFetch:function(e){var t=e.store;t.commit("updateToc",[{id:"Checklist%3A-Security-Recommendations",title:"Checklist: Security Recommendations"},{id:"Tips-and-Tricks",title:"Tips and Tricks"}])},created:function(){this.nav=[{name:"Frameless Electron Window",category:"Developing Electron Apps",path:"/quasar-cli/developing-electron-apps/frameless-electron-window",dir:"left"},{name:"Troubleshooting and Tips",category:"Developing Electron Apps",path:"/quasar-cli/developing-electron-apps/troubleshooting-and-tips",dir:"right"}]},methods:{copyHeading:s["a"]}},l=c,d=o("2877"),u=Object(d["a"])(l,i,n,!1,null,null,null);t["default"]=u.exports}}]);