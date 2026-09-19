import React from 'react';
import { Gauge, Instagram, Youtube, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenTestDrive: () => void;
  onOpenInfoModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenTestDrive, onOpenInfoModal }) => {
  const currentYear = new Date().getFullYear();

  const handleInfoClick = (title: string, content: string) => {
    onOpenInfoModal(title, content);
  };

  return (
    <footer id="footer-main" className="bg-[#07080a] border-t border-neutral-800 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-700 p-[1px]">
                <div className="w-full h-full bg-[#0d0e12] rounded-[7px] flex items-center justify-center">
                  <Gauge className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-[0.2em] text-white">
                MOTOR<span className="text-gray-400">X</span>
              </span>
            </div>

            <p className="text-neutral-300 font-medium text-base">
              Premium cars. Exceptional journeys.
            </p>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Curating elite automotive engineering for drivers who demand unrivaled performance, design, and integrity.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="MOTORX Instagram"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-500 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="MOTORX YouTube"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-500 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="MOTORX X/Twitter"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-500 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="MOTORX LinkedIn"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-500 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section: Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Company</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleInfoClick('Our Showroom Heritage', 'MOTORX was founded with a singular conviction: vehicle acquisition should be as exhilarating as the drive itself. With state-of-the-art showrooms in Beverly Hills, Zurich, and Tokyo, we provide concierge-grade service for certified luxury and track-bred vehicles.')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Heritage & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleInfoClick('Press & Accolades', 'MOTORX has been recognized by Robb Report, TopGear, and Automotive News as the Leading Luxury Dealership Experience for three consecutive years.')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Press & Media
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Section: Cars & Inventory */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Cars</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateSection('cars')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Available Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('cars')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  High Performance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('cars')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Executive Luxury
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('cars')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hybrid & Electric
                </button>
              </li>
            </ul>
          </div>

          {/* Section: Services & Support */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Services & Support</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenTestDrive()}
                  className="hover:text-white transition-colors cursor-pointer text-left font-semibold text-neutral-300"
                >
                  Book a Test Drive
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleInfoClick('Custom Financing & Leasing', 'Our bespoke financial division works with premier private banks to offer customized lease structuring, balloon refinancing, and competitive APR options customized to your private portfolio.')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Financing & Leasing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleInfoClick('Certified Maintenance Suite', 'Every MOTORX client gains priority access to our master technician service bays, factory OEM diagnostics, covered enclosed transport, and complimentary loaner sports vehicles.')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Master Service Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleInfoClick('Vehicle Trade-In Valuation', 'Receive an authentic real-time equity valuation for your current exotic or luxury vehicle within 2 hours with our certified appraisal team.')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Trade-In Valuation
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Privacy & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {currentYear} MOTORX Automotive Group. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleInfoClick('Privacy Policy', 'At MOTORX, your privacy and discretion are paramount. We never sell or distribute your private client information or vehicle inquiry details to third parties under any circumstances.')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleInfoClick('Terms & Conditions', 'All vehicle sales, test-drive reservations, and lease quotes are subject to certified credit review, valid government identification, and dealer inventory verification.')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => handleInfoClick('Disclaimers', 'Specifications, horsepower, and acceleration ratings reflect manufacturer factory testing and may vary based on fuel grade, tires, and ambient conditions.')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Disclaimers
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
