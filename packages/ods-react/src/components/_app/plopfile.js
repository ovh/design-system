export default function(plop) {
  plop.setGenerator('react-test-app', {
    description: 'Start React test App',
    prompts: [{
      type: 'input',
      name: 'path',
      message: 'Main file path to dynamically import.',
    }, {
      type: 'input',
      name: 'type',
      message: 'Either "dev" for dev server, or "test" for e2e run.',
    }],
    actions: function({ type }) {
      return [{
        type: 'add',
        force: true,
        path: 'src/index.tsx',
        templateFile: `templates/index-${type}.tsx.hbs`,
      }];
    }
  });
};
