import { StyleSheet } from "react-native";

import { SCREEN_WIDTH } from "@src/constants/screen";
import { CIRCLE_CONTAINER_SIZE } from "@src/constants/bottomNavConstant";
import { colors } from "./theme";

export const LABEL_WIDTH = SCREEN_WIDTH / 4;
const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    alignItems: "center",
    width: LABEL_WIDTH,
    marginTop: 50,
  },
  label: {
    fontSize: 10,
  },
  QRContainer: {
    backgroundColor: colors.green,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 13.4,
  },
  QR: {
    height: 32.12,
    width: 32.2,
    margin: 15,
  },
});

const customTabStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    backgroundColor: colors.white,
  },
  tabItemsContainer: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
  },
  shadowMd: {
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 15,
    shadowOffset: { width: 4, height: 4 },
  },
});

const tabItemsStyles = StyleSheet.create({
  icon: { marginTop: 10 },
  touchAbleArea: { top: 0, bottom: 200 },
});

const animatedCircleStyles = StyleSheet.create({
  circleStyle: {
    position: "absolute",
    top: -CIRCLE_CONTAINER_SIZE / 2,
    width: CIRCLE_CONTAINER_SIZE,
    borderRadius: CIRCLE_CONTAINER_SIZE,
    height: CIRCLE_CONTAINER_SIZE,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles, customTabStyles, tabItemsStyles, animatedCircleStyles };
