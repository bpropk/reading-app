import { memo } from "react";
import { RootParamsList, RootStackElements } from "./root-stack";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "@src/pages/home";

const Stack = createStackNavigator<RootParamsList>();

const HomeNavigator: React.FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.HOME_PAGE}>
      <Stack.Screen
        name={RootStackElements.HOME_PAGE}
        component={HomePage}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
});

export default HomeNavigator;
