import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import {
  OdsAccordion,
  OdsAccordionController,
  OdsAccordionEvents,
  OdsAccordionGroup,
  OdsAccordionMethods,
  OdsAccordionSize,
  OdsIconName,
  OdsIconSize,
  odsAccordionDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot (summary) - Accordion summary
 * @slot (unnamed) - Accordion content
 */
@Component({
  tag: 'osds-accordion',
  styleUrl: 'osds-accordion.scss',
  shadow: true
})
export class OsdsAccordion implements OdsAccordion<OdsStencilMethods<OdsAccordionMethods>, OdsStencilEvents<OdsAccordionEvents>> {

  controller: OdsAccordionController = new OdsAccordionController(this);
  detailsEl?: HTMLDetailsElement;
  accordionGroup: (HTMLStencilElement & OdsAccordionGroup) | null = null;

  @Element() el!: HTMLStencilElement;

  /** @see OdsAccordionAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsAccordionDefaultAttributes.color;

  /** @see OdsAccordionAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = odsAccordionDefaultAttributes.contrasted;

  /** @see OdsAccordionAttributes.size */
  @Prop({ reflect: true }) public size?: OdsAccordionSize = odsAccordionDefaultAttributes.size;

  /** @see OdsAccordionAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = odsAccordionDefaultAttributes.disabled;

  /** @see OdsAccordionAttributes.opened */
  @Prop({ reflect: true, mutable: true }) public opened?: boolean = odsAccordionDefaultAttributes.opened;

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
    this.controller.beforeInit<OsdsAccordion>();
  }

  afterInit(): void {
    this.controller.syncOpenedOnDetail();
  }

  onDestroy(): void {
    this.controller.onDestroy<OsdsAccordion>();
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
                   ref: (el) => this.detailsEl = el as HTMLDetailsElement
                 }}>
          <summary class={'accordion_summary'}>
            <slot name="summary"></slot>
            <osds-icon {...{
              name: opened ? OdsIconName.CHEVRON_UP : OdsIconName.CHEVRON_DOWN,
              size: OdsIconSize.sm,
              color,
              contrasted
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
