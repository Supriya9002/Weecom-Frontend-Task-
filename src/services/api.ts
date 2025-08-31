import { Product, ProductsResponse, ProductFormData } from "@/types/product";

const BASE_URL = "https://dummyjson.com";

export const productsApi = {
  getProducts: async (
    limit = 10,
    skip = 0,
    search = "",
    category = "",
    delay = 1000
  ): Promise<ProductsResponse> => {
    let url = `${BASE_URL}/products`;

    if (search) {
      url = `${BASE_URL}/products/search?q=${encodeURIComponent(search)}`;
    } else if (category) {
      url = `${BASE_URL}/products/category/${encodeURIComponent(category)}`;
    }

    const params = new URLSearchParams();
    params.append("limit", limit.toString());
    params.append("skip", skip.toString());
    params.append("delay", delay.toString());

    const separator = url.includes("?") ? "&" : "?";
    const response = await fetch(`${url}${separator}${params}`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  },

  getProduct: async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${id}?delay=500`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return response.json();
  },

  addProduct: async (product: ProductFormData): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/add?delay=1000`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Failed to add product");
    }

    return response.json();
  },

  updateProduct: async (
    id: number,
    product: Partial<ProductFormData>
  ): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${id}?delay=1000`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Failed to update product");
    }

    return response.json();
  },

  deleteProduct: async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${id}?delay=1000`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }

    return response.json();
  },

  getCategories: async (): Promise<string[]> => {
    const response = await fetch(`${BASE_URL}/products/categories?delay=500`);

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    return response.json();
  },
};
