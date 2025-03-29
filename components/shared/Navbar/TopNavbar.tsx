"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const TopNavbar: React.FC = () => {
  return (
    <div className="w-full bg-muted py-2 border-b text-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 text-gray-600 dark:text-gray-300 gap-2 sm:gap-0">
        {/* Address */}
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-primary" />
          <span className="truncate">123 Street, City, Country</span>
        </div>

        {/* Special Offer / Promo Message */}
        <div className="hidden sm:block font-medium text-primary">
          Quality Lighting, Bright Future
        </div>

        {/* Contact Info */}
        <div className="flex  sm:flex-row items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-primary" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-primary" />
            <span>info@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
