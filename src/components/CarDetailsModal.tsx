import React, { useState } from 'react';
import { Car } from '../types';
import {
  X,
  Zap,
  Gauge,
  Timer,
  CheckCircle2,
  Calendar,
  Fuel,
  Compass,
  ArrowRight,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface CarDetailsModalProps {
  car: Car | null;
  onClose: () => void;
  onBookTestDrive: (carId: string) => void;
}

export const CarDetailsModal: React.FC<CarDetailsModalProps> = ({ car, onClose, onBookTestDrive }) => {
  if (!car) return null;

  const [selectedImage, setSelectedImage] = useState(car.image);

  return (
    <div
      id="car-details-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="car-details-modal-card"
        className="relative w-full max-w-4xl bg-[#111218] border border-neutral-700/80 rounded-3xl overflow-hidden shadow-2xl shadow-black my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-car-details-button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Close Car Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Hero Image Showcase */}
        <div className="relative aspect-[16/9] max-h-96 w-full bg-neutral-950 overflow-hidden">
          <img
            src={selectedImage}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111218] via-transparent to-black/40" />

          {/* Top Tag & Badges */}
          <div className="absolute top-5 left-5 flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/10">
              {car.brand}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900/80 backdrop-blur-md text-neutral-300 border border-neutral-700">
              {car.year} Model
            </span>
          </div>

          {/* Model Name & Price overlay */}
          <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-semibold block">
                {car.badge || 'Executive Edition'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {car.model}
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-medium">
                Official Dealership Price
              </span>
              <span className="text-3xl font-extrabold text-white font-mono">
                ${car.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails (if available) */}
        {car.gallery && car.gallery.length > 1 && (
          <div className="flex items-center gap-3 px-6 pt-4 bg-[#0d0e13] border-b border-neutral-800 overflow-x-auto pb-3">
            {car.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  selectedImage === img
                    ? 'border-white scale-105 shadow-md shadow-white/10'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Main Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Performance Specs Matrix */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 mb-4 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-neutral-300" />
              Engineering & Performance Metrics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl text-center">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">0–100 km/h</span>
                <span className="text-lg font-bold text-white mt-1 block">{car.specs.acceleration}</span>
              </div>
              <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl text-center">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Output</span>
                <span className="text-lg font-bold text-white mt-1 block">{car.specs.power}</span>
              </div>
              <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl text-center">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Top Speed</span>
                <span className="text-lg font-bold text-white mt-1 block">{car.specs.topSpeed}</span>
              </div>
              <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl text-center">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Fuel Type</span>
                <span className="text-lg font-bold text-white mt-1 block">{car.fuelType}</span>
              </div>
              <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl text-center">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Gearbox</span>
                <span className="text-lg font-bold text-white mt-1 block">{car.transmission}</span>
              </div>
              <div className="bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl text-center">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Odometer</span>
                <span className="text-lg font-bold text-white mt-1 block">{car.mileage}</span>
              </div>
            </div>
          </div>

          {/* Engine & Drivetrain Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-5">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                Powertrain Specification
              </span>
              <p className="text-sm text-neutral-200 font-medium">{car.specs.engine}</p>
              <p className="text-xs text-neutral-400 mt-2">Drivetrain: {car.specs.drivetrain}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                Fuel Economy & Range
              </span>
              <p className="text-sm text-neutral-200 font-medium">{car.specs.fuelEconomy}</p>
              <p className="text-xs text-neutral-400 mt-2">Exterior Shade: {car.color}</p>
            </div>
          </div>

          {/* Key Features & Tech Highlights */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-neutral-300" />
              Equipped Options & Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {car.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-neutral-300 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full vehicle history report & MOTORX 24-Month Comprehensive Warranty included</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-3 rounded-xl border border-neutral-700 text-xs uppercase font-bold tracking-wider text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookTestDrive(car.id);
                }}
                className="w-1/2 sm:w-auto px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider text-black bg-gradient-to-r from-neutral-200 to-neutral-400 hover:from-white hover:to-neutral-300 shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Book Test Drive</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
