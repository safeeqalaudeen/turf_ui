import React from 'react';
import { ArrowRight, Handshake } from 'lucide-react';
import partnerBannerClean from '../assets/partner_banner_bg_clean.png';

export default function PartnerBanner() {
  return (
    <section className="relative w-full bg-[#00130D] text-white pt-2 pb-4 sm:pb-6 lg:pb-8 overflow-hidden">
      {/* Container aligned 100% identically to FeaturedVenues grid (max-w-[1440px] px-4 sm:px-8) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Banner Card Container spanning full width with smooth rounded corners & soft shadow */}
        <div className="relative w-full rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] shadow-[0_15px_45px_rgba(0,0,0,0.7),0_0_25px_rgba(0,245,176,0.12)] overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,245,176,0.2)]">
          
          {/* Pristine Background Graphic (Neon curves, stadium lighting, grass, 3D ball - zero baked-in text) */}
          <img
            src={partnerBannerClean}
            alt="Partner with TurfBook background"
            className="w-full h-auto block select-none pointer-events-none"
            loading="eager"
          />

          {/* 100% Real, Selectable & Razor-Sharp HTML Text Layer (Zero Blur, Exact Reference Design) */}
          <div className="absolute left-[4.2%] top-[8.5%] sm:top-[10.5%] lg:top-[11.5%] right-[51%] flex flex-col items-start z-10 pointer-events-auto">
            {/* Badge: Partner Onboarding Open */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#052115]/95 border border-[#A6E22E]/80 text-[#D4FF00] text-[clamp(8.5px,0.95vw,12.5px)] font-bold tracking-tight shadow-[0_0_12px_rgba(166,226,46,0.3)] mb-1.5 sm:mb-2.5 lg:mb-3 select-text cursor-default">
              <Handshake className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4FF00] shrink-0" />
              <span>Partner Onboarding Open</span>
            </div>

            {/* Headline: Own a Sports Turf or Arena? Partner with TurfBook Today. */}
            <h2 className="text-white font-extrabold text-[clamp(13px,2.1vw,33px)] leading-[1.14] tracking-tight select-text">
              Own a Sports Turf or Arena?
              <br />
              Partner with{' '}
              <span className="relative inline-block text-[#D4FF00]">
                TurfBook
                {/* Hand-drawn neon brush underline */}
                <svg
                  className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-[5px] sm:h-[7px]"
                  viewBox="0 0 120 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2,6 Q60,1 118,5"
                    stroke="#D4FF00"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Today.
            </h2>

            {/* Subtext: Register your turf in 2 minutes... (3 crisp lines matching reference) */}
            <p className="text-[#B0C8BF] text-[clamp(9px,1vw,13.5px)] font-normal leading-[1.45] mt-2 sm:mt-3 lg:mt-3.5 max-w-[98%] select-text">
              Register your turf in 2 minutes, upload venue photos, and get verified by our admin team.
              <br />
              Automate your 6 AM–10 PM slot bookings, eliminate phone
              <br />
              coordination, and grow your venue revenue.
            </p>
          </div>

          {/* Ultra-Crisp Vector Interactive Buttons (100% Sharp, Zero Blur, Perfect Hover) */}
          <div className="absolute inset-0 pointer-events-auto">
            {/* Primary Action Button: Register as Turf Owner */}
            <a
              href="#register-partner"
              className="absolute right-[2.4%] top-[32%] w-[24.5%] h-[16%] rounded-full bg-[#D4FF00] hover:bg-[#E0FF33] text-[#00140D] flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 lg:px-6 font-black text-[clamp(9.5px,1.15vw,15px)] shadow-[0_0_20px_rgba(212,255,0,0.35)] hover:shadow-[0_0_30px_rgba(212,255,0,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap select-none group"
            >
              <span className="tracking-tight">Register as Turf Owner</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3] group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            {/* Secondary Action Button: Explore Live Marketplace */}
            <a
              href="#explore"
              className="absolute right-[2.4%] top-[53.5%] w-[24.5%] h-[16%] rounded-full bg-[#051910]/95 hover:bg-[#082417] border border-white/50 hover:border-white text-white flex items-center justify-center px-2.5 sm:px-4 lg:px-6 font-semibold text-[clamp(9px,1.1vw,14px)] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap select-none"
            >
              <span className="tracking-wide">Explore Live Marketplace</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
