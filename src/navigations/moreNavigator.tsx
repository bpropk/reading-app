import { memo } from "react";
import { RootParamsList, RootStackElements } from "./root-stack";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverPage from "@src/pages/discover";
import MorePage from "@src/pages/more";

const Stack = createStackNavigator<RootParamsList>();

const MoreNavigator: React.FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.HOME_PAGE}>
      <Stack.Screen
        name={RootStackElements.HOME_PAGE}
        component={MorePage}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
});

export default MoreNavigator;
