import { OrderButton } from '.';

export default {
  component: OrderButton,
  title: 'OrderButton dev',
};

export const CssModule = () => (
  <>
    <OrderButton.CssModule />
    <br />
    <OrderButton.CssModule disabled />
  </>
);

export const Tailwind = () => (
  <OrderButton.Tailwind />
);
