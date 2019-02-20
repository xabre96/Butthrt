import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from "native-base";
import Posts from "../components/Posts";

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Posts</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Posts />
        </Content>
      </Container>
    );
  }
}
