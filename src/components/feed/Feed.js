import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { getUserDB } from "../../firebase/firestore.firebase";
import FeedFooter from "./FeedFooter";
import FeedHeader from "./FeedHeader";

const Feed = ({ data }) => {
  const [userData, setUserData] = useState("");
  const [postLikes, setPostLikes] = useState(0);

  useEffect(() => {
    getUserDB(data.postData.uid, setUserData);
    setPostLikes(data.postData.likes.length)
  }, []);

  const sortedData = {
    postId: data.postId,
    uid: data.postData.uid,
    name: userData.username,
    profilePic: userData.profilePicUrl,
    image: data.postData.imageUrl,
    location: data.postData.timeStamp.toDate().toString(),
    caption: data.postData.caption,
    likes:
      postLikes === 0
        ? null
        : postLikes,
    userWhoLiked: data.postData.likes
  };

  console.log("feed: ", sortedData);

  const deviceWidth = Dimensions.get("window").width;

  return (
    <View style={styles.feedContainer}>
      <FeedHeader data={sortedData} />
      <Image
        source={{ uri: sortedData.image }}
        resizeMode="cover"
        style={{ width: deviceWidth, height: deviceWidth - 50 }}
      />
      <FeedFooter data={sortedData} postLikes={(likes) => setPostLikes(likes)} />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  feedContainer: {
    width: "100%",
  },
  feedHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  feedHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
});
