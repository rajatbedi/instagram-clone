import { FieldValue, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import Divider from "../../components/Divider";
import Feed from "../../components/feed/Feed";
import UserStories from "../../components/story/UserStories";
import { getAllPosts } from "../../firebase/firestore.firebase";

const MainHomeScreen = () => {
  const storiesData = [
    {
      id: "145448",
      name: "Rajat",
      url: "https://wallpaperaccess.com/full/2213424.jpg",
    },
    {
      id: "25465431",
      name: "Avi",
      url: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "2451532",
      name: "Jaspreet Rathore",
      url: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "4534613",
      name: "Alex",
      url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "553151",
      name: "Sam",
      url: "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
    },
    {
      id: "653351",
      name: "Sara",
      url: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
  ];

  const [posts, setPosts] = useState("");
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    getAllPosts(setPosts).then(() => setRefreshing(false));
  }, []);

  return (
    <FlatList
      onRefresh={() => {
        setRefreshing(true);
        getAllPosts(setPosts).then(() => {
          setRefreshing(false);
        });
      }}
      refreshing={refreshing}
      contentContainerStyle={{ backgroundColor: "white" }}
      ListHeaderComponent={
        <View>
          <UserStories data={storiesData} />
          <Divider width={"100%"} height={0.4} />
        </View>
      }
      overScrollMode="never"
      data={posts}
      keyExtractor={(item) => item.postId}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Feed data={item} />}
    />
  );
};

export default MainHomeScreen;
