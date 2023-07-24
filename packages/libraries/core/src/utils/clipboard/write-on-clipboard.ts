export function writeOnClipboard(textToWrite: string): Promise<void> {
    console.log('test', textToWrite);
    return navigator.clipboard.writeText(textToWrite);
}