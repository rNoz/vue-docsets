# Vue Docsets

Project to make a Zeal/Dash-compatible docsets for:

- Vue Router
- Vuex
- vue-test-utils
- Quasar
- Vuelidate

Created to integrate Quasar and Vuelidate.

## Usage

Create the quasar docs and populate them:

```sh
bash scripts/manager.sh quasar
rsync -rav docsets/quasar.docset ~/.local/share/Zeal/Zeal/docsets/

bash scripts/manager.sh vuelidate
rsync -rav docsets/vuelidate.docset ~/.local/share/Zeal/Zeal/docsets/
```

## Guide

This section was used originally. Please, see the usage section.

### Quasar

```
git clone --depth 1 https://github.com/quasarframework/quasar/
cd quasar/docs
npm i
```

Modify the next files:

quasar.conf.js:
- Remove the cookie alert (boot)
- Modify the router mode to hash mode (build mode)

```js
{
    // ...
    boot: [
      // { path: 'gdpr', server: false }, // commented
      'components'
    ],
    // ...
    build: {
      vueRouterMode: 'hash',
    }
    // ...
}
```

router/index.js:
- Remove the comment global gtag
- Remove the gtag from the router

```js
// _global_gtag (change to this)

  // ...
  process.env.CLIENT === true && Router.afterEach(to => {
    // gtag('config', 'UA-6317975-6', {
    //   page_path: to.path
    // })
  })
  // ...
```

index.template.html:
- Remove the gtag scripts

```html
    <!-- ... -->
<!--    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-6317975-6"></script>-->
    <script>
      window.dataLayer = window.dataLayer || [];
      // function gtag(){dataLayer.push(arguments);}
      // gtag('js', new Date());
      // gtag('config', 'UA-6317975-6');
    </script>
    <!-- ... -->
```

Modify the package.json with a new target, `"dist": "quasar build"`,
to build without SSR. Then, copy the result files to our expected location.

```
npm run dist
# it should work with `firefox index.html` (relative locations)
cd $ROOT_DIR
cp -r quasar/docs/dist/quasar.dev/* quasar.docset/Contents/Resources/Documents/
```

The icon is copied from the package:

```
cp quasar/docs/node_modules/@quasar/app/templates/electron/icons/linux-512x512.png quasar.docset/icon.png
```

Finally, building the database:

```
npm run docset-quasar
```
