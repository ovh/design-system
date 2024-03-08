const outputDirectory = '../figma/tokens/themes';
const themes = require('../tokens/themes/themes.json');
const fs = require("fs");
const path = require('path');
const suffix = 'ods';

let localVariablesData;
let publishedVariablesData;

const createDirectory = async (dirPath) => {
  await fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      throw err;
    }
  });
}

const getLatestJsons = async(directory) => {
  try {
    const absoluteDirectory = path.resolve(directory);
    const subdirectories = fs.readdirSync(absoluteDirectory);

    const timestampDirectories = subdirectories.filter(subdir =>
      /^\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}$/.test(subdir)
    );

    const sortedTimestampDirectories = timestampDirectories.sort((a, b) => b.localeCompare(a));

    if (sortedTimestampDirectories.length > 0) {
      const latestLocalJsonPath = path.join(absoluteDirectory, sortedTimestampDirectories[0], 'local.json');
      const latestPublishedJsonPath = path.join(absoluteDirectory, sortedTimestampDirectories[0], 'published.json');
      return { local: latestLocalJsonPath, published: latestPublishedJsonPath };
    } else {
      console.log('No timestamp directory found in output directory');
      return null;
    }
  } catch (error) {
    console.error('An error occurred while reading the directory :', error);
    return null;
  }
}

const getPublishedVariables = async (publishedVariables, localVariables) => {
  try {
    const matchingVariables = [];

    for (const localVariable of Object.values(localVariables.meta.variables)) {
      const { key: localKey, name: localName } = localVariable;

      const matchByKey = publishedVariables.meta.variables[localKey];
      const matchByName = Object.values(publishedVariables.meta.variables)
        .find((publishedVariable) => publishedVariable.name === localName);

      if (matchByKey || matchByName) {
        matchingVariables.push(localVariable);
      }
    }

    return matchingVariables;
  } catch (error) {
    console.error('An error occurred in getPublishedVariables:', error);
    throw error;
  }
}

const transformFigmaVariables = async (theme, matchingVariables) => {
  const transformedData = {};

  if (!matchingVariables) {
    console.error('Matching variables are undefined or null');
    return;
  }

  const variablesWithoutAlias = [];
  const variablesWithAlias = {};

  // Split variables with or without alias
  for (const localVariable of Object.values(matchingVariables)) {
    const { name, valuesByMode } = localVariable;
    const isNotVariableAlias = Object.values(valuesByMode).every(value => value.type !== 'VARIABLE_ALIAS');

    if (isNotVariableAlias) {
      variablesWithoutAlias.push(localVariable);
    } else {
      variablesWithAlias[name] = localVariable;
    }
  }

  // handle variables without an alias
  for (const localVariable of variablesWithoutAlias) {
    const { name, valuesByMode, variableCollectionId, resolvedType } = localVariable;
    const { defaultModeId } = localVariablesData.meta.variableCollections[variableCollectionId];
    const defaultModeValue = valuesByMode && valuesByMode[defaultModeId];

    for (const mode of Object.values(localVariablesData.meta.variableCollections[variableCollectionId].modes)) {
      const { modeId } = mode;
      const modeValue = valuesByMode && valuesByMode[modeId];

      if (resolvedType === 'COLOR') {
        const r = Math.round((modeValue || defaultModeValue).r * 255);
        const g = Math.round((modeValue || defaultModeValue).g * 255);
        const b = Math.round((modeValue || defaultModeValue).b * 255);
        const a = (modeValue || defaultModeValue).a;
        const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        transformedData[`${suffix}-${name.toLowerCase()}`] = {
          value: `${hexColor}`
        };
      } else if (resolvedType === 'FLOAT') {
        const remValue = `${modeValue || defaultModeValue}rem`;
        transformedData[`${suffix}-${name.toLowerCase()}`] = {
          value: remValue,
        };
      } else {
        transformedData[`${suffix}-${name.toLowerCase()}`] = {
          value: modeValue || defaultModeValue
        };
      }
    }
  }

  // handle variables with an alias
  for (const name in variablesWithAlias) {
    const localVariable = variablesWithAlias[name];
    const { valuesByMode } = localVariable;

    const formatAlias = async () => {
      for (const modeKey in valuesByMode) {
        const mode = valuesByMode[modeKey];
        if (mode.type === 'VARIABLE_ALIAS') {
          const aliasId = mode.id;
          const originalVariable = localVariablesData.meta.variables[aliasId];

          if (originalVariable) {
            const formattedValue = `$${suffix}-${originalVariable.name.toLowerCase().replace(/\/| /g, '-')}`;
            transformedData[`${suffix}-${name.toLowerCase()}`] = {
              value: formattedValue,
            };
          }
        }
      }
    }

    await formatAlias();
  }

  // Write the entire transformed data to a single JSON file
  const themePath = path.join(outputDirectory, theme);
  await createDirectory(themePath);
  const outputPath = path.join(themePath, 'transformedData.json');
  await writeFile(outputPath, JSON.stringify(transformedData));
}

const writeFile = async(fileName, data) => {
  fs.writeFile(fileName, data, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred while writing the file:', err);
      return;
    }
    console.log('JSON file has been written successfully');
  });
}

const processThemes = async() => {
  const latestJsonPaths = await getLatestJsons(path.join(__dirname, 'test/output'));

  if (latestJsonPaths) {
    localVariablesData = latestJsonPaths.local ? require(latestJsonPaths.local) : null;
    publishedVariablesData = latestJsonPaths.published ? require(latestJsonPaths.published) : null;

  } else {
    console.log('No JSON file found in output directory');
  }

  try {
    const matchingVariables = await getPublishedVariables(publishedVariablesData, localVariablesData);

    for (const theme of themes) {
      await transformFigmaVariables(theme, matchingVariables);
    }

    console.log('All themes processed successfully');
  } catch (error) {
    console.error('An error occurred during processing', error);
  }
}

processThemes();
