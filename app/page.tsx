import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Albania & Montenegro Guide
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/itinerary" className="text-gray-600 hover:text-gray-900">Itinerary</Link>
              <Link href="/maps" className="text-gray-600 hover:text-gray-900">Maps & Galleries</Link>
              <Link href="/vehicle" className="text-gray-600 hover:text-gray-900">Vehicle Preparation</Link>
              <Link href="/safety" className="text-gray-600 hover:text-gray-900">Safety</Link>
              <Link href="/info" className="text-gray-600 hover:text-gray-900">Essential Info</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900 flex items-center justify-center text-white">
        <div className="absolute inset-0 opacity-60 bg-black">
          <Image 
            src="/images/albania_montenegro_map.jpg" 
            alt="Albania Montenegro Map" 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Albania and Montenegro Off-Road Adventure</h1>
          <p className="text-xl md:text-2xl">
            Land Cruiser Expedition Through the Balkans
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Your 6-Day Adventure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-bold mb-2">Day 1</h3>
                <p className="text-gray-600 mb-4">Tivat - Budva - Bar - Ulcinj - Skadar - Tirana</p>
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
                <h3 className="text-xl font-bold mb-2">Day 2</h3>
                <p className="text-gray-600 mb-4">Tirana - Bulqizi Lake - Peskopi</p>
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
                <h3 className="text-xl font-bold mb-2">Day 3</h3>
                <p className="text-gray-600 mb-4">Peskopi - Valbona</p>
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
                <h3 className="text-xl font-bold mb-2">Day 4</h3>
                <p className="text-gray-600 mb-4">Valbona - Komani Lake ferry - Teth</p>
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
                <h3 className="text-xl font-bold mb-2">Day 5</h3>
                <p className="text-gray-600 mb-4">Teth - Skadar - Montenegro - Skadar Lake - Virpazar - Rijeka Crnojevica - Cetinje - Njegusi - Budva/Tivat</p>
                <Link href="/day5" className="text-blue-600 hover:text-blue-800">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Day 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Day 6</h3>
                <p className="text-gray-600 mb-4">Hotel to airport</p>
                <Link href="/day6" className="text-blue-600 hover:text-blue-800">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Guide Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Must-See Attractions</h3>
              <p className="text-gray-600">Discover the most beautiful and culturally significant sites along your route.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Off-Road Detours</h3>
              <p className="text-gray-600">Exciting off-road trails specifically selected for Land Cruisers.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Interactive Maps</h3>
              <p className="text-gray-600">Detailed route maps for each day of your journey.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Vehicle Preparation</h3>
              <p className="text-gray-600">Essential equipment and recommended modifications for your Land Cruiser.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Safety Information</h3>
              <p className="text-gray-600">Emergency preparedness and local regulations to ensure a safe journey.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Border Crossing Details</h3>
              <p className="text-gray-600">Important information for crossing between Montenegro and Albania.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Balkan Adventure?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our comprehensive guide to make the most of your Land Cruiser expedition through Albania and Montenegro.
          </p>
          <Link href="/day1" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Planning
          </Link>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Albania & Montenegro Off-Road Guide</h2>
            <p className="mb-4">Land Cruiser Expedition Through the Balkans</p>
            <div className="flex justify-center space-x-6 mt-6">
              <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
              <Link href="/itinerary" className="text-gray-400 hover:text-white">Itinerary</Link>
              <Link href="/maps" className="text-gray-400 hover:text-white">Maps & Galleries</Link>
              <Link href="/vehicle" className="text-gray-400 hover:text-white">Vehicle Preparation</Link>
            </div>
            <p className="mt-8 text-gray-400">© 2025 Albania-Montenegro Guide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
