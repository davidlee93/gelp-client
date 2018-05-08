import React from 'react';
import './search-bar.css';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: 'test',
            location: ''
        }
    };

    onLocationSubmit() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.spot}key=AIzaSyDqCUlkl2tTiCdR4VesmoMW47j7mLRTbhM`)
        .then((result)=> {
            this.setState({location: `${result.location.lat},${result.location.lng}`});
            console.log("state", this.state.location);
        })
    }
    // initMap() {
    //     // paint map
    // }
    // componentDidMount() {
    //     this.initMap()
    // }
    
    // fetch google search api 
    
    render() {
        return (
                <form className='search-form'>
                    <div className="search-div">
                        <div className="find-div">
                            <label for="find"><strong>Find</strong></label>
                            <input type="text" name='find' id='location' className="search keyword border-right" placeholder="sushi, burritos, ayce kbbq..."/>
                        </div>
                        <div className="near-div">
                            <label for="location"><strong>Near</strong></label>
                            <input type="text" name='location' id='location'  className="location" placeholder="address, city, state or zip" onChange={e => this.props.onChange(e.target.value)}/>
                        </div>
                    </div>
                    <button type='submit' className="search-button" onClick={this.onLocationSubmit}>Search</button>
                </form>
        );
    }
}
/* <button className="btn active" onclick="filterSelection('all')"> $</button>
<button disabled={!this.state.keyword && !this.state.location}>submit</button> */