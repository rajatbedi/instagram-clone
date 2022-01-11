import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  ScrollView,
  Keyboard,
  Alert,
  SafeAreaView,
} from "react-native";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import TextButton from "../../components/TextButton";
import { AntDesign } from "@expo/vector-icons";
import ORDivider from "../../components/ORDivider";
import StyledText from "../../components/StyledText";
import { styles } from "./auth.styles";
import { signInUser } from "../../firebase/auth.firbase";
import AppLoading from "../../components/AppLoading";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices";
import SafeAreaContainer from "../../components/containers/SafeAreaContainer";
import ScrollViewContainer from "../../components/containers/ScrollViewContainer";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  
  const dispatch = useDispatch()

  const UserDispatcher = (data) => {
    dispatch(setUser(data));
  }

  const onLogin = () => {
    Keyboard.dismiss();
    if (email === "" || password === "") {
      return Alert.alert(
        "Empty Fields",
        "Please enter both emails and password."
      );
    }
    setLoadingIndicator(true);
    signInUser(email, password, setLoadingIndicator, UserDispatcher);
    if(loadingIndicator){
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

        <TextButton
          title="Forgot Password?"
          onClick={() => {
            navigation.navigate("ForgotPass");
          }}
        />

        <StyledButton
          title="Login"
          onClick={onLogin}
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
            title="Sign up."
            btnStyle={styles.textButton}
            onClick={() => {
              navigation.replace("Signup");
            }}
          />
        </View>
      </SafeAreaContainer>
      </ScrollViewContainer>
  );
};

export default LoginScreen;
