/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, MessageSquare, Check, Copy } from 'lucide-react';

interface WizardOption {
  value: string;
  label: string;
  description: string;
}

const ROLES: WizardOption[] = [
  { value: 'qa', label: '软件测试人员 (QA)', description: '关注效率工具、测试辅助账号、系统稳定部署' },
  { value: 'it', label: 'IT从业者 / 开发者', description: '关注服务器环境搭建、API配置、AI代码助手' },
  { value: 'startup', label: '创业团队 / 创始人', description: '关注技术外包、效率工具推荐、定制成本控制' },
  { value: 'enterprise', label: '企业用户 / 采购', description: '关注长期合规服务、7×24小时深度技术支持' },
];

const PAINS: WizardOption[] = [
  { value: 'accounts', label: '需要高性价比 AI 账号与效率工具', description: '寻找稳定、合规且成本低廉的主流 AI 工具平台支持' },
  { value: 'setup', label: '缺乏专业的软件配置与日常指导', description: '面对复杂的海外云部署或调试环境需要真人指导排雷' },
  { value: 'support', label: '需要长期稳定可靠的企业级服务流程', description: '核心服务不能中断，寻求专业的 7×24 极速响应兜底' },
  { value: 'custom', label: '定制化技术解决方案与自动化建议', description: '团队需要按需设计自动化脚本或降本增效的方案诊断' },
];

