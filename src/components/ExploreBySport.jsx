import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function ExploreBySport() {
  const [selectedSport, setSelectedSport] = useState('cricket');

  const sports = [
    {
      id: 'cricket',
      name: 'Cricket',
      subtitle: 'Box & Astro Pitch',
      image: '/assets/sport_cricket_4k.png',
      alt: '3D cricket bat and red cricket ball'
    },
    {
      id: 'football',
      name: 'Football',
      subtitle: '5v5, 7v7 & 11v11',
      image: '/assets/sport_football_4k.png',
      alt: '3D football'
    },
    {
      id: 'badminton',
      name: 'Badminton',
      subtitle: 'BWF Synthetic Courts',
      image: '/assets/sport_badminton_4k.png',
      alt: '3D badminton shuttlecock'
    },
    {
      id: 'tennis',
      name: 'Tennis',
      subtitle: 'Hard & Clay Courts',
      image: '/assets/sport_tennis_4k.png',
      alt: '3D bright-yellow tennis ball'
    },
    {
      id: 'basketball',
      name: 'Basketball',
      subtitle: 'Pro Acrylic Courts',
      image: '/assets/sport_basketball_4k.png',
      alt: '3D orange basketball'
    },
    {
      id: 'hockey',
      name: 'Hockey',
      subtitle: 'Water & Astro Turf',
      image: '/assets/sport_hockey_4k.png',
      alt: '3D hockey stick and white ball'
    }
  ];

  return (
    <section className="relative w-full bg-[#00130D] text-white pt-8 pb-10 sm:pt-9 sm:pb-12 lg:pt-11 lg:pb-13 overflow-hidden border-t border-white/5">

      {/* ========================================================
          SEAMLESS FULL-WIDTH BACKGROUND (WAVES + STADIUM PITCH + FOOTBALL)
          Single continuous background image: 100% smooth, zero seams, zero cut-off edges
      ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/assets/explore_sports_full_bg.jpg"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle top & bottom edge blend to ensure 100% seamless transition */}
        <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-[#00130D] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-[#00130D] to-transparent pointer-events-none" />
      </div>

      {/* ========================================================
          MAIN CONTENT CONTAINER
      ======================================================== */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8">

        {/* Header Row: Title & Eyebrow on left, "View all venues" on right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 sm:mb-6">

          {/* Left Title Area */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-1.5 sm:mb-2">
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.22em] text-[#00F5B0] uppercase">
                EXPLORE BY SPORT
              </span>
              <div className="w-9 sm:w-11 h-[2px] bg-[#00F5B0] rounded-full shadow-[0_0_8px_#00F5B0]" />
            </div>

            {/* Main Heading: "Choose Your Game" with curved underline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-white flex items-center leading-none">
              <span>Choose Your</span>
              <div className="relative inline-block ml-2">
                <span className="bg-gradient-to-r from-[#00F5B0] via-[#C8FF00] to-[#00F5B0] bg-clip-text text-transparent">
                  Game
                </span>
                {/* Curved lime-green underline */}
                <svg
                  className="w-[85px] sm:w-[100px] h-3 sm:h-3.5 absolute -bottom-1.5 sm:-bottom-2 left-0 text-[#00F5B0] pointer-events-none"
                  viewBox="0 0 120 14"
                  fill="none"
                >
                  <path
                    d="M3 10C35 2 85 2 117 8"
                    stroke="#00F5B0"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </h2>
          </div>

          {/* Right Action: "View all venues →" Outlined Pill Button */}
          <div>
            <a
              href="#explore"
              className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-[#00F5B0]/50 hover:border-[#00F5B0] bg-[#00251A]/70 hover:bg-[#003825]/90 text-[11px] sm:text-xs font-semibold text-white backdrop-blur-md transition-all shadow-[0_0_15px_rgba(0,245,176,0.15)] hover:shadow-[0_0_20px_rgba(0,245,176,0.35)] group cursor-pointer"
            >
              <span>View all venues</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00F5B0] group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </a>
          </div>

        </div>

        {/* ========================================================
            SPORTS CARDS ROW (6 CARDS IN EXACT ORDER)
        ======================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 lg:gap-4">
          {sports.map((sport) => {
            const isActive = selectedSport === sport.id;

            return (
              <div
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`relative rounded-[22px] sm:rounded-[26px] p-3 sm:py-3.5 sm:px-3 flex flex-col items-center justify-between h-[126px] sm:h-[136px] transition-all duration-300 cursor-pointer group ${isActive
                  ? 'border-2 border-[#00F5B0] bg-gradient-to-b from-[#003825]/95 via-[#002619]/95 to-[#001D14]/95 shadow-[0_0_25px_rgba(0,245,176,0.4),inset_0_0_15px_rgba(0,245,176,0.12)] scale-[1.02]'
                  : 'border border-[#00F5B0]/20 hover:border-[#00F5B0]/45 bg-[#002015]/85 hover:bg-[#002a1c]/90 backdrop-blur-md shadow-md hover:scale-[1.01]'
                  }`}
              >
                {/* Upper Half: Centered 3D Sports Illustration with Bouncing Ball & Stationary Neon Ring */}
                <div className="scene w-full h-[62px] sm:h-[68px] flex flex-col items-center justify-center relative">
                  {sport.id === 'cricket' ? (
                    /* Cricket: Bat Pitch Tap & Ball Pop */
                    <div className="relative w-[64px] h-[50px] sm:h-[54px] flex items-center justify-center z-10">
                      {/* 3D English Willow Cricket Bat */}
                      <img
                        src="/assets/cricket_bat_4k.png"
                        alt="3D Cricket Bat"
                        className="absolute h-[46px] sm:h-[50px] object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] animate-cricket-bat select-none pointer-events-none z-20 left-0 top-0.5"
                        loading="eager"
                      />
                      {/* 3D Red Leather Cricket Ball */}
                      <img
                        src="/assets/cricket_ball_4k.png"
                        alt="3D Cricket Ball"
                        className="absolute h-[19px] sm:h-[21px] w-[19px] sm:w-[21px] object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)] animate-cricket-ball select-none pointer-events-none z-15 right-1 bottom-1"
                        loading="eager"
                      />
                    </div>
                  ) : sport.id === 'football' ? (
                    /* Spinning Football (Continuously spins) */
                    <img
                      src={sport.image}
                      alt={sport.alt}
                      className="max-h-[50px] sm:max-h-[54px] max-w-[85%] object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] animate-football-spin select-none pointer-events-none z-10"
                      loading="eager"
                    />
                  ) : sport.id === 'badminton' ? (
                    /* Floating Shuttlecock (Continuously floats) */
                    <img
                      src={sport.image}
                      alt={sport.alt}
                      className="max-h-[52px] sm:max-h-[56px] max-w-[85%] object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] animate-shuttle select-none pointer-events-none z-10 overflow-visible"
                      loading="eager"
                    />
                  ) : sport.id === 'tennis' ? (
                    /* Tennis Ball Moving in a Cross-Court Arc */
                    <img
                      src={sport.image}
                      alt={sport.alt}
                      className="max-h-[48px] sm:max-h-[52px] max-w-[85%] object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] animate-tennis-rally select-none pointer-events-none z-10"
                      loading="eager"
                    />
                  ) : sport.id === 'hockey' ? (
                    /* Original 3D Hockey Image with Realistic Dribble & Flick Animation */
                    <img
                      src={sport.image}
                      alt={sport.alt}
                      className="max-h-[52px] sm:max-h-[56px] max-w-[85%] object-contain select-none pointer-events-none z-10 animate-hockey-dribble drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
                      loading="eager"
                    />
                  ) : (
                    <img
                      src={sport.image}
                      alt={sport.alt}
                      className={`${sport.id === 'basketball' ? 'animate-ball-tap' : 'ball'} max-h-[50px] sm:max-h-[54px] max-w-[85%] object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] select-none pointer-events-none`}
                      loading="eager"
                    />
                  )}
                  {sport.id !== 'hockey' && <div className="neon-ring"></div>}
                </div>

                {/* Lower Half: Sport Name & Subtitle */}
                <div className="w-full text-center mt-auto pb-0.5">
                  <h3 className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-tight">
                    {sport.name}
                  </h3>
                  <p className="text-[9.5px] sm:text-[10px] font-medium text-[#9BB1A6] mt-0.5 whitespace-nowrap leading-tight">
                    {sport.subtitle}
                  </p>
                </div>

                {/* Active Selection Indicator: Circular Lime Button with Dark Chevron near bottom-right */}
                {isActive && (
                  <div className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#00F5B0] flex items-center justify-center shadow-[0_0_10px_#00F5B0] transition-transform group-hover:scale-110">
                    <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00130D] stroke-[3]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
