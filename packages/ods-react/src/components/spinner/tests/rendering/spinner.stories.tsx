import { SPINNER_SIZE, Spinner } from '../../src';

export default {
  component: Spinner,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Spinner
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Spinner data-testid="render" />
);

export const sizes = () => (
  <>
    <Spinner data-testid="size-xs" size={ SPINNER_SIZE.xs }>XS</Spinner>
    <Spinner data-testid="size-sm" size={ SPINNER_SIZE.sm }>SM</Spinner>
    <Spinner data-testid="size-md" size={ SPINNER_SIZE.md }>MD</Spinner>
    <Spinner data-testid="size-lg" size={ SPINNER_SIZE.lg }>LG</Spinner>
  </>
);
