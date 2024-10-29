import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Login } from "./screens/login";
import { SignUp } from "./screens/SignUp";
import DashBoard from "./screens/DashBoard";
import Profile from "./screens/Profile";
import News from "./screens/News";
import NewDetail from "./screens/NewDetails";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home-outline" : "home-outline"}
              size={24}
              color={focused ? "#007AFF" : "#8E8E93"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "newspaper-outline" : "newspaper-outline"}
              size={24}
              color={focused ? "#007AFF" : "#8E8E93"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <EvilIcons
              name={focused ? "user" : "user"}
              size={24}
              color={focused ? "#007AFF" : "#8E8E93"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function RootLayout() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="NewDetail" component={NewDetail} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
