/*
 * @Author: zhangkaichao zhangkc@kcwl.com
 * @Date: 2024-03-25 13:38:51
 * @LastEditors: zhangkaichao zhangkc@kcwl.com
 * @LastEditTime: 2024-03-26 17:28:48
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 * @Description:
 */
module.exports = {
  title: "KC",
  description: "KC的笔记",
  base: "/docs/",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require("moment");
          moment.locale("zh-cn");
          return moment(timestamp).format("LLLL");
        },
      },
    ],
    "@org/foo", // 等价于 @org/markdown-it-foo，如果对应的包存在
    [
      "markdown-it-bar",
      {
        // 提供你的选项
      },
    ],
  ],
  themeConfig: {
    logo: "/imgs/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "引导", link: "/guide/" },
      { text: "官网", link: "https://google.com", target: "_self", rel: "" },
    ],
    sidebar: [
      {
        title: "引导", // 必要的
        path: "/guide/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [["/guide/", " 新手引导"]],
      },
      {
        title: "合同", // 必要的
        path: "/contract/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [["/contract/01.md", "运输合同"]],
      },
      {
        title: "隐私",
        path: "/private/",
        collapsable: true,
        children: [["/private/01.md", "系统权限"]],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
      {
        title: "关于我们",
        path: "/about.md",
        children: [],
      },
      {
        title: "联系我们",
        path: "/contact.md",
        children: [],
      },
    ],
    displayAllHeaders: false,
    activeHeaderLinks: false,
    searchMaxSuggestions: 10,
    lastUpdated: "更新时间", // string | boolean
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 启用页面滚动效果
    smoothScroll: true,
  },
};
