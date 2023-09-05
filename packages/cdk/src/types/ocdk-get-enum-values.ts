export type OcdkEnumObject = {[key: string]: number | string};
export type OcdkEnumObjectEnum<E extends OcdkEnumObject> = E extends {[key: string]: infer ET | string} ? ET : never;

export function ocdkGetEnumValues<E extends OcdkEnumObject>(enumObject: E): OcdkEnumObjectEnum<E>[] {
  return Object.keys(enumObject)
    .filter(key => Number.isNaN(Number(key)))
    .map(key => enumObject[key] as OcdkEnumObjectEnum<E>);
}
