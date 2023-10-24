import type { OdsIconAttribute } from './interfaces/attributes';
import icons from '@ovhcloud/ods-common-theming/icons/icons.data.json';
import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_ICON_NAME } from './constants/icon-name';
import { ODS_ICON_SIZE } from './constants/icon-size';
import { OdsIconController } from './core/controller';

@Component({
  tag: 'osds-icon',
  styleUrl: 'osds-icon.scss',
  shadow: true,
})
export class OsdsIcon implements OdsIconAttribute {
  controller: OdsIconController = new OdsIconController(this);
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public ariaName: string = DEFAULT_ATTRIBUTE.ariaName;

  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  @Prop({ reflect: true }) public hoverable?: boolean = DEFAULT_ATTRIBUTE.hoverable;

  @Prop({ reflect: true }) public name?: ODS_ICON_NAME = DEFAULT_ATTRIBUTE.name;

  @Prop({ reflect: true }) public size?: ODS_ICON_SIZE = DEFAULT_ATTRIBUTE.size;

  @Watch('ariaName')
  validateAriaName(ariaName?: string): void {
    this.controller.validateAriaName(ariaName);
  }

  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const base64Icon = icons[this.name];
    return (
      <Host 
        class={{
          'ods-icon': true,
          'ods-icon--contrasted': this.contrasted ?? false,
          'ods-icon--hoverable': this.hoverable ?? false,
        }}
        aria-hidden={ true }
        alt={ this.ariaName }
        style={
          (base64Icon ? { '--icon-mask-image': `url("${base64Icon}")` } : { })
        }
      ></Host>
    );
  }
}
