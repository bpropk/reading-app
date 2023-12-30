import React, { memo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackElements, RootStackParamList } from "./rootStack";
import AuthenticationNavigator from "./authNavigation";
import InAppNavigator from "./inAppNavigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = memo(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          true
            ? RootStackElements.IN_APP_STACK
            : RootStackElements.AUTHENTICATION_STACK
        }
      >
        <Stack.Screen
          name={RootStackElements.AUTHENTICATION_STACK}
          component={AuthenticationNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RootStackElements.IN_APP_STACK}
          component={InAppNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default AppNavigator;
