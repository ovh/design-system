type OdsSelectCustomRendererData = {
  text: string,
  value: string,
  [key: string]: string,
}

type OdsSelectCustomRenderer = {
  item?: (data: OdsSelectCustomRendererData) => string,
  option?: (data: OdsSelectCustomRendererData) => string,
};

export {
  type OdsSelectCustomRenderer,
  type OdsSelectCustomRendererData,
};
