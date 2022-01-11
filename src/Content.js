import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Replay";
import Cardcontainer from "./CardContainer";
const Content = () => {
  return (
    <div>
      <Container>
        <div className="exeption">
          <input
            type="text"
            name="search"
            placeholder="Asian Countries"
            readOnly
          />
          <button onClick={() => window.location.reload(false)}>
            {/* <p>Reload</p> */}
            <SearchIcon style={{ fontSize: "35px" }} />
          </button>
        </div>
        <Cardcontainer />
      </Container>
    </div>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  padding: 2vw;
  justify-center: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 80vw;
  ${"" /* background: rgb(242, 242, 242); */}
  input {
    margin: 5px;
    border: none;
    padding: 8px;
    box-shadow: 0 0 6px grey;
    width: 115px;
    font-size: 15px;
  }
  button {
    padding: 5px;
    background: none;
    font-size: 25px;
    border: none;
  }
  button:hover {
    color: rgb(107, 232, 65);
  }
`;
