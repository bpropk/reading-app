import { memo } from "react";
import { RootStackParamList, RootStackElements } from "./rootStack";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverPage from "@src/pages/discover";

const Stack = createStackNavigator<RootStackParamList>();

const DiscoverNavigator: React.FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.DISCOVER_PAGE}>
      <Stack.Screen
        name={RootStackElements.DISCOVER_PAGE}
        component={DiscoverPage}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
});

export default DiscoverNavigator;
