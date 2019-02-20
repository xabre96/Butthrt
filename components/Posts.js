import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

export default class Posts extends Component {
  render() {
    const posts = [
      {
        id: 1,
        image:
          "http://icanbecreative.com/resources/files/articles/40-high-resolution-wallpapers-for-minimalist-lovers/sources/everest-minimalist-wallpaper-blue.png",
        likes: 2,
        comments: [
          { id: 1, comment: "Nice :)", userId: 2 },
          { id: 2, comment: "Awesome!", userId: 3 }
        ],
        user: {
          id: 1,
          name: "Jane Doe",
          bio: "Artist | God's Princess",
          profilePicture: "http://i.pravatar.cc/300"
        }
      },
      {
        id: 2,
        image:
          "http://icanbecreative.com/resources/files/articles/40-high-resolution-wallpapers-for-minimalist-lovers/sources/giraffe-minimalist-wallpaper-orange.png",
        likes: 2,
        comments: [
          { id: 1, comment: "Nice :)", userId: 2 },
          { id: 2, comment: "Awesome!", userId: 3 }
        ],
        user: {
          id: 1,
          name: "Jane Doe",
          bio: "Artist | God's Princess",
          profilePicture: "http://i.pravatar.cc/300"
        }
      },
      {
        id: 3,
        image:
          "http://icanbecreative.com/resources/files/articles/40-high-resolution-wallpapers-for-minimalist-lovers/sources/banana-moon-minimalist-wallpaper-dark2.png",
        likes: 2,
        comments: [
          { id: 1, comment: "Nice :)", userId: 2 },
          { id: 2, comment: "Awesome!", userId: 3 }
        ],
        user: {
          id: 1,
          name: "Jane Doe",
          bio: "Artist | God's Princess",
          profilePicture: "http://i.pravatar.cc/300"
        }
      }
    ];

    return (
      <Container>
        <Content>
          {posts.map(post => (
            <Card key={post.id}>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: post.user.profilePicture }} />
                  <Body>
                    <Text>{post.user.name}</Text>
                    <Text note>{post.user.bio}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri: post.image
                  }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="person" />
                    <Text>{`${post.likes} Butthurts`}</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>{`${post.comments.length} Comments`}</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}
