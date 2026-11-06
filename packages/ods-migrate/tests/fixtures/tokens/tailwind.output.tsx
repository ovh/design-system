export const Panel = ({ active }: { active: boolean }) => (
  <div
    className={`p-4 bg-[--ods-semantic-color-surface-selected] text-[var(--ods-semantic-color-content-on-brand)] border-b-[var(--ods-semantic-color-border-neutral-subtle)] hover:bg-[var(--ods-semantic-color-interaction-brand-hover)] ${active ? 'rounded-[var(--ods-semantic-size-radius-container)]' : ''}`}
    style={{ color: 'var(--ods-semantic-color-content-brand)', /* TODO(ods-v20): --ods-color-primary-500: v20 names colours by what they paint: pick the one for this place. Most likely here (a border): `--ods-semantic-color-border-brand`. Otherwise: background → `--ods-semantic-color-surface-brand`, text → `--ods-semantic-color-content-brand`. To keep the exact v19 colour whatever the theme: var(--ods-palette-blue-500). */ boxShadow: '0 0 2px var(--ods-color-primary-500)' }}
  >
    <svg><path /* TODO(ods-v20): --ods-color-neutral-500: v20 names colours by what they paint: pick the one for this place. background → `--ods-semantic-color-surface-neutral`, border → `--ods-semantic-color-border-neutral`, text → `--ods-semantic-color-content-neutral`. */ stroke="var(--ods-color-neutral-500)" /></svg>
  </div>
);

const legend = { color: 'var(--ods-semantic-color-content-text)' };
export const Swatch = () => <span style={legend} className="h-2 w-2 bg-[--ods-semantic-color-surface-neutral]" />;
