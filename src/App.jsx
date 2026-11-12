import React from 'react';
import TurfBookHero from './components/TurfBookHero';
import ExploreBySport from './components/ExploreBySport';
import FeaturedVenues from './components/FeaturedVenues';

export default function App() {
  return (
    <div className="min-h-screen bg-[#00130D]">
      <TurfBookHero />
      <ExploreBySport />
      <FeaturedVenues />
    </div>
  );
}
