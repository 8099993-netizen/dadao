/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calculator, Zap, Clock, ArrowRight } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursWasted, setHoursWasted] = useState(8); // hours per engineer per month
  const [hourlyRate, setHourlyRate] = useState(250); // in HKD/SGD equivalent

  // Calculations
  const totalHoursWasted = teamSize * hoursWasted;
  const totalMoneyWasted = totalHoursWasted * hourlyRate;
  
  // Dadao reduces configuration and troubleshooting overhead by ~75%
  const hoursSaved = Math.round(totalHoursWasted * 0.75);
  const moneySaved = Math.round(totalMoneyWasted * 0.75);

  const handleConsult = () => {
    const message = `您好，大盗客服！我刚才使用了研发效能计算器，我们团队目前有【${teamSize}】人，每个月人均耗费【${hoursWasted}】小时在软件及AI工具配置和排错上。计算得出大盗每月可帮我们挽回【HKD $${moneySaved}】的损耗，我想申请一个针对我们团队的定制提效方案！`;
    navigator.clipboard.writeText(message);
    window.open('https://t.me/dadao', '_blank');
  };

  return (
    <div className="w-full rounded-2xl glass-panel border border-white/60 p-6 md:p-8 relative overflow-hidden shadow-lg shadow-blue-900/5">
      {/* Absolute Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center space-x-2 text-purple-600 mb-6">
        <Calculator className="w-5 h-5 text-purple-500" />
        <span className="text-sm font-semibold tracking-wider uppercase font-mono">Cost & ROI Calculator</span>
        <span className="px-2 py-0.5 text-xs rounded-full bg-purple-50 text-purple-600 border border-purple-100 font-bold">效能透视</span>
      </div>

      <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-2">
        研发与测试团队提效计算器
      </h3>
      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        工具配置复杂、节点不畅、账号异常？这些琐碎开销正在无形消耗您团队宝贵的高级人力。算算大盗能帮您挽回多少资源：
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Sliders Input Panel */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Team Size */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-700 font-medium">团队或测试规模 (人数)</span>
              <span className="text-blue-600 font-mono font-bold">{teamSize} 人</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>1 人</span>
              <span>25 人</span>
              <span>50 人</span>
            </div>
          </div>

          {/* Slider 2: Wasted Hours */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-700 font-medium">人均月度浪费在工具配置/故障排查的时间</span>
              <span className="text-purple-600 font-mono font-bold">{hoursWasted} 小时 / 月</span>
            </div>
            <input
              type="range"
              min="2"
              max="30"
              value={hoursWasted}
              onChange={(e) => setHoursWasted(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>2 小时</span>
              <span>16 小时</span>
              <span>30 小时</span>
            </div>
          </div>

          {/* Slider 3: Hourly Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-700 font-medium">技术人员平均估算时薪 (HKD/SGD)</span>
              <span className="text-emerald-600 font-mono font-bold">HKD ${hourlyRate} / 小时</span>
            </div>
            <input
              type="range"
              min="100"
              max="800"
              step="50"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>HKD $100</span>
              <span>HKD $450</span>
              <span>HKD $800</span>
            </div>
          </div>
        </div>

        {/* ROI Savings Display */}
        <div className="lg:col-span-5 rounded-xl border border-slate-200/80 bg-white/80 p-6 flex flex-col justify-between shadow-md relative overflow-hidden">
          {/* Subtle light effect */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-5">
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">当前估算总耗损</div>
              <div className="text-lg font-mono font-semibold text-rose-600">
                HKD ${totalMoneyWasted.toLocaleString()} <span className="text-xs text-slate-400 font-sans font-normal">({totalHoursWasted} 小时) / 月</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100 relative">
              <div className="absolute top-2.5 right-2.5">
                <Zap className="w-5 h-5 text-emerald-500 animate-bounce" />
              </div>
              <div className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest font-bold mb-0.5">大盗提效方案节省</div>
              
              <div className="text-3xl font-mono font-bold text-emerald-600 tracking-tight">
                HKD ${moneySaved.toLocaleString()}
                <span className="text-xs text-slate-500 font-sans font-normal ml-1">/ 每月</span>
              </div>
              
              <div className="text-[11px] text-slate-600 mt-2 flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>挽回研发测试工时: <strong className="text-slate-800">{hoursSaved} 小时/月</strong></span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 leading-relaxed font-sans">
              💡 <strong>核心逻辑：</strong>大盗成熟的服务交付流程、7x24 即时支持和优质折扣渠道，能帮您消灭约 <strong>75%</strong> 的系统排错、寻找合规账号和跨国网络调试的琐碎时间。
            </div>
          </div>

          <button
            onClick={handleConsult}
            className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-500/10 transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>立即申请 降本提效定制方案</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
