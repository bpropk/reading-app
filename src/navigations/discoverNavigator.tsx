import React from "react";
import { memo } from "react";
import { RootStackParamList, RootStackElements } from "./rootStack";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverPage from "@src/pages/in-app/discover";
import NewBookPage from "@src/pages/in-app/discover/newBooks";
import { HomeStackNavigator } from "./homeNavigator";

const Stack = createStackNavigator<RootStackParamList>();

export const DiscoverStackNavigator = () => {
  return (
    <>
      <Stack.Screen
        name={RootStackElements.DISCOVER_PAGE}
        component={DiscoverPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RootStackElements.DISCOVER_NEW_PAGE}
        component={NewBookPage}
        options={{
          headerShown: true,
          title: "DISCOVER NEW BOOKS",
        }}
      />
    </>
  );
};

const DiscoverNavigator: React.FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.DISCOVER_PAGE}>
      {DiscoverStackNavigator()}
      {HomeStackNavigator()}
    </Stack.Navigator>
  );
});

export default DiscoverNavigator;
