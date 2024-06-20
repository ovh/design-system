#! /usr/bin/env node

/**----------------------------------------------------------------------------
 * Due to an update on the CI docker container, wait-on does not work on CI anymore
 * This is an alternative attempt using node-fetch
 * Seems like it does not work either, but it delays the test run enough to be sure that the server is up
 * So it will be enough for now, until we move to a better solution
 * * --------------------------------------------------------------------------*/
const fetch = require('node-fetch');

function waitForHost(url, interval = 1000, attempts = 10) {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  let count = 1;

  return new Promise(async (resolve, reject) => {
    while (count < attempts) {
      await sleep(interval);

      try {
        const response = await fetch(url);

        if (response.ok) {
          if (response.status === 200) {
            resolve();
            break;
          }
        } else {
          count++;
        }
      } catch {
        count++;
        console.log(`Still down, trying ${count} of ${attempts}`);
      }
    }

    reject(new Error(`Server is down: ${count} attempts tried`));
  });
}

async function main(url) {
  console.log(`Checking if server is up: ${url}`);
  try {
    await waitForHost(url, 2000, 10);
    console.log(`Server is up: ${url}`);
  } catch (err) {
    console.log(err.message);
  }
}

if (!process.argv[2]) {
  console.error('No url arg passed to the command.')
} else {
  main(process.argv[2]);
}
