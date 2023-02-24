import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import {
  OdsIcon,
  OdsIconController,
  OdsIconEvents,
  OdsIconMethods,
  OdsIconName,
  OdsIconSize,
  odsIconDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import icons from '@ovhcloud/ods-theming/icons/icons.data.json';

@Component({
  tag: 'osds-icon',
  styleUrl: 'osds-icon.scss',
  shadow: true
})
export class OsdsIcon implements OdsIcon<OdsStencilMethods<OdsIconMethods>, OdsStencilEvents<OdsIconEvents>> {
  controller: OdsIconController = new OdsIconController(this);
  @Element() el!: HTMLElement;

  /** @see OdsIconAttributes.ariaName */
  @Prop({ reflect: true }) public ariaName: string = odsIconDefaultAttributes.ariaName;

  /** @see OdsIconAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsIconDefaultAttributes.color;

  /** @see OdsIconAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = odsIconDefaultAttributes.contrasted;

  /** @see OdsIconAttributes.name */
  @Prop({ reflect: true }) public name?: OdsIconName = odsIconDefaultAttributes.name;

  /** @see OdsIconAttributes.size */
  @Prop({ reflect: true }) public size?: OdsIconSize = odsIconDefaultAttributes.size;

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
