import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Badge } from "react-native-paper";
import { useRouter } from "expo-router";
import { useCart } from "@/src/context/CartContext";

const FloatingCartIcon: React.FC = () => {
  const router = useRouter();
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <TouchableOpacity
      onPress={() => router.push("/tabs/product/cart")}
      style={styles.toggleButton}
      accessibilityLabel="Shopping Cart"
      accessibilityHint="Shopping Cart"
      accessibilityRole="button"
    >
      <MaterialCommunityIcons name="cart" size={30} style={styles.themeIcon} />
      <Badge style={styles.badge}>{totalItems}</Badge>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 30,
    padding: 15,
    elevation: 10,
    backgroundColor: "#fff",
  },
  themeIcon: {
    color: "#000",
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default FloatingCartIcon;
