/**
 * filter properties that have not to be rendered into the DOM.
 * it is applied only for boolean properties.
 * it removes false properties (by setting them as null) and keep true properties (by setting theme as empty string).
 * it is useful when you have to set boolean properties like `flex` or `contrasted` on a web component (even through
 * a component proxy)
 * the goal is to use this kind of properties just like vanilla ones `required` or `checked`.
 * without this filter, the DOM will be generated as below (the boolean is converted to string in the property) :
 * ```html
 * <my-component flex="false" contrasted="true" id="foo"></my-component>
 * ```
 * with the filter, boolean properties are set into the DOM only if they are `true`:
 * ```
 * <my-component contrasted id="foo"></my-component>
 * ```
 * @example
 * ```typescript
 * // in react
 * <MyComponent {...odsFilterTransientProps({ flex: false, contrasted: true, id: 'foo' })}>{children}</MyComponent>
 * ```
 * @see https://github.com/facebook/react/issues/9230
 */
export function odsFilterTransientProps<T extends {[k:string]: unknown}>(props: T): T {
  const transients: Partial<T> = {};
  const keys = Object.keys(props) as Array<keyof T>;
  keys.forEach((p) => {
    const prop = props[ p ] as unknown;
    if (typeof prop === 'boolean') {
      transients[ p ] = (prop ? '' : null) as never;
    }
  })
  return { ...props, ...transients };
}
