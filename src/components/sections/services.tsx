import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Home, Wrench, Settings, AlertTriangle, HardHat, FileCheck } from "lucide-react";

const services = [
  {
    badge: "Full Replacement",
    title: "Roof Replacement",
    description:
      "Complete roof replacement using high-quality materials with expert installation and clean job site practices.",
    icon: Home,
  },
  {
    badge: "Quick Fixes",
    title: "Roof Repairs",
    description:
      "Quick and efficient repairs for damaged or leaking roofs to prevent further damage to your home.",
    icon: Wrench,
  },
  {
    badge: "Preventive Care",
    title: "Roof Maintenance",
    description:
      "Regular inspection and maintenance to extend the life of your roof and prevent costly repairs.",
    icon: Settings,
  },
  {
    badge: "Urgent Support",
    title: "Emergency Services",
    description:
      "24/7 emergency roof repair services for storm damage, leaks, and other urgent roofing issues.",
    icon: AlertTriangle,
  },
  {
    badge: "New Build",
    title: "New Construction",
    description:
      "Expert roofing installation for new home construction projects with attention to detail.",
    icon: HardHat,
  },
  {
    badge: "Water Protection",
    title: "Insurance Claim Support",
    description:
      "Professional gutter installation and expert guidance through the insurance claims process.",
    icon: FileCheck,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Roofing Solutions for Every Home
          </h2>
          <p className="text-muted-foreground text-lg">
            From complete roof replacements to minor repairs, our expert team provides
            quality workmanship and exceptional service on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader className="pb-4">
                <Badge variant="secondary" className="w-fit mb-4 text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20">
                  {service.badge}
                </Badge>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+16185941178"
                  className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center group/link"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call us
                  <svg
                    className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
