import type { OdsMediumAttribute } from './interfaces/attributes';
import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsMediumController } from './core/controller';

/**
 * @slot (unnamed) - Medium content
 */
@Component({
  shadow: true,
  styleUrl: 'osds-medium.scss',
  tag: 'osds-medium',
})
export class OsdsMedium implements OdsMediumAttribute {
  controller: OdsMediumController = new OdsMediumController(this);

  @Prop({ reflect: true }) public alt: string = DEFAULT_ATTRIBUTE.alt;

  @Prop({ reflect: true }) public height?: number = DEFAULT_ATTRIBUTE.height;

  @Prop({ reflect: true }) public src: string = DEFAULT_ATTRIBUTE.src;

  @Prop({ reflect: true }) public width?: number = DEFAULT_ATTRIBUTE.width;

  @Watch('height')
  validateHeight(height?: number): void {
    this.controller.validateHeight(height);
  }

  @Watch('width')
  validateWidth(width?: number): void {
    this.controller.validateWidth(width);
  }

  beforeInit(): void {
    this.controller.validateAlt(this.alt);
    this.controller.validateSrc(this.src);
    this.controller.validateHeight(this.height);
    this.controller.validateWidth(this.width);
  }

  connectedCallback(): void {
    this.beforeInit();
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <img alt={ this.alt }
          src={ this.src }
          height={ this.height ?? undefined }
          width={ this.width ?? undefined }
        />
      </Host>
    );
  }
}
