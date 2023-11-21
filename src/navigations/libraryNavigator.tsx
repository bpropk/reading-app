import { memo } from "react";
import { RootParamsList, RootStackElements } from "./root-stack";
import { createStackNavigator } from "@react-navigation/stack";
import LibraryPage from "@src/pages/library";

const Stack = createStackNavigator<RootParamsList>();

const LibraryNavigator: React.FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackElements.LIBRARY_PAGE}>
      <Stack.Screen
        name={RootStackElements.LIBRARY_PAGE}
        component={LibraryPage}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
});

export default LibraryNavigator;
