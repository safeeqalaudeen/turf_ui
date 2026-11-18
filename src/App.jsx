import React from 'react';
import TurfBookHero from './components/TurfBookHero';
import ExploreBySport from './components/ExploreBySport';
import FeaturedVenues from './components/FeaturedVenues';
import WhyBookTurfBook from './components/WhyBookTurfBook';
import PartnerBanner from './components/PartnerBanner';
import TurfBookFooter from './components/TurfBookFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#00130D]">
      <TurfBookHero />
      <ExploreBySport />
      <FeaturedVenues />
      <WhyBookTurfBook />
      <PartnerBanner />
      <TurfBookFooter />
    </div>
  );
}
