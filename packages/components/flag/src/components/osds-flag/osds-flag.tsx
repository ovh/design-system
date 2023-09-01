import type { OdsFlagAttribute } from './interfaces/attributes';
import { OdsLogger, odsHasAriaHidden } from '@ovhcloud/ods-common-core'
import { Build, Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsFlagController } from './core/controller'
import { ODS_FLAG_ISO_CODE } from './constants/flag-iso-code';

@Component({
  tag: 'osds-flag',
  styleUrl: 'osds-flag.scss',
  shadow: true
})
export class OsdsFlag implements OdsFlagAttribute {
  controller: OdsFlagController = new OdsFlagController(this);

  @Element() hostElement!: HTMLElement;

  /** @see OdsFlagAttributes.assetPath */
  @Prop({ reflect: true }) assetPath = DEFAULT_ATTRIBUTE.assetPath;
  /** @see OdsFlagAttributes.iso */
  @Prop({ reflect: true, mutable: true }) iso?: ODS_FLAG_ISO_CODE = DEFAULT_ATTRIBUTE.iso;
  /** @see OdsFlagAttributes.lazy */
  @Prop({ reflect: true }) lazy = DEFAULT_ATTRIBUTE.lazy;
  /** @see OdsFlagAttributes.src */
  @Prop({ reflect: true }) src = DEFAULT_ATTRIBUTE.src;

  @State() private ariaLabel?: string;
  @State() private visible = false;
  @State() private svgContent?: string;

  private logger = new OdsLogger('OsdsFlag');

  connectedCallback() {
    this.logger.log('flag connectedCallback');
    this.onInit();
  }

  disconnectedCallback() {
    this.onDestroy();
  }

  /** @see OdsFlagBehavior.getAssetPath */
  getAssetPath(url: string) {
    this.logger.log('flag getAssetPath');
    // todo currently we are not using getAssetPath from stencil since it doesn't work in React integration
    //return getAssetPath(url);
    return url;
  }

  /** @see OdsFlagBehavior.load */
  @Watch('iso')
  @Watch('assetPath')
  @Watch('src')
  load() {
    this.logger.log('flag load');
    this.logger.log('[load]', `${this.iso} - iso, assetPath or src updated. load...`);
    this.controller.load(this.visible, Build.isBrowser)
      .then((svgContent) => {
        this.logger.log('[load]', `${this.iso} - content loaded`);
        this.svgContent = svgContent || '';
      });
    this.ariaLabel = this.iso;
  }

  /** @see OdsFlagBehavior.onDestroy */
  onDestroy() {
    this.controller.onDestroy();
  }

  /** @see OdsFlagBehavior.onInit */
  onInit() {
    this.logger.log('flag onInit');
    this.logger.log('[onInit]');
    this.controller.onInit(() => {
      this.visible = true;
    }, Build.isBrowser);
  }

  render() {
    this.logger.log('flag render');
    const { ariaLabel } = this;
    return (
      <Host aria-label={ariaLabel && !odsHasAriaHidden(this.hostElement) ? ariaLabel : null} role="img">
        {Build.isBrowser && this.svgContent ? (
          <div class="svg-inner" innerHTML={this.svgContent}></div>
        ) : (
          <div class="svg-inner flag-default"></div>
        )}
      </Host>
    );
  }
}
