import {
    SET_KEYWORD,
    SET_LOCATION,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_ERROR
} from '../actions/search';

const initialState = {
    keyword: '',
    location: '',
    findings: [],
    loading: false,
    error: null
};

export default function reducer(state=initialState, action) {
    if (action.type === SET_KEYWORD){
        return Object.assign({}, state, {
            keyword: action.keyword
        });
    }
    else if (action.type === SET_LOCATION){
        return Object.assign({}, state, {
            location: action.location
        });
    }   

    else if (action.type === SEARCH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === SEARCH_SUCCESS) {
        return Object.assign({}, state, {
            findings: action.findings,
            loading: false,
            error: null
        });
    }      
    else if (action.type === SEARCH_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}
