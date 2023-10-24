import type { OdsFlagAttribute } from './interfaces/attributes';
import type { ODS_FLAG_ISO_CODE_UNION } from './constants/flag-iso-code';
import { odsHasAriaHidden } from '@ovhcloud/ods-common-core'
import { Build, Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsFlagController } from './core/controller';

@Component({
  tag: 'osds-flag',
  styleUrl: 'osds-flag.scss',
  shadow: true,
})
export class OsdsFlag implements OdsFlagAttribute {
  controller: OdsFlagController = new OdsFlagController(this);

  @Element() hostElement!: HTMLElement;

  @Prop({ reflect: true }) assetPath = DEFAULT_ATTRIBUTE.assetPath;
  @Prop({ reflect: true, mutable: true }) iso?: ODS_FLAG_ISO_CODE_UNION = DEFAULT_ATTRIBUTE.iso;
  @Prop({ reflect: true }) lazy = DEFAULT_ATTRIBUTE.lazy;
  @Prop({ reflect: true }) src = DEFAULT_ATTRIBUTE.src;

  @State() private ariaLabel?: ODS_FLAG_ISO_CODE_UNION;
  @State() private visible = false;
  @State() private svgContent?: string;

  connectedCallback() {
    this.onInit();
  }

  disconnectedCallback() {
    this.onDestroy();
  }

  getAssetPath(url: string) {
    // TODO currently we are not using getAssetPath from stencil since it doesn't work in React integration
    //return getAssetPath(url);
    return url;
  }

  @Watch('iso')
  @Watch('assetPath')
  @Watch('src')
  async load() {
    this.svgContent = await this.controller.load(this.visible, Build.isBrowser) || '';
    this.ariaLabel = this.iso;
  }

  onDestroy() {
    this.controller.onDestroy();
  }

  onInit() {
    this.controller.onInit(() => {
      this.visible = true;
    }, Build.isBrowser);
  }

  render() {
    const { ariaLabel } = this;
    return (
      <Host class="flag"
            aria-label={ ariaLabel && !odsHasAriaHidden(this.hostElement) ? ariaLabel : null }
            role="img">
        {
          Build.isBrowser && this.svgContent ?
          <div class="flag__svg"
               innerHTML={ this.svgContent }>
          </div> :
          <div class="flag__svg flag__svg--default"></div>
        }
      </Host>
    );
  }
}
