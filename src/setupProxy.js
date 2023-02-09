const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/rest',
    createProxyMiddleware({
      target: 'https://api.n2yo.com',
      changeOrigin: true,
    })
  );
};
