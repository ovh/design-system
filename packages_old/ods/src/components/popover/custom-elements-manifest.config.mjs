import cemEnumPlugin from '../../../scripts/cem-enum-plugin.mjs';

export default {
  globs: [
    'src/**/*.+(ts|tsx)',
    '../../utils/overlay.ts', // to be able to generate the enum list
  ],
  outdir: 'documentation',
  plugins: [cemEnumPlugin({
    rename: {
      ODS_OVERLAY_POSITION: 'ODS_POPOVER_POSITION',
      ODS_OVERLAY_STRATEGY: 'ODS_POPOVER_STRATEGY',
    },
  })],
  stencil: true,
};
