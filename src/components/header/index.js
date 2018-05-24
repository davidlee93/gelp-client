import React from "react";
import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-box">
        <div className="header-title-box">
          <a href="/search" className="header-title-link">
            <img
              src="./gelp-logo-blue.png"
              alt="logo"
              className="header-title"
            />
          </a>
        </div>
      </header>
    );
  }
}
