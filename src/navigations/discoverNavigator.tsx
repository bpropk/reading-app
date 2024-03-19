import React from "react";
import { memo } from "react";
import { RootStackParamList, RootStackElements } from "./rootStack";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverPage from "@src/pages/in-app/discover";
import NewBookPage from "@src/pages/in-app/discover/newBooks";
import { HomeStackNavigator } from "./homeNavigator";
import WriteReviewPage from "@src/pages/in-app/discover/writeReview";

const Stack = createStackNavigator<RootStackParamList>();

export const DiscoverStackNavigator = () => {
  return (
    <>
      <Stack.Screen
        name={RootStackElements.DISCOVER_PAGE}
        component={DiscoverPage}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={RootStackElements.DISCOVER_NEW_PAGE}
        component={NewBookPage}
        options={{
          headerShown: true,
          title: "DISCOVER NEW BOOKS",
        }}
      />
      <Stack.Screen
        name={RootStackElements.DISCOVER_REVIEW_PAGE}
        component={WriteReviewPage}
        options={{
          headerShown: true,
          headerTitle: "ADD REVIEW",
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
