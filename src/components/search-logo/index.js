import React from "react";
import "./search-logo.css";

export default class SearchLogo extends React.Component {
  render() {
    return (
      <header>
        <div>
          <a href="/search" className="search-title-link">
            <img
              src="./gelp-logo-blue.png"
              alt="logo"
              className="search-title"
            />
          </a>
        </div>
      </header>
    );
  }
}
