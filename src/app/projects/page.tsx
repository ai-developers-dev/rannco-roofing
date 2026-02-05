import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Roofing Projects in Harrisburg & Southern Illinois",
  description:
    "View our portfolio of completed roofing projects in Harrisburg, Marion, Carbondale & throughout Southern Illinois. 500+ successful roof replacements & repairs. See our quality craftsmanship!",
  keywords: [
    "roofing projects Harrisburg IL",
    "roof replacement photos Southern Illinois",
    "roofing portfolio Harrisburg",
    "completed roofs Southern Illinois",
    "residential roofing Harrisburg IL",
  ],
  openGraph: {
    title: "Our Roofing Projects | Rannco Roofing",
    description:
      "Browse our portfolio of 500+ completed roofing projects in Harrisburg & Southern Illinois. Quality craftsmanship you can trust.",
  },
};

const projects = [
  {
    id: 1,
    image: "/images/projects/IMG_6650.PNG",
    title: "Luxury Brick Home Roof",
    description: "Complete architectural shingle installation on estate home",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 2,
    image: "/images/projects/IMG_6655.PNG",
    title: "Two-Story Home Re-Roof",
    description: "Full roof replacement with premium shingles",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 3,
    image: "/images/projects/IMG_1540.PNG",
    title: "Country Home Roofing",
    description: "New roof installation on residential property",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 4,
    image: "/images/projects/IMG_6647.PNG",
    title: "Quality Shingle Work",
    description: "Expert craftsmanship on residential roofing project",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 5,
    image: "/images/projects/IMG_6648.PNG",
    title: "Residential Roof Replacement",
    description: "Complete tear-off and new shingle installation",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 6,
    image: "/images/projects/IMG_6649.PNG",
    title: "Home Roof Restoration",
    description: "Full restoration with architectural shingles",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 7,
    image: "/images/projects/IMG_6651.PNG",
    title: "Premium Roof Installation",
    description: "High-quality materials with expert installation",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 8,
    image: "/images/projects/IMG_6652.PNG",
    title: "Complete Re-Roof Project",
    description: "Full roof replacement with warranty coverage",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 9,
    image: "/images/projects/IMG_6653.PNG",
    title: "Residential Roofing",
    description: "Professional installation on family home",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 10,
    image: "/images/projects/IMG_6654.PNG",
    title: "Shingle Replacement",
    description: "Complete shingle replacement project",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 11,
    image: "/images/projects/IMG_6656.PNG",
    title: "Home Roof Upgrade",
    description: "Upgraded roofing system with modern materials",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 12,
    image: "/images/projects/IMG_6657.PNG",
    title: "Full Roof Restoration",
    description: "Complete restoration with premium shingles",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 13,
    image: "/images/projects/IMG_6658.PNG",
    title: "Architectural Shingle Roof",
    description: "Premium architectural shingle installation",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 14,
    image: "/images/projects/IMG_6659.PNG",
    title: "Complete Home Re-Roof",
    description: "Full roof replacement with quality materials",
    location: "Harrisburg, IL",
    category: "Replacement",
  },
  {
    id: 15,
    image: "/images/projects/IMG_1543.PNG",
    title: "Eldorado Redemption Church",
    description: "Commercial church roof replacement project",
    location: "Thompsonville, IL",
    category: "Commercial",
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-lg text-background/80">
              Browse our portfolio of completed roofing projects across Southern Illinois.
              Each project reflects our commitment to quality craftsmanship and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    {project.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">70+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
