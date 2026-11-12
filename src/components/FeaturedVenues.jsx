import React, { useState } from 'react';
import { ArrowRight, Heart, Star, MapPin, Zap, ExternalLink } from 'lucide-react';

/* ================================================================
   SVG-based venue illustrations — no external images needed.
   Each renders a unique nighttime turf scene with floodlights.
   ================================================================ */

const VenueScene1 = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#001208"/>
        <stop offset="60%" stopColor="#002a15"/>
        <stop offset="100%" stopColor="#004d25"/>
      </linearGradient>
      <radialGradient id="light1a" cx="0.15" cy="0.1" r="0.6">
        <stop offset="0%" stopColor="rgba(255,255,220,0.35)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <radialGradient id="light1b" cx="0.85" cy="0.1" r="0.6">
        <stop offset="0%" stopColor="rgba(255,255,220,0.3)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <rect width="400" height="200" fill="url(#sky1)"/>
    <rect x="0" y="120" width="400" height="80" fill="#0d4a20" rx="0"/>
    {/* Field lines */}
    <line x1="200" y1="120" x2="200" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    <rect x="30" y="140" width="340" height="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
    <circle cx="200" cy="165" r="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
    {/* Floodlight poles */}
    <rect x="48" y="15" width="4" height="105" fill="#1a3a25" rx="1"/>
    <rect x="40" y="8" width="20" height="12" rx="3" fill="#2a4a35"/>
    <rect x="348" y="15" width="4" height="105" fill="#1a3a25" rx="1"/>
    <rect x="340" y="8" width="20" height="12" rx="3" fill="#2a4a35"/>
    {/* Light beams */}
    <rect x="0" y="0" width="400" height="200" fill="url(#light1a)"/>
    <rect x="0" y="0" width="400" height="200" fill="url(#light1b)"/>
    {/* Light dots */}
    <circle cx="50" cy="12" r="3" fill="rgba(255,255,200,0.9)"/>
    <circle cx="44" cy="14" r="2" fill="rgba(255,255,200,0.7)"/>
    <circle cx="56" cy="14" r="2" fill="rgba(255,255,200,0.7)"/>
    <circle cx="350" cy="12" r="3" fill="rgba(255,255,200,0.9)"/>
    <circle cx="344" cy="14" r="2" fill="rgba(255,255,200,0.7)"/>
    <circle cx="356" cy="14" r="2" fill="rgba(255,255,200,0.7)"/>
    {/* Nets */}
    <path d="M0 100 Q50 90 60 120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
    <path d="M400 100 Q350 90 340 120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
    {/* Net mesh lines */}
    {[...Array(8)].map((_, i) => (
      <line key={`n1${i}`} x1={i*8} y1="95" x2={20+i*5} y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="0.4"/>
    ))}
  </svg>
);

const VenueScene2 = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#000d06"/>
        <stop offset="50%" stopColor="#001a10"/>
        <stop offset="100%" stopColor="#003d1e"/>
      </linearGradient>
      <radialGradient id="light2" cx="0.5" cy="0.05" r="0.7">
        <stop offset="0%" stopColor="rgba(255,255,220,0.3)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <rect width="400" height="200" fill="url(#sky2)"/>
    <rect x="0" y="110" width="400" height="90" fill="#0a4020" rx="0"/>
    <rect x="0" y="0" width="400" height="200" fill="url(#light2)"/>
    {/* Field markings */}
    <rect x="20" y="130" width="360" height="60" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
    <rect x="20" y="130" width="80" height="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
    <rect x="300" y="130" width="80" height="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
    {/* Center floodlight */}
    <rect x="196" y="5" width="8" height="100" fill="#1a3520" rx="2"/>
    <rect x="188" y="2" width="24" height="10" rx="4" fill="#2a4530"/>
    <circle cx="200" cy="6" r="4" fill="rgba(255,255,200,0.95)"/>
    <circle cx="194" cy="8" r="2.5" fill="rgba(255,255,200,0.7)"/>
    <circle cx="206" cy="8" r="2.5" fill="rgba(255,255,200,0.7)"/>
    {/* Soccer ball */}
    <circle cx="240" cy="150" r="12" fill="white" stroke="#333" strokeWidth="0.5"/>
    <path d="M240 138 L237 143 L243 143Z M228 148 L232 144 L232 150Z M252 148 L248 144 L248 150Z M237 160 L240 155 L243 160Z M233 153 L237 150 L240 154 L243 150 L247 153 L245 158 L235 158Z" fill="#333" opacity="0.6"/>
    {/* Side poles */}
    <rect x="18" y="25" width="3" height="85" fill="#1a3520" rx="1"/>
    <rect x="379" y="25" width="3" height="85" fill="#1a3520" rx="1"/>
    <circle cx="20" cy="22" r="2.5" fill="rgba(255,255,200,0.8)"/>
    <circle cx="380" cy="22" r="2.5" fill="rgba(255,255,200,0.8)"/>
  </svg>
);

