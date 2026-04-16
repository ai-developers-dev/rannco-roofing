"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface FeaturedImage {
  id: number;
  path: string;
}

export function ProjectsSlider() {
  const [projects, setProjects] = useState<FeaturedImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    fetch("/api/projects?featured=true")
      .then((r) => r.json())
      .then((data) => setProjects(data.images || []))
      .catch(() => setProjects([]));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (projects.length ? (prev + 1) % projects.length : 0));
  }, [projects.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      projects.length ? (prev - 1 + projects.length) % projects.length : 0
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying || projects.length <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, projects.length]);

  if (projects.length === 0) return null;

  return (
    <section className="py-24 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            See examples of our quality workmanship across Southern Illinois.
            Every project completed with care and attention to detail.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={project.path}
                  alt="Rannco Roofing project"
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}

            {projects.length > 1 && (
              <>
                <button
                  onClick={() => {
                    prevSlide();
                    setIsAutoPlaying(false);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => {
                    nextSlide();
                    setIsAutoPlaying(false);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {projects.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
