export const statusColor = (critical: boolean) => (critical ? /* TODO(ods-v20): --ods-color-critical-500: v20 names colours by what they paint: pick the one for this place. background → `--ods-semantic-color-surface-critical`, border → `--ods-semantic-color-border-critical`, text → `--ods-semantic-color-content-critical`. */ 'var(--ods-color-critical-500)' : 'var(--ods-semantic-color-content-heading)');

it('colours a critical status', () => {
  expect(statusColor(true)).toBe(/* TODO(ods-v20): --ods-color-critical-500: v20 names colours by what they paint: pick the one for this place. background → `--ods-semantic-color-surface-critical`, border → `--ods-semantic-color-border-critical`, text → `--ods-semantic-color-content-critical`. */ 'var(--ods-color-critical-500)');
});
