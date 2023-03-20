import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import {
  OdsLogger,
  OdsPagination,
  OdsPaginationController,
  odsPaginationDefaultAttributes,
  OdsPaginationEvents,
  OdsPaginationMethods,
  OdsPaginationValidityState,
  OdsPaginationCurrentChangeEventDetail,
  OdsIconSize,
  OdsIconName,
  OdsPaginationCreateDefaultOdsValidityState,
  OdsButtonSize,
} from '@ovhcloud/ods-core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot (placeholder) - Pagination placeholder
 */
@Component({
  tag: 'osds-pagination',
  styleUrl: 'osds-pagination.scss',
  shadow: true,
})
export class OsdsPagination implements OdsPagination<OdsStencilMethods<OdsPaginationMethods>, OdsStencilEvents<OdsPaginationEvents>> {
  private logger = new OdsLogger('OsdsPagination');
  controller: OdsPaginationController = new OdsPaginationController(this);

  @Element() el!: HTMLStencilElement;

  /**
   * The current selecte page
   * @internal
   */
  @State() pageindex = 0;

  /** @see OdsPaginationAttributes.current */
  @Prop({ reflect: true, mutable: true }) current = odsPaginationDefaultAttributes.current;

  /** @see OdsPaginationAttributes.defaultCurrent */
  @Prop({ reflect: true }) defaultCurrent? = odsPaginationDefaultAttributes.defaultCurrent;

  /** @see OdsPaginationAttributes.totalPages */
  @Prop({ reflect: true }) totalPages = odsPaginationDefaultAttributes.totalPages;

  /** @see OdsPaginationAttributes.disabled */
  @Prop({ reflect: true, mutable: true }) disabled = odsPaginationDefaultAttributes.disabled;

  /** @see OdsPaginationEvents.odsCurrentChange */
  @Event() odsCurrentChange!: EventEmitter<OdsPaginationCurrentChangeEventDetail>;

  @State()
  selectedOptionLabel = '';

  /** is the select was touched by the user */
  dirty = false;

  @State()
  validityState: OdsPaginationValidityState = OdsPaginationCreateDefaultOdsValidityState();

  /** @see OdsPaginationEvents.odsFocus */
  @Event() odsFocus!: EventEmitter<void>;
  private onFocus() {
    this.odsFocus.emit();
  }

  /** @see OdsPaginationEvents.odsBlur */
  @Event() odsBlur!: EventEmitter<void>;

  onBlur() {
    this.odsBlur.emit();
  }

  @Watch('defaultCurrent')
  onDefaultCurrentChange(defaultCurrent?: number) {
    this.logger.debug(`[input=${this.current}]`, 'DefaultCurrent', defaultCurrent);
  }

  componentWillLoad() {
    this.onDefaultCurrentChange();
    if (this.current === 0 && this.defaultCurrent !== undefined) {
      this.current = this.defaultCurrent;
    }

    this.pageindex = this.defaultCurrent;
    if (this.current) this.pageindex = this.current;
  }

  /**
   * once the component did load, update the state depending the children,
   * in order to synchronize the already set current with the placeholder
   */
  async componentDidLoad() {}

  @Watch('current')
  async onCurrentChange(current: number, oldCurrent?: number) {
    this.logger.log(`[select=${this.current}]`, 'current changed. emit new current', { current });
    this.emitChange(current, oldCurrent);
  }

  private emitChange(current: number, oldCurrent?: number) {
    this.logger.debug('emit', { current, oldCurrent });
    this.odsCurrentChange.emit({
      current: current,
      oldCurrent: oldCurrent,
      validity: this.validityState,
    });
  }

  /**
   * @internal
   * @see OdsPaginationMethods.clear
   */
  @Method()
  async clear() {
    this.validityState = OdsPaginationCreateDefaultOdsValidityState();
    this.current = 1;
  }

  /**
   * @internal
   * @see OdsPaginationMethods.getValidity
   */
  @Method()
  async getValidity() {
    return this.validityState;
  }

  /**
   * @internal
   * @see OdsPaginationMethods.reset
   */
  @Method()
  async reset() {
    this.current = this.defaultCurrent || 1;
    this.validityState = OdsPaginationCreateDefaultOdsValidityState();
  }

  /**
   * @internal
   * @see OdsPaginationMethods.setFocus
   */
  @Method()
  async setFocus() {
    this.el.focus();
  }

  /**
   * @internal
   * @see OdsPaginationMethods.setPageIndex
   */
  @Method()
  async setPageIndex(current: number) {
    this.pageindex = current;
  }

  /**
   * @see OdsPaginationMethods.setPageIndex
   */
  @Method()
  async validate() {
    this.validityState = this.controller.getValidity();
    return this.validityState;
  }

  changeValue(current: number) {
    this.logger.log(`[select=${this.current}]`, 'current changed', { current });
    this.current = current;
  }

  // Hide overlay when we click anywhere else in the window.
  @Listen('click', { target: 'window' })
  checkForClickOutside(ev: any) {
    if (!this.dirty || this.el.contains(ev.target)) {
      // click on component, do nothing
      return;
    }
    this.logger.log('[checkForClickOutside]', arguments, { validity: this.validityState });
    if (this.dirty) {
      this.validityState = this.controller.getValidity();
    }
  }

