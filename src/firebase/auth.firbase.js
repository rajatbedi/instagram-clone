import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Alert } from "react-native";
import { firebaseApp } from "./firebase.config";
import { addUserDB, getUserDB } from "./firestore.firebase";

const auth = getAuth(firebaseApp);

const errorAlert = (error) => {
  return Alert.alert(error.code, error.message);
};

export const createUser = async (
  email,
  password,
  name,
  profilePicUrl,
  loadingIndicator
) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential) {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: profilePicUrl,
        });
        addUserDB(user.uid, email, name, profilePicUrl);
      }
    })
    .catch((error) => {
      errorAlert(error);
      loadingIndicator(false);
    });
};

export const signInUser = async (email, password, loadingIndicator, dispatcher) => {
  await signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    getUserDB(userCredential.user.uid, dispatcher);
  })
    .catch((error) => {
      errorAlert(error);
      loadingIndicator(false);
    });
};

export const signOutUser = () => {
  auth.signOut();
};
