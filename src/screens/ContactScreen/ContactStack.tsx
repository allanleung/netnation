import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactUs from "./ContactUs";

const ContactStack = createNativeStackNavigator();

export default function ContactStackScreen() {
  return (
    <View style={styles.container}>
      <ContactStack.Navigator
        initialRouteName="ContactUs"
        screenOptions={{
          headerShown: true,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
        }}
      >
        <ContactStack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ title: "Contact Us" }}
        />
      </ContactStack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
