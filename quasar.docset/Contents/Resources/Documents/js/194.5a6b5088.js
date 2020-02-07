(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[194],{e5a4:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("doc-page",{attrs:{title:"CSS Visibility",nav:t.nav}},[o("p",[t._v("There are some CSS classes that you can use out of the box for common functionality.")]),o("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Class Name")]),o("th",{staticClass:"text-left"},[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("disabled")])]),o("td",[t._v("Cursor is changed to notify a ‘disable’ and opacity is set to a lower value.")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("hidden")])]),o("td",[t._v("Set "),o("code",{staticClass:"doc-token"},[t._v("display")]),t._v(" to "),o("code",{staticClass:"doc-token"},[t._v("none")]),t._v(". Compare with below - the class "),o("code",{staticClass:"doc-token"},[t._v("hidden")]),t._v(" means the element will not show "),o("em",[t._v("and")]),t._v(" will not take up space in the layout.")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("invisible")])]),o("td",[t._v("Set "),o("code",{staticClass:"doc-token"},[t._v("visibility")]),t._v(" to "),o("code",{staticClass:"doc-token"},[t._v("hidden")]),t._v(". Compare with above - the class "),o("code",{staticClass:"doc-token"},[t._v("invisible")]),t._v(" means the element will not show, but it will still take up space in the layout.")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("transparent")])]),o("td",[t._v("Background color is transparent.")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("dimmed")])]),o("td",[t._v("Apply dark transparent overlay on top of your element. Do not use on elements which already have "),o("strong",[t._v(":after")]),t._v(" pseudoelement.")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("light-dimmed")])]),o("td",[t._v("Apply white transparent overlay on top of your element. Do not use on elements which already have "),o("strong",[t._v(":after")]),t._v(" pseudoelement.")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("ellipsis")])]),o("td",[t._v("Truncates text and shows ellipsis when not enough space available.")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("ellipsis-2-lines")])]),o("td",[t._v("Truncates text and shows ellipsis when not enough space available on two lines (works only on Webkit browsers).")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("ellipsis-3-lines")])]),o("td",[t._v("Truncates text and shows ellipsis when not enough space available on three lines (works only on Webkit browsers).")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("z-top")])]),o("td",[t._v("Positions your element on top of any other component, but behind Popovers, Tooltips, Notifications.")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("z-max")])]),o("td",[t._v("Positions your element on top of any other component (including Drawer, Modals, Notifications, Layout header/footer, …)")])])])]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Window-Width-Related"},on:{click:function(e){return t.copyHeading("Window-Width-Related")}}},[t._v("Window Width Related")]),o("p",[t._v("First of all, let’s define what the breakpoints are:")]),o("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Window Size")]),o("th",{staticClass:"text-left"},[t._v("Prefix")]),o("th",{staticClass:"text-left"},[t._v("Width threshold in pixels")])])]),o("tbody",[o("tr",[o("td",[t._v("Extra Small")]),o("td",[t._v("xs")]),o("td",[t._v("Up to 599px")])]),o("tr",[o("td",[t._v("Small")]),o("td",[t._v("sm")]),o("td",[t._v("Up to 1023px")])]),o("tr",[o("td",[t._v("Medium")]),o("td",[t._v("md")]),o("td",[t._v("Up to 1439px")])]),o("tr",[o("td",[t._v("Large")]),o("td",[t._v("lg")]),o("td",[t._v("Up to 1919px")])]),o("tr",[o("td",[t._v("Extra Large")]),o("td",[t._v("xl")]),o("td",[t._v("Bigger than 1920px")])])])]),o("p",[t._v("Now on to the window width related CSS classes.")]),o("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Class Name")]),o("th",{staticClass:"text-left"},[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("xs")])]),o("td",[t._v("Display only on extra small windows")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("sm")])]),o("td",[t._v("Display only on small windows")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("md")])]),o("td",[t._v("Display only on medium-sized windows")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("lg")])]),o("td",[t._v("Display only on large windows")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("xl")])]),o("td",[t._v("Display only on extra large windows")])])])]),o("p",[t._v("You can also show some DOM element or component "),o("strong",[t._v("if it’s lower than one of the sizes")]),t._v(". "),o("strong",[t._v("Same for greater than one of the sizes")]),t._v(". Just attach "),o("code",{staticClass:"doc-token"},[t._v("lt-")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("gt-")]),t._v(" prefixes, which come from “lower than” and “greater than”. Example: "),o("code",{staticClass:"doc-token"},[t._v("lt-md")]),t._v(" (display on xs and sm only), "),o("code",{staticClass:"doc-token"},[t._v("lt-xl")]),t._v(" (display on xs, sm, md and lg windows only), "),o("code",{staticClass:"doc-token"},[t._v("gt-md")]),t._v(" (display on greater than medium windows: lg and xl).")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[t._v("TIP")]),o("p",[t._v("You can combine the visibility classes with the "),o("code",{staticClass:"doc-token"},[t._v("inline")]),t._v(" class for inline-blocks.")]),o("p",[t._v("Example: "),o("code",{staticClass:"doc-token"},[t._v('<span class="gt-sm inline">...</span>')])])]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Platform-Related"},on:{click:function(e){return t.copyHeading("Platform-Related")}}},[t._v("Platform Related")]),o("p",[t._v("Visible only on:")]),o("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Class Name")]),o("th",{staticClass:"text-left"},[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("desktop-only")])]),o("td",[t._v("Visible only on desktop")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("mobile-only")])]),o("td",[t._v("Visible only on mobile")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("native-mobile-only")])]),o("td",[t._v("Visible only on Cordova/Capacitor")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("cordova-only")])]),o("td",[t._v("Visible only on Cordova wrapped Apps")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("capacitor-only")])]),o("td",[t._v("Visible only on Cordova wrapped Apps")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("electron-only")])]),o("td",[t._v("Visible only on Electron wrapped Apps")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("touch-only")])]),o("td",[t._v("Visible only on touch capable platforms")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("platform-ios-only")])]),o("td",[t._v("Visible only on an iOS platform")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("platform-android-only")])]),o("td",[t._v("Visible only on an Android platform")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("within-iframe-only")])]),o("td",[t._v("Visible only when entire website is under an IFRAME tag")])])])]),o("p",[t._v("Hide on:")]),o("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Class Name")]),o("th",{staticClass:"text-left"},[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("desktop-hide")])]),o("td",[t._v("Hide on desktop")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("mobile-hide")])]),o("td",[t._v("Hide on mobile")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("native-mobile-hide")])]),o("td",[t._v("Hide on Cordova/Capacitor")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("cordova-hide")])]),o("td",[t._v("Hide on Cordova wrapped Apps")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("capacitor-hide")])]),o("td",[t._v("Hide on Cordova wrapped Apps")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("electron-hide")])]),o("td",[t._v("Hide on Electron wrapped Apps")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("touch-hide")])]),o("td",[t._v("Hide on touch capable platforms")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("platform-ios-hide")])]),o("td",[t._v("Hide on iOS platform")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("platform-android-hide")])]),o("td",[t._v("Hide on Android platform")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("within-iframe-hide")])]),o("td",[t._v("Hide only when entire website is under an IFRAME tag")])])])]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[t._v("TIP")]),o("p",[t._v("Based on your needs, you might want to also check "),o("doc-link",{attrs:{to:"/options/platform-detection"}},[t._v("Platform Detection")]),t._v(" page to see how you can achieve the same effect using Javascript. This latter method allows you to not even render a DOM element or component. It is useful when the rendering process is expensive.")],1)]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Orientation-Related"},on:{click:function(e){return t.copyHeading("Orientation-Related")}}},[t._v("Orientation Related")]),o("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Class Name")]),o("th",{staticClass:"text-left"},[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("orientation-portrait")])]),o("td",[t._v("Visible only when screen orientation is "),o("em",[t._v("Portrait")])])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("orientation-landscape")])]),o("td",[t._v("Visible only when screen orientation is "),o("em",[t._v("Landscape")])])])])]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Printing-Related"},on:{click:function(e){return t.copyHeading("Printing-Related")}}},[t._v("Printing Related")]),o("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Class Name")]),o("th",{staticClass:"text-left"},[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("print-only")])]),o("td",[t._v("Visible only on print media - hidden on "),o("em",[t._v("screen")]),t._v(" media")])]),o("tr",[o("td",[o("code",{staticClass:"doc-token"},[t._v("print-hide")])]),o("td",[t._v("Visible on "),o("em",[t._v("screen")]),t._v(" media - hidden on "),o("em",[t._v("print")]),t._v(" media")])])])])],1)},a=[],i=o("8669"),d="CSS Visibility | Quasar Framework",n="The list of CSS classes supplied by Quasar to manage responsiveness and visibility of components and DOM elements.",l={meta:{title:"CSS Visibility",meta:{title:{name:"title",content:d},ogTitle:{name:"og:title",content:d},twitterTitle:{name:"twitter:title",content:d},description:{name:"description",content:n},ogDesc:{name:"og:description",content:n},twitterDesc:{name:"twitter:description",content:n}}},preFetch:function(t){var e=t.store;e.commit("updateToc",[{id:"Window-Width-Related",title:"Window Width Related"},{id:"Platform-Related",title:"Platform Related"},{id:"Orientation-Related",title:"Orientation Related"},{id:"Printing-Related",title:"Printing Related"}])},created:function(){this.nav=[{name:"Body classes",category:"Style & Identity",path:"/style/body-classes",dir:"left"},{name:"Positioning",category:"Style & Identity",path:"/style/positioning",dir:"right"}]},methods:{copyHeading:i["a"]}},c=l,r=o("2877"),v=Object(r["a"])(c,s,a,!1,null,null,null);e["default"]=v.exports}}]);