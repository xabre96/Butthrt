import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
