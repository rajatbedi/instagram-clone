import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainHomeScreen from "../screens/home/home.screen";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeStackNavigation = () => {
  const homeStack = createNativeStackNavigator();
  const navigation = useNavigation()

  const logo = () => (
    <Image
      source={require("../../assets/images/logoBlack.png")}
      style={{ height: 30, width: 120 }}
      resizeMode="contain"
    />
  );

  const headerRight = () => (
    <View style={{flexDirection: "row", alignContent: "center"}}>
      <TouchableOpacity onPress={()=> navigation.navigate("Create Post")} activeOpacity={0.9} >
      <Feather name="plus-square" size={25} color="#262626" style={{marginEnd: 20}}/>
      </TouchableOpacity>
      <Feather name="send" size={25} color="#262626" style={{marginEnd: 5}} />
    </View>
  );

  return (
    <homeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ gestureEnabled: true }}
    >
      <homeStack.Screen
        name="HomeScreen"
        component={MainHomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitle: logo,
          headerTitleAlign: "left",
          headerRight: headerRight,
          headerShadowVisible: false
        }}
      />
    </homeStack.Navigator>
  );
};

export default HomeStackNavigation;
