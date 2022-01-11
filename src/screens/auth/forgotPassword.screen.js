import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import TextButton from "../../components/TextButton";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import ORDivider from "../../components/ORDivider";
import { styles } from "./auth.styles";
import { EvilIcons } from "@expo/vector-icons";
import StyledText from "../../components/StyledText";
import SafeAreaContainer from "../../components/containers/SafeAreaContainer";
import ScrollViewContainer from "../../components/containers/ScrollViewContainer";

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <ScrollViewContainer>
      <SafeAreaContainer style={styles.container} bgColor="#fff">
        <EvilIcons name="lock" size={95} color="black" style={styles.icon} />
        <StyledText style={styles.text}>Trouble with logging in?</StyledText>
        <StyledText style={styles.text} color="#00000066">
          Enter your email address and we'll send you a link to get back into
          your account.
        </StyledText>
        <StyledInput placeholder="Email" keyboardType="email-address" />

        <StyledButton title="Send Login Link" />

        <ORDivider style={{ marginTop: 16 }} />
        <TextButton
          btnStyle={styles.textButton}
          title="Create New Account"
          onClick={() => {
            navigation.replace("Signup");
          }}
        />
        <TextButton
          btnStyle={styles.textButton}
          title="Back to Login"
          textStyle={{ color: "#262626" }}
          onClick={() => {
            navigation.goBack();
          }}
        />
      </SafeAreaContainer>
      </ScrollViewContainer>
  );
};


export default ForgotPasswordScreen;
