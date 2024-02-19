/**
 * internationalisation system connector.
 * it is a function called by the different components with
 * the wanted translation key, and a map object that contains all the variables values of the translation
 *
 * @Example call by a component
 * ```typescript
 * const myI18nHook: OdsI18nHook = (key: string, values: { [ key: string ]: string | number | undefined }) => `translated text of key: ${key}`;
 * const translated: string = myI18nHook('a.translation.request.by.component', {variable1: 'val1', variable2: 42});
 * ```
 */
export type OdsI18nHook = (key: string, values: Record<string, string | number | undefined>) => string;
