import React from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-bottom: 2rem;
  display: text;

  font-family: 'Lora', Helvetica, Arial, serif;
  font-size: .875rem;
  text-align: left;
  line-height: 1.5rem;

  @media (min-width: 48rem) {
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  padding: 0;
  margin: 0;

  list-style: none;
  @media (min-width: 48rem) {
    margin-bottom: 0;
  }
`;

const List = Text.withComponent("ul");

const ListItem = List.withComponent("li");

export default function(props) {
  if (props.list && props.texts) {
    var list = props.list.map(function(item, key) {
      return (
        <ListItem key={key}>
          {item}
        </ListItem>
      );
    });
    var text = props.texts.map(function(text, key) {
      return (
        <Text key={key}>
          {text}
        </Text>
      );
    });
  }

  return (
    <Content>
      {text}
      <br />
      <List>
        {list}
      </List>
    </Content>
  );
}
