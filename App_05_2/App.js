import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screen/Home";
import About from "./src/screen/About";
import Reel from "./src/screen/Reel";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: (color, size) => (
              <Entypo name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: (color, size) => (
              <AntDesign name="global" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Reel"
          component={Reel}
          options={{
            tabBarIcon: (color, size) => (
              <AntDesign name="fire" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