export const InteractiveWizard: React.FC = () => {
  const [role, setRole] = useState('qa');
  const [pain, setPain] = useState('accounts');
  const [copied, setCopied] = useState(false);

  // Generate recommendation text
  const getRecommendation = () => {
    let serviceName = "大盗一站式软件服务";
    let estSavings = "每月省去 15+ 小时排错时间";
    let valuePro = "5折专享新手尝鲜权益";
    
    if (role === 'qa') {
      if (pain === 'accounts') {
        serviceName = "软件测试 AI 提效助手专配";
        estSavings = "测试账号对接时间缩短 80%";
        valuePro = "支持 FPS 转数快等多种本地便捷支付";
      } else {
        serviceName = "QA 专属软件环境真人调试顾问";
        estSavings = "15 分钟极速报错排查解决";
        valuePro = "专属技术合伙人级别真人保姆级指引";
      }
    } else if (role === 'it') {
      serviceName = "IT 专家级云环境与 API 对接";
      estSavings = "研发部署链路提效 40%";
      valuePro = "提供完美防封与链路节点延迟优化";
    } else if (role === 'startup') {
      serviceName = "创业团队极速技术外包与轻量集成";
      estSavings = "相比雇佣全职 IT 节约 75% 资金";
      valuePro = "支持长期定制化 SLA 与保密协议";
    } else {
      serviceName = "企业级 7×24 深度全托管技术守护";
      estSavings = "确保核心平台 99.9% 稳定运行";
      valuePro = "最高优先级的多渠道实时专家连线服务";
    }

    const currentRoleLabel = ROLES.find(r => r.value === role)?.label || "";
    const currentPainLabel = PAINS.find(p => p.value === pain)?.label || "";

    const templateText = `您好，大盗客服！我是一名【${currentRoleLabel}】。我们在【${currentPainLabel}】方面遇到了瓶颈，看到大盗提供的【${serviceName}】推荐，希望能咨询相关细节，请问现在有专家在吗？`;

    return { serviceName, estSavings, valuePro, templateText };
  };

  const { serviceName, estSavings, valuePro, templateText } = getRecommendation();

  const handleCopy = () => {
    navigator.clipboard.writeText(templateText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl glass-panel border border-white/60 p-6 md:p-8 relative overflow-hidden shadow-lg shadow-blue-900/5">
      {/* Absolute Decorative Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center space-x-2 text-blue-600 mb-6">
        <Sparkles className="w-5 h-5 animate-pulse text-blue-500" />
        <span className="text-sm font-semibold tracking-wider uppercase font-mono">Dadao Wizard</span>
        <span className="px-2 py-0.5 text-xs rounded-full bg-blue-50 text-blue-600 border border-blue-100 font-bold">AI 极速匹配</span>
      </div>

      <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-2">
        10秒智能服务匹配器
      </h3>
      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        只需选择您的身份和目前遇到的首要痛点，系统将为您定制最契合、最省成本的技术方案。
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Step Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1 */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-500 tracking-wider mb-2 font-bold">
              第一步：您的业务身份
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ROLES.map((r) => (
                <button
                  key={r.value}
                  onClick={() => setRole(r.value)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    role === r.value
                      ? 'bg-blue-50/80 border-blue-400 text-blue-900 ring-1 ring-blue-300/30 shadow-sm shadow-blue-100'
                      : 'border-slate-200/80 bg-white/40 text-slate-600 hover:border-slate-300 hover:bg-white/70'
                  }`}
                >
                  <div className={`font-semibold text-xs ${role === r.value ? 'text-blue-600' : 'text-slate-800'}`}>{r.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{r.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-500 tracking-wider mb-2 font-bold">
              第二步：您最迫切的痛点
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {PAINS.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPain(p.value)}
                  className={`p-3 rounded-xl border text-left transition-all flex items-start space-x-3 cursor-pointer ${
                    pain === p.value
                      ? 'bg-indigo-50/80 border-indigo-400 text-indigo-900 ring-1 ring-indigo-300/30 shadow-sm shadow-indigo-100'
                      : 'border-slate-200/80 bg-white/40 text-slate-600 hover:border-slate-300 hover:bg-white/70'
                  }`}
                >
                  <div className={`w-3.5 h-3.5 rounded-full border mt-0.5 flex items-center justify-center ${
                    pain === p.value ? 'border-indigo-400 bg-indigo-500' : 'border-slate-300 bg-white'
                  }`}>
                    {pain === p.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className={`font-semibold text-xs ${pain === p.value ? 'text-indigo-600' : 'text-slate-800'}`}>{p.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{p.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Match Output */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between p-6 rounded-xl bg-white/80 border border-slate-200/80 shadow-md">
          <div>
            <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-1 font-bold">匹配推荐方案</div>
            <div className="text-lg font-display font-bold text-slate-900 mb-3">
              {serviceName}
            </div>

            <div className="space-y-2.5 my-4">
              <div className="flex items-center space-x-2 text-xs text-slate-700 bg-blue-50 p-2 rounded border border-blue-100">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>核心提效：<strong className="text-blue-700">{estSavings}</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-700 bg-indigo-50 p-2 rounded border border-indigo-100">
                <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>尊享权益：<strong className="text-indigo-700">{valuePro}</strong></span>
              </div>
            </div>

            {/* Pre-fill Template Copybox */}
            <div className="bg-slate-50 rounded p-3 border border-slate-200/60 mb-4 relative group">
              <div className="text-[10px] text-slate-500 font-semibold mb-1">💡 推荐客服对接口令 (发送此口令极速响应):</div>
              <p className="text-[11px] text-slate-700 leading-relaxed italic pr-8 font-medium">
                &ldquo;{templateText}&rdquo;
              </p>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-1.5 rounded bg-white text-slate-500 hover:text-slate-800 border border-slate-200 hover:border-slate-300 transition-all cursor-pointer"
                title="复制对话模板"
              >
                {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <a
              href="https://t.me/dadao"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCopy}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-semibold text-xs transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/10 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>复制话术 并 Telegram 咨询</span>
            </a>
            
            <a
              href="https://wa.me/message/3J7JFFLXCC43L1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCopy}
              className="w-full py-2 px-4 bg-white hover:bg-slate-50 text-emerald-600 hover:text-emerald-700 rounded-lg font-semibold text-xs transition-all border border-emerald-200 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>通过 WhatsApp 咨询</span>
            </a>
            <div className="text-[9px] text-center text-slate-400 italic mt-1">
              *点击咨询时将自动复制上述匹配话术
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
