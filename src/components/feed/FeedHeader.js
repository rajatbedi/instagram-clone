import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import StyledText from "../StyledText";
import { Entypo } from "@expo/vector-icons";

const FeedHeader = ({ data }) => {
  return (
    <View style={styles.feedHeader}>
      <View style={styles.feedHeaderLeft}>
        <Image
          source={{ uri: data.profilePic }}
          resizeMode="cover"
          style={styles.profliePic}
        />
        <View>
          <Text style={styles.profileName}>{data.name}</Text>

          {data.location && (
            <StyledText style={styles.locationText}>{data.location}</StyledText>
          )}
        </View>
      </View>
      <Entypo name="dots-three-horizontal" size={15} color="#262626" />
    </View>
  );
};

export default FeedHeader;

const styles = StyleSheet.create({
  feedHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  feedHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profliePic: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    marginRight: 10,
  },
  profileName: {
    color: "#262626",
    fontFamily: "SourceSansPro600",
    fontSize: 13,
  },
  locationText: {
    fontSize: 11,
    marginTop: -4,
  },
});
