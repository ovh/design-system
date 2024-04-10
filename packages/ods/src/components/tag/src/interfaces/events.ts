interface OdsTagEventRemoveDetail {
  id?: string;
}

type OdsTagEventRemove = CustomEvent<OdsTagEventRemoveDetail>;

export {
  type OdsTagEventRemove,
  type OdsTagEventRemoveDetail,
};
