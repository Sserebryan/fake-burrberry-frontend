import React from "react";
import styled from "styled-components";

// <div class="product-info-title product-info-opened">
//           <button class="product-info-title-button" type="button">
//             <h2 class="product-info-title-text">Description</h2>
//           </button>
//         </div>
const Title = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 48rem) {
    margin-bottom: 1rem;
  }
`;

const Button = styled.button.attrs({ type: "button" })`
     padding: 0;

     background-color: transparent;
     border: none;
`;

const Text = styled.h2`
  margin: 0;

  font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.25;
  color: #171717;
`;

export default props =>
  <Title>
    <Button>
      <Text>
        {props.title}
      </Text>
    </Button>
  </Title>;
