import React from "react";
import styled from "styled-components";
import PublicIcon from "@material-ui/icons/Public";
const Header = () => {
  return (
    <div>
      <Container>
        <PublicIcon style={{ fontSize: "60px" }} />
        <p>Countries in Asia</p>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  color: rgb(107, 232, 65);
  background-color: rgb(25, 118, 210);
  box-shadow: 0px 1px 4px grey;
  p {
    font-size: 40px;
  }
`;
