import React from "react";
import { connect } from "react-redux";
import { setDetailInfo, setPlaceId } from "../../actions/search";
import { API_BASE_URL } from "../../config";
import PlaceDetailInfo from "../place-detail-info";
import PlaceReviews from "../place-reviews";
import "./place-detail.css";

export class PlaceDetail extends React.Component {
  state = {
    photos: false,
    ratings: []
  };
  fetchMapSetPhotos = (placeInfo, place_id) => {
    const google = window.google;
    let infowindow = new google.maps.InfoWindow();
    const latLng = {
      lat:
        typeof placeInfo.geometry.location.lat === "function"
          ? placeInfo.geometry.location.lat()
          : placeInfo.geometry.location.lat,
      lng:
        typeof placeInfo.geometry.location.lng === "function"
          ? placeInfo.geometry.location.lng()
          : placeInfo.geometry.location.lng
    };

    const near = new google.maps.LatLng(latLng);
    let map = document.getElementById("map");
    map = new google.maps.Map(document.getElementById("map"), {
      center: near,
      zoom: 12
    });

    const placesService = new google.maps.places.PlacesService(map);
    placesService.getDetails(
      {
        placeId: place_id
      },
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          let marker = new google.maps.Marker({
            map: map,
            position: placeInfo.geometry.location
          });
          google.maps.event.addListener(marker, "mouseover", function() {
            infowindow.setContent(
              "<div><strong>" +
                place.name +
                "</strong><br>" +
                "Rating: " +
                place.rating +
                "<br>" +
                place.formatted_address.replace(", USA", "") +
                "<br>" +
                "Telephone: " +
                place.formatted_phone_number +
                "</div>"
            );
            infowindow.open(map, this);
          });
          // this.setState({ photos: place.photos });
        }
      }
    );
  };

  callback = (place, status) => {
    const google = window.google;
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.props.dispatch(setDetailInfo(place));
      this.setState({ photos: place.photos });
      fetch(`${API_BASE_URL}/ratings/place/${place.place_id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(ratings => this.setState({ ratings }))
        .catch(error => console.log(error));
    }
  };

  componentDidMount() {
    this.props.dispatch(setPlaceId(this.props.place_id));
    const id = this.props.place_id;
    const google = window.google;

    var map = document.getElementById("map");
    var service = new google.maps.places.PlacesService(map);

    service.getDetails(
      {
        placeId: id
      },
      this.callback
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.placeInfo !== nextProps.placeInfo) {
      this.fetchMapSetPhotos(nextProps.placeInfo, nextProps.place_id);
    }
  }

  render() {
    const { placeInfo } = this.props;
    const { photos } = this.state;
    const { ratings } = this.state;
    placeInfo.urls = photos;
    return (
      <div className="place-result-container">
        <div className="place-result">
          <PlaceDetailInfo placeInfo={placeInfo} ratings={ratings} />
          <div className="place-result-reviews-box">
            <PlaceReviews ratings={ratings} />
          </div>
        </div>]
      </div>
    );
  }
}

const mapStateToProps = state => ({
  placeInfo: state.search.placeInfo
});
export default connect(mapStateToProps)(PlaceDetail);

// renderResult() {
//   const { placeInfo } = this.props;
//   const { photos } = this.state;
//   const { ratings } = this.state;
//   placeInfo.urls = photos;
//   return (
//     <div className="place-result">
//       <PlaceDetailInfo placeInfo={placeInfo} ratings={ratings} />
//       <div className="place-result-reviews-box">
//         <PlaceReviews ratings={ratings} />
//       </div>
//     </div>
//   );
// }

// render() {
//   return <div className="place-result-container">{this.renderResult()}</div>;
// }

//       OR
//
// render() {
//   const { placeInfo } = this.props;
//   const { photos } = this.state;
//   const { ratings } = this.state;
//   placeInfo.urls = photos;
//   return (
//     <div className="place-result-container">
//       <div className="place-result">
//         <PlaceDetailInfo placeInfo={placeInfo} ratings={ratings} />
//         <div className="place-result-reviews-box">
//           <PlaceReviews ratings={ratings} />
//         </div>
//       </div>]
//     </div>
//   );
// }
