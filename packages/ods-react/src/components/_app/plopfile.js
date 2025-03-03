export default function(plop) {
  plop.setGenerator('react-test-app', {
    description: 'Start React test App',
    prompts: [{
      type: 'input',
      name: 'path',
      message: 'main file path to dynamically import',
    }],
    actions: [{
      type: 'add',
      force: true,
      path: 'src/index.tsx',
      templateFile: 'templates/index.tsx.hbs',
    }],
  });
};
