"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { upload } from "@vercel/blob/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Plus,
  Trash2,
  Loader2,
  Upload,
  FolderOpen,
  ImageIcon,
  Pencil,
  GripVertical,
  Star,
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
} from "lucide-react";

const ICON_OPTIONS = [
  { value: "home", label: "Home", icon: Home },
  { value: "building", label: "Building", icon: Building2 },
  { value: "hammer", label: "Hammer", icon: Hammer },
  { value: "paintbrush", label: "Paintbrush", icon: Paintbrush },
  { value: "hardhat", label: "Hard Hat", icon: HardHat },
  { value: "warehouse", label: "Warehouse", icon: Warehouse },
  { value: "church", label: "Church", icon: Church },
  { value: "trees", label: "Trees", icon: Trees },
  { value: "wrench", label: "Wrench", icon: Wrench },
  { value: "ruler", label: "Ruler", icon: Ruler },
] as const;

export function getIconComponent(iconName: string) {
  const found = ICON_OPTIONS.find((opt) => opt.value === iconName);
  return found?.icon || FolderOpen;
}

interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
  image_count: number;
}

interface ProjectImage {
  id: number;
  category_id: number;
  image_path: string;
  display_order: number;
  featured: number;
  posted_google: number;
  posted_meta: number;
}

interface PlatformConfig {
  google: boolean;
  meta: boolean;
}

