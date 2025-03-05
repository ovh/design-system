// TODO diff CI/local
export default {
  launch: {
    headless: false,// process.env.HEADLESS !== "false",
    slowMo: 300,//process.env.SLOWMO ? parseInt(process.env.SLOWMO, 10) : 0,
    // devtools: process.env.DEVTOOLS === "true",
    product: 'chrome',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // "--disable-dev-shm-usage",
      // "--disable-accelerated-2d-canvas",
      // "--disable-gpu",
      // "--window-size=1920,1080",
      '--font-render-hinting=none',
      '--remote-debugging-port=21222',
    ],
  },
};
