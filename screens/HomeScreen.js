import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Posts from "../components/Posts";

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles}>
        <Posts />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: 24,
    paddingHorizontal: 12
  }
});
