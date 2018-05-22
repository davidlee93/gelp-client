import {
  SET_KEYWORD,
  SET_NEAR,
  SET_LOCATION,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SET_PLACE_ID,
  SET_DETAIL_INFO
} from "../actions/search";

const initialState = {
  keyword: "",
  near: "",
  location: "",
  id: "",
  placeInfo: "",
  findings: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_KEYWORD) {
    return Object.assign({}, state, {
      keyword: action.keyword
    });
  } else if (action.type === SET_NEAR) {
    return Object.assign({}, state, {
      near: action.near
    });
  } else if (action.type === SET_LOCATION) {
    return Object.assign({}, state, {
      location: action.location
    });
  } else if (action.type === SET_PLACE_ID) {
    return Object.assign({}, state, {
      id: action.id
    });
  } else if (action.type === SET_DETAIL_INFO) {
    return Object.assign({}, state, {
      placeInfo: action.placeInfo
    });
  } else if (action.type === SEARCH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === SEARCH_SUCCESS) {
    return Object.assign({}, state, {
      findings: action.findings,
      loading: false,
      error: null
    });
  } else if (action.type === SEARCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
}
