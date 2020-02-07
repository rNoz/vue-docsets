module.exports = [
  { name: "Why Quasar?", path: "introduction-to-quasar" },
  { name: "Getting Started", path: "start/pick-quasar-flavour" },
  {
    name: "Options",
    path: "options",
    sub: [
      "Vue Prototype Injections",
      "App Icons",
      "SEO",
      "Quasar Language Packs",
      "App Internationalization",
      "RTL Support",
      "Installing Icon Libraries",
      "Quasar Icon Sets",
      "Platform Detection",
      "Screen Plugin",
      "Animations",
      "Transitions",
      "Global Event Bus",
      ]
  },
  {
    name: "Security",
    path: "security",
    sub: [
      "DO's and DON'Ts",
      "Report a vulnerability",
      "Get help!",
    ]
  },
  {
    name: "Quasar CLI",
    path: "quasar-cli",
    sub: [
      "Installation",
      "quasar.conf.js",
      "App Icons",
      "Testing & Auditing",
      {
        name: "CLI Documentation",
        path: "cli-documentation",
        sub: [
          "Directory Structure",
          "Build Commands",
          "Commands List",
          "CSS Preprocessors",
          "Routing",
          // "Lazy Loading - Code Splitting",
          "Lazy Loading",
          "Handling Assets",
          "Boot Files",
          "Prefetch Feature",
          "API Proxying",
          "Handling Webpack",
          "Handling process.env",
          "Vuex Store",
          "Linter",
          "Supporting IE",
        ]
      },
      // TODO nested
      "Developing Mobile Apps",
      // TODO nested
      "Ajax Requests",
      "Opening Dev Server To Public",
    ]
  },
  {
    name: "Style & Identity",
    path: "style",
    sub: [
      "Typography",
      "Color Palette",
      "Theme Builder",
      "Dark Mode",
      "Spacing",
      "Shadows",
      "Breakpoints",
      "Body classes",
      "Visibility",
      "Positioning",
      "Sass/SCSS Variables",
      "Stylus Variables",
      "Other Helper Classes",
    ]
  },
  {
    name: "Layout and Grid",
    path: "layout",
    sub: [
      {
        name: "Flex Grid",
        path: "grid",
        sub: [
          "Introduction to Flexbox",
          "Row",
          "Column",
          "Gutter",
          "Flex Playground",
        ]
      },
      "Layout",
      "Routing with Layouts and Pages",
      "Header and Footer",
      "Drawer",
      "Page",
      // "Layout Builder",
      "Gallery",
      "Page Sticky",
      "Page Scroller",
      "Floating Action Button",
    ]
  },
  {
    name: "Vue Directives",
    path: "vue-directives",
    sub: [
      "Close Popup",
      // "Go Back (Handling Back Button)",
      "Go Back",
      "Intersection",
      "Material Ripple",
      "Mutation",
      "Scroll",
      "Scroll Fire",
      "Touch Hold",
      "Touch Pan",
      "Touch Repeat",
      "Touch Swipe",
    ]
  },
  {
    name: "Quasar Plugins",
    path: "quasar-plugins",
    sub: [
      "Addressbar Color",
      "App Fullscreen",
      "App Visibility",
      "Bottom Sheet",
      "Cookies",
      "Dark",
      "Dialog",
      "Loading",
      "Loading Bar",
      "Web Storage",
      "Meta",
      "Notify",
    ]
  },
  {
    name: "App Extensions",
    path: "app-extensions",
    sub: [
      "Introduction",
      "Discover",
      // TODO nested
    ]
  },
  {
    name: "Quasar Utils",
    path: "quasar-utils",
    sub: [
      "Date Utils",
      "Color Utils",
      "DOM Utils",
      "Formatter Utils",
      "Scrolling Utils",
      "Other Utils",
    ]
  },
];
