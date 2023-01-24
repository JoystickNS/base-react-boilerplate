/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

module.exports = {
  plugins: [postcssPresetEnv(), cssnano()],
};
