const  { spawnSync } = require('child_process');
const path = require('path');
const { version: libVersion } = require (path.resolve(process.cwd(), 'lerna.json'));

module.exports = function (plop) {
  const componentsBaseDirName = 'components';
  const destinationPath = `${process.cwd()}/packages`;
  const packagePrefix = '@ovhcloud/ods';

  plop.setActionType('yarn-install', function() {
    spawnSync('yarn', []);
  });

  plop.setHelper('prefix-join', function(prefix, text) {
    return prefix ? `${prefix}-${text}` : text;
  });

  plop.setHelper('suffix-join', function(suffix, text) {
    return suffix ? `${text}-${suffix}` : text;
  });

  plop.setPartial('component-dir', `{{ suffix-join prefix "${componentsBaseDirName}" }}`);
  plop.setPartial('component-name', '{{ prefix-join prefix name }}');
  plop.setPartial('componentName', '{{ pascalCase (prefix-join prefix name) }}');

  plop.setGenerator('component', {
    description: 'New component',
    prompts: [{
      type: 'list',
      name: 'prefix',
      message: 'Which kind of component do you want to create?',
      choices: [
        { name: 'ODS component (<osds-___>)', value: '' },
        { name: 'OVH component (<osds-ovh-___>)', value: 'ovh' },
      ],
    }, {
      type: 'list',
      name: 'level',
      message: 'Which atomic stage your component is?',
      choices: ['quark', 'atom', 'molecule', 'meta', 'organism', 'layout', 'meta'],
    }, {
      type: 'input',
      name: 'name',
      message: 'Type the component name using kebab-case, without any "ods-" prefix (ex: text, search-bar, ...):',
      validate: function (value) {
        if (/.+/.test(value)) {
          return true;
        }
        return 'Component name is required';
      },
    }],
    actions: [{
      type: 'addMany',
      base: 'templates/component',
      templateFiles: 'templates/component/**/*',
      stripExtensions: ['hbs'],
      globOptions: { dot: true },
      destination: `${destinationPath}/{{ suffix-join prefix "${componentsBaseDirName}" }}/src/{{name}}`,
      data: {
        'component-version': libVersion,
      },
    }, {
      type: 'append',
      path: `${destinationPath}/{{ suffix-join prefix "${componentsBaseDirName}" }}/src/index.ts`,
      template: "export * from './{{name}}/src';",
    }, {
      type: 'addMany',
      base: 'templates/storybook',
      templateFiles: 'templates/storybook/**/*',
      stripExtensions: ['hbs'],
      globOptions: { dot: true },
      destination: `${destinationPath}/storybook/stories/{{ suffix-join prefix "${componentsBaseDirName}" }}/{{name}}`,
    }, {
      type: 'yarn-install',
    }],
  });
};
