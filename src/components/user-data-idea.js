/*
fetchUserData() {
    fetch('/user/data')
    .then(response => response.json())
    .then(json => fetchUserDataSuccess(json.user))
    .catch(error => fetchUserDataError())    
}

fetchUserDataSuccess(user) {
    return {
        type: 'FETCH_USER_DATA_SUCCESS',
        payload: user.hobbies
    }
}

const initialState = {
    user: {
        token: 'asdfaf', 
        hobbies: 'baseball'
    }
}

export const userReducer = (state=initialState, action) => {
    if (action.type === 'FETCH_USER_LOGIN_SUCCESS') {
        return Object.assign({}, state, {token: action.payload})
    } else if (action.type === 'FETCH_USER_INFO_SUCCESS') {
        return Object.assign({}, state, {hobbies: action.payload})
    }
    return state;
};

RATINGS DATA PARTIAL WORK
REDUCE METHOD 
//
const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
OR
let sum = data.reduce((acc, val) => {
  return val.country == 'China' ? acc : acc + val.pop;
}, 0);
//

  {q: 7},
  {q: 18}
  25/2
  let quality = 0
  let price  = 0
  for (i = 0; i < ratings.length; i++) {
    quality += ratings[i].quality
    price += ratings[i].price  
  }

    const total = quality / ratings.length

  const rating = {quality: ratings[0] + ratings[1] / 2} || {};

 const avgQuantity = ratings.reduce((quantity, rating, index, array) => {
    quantity += rating.quantity;
    if (index === array.length - 1) {
      return quantity / array.length;
    } else {
      return quantity;
    }
  }, 0);
  const avgQuality = ratings.reduce((quality, rating, index, array) => {
    quality += rating.quality;
    if (index === array.length - 1) {
      return quality / array.length;
    } else {
      return quality;
    }
  }, 0);
  const avgPricing = ratings.reduce((pricing, rating, index, array) => {
    pricing += rating.pricing;
    if (index === array.length - 1) {
      return pricing / array.length;
    } else {
      return pricing;
    }
  }, 0);
  const avgRating = ((avgQuantity + avgQuality + avgPricing) / 3).toFixed(1);

*/
// placeIds = ['1234', '12341']
// const places = placeIds.map(place => {
//     return `places[]=${placeId}`
// })

// reqeust = `findings?${places.join('&')}`

import React from "react";

export class SearchResultsRatings extends React.Component {
  state = {
    ratings: this.props,
    avgRating: null
  };

  componentDidMount() {
    const { info } = this.props;
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.info !== nextProps.info) {
      this.setState({
        info: nextProps.info
      });
      if (this.state.info) {
        const avgRating = (
          (this.state.info.avgQuantity +
            this.state.info.avgQuality +
            this.state.info.avgPricing) /
          3
        ).toFixed(1);
        this.setState({ avgRating });
      }
    }
  }
  render() {
    return (
      <div className="info-place-ratings">
        <h5>
          Rating:{" "}
          {(this.state.info &&
            (
              (this.state.info.avgQuantity +
                this.state.info.avgQuality +
                this.state.info.avgPricing) /
              3
            ).toFixed(1)) ||
            this.props.info.rating}
        </h5>
        <ul className="info-place-ratings-list">
          <li>
            Quantity:{" "}
            {(this.state.info && this.state.info.avgQuantity.toFixed(1)) ||
              Math.floor(Math.random() * 5) + 1}
          </li>
          <li>
            Quality:{" "}
            {(this.state.info && this.state.info.avgQuality.toFixed(1)) ||
              Math.floor(Math.random() * 5) + 1}
          </li>
          <li>
            Pricing:{" "}
            {(this.state.info && this.state.info.avgPricing.toFixed(1)) ||
              Math.floor(Math.random() * 5) + 1}
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchResultsRatings;
