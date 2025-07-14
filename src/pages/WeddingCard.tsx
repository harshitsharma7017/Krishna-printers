import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ProductListPageContent from "@/components/ProductListPage";

const WeddingCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ProductListPageContent />
      <Footer />
    </div>
  );
};

export default WeddingCard;
