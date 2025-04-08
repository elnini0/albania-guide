"use client";

import '@/app/responsive.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Mobile navigation component
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="hamburger-button text-white"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''} p-6`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Albania & Montenegro Guide</h2>
          <button 
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav>
          <ul className="space-y-4">
            <li>
              <Link 
                href="/" 
                className="block py-2 text-lg hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/itinerary" 
                className="block py-2 text-lg hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Itinerary
              </Link>
            </li>
            <li>
              <Link 
                href="/maps" 
                className="block py-2 text-lg hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Maps & Galleries
              </Link>
            </li>
            <li>
              <Link 
                href="/vehicle-preparation" 
                className="block py-2 text-lg hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Vehicle Preparation
              </Link>
            </li>
            <li>
              <Link 
                href="/safety" 
                className="block py-2 text-lg hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Safety
              </Link>
            </li>
            <li>
              <Link 
                href="/essential-info" 
                className="block py-2 text-lg hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Essential Info
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Desktop navigation component
const DesktopNav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/itinerary" className="text-white hover:text-gray-300">
            Itinerary
          </Link>
        </li>
        <li>
          <Link href="/maps" className="text-white hover:text-gray-300">
            Maps & Galleries
          </Link>
        </li>
        <li>
          <Link href="/vehicle-preparation" className="text-white hover:text-gray-300">
            Vehicle Preparation
          </Link>
        </li>
        <li>
          <Link href="/safety" className="text-white hover:text-gray-300">
            Safety
          </Link>
        </li>
        <li>
          <Link href="/essential-info" className="text-white hover:text-gray-300">
            Essential Info
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Responsive header with navigation
export const ResponsiveHeader = ({ 
  title, 
  subtitle,
  backgroundImage = "/maps/day3_route_map.png"
}: { 
  title: string; 
  subtitle: string;
  backgroundImage?: string;
}) => {
  return (
    <header>
      {/* Navigation bar */}
      <div className="bg-blue-600 text-white">
        <div className="container-fluid py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Albania Guide
          </Link>
          
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
      
      {/* Hero section */}
      <div className="relative hero-section flex items-center justify-center text-white">
        <div className="absolute inset-0 opacity-60 bg-black">
          <Image 
            src={backgroundImage} 
            alt="Albania Montenegro Map" 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="responsive-heading font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

// Responsive footer
export const ResponsiveFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-fluid">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Albania & Montenegro Off-Road Guide</h2>
          <p className="mb-4">Land Cruiser Expedition Through the Balkans</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-6">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/itinerary" className="text-gray-300 hover:text-white">
              Itinerary
            </Link>
            <Link href="/maps" className="text-gray-300 hover:text-white">
              Maps & Galleries
            </Link>
            <Link href="/vehicle-preparation" className="text-gray-300 hover:text-white">
              Vehicle Preparation
            </Link>
          </div>
          
          <p className="text-gray-400 mt-8">© 2025 Albania-Montenegro Guide</p>
        </div>
      </div>
    </footer>
  );
};

// Responsive card grid
export const ResponsiveCardGrid = ({ 
  children,
  columns = { default: 1, sm: 2, lg: 3 }
}: { 
  children: React.ReactNode;
  columns?: { default: number; sm?: number; lg?: number; }
}) => {
  const getGridClass = () => {
    let baseClass = "grid gap-6 ";
    
    // Default column setting
    baseClass += `grid-cols-${columns.default} `;
    
    // Small screen setting
    if (columns.sm) {
      baseClass += `sm:grid-cols-${columns.sm} `;
    }
    
    // Large screen setting
    if (columns.lg) {
      baseClass += `lg:grid-cols-${columns.lg}`;
    }
    
    return baseClass;
  };
  
  return (
    <div className={getGridClass()}>
      {children}
    </div>
  );
};

// Responsive container
export const ResponsiveContainer = ({ 
  children,
  className = ""
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`container-fluid ${className}`}>
      {children}
    </div>
  );
};

export { MobileNav, DesktopNav };
