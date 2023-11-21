import React, { memo } from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import CustomBottomTab from "@src/components/customNavTab/customBottomTab";
import HomeNavigator from "./homeNavigator";
import { NAVIGATION_TABS_NAME } from "@src/constants/bottomNavConstant";

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = memo(() => {
  const componentTabBar = (props: BottomTabBarProps) => (
    <CustomBottomTab {...props} />
  );

  return (
    <Tab.Navigator tabBar={componentTabBar}>
      <Tab.Group
        screenOptions={{
          headerShown: true,
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: NAVIGATION_TABS_NAME.HOME_TAB,
          }}
          name={NAVIGATION_TABS_NAME.HOME_TAB}
          component={HomeNavigator}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
});

export default AppNavigator;
