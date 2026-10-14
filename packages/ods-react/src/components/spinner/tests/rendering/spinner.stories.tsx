import { type CSSProperties } from 'react';
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

export const color = () => (
  <>
    <Spinner data-testid="default" />

    <div style={{ color: 'rgb(255, 0, 0)' }}>
      <Spinner
        data-testid="current-color"
        style={{ '--ods-spinner-color': 'currentColor' } as CSSProperties} />
    </div>

    <Spinner
      data-testid="custom-property"
      style={{ '--ods-spinner-color': 'rgb(0, 128, 0)' } as CSSProperties} />

    <div style={{ '--ods-spinner-color': 'rgb(0, 0, 255)' } as CSSProperties}>
      <Spinner data-testid="parent-custom-property" />
    </div>
  </>
);
