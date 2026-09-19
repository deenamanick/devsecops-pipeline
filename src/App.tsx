import React, { useState, useMemo } from 'react';
import { CARS_DATA } from './data/cars';
import { Car, FilterState } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CarSearch } from './components/CarSearch';
import { FeaturedCars } from './components/FeaturedCars';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PerformanceSection } from './components/PerformanceSection';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { CarDetailsModal } from './components/CarDetailsModal';
import { TestDriveModal } from './components/TestDriveModal';
import { InfoModal } from './components/InfoModal';

export default function App() {
  // Filter state
  const initialFilters: FilterState = {
    brand: 'All',
    model: 'All',
    priceRange: 150000,
    fuelType: 'All',
    transmission: 'All',
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);

  // Modals state
  const [selectedCarDetails, setSelectedCarDetails] = useState<Car | null>(null);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState<boolean>(false);
  const [testDriveCarId, setTestDriveCarId] = useState<string | undefined>(undefined);
  const [infoModal, setInfoModal] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: '',
  });

  // Extract distinct brands & models
  const availableBrands = useMemo(() => {
    const brands = Array.from(new Set(CARS_DATA.map((car) => car.brand)));
    return brands.sort();
  }, []);

  const allModelsByBrand = useMemo(() => {
    const map: Record<string, string[]> = {};
    CARS_DATA.forEach((car) => {
      if (!map[car.brand]) {
        map[car.brand] = [];
      }
      if (!map[car.brand].includes(car.model)) {
        map[car.brand].push(car.model);
      }
    });
    return map;
  }, []);

  // Filter cars based on filter inputs
  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      // Brand filter
      if (filters.brand !== 'All' && car.brand !== filters.brand) {
        return false;
      }
      // Model filter
      if (filters.model !== 'All' && car.model !== filters.model) {
        return false;
      }
      // Fuel type filter
      if (filters.fuelType !== 'All' && car.fuelType !== filters.fuelType) {
        return false;
      }
      // Transmission filter
      if (filters.transmission !== 'All' && car.transmission !== filters.transmission) {
        return false;
      }
      // Price range
      if (car.price > filters.priceRange) {
        return false;
      }
      return true;
    });
  }, [filters]);

  // Smooth scroll handler
  const handleNavigateSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTestDrive = (carId?: string) => {
    setTestDriveCarId(carId || CARS_DATA[0].id);
    setIsTestDriveOpen(true);
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  const handleSearchSubmit = () => {
    const carsSection = document.getElementById('cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverPerformance = () => {
    // Open Porsche 911 or RS5 details
    const performanceCar = CARS_DATA.find((c) => c.id === 'porsche-911') || CARS_DATA[0];
    setSelectedCarDetails(performanceCar);
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-gray-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenTestDrive={handleOpenTestDrive}
        onNavigateSection={handleNavigateSection}
      />

      {/* 2. Full-Screen Hero Section */}
      <Hero
        onExploreCars={() => handleNavigateSection('car-search-section')}
        onBookTestDrive={() => handleOpenTestDrive()}
      />

      {/* 4. Car Search & Filter Section */}
      <CarSearch
        filters={filters}
        onFilterChange={setFilters}
        onResetFilters={handleResetFilters}
        onSearchSubmit={handleSearchSubmit}
        totalResultsCount={filteredCars.length}
        availableBrands={availableBrands}
        allModelsByBrand={allModelsByBrand}
      />

      {/* 3. Featured Cars Section */}
      <FeaturedCars
        cars={filteredCars}
        onViewDetails={(car) => setSelectedCarDetails(car)}
        onBookTestDrive={(carId) => handleOpenTestDrive(carId)}
        onResetFilters={handleResetFilters}
        isFiltered={
          filters.brand !== 'All' ||
          filters.model !== 'All' ||
          filters.fuelType !== 'All' ||
          filters.transmission !== 'All' ||
          filters.priceRange < 150000
        }
      />

      {/* 5. Why Choose MOTORX Section */}
      <WhyChooseUs />

      {/* 6. Performance Showcase Section */}
      <PerformanceSection onDiscoverPerformance={handleDiscoverPerformance} />

      {/* 7. Customer Reviews Testimonials Section */}
      <Testimonials />

      {/* 8. Call To Action Section */}
      <CallToAction
        onBookTestDrive={() => handleOpenTestDrive()}
        onExploreCars={() => handleNavigateSection('cars')}
      />

      {/* 9. Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenTestDrive={() => handleOpenTestDrive()}
        onOpenInfoModal={(title, content) => setInfoModal({ isOpen: true, title, content })}
      />

      {/* Interactive Modals */}
      {/* A. Detailed Car Specifications Modal */}
      <CarDetailsModal
        car={selectedCarDetails}
        onClose={() => setSelectedCarDetails(null)}
        onBookTestDrive={(carId) => handleOpenTestDrive(carId)}
      />

      {/* B. Test Drive Booking Modal */}
      <TestDriveModal
        isOpen={isTestDriveOpen}
        onClose={() => setIsTestDriveOpen(false)}
        cars={CARS_DATA}
        initialCarId={testDriveCarId}
      />

      {/* C. General Information & Policy Modal */}
      <InfoModal
        isOpen={infoModal.isOpen}
        onClose={() => setInfoModal({ isOpen: false, title: '', content: '' })}
        title={infoModal.title}
        content={infoModal.content}
      />
    </div>
  );
}
