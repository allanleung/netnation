import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ListRenderItemInfo,
} from "react-native";
import { Text, Button, IconButton } from "react-native-paper";
import { useCart } from "../../context/CartContext";
import { router } from "expo-router";

interface CartItem {
  product: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
    options?: Array<{
      id: string;
      name: string;
      price: string;
    }>;
  };
  selectedOptions: { [optionId: string]: number };
}

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    const productPrice = parseFloat(item.product.price.replace("$", ""));
    const optionsPrice = Object.entries(item.selectedOptions).reduce(
      (sum, [optionId, quantity]) => {
        if (quantity > 0) {
          const option = item.product.options?.find(
            (opt) => opt.id === optionId
          );
          if (option) {
            return sum + parseFloat(option.price.replace("$", ""));
          }
        }
        return sum;
      },
      0
    );
    return acc + productPrice + optionsPrice;
  }, 0);

  const renderCartItem = ({ item }: ListRenderItemInfo<CartItem>) => {
    return (
      <View style={styles.itemRow}>
        {/* Product Image */}
        <Image
          source={{ uri: item.product.imageUrl }}
          style={styles.productImage}
        />

        {/* Middle Section: Product name + selected options */}
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.product.name}</Text>
          {/* Example: List selected options if any */}
          {Object.entries(item.selectedOptions).map(([optionId, quantity]) => {
            if (quantity > 0) {
              const option = item.product.options?.find(
                (o) => o.id === optionId
              );
              return option ? (
                <Text key={option.id} style={styles.optionText}>
                  {option.name}: {option.price}
                </Text>
              ) : null;
            }
            return null;
          })}
        </View>

        {/* Right Section: Price + Remove Icon */}
        <View style={styles.rightSection}>
          <Text style={styles.itemPrice}>{item.product.price}</Text>
          <IconButton
            style={styles.iconStyle}
            icon="delete"
            onPress={() => removeFromCart(item.product.id)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.product.id}
        renderItem={renderCartItem}
        // Footer with Subtotal + Button
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <View style={styles.subtotalRow}>
              <Text style={styles.subtotalLabel}>Subtotal</Text>
              <Text style={styles.subtotalValue}>${subtotal.toFixed(2)}</Text>
            </View>
            <Button
              mode="contained"
              onPress={() => router.push("/tabs/product/checkout")}
              style={styles.checkoutButton}
            >
              Continue to checkout
            </Button>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // White background
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  optionText: {
    fontSize: 14,
    color: "#666",
  },
  rightSection: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 20,
  },
  iconStyle: {
    paddingLeft: 19,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  footerContainer: {
    padding: 16,
  },
  subtotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  subtotalLabel: {
    fontSize: 18,
  },
  subtotalValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  checkoutButton: {
    marginTop: 4,
  },
});
