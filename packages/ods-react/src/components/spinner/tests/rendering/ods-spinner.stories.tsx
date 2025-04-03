import { ODS_SPINNER_SIZE, OdsSpinner } from '../../src';

export default {
  component: OdsSpinner,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsSpinner
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsSpinner data-testid="render" />
);

export const sizes = () => (
  <>
    <OdsSpinner data-testid="size-xs" size={ ODS_SPINNER_SIZE.xs }>XS</OdsSpinner>
    <OdsSpinner data-testid="size-sm" size={ ODS_SPINNER_SIZE.sm }>SM</OdsSpinner>
    <OdsSpinner data-testid="size-md" size={ ODS_SPINNER_SIZE.md }>MD</OdsSpinner>
    <OdsSpinner data-testid="size-lg" size={ ODS_SPINNER_SIZE.lg }>LG</OdsSpinner>
  </>
);
