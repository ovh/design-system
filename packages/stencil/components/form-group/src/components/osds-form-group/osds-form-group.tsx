import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsFormGroup,
  OdsFormGroupController,
  OdsFormGroupEvents,
  OdsFormGroupMethods,
  // odsFormGroupDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - FormGroup content
 */
@Component({
  tag: 'osds-form-group',
  styleUrl: 'osds-form-group.scss',
  shadow: true
})
export class OsdsFormGroup implements OdsFormGroup<OdsStencilMethods<OdsFormGroupMethods>, OdsStencilEvents<OdsFormGroupEvents>> {
  controller: OdsFormGroupController = new OdsFormGroupController(this);
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsFormGroupDefaultAttributes.color;

  /**
   * @see OdsFormGroupBehavior.beforeRender
   */
  beforeRender(): void {

  }

  componentWillRender(): void {

  }

  render() {

    return (
      <Host>

        {/* UI template */}

      </Host>
    );
  }
}
