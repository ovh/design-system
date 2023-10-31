module.exports = {
  launch: {
    headless: true,
  },
  server: {
    command: 'yarn start',
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
};
