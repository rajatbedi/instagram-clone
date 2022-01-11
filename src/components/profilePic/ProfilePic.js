import React from "react";
import { Image, StyleSheet, View } from "react-native";

const ProfilePic = ({size, source, style, borderColor="#f7a34b"}) => {
  return (
    <View style={[styles(size, borderColor).imgWrap, style]}>
      <Image
        source={{ uri: source }}
        resizeMode="cover"
        style={styles(size, borderColor).image}
      />
    </View>
  );
};

export default ProfilePic;

const styles = (size, borderColor) =>
  StyleSheet.create({
    imgWrap: {
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: 2,
      borderColor: borderColor,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: size - 4,
      height: size - 4,
      borderRadius: (size-5)/2,
      borderColor: "white",
      borderWidth: 2,
    },
  });
