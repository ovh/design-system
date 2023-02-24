import { Build, Component, Element, getAssetPath, h, Host, Prop, State, Watch } from '@stencil/core';
import {
  ODS_COUNTRY_ISO_CODE,
  OdsFlag,
  OdsFlagController,
  odsFlagDefaultAttributes,
  OdsFlagEvents,
  OdsFlagMethods,
  odsHasAriaHidden,
  OdsLogger
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'osds-flag',
  styleUrl: 'osds-flag.scss',
  shadow: true
})
export class OsdsFlag implements OdsFlag<OdsStencilMethods<OdsFlagMethods>, OdsStencilEvents<OdsFlagEvents>> {
  controller: OdsFlagController = new OdsFlagController(this);

  @Element() hostElement!: HTMLStencilElement;

  /** @see OdsFlagAttributes.assetPath */
  @Prop({ reflect: true }) assetPath = odsFlagDefaultAttributes.assetPath;
  /** @see OdsFlagAttributes.iso */
  @Prop({ reflect: true, mutable: true }) iso: ODS_COUNTRY_ISO_CODE | undefined = odsFlagDefaultAttributes.iso;
  /** @see OdsFlagAttributes.lazy */
  @Prop({ reflect: true }) lazy = odsFlagDefaultAttributes.lazy;
  /** @see OdsFlagAttributes.src */
  @Prop({ reflect: true }) src = odsFlagDefaultAttributes.src;

  @State() private ariaLabel?: string;
  @State() private visible = false;
  @State() private svgContent?: string;

  private logger = new OdsLogger('OsdsFlag');

  connectedCallback() {
    console.log('flag connectedCallback');
    this.onInit();
  }

  disconnectedCallback() {
    this.onDestroy();
  }

  /** @see OdsFlagBehavior.getAssetPath */
  getAssetPath(url: string) {
    console.log('flag getAssetPath');
    return getAssetPath(url);
  }

  /** @see OdsFlagBehavior.load */
  @Watch('iso')
  @Watch('assetPath')
  @Watch('src')
  load() {
    console.log('flag load');
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
    console.log('flag onInit');
    this.logger.log('[onInit]');
    this.controller.onInit(() => {
      this.visible = true;
    }, Build.isBrowser);
  }

  render() {
    console.log('flag render');
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
