import React, { useState } from "react";
import {
  View,
  Image,
  Keyboard,
  ScrollView,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import TextButton from "../../components/TextButton";
import { AntDesign } from "@expo/vector-icons";
import ORDivider from "../../components/ORDivider";
import StyledText from "../../components/StyledText";
import { styles } from "./auth.styles";
import { createUser } from "../../firebase/auth.firbase";
import ScrollViewContainer from "../../components/containers/ScrollViewContainer";
import SafeAreaContainer from "../../components/containers/SafeAreaContainer";
import { useDispatch, useSelector } from "react-redux";
import AppLoading from "../../components/AppLoading";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loadingIndicator, setLoadingIndicator] = useState(false);
  
  const dispatch = useDispatch()

  const UserDispatcher = (data) => {
    dispatch(setUser(data));
  }
  const onSignup = () => {
    Keyboard.dismiss();
    if (email === "" || password === "" || name === "") {
      return Alert.alert(
        "Empty Fields",
        "Please enter all Fields: name, emails and password."
      );
    }
    setLoadingIndicator(true);
    createUser(email, password, name, profilePicUrl, setLoadingIndicator, UserDispatcher);
    if(loadingIndicator){
      setName("");
      setProfilePicUrl("");
      setEmail("");
      setPassword("");
    }
  };

  if (loadingIndicator) {
    return <AppLoading />;
  }

  return (
    <ScrollViewContainer>
      <SafeAreaContainer style={styles.container} bgColor="#fff">
        <Image
          style={styles.logo}
          source={require("../../../assets/images/logoBlack.png")}
        />

        <StyledInput
          placeholder="Name"
          onChangeText={(value) => setName(value)}
          value={name}
        />
        <StyledInput
          placeholder="Profile Url (Optional)"
          onChangeText={(value) => setProfilePicUrl(value)}
          value={profilePicUrl}
        />
        <StyledInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
        <StyledInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          value={password}
        />

        <StyledButton
          title="SignUp"
          btnStyle={{ marginTop: 16 }}
          onClick={onSignup}
          disabled={loadingIndicator}
        />

        <TextButton
          btnStyle={styles.textButton}
          title="Log in with Google"
          textStyle={{ fontFamily: "SourceSansPro600" }}
          Icon={<AntDesign name="google" size={24} color="#3797EF" />}
        />

        <ORDivider />

        <View style={styles.accountTextWrap}>
          <StyledText color="#00000066">Don't have an account?</StyledText>
          <TextButton
            title="Login."
            btnStyle={styles.textButton}
            onClick={() => {
              navigation.replace("Login");
            }}
          />
        </View>
      </SafeAreaContainer>
      </ScrollViewContainer>
  );
};

export default Register;
