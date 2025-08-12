export function filterColorTokens(all: Record<string, string>): Array<{ name: string; value: string }> {
  return Object.entries(all)
    .filter(([name]) => name.startsWith('--ods-color-'))
    .map(([name, value]) => ({ name, value }));
}