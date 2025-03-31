import ContactUsForm from "@/src/components/ContactUsForm/ContactusForm";
import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export default function ContactUs() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.description}>
          Is your brand looking to expand its small business service portfolio?
          We’d love to chat. Complete our contact form below and we’ll reach out
          to you.
          {"\n\n"}
          Want to partner with us to bring innovative solutions to the brands
          that support small businesses?
        </Text>
      </View>
      <ContactUsForm />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 24,
    // backgroundColor: "#fff",
    flexGrow: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
});
