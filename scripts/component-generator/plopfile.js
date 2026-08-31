const fs = require('fs');
const  { spawnSync } = require('child_process');
const path = require('path');
const { version: libVersion } = require (path.resolve(process.cwd(), 'lerna.json'));

function capitalCase(text) {
  return text.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

module.exports = function (plop) {
  const componentsBaseDirName = 'components';
  const componentsPath = `${process.cwd()}/packages/ods-react/src`;
  const docsPath = `${process.cwd()}/packages/docs`;
  const navModelPath = `${docsPath}/src/nav/model.ts`;

  plop.setActionType('pnpm-install', function() {
    spawnSync('pnpm', ['install']);
  });

  // Insert the component line into the COMPONENT_PAGES list of the docs nav
  // model, keeping the list alphabetically sorted.
  plop.setActionType('add-nav-entry', function(answers) {
    const componentName = answers.prefix ? `${answers.prefix}-${answers.name}` : answers.name;
    const entry = `  ['${componentName}', '${capitalCase(componentName)}', 'new'],`;
    const lines = fs.readFileSync(navModelPath, 'utf8').split('\n');
    const listIndex = lines.findIndex((line) => line.startsWith('const COMPONENT_PAGES'));

    if (listIndex === -1) {
      throw new Error(`COMPONENT_PAGES not found in ${navModelPath}, please add the following line manually: ${entry.trim()}`);
    }

    let insertIndex = listIndex + 1;
    while (insertIndex < lines.length) {
      const [, key] = lines[insertIndex].match(/^ {2}\['([^']+)'/) || [];

      if (!key) {
        break;
      }
      if (key === componentName) {
        return `"${componentName}" is already listed in packages/docs/src/nav/model.ts`;
      }
      if (key > componentName) {
        break;
      }
      insertIndex++;
    }

    lines.splice(insertIndex, 0, entry);
    fs.writeFileSync(navModelPath, lines.join('\n'));
    return `added "${entry.trim()}" to packages/docs/src/nav/model.ts`;
  });

  plop.setHelper('prefix-join', function(prefix, text) {
    return prefix ? `${prefix}-${text}` : text;
  });

  plop.setHelper('suffix-join', function(suffix, text) {
    return suffix ? `${text}-${suffix}` : text;
  });

  plop.setHelper('capital-case', capitalCase);

  plop.setPartial('component-name', '{{ prefix-join prefix name }}');
  plop.setPartial('componentName', '{{ camelCase (prefix-join prefix name) }}');
  plop.setPartial('ComponentName', '{{ pascalCase (prefix-join prefix name) }}');
  plop.setPartial('COMPONENT_NAME', '{{ constantCase (prefix-join prefix name) }}');
  plop.setPartial('ComponentTitle', '{{ capital-case (prefix-join prefix name) }}');

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
        message: 'Type the component name using kebab-case, without any prefix (ex: text, search-bar, ...):',
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
      // --- Add the component stories to the docs app
      {
        type: 'add',
        path: `${docsPath}/stories/${componentsBaseDirName}/{{ prefix-join prefix name }}/{{ prefix-join prefix name }}.stories.tsx`,
        templateFile: 'templates/docs/stories.tsx.hbs',
      },
      // --- Add the component documentation page to the docs app
      {
        type: 'add',
        path: `${docsPath}/src/content/${componentsBaseDirName}/{{ prefix-join prefix name }}/documentation.mdx`,
        templateFile: 'templates/docs/documentation.mdx.hbs',
        data: {
          'starting-version': parseInt(libVersion, 10),
        },
      },
      // --- Add the component page to the docs nav
      {
        type: 'add-nav-entry',
      },
      // --- Link the new package to the workspace
      {
        type: 'pnpm-install',
      },
    ],
  });
};
