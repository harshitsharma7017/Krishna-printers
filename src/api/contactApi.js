// src/api/contactApi.js
import axios from "axios";
import API_BASE_URL from "../config";

export const submitContactForm = async (formData) => {
  const res = await axios.post(`${API_BASE_URL}/contact`, formData);
  return res.data;
};
