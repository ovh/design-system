import { Component, Element, Host, Prop, h } from '@stencil/core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import {
  OdsTile,
  OdsTileController,
  OdsTileEvents,
  OdsTileMethods,
  OdsTileSize,
  OdsTileVariant,
  odsTileDefaultAttributes
} from '@ovhcloud/ods-core';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start button content
 * @slot (unnamed) - Tile content
 * @slot end - Fixed end button content
 */
@Component({
  tag: 'osds-tile',
  styleUrl: 'osds-tile.scss',
  shadow: true
})
export class OsdsTile implements OdsTile<OdsStencilMethods<OdsTileMethods>, OdsStencilEvents<OdsTileEvents>> {
  controller: OdsTileController = new OdsTileController(this);

  @Element() el!: HTMLElement;

  /** @see OdsTileAttributes.hasFocus */
  @Prop({ reflect: true, mutable: true }) public hasFocus: boolean = odsTileDefaultAttributes.hasFocus;

  /** @see OdsTileAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsTileDefaultAttributes.color;

  /** @see OdsTileAttributes.disabled */
  @Prop({ reflect: true }) public disabled: boolean = odsTileDefaultAttributes.disabled;

  /** @see OdsTileAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = odsTileDefaultAttributes.inline;

  /** @see OdsTileAttributes.rounded */
  @Prop({ reflect: true }) public rounded?: boolean = odsTileDefaultAttributes.rounded;

  /** @see OdsTileAttributes.hoverable */
  @Prop({ reflect: true }) public hoverable?: boolean = odsTileDefaultAttributes.hoverable;

  /** @see OdsTileAttributes.loading */
  @Prop({ reflect: true }) public loading: boolean = odsTileDefaultAttributes.loading;

  /** @see OdsTileAttributes.checking */
  @Prop({ reflect: true }) public checking: boolean = odsTileDefaultAttributes.checking;

  /** @see OdsTileAttributes.checked */
  @Prop({ reflect: true }) public checked: boolean = odsTileDefaultAttributes.checked;

  /** @see OdsTileAttributes.size */
  @Prop({ reflect: true }) public size?: OdsTileSize = odsTileDefaultAttributes.size;

  /** @see OdsTileAttributes.variant */
  @Prop({ reflect: true }) public variant?: OdsTileVariant = odsTileDefaultAttributes.variant;

  /** @see OdsTileBehavior.beforeRender */
  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  render() {
    return (
      <Host {...{
        onClick: () => this.controller.handleClick(),
      }}>
        <slot name={'start'}></slot>
        <span class={'tile__centered-text'}>
            <slot></slot>
          </span>
        <slot name={'end'}></slot>
      </Host>
    );
  }
}
