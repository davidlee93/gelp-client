import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { searchSuccess } from "../../actions/search";
import SearchResultResult from "../search-results-result";
import Spinner from "react-spinkit";
import "./search-results.css";

export class SearchResults extends React.Component {
  state = {
    findings: null,
    location: null
  };
  componentDidMount() {
    const google = window.google;

    var map;
    var service;
    var infowindow = new google.maps.InfoWindow();

    var latLng = this.props.location;
    var near = new google.maps.LatLng(latLng);
    var find = this.props.keyword;
    map = new google.maps.Map(document.getElementById("map"), {
      center: near,
      zoom: 11
    });
    var request = {
      location: near,
      keyword: find,
      radius: "8500",
      type: ["restaurant"]
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, this.callback);
    service.nearbySearch(request, createMarker);

    function createMarker(place) {
      for (var i = 0; i < place.length; i++) {
        var placeLoc = place[i].geometry.location;
        var content = `<div><h3>${place[i].name}</h3></div>
                    <div>${place[i].vicinity}</div>
                    <br>
                    <div>Open now: ${
                      place[i].opening_hours.open_now ? "Yes" : "No"
                    }</div>`;
        var marker = new google.maps.Marker({
          map: map,
          position: placeLoc,
          info: content
        });

        google.maps.event.addListener(marker, "click", function() {
          infowindow.setContent(this.info);
          infowindow.open(map, this);
        });
      }
    }
  }

  callback = (results, status) => {
    this.props.dispatch(searchSuccess(results));
  };

  renderResults() {
    if (this.props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }
    const { findings } = this.props;

    return <SearchResultResult findings={findings} />;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.findings !== nextProps.findings) {
      this.setState({
        findings: nextProps.findings,
        location: nextProps.location
      });
    }

    if (
      this.props.keyword !== nextProps.keyword ||
      this.props.location !== nextProps.location
    ) {
      const google = window.google;
      var map;
      var service;
      var infowindow = new google.maps.InfoWindow();

      var latLng = nextProps.location;
      var near = new google.maps.LatLng(latLng);
      var find = nextProps.keyword;
      map = new google.maps.Map(document.getElementById("map"), {
        center: near,
        zoom: 11
      });
      var request = {
        location: near,
        keyword: find,
        radius: "8500",
        type: ["restaurant"]
      };

      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, this.callback);
      service.nearbySearch(request, createMarker);

      function createMarker(place) {
        for (var i = 0; i < place.length; i++) {
          var placeLoc = place[i].geometry.location;
          var content = `<div><h3>${place[i].name}</h3></div>
                    <div>${place[i].vicinity}</div>
                    <br>
                    <div>Open now: ${
                      place[i].opening_hours.open_now ? "Yes" : "No"
                    }</div>`;
          var marker = new google.maps.Marker({
            map: map,
            position: placeLoc,
            info: content
          });

          google.maps.event.addListener(marker, "click", function() {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
          });
        }
      }
    }
  }

  render() {
    if (!this.props.findings) {
      return false;
    }
    return <ul className="search-results-list">{this.renderResults()}</ul>;
  }
}

const mapStateToProps = state => ({
  keyword: state.search.keyword,
  location: state.search.location,
  findings: state.search.findings
});
export default withRouter(connect(mapStateToProps)(SearchResults));
