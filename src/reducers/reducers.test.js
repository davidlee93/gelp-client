import reducer from "./search";
import {
  setKeyword,
  setNear,
  setLocation,
  searchSuccess,
  setPlaceId,
  setDetailInfo
} from "../actions/search";

describe("Reducer", () => {
  it("Should set the initial state when nothing is passed in", () => {
    const state = reducer(undefined, { type: "__UNKNOWN" });

    expect(state.keyword).toEqual("");
    expect(state.near).toEqual("");
    expect(state.location).toEqual("");
    expect(state.id).toEqual("");
    expect(state.placeInfo).toEqual({});
    expect(state.findings).toEqual([]);
  });

  it("Should return the current state on an unknown action", () => {
    let currentState = {};
    const state = reducer(currentState, { type: "__UNKNOWN" });
    expect(state).toBe(currentState);
  });

  describe("setKeyword", () => {
    it("Should set new keyword", () => {
      // Mess up the state a bit to simulate an existing game
      let state = {
        keyword: "sushi"
      };
      const keyword = "kbbq";
      state = reducer(state, setKeyword(keyword));
      expect(state.keyword).toEqual(keyword);
    });
  });

  describe("setLocation", () => {
    it("Should set new location", () => {
      // Mess up the state a bit to simulate an existing game
      let state = {
        location: { lat: "123.123", lng: "456.456" }
      };
      const location = { lat: "456.456", lng: "123.123" };
      state = reducer(state, setLocation(location));
      expect(state.location).toEqual(location);
    });
  });

  describe("setPlaceId", () => {
    it("Should set new id", () => {
      // Mess up the state a bit to simulate an existing game
      let state = {
        id: "B13212N3M123"
      };
      const id = "CH1SXKM6MSK23";
      state = reducer(state, setPlaceId(id));
      expect(state.id).toEqual(id);
    });
  });

  describe("setNear", () => {
    it("Should set new near", () => {
      // Mess up the state a bit to simulate an existing game
      let state = {
        near: "san francisco"
      };
      const near = "seattle";
      state = reducer(state, setNear(near));
      expect(state.near).toEqual(near);
    });
  });

  describe("searchSuccess", () => {
    it("Should set new findings", () => {
      // Mess up the state a bit to simulate an existing game
      let state = {
        findings: [
          { place_id: "12341234" },
          { place_id: "12341244" },
          { place_id: "12341254" }
        ]
      };
      const findings = [
        { place_id: "B12341234" },
        { place_id: "B12341244" },
        { place_id: "B12341254" }
      ];
      state = reducer(state, searchSuccess(findings));
      expect(state.findings).toEqual(findings);
    });
  });

  describe("setDetailInfo", () => {
    it("Should set new placeInfo", () => {
      // Mess up the state a bit to simulate an existing game
      let state = {
        address: "fake address",
        place_id: "CH134gj54egnsg",
        rating: "4.2"
      };
      const placeInfo = {
        address: "fake address 2",
        place_id: "CH134gj54egnsg B",
        rating: "4.2 B"
      };
      state = reducer(state, setDetailInfo(placeInfo));
      expect(state.placeInfo).toEqual(placeInfo);
    });
  });
});
