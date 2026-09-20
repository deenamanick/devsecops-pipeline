import { describe, it, expect } from 'vitest';
import { CARS_DATA, TESTIMONIALS_DATA, WHY_CHOOSE_ITEMS } from '../data/cars';

// ──────────────────────────────────────────────────────────
// Data Integrity Tests
// Validates that the car catalog data is well-formed
// ──────────────────────────────────────────────────────────

describe('CARS_DATA integrity', () => {
  it('should have at least one car', () => {
    expect(CARS_DATA.length).toBeGreaterThan(0);
  });

  it('every car should have all required fields', () => {
    CARS_DATA.forEach((car) => {
      expect(car.id).toBeTruthy();
      expect(car.brand).toBeTruthy();
      expect(car.model).toBeTruthy();
      expect(car.year).toBeDefined();
      expect(car.price).toBeDefined();
      expect(car.fuelType).toBeTruthy();
      expect(car.transmission).toBeTruthy();
      expect(car.image).toBeTruthy();
      expect(car.tagline).toBeTruthy();
      expect(car.specs).toBeDefined();
      expect(car.features).toBeDefined();
      expect(car.color).toBeTruthy();
      expect(typeof car.inStock).toBe('boolean');
    });
  });

  it('all car IDs should be unique', () => {
    const ids = CARS_DATA.map((car) => car.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('all prices should be positive numbers', () => {
    CARS_DATA.forEach((car) => {
      expect(car.price).toBeGreaterThan(0);
      expect(typeof car.price).toBe('number');
    });
  });

  it('all years should be between 2020 and 2030', () => {
    CARS_DATA.forEach((car) => {
      expect(car.year).toBeGreaterThanOrEqual(2020);
      expect(car.year).toBeLessThanOrEqual(2030);
    });
  });

  it('fuel types should be valid', () => {
    const validFuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
    CARS_DATA.forEach((car) => {
      expect(validFuelTypes).toContain(car.fuelType);
    });
  });

  it('transmission types should be valid', () => {
    const validTransmissions = ['Automatic', 'Dual-Clutch', 'Manual'];
    CARS_DATA.forEach((car) => {
      expect(validTransmissions).toContain(car.transmission);
    });
  });

  it('every car should have at least one feature', () => {
    CARS_DATA.forEach((car) => {
      expect(car.features.length).toBeGreaterThan(0);
    });
  });

  it('every car specs should have all required fields', () => {
    CARS_DATA.forEach((car) => {
      expect(car.specs.acceleration).toBeTruthy();
      expect(car.specs.power).toBeTruthy();
      expect(car.specs.topSpeed).toBeTruthy();
      expect(car.specs.engine).toBeTruthy();
      expect(car.specs.drivetrain).toBeTruthy();
      expect(car.specs.fuelEconomy).toBeTruthy();
    });
  });
});

describe('TESTIMONIALS_DATA integrity', () => {
  it('should have at least one testimonial', () => {
    expect(TESTIMONIALS_DATA.length).toBeGreaterThan(0);
  });

  it('all testimonial IDs should be unique', () => {
    const ids = TESTIMONIALS_DATA.map((t) => t.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('ratings should be between 1 and 5', () => {
    TESTIMONIALS_DATA.forEach((t) => {
      expect(t.rating).toBeGreaterThanOrEqual(1);
      expect(t.rating).toBeLessThanOrEqual(5);
    });
  });
});

describe('WHY_CHOOSE_ITEMS integrity', () => {
  it('should have at least one item', () => {
    expect(WHY_CHOOSE_ITEMS.length).toBeGreaterThan(0);
  });

  it('all items should have required fields', () => {
    WHY_CHOOSE_ITEMS.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.title).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.highlight).toBeTruthy();
      expect(item.icon).toBeTruthy();
    });
  });
});
