import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Over 70 years of combined roofing experience",
  "30 years of insurance industry knowledge",
  "Locally owned and operated in Southern Illinois",
  "Licensed, bonded, and fully insured",
  "Premium materials from top manufacturers",
  "2-year workmanship warranty on all projects",
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://rannco-roofing.lovable.app/lovable-uploads/85fb737c-cb27-4e6e-b0b9-988898fa7e24.png')`,
                }}
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute bottom-4 right-4 sm:-bottom-4 sm:-right-4 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-xl">
              <div className="text-3xl sm:text-4xl font-bold">70+</div>
              <div className="text-xs sm:text-sm opacity-90">Years Experience</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Southern Illinois&apos; Most Trusted Roofing Company
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              At Rannco Roofing, we&apos;ve built our reputation on quality workmanship,
              honest pricing, and exceptional customer service. With our unique
              combination of roofing expertise and insurance industry knowledge, we
              help homeowners navigate every aspect of their roofing needs.
            </p>
            <p className="text-muted-foreground mb-8">
              As a locally owned and operated business, we understand the unique
              challenges that Southern Illinois weather presents to your roof. Our
              team is committed to providing personalized service and standing
              behind our work.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
