const BLOG = {
  title: 'Shannon', // 博客标题
  author: 'Shannon Wang', // 作者名称
  email: ' shannon@shannonwang.top', // 替换为您的 Gravatar 邮箱
  link: 'https://shannonwang.top', // 博客链接
  description: 'I am Shannon Wang, a software engineer. Nice to meet you!', // 博客描述
  lang: 'en-US', // 博客语言 ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // 时区，用于解释 Notion 文章的日期
  appearance: 'auto', // 外观模式 ['light', 'dark', 'auto']
  font: 'sans-serif', // 字体 ['sans-serif', 'serif']
  lightBackground: '#ffffff', // 浅色模式背景色（十六进制值）
  darkBackground: '#18181B', // 深色模式背景色（十六进制值）
  path: '', // 部署路径，如果要在子文件夹中部署 Nobelium，则填写文件夹名
  since: 2021, // 博客创建年份，如果留空则使用当前年份
  postsPerPage: 7, // 每页显示的文章数量
  sortByDate: false, // 是否按日期排序文章
  showAbout: true, // 是否显示"关于"页面
  showArchive: true, // 是否显示归档页面
  autoCollapsedNavBar: false, // 是否自动折叠导航栏
  ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // 生成 OG 图像的链接
  socialLink: 'https://twitter.com/craigaryhart', // 社交媒体链接
  seo: {
    keywords: ['Blog', 'Website', 'Notion'], // SEO 关键词
    googleSiteVerification: '' // Google 站点验证码
  },
  notionPageId: process.env.NOTION_PAGE_ID, // Notion 页面 ID（不要更改）
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Notion 访问令牌（如果不想公开数据库）
  analytics: {
    provider: '', // 分析提供商，支持 Google Analytics 和 Ackee，填写 'ga' 或 'ackee'，留空则禁用
    ackeeConfig: {
      tracker: '', // Ackee 跟踪器 URL
      dataAckeeServer: '', // Ackee 服务器 URL
      domainId: '' // Ackee 域名 ID
    },
    gaConfig: {
      measurementId: '' // Google Analytics 测量 ID
    }
  },
  comment: {
    // 支持的评论插件提供商：gitalk, utterances, cusdis
    provider: 'gitalk', // 使用 Gitalk 作为评论系统
    gitalkConfig: {
      repo: 'nobelium', // 存储评论的 GitHub 仓库名
      owner: 'freedomshannon', // 仓库所有者的 GitHub 用户名
      admin: ['freedomshannon'], // 可以管理评论的 GitHub 用户名列表
      clientID: 'Ov23liyTGVf97Gdz0KbR', // 从 GitHub OAuth App 获取的客户端 ID
      clientSecret: 'f4cabcc714f921f9b8c856c1834f978ed0105746', // 从 GitHub OAuth App 获取的客户端密钥
      distractionFreeMode: false // 是否启用无干扰模式
    },
    utterancesConfig: {
      repo: '' // Utterances 评论系统的 GitHub 仓库
    },
    cusdisConfig: {
      appId: '', // Cusdis 应用 ID
      host: 'https://cusdis.com', // Cusdis 主机地址
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // Cusdis 脚本源
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // 区分开发和生产环境
}

// 导出 BLOG 配置
module.exports = BLOG
