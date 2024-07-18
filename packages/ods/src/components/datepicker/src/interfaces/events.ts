interface OdsDatepickerEventChangeDetail {
  formattedValue?: string;
  name: string;
  oldValue?: Date | null;
  validity?: ValidityState;
  value?: Date | null;
}

type OdsDatepickerEventChange = CustomEvent<OdsDatepickerEventChangeDetail>;

export {
  type OdsDatepickerEventChange,
  type OdsDatepickerEventChangeDetail,
};
