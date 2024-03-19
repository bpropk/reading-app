import React from "react";
import { memo } from "react";
import { RootStackParamList, RootStackElements } from "./rootStack";
import { createStackNavigator } from "@react-navigation/stack";
import LibraryPage from "@src/pages/in-app/library";
import { DisplayBookPage } from "@src/pages/in-app/library/displayBook";

const Stack = createStackNavigator<RootStackParamList>();

export const LibraryStackNavigator = () => {
  return (
    <>
      <Stack.Screen
        name={RootStackElements.LIBRARY_PAGE}
        component={LibraryPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RootStackElements.DISPLAY_BOOK}
        component={DisplayBookPage}
        options={{ headerShown: false }}
      />
    </>
  );
};

const LibraryNavigator: React.FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.LIBRARY_PAGE}>
      {LibraryStackNavigator()}
    </Stack.Navigator>
  );
});

export default LibraryNavigator;
