import React, { useMemo } from 'react';
import { FilterState, FuelType, TransmissionType } from '../types';
import { Search, RotateCcw, SlidersHorizontal, DollarSign } from 'lucide-react';

interface CarSearchProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
  onSearchSubmit: () => void;
  totalResultsCount: number;
  availableBrands: string[];
  allModelsByBrand: Record<string, string[]>;
}

export const CarSearch: React.FC<CarSearchProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  onSearchSubmit,
  totalResultsCount,
  availableBrands,
  allModelsByBrand,
}) => {
  // Available models based on current brand selection
  const selectableModels = useMemo(() => {
    if (!filters.brand || filters.brand === 'All') {
      const all: string[] = [];
      Object.values(allModelsByBrand).forEach((models) => {
        models.forEach((m) => {
          if (!all.includes(m)) all.push(m);
        });
      });
      return all.sort();
    }
    return allModelsByBrand[filters.brand] || [];
  }, [filters.brand, allModelsByBrand]);

  const fuelTypes: (FuelType | 'All')[] = ['All', 'Petrol', 'Hybrid', 'Diesel', 'Electric'];
  const transmissions: (TransmissionType | 'All')[] = ['All', 'Automatic', 'Dual-Clutch', 'Manual'];

  const handleBrandChange = (newBrand: string) => {
    onFilterChange({
      ...filters,
      brand: newBrand,
      model: 'All', // Reset model when brand changes
    });
  };

  const handleModelChange = (newModel: string) => {
    onFilterChange({
      ...filters,
      model: newModel,
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filters,
      priceRange: Number(e.target.value),
    });
  };

  const handleFuelChange = (fuel: string) => {
    onFilterChange({
      ...filters,
      fuelType: fuel,
    });
  };

  const handleTransmissionChange = (transmission: string) => {
    onFilterChange({
      ...filters,
      transmission: transmission,
    });
  };

  const hasActiveFilters =
    filters.brand !== 'All' ||
    filters.model !== 'All' ||
    filters.fuelType !== 'All' ||
    filters.transmission !== 'All' ||
    filters.priceRange < 150000;

  return (
    <section id="car-search-section" className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#121319]/90 backdrop-blur-xl border border-neutral-700/60 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-200">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-wide">Vehicle Search & Filters</h2>
              <p className="text-xs text-neutral-400">Refine your automotive preferences</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-800/90 text-neutral-300 border border-neutral-700">
              {totalResultsCount} {totalResultsCount === 1 ? 'vehicle' : 'vehicles'} available
            </span>
            {hasActiveFilters && (
              <button
                id="reset-filters-button"
                onClick={onResetFilters}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-2.5 rounded hover:bg-neutral-800"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pt-6 items-end">
          {/* Brand Dropdown */}
          <div className="space-y-2">
            <label htmlFor="filter-brand-select" className="block text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Brand
            </label>
            <div className="relative">
              <select
                id="filter-brand-select"
                value={filters.brand}
                onChange={(e) => handleBrandChange(e.target.value)}
                className="w-full bg-neutral-900/90 border border-neutral-700 hover:border-neutral-500 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neutral-400 cursor-pointer appearance-none"
              >
                <option value="All">All Brands</option>
                {availableBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Model Dropdown */}
          <div className="space-y-2">
            <label htmlFor="filter-model-select" className="block text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Model
            </label>
            <div className="relative">
              <select
                id="filter-model-select"
                value={filters.model}
                onChange={(e) => handleModelChange(e.target.value)}
                className="w-full bg-neutral-900/90 border border-neutral-700 hover:border-neutral-500 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neutral-400 cursor-pointer appearance-none"
              >
                <option value="All">All Models</option>
                {selectableModels.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Fuel Type */}
          <div className="space-y-2">
            <label htmlFor="filter-fuel-select" className="block text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Fuel Type
            </label>
            <div className="relative">
              <select
                id="filter-fuel-select"
                value={filters.fuelType}
                onChange={(e) => handleFuelChange(e.target.value)}
                className="w-full bg-neutral-900/90 border border-neutral-700 hover:border-neutral-500 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neutral-400 cursor-pointer appearance-none"
              >
                {fuelTypes.map((fuel) => (
                  <option key={fuel} value={fuel}>
                    {fuel === 'All' ? 'All Fuel Types' : fuel}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Transmission */}
          <div className="space-y-2">
            <label htmlFor="filter-transmission-select" className="block text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Transmission
            </label>
            <div className="relative">
              <select
                id="filter-transmission-select"
                value={filters.transmission}
                onChange={(e) => handleTransmissionChange(e.target.value)}
                className="w-full bg-neutral-900/90 border border-neutral-700 hover:border-neutral-500 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neutral-400 cursor-pointer appearance-none"
              >
                {transmissions.map((t) => (
                  <option key={t} value={t}>
                    {t === 'All' ? 'All Transmissions' : t}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Price Range Slider & Search Action */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-neutral-400">
              <span className="flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-neutral-300" /> Max Price
              </span>
              <span className="text-white font-mono font-bold">${filters.priceRange.toLocaleString()}</span>
            </div>
            <input
              id="filter-price-slider"
              type="range"
              min={30000}
              max={150000}
              step={5000}
              value={filters.priceRange}
              onChange={handlePriceChange}
              className="w-full accent-neutral-200 cursor-pointer h-2 bg-neutral-800 rounded-lg"
            />
            <button
              id="search-cars-submit-button"
              onClick={onSearchSubmit}
              className="w-full mt-2 py-3 px-4 rounded-xl text-xs uppercase font-bold tracking-widest text-black bg-gradient-to-r from-neutral-200 to-neutral-400 hover:from-white hover:to-neutral-300 shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search Cars</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
