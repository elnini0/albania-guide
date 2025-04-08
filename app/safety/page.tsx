import { NavHeader, Footer } from '../components/common';

export default function Safety() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader 
        title="Safety Information"
        subtitle="Essential Safety Tips and Guidelines"
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1>Safety Information Page</h1>
      </div>
      <Footer />
    </div>
  );
} 