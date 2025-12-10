const  { spawnSync } = require('child_process');
const path = require('path');
const { version: libVersion } = require (path.resolve(process.cwd(), 'lerna.json'));

const IMPLEMENTATION = Object.freeze({
  cssModules: 'css-modules',
  tailwind: 'tailwind',
});

module.exports = function (plop) {
  const componentsPath = `${process.cwd()}/packages/ods-recipes/src/components`;

  plop.setActionType('end', function({ name }) {
    console.log(`=> Setup completed, you can start working on your recipe here: ${process.cwd()}/packages/ods-recipes/src/components/${name}`);
  });

  plop.setActionType('yarn-install', function() {
    spawnSync('yarn', []);
  });

  plop.setHelper('hasTailwindImplementation', function(sources) {
    return (sources || []).indexOf(IMPLEMENTATION.tailwind) > -1;
  });

  plop.setHelper('splitCaret', function(text) {
    return text.split('-').map((word) => word.replace(/^(.)/, (l) => l.toUpperCase())).join(' ');
  });

  plop.setPartial('component-name', '{{ name }}');
  plop.setPartial('ComponentName', '{{ pascalCase name }}');
  plop.setPartial('Component_Name', '{{ splitCaret name }}');

  plop.setGenerator('recipe', {
    description: 'New recipe',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Type the recipe name using kebab-case (ex: banner, location-tile, ...):',
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return 'Recipe name is required';
        },
      },
      {
        type: 'checkbox',
        name: 'sources',
        message: 'Select all the code version you want to implement:',
        choices: [
          { checked: true, disabled: true, name: '(S)CSS Modules (mandatory)', value: IMPLEMENTATION.cssModules },
          { name: 'Tailwind v3', value: IMPLEMENTATION.tailwind },
        ],
      },
    ],
    actions: [
      // --- Add the components files
      {
        type: 'addMany',
        base: 'templates/component',
        templateFiles: 'templates/component/**/*',
        stripExtensions: ['hbs'],
        globOptions: { dot: true },
        destination: `${componentsPath}/{{name}}`,
        data: {
          'component-version': libVersion,
        },
      },
      // --- Add default css-modules implementation
      {
        type: 'addMany',
        base: 'templates/component-implementation',
        templateFiles: 'templates/component-implementation/css-modules/**/*',
        stripExtensions: ['hbs'],
        globOptions: { dot: true },
        destination: `${componentsPath}/{{name}}/src`,
      },
      // --- Add tailwind implementation if selected
      {
        skip({ sources }) {
          if (!sources?.length || sources.indexOf(IMPLEMENTATION.tailwind) < 0) {
            return 'Skip tailwind implementation';
          }
        },
        type: 'addMany',
        base: 'templates/component-implementation',
        templateFiles: 'templates/component-implementation/tailwind/**/*',
        stripExtensions: ['hbs'],
        globOptions: { dot: true },
        destination: `${componentsPath}/{{name}}/src`,
      },
      // --- Add the component to the export list
      {
        type: 'append',
        path: `${componentsPath}/index.ts`,
        template: "export * from './{{name}}/src';",
      },
      // --- Link the new package to the workspace
      {
        type: 'yarn-install',
      },
      {
        type: 'end',
      },
    ],
  });
};
