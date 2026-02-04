import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Home,
  Settings,
  AlertTriangle,
  HardHat,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Our Services | Rannco Roofing",
  description:
    "Complete roofing services including repairs, replacements, maintenance, emergency services, and insurance claim support. Serving Southern Illinois.",
};

const services = [
  {
    id: "replacement",
    badge: "Full Replacement",
    title: "Roof Replacement",
    description:
      "Complete roof replacement using high-quality materials with expert installation and clean job site practices.",
    icon: Home,
    features: [
      "Complete tear-off and disposal",
      "Premium shingle options",
      "Underlayment and ventilation",
      "Ice and water shield installation",
      "Manufacturer warranties",
      "Clean job site practices",
    ],
    popular: true,
  },
  {
    id: "repair",
    badge: "Quick Fixes",
    title: "Roof Repairs",
    description:
      "Quick and efficient repairs for damaged or leaking roofs to prevent further damage to your home.",
    icon: Wrench,
    features: [
      "Leak detection and repair",
      "Shingle replacement",
      "Flashing repairs",
      "Gutter repairs",
      "Emergency repairs available",
      "All roof types serviced",
    ],
    popular: false,
  },
  {
    id: "maintenance",
    badge: "Preventive Care",
    title: "Roof Maintenance",
    description:
      "Regular inspection and maintenance to extend the life of your roof and prevent costly repairs.",
    icon: Settings,
    features: [
      "Annual inspections",
      "Gutter cleaning",
      "Minor repairs included",
      "Priority scheduling",
      "Discounted services",
      "Extended warranty options",
    ],
    popular: false,
  },
  {
    id: "emergency",
    badge: "Urgent Support",
    title: "Emergency Services",
    description:
      "24/7 emergency roof repair services for storm damage, leaks, and other urgent roofing issues.",
    icon: AlertTriangle,
    features: [
      "24/7 emergency response",
      "Fast damage assessment",
      "Temporary repairs available",
      "Storm damage experts",
      "Insurance documentation",
      "Quick turnaround",
    ],
    popular: false,
  },
  {
    id: "new-construction",
    badge: "New Build",
    title: "New Construction",
    description:
      "Expert roofing installation for new home construction projects with attention to detail.",
    icon: HardHat,
    features: [
      "Custom design consultation",
      "Material selection guidance",
      "Coordination with builders",
      "Code compliance guaranteed",
      "Multiple style options",
      "Energy-efficient options",
    ],
    popular: false,
  },
  {
    id: "insurance",
    badge: "Water Protection",
    title: "Insurance Claim Support",
    description:
      "Professional gutter installation and expert guidance through the insurance claims process with our 30 years of industry experience.",
    icon: FileCheck,
    features: [
      "Claims process guidance",
      "Documentation assistance",
      "Insurance negotiations",
      "Fair claim settlements",
      "30 years insurance expertise",
      "Stress-free process",
    ],
    popular: false,
  },
];

const materials = [
  {
    name: "Asphalt Shingles",
    description: "Most popular choice for durability and affordability",
    lifespan: "20-30 years",
  },
  {
    name: "Architectural Shingles",
    description: "Premium look with enhanced durability",
    lifespan: "30-50 years",
  },
  {
    name: "Metal Roofing",
    description: "Long-lasting and energy efficient",
    lifespan: "40-70 years",
  },
  {
    name: "Flat Roofing",
    description: "Ideal for certain architectural styles",
    lifespan: "15-25 years",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Roofing Solutions for Every Home
            </h1>
            <p className="text-lg text-background/80 mb-8">
              From complete roof replacements to minor repairs, our expert team provides
              quality workmanship and exceptional service on every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:chad@ranncoroofing.com"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Email for Quote
              </a>
              <a
                href="tel:+16182184975"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-transparent text-white border border-white hover:bg-white hover:text-foreground h-11 px-8"
              >
                <Phone className="h-5 w-5" />
                (618) 218-4975
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="border-border/50 hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-4 text-primary border-primary/30">
                    {service.badge}
                  </Badge>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:chad@ranncoroofing.com"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Quality Materials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Roofing Options
            </h2>
            <p className="text-muted-foreground text-lg">
              We work with premium materials from trusted manufacturers to ensure
              your roof stands the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material) => (
              <Card key={material.name} className="border-border/50 text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{material.name}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">
                    {material.lifespan}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Expected Lifespan
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              We&apos;ve streamlined our process to make your roofing project as
              smooth and stress-free as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description:
                  "We inspect your roof and discuss your needs, providing expert recommendations.",
              },
              {
                step: "2",
                title: "Detailed Quote",
                description:
                  "You receive a comprehensive, written estimate with no hidden fees or surprises.",
              },
              {
                step: "3",
                title: "Quality Installation",
                description:
                  "Our expert crew completes your project efficiently while respecting your property.",
              },
              {
                step: "4",
                title: "Final Walkthrough",
                description:
                  "We review the completed work with you and ensure your complete satisfaction.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Proudly Serving Southern Illinois
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We provide roofing services throughout Southern Illinois, including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Benton",
                "Marion",
                "Carbondale",
                "Herrin",
                "Murphysboro",
                "Carterville",
                "Johnston City",
                "West Frankfort",
                "Du Quoin",
                "Anna",
                "Vienna",
                "Harrisburg",
              ].map((city) => (
                <Badge
                  key={city}
                  className="text-sm py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {city}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              Don&apos;t see your city? Contact us—we may still be able to help!
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
