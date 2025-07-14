import { useEffect, useState, useRef } from "react";
import {
  fetchWeddingCards,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/api/productApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Trash, Pencil, Plus, X } from "lucide-react";

interface Product {
  _id?: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  features: string[];
  category: string;
  rating?: number;
  reviews?: number;
  description?: string;
  inStock?: boolean;
  fastDelivery?: boolean;
  customizable?: boolean;
}

const initialFormState: Product = {
  name: "",
  price: 0,
  originalPrice: 0,
  images: [],
  features: [],
  category: "",
  description: "",
  inStock: true,
  fastDelivery: false,
  customizable: true,
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>(initialFormState);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageError, setImageError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadProducts = async () => {
    try {
      const data = await fetchWeddingCards();
      setProducts(data);
    } catch (error) {
      console.error("Failed to load products:", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSave = async () => {
    try {
      if (editingId) {
        await updateProduct(editingId, form);
      } else {
        await createProduct(form);
      }
      setDialogOpen(false);
      resetForm();
      loadProducts();
      alert(editingId ? "Product updated successfully!" : "Product added successfully!");
    } catch (error) {
      console.error("Failed to save product:", error);
      alert("Failed to save product. Please try again.");
    }
  };

  const handleEdit = (product: Product) => {
    setForm({
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice || 0,
      images: product.images || [],
      features: product.features || [],
      category: product.category,
      description: product.description || "",
      inStock: product.inStock ?? true,
      fastDelivery: product.fastDelivery ?? false,
      customizable: product.customizable ?? true,
    });
    setEditingId(product._id || null);
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        loadProducts();
        alert("Product deleted successfully!");
      } catch (error) {
        console.error("Failed to delete product:", error);
        alert("Failed to delete product. Please try again.");
      }
    }
  };

  const resetForm = () => {
    setForm(initialFormState);
    setEditingId(null);
    setImageError("");
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Fixed: Reset form when opening dialog for new product
  const handleAddProduct = () => {
    resetForm();
    setDialogOpen(true);
  };

  const handleMultipleImageUpload = async (files: FileList) => {
    setUploading(true);
    setImageError("");

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("images", file); // Must match multer's `images` key
    });

    try {
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`Upload failed: ${res.status}`);

      const data = await res.json();

      setForm((prev) => ({
        ...prev,
        images: [...(prev.images || []), ...(data.imageUrls || [])],
      }));
    } catch (err) {
      console.error("Image upload failed", err);
      setImageError("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };


  const removeImage = (indexToRemove: number) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error("Image failed to load:", e.currentTarget.src);
    e.currentTarget.src = "/placeholder.jpg";
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage Wedding Cards</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddProduct}>
              <Plus className="mr-2" /> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Product" : "Add New Product"}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                placeholder="Title"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Price"
                value={form.price || ""}
                onChange={(e) => setForm({ ...form, price: +e.target.value || 0 })}
              />
              <Input
                type="number"
                placeholder="Original Price"
                value={form.originalPrice || ""}
                onChange={(e) => setForm({ ...form, originalPrice: +e.target.value || 0 })}
              />
              <Input
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
              <Input
                placeholder="Comma-separated Features"
                value={form.features.join(", ")}
                onChange={(e) =>
                  setForm({ ...form, features: e.target.value.split(", ").filter(f => f.trim()) })
                }
              />
              <Input
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />

              {/* Checkboxes */}
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.inStock}
                    onChange={(e) => setForm({ ...form, inStock: e.target.checked })}
                  />
                  In Stock
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.fastDelivery}
                    onChange={(e) => setForm({ ...form, fastDelivery: e.target.checked })}
                  />
                  Fast Delivery
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.customizable}
                    onChange={(e) => setForm({ ...form, customizable: e.target.checked })}
                  />
                  Customizable
                </label>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Upload Images</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      handleMultipleImageUpload(files);
                    }
                  }}
                  className="w-full"
                />
                {imageError && (
                  <p className="text-red-500 text-sm mt-1">{imageError}</p>
                )}
              </div>

              {/* Image Previews */}
              {form.images?.length > 0 && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Image Previews</label>
                  <div className="grid grid-cols-2 gap-2">
                    {form.images.map((imageUrl, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={imageUrl}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded border"
                          onError={handleImageError}
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave} disabled={uploading || !form.name.trim()}>
                {uploading ? "Uploading..." : editingId ? "Update" : "Create"}
              </Button>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((card) => (
          <Card key={card._id} className="p-4 border">
            <div className="relative">
              <img
                src={card.images?.[0] || "/placeholder.jpg"}
                alt={card.name}
                onError={handleImageError}
                className="w-full h-40 object-cover rounded mb-2"
              />
              {!card.inStock && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                  Out of Stock
                </div>
              )}
            </div>
            <h3 className="text-lg font-semibold">{card.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-lg font-bold">₹{card.price}</p>
              {card.originalPrice && card.originalPrice > card.price && (
                <p className="text-sm text-muted-foreground line-through">
                  ₹{card.originalPrice}
                </p>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{card.category}</p>
            <div className="flex gap-2 mt-2">
              <Button size="sm" variant="outline" onClick={() => handleEdit(card)}>
                <Pencil className="w-4 h-4 mr-1" /> Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(card._id!)}
              >
                <Trash className="w-4 h-4 mr-1" /> Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No products found. Add your first product!</p>
        </div>
      )}
    </div>
  );
}