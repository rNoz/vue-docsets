#!/usr/bin/env bash

set -e

### download repository (clone) or update (pull)
### and select correct branch
function fetch_repo() {
  mkdir -p $WIP
  project="$1"
  if [[ -d "$WIP/$project/node_modules" ]]; then
    mv "$WIP/$project/node_modules" "$WIP/node_modules.${project}"
  fi
  cd "$WIP"
  case "$project" in
  quasar)
    if [[ -d "$project" ]]; then
      rm -rf $project
    fi
    svn export --force https://github.com/quasarframework/quasar/trunk/docs "$project"
    if [[ -d "node_modules.${project}" ]]; then
      mv "node_modules.${project}" "$project/node_modules"
    fi
    ;;
  vuelidate)
    if [[ -d "$project" ]]; then
      rm -rf $project
    fi
    svn export --force https://github.com/vuelidate/vuelidate/branches/gh-pages "$project"
    if [[ -d "node_modules.${project}" ]]; then
      mv "node_modules.${project}" "$project/node_modules"
    fi
    ;;
  vue-test-utils)
    project=vue-test
    mkdir -p "$project"
    cd "$project"
    subdir=vue-test-utils
    if [[ -d "$subdir/node_modules" ]]; then
      mv "$subdir/node_modules" "node_modules.${subdir}"
    fi
    if [[ -d "$subdir" ]]; then
      rm -rf $subdir
    fi
    svn export --force --depth immediates https://github.com/vuejs/vue-test-utils/trunk $subdir
    svn export --force https://github.com/vuejs/vue-test-utils/trunk/docs $subdir/docs
    if [[ -d "node_modules.${subdir}" ]]; then
      mv "node_modules.${subdir}" "$subdir/node_modules"
    fi
    cd ..
    ;;
  vue-testing-handbook)
    project=vue-test
    mkdir -p "$project"
    cd "$project"
    subdir=vue-testing-handbook
    if [[ -d "$subdir/node_modules" ]]; then
      mv "$subdir/node_modules" "node_modules.${subdir}"
    fi
    if [[ -d "$subdir" ]]; then
      rm -rf $subdir
    fi
    svn export --force --depth immediates https://github.com/lmiller1990/vue-testing-handbook/trunk/ $subdir
    svn export --force https://github.com/lmiller1990/vue-testing-handbook/trunk/src $subdir/src
    if [[ -d "node_modules.${subdir}" ]]; then
      mv "node_modules.${subdir}" "$subdir/node_modules"
    fi
    cd ..
    ;;
  esac
  cd ..
}

