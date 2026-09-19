import React from 'react';
import { Car } from '../types';
import { Gauge, Fuel, Calendar, ArrowRight, Zap, ShieldAlert } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
  onBookTestDrive: (carId: string) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails, onBookTestDrive }) => {
  return (
    <article
      id={`car-card-${car.id}`}
      className="group relative bg-[#111218] border border-neutral-800/80 hover:border-neutral-500/80 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/80 flex flex-col justify-between"
    >
      {/* Top Image Section with Hover Zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Subtle Dark Gradient Overlay over image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111218] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/10">
            {car.badge || 'Certified'}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-neutral-900/85 text-neutral-300 border border-neutral-700/60 backdrop-blur-md">
            {car.year}
          </span>
        </div>

        {/* Quick Power Indicator */}
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-xs text-neutral-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/5">
          <Zap className="w-3 h-3 text-amber-400" />
          <span className="font-semibold">{car.specs.power}</span>
          <span className="text-neutral-400">•</span>
          <span>{car.specs.acceleration} (0-100)</span>
        </div>
      </div>

      {/* Card Body Information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Model */}
          <div className="mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              {car.brand}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors tracking-tight">
              {car.model}
            </h3>
          </div>

          <p className="text-xs text-neutral-400 line-clamp-1 mb-4">
            {car.tagline}
          </p>

          {/* Specs Mini Matrix */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-neutral-800/80 my-3 text-center">
            {/* Mileage */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Mileage</span>
              <span className="text-xs font-semibold text-neutral-200 mt-0.5">{car.mileage}</span>
            </div>

            {/* Fuel Type */}
            <div className="flex flex-col items-center border-x border-neutral-800/60">
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Fuel</span>
              <span className="text-xs font-semibold text-neutral-200 mt-0.5">{car.fuelType}</span>
            </div>

            {/* Transmission */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Gearbox</span>
              <span className="text-xs font-semibold text-neutral-200 mt-0.5">{car.transmission}</span>
            </div>
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2">
          <div className="flex items-baseline justify-between mb-3.5">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-medium">
                Starting Price
              </span>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                ${car.price.toLocaleString()}
              </span>
            </div>
            <span className="text-[11px] text-neutral-400 font-medium">
              or ${(Math.round(car.price / 60)).toLocaleString()}/mo
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              id={`view-details-${car.id}`}
              onClick={() => onViewDetails(car)}
              className="w-full py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider text-neutral-200 bg-neutral-800/90 hover:bg-neutral-700 hover:text-white border border-neutral-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              id={`card-test-drive-${car.id}`}
              onClick={() => onBookTestDrive(car.id)}
              className="w-full py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider text-black bg-gradient-to-r from-neutral-200 to-neutral-400 hover:from-white hover:to-neutral-300 shadow-sm transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer active:scale-95"
            >
              <span>Test Drive</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
