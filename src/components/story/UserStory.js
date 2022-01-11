import React from "react";
import {
  View,
  TouchableOpacity,
} from "react-native";
import StyledText from "../StyledText";
import ProfilePic from "../profilePic/ProfilePic";
import { useNavigation } from "@react-navigation/native";

const UserStory = ({ imageSrc, name, style, size = 62 , borderColor="#f7a34b"}) => {
  
  const navigation = useNavigation();
  
  const checkName = (name) => {
    if (name.length > 10) {
      const shortName = name.slice(0, 10) + "...";
      return shortName;
    } else {
      return name;
    }
  };

  return (
    <View style={[{alignItems: "center"}, style]}>
      <TouchableOpacity activeOpacity={0.9} onPress={()=> {navigation.navigate("StoryScreen")}}>
        <ProfilePic size={size} source={imageSrc} borderColor={borderColor} />
      </TouchableOpacity>
        {name && (
          <StyledText style={{fontSize: 12 }}>
            {checkName(name)}
          </StyledText>
        )}
    </View>
  );
};

export default UserStory;