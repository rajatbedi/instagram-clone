import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TextButton = ({ title, btnStyle, textStyle, onClick, Icon }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btnWrap, btnStyle]}
      onPress={onClick}
    >
        {Icon && Icon}
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  btnWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  btnText: {
    color: "#3797EF",
    fontSize: 16,
    fontFamily: "SourceSansPro400",
    marginStart: 5
  },
});
