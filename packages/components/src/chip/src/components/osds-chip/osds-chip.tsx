import type { ODS_CHIP_SIZE } from './constants/chip-size';
import type { ODS_CHIP_VARIANT } from './constants/chip-variant';
import type { OdsChipAttribute } from './interfaces/attributes';
import type { OdsChipEvent } from './interfaces/events';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { EventEmitter } from '@stencil/core';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';
import { Component, Element, Event, Host, Listen, Prop, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsChipController } from './core/controller';

/**
 * @slot (unnamed) - Chip content
 */
@Component({
  shadow: true,
  styleUrl: 'osds-chip.scss',
  tag: 'osds-chip',
})
export class OsdsChip implements OdsChipAttribute, OdsChipEvent {
  controller: OdsChipController = new OdsChipController(this);
  @Element() el!: HTMLElement;

  /** @see OdsChipAttributes.color */
  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsChipAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsChipAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsChipAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsChipAttributes.removable */
  @Prop({ reflect: true }) public removable?: boolean = DEFAULT_ATTRIBUTE.removable;

  /** @see OdsChipAttributes.selectable */
  @Prop({ reflect: true }) public selectable?: boolean = DEFAULT_ATTRIBUTE.selectable;

  /** @see OdsChipAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_CHIP_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsChipAttributes.variant */
  @Prop({ reflect: true }) public variant?: ODS_CHIP_VARIANT = DEFAULT_ATTRIBUTE.variant;

  /** @see OdsChipEvents.odsChipRemoval */
  @Event() odsChipRemoval!: EventEmitter<void>;

  @Listen('keydown', { capture: true })
  handleKeyDown(event: KeyboardEvent): void {
    const { key } = event;
    if (key === 'Enter' || key === ' ') {
      this.onRemoval();
    }
  }

  /**
   * @see OdsChipBehavior.beforeRender
   */
  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  emitRemoval(): void {
    this.removable && this.odsChipRemoval.emit();
  }

  onRemoval(): void {
    this.emitRemoval();
  }

  render(): JSX.Element {
    const { color, contrasted, removable, selectable } = this;
    const isSelectable = selectable || removable;

    return (
      <Host tabindex={isSelectable ? '0' : '-1'}>
        <span class={'chip__wrapper'}>
          <slot></slot>
          {
            removable
              ? <osds-icon color={color}
                contrasted={contrasted}
                name={ODS_ICON_NAME.CLOSE}
                size={ODS_ICON_SIZE.xxs}
                onClick={(): void => this.onRemoval()}>
              </osds-icon> : ''
          }
        </span>
      </Host>
    );
  }
}
