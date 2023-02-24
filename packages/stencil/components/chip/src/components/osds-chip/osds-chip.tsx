import { Component, Element, Host, Prop, h } from '@stencil/core';
import {
  OdsChip,
  OdsChipController,
  OdsChipEvents,
  OdsChipMethods,
  OdsChipSize,
  OdsChipVariant,
  OdsIconName,
  OdsIconSize,
  odsChipDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot (unnamed) - Chip content
 */
@Component({
  tag: 'osds-chip',
  styleUrl: 'osds-chip.scss',
  shadow: true
})
export class OsdsChip implements OdsChip<OdsStencilMethods<OdsChipMethods>, OdsStencilEvents<OdsChipEvents>> {
  controller: OdsChipController = new OdsChipController(this);
  @Element() el!: HTMLElement;

  /** @see OdsChipAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsChipDefaultAttributes.color;

  /** @see OdsChipAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = odsChipDefaultAttributes.contrasted;

  /** @see OdsChipAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = odsChipDefaultAttributes.disabled;

  /** @see OdsChipAttributes.flex */
  @Prop({ reflect: true }) public flex?: boolean = odsChipDefaultAttributes.flex;

  /** @see OdsChipAttributes.removable */
  @Prop({ reflect: true }) public removable?: boolean = odsChipDefaultAttributes.removable;

  /** @see OdsChipAttributes.selectable */
  @Prop({ reflect: true }) public selectable?: boolean = odsChipDefaultAttributes.selectable;

  /** @see OdsChipAttributes.size */
  @Prop({ reflect: true }) public size?: OdsChipSize = odsChipDefaultAttributes.size;

  /** @see OdsChipAttributes.variant */
  @Prop({ reflect: true }) public variant?: OdsChipVariant = odsChipDefaultAttributes.variant;

  /**
   * @see OdsChipBehavior.beforeRender
   */
  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  render() {
    const { color, contrasted, removable, selectable } = this;
    const isSelectable = selectable || removable;

    return (
      <Host {...{
        tabindex: isSelectable ? '0' : '-1',
      }}>
        <span class={'chip__wrapper'}>
          <slot></slot>
          {removable ? <osds-icon {...{ name: OdsIconName.CLOSE, size: OdsIconSize.xs, color, contrasted }}></osds-icon> : ''}
        </span>
      </Host>
    );
  }
}
