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
  shadow: true
})
export class OsdsIcon implements OdsIconAttribute {
  controller: OdsIconController = new OdsIconController(this);
  @Element() el!: HTMLElement;

  /** @see OdsIconAttributes.ariaName */
  @Prop({ reflect: true }) public ariaName: string = DEFAULT_ATTRIBUTE.ariaName;

  /** @see OdsIconAttributes.color */
  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsIconAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsIconAttributes.hoverable */
  @Prop({ reflect: true }) public hoverable?: boolean = DEFAULT_ATTRIBUTE.hoverable;

  /** @see OdsIconAttributes.name */
  @Prop({ reflect: true }) public name?: ODS_ICON_NAME = DEFAULT_ATTRIBUTE.name;

  /** @see OdsIconAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_ICON_SIZE = DEFAULT_ATTRIBUTE.size;

  @Watch('ariaName')
  validateAriaName(ariaName?: string): void {
    this.controller.validateAriaName(ariaName);
  }

  /**
   * @see OdsIconBehavior.beforeRender
   */
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
      <Host {...{
        'aria-hidden': true,
        'alt': this.ariaName,
        'style': {
          '--test': this.name,
          ...(base64Icon ? { '--icon-mask-image': `url("${base64Icon}")` } : {}),
        }
      }}></Host>
    );
  }
}
