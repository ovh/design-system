import type { CSSProperties } from 'react';

const accountButtonStyle = {
  '--ods-button-border-radius-width': '2px',
  color: 'var(--ods-toggle-control-border-color)',
} as CSSProperties;

export const AccountButton = () => (
  <button
    className="border-[length:var(--ods-button-border-radius-width)] [--ods-tile-border-color:red]"
    style={accountButtonStyle}
  />
);

export const greyOut = (element: HTMLElement) => element.style.setProperty('--ods-tab-border-color-disabled', 'grey');
