import { Metadata } from "next";
import { CTA } from "@/components/sections/cta";
import { ProjectCategories } from "./project-categories";

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

export default function ProjectsPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ProjectCategories />
        </div>
      </section>

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
