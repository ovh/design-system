interface OdsSelectEventChangeDetail {
  name: string;
  oldValue?: string;
  validity?: ValidityState;
  value: string;
}

type OdsSelectEventChange = CustomEvent<OdsSelectEventChangeDetail>;

export {
  type OdsSelectEventChange,
  type OdsSelectEventChangeDetail,
};
