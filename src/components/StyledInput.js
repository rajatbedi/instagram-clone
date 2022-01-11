import React from "react";
import { StyleSheet, TextInput} from "react-native";

const StyledInput = ({
  style,
  placeholder,
  onChangeText,
  value,
  secureTextEntry = false,
  keyboardType="default"
}) => (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor="#00000033"
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    ></TextInput>
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#fafafa",
    fontSize: 16,
    fontFamily: "SourceSansPro400",
    fontWeight: "normal",
    lineHeight: 17,
    textAlign: "left",
    color: "#262626",
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 16,
    borderRadius: 5,
    elevation: 1,
  },
});

export default StyledInput;