const VenueScene3 = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#000e07"/>
        <stop offset="40%" stopColor="#001f12"/>
        <stop offset="100%" stopColor="#004422"/>
      </linearGradient>
      <radialGradient id="light3a" cx="0.2" cy="0.05" r="0.5">
        <stop offset="0%" stopColor="rgba(255,200,100,0.3)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <radialGradient id="light3b" cx="0.8" cy="0.05" r="0.5">
        <stop offset="0%" stopColor="rgba(255,200,100,0.3)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <rect width="400" height="200" fill="url(#sky3)"/>
    <rect x="0" y="115" width="400" height="85" fill="#0b4520" rx="0"/>
    <rect x="0" y="0" width="400" height="200" fill="url(#light3a)"/>
    <rect x="0" y="0" width="400" height="200" fill="url(#light3b)"/>
    {/* Grass stripes */}
    {[...Array(6)].map((_, i) => (
      <rect key={`gs${i}`} x="0" y={115 + i * 14} width="400" height="7" fill={i % 2 === 0 ? "rgba(0,80,30,0.3)" : "transparent"}/>
    ))}
    {/* Double floodlights */}
    <rect x="68" y="10" width="4" height="105" fill="#1a3520" rx="1"/>
    <rect x="60" y="4" width="20" height="12" rx="3" fill="#2a4530"/>
    <circle cx="65" cy="8" r="3" fill="rgba(255,230,150,0.95)"/>
    <circle cx="75" cy="8" r="3" fill="rgba(255,230,150,0.95)"/>
    <rect x="328" y="10" width="4" height="105" fill="#1a3520" rx="1"/>
    <rect x="320" y="4" width="20" height="12" rx="3" fill="#2a4530"/>
    <circle cx="325" cy="8" r="3" fill="rgba(255,230,150,0.95)"/>
    <circle cx="335" cy="8" r="3" fill="rgba(255,230,150,0.95)"/>
    {/* Field outline */}
    <rect x="25" y="125" width="350" height="65" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
    {/* Goal areas */}
    <rect x="25" y="140" width="40" height="35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6"/>
    <rect x="335" y="140" width="40" height="35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6"/>
    {/* Fence posts */}
    {[...Array(12)].map((_, i) => (
      <rect key={`fp${i}`} x={15 + i * 34} y="85" width="1.5" height="30" fill="rgba(150,150,150,0.15)" rx="0.5"/>
    ))}
    <line x1="15" y1="90" x2="390" y2="90" stroke="rgba(150,150,150,0.1)" strokeWidth="0.5"/>
    <line x1="15" y1="100" x2="390" y2="100" stroke="rgba(150,150,150,0.08)" strokeWidth="0.5"/>
  </svg>
);

