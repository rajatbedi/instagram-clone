import React from "react";
import { ScrollView } from "react-native";

const ScrollViewContainer = (props) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      {props.children}
    </ScrollView>
  );
};

export default ScrollViewContainer;
