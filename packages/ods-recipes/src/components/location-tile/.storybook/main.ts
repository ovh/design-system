import { StorybookConfig } from '@storybook/react-vite';
import stringHash from 'string-hash';
import tailwindcss from 'tailwindcss';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  docs: {
    autodocs: false,
  },
  framework: '@storybook/react-vite',
  previewHead: (head) => `
    ${head}
    <style>
      html, body {
        font-family: "Source Sans Pro", "Trebuchet MS", "Arial", "Segoe UI", sans-serif;
      }
    </style>
  `,
  stories: [
    '../src/dev.stories.tsx',
  ],
  viteFinal: (config, { configType }) => {
    return mergeConfig(config, {
      css: {
        modules: {
          generateScopedName: ((name, filename, css) => {
            // Prevent css modules class renaming in case of tailwind implementation
            if (/\/tailwind\//.test(filename)) {
              return name;
            }

            // Generate same as original library (see https://github.com/madyankin/postcss-modules/blob/bfd40605f25a518feee5b62d69277b1f23c0e0e8/src/scoping.js#L36)
            const i = css.indexOf(`.${name}`);
            const lineNumber = css.substr(0, i).split(/[\r\n]/).length;
            const hash = stringHash(css).toString(36).substr(0, 5);

            return `_${name}_${hash}_${lineNumber}`;
          }),
        },
        postcss: {
          plugins: [tailwindcss()],
        },
      },
    });
  },
};

export default config;
