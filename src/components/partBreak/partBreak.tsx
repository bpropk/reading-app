import { colors } from "@src/common/theme";
import { StyleSheet, View } from "react-native";

const PartBreak: React.FC = () => {
  return <View style={styles.partbreak} />;
};

const styles = StyleSheet.create({
  partbreak: {
    backgroundColor: colors.lightGrey,
    height: 15,
    marginHorizontal: -10,
    marginBottom: 10,
  },
});

export default PartBreak;
