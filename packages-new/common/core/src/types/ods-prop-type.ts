/**
 * get the type of property
 */
export type PropType<Obj, Property extends keyof Obj> = Obj[Property];
