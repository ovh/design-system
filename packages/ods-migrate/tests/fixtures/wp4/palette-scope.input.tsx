export const Banner = () => <div style={{ '--ods-color-primary-500': '#f00' }} />;
export const Page = () => <html style={{ '--ods-color-primary-500': '#f00' }} />;
export const Box = styled.div`
  --ods-color-primary-700: #900;
`;
export const Global = createGlobalStyle`
  :root {
    --ods-color-primary-500: #f00;
  }
  body {
    --ods-color-primary-700: #900;
  }
`;
export const theme = { '--ods-color-primary-500': '#f00' };
