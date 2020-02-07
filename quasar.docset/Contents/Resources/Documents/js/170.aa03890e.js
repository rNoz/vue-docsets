(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[170],{"390f":function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("doc-page",{attrs:{title:"Scrolling Utils",nav:t.nav}},[n("div",{staticClass:"doc-note doc-note--tip"},[n("p",{staticClass:"doc-note__title"},[t._v("TIP")]),n("p",[t._v("For usage with the UMD build see "),n("doc-link",{attrs:{to:"/start/umd#Quasar-Global-Object"}},[t._v("here")]),t._v(".")],1)]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Determine-scrolling-container"},on:{click:function(s){return t.copyHeading("Determine-scrolling-container")}}},[t._v("Determine scrolling container")]),n("p",[t._v("Might be worthwhile to read how this is done "),n("doc-link",{attrs:{to:"/vue-components/scroll-observer#Determining-Scrolling-Container"}},[t._v("here")]),t._v(".")],1),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scroll "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getScrollTarget "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scroll\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get parent DomNode that handles page scrolling")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Usually this is element with classname ".layout-view" or "window"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v(" Element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrollTarget")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DomElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("p",[t._v("This method searches for a parent DOM element which has one of the "),n("code",{staticClass:"doc-token"},[t._v("scroll")]),t._v(" or "),n("code",{staticClass:"doc-token"},[t._v("overflow-auto")]),t._v(" Quasar CSS Helper class attached to it. If none is found, then it considers that the scrolling takes place on the document itself.")]),n("p",[t._v("Please note that simply attaching "),n("code",{staticClass:"doc-token"},[t._v("scroll")]),t._v(" CSS class to a DOM element or on a Vue component will have no effect if the respective element is not overflowed (example, with: CSS "),n("code",{staticClass:"doc-token"},[t._v("overflow: hidden")]),t._v(" and a height smaller than its inner content height).")]),n("p",[t._v("Example of good container:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n  Quasar CSS helper 'overflow-hidden' is\n  equivalent to style=\"overflow: hidden\"\n--\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scroll overflow-hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...content expanding over the 100px height from container...\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Get%2Fset-scroll-position"},on:{click:function(s){return t.copyHeading("Get%2Fset-scroll-position")}}},[t._v("Get/set scroll position")]),n("p",[t._v("Vertically:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scroll "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getScrollPosition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setScrollPosition "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scroll\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get scroll position of a element or page.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use it in conjunction with `getScrollTarget()`")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number pixels"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrollPosition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollTargetDomElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Setting scroll position of an element or page:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setScrollPosition")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollTargetElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// if "duration" is specified then it will animate the scrolling')]),t._v("\n")])]),n("p",[t._v("Horizontally:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scroll "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getHorizontalScrollPosition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setHorizontalScrollPosition "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scroll\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get scroll position of a element or page.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use it in conjunction with `getScrollTarget()`")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number pixels"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHorizontalScrollPosition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollTargetDomElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Setting scroll position of an element or page:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHorizontalScrollPosition")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollTargetElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// if "duration" is specified then it will animate the scrolling')]),t._v("\n")])]),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Scrolling-to-an-element"},on:{click:function(s){return t.copyHeading("Scrolling-to-an-element")}}},[t._v("Scrolling to an element")]),n("p",[t._v("Below is an example using the scroll utils to scroll to an element within its container. It does not take into consideration if the container is on screen or more complex cases.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scroll "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getScrollTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setScrollPosition "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scroll\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// takes an element object")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollToElement")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrollTarget")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" offset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" duration "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setScrollPosition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Determine-scroll-size"},on:{click:function(s){return t.copyHeading("Determine-scroll-size")}}},[t._v("Determine scroll size")]),n("p",[t._v("Vertically:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scroll "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getScrollHeight "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scroll\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get scrolling container inner height")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrollHeight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollTargetDomElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrollHeight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 824 (it's in pixels always)")]),t._v("\n")])]),n("p",[t._v("Horizontally:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scroll "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getScrollWidth "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scroll\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get scrolling container inner height")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrollWidth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollTargetDomElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrollWidth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 824 (it's in pixels always)")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Determining-scrollbar-width"},on:{click:function(s){return t.copyHeading("Determining-scrollbar-width")}}},[t._v("Determining scrollbar width")]),n("p",[t._v("Computes the width of scrollbar in pixels.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scroll "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getScrollbarWidth "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scroll\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScrollbarWidth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 16 (it's in pixels)")]),t._v("\n")])])])},a=[],o=n("8669"),r="Scrolling Utils | Quasar Framework",c="A set of Quasar methods related to scrolling, like getting scroll target or changing the scroll position of a page.",p={meta:{title:"Scrolling Utils",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},preFetch:function(t){var s=t.store;s.commit("updateToc",[{id:"Determine-scrolling-container",title:"Determine scrolling container"},{id:"Get%2Fset-scroll-position",title:"Get/set scroll position"},{id:"Scrolling-to-an-element",title:"Scrolling to an element",sub:!0},{id:"Determine-scroll-size",title:"Determine scroll size"},{id:"Determining-scrollbar-width",title:"Determining scrollbar width"}])},created:function(){this.nav=[{name:"Formatter Utils",category:"Quasar Utils",path:"/quasar-utils/formatter-utils",dir:"left"},{name:"Other Utils",category:"Quasar Utils",path:"/quasar-utils/other-utils",dir:"right"}]},methods:{copyHeading:o["a"]}},l=p,i=n("2877"),_=Object(i["a"])(l,e,a,!1,null,null,null);s["default"]=_.exports}}]);