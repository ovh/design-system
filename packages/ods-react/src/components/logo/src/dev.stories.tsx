import { LOGO_SIZE, LOGO_VARIANT, Logo } from '.';

export default {
  component: Logo,
  title: 'Logo dev',
};

export const Colors = () => (
  <>
    <p>Default</p>
    <Logo />
    <p>Custom</p>
    <Logo style={{ fill: 'red' }} />
  </>
);

export const Default = () => (
  <Logo />
);

export const Sizes = () => (
  <>
    <p>SM</p>
    <Logo size={ LOGO_SIZE.sm } />
    <p>MD</p>
    <Logo size={ LOGO_SIZE.md } />
    <p>LG</p>
    <Logo size={ LOGO_SIZE.lg } />
    <p>Custom</p>
    <Logo style={{ height: '80px' }} />
  </>
);

export const Variant = () => (
  <>
    <p>Default</p>
    <Logo variant={ LOGO_VARIANT.default } />
    <p>Emblem</p>
    <Logo variant={ LOGO_VARIANT.emblem } />
  </>
);
