import Image from 'next/image';
import Link from 'next/link';
import { NavHeader, Footer } from './components/common';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader 
        title="Albania & Montenegro Off-Road Guide" 
        subtitle="6-Day Land Cruiser Expedition Through the Balkans" 
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">6-Day Adventure Itinerary</h2>
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/day1_route_map.png"
                      alt="Day 1 Route"
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href="/day1" className="text-blue-600 hover:text-blue-800">
                        Day 1: Tivat - Budva - Bar - Ulcinj - Skadar - Tirana
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Begin your adventure along Montenegro&apos;s stunning coast before crossing into Albania.</p>
                    <Link href="/day1" className="text-blue-600 hover:text-blue-800">
                      View Details →
                    </Link>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/day2_route_map.png"
                      alt="Day 2 Route"
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href="/day2" className="text-blue-600 hover:text-blue-800">
                        Day 2: Tirana - Bulqizi Lake - Peshkopi
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Explore Albania&apos;s rugged interior and stunning mountain landscapes.</p>
                    <Link href="/day2" className="text-blue-600 hover:text-blue-800">
                      View Details →
                    </Link>
                  </div>
                </div>

                {/* Days 3-6 will be added similarly */}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Guide Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Must-see attractions and hidden gems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Off-road detours for adventure seekers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Interactive maps and GPS coordinates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Vehicle preparation guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Safety information and emergency contacts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Border crossing details and requirements</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/day1" className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Start Planning Your Trip
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
