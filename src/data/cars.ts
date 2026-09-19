import { Car, Testimonial } from '../types';

export const CARS_DATA: Car[] = [
  {
    id: 'bmw-m4',
    brand: 'BMW',
    model: 'M4 Competition Coupe',
    year: 2024,
    fuelType: 'Petrol',
    transmission: 'Dual-Clutch',
    mileage: '4,200 km',
    price: 84900,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Precision engineered track weapon with road refinement',
    badge: 'High Performance',
    color: 'Isle of Man Green Metallic',
    inStock: true,
    specs: {
      acceleration: '3.4s',
      power: '503 HP',
      topSpeed: '290 km/h',
      engine: '3.0L BMW M TwinPower Turbo Inline-6',
      drivetrain: 'M xDrive All-Wheel Drive',
      fuelEconomy: '10.1 L/100 km'
    },
    features: [
      'M Carbon Bucket Seats',
      'Adaptive M Suspension',
      'Harman Kardon Surround Sound',
      'BMW Curved Display with iDrive 8',
      'Carbon Fiber Roof & Aero Package',
      'Head-Up Display with Track Mode'
    ]
  },
  {
    id: 'mercedes-benz-c-class',
    brand: 'Mercedes-Benz',
    model: 'C-Class AMG Line',
    year: 2024,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    mileage: '3,100 km',
    price: 68500,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'The benchmark for contemporary executive luxury',
    badge: 'Executive Luxury',
    color: 'Obsidian Black Metallic',
    inStock: true,
    specs: {
      acceleration: '4.6s',
      power: '402 HP',
      topSpeed: '250 km/h',
      engine: '2.0L Turbocharged Inline-4 with EQ Boost',
      drivetrain: '4MATIC All-Wheel Drive',
      fuelEconomy: '7.8 L/100 km'
    },
    features: [
      'MBUX Augmented Reality Navigation',
      'Burmester 3D Sound System',
      'Digital Light Headlamps with Projection',
      'Panoramic Sliding Sunroof',
      'Active Ambient Lighting (64 Colors)',
      'Distronic Plus Autonomous Driving Suite'
    ]
  },
  {
    id: 'audi-rs5',
    brand: 'Audi',
    model: 'RS5 Sportback',
    year: 2024,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    mileage: '6,800 km',
    price: 79200,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Aggressive styling paired with legendary Quattro traction',
    badge: 'High Performance',
    color: 'Nardo Gray',
    inStock: true,
    specs: {
      acceleration: '3.7s',
      power: '444 HP',
      topSpeed: '280 km/h',
      engine: '2.9L Twin-Turbocharged V6',
      drivetrain: 'Quattro Permanent All-Wheel Drive',
      fuelEconomy: '9.8 L/100 km'
    },
    features: [
      'RS Sport Suspension Plus with DRC',
      'Audi Virtual Cockpit Plus with RS Displays',
      'Matrix LED Headlights with Laser Light',
      'Bang & Olufsen 3D Premium Sound',
      'RS Dynamic Package with Sport Exhaust',
      'Fine Nappa Leather with Honeycomb Stitching'
    ]
  },
  {
    id: 'porsche-911',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2024,
    fuelType: 'Petrol',
    transmission: 'Dual-Clutch',
    mileage: '2,500 km',
    price: 132000,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'The quintessential silhouette of pure automotive perfection',
    badge: 'Featured',
    color: 'GT Silver Metallic',
    inStock: true,
    specs: {
      acceleration: '3.2s',
      power: '443 HP',
      topSpeed: '308 km/h',
      engine: '3.0L Twin-Turbocharged Boxer 6',
      drivetrain: 'Rear-Wheel Drive with PTV Plus',
      fuelEconomy: '10.5 L/100 km'
    },
    features: [
      'Sport Chrono Package with Mode Switch',
      'PASM Sport Suspension (-10 mm)',
      'Sports Exhaust System with Silver Tailpipes',
      'BOSE High-End Surround Sound System',
      '18-Way Adaptive Sports Seats Plus',
      'Porsche Ceramic Composite Brakes (PCCB)'
    ]
  },
  {
    id: 'toyota-camry',
    brand: 'Toyota',
    model: 'Camry XSE Hybrid',
    year: 2024,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    mileage: '1,200 km',
    price: 36800,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590362891988-f77804703088?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Exceptional reliability, electrified efficiency and bold design',
    badge: 'New Arrival',
    color: 'Wind Chill Pearl with Midnight Black Roof',
    inStock: true,
    specs: {
      acceleration: '7.1s',
      power: '225 HP',
      topSpeed: '210 km/h',
      engine: '2.5L 4-Cylinder Dynamic Force Hybrid',
      drivetrain: 'Electronic On-Demand All-Wheel Drive',
      fuelEconomy: '4.7 L/100 km'
    },
    features: [
      'Toyota Safety Sense 3.0 Suite',
      '12.3-inch Multimedia Touchscreen',
      'Sport-Tuned Suspension',
      'Wireless Apple CarPlay & Android Auto',
      'JBL 9-Speaker Premium Audio',
      'Dual-Zone Automatic Climate Control'
    ]
  },
  {
    id: 'range-rover-sport',
    brand: 'Range Rover',
    model: 'Sport Dynamic SE',
    year: 2024,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    mileage: '9,500 km',
    price: 94500,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Peerless all-terrain mastery with bespoke British luxury',
    badge: 'Executive Luxury',
    color: 'Carpathian Grey Metallic',
    inStock: true,
    specs: {
      acceleration: '5.2s',
      power: '395 HP',
      topSpeed: '242 km/h',
      engine: '3.0L Turbocharged I6 MHEV',
      drivetrain: 'Intelligent All-Wheel Drive (iAWD)',
      fuelEconomy: '9.4 L/100 km'
    },
    features: [
      'Dynamic Air Suspension with Configurable Dynamics',
      'Meridian 3D Surround Sound System (800W)',
      '13.1-inch Curved Pivi Pro Floating Screen',
      'Perforated Semi-Aniline Leather Seats',
      'ClearSight Ground View 360° Camera',
      'Terrain Response 2 with Auto Terrain Mode'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Marcus Vance',
    title: 'Managing Partner, Vance & Co.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    review: 'The acquisition process at MOTORX was unmatched. White-glove concierge treatment, total transparency on delivery, and the Porsche 911 Carrera S was prepared to museum-grade perfection.',
    carPurchased: 'Porsche 911 Carrera S',
    date: '2 weeks ago'
  },
  {
    id: 't-2',
    name: 'Elena Rostova',
    title: 'Architectural Director',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    review: 'From scheduling the private track test-drive to finalizing customized lease financing, every interaction resonated with precision and modern elegance. MOTORX sets the industry gold standard.',
    carPurchased: 'BMW M4 Competition',
    date: '1 month ago'
  },
  {
    id: 't-3',
    name: 'Julian Montgomery',
    title: 'Technology Executive',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    review: 'Transparent pricing with zero hidden fees made this the easiest automotive purchase I have ever made. The Range Rover Sport exceeded every expectation on both city streets and Alpine trails.',
    carPurchased: 'Range Rover Sport Dynamic',
    date: '3 weeks ago'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: 'premium-collection',
    title: 'Premium Collection',
    description: 'Carefully selected vehicles from leading automotive brands.',
    highlight: 'Rigorous 180-Point Inspection',
    icon: 'ShieldCheck'
  },
  {
    id: 'transparent-pricing',
    title: 'Transparent Pricing',
    description: 'No hidden costs. Clear and straightforward pricing.',
    highlight: 'Guaranteed Market Integrity',
    icon: 'BadgePercent'
  },
  {
    id: 'easy-financing',
    title: 'Easy Financing',
    description: 'Flexible financing options designed around you.',
    highlight: 'Tailored Bespoke Rates',
    icon: 'CreditCard'
  },
  {
    id: 'trusted-service',
    title: 'Trusted Service',
    description: 'Professional support before and after your purchase.',
    highlight: 'Dedicated Master Technicians',
    icon: 'Wrench'
  }
];
