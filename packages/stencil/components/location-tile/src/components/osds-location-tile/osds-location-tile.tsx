import { Component, Element, Host, Prop, h } from '@stencil/core';
import {
  ODS_COUNTRY_ISO_CODE,
  OdsLocationTile,
  OdsLocationTileController,
  OdsLocationTileEvents,
  OdsLocationTileMethods,
  OdsLocationTileVariant,
  OdsTileSize,
  odsLocationTileDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

@Component({
  tag: 'osds-location-tile',
  styleUrl: 'osds-location-tile.scss',
  shadow: true
})
export class OsdsLocationTile implements OdsLocationTile<OdsStencilMethods<OdsLocationTileMethods>, OdsStencilEvents<OdsLocationTileEvents>> {
  controller: OdsLocationTileController = new OdsLocationTileController(this);
  @Element() el!: HTMLElement;

  FLEX_MINIMUM_VALUE = 1;
  FLEX_MAXIMUM_VALUE = 100;

  /** @see OdsLocationTileAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsLocationTileDefaultAttributes.color;

  /** @see OdsLocationTileAttributes.disabled */
  @Prop({ reflect: true }) public disabled = odsLocationTileDefaultAttributes.disabled;

  /** @see OdsLocationTileAttributes.flex */
  @Prop({ reflect: true }) public flex = odsLocationTileDefaultAttributes.flex;

  /** @see OdsLocationTileAttributes.iso */
  @Prop({ reflect: true }) public iso?: ODS_COUNTRY_ISO_CODE = odsLocationTileDefaultAttributes.iso;

  /** @see OdsLocationTileAttributes.interactive */
  @Prop({ reflect: true }) public interactive = odsLocationTileDefaultAttributes.interactive;

  /** @see OdsLocationTileAttributes.checking */
  @Prop({ reflect: true }) public checking = odsLocationTileDefaultAttributes.checking;

  /** @see OdsLocationTileAttributes.checked */
  @Prop({ reflect: true }) public checked = odsLocationTileDefaultAttributes.checked;

  /** @see OdsLocationTileAttributes.size */
  @Prop({ reflect: true }) public size?: OdsTileSize = odsLocationTileDefaultAttributes.size;

  /** @see OdsLocationTileAttributes.variant */
  @Prop({ reflect: true }) public variant?: OdsLocationTileVariant = odsLocationTileDefaultAttributes.variant;

  /** @see OdsLocationTileAttributes.hasFocus */
  @Prop({ reflect: true }) public hasFocus: boolean = odsLocationTileDefaultAttributes.hasFocus;

  /** @see OdsLocationTileBehavior.beforeRender */
  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  render() {
    const { color, flex, size, disabled, interactive, checked, checking } = this;

    return (
      <Host {...{
        tabindex: interactive ? '0' : '-1'
      }}>
        <osds-tile {...{
          color,
          flex,
          size,
          disabled,
          interactive,
          checked,
          checking
        }}>
          <div class={"location__content"}>
            <div class={'location__flag-wrapper'}>
              <osds-flag class={'location__flag'}
                         iso={this.iso}></osds-flag>
            </div>
            <div class={'location__text-wrapper'}>
              <slot name={'country'}></slot>
              <slot name={'city'}></slot>
              <slot name={'info'}></slot>
            </div>
          </div>
        </osds-tile>
      </Host>
    );
  }
}
