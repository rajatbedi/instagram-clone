import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  collection,
  getDocs,
  orderBy,
  serverTimestamp,
  addDoc, 
  updateDoc,
  arrayUnion,
  arrayRemove
} from "firebase/firestore";
import { Alert } from "react-native";
import { firebaseApp } from "./firebase.config";

export const db = getFirestore(firebaseApp);

export const addUserDB = async (uid, email, name, profilePicUrl) => {
  try {
    await setDoc(doc(db, "users", uid), {
      uid,
      email,
      username: email.split("@")[0].toLowerCase(),
      name,
      profilePicUrl: profilePicUrl
        ? profilePicUrl
        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    });
  } catch (e) {
    Alert.alert(error.code, error.message);
  }
};

export const getUserDB = async (uid, data) => {
  try {
    await getDoc(doc(db, "users", uid)).then((snap) => {
      data(snap.data());
    });
  } catch (error) {
    Alert.alert(error.code, error.message);
  }
};

// Get Realtime data Snapshots with updates
// export const getUserDB = async(uid) => {
//     try{
//         const unsubSnap = onSnapshot(doc(db, "users", uid ),
//         (doc) => console.log("data: ", doc.data)
//         )
//     }catch(e){

//     }
// }

export const addPost = async (uid, caption, imageUrl) => {
  try {
    addDoc(collection(db, "posts"), {
      uid,
      caption,
      imageUrl,
      timeStamp: serverTimestamp(),
      likes: []
    });
  } catch (error) {
    Alert.alert(error.code, error.message);
  }
};

export const getAllPosts = async (data) => {
  const tempData = [];
  try {
    const q = query(collection(db, "posts"), orderBy("timeStamp", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tempData.push({postId: doc.id, postData: doc.data()});
    });
    data(tempData);
  } catch (error) {
    Alert.alert(error.code, error.message);
  }
};

export const updatePostLikes = async (postId, uid) => {
  try {
    updateDoc(doc(db, "posts", postId), {
      likes: arrayUnion(uid)
    });
  } catch (error) {
    Alert.alert(error.code, error.message);
  }
};

export const removePostLikes = async (postId, uid) => {
  try {
    updateDoc(doc(db, "posts", postId), {
      likes: arrayRemove(uid)
    });
  } catch (error) {
    Alert.alert(error.code, error.message);
  }
};

