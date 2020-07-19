(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[244],{"49b8":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("doc-page",{attrs:{title:"Select",nav:e.nav}},[o("p",[e._v("The QSelect component has two types of selection: single or multiple. This component opens up a menu for the selection list and action. A filter can also be used for longer lists.")]),o("p",[e._v("In case you are looking for a dropdown “button” instead of “input” use "),o("doc-link",{attrs:{to:"/vue-components/button-dropdown"}},[e._v("Button Dropdown")]),e._v(" instead.")],1),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(t){return e.copyHeading("Installation")}}},[e._v("Installation")]),o("doc-installation",{attrs:{components:"QSelect"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Design"},on:{click:function(t){return e.copyHeading("Design")}}},[e._v("Design")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Overview"},on:{click:function(t){return e.copyHeading("Overview")}}},[e._v("Overview")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("For your QSelect you can use only one of the main designs ("),o("code",{staticClass:"doc-token"},[e._v("filled")]),e._v(", "),o("code",{staticClass:"doc-token"},[e._v("outlined")]),e._v(", "),o("code",{staticClass:"doc-token"},[e._v("standout")]),e._v(", "),o("code",{staticClass:"doc-token"},[e._v("borderless")]),e._v("). You cannot use multiple as they are self-exclusive.")])]),o("doc-example",{attrs:{title:"Design Overview",file:"QSelect/DesignOverview"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Decorators"},on:{click:function(t){return e.copyHeading("Decorators")}}},[e._v("Decorators")]),o("doc-example",{attrs:{title:"Decorators",file:"QSelect/Decorators"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Coloring"},on:{click:function(t){return e.copyHeading("Coloring")}}},[e._v("Coloring")]),o("doc-example",{attrs:{title:"Coloring",file:"QSelect/Coloring"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Clearable"},on:{click:function(t){return e.copyHeading("Clearable")}}},[e._v("Clearable")]),o("p",[e._v("As a helper, you can use "),o("code",{staticClass:"doc-token"},[e._v("clearable")]),e._v(" prop so user can reset model to "),o("code",{staticClass:"doc-token"},[e._v("null")]),e._v(" through an appended icon. The second QSelect in the example below is the equivalent of using "),o("code",{staticClass:"doc-token"},[e._v("clearable")]),e._v(".")]),o("doc-example",{attrs:{title:"Clearable",file:"QSelect/Clearable"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Disable-and-readonly"},on:{click:function(t){return e.copyHeading("Disable-and-readonly")}}},[e._v("Disable and readonly")]),o("doc-example",{attrs:{title:"Disable and readonly",file:"QSelect/DisableReadonly"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Slots-with-QBtn-type-%E2%80%9Csubmit%E2%80%9D"},on:{click:function(t){return e.copyHeading("Slots-with-QBtn-type-%E2%80%9Csubmit%E2%80%9D")}}},[e._v("Slots with QBtn type “submit”")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("When placing a QBtn with type “submit” in one of the “before”, “after”, “prepend”, or “append” slots of a QField, QInput or QSelect, you should also add a "),o("code",{staticClass:"doc-token"},[e._v("@click")]),e._v(" listener on the QBtn in question. This listener should call the method that submits your form. All “click” events in such slots are not propagated to their parent elements.")])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Menu-transitions"},on:{click:function(t){return e.copyHeading("Menu-transitions")}}},[e._v("Menu transitions")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("Please note that transitions do not work when using "),o("code",{staticClass:"doc-token"},[e._v("options-cover")]),e._v(" prop.")])]),o("p",[e._v("In the example below there’s a few transitions showcased. For a full list of transitions available, go to "),o("doc-link",{attrs:{to:"/options/transitions"}},[e._v("Transitions")]),e._v(".")],1),o("doc-example",{attrs:{title:"Menu transitions",file:"QSelect/MenuTransitions"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Options-list-display-mode"},on:{click:function(t){return e.copyHeading("Options-list-display-mode")}}},[e._v("Options list display mode")]),o("p",[e._v("By default QSelect shows the list of options as a menu on desktop and as a dialog on mobiles. You can force one behavior by using the "),o("code",{staticClass:"doc-token"},[e._v("behavior")]),e._v(" property.")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("Please note that on iOS menu behavior might generate problems, especially when used in combination with "),o("code",{staticClass:"doc-token"},[e._v("use-input")]),e._v(" prop. You can use a conditional "),o("code",{staticClass:"doc-token"},[e._v("behavior")]),e._v(" prop like "),o("code",{staticClass:"doc-token"},[e._v(":behavior=\"$q.platform.is.ios === true ? 'dialog' : 'menu'\"")]),e._v(" to use dialog mode only on iOS.")])]),o("doc-example",{attrs:{title:"Show options in menu",file:"QSelect/BehaviorMenu"}}),o("doc-example",{attrs:{title:"Show options in dialog",file:"QSelect/BehaviorDialog"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"The-model"},on:{click:function(t){return e.copyHeading("The-model")}}},[e._v("The model")]),o("div",{staticClass:"doc-note doc-note--danger"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("The model for single selection can be anything (String, Object, …) while the model for multiple selection must be an Array.")])]),o("doc-example",{attrs:{title:"Single vs multiple selection",file:"QSelect/ModelSingleMultiple"}}),o("doc-example",{attrs:{title:"Multiple selection, counter and max-values",file:"QSelect/ModelMultipleCounter"}}),o("p",[e._v("The model content can be influenced by "),o("code",{staticClass:"doc-token"},[e._v("emit-value")]),e._v(" prop as you’ll learn in “The options” section below.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"The-options"},on:{click:function(t){return e.copyHeading("The-options")}}},[e._v("The options")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Options-type"},on:{click:function(t){return e.copyHeading("Options-type")}}},[e._v("Options type")]),o("doc-example",{attrs:{title:"String options",file:"QSelect/OptionString"}}),o("doc-example",{attrs:{title:"Object options",file:"QSelect/OptionObject"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Affecting-model"},on:{click:function(t){return e.copyHeading("Affecting-model")}}},[e._v("Affecting model")]),o("p",[e._v("When "),o("code",{staticClass:"doc-token"},[e._v("emit-value")]),e._v(" is used, the model becomes the determined "),o("code",{staticClass:"doc-token"},[e._v("value")]),e._v(" from the specified selected option. Default is to emit the whole option. It makes sense to use it only when the options are of Object form.")]),o("doc-example",{attrs:{title:"Emit-value",file:"QSelect/OptionEmitValue"}}),o("p",[e._v("When "),o("code",{staticClass:"doc-token"},[e._v("map-options")]),e._v(" is used, the model can contain only the "),o("code",{staticClass:"doc-token"},[e._v("value")]),e._v(", and it will be mapped against the options to determine its label. There is a performance penalty involved, so use it only if absolutely necessary. It’s not needed, for example, if the model contains the whole Object (so contains the label prop).")]),o("doc-example",{attrs:{title:"Map options",file:"QSelect/OptionMapOptions"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Custom-prop-names"},on:{click:function(t){return e.copyHeading("Custom-prop-names")}}},[e._v("Custom prop names")]),o("p",[e._v("By default, QSelect looks at "),o("code",{staticClass:"doc-token"},[e._v("label")]),e._v(", "),o("code",{staticClass:"doc-token"},[e._v("value")]),e._v(", "),o("code",{staticClass:"doc-token"},[e._v("disable")]),e._v(" and "),o("code",{staticClass:"doc-token"},[e._v("sanitize")]),e._v(" props of each option from the options array Objects. But you can override those:")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("If you use functions for custom props always check if the option is null. These functions are used both for options in the list and for the selected options.")])]),o("doc-example",{attrs:{title:"Custom label, value and disable props",file:"QSelect/OptionCustomProps"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Customizing-menu-options"},on:{click:function(t){return e.copyHeading("Customizing-menu-options")}}},[e._v("Customizing menu options")]),o("doc-example",{attrs:{title:"Options slot",file:"QSelect/OptionSlot"}}),o("p",[e._v("Here is another example where we add a QToggle to each option. The possibilities are endless.")]),o("doc-example",{attrs:{title:"Object options",file:"QSelect/OptionQToggle"}}),o("p",[e._v("By default, when there are no options, the menu won’t appear. But you can customize this scenario and specify what the menu should display.")]),o("doc-example",{attrs:{title:"No options slot",file:"QSelect/OptionNoneSlot"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Lazy-loading"},on:{click:function(t){return e.copyHeading("Lazy-loading")}}},[e._v("Lazy loading")]),o("p",[e._v("The following example shows a glimpse of how you can play with lazy loading the options. This means, along with many other things, that "),o("code",{staticClass:"doc-token"},[e._v("options")]),e._v(" prop is not required on first render.")]),o("doc-example",{attrs:{title:"Lazy load options",file:"QSelect/OptionLazyLoad"}}),o("p",[e._v("You can dynamically load new options when scroll reaches the end:")]),o("doc-example",{attrs:{title:"Dynamic loading options",file:"QSelect/OptionsDynamic"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Cover-mode"},on:{click:function(t){return e.copyHeading("Cover-mode")}}},[e._v("Cover mode")]),o("doc-example",{attrs:{title:"Menu covering component",file:"QSelect/OptionCover"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"The-display-value"},on:{click:function(t){return e.copyHeading("The-display-value")}}},[e._v("The display value")]),o("doc-example",{attrs:{title:"Custom display value",file:"QSelect/DisplayCustomValue"}}),o("doc-example",{attrs:{title:"Chips as display value",file:"QSelect/DisplayChips"}}),o("doc-example",{attrs:{title:"Selected-item slot",file:"QSelect/DisplaySelectedItemSlot"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Filtering-and-autocomplete"},on:{click:function(t){return e.copyHeading("Filtering-and-autocomplete")}}},[e._v("Filtering and autocomplete")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Native-attributes-with-use-input"},on:{click:function(t){return e.copyHeading("Native-attributes-with-use-input")}}},[e._v("Native attributes with "),o("code",{staticClass:"doc-token"},[e._v("use-input")])]),o("p",[e._v("All the attributes set on QSelect that are not in the list of props in the API will be passed to the native input field used (please check "),o("code",{staticClass:"doc-token"},[e._v("use-input")]),e._v(" prop description first to understand what it does) for filtering / autocomplete / adding new value. Some examples: autocomplete, placeholder.")]),o("p",[e._v("More information: "),o("doc-link",{attrs:{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"}},[e._v("native input attributes")]),e._v(".")],1),o("doc-example",{attrs:{title:"Filtering options",file:"QSelect/InputFilter"}}),o("doc-example",{attrs:{title:"Basic autocomplete",file:"QSelect/InputAutocomplete"}}),o("doc-example",{attrs:{title:"Autocomplete on more than 2 chars",file:"QSelect/InputFilterMin"}}),o("doc-example",{attrs:{title:"Lazy autocomplete",file:"QSelect/InputFilterLazy"}}),o("doc-example",{attrs:{title:"Selecting option after filtering",file:"QSelect/InputFilterAfter"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Create-new-values"},on:{click:function(t){return e.copyHeading("Create-new-values")}}},[e._v("Create new values")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIP")]),o("p",[e._v("The following are just a few examples to get you started into making your own QSelect behavior. This is not exhaustive list of possibilities that QSelect offers.")]),o("p",[e._v("It makes sense to use this feature along with "),o("code",{staticClass:"doc-token"},[e._v("use-input")]),e._v(" prop.")])]),o("p",[e._v("In order to enable the creation of new values, you need to "),o("strong",[e._v("either specify")]),e._v(" the "),o("code",{staticClass:"doc-token"},[e._v("new-value-mode")]),e._v(" prop "),o("strong",[e._v("and/or")]),e._v(" listen for "),o("code",{staticClass:"doc-token"},[e._v("@new-value")]),e._v(" event. If you use both, then the purpose of listening to "),o("code",{staticClass:"doc-token"},[e._v("@new-value")]),e._v(" would be only to override the "),o("code",{staticClass:"doc-token"},[e._v("new-value-mode")]),e._v(" in your custom scenarios.")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"The-new-value-mode-prop"},on:{click:function(t){return e.copyHeading("The-new-value-mode-prop")}}},[e._v("The new-value-mode prop")]),o("p",[e._v("The "),o("code",{staticClass:"doc-token"},[e._v("new-value-mode")]),e._v(" prop value specifies how the value should be added: "),o("code",{staticClass:"doc-token"},[e._v("add")]),e._v(" (adds a value, even if duplicate), "),o("code",{staticClass:"doc-token"},[e._v("add-unique")]),e._v(" (add only if NOT duplicate) or "),o("code",{staticClass:"doc-token"},[e._v("toggle")]),e._v(" (adds value if it’s not already in model, otherwise it removes it).")]),o("p",[e._v("By using this prop you don’t need to also listen for "),o("code",{staticClass:"doc-token"},[e._v("@new-value")]),e._v(" event, unless you have some specific scenarios for which you want to override the behavior.")]),o("doc-example",{attrs:{title:"New value mode",file:"QSelect/CreateNewValueMode"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"The-%40new-value-event"},on:{click:function(t){return e.copyHeading("The-%40new-value-event")}}},[e._v("The @new-value event")]),o("p",[e._v("The "),o("code",{staticClass:"doc-token"},[e._v("@new-value")]),e._v(" event is emitted with the value to be added and a "),o("code",{staticClass:"doc-token"},[e._v("done")]),e._v(" callback. The "),o("code",{staticClass:"doc-token"},[e._v("done")]),e._v(" callback has two "),o("strong",[e._v("optional")]),e._v(" parameters:")]),o("ul",[o("li",[e._v("the value to be added")]),o("li",[e._v("the behavior (same values of "),o("code",{staticClass:"doc-token"},[e._v("new-value-mode")]),e._v(" prop, and when it is specified it overrides that prop – if it is used) – default behavior (if not using "),o("code",{staticClass:"doc-token"},[e._v("new-value-mode")]),e._v(") is to add the value even if it would be a duplicate")])]),o("p",[e._v("Calling "),o("code",{staticClass:"doc-token"},[e._v("done()")]),e._v(" with no parameters simply empties the input box value, without tampering with the model in any way.")]),o("doc-example",{attrs:{title:"Listening on @new-value",file:"QSelect/CreateListener"}}),o("doc-example",{attrs:{title:"Adding only unique values",file:"QSelect/CreateListenerUnique"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Using-menu-and-filtering"},on:{click:function(t){return e.copyHeading("Using-menu-and-filtering")}}},[e._v("Using menu and filtering")]),o("p",[e._v("Filtering and adding the new values to menu:")]),o("doc-example",{attrs:{title:"Filtering and adding to menu",file:"QSelect/FilteringAddsToMenu"}}),o("p",[e._v("Filters new values (in the example below the value to be added requires at least 3 characters to pass), and does not add to menu:")]),o("doc-example",{attrs:{title:"Filtering without adding to menu",file:"QSelect/FilteringNoAddToMenu"}}),o("p",[e._v("Generating multiple values from input:")]),o("doc-example",{attrs:{title:"Generating multiple values",file:"QSelect/FilteringAddMultiple"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Sanitization"},on:{click:function(t){return e.copyHeading("Sanitization")}}},[e._v("Sanitization")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("Always sanitize values if you do not trust the origin (if the value comes from user input).")])]),o("p",[e._v("You can force sanitization of the menu options by:")]),o("ul",[o("li",[e._v("setting "),o("code",{staticClass:"doc-token"},[e._v("sanitize")]),e._v(" key of the untrusted option to "),o("code",{staticClass:"doc-token"},[e._v("true")]),e._v(" (for specific untrusted options)")]),o("li",[e._v("or by setting "),o("code",{staticClass:"doc-token"},[e._v("options-sanitize")]),e._v(" prop of QSelect (for all options)")])]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("If you use "),o("code",{staticClass:"doc-token"},[e._v("option")]),e._v(" slot, then you are responsible for sanitization of the menu options. The "),o("code",{staticClass:"doc-token"},[e._v("options-sanitize")]),e._v(" prop will not apply.")])]),o("p",[e._v("The displayed value of QSelect is sanitized if:")]),o("ul",[o("li",[e._v("the "),o("code",{staticClass:"doc-token"},[e._v("display-value-sanitize")]),e._v(" prop of QSelect is set")]),o("li",[e._v("or you are not using "),o("code",{staticClass:"doc-token"},[e._v("display-value")]),e._v(" and\n"),o("ul",[o("li",[e._v("the "),o("code",{staticClass:"doc-token"},[e._v("options-sanitize")]),e._v(" prop of QSelect is set")]),o("li",[e._v("any selected option has "),o("code",{staticClass:"doc-token"},[e._v("sanitize")]),e._v(" key set to "),o("code",{staticClass:"doc-token"},[e._v("true")])])])])]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("If you use "),o("code",{staticClass:"doc-token"},[e._v("selected")]),e._v(" or "),o("code",{staticClass:"doc-token"},[e._v("selected-item")]),e._v(" slots, then you are responsible for sanitization of the display value. The "),o("code",{staticClass:"doc-token"},[e._v("display-value-sanitize")]),e._v(" prop will not apply.")])]),o("doc-example",{attrs:{title:"Sanitize options",file:"QSelect/SanitizeOptions"}}),o("doc-example",{attrs:{title:"Sanitize display value",file:"QSelect/SanitizeDisplayCustomValue"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Render-performance"},on:{click:function(t){return e.copyHeading("Render-performance")}}},[e._v("Render performance")]),o("p",[e._v("The render performance is NOT affected much by the number of options, unless "),o("code",{staticClass:"doc-token"},[e._v("map-options")]),e._v(" is used on a large set.\nNotice the infinite scroll in place which renders additional options as the user scrolls through the list.")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIP")]),o("p",[e._v("To get the best performance while using lots of options freeze the array you are passing in the "),o("code",{staticClass:"doc-token"},[e._v("options")]),e._v(" prop using "),o("code",{staticClass:"doc-token"},[e._v("Object.freeze(options)")]),e._v(".")])]),o("doc-example",{attrs:{title:"100k options",file:"QSelect/RenderPerf"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Keyboard-navigation"},on:{click:function(t){return e.copyHeading("Keyboard-navigation")}}},[e._v("Keyboard navigation")]),o("p",[e._v("When QSelect is focused:")]),o("ul",[o("li",[e._v("pressing "),o("kbd",[e._v("ENTER")]),e._v(", "),o("kbd",[e._v("ARROW DOWN")]),e._v(" (or "),o("kbd",[e._v("SPACE")]),e._v(" if "),o("code",{staticClass:"doc-token"},[e._v("use-input")]),e._v(" is not set) will open the list of options")]),o("li",[e._v("if "),o("code",{staticClass:"doc-token"},[e._v("use-chips")]),e._v(" is set:\n"),o("ul",[o("li",[e._v("pressing "),o("kbd",[e._v("SHIFT")]),e._v(" + "),o("kbd",[e._v("TAB")]),e._v(" will navigate backwards through the QChips (if a QChip is selected "),o("kbd",[e._v("TAB")]),e._v(" will navigate forward through the QChips)")]),o("li",[e._v("pressing "),o("kbd",[e._v("ENTER")]),e._v(" when a QChip is selected will remove that option from the selection")]),o("li",[e._v("pressing "),o("kbd",[e._v("BACKSPACE")]),e._v(" will remove the last option from the selection (when "),o("code",{staticClass:"doc-token"},[e._v("use-input")]),e._v(" is set the input should be empty)")])])]),o("li",[e._v("pressing "),o("kbd",[e._v("TAB")]),e._v(" (or "),o("kbd",[e._v("SHIFT")]),e._v(" + "),o("kbd",[e._v("TAB")]),e._v(" if "),o("code",{staticClass:"doc-token"},[e._v("use-chips")]),e._v(" is not set or the first QChip is selected) will navigate to the next or previous focusable element on page")]),o("li",[e._v("typing text ("),o("kbd",[e._v("0")]),e._v(" - "),o("kbd",[e._v("9")]),e._v(" or "),o("kbd",[e._v("A")]),e._v(" - "),o("kbd",[e._v("Z")]),e._v(") if "),o("code",{staticClass:"doc-token"},[e._v("use-input")]),e._v(" is not set will:\n"),o("ul",[o("li",[e._v("create a search buffer (will be reset when a new key is not typed for 1.5 seconds) that will be used to search in the options labels")]),o("li",[e._v("select the next option starting with that letter (after the current focused one) if the first key in buffer is typed multiple times")]),o("li",[e._v("select the next option (starting with the current focused one) that matches the typed text (the match is fuzzy - the option label should start with the first letter and contain all the letters)")])])])]),o("p",[e._v("When the list of options is opened:")]),o("ul",[o("li",[e._v("pressing "),o("kbd",[e._v("ARROW UP")]),e._v(" or "),o("kbd",[e._v("ARROW DOWN")]),e._v(" will navigate up or down in the list of options")]),o("li",[e._v("when navigating using arrow keys, navigation will wrap when reaching the start or end of the list")]),o("li",[e._v("pressing "),o("kbd",[e._v("ENTER")]),e._v(" (or "),o("kbd",[e._v("SPACE")]),e._v(" when "),o("code",{staticClass:"doc-token"},[e._v("use-input")]),e._v(" is not set, or "),o("kbd",[e._v("TAB")]),e._v(" when "),o("code",{staticClass:"doc-token"},[e._v("multiple")]),e._v(" is not set) when an option is selected in the list will:\n"),o("ul",[o("li",[e._v("select the option and close the list of options if "),o("code",{staticClass:"doc-token"},[e._v("multiple")]),e._v(" is not set")]),o("li",[e._v("toggle the option if "),o("code",{staticClass:"doc-token"},[e._v("multiple")]),e._v(" is set")])])])]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QSelect-API"},on:{click:function(t){return e.copyHeading("QSelect-API")}}},[e._v("QSelect API")]),o("doc-api",{attrs:{file:"QSelect"}})],1)},n=[],s=o("8669"),a="Select | Quasar Framework",l="The QSelect Vue component has two types of selection - single or multiple. This component opens up a menu for the selection list and action. A filter can also be used for longer lists.",c={meta:{title:"Select",meta:{title:{name:"title",content:a},ogTitle:{name:"og:title",content:a},twitterTitle:{name:"twitter:title",content:a},description:{name:"description",content:l},ogDesc:{name:"og:description",content:l},twitterDesc:{name:"twitter:description",content:l}}},preFetch:function(e){var t=e.store;t.commit("updateToc",[{id:"Installation",title:"Installation"},{id:"Design",title:"Design"},{id:"Overview",title:"Overview",sub:!0},{id:"Decorators",title:"Decorators",sub:!0},{id:"Coloring",title:"Coloring",sub:!0},{id:"Clearable",title:"Clearable",sub:!0},{id:"Disable-and-readonly",title:"Disable and readonly",sub:!0},{id:"Slots-with-QBtn-type-%E2%80%9Csubmit%E2%80%9D",title:"Slots with QBtn type “submit”",sub:!0},{id:"Menu-transitions",title:"Menu transitions",sub:!0},{id:"Options-list-display-mode",title:"Options list display mode",sub:!0},{id:"The-model",title:"The model"},{id:"The-options",title:"The options"},{id:"Options-type",title:"Options type",sub:!0},{id:"Affecting-model",title:"Affecting model",sub:!0},{id:"Custom-prop-names",title:"Custom prop names",sub:!0},{id:"Customizing-menu-options",title:"Customizing menu options",sub:!0},{id:"Lazy-loading",title:"Lazy loading",sub:!0},{id:"Cover-mode",title:"Cover mode",sub:!0},{id:"The-display-value",title:"The display value"},{id:"Filtering-and-autocomplete",title:"Filtering and autocomplete"},{id:"Native-attributes-with-use-input",title:"Native attributes with use-input",sub:!0},{id:"Create-new-values",title:"Create new values"},{id:"The-new-value-mode-prop",title:"The new-value-mode prop",sub:!0},{id:"The-%40new-value-event",title:"The @new-value event",sub:!0},{id:"Using-menu-and-filtering",title:"Using menu and filtering",sub:!0},{id:"Sanitization",title:"Sanitization"},{id:"Render-performance",title:"Render performance"},{id:"Keyboard-navigation",title:"Keyboard navigation"},{id:"QSelect-API",title:"QSelect API"}])},created:function(){this.nav=[{name:"Input Textfield",category:"Form Components",path:"/vue-components/input",dir:"left"},{name:"File picker",category:"Form Components",path:"/vue-components/file-picker",dir:"right"}]},methods:{copyHeading:s["a"]}},d=c,r=o("2877"),p=Object(r["a"])(d,i,n,!1,null,null,null);t["default"]=p.exports}}]);