  @Watch('disabled')
  closeWhenDisabled(disabled?: boolean) {
    if (disabled) {
    }
  }

  private hasError(): boolean {
    return this.validityState.invalid;
  }

  onKeyPress = (event: any, page: any) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      this.setPageIndex(page);
    }
  };

  render() {
    const { totalPages, disabled } = this;

    let pageList = [];
    for (let i = 1; i <= totalPages; i++) {
      pageList.push({ id: i, active: false });
    }

    let pageSelected = this.pageindex;
    let startIndex = Math.max(pageSelected - 2, 1);
    let endIndex = Math.min(startIndex + 4, totalPages);

    if (totalPages <= 5) {
      for (let i = 0; i < pageList.length; i++) {
        pageList[i].active = true;
      }
    } else {
      // >6
      if (totalPages - pageSelected < 2) {
        // last pages of a long list
        startIndex = totalPages - 4;
      }
      if (totalPages > 5 && endIndex - startIndex < 4) {
        if (startIndex === 1) {
          endIndex = Math.min(startIndex + 5, totalPages);
        } else if (endIndex === totalPages) {
          startIndex = Math.max(endIndex - 5, 1);
        }
      }

      for (let i = startIndex; i <= endIndex; i++) {
        if (i == pageSelected - 2 && pageSelected < totalPages - 1 && pageSelected > 4 && pageSelected < totalPages - 2) {
          continue;
        }
        if (i == pageSelected + 2 && pageSelected < totalPages - 3 && i > 5) {
          continue;
        }
        pageList[i - 1].active = true;
      }

      if (startIndex > 1) {
        pageList[0].active = true;
      }

      if (endIndex < totalPages) {
        pageList[totalPages - 1].active = true;
      }
    }

    return (
      <Host
        {...{
          class: `${disabled ? 'disabled' : ''}${this.hasError() ? ' ods-error' : ''}`,
          onFocus: this.onFocus.bind(this),
          onBlur: this.onBlur.bind(this),
          pageIndex: this.disabled ? -1 : this.pageindex,
          totalPages: this.totalPages,
          current: this.current,
        }}
      >
        <div>
          <ul>
            <li>
              <osds-button
                contrasted={true}
                color={OdsThemeColorIntent.primary}
                disabled={this.pageindex > 1 ? false : true}
                onKeyDown={(event: any) => {
                  if (this.pageindex > 1) this.onKeyPress(event, Number(this.pageindex) - 1);
                }}
                onClick={() => {
                  this.setPageIndex(Number(this.pageindex) - 1);
                }}
                size={OdsButtonSize.sm}
              >
                <osds-icon size={OdsIconSize.sm} name={OdsIconName.CHEVRON_LEFT} color={OdsThemeColorIntent.primary}></osds-icon>
              </osds-button>
            </li>
            {pageList.map(page => {
              if (page.active)
                return (
                  <span>
                    {pageList.length > 6 && pageList.length - this.pageindex > 3 && page.id == pageList.length && (
                      <osds-icon
                        size={OdsIconSize.sm}
                        color={OdsThemeColorIntent.primary}
                        name={OdsIconName.ELLIPSIS}
                        style={{ paddingBottom: '10px', cursor: 'not-allowed' }}
                      ></osds-icon>
                    )}
                    <li>
                      <osds-button
                        class={this.pageindex == page.id ? 'selectedpage' : ''}
                        contrasted={this.pageindex == page.id ? false : true}
                        color={OdsThemeColorIntent.primary}
                        size={OdsButtonSize.sm}
                        onKeyDown={(event: any) => this.onKeyPress(event, Number(page.id))}
                        onClick={() => {
                          this.setPageIndex(Number(page.id));
                        }}
                      >
                        {page.id}
                      </osds-button>
                    </li>
                    {pageList.length > 6 && this.pageindex > 4 && page.id == 1 && (
                      <li>
                        <osds-icon
                          size={OdsIconSize.sm}
                          color={OdsThemeColorIntent.text}
                          name={OdsIconName.ELLIPSIS}
                          style={{ paddingBottom: '10px', cursor: 'not-allowed' }}
                        ></osds-icon>
                      </li>
                    )}
                  </span>
                );
            })}

            <li>
              <osds-button
                contrasted={true}
                color={OdsThemeColorIntent.primary}
                disabled={this.pageindex < pageList.length ? false : true}
                onKeyDown={(event: any) => {
                  if (this.pageindex < pageList.length) this.onKeyPress(event, Number(this.pageindex) + 1);
                }}
                onClick={() => {
                  this.setPageIndex(Number(this.pageindex) + 1);
                }}
                size={OdsButtonSize.sm}
              >
                <osds-icon size={OdsIconSize.sm} name={OdsIconName.CHEVRON_RIGHT} color={OdsThemeColorIntent.primary}></osds-icon>
              </osds-button>
            </li>
          </ul>
        </div>
      </Host>
    );
  }
}
