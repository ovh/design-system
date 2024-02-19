export interface OdsCombinationAction {
  action: () => void;
  name: string;
}

export function odsIsCombinationAction(arg: any): arg is OdsCombinationAction {
  return !!(arg && arg.action && arg.name);
}
