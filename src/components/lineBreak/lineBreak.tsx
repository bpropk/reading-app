import { colors } from "@src/common/theme";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface LineBreakProps {
  customStyle?: StyleProp<ViewStyle>;
}

const LineBreak: React.FC<LineBreakProps> = ({ customStyle }) => {
  return <View style={[styles.lineBreak, customStyle]} />;
};

const styles = StyleSheet.create({
  lineBreak: {
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default LineBreak;
