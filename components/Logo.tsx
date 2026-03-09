
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'bronze';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'light', showText = true }) => {
  const colors = {
    light: {
      monogram: '#C5A059',
      text: '#FFFFFF',
      subtext: '#FFFFFF'
    },
    dark: {
      monogram: '#C5A059',
      text: '#FFFFFF',
      subtext: '#FFFFFF'
    },
    bronze: {
      monogram: '#C5A059',
      text: '#FFFFFF',
      subtext: '#FFFFFF'
    }
  };

  const color = colors[variant];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-full aspect-square relative flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Decorative Bar - Trapezoid */}
          <path d="M38 18H62L58 23H42Z" fill={color.monogram} />
          
          {/* M Shape */}
          <path d="M25 32L50 57L75 32" stroke={color.monogram} strokeWidth="5" strokeLinecap="butt" strokeLinejoin="miter" />
          <path d="M25 32V67" stroke={color.monogram} strokeWidth="5" strokeLinecap="butt" />
          <path d="M75 32V92" stroke={color.monogram} strokeWidth="5" strokeLinecap="butt" />
          
          {/* S Shape */}
          <path d="M25 67H65V92H25V82H45" stroke={color.monogram} strokeWidth="5" strokeLinecap="butt" strokeLinejoin="miter" />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col justify-center items-center gap-0.5">
          <span className="font-serif font-bold tracking-[0.15em] leading-none text-base md:text-lg uppercase" style={{ color: color.text }}>
            SOARES MARTINS
          </span>
          <span className="font-serif font-bold tracking-[0.2em] uppercase text-[10px] md:text-[12px] leading-none" style={{ color: color.subtext, opacity: 0.9 }}>
            ADVOGADOS
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
