import React, { ReactNode } from "react";
import { Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface CaptionProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}
const Caption: React.FC<CaptionProps> = ({ children, style }) => {
  return <Text style={[styles.caption, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  caption: {
    fontSize: 14,
    color: "gray",
  },
});

export default Caption;
