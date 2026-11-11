export const Banner = () => <div style={{ /* TODO(ods-v20): --ods-color-primary-500 → --ods-palette-brand-500 outside :root: in v20 the roles read the palette on :root only, so this declaration recolours nothing here. Declare the roles this container needs instead (`--ods-semantic-color-*`) */ '--ods-palette-brand-500': '#f00' }} />;
export const Page = () => <html style={{ '--ods-palette-brand-500': '#f00' }} />;
export const Box = styled.div/* TODO(ods-v20): --ods-color-primary-700 → --ods-palette-brand-700 outside :root: in v20 the roles read the palette on :root only, so this declaration recolours nothing here. Declare the roles this container needs instead (`--ods-semantic-color-*`) */ `
  --ods-palette-brand-700: #900;
`;
export const Global = createGlobalStyle/* TODO(ods-v20): --ods-color-primary-700 → --ods-palette-brand-700 outside :root: in v20 the roles read the palette on :root only, so this declaration recolours nothing here. Declare the roles this container needs instead (`--ods-semantic-color-*`) */ `
  :root {
    --ods-palette-brand-500: #f00;
  }
  body {
    --ods-palette-brand-700: #900;
  }
`;
export const theme = { '--ods-palette-brand-500': '#f00' };
