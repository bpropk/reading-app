import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationPage from "@src/pages/auth/register";
import { RootStackElements } from "./rootStack";
import LoginPage from "@src/pages/auth/login";
import ForgotPasswordPage from "@src/pages/auth/forgotPassword";
import ResetPasswordPage from "@src/pages/auth/resetPassword";

const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.LOGIN_PAGE}>
      <Stack.Screen
        name={RootStackElements.LOGIN_PAGE}
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RootStackElements.REGISTER_PAGE}
        component={RegistrationPage}
        options={{ headerShown: true, headerBackTitle: "Back", title: "" }}
      />
      <Stack.Screen
        name={RootStackElements.FORGOT_PASSWORD_PAGE}
        component={ForgotPasswordPage}
        options={{ headerShown: true, headerBackTitle: "Back", title: "" }}
      />
      <Stack.Screen
        name={RootStackElements.RESET_PASSWORD_PAGE}
        component={ResetPasswordPage}
        options={{ headerShown: true, headerBackTitle: "Back", title: "" }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
