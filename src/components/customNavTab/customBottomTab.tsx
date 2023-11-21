import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  NAVIGATION_ICON_NAME,
  NAVIGATION_TABS_NAME,
  TAB_BAR_HEIGHT,
} from "@src/constants/bottomNavConstant";
import { SCREEN_WIDTH } from "@src/constants/screen";
import { colors } from "@src/common/theme";
import TabItem from "./tabItem";

const CustomBottomTab: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  const selectIcon = (routeName: string) => {
    switch (routeName) {
      case NAVIGATION_TABS_NAME.HOME_TAB:
        return NAVIGATION_ICON_NAME.HOME_ICON;
      case NAVIGATION_TABS_NAME.LIBRARY_TAB:
        return NAVIGATION_ICON_NAME.LIBRARY_ICON;
      case NAVIGATION_TABS_NAME.DISCOVER_TAB:
        return NAVIGATION_ICON_NAME.DISCOVER_ICON;
      default:
        return NAVIGATION_ICON_NAME.MORE_ICON;
    }
  };

  const handleTabPress = (index: number, tab: string) => {
    navigation.navigate(tab);
  };

  return (
    <View
      style={[
        customTabStyles.tabBarContainer,
        {
          width: SCREEN_WIDTH,
          height: TAB_BAR_HEIGHT + insets.bottom,
        },
        customTabStyles.shadowMd,
      ]}
    >
      <View style={[customTabStyles.tabItemsContainer]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ? options.tabBarLabel : route.name;
          return (
            <TabItem
              key={index.toString()}
              label={label as string}
              icon={selectIcon(route.name)}
              activeIndex={state.index + 1}
              index={index}
              onTabPress={() =>
                route.name !== NAVIGATION_TABS_NAME.HOME_TAB
                  ? handleTabPress(index + 1, route.name)
                  : navigation.navigate(route.name)
              }
            />
          );
        })}
      </View>
    </View>
  );
};

export default CustomBottomTab;

const customTabStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    bottom: 0,
    zIndex: 2,
    backgroundColor: colors.white,
  },
  tabItemsContainer: {
    width: "auto",
    position: "absolute",
    flexDirection: "row",
  },
  shadowMd: {
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 15,
    shadowOffset: { width: 4, height: 4 },
  },
});
