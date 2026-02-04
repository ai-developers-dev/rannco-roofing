"use client";

import {
  ClipboardCheck,
  FileSearch,
  Shield,
  Calendar,
  Wrench,
  Home,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: ClipboardCheck,
    title: "Free Roof Inspection",
    description:
      "Our team will conduct a thorough inspection of your roof to assess its condition and identify any issues.",
  },
  {
    number: 2,
    icon: FileSearch,
    title: "Detailed Assessment",
    description:
      "We provide you with the most professional, comprehensive report outlining our findings and recommendations for your roof.",
  },
  {
    number: 3,
    icon: Shield,
    title: "Insurance Evaluation",
    description:
      "We work with your insurance company to determine coverage for storm damage and assist with the claims process.",
  },
  {
    number: 4,
    icon: Calendar,
    title: "Project Planning",
    description:
      "We work with you to develop a timeline and plan for your roofing project that fits your schedule.",
  },
  {
    number: 5,
    icon: Wrench,
    title: "Expert Installation",
    description:
      "Our skilled team performs the installation or repairs using TAMKO materials and state of the art techniques.",
  },
  {
    number: 6,
    icon: Home,
    title: "Final Inspection",
    description:
      "We conduct a final inspection to ensure everything meets your approval and our high standards of quality.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 text-primary"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
              <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.6" />
              <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.6" />
              <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our simple and efficient process ensures your roofing project is completed with minimal
            disruption to your daily life.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[23px] sm:left-[27px] top-[50px] bottom-[50px] w-0.5 bg-primary/20" />

            {/* Steps */}
            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex items-start gap-4 sm:gap-6">
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 sm:pt-2">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <step.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
