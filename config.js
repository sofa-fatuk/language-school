const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "styles/variable.scss";`,
  },
};
