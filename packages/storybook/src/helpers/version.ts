import versions from '../../assets/ods-versions.json';

function extractMajorVersion(version: string): string {
  return version.split('.')[0];
}

function getPreviousMajorFullVersion(): string {
  if (!versions || !versions.length) {
    return '';
  }

  try {
    const currentMajor = extractMajorVersion(versions[0]);
    const previousFullVersion = versions.find((version) => extractMajorVersion(version) !== currentMajor);

    return previousFullVersion || '';
  } catch {
    return '';
  }
}

export {
  getPreviousMajorFullVersion,
};
