const d = { '--ods-semantic-color-surface-raised': 'var(--ods-palette-white)' };
const g = createGlobalStyle`:root { --ods-semantic-color-surface-raised: var(--ods-palette-white); }`;
const theme = {
  '--ods-semantic-border-thickness': '1px',
  /* TODO(ods-v20): --ods-theme-input-border-width and --ods-theme-border-width both become --ods-semantic-border-thickness in v20: remove this declaration */ '--ods-theme-input-border-width': 'var(--ods-theme-border-width)',
  '--ods-semantic-color-content-text': '#111',
  /* TODO(ods-v20): --ods-theme-input-text-color and --ods-theme-text-color both become --ods-semantic-color-content-text in v20: keep one value */ '--ods-semantic-color-content-text': '#333',
};
