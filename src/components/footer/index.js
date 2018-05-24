import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          {/* <p>Built by David Lee</p> */}
          <a
            href="https://github.com/davidlee93/gelp-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              id="github-icon"
              src="../../public/githubicon.jpeg"
              alt="github icon"
            />
          </a>
        </div>
      </footer>
    );
  }
}
