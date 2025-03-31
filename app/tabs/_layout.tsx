// app/tabs/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { CartProvider } from "@/src/context/CartContext";

export default function TabsLayout() {
  return (
    <CartProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            paddingBottom: 0,
            height: 50,
          },
        }}
      >
        <Tabs.Screen
          name="home/index"
          options={{
            title: "Solution",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="product"
          options={{
            title: "Product",
            tabBarIcon: ({ color, size }) => (
              <Icon name="book-open-page-variant" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="contact/index"
          options={{
            title: "Contact",
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-box" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </CartProvider>
  );
}
