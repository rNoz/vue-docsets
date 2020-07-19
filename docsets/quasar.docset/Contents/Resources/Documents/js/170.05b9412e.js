(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[170],{2712:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("doc-page",{attrs:{title:"Security DO's and DON'Ts",nav:e.nav}},[o("p",[o("strong",[e._v("DO")]),e._v(" periodically review the security of your application, because any lapse may be putting yourself, your team, your users and even your server at risk of serious exploitation. "),o("strong",[e._v("DON’T")]),e._v(" ignore this page because you think you know everything.")]),o("p",[e._v("We have collected some best practices for those of you new to the security theater and a few insights for security professionals new to the Vue ecosystem. We will be revising and adding to this document as we become aware of risks through our own research and the publications of the amazing security community.")]),o("p",[o("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/secure-gold-hero.jpg",alt:"",title:"Quasar Audited - Gold"}})]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Vue-Security-Risks"},on:{click:function(t){return e.copyHeading("Vue-Security-Risks")}}},[e._v("Vue Security Risks")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"User-Input-and-the-Dangers-of-v-html"},on:{click:function(t){return e.copyHeading("User-Input-and-the-Dangers-of-v-html")}}},[e._v("User Input and the Dangers of v-html")]),o("p",[e._v("The "),o("code",{staticClass:"doc-token"},[e._v("v-html")]),e._v(" directive is a wonderful way to programmatically render markup, but even the Vue docs come with "),o("doc-link",{attrs:{to:"https://vuejs.org/v2/guide/syntax.html#Raw-HTML"}},[e._v("this warning")]),e._v(":")],1),o("blockquote",{staticClass:"doc-note"},[o("p",[e._v("“Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use HTML interpolation on trusted content and never on user-provided content.”")])]),o("p",[e._v("If you don’t know what that means, take a quick look at what OWASP has to say about "),o("doc-link",{attrs:{to:"https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)"}},[e._v("XSS (aka cross-site scripting)")]),e._v(".")],1),o("p",[e._v("To be fair, this "),o("em",[e._v("is")]),e._v(" good advice, but "),o("strong",[e._v("DON’T")]),e._v(" be all hand-wavy. "),o("strong",[e._v("DO")]),e._v(" think like an attacker who will innovate, social engineer, lie, phish and steal their way into your systems. What if a webpack loader exploit arises and changes your page in an evil way? What if someone makes a dastardly and ill-intentioned PR? What if suddenly a third party API changes and instead of plaintext starts sending the same structure but with different content? What if the systems you thought were safe turn out to actually have been backdoored? What if a junior dev makes an accidental and fundamentally threatening change to the code that isn’t reviewed properly? (Yes, idiocy is sometimes as dangerous as bad intentions!) The point is, "),o("strong",[e._v("DO")]),e._v(" anticipate the unexpected by preparing for the absolute worst case scenario and hardening all of your systems.")]),o("p",[o("strong",[e._v("DO")]),e._v(" use the "),o("code",{staticClass:"doc-token"},[e._v("v-pre")]),e._v(" directive if you need to take extra precaution.")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"vue-i18n"},on:{click:function(t){return e.copyHeading("vue-i18n")}}},[e._v("vue-i18n")]),o("p",[e._v("The quasi-official internationali(s/z)ation package for Vue allows you to store html in your key’s values and "),o("doc-link",{attrs:{to:"https://kazupon.github.io/vue-i18n/guide/formatting.html#html-formatting"}},[e._v("potentially render them")]),e._v(". If users can’t modify these values, you should be ok - but make sure you trust (aka review) the translators! Our recommendation (although it is more work and will slow-down HMR) is "),o("strong",[e._v("DO")]),e._v(" use "),o("doc-link",{attrs:{to:"https://kazupon.github.io/vue-i18n/guide/interpolation.html#basic-usage"}},[e._v("template interpolation")]),e._v(".")],1),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"eval()"},on:{click:function(t){e.copyHeading("eval()")}}},[e._v("eval()")]),o("p",[e._v("Although you may be tempted to use "),o("code",{staticClass:"doc-token"},[e._v("eval()")]),e._v(", even if you know what you are doing, just "),o("strong",[e._v("DON’T")]),e._v(".")]),o("p",[o("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/dont-be-eval.png",alt:"",title:"Don't be eval()"}})]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Quasar-Components"},on:{click:function(t){return e.copyHeading("Quasar-Components")}}},[e._v("Quasar Components")]),o("p",[e._v("Two Quasar components and two Plugins can be empowered to prevent the rendering of “insecure content”. This is an opt-in feature that is performed by adding a "),o("code",{staticClass:"doc-token"},[e._v("sanitize")]),e._v(" type of boolean prop to the component. These components are discussed below.")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"QSelect"},on:{click:function(t){return e.copyHeading("QSelect")}}},[e._v("QSelect")]),o("p",[e._v("If you are not customizing menu-related scoped-slots (i.e. "),o("code",{staticClass:"doc-token"},[e._v("option")]),e._v(" scoped slot), "),o("strong",[e._v("DO")]),e._v(" prevent the component from rendering HTML in the labels and sublabels with one or more of the "),o("code",{staticClass:"doc-token"},[e._v("sanitize")]),e._v(" properties. Generally speaking, this is not user-supplied data. If you are customizing this slot, it is your responsibility to do sanitization yourself.")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"QChat-%26-Emoji"},on:{click:function(t){return e.copyHeading("QChat-%26-Emoji")}}},[e._v("QChat & Emoji")]),o("p",[e._v("The "),o("code",{staticClass:"doc-token"},[e._v("QChatMessage")]),e._v(" component can similarly be prevented from passing html to the browser by using the "),o("code",{staticClass:"doc-token"},[e._v("sanitize")]),e._v(" property.")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIP")]),o("p",[e._v("There have been a number of recent exploits (especially for older Android and iOS devices) where certain emoji and non-standard UTF-8 actually triggered mobile device restarts and boot-screen loops. "),o("strong",[e._v("DO")]),e._v(" consider a devland integration of markdown parsing in a plain-text type of input field and render it to HTML on the server side before you pass it to the chat recipients.")])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Loading"},on:{click:function(t){return e.copyHeading("Loading")}}},[e._v("Loading")]),o("p",[e._v("Many developers have asked that the Loading plugin be able to display HTML, so this was enabled by default, but if you are worried, "),o("strong",[e._v("DO")]),e._v(" add "),o("code",{staticClass:"doc-token"},[e._v("sanitize: true")]),e._v(" and you removed the vector.")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Notify"},on:{click:function(t){return e.copyHeading("Notify")}}},[e._v("Notify")]),o("p",[e._v("Being able to style the Notify plugin with HTML is not enabled by default (because it is not Spec compliant with Material Design), but if you do set the boolean prop "),o("code",{staticClass:"doc-token"},[e._v("html: true")]),e._v(" then you are responsible for sanitizing it.")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Dialog"},on:{click:function(t){return e.copyHeading("Dialog")}}},[e._v("Dialog")]),o("p",[e._v("Being able to style the Dialog plugin with HTML is not enabled by default (because it is not Spec compliant with Material Design), but if you do set the boolean prop "),o("code",{staticClass:"doc-token"},[e._v("html: true")]),e._v(" then you are responsible for sanitizing the title and message.")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"QInput"},on:{click:function(t){return e.copyHeading("QInput")}}},[e._v("QInput")]),o("p",[e._v("Any field that enables users to enter keystrokes, paste from the buffer or drop a file is a security risk. We won’t go into the nitty-gritty details of this, but just remember it is YOUR responsibility to maintain safety. Only you can prevent help-desk fires!")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"QEditor"},on:{click:function(t){return e.copyHeading("QEditor")}}},[e._v("QEditor")]),o("p",[e._v("This component allows the users to actually create HTML (and even paste it). If you are going to be saving this and showing it to other users, care will be needed on the server-side to validate it. In that case "),o("strong",[e._v("DO")]),e._v(" strip out "),o("code",{staticClass:"doc-token"},[e._v("<script><\/script>")]),e._v(" and "),o("code",{staticClass:"doc-token"},[e._v("<iframe></iframe>")]),e._v(". You can visit the "),o("doc-link",{attrs:{to:"/vue-components/editor#Example--Default-editor"}},[e._v("v-html vs. double-moustache")]),e._v(" example in the docs to play around with the QEditor component and see what the two rendering methods will provide. There is NO "),o("code",{staticClass:"doc-token"},[e._v("sanitize")]),e._v(" tag for QEditor. Further, if you create custom buttons, it is your responsibility to make them safe. You have been warned.")],1),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Dealing-with-Files"},on:{click:function(t){return e.copyHeading("Dealing-with-Files")}}},[e._v("Dealing with Files")]),o("p",[e._v("So how do you validate and sanitize a file? Well, although this is a bit out of scope for a “front-end-framework”, we know that many of you reading this will also be storing user-created files on servers. If you are just storing them (and not processing them in any way), "),o("strong",[e._v("DO")]),e._v(" validate that the file is of the appropriate type by detecting the "),o("doc-link",{attrs:{to:"https://en.wikipedia.org/wiki/List_of_file_signatures"}},[e._v("magic numbers")]),e._v(". "),o("strong",[e._v("DO")]),e._v(" consider using ClamAV to check files for known viral signatures.")],1),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Images"},on:{click:function(t){return e.copyHeading("Images")}}},[e._v("Images")]),o("p",[e._v("If you are allowing users to upload images to your server, you should know that many commonly used modules merely check the file suffix. It is trivial to craft an image that only superficially appears to be an image. "),o("strong",[e._v("DO")]),e._v(" verify that the file is what it claims to be by checking the magic numbers and for this consider using "),o("doc-link",{attrs:{to:"https://github.com/sindresorhus/image-type"}},[e._v("is-image")]),e._v(". While you could check the magic number in the browser "),o("doc-link",{attrs:{to:"https://medium.com/the-everyday-developer/detect-file-mime-type-using-magic-numbers-and-javascript-16bc513d4e1e"}},[e._v("with this method")]),e._v(", another approach is to let the user load an image into a canvas and then upload directly from the canvas. "),o("doc-link",{attrs:{to:"https://github.com/zhanziyang/vue-croppa"}},[e._v("Vue-croppa")]),e._v(" is great front-end tool to do this.")],1),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Archives"},on:{click:function(t){return e.copyHeading("Archives")}}},[e._v("Archives")]),o("p",[e._v("Archive decompression attacks for directory traversal are a real security issue and are virtually impossible to detect without decompressing the file. If you can get away with NOT accepting this type of media, then do it. Otherwise, on linux "),o("strong",[e._v("DO")]),e._v(" use the humble "),o("code",{staticClass:"doc-token"},[e._v("less")]),e._v(" / "),o("code",{staticClass:"doc-token"},[e._v("lesspipe")]),e._v(" and "),o("code",{staticClass:"doc-token"},[e._v(".lessfilter")]),e._v(" for preprocessing these files with your custom workflows.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Passwords"},on:{click:function(t){return e.copyHeading("Passwords")}}},[e._v("Passwords")]),o("p",[o("strong",[e._v("DON’T")]),e._v(" save passwords in plaintext, in fact - "),o("strong",[e._v("DON’T")]),e._v(" save them at all. "),o("strong",[e._v("DO")]),e._v(" save secure hashes and compute them in memory according to a scheme using secure salt and proper algorithms. "),o("strong",[e._v("DO")]),e._v(" limit the length of passwords (both minimum and maximum number of characters) BUT make the upper limit high enough that no legitimate user will ever hit. "),o("strong",[e._v("DO")]),e._v(" consider a highly secure application flow for password resetting and enable the user to configure it according to their preferences. This is a process unique to every project, so we can’t tell you how to solve the problem. Nevertheless here are a few good links:")]),o("ul",[o("li",[o("doc-link",{attrs:{to:"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Choosing_and_Using_Security_Questions_Cheat_Sheet.md"}},[e._v("OWASP cheatsheet")])],1),o("li",[o("doc-link",{attrs:{to:"https://fidoalliance.org/recommended-account-recovery-practices/"}},[e._v("FIDO Guidelines")])],1)]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Cryptography"},on:{click:function(t){return e.copyHeading("Cryptography")}}},[e._v("Cryptography")]),o("ul",[o("li",[o("strong",[e._v("DON’T")]),e._v(" create your own cryptographic solution")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" store personal information in plaintext")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" create your own cryptographic solution")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" ignore any aspect of implementation details")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" create your own cryptographic solution")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" use MD5 or SHA1")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" create your "),o("doc-link",{attrs:{to:"https://about.unimelb.edu.au/newsroom/news/2019/march/researchers-find-trapdoor-in-swissvote-election-system"}},[e._v("own cryptographic solution")])],1)]),o("p",[e._v("A great place to read about this topic and properly choose an industrial strength solution is "),o("doc-link",{attrs:{to:"https://download.libsodium.org/doc/"}},[e._v("libsodium")])],1),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Distribution"},on:{click:function(t){return e.copyHeading("Distribution")}}},[e._v("Distribution")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIP")]),o("p",[e._v("If someone wants to change something in your database or add some file to the server and they are not using an SSH key, "),o("strong",[e._v("DO")]),e._v(" validate "),o("strong",[e._v("AND")]),e._v(" sanitize the input.")])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Web"},on:{click:function(t){return e.copyHeading("Web")}}},[e._v("Web")]),o("ul",[o("li",[o("strong",[e._v("DON’T")]),e._v(" use http")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" store sensitive data in JWT")]),o("li",[o("strong",[e._v("DO")]),e._v(" Use https / wss")]),o("li",[o("strong",[e._v("DO")]),e._v(" manually audit your certificates")]),o("li",[o("strong",[e._v("DO")]),e._v(" validate users")]),o("li",[o("strong",[e._v("DO")]),e._v(" remember that JWT isn’t encrypted per sé")]),o("li",[o("strong",[e._v("DO")]),e._v(" use JWE instead of JWT and use AES256 CBC + HMAC SHA512")]),o("li",[o("strong",[e._v("DO")]),e._v(" double-down and perform the complete OWASP web audit")])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Cordova"},on:{click:function(t){return e.copyHeading("Cordova")}}},[e._v("Cordova")]),o("ul",[o("li",[o("strong",[e._v("DON’T")]),e._v(" use iframes")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" package for Android Gingerbread")]),o("li",[o("strong",[e._v("DO")]),e._v(" sign all your builds")]),o("li",[o("strong",[e._v("DO")]),e._v(" encrypt all data at rest")])]),o("p",[e._v("The "),o("doc-link",{attrs:{to:"https://cordova.apache.org/docs/en/latest/guide/appdev/security/"}},[e._v("Cordova Docs Page")]),e._v(" goes into detail about securing Cordova, and although it seems outdated, the information is mostly still on point.")],1),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Electron"},on:{click:function(t){return e.copyHeading("Electron")}}},[e._v("Electron")]),o("p",[e._v("Electron is a very special case, because XSS and remote code injection can actually lead to complete compromise of the end-user’s (or even developer’s) device.")]),o("ul",[o("li",[o("strong",[e._v("DON’T")]),e._v(" disable "),o("code",{staticClass:"doc-token"},[e._v("websecurity")])]),o("li",[o("strong",[e._v("DON’T")]),e._v(" enable remote code execution")]),o("li",[o("strong",[e._v("DO")]),e._v(" read our guidelines for enhanced "),o("doc-link",{attrs:{to:"/quasar-cli/developing-electron-apps/electron-security-concerns"}},[e._v("Electron Safety")]),e._v(".")],1)]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"SSR"},on:{click:function(t){return e.copyHeading("SSR")}}},[e._v("SSR")]),o("p",[e._v("When you generate your project with the SSR mode, you are provided with a minimal Express server. It is your responsibility to harden your environment to protect your server and your users. To this end, we have provided a collection of important HEADERS that you can consider and should selectively activate before your project enters the production phase (see "),o("code",{staticClass:"doc-token"},[e._v("src-ssr/index.js")]),e._v("). It is important to remember, that HEADERS are not bulletproof, because it is up to Browser vendors to respect them - and for example "),o("doc-link",{attrs:{to:"https://bugs.chromium.org/p/chromium/issues/detail?id=413851"}},[e._v("Chrome will break PDF viewing")]),e._v(" if your Content Security Policy uses the "),o("code",{staticClass:"doc-token"},[e._v("sandbox")]),e._v(" value.")],1),o("ul",[o("li",[o("strong",[e._v("DON’T")]),e._v(" forget to set restrictive headers")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" think that headers alone will protect you from all attacks")]),o("li",[o("strong",[e._v("DO")]),e._v(" read about "),o("doc-link",{attrs:{to:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"}},[e._v("headers")])],1)]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Environmental-Safety"},on:{click:function(t){return e.copyHeading("Environmental-Safety")}}},[e._v("Environmental Safety")]),o("p",[e._v("Being more safe means taking many things into consideration, and the more of the following guidelines you respect, the smaller the attack footprint will be.")]),o("p",[o("img",{staticClass:"doc-img",attrs:{src:"https://cdn.quasar.dev/img/lets-encrypt.jpg",alt:"",title:"Valid SSL certificate"}})]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Operational-Security"},on:{click:function(t){return e.copyHeading("Operational-Security")}}},[e._v("Operational Security")]),o("p",[e._v("Audit how your development systems work:")]),o("ul",[o("li",[o("strong",[e._v("DON’T")]),e._v(" retain unneeded software")]),o("li",[o("strong",[e._v("DO")]),e._v(" use an OS and distro with a smaller footprint and security features enabled (like SELinux for example)")]),o("li",[o("strong",[e._v("DO")]),e._v(" make sure ALL software on your machine is up to date (especially NODE)")]),o("li",[o("strong",[e._v("DO")]),e._v(" use a password manager")]),o("li",[o("strong",[e._v("DO")]),e._v(" Use 2FA everywhere possible")])]),o("p",[e._v("Audit how your production environment works:")]),o("ul",[o("li",[o("strong",[e._v("DON’T")]),e._v(" think security through obscurity will help you when you are under attack")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" leave unneeded ports open")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" pretend containers or VM’s keep you safe by their nature")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" ever stop being paranoid")]),o("li",[o("strong",[e._v("DO")]),e._v(" turn off password and root access to your server")]),o("li",[o("strong",[e._v("DO")]),e._v(" use secure transfer protocols (SSH, HTTPS, SFTP, WSS)")]),o("li",[o("strong",[e._v("DO")]),e._v(" install fail2ban and rkhunter")]),o("li",[o("strong",[e._v("DO")]),e._v(" regularly analyze your logs")]),o("li",[o("strong",[e._v("DO")]),e._v(" encrypt data at rest")]),o("li",[o("strong",[e._v("DO")]),e._v(" use advanced media-type analysis")]),o("li",[o("strong",[e._v("DO")]),e._v(" use ClamAV to detect infected files")]),o("li",[o("strong",[e._v("DO")]),e._v(" undertake regular system maintenance")]),o("li",[o("strong",[e._v("DO")]),e._v(" remove old ciphers from permitted / available types")]),o("li",[o("strong",[e._v("DO")]),e._v(" protect users with CSP headers")])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Organizational-%26-Repository-Security"},on:{click:function(t){return e.copyHeading("Organizational-%26-Repository-Security")}}},[e._v("Organizational & Repository Security")]),o("p",[e._v("This is something that every team should have on their radar and put some thought into. "),o("strong",[e._v("DO")]),e._v(" consider who has access to your repositories, how commits are merged and how assets are published. Here are some good things to remember:")]),o("ul",[o("li",[o("strong",[e._v("DON’T")]),e._v(" put sensitive data in your source code")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" ignore "),o("code",{staticClass:"doc-token"},[e._v("yarn audit")]),e._v(" or "),o("code",{staticClass:"doc-token"},[e._v("npm audit")]),e._v(" reports")]),o("li",[o("strong",[e._v("DON’T")]),e._v(" blindly rely on third-party services")]),o("li",[o("strong",[e._v("DO")]),e._v(" require a review before merging to master")]),o("li",[o("strong",[e._v("DO")]),e._v(" require 2FA for reviewers / code committers")]),o("li",[o("strong",[e._v("DO")]),e._v(" require signed commits")]),o("li",[o("strong",[e._v("DO")]),e._v(" take GitHub Security Warnings seriously")]),o("li",[o("strong",[e._v("DO")]),e._v(" undertake deep code reviews")]),o("li",[o("strong",[e._v("DO")]),e._v(" review critical third-party libraries, especially any working with real files")]),o("li",[o("strong",[e._v("DO")]),e._v(" pin versions of critical libraries")]),o("li",[o("strong",[e._v("DO")]),e._v(" commit package lock files")]),o("li",[o("strong",[e._v("DO")]),e._v(" Add "),o("code",{staticClass:"doc-token"},[e._v(".env")]),e._v(" files to your "),o("code",{staticClass:"doc-token"},[e._v(".gitignore")])])]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Get-Help!"},on:{click:function(t){return e.copyHeading("Get-Help!")}}},[e._v("Get Help!")]),o("p",[e._v("Please "),o("doc-link",{attrs:{to:"/security/get-help"}},[e._v("read more")]),e._v(" on how our team of experts can help you.")],1),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Final-Note"},on:{click:function(t){return e.copyHeading("Final-Note")}}},[e._v("Final Note")]),o("p",[e._v("Security is not peace of mind, it is a practical application of knowledge that requires vigilance and awareness. "),o("strong",[e._v("DON’T")]),e._v(" stop being concerned about security and "),o("strong",[e._v("DON’T")]),e._v(" think you are doing enough. There is always more you can undertake, there are constantly new vulnerabilities to be aware of. But the biggest security threat of them all is laziness, so put your outside shoes on, scroll back up the page and "),o("strong",[e._v("DO")]),e._v(" read the "),o("doc-link",{attrs:{to:"/security/dos-and-donts#User-Input-and-the-Dangers-of-v-html"}},[e._v("OWASP link about XSS")]),e._v(". We won’t tell anybody.")],1)])},s=[],a=o("8669"),n="Security DO's and DON'Ts | Quasar Framework",r="The list of Quasar security recommendations.",c={meta:{title:"Security DO's and DON'Ts",meta:{title:{name:"title",content:n},ogTitle:{name:"og:title",content:n},twitterTitle:{name:"twitter:title",content:n},description:{name:"description",content:r},ogDesc:{name:"og:description",content:r},twitterDesc:{name:"twitter:description",content:r}}},preFetch:function(e){var t=e.store;t.commit("updateToc",[{id:"Vue-Security-Risks",title:"Vue Security Risks"},{id:"User-Input-and-the-Dangers-of-v-html",title:"User Input and the Dangers of v-html",sub:!0},{id:"vue-i18n",title:"vue-i18n",sub:!0},{id:"eval()",title:"eval()",sub:!0},{id:"Quasar-Components",title:"Quasar Components"},{id:"QSelect",title:"QSelect",sub:!0},{id:"QChat-%26-Emoji",title:"QChat & Emoji",sub:!0},{id:"Loading",title:"Loading",sub:!0},{id:"Notify",title:"Notify",sub:!0},{id:"Dialog",title:"Dialog",sub:!0},{id:"QInput",title:"QInput",sub:!0},{id:"QEditor",title:"QEditor",sub:!0},{id:"Dealing-with-Files",title:"Dealing with Files"},{id:"Images",title:"Images",sub:!0},{id:"Archives",title:"Archives",sub:!0},{id:"Passwords",title:"Passwords"},{id:"Cryptography",title:"Cryptography"},{id:"Distribution",title:"Distribution"},{id:"Web",title:"Web",sub:!0},{id:"Cordova",title:"Cordova",sub:!0},{id:"Electron",title:"Electron",sub:!0},{id:"SSR",title:"SSR",sub:!0},{id:"Environmental-Safety",title:"Environmental Safety"},{id:"Operational-Security",title:"Operational Security",sub:!0},{id:"Organizational-%26-Repository-Security",title:"Organizational & Repository Security",sub:!0},{id:"Get-Help!",title:"Get Help!"},{id:"Final-Note",title:"Final Note"}])},created:function(){this.nav=[{name:"Global Event Bus",category:"Quasar Options & Helpers",path:"/options/global-event-bus",dir:"left"},{name:"Report a vulnerability",category:"Security",path:"/security/report-a-vulnerability",dir:"right"}]},methods:{copyHeading:a["a"]}},l=c,d=o("2877"),u=Object(d["a"])(l,i,s,!1,null,null,null);t["default"]=u.exports}}]);