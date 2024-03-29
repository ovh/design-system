interface OdsInputEventValueChange {
  name: string;
  oldValue?: string | number;
  validity?: ValidityState;
  value: string | number;
}

export {
  type OdsInputEventValueChange,
};
