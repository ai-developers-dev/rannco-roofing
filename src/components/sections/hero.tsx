"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleCheckBig, ChevronDown, Mail } from "lucide-react";

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://rannco-roofing.lovable.app/lovable-uploads/d37b358b-2271-40c5-a6d1-a3e38fa93e8d.png"
          alt="Professional roofing installation in Southern Illinois"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay - from orange to black */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div
            className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium mb-3 sm:mb-4 animate-fade-in-up"
          >
            Southern Illinois Trusted Roofing Experts
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up animation-delay-200">
            Protecting Your Home With Quality Roofing Solutions
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl animate-fade-in-up animation-delay-400">
            Rannco Roofing combines over 70 years of roofing expertise with 30 years
            in insurance to deliver quality residential roofing services in Benton,
            Marion, Carbondale, and throughout Southern Illinois.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in-up animation-delay-600">
            <a
              href="mailto:chood@rannco.com"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto"
            >
              Get Started
            </a>
            <a
              href="mailto:chood@rannco.com?subject=Roof%20Assessment%20Request"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-transparent border border-white text-white hover:bg-white/10 h-10 px-8 py-2 w-full sm:w-auto"
            >
              Request Assessment
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-white/90 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2">
              <CircleCheckBig className="h-[18px] w-[18px] text-white" />
              <span className="text-sm sm:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className="h-[18px] w-[18px] text-white" />
              <span className="text-sm sm:text-base">Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className="h-[18px] w-[18px] text-white" />
              <span className="text-sm sm:text-base">2-Year Workmanship Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-sm">Scroll down</span>
        <ChevronDown className="h-5 w-5" />
      </button>
    </section>
  );
}
