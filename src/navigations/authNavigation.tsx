import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationForm from "@src/pages/register/register";
import { RootStackElements } from "./rootStack";
import LoginForm from "@src/pages/login/login";

const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.LOGIN_PAGE}>
      <Stack.Screen
        name={RootStackElements.LOGIN_PAGE}
        component={LoginForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RootStackElements.REGISTER_PAGE}
        component={RegistrationForm}
        options={{ headerShown: true, headerBackTitle: "Back", title: "" }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
