import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type ProfileInfoProps = {
  isDarkMode: boolean;
};

const ProfileInfo = (props: ProfileInfoProps) => {
  const themeStyles = props.isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={styles.profileContainer}>
      <Image
        style={styles.avatar}
        source={require("../../assets/camilo.jpg")}
      />
      <View
        style={[styles.descriptionContainer, themeStyles.descriptionContainer]}
      >
        <Text style={[styles.title, themeStyles.title]}>Quien soy?</Text>
        <Text style={themeStyles.text}>
          Soy un estudiante de programacion que quiere vivir la vida chilling y
          poder conseguir un teletrabajo que me permita flojear jajaja
        </Text>
      </View>
    </View>
  );
};

const lightTheme = StyleSheet.create({
  descriptionContainer: {
    backgroundColor: "pink",
  },
  title: {
    color: "#000",
  },
  text: {
    color: "#000",
  },
});

const darkTheme = StyleSheet.create({
  descriptionContainer: {
    backgroundColor: "#333",
  },
  title: {
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
});

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  descriptionContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default ProfileInfo;
