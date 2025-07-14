// src/api/productApi.js
import axios from "axios";
import API_BASE_URL from "../config";

export const fetchWeddingCards = async () => (await axios.get(`${API_BASE_URL}/products`)).data;
export const createProduct = async (productData: any) => (await axios.post(`${API_BASE_URL}/products`, productData)).data;
export const updateProduct = async (id: string, updatedData: any) => (await axios.put(`${API_BASE_URL}/products/${id}`, updatedData)).data;
export const deleteProduct = async (id: string) => (await axios.delete(`${API_BASE_URL}/products/${id}`)).data;