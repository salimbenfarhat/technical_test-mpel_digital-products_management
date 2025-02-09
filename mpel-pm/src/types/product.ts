// src/types/product.ts
export interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  image?: string;
}

// Type pour la réponse paginée
export interface PaginatedResponse<T> {
  total: number;
  page: number;
  limit: number;
  data: T[]; // Le tableau de produits est dans la propriété "data"
}
