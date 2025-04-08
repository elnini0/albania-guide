import Link from 'next/link';
import Image from 'next/image';

// Component for the navigation header
const NavHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="relative h-[40vh] bg-gray-900 flex items-center justify-center text-white">
    <div className="absolute inset-0 opacity-60 bg-black">
      <Image 
        src="/maps/day3_route_map.png" 
        alt="Albania Montenegro Map" 
        fill 
        style={{objectFit: 'cover'}}
        priority
      />
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg md:text-xl">{subtitle}</p>
    </div>
  </div>
);

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

// Component for the footer
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Albania & Montenegro Off-Road Guide</h2>
        <p className="mb-4">Land Cruiser Expedition Through the Balkans</p>
        <p className="text-gray-400">© 2025 Albania-Montenegro Guide</p>
      </div>
    </div>
  </footer>
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

export { NavHeader, Breadcrumbs, Footer };
