import React from 'react';

interface RwHLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'wordmark' | 'monogram' | 'full';
}

export const RwHLogo: React.FC<RwHLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const isMonogram = variant === 'monogram';

  if (isMonogram) {
    return (
      <div className={`inline-flex flex-col select-none ${className}`}>
        <div className="flex items-baseline font-black tracking-tighter leading-none text-[#1C1A18]">
          <span className="text-2xl font-serif">R</span>
          <span className="text-xl font-sans font-bold -ml-0.5">w</span>
          <span className="text-2xl font-serif -ml-0.5">H</span>
        </div>
        <div className="w-full flex items-center justify-between mt-1 pt-0.5 border-t border-[#1C1A18]">
          <div className="w-3 h-[1px] bg-[#1C1A18] -mt-1.5" />
          <span className="text-[8px] font-sans font-semibold tracking-wider text-[#66625B]">2026</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Monogram stamp */}
      <div className="flex flex-col shrink-0 justify-center">
        <div className="flex items-baseline font-black tracking-tighter leading-none text-[#1C1A18]">
          <span className="text-lg font-serif">R</span>
          <span className="text-base font-sans font-bold -ml-0.5">w</span>
          <span className="text-lg font-serif -ml-0.5">H</span>
        </div>
        <div className="w-full h-[1px] bg-[#1C1A18] mt-0.5" />
      </div>

      <div className="flex flex-col">
        <span className="font-serif text-lg tracking-tight font-medium text-[#1C1A18] leading-none">
          Redwood House
        </span>
        <span className="text-[10px] tracking-widest uppercase font-sans text-[#7A756D] mt-0.5">
          Editorial Studio
        </span>
      </div>
    </div>
  );
};
