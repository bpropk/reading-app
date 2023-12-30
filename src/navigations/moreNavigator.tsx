import { memo } from "react";
import { RootStackParamList, RootStackElements } from "./rootStack";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverPage from "@src/pages/discover";
import MorePage from "@src/pages/more";

const Stack = createStackNavigator<RootStackParamList>();

const MoreNavigator: React.FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.MORE_PAGE}>
      <Stack.Screen
        name={RootStackElements.MORE_PAGE}
        component={MorePage}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
});

export default MoreNavigator;
