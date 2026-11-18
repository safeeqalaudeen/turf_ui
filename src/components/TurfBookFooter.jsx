import React from 'react';
import {
  MapPin,
  ShieldCheck,
  Zap,
  LayoutGrid,
  Layers,
  Headphones,
  Users,
  ChevronRight,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
} from 'lucide-react';
import footerBg from '../assets/footer_bg_exact.png';

export default function TurfBookFooter() {
  return (
    <footer className="relative w-full bg-[#00130D] text-white overflow-hidden">
      {/* Stadium Turf & Ball 4K Background Graphic (Pristine, 100% Ghost-Free) */}
      <img
        src={footerBg}
        alt="Turf background with soccer ball"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none z-0"
        loading="lazy"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 pt-6 sm:pt-8 pb-14 sm:pb-16">
        
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10">
          
          {/* Column 1: Brand & About (Spans 4 columns on large screens) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Brand Logo Row */}
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#00F5B0] flex items-center justify-center shadow-[0_0_20px_rgba(0,245,176,0.35)] shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 text-[#00130D] fill-[#00130D]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
                    TurfBook
                  </h3>
                  <span className="text-[9px] sm:text-[9.5px] tracking-[0.18em] font-bold text-[#00F5B0] uppercase block mt-1.5">
                    SPORTS ARENA NETWORK
                  </span>
                </div>
              </div>

              {/* Platform Description */}
              <p className="text-xs sm:text-[13px] text-[#8FA89B] font-normal leading-relaxed max-w-sm mt-4">
                India's premier sports turf discovery, real-time slot booking, and venue management platform. Built for players, clubs, and arena owners.
              </p>
            </div>

            {/* Verification & Instant Confirmation Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mt-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#00F5B0]/40 bg-[#002619]/90 backdrop-blur-md text-[#00F5B0] text-[11px] font-bold shadow-[0_0_12px_rgba(0,245,176,0.15)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00F5B0]" />
                <span>100% Verified Venues</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#FFC400]/40 bg-[#002619]/90 backdrop-blur-md text-[#FFC400] text-[11px] font-bold shadow-[0_0_12px_rgba(255,196,0,0.15)]">
                <Zap className="w-3.5 h-3.5 text-[#FFC400] fill-[#FFC400]" />
                <span>Instant Confirmation</span>
              </div>
            </div>
          </div>

          {/* Column 2: EXPLORE (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-[#00F5B0] font-extrabold text-xs tracking-wider uppercase mb-4">
              <LayoutGrid className="w-4 h-4 text-[#00F5B0]" />
              <span>EXPLORE</span>
            </div>
            <ul className="space-y-1.5">
              {[
                { label: 'All Sports Turfs', href: '#sports' },
                { label: 'Box Cricket Arenas', href: '#cricket' },
                { label: 'Football 5v5 & 7v7', href: '#football' },
                { label: 'Badminton Courts', href: '#badminton' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#D0DED8] hover:text-[#00F5B0] text-xs sm:text-[13px] font-medium transition-colors flex items-center justify-between group py-1"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#00F5B0]/70 group-hover:text-[#00F5B0] group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: FOR VENUE OWNERS (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-[#00F5B0] font-extrabold text-xs tracking-wider uppercase mb-4">
              <Layers className="w-4 h-4 text-[#00F5B0]" />
              <span>FOR VENUE OWNERS</span>
            </div>
            <ul className="space-y-1.5">
              {[
                { label: 'List Your Turf', href: '#register-partner' },
                { label: 'Partner Plans', href: '#plans' },
                { label: 'Venue Management', href: '#management' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#D0DED8] hover:text-[#00F5B0] text-xs sm:text-[13px] font-medium transition-colors flex items-center justify-between group py-1"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#00F5B0]/70 group-hover:text-[#00F5B0] group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: SUPPORT & INFO (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-[#00F5B0] font-extrabold text-xs tracking-wider uppercase mb-4">
              <Headphones className="w-4 h-4 text-[#00F5B0]" />
              <span>SUPPORT & INFO</span>
            </div>
            <ul className="space-y-1.5">
              {[
                { label: 'FAQs & Help Center', href: '#faq' },
                { label: 'Contact Partner Desk', href: '#contact' },
                { label: 'Booking & Cancellation', href: '#cancellation' },
                { label: 'Referral Rewards', href: '#rewards' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#D0DED8] hover:text-[#00F5B0] text-xs sm:text-[13px] font-medium transition-colors flex items-center justify-between group py-1"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#00F5B0]/70 group-hover:text-[#00F5B0] group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: FOLLOW US (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-[#00F5B0] font-extrabold text-xs tracking-wider uppercase mb-4">
              <Users className="w-4 h-4 text-[#00F5B0]" />
              <span>FOLLOW US</span>
            </div>
            
            {/* Social Media Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#002418]/80 hover:bg-[#003824] border border-[#00F5B0]/30 hover:border-[#00F5B0] text-[#00F5B0] hover:text-white flex items-center justify-center transition-all shadow-[0_0_12px_rgba(0,245,176,0.1)] hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#002418]/80 hover:bg-[#003824] border border-[#00F5B0]/30 hover:border-[#00F5B0] text-[#00F5B0] hover:text-white flex items-center justify-center transition-all shadow-[0_0_12px_rgba(0,245,176,0.1)] hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#002418]/80 hover:bg-[#003824] border border-[#00F5B0]/30 hover:border-[#00F5B0] text-[#00F5B0] hover:text-white flex items-center justify-center transition-all shadow-[0_0_12px_rgba(0,245,176,0.1)] hover:scale-105"
              >
                <Youtube className="w-4 h-4" />
              </a>

              {/* X / Twitter */}
              <a
                href="#twitter"
                aria-label="X / Twitter"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#002418]/80 hover:bg-[#003824] border border-[#00F5B0]/30 hover:border-[#00F5B0] text-[#00F5B0] hover:text-white flex items-center justify-center transition-all shadow-[0_0_12px_rgba(0,245,176,0.1)] hover:scale-105"
              >
                {/* Official X SVG Logo */}
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Email Support Link */}
            <a
              href="mailto:support@tekquora.in"
              className="inline-flex items-center gap-2.5 text-[#D0DED8] hover:text-[#00F5B0] text-xs sm:text-[13px] font-medium transition-colors mt-5 group"
            >
              <Mail className="w-4 h-4 text-[#00F5B0] group-hover:scale-110 transition-transform" />
              <span className="truncate">support@tekquora.in</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links (Divider line removed as requested) */}
        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-[#8FA89B]">
          {/* Shifted generously to the right so it never touches the soccer ball */}
          <p className="pl-24 sm:pl-32 md:pl-44 lg:pl-48 text-center md:text-left font-normal">
            © 2026 TurfBook by TekQuora. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pr-0 md:pr-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="text-white/20">|</span>
            <a href="#refund" className="hover:text-white transition-colors">
              Refund & Cancellation
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