const VenueScene4 = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky4" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#001009"/>
        <stop offset="100%" stopColor="#003820"/>
      </linearGradient>
      <radialGradient id="light4" cx="0.5" cy="0.15" r="0.8">
        <stop offset="0%" stopColor="rgba(255,255,220,0.25)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <rect width="400" height="200" fill="url(#sky4)"/>
    <rect x="0" y="125" width="400" height="75" fill="#0c4822"/>
    <rect x="0" y="0" width="400" height="200" fill="url(#light4)"/>
    {/* Box cricket enclosure */}
    <rect x="40" y="30" width="320" height="95" fill="none" stroke="rgba(0,245,176,0.15)" strokeWidth="1"/>
    {/* Net lines */}
    {[...Array(16)].map((_, i) => (
      <line key={`bn${i}`} x1={40 + i * 20} y1="30" x2={40 + i * 20} y2="125" stroke="rgba(0,245,176,0.06)" strokeWidth="0.3"/>
    ))}
    {[...Array(5)].map((_, i) => (
      <line key={`bh${i}`} x1="40" y1={30 + i * 19} x2="360" y2={30 + i * 19} stroke="rgba(0,245,176,0.06)" strokeWidth="0.3"/>
    ))}
    {/* Pitch strip */}
    <rect x="175" y="60" width="50" height="65" fill="rgba(200,180,120,0.15)" rx="1"/>
    {/* Floodlights on enclosure */}
    <circle cx="50" cy="28" r="2.5" fill="rgba(255,255,200,0.9)"/>
    <circle cx="200" cy="28" r="2.5" fill="rgba(255,255,200,0.9)"/>
    <circle cx="350" cy="28" r="2.5" fill="rgba(255,255,200,0.9)"/>
    {/* Cricket stumps */}
    <rect x="197" y="100" width="1" height="12" fill="rgba(255,255,255,0.4)"/>
    <rect x="200" y="100" width="1" height="12" fill="rgba(255,255,255,0.4)"/>
    <rect x="203" y="100" width="1" height="12" fill="rgba(255,255,255,0.4)"/>
  </svg>
);

const VenueScene5 = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky5" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#000f08"/>
        <stop offset="100%" stopColor="#003a1c"/>
      </linearGradient>
      <radialGradient id="light5a" cx="0.3" cy="0.08" r="0.5">
        <stop offset="0%" stopColor="rgba(255,255,220,0.3)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <radialGradient id="light5b" cx="0.7" cy="0.08" r="0.5">
        <stop offset="0%" stopColor="rgba(255,255,220,0.25)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <rect width="400" height="200" fill="url(#sky5)"/>
    <rect x="0" y="105" width="400" height="95" fill="#0d4820"/>
    <rect x="0" y="0" width="400" height="200" fill="url(#light5a)"/>
    <rect x="0" y="0" width="400" height="200" fill="url(#light5b)"/>
    {/* Grass stripes */}
    {[...Array(7)].map((_, i) => (
      <rect key={`g5${i}`} x="0" y={105 + i * 13} width="400" height="6" fill={i % 2 === 0 ? "rgba(0,60,20,0.25)" : "transparent"}/>
    ))}
    {/* Field markings */}
    <rect x="30" y="120" width="340" height="70" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
    <line x1="200" y1="120" x2="200" y2="190" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
    <circle cx="200" cy="155" r="22" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
    {/* Corner arcs */}
    <path d="M30 120 Q38 120 38 128" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6"/>
    <path d="M370 120 Q362 120 362 128" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6"/>
    {/* Floodlight towers */}
    <rect x="108" y="8" width="4" height="97" fill="#1a3520" rx="1"/>
    <rect x="100" y="2" width="20" height="10" rx="3" fill="#2a4530"/>
    <circle cx="110" cy="6" r="3.5" fill="rgba(255,255,200,0.95)"/>
    <rect x="288" y="8" width="4" height="97" fill="#1a3520" rx="1"/>
    <rect x="280" y="2" width="20" height="10" rx="3" fill="#2a4530"/>
    <circle cx="290" cy="6" r="3.5" fill="rgba(255,255,200,0.95)"/>
    {/* Tennis ball */}
    <circle cx="300" cy="160" r="6" fill="#C8E600" stroke="#9AB000" strokeWidth="0.5"/>
    <path d="M294 160 Q300 155 306 160" fill="none" stroke="#9AB000" strokeWidth="0.6"/>
    <path d="M294 160 Q300 165 306 160" fill="none" stroke="#9AB000" strokeWidth="0.6"/>
  </svg>
);

