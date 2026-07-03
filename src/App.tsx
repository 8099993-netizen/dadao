/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Cpu, 
  Search, 
  Zap, 
  Layers, 
  Menu, 
  X,
  Smartphone,
  Check,
  Sparkles,
  BookOpen,
  Settings,
  ChevronRight,
  ChevronUp
} from 'lucide-react';

import { ADVANTAGES, SERVICES, TESTIMONIALS } from './data';
import { FaqAccordion } from './components/FaqAccordion';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | 'cookie' | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Monitor scroll for "Back to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Icon mapping for services bento grid
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'service-1': return <Search className="w-5 h-5 text-blue-600" />;
      case 'service-2': return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'service-3': return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'service-4': return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'service-5': return <Settings className="w-5 h-5 text-pink-600" />;
      default: return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#eef2f6] text-slate-800 selection:bg-blue-500 selection:text-white font-sans relative overflow-x-hidden">
      
      {/* 1. Global Ambient Glow Elements (White Glassmorphic Radial Accents) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[20%] w-[550px] h-[550px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse" />
        <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] rounded-full bg-purple-400/10 blur-[130px]" />
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 2. Header / Navigation */}
      <header id="navbar" className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-display font-black tracking-wider text-slate-900">
              Dadao
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#advantages" className="hover:text-blue-600 transition-colors">核心优势</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">服务内容</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">客户口碑</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">常见问题</a>
          </nav>

          {/* Desktop Header CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://t.me/dadao" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/10 flex items-center space-x-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>立即联系 @dadao</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            title="菜单"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl p-4 space-y-3 font-sans">
            <a 
              href="#advantages" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-600 font-medium"
            >
              核心优势
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-600 font-medium"
            >
              服务内容
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-600 font-medium"
            >
              客户口碑
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-600 font-medium"
            >
              常见问题
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <a 
                href="https://t.me/dadao" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center py-2.5 bg-blue-600 text-white rounded-lg font-bold text-xs flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Telegram 客服 @dadao</span>
              </a>
              <a 
                href="https://wa.me/message/3J7JFFLXCC43L1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center py-2.5 border border-emerald-200 text-emerald-600 bg-emerald-50/50 hover:bg-emerald-50 rounded-lg font-bold text-xs flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 客服</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Section */}
      <section id="hero" className="relative pt-28 pb-20 md:pt-44 md:pb-32 px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center">
        {/* Floating Top Trust Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/75 text-blue-600 text-xs font-semibold font-mono mb-6 backdrop-blur-sm shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
          <span>软件与 AI 提效前沿首选</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 max-w-4xl leading-tight">
          Dadao
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2 mb-4">
          一站式软件与 AI 工具服务平台
        </h3>

        {/* Short persuasive description */}
        <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mt-4 mb-10 font-sans font-medium">
          提供专业的软件服务、AI 工具推荐与定制环境技术支持。
          帮助开发者、软件测试人员和创业团队解决节点不畅、环境难配等痛点，提供 7×24 极速售后。
        </p>

        {/* High Conversion CTA Row */}
        <div className="w-full max-w-md md:max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-3.5 px-4 mb-12">
          
          <a 
            href="https://t.me/dadao" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/15 flex items-center justify-center space-x-2 group scale-100 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Send className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            <span>联系客服 @dadao</span>
          </a>

          <a 
            href="https://t.me/dadao22" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="py-3 px-4 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 text-slate-700 font-bold text-sm transition-all flex items-center justify-center space-x-2 hover:bg-slate-50 cursor-pointer"
          >
            <Zap className="w-4 h-4 text-purple-600 shrink-0" />
            <span>查看频道 @dadao22</span>
          </a>

          <a 
            href="https://wa.me/message/3J7JFFLXCC43L1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-500/10 flex items-center justify-center space-x-2 scale-100 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Smartphone className="w-4 h-4 text-white shrink-0" />
            <span>WhatsApp 联系</span>
          </a>
        </div>

        {/* Bullet Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xs md:text-sm text-slate-500 font-bold font-mono">
          <div className="flex items-center space-x-1.5">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <span>真人专家 3分钟回复</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle className="w-4 h-4 text-purple-600" />
            <span>7×24 小时技术护航</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>一站式无忧售后</span>
          </div>
        </div>


      </section>

      {/* 4. Core Advantages */}
      <section id="advantages" className="py-20 bg-white/30 border-y border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase text-blue-600 tracking-widest font-bold mb-3">CORE COMPETENCE</h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              为什么选择 Dadao？
            </p>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              我们不只是工具推荐商，更是您的全天候专属技术合伙人。以极速、专业和超强售后兜底建立长期信任。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, index) => (
              <div 
                key={adv.id} 
                className="glass-panel glass-panel-hover rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/5 border border-blue-200 flex items-center justify-center text-blue-600 mb-5 font-mono font-bold text-sm">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-display font-bold text-slate-900 mb-2.5">
                    {adv.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans font-medium">
                    {adv.description}
                  </p>
                </div>
                {/* Visual Accent */}
                <div className="absolute bottom-4 right-4 text-slate-900/5 font-display font-black text-4xl select-none">
                  USP
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Service Introduction */}
      <section id="services" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase text-purple-600 tracking-widest font-bold mb-3">OUR EXPERTISE</h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              提供全方位技术与 AI 工具推荐服务
            </p>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              无论您是独立测试人员需要辅助工具，还是初创团队寻求轻量化集成，我们均可为您量身定制专属方案。
            </p>
          </div>

          {/* Bento Style Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div 
                key={srv.id}
                className="rounded-2xl border border-slate-200/80 bg-white/40 p-6 md:p-8 flex flex-col justify-between hover:border-blue-300 hover:bg-white/80 transition-all duration-300 relative group"
              >
                <div>
                  {/* Service Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white border border-slate-200">
                      {getServiceIcon(srv.id)}
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-50 text-blue-600 border border-blue-100">
                      {srv.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-bold text-slate-900 mb-3">
                    {srv.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans mb-6 font-medium">
                    {srv.description}
                  </p>
                </div>

                {/* Feature Bullet Points */}
                <div className="border-t border-slate-200/60 pt-4 space-y-2">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-[11px] text-slate-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 mb-4 font-mono font-bold">
              💡 遇到特定的非标准软件需求？别担心，我们支持定制化解决方案。
            </p>
            <a 
              href="https://t.me/dadao" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-800 rounded-xl border border-slate-200 hover:border-slate-300 text-xs font-bold transition-all cursor-pointer"
            >
              <span>获取定制化解决方案咨询</span>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </a>
          </div>

        </div>
      </section>

      {/* 6. High Trust Metric Panel */}
      <section className="py-12 bg-gradient-to-r from-blue-50/50 via-white/50 to-indigo-50/50 border-y border-slate-200/60 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-display font-black text-blue-600 font-mono">
              &lt; 3 分钟
            </div>
            <div className="text-xs text-slate-600 mt-1 font-bold">平均客服响应速度</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-black text-purple-600 font-mono">
              99.8%
            </div>
            <div className="text-xs text-slate-600 mt-1 font-bold">客户服务好评率</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-black text-emerald-600 font-mono">
              5,000+
            </div>
            <div className="text-xs text-slate-600 mt-1 font-bold">已服务企业与IT从业者</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-black text-indigo-600 font-mono">
              7×24 小时
            </div>
            <div className="text-xs text-slate-600 mt-1 font-bold">不间断技术值班守护</div>
          </div>
        </div>
      </section>

      {/* 8. Customer Reviews */}
      <section id="testimonials" className="py-20 bg-white/30 border-t border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase text-emerald-600 tracking-widest font-bold mb-3">REAL FEEDBACK</h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              客户的真实声音
            </p>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              我们在技术圈沉淀了扎实的用户口碑。我们坚信真诚的服务胜过任何浮夸的辞藻。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div 
                key={test.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 text-amber-400 mb-4">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const starValue = index + 1;
                      if (test.rating >= starValue) {
                        return <span key={index} className="text-sm">★</span>;
                      } else if (test.rating >= starValue - 0.5) {
                        return (
                          <span key={index} className="text-sm relative inline-block text-slate-200 select-none">
                            <span className="absolute top-0 left-0 overflow-hidden w-1/2 text-amber-400">★</span>
                            ★
                          </span>
                        );
                      } else {
                        return <span key={index} className="text-sm text-slate-200 select-none">★</span>;
                      }
                    })}
                  </div>
                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-sans italic mb-6 font-medium">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-800 font-sans">{test.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{test.role}</div>
                  </div>
                  <div className="text-[10px] text-blue-600 font-mono text-right bg-blue-50 px-2 py-1 rounded border border-blue-100 font-bold">
                    {test.company}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className="py-20 border-t border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase text-blue-600 tracking-widest font-bold mb-3">COMMON QUESTIONS</h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              常见问题解答
            </p>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              为您整理日常配置、响应和结算相关的常见技术问题答疑。
            </p>
          </div>

          <FaqAccordion />

        </div>
      </section>

      {/* 10. CTA Strong Lead Section */}
      <section id="cta-contact" className="py-20 bg-gradient-to-t from-blue-50/20 via-slate-50/50 to-white/80 border-t border-slate-200/60 z-10 relative text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-mono font-bold mb-6 border border-blue-100 shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            <span>极速连线 · 5分钟内对接完毕</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-4">
            立即联系 Dadao
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed font-sans font-medium">
            获取专业软件与 AI 服务支持。专家团队全天候整装待发，让您的工作流及测试环境不再卡壳，轻松释放效率。
          </p>

          {/* Interactive Handle Display & Copy Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            
            <a 
              href="https://t.me/dadao" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl text-center group transition-all duration-300 hover:border-blue-400 hover:-translate-y-1.5 cursor-pointer flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600 border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                <Send className="w-7 h-7" />
              </div>
              <div className="text-lg font-bold text-slate-800">Telegram 客服</div>
              <div className="text-xl text-blue-600 mt-2 font-black tracking-wide">@dadao</div>
              <div className="text-xs text-slate-500 mt-4 hover:text-slate-700 font-medium bg-slate-100/80 group-hover:bg-blue-50 group-hover:text-blue-600 py-1.5 px-4 rounded-full transition-colors duration-300">
                点击发起会话
              </div>
            </a>

            <a 
              href="https://t.me/dadao22" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl text-center group transition-all duration-300 hover:border-purple-400 hover:-translate-y-1.5 cursor-pointer flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4 text-purple-600 border border-purple-100 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7" />
              </div>
              <div className="text-lg font-bold text-slate-800">官方 Telegram 频道</div>
              <div className="text-xl text-purple-600 mt-2 font-black tracking-wide">@dadao22</div>
              <div className="text-xs text-slate-500 mt-4 hover:text-slate-700 font-medium bg-slate-100/80 group-hover:bg-purple-50 group-hover:text-purple-600 py-1.5 px-4 rounded-full transition-colors duration-300">
                点击加入频道
              </div>
            </a>

            <a 
              href="https://wa.me/message/3J7JFFLXCC43L1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl text-center group transition-all duration-300 hover:border-emerald-400 hover:-translate-y-1.5 cursor-pointer flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600 border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-7 h-7" />
              </div>
              <div className="text-lg font-bold text-slate-800">WhatsApp 极速咨询</div>
              <div className="text-xl text-emerald-600 mt-2 font-black tracking-wide">扫码/一键联络</div>
              <div className="text-xs text-slate-500 mt-4 hover:text-slate-700 font-medium bg-slate-100/80 group-hover:bg-emerald-50 group-hover:text-emerald-600 py-1.5 px-4 rounded-full transition-colors duration-300">
                点击直接咨询
              </div>
            </a>

          </div>


        </div>
      </section>

      {/* 11. Footnote / Navigation Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8 z-10 relative text-sm font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-base font-display font-bold text-white tracking-wider">Dadao</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              专业软件服务与 AI 工具推荐平台。<br />
              我们深耕技术圈，致力于为软件测试团队、IT 从业者和创业先锋提供高质量、长效稳定的配置交付与 7×24 客服响应。
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              © 2026 Dadao Services Group. All rights reserved.
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h5 className="text-xs font-mono uppercase text-white font-bold tracking-widest">快速导航</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#advantages" className="hover:text-blue-400 transition-colors">核心优势</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">服务内容</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">客户口碑</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">日常答疑 (FAQ)</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase text-white font-bold tracking-widest">联系通道</h5>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                Telegram: <a href="https://t.me/dadao" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@dadao</a>
              </li>
              <li>
                Channel: <a href="https://t.me/dadao22" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">@dadao22</a>
              </li>
              <li>
                WhatsApp: <a href="https://wa.me/message/3J7JFFLXCC43L1" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">1对1 极速窗口</a>
              </li>
              <li className="text-[10px] text-slate-500 font-sans">
                支持线上极速服务交付 (咨询前建议线上预约)
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase text-white font-bold tracking-widest">合规政策 (Google Ads)</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  id="open-privacy-policy-btn"
                  onClick={() => setPolicyType('privacy')} 
                  className="text-slate-400 hover:text-white transition-colors underline decoration-dotted text-left cursor-pointer"
                >
                  隐私政策 (Privacy Policy)
                </button>
              </li>
              <li>
                <button 
                  id="open-terms-of-service-btn"
                  onClick={() => setPolicyType('terms')} 
                  className="text-slate-400 hover:text-white transition-colors underline decoration-dotted text-left cursor-pointer"
                >
                  服务条款 (Terms of Service)
                </button>
              </li>
              <li>
                <button 
                  id="open-cookie-policy-btn"
                  onClick={() => setPolicyType('cookie')} 
                  className="text-slate-400 hover:text-white transition-colors underline decoration-dotted text-left cursor-pointer"
                >
                  Cookie 政策 (Cookie Policy)
                </button>
              </li>

            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 text-center text-[11px] text-slate-500 font-mono flex flex-col sm:flex-row justify-between items-center gap-4">
          <div />
          <div>
            当前 UTC 时间: 2026-07-02 00:15:30
          </div>
        </div>
      </footer>

      {/* 12. Persistent Mobile Sticky Footer Bar */}
      <div id="mobile-sticky-dock" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-slate-200/80 p-3 flex gap-3.5 items-center justify-stretch shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        
        <a 
          href="https://t.me/dadao" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center flex items-center justify-center space-x-1.5 shadow-sm cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Telegram 客服 @dadao</span>
        </a>

        <a 
          href="https://wa.me/message/3J7JFFLXCC43L1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center space-x-1.5 shadow-sm cursor-pointer"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>WhatsApp 1对1 咨询</span>
        </a>

      </div>

      {/* 13. Back to Top Button */}
      {showScrollTop && (
        <button 
          id="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 md:bottom-8 right-6 z-40 p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-all shadow-md cursor-pointer"
          title="返回顶部"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

      {/* 14. Clipboard Copy Notification (Toast) */}
      {toastMessage && (
        <div className="fixed bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-sans text-xs font-bold shadow-lg shadow-blue-500/10 flex items-center space-x-1.5 animate-fade-in">
          <CheckCircle className="w-4 h-4 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 15. Compliance Legal Modals */}
      <LegalModals 
        policyType={policyType} 
        onClose={() => setPolicyType(null)} 
      />

    </div>
  );
}
