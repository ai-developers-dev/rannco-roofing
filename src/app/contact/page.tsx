import { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us | Rannco Roofing",
  description:
    "Get in touch with Rannco Roofing for a free quote on your roofing project. Serving Benton, Marion, Carbondale, and all of Southern Illinois.",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Talk About Your Roof
            </h1>
            <p className="text-lg text-background/80 mb-8">
              Ready to get started? Reach out for a free, no-obligation quote. We&apos;re
              here to answer your questions and help protect your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:chad@ranncoroofing.com"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                <Mail className="h-5 w-5" />
                Email Us
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

      {/* Contact Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:chad@ranncoroofing.com"
                    className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                  >
                    chad@ranncoroofing.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+16182184975"
                    className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                  >
                    (618) 218-4975
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    24/7 Emergency Line Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-foreground">Benton, IL 62812</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Serving all of Southern Illinois
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-foreground">Mon - Fri: 7AM - 6PM</p>
                  <p className="text-foreground">Sat: 8AM - 2PM</p>
                  <p className="text-sm text-primary font-medium mt-1">
                    24/7 Emergency Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area & Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Service Area Header */}
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Service Area
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Proudly Serving Southern Illinois
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Based in Benton, we provide quality roofing services throughout
                Southern Illinois and surrounding communities.
              </p>
            </div>

            {/* Cities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
              {[
                "Benton",
                "Marion",
                "Carbondale",
                "Herrin",
                "Murphysboro",
                "Carterville",
                "West Frankfort",
                "Du Quoin",
                "Johnston City",
                "Harrisburg",
                "Anna",
                "Vienna",
              ].map((city) => (
                <div
                  key={city}
                  className="text-center py-3 px-4 bg-background rounded-lg border border-border/50 text-sm font-medium text-foreground"
                >
                  {city}
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="text-center mb-8">
              <p className="text-foreground font-medium">
                Rannco Roofing
              </p>
              <p className="text-muted-foreground">
                Benton, IL 62812
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100082.04889773044!2d-89.02010069726562!3d37.99730000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887850e1b5a5b86b%3A0x9d8c4b8b8b8b8b8b!2sBenton%2C%20IL%2062812!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rannco Roofing Service Area - Benton, IL"
              />
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Don&apos;t see your city listed? Give us a call - we may still be able to help!
              </p>
              <a
                href="tel:+16182184975"
                className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (618) 218-4975
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
