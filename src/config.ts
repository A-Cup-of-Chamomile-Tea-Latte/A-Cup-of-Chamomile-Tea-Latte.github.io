import { BASE_URL } from "./utils/config";

export default {
  site: {
    title: "Dingding 真棒！",
    subtitle: "這真的是個稱職的研究生嗎？都在用 AI",
    description: "一個夢想與實際不相符的計畫",
    keywords: "ECON., Econometrics, econometrics, statistics, research notes",
    author: "A Cup of Chamomile Tea Latte",
    language: "zh-TW",
  },


  sidebar: {
    BASE_URL: BASE_URL,
    avatar: "/images/avatar0.png",
    position: "left", // left or right
  },

  // Sidebar widgets (left column)
  widgets: [
    "recent_posts",
    "tagcloud",

    // NOTE (future): add "category" back once your taxonomy stabilizes
    // "category",
  ],

  menu: [
    // 核心頁面
    { name: "Home", url: "/" },
    { name: "Archives", url: "/archives" },
    { name: "About", url: "/about" },

    // 知識庫
    { name: "KB", url: "/kb/" },

    // Future placeholders (uncomment when you actually create these pages)
    // { name: "Tools", url: "/tools/" },   // econometrics / stats "menu-style" toolbox
    // { name: "Search", url: "/search/" }, // if you add a site search page
    // { name: "Projects", url: "/projects/" },
  ],

  banner: "/images/banner0.png", // which means themes/reimu/source/images/banner.webp
  // You can also write it in the form of the following url
  // banner: "https://example.com"

  // If you want to use the srcset attribute, please enable it
  banner_srcset: {
    enable: false,
    // srcset: [
    //   { src: "/images/banner-600w.webp", media: "(max-width: 479px)" },
    //   { src: "/images/banner-800w.webp", media: "(max-width: 799px)" },
    //   { src: "/images/banner.webp", media: "(min-width: 800px)" },
    // ],
  },

  footer: {
    since: 2020, // Site start year shown in footer (e.g., "© 2020-2026")
    powered: true, // Show theme/framework credit ("Powered by ...")

    // Page / site counters (theme-dependent)
    count: false, // (If supported) show post/page count or runtime counter
    // busuanzi: false, // CN-based visitor counter service; enable only if you intentionally use it

    // ICP / 备案（你目前決定跳過；若未來有需求再打開）
    // icp: {
    //   icpnumber: "", // e.g., "京ICP备xxxx号"
    //   beian: "",     // additional备案 text (theme-dependent)
    //   recordcode: "",// 公安备案号 (theme-dependent)
    // },
    // moe_icp: {
    //   icpnumber: "",
    // },

    // --- Optional placeholders (uncomment if your theme supports them) ---
    // rss: true, // Show RSS link in footer (if theme supports)
    // social: true, // Show social icons in footer (if theme supports)
  },

  analytics: {
    baidu_analytics: false,
    google_analytics: false,
    clarity: false,
  },

  social: {
    // email: mailto:xxx@gmail.com
    github: "https://github.com/A-Cup-of-Chamomile-Tea-Latte",
    instagram: "https://www.instagram.com/chamomile_ding/",
    email: "mailto:rewqazxcv0527@gmail.com",
    telegram: "https://t.me/NTU_Chamomile_Tea",

    // (Optional placeholders)
    // linkedin: "https://www.linkedin.com/in/yourname",
    // facebook: "https://www.facebook.com/yourname",
    // youtube: "https://www.youtube.com/channel/yourname",
  },

  // Comments (all disabled for now; enable later when ready)
  // https://valine.js.org
  valine: {
    enable: false, // if you want to use valine,please set this value is true
    appId: "", // leancloud application app id
    appKey: "", // leancloud application app key
    pageSize: 10, // comment list page size
    avatar: "mp", // gravatar style https://valine.js.org/#/avatar
    lang: "zh-cn", // i18n: zh-cn/en
    placeholder: "Just go go", // valine comment input placeholder
    guest_info: "nick,mail,link", // valine comment header info
    recordIP: true,
    highlight: true,
    visitor: false,
    serverURLs: "",
  },

  // https://waline.js.org/
  waline: {
    enable: false,
    serverURL: "",
    lang: "zh-CN",
    locale: {},
    emoji: [
      "https://unpkg.com/@waline/emojis@1.2.0/weibo",
      "https://unpkg.com/@waline/emojis@1.2.0/alus",
      "https://unpkg.com/@waline/emojis@1.2.0/bilibili",
      "https://unpkg.com/@waline/emojis@1.2.0/qq",
      "https://unpkg.com/@waline/emojis@1.2.0/tieba",
      "https://unpkg.com/@waline/emojis@1.2.0/tw-emoji",
    ],
    meta: ["nick", "mail", "link"],
    requiredMeta: ["nick", "mail"],
    wordLimit: 0,
    pageSize: 10,
    pageview: true,
  },

  // https://github.com/gitalk/gitalk/blob/master/readme-cn.md
  gitalk: {
    enable: false,
    clientID: "",
    clientSecret: "",
    repo: "",
    owner: "",
    admin: [],
  },

  // https://giscus.app/zh-CN
  giscus: {
    enable: false,
    repo: "",
    repoId: "",
    category: "",
    categoryId: "",
    mapping: "pathname",
    strict: 0,
    reactionsEnabled: 1,
    emitMetadata: 0,
    inputPosition: "bottom",
  },

  // https://utteranc.es
  utterances: {
    enable: false,
    repo: "owner/repo",
    issue_term: "title",
    theme: "auto",
  },

  // https://twikoo.js.org
  twikoo: {
    enable: false,
    envId: "",
    region: "",
  },

  // https://disqus.com
  disqus: {
    enable: false,
    shortname: "",
    count: true,
  },

  friend: [
    {
      name: "D-Sketon",
      url: "https://d-sketon.github.io/",
      desc: "Main Site with hexo-theme-reimu",
      avatar: "https://d-sketon.github.io/avatar/avatar.webp",
    },
  ],

  copyright: {
    enable: true,
    content: {
      author: true,
      link: true,
      title: true,
      date: false,
      updated: false,
      license: true,
      license_type: "by-nc-sa",
    },
  },

  preloader: {
    enable: true,
    text: "少女祈祷中...",
    rotate: true, // whether to rotate the icon
  },

  // firework (too flashy for now; kept as commented block for future)
  // see https://github.com/D-Sketon/mouse-firework
  // firework: {
  //   enable: true,              // Mouse click firework effect
  //   disable_on_mobile: false,  // Disable effect on mobile devices
  //   options: {
  //     excludeElements: ["a", "button"], // Do not trigger on links/buttons
  //     particles: [
  //       {
  //         shape: "circle",
  //         move: ["emit"],
  //         easing: "easeOutExpo",
  //         colors: ["var(--red-1)", "var(--red-2)", "var(--red-3)", "var(--red-4)"],
  //         number: 20,
  //         duration: [1200, 1800],
  //         shapeOptions: { radius: [16, 32], alpha: [0.3, 0.5] },
  //       },
  //       {
  //         shape: "circle",
  //         move: ["diffuse"],
  //         easing: "easeOutExpo",
  //         colors: ["var(--red-0)"],
  //         number: 1,
  //         duration: [1200, 1800],
  //         shapeOptions: { radius: 20, alpha: [0.2, 0.5], lineWidth: 6 },
  //       },
  //     ],
  //   },
  // },

  // show categories card on home page
  home_categories: {
    enable: false, // Enable later when homepage is designed as a navigational landing page
    content: [
      // { categories: "Econometrics" },
      // { categories: "Statistics" },
      // { categories: "Research Notes" },
      // { categories: "Tools" },
    ],
  },

  triangle_badge: {
    enable: true,
    type: "github",
    link: "https://github.com/D-Sketon/astro-theme-reimu",
  },

  // whether to display the notification when the article is outdated
  outdate: {
    enable: false,
    daysAgo: 180, // The number of days after which the article is considered outdated
  },

  // Share buttons (platforms supported by theme; IG/Threads typically not supported here)
  share: ["facebook", "linkedin"],

  sponsor: {
    enable: false,
    qr: [
      // { name: "支付宝", src: "/sponsor/alipay.jpg" },
      // { name: "微信", src: "/sponsor/wechat.png" },
    ],
  },
};


