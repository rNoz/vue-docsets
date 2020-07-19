(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"2e01":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("doc-page",{attrs:{title:"App Extension Install API",nav:t.nav}},[n("p",[t._v("This page refers to "),n("code",{staticClass:"doc-token"},[t._v("src/install.js")]),t._v(" file which is executed on the installation of the App Extension only. Not all App Extensions will need an install – this is an optional step.")]),n("p",[t._v("Example of basic structure of the file:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// props and methods for "api" Object')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// are described below")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.extId"},on:{click:function(e){return t.copyHeading("api.extId")}}},[t._v("api.extId")]),n("p",[t._v("Contains the "),n("code",{staticClass:"doc-token"},[t._v("ext-id")]),t._v(" (String) of this App Extension.")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.prompts"},on:{click:function(e){return t.copyHeading("api.prompts")}}},[t._v("api.prompts")]),n("p",[t._v("Is an Object which has the answers to the prompts when this App Extension gets installed. For more info on prompts, check out "),n("doc-link",{attrs:{to:"/app-extensions/development-guide/prompts-api"}},[t._v("Prompts API")]),t._v(".")],1),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.resolve"},on:{click:function(e){return t.copyHeading("api.resolve")}}},[t._v("api.resolve")]),n("p",[t._v("Resolves paths within the app on which this App Extension is running. Eliminates the need to import "),n("code",{staticClass:"doc-token"},[t._v("path")]),t._v(" and resolve the paths yourself.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolves to root of app")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/my-file.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolves to root/src of app")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-file.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolves to root/src-pwa of app")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pwa")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-file.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolves to root/src-ssr of app")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-file.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolves to root/src-cordova of app")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cordova")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config.xml'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolves to root/src-electron of app")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("electron")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-file.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.appDir"},on:{click:function(e){return t.copyHeading("api.appDir")}}},[t._v("api.appDir")]),n("p",[t._v("Contains the full path (String) to the root of the app on which this App Extension is running.")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.compatibleWith"},on:{click:function(e){return t.copyHeading("api.compatibleWith")}}},[t._v("api.compatibleWith")]),n("p",[t._v("Ensure the App Extension is compatible with a package installed in the host app through a semver condition.")]),n("p",[t._v("If the semver condition is not met, then @quasar/app errors out and halts execution.")]),n("p",[t._v("Example of semver condition: "),n("code",{staticClass:"doc-token"},[t._v("'1.x || >=2.5.0 || 5.0.0 - 7.2.3'")]),t._v(".")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {string} packageName\n * @param {string} semverCondition\n */")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compatibleWith")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@quasar/app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.x'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.hasPackage"},on:{click:function(e){return t.copyHeading("api.hasPackage")}}},[t._v("api.hasPackage")]),n("p",[t._v("Determine if some package is installed in the host app through a semver condition.")]),n("p",[t._v("Example of semver condition: "),n("code",{staticClass:"doc-token"},[t._v("'1.x || >=2.5.0 || 5.0.0 - 7.2.3'")]),t._v(".")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {string} packageName\n * @param {string} (optional) semverCondition\n * @return {boolean} package is installed and meets optional semver condition\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuelidate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hey, this app has it (any version of it)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^1.0.0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hey, this app has v1 installed")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.hasExtension"},on:{click:function(e){return t.copyHeading("api.hasExtension")}}},[t._v("api.hasExtension")]),n("p",[t._v("Check if another app extension is npm installed and Quasar CLI has invoked it.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Check if another app extension is installed\n *\n * @param {string} extId\n * @return {boolean} has the extension installed & invoked\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasExtension")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hey, we have it")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.getPackageVersion"},on:{click:function(e){return t.copyHeading("api.getPackageVersion")}}},[t._v("api.getPackageVersion")]),n("p",[t._v("Get the version of a host app package.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {string} packageName\n * @return {string|undefined} version of app's package\n */")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPackageVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("packageName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output examples:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   1.1.3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   undefined (when package not found)")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.extendPackageJson"},on:{click:function(e){return t.copyHeading("api.extendPackageJson")}}},[t._v("api.extendPackageJson")]),n("p",[t._v("Helper method to extend package.json with new props. If specifying existing props, "),n("strong",[t._v("it will override")]),t._v(" them.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {object|string} extPkg - Object to extend with or relative path to a JSON file\n */")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendPackageJson")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  scripts"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar dev -m electron'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("p",[t._v("The above example adds an npm script to the app’s package.json, so you can then execute "),n("code",{staticClass:"doc-token"},[t._v("yarn electron")]),t._v(" (or the equivalent "),n("code",{staticClass:"doc-token"},[t._v("npm run electron")]),t._v(").")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.extendJsonFile"},on:{click:function(e){return t.copyHeading("api.extendJsonFile")}}},[t._v("api.extendJsonFile")]),n("p",[t._v("Extend a JSON file with new props (deep merge). If specifying existing props, it will override them.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {string} file (relative path to app root folder)\n * @param {object} newData (Object to merge in)\n */")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendJsonFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/some.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  newProp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-value'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.render"},on:{click:function(e){return t.copyHeading("api.render")}}},[t._v("api.render")]),n("p",[t._v("Renders (copies) a folder from your App Extension templates (any folder you specify) into root of the app. Maintains the same folder structure that the template folder has.")]),n("p",[t._v("If some of the files already exist in the app then it will ask the user if they should be overwritten or not.")]),n("p",[t._v("Needs a relative path to the folder of the file calling render().")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Render a folder from extension templates into devland.\n * Needs a relative path to the folder of the file calling render().\n *\n * @param {string} templatePath (relative path to folder to render in app)\n * @param {object} scope (optional; rendering scope variables)\n */")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/a/template/folder'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Filename-edge-cases"},on:{click:function(e){return t.copyHeading("Filename-edge-cases")}}},[t._v("Filename edge cases")]),n("p",[t._v("If you want to render a template file that either begins with a dot (i.e. .env) you will have to follow a specific naming convention, since dotfiles are ignored when publishing your plugin to npm:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# templates containing dotfiles must use an")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# underscore instead of the dot in their names:")]),t._v("\n\nsome-folder/_env\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# When calling api.render('./some-folder'), this will be")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rendered in the project folder as:")]),t._v("\n\n/.env\n")])]),n("p",[t._v("If you want to render a file whose name actually begins with an underscore, then the filename must begin with "),n("code",{staticClass:"doc-token"},[t._v("__")]),t._v(" (two underscore characters instead of only one):")]),n("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("some-folder/__my.css\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# When calling api.render('./template'), this will be")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rendered in the project folder as:")]),t._v("\n\n/_my.css\n")])]),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Using-scope"},on:{click:function(e){return t.copyHeading("Using-scope")}}},[t._v("Using scope")]),n("p",[t._v("You can also inject some decision-making code into the files to be rendered by interpolating with "),n("doc-link",{attrs:{to:"https://www.npmjs.com/package/lodash.template"}},[t._v("lodash.template")]),t._v(" syntax.")],1),n("p",[t._v("Example:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/install.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (my-folder is located in same folder as")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the file in which following call takes place)")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./my-folder'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  prompts"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prompts\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("p",[t._v("Let’s imagine we use a "),n("doc-link",{attrs:{to:"/app-extensions/development-guide/prompts-api"}},[t._v("Prompts API")]),t._v(" file too. It asks the user if he/she wants “Feature X” and stores the answer in a variable called “featureX”.")],1),n("p",[t._v("We can take some decisions on what the files that we render look like, during rendering them. This removes the need of creating two folders and deciding which to render, based on some decision.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/my-folder/some-file.js")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prompts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("featureX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is content when \"Feature X\" exists'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is content when we don\\'t have \"Feature X\"'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),n("p",[t._v("Possibilities are limited only by your imagination.")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.getPersistentConf"},on:{click:function(e){return t.copyHeading("api.getPersistentConf")}}},[t._v("api.getPersistentConf")]),n("p",[t._v("Get the internal persistent config of this extension. Returns empty object if it has none.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @return {object} cfg\n */")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPersistentConf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.setPersistentConf"},on:{click:function(e){return t.copyHeading("api.setPersistentConf")}}},[t._v("api.setPersistentConf")]),n("p",[t._v("Set the internal persistent config of this extension. If it already exists, it is overwritten.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {object} cfg\n */")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPersistentConf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.mergePersistentConf"},on:{click:function(e){return t.copyHeading("api.mergePersistentConf")}}},[t._v("api.mergePersistentConf")]),n("p",[t._v("Deep merge into the internal persistent config of this extension. If extension does not have any config already set, this is essentially equivalent to setting it for the first time.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {object} cfg\n */")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergePersistentConf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api.onExitLog"},on:{click:function(e){return t.copyHeading("api.onExitLog")}}},[t._v("api.onExitLog")]),n("p",[t._v("Adds a message to be printed after App CLI finishes up installing the App Extension and is about to exit. Can be called multiple times to register multiple exit logs.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {string} msg\n */")]),t._v("\napi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onExitLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Thanks for installing my awesome extension'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},a=[],o=n("8669"),r="App Extension Install API | Quasar Framework",p="The API for the install script of a Quasar App Extension. Initializes the app space by rendering or changing files and more.",i={meta:{title:"App Extension Install API",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:p},ogDesc:{name:"og:description",content:p},twitterDesc:{name:"twitter:description",content:p}}},preFetch:function(t){var e=t.store;e.commit("updateToc",[{id:"api.extId",title:"api.extId"},{id:"api.prompts",title:"api.prompts"},{id:"api.resolve",title:"api.resolve"},{id:"api.appDir",title:"api.appDir"},{id:"api.compatibleWith",title:"api.compatibleWith"},{id:"api.hasPackage",title:"api.hasPackage"},{id:"api.hasExtension",title:"api.hasExtension"},{id:"api.getPackageVersion",title:"api.getPackageVersion"},{id:"api.extendPackageJson",title:"api.extendPackageJson"},{id:"api.extendJsonFile",title:"api.extendJsonFile"},{id:"api.render",title:"api.render"},{id:"Filename-edge-cases",title:"Filename edge cases",sub:!0},{id:"Using-scope",title:"Using scope",sub:!0},{id:"api.getPersistentConf",title:"api.getPersistentConf"},{id:"api.setPersistentConf",title:"api.setPersistentConf"},{id:"api.mergePersistentConf",title:"api.mergePersistentConf"},{id:"api.onExitLog",title:"api.onExitLog"}])},created:function(){this.nav=[{name:"Prompts API",category:"Development Guide",path:"/app-extensions/development-guide/prompts-api",dir:"left"},{name:"Index API",category:"Development Guide",path:"/app-extensions/development-guide/index-api",dir:"right"}]},methods:{copyHeading:o["a"]}},c=i,l=n("2877"),_=Object(l["a"])(c,s,a,!1,null,null,null);e["default"]=_.exports}}]);