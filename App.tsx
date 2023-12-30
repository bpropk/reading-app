import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AppNavigator from "@src/navigations";

export default function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    // <GestureHandlerRootView style={styles.root}>
    // {/* <BottomSheetModalProvider> */}
    // <View style={styles.root}>
    //   <AppNavigator />
    // </View>
    // </BottomSheetModalProvider>
    // </GestureHandlerRootView>

    <View style={styles.root}>
      <AppNavigator isLogin={isLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
