import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "./screens/login";
import { SignUp } from "./screens/SignUp";
import DashBoard from "./screens/DashBoard";
import Profile from "./screens/Profile";

// Prevent the splash screen from auto-hiding before asset loading is complete.
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
