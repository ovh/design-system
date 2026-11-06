export const Panel = ({ active }: { active: boolean }) => (
  <div
    className={`p-4 bg-[--ods-color-primary-100] text-[var(--ods-color-primary-700)] border-b-[var(--ods-color-neutral-200)] hover:bg-[var(--ods-color-primary-500)] ${active ? 'rounded-[var(--ods-border-radius-md)]' : ''}`}
    style={{ color: 'var(--ods-color-primary-500)', boxShadow: '0 0 2px var(--ods-color-primary-500)' }}
  >
    <svg><path stroke="var(--ods-color-neutral-500)" /></svg>
  </div>
);

const legend = { color: 'var(--ods-theme-text-color)' };
export const Swatch = () => <span style={legend} className="h-2 w-2 bg-[--ods-color-neutral-500]" />;
