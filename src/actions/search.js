export const SET_KEYWORD = 'SET_KEYWORD';
export const setKeyword = keyword => ({
    type: SET_KEYWORD,
    keyword
});
export const SET_NEAR = 'SET_NEAR';
export const setNear = near => ({
    type: SET_NEAR,
    near
});

export const SET_LOCATION = 'SET_LOCATION';
export const setLocation = location => ({
    type: SET_LOCATION,
    location
});

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const searchRequest = () => ({
    type: SEARCH_REQUEST
});

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const searchSuccess = findings => ({
    type: SEARCH_SUCCESS,
    findings
});

export const SEARCH_ERROR = 'SEARCH_ERROR';
export const searchError = error => ({
    type: SEARCH_ERROR,
    error
});

export const SET_PLACE_ID = 'SET_PLACE_ID';
export const setPlaceId = id => ({
    type: SET_PLACE_ID,
    id
});

export const SET_DETAIL_INFO = 'SET_DETAIL_INFO';
export const setDetailInfo = placeInfo => ({
    type: SET_DETAIL_INFO,
    placeInfo
});

// export const searchInputs = (keyword, location) => dispatch => {
//     dispatch(searchRequest());
//     return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=8100&type=restaurant&keyword=${keyword}&key=AIzaSyDqCUlkl2tTiCdR4VesmoMW47j7mLRTbhM`)
//     .then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     }).then(data => dispatch(searchSuccess(data.results)))
//       .catch(error => dispatch(searchError(error)));
// };


