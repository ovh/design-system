interface OdsSwitchChangeEventDetail {
  name: string;
  validity?: ValidityState;
  value: string | null;
}

type OdsSwitchChangeEvent = CustomEvent<OdsSwitchChangeEventDetail>;

export {
  type OdsSwitchChangeEvent,
  type OdsSwitchChangeEventDetail,
};
