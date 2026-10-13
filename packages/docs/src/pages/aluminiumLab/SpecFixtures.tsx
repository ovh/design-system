import { type CSSProperties, type ReactNode } from 'react';
import { ButtonGroup, ButtonGroupItem } from '../../../../ods-react/src/components/button-group/src';
import { ICON_NAME } from '../../../../ods-react/src/components/icon/src';
import { MESSAGE_COLOR, MESSAGE_VARIANT, Message, MessageBody, MessageIcon } from '../../../../ods-react/src/components/message/src';
import { TABS_VARIANT, Tab, TabContent, TabList, Tabs } from '../../../../ods-react/src/components/tabs/src';
import { Toggle, ToggleControl, ToggleLabel } from '../../../../ods-react/src/components/toggle/src';

/* What the per-component ThemeGenerator fixtures do not reach, and the new token list changes:
   a state that needs an interaction, a variant no fixture instantiates, and the one shape that
   has no component API at all yet. Everything else is already covered by the gallery below. */

const ROW: CSSProperties = { alignItems: 'center', display: 'flex', flexFlow: 'row wrap', gap: '16px' };

const STATUSES = ['neutral', 'information', 'success', 'warning', 'critical'] as const;

/* Badge's three emphases. There is no `emphasis` prop, so these are plain spans painted straight
   from the tokens - a picture of the target, not a themed Badge. */
const BadgeEmphasis = ({ emphasis, status }: { emphasis: 'high' | 'low' | 'medium', status: string }): ReactNode => {
  const base: CSSProperties = {
    alignItems: 'center',
    borderRadius: '999px',
    display: 'inline-flex',
    fontSize: '0.875rem',
    lineHeight: 1,
    minHeight: 'var(--ods-semantic-size-block-size-xs)',
    padding: '0 8px',
  };
  const SKINS: Record<string, CSSProperties> = {
    high: {
      background: `var(--ods-semantic-color-surface-${status}-subtle)`,
      border: `var(--ods-semantic-border-thickness) solid var(--ods-semantic-color-border-${status}-strong)`,
      color: `var(--ods-semantic-color-content-on-${status})`,
    },
    low: {
      background: 'transparent',
      border: 'var(--ods-semantic-border-thickness) solid transparent',
      color: `var(--ods-semantic-color-content-${status})`,
    },
    medium: {
      background: 'transparent',
      border: `var(--ods-semantic-border-thickness) solid var(--ods-semantic-color-border-${status}-subtle)`,
      color: `var(--ods-semantic-color-content-${status})`,
    },
  };

  return <span style={{ ...base, ...SKINS[emphasis] }}>{ status }</span>;
};

const SpecFixtures = (): ReactNode => (
  <>
    <section className="lab__card" id="fixture-tabs-switch">
      <h3 className="lab__card-title">Tabs - switch variant</h3>
      <p className="lab__card-note">Track surface-segmented, selected chip surface-raised with the control shadow. No per-component fixture instantiates this variant.</p>

      <div className="lab__card-body">
        <Tabs defaultValue="one" variant={ TABS_VARIANT.switch }>
          <TabList>
            <Tab value="one">Selected</Tab>
            <Tab value="two">Idle</Tab>
            <Tab value="three" disabled>Disabled</Tab>
          </TabList>
          <TabContent value="one">Panel one</TabContent>
          <TabContent value="two">Panel two</TabContent>
          <TabContent value="three">Panel three</TabContent>
        </Tabs>
      </div>
    </section>

    <section className="lab__card" id="fixture-toggle-checked">
      <h3 className="lab__card-title">Toggle - checked</h3>
      <p className="lab__card-note">The checked body moves from the brand blue to surface-control-solid, and keeps it on hover. Hover each one to see the difference between the two sets.</p>

      <div className="lab__card-body" style={ ROW }>
        <Toggle defaultChecked>
          <ToggleControl />
          <ToggleLabel>Checked</ToggleLabel>
        </Toggle>

        <Toggle defaultChecked withLabels>
          <ToggleControl />
          <ToggleLabel>With labels</ToggleLabel>
        </Toggle>

        <Toggle defaultChecked disabled>
          <ToggleControl />
          <ToggleLabel>Checked disabled</ToggleLabel>
        </Toggle>

        <Toggle defaultChecked invalid>
          <ToggleControl />
          <ToggleLabel>Checked invalid</ToggleLabel>
        </Toggle>
      </div>
    </section>

    <section className="lab__card" id="fixture-button-group-selected">
      <h3 className="lab__card-title">Button Group - selected item</h3>
      <p className="lab__card-note">surface-selected-solid with content-on-selected-solid as the ink.</p>

      <div className="lab__card-body">
        <ButtonGroup defaultValue={ ['option-2'] }>
          <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
          <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
          <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
        </ButtonGroup>
      </div>
    </section>

    <section className="lab__card" id="fixture-message-light">
      <h3 className="lab__card-title">Message - light variant, every status</h3>
      <p className="lab__card-note">The list asks for border-&lt;status&gt;-subtle here; the branch draws the border in the text colour, and Message exposes no variant hook on the DOM, so this one cannot be re-aimed from a stylesheet.</p>

      <div className="lab__card-body" style={{ display: 'inline-flex', flexFlow: 'column', gap: '8px' }}>
        <Message color={ MESSAGE_COLOR.neutral } variant={ MESSAGE_VARIANT.light }>
          <MessageIcon name={ ICON_NAME.circleInfo } />
          <MessageBody>Neutral</MessageBody>
        </Message>
        <Message color={ MESSAGE_COLOR.information } variant={ MESSAGE_VARIANT.light }>
          <MessageIcon name={ ICON_NAME.circleInfo } />
          <MessageBody>Information</MessageBody>
        </Message>
        <Message color={ MESSAGE_COLOR.success } variant={ MESSAGE_VARIANT.light }>
          <MessageIcon name={ ICON_NAME.circleCheck } />
          <MessageBody>Success</MessageBody>
        </Message>
        <Message color={ MESSAGE_COLOR.warning } variant={ MESSAGE_VARIANT.light }>
          <MessageIcon name={ ICON_NAME.triangleExclamation } />
          <MessageBody>Warning</MessageBody>
        </Message>
        <Message color={ MESSAGE_COLOR.critical } variant={ MESSAGE_VARIANT.light }>
          <MessageIcon name={ ICON_NAME.hexagonExclamation } />
          <MessageBody>Critical</MessageBody>
        </Message>
      </div>
    </section>

    <section className="lab__card" id="fixture-badge-emphasis">
      <h3 className="lab__card-title">Badge - the three emphases</h3>
      <p className="lab__card-note">Not a Badge: plain spans painted from the tokens, because the emphasis prop does not exist. What ships today is the high row; medium and low need the component change.</p>

      <div className="lab__card-body">
        { (['high', 'medium', 'low'] as const).map((emphasis) => (
          <div key={ emphasis } style={{ ...ROW, gap: '8px', marginBottom: '8px' }}>
            <span className="lab__card-note" style={{ margin: 0, width: '64px' }}>{ emphasis }</span>
            { STATUSES.map((status) => <BadgeEmphasis emphasis={ emphasis } key={ status } status={ status } />) }
          </div>
        )) }
      </div>
    </section>
  </>
);

export { SpecFixtures };
