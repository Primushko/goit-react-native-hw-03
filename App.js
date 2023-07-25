import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
// import RegistrationScreen from "./Screens/RegistrationScreen";

import AuthScreen from "./AuthScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthScreen>
        <LoginScreen />
      </AuthScreen>
      {/* <AuthScreen>
        <RegistrationScreen />
      </AuthScreen> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
