import type { OdsTableAttribute } from './interfaces/attributes';
import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TABLE_VARIANT } from './constants/table-variant';
import { OdsTableController } from './core/controller';

/**
 * @slot (unnamed) - Table content
 */
@Component({
  shadow: false,
  styleUrl: 'osds-table.scss',
  tag: 'osds-table',
})
export class OsdsTable implements OdsTableAttribute {
  controller: OdsTableController = new OdsTableController(this);

  @Prop({ reflect: true }) public size?: string = DEFAULT_ATTRIBUTE.size;

  @Prop({ reflect: true }) public variant?: string = DEFAULT_ATTRIBUTE.variant;

  @Watch('size')
  sizeChanged(size: string): void {
    this.controller.validateSize(size);
  }

  @Watch('variant')
  variantChanged(variant: string): void {
    this.controller.validateVariant(variant);
  }

  beforeInit(): void {
    this.controller.validateSize(this.size);
    this.controller.validateVariant(this.variant);
  }

  connectedCallback(): void {
    this.beforeInit();
  }

  render(): FunctionalComponent {
    return (
      <Host class={{
        'ods-table': true,
        'ods-table--striped': this.variant === ODS_TABLE_VARIANT.striped,
        [`ods-table--${this.size}`]: true,
      }}>
        <slot></slot>
      </Host>
    );
  }
}
