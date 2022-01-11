import { StyleSheet, StatusBar, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    logo: {
      width: 182,
      height: 49,
      resizeMode: "contain",
      marginBottom: 24,
    },
  
    textButton: {
      alignSelf: "center",
      marginVertical: 16,
    },
    accountTextWrap: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    icon: {
      paddingVertical: 10,
      borderWidth: 3,
      borderColor: "black",
      borderRadius: 50,
      marginBottom: 16,
    },
    text: {
      width: "80%",
      marginBottom: 16,
    },
  });