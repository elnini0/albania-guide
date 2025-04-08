import Image from 'next/image';
import Link from 'next/link';
import { Footer, AttractionCard, DetourCard, DaySidebar } from '../components/common';

export default function Day1() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
            Begin your adventure along Montenegro&apos;s stunning coast before crossing into Albania
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/itinerary" className="text-blue-600 hover:text-blue-800">
              Itinerary
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Day 1</span>
          </div>
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
                <AttractionCard
                  title="Kotor Fortress"
                  what="Stunning medieval fortress with 1,350 steps (1,200m elevation)"
                  whyVisit="Offers panoramic views of the Bay of Kotor, one of the most spectacular vistas in the Balkans"
                  tip="Go early morning to avoid crowds and heat; allow 2-3 hours for the climb and exploration"
                />

                <AttractionCard
                  title="Sveti Stefan"
                  what="Picturesque island resort connected to mainland by a narrow isthmus"
                  whyVisit="Iconic Montenegro landmark and former playground of celebrities"
                  tip="Best viewpoint is from the highway above; the actual island is a private resort with limited access"
                />

                <AttractionCard
                  title="Budva Old Town"
                  what="Walled medieval city center with narrow streets and Venetian architecture"
                  whyVisit="Charming historical center with excellent restaurants and vibrant atmosphere"
                  tip="Park outside the walls and explore on foot; visit the citadel for great views"
                />

                <AttractionCard
                  title="Ulcinj Old Town"
                  what="Ancient fortress town overlooking the Adriatic"
                  whyVisit="Less touristy than Budva with authentic local atmosphere"
                  tip="Visit Hotel Kulla e Balshajve for amazing Italian food with spectacular views (&euro;5 per meal)"
                />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Off-Road Detours</h2>
              
              <div className="space-y-8">
                <DetourCard
                  title="Lovcen National Park Off-Road Trail (2-3 hours)"
                  route="Take the mountain road from Kotor to Lovcen"
                  terrain="Steep, winding roads with some unpaved sections"
                  highlights="Spectacular views of the Bay of Kotor; visit Njegoš Mausoleum at the summit"
                  suitability="Excellent"
                />

                <DetourCard
                  title="Coastal Mountain Viewpoints (1-2 hours)"
                  route="Between Budva and Bar, take the old mountain road instead of the coastal highway"
                  terrain="Mixed paved/unpaved with some rocky sections"
                  highlights="Several unmarked dirt tracks lead to stunning viewpoints overlooking the Adriatic"
                  suitability="Good"
                />

                <DetourCard
                  title="Lake Skadar Wildlife Trails (2-3 hours)"
                  route="Before crossing into Albania, explore off-road paths around Lake Skadar"
                  terrain="Dirt tracks, some muddy sections near the lake"
                  highlights="Secluded beaches, bird-watching spots, authentic fishing villages"
                  suitability="Good"
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Border Crossing Information</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <span className="font-semibold">Montenegro to Albania:</span> Border crossing at Sukobin/Muriqan
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Documents Needed:</span> Vehicle registration, driver&apos;s license, insurance green card with Albania coverage
                </div>
                <div>
                  <span className="font-semibold">Tip:</span> Border can be busy in summer; cross early morning if possible
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <DaySidebar
              day="Day 1"
              route="Tivat - Budva - Bar - Ulcinj - Skadar - Tirana"
              mapSrc="/images/day1_route_map.png"
              facts={[
                { label: "Distance", value: "Approximately 230 km" },
                { label: "Driving Time", value: "4-5 hours (without detours)" },
                { label: "Border Crossing", value: "Yes (Montenegro to Albania)" },
                { label: "Road Conditions", value: "Mostly paved with off-road options" }
              ]}
              nextDay={{ num: "2", route: "Tirana - Bulqizi Lake - Peskopi" }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 