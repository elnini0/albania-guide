import { NavHeader, Footer } from '../components/common';

export default function Info() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader 
        title="Essential Information"
        subtitle="Everything You Need to Know"
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1>Essential Information Page</h1>
      </div>
      <Footer />
    </div>
  );
} 