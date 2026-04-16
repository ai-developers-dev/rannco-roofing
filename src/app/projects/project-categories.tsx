"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Home,
  Building2,
  Hammer,
  Paintbrush,
  HardHat,
  Warehouse,
  Church,
  Trees,
  Wrench,
  Ruler,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
  X,
  Loader2,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  building: Building2,
  hammer: Hammer,
  paintbrush: Paintbrush,
  hardhat: HardHat,
  warehouse: Warehouse,
  church: Church,
  trees: Trees,
  wrench: Wrench,
  ruler: Ruler,
  folder: FolderOpen,
};

interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
  images: { id: number; path: string }[];
}

export function ProjectCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [openCategory, setOpenCategory] = useState<Category | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const openGallery = (cat: Category) => {
    if (cat.images.length === 0) return;
    setCurrentIndex(0);
    setOpenCategory(cat);
  };

  const goNext = () => {
    if (!openCategory) return;
    setCurrentIndex((prev) =>
      prev === openCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  const goPrev = () => {
    if (!openCategory) return;
    setCurrentIndex((prev) =>
      prev === 0 ? openCategory.images.length - 1 : prev - 1
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">Projects coming soon.</p>
      </div>
    );
  }

  return (
    <>
      <div className={`grid grid-cols-1 ${categories.length === 1 ? "max-w-lg mx-auto" : "md:grid-cols-2"} gap-8`}>
        {categories.map((category) => {
          const Icon = ICON_MAP[category.icon] || FolderOpen;
          const hasImages = category.images.length > 0;
          return (
            <button
              key={category.id}
              onClick={() => openGallery(category)}
              disabled={!hasImages}
              className={`group text-left bg-background border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 ${
                hasImages
                  ? "hover:shadow-xl hover:border-primary/30 cursor-pointer"
                  : "opacity-70 cursor-default"
              }`}
            >
              {/* Preview image grid */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {hasImages ? (
                  <div className={`grid h-full ${
                    category.images.length === 1
                      ? "grid-cols-1"
                      : category.images.length === 2
                        ? "grid-cols-2"
                        : category.images.length === 3
                          ? "grid-cols-2 grid-rows-2"
                          : "grid-cols-2 grid-rows-2"
                  }`}>
                    {category.images.slice(0, 4).map((img, i) => (
                      <div
                        key={img.id}
                        className={`relative overflow-hidden ${
                          category.images.length === 3 && i === 0 ? "row-span-2" : ""
                        }`}
                      >
                        <Image
                          src={img.path}
                          alt={`${category.title} project ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <FolderOpen className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                )}
                {hasImages && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <span className="text-white/80 text-sm font-medium">
                        {category.images.length} {category.images.length === 1 ? "photo" : "photos"}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        View Gallery
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </div>
                {category.description && (
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Gallery Dialog */}
      <Dialog open={!!openCategory} onOpenChange={(open) => !open && setOpenCategory(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 gap-0 bg-black border-none overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>
              {openCategory?.title} Projects Gallery
            </DialogTitle>
          </VisuallyHidden>

          {openCategory && openCategory.images.length > 0 && (
            <>
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/80">
                <div className="text-white">
                  <span className="font-semibold">{openCategory.title}</span>
                  <span className="text-white/60 ml-2 text-sm">
                    {currentIndex + 1} / {openCategory.images.length}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => setOpenCategory(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] bg-black">
                <Image
                  src={openCategory.images[currentIndex].path}
                  alt={`${openCategory.title} project ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                  sizes="95vw"
                />

                {openCategory.images.length > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail strip */}
              {openCategory.images.length > 1 && (
                <div className="flex gap-1 p-2 bg-black overflow-x-auto">
                  {openCategory.images.map((img, i) => (
                    <button
                      key={img.id}
                      onClick={() => setCurrentIndex(i)}
                      className={`relative shrink-0 w-16 h-16 rounded overflow-hidden transition-all ${
                        i === currentIndex
                          ? "ring-2 ring-primary opacity-100"
                          : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={img.path}
                        alt={`Thumbnail ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
