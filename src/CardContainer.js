import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cards from "./Cards";

const CardContainer = ({ send }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v2/all";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const asia = data.filter((country) => country.region === "Asia");

  const searching = (a) => {
    a = send;
    console.log(a);

    asia = asia.filter((contry) => contry.name === a);
  };

  return (
    <div>
      <Container>
        {asia.map((country) => (
          <Cards
            key={country.alpha3Code}
            code={country.alpha3Code}
            name={country.name}
            capital={country.capital}
            language={country.languages[0].name}
            flag={country.flags.png}
            region={country.region}
            subRegion={country.subregion}
            population={country.population}
          />
        ))}
      </Container>
    </div>
  );
};

export default CardContainer;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-contents: center;
  width: 100%;
`;
