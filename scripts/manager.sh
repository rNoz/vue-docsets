#!/usr/bin/env bash

set -e

### download repository (clone) or update (pull)
### and select correct branch
function fetch_repo {
  mkdir -p $WIP
  if [[ ! -d "$WIP/$1" ]]; then
    case "$1" in
      quasar)
        mkdir -p "$WIP/$1"
        # git clone --depth 1 https://github.com/quasarframework/quasar
        cd "$WIP/$1"
        svn export https://github.com/quasarframework/quasar/trunk/docs
      ;;
      vualidate)
        mkdir -p "$WIP/$1"
        cd "$WIP/$1"
        svn export https://github.com/vuelidate/vuelidate/branches/gh-pages
      ;;
      vuetesting)
        mkdir -p "$WIP/$1"
        cd "$WIP/$1"
        subdir=vue-testing-handbook
        svn export --force --depth immediates https://github.com/lmiller1990/vue-testing-handbook/trunk/ $subdir
        svn export --force https://github.com/lmiller1990/vue-testing-handbook/trunk/src $subdir/src
      ;;
    esac
  else
    case "$1" in
      quasar)
        cd "$WIP/$1"
        if [[ -d docs/node_modules ]]; then
          mv docs/node_modules ./
        fi
        rm -r docs
        svn export https://github.com/quasarframework/quasar/trunk/docs
        if [[ -d node_modules ]]; then
          mv node_modules docs/
        fi
        # git restore .
        # git pull origin master
        cd ../..
      ;;
      vuelidate)
        cd "$WIP/$1"
        if [[ -d gh-pages ]]; then
          rm -r gh-pages
        fi
        svn export https://github.com/vuelidate/vuelidate/branches/gh-pages
        cd ../..
      ;;
      vuetesting)
        mkdir -p "$WIP/$1"
        cd "$WIP/$1"
        subdir=vue-testing-handbook
        if [[ -d $subdir ]]; then
          rm -r $subdir
        fi
        svn export --force --depth immediates https://github.com/lmiller1990/vue-testing-handbook/trunk/ $subdir
        svn export --force https://github.com/lmiller1990/vue-testing-handbook/trunk/src $subdir/src
        cd ../..
      ;;
    esac
  fi
}

### Build documents (html, js, css) and icon
function build_documents_icon {
  DOCSET="docsets/$1.docset"
  RES="$DOCSET/Contents/Resources"
  DOCS="$RES/Documents"
  case "$1" in
    quasar)
      # TODO: create a patch and check before applying the changes
      rsync -rav assets/quasar/docs "$WIP/$1/"
      cd "$WIP/$1/docs"
      npm i
      node_modules/.bin/quasar build
      cd ../../..
      mkdir -p $RES
      if [[ -f "$DOCS/index.html" ]]; then
        rm -r $DOCS
      fi
      mv "$WIP/$1/docs/dist/quasar.dev" $DOCS
      cp "$WIP/$1/docs/node_modules/@quasar/app/templates/electron/icons/linux-512x512.png" $DOCSET/icon.png
    ;;
    vuelidate)
      mkdir -p $RES
      if [[ -f "$DOCS/index.html" ]]; then
        rm -r $DOCS
      fi
      mv "$WIP/$1/gh-pages" $DOCS
      icon1=docsets/vuetest.docset/icon.png
      icon2=docsets/vuerouter.docset/icon.png
      if [[ -f "$icon1" ]]; then
        cp "$icon1" $DOCSET/icon.png
      elif [[ -f "$icon2" ]]; then
        cp "$icon2" $DOCSET/icon.png
      fi
    ;;
    vuetesting)
      subdir=vue-testing-handbook
      cp assets/vuetesting/vue-testing-handbook/src/.vuepress/vuepress-plugin-extract-toc.js "$WIP/$1/$subdir/src/.vuepress/"
      cp assets/vuetesting/vue-testing-handbook/src/.vuepress/config.js "$WIP/$1/$subdir/src/.vuepress/"
      cp assets/vuetesting/vue-testing-handbook/src/.vuepress/theme/components/Sidebar.vue "$WIP/$1/$subdir/src/.vuepress/theme/components/"

      cd "$WIP/$1/$subdir"
      npm i
      rm -rf src/{ja,ko,ru,zh,zh-CN}
      node_modules/.bin/vuepress build src
      fd -I .html src/.vuepress/dist --exec sed -i 's|https://lmiller1990.github.io/vue-testing-handbook/||g;s|href="/|href="|g;s|src="/|src="|g;s|href=""|href="index.html"|' {}
      cd ../../..

      mkdir -p $RES
      mkdir -p $DOCS
      if [[ -d "$DOCS/$subdir" ]]; then
        rm -r $DOCS/$subdir
      fi
      mv "$WIP/$1/$subdir/src/.vuepress/dist" $DOCS/$subdir
      # cover
      cp assets/vuetesting/index.html "$DOCS/index.html"
      icon1=docsets/vuetest.docset/icon.png
      icon2=docsets/vuerouter.docset/icon.png
      if [[ -f "$icon1" ]]; then
        cp "$icon1" $DOCSET/icon.png
      elif [[ -f "$icon2" ]]; then
        cp "$icon2" $DOCSET/icon.png
      fi
    ;;
  esac
}

### Build database file docSet.dsidx
function build_database {
  case "$1" in
    quasar)
      node scripts/database.js quasar
    ;;
    vuelidate)
      node scripts/database.js vuelidate
    ;;
    vuetesting)
      node scripts/database.js vuetesting
    ;;
  esac
}

### Build other assets like Info.plist
function build_assets {
  DOCSET="docsets/$1.docset"
  case "$1" in
    quasar)
      search=$1
      name=Quasar
      ;;
    vuelidate)
      search=$1
      name=Vuelidate
      ;;
    vuetesting)
      search=$1
      name=Vuetesting
      ;;
    *)
      return
      ;;
  esac
  CONTS="$DOCSET/Contents"

  if [[ ! -z $search ]]; then
    cat > "$CONTS/Info.plist" <<HEREDOC
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleIdentifier</key>
	<string>${search}</string>
	<key>CFBundleName</key>
	<string>${name}</string>
	<key>DocSetPlatformFamily</key>
	<string>${search}</string>
	<key>isDashDocset</key>
	<true/>
	<key>DashDocSetFamily</key>
	<string>dashtoc</string>
</dict>
</plist>
HEREDOC
  fi
}

# Globals

WIP=wip

# Main

case "$1" in
  quasar)
    fetch_repo $1
    build_documents_icon $1
    build_database $1
    build_assets $1
  ;;
  vuelidate)
    fetch_repo $1
    build_documents_icon $1
    build_database $1
    build_assets $1
  ;;
  vuetesting)
#    fetch_repo $1
#    build_documents_icon $1
    build_database $1
    build_assets $1
  ;;
esac
