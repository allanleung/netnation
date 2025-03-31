import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Card, Text, Button, IconButton } from "react-native-paper";
import { Product } from "@/data/ProductAndService";
import { useCart } from "@/src/context/CartContext";

type ProductDetailProps = {
  route: {
    params: {
      product: Product;
    };
  };
};

export default function ProductDetail({ route }: ProductDetailProps) {
  const { product } = route.params;
  const { addToCart } = useCart();

  // Initialize option quantities (0 or 1 max).
  const [selectedOptions, setSelectedOptions] = useState<{
    [optionId: string]: number;
  }>(() => {
    const initial: { [key: string]: number } = {};
    product.options?.forEach((opt) => {
      initial[opt.id] = 0;
    });
    return initial;
  });

  const handleOptionChange = (optionId: string, newValue: number) => {
    setSelectedOptions((prev) => ({ ...prev, [optionId]: newValue }));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Product Card */}
      <Card style={styles.card} elevation={0}>
        <Card.Cover
          source={
            typeof product.imageUrl === "string"
              ? { uri: product.imageUrl }
              : product.imageUrl
          }
          resizeMode="contain"
          // resizeMode="center"
        />

        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            {product.name}
          </Text>
          <Text variant="bodyMedium" style={styles.price}>
            {product.price}
          </Text>
        </Card.Content>
      </Card>

      {/* Additional Options */}
      {product.options && product.options.length > 0 && (
        <View style={styles.optionsSection}>
          <Text variant="titleMedium" style={styles.optionsTitle}>
            Additional Options
          </Text>
          {product.options.map((option) => (
            <View key={option.id} style={styles.optionRow}>
              <View style={styles.optionInfo}>
                <Text style={styles.optionName}>{option.name}</Text>
                <Text
                  style={styles.optionPrice}
                >{`Price: ${option.price}`}</Text>
              </View>
              <View style={styles.quantityControls}>
                <IconButton
                  icon="minus"
                  size={20}
                  disabled={selectedOptions[option.id] === 0}
                  onPress={() => handleOptionChange(option.id, 0)}
                />
                <Text style={styles.quantityText}>
                  {selectedOptions[option.id]}
                </Text>
                <IconButton
                  icon="plus"
                  size={20}
                  disabled={selectedOptions[option.id] === 1}
                  onPress={() => handleOptionChange(option.id, 1)}
                />
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Action Buttons & Description */}
      <View style={styles.actionSection}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => addToCart({ product, selectedOptions })}
        >
          Add to Cart
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => console.log("Buy Now")}
        >
          Buy Now
        </Button>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    // Remove drop shadow on iOS as well as Android
    shadowColor: "transparent",
  },
  title: {
    marginTop: 16,
  },
  price: {
    marginTop: 8,
  },
  optionsSection: {
    marginBottom: 16,
  },
  optionsTitle: {
    marginBottom: 8,
    fontWeight: "bold",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionInfo: {
    flex: 1,
  },
  optionName: {
    fontSize: 16,
    fontWeight: "500",
  },
  optionPrice: {
    fontSize: 14,
    color: "#666",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
    minWidth: 20,
    textAlign: "center",
  },
  actionSection: {
    marginBottom: 16,
  },
  button: {
    marginVertical: 4,
  },
  description: {
    marginTop: 16,
    fontSize: 14,
    color: "#666",
  },
});
