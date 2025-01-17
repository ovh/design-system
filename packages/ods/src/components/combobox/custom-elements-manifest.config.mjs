import cemEnumPlugin from '../../../scripts/cem-enum-plugin.mjs';

export default {
  globs: ['src/**/*.+(ts|tsx)'],
  outdir: 'documentation',
  plugins: [cemEnumPlugin()],
  stencil: true,
};
