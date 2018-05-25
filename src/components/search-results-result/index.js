import React from "react";
import { Link } from "react-router-dom";
import FindingsImage from "../findings-image";
import SearchResultsRatings from "../search-results-ratings";
import SearchResultsInfo from "../search-results-info";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #0073bb;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchResultResult = ({ photos, findings }) => {
  const restaurants = findings.map((restaurant, index) => (
    <li className="search-results" key={index}>
      {findings && <FindingsImage info={restaurant} />}
      <div className="info">
        <div className="info-title">
          <span className="index">{index + 1}. </span>
          <h4>
            <StyledLink to={`place/${restaurant.place_id}`}>
              {restaurant.name}
            </StyledLink>
          </h4>
        </div>
        <div className="info-place">
          <SearchResultsRatings info={restaurant} />
          <SearchResultsInfo info={restaurant} />
        </div>
      </div>
    </li>
  ));
  return restaurants;
};

export default SearchResultResult;
