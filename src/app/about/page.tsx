import { Metadata } from "next";
import { CheckCircle2, Users, Award, Shield, Clock, Target, FileText, Briefcase } from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "About Rannco Roofing | Trusted Roofers in Southern Illinois",
  description:
    "Meet Rannco Roofing - Southern Illinois' most trusted roofing contractor with 70+ years experience & 30 years insurance expertise. Licensed, insured & locally owned. Serving Benton, Marion, Carbondale & surrounding areas.",
  keywords: [
    "about Rannco Roofing",
    "roofing company Benton IL",
    "trusted roofer Southern Illinois",
    "licensed roofing contractor Marion",
    "family owned roofer Carbondale",
    "insurance claim experts IL",
  ],
  openGraph: {
    title: "About Rannco Roofing | 70+ Years Experience",
    description:
      "Southern Illinois' most trusted roofing contractor. 70+ years roofing experience, 30 years insurance knowledge. Licensed, insured & locally owned.",
  },
};

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description:
      "We never cut corners. Every roof we install uses premium materials and follows manufacturer specifications to ensure lasting protection.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "Your satisfaction is our priority. We communicate clearly, respect your property, and stand behind our work with solid warranties.",
  },
  {
    icon: Briefcase,
    title: "Insurance Expertise",
    description:
      "With 30 years of insurance industry experience, we help you navigate claims and ensure you get the coverage you deserve.",
  },
  {
    icon: Target,
    title: "Honest Pricing",
    description:
      "No hidden fees or surprise charges. We provide detailed quotes upfront and stick to them, so you know exactly what to expect.",
  },
];

const expertise = [
  {
    icon: Clock,
    value: "70+",
    label: "Years Roofing Experience",
    description: "Combined expertise across our team",
  },
  {
    icon: FileText,
    value: "30",
    label: "Years Insurance Knowledge",
    description: "Helping with claims and coverage",
  },
  {
    icon: Award,
    value: "500+",
    label: "Projects Completed",
    description: "Satisfied homeowners served",
  },
  {
    icon: Users,
    value: "100%",
    label: "Satisfaction Rate",
    description: "We stand behind our work",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Rannco Roofing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Southern Illinois&apos; Most Trusted Roofing Company
            </h1>
            <p className="text-lg text-background/80">
              Combining 70+ years of roofing expertise with 30 years of insurance
              industry knowledge to deliver exceptional service and results.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertise.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-muted/30 rounded-xl border border-border/50"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Built on Experience, Driven by Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                What makes Rannco Roofing unique is our combination of deep roofing
                expertise and insurance industry knowledge. With over 70 years of
                combined roofing experience and 30 years in insurance, we understand
                both sides of the equation.
              </p>
              <p className="text-muted-foreground mb-6">
                This dual expertise means we can not only install and repair your
                roof to the highest standards, but also help you navigate insurance
                claims, understand your coverage, and ensure you receive fair
                treatment from your insurance company.
              </p>
              <p className="text-muted-foreground">
                As a locally owned business serving Benton, Marion, Carbondale, and
                surrounding communities, we&apos;re invested in our neighbors&apos; homes
                and committed to building lasting relationships based on trust and
                quality work.
              </p>
            </div>
            <div className="relative">
              <div
                className="aspect-square rounded-2xl overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/projects/IMG_6647.PNG')`,
                }}
              />
              <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-xl">
                <div className="text-3xl sm:text-4xl font-bold">30+</div>
                <div className="text-xs sm:text-sm opacity-90">Years Insurance Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg">
              These core values guide everything we do, from the smallest repair to
              the largest replacement project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 p-6 rounded-xl bg-muted/30 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                The Rannco Difference
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                When you choose Rannco Roofing, you&apos;re choosing a partner who
                understands both roofing and insurance - a rare combination that
                benefits you at every step.
              </p>

              <ul className="space-y-4">
                {[
                  "Licensed, bonded, and fully insured",
                  "70+ years combined roofing expertise",
                  "30 years insurance industry knowledge",
                  "Free estimates with no obligation",
                  "2-year workmanship warranty",
                  "Premium materials from trusted manufacturers",
                  "Clean, professional worksite management",
                  "24/7 emergency service availability",
                  "Expert insurance claim assistance",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-foreground text-background p-6 rounded-xl text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">70+</div>
                <div className="text-sm opacity-80">Years Roofing</div>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-xl text-center">
                <FileText className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">30</div>
                <div className="text-sm opacity-90">Years Insurance</div>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-xl text-center">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Projects Done</div>
              </div>
              <div className="bg-foreground text-background p-6 rounded-xl text-center">
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">2yr</div>
                <div className="text-sm opacity-80">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <CTA />
    </main>
  );
}
