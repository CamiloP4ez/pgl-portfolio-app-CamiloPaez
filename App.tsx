import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import Header from "./components/header/Header";
import ProfileInfo from "./components/profileinfo/ProfileInfo";
import LikesList from "./components/likeslist/LikesList";
import QRCodeDisplay from "./components/qrcode/QRCodeDisplay";
import { ImageBackground } from "react-native";

export default function App() {
  const [isCleared, setIsCleared] = useState(false);
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const clearApp = () => {
    setIsCleared(true);
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  if (isCleared) {
    return <View style={styles.clearedApp}></View>;
  }

  const themeStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <ImageBackground
        source={require("./assets/background.jpeg")}
        style={styles.container}
      >
        <Header
          displayMyQR={displayMyQR}
          setDisplayMyQR={setDisplayMyQR}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        {displayMyQR ? (
          <View style={styles.body}>
            <ProfileInfo isDarkMode={isDarkMode} />
            <LikesList isDarkMode={isDarkMode} />
          </View>
        ) : (
          <QRCodeDisplay
            url="https://github.com/CamiloP4ez"
            isDarkMode={isDarkMode}
          />
        )}
        <Button title="No me toques :3" onPress={clearApp} color="red" />
      </ImageBackground>
    </View>
  );
}

const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  clearedApp: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
