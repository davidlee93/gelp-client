const api_key = process.env.REACT_APP_WEBPACK_GOOGLE_API_KEY;
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "index.js",
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: "./index.html",

      // Pass the full url with the key!
      apiUrl: `https://maps.googleapis.com/maps/api/js?key=${api_key}&libraries=places`
    })
  ]
};
