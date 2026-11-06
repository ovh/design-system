export default {
  theme: {
    extend: {
      borderRadius: { sm: 'var(--ods-semantic-size-radius-control)' },
      colors: { heading: 'var(--ods-semantic-color-content-heading)', /* TODO(ods-v20): --ods-color-primary-500: v20 names colours by what they paint: pick the one for this place. background → `--ods-semantic-color-surface-brand`, border → `--ods-semantic-color-border-brand`, text → `--ods-semantic-color-content-brand`. To keep the exact v19 colour whatever the theme: var(--ods-palette-blue-500). */ primary: 'var(--ods-color-primary-500)' },
      fontFamily: { sans: ['Source Sans 3', 'sans-serif'] },
    },
  },
};
