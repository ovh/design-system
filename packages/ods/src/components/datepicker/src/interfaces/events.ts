interface OdsDatepickerEventValueChangeDetail {
  name: string;
  oldValue?: Date | null;
  validity?: ValidityState;
  value?: Date | null;
}

type OdsDatepickerEventValueChange = CustomEvent<OdsDatepickerEventValueChangeDetail>;

export {
  type OdsDatepickerEventValueChange,
  type OdsDatepickerEventValueChangeDetail,
};
