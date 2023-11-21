import React, { memo } from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import CustomBottomTab from "@src/components/customNavTab/customBottomTab";
import HomeNavigator from "./homeNavigator";
import { NAVIGATION_TABS_NAME } from "@src/constants/bottomNavConstant";
import LibraryNavigator from "./libraryNavigator";
import DiscoverNavigator from "./discoverNavigator";
import MoreNavigator from "./moreNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = memo(() => {
  const componentTabBar = (props: BottomTabBarProps) => (
    <CustomBottomTab {...props} />
  );

  return (
    <Tab.Navigator tabBar={componentTabBar}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: NAVIGATION_TABS_NAME.HOME_TAB,
          }}
          name={NAVIGATION_TABS_NAME.HOME_TAB}
          component={HomeNavigator}
        />
        <Tab.Screen
          options={{
            tabBarLabel: NAVIGATION_TABS_NAME.LIBRARY_TAB,
          }}
          name={NAVIGATION_TABS_NAME.LIBRARY_TAB}
          component={LibraryNavigator}
        />
        <Tab.Screen
          options={{
            tabBarLabel: NAVIGATION_TABS_NAME.DISCOVER_TAB,
          }}
          name={NAVIGATION_TABS_NAME.DISCOVER_TAB}
          component={DiscoverNavigator}
        />
        <Tab.Screen
          options={{
            tabBarLabel: NAVIGATION_TABS_NAME.MORE_TAB,
          }}
          name={NAVIGATION_TABS_NAME.MORE_TAB}
          component={MoreNavigator}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
});

export default AppNavigator;
