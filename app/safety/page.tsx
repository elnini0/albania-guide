import { NavHeader, Footer } from '../components/common';

export default function Safety() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader 
        title="Safety Information"
        subtitle="Essential Safety Tips and Guidelines"
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Emergency Preparedness</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Essential Equipment</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Comprehensive first aid kit with knowledge to use it</li>
                    <li>• Satellite communicator or CB radio for remote areas</li>
                    <li>• Emergency shelter (blankets/tent) if stranded</li>
                    <li>• Extra food and water supplies for unexpected delays</li>
                    <li>• Basic toolkit for field repairs</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Communication & Navigation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Save local emergency numbers</li>
                    <li>• GPS with offline maps</li>
                    <li>• Physical maps as backup</li>
                    <li>• Basic Albanian/Montenegrin phrases for emergencies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Vehicle Safety</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Recovery Equipment</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Tow straps and shackles</li>
                    <li>• Recovery boards</li>
                    <li>• Basic spare parts (filters, belts)</li>
                    <li>• Extra fuel for remote sections</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Terrain Considerations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Mountain roads are often narrow with steep drops</li>
                    <li>• Surface quality varies from paved to rocky paths</li>
                    <li>• Rain significantly increases difficulty of off-road sections</li>
                    <li>• Some sections require low-range 4x4 capability</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Local Regulations & Cultural Awareness</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Documentation & Permits</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Valid vehicle registration and driver's license</li>
                    <li>• Insurance green card with Albania coverage</li>
                    <li>• Border crossing documentation</li>
                    <li>• National park permits where required</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Cultural Considerations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Respect local communities and private property</li>
                    <li>• Conservative dress when visiting religious sites</li>
                    <li>• Ask permission before photographing people</li>
                    <li>• Limited English in remote areas - learn basic phrases</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Safety Tips</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-gray-800">Before Your Trip</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Check weather forecasts</li>
                  <li>• Verify vehicle condition</li>
                  <li>• Pack emergency supplies</li>
                  <li>• Download offline maps</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-gray-800">During Your Journey</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Never drive below half tank in remote areas</li>
                  <li>• Inform others of your route</li>
                  <li>• Stay on marked trails</li>
                  <li>• Drive according to conditions</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-gray-800">Emergency Contacts</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Albania Emergency: 112</li>
                  <li>• Montenegro Emergency: 112</li>
                  <li>• Police: 192</li>
                  <li>• Ambulance: 194</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 