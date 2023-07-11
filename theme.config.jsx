export default {
  logo: <strong>泛图云</strong>,
  // project: {
  //   link: 'https://www.fantuyun.com/'
  // },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 泛图云'
    }
  },
  search: {
    placeholder:"搜索文档内容"
  },
  toc: {
    title:"该页面"
  },
  editLink:false,
  feedback:false,
  themeSwitch: {
    useOptions() {
      return {
        light: '浅色',
        dark: '深色',
        system: '系统主题'
      }
    }
  },
  footer: {
    text: 'Copyright © 2023 泛图云',
  }
  // ...
}