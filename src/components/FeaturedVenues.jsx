import React, { useState } from 'react';
import { 
  Heart, 
  Star, 
  MapPin, 
  Zap, 
  ArrowRight, 
  ArrowUpRight,
  Sun,
  Droplets,
  Car
} from 'lucide-react';

export default function FeaturedVenues() {
  const [favorites, setFavorites] = useState({});
  const [activeCardId, setActiveCardId] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Turfs', icon: null },
    { id: 'football', label: 'Football', icon: '⚽' },
    { id: 'cricket', label: 'Cricket', icon: '🏏' },
    { id: 'badminton', label: 'Badminton', icon: '🏸' },
    { id: 'instant', label: 'Instant Slots', icon: '⚡' },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const venues = [
    {
      id: 1,
      name: 'Fugo Sports Turf',
      image: '/assets/venue_fugo_clean.jpg',
      location: 'Fugo, Bangalore',
      rating: '5.0',
      sports: [
        { name: 'Cricket', icon: '🏏' },
        { name: 'Football', icon: '⚽' },
        { name: 'Badminton', icon: '🏸' }
      ],
      amenities: [
        { name: 'Parking', type: 'parking' },
        { name: 'Floodlights', type: 'lights' },
        { name: 'Drinking Water', type: 'water' },
      ],
      extraAmenities: '+1 more',
      price: '100',
      instantSlot: true
    },
    {
      id: 2,
      name: 'Ground Arena',
      image: '/assets/venue_ground_arena_clean.jpg',
      location: 'Indiranagar 100 Ft Road, Bangalore',
      rating: '4.0',
      sports: [
        { name: 'Football', icon: '⚽' },
        { name: 'Hockey', icon: '🏑' }
      ],
      amenities: [
        { name: 'Floodlights', type: 'lights' },
        { name: 'Parking', type: 'parking' },
        { name: 'Washroom', type: 'washroom' },
      ],
      extraAmenities: '+2 more',
      price: '2000',
      instantSlot: true
    },
    {
      id: 3,
      name: 'Sports Hub Arena',
      image: '/assets/venue_sports_hub_clean.jpg',
      location: 'HSR Layout Sector 2, Bangalore',
      rating: '4.5',
      sports: [
        { name: 'Cricket', icon: '🏏' },
        { name: 'Badminton', icon: '🏸' }
      ],
      amenities: [
        { name: 'Floodlights', type: 'lights' },
        { name: 'Parking', type: 'parking' },
        { name: 'Washroom', type: 'washroom' },
      ],
      extraAmenities: null,
      price: '1200',
      instantSlot: true
    },
    {
      id: 4,
      name: 'Arena Sports Turf',
      image: '/assets/venue_tennis_clean.jpg',
      location: 'Chennai, TN',
      rating: '4.9',
      sports: [
        { name: 'Football', icon: '⚽' },
        { name: 'Tennis', icon: '🎾' }
      ],
      amenities: [
        { name: 'Floodlights', type: 'lights' },
        { name: 'Parking', type: 'parking' },
        { name: 'Washroom', type: 'washroom' },
      ],
      extraAmenities: '+1 more',
      price: '800',
      instantSlot: true
    },
    {
      id: 5,
      name: 'Turf Zone',
      image: '/assets/venue_night_stadium_clean.jpg',
      location: 'Coimbatore, TN',
      rating: '4.8',
      sports: [
        { name: 'Football', icon: '⚽' },
        { name: 'Cricket', icon: '🏏' },
        { name: 'Badminton', icon: '🏸' }
      ],
      amenities: [
        { name: 'Floodlights', type: 'lights' },
        { name: 'Parking', type: 'parking' },
        { name: 'Drinking Water', type: 'water' },
      ],
      extraAmenities: null,
      price: '600',
      instantSlot: true
    },
    {
      id: 6,
      name: 'PlayStar Turf',
      image: '/assets/venue_basketball_clean.jpg',
      location: 'Madurai, TN',
      rating: '4.9',
      sports: [
        { name: 'Cricket', icon: '🏏' },
        { name: 'Basketball', icon: '🏀' }
      ],
      amenities: [
        { name: 'Floodlights', type: 'lights' },
        { name: 'Parking', type: 'parking' },
        { name: 'Washroom', type: 'washroom' },
      ],
      extraAmenities: '+1 more',
      price: '500',
      instantSlot: true
    }
  ];

  const renderAmenityIcon = (type) => {
    switch (type) {
      case 'parking':
        return <Car className="w-3.5 h-3.5 text-[#00F5B0]" />;
      case 'lights':
        return <Sun className="w-3.5 h-3.5 text-[#00F5B0]" />;
      case 'water':
        return <Droplets className="w-3.5 h-3.5 text-[#00F5B0]" />;
      case 'washroom':
        return (
          <svg className="w-3.5 h-3.5 text-[#00F5B0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 21v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
            <path d="M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          </svg>
        );
      default:
        return <Sun className="w-3.5 h-3.5 text-[#00F5B0]" />;
    }
  };

  return (
    <section className="relative w-full bg-[#00130D] text-white pt-10 pb-8 sm:pb-10 lg:pb-12 overflow-hidden border-t border-white/5">
      
      {/* ========================================================
          BACKGROUND & STADIUM LIGHTING COMPOSITION (100% SEAMLESS & SMOOTH)
      ======================================================== */}
      {/* Seamless deep stadium gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00130D] via-[#001E14] to-[#00130D] pointer-events-none" />

      {/* Atmospheric floodlight glows - completely smooth radial blends with zero edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,245,176,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-10 w-[600px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(0,245,176,0.04),transparent_65%)] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.03),transparent_65%)] pointer-events-none" />

      {/* ========================================================
          MAIN CONTENT CONTAINER
      ======================================================== */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Header Row: Badge, Title on left, Quick Filter Pills in middle, Explore Button on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7 sm:mb-9">
          
          {/* Left Title Area */}
          <div className="max-w-xl">
            {/* FEATURED VENUES Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002619]/90 border border-[#00F5B0]/30 shadow-[0_0_15px_rgba(0,245,176,0.15)] mb-3 sm:mb-4">
              <span className="text-xs">🏆</span>
              <span className="text-[10.5px] sm:text-[11px] font-black tracking-[0.2em] text-[#FFC400] uppercase">
                FEATURED VENUES
              </span>
            </div>

            {/* Main Heading: "Top-Rated Sports Turfs" */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight text-white flex flex-wrap items-center leading-none">
              <span>Top-Rated</span>
              <div className="relative inline-block ml-2.5 sm:ml-3">
                <span className="bg-gradient-to-r from-[#00F5B0] via-[#C8FF00] to-[#00F5B0] bg-clip-text text-transparent">
                  Sports Turfs
                </span>
                {/* Curved yellow underline */}
                <svg
                  className="w-[140px] sm:w-[180px] lg:w-[200px] h-3 sm:h-3.5 absolute -bottom-1.5 sm:-bottom-2 left-0 text-[#FFC400] pointer-events-none"
                  viewBox="0 0 160 14"
                  fill="none"
                >
                  <path
                    d="M3 10C50 2 110 2 157 8"
                    stroke="#FFC400"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </h2>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-[13.5px] text-[#A5C0B3] font-normal leading-relaxed mt-2.5">
              Handpicked, quality-inspected venues with floodlights, changing rooms & instant slot booking
            </p>
          </div>

          {/* Center & Right Area: Quick Filter Pills + "Explore All Turfs" Button */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 lg:justify-end">
            {/* Interactive Quick Filter Pills */}
            <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-[#001D14]/90 border border-[#00F5B0]/25 backdrop-blur-md shadow-md">
              {filterOptions.map((filter) => {
                const isSelected = selectedFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#00F5B0] text-[#00130D] shadow-[0_0_15px_rgba(0,245,176,0.4)] scale-[1.02]'
                        : 'text-[#A5C0B3] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {filter.icon && <span className="text-[11px]">{filter.icon}</span>}
                    <span>{filter.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Subtle Divider */}
            <div className="h-6 w-[1px] bg-white/10 hidden sm:block mx-0.5" />

            {/* "Explore All Turfs →" Outlined Pill Button */}
            <a
              href="#explore"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#00F5B0]/50 hover:border-[#00F5B0] bg-[#002619]/80 hover:bg-[#003825] text-xs sm:text-[12.5px] font-bold text-white backdrop-blur-md transition-all shadow-[0_0_15px_rgba(0,245,176,0.15)] hover:shadow-[0_0_22px_rgba(0,245,176,0.35)] group cursor-pointer"
            >
              <span>Explore All Turfs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00F5B0] group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </a>
          </div>

        </div>

        {/* ========================================================
            VENUES GRID: 3 COLUMNS PER ROW (MATCHING REFERENCE)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {venues
            .filter((venue) => {
              if (selectedFilter === 'all') return true;
              if (selectedFilter === 'instant') return venue.instantSlot;
              return venue.sports.some(
                (s) => s.name.toLowerCase() === selectedFilter.toLowerCase()
              );
            })
            .map((venue) => {
            const isActive = activeCardId === venue.id;
            const isFav = favorites[venue.id];

            return (
              <div
                key={venue.id}
                onClick={() => setActiveCardId(venue.id)}
                className={`relative rounded-[26px] overflow-hidden transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                  isActive
                    ? 'border-2 border-[#00F5B0] bg-gradient-to-b from-[#002B1D]/95 via-[#001D14]/98 to-[#00140D]/98 shadow-[0_0_30px_rgba(0,245,176,0.35),inset_0_0_15px_rgba(0,245,176,0.06)]'
                    : 'border border-[#00F5B0]/20 hover:border-[#00F5B0]/45 bg-[#002015]/90 hover:bg-[#002619]/95 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(0,245,176,0.15)]'
                }`}
              >
                {/* ── CARD UPPER HALF: PHOTOREALISTIC STADIUM TURF IMAGE ── */}
                <div className="relative w-full h-[185px] sm:h-[195px] overflow-hidden rounded-t-[24px]">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle top & bottom vignette so pills and text pop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D14]/90 via-transparent to-black/40 pointer-events-none" />

                  {/* Sport Badges (Top Left on Image) */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 z-10">
                    {venue.sports.map((sport, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10.5px] sm:text-[11px] font-semibold text-white/95 shadow-sm"
                      >
                        <span className="text-[11px]">{sport.icon}</span>
                        <span>{sport.name}</span>
                      </span>
                    ))}
                  </div>

                  {/* Favorite Heart Button (Top Right on Image) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(venue.id);
                    }}
                    className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/65 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-black/85 transition-all z-10 cursor-pointer shadow-sm"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'text-red-500 fill-red-500' : 'text-white/85 hover:text-white'
                      }`}
                    />
                  </button>

                  {/* INSTANT SLOT Badge (Bottom Left on Image) */}
                  {venue.instantSlot && (
                    <div className="absolute bottom-3 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#00F5B0]/45 shadow-[0_0_12px_rgba(0,245,176,0.25)]">
                      <Zap className="w-3.5 h-3.5 text-[#00F5B0] fill-[#00F5B0]" />
                      <span className="text-[10px] font-black text-[#00F5B0] tracking-wider uppercase">
                        INSTANT SLOT
                      </span>
                    </div>
                  )}
                </div>

                {/* ── CARD LOWER HALF: DETAILS & PRICING ── */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  
                  {/* Row 1: Title & Yellow Rating Badge */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-[17px] font-bold text-white tracking-tight leading-tight">
                      {venue.name}
                    </h3>
                    
                    {/* Golden Yellow Rating Pill Badge */}
                    <div className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFC400] text-[#00130D] shadow-[0_0_10px_rgba(255,196,0,0.4)]">
                      <Star className="w-3 h-3 text-[#00130D] fill-[#00130D]" />
                      <span className="text-[11px] font-black leading-none">{venue.rating}</span>
                    </div>
                  </div>

                  {/* Row 2: Location with Green Pin */}
                  <div className="flex items-center gap-1.5 mb-3.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00F5B0] flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs text-[#9BB1A6] font-medium truncate">
                      {venue.location}
                    </span>
                  </div>

                  {/* Row 3: Amenities Row */}
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    {venue.amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#002B1D]/80 border border-[#00F5B0]/20 text-[10px] sm:text-[11px] text-[#A5C0B3] font-medium"
                      >
                        {renderAmenityIcon(amenity.type)}
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                    {venue.extraAmenities && (
                      <span className="text-[10.5px] sm:text-[11px] text-[#00F5B0] font-bold ml-0.5">
                        {venue.extraAmenities}
                      </span>
                    )}
                  </div>

                  {/* Row 4: Separator & Price + Book Slot CTA */}
                  <div className="flex items-end justify-between pt-3 border-t border-white/10">
                    <div>
                      <span className="text-[9px] sm:text-[9.5px] uppercase tracking-wider text-[#7E988D] font-bold block mb-0.5">
                        STARTING FROM
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl sm:text-[23px] font-black text-[#FFC400] leading-none">
                          ₹{venue.price}
                        </span>
                        <span className="text-[11px] text-[#9BB1A6] font-normal">
                          / hour
                        </span>
                      </div>
                    </div>

                    {/* Book Slot CTA Button */}
                    <button className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#C8FF00] hover:bg-[#D6FF33] text-[#00130D] text-xs font-black transition-all shadow-[0_0_15px_rgba(200,255,0,0.35)] hover:shadow-[0_0_22px_rgba(200,255,0,0.55)] hover:scale-105 group/btn cursor-pointer">
                      <span>Book Slot</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[3] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
