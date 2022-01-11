import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/profile/profile.screen";
import DiscoveryScreen from "../screens/discovery/discovery.screen";
import NotificationScreen from "../screens/notification/notification.screen";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CreatePostScreen from "../screens/createPost/createPost.screen";
import HomeStackNavigation from "./homeStack.navigation";
import ProfilePic from "../components/profilePic/ProfilePic";
import { useSelector } from "react-redux";

const BottomTabNav = () => {
  const Tab = createBottomTabNavigator();

  const userData = useSelector((state) => state.user);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#262626",
        tabBarInactiveTintColor: "#262626",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? (
              //<Ionicons name="md-home-sharp" size={size} color={color} />
              <Fontisto name="home" size={size} color={color} />
            ) : (
              //<Ionicons name="md-home-outline" size={size} color={color} />
              <SimpleLineIcons name="home" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? (
              <Ionicons name="md-search-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="md-search-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Create Post"
        component={CreatePostScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? (
              <AntDesign name="plussquare" size={size} color={color} />
            ) : (
              <AntDesign name="plussquareo" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? (
              <AntDesign name="heart" size={size} color={color} />
            ) : (
              <AntDesign name="hearto" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <ProfilePic
                size={size}
                source={userData.profilePicUrl}
                style={{ borderWidth: focused ? 2 : 0, borderColor: color }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
