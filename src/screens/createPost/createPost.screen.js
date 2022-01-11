import React, { useState } from "react";
import { Alert, Image, StyleSheet, TextInput, View } from "react-native";
import SafeAreaContainer from "../../components/containers/SafeAreaContainer";
import ScrollViewContainer from "../../components/containers/ScrollViewContainer";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import { addPost } from "../../firebase/firestore.firebase";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import StyledText from "../../components/StyledText";

const CreatePostScreen = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  const navigation = useNavigation()

  const userData = useSelector((state) => state.user);

  const submitPost = () => {
    addPost(userData.uid, caption, imageUrl);
    Alert.alert("Post submitted","post successfully submitted",[{
      text: "OK",
          // onPress: () => navigation.navigate("Home"),
    }])
    setCaption("")
    setImageUrl("")
  };
  

  return (
    <ScrollViewContainer>
      <SafeAreaContainer bgColor="#fff">
        <View style={styles.inputContainer}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
            resizeMode="cover"
            source={{
              uri:
                imageUrl === ""
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTGUFUPs1xpgBwZsWNX18TOFpJFC67j7uGw&usqp=CAU"
                  : imageUrl,
            }}
          />
          <TextInput
            placeholder="Write...."
            multiline={true}
            placeholderTextColor="#00000033"
            maxLength={200}
            style={styles.textInput}
            onChangeText={(value) => setCaption(value)}
            value={caption}
          />
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <StyledInput
            placeholder="Enter Image Url"
            onChangeText={(value) => setImageUrl(value)}
            value={imageUrl}
          />
        </View>
        <View style={{ padding: 16 }}>
          <StyledButton title="Submit" onClick={submitPost} />
        </View>
      </SafeAreaContainer>
    </ScrollViewContainer>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 20,
  },
  textInput: {
    flex: 1,
    height: 200,
    maxHeight: 200,
    fontSize: 16,
    backgroundColor: "#fafafa",
    color: "#262626",
    textAlignVertical: "top",
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingStart: 16,
    marginLeft: 1,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    elevation: 1,
  },
});
