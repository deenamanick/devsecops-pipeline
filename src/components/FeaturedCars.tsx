import React, { useState } from 'react';
import { Car } from '../types';
import { CarCard } from './CarCard';
import { Sparkles, Car as CarIcon, Flame, ShieldCheck, Leaf, AlertCircle } from 'lucide-react';

interface FeaturedCarsProps {
  cars: Car[];
  onViewDetails: (car: Car) => void;
  onBookTestDrive: (carId: string) => void;
  onResetFilters: () => void;
  isFiltered: boolean;
}

export const FeaturedCars: React.FC<FeaturedCarsProps> = ({
  cars,
  onViewDetails,
  onBookTestDrive,
  onResetFilters,
  isFiltered,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'performance' | 'luxury' | 'hybrid'>('all');

  // Filter further by quick category if user clicks quick category pills
  const displayedCars = cars.filter((car) => {
    if (activeCategory === 'performance') {
      return car.specs.power.includes('500') || car.specs.power.includes('44') || car.specs.acceleration.includes('3.');
    }
    if (activeCategory === 'luxury') {
      return car.brand === 'Mercedes-Benz' || car.brand === 'Range Rover' || car.badge === 'Executive Luxury';
    }
    if (activeCategory === 'hybrid') {
      return car.fuelType === 'Hybrid' || car.fuelType === 'Electric';
    }
    return true;
  });

  return (
    <section id="cars" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs uppercase tracking-[0.2em] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
            Curated Showroom
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            FIND YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">PERFECT DRIVE</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
            Explore our hand-selected fleet of premier automotive engineering, certified and ready for immediate delivery.
          </p>
        </div>

        {/* Category Quick Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-neutral-900/90 p-1.5 rounded-2xl border border-neutral-800">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs uppercase font-semibold tracking-wider transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-neutral-200 text-black shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            All Models ({cars.length})
          </button>
          <button
            onClick={() => setActiveCategory('performance')}
            className={`px-4 py-2 rounded-xl text-xs uppercase font-semibold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'performance'
                ? 'bg-neutral-200 text-black shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            Performance
          </button>
          <button
            onClick={() => setActiveCategory('luxury')}
            className={`px-4 py-2 rounded-xl text-xs uppercase font-semibold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'luxury'
                ? 'bg-neutral-200 text-black shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Luxury
          </button>
          <button
            onClick={() => setActiveCategory('hybrid')}
            className={`px-4 py-2 rounded-xl text-xs uppercase font-semibold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'hybrid'
                ? 'bg-neutral-200 text-black shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Leaf className="w-3.5 h-3.5" />
            Hybrid
          </button>
        </div>
      </div>

      {/* Car Cards Grid */}
      {displayedCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onViewDetails={onViewDetails}
              onBookTestDrive={onBookTestDrive}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 px-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mx-auto mb-4 text-neutral-400">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No Matching Vehicles Found</h3>
          <p className="text-sm text-neutral-400 mb-6">
            We couldn't find any vehicles matching your current filter criteria. Try expanding your search or resetting filters.
          </p>
          <button
            onClick={onResetFilters}
            className="px-6 py-2.5 rounded-xl bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
};
