import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaContainer from "../../components/containers/SafeAreaContainer";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";

const DiscoveryScreen = () => {
  return (
    <SafeAreaContainer>
      <View style={styles.inputConatiner}>
      <StyledInput placeholder="Search..."/>
      </View>
      <View style={styles.listContainer}>
      </View>

    </SafeAreaContainer>
  );
};

export default DiscoveryScreen;

const styles = StyleSheet.create({
  inputConatiner:{
    flexDirection: "row",
    width: "100%",
    padding: 16,
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
  },
});
