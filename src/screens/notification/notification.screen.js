import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaContainer from "../../components/containers/SafeAreaContainer";
import StyledText from "../../components/StyledText";

const NotificationScreen = () => {
  return (
    <SafeAreaContainer style={styles.container}>
      <StyledText >No Notification</StyledText>
    </SafeAreaContainer>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container : {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  }
});
