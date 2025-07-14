import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import AdminProductsPage from "@/components/AdminProductsPage";

const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AdminProductsPage />
      <Footer />
    </div>
  );
};

export default AdminPage;
