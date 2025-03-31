// app/tabs/product/_layout.tsx
import React from "react";
import { Stack } from "expo-router";

export default function ProductLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* "index" is the default screen for the Product tab */}
      <Stack.Screen name="index" options={{ title: "Product" }} />
      {/* "checkout" is a nested route, not shown as a tab */}
      <Stack.Screen name="checkout" options={{ title: "CheckOut" }} />
      <Stack.Screen name="cart" options={{ title: "Cart" }} />
    </Stack>
  );
}
