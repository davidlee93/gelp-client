import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";
import { loadAuthToken } from "./local-storage";
import authReducer from "./reducers/auth";
import protectedDataReducer from "./reducers/protected-data";
import searchReducer from "./reducers/search";
// import throttle from 'lodash/throttle';
import { setAuthToken, refreshAuthToken } from "./actions/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    search: searchReducer
  }),
  composeEnhancers(applyMiddleware(thunk), persistState(["search"], "redux"))
);

//hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
