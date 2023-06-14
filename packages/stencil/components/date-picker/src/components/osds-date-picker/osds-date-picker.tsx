import { Component, Element, Host, h, Prop } from '@stencil/core';
import {
  OdsDatePicker,
  OdsDatePickerController,
  OdsDatePickerEvents,
  OdsDatePickerMethods,
  // odsDatePickerDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker'

/**
 * @slot (unnamed) - DatePicker content
 */
@Component({
  tag: 'osds-date-picker',
  styleUrl: 'osds-date-picker.scss',
  shadow: true
})
export class OsdsDatePicker implements OdsDatePicker<OdsStencilMethods<OdsDatePickerMethods>, OdsStencilEvents<OdsDatePickerEvents>> {
  controller: OdsDatePickerController = new OdsDatePickerController(this);
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public range = false;

  componentDidLoad() {
    if(!this?.el?.shadowRoot) return;

    if(this.range) {
        new DateRangePicker(this.el.shadowRoot.querySelector('.js-datepicker') as HTMLElement, {
            format: 'dd/mm/yyyy',
        })
    } else {
      new Datepicker(this.el.shadowRoot.querySelector('.js-datepicker') as HTMLElement, {
        format: 'dd/mm/yyyy',
      })
    }
  }

  render() {
    return (
      <Host>
        <input class="js-datepicker" />
      </Host>
    );
  }
}
