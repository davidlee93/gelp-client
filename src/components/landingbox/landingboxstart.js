import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./landingbox.css";

const StyledLink = styled(Link)`
  color: dodgerblue;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default class LandingBoxStart extends React.Component {
  render() {
    return (
      <div className="landingBox">
        <h2>Getting Started</h2>
        <p>
          Come give us a try - just{" "}
          <StyledLink to={`/signup`}>Sign up</StyledLink> and start exploring!
          Already on Gelp or want to try a demo? Click{" "}
          <StyledLink to={`/login`}>Here</StyledLink>
        </p>
      </div>
    );
  }
}
