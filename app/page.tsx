import Image from 'next/image';
import Link from 'next/link';
import { NavHeader, Footer } from './components/common';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900 flex items-center justify-center text-white">
        <div className="absolute inset-0 opacity-60 bg-black">
          <Image 
            src="/images/day1_route_map.png" 
            alt="Albania Montenegro Adventure" 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Albania & Montenegro Off-Road Guide</h1>
          <p className="text-lg md:text-xl">
            6-Day Land Cruiser Expedition Through the Balkans
          </p>
        </div>
      </div>

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
                    <p className="text-gray-600 mb-4">Begin your adventure along Montenegro's stunning coast before crossing into Albania.</p>
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
                    <p className="text-gray-600 mb-4">Explore Albania's rugged interior and stunning mountain landscapes.</p>
                    <Link href="/day2" className="text-blue-600 hover:text-blue-800">
                      View Details →
                    </Link>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/day3_route_map.png"
                      alt="Day 3 Route"
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href="/day3" className="text-blue-600 hover:text-blue-800">
                        Day 3: Peshkopi - Korab Mountain - Kukes
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Conquer the highest peak in Albania and explore the rugged north.</p>
                    <Link href="/day3" className="text-blue-600 hover:text-blue-800">
                      View Details →
                    </Link>
                  </div>
                </div>

                {/* Day 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/day4_route_map.png"
                      alt="Day 4 Route"
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href="/day4" className="text-blue-600 hover:text-blue-800">
                        Day 4: Kukes - Valbona Valley - Theth
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Discover the stunning Valbona Valley and the remote village of Theth.</p>
                    <Link href="/day4" className="text-blue-600 hover:text-blue-800">
                      View Details →
                    </Link>
                  </div>
                </div>

                {/* Day 5 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/day5_route_map.png"
                      alt="Day 5 Route"
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href="/day5" className="text-blue-600 hover:text-blue-800">
                        Day 5: Theth - Shkoder - Lake Koman
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">Experience the famous Koman Lake ferry and explore historic Shkoder.</p>
                    <Link href="/day5" className="text-blue-600 hover:text-blue-800">
                      View Details →
                    </Link>
                  </div>
                </div>
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
