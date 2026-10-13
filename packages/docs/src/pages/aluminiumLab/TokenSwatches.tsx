import { type ReactNode, useEffect, useState } from 'react';

/* The token side of the comparison. Values are read back from the live document rather than
   imported from either theme file: what is shown is what the browser resolved, including the
   tokens one of the two sets does not define at all (shown as "not defined", which is the point). */

const PALETTE_FAMILIES = ['blue', 'gray', 'indigo', 'green', 'orange', 'red'] as const;
const PALETTE_STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

const ROLE_GROUPS: [group: string, roles: string[]][] = [
  ['Surface - canvas and layers', [
    'surface-page', 'surface-raised', 'surface-overlay', 'surface-header', 'surface-backdrop', 'surface-code',
  ]],
  ['Surface - brand and selection', [
    'surface-base', 'surface-selected-subtle', 'surface-selected', 'surface-selected-solid', 'surface-accent-subtle',
  ]],
  ['Surface - statuses', [
    'surface-neutral', 'surface-neutral-subtle', 'surface-neutral-minimal',
    'surface-information', 'surface-information-subtle',
    'surface-success', 'surface-success-subtle',
    'surface-warning', 'surface-warning-subtle',
    'surface-critical', 'surface-critical-subtle',
  ]],
  ['Surface - form controls and states', [
    'surface-control', 'surface-control-solid', 'surface-thumb', 'surface-track', 'surface-segmented',
    'surface-readonly', 'surface-pending', 'surface-drag-over', 'surface-disabled',
  ]],
  ['Content - text and brand', [
    'content-heading', 'content-text', 'content-subtle', 'content-placeholder',
    'content-base', 'content-visited', 'content-accent',
  ]],
  ['Content - statuses', [
    'content-neutral', 'content-information', 'content-success', 'content-warning', 'content-critical',
  ]],
  ['Content - on a surface', [
    'content-on-solid', 'content-on-warning-solid', 'content-on-selected-solid',
    'content-on-selected', 'content-on-accent', 'content-on-neutral', 'content-on-information',
    'content-on-success', 'content-on-warning', 'content-on-critical',
    'content-on-code', 'content-on-vivid',
  ]],
  ['Border', [
    'border-neutral-minimal', 'border-neutral-subtle', 'border-neutral-strong', 'border-neutral',
    'border-control', 'border-readonly', 'border-base', 'border-selected',
    'border-accent-subtle', 'border-accent-strong',
    'border-information-subtle', 'border-information-strong',
    'border-success-subtle', 'border-success-strong',
    'border-warning-subtle', 'border-warning-strong',
    'border-critical-subtle', 'border-critical-strong', 'border-critical', 'border-drag-over',
  ]],
  ['Interaction', [
    'interaction-base-hover', 'interaction-neutral-hover', 'interaction-information-hover',
    'interaction-success-hover', 'interaction-warning-hover', 'interaction-critical-hover',
    'interaction-base-subtle-hover', 'interaction-neutral-subtle-hover', 'interaction-information-subtle-hover',
    'interaction-success-subtle-hover', 'interaction-warning-subtle-hover', 'interaction-critical-subtle-hover',
    'interaction-accent-subtle-hover',
    'interaction-highlight', 'interaction-selected-hover',
    'interaction-control-hover', 'interaction-control-subtle-hover',
  ]],
  ['Focus and shadow', [
    'focus', 'shadow-control', 'shadow-raised', 'shadow-overlay',
  ]],
];

function read(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

const Swatch = ({ token }: { token: string }): ReactNode => {
  const value = read(token);

  return (
    <div className="lab__swatch" title={ `${token}: ${value || 'not defined'}` }>
      <span className="lab__swatch-chip" style={ value ? { background: `var(${token})` } : undefined } />
      <span className="lab__swatch-name">{ token.replace('--ods-semantic-color-', '').replace('--ods-palette-', '') }</span>
      <code className="lab__swatch-value">{ value || 'not defined' }</code>
    </div>
  );
};

const TokenSwatches = ({ theme }: { theme: string }): ReactNode => {
  /* The attribute lands on <html> in an effect, so the first paint after a flip still holds the
     previous values. One state bump after the attribute is applied is enough to re-read them. */
  const [, setTick] = useState(0);
  useEffect(() => {
    const frame = requestAnimationFrame((): void => setTick((tick) => tick + 1));
    return (): void => cancelAnimationFrame(frame);
  }, [theme]);

  return (
    <div className="lab__tokens">
      <section className="lab__card">
        <h3 className="lab__card-title">Palette</h3>

        <div className="lab__card-body">
          { PALETTE_FAMILIES.map((family) => (
            <div className="lab__ramp" key={ family }>
              <span className="lab__ramp-name">{ family }</span>

              { PALETTE_STOPS.map((stop) => {
                const token = `--ods-palette-${family}-${stop}`;
                const value = read(token);
                return (
                  <span
                    className={ value ? 'lab__ramp-stop' : 'lab__ramp-stop lab__ramp-stop--absent' }
                    key={ stop }
                    style={ value ? { background: `var(${token})` } : undefined }
                    title={ `${token}: ${value || 'not defined'}` }>
                    { stop }
                  </span>
                );
              }) }
            </div>
          )) }
        </div>
      </section>

      { ROLE_GROUPS.map(([group, roles]) => (
        <section className="lab__card" key={ group }>
          <h3 className="lab__card-title">{ group }</h3>

          <div className="lab__card-body lab__card-body--swatches">
            { roles.map((role) => (
              <Swatch key={ role } token={ `--ods-semantic-color-${role}` } />
            )) }
          </div>
        </section>
      )) }
    </div>
  );
};

export { TokenSwatches };
