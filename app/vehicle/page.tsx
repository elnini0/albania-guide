import { NavHeader, Footer } from '../components/common';

export default function Vehicle() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader 
        title="Vehicle Preparation"
        subtitle="Get Your Land Cruiser Ready for Adventure"
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1>Vehicle Preparation Page</h1>
      </div>
      <Footer />
    </div>
  );
} 