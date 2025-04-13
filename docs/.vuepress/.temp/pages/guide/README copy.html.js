import comp from "E:/Projects/MyNotes/docs/.vuepress/.temp/pages/guide/README copy.html.vue"
const data = JSON.parse("{\"path\":\"/guide/README%20copy.html\",\"title\":\"欢迎来到我的知识记录网站！这里记录了我在学习和工作中积累的各种知识，希望能对你有所帮助。你可以通过上方的导航栏或侧边栏浏览不同类别的知识。\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"guide/README copy.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
