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

*/