import { StatusMessage } from '.';

export default {
  component: StatusMessage,
  title: 'StatusMessage dev',
};

export const CssModule = () => (
  <StatusMessage.CssModule />
);

export const Tailwind = () => (
  <StatusMessage.Tailwind />
);
