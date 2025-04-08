import Image from 'next/image';
import Link from 'next/link';
import { NavHeader, Footer, Breadcrumbs } from '../components/common';

export default function Day1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader 
        title="Albania & Montenegro Off-Road Guide" 
        subtitle="6-Day Land Cruiser Expedition Through the Balkans" 
      />

      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900 flex items-center justify-center text-white">
        <div className="absolute inset-0 opacity-60 bg-black">
          <Image 
            src="/images/day1_route_map.png" 
            alt="Day 1 Route Map" 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Day 1: Tivat - Budva - Bar - Ulcinj - Skadar - Tirana</h1>
          <p className="text-lg md:text-xl">
            Begin your adventure along Montenegro's stunning coast before crossing into Albania
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Itinerary', href: '/itinerary' },
              { label: 'Day 1', href: '/day1' }
            ]} 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Must-See Attractions</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Kotor Fortress</h3>
                  <div className="mb-4">
                    <span className="font-semibold">What:</span> Stunning medieval fortress with 1,350 steps (1,200m elevation)
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Why Visit:</span> Offers panoramic views of the Bay of Kotor, one of the most spectacular vistas in the Balkans
                  </div>
                  <div>
                    <span className="font-semibold">Tip:</span> Go early morning to avoid crowds and heat; allow 2-3 hours for the climb and exploration
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Sveti Stefan</h3>
                  <div className="mb-4">
                    <span className="font-semibold">What:</span> Picturesque island resort connected to mainland by a narrow isthmus
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Why Visit:</span> Iconic Montenegro landmark and former playground of celebrities
                  </div>
                  <div>
                    <span className="font-semibold">Tip:</span> Best viewpoint is from the highway above; the actual island is a private resort with limited access
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Budva Old Town</h3>
                  <div className="mb-4">
                    <span className="font-semibold">What:</span> Walled medieval city center with narrow streets and Venetian architecture
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Why Visit:</span> Charming historical center with excellent restaurants and vibrant atmosphere
                  </div>
                  <div>
                    <span className="font-semibold">Tip:</span> Park outside the walls and explore on foot; visit the citadel for great views
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Ulcinj Old Town</h3>
                  <div className="mb-4">
                    <span className="font-semibold">What:</span> Ancient fortress town overlooking the Adriatic
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Why Visit:</span> Less touristy than Budva with authentic local atmosphere
                  </div>
                  <div>
                    <span className="font-semibold">Tip:</span> Visit Hotel Kulla e Balshajve for amazing Italian food with spectacular views (€5 per meal)
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Off-Road Detours</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Lovcen National Park Off-Road Trail (2-3 hours)</h3>
                  <div className="mb-4">
                    <span className="font-semibold">Route:</span> Take the mountain road from Kotor to Lovcen
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Terrain:</span> Steep, winding roads with some unpaved sections
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Highlights:</span> Spectacular views of the Bay of Kotor; visit Njegoš Mausoleum at the summit
                  </div>
                  <div>
                    <span className="font-semibold">Land Cruiser Suitability:</span> <span className="text-green-600 font-medium">Excellent</span> - vehicles will handle the terrain with ease
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Coastal Mountain Viewpoints (1-2 hours)</h3>
                  <div className="mb-4">
                    <span className="font-semibold">Route:</span> Between Budva and Bar, take the old mountain road instead of the coastal highway
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Terrain:</span> Mixed paved/unpaved with some rocky sections
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Highlights:</span> Several unmarked dirt tracks lead to stunning viewpoints overlooking the Adriatic
                  </div>
                  <div>
                    <span className="font-semibold">Land Cruiser Suitability:</span> <span className="text-green-600 font-medium">Good</span> - some tracks require 4x4 but nothing challenging
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Lake Skadar Wildlife Trails (2-3 hours)</h3>
                  <div className="mb-4">
                    <span className="font-semibold">Route:</span> Before crossing into Albania, explore off-road paths around Lake Skadar
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Terrain:</span> Dirt tracks, some muddy sections near the lake
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Highlights:</span> Secluded beaches, bird-watching spots, authentic fishing villages
                  </div>
                  <div>
                    <span className="font-semibold">Land Cruiser Suitability:</span> <span className="text-green-600 font-medium">Good</span> - mostly easy tracks with occasional muddy sections
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Border Crossing Information</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <span className="font-semibold">Montenegro to Albania:</span> Border crossing at Sukobin/Muriqan
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Documents Needed:</span> Vehicle registration, driver's license, insurance green card with Albania coverage
                </div>
                <div>
                  <span className="font-semibold">Tip:</span> Border can be busy in summer; cross early morning if possible
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Day 1 Overview</h3>
              
              <div className="mb-6">
                <div className="relative h-48 mb-4">
                  <Image 
                    src="/images/day1_route_map.png" 
                    alt="Day 1 Route Map" 
                    fill 
                    style={{objectFit: 'cover'}}
                    className="rounded-md"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  Route: Tivat - Budva - Bar - Ulcinj - Skadar - Tirana
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Quick Facts</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-medium">Distance:</span> Approximately 230 km</li>
                  <li><span className="font-medium">Driving Time:</span> 4-5 hours (without detours)</li>
                  <li><span className="font-medium">Border Crossing:</span> Yes (Montenegro to Albania)</li>
                  <li><span className="font-medium">Road Conditions:</span> Mostly paved with off-road options</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Navigation</h4>
                <div className="space-y-2">
                  <Link href="/" className="block text-blue-600 hover:text-blue-800">
                    ← Back to Home
                  </Link>
                  <Link href="/day2" className="block text-blue-600 hover:text-blue-800">
                    Day 2: Tirana - Bulqizi Lake - Peskopi →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 