import React from "react";
import { memo } from "react";
import { RootStackParamList, RootStackElements } from "./rootStack";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverPage from "@src/pages/in-app/discover";
import MorePage from "@src/pages/in-app/more";
import ProfilePage from "@src/pages/in-app/more/profile";
import EditProfile from "@src/pages/in-app/more/editprofile";
import LoginPage from "@src/pages/auth/login";

const Stack = createStackNavigator<RootStackParamList>();

const MoreNavigator: React.FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.MORE_PAGE}>
      <Stack.Screen
        name={RootStackElements.MORE_PAGE}
        component={MorePage}
        options={{ headerShown: false, title: " More Page " }}
      />
      <Stack.Screen
        name={RootStackElements.PROFILE_PAGE}
        component={ProfilePage}
        options={{
          headerShown: true,
          headerBackTitle: "Back",
          title: " Profile ",
        }}
      />
      <Stack.Screen
        name={RootStackElements.EDIT_PROFILE_PAGE}
        component={EditProfile}
        options={{
          headerShown: true,
          headerBackTitle: "Back",
          title: " Edit Profile ",
        }}
      />
      <Stack.Screen
        name={RootStackElements.LOGIN_PAGE}
        component={LoginPage}
        options={{
          headerShown: false,
          headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
});

export default MoreNavigator;
