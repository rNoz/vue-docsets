const pluginExtractToc = (option, context) => ({
  define: {
    OPTION: option,
    CONTEXT: context,
  },
  enhanceAppFiles: require('path').resolve(__dirname, 'vuepress-plugin-extract-toc.js')
});

module.exports = {
  // base: './vue-testing-handbook/',
  base: '/',
  title: 'Vue Testing Handbook',
  plugins: [
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     ga: 'UA-122389064-1',
    //   },
    // ],
    [
      pluginExtractToc
    ]
  ],
  head: [
    [
      'link',
      {
        rel: 'icon',
        href:
          '/vue-testing-handbook/img/favicon.png',
      },
    ],
    ['meta', { property: 'og:title', content: 'Vue Testing Handbook' }],
    ['meta', { property: 'og:description', content: 'Vue testing handbook' }],
    ['meta', { property: 'og:type', content: 'website' }],
    // [
    //   'meta',
    //   {
    //     property: 'og:url',
    //     content: 'https://lmiller1990.github.io/vue-testing-handbook/',
    //   },
    // ],
    // [
    //   'meta',
    //   {
    //     property: 'og:image',
    //     content:
    //       'https://lmiller1990.github.io/vue-testing-handbook/img/og.png',
    //   },
    // ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Testing Handbook',
    },
    // '/ja/': {
    //   lang: 'ja-JP',
    //   title: 'Vueテストハンドブック',
    // },
    // '/ru/': {
    //   lang: 'ru-RU',
    //   title: 'Руководство по тестированию Vue-приложений',
    // },
    // '/zh-CN/': {
    //   lang: 'zh-CN',
    //   title: 'Vue测试指南',
    // },
    // '/ko/': {
    //   lang: 'ko',
    //   title: 'Vue 테스팅 핸드북',
    // },
  },
  themeConfig: {
    repo: 'lmiller1990/vue-testing-handbook',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        sidebar: [
          ['/', 'Welcome'],
          ['/setting-up-for-tdd', 'Setting up for TDD'],
          ['/rendering-a-component', 'Rendering Components'],
          ['/components-with-props', 'Testing Props'],
          ['/computed-properties', 'Computed Properties'],
          ['/simulating-user-input', 'Simulating user input'],
          ['/testing-emitted-events', 'Testing emitted events'],
          ['/mocking-global-objects', 'Mocking global objects'],
          ['/stubbing-components', 'Stubbing components'],
          [
            '/finding-elements-and-components',
            'Finding elements and components',
          ],
          ['/testing-vuex', 'Testing Vuex'],
          ['/vuex-mutations', 'Vuex - Mutations'],
          ['/vuex-actions', 'Vuex - Actions'],
          ['/vuex-getters', 'Vuex - Getters'],
          ['/vuex-in-components', 'Vuex in components - $state and getters'],
          [
            '/vuex-in-components-mutations-and-actions',
            'Vuex in components - mutations and actions',
          ],
          ['/vue-router', 'Vue Router'],
          ['/composition-api', 'Composition API'],
          ['/reducing-boilerplate-in-tests', 'Reducing Boilerplate'],
          ['/jest-mocking-modules', 'Jest - mocking modules'],
        ],
      },
      // '/ja/': {
      //   label: '日本語',
      //   selectText: '言語',
      //   lastUpdated: '更新',
      //   editLinkText: 'GitHub上で編集',
      //   sidebar: [
      //     ['/ja/', 'ようこそ'],
      //     ['/ja/setting-up-for-tdd', 'テスト駆動開発環境を準備'],
      //     ['/ja/rendering-a-component', 'コンポーネントをレンダー'],
      //     ['/ja/components-with-props', 'プロップスのテスト'],
      //     ['/ja/computed-properties', '算出プロパティ'],
      //     ['/ja/simulating-user-input', 'ユーザー入力をシミュレーション'],
      //     ['/ja/testing-emitted-events', '発生したイベントのテスト'],
      //     ['/ja/mocking-global-objects', 'グローバルオブジェクトのモック'],
      //     ['/ja/stubbing-components', 'コンポーネントをスタブする'],
      //     [
      //       '/ja/finding-elements-and-components',
      //       '要素とコンポーネントを検索する',
      //     ],
      //     ['/ja/testing-vuex', 'Vuexのテストの紹介'],
      //     ['/ja/vuex-mutations', 'Vuex - ミューテーション'],
      //     ['/ja/vuex-actions', 'Vuex - アクション'],
      //     ['/ja/vuex-getters', 'Vuex - ゲッター'],
      //     ['/ja/vuex-in-components', 'コンポーネントの中でVuexのテスト'],
      //     [
      //       '/ja/vuex-in-components-mutations-and-actions.md',
      //       'Vuex in components - mutations and actions',
      //     ],
      //     ['/ja/vue-router', 'Vueルーター'],
      //     ['/ja/jest-mocking-modules', 'Jestでモジュールをモック'],
      //     ['/ja/composition-api', 'Composition API'],
      //   ],
      // },
      // '/ru/': {
      //   label: 'Русский',
      //   selectText: 'Переводы',
      //   lastUpdated: 'Последнее обновление',
      //   editLinkText: 'Редактировать эту страницу на GitHub',
      //   sidebar: [
      //     ['/ru/', 'Введение'],
      //     ['/ru/setting-up-for-tdd', 'Подготовка к TDD'],
      //     ['/ru/rendering-a-component', 'Отрисовка компонентов'],
      //     ['/ru/components-with-props', 'Тестирование входных параметров'],
      //     ['/ru/computed-properties', 'Вычисляемые свойства'],
      //     [
      //       '/ru/simulating-user-input',
      //       'Симулирование пользовательского ввода',
      //     ],
      //     [
      //       '/ru/testing-emitted-events',
      //       'Тестирование пользовательских событий',
      //     ],
      //     ['/ru/mocking-global-objects', 'Мокаем глобальные объекты'],
      //     ['/ru/stubbing-components', 'Заглушки для компонентов'],
      //     [
      //       '/ru/finding-elements-and-components',
      //       'Поиск элементов и компонентов',
      //     ],
      //     ['/ru/testing-vuex', 'Тестирование Vuex'],
      //     ['/ru/vuex-mutations', 'Vuex - Мутации'],
      //     ['/ru/vuex-actions', 'Vuex - Действия'],
      //     ['/ru/vuex-getters', 'Vuex - Геттеры'],
      //     ['/ru/vuex-in-components', 'Vuex в компонентах - $state и геттеры'],
      //     [
      //       '/ru/vuex-in-components-mutations-and-actions',
      //       'Vuex в компонентах - мутации и действия',
      //     ],
      //     ['/ru/vue-router', 'Vue Router'],
      //     ['/ru/composition-api', 'Composition API'],
      //     ['/ru/reducing-boilerplate-in-tests', 'Уменьшаем шаблонный код'],
      //     ['/ru/jest-mocking-modules', 'Jest - мокаем модули'],
      //   ],
      // },
      // '/zh-CN/': {
      //   label: '简体中文',
      //   selectText: '语言',
      //   lastUpdated: '更新',
      //   editLinkText: '在 GitHub 上编辑本页',
      //   sidebar: [
      //     ['/zh-CN/', '欢迎'],
      //     ['/zh-CN/setting-up-for-tdd', '设置 TDD'],
      //     ['/zh-CN/rendering-a-component', '渲染组件'],
      //     ['/zh-CN/components-with-props', '测试 Props'],
      //     ['/zh-CN/computed-properties', '计算属性'],
      //     ['/zh-CN/simulating-user-input', '模拟用户输入'],
      //     ['/zh-CN/testing-emitted-events', '测试已发出的事件'],
      //     ['/zh-CN/mocking-global-objects', 'mock 全局对象'],
      //     ['/zh-CN/stubbing-components', 'stub 组件'],
      //     ['/zh-CN/finding-elements-and-components', '找到元素和组件'],
      //     ['/zh-CN/testing-vuex', '测试 Vuex'],
      //     ['/zh-CN/vuex-mutations', 'Vuex - Mutations'],
      //     ['/zh-CN/vuex-actions', 'Vuex - Actions'],
      //     ['/zh-CN/vuex-getters', 'Vuex - Getters'],
      //     ['/zh-CN/vuex-in-components', '组件中的 Vuex - $state 和 getters'],
      //     [
      //       '/zh-CN/vuex-in-components-mutations-and-actions',
      //       '组件中的 Vuex - mutations 和 actions',
      //     ],
      //     ['/zh-CN/vue-router', 'Vue Router'],
      //     ['/zh-CN/composition-api', 'Composition API'],
      //     ['/zh-CN/jest-mocking-modules', 'Jest - mock 模块'],
      //   ],
      // },
      // '/ko/': {
      //   label: '한국어',
      //   selectText: '다른 언어로 보기',
      //   lastUpdated: '마지막 업데이트',
      //   editLinkText: 'Github에서 이 페이지 수정하기',
      //   sidebar: [
      //     ['/ko/', '환영합니다'],
      //     ['/ko/setting-up-for-tdd', 'TDD를 위한 설정하기'],
      //     ['/ko/rendering-a-component', '컴포넌트 렌더하기'],
      //     ['/ko/components-with-props', 'props 테스트하기'],
      //     ['/ko/computed-properties', 'computed 프로퍼티'],
      //     ['/ko/simulating-user-input', '사용자 입력 시연하기'],
      //     ['/ko/testing-emitted-events', 'emitted 이벤트 테스트하기'],
      //     ['/ko/mocking-global-objects', '전역 객체 모킹하기'],
      //     ['/ko/stubbing-components', '컴포넌트 스터빙'],
      //     ['/ko/finding-elements-and-components', '엘리먼트와 컴포넌트 찾기'],
      //     ['/ko/testing-vuex', 'Vuex 테스트하기'],
      //     ['/ko/vuex-mutations', 'Vuex - 뮤테이션'],
      //     ['/ko/vuex-actions', 'Vuex - 액션'],
      //     ['/ko/vuex-getters', 'Vuex - 게터'],
      //     ['/ko/vuex-in-components', '컴포넌트 내에 있는 Vuex - $state와 게터'],
      //     [
      //       '/ko/vuex-in-components-mutations-and-actions',
      //       '컴포넌트 내에 있는 Vuex - 뮤테이션과 액션',
      //     ],
      //     ['/ko/vue-router', 'Vue 라우터'],
      //     ['/ko/composition-api', '컴포지션 API'],
      //     ['/ko/reducing-boilerplate-in-tests', '보일러플레이트 줄이기'],
      //     ['/ko/jest-mocking-modules', 'Jest - 모듈 모킹하기'],
      //   ],
      // },
    },
  },
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
      // md.use(require('./plugin-links'));
    },
    extendMarkdown: md => {
      // md.use(require('./plugin-links'));
      // md.use(require('./plugin-links'));
    }
  },
}
