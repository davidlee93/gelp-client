import React from "react";
import "./findings-images.css";

export class FindingsImage extends React.Component {
  state = {
    info: this.props.info
  };
  render() {
    if (!this.props.info) {
      return false;
    }
    const url = this.props.info.photos[0].getUrl({
      maxWidth: 250,
      maxHeight: 250
    });

    return (
      <div className="findings-image">
        {<img src={url} alt="icon" /> || (
          <img src={this.props.info.icon} alt="icon" />
        )}
      </div>
    );
  }
}

export default FindingsImage;
