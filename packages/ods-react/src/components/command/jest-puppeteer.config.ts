const isCI = !!process.env.CI;

export default {
  launch: {
    headless: isCI,
    slowMo: isCI ? 0 : 300,
    product: 'chrome',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
      '--font-render-hinting=none',
    ],
  },
};
