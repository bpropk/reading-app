import { colors } from "@src/common/theme";
import { StyleSheet, View } from "react-native";

const LineBreak: React.FC = () => {
  return <View style={styles.lineBreak} />;
};

const styles = StyleSheet.create({
  lineBreak: {
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default LineBreak;
