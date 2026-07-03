/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, ServiceItem, TestimonialItem, AdvantageItem, PolicyContent } from './types';

export const ADVANTAGES: AdvantageItem[] = [
  {
    id: "usp-1",
    title: "快速响应客户需求",
    description: "全天候即时值班，客服与工程师多道防线，保障您的消息 3-5 分钟内必有回复，极速对接。"
  },
  {
    id: "usp-2",
    title: "专业技术支持",
    description: "团队成员拥有资深 IT 研发及 AI 架构背景，拒绝机器人敷衍，均由真人专家提供高质高效排查。"
  },
  {
    id: "usp-3",
    title: "长期服务经验",
    description: "深耕行业市场多年，深谙跨境网络及海外 SaaS/AI 基础设施特点，合作稳定有保障。"
  },
  {
    id: "usp-4",
    title: "稳定可靠的服务流程",
    description: "从咨询、评估、配置、交付到售后，每一步均有标准 SOP，进度透明，让您无后顾之忧。"
  },
  {
    id: "usp-5",
    title: "7×24 客服支持",
    description: "打破时区限制，全天候轮班值守。无论是深夜紧急配置还是清晨系统答疑，始终为您护航。"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "service-1",
    title: "软件咨询服务",
    description: "针对多端应用、测试工具和基础架构提供专业选型咨询，帮助您在繁杂的产品中快速锁定高性价比方案。",
    badge: "热门服务",
    features: ["行业软件精准评估", "跨平台兼容性测试咨询", "多套方案成本对比", "正版安全使用合规评估"]
  },
  {
    id: "service-2",
    title: "AI 工具推荐与支持",
    description: "紧跟全球前沿 AI 进展，为您和团队配置及推荐最契合业务流的 AI 写作、绘图、翻译、代码助手及效率平台。",
    badge: "智能高效",
    features: ["海量主流 AI 账号配置", "提示词 (Prompt) 工程调优", "大模型API对接咨询", "AI 辅助工作流集成指导"]
  },
  {
    id: "service-3",
    title: "企业技术支持",
    description: "为广大中小企业、创业团队提供敏捷外包技术支援，涵盖云服务配置、网络调试及高频技术异常排查。",
    badge: "企业首选",
    features: ["海外云主机极速部署", "系统运行环境搭建与优化", "网络链路及节点延迟优化", "定期故障隐患全方位巡检"]
  },
  {
    id: "service-4",
    title: "软件使用指导",
    description: "新手免愁！针对 IT 常用生产力工具、团队协作软件、开发调试组件提供一对一真人保姆级操作及配置指导。",
    badge: "真人指导",
    features: ["高清图文/视频配置教程", "高频报错与排雷清单", "最佳实践应用范例分享", "日常使用疑难杂症随时解答"]
  },
  {
    id: "service-5",
    title: "定制化解决方案建议",
    description: "根据您团队的实际业务规模 and 测试需求，定制最契合、最精炼的技术实施链路，最大化提高资源利用效率。",
    badge: "深度定制",
    features: ["企业核心痛点深度诊断", "自动化测试与运维架构设计", "预算精细化控制配比", "专属技术接口长期跟进"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    name: "李先生 (Vincent Li)",
    role: "软件测试主管 (QA Lead)",
    company: "金融科技创业团队",
    text: "客服回复很快，体验不错。我们团队急需搭建一套海外测试账户和相关的 AI 效率助手，专业客服团队在 5 分钟内完成了全部对接，并且提供了详细的使用指导，非常满意！",
    rating: 5
  },
  {
    id: "review-2",
    name: "陈先生 (Alvin Tan)",
    role: "技术合伙人 (CTO)",
    company: "跨境电商技术服务商",
    text: "整体服务比较专业。遇到几次海外网络环境配置以及 API 连通性报错，技术支持人员能够非常准确地定位到节点设置问题，沟通起来极为顺畅，替我们省去了不少时间成本。",
    rating: 4.5
  },
  {
    id: "review-3",
    name: "谢女士 (May Tse)",
    role: "独立软件测试员 (QA Engineer)",
    company: "自由职业 / 个人工作坊",
    text: "有问题可以及时解决。作为个人软件测试，经常需要调试一些不常用的专业组件 and AI 翻译助手。这里的服务不仅账号质量稳定，而且只要有问题，任何时候发消息给 Telegram 都能很快处理好。",
    rating: 5
  },
  {
    id: "review-4",
    name: "郑先生 (Kevin Chang)",
    role: "创始人 (Founder)",
    company: "AI 营销服务机构",
    text: "初次使用也有人指导。刚开始对某款 AI 绘图平台 and 写作助手的 API 额度包选择有点模糊，专属技术顾问极其耐心地给我算了一笔账，一步步指导我怎么最合规省钱。这种保姆级服务真是难得。",
    rating: 4
  },
  {
    id: "review-5",
    name: "林女士 (Sophia Lim)",
    role: "运营总监 (COO)",
    company: "软件众包开发平台",
    text: "沟通顺畅，流程清晰。在 Telegram 上沟通完需求后直接下单，5 分钟内便收到了完整的部署说明和支持协议。做软件最讲究的就是高效率和诚信可靠，技术服务团队完美契合我们的诉求。",
    rating: 4.5
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "联系与沟通",
    question: "如何联系客服？",
    answer: "您可以通过点击本网站上的任一联系按钮，直接跳转到 Telegram 官方客服（@dadao）、加入 Telegram 官方频道（@dadao22）或者跳转至官方 WhatsApp 与我们取得实时对话。我们的客服团队在收到您的咨询后会立即响应您。"
  },
  {
    category: "售后与保障",
    question: "是否提供售后支持？",
    answer: "是的，我们极其注重客户的长期信任。我们提供全程保姆级的售后跟踪服务，凡是通过我们推荐、配置或购买的技术服务与 AI 工具，只要在使用周期内遇到任何配置失效、账户报错、或者操作疑问，专属客服都会立刻跟进排查，直到问题完美解决。"
  },
  {
    category: "响应速度",
    question: "响应时间大概多久？",
    answer: "我们提供 7×24 小时技术轮班制。日常服务咨询、配置及常规故障报修，平均响应时间为 3-5 分钟；针对复杂的企业网络拓扑优化或定制方案诊断，我们的值班工程师也会在 15 分钟内切入排查并提供初步落地方案。"
  },
  {
    category: "合作方式",
    question: "是否可以长期合作？",
    answer: "非常欢迎！我们不仅为个人开发者、软件测试同仁、创业团队提供灵活的单次服务与配置咨询，还与诸多中小企业建立了长期、深度的 IT 运维外包及 AI 工具统一托管支持，支持定制长期合作合同及保密协议。"
  },
  {
    category: "咨询内容",
    question: "是否提供咨询服务？",
    answer: "是的，我们提供全面的技术咨询服务。我们不仅能解决现成的软件使用故障，还能根据您的业务现状为您出谋划策，包括：各主流 AI 大模型的性价比组合配置方案、团队协作工具部署优化建议、自动化测试框架选型评估等。"
  },
  {
    category: "支付与安全性",
    question: "你们支持哪些结算或支付方式？",
    answer: "为了保障隐私安全，我们目前仅支持 USDT 虚拟货币结算。所有交易与咨询沟通均在高度加密的安全通讯工具中进行，全力保障您的个人及财务隐私安全。"
  }
];

export const PRIVACY_POLICY: PolicyContent = {
  title: "Dadao 隐私政策",
  lastUpdated: "2026年7月1日",
  sections: [
    {
      heading: "1. 信息收集与用途",
      paragraphs: [
        "Dadao 致力于保护所有用户的个人及企业隐私。我们绝不收集任何与服务交付无关的冗余信息。在您向我们发起咨询（通过 Telegram/WhatsApp）时，我们仅会接收您主动提供的联络凭证（如 Telegram 账号、WhatsApp 手机号码）以及与您待解决的软件或 AI 问题相关的描述性信息。",
        "这些信息将被唯一且排他性地用于为您提供软件解答、账户配置、技术支持及售后问题排查，绝不挪作他用。"
      ]
    },
    {
      heading: "2. 信息安全保障",
      paragraphs: [
        "我们深知 IT 数据与企业技术架构的机密性。Dadao 内部对客户资料及配置参数执行极高规格的安全管制：所有客户咨询记录、服务器授权密钥、软件凭证仅在高度加密的环境中流转，且到期即焚；绝不向任何第三方机构或个人透露、销售或租借您的任何数据。"
      ]
    },
    {
      heading: "3. 您的隐私权利",
      paragraphs: [
        "根据相关司法管辖区法律，您有权随时要求查阅、修改、或彻底删除我们在沟通中留存的您的任何个人资料。您只需向我们的 Telegram 客服（@dadao）或 WhatsApp 窗口发送一句“删除我的数据”，我们将在 1 小时内彻底销毁全部备份，不留任何痕迹。"
      ]
    }
  ]
};

export const TERMS_OF_SERVICE: PolicyContent = {
  title: "Dadao 服务条款",
  lastUpdated: "2026年7月1日",
  sections: [
    {
      heading: "1. 接受本服务条款",
      paragraphs: [
        "Dadao 网站及相关咨询平台、交付方案由服务团队（以下简称“我们”）按照以下条款和条件为您提供。在您点击网站上的任何 Telegram/WhatsApp 联系按钮、浏览本频道或采购我们的任何软件及 AI 支持服务时，即表示您已阅读、理解并同意受本服务条款的约束。"
      ]
    },
    {
      heading: "2. 服务范畴与声明",
      paragraphs: [
        "Dadao 专注于提供软件选型咨询、AI 工具推荐与配置指导、企业技术支持以及特定应用的最佳实践教学。我们不对由软件原始服务商（如 OpenAI、Vercel、Stripe 或各类第三方 SaaS 平台）自身的突发网络故障、政策调整、物理中断或服务停摆导致的间接损失承担连带责任，但我方承诺会全力协助客户进行降级、迁移或退款处理。"
      ]
    },
    {
      heading: "3. 客户责任与合规",
      paragraphs: [
        "客户在使用我们推荐或协助配置的任何工具时，必须遵守相关司法管辖区及相关工具原厂的合法合规使用政策。严禁将我们提供的任何技术支持用于违法渗透、黑客攻击、伪造信息或其他非法业务。一旦发现违法用途，我们有权单方面终止该客户的 7×24 小时售后支持，且不予退款。"
      ]
    }
  ]
};

export const COOKIE_POLICY: PolicyContent = {
  title: "Dadao Cookie 政策",
  lastUpdated: "2026年7月1日",
  sections: [
    {
      heading: "1. 我们如何使用 Cookie",
      paragraphs: [
        "本网站仅使用最基本的、非追踪性质的 Cookie 和 LocalStorage 存储介质，以便在您使用本页面时记录您的交互偏好 (如您对 FAQ 部分的检索偏好)。",
        "我们不使用第三方偏好追踪 Cookie，也不将您的任何 Cookie 共享给任何社交媒体平台或广告代理商，100% 维持干净、纯粹的浏览体验。"
      ]
    },
    {
      heading: "2. 如何管理 Cookie",
      paragraphs: [
        "您完全可以根据自身喜好管理或删除 Cookie。大多数主流浏览器都允许您在设置中一键屏蔽或清除 Cookie。请注意，彻底禁用 Cookie 可能会导致您在下一次访问本站时需要重新记录，但完全不影响您点击按钮联系我们的核心功能。"
      ]
    }
  ]
};
