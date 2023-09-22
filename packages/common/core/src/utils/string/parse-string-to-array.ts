function parseStringToArray<T>(values: T[] | string, onError?: (err: unknown) => void): T[] {
    if (typeof values === 'string') {
        try {
        return JSON.parse(values);
        } catch (err) {
            onError?.(err);
            return [];
        }
    }
    return [...values];
}

export { 
    parseStringToArray,
}