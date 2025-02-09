// src/utils/api.ts
import axios from 'axios';
import { PaginatedResponse, Product } from '@/types/product';

const API_URL = 'http://localhost:3000/products';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// 🟢 Vérifier la connexion à l'API
export const testApiConnection = async (): Promise<boolean> => {
  try {
    // Effectue une requête simple (GET) vers l'API
    const response = await api.get('/');
    console.log('Réponse de l\'API :', response.data); // Affiche la réponse pour le débogage
    return true; // L'API répond correctement
  } catch (error) {
    if (error instanceof Error) {
      console.error('Impossible de se connecter à l\'API :', error.message);
    } else {
      console.error('Impossible de se connecter à l\'API :', error);
    }
    return false; // L'API ne répond pas
  }
};

// 🔵 Récupérer tous les produits
export const getProducts = async (): Promise<PaginatedResponse<Product>> => {
  const response = await api.get('/');
  return response.data; // La réponse est maintenant typée comme PaginatedResponse<Product>
};

// 🟢 Récupérer un produit par ID
export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get(`/${id}`);
  return response.data;
};

// 🟠 Ajouter un nouveau produit
export const createProduct = async (productData: Omit<Product, '_id'>): Promise<Product> => {
  const response = await api.post('/', productData);
  return response.data;
};

// 🟡 Mettre à jour un produit
export const updateProduct = async (id: string, updateData: Partial<Product>): Promise<Product> => {
  const response = await api.put(`/${id}`, updateData);
  return response.data;
};

// 🔴 Supprimer un produit
export const deleteProduct = async (id: string): Promise<void> => {
  await api.delete(`/${id}`);
};
