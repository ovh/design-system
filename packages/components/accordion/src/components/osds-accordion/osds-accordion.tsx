import type { HTMLStencilElement } from '@stencil/core/internal';
import type { OdsAccordionAttribute } from './interfaces/attributes';
import type { ODS_ACCORDION_SIZE } from './constants/accordion-size';
import type { OdsAccordionEvent } from './interfaces/events';
import type { OsdsAccordionGroup } from '../osds-accordion-group/osds-accordion-group';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsAccordionController } from './core/controller';
import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';

@Component({
  tag: 'osds-accordion',
  styleUrl: 'osds-accordion.scss',
  shadow: true,
})
export class OsdsAccordion implements OdsAccordionAttribute, OdsAccordionEvent {
  controller: OdsAccordionController = new OdsAccordionController(this);
  detailsEl?: HTMLDetailsElement;
  accordionGroup: (HTMLStencilElement & OsdsAccordionGroup) | null = null;

  @Element() el!: HTMLStencilElement;

  /** @see OdsAccordionAttributes.color */
  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsAccordionAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsAccordionAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsAccordionAttributes.opened */
  @Prop({ reflect: true, mutable: true }) public opened?: boolean = DEFAULT_ATTRIBUTE.opened;

  /** @see OdsAccordionAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_ACCORDION_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsAccordionEvents.odsAccordionToggle */
  @Event() odsAccordionToggle!: EventEmitter<boolean>;

  /**
   * once the component is full loaded, we sync the `opened` status with `details` vanilla tag
   */
  componentDidLoad(): void {
    this.onOpenedChanged();
  }

  /**
   * on update of `opened` property by the user, we sync the `opened` status with `details` vanilla tag
   */
  @Watch('opened')
  onOpenedChanged(): void {
    this.afterInit();
  }

  beforeInit(): void {
    this.controller.beforeInit();
  }

  afterInit(): void {
    this.controller.syncOpenedOnDetail();
  }

  onDestroy(): void {
    this.controller.onDestroy();
  }

  connectedCallback(): void {
    this.beforeInit();
  }

  disconnectedCallback(): void {
    this.onDestroy();
  }

  emitToggle(opened: boolean): void {
    this.odsAccordionToggle.emit(opened);
  }

  render() {
    const { opened, color, contrasted } = this;

    return (
      <Host>
        <details class={'accordion__wrapper'}
          {...{
            onToggle: () => {
              this.controller.onToggle();
            },
            ref: (el) => this.detailsEl = el as HTMLDetailsElement,
          }}>
          <summary class={'accordion_summary'}>
            <slot name="summary"></slot>
            <osds-icon {...{
              name: opened ? ODS_ICON_NAME.CHEVRON_UP : ODS_ICON_NAME.CHEVRON_DOWN,
              size: ODS_ICON_SIZE.sm,
              color,
              contrasted,
            }}></osds-icon>
          </summary>
          <osds-collapsible opened={opened}>
            <slot></slot>
          </osds-collapsible>
        </details>
      </Host>
    );
  }
}
