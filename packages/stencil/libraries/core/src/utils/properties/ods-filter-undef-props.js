/**
 * filter properties that are undefined
 */
export function odsFilterUndefProps(props) {
  const filtered = {};
  const keys = Object.keys(props);
  keys.forEach((p) => {
    const prop = props[p];
    if (prop !== undefined) {
      filtered[p] = prop;
    }
  });
  return filtered;
}
