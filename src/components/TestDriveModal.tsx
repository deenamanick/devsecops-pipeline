import React, { useState, useEffect } from 'react';
import { Car, TestDriveFormData } from '../types';
import { X, CheckCircle, Calendar, Clock, Phone, Mail, User, ShieldCheck, Car as CarIcon, AlertCircle } from 'lucide-react';

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  cars: Car[];
  initialCarId?: string;
}

export const TestDriveModal: React.FC<TestDriveModalProps> = ({
  isOpen,
  onClose,
  cars,
  initialCarId,
}) => {
  const [selectedCarId, setSelectedCarId] = useState<string>(initialCarId || cars[0]?.id || '');
  const [formData, setFormData] = useState<TestDriveFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredCarId: initialCarId || cars[0]?.id || '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    driversLicenseConfirmed: false,
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof TestDriveFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update selected car when modal opens or initialCarId changes
  useEffect(() => {
    if (initialCarId) {
      setSelectedCarId(initialCarId);
      setFormData((prev) => ({ ...prev, preferredCarId: initialCarId }));
    } else if (cars.length > 0 && !selectedCarId) {
      setSelectedCarId(cars[0].id);
      setFormData((prev) => ({ ...prev, preferredCarId: cars[0].id }));
    }
  }, [initialCarId, cars]);

  // Set default min date to tomorrow
  const getTomorrowDateString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  const currentCar = cars.find((c) => c.id === (formData.preferredCarId || selectedCarId)) || cars[0];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof TestDriveFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full legal name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact telephone number is required';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred test-drive date';
    }

    if (!formData.driversLicenseConfirmed) {
      newErrors.driversLicenseConfirmed = 'You must confirm possession of a valid driver\'s license';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate concierge booking API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setBookingRef(`MX-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrors({});
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredCarId: cars[0]?.id || '',
      preferredDate: '',
      preferredTime: '10:00 AM',
      driversLicenseConfirmed: false,
      notes: '',
    });
    onClose();
  };

  return (
    <div
      id="test-drive-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={handleResetAndClose}
    >
      <div
        id="test-drive-modal-container"
        className="relative w-full max-w-2xl bg-[#111218] border border-neutral-700/80 rounded-3xl overflow-hidden shadow-2xl shadow-black my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-test-drive-modal-button"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Close Test Drive Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-400 block mb-1">
                Reservation Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                YOUR TEST DRIVE IS SCHEDULED
              </h2>
              <p className="text-sm text-neutral-300 mt-2 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. A MOTORX VIP Concierge will reach out at <span className="font-semibold text-white">{formData.phone}</span> within 15 minutes to finalize track & route preferences.
              </p>
            </div>

            {/* Booking Details Summary Card */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 text-left max-w-md mx-auto space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="text-xs text-neutral-400">Booking Reference</span>
                <span className="text-sm font-mono font-bold text-neutral-100">{bookingRef}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="text-xs text-neutral-400">Vehicle</span>
                <span className="text-sm font-bold text-white">{currentCar?.brand} {currentCar?.model}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="text-xs text-neutral-400">Appointment Date</span>
                <span className="text-sm font-medium text-neutral-200">{formData.preferredDate} at {formData.preferredTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Location</span>
                <span className="text-sm font-medium text-neutral-200">MOTORX Flagship Dealership</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="done-test-drive-button"
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs uppercase font-bold tracking-[0.2em] text-black bg-gradient-to-r from-neutral-200 to-neutral-400 hover:from-white hover:to-neutral-300 shadow-md cursor-pointer transition-colors"
              >
                Return to Showroom
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div>
            {/* Header */}
            <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-neutral-800 bg-neutral-950/40">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-[11px] uppercase tracking-wider font-semibold mb-2">
                <CarIcon className="w-3.5 h-3.5 text-neutral-400" />
                Private Concierge Booking
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                BOOK A TEST DRIVE
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Experience high-performance precision firsthand with an unaccompanied or expert-guided drive.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              {/* Preferred Car Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                  Select Vehicle
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {cars.map((car) => {
                    const isSelected = (formData.preferredCarId || selectedCarId) === car.id;
                    return (
                      <button
                        type="button"
                        key={car.id}
                        onClick={() => {
                          setSelectedCarId(car.id);
                          setFormData({ ...formData, preferredCarId: car.id });
                        }}
                        className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-neutral-800 border-white text-white shadow-md'
                            : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                        }`}
                      >
                        <img
                          src={car.image}
                          alt={car.model}
                          className="w-12 h-9 object-cover rounded-md shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] uppercase tracking-wider block font-semibold text-neutral-400">
                            {car.brand}
                          </span>
                          <span className="text-xs font-bold truncate block text-white">
                            {car.model}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="input-full-name" className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                    Full Legal Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="input-full-name"
                      type="text"
                      placeholder="e.g. Sterling Archer"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-neutral-900/90 border ${
                        errors.fullName ? 'border-red-500' : 'border-neutral-700'
                      } rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="input-phone-number" className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="input-phone-number"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-neutral-900/90 border ${
                        errors.phone ? 'border-red-500' : 'border-neutral-700'
                      } rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="input-email-address" className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="input-email-address"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-neutral-900/90 border ${
                      errors.email ? 'border-red-500' : 'border-neutral-700'
                    } rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="input-preferred-date" className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="input-preferred-date"
                      type="date"
                      min={getTomorrowDateString()}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full bg-neutral-900/90 border ${
                        errors.preferredDate ? 'border-red-500' : 'border-neutral-700'
                      } rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neutral-400`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="input-preferred-time" className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1.5">
                    Time Slot
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="input-preferred-time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-neutral-900/90 border border-neutral-700 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neutral-400 cursor-pointer"
                    >
                      <option value="09:00 AM">09:00 AM - Morning Track</option>
                      <option value="11:30 AM">11:30 AM - Midday Session</option>
                      <option value="02:00 PM">02:00 PM - Afternoon Highway</option>
                      <option value="04:30 PM">04:30 PM - Golden Hour Route</option>
                      <option value="06:30 PM">06:30 PM - Twilight Test</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Driver's License Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    id="checkbox-drivers-license"
                    type="checkbox"
                    checked={formData.driversLicenseConfirmed}
                    onChange={(e) =>
                      setFormData({ ...formData, driversLicenseConfirmed: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 accent-neutral-200 cursor-pointer"
                  />
                  <span className="text-xs text-neutral-300 group-hover:text-white transition-colors">
                    I confirm that I am at least 21 years of age and hold a currently valid, unexpired driver's license to present upon arrival.
                  </span>
                </label>
                {errors.driversLicenseConfirmed && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.driversLicenseConfirmed}
                  </p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-3 rounded-xl border border-neutral-700 text-xs uppercase font-bold tracking-wider text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  id="submit-test-drive-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-xl text-xs uppercase font-bold tracking-widest text-black bg-gradient-to-r from-neutral-200 to-neutral-400 hover:from-white hover:to-neutral-300 shadow-lg transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Confirming...</span>
                    </>
                  ) : (
                    <span>Confirm Test Drive</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
