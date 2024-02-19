/**
 * describe a component as a type that can be instanced.
 * useful to manipulate a component based on a class that you don't know his type.
 */
export type OcdkComponentType<T> = {
  new(...args: never[]): T;
}
