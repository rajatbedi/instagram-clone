import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import SafeAreaContainer from "../../components/containers/SafeAreaContainer";
import ProfilePic from "../../components/profilePic/ProfilePic";
import StyledText from "../../components/StyledText";
import { signOutUser } from "../../firebase/auth.firbase";

const ProfileScreen = () => {
  const userData = useSelector((state) => state.user);

  const handleUserLogOut = () => {
    signOutUser();
  };

  return (
    <SafeAreaContainer style={styles.container}>
      <ProfilePic
        source={userData.profilePicUrl}
        size={60}
        borderColor="#e75583"
      />
      <StyledText
        style={{fontSize: 16, textTransform: "capitalize", marginVertical: 5}}
      >
        {userData.name}
      </StyledText>
      <Button title="logout" onPress={handleUserLogOut} />
    </SafeAreaContainer>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container : {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  }
});

