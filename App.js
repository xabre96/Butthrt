import React from "react";
import { AppLoading,Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Container } from "native-base";
import HomeScreen from "./screens/HomeScreen";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: true };
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({ fontLoaded: false });
    } catch (err) {
      console.error("Error loading icon fonts.", err);
    }
  }

  render() {
    if (this.state.fontLoaded) {
      return <AppLoading />;
    }

    return (
      <Container>
        <HomeScreen />
      </Container>
    );
  }
}
