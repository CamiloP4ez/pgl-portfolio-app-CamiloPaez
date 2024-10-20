import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
type HeaderProps = {
  displayMyQR: boolean;
  setDisplayMyQR: (value: boolean) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const Header = (props: HeaderProps) => {
  const themeStyles = props.isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={styles.topContainer}>
      <Text style={[styles.title, themeStyles.title]}>My Portfolio App</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => props.setDisplayMyQR(true)}
        >
          <Text style={[styles.buttonText, themeStyles.buttonText]}>
            Mi info
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => props.setDisplayMyQR(false)}
        >
          <Text style={[styles.buttonText, themeStyles.buttonText]}>
            Mi Repo
          </Text>
        </Pressable>

        <Pressable onPress={props.toggleTheme} style={styles.iconButton}>
          <MaterialCommunityIcons
            name="theme-light-dark" 
            size={24}
            color={props.isDarkMode ? "#FFD700" : "black"} 
          />
        </Pressable>
      </View>
    </View>
  );
};

const lightTheme = StyleSheet.create({
  title: {
    color: "white",
  },
  buttonText: {
    color: "black",
  },
});

const darkTheme = StyleSheet.create({
  title: {
    color: "#fff",
  },
  buttonText: {
    color: "white",
  },
});

const styles = StyleSheet.create({
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "33%",
  },
  buttonText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  iconButton: {
    padding: 10,
  },
});

export default Header;