const VenueScene6 = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky6" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#001008"/>
        <stop offset="100%" stopColor="#004020"/>
      </linearGradient>
      <radialGradient id="light6" cx="0.5" cy="0.1" r="0.7">
        <stop offset="0%" stopColor="rgba(255,255,220,0.28)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <rect width="400" height="200" fill="url(#sky6)"/>
    <rect x="0" y="110" width="400" height="90" fill="#0c4520"/>
    <rect x="0" y="0" width="400" height="200" fill="url(#light6)"/>
    {/* Wide pitch view */}
    <rect x="10" y="120" width="380" height="70" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
    {/* Grass pattern */}
    {[...Array(8)].map((_, i) => (
      <rect key={`g6${i}`} x="10" y={120 + i * 9} width="380" height="4" fill={i % 2 === 0 ? "rgba(0,70,25,0.2)" : "transparent"}/>
    ))}
    {/* Multi floodlights */}
    {[60, 140, 260, 340].map((x, i) => (
      <g key={`fl6${i}`}>
        <rect x={x-1} y="12" width="3" height="98" fill="#1a3520" rx="0.8"/>
        <circle cx={x+0.5} cy="10" r="2.5" fill="rgba(255,255,200,0.9)"/>
      </g>
    ))}
    {/* Fencing */}
    {[...Array(20)].map((_, i) => (
      <rect key={`f6${i}`} x={10 + i * 19} y="80" width="1" height="40" fill="rgba(120,120,120,0.12)" rx="0.3"/>
    ))}
    <line x1="10" y1="85" x2="390" y2="85" stroke="rgba(120,120,120,0.08)" strokeWidth="0.4"/>
    <line x1="10" y1="95" x2="390" y2="95" stroke="rgba(120,120,120,0.06)" strokeWidth="0.4"/>
    <line x1="10" y1="105" x2="390" y2="105" stroke="rgba(120,120,120,0.05)" strokeWidth="0.4"/>
    {/* Goal */}
    <rect x="10" y="140" width="25" height="30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.7"/>
    <rect x="365" y="140" width="25" height="30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.7"/>
  </svg>
);

const venueScenes = [VenueScene1, VenueScene2, VenueScene3, VenueScene4, VenueScene5, VenueScene6];

/* ================================================================
   Amenity Icon Components
   ================================================================ */
const ParkingIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="12" height="12" rx="2"/>
    <path d="M6 11V5h2.5a2 2 0 010 4H6"/>
  </svg>
);

const FloodlightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="7" y="6" width="2" height="8" rx="0.5"/>
    <path d="M4 3h8l-1 4H5z"/>
    <circle cx="8" cy="4" r="1" fill="currentColor"/>
  </svg>
);

const WaterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 2C8 2 4 7 4 10a4 4 0 008 0c0-3-4-8-4-8z"/>
  </svg>
);

const WashroomIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="4" r="2"/>
    <path d="M5 8h6v1l-1 5H6L5 9z"/>
  </svg>
);

const AmenityIcon = ({ type, className }) => {
  switch (type) {
    case 'parking': return <ParkingIcon className={className} />;
    case 'floodlights': return <FloodlightIcon className={className} />;
    case 'water': return <WaterIcon className={className} />;
    case 'washroom': return <WashroomIcon className={className} />;
    default: return <FloodlightIcon className={className} />;
  }
};

/* ================================================================
   Main Component
   ================================================================ */
