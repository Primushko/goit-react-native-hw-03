import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import backgroundImg from "./assets/img/background.jpg";

const AuthScreen = ({ children }) => {
  return (
    <ImageBackground source={backgroundImg} style={styles.bgContainer}>
      <View style={styles.contentWrapper}>{children}</View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    resizeMode: "cover",
  },
  contentWrapper: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default AuthScreen;
