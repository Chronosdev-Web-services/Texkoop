const nextTranslate = require("next-translate");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };
module.exports = {
  ...nextTranslate(),
  devIndicators: {
    buildActivity: false,
  },
};
// module.exports = nextConfig;