export default function FeaturedVenues() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const venues = [
    {
      id: 1,
      name: 'Fugo Sports Turf',
      scene: 0,
      location: 'Fugo, Bangalore',
      rating: 5.0,
      sports: [
        { name: 'Cricket', icon: '🏏' },
        { name: 'Football', icon: '⚽' },
        { name: 'Badminton', icon: '🏸' }
      ],
      amenities: [
        { name: 'Parking', icon: 'parking' },
        { name: 'Floodlights', icon: 'floodlights' },
        { name: 'Drinking Water', icon: 'water' },
      ],
      extraAmenities: 1,
      price: 100,
      instantSlot: true
    },
    {
      id: 2,
      name: 'Ground Arena',
      scene: 1,
      location: 'Indiranagar 100 Ft Road, Bangalore',
      rating: 4.0,
      sports: [
        { name: 'Football', icon: '⚽' },
        { name: 'Hockey', icon: '🏑' }
      ],
      amenities: [
        { name: 'Floodlights', icon: 'floodlights' },
        { name: 'Parking', icon: 'parking' },
        { name: 'Washroom', icon: 'washroom' },
      ],
      extraAmenities: 2,
      price: 2000,
      instantSlot: true
    },
    {
      id: 3,
      name: 'Sports Hub Arena',
      scene: 2,
      location: 'HSR Layout Sector 2, Bangalore',
      rating: 4.5,
      sports: [
        { name: 'Cricket', icon: '🏏' },
        { name: 'Badminton', icon: '🏸' }
      ],
      amenities: [
        { name: 'Floodlights', icon: 'floodlights' },
        { name: 'Parking', icon: 'parking' },
        { name: 'Washroom', icon: 'washroom' },
      ],
      extraAmenities: 0,
      price: 1200,
      instantSlot: true
    },
    {
      id: 4,
      name: 'Arena Sports Turf',
      scene: 3,
      location: 'Chennai, TN',
      rating: 4.9,
      sports: [
        { name: 'Football', icon: '⚽' },
        { name: 'Tennis', icon: '🎾' }
      ],
      amenities: [
        { name: 'Floodlights', icon: 'floodlights' },
        { name: 'Parking', icon: 'parking' },
        { name: 'Washroom', icon: 'washroom' },
      ],
      extraAmenities: 1,
      price: 800,
      instantSlot: true
    },
    {
      id: 5,
      name: 'Turf Zone',
      scene: 4,
      location: 'Coimbatore, TN',
      rating: 4.8,
      sports: [
        { name: 'Football', icon: '⚽' },
        { name: 'Cricket', icon: '🏏' },
        { name: 'Badminton', icon: '🏸' }
      ],
      amenities: [
        { name: 'Floodlights', icon: 'floodlights' },
        { name: 'Parking', icon: 'parking' },
        { name: 'Drinking Water', icon: 'water' },
      ],
      extraAmenities: 0,
      price: 600,
      instantSlot: true
    },
    {
      id: 6,
      name: 'PlayStar Turf',
      scene: 5,
      location: 'Madurai, TN',
      rating: 4.9,
      sports: [
        { name: 'Cricket', icon: '🏏' },
        { name: 'Basketball', icon: '🏀' }
      ],
      amenities: [
        { name: 'Floodlights', icon: 'floodlights' },
        { name: 'Parking', icon: 'parking' },
        { name: 'Washroom', icon: 'washroom' },
      ],
      extraAmenities: 1,
      price: 500,
      instantSlot: true
    }
  ];

  return (
    <section className="relative w-full bg-[#00130D] text-white pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 overflow-hidden select-none">

      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00130D] via-[#001A10] to-[#00130D]" />
        {/* Subtle green radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,176,0.05)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* Floating football - top right */}
      <div className="absolute top-2 right-[6%] sm:right-[8%] lg:right-[10%] w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 pointer-events-none select-none z-10 opacity-85">
        <img
          src="/assets/sport_football_3d.png"
          alt=""
          className="w-full h-full object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)] animate-gentle-float"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8">

        {/* ── Header Row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">

          {/* Left: Badge + Heading + Description */}
          <div className="max-w-2xl">
            {/* FEATURED VENUES badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A3D2E]/80 border border-[#00F5B0]/20 mb-4">
              <span className="text-sm">🏆</span>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.18em] text-[#FFC400] uppercase">
                FEATURED VENUES
              </span>
            </div>

            {/* Main Heading: "Top-Rated Sports Turfs" */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-white leading-[1.1] mb-3">
              Top-Rated{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#00F5B0] via-[#C8FF00] to-[#00F5B0] bg-clip-text text-transparent">
                  Sports Turfs
                </span>
                <svg
                  className="w-full h-3 sm:h-3.5 absolute -bottom-1.5 left-0 pointer-events-none"
                  viewBox="0 0 200 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 10C55 2 145 2 197 10"
                    stroke="#FFC400"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-sm sm:text-[15px] text-[#9BB1A6] leading-relaxed max-w-xl">
              Handpicked, quality-inspected venues with floodlights, changing rooms & instant slot booking
            </p>
          </div>

          {/* Right: Explore All Turfs */}
          <div className="flex-shrink-0">
            <a
              href="#explore"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-[#00F5B0]/40 hover:border-[#00F5B0] bg-[#00251A]/60 hover:bg-[#003825]/80 text-xs sm:text-[13px] font-semibold text-white backdrop-blur-md transition-all shadow-[0_0_15px_rgba(0,245,176,0.12)] hover:shadow-[0_0_25px_rgba(0,245,176,0.3)] group cursor-pointer"
            >
              <span>Explore All Turfs</span>
              <ArrowRight className="w-4 h-4 text-[#00F5B0] group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* ── Venue Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {venues.map((venue, index) => {
            const isFirst = index === 0;
            const isFav = favorites[venue.id];
            const SceneComponent = venueScenes[venue.scene];

            return (
              <div
                key={venue.id}
                className={`relative rounded-[20px] sm:rounded-[24px] overflow-hidden transition-all duration-300 group cursor-pointer
                  ${isFirst
                    ? 'border-2 border-[#00F5B0]/60 shadow-[0_0_25px_rgba(0,245,176,0.18),0_0_50px_rgba(0,245,176,0.06)]'
                    : 'border border-[#00F5B0]/15 hover:border-[#00F5B0]/35 shadow-lg'
                  }
                  bg-[#0A1F16]/90 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,245,176,0.12)]`}
              >
                {/* ── Card Image Area ── */}
                <div className="relative w-full h-[175px] sm:h-[195px] overflow-hidden bg-[#001a0e]">
                  <SceneComponent />
                  {/* Gradient overlay for smooth blend into content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16] via-transparent to-transparent" />

                  {/* Sport Tags - top left */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    {venue.sports.map((sport, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0A1F16]/80 backdrop-blur-md border border-[#00F5B0]/12 text-[10px] sm:text-[11px] font-semibold text-white/85"
                      >
                        <span className="text-[10px]">{sport.icon}</span>
                        {sport.name}
                      </span>
                    ))}
                  </div>

                  {/* Heart button - top right */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(venue.id); }}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#0A1F16]/65 backdrop-blur-md border border-white/8 flex items-center justify-center hover:bg-[#0A1F16]/90 transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${isFav ? 'text-red-500 fill-red-500' : 'text-white/60'}`}
                    />
                  </button>

                  {/* INSTANT SLOT badge */}
                  {venue.instantSlot && (
                    <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFC400]/12 border border-[#FFC400]/25 backdrop-blur-md">
                      <Zap className="w-3 h-3 text-[#FFC400] fill-[#FFC400]" />
                      <span className="text-[10px] font-bold text-[#FFC400] tracking-wide uppercase">
                        INSTANT SLOT
                      </span>
                    </div>
                  )}
                </div>

                {/* ── Card Content ── */}
                <div className="p-4 sm:p-5">
                  {/* Name + Rating */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-[15px] sm:text-[17px] font-bold text-white leading-tight">
                      {venue.name}
                    </h3>
                    <div className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#00F5B0]/10 border border-[#00F5B0]/20">
                      <Star className="w-3 h-3 text-[#FFC400] fill-[#FFC400]" />
                      <span className="text-[11px] font-bold text-[#FFC400]">{venue.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#00F5B0] flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs text-[#9BB1A6] truncate">{venue.location}</span>
                  </div>

                  {/* Amenities Row */}
                  <div className="flex items-center gap-2.5 flex-wrap mb-4">
                    {venue.amenities.map((amenity, i) => (
                      <div key={i} className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-[#9BB1A6]">
                        <AmenityIcon type={amenity.icon} className="w-3.5 h-3.5 text-[#00F5B0]/50" />
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                    {venue.extraAmenities > 0 && (
                      <span className="text-[10px] sm:text-[11px] text-[#00F5B0]/50 font-medium">
                        +{venue.extraAmenities} more
                      </span>
                    )}
                  </div>

                  {/* Price + Book Slot */}
                  <div className="flex items-end justify-between pt-3 border-t border-white/5">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-[#9BB1A6]/60 uppercase tracking-wider font-medium block mb-0.5">
                        STARTING FROM
                      </span>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-xl sm:text-[22px] font-black text-[#FFC400]">
                          ₹{venue.price.toLocaleString()}
                        </span>
                        <span className="text-[11px] text-[#9BB1A6]/70">/ hour</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00F5B0] hover:bg-[#33F7C1] text-[#00130D] text-[11px] sm:text-xs font-bold transition-all hover:shadow-[0_0_20px_rgba(0,245,176,0.4)] group/btn">
                      <span>Book Slot</span>
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
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
