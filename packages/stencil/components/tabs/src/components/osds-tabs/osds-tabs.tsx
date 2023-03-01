import { Component, h, Prop, Element, Host, } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsTabs, OdsTabsEvents, OdsTabsSize, OdsTabsMethods, OdsTabsController, odsTabsDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

//import { HTMLStencilElement } from '@stencil/core/internal';
//import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start Tabs content
 * @slot (unnamed) - Tabs content
 * @slot end - Fixed end Tabs content
 */
@Component({
  tag: 'osds-tabs',
  styleUrl: 'osds-tabs.scss',
  shadow: true,
})
export class OsdsTabs implements OdsTabs<OdsStencilMethods<OdsTabsMethods>, OdsStencilEvents<OdsTabsEvents>> {
  /** @see OdsComponent.controller */
  controller: OdsTabsController = new OdsTabsController(this as OdsTabs);

  /** @see OdsTabsBehavior.hostElement */
  @Element() hostElement!: HTMLStencilElement;

  /** @see OdsTabsAttributes.center */
  @Prop({ reflect: true }) public center?: boolean = odsTabsDefaultAttributes.center;
  /** @see OdsTabsAttributes.activeKey */
  @Prop({ reflect: true, mutable: true }) public activeKey?: string = odsTabsDefaultAttributes.defaultActiveKey;
  /** @see OdsTabsAttributes.defaultActiveKey */
  @Prop({ reflect: true, mutable: true }) public defaultActiveKey?: string = odsTabsDefaultAttributes.defaultActiveKey;
  /** @see OdsTabsAttributes.items */
  @Prop({ reflect: true }) public items?: any = odsTabsDefaultAttributes.items;
  /** @see OdsSelectAttributes.size */
  @Prop({ reflect: true }) size?: OdsTabsSize = odsTabsDefaultAttributes.size;

  /** @see OdsButtonBehavior.beforeRender */
  beforeRender(): void {
    //this.controller.vadivdateAttributes();
  }

  afterInit() {
    this.controller.afterInit();
  }

  componentDidLoad() {
    (async () => {
      this.afterInit();
    })();
  }

  render() {
    const Tab7Content = () => (
      <div>
        <div>Des serveurs optimisés pour les jeux vidéo et les plateformes de streaming.</div>
      </div>
    );
    const items = [
      {
        label: 'Serveurs dédiés Rise',
        key: 1,
        children: 'Les serveurs les plus abordables, adaptés à la plupart des usages.',
        disabled: false,
      },
      {
        label: 'Serveurs dédiés Advance',
        key: 2,
        children: 'Des serveurs polyvalents pour les petites et moyennes entreprises.',
        disabled: true,
      },
      {
        label: 'Serveurs dédiés Scale',
        key: 3,
        children: 'Des serveurs conçus pour les infrastructures complexes à haute résilience.',
        disabled: false,
      },
      {
        label: 'Serveurs dédiés High Grade',
        key: 4,
        children: 'Les serveurs les plus puissants, optimisés pour les charges critiques.',
        disabled: true,
      },
      {
        label: 'Serveurs dédiés Storage',
        key: 5,
        children: "Des serveurs pour l'archivage, la sauvegarde ou le stockage distribué.",
        disabled: false,
      },
      {
        label: 'Serveurs dédiés Game',
        key: 6,
        children: 'Des serveurs optimisés pour les jeux vidéo et les plateformes de streaming.',
        disabled: false,
      },
      {
        label: <osds-text color="success">Serveurs dédiés Game</osds-text>,
        key: 7,
        children: <Tab7Content />,
        disabled: false,
      },
    ];

    const onUpdateActiveKey = (value: any, disabled: boolean) => {
      if (disabled) {
        return;
      }
      this.defaultActiveKey = value;
      this.activeKey = value;
    };

    const onKeyPress = (event: any, value: any, disabled: boolean) => {
      if (!disabled && (event.keyCode === 13 || event.keyCode === 32)) {
        this.defaultActiveKey = value;
        this.activeKey = value;
      }
    };

    return (
      <Host {...{
        tabIndex: this.activeKey,
      }}
      >
      <div class="tabs">
        <div class="tabs-nav-wrap">
          <div class="tabs-nav-list">
            {items.map((value, key) => {
              if (this.activeKey) {
                return (
                  <div
                    onKeyDown={event => onKeyPress(event, key, value.disabled)}
                    onClick={() => onUpdateActiveKey(key, value.disabled)}
                    class={`tabs-tab ${key === parseInt(this.activeKey) ? `tabs-tab-active` : ``} ${value.disabled ? `tabs-tab-disabled` : ``}`}
                    key={`tabs-tab-${key}`}
                  >
                    <div role="tab" tabIndex={value.key}>
                      {value.label}
                    </div>
                  </div>
                );
              } else {
                return <div>...</div>;
              }
            })} 
          </div>
          <div class="tabs-content">
            <div>{this.defaultActiveKey ? items[parseInt(this.defaultActiveKey)].children : ``}</div>
          </div>
          {/* <slot /> */}
        </div>
      </div>
      </Host>
    );
  }
}
