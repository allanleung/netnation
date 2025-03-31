import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Appbar } from "react-native-paper";

interface AppBarProps {
  title: string;
}
const AppBar: React.FC<AppBarProps> = ({ title }) => {
  return (
    <Appbar.Header
      style={styles.header}
      statusBarHeight={Platform.OS === "ios" ? 0 : 10}
    >
      {Platform.OS === "android" && <View style={styles.spacer} />}
      <Appbar.Content title={title} titleStyle={styles.title} />
      {Platform.OS === "android" && <View style={styles.spacer} />}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 1, // Android Shadow
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // textAlign: "center",
  },
  spacer: {
    flex: 1,
  },
});

export default AppBar;
