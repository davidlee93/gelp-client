import {
  SET_KEYWORD,
  setKeyword,
  SET_NEAR,
  setNear,
  SET_LOCATION,
  setLocation,
  SEARCH_SUCCESS,
  searchSuccess,
  SET_PLACE_ID,
  setPlaceId,
  SET_DETAIL_INFO,
  setDetailInfo
} from "./search";

import { SET_AUTH_TOKEN, setAuthToken } from "./auth";

describe("setAuthToken", () => {
  it("Should return the action", () => {
    const token = "xbhbY3Bhb3jbJbhjxbhj3HB";
    const action = setAuthToken(token);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(token);
  });
});

describe("setKeyword", () => {
  it("Should return the action", () => {
    const keyword = "sushi";
    const action = setKeyword(keyword);
    expect(action.type).toEqual(SET_KEYWORD);
    expect(action.keyword).toEqual(keyword);
  });
});

describe("setnear", () => {
  it("Should return the action", () => {
    const near = "san francisco";
    const action = setNear(near);
    expect(action.type).toEqual(SET_NEAR);
    expect(action.near).toEqual(near);
  });
});

describe("setLocation", () => {
  it("Should return the action", () => {
    const location = { lat: -32.53325, lng: 82.25025 };
    const action = setLocation(location);
    expect(action.type).toEqual(SET_LOCATION);
    expect(action.location).toEqual(location);
  });
});

describe("searchSuccess", () => {
  it("Should return the action", () => {
    const findings = [
      { place_id: "12341234" },
      { place_id: "12341244" },
      { place_id: "12341254" }
    ];
    const action = searchSuccess(findings);
    expect(action.type).toEqual(SEARCH_SUCCESS);
    expect(action.findings).toEqual(findings);
  });
});

describe("setPlaceID", () => {
  it("Should return the action", () => {
    const id = "CH1HFDNS2EG4EWF";
    const action = setPlaceId(id);
    expect(action.type).toEqual(SET_PLACE_ID);
    expect(action.id).toEqual(id);
  });
});

describe("setDetailInfo", () => {
  it("Should return the action", () => {
    const placeInfo = {
      address: "fake address",
      place_id: "CH134gj54egnsg",
      rating: "4.2"
    };
    const action = setDetailInfo(placeInfo);
    expect(action.type).toEqual(SET_DETAIL_INFO);
    expect(action.placeInfo).toEqual(placeInfo);
  });
});
