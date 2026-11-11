import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  ChevronDown, 
  Sparkles, 
  ArrowRight, 
  Play, 
  Heart, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  CreditCard,
  Calendar,
  Coins
} from 'lucide-react';

import playerImg from '../assets/player_cutout.png';
import turfPitchImg from '../assets/turf_pitch_clean.jpg';

export default function TurfBookHero() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('All Sports');
  const [selectedDate, setSelectedDate] = useState('Select Date');
  const [sportsDropdown, setSportsDropdown] = useState(false);
  const [cardCarouselIndex, setCardCarouselIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sportsList = [
    'All Sports', 
    'Football', 
    'Box Cricket', 
    'Badminton', 
    'Tennis', 
    'Basketball', 
    'Pickleball'
  ];

  const handleNextSlide = () => {
    setCardCarouselIndex((prev) => (prev + 1) % 3);
  };

  const handlePrevSlide = () => {
    setCardCarouselIndex((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="relative min-h-screen w-full hero-viewport-bg text-white overflow-hidden flex flex-col justify-between selection:bg-[#00F5B0] selection:text-[#00130D]">
      
      {/* Top subtle gradient overlay for maximum navbar readability */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#00130D]/80 to-transparent pointer-events-none z-0" />

      {/* ========================================================
          SECTION 3: TOP NAVIGATION BAR
      ======================================================== */}
      <header className="relative z-40 w-full pt-4 pb-2 px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between h-16 border-b border-white/5">
          
          {/* Left section: Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer group select-none">
            {/* Rounded-square neon-green location-pin logo */}
            <div className="w-10 h-10 rounded-[12px] bg-[#00F5B0] shadow-[0_0_20px_rgba(0,245,176,0.65)] flex items-center justify-center transition-transform group-hover:scale-105">
              <MapPin className="w-5 h-5 text-[#00130D]" fill="#00130D" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                TurfBook
              </span>
              <span className="text-[9px] tracking-[0.16em] font-bold text-[#00F5B0] uppercase mt-1">
                SPORTS ARENA NETWORK
              </span>
            </div>
          </div>

          {/* Center navigation */}
          <nav className="hidden md:flex items-center gap-9">
            <a 
              href="#home" 
              className="relative text-[13px] font-bold text-white py-1 transition-colors"
            >
              Home
              {/* Subtle green active underline */}
              <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#00F5B0] shadow-[0_0_10px_#00F5B0] rounded-full" />
            </a>

            <a 
              href="#explore" 
              className="text-[13px] font-medium text-[#D0DED8] hover:text-white transition-colors"
            >
              Explore Turfs
            </a>

            <a 
              href="#how-it-works" 
              className="text-[13px] font-medium text-[#D0DED8] hover:text-white transition-colors"
            >
              How It Works
            </a>

            {/* Sports with downward chevron */}
            <div className="relative">
              <button 
                onClick={() => setSportsDropdown(!sportsDropdown)}
                className="flex items-center gap-1.5 text-[13px] font-medium text-[#D0DED8] hover:text-white transition-colors cursor-pointer"
              >
                <span>Sports</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${sportsDropdown ? 'rotate-180 text-[#00F5B0]' : ''}`} />
              </button>

              {sportsDropdown && (
                <div className="absolute top-full left-0 mt-3 w-48 rounded-2xl bg-[#00251A]/95 backdrop-blur-xl p-2 shadow-2xl border border-[#00F5B0]/30 z-50">
                  {sportsList.map((sport) => (
                    <div
                      key={sport}
                      onClick={() => {
                        setSelectedSport(sport);
                        setSportsDropdown(false);
                      }}
                      className="px-3.5 py-2 text-xs font-semibold text-[#D0DED8] hover:text-[#00F5B0] hover:bg-[#003A29]/70 rounded-xl cursor-pointer transition-colors"
                    >
                      {sport}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right navigation */}
          <div className="flex items-center gap-2.5 sm:gap-6 shrink-0">
            <button className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#00F5B0] hover:text-white transition-colors cursor-pointer">
              <Sparkles className="w-3.5 h-3.5 text-[#00F5B0]" />
              <span>Partner With Us</span>
            </button>

            <button className="hidden xs:block text-xs font-bold text-white hover:text-[#00F5B0] transition-colors cursor-pointer">
              Sign In
            </button>

            <button className="btn-yellow-glow px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-extrabold tracking-wide cursor-pointer whitespace-nowrap">
              Get Started
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================
          HERO MAIN CONTENT & SHOWCASE AREA
      ======================================================== */}
      <main className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-8 w-full pt-1 sm:pt-3 pb-10 sm:pb-12 flex-1 flex flex-col justify-center">
        
        {/* Two-Column Layout Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ========================================================
              SECTION 4: Hero Content — Left Column
          ======================================================== */}
          <div className="lg:col-span-7 relative z-20 space-y-3.5 sm:space-y-4">
            
            {/* Thin neon-green outlined pill badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00F5B0]/40 bg-[#00251A]/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,245,176,0.15)] transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              <span className="text-[#FFC400] text-xs">🏅</span>
              <span className="text-[11px] font-semibold text-[#FFC400] tracking-wide">
                India's #1 Real-Time Sports Turf Booking Marketplace
              </span>
            </div>

            {/* Large, Bold, Italic Three-Line Headline */}
            <div className={`space-y-0 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black italic tracking-tight leading-[1.08] text-white">
                Book Championship
              </h1>
              
              <div className="flex items-center flex-wrap gap-x-3 leading-[1.08]">
                <span className="text-4xl sm:text-5xl lg:text-[56px] font-black italic tracking-tight text-[#00F5B0]">
                  Sports
                </span>
                
                <div className="relative inline-block">
                  <span className="text-4xl sm:text-5xl lg:text-[56px] font-black italic tracking-tight bg-gradient-to-r from-[#00F5B0] via-[#C8FF00] to-[#FFC400] bg-clip-text text-transparent">
                    Turfs
                  </span>
                  
                  {/* Small curved neon-green underline swoosh below "Turfs" */}
                  <svg 
                    className="w-[105px] sm:w-[125px] lg:w-[145px] h-4 absolute -bottom-2 sm:-bottom-2.5 left-0 text-[#00F5B0] pointer-events-none" 
                    viewBox="0 0 150 14" 
                    fill="none"
                  >
                    <path 
                      d="M3 10C42 2 110 2 147 8" 
                      stroke="#00F5B0" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black italic tracking-tight leading-[1.08] text-white flex items-center gap-2.5">
                <span>in Seconds</span>
                <span className="text-[#FFC400] text-3xl sm:text-4xl lg:text-[44px] inline-block animate-pulse not-italic">⚡</span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className={`text-xs sm:text-sm text-[#D0DED8] max-w-xl font-normal leading-relaxed pt-0.5 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              Discover verified floodlit football pitches, box cricket arenas, and pro badminton courts near you. Compare live hourly slots, lock your pitch, and play.
            </p>

            {/* SECTION 6: Hero Action Buttons */}
            <div className={`flex flex-wrap items-center gap-3.5 pt-1 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              {/* Primary CTA */}
              <button className="btn-yellow-glow px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold flex items-center gap-2 tracking-wide cursor-pointer">
                <span>Find & Book a Turf</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Secondary CTA */}
              <button className="px-6 py-3 rounded-full bg-[#00251A]/60 hover:bg-[#003A29]/80 border border-white/30 hover:border-white/60 text-xs sm:text-sm font-bold text-white flex items-center gap-2.5 backdrop-blur-md transition-all cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                </div>
                <span>How It Works</span>
              </button>
            </div>

          </div>

          {/* ========================================================
              SECTION 5: Football Player (Layered Behind Headline)
          ======================================================== */}
          <div className="hidden lg:block absolute top-[-40px] xl:top-[-50px] left-[27%] xl:left-[29%] w-[400px] xl:w-[440px] pointer-events-none z-10 select-none transition-all duration-1000">
            <img 
              src={playerImg} 
              alt="Realistic football player #10 kicking ball on floodlit grass" 
              className="w-full h-auto object-contain select-none"
            />
          </div>

          {/* ========================================================
              SECTION 7: Right-Side Featured Turf Showcase (3D Tilted Card)
          ======================================================== */}
          <div className={`lg:col-span-5 relative z-20 flex justify-center lg:justify-end lg:perspective-container transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative w-full max-w-[490px] rounded-[24px] overflow-hidden border-2 border-[#00F5B0]/80 bg-[#00251A] shadow-[0_0_35px_rgba(0,245,176,0.45),0_0_15px_rgba(200,255,0,0.2)] lg:tilted-3d-card group select-none">
              
              {/* Aerial photograph of realistic football turf at night */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={turfPitchImg} 
                  alt="Aerial night view of floodlit football turf" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark gradient overlay for readability and depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00130D] via-transparent to-black/35 pointer-events-none" />

                {/* Top-left: Live Availability pill */}
                <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00130D]/85 border border-[#00F5B0]/40 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#00F5B0] animate-ping" />
                  <span className="text-[10px] font-bold text-[#00F5B0] tracking-wider">
                    Live Availability
                  </span>
                </div>

                {/* Top-right: circular dark button with heart icon */}
                <button 
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-red-400 transition-colors cursor-pointer"
                  aria-label="Add to favorites"
                >
                  <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                </button>

                {/* Circular previous and next arrow buttons */}
                <button 
                  onClick={handlePrevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00F5B0] hover:text-[#00130D] transition-all z-10 cursor-pointer"
                  aria-label="Previous turf image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button 
                  onClick={handleNextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00F5B0] hover:text-[#00130D] transition-all z-10 cursor-pointer"
                  aria-label="Next turf image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex items-end justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-[#00F5B0] uppercase italic">
                      FIFA Quality Pro Pitch
                    </span>
                    <h3 className="text-xs sm:text-base font-bold text-white tracking-tight">
                      Instant Hourly Slot Booking
                    </h3>
                  </div>

                  {/* Rating Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-[#FFC400]/40 shadow-md shrink-0">
                    <Star className="w-3.5 h-3.5 fill-[#FFC400] text-[#FFC400]" />
                    <span className="text-[11px] sm:text-xs font-bold text-[#FFC400] whitespace-nowrap">
                      4.9 (1.2K+ Bookings)
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Carousel Indicators Under Card */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              <span className={`h-1.5 rounded-full transition-all duration-300 ${cardCarouselIndex === 0 ? 'w-7 bg-[#00F5B0] shadow-[0_0_8px_#00F5B0]' : 'w-1.5 bg-[#2A473C]'}`} />
              <span className={`h-1.5 rounded-full transition-all duration-300 ${cardCarouselIndex === 1 ? 'w-7 bg-[#00F5B0] shadow-[0_0_8px_#00F5B0]' : 'w-1.5 bg-[#2A473C]'}`} />
              <span className={`h-1.5 rounded-full transition-all duration-300 ${cardCarouselIndex === 2 ? 'w-7 bg-[#00F5B0] shadow-[0_0_8px_#00F5B0]' : 'w-1.5 bg-[#2A473C]'}`} />
            </div>
          </div>

        </div>

        {/* ========================================================
            SECTION 8: TURF SEARCH AND BOOKING BAR
        ======================================================== */}
        <div className={`relative z-30 mt-16 sm:mt-20 lg:mt-[115px] transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="p-2 sm:p-2.5 rounded-[20px] bg-[#00251A]/85 border border-[#00F5B0]/30 backdrop-blur-xl shadow-[0_0_35px_rgba(0,245,176,0.22)] grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
            
            {/* Control 1 — Location search */}
            <div className="sm:col-span-5 flex items-center gap-3 px-4 py-2.5 sm:py-3 bg-black/55 rounded-[14px] border border-white/10 focus-within:border-[#00F5B0]/50 transition-colors">
              <MapPin className="w-4 h-4 text-[#00F5B0] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, locality, or turf name..."
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-[#D0DED8]/60 focus:outline-none"
              />
            </div>

            {/* Control 2 — Sports selector */}
            <div className="sm:col-span-3 relative">
              <button
                type="button"
                onClick={() => setSportsDropdown(!sportsDropdown)}
                className="w-full flex items-center justify-between px-4 py-2.5 sm:py-3 bg-black/55 rounded-[14px] border border-white/10 hover:border-[#00F5B0]/40 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  {/* Clean SVG Sports Ball outline icon matching reference */}
                  <svg className="w-4 h-4 text-[#00F5B0] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  <span className="text-xs sm:text-sm font-medium text-white truncate">
                    {selectedSport}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-[#D0DED8] shrink-0" />
              </button>
            </div>

            {/* Control 3 — Date selector */}
            <div className="sm:col-span-2">
              <div className="w-full flex items-center justify-between px-4 py-2.5 sm:py-3 bg-black/55 rounded-[14px] border border-white/10 hover:border-[#00F5B0]/40 transition-colors cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#00F5B0] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white truncate">
                    {selectedDate}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-[#D0DED8] shrink-0" />
              </div>
            </div>

            {/* Control 4 — Search button */}
            <div className="sm:col-span-2">
              <button className="btn-yellow-glow w-full py-2.5 sm:py-3 px-4 rounded-[14px] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer">
                <span>Find Slots</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

          </div>
        </div>

        {/* ========================================================
            SECTION 9: BOTTOM TRUST INDICATORS AND STATISTICS
        ======================================================== */}
        <div className={`relative z-30 mt-5 sm:mt-6 pt-3.5 pb-2 sm:pb-4 border-t border-emerald-950/40 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-wrap items-center justify-between gap-y-3 text-[11px] sm:text-xs font-semibold text-[#D0DED8]">
            
            {/* 1. Shield-check icon — 100% Verified Venues */}
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00F5B0]" />
              <span>100% Verified Venues</span>
            </div>

            {/* 2. Yellow lightning icon — Instant Slot Locking */}
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FFC400] fill-[#FFC400]" />
              <span>Instant Slot Locking</span>
            </div>

            {/* 3. Payment-card icon — Pay Online or at Venue */}
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#00F5B0]" />
              <span>Pay Online or at Venue</span>
            </div>

            {/* Thin vertical divider */}
            <div className="hidden lg:block w-[1px] h-4 bg-[#003A29]" />

            {/* 4. Sports-arena icon — 6+ Live Arenas */}
            <div className="flex items-center gap-2">
              {/* Custom SVG Wireframe Sports Arena Icon matching reference */}
              <svg className="w-4 h-4 text-[#00F5B0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="7" rx="10" ry="4" />
                <path d="M2 7v10c0 2.2 4.5 4 10 4s10-1.8 10-4V7" />
                <path d="M6 10v6" />
                <path d="M12 11v6" />
                <path d="M18 10v6" />
              </svg>
              <div className="flex items-baseline gap-1">
                <span className="text-white font-bold">6+</span>
                <span className="text-[#D0DED8]">Live Arenas</span>
              </div>
            </div>

            {/* 5. Calendar icon — 6 AM–10 PM Daily Slots */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00F5B0]" />
              <div className="flex items-baseline gap-1">
                <span className="text-white font-bold">6 AM–10 PM</span>
                <span className="text-[#D0DED8]">Daily Slots</span>
              </div>
            </div>

            {/* 6. Coin-stack icon — ₹0 Platform Fee */}
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-[#00F5B0]" />
              <div className="flex items-baseline gap-1">
                <span className="text-white font-bold">₹0</span>
                <span className="text-[#D0DED8]">Platform Fee</span>
              </div>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
}
