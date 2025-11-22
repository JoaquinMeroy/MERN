import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  createProducts: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill the blanks" }
    }

    const res = await fetch("/api/ProductRouter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    const data = await res.json();

    set((state) => ({ products: [...state.products, data.data] }))

    return { success: true, message: "Product created successfully" }
  },

  fetchProducts: async () => {
    const res = await fetch("/api/ProductRouter");
    const data = await res.json();
    set({ products: data.data });
  }
}));