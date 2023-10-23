interface OdsRadioGroupAttribute {
  afterSave?: ({value}: { value: string }) => Promise<void>;
  beforeSave?: ({value}: { value: string }) => Promise<void>;

  defaultValue?: unknown;
  /**
   * Radio-group should be disabled or not
   */
  disabled: boolean;
  name?: string;
  /**
   * If the radio selection is required or not
   */
  required?: boolean;
  /**
   * save input allow to set a function that returns a promise.
   * It is called before each time an update is performed and allowing to manage pessimistic update strategy
   */
  save?: ({value}: { value: string }) => Promise<void>;

  value: string;
}

export {
  OdsRadioGroupAttribute,
};