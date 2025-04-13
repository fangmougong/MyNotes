import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/MyNotes/',
  dest: '.vuepress/dist',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: '题记', link: '/' },
      { text: '数学', link: '/guide/math/' },
      { text: '计算机', link: '/guide/computer/' },
    ],
    sidebar: {
      '/guide/math/': [
        {
          text: '数学',
          collapsible: true,
          children: [
            '/guide/math/algebra.md',
            '/guide/math/geometry.md'
          ]
        }
      ],
      '/guide/computer/': [
        {
          text: '计算机',
          collapsible: true,
          children: [
            '/guide/computer/programming.md',
            '/guide/computer/network.md'
          ]
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  }),
  lang: 'zh-CN',
  title: '我永远相信我的父母，就像他们永远相信我一样',
  description: '这是我的第一个 VuePress 站点',
})
