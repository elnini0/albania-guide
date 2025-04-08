import React from 'react';
import { NavHeader, Footer } from '../components/common';

export default function Itinerary() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader 
        title="Itinerary Overview"
        subtitle="Day by Day Guide Through Albania and Montenegro"
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1>Itinerary Page</h1>
      </div>
      <Footer />
    </div>
  );
} 