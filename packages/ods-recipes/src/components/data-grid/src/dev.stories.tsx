import { DataGrid } from '.';

export default {
  component: DataGrid,
  title: 'DataGrid dev',
};

export const CssModule = () => (
  <DataGrid.CssModule />
);

export const Tailwind = () => (
  <DataGrid.Tailwind />
);
