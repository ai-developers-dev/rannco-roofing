import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const navigation = {
  services: [
    { name: "Roof Replacement", href: "/services#replacement" },
    { name: "Roof Repairs", href: "/services#repair" },
    { name: "Roof Maintenance", href: "/services#maintenance" },
    { name: "Emergency Services", href: "/services#emergency" },
    { name: "New Construction", href: "/services#new-construction" },
    { name: "Insurance Claims", href: "/services#insurance" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="https://rannco-roofing.lovable.app/lovable-uploads/5bc1b9e9-8351-4c15-b328-69bd8db6edfc.png"
              alt="Rannco Roofing Logo"
              width={160}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-background/80 text-sm">
              Southern Illinois&apos; most trusted residential roofing company. Combining
              70+ years of roofing expertise with 30 years of insurance industry knowledge.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+16182184975"
                  className="text-background/80 hover:text-white transition-colors text-sm"
                >
                  (618) 218-4975
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:chad@ranncoroofing.com"
                  className="text-background/80 hover:text-white transition-colors text-sm"
                >
                  chad@ranncoroofing.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Serving Southern Illinois<br />
                  Benton, Marion, Carbondale & Surrounding Areas
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Mon - Fri: 7:00 AM - 6:00 PM<br />
                  Sat: 8:00 AM - 2:00 PM<br />
                  24/7 Emergency Services
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Rannco Roofing. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-background/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-background/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
