require("dotenv").config();
export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  "https://gelp-server.herokuapp.com/api" ||
  "http://localhost:8080/api";
export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || "";
