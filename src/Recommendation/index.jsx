import React from "react";
import styled from "styled-components";

const Recommendation = styled.section`
  padding: 1rem .5rem;

  @media (min-width: 48rem) {
    padding: 0;
    padding-top: 1.5rem;
  }
`;

const Title = styled.div`
  padding-bottom: .5rem;
  display: inline-block;
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;

  border-bottom: 1px solid #171717;

  @media (min-width: 48rem) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const RecommendationProduct = styled.a`
  display: block;

  text-decoration: none;

  @media (min-width: 48rem) {
    flex-basis: 11rem;
    margin-bottom: 0;
  }
`;

const ProductPhoto = styled.img`
  margin: 0;
  display: block;
  width: 100%;

  @media (min-width: 48rem) {
    height: auto;
    vertical-align: middle;
  }
`;

const ProductTitle = styled.h3`
  margin: .5rem 0;

  font-family: 'Lora', Helvetica, Arial, serif;
  font-size: 1rem;
  line-height: 1.19;
  font-weight: 400;
  color: #171717;

  @media (min-width: 48rem) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const ProductPrice = styled.h5`
  margin: 0 0 2rem;

  font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
  font-size: .75rem;
  line-height: 1.17;
  color: #999;

  @media (min-width: 48rem) {
    margin: 0;

    font-family: 'Raleway', 'Helvetica Neue', 'Arial', sans-serif;
    font-size: .75rem;
    line-height: 1.17;
    color: #999;
  }
`;

export default props =>
  <Recommendation>
    <div className="container">
      <Title>We recommend</Title>
      <div className="row">
        {props.recommendations.map(function(recommendation, key) {
          return (
            <div className="col-xs-6 col-md-3">
              <RecommendationProduct key={key}>
                <ProductPhoto
                  src={recommendation.src}
                  alt={recommendation.title}
                />
                <ProductTitle>
                  {recommendation.title}
                </ProductTitle>
                <ProductPrice>
                  {recommendation.price}
                </ProductPrice>
              </RecommendationProduct>
            </div>
          );
        })}
      </div>
    </div>
  </Recommendation>;
