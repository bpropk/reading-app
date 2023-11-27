import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Animated from "react-native-reanimated";

import { colors, Icons } from "@src/common/theme";
import {
  ICON_SIZE,
  NAVIGATION_ICON_NAME,
} from "@src/constants/bottomNavConstant";
import { LABEL_WIDTH } from "@src/common/styles";

export type TabProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};
export type AnimatedProp = {
  color: string;
};

const TabItem: FC<TabProps> = ({
  label,
  icon,
  index,
  activeIndex,
  onTabPress,
}) => {
  const iconRender = (color: string) => {
    switch (icon) {
      case NAVIGATION_ICON_NAME.HOME_ICON:
        return <Icons.Home fill={color} style={tabItemsStyles.icon} />;
      case NAVIGATION_ICON_NAME.LIBRARY_ICON:
        return <Icons.Library fill={color} style={tabItemsStyles.icon} />;
      case NAVIGATION_ICON_NAME.DISCOVER_ICON:
        return <Icons.Discover fill={color} style={tabItemsStyles.icon} />;
      default:
        return <Icons.MorePage fill={color} style={tabItemsStyles.icon} />;
    }
  };

  return (
    <Animated.View>
      <Pressable
        testID={`tab${label}`}
        onPress={onTabPress}
        style={styles.container}
      >
        <View style={tabItemsStyles.container}>
          {iconRender(
            activeIndex === index + 1 ? colors.darkGreen : colors.neroWithOpacity
          )}
        </View>
{/* chỉnh màu text  */}
        <Text
          style={[
            styles.label,
            {
              color:
                activeIndex === index + 1
                  ? colors.navyBlue
                  : colors.neroWithOpacity,
            },
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
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

const tabItemsStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 5,
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});

export default TabItem;
