const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "main.js",
  },
  mode: "production",
};
