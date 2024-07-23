interface OdsSelectEventChangeDetail {
  name: string;
  previousValue?: string;
  validity?: ValidityState;
  value: string | null;
}

type OdsSelectEventChange = CustomEvent<OdsSelectEventChangeDetail>;

export {
  type OdsSelectEventChange,
  type OdsSelectEventChangeDetail,
};
