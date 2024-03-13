import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppNavigator from "@src/navigations";
import { colors } from "@src/common/theme";
import Toast from "react-native-toast-message";

export default function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.root}>
      <AppNavigator isLogin={isLogin} />
      <Toast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
