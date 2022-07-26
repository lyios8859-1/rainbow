module.exports = {
  title: "YUN-UI",
  description: "Vue3 YUN UI",

  /*
  VitePress 用 markdown-it 作为 Markdown 渲染器。
  可以通过在 .vitepress/config.js 中使用 markdown 选项定制：
  */
  markdown: {
    lineNumbers: true, // 代码快内显示行号
    // options for markdown-it-anchor
    anchor: { permalink: true }, // 锚点

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: md => {
      // use more markdown-it plugins!
      // md.use(require("markdown-it-xxx"));
    }
  },

  themeConfig: {
    logo: "/public/logo.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],

    nav: [
      { text: "指南", link: "/guide/installation", activeMatch: "/guide/" },
      { text: "组件", link: "/component/icon", activeMatch: "/component/" }
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "安装", link: "/guide/installation" },
            { text: "快速开始", link: "/guide/quickStart" }
          ]
        }
      ],
      "/component/": [
        {
          text: "基础组件",
          items: [{ text: "Icon", link: "/component/icon" }]
        }
      ]
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Timly"
    }
  }
};