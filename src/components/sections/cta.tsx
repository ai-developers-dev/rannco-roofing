import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Home?
          </h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a quick repair or a complete roof replacement, our team
            is ready to help. Contact us today for a free estimate and discover
            why homeowners trust Rannco Roofing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:chad@ranncoroofing.com"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
            <a
              href="tel:+16182184975"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-transparent text-white border border-white hover:bg-white hover:text-foreground h-11 px-8"
            >
              <Phone className="h-5 w-5" />
              (618) 218-4975
            </a>
          </div>
          <p className="mt-8 text-background/60 text-sm">
            Free estimates. No obligation. Just honest advice from roofing experts.
          </p>
        </div>
      </div>
    </section>
  );
}
