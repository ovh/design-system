var packageJson = require('../package.json');
const fs = require('fs');
console.log('writing version into version.js files...', {version: packageJson.version});

['./dist/esm/version.d.ts', './dist/esm/version.js', './dist/cjs/version.d.ts', './dist/cjs/version.js']
  .forEach((file) =>
    fs.readFile(file, 'utf8', function(err, data) {

      if (err) {
        return console.log(err);
      }

      const formatted = data.replace(/{{{VERSION}}}/g, packageJson.version);

      fs.writeFile(file, formatted, 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
      });
    }),
  );
