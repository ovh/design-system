const  { spawnSync } = require('child_process');
const path = require('path');
const { version: libVersion } = require (path.resolve(process.cwd(), 'lerna.json'));

module.exports = function (plop) {
  const componentsBaseDirName = 'components';
  const componentsPath = `${process.cwd()}/packages/ods-react/src`;
  const storybookPath = `${process.cwd()}/packages/storybook`;

  plop.setActionType('yarn-install', function() {
    spawnSync('yarn', []);
  });

  plop.setHelper('prefix-join', function(prefix, text) {
    return prefix ? `${prefix}-${text}` : text;
  });

  plop.setHelper('suffix-join', function(suffix, text) {
    return suffix ? `${text}-${suffix}` : text;
  });

  plop.setPartial('component-name', '{{ prefix-join prefix name }}');
  plop.setPartial('ComponentName', '{{ pascalCase (prefix-join prefix name) }}');
  plop.setPartial('COMPONENT_NAME', '{{ constantCase (prefix-join prefix name) }}');

  plop.setGenerator('component', {
    description: 'New component',
    prompts: [
      // TODO put back if we finally want to expose namespaced components
      // {
      //   type: 'list',
      //   name: 'prefix',
      //   message: 'Which kind of component do you want to create?',
      //   choices: [
      //     { name: 'ODS component (<ods-___>)', value: '' },
      //     { name: 'OVH component (<ods-ovh-___>)', value: 'ovh' },
      //   ],
      // },
      {
        type: 'input',
        name: 'name',
        message: 'Type the component name using kebab-case, without any "ods-" prefix (ex: text, search-bar, ...):',
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return 'Component name is required';
        },
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
        destination: `${componentsPath}/{{ suffix-join prefix "${componentsBaseDirName}" }}/{{name}}`,
        data: {
          'component-version': libVersion,
        },
      },
      // --- Add the component to the export list
      {
        type: 'append',
        path: `${componentsPath}/{{ suffix-join prefix "${componentsBaseDirName}" }}/index.ts`,
        template: "export * from './{{name}}/src';",
      },
      // --- Add the component storybook files
      {
        type: 'addMany',
        base: 'templates/storybook',
        templateFiles: 'templates/storybook/**/*',
        stripExtensions: ['hbs'],
        globOptions: { dot: true },
        destination: `${storybookPath}/stories/{{ suffix-join prefix "${componentsBaseDirName}" }}/{{name}}`,
      },
      // --- Link the new package to the workspace
      {
        type: 'yarn-install',
      },
    ],
  });
};
