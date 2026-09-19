export type FuelType = 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
export type TransmissionType = 'Automatic' | 'Dual-Clutch' | 'Manual';

export interface CarSpecs {
  acceleration: string; // e.g. "3.8s (0-100 km/h)"
  power: string; // e.g. "503 HP"
  topSpeed: string; // e.g. "290 km/h"
  engine: string; // e.g. "3.0L BMW M TwinPower Turbo Inline 6-Cylinder"
  drivetrain: string; // e.g. "M xDrive All-Wheel Drive"
  fuelEconomy: string; // e.g. "10.2 L/100 km"
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuelType: FuelType;
  transmission: TransmissionType;
  mileage: string;
  price: number;
  image: string;
  gallery?: string[];
  tagline: string;
  badge?: 'Featured' | 'New Arrival' | 'High Performance' | 'Executive Luxury';
  specs: CarSpecs;
  features: string[];
  color: string;
  inStock: boolean;
}

export interface FilterState {
  brand: string;
  model: string;
  priceRange: number; // max price
  fuelType: string;
  transmission: string;
  searchQuery?: string;
}

export interface TestDriveFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredCarId: string;
  preferredDate: string;
  preferredTime: string;
  driversLicenseConfirmed: boolean;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  review: string;
  carPurchased: string;
  date: string;
}

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}
