"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://rannco-roofing.lovable.app/lovable-uploads/5bc1b9e9-8351-4c15-b328-69bd8db6edfc.png"
              alt="Rannco Roofing Logo"
              width={200}
              height={70}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA and Phone */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+16185941178"
              className="flex items-center text-sm font-medium text-foreground hover:text-primary"
            >
              <Phone className="h-4 w-4 mr-2" />
              (618) 594-1178
            </a>
            <a
              href="mailto:chood@rannco.com"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[320px] bg-white p-0">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-border/40">
                  <Image
                    src="https://rannco-roofing.lovable.app/lovable-uploads/5bc1b9e9-8351-4c15-b328-69bd8db6edfc.png"
                    alt="Rannco Roofing Logo"
                    width={140}
                    height={50}
                    className="h-10 w-auto"
                  />
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-6">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/20"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-border/40 bg-muted/30">
                  <a
                    href="tel:+16185941178"
                    className="flex items-center justify-center gap-2 py-3 text-base font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    (618) 594-1178
                  </a>
                  <a
                    href="mailto:chood@rannco.com"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center w-full whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 mt-4"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
