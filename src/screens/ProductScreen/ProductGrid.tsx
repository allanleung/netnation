import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ProductsAndServices } from "@/data/ProductAndService";

const ProductGrid: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = (product: (typeof ProductsAndServices)[number]) => {
    navigation.navigate("ProductDetail", { product });
  };

  const renderItem = ({
    item,
  }: {
    item: (typeof ProductsAndServices)[number];
  }) => (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => handlePress(item)}
    >
      <Card style={styles.card}>
        <Card.Cover
          source={
            typeof item.imageUrl === "string"
              ? { uri: item.imageUrl }
              : item.imageUrl
          }
          style={styles.cardImage}
        />
        <Card.Content style={styles.cardContent}>
          <Text variant="bodyMedium" style={styles.productName}>
            {item.name}
          </Text>
          <Text variant="bodySmall" style={styles.productPrice}>
            {item.price}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={ProductsAndServices}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  touchable: {
    flex: 1,
    margin: 8,
  },
  card: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  cardImage: {
    height: 150,
  },
  cardContent: {
    paddingVertical: 8,
  },
  productName: {
    fontWeight: "600",
  },
  productPrice: {
    color: "#666",
    marginTop: 4,
  },
});

export default ProductGrid;
