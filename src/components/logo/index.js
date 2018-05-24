import React from "react";
import "./logo.css";

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <a href="/search" className="header-link">
          <img src="../gelp-logo-blue.png" className="header-logo" alt="logo" />
        </a>
      </div>
    );
  }
}
