import { SourceSansPro_600SemiBold } from "@expo-google-fonts/source-sans-pro";
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const StyledButton = ({ title, btnStyle, textStyle, onClick ,disabled}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={[styles.btn, btnStyle]}
    onPress={onClick}
    disabled={disabled}
  >
    <Text style={[styles.btnText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: "#3797EF",
    borderRadius: 5,
    elevation: 1,
    opacity: 0.8,
    marginBottom: 16,
    zIndex: 10
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontFamily: "SourceSansPro600",
  },
});

export default StyledButton;
