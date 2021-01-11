/* eslint-disable import/no-extraneous-dependencies */
const SW_API_URL = 'https://swapi.dev/';

module.exports = {
  target: 'serverless',
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        destination: `${SW_API_URL}:path*`,
      },
    ];
  },
};
