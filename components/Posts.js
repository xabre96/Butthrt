import React, { Component } from "react";
import { SafeAreaView, Text, Button, Alert, StyleSheet } from "react-native";

export default class Posts extends Component {
  onPressLearnMore = () => {
    Alert.alert("Button Event", "Clicked!");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Posts</Text>
        <Text>This will be where the posts will be shown</Text>
        <Button
          onPress={this.onPressLearnMore}
          color="#841584"
          title="Click me"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
