#! /usr/bin/env node

const { toJSON } = require('cssjson');
const fs = require('fs').promises;
const path = require('path');

/**
 * Resolves CSS variable references (var()) and calc() expressions to their actual values
 */
function resolveTokenValues(tokens) {
  const resolved = { ...tokens };
  const maxIterations = 10; // Prevent infinite loops
  
  for (let iteration = 0; iteration < maxIterations; iteration++) {
    let hasUnresolved = false;
    
    for (const [key, value] of Object.entries(resolved)) {
      if (typeof value !== 'string') continue;
      
      const varMatches = value.match(/var\(([^)]+)\)/g);
      if (varMatches) {
        let resolvedValue = value;
        
        for (const varMatch of varMatches) {
          const varName = varMatch.match(/var\(([^)]+)\)/)[1].trim();
          const referencedValue = resolved[varName];
          
          if (referencedValue && !referencedValue.includes('var(')) {
            resolvedValue = resolvedValue.replace(varMatch, referencedValue);
          } else {
            hasUnresolved = true;
          }
        }
        
        resolved[key] = resolvedValue;
      }
      
      if (resolved[key].includes('calc(')) {
        const calcMatch = resolved[key].match(/calc\(([^)]+)\)/);
        if (calcMatch) {
          const expression = calcMatch[1];
          
          // Simple evaluation for expressions like "8px / 2"
          const simpleCalc = expression.match(/^(\d+(?:\.\d+)?)(px|rem|em|%)\s*\/\s*(\d+(?:\.\d+)?)$/);
          if (simpleCalc) {
            const value = parseFloat(simpleCalc[1]);
            const unit = simpleCalc[2];
            const divisor = parseFloat(simpleCalc[3]);
            const result = value / divisor;
            resolved[key] = resolved[key].replace(calcMatch[0], `${result}${unit}`);
          }
        }
      }
    }
    
    if (!hasUnresolved) break;
  }
  
  return resolved;
}

async function getTokens(theme) {
  try {
    const indexCSS = await fs.readFile(path.resolve(process.cwd(), 'dist', theme, 'index.css'), { encoding: 'utf-8' });
    const indexJSON = toJSON(indexCSS);
    const rawTokens = indexJSON.children[':root'].attributes;
    const resolvedTokens = resolveTokenValues(rawTokens);

    return {
      root: resolvedTokens,
    };
  } catch(error) {
    console.error('Something went wrong while getting design tokens', error);
  }
}

async function writeOutput(tokens, outputFile) {
  try {
    await fs.writeFile(outputFile, JSON.stringify(tokens), 'utf8');
  } catch(error) {
    console.error('Something went wrong while writing the versions file', error);
  }
}

(async function main() {
  try {
    await fs.access(path.resolve(process.cwd(), 'dist'));
  } catch(error) {
    console.error(`${path.resolve(process.cwd(), 'dist')} does not exists, please run "yarn build:prod" command.`);
    return;
  }

  try {
    const { ODS_THEMES } = require(path.resolve(process.cwd(), 'dist', 'index'));

    await Promise.all(ODS_THEMES.map(async (theme) => {
      const tokens = await getTokens(theme);
      return writeOutput(tokens, path.resolve(process.cwd(), 'dist', theme, 'tokens.json'));
    }));
  } catch(error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
