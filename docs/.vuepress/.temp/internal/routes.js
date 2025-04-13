export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Projects/MyNotes/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"E:/Projects/MyNotes/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"页面的标题"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"E:/Projects/MyNotes/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"欢迎来到我的知识记录网站！这里记录了我在学习和工作中积累的各种知识，希望能对你有所帮助。你可以通过上方的导航栏或侧边栏浏览不同类别的知识。"} }],
  ["/guide/computer/network.html", { loader: () => import(/* webpackChunkName: "guide_computer_network.html" */"E:/Projects/MyNotes/docs/.vuepress/.temp/pages/guide/computer/network.html.js"), meta: {"title":"计算机网络"} }],
  ["/guide/computer/programming.html", { loader: () => import(/* webpackChunkName: "guide_computer_programming.html" */"E:/Projects/MyNotes/docs/.vuepress/.temp/pages/guide/computer/programming.html.js"), meta: {"title":"编程基础"} }],
  ["/guide/computer/", { loader: () => import(/* webpackChunkName: "guide_computer_index.html" */"E:/Projects/MyNotes/docs/.vuepress/.temp/pages/guide/computer/index.html.js"), meta: {"title":"欢迎来到我的知识记录网站！这里记录了我在学习和工作中积累的各种知识，希望能对你有所帮助。你可以通过上方的导航栏或侧边栏浏览不同类别的知识。"} }],
  ["/guide/math/algebra.html", { loader: () => import(/* webpackChunkName: "guide_math_algebra.html" */"E:/Projects/MyNotes/docs/.vuepress/.temp/pages/guide/math/algebra.html.js"), meta: {"title":"代数基础"} }],
  ["/guide/math/geometry.html", { loader: () => import(/* webpackChunkName: "guide_math_geometry.html" */"E:/Projects/MyNotes/docs/.vuepress/.temp/pages/guide/math/geometry.html.js"), meta: {"title":"几何学"} }],
  ["/guide/math/", { loader: () => import(/* webpackChunkName: "guide_math_index.html" */"E:/Projects/MyNotes/docs/.vuepress/.temp/pages/guide/math/index.html.js"), meta: {"title":"欢迎来到我的知识记录网站！这里记录了我在学习和工作中积累的各种知识，希望能对你有所帮助。你可以通过上方的导航栏或侧边栏浏览不同类别的知识。"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Projects/MyNotes/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
