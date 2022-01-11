import React from "react";
import styled from "styled-components";
const Cards = ({
  name,
  capital,
  region,
  subRegion,
  borders,
  language,
  population,
  flag,
}) => {
  return (
    <div>
      <Container>
        <Image>
          <img src={flag} alt="" />
        </Image>
        <Info>
          <p>
            <left> Name:</left> <span> {name}</span>
          </p>
          <p>
            <left> Capital:</left> <span> {capital}</span>
          </p>
          <p>
            <left> Region:</left> <span> {region}</span>
          </p>
          <p>
            <left>Sub-Region: </left>
            <span>{subRegion}</span>
          </p>
          <p>
            <left> Population: </left>
            <span>{population}</span>
          </p>
          {/* <p>
            <left> Boreds with:</left> <span> {borders}</span>
          </p> */}
          <p>
            <left> Language:</left> <span> {language}</span>
          </p>
        </Info>
      </Container>
    </div>
  );
};

export default Cards;

const Container = styled.div`
  background: white;
  height: auto;
  border: 2px solid rgb(239, 239, 239);
  margin: 7px;
  ${"" /* border-radius: 15px; */}
  ${"" /* max-width: 400px; */}
  width: 225px;
  background: rgb(252, 252, 252);
  box-shadow: 0 0 8px grey;
  img {
    ${"" /* border-radius: 12px; */}
    margin-bottom: 5px;
    width: 100%;
    height: 170px;
    object-fit: cover;
    @media (max-width: 512px) {
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: 512px) {
    width: 100%;
  }
`;
const Image = styled.div`
  width: 100%;
  height: 170px;
`;

const Info = styled.div`
  padding: 15px;
  p {
    display: flex;
    justify-content: space-between;
    padding: 3px 0;
  }
  span {
    color: blue;
  }
`;
