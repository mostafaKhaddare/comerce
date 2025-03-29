"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 sm:gap-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-8 sm:p-12 flex flex-col justify-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpg"
              alt="Modern lighting showcase"
              fill
              className="object-cover opacity-10"
              priority
            />
          </div>
          <div className="relative z-10 w-full">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
              Exclusive Newsletter
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Transform Your Space with Light
            </h2>
            <p className="text-lg text-white/90 max-w-md leading-relaxed">
              Get expert lighting tips, design inspiration, and exclusive offers
              to create the perfect ambiance in your home.
            </p>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Right Section - Subscription Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 flex flex-col justify-center"
        >
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Join Our Lighting Community
            </h3>
            <p className="text-gray-600 mb-8">
              Subscribe to receive weekly lighting tips, design inspiration, and
              exclusive offers.
            </p>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-base"
              />
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg text-base">
                Subscribe Now
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
