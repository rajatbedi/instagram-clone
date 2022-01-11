import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StyledText = ({ style,color="#262626", ...props }) => {
  return (
    <Text style={[styles(color).text, style]}>
      {props.children}
    </Text>
  );
};

const styles =(color) => StyleSheet.create({
  text: {
    color: color,
    textAlign: "center",
    fontFamily: "SourceSansPro400",
    lineHeight: 20,
    fontSize: 14,
  },
});

export default StyledText;
