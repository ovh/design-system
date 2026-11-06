const a = <div style={{ borderColor: isErr ? 'var(--ods-semantic-color-border-critical)' : 'var(--ods-semantic-color-border-neutral)' }} />;
const b = ({ border: err ? '2px solid var(--ods-semantic-color-border-critical)' : '1px solid var(--ods-semantic-color-border-neutral-subtle)', color: err && 'var(--ods-semantic-color-content-critical)' });
const c = { color: (custom ?? 'var(--ods-semantic-color-content-brand)') as string };
const d = { color: isDark(/* TODO(ods-v20): --ods-color-primary-500: v20 names colours by what they paint: pick the one for this place. background → `--ods-semantic-color-surface-brand`, border → `--ods-semantic-color-border-brand`, text → `--ods-semantic-color-content-brand`. To keep the exact v19 colour whatever the theme: var(--ods-palette-blue-500). */ 'var(--ods-color-primary-500)') ? 'a' : 'b' };
const e = { '&:hover': { background: 'var(--ods-semantic-color-interaction-accent-subtle-hover)' } };
const f = styled.div`&:hover { background: var(--ods-semantic-color-interaction-accent-subtle-hover); }`;
const g = styled.div`
  background: var(--ods-semantic-color-surface-selected);
  &:hover {
    background: var(--ods-semantic-color-interaction-accent-subtle-hover);
  }
`;
