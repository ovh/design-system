export default {
  theme: {
    extend: {
      colors: {
        'ods-primary-500': 'var(--ods-color-primary-500)',
        'ods-neutral-200': 'var(--ods-color-neutral-200)',
        success: { 100: 'var(--ods-color-success-100)', 500: 'var(--ods-color-success-500)' },
        brand: 'var(--ods-color-primary-500)',
        // A key of the v19 Tailwind guide: its value reads the v20 palette, its name is marked (v20 has none for it).
        'ods-color-primary-500': 'var(--ods-color-primary-500)',
      },
    },
  },
};
