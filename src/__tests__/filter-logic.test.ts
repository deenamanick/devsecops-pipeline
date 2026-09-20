import { describe, it, expect } from 'vitest';
import { CARS_DATA } from '../data/cars';
import { Car, FilterState } from '../types';

// ──────────────────────────────────────────────────────────
// Filter Logic Tests
// Validates the car filtering business logic (extracted from App.tsx)
// ──────────────────────────────────────────────────────────

/**
 * Applies filters to the car list — same logic as App.tsx useMemo.
 * Extracted here so it can be unit-tested independently.
 */
function filterCars(cars: Car[], filters: FilterState): Car[] {
  return cars.filter((car) => {
    if (filters.brand !== 'All' && car.brand !== filters.brand) return false;
    if (filters.model !== 'All' && car.model !== filters.model) return false;
    if (filters.fuelType !== 'All' && car.fuelType !== filters.fuelType) return false;
    if (filters.transmission !== 'All' && car.transmission !== filters.transmission) return false;
    if (car.price > filters.priceRange) return false;
    return true;
  });
}

const defaultFilters: FilterState = {
  brand: 'All',
  model: 'All',
  priceRange: 150000,
  fuelType: 'All',
  transmission: 'All',
};

describe('filterCars', () => {
  it('should return all cars with default "All" filters', () => {
    const result = filterCars(CARS_DATA, defaultFilters);
    expect(result.length).toBe(CARS_DATA.length);
  });

  it('should filter by brand', () => {
    const result = filterCars(CARS_DATA, { ...defaultFilters, brand: 'BMW' });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((car) => {
      expect(car.brand).toBe('BMW');
    });
  });

  it('should return empty for non-existent brand', () => {
    const result = filterCars(CARS_DATA, { ...defaultFilters, brand: 'NonExistentBrand' });
    expect(result.length).toBe(0);
  });

  it('should filter by fuel type', () => {
    const result = filterCars(CARS_DATA, { ...defaultFilters, fuelType: 'Hybrid' });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((car) => {
      expect(car.fuelType).toBe('Hybrid');
    });
  });

  it('should filter by transmission', () => {
    const result = filterCars(CARS_DATA, { ...defaultFilters, transmission: 'Dual-Clutch' });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((car) => {
      expect(car.transmission).toBe('Dual-Clutch');
    });
  });

  it('should filter by price range', () => {
    const maxPrice = 50000;
    const result = filterCars(CARS_DATA, { ...defaultFilters, priceRange: maxPrice });
    result.forEach((car) => {
      expect(car.price).toBeLessThanOrEqual(maxPrice);
    });
  });

  it('should exclude cars above price range', () => {
    const maxPrice = 50000;
    const result = filterCars(CARS_DATA, { ...defaultFilters, priceRange: maxPrice });
    const expensiveCars = CARS_DATA.filter((car) => car.price > maxPrice);
    expensiveCars.forEach((expensive) => {
      expect(result.find((c) => c.id === expensive.id)).toBeUndefined();
    });
  });

  it('should combine multiple filters (AND logic)', () => {
    const result = filterCars(CARS_DATA, {
      ...defaultFilters,
      fuelType: 'Petrol',
      transmission: 'Dual-Clutch',
    });
    result.forEach((car) => {
      expect(car.fuelType).toBe('Petrol');
      expect(car.transmission).toBe('Dual-Clutch');
    });
  });

  it('should return empty when price range is 0', () => {
    const result = filterCars(CARS_DATA, { ...defaultFilters, priceRange: 0 });
    expect(result.length).toBe(0);
  });

  it('should filter by model', () => {
    const targetCar = CARS_DATA[0];
    const result = filterCars(CARS_DATA, {
      ...defaultFilters,
      brand: targetCar.brand,
      model: targetCar.model,
    });
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(targetCar.id);
  });
});
