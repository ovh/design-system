const STORAGE_PREFIX = 'ods-doc';

function getKey(key: string): string {
  return `${STORAGE_PREFIX}-${key}`;
}

function localGet<T>(key: string): T | null {
  try {
    return JSON.parse(localStorage.getItem(getKey(key)) || '');
  } catch {
    return null;
  }
}

function localSave<T>(key: string, item: T): void {
  return localStorage.setItem(getKey(key), JSON.stringify(item));
}

export {
  localGet,
  localSave,
};
