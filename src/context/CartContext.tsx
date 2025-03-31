import React, { createContext, useState, useContext } from "react";
import { Product } from "@/data/ProductAndService";

export interface CartItem {
  product: Product;
  selectedOptions: { [optionId: string]: number };
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      // Replace item if it already exists (using product.id as unique key)
      const index = prev.findIndex((i) => i.product.id === item.product.id);
      if (index !== -1) {
        const updated = [...prev];
        updated[index] = item;
        return updated;
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  };
  // Clear All Button
  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
