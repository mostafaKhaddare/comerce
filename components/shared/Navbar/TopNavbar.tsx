"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Container from "../layout/Container";
import Link from "next/link";
import { useEffect, useState } from "react";
import { lightingFeatures } from "@/constants/features";
import { cn } from "@/lib/utils";

const TopNavbar: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % lightingFeatures.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-muted/80 backdrop-blur-sm py-2 border-b text-sm transition-colors duration-200">
      <Container>
        <div className="flex justify-between items-center px-4 text-gray-600 dark:text-gray-300 gap-2 sm:gap-0">
          {/* Address */}
          <div className="hidden lg:flex items-center gap-2 hover:text-primary transition-colors duration-200">
            <MapPin className="text-primary w-4 h-4 lg:w-5 lg:h-5" />
            <span className="truncate">123 Street, City, Country</span>
          </div>

          {/* Features Message */}
          <div className="items-center max-md:mx-auto font-medium text-primary min-w-[300px] text-center">
            <div className="relative h-[24px] overflow-hidden">
              <div
                className={cn(
                  "absolute w-full transition-all duration-500 ease-out",
                  isAnimating && "opacity-0 -translate-y-2"
                )}
              >
                <div className="h-[24px] flex items-center justify-center whitespace-nowrap">
                  <span className="text-primary font-medium">
                    {lightingFeatures[currentFeature]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex sm:flex-row items-center gap-2 sm:gap-4">
            <Link
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
            >
              <Phone className="text-primary w-4 h-4 lg:w-5 lg:h-5" />
              <span>+123 456 7890</span>
            </Link>
            <Link
              href="mailto:info@example.com"
              className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
            >
              <Mail className="text-primary w-4 h-4 lg:w-5 lg:h-5" />
              <span>info@example.com</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNavbar;
