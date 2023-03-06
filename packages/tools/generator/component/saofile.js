const kebabCase = require('lodash.kebabcase');
const startCase = require('lodash.startcase');
const config = require('./config.json');
const packageJson = require('./package.json');

module.exports = {
  description: 'Scaffolding out a new ods component.',
  templateDir: 'template',
  transformerOptions: {
    context: {
      kebabCase,
      startCase,
    },
  },
  prompts() {
    return [
      {
        name: 'name',
        message: 'Component name ?',
        default: 'My Awesome Component',
      },
      {
        name: 'packageDescription',
        message: 'Component description ?',
        default: 'Component to do awesome things',
      }
    ];
  },
  actions() {
    const templateData = {
      name: kebabCase(this.answers.name),
      packageVersion: packageJson.version,
      componentName: startCase(this.answers.name).replace(/\s/gmi, ''),
      componentFolderName: `${kebabCase(this.answers.name)}`,
      componentFileNamePrefix: `${config.corePrefix}-${kebabCase(this.answers.name)}`,
      stencilPrefix: config.stencilPrefix
    };
    return [
      // Add all template files
      {
        type: 'add',
        files: '**',
        templateData
      },

      // Move Core files
      {
        type: 'move',
        patterns: {
          'core/component.ts': `${config.outDir}/${config.odsCorePath}/${templateData.componentFolderName}/${templateData.componentFileNamePrefix}.ts`,
          'core/component-attributes.ts': `${config.outDir}/${config.odsCorePath}/${templateData.componentFolderName}/${templateData.componentFileNamePrefix}-attributes.ts`,
          'core/component-controller.ts': `${config.outDir}/${config.odsCorePath}/${templateData.componentFolderName}/${templateData.componentFileNamePrefix}-controller.ts`,
          'core/component-default-attributes.ts': `${config.outDir}/${config.odsCorePath}/${templateData.componentFolderName}/${templateData.componentFileNamePrefix}-default-attributes.ts`,
          'core/component-events.ts': `${config.outDir}/${config.odsCorePath}/${templateData.componentFolderName}/${templateData.componentFileNamePrefix}-events.ts`,
          'core/component-methods.ts': `${config.outDir}/${config.odsCorePath}/${templateData.componentFolderName}/${templateData.componentFileNamePrefix}-methods.ts`,
          'core/public-api.ts': `${config.outDir}/${config.odsCorePath}/${templateData.componentFolderName}/public-api.ts`,
        }
      },
      {
        type: 'modify',
        files: `${config.outDir}/${config.odsCorePath}/public-api.ts`,
        handler(data) {
          return data + `export * from './${templateData.componentFolderName}/public-api';`
        }
      },

      // Move Specifications files
      {
        type: 'move',
        patterns: {
          'specifications/specifications-component.mdx': `${config.outDir}/${config.odsSpecificationsPath}/${templateData.name}/specifications-${templateData.name}.mdx`,
          'specifications/specifications-component-contents.mdx': `${config.outDir}/${config.odsSpecificationsPath}/${templateData.name}/specifications-${templateData.name}-contents.mdx`,
          'specifications/specifications-component-events.mdx': `${config.outDir}/${config.odsSpecificationsPath}/${templateData.name}/specifications-${templateData.name}-events.mdx`,
          'specifications/specifications-component-methods.mdx': `${config.outDir}/${config.odsSpecificationsPath}/${templateData.name}/specifications-${templateData.name}-methods.mdx`,
          'specifications/specifications-component-properties.mdx': `${config.outDir}/${config.odsSpecificationsPath}/${templateData.name}/specifications-${templateData.name}-properties.mdx`,
          'specifications/specifications-component-tests.mdx': `${config.outDir}/${config.odsSpecificationsPath}/${templateData.name}/specifications-${templateData.name}-tests.mdx`,
        }
      },

      // Move Storybook files
      {
        type: 'move',
        patterns: {
          'storybook/component.design.stories.mdx': `${config.outDir}/${config.odsStorybookPath}/${templateData.name}/${templateData.name}.design.stories.mdx`,
          'storybook/component.specifications.stories.mdx': `${config.outDir}/${config.odsStorybookPath}/${templateData.name}/${templateData.name}.specifications.stories.mdx`,
          'storybook/component.web-component.stories.page.mdx': `${config.outDir}/${config.odsStorybookPath}/${templateData.name}/${templateData.name}.web-component.stories.page.mdx`,
          'storybook/component.web-components.stories.ts': `${config.outDir}/${config.odsStorybookPath}/${templateData.name}/${templateData.name}.web-components.stories.ts`,
        }
      },

      // Move Stencil files
      {
        type: 'move',
        patterns: {
          // Root
          'stencil/.gitignore': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/.gitignore`,
          'stencil/.npmignore': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/.npmignore`,
          'stencil/CHANGELOG.md': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/CHANGELOG.md`,
          'stencil/jest.config.ts': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/jest.config.ts`,
          'stencil/package.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/package.json`,
          'stencil/stencil.config.ts': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/stencil.config.ts`,
          'stencil/THIRD-PARTY-LICENCES': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/THIRD-PARTY-LICENCES`,
          'stencil/tsconfig.dev.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/tsconfig.dev.json`,
          'stencil/tsconfig.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/tsconfig.json`,
          'stencil/tsconfig.prod.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/tsconfig.prod.json`,
          'stencil/typedoc.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/typedoc.json`,
          // Sources
          'stencil/src/global.dev.ts': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/global.dev.ts`,
          'stencil/src/global.prod.ts': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/global.prod.ts`,
          'stencil/src/global.ts': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/global.ts`,
          'stencil/src/index.html': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/index.html`,
          'stencil/src/index.ts': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/index.ts`,
          'stencil/src/components/osds-component/osds-component.e2e.screenshot.ts': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/components/${config.stencilPrefix}-${templateData.name}/${config.stencilPrefix}-${templateData.name}.e2e.screenshot.ts`,
          'stencil/src/components/osds-component/osds-component.e2e.ts': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/components/${config.stencilPrefix}-${templateData.name}/${config.stencilPrefix}-${templateData.name}.e2e.ts`,
          'stencil/src/components/osds-component/osds-component.scss': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/components/${config.stencilPrefix}-${templateData.name}/${config.stencilPrefix}-${templateData.name}.scss`,
          'stencil/src/components/osds-component/osds-component.spec.ts': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/components/${config.stencilPrefix}-${templateData.name}/${config.stencilPrefix}-${templateData.name}.spec.ts`,
          'stencil/src/components/osds-component/osds-component.tsx': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/components/${config.stencilPrefix}-${templateData.name}/${config.stencilPrefix}-${templateData.name}.tsx`,
          'stencil/src/components/osds-component/public-api.ts': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/components/${config.stencilPrefix}-${templateData.name}/public-api.ts`,
          'stencil/src/components/osds-component/styles/osds-component.color.scss': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/components/${config.stencilPrefix}-${templateData.name}/styles/${config.stencilPrefix}-${templateData.name}.color.scss`,
          'stencil/src/components/osds-component/styles/osds-component.mixins.scss': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/components/${config.stencilPrefix}-${templateData.name}/styles/${config.stencilPrefix}-${templateData.name}.mixins.scss`,
          'stencil/src/components/osds-component/styles/osds-component.size.scss': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/components/${config.stencilPrefix}-${templateData.name}/styles/${config.stencilPrefix}-${templateData.name}.size.scss`,
          'stencil/src/components/osds-component/styles/osds-component.typography.scss': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/components/${config.stencilPrefix}-${templateData.name}/styles/${config.stencilPrefix}-${templateData.name}.typography.scss`,
          'stencil/src/docs/osds-component/usage.mdx': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/src/docs/${config.stencilPrefix}-${templateData.name}/usage.mdx`,
          // React adapter
          'stencil/react/.gitignore': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/react/.gitignore`,
          'stencil/react/.npmignore': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/react/.npmignore`,
          'stencil/react/CHANGELOG.md': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/react/CHANGELOG.md`,
          'stencil/react/package.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/react/package.json`,
          'stencil/react/tsconfig.cjs.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/react/tsconfig.cjs.json`,
          'stencil/react/tsconfig.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/react/tsconfig.json`,
          // Vue adapter
          'stencil/vue/.gitignore': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/vue/.gitignore`,
          'stencil/vue/.npmignore': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/vue/.npmignore`,
          'stencil/vue/CHANGELOG.md': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/vue/CHANGELOG.md`,
          'stencil/vue/package.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/vue/package.json`,
          'stencil/vue/tsconfig.cjs.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/vue/tsconfig.cjs.json`,
          'stencil/vue/tsconfig.json': `${config.outDir}/${config.odsStencilPath}/${templateData.name}/vue/tsconfig.json`,
        }
      },
      {
        type: 'modify',
        files: `${config.outDir}/${config.odsThemingPath}/ods-size-definitions.scss`,
        handler(data) {
          return data + `@import './${config.corePrefix}-theming-size.${templateData.name}.scss';`
        }
      },

      // Move Testing files
      {
        type: 'move',
        patterns: {
          'testing/component-base-attributes.ts': `${config.outDir}/${config.odsTestingPath}/${templateData.componentFolderName}/${templateData.componentFileNamePrefix}-base-attributes.ts`,
          'testing/public-api.ts': `${config.outDir}/${config.odsTestingPath}/${templateData.componentFolderName}/public-api.ts`,
        }
      },
      {
        type: 'modify',
        files: `${config.outDir}/${config.odsTestingPath}/public-api.ts`,
        handler(data) {
          return data + `export * from './${templateData.componentFolderName}/public-api';`
        }
      },

      // Move Theming files
      {
        type: 'move',
        patterns: {
          'theming/component-theming-size.scss': `${config.outDir}/${config.odsThemingPath}/${config.corePrefix}-theming-size.${templateData.name}.scss`,
        }
      },
      {
        type: 'modify',
        files: `${config.outDir}/${config.odsThemingPath}/ods-size-definitions.scss`,
        handler(data) {
          return data + `@import './${config.corePrefix}-theming-size.${templateData.name}.scss';`
        }
      }
    ];
  },
  async completed() {
    this.showProjectTips();
  },
};
