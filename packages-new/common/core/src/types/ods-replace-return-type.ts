export type ReplaceReturnType<FCT extends (...a: any) => any, TNewReturn> = (...a: Parameters<FCT>) => TNewReturn;

