export function writeOnClipboard(textToWrite: string): Promise<void> {
  try {
    return navigator.clipboard.writeText(textToWrite);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}