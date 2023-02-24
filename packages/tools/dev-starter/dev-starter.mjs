import execa from 'execa';
import inquirer from 'inquirer';
import concurrently from 'concurrently';

const NONE = 'none';
const ALL = 'all';
const STORYBOOK = '@ovhcloud/ods-storybook';
const YARN_WORKSPACE_CMD = 'yarn workspace';
const COMPONENT_RUN_CMD = 'watch';
const LIBRARY_RUN_CMD = 'watch';
const STORYBOOK_RUN_CMD = 'start:quiet';
const commonChoices = [
  {
    name: 'Nope!',
    value: NONE,
  },
  {
    name: 'All!',
    value: ALL,
  },
];
const isComponentsPath = /\/components\//;
const isLibraryPath = /\/libraries\//;
const workspaces = [];
const questions = [];
const components = [];
const libraries = [];

try {
  const result = execa.sync('yarn', ['workspaces', 'list', '--json']);

  workspaces.push(...JSON.parse(`[${result.stdout.replace(/\n/g, ',')}]`));
  workspaces.forEach(workspace => {
    if (isComponentsPath.test(workspace.location)) {
      components.push({
        name: workspace.name,
        value: workspace.name,
      });
    } else if (isLibraryPath.test(workspace.location)) {
      libraries.push(
        {
          name: workspace.name,
          value: workspace.name,
        },
      );
    }
  });

} catch (error) {
  console.error(error);
}

if (components.length) {
  questions.push({
    type: 'list',
    name: 'componentName',
    message: 'Do you want to start the development of a component?',
    choices: [
      ...commonChoices,
      ...components,
    ],
  });
} else {
  console.warn('No component found.');
}

if (libraries.length) {
  questions.push({
    type: 'list',
    name: 'libraryName',
    message: 'Do you want to start the development of a library?',
    choices: [
      ...commonChoices,
      ...libraries,
    ],
  });
} else {
  console.warn('No library found.');
}

if (components.length || libraries.length) {

  inquirer.prompt(questions).then(async ({ componentName = NONE, libraryName = NONE }) => {

    const componentCommands = [];
    const libraryCommands = [];
    const storybookCommands = [{
      name: 'storybook',
      command: `${YARN_WORKSPACE_CMD} ${STORYBOOK} run ${STORYBOOK_RUN_CMD}`,
    }];

    if (componentName !== NONE) {
      if (componentName === ALL) {
        workspaces.forEach(workspace => {
          if (isComponentsPath.test(workspace.location)) {
            componentCommands.push({
              name: workspace.name,
              command: `${YARN_WORKSPACE_CMD} ${workspace.name} run ${COMPONENT_RUN_CMD}`,
            });
          }
        });
      } else {
        componentCommands.push({
          name: componentName,
          command: `${YARN_WORKSPACE_CMD} ${componentName} run ${COMPONENT_RUN_CMD}`,
        });
      }
    }

    if (libraryName !== NONE) {
      if (libraryName === ALL) {
        workspaces.forEach(workspace => {
          if (isLibraryPath.test(workspace.location)) {
            libraryCommands.push({
              name: workspace.name,
              command: `${YARN_WORKSPACE_CMD} ${workspace.name} run ${LIBRARY_RUN_CMD}`,
            });
          }
        });
      } else {
        libraryCommands.push({
          name: libraryName,
          command: `${YARN_WORKSPACE_CMD} ${libraryName} run ${LIBRARY_RUN_CMD}`,
        });
      }
    }

    if (componentCommands.length || libraryCommands.length) {
      concurrently([
        ...componentCommands,
        ...libraryCommands,
        ...storybookCommands,
      ], {
        prefix: 'name',
        killOthers: ['failure', 'success'],
        restartTries: 0,
      }).then(() => {
        console.log('Yeah! All done with success! Have a nice day!');
      }, (error) => {
        console.error('Oops! Something was wrong: %o', error);
      });
    } else {
      console.log('Nothing to do...');
    }

  });
}
