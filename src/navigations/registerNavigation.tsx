import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationForm from "@src/pages/register/register";
import { RootStackElements } from "./root-stack";
import LoginForm from "@src/pages/login/login";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.LOGIN_PAGE}>
      <Stack.Screen name={RootStackElements.LOGIN_PAGE} component={LoginForm} />
      <Stack.Screen
        name={RootStackElements.REGISTER_PAGE}
        component={RegistrationForm}
      />
      {/* Thêm các màn hình khác nếu cần */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
