
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const DataSection: React.FC = () => {
  const { t } = useLanguage();

  const data = [
    { name: '1', inadimplencia: 45 },
    { name: '2', inadimplencia: 38 },
    { name: '3', inadimplencia: 25 },
    { name: '4', inadimplencia: 18 },
    { name: '5', inadimplencia: 12 },
    { name: '6', inadimplencia: 7 },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-[10%] bg-midnight" id="saúde-financeira">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <div className="lg:w-1/2 space-y-6 md:space-y-10">
          <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl leading-tight">
            {t('data.title')} <br className="hidden sm:block" />
            <span className="serif-italic text-bronze">{t('data.titleHighlight')}</span>
          </h2>
          <p className="text-text-muted text-lg sm:text-xl leading-relaxed">
            {t('data.desc')}
          </p>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-4 md:pt-8">
            <div className="border-l border-bronze/30 pl-4 sm:pl-8">
              <span className="block text-3xl sm:text-4xl font-serif text-white mb-2">92%</span>
              <p className="text-[9px] sm:text-[10px] text-text-muted uppercase tracking-widest">{t('data.stat1')}</p>
            </div>
            <div className="border-l border-bronze/30 pl-4 sm:pl-8">
              <span className="block text-3xl sm:text-4xl font-serif text-white mb-2">48h</span>
              <p className="text-[9px] sm:text-[10px] text-text-muted uppercase tracking-widest">{t('data.stat2')}</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full glass p-6 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="mb-6 sm:mb-8 flex justify-between items-end">
            <div>
              <p className="text-bronze text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-1">Performance Index</p>
              <h4 className="text-white font-serif text-xl sm:text-2xl">{t('data.label1')}</h4>
            </div>
            <div className="text-right">
              <span className="text-green-500 text-xs sm:text-sm font-bold">{t('data.drop')}</span>
            </div>
          </div>
          
          <div className="h-[250px] sm:h-[350px] w-full">
            {typeof window !== 'undefined' && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorInad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C5A059" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#C5A059" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: 'rgba(255,255,255,0.4)', fontSize: 10}} 
                    dy={15}
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0A1526', border: '1px solid rgba(197, 160, 89, 0.2)', borderRadius: '12px', fontSize: '12px' }}
                    itemStyle={{ color: '#C5A059' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="inadimplencia" 
                    stroke="#C5A059" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorInad)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
          <p className="text-center text-[10px] text-text-muted mt-8 italic">
            {t('data.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
