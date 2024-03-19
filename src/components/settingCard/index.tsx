import { Icons, colors } from "@src/common/theme";
import Typography from "@src/common/typography";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SettingCardProps {
  onPress?: () => void;
  content?: string;
  icon?: JSX.Element;
}

const SettingCard: React.FC<SettingCardProps> = ({
  onPress,
  content,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {icon}
        <Text style={styles.content}>{content}</Text>
        <View style={{ flex: 1 }} />
        <Icons.ChevronRight fill={colors.black} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  icon: {
    paddingStart: 10,
    height: 20,
    width: 20,
  },
  content: {
    color: "black",
    ...Typography.h4,
    paddingStart: 10,
  },
});

export default SettingCard;
