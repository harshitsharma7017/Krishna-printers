import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

interface Props {
  product: Product;
}

const ProductDetailsModal: React.FC<Props> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full mt-2 inline-flex items-center justify-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition">
          View
        </button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-6xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Left side: Gallery + main image */}
          <div className="flex w-full md:w-1/2">
            {/* Thumbnail column */}
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] pr-2">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 object-cover rounded border cursor-pointer transition ${
                    selectedImage === img ? "ring-2 ring-primary" : ""
                  }`}
                />
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 flex justify-center items-center pl-4">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-[400px] object-contain rounded-xl border shadow"
              />
            </div>
          </div>

          {/* Right side: Product Info */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-primary">{product.name}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>

            <div className="text-2xl font-bold text-primary">
              ₹{product.price}
              {product.originalPrice > product.price && (
                <span className="ml-3 text-lg line-through text-gray-400 font-medium">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-medium">Category:</span> {product.category}
              </p>
              {product.color && (
                <p>
                  <span className="font-medium">Color:</span> {product.color}
                </p>
              )}
            </div>

            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsModal;
