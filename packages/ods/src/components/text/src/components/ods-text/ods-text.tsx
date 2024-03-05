import type { FocusEventDetail } from '../../interfaces/event';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { ODS_TEXT_PRESET } from '../../constants/text-preset';

@Component({
  shadow: true,
  styleUrl: 'ods-text.scss',
  tag: 'ods-text',
})
export class OdsText {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) neededFlag!: boolean;
  @Prop({ reflect: true }) preset? = ODS_TEXT_PRESET.text;

  @State() hasFocus = false;

  @Event() focusEvent!: EventEmitter<FocusEventDetail>;

  @Listen('focus')
  onFocus(): void {
    console.log('I am focused'); // eslint-disable-line
    this.focusEvent.emit({ hello: 'world' });
  }

  @Method()
  async getFormattedText(): Promise<string> {
    return Promise.resolve('I am a formatted text');
  }

  @Watch('preset')
  onPresetChange(): void {
    console.log('preset has changed!'); // eslint-disable-line
    this.myFunc();
  }

  private myFunc(): void {
    console.log('This is private!'); // eslint-disable-line
  }

  render(): FunctionalComponent {
    return (
      <Host class={ `ods-text ods-text--${this.preset}` }>
        {/*<div tabIndex={1}>*/}
        {/*  <slot></slot>*/}
        {/*</div>*/}
        <button>1</button>
        <input type="text" />
        <button>3</button>
      </Host>
    );
  }
}
