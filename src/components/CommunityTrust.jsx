import React from 'react';
import { Star, Quote } from 'lucide-react';
import floodlightLeft from '../assets/community_floodlight_left.png';
import floodlightRight from '../assets/community_floodlight_right.png';
import turfPitch from '../assets/community_turf_pitch.png';
import avatarRahul from '../assets/avatar_rahul.png';
import avatarPriya from '../assets/avatar_priya.png';
import avatarArjun from '../assets/avatar_arjun.png';

export default function CommunityTrust() {
  const testimonials = [
    {
      id: 1,
      quote:
        'TurfBook made it incredibly easy to find and book a floodlit cricket turf near our office in HSR Layout. Real-time slots and instant payment took under 60 seconds!',
      name: 'Rahul Menon',
      role: 'Corporate Team Captain • Bangalore',
      avatar: avatarRahul,
    },
    {
      id: 2,
      quote:
        'As a turf owner, onboarding was effortless. Once approved, our weekday evening utilization jumped by 65%. The slot management and earnings dashboard is world-class.',
      name: 'Priya Sharma',
      role: 'Managing Partner, Arena 99',
      avatar: avatarPriya,
    },
    {
      id: 3,
      quote:
        'We host our weekend 7-a-side football league exclusively through TurfBook. Live slot locking prevents double bookings and saves hours of phone calls.',
      name: 'Arjun Kulkarni',
      role: 'Weekend League Organizer • Mumbai',
      avatar: avatarArjun,
    },
  ];

  return (
    <section className="relative w-full bg-[#00130D] text-white pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 overflow-hidden">
      
      {/* ========================================================
          100% VISIBLE STADIUM FLOODLIGHTS & TURF PITCH ELEMENTS
      ======================================================== */}
      {/* 1. Top-Left Stadium Floodlight Tower */}
      <img
        src={floodlightLeft}
        alt="Top-Left Stadium Floodlight"
        className="absolute top-0 left-0 w-[220px] sm:w-[320px] md:w-[380px] lg:w-[440px] pointer-events-none select-none z-0 opacity-95"
        loading="eager"
      />

      {/* 2. Top-Right Stadium Floodlight Tower */}
      <img
        src={floodlightRight}
        alt="Top-Right Stadium Floodlight"
        className="absolute top-0 right-0 w-[220px] sm:w-[320px] md:w-[380px] lg:w-[440px] pointer-events-none select-none z-0 opacity-95"
        loading="eager"
      />

      {/* 3. Bottom Lush Turf Pitch with Center Line */}
      <img
        src={turfPitch}
        alt="Illuminated Turf Pitch Grass with Center Line"
        className="absolute bottom-0 inset-x-0 w-full h-[120px] sm:h-[150px] lg:h-[185px] object-cover object-bottom pointer-events-none select-none z-0"
        loading="eager"
      />

      {/* Central Ambient Stadium Atmosphere Glow */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,176,0.1),transparent_70%)] pointer-events-none z-0" />

      {/* ========================================================
          MAIN CONTENT CONTAINER
      ======================================================== */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header: Badge + Headline + Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#032317]/90 border border-[#00F5B0]/50 shadow-[0_0_15px_rgba(0,245,176,0.25)] mb-3.5">
            <span className="text-[#00F5B0] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              COMMUNITY TRUST
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight select-text">
            Loved by Players &{' '}
            <span className="relative inline-block text-[#C8FF00] italic font-black">
              Venue Owners
              {/* Hand-drawn neon brush underline */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5"
                viewBox="0 0 160 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2,8 Q80,2 158,6"
                  stroke="#C8FF00"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#9CB6AA] text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed mt-3 max-w-xl mx-auto select-text">
            Real experiences from players, teams, and venue partners across TurfBook.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[22px] sm:rounded-[24px] bg-[#021A12]/92 backdrop-blur-md border border-[#00F5B0]/40 shadow-[0_0_25px_rgba(0,245,176,0.12),0_15px_35px_rgba(0,0,0,0.7)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00F5B0]/75 hover:shadow-[0_0_35px_rgba(0,245,176,0.25),0_20px_40px_rgba(0,0,0,0.85)] hover:-translate-y-1 group"
            >
              {/* Top Edge Neon Light Flare */}
              <div className="absolute top-0 left-[20%] right-[20%] h-[1.5px] bg-gradient-to-r from-transparent via-[#00F5B0] to-transparent shadow-[0_0_10px_#00F5B0] pointer-events-none" />

              <div>
                {/* Top Row: 5 Gold Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FFC400] text-[#FFC400] drop-shadow-[0_0_6px_rgba(255,196,0,0.5)]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#00F5B0]/30 rotate-180 group-hover:text-[#00F5B0]/60 transition-colors" />
                </div>

                {/* Review Quote (100% Selectable HTML Text, Zero Blur) */}
                <p className="text-[#D0DFD9] text-xs sm:text-[13px] lg:text-[13.5px] font-normal leading-[1.6] select-text">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Row: Avatar + Name + Role */}
              <div className="flex items-center gap-3.5 pt-5 mt-5 border-t border-white/5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#00F5B0]/40 shadow-[0_0_10px_rgba(0,245,176,0.25)] shrink-0 select-none pointer-events-none"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h4 className="text-white font-bold text-sm tracking-tight truncate select-text">
                    {item.name}
                  </h4>
                  <p className="text-[#8EA89C] text-xs font-medium mt-0.5 truncate select-text">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
