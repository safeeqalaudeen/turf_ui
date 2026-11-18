import React from 'react';
import { 
  Trophy, 
  ShieldCheck, 
  Zap, 
  Calendar, 
  Coins 
} from 'lucide-react';

export default function WhyBookTurfBook() {
  const trustFeatures = [
    {
      id: 1,
      icon: ShieldCheck,
      title: 'Verified Venues',
      subtitle: 'Quality Checked',
    },
    {
      id: 2,
      icon: Zap,
      title: 'Instant Slot Locking',
      subtitle: 'Real-Time Booking',
    },
    {
      id: 3,
      icon: Calendar,
      title: 'Flexible Timings',
      subtitle: '6 AM – 10 PM',
    },
    {
      id: 4,
      icon: Coins,
      title: '₹0 Platform Fee',
      subtitle: 'No Hidden Charges',
    },
  ];

  return (
    <section className="relative w-full bg-[#00130D] text-white py-3 sm:py-5 lg:py-6 overflow-hidden">
      {/* Container aligned identically with FeaturedVenues and PartnerBanner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Glowing Pill / Capsule Container */}
        <div className="relative w-full rounded-2xl lg:rounded-full bg-gradient-to-r from-[#011B13] via-[#022A1E] to-[#011B13] border border-[#00F5B0]/50 shadow-[0_0_30px_rgba(0,245,176,0.18),0_10px_35px_rgba(0,0,0,0.7)] px-5 sm:px-8 lg:px-10 py-4 sm:py-5 overflow-hidden transition-all hover:border-[#00F5B0]/70 hover:shadow-[0_0_40px_rgba(0,245,176,0.28)]">
          
          {/* Top & Bottom Neon Light Flare Highlights (Exact reference shine) */}
          <div className="absolute top-0 left-[22%] w-28 sm:w-44 h-[1.5px] bg-white shadow-[0_0_12px_#00F5B0,0_0_24px_#00F5B0] pointer-events-none" />
          <div className="absolute top-0 right-[20%] w-36 sm:w-56 h-[1.5px] bg-[#00F5B0] shadow-[0_0_10px_#00F5B0,0_0_20px_#00F5B0] pointer-events-none" />
          <div className="absolute bottom-0 left-[35%] w-32 sm:w-48 h-[1px] bg-[#00F5B0] shadow-[0_0_10px_#00F5B0] pointer-events-none" />
          
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-48 h-32 bg-[#00F5B0]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Inner Content: Responsive Flex/Grid */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-6">
            
            {/* Left Title Section with Glowing Trophy */}
            <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 w-full lg:w-auto justify-center lg:justify-start">
              {/* Glowing Trophy Aura */}
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 bg-[#00F5B0]/25 rounded-full blur-md" />
                <div className="w-10 h-10 rounded-full bg-[#003824]/80 border border-[#00F5B0]/40 flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,245,176,0.3)]">
                  <Trophy className="w-5 h-5 text-[#00F5B0] drop-shadow-[0_0_8px_rgba(0,245,176,0.8)]" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="text-left">
                <h3 className="text-white font-extrabold text-sm sm:text-base lg:text-[17px] tracking-tight leading-tight">
                  Why Book with <span className="text-[#00F5B0]">TurfBook</span>?
                </h3>
                <p className="text-[#9CB6AA] text-[11px] sm:text-xs font-normal mt-0.5">
                  A faster, easier and more reliable way to play.
                </p>
              </div>
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden xl:block h-8 w-px bg-white/15 shrink-0" />

            {/* 4 Trust Feature Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 xl:gap-8 items-center w-full lg:w-auto">
              {trustFeatures.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="flex items-center gap-2.5 sm:gap-3 group/item">
                    {/* Icon with soft neon glow */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#002418] border border-[#00F5B0]/30 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(0,245,176,0.15)] group-hover/item:border-[#00F5B0]/70 group-hover/item:shadow-[0_0_18px_rgba(0,245,176,0.35)] transition-all">
                      <IconComponent className="w-5 h-5 text-[#00F5B0] group-hover/item:scale-110 transition-transform" />
                    </div>

                    {/* Texts */}
                    <div className="text-left leading-tight">
                      <h4 className="text-white text-xs sm:text-[13px] font-bold tracking-tight whitespace-nowrap">
                        {item.title}
                      </h4>
                      <p className="text-[#8EA89C] text-[10px] sm:text-[11px] font-medium mt-0.5 whitespace-nowrap">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Faint divider between badges on desktop (except last) */}
                    {idx < trustFeatures.length - 1 && (
                      <div className="hidden 2xl:block h-6 w-px bg-white/10 ml-4 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
