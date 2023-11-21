import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import usePath from "@src/hooks/usePath";
import { getPathXCenterByIndex } from "@src/utils/Path";
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
  const { curvedPaths } = usePath();
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

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
  const tabStyle = useAnimatedStyle(() => {
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [{ translateX: iconPositionX - ICON_SIZE / 2 }],
    };
  });

  const labelContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: labelPosition - LABEL_WIDTH / 2 }],
    };
  });

  return (
    <>
      <Animated.View style={[tabStyle]}>
        <Pressable
          testID={`tab${label}`}
          hitSlop={tabItemsStyles.touchAbleArea}
          onPress={onTabPress}
        >
          {/* {iconRender(
            activeIndex === index + 1 ? colors.navyBlue : colors.neroWithOpacity
          )} */}
          {/* <Icons.Home fill={colors.navyBlue} style={tabItemsStyles.icon} /> */}
        </Pressable>
      </Animated.View>
      <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
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
      </Animated.View>
    </>
  );
};

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

const tabItemsStyles = StyleSheet.create({
  icon: { marginTop: 10 },
  touchAbleArea: { top: 0, bottom: 200 },
});

export default TabItem;
