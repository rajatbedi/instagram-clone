import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import StyledText from "../StyledText";
import { removePostLikes, updatePostLikes } from "../../firebase/firestore.firebase";
import {useSelector} from "react-redux"


const FeedFooter = ({ data, postLikes }) => {
  const [isLiked, setIsLiked] = useState(false)
  const userUid = useSelector(state => state.user.uid);

  useEffect(()=> {
    if(data.userWhoLiked.includes(userUid)){
      setIsLiked(true);
    }
  }, [])

  const handleLikes= () => {
    if(isLiked){
      removePostLikes(data.postId, userUid)
      .then(()=> {
        postLikes(data.likes - 1)
        setIsLiked(false)
      });
    }else{
      updatePostLikes(data.postId, userUid)
      .then(()=> {
        postLikes(data.likes + 1)
        setIsLiked(true)
      });
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.footerBtnWrap}>
        <View style={styles.footerBtnLeft}>
          <TouchableOpacity onPress={handleLikes}>
            {isLiked ? <AntDesign
            name="heart"
            size={24}
            color="#ED4956"
            style={styles.icons}
          /> :
          <AntDesign
            name="hearto"
            size={24}
            color="#262626"
            style={styles.icons}
          />
          }
          </TouchableOpacity>
          <FontAwesome
            name="comment-o"
            size={24}
            color="#262626"
            style={styles.icons}
          />
          <Feather name="send" size={24} color="#262626" style={styles.icons} />
        </View>
        <FontAwesome name="bookmark-o" size={24} color="#262626" />
      </View>
      {data.likes && (
        <StyledText style={{ textAlign: "left", fontSize: 13 }}>
          {data.likes}{data.likes === 1 ? " Like": " Likes" }
        </StyledText>
      )}

      <Text style={styles.captionText}>
        <Text style={styles.profileName}>{data.name}</Text> {data.caption}{" "}
      </Text>
    </View>
  );
};

export default FeedFooter;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  footerBtnWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  footerBtnLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  icons: {
    marginRight: 10,
  },
  captionText: {
    fontFamily: "SourceSansPro400",
    fontSize: 13,
    color: "#262626",
  },
  profileName: {
    fontFamily: "SourceSansPro600",
  },
});
