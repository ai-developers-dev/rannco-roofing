import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Our Projects | Rannco Roofing",
  description:
    "View our completed roofing projects across Southern Illinois. Quality craftsmanship in Benton, Marion, Carbondale, and surrounding areas.",
};

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80",
    title: "Complete Roof Replacement",
    description: "Full tear-off and installation of architectural shingles",
    location: "Benton, IL",
    category: "Replacement",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Storm Damage Repair",
    description: "Emergency repairs after severe weather damage",
    location: "Marion, IL",
    category: "Repair",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    title: "New Construction Roofing",
    description: "Premium roofing installation for new home build",
    location: "Carbondale, IL",
    category: "New Construction",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    title: "Metal Roof Installation",
    description: "Modern standing seam metal roofing system",
    location: "Herrin, IL",
    category: "Metal Roofing",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=800&q=80",
    title: "Residential Re-Roof",
    description: "Complete shingle replacement with upgraded ventilation",
    location: "West Frankfort, IL",
    category: "Replacement",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    title: "Insurance Claim Project",
    description: "Full roof replacement with insurance coordination",
    location: "Murphysboro, IL",
    category: "Insurance",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
    title: "Historic Home Restoration",
    description: "Careful restoration maintaining original character",
    location: "Du Quoin, IL",
    category: "Restoration",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    title: "Luxury Home Roofing",
    description: "Premium materials with extended warranty coverage",
    location: "Carterville, IL",
    category: "Replacement",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    title: "Emergency Leak Repair",
    description: "Same-day emergency service preventing water damage",
    location: "Johnston City, IL",
    category: "Emergency",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "Ranch Home Re-Roof",
    description: "Complete tear-off and GAF shingle installation",
    location: "Anna, IL",
    category: "Replacement",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Two-Story Roof Replacement",
    description: "Full replacement with ice and water shield installation",
    location: "Vienna, IL",
    category: "Replacement",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    title: "Hail Damage Restoration",
    description: "Complete restoration following hail storm",
    location: "Harrisburg, IL",
    category: "Insurance",
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
