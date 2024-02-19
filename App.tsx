import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "@src/navigations";

export default function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <View style={styles.root}>
      <AppNavigator isLogin={isLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
