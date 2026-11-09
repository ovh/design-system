export default {
  theme: {
    extend: {
      colors: {
        'ods-primary-500': 'var(--ods-palette-brand-500)',
        'ods-neutral-200': 'var(--ods-palette-gray-300)',
        success: { 100: 'var(--ods-palette-green-100)', 500: 'var(--ods-palette-green-500)' },
        /* TODO(ods-v20): --ods-color-primary-500: v20 names colours by what they paint: pick the one for this place. background → `--ods-semantic-color-surface-brand`, border → `--ods-semantic-color-border-brand`, text → `--ods-semantic-color-content-brand`. To keep the exact v19 colour whatever the theme: var(--ods-palette-blue-500). */ brand: 'var(--ods-color-primary-500)',
        // A key of the v19 Tailwind guide: its value reads the v20 palette, its name is marked (v20 has none for it).
        /* TODO(ods-v20): ods-color-primary-500: a Tailwind key of the ODS v19 guide with no v20 name: give it one that says what it paints (`ods-surface-*`, `ods-content-*`, `ods-border-*`, `ods-container`, `ods-control`… in the Tailwind guide), in your Tailwind theme and in its utilities together */ 'ods-color-primary-500': 'var(--ods-palette-brand-500)',
      },
    },
  },
};
