interface OdsSelectEventChangeDetail {
  name: string;
  previousValue?: string;
  validity?: ValidityState;
  value: string;
}

type OdsSelectEventChange = CustomEvent<OdsSelectEventChangeDetail>;

export {
  type OdsSelectEventChange,
  type OdsSelectEventChangeDetail,
};
