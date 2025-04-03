import cemEnumPlugin from '../../../scripts/cem-enum-plugin.mjs';

export default {
  globs: [
    'src/**/*.+(ts|tsx)',
    '../../utils/locale.ts', // to be able to generate the enum list
  ],
  outdir: 'documentation',
  plugins: [cemEnumPlugin({
    rename: {
      ODS_LOCALE: 'ODS_PHONE_NUMBER_LOCALE',
    },
  })],
  stencil: true,
};
