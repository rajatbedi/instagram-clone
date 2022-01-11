import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNav from "./bottomTab.navigation";
import AppLoading from "expo-app-loading";

import RegisterScreen from "../screens/auth/register.screen";
import ForgotPasswordScreen from "../screens/auth/forgotPassword.screen";
import LoginScreen from "../screens/auth/login.screen";
import StoryScreen from "../screens/story/story.screen";

import { StatusBar } from "expo-status-bar";

import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { firebaseApp } from "../firebase/firebase.config";
import { db, getUserDB } from "../firebase/firestore.firebase";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { resetUser, setUser } from "../redux/slices";
import { Alert } from "react-native";
import { signOutUser } from "../firebase/auth.firbase";

const MainNavigation = () => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const Stack = createNativeStackNavigator();

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const dispatch = useDispatch();

  const userDispatcher = (data) => {
    dispatch(setUser(data));
  }

  useEffect(() => {
    onAuthStateChanged(getAuth(firebaseApp), (user) => {
      if (user) {
        //Sign in
          getUserDB(user.uid, userDispatcher).then(()=> {
            setIsLoggedIn(true)
            setAuthLoaded(true)
          })
      } else {
        // Signed out
        dispatch(resetUser());
        setIsLoggedIn(false)
        setAuthLoaded(true);
      }
    });
  },[]);

  if (!authLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      {!isLoggedIn && authLoaded ? (
        <Stack.Navigator
          initialRouteName={"Login"}
          screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={RegisterScreen} />
          <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={"MainScreen"}
          screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
          <Stack.Screen name="MainScreen" component={BottomTabNav} />
          <Stack.Screen name="StoryScreen" component={StoryScreen} />
        </Stack.Navigator>
      )}
      <StatusBar style="auto" backgroundColor="white" />
    </NavigationContainer>
  );
};

export default MainNavigation;
