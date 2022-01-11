import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from "react-native";

const StoryScreen = () => {
    const statusBarHeight = StatusBar.currentHeight;
  const storiesData = [
    {
      user: {
        id: "1",
        name: "Rajat",
        url: "https://wallpapercave.com/wp/wp5047311.jpg",
      },
      stories: [
        "https://wallpapercave.com/wp/wp5047311.jpg",
        "https://wallpapercave.com/wp/wp5047311.jpg",
        "https://wallpapercave.com/wp/wp5047311.jpg",
      ],
    },
    {
      user: {
        id: "2",
        name: "Jaspreet",
        url: "https://wallpapercave.com/wp/wp5047311.jpg",
      },
      stories: ["https://wallpapercave.com/wp/wp5047311.jpg"],
    },
    {
      user: {
        id: "3",
        name: "Avi",
        url: "https://wallpapercave.com/wp/wp5047311.jpg",
      },
      stories: ["https://wallpapercave.com/wp/wp5047311.jpg"],
    },
  ];

  const storySrc = storiesData[0].stories[0];

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground source={{ uri: storySrc }} style={styles.bgImage}>
        <Text>Story Screen</Text>
      </ImageBackground>
    </View>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
