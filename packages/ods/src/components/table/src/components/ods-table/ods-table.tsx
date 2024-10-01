import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';
import { ODS_TABLE_SIZE, type OdsTableSize } from '../../constants/table-size';
import { ODS_TABLE_VARIANT, type OdsTableVariant } from '../../constants/table-variant';

@Component({
  shadow: false,
  styleUrl: 'ods-table.scss',
  tag: 'ods-table',
})
export class OdsTable {
  @Prop({ reflect: true }) public size: OdsTableSize = ODS_TABLE_SIZE.md;
  @Prop({ reflect: true }) public variant: OdsTableVariant = ODS_TABLE_VARIANT.default;

  render(): FunctionalComponent {
    return (
      <Host class={ `ods-table ods-table--${this.size} ods-table--${this.variant}` }>
        <slot></slot>
      </Host>
    );
  }
}
