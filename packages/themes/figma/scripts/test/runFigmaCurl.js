const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');

const outputDirectory = path.join(__dirname, 'output');

const createDirectory = async (directoryPath) => {
  try {
    if (!await fs.access(directoryPath).catch(() => false)) {
      await fs.mkdir(directoryPath, { recursive: true });
    }
  } catch (err) {
    console.error('Error creating directory:', err);
  }
};

const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toISOString().replace(/:/g, '-').split('.')[0];
};

const runCurlCommand = async () => {
  const timestamp = getCurrentTimestamp();
  const outputDirectoryWithTimestamp = path.join(outputDirectory, timestamp);
  await createDirectory(outputDirectoryWithTimestamp);

  const outputPathLocal = path.join(outputDirectoryWithTimestamp, 'local.json');
  const outputPathPublished = path.join(outputDirectoryWithTimestamp, 'published.json');

  // Execute the curl commands and save the output to the respective JSON files
  const curlCommandLocalVariables = `curl -H "X-FIGMA-TOKEN: XXX" "https://api.figma.com/v1/files/YYY/variables/local" > ${outputPathLocal}`;
  const curlCommandPublishedVariables = `curl -H "X-FIGMA-TOKEN: XXX" "https://api.figma.com/v1/files/YYY/variables/published" > ${outputPathPublished}`;

  exec(curlCommandLocalVariables, { stdio: 'inherit' }, (err) => {
    if (err) {
      console.error('Error running curl command for local variables:', err);
    } else {
      console.log(`Local variables saved to ${outputPathLocal}`);
    }
  });

  exec(curlCommandPublishedVariables, { stdio: 'inherit' }, (err) => {
    if (err) {
      console.error('Error running curl command for published variables:', err);
    } else {
      console.log(`Published variables saved to ${outputPathPublished}`);
    }
  });
};

runCurlCommand();
