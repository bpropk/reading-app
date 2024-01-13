import { memo } from "react";
import { RootStackParamList, RootStackElements } from "./rootStack";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "@src/pages/in-app/home";

const Stack = createStackNavigator<RootStackParamList>();

const HomeNavigator: React.FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.HOME_PAGE}>
      <Stack.Screen
        name={RootStackElements.HOME_PAGE}
        component={HomePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default HomeNavigator;
