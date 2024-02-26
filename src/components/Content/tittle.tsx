import React, { ReactNode } from "react";
import { Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface TittleProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}
const Tittle: React.FC<TittleProps> = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
});

export default Tittle;
