import React, { useState } from 'react';
import { 
  Zap, 
  MapPin, 
  Calendar, 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  Users
} from 'lucide-react';

import featuresBg from '../assets/features_bg_crisp_hd.jpg';
import featMapGraphic from '../assets/feat_3d_map_hd.png';
import featSlotsGraphic from '../assets/feat_3d_slots_hd.png';
import featAnalyticsGraphic from '../assets/feat_3d_analytics_hd.png';

// Handshake / Partner Icon component matching exact screenshot badge
const PartnerHandshakeIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#00F5B0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.4 1.4" />
    <path d="m13 7.1 2.2-2.2a1 1 0 0 1 1.4 0l4.3 4.3a1 1 0 0 1 0 1.4l-3 3" />
    <path d="m3 7 3-3a1 1 0 0 1 1.4 0l4.3 4.3a1 1 0 0 1 0 1.4L9 14.4" />
    <path d="m8.5 8.5 5 5" />
  </svg>
);

export default function FeaturesSection() {
  const [activeCardId, setActiveCardId] = useState('discovery');

  const featureCards = [
    {
      id: 'discovery',
      icon: MapPin,
      badgeText: 'For Players',
      badgeIcon: Users,
      title: 'Smart Venue Discovery',
      description: 'Filter turfs by sport, city, hourly rate, floodlights, and interactive map pins with verified ratings.',
      graphic: featMapGraphic,
      graphicAlt: '3D interactive map wireframe with glowing green location pin',
      ctaLink: '#explore',
      has3DLayer: true
    },
    {
      id: 'slot_engine',
      icon: Calendar,
      badgeText: 'Zero Double-Booking',
      badgeIcon: ShieldCheck,
      title: 'Live Hourly Slot Engine',
      description: 'Pick single or back-to-back slots from 6 AM to 10 PM, apply referral rewards, and get instant confirmation.',
      graphic: featSlotsGraphic,
      graphicAlt: '3D hourly booking slot matrix with highlighted green confirmed slot',
      ctaLink: '#slots',
      has3DLayer: false
    },
    {
      id: 'partner_suite',
      icon: Building2,
      badgeText: 'For Venue Partners',
      badgeIcon: PartnerHandshakeIcon,
      title: 'Complete Partner Suite',
      description: 'Dedicated Turf Owner Console to manage slots, block maintenance hours, customize dynamic pricing, and track revenue.',
      graphic: featAnalyticsGraphic,
      graphicAlt: '3D turf owner console revenue growth chart and analytics dashboard',
      ctaLink: '#partners',
      has3DLayer: false
    }
  ];

  return (
    <section className="relative w-full bg-[#00130D] text-white pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden select-none">
      
      {/* ========================================================
          FULL-WIDTH CRISP STADIUM ATMOSPHERE BACKGROUND
          Ultra-sharp floodlights, razor-sharp soccer ball on grass,
          pure pitch green in center, bottom grass strip.
      ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src={featuresBg}
          alt=""
          className="w-full h-full object-cover object-center opacity-95"
        />
        {/* Soft edge blend for seamless top & bottom transitions */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#00130D] via-[#00130D]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#00130D] via-[#00130D]/70 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================
          MAIN CONTENT CONTAINER
      ======================================================== */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* ========================================================
            CENTERED HEADER (100% Crisp Vector Text & Lime Swoosh)
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-11">
          
          {/* Eyebrow Badge: ⚡ BUILT FOR SPEED & RELIABILITY */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#00F5B0]/50 bg-[#00281A]/90 backdrop-blur-md mb-3.5 sm:mb-4 shadow-[0_0_18px_rgba(0,245,176,0.22)]">
            <Zap className="w-3.5 h-3.5 text-[#C8FF00] fill-[#C8FF00]" />
            <span className="text-[10px] sm:text-[10.5px] font-black tracking-[0.2em] text-[#E5F9F0] uppercase">
              BUILT FOR SPEED & RELIABILITY
            </span>
          </div>

          {/* Main Heading: Everything You Need From Discovery to Kickoff */}
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight text-white leading-tight">
            <span>Everything You Need From</span>
            <br />
            <span>Discovery to </span>
            <div className="relative inline-block ml-1">
              <span className="bg-gradient-to-r from-[#00F5B0] via-[#C8FF00] to-[#00F5B0] bg-clip-text text-transparent">
                Kickoff
              </span>
              {/* Curved lime underline swoosh */}
              <svg
                className="w-[95px] sm:w-[125px] h-3 sm:h-3.5 absolute -bottom-1 sm:-bottom-2 left-0 text-[#00F5B0] pointer-events-none"
                viewBox="0 0 140 16"
                fill="none"
              >
                <path
                  d="M3 12C45 3 95 3 137 10"
                  stroke="#00F5B0"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-[13.5px] text-[#A6C4B5] font-normal leading-relaxed mt-3.5 max-w-2xl mx-auto">
            Whether you're booking a Friday night match with friends or managing multiple sports complexes, TurfBook handles it{' '}
            <span className="text-white font-medium underline decoration-[#00F5B0]/60 underline-offset-4">
              seamlessly
            </span>
            .
          </p>

        </div>

        {/* ========================================================
            3 FEATURE CARDS (100% Crisp Vector Text & 4x HD 3D Perspective)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-5.5 lg:gap-6 items-stretch">
          {featureCards.map((card) => {
            const isSelected = activeCardId === card.id;
            const TopIcon = card.icon;
            const BadgeIcon = card.badgeIcon;

            return (
              <div
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                className="relative"
              >
                {/* Layered 3D Outer Glass Rim on the left of Card 1 */}
                {card.has3DLayer && (
                  <div className="absolute -left-2 sm:-left-2.5 inset-y-1 w-full rounded-[26px] sm:rounded-[28px] border-2 border-[#00F5B0]/45 bg-gradient-to-r from-[#003825]/50 to-transparent pointer-events-none -z-10 shadow-[0_0_25px_rgba(0,245,176,0.35)] hidden sm:block transition-all" />
                )}

                {/* Main Card Container */}
                <div
                  className={`group relative rounded-[26px] sm:rounded-[28px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer h-full min-h-[260px] sm:min-h-[275px] ${
                    isSelected
                      ? 'border-2 border-[#00F5B0] bg-gradient-to-b from-[#003825]/95 via-[#002418]/95 to-[#001710]/95 shadow-[0_0_40px_rgba(0,245,176,0.55),0_0_15px_rgba(0,245,176,0.35),inset_0_0_20px_rgba(0,245,176,0.12)] scale-[1.01]'
                      : 'border border-[#00F5B0]/25 hover:border-[#00F5B0]/50 bg-gradient-to-b from-[#002418]/85 via-[#001B11]/90 to-[#00120B]/95 backdrop-blur-md shadow-[0_0_20px_rgba(0,245,176,0.1),inset_0_0_15px_rgba(0,245,176,0.03)] hover:shadow-[0_0_28px_rgba(0,245,176,0.22)]'
                  }`}
                >
                  
                  {/* Top Row: Icon Container on Left, Audience Badge on Right */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    
                    {/* Glowing Rounded Icon Box */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-md ${
                      isSelected
                        ? 'bg-[#00422D] border border-[#00F5B0]/60 shadow-[0_0_16px_rgba(0,245,176,0.4)]'
                        : 'bg-[#003825] border border-[#00F5B0]/40 shadow-[0_0_12px_rgba(0,245,176,0.2)]'
                    }`}>
                      <TopIcon className="w-5 h-5 text-[#00F5B0]" strokeWidth={2.2} />
                    </div>

                    {/* Badge: For Players / Zero Double-Booking / For Venue Partners */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#002619]/90 border border-[#00F5B0]/30 text-[10.5px] sm:text-[11px] font-semibold text-[#D4F4E5] shadow-[0_0_10px_rgba(0,245,176,0.1)]">
                      <BadgeIcon className="w-3.5 h-3.5 text-[#00F5B0]" />
                      <span>{card.badgeText}</span>
                    </div>

                  </div>

                  {/* Title & Description: 100% Crisp Native Vector Typography (Zero Blur!) */}
                  <div className="mb-2">
                    <h3 className="text-base sm:text-[18px] font-black text-white tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[12.5px] text-[#A6C4B5] font-normal leading-relaxed mt-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Row: 4x HD 3D Illustration Graphic & Circular Arrow Button */}
                  <div className="mt-auto -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 pt-3 px-5 sm:px-6 pb-4 sm:pb-5 flex items-end justify-between gap-2 overflow-hidden">
                    
                    {/* Large, Vibrant 3D Perspective Graphic - naturally anchoring bottom with ZERO text */}
                    <div className="relative w-[75%] sm:w-[78%] h-20 sm:h-22 lg:h-24 flex items-end overflow-hidden -ml-1 -mb-1">
                      <img
                        src={card.graphic}
                        alt={card.graphicAlt}
                        className="w-full h-full object-contain object-left-bottom drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Sleek Circular Arrow Button (matching exact screenshot button) */}
                    <a
                      href={card.ctaLink}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Explore ${card.title}`}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00F5B0]/45 hover:border-[#00F5B0] bg-[#001D14]/90 hover:bg-[#00F5B0] text-white hover:text-[#00130D] flex items-center justify-center transition-all duration-200 shadow-[0_0_12px_rgba(0,245,176,0.22)] group-hover:scale-105 active:scale-95 cursor-pointer shrink-0 mb-0.5"
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </a>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
