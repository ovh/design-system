interface OdsDatepickerChangeEventDetail {
  formattedValue?: string;
  name: string;
  previousValue?: Date | null;
  validity?: ValidityState;
  value?: Date | null;
}

type OdsDatepickerChangeEvent = CustomEvent<OdsDatepickerChangeEventDetail>;

export {
  type OdsDatepickerChangeEvent,
  type OdsDatepickerChangeEventDetail,
};
