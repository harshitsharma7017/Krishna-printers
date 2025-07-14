// src/pages/ProductListPageContent.tsx
import React, { useEffect, useState } from "react";
import { fetchWeddingCards } from "../api/productApi";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye } from "lucide-react";
import ProductDetailsModal from "./ProductDetailsModal";

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  originalPrice: number;
  images: string[];
  color?: string;
}

const ProductListPageContent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchWeddingCards();
      setProducts(data);
      setFilteredProducts(data);
    };
    load();
  }, []);

  useEffect(() => {
    const filtered = products.filter((p) => {
      const matchCategory = selectedCategory ? p.category === selectedCategory : true;
      const matchColor = selectedColor ? p.color === selectedColor : true;
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchCategory && matchColor && matchPrice;
    });
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedColor, priceRange, products]);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const colors = Array.from(new Set(products.map((p) => p.color).filter(Boolean)));

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Filters */}
      <div className="md:w-1/4 w-full bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <div className="mb-4">
          <label className="text-sm font-medium">Category</label>
          <Select onValueChange={setSelectedCategory}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Color</label>
          <Select onValueChange={setSelectedColor}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent>
              {colors.map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
          <Slider
            defaultValue={[0, 100000]}
            value={priceRange}
            min={0}
            max={100000}
            step={100}
            onValueChange={setPriceRange}
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product._id} className="rounded-2xl shadow hover:shadow-md transition">
            <img
              src={product.images?.[0]}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              <div className="text-base font-bold text-primary">
                ₹{product.price}
                <span className="ml-2 line-through text-muted-foreground text-sm">₹{product.originalPrice}</span>
              </div>
              <ProductDetailsModal product={product} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductListPageContent;
