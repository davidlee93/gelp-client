import React from 'react';
import {connect} from 'react-redux';
import {setDetailInfo, setPlaceId} from '../../actions/search';
import './place-detail.css';

export class PlaceDetail extends React.Component {
    componentDidMount(){
        this.props.dispatch(setPlaceId(this.props.place_id))
        const id = this.props.place_id;
        const google = window.google;
    
        var map = document.getElementById('map');
        var service = new google.maps.places.PlacesService(map);
    
        service.getDetails({
            placeId: id
        }, this.callback);
    }
    callback = (place, status) => {
        const google = window.google;
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            this.props.dispatch(setDetailInfo(place));
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.placeInfo !== nextProps.placeInfo) {
            const google = window.google;
            const id = nextProps.place_id;
            var infowindow = new google.maps.InfoWindow();
            var latLng = {lat: nextProps.placeInfo.geometry.location.lat(), lng: nextProps.placeInfo.geometry.location.lng()};
            var near = new google.maps.LatLng(latLng);
            var map = document.getElementById('map');
            map = new google.maps.Map(document.getElementById('map'), {
                center: near,
                zoom: 12
            });
            
            var placesService = new google.maps.places.PlacesService(map);
            placesService.getDetails({
                placeId: id
            }, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var marker = new google.maps.Marker({
                        map: map,
                        position: nextProps.placeInfo.geometry.location
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(
                        '<div><strong>' + place.name + '</strong><br>' +
                        'Rating: ' + place.rating + '<br>' +
                        place.formatted_address.replace(', USA', '') + '<br>' +
                        'Telephone: ' + place.formatted_phone_number + '</div>');
                    infowindow.open(map, this);
                    });
                }
            });            
        }
    }
    renderResult() {
        const info = this.props.placeInfo;
        const restaurant_detail =
            <div className="place-result-detail">
                <div className="place-result-left">
                    <div className="place-result-title">
                        <h2>{info.name}</h2>
                        <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyDqCUlkl2tTiCdR4VesmoMW47j7mLRTbhM" alt="place pict"/>
                    </div>
                    <div className="place-result-left-box">
                        <div className="place-result-left-ratings">
                            <h4>Rating: {info.rating}</h4>
                            <div className="place-result-review-button">
                                <button type="button" className="write-a-review-button">
                                    <a href={`/rate/${this.props.place_id}`}> Write a Review </a>
                                </button>
                            </div>
                        </div>
                        <div className="place-result-left-info">
                            <h4>Hours</h4>
                            <div className="hours">                                
                                {this.props.placeInfo && this.props.placeInfo.opening_hours && <HoursList hours={this.props.placeInfo.opening_hours}/>}                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="place-result-right">
                    <div className="place-result-map" id="map">MAP</div>
                    <div className="place-address">{info.formatted_address && info.formatted_address.replace(", USA", "")}</div>
                    <div className="place-number">{info.formatted_photo_number}</div>
                    <div className="place-website"><a href={info.website}>{info.website.split('//')[1]}</a></div>
                </div>
            </div>
        ;
        return (
            restaurant_detail
        );
    }
    render() {
        return(
            <div className="place-result">
                {this.renderResult()}
            </div>
        );
    }
}

const HoursList = (props) => {
    const {hours} = props
    const hoursList = hours.weekday_text.map((hour,index) =>
        <li key={index}>{hour}</li>
    );
    // const address = this.props.placeInfo.formatted_address.split(', ').pop.join(', ');
    // const website = this.props.placeInfo.website.split('//')[1];
    return <ul className="hours-list">{hoursList}</ul>

}

const mapStateToProps = state => ({
    keyword: state.search.keyword,
    near: state.search.near,
    location: state.search.location,
    id: state.search.id,
    placeInfo: state.search.placeInfo
});
export default connect(mapStateToProps)(PlaceDetail);
