import React from "react";

export default class PlacePhotos extends React.Component {
  state = { photos: this.props.photos, photosWithUrls: false };
  componentDidMount() {
    const photosUrls = this.state.photos.map(photo => {
      photo.url = photo.getUrl({ maxWidth: 250, maxHeight: 250 });
      return photo;
    });
    this.setState({ photos: photosUrls, photosWithUrls: true });
  }
  render() {
    if (!this.state.photosWithUrls) {
      return false;
    }
    const photos = this.state.photos.map((photo, index) => (
      <PlacePhoto photo={photo} key={index} />
    ));
    return <div className="place-images">{photos}</div>;
  }
}

const PlacePhoto = ({ photo }) => {
  return <img className="place-image" src={photo.url} alt="place pict" />;
};
