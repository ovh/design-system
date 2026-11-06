export const statusColor = (critical: boolean) => (critical ? 'var(--ods-color-critical-500)' : 'var(--ods-color-heading)');

it('colours a critical status', () => {
  expect(statusColor(true)).toBe('var(--ods-color-critical-500)');
});
