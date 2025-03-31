import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FloatingCartIcon from "@/src/components/FloatingCartIcon/FloatingCartIcon";
import CheckOut from "./Cart";
import ProductGrid from "./ProductGrid";
import ProductDetail from "../ProductScreen/ProductDetail";
import Cart from "./Cart";

const ProductStack = createNativeStackNavigator();

export default function ProductStackScreen() {
  return (
    <View style={styles.container}>
      <ProductStack.Navigator
        initialRouteName="ProductGrid"
        screenOptions={{
          headerShown: true,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
        }}
      >
        <ProductStack.Screen
          name="ProductGrid"
          component={ProductGrid}
          options={{ title: "Products and Services" }}
        />
        <ProductStack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: "Product Details" }}
        />
        <ProductStack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{ title: "Check Out" }}
        />
        <ProductStack.Screen
          name="Cart"
          component={Cart}
          options={{ title: "Cart" }}
        />
      </ProductStack.Navigator>
      <FloatingCartIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
