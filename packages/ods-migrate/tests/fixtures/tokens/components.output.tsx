import type { CSSProperties } from 'react';

const accountButtonStyle = {
  '--ods-button-border-width': '2px',
  /* TODO(ods-v20): --ods-toggle-control-border-color: removed: the Toggle border reads `--ods-semantic-color-border-control` in v20. Override that inside `[data-ods="toggle-control"]` instead. */ color: 'var(--ods-toggle-control-border-color)',
} as CSSProperties;

export const AccountButton = () => (
  <button
    /* TODO(ods-v20): --ods-tile-border-color: removed, and never read even in v19 (`Tile` renders a `Card`): this override did nothing. Remove it; overriding the Card token instead changes the rendering. (the Card one is `--ods-card-border-color-neutral`) */ className="border-[length:var(--ods-button-border-width)] [--ods-tile-border-color:red]"
    style={accountButtonStyle}
  />
);

export const greyOut = (element: HTMLElement) => element.style.setProperty(/* TODO(ods-v20): --ods-tab-border-color-disabled: disabled is an opacity in v20, not a colour: remove this colour. To dim like ODS, set `opacity: var(--ods-semantic-opacity-disabled)` on `:disabled` / `[data-disabled]`; for a grey, write your own colour there. */ '--ods-tab-border-color-disabled', 'grey');
