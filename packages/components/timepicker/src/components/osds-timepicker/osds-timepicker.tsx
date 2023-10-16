import type { OdsTimepickerAttribute } from './interfaces/attributes';
import { Component, Host, Prop, h, Watch, Element } from '@stencil/core';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

@Component({
  tag: 'osds-timepicker',
  styleUrl: 'osds-timepicker.scss',
  shadow: true,
})
export class OsdsTimepicker implements OdsTimepickerAttribute {
  @Element() el!: HTMLElement;
  inputEl?: HTMLInputElement;

  /** @see OdsTimepickerAttribute.clearable */
  @Prop({ reflect: true }) public clearable? = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsTimepickerAttribute.disabled */
  @Prop({ reflect: true }) public disabled? = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsTimepickerAttribute.error */
  @Prop({ reflect: true }) public error? = DEFAULT_ATTRIBUTE.error;

  /** @see OdsTimepickerAttribute.inline */
  @Prop({ reflect: true }) public inline? = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsTimepickerAttribute.value */
  @Prop({ reflect: true, mutable: true }) public value? = DEFAULT_ATTRIBUTE.value;

  /** @see OdsTimepickerAttribute.withSeconds */
  @Prop({ reflect: true }) public withSeconds? = DEFAULT_ATTRIBUTE.withSeconds;

  @Watch('withSeconds')
  checkSeconds(withSeconds: boolean) {
    if(withSeconds === false && this.inputEl?.value.match(/:/g)?.length === 2 ){
      const inputValue = this.inputEl.value.split(':');
      this.inputEl.value = inputValue[0].concat(':', inputValue[1]);
    }
  }

  render() {
    const {
      clearable,
      disabled,
      error,
      value,
      inline,
      withSeconds,
    } = this;

    return (
      <Host>
        <osds-input clearable={ clearable }
                    disabled={ disabled }
                    error={ error }
                    inline={ inline }
                    step={ withSeconds ? 1 : "" }
                    type={ ODS_INPUT_TYPE.time }
                    value={ value }
                    {...{
                      ref: (el: HTMLElement) => this.inputEl = el as HTMLInputElement,
                    }}
        >
        </osds-input>
      </Host>
    );
  }
}
