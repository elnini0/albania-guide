import Link from 'next/link';
import Image from 'next/image';

interface NavHeaderProps {
  title: string;
  subtitle?: string;
}

export function NavHeader({ title, subtitle }: NavHeaderProps) {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold text-gray-800">
              {title}
            </Link>
            {subtitle && (
              <span className="hidden md:block text-gray-600">| {subtitle}</span>
            )}
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/itinerary" className="text-gray-600 hover:text-gray-900">
              Itinerary
            </Link>
            <Link href="/maps" className="text-gray-600 hover:text-gray-900">
              Maps
            </Link>
            <Link href="/safety" className="text-gray-600 hover:text-gray-900">
              Safety
            </Link>
            <Link href="/vehicle" className="text-gray-600 hover:text-gray-900">
              Vehicle
            </Link>
          </nav>
          <button className="md:hidden hamburger-button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-400">
              A comprehensive guide for off-road enthusiasts exploring Albania and Montenegro in Land Cruisers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/itinerary" className="text-gray-400 hover:text-white">
                  Itinerary
                </Link>
              </li>
              <li>
                <Link href="/maps" className="text-gray-400 hover:text-white">
                  Maps
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-400 hover:text-white">
                  Safety
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              For questions or suggestions, please reach out to us at:
              <br />
              <a href="mailto:info@albania-adventure.com" className="text-blue-400 hover:text-blue-300">
                info@albania-adventure.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Albania & Montenegro Off-Road Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Component for the breadcrumb navigation
const Breadcrumbs = ({ items }: { items: {label: string; href?: string}[] }) => (
  <div className="bg-white shadow-md">
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex items-center space-x-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <span className="text-gray-400 mx-2">/</span>}
            {item.href ? (
              <Link href={item.href} className="text-blue-600 hover:text-blue-800">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-600">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Component for attraction cards
export const AttractionCard = ({ 
  title, 
  what, 
  whyVisit, 
  tip 
}: { 
  title: string; 
  what: string; 
  whyVisit: string; 
  tip: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <div className="mb-4">
      <span className="font-semibold">What:</span> {what}
    </div>
    <div className="mb-4">
      <span className="font-semibold">Why Visit:</span> {whyVisit}
    </div>
    <div>
      <span className="font-semibold">Tip:</span> {tip}
    </div>
  </div>
);

// Component for off-road detour cards
export const DetourCard = ({ 
  title, 
  route, 
  terrain, 
  highlights, 
  suitability 
}: { 
  title: string; 
  route: string; 
  terrain: string; 
  highlights: string;
  suitability: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <div className="mb-4">
      <span className="font-semibold">Route:</span> {route}
    </div>
    <div className="mb-4">
      <span className="font-semibold">Terrain:</span> {terrain}
    </div>
    <div className="mb-4">
      <span className="font-semibold">Highlights:</span> {highlights}
    </div>
    <div>
      <span className="font-semibold">Land Cruiser Suitability:</span> <span className={`font-medium ${suitability.toLowerCase().includes('excellent') ? 'text-green-600' : 'text-green-500'}`}>{suitability}</span>
    </div>
  </div>
);

// Component for day overview sidebar
export const DaySidebar = ({ 
  day, 
  route, 
  mapSrc, 
  facts, 
  prevDay, 
  nextDay 
}: { 
  day: string;
  route: string;
  mapSrc: string;
  facts: {label: string; value: string}[];
  prevDay?: {num: string; route: string};
  nextDay?: {num: string; route: string};
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
    <h3 className="text-xl font-bold mb-4 text-gray-800">{day} Overview</h3>
    
    <div className="mb-6">
      <div className="relative h-48 mb-4">
        <Image 
          src={mapSrc} 
          alt={`${day} Route Map`} 
          fill 
          style={{objectFit: 'cover'}}
          className="rounded-md"
        />
      </div>
      <div className="text-sm text-gray-600">
        Route: {route}
      </div>
    </div>
    
    <div className="mb-6">
      <h4 className="font-semibold mb-2">Quick Facts</h4>
      <ul className="space-y-2 text-gray-700">
        {facts.map((fact, index) => (
          <li key={index}><span className="font-medium">{fact.label}:</span> {fact.value}</li>
        ))}
      </ul>
    </div>
    
    <div className="mb-6">
      <h4 className="font-semibold mb-2">Navigation</h4>
      <div className="space-y-2">
        <Link href="/" className="block text-blue-600 hover:text-blue-800">
          ← Back to Home
        </Link>
        {prevDay && (
          <Link href={`/day${prevDay.num}`} className="block text-blue-600 hover:text-blue-800">
            ← Day {prevDay.num}: {prevDay.route}
          </Link>
        )}
        {nextDay && (
          <Link href={`/day${nextDay.num}`} className="block text-blue-600 hover:text-blue-800">
            Day {nextDay.num}: {nextDay.route} →
          </Link>
        )}
      </div>
    </div>
  </div>
);

export { Breadcrumbs };
