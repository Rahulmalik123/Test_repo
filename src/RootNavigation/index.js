import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./Routes";
import * as Screens from "Screens";

import TestOneScreen from "Screens/TestOneScreen";
import TestSecondScreen from "Screens/TestSecondScreen";

const MainStack = createStackNavigator();
export default function () {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name={Routes.TestOneScreen} component={TestOneScreen} />
      <MainStack.Screen
        name={Routes.TestSecondScreen}
        component={TestSecondScreen}
      />
      <MainStack.Screen name={Routes.OtpScreen} component={Screens.OtpScreen} />
    </MainStack.Navigator>
  );
}
