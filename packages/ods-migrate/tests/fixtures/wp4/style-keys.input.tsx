const a = <div style={{ borderColor: isErr ? 'var(--ods-color-critical-500)' : 'var(--ods-color-neutral-500)' }} />;
const b = ({ border: err ? '2px solid var(--ods-color-critical-500)' : '1px solid var(--ods-color-neutral-200)', color: err && 'var(--ods-color-critical-500)' });
const c = { color: (custom ?? 'var(--ods-color-primary-500)') as string };
const d = { color: isDark('var(--ods-color-primary-500)') ? 'a' : 'b' };
const e = { '&:hover': { background: 'var(--ods-color-primary-100)' } };
const f = styled.div`&:hover { background: var(--ods-color-primary-100); }`;
const g = styled.div`
  background: var(--ods-color-primary-100);
  &:hover {
    background: var(--ods-color-primary-100);
  }
`;