function SortableImage({
  img,
  onDelete,
  onToggleFeatured,
  onPostToSocial,
  platforms,
}: {
  img: ProjectImage;
  onDelete: (id: number) => void;
  onToggleFeatured: (id: number, featured: boolean) => void;
  onPostToSocial: (id: number, platform: "google" | "meta") => void;
  platforms: PlatformConfig;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: img.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group relative aspect-square rounded-lg overflow-hidden border bg-muted ${
        isDragging ? "ring-2 ring-primary shadow-xl" : ""
      }`}
    >
      <Image
        src={img.image_path}
        alt="Project image"
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
      />
      {/* Drag handle */}
      <div
        {...attributes}
        {...listeners}
        className="absolute top-1 left-1 w-7 h-7 rounded bg-black/50 hover:bg-black/70 flex items-center justify-center cursor-grab active:cursor-grabbing text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <GripVertical className="h-4 w-4" />
      </div>
      {/* Featured star + Delete button */}
      <div className="absolute top-1 right-1 flex gap-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFeatured(img.id, !img.featured);
          }}
          className={`w-7 h-7 rounded flex items-center justify-center transition-all ${
            img.featured
              ? "bg-yellow-500 text-white opacity-100"
              : "bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100"
          }`}
          title={img.featured ? "Remove from homepage" : "Show on homepage"}
        >
          <Star className={`h-4 w-4 ${img.featured ? "fill-current" : ""}`} />
        </button>
        <Button
          variant="destructive"
          size="icon-xs"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(img.id);
          }}
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>
      {/* Bottom bar: order number + social icons */}
      <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
          #{img.display_order + 1}
        </div>
        <div className="flex gap-1">
          {platforms.google && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (!img.posted_google) onPostToSocial(img.id, "google");
              }}
              className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold transition-all ${
                img.posted_google
                  ? "bg-blue-500 text-white opacity-100"
                  : "bg-black/50 hover:bg-black/70 text-white"
              }`}
              title={img.posted_google ? "Posted to Google" : "Post to Google Business"}
            >
              G
            </button>
          )}
          {platforms.meta && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (!img.posted_meta) onPostToSocial(img.id, "meta");
              }}
              className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold transition-all ${
                img.posted_meta
                  ? "bg-blue-600 text-white opacity-100"
                  : "bg-black/50 hover:bg-black/70 text-white"
              }`}
              title={img.posted_meta ? "Posted to Meta" : "Post to Facebook"}
            >
              f
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsTab() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [images, setImages] = useState<ProjectImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingImages, setLoadingImages] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [platforms, setPlatforms] = useState<PlatformConfig>({ google: false, meta: false });

  // Add category dialog
  const [addCatOpen, setAddCatOpen] = useState(false);
  const [newCat, setNewCat] = useState({ title: "", description: "", icon: "home" });
  const [addCatError, setAddCatError] = useState("");
  const [addingCat, setAddingCat] = useState(false);

  // Edit category dialog
  const [editCatOpen, setEditCatOpen] = useState(false);
  const [editCat, setEditCat] = useState({ id: 0, title: "", description: "", icon: "home" });
  const [editCatError, setEditCatError] = useState("");
  const [editingCat, setEditingCat] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 5 } })
  );

  const fetchCategories = async () => {
    const res = await fetch("/api/admin/categories");
    if (res.ok) {
      const data = await res.json();
      setCategories(data.categories);
    }
  };

  const fetchImages = async (categoryId: number) => {
    setLoadingImages(true);
    const res = await fetch(`/api/admin/images?category_id=${categoryId}`);
    if (res.ok) {
      const data = await res.json();
      setImages(data.images);
    }
    setLoadingImages(false);
  };

  useEffect(() => {
    fetchCategories().finally(() => setLoading(false));
    fetch("/api/admin/post-image")
      .then((r) => r.json())
      .then((data) => setPlatforms(data))
      .catch(() => {});
  }, []);

  const handleSelectCategory = (cat: Category) => {
    setSelectedCategory(cat);
    fetchImages(cat.id);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = images.findIndex((img) => img.id === active.id);
    const newIndex = images.findIndex((img) => img.id === over.id);

    const reordered = arrayMove(images, oldIndex, newIndex).map((img, i) => ({
      ...img,
      display_order: i,
    }));

    setImages(reordered);

    // Save new order to DB
    setSaving(true);
    await fetch("/api/admin/images", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderedIds: reordered.map((img) => img.id) }),
    });
    setSaving(false);
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddingCat(true);
    setAddCatError("");

    try {
      const res = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCat),
      });

      if (!res.ok) {
        const data = await res.json();
        setAddCatError(data.error || "Failed to add category");
        return;
      }

      setNewCat({ title: "", description: "", icon: "home" });
      setAddCatOpen(false);
      fetchCategories();
    } catch {
      setAddCatError("Something went wrong");
    } finally {
      setAddingCat(false);
    }
  };

  const handleEditCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setEditingCat(true);
    setEditCatError("");

    try {
      const res = await fetch("/api/admin/categories", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editCat),
      });

      if (!res.ok) {
        const data = await res.json();
        setEditCatError(data.error || "Failed to update category");
        return;
      }

      setEditCatOpen(false);
      fetchCategories();
      if (selectedCategory?.id === editCat.id) {
        setSelectedCategory({
          ...selectedCategory,
          title: editCat.title,
          description: editCat.description,
          icon: editCat.icon,
        });
      }
    } catch {
      setEditCatError("Something went wrong");
    } finally {
      setEditingCat(false);
    }
  };

  const handleDeleteCategory = async (id: number) => {
    if (!confirm("Delete this category and all its images?")) return;

    await fetch("/api/admin/categories", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (selectedCategory?.id === id) {
      setSelectedCategory(null);
      setImages([]);
    }
    fetchCategories();
  };

  const handleUploadImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !selectedCategory) return;

    setUploading(true);
    const files = Array.from(e.target.files);

    try {
      for (const rawFile of files) {
        let file: File | Blob = rawFile;
        let ext = rawFile.name.split(".").pop()?.toLowerCase() || "jpg";

        if (ext === "heic" || ext === "heif" || rawFile.type === "image/heic" || rawFile.type === "image/heif") {
          const heic2any = (await import("heic2any")).default;
          const converted = await heic2any({
            blob: rawFile,
            toType: "image/jpeg",
            quality: 0.85,
          });
          file = Array.isArray(converted) ? converted[0] : converted;
          ext = "jpg";
        }

        const baseName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const fileName = `projects/${baseName}.${ext}`;

        // Client-side upload to Vercel Blob (no size limit)
        const blob = await upload(fileName, file, {
          access: "public",
          handleUploadUrl: "/api/admin/upload",
        });

        // Save the blob URL to the database
        await fetch("/api/admin/images", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            category_id: selectedCategory.id,
            image_url: blob.url,
          }),
        });
      }

      fetchImages(selectedCategory.id);
      fetchCategories();
    } catch {
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handlePostToSocial = async (imageId: number, platform: "google" | "meta") => {
    const platformName = platform === "google" ? "Google Business Profile" : "Facebook";
    if (!confirm(`Post this image to ${platformName}?`)) return;

    try {
      const res = await fetch("/api/admin/post-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: imageId, platform }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Failed to post: ${data.error}`);
        return;
      }

      setImages((prev) =>
        prev.map((img) =>
          img.id === imageId
            ? {
                ...img,
                ...(platform === "google" ? { posted_google: 1 } : { posted_meta: 1 }),
              }
            : img
        )
      );
    } catch {
      alert("Failed to post. Please try again.");
    }
  };

  const handleToggleFeatured = async (imageId: number, featured: boolean) => {
    await fetch("/api/admin/images", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: imageId, featured }),
    });

    setImages((prev) =>
      prev.map((img) =>
        img.id === imageId ? { ...img, featured: featured ? 1 : 0 } : img
      )
    );
  };

  const handleDeleteImage = async (imageId: number) => {
    if (!confirm("Delete this image?")) return;

    await fetch("/api/admin/images", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: imageId }),
    });

    setImages((prev) => prev.filter((img) => img.id !== imageId));
    fetchCategories();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Category list + Add button */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Project Categories</h2>
        <Dialog open={addCatOpen} onOpenChange={setAddCatOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="h-4 w-4" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle>Add Category</DialogTitle>
              <DialogDescription>
                Create a new project category for the projects page.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddCategory} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cat-title">Title</Label>
                <Input
                  id="cat-title"
                  value={newCat.title}
                  onChange={(e) => setNewCat({ ...newCat, title: e.target.value })}
                  placeholder="e.g. Residential"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cat-desc">Description</Label>
                <Textarea
                  id="cat-desc"
                  value={newCat.description}
                  onChange={(e) => setNewCat({ ...newCat, description: e.target.value })}
                  placeholder="Brief description of this category..."
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label>Icon</Label>
                <Select value={newCat.icon} onValueChange={(v) => setNewCat({ ...newCat, icon: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ICON_OPTIONS.map((opt) => {
                      const Icon = opt.icon;
                      return (
                        <SelectItem key={opt.value} value={opt.value}>
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4" />
                            {opt.label}
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              {addCatError && <p className="text-destructive text-sm">{addCatError}</p>}
              <Button type="submit" className="w-full" disabled={addingCat}>
                {addingCat ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Category"
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Categories grid */}
      {categories.length === 0 ? (
        <div className="bg-background rounded-xl border p-12 text-center">
          <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">No categories yet</p>
          <p className="text-sm text-muted-foreground">
            Add a category to start uploading project images.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const Icon = getIconComponent(cat.icon);
            const isSelected = selectedCategory?.id === cat.id;
            return (
              <div
                key={cat.id}
                className={`bg-background rounded-xl border p-5 cursor-pointer transition-all hover:shadow-md ${
                  isSelected ? "border-primary ring-1 ring-primary/20" : "border-border"
                }`}
                onClick={() => handleSelectCategory(cat)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? "bg-primary/20" : "bg-primary/10"}`}>
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {cat.image_count} {cat.image_count === 1 ? "image" : "images"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditCat({
                          id: cat.id,
                          title: cat.title,
                          description: cat.description,
                          icon: cat.icon,
                        });
                        setEditCatError("");
                        setEditCatOpen(true);
                      }}
                    >
                      <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCategory(cat.id);
                      }}
                    >
                      <Trash2 className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive" />
                    </Button>
                  </div>
                </div>
                {cat.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">{cat.description}</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Selected category images */}
      {selectedCategory && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">
                {selectedCategory.title} Images
              </h3>
              {images.filter((img) => img.featured).length > 0 && (
                <span className="text-xs font-medium bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  {images.filter((img) => img.featured).length} on homepage
                </span>
              )}
              {saving && (
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Saving order...
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {images.length > 1 && (
                <span className="text-xs text-muted-foreground hidden sm:block">
                  Drag to reorder
                </span>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleUploadImages}
                className="hidden"
              />
              <Button
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
              >
                {uploading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4" />
                    Upload Images
                  </>
                )}
              </Button>
            </div>
          </div>

          {loadingImages ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : images.length === 0 ? (
            <div className="bg-background rounded-xl border border-dashed p-12 text-center">
              <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">No images yet</p>
              <p className="text-sm text-muted-foreground mb-4">
                Upload images to this category to display on the projects page.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-4 w-4" />
                Upload Images
              </Button>
            </div>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={images.map((img) => img.id)}
                strategy={rectSortingStrategy}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {images.map((img) => (
                    <SortableImage
                      key={img.id}
                      img={img}
                      onDelete={handleDeleteImage}
                      onToggleFeatured={handleToggleFeatured}
                      onPostToSocial={handlePostToSocial}
                      platforms={platforms}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          )}
        </div>
      )}

      {/* Edit Category Dialog */}
      <Dialog open={editCatOpen} onOpenChange={setEditCatOpen}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>Update this project category.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEditCategory} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="edit-cat-title">Title</Label>
              <Input
                id="edit-cat-title"
                value={editCat.title}
                onChange={(e) => setEditCat({ ...editCat, title: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-cat-desc">Description</Label>
              <Textarea
                id="edit-cat-desc"
                value={editCat.description}
                onChange={(e) => setEditCat({ ...editCat, description: e.target.value })}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label>Icon</Label>
              <Select value={editCat.icon} onValueChange={(v) => setEditCat({ ...editCat, icon: v })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ICON_OPTIONS.map((opt) => {
                    const IconComp = opt.icon;
                    return (
                      <SelectItem key={opt.value} value={opt.value}>
                        <div className="flex items-center gap-2">
                          <IconComp className="h-4 w-4" />
                          {opt.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            {editCatError && <p className="text-destructive text-sm">{editCatError}</p>}
            <Button type="submit" className="w-full" disabled={editingCat}>
              {editingCat ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
