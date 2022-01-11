import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import UserStory from "./UserStory";

//#de0046 pink dark

const UserStories = ({ data }) => {

  const userProfilePic = useSelector(state => state.user.profilePicUrl)
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <>
            {index === 0 && (
              <UserStory
                style={styles.story}
                borderColor="#e75583"
                imageSrc={userProfilePic}
                name="Your Story"
              />
            )}
            <UserStory style={styles.story} imageSrc={item.url} name={item.name} />
          </>
        )}
      />
    </View>
  );
};

export default UserStories;

const styles = StyleSheet.create({
  container: {
    height: 85,
  },
  story: {
    marginRight: 12,
  },
});