### Build documents (html, js, css) and icon
function build_documents_icon() {
  project="$1"
  DOCSET="docsets/$project.docset"
  RES="$DOCSET/Contents/Resources"
  DOCS="$RES/Documents"
  case "$project" in
  quasar)
    # TODO: create a patch and check before applying the changes
    rsync -rav assets/quasar "$WIP/"
    cd "$WIP/$project"
    npm i
    node_modules/.bin/quasar build
    cd ../..
    mkdir -p $RES
    if [[ -f "$DOCS/index.html" ]]; then
      rm -r $DOCS
    fi
    mv "$WIP/$project/dist/quasar.dev" $DOCS
    cp "$WIP/$project/node_modules/@quasar/app/templates/electron/icons/linux-512x512.png" $DOCSET/icon.png
    ;;
  vuelidate)
    mkdir -p $RES
    if [[ -f "$DOCS/index.html" ]]; then
      rm -r $DOCS
    fi
    mv "$WIP/$project" $DOCS
    wget -k -O $DOCSET/icon.png https://vuejs.org/images/logo.png
    ;;
  vue-test-utils)
    project="vue-test"
    DOCSET="docsets/$project.docset"
    RES="$DOCSET/Contents/Resources"
    DOCS="$RES/Documents"

    subdir=vue-test-utils
    vuepress_dir="docs"
    cp assets/.vuepress/vuepress-plugin-extract-toc.js "$WIP/$project/$subdir/${vuepress_dir}/.vuepress/"
    cp assets/vue-test/vue-test-utils/${vuepress_dir}/.vuepress/config.js "$WIP/$project/$subdir/${vuepress_dir}/.vuepress/"

    cd "$WIP/$project/$subdir"
    npm i
    # 2020-02-11 error: Cannot destructure property `createHash` of 'undefined' or 'null' (mini-css-extract-plugin)
    # https://github.com/webpack-contrib/mini-css-extract-plugin/issues/69
    # I installed webpack -D and:
    npm i mini-css-extract-plugin -D
    # end bugfix
    # Also, vuepress is old, therefore, should be updated:
    npm i vuepress@1 -S
    npm i vuepress-theme-vue -S
    rm -rf "${vuepress_dir}"/{ja,ru,zh}
    node_modules/.bin/vuepress build "${vuepress_dir}"
    fd -I .html ${vuepress_dir}/.vuepress/dist --exec sed -i 's|href="/|href="|g;s|src="/|src="|g;s|href=""|href="../index.html"|;s|href="\([^"]*/\)"|href="\1index.html"|g;s/href="\([^"]*\(guides\|api\|components\|wrapper\|wrapper-array\)\/\)#/href="\1index.html#/g' {}
    fd -I --full-path '.*(guides|api)/.*\.html' ${vuepress_dir}/.vuepress/dist --exec sed -i 's/href="\(assets\|guides\|api\)/href="..\/\1/g;s/src="\(assets\|guides\|api\)/src="..\/\1/g;' {}
    fd -I --full-path '.*api/(components|wrapper|wrapper-array)/.*\.html' ${vuepress_dir}/.vuepress/dist --exec sed -i 's/href="..\//href="..\/..\//g;s/src="..\//src="..\/..\//g;' {}
    cd ../../..

    mkdir -p $RES
    mkdir -p $DOCS
    if [[ -d "$DOCS/$subdir" ]]; then
      rm -r $DOCS/$subdir
    fi
    mv "$WIP/$project/$subdir/${vuepress_dir}/.vuepress/dist" $DOCS/$subdir
    # cover
    cp assets/vue-test/index.html "$DOCS/index.html"
    wget -k -O $DOCSET/icon.png https://vuejs.org/images/logo.png
    ;;
  vue-testing-handbook)
    project="vue-test"
    DOCSET="docsets/$project.docset"
    RES="$DOCSET/Contents/Resources"
    DOCS="$RES/Documents"

    subdir=vue-testing-handbook
    vuepress_dir="src"
    cp assets/.vuepress/vuepress-plugin-extract-toc.js "$WIP/$project/$subdir/${vuepress_dir}/.vuepress/"
    cp assets/vue-test/vue-testing-handbook/${vuepress_dir}/.vuepress/config.js "$WIP/$project/$subdir/${vuepress_dir}/.vuepress/"
    cp assets/vue-test/vue-testing-handbook/${vuepress_dir}/.vuepress/theme/components/Sidebar.vue "$WIP/$project/$subdir/${vuepress_dir}/.vuepress/theme/components/"

    cd "$WIP/$project/$subdir"
    npm i
    rm -rf "${vuepress_dir}"/{ja,ko,ru,zh,zh-CN}
    node_modules/.bin/vuepress build $vuepress_dir
    fd -I .html ${vuepress_dir}/.vuepress/dist --exec sed -i 's|https://lmiller1990.github.io/vue-testing-handbook/||g;s|href="/|href="|g;s|src="/|src="|g;s|href=""|href="index.html"|' {}
    cd ../../..

    mkdir -p $RES
    mkdir -p $DOCS
    if [[ -d "$DOCS/$subdir" ]]; then
      rm -r $DOCS/$subdir
    fi
    mv "$WIP/$project/$subdir/${vuepress_dir}/.vuepress/dist" $DOCS/$subdir
    # cover
    cp assets/vue-test/index.html "$DOCS/index.html"
    wget -k -O $DOCSET/icon.png https://vuejs.org/images/logo.png
    ;;
  esac
}

### Build database file docSet.dsidx
function build_database() {
  project="$1"
  case "$project" in
  quasar)
    node scripts/database.js quasar
    ;;
  vuelidate)
    node scripts/database.js vuelidate
    ;;
  vue-test)
    node scripts/database.js vue-test
    ;;
  esac
}

### Build other assets like Info.plist
function build_assets() {
  project="$1"
  DOCSET="docsets/$project.docset"
  case "$project" in
  quasar)
    search=$project
    name=Quasar
    ;;
  vuelidate)
    search=$project
    name=Vuelidate
    ;;
  vue-test)
    search=vue-test
    name='Vue Test'
    ;;
  *)
    return
    ;;
  esac
  CONTS="$DOCSET/Contents"

  if [[ ! -z $search ]]; then
    cat >"$CONTS/Info.plist" <<HEREDOC
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
vue-test)
  fetch_repo vue-testing-handbook
  build_documents_icon vue-testing-handbook
  fetch_repo vue-test-utils
  build_documents_icon vue-test-utils
  build_database $1
  build_assets $1
  ;;
esac
