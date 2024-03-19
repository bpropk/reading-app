import React from "react";
import { memo } from "react";
import { RootStackParamList, RootStackElements } from "./rootStack";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "@src/pages/in-app/home";
import { DiscoverStackNavigator } from "./discoverNavigator";
import { LibraryStackNavigator } from "./libraryNavigator";

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <>
      <Stack.Screen
        name={RootStackElements.HOME_PAGE}
        component={HomePage}
        options={{ headerShown: false }}
      />
    </>
  );
};

const HomeNavigator: React.FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.HOME_PAGE}>
      {HomeStackNavigator()}
      {DiscoverStackNavigator()}
      {LibraryStackNavigator()}
    </Stack.Navigator>
  );
});

export default HomeNavigator;
