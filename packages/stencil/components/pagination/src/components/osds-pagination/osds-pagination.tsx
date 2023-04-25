import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h, Fragment } from '@stencil/core';
import {
  OdsLogger,
  OdsPagination,
  OdsPaginationController,
  odsPaginationDefaultAttributes,
  OdsPaginationEvents,
  OdsPaginationMethods,
  OdsPaginationCurrentChangeEventDetail,
  OdsIconSize,
  OdsIconName,
  OdsButtonSize,
  OdsButtonVariant,
  OdsTextSize,
  OdsPaginationPageList,
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

  /** @see OdsPaginationAttributes.current */
  @Prop({ reflect: true, mutable: true }) current: number = odsPaginationDefaultAttributes.current;

  /** @see OdsPaginationAttributes.defaultCurrent */
  @Prop({ reflect: true }) defaultCurrent?: number = odsPaginationDefaultAttributes.defaultCurrent;

  /** @see OdsPaginationAttributes.totalPages */
  @Prop({ reflect: true }) totalPages: number = odsPaginationDefaultAttributes.totalPages;

  /** @see OdsPaginationAttributes.disabled */
  @Prop({ reflect: true, mutable: true }) disabled: boolean = odsPaginationDefaultAttributes.disabled;

  /** @see OdsPaginationEvents.odsCurrentChange */
  @Event() odsCurrentChange!: EventEmitter<OdsPaginationCurrentChangeEventDetail>;

  @Watch('defaultCurrent')
  onDefaultCurrentChange(defaultCurrent?: number) {
    this.logger.debug(`current: ${this.current}]`, 'defaultCurrent: ', defaultCurrent);
  }

  componentWillLoad() {
    this.onDefaultCurrentChange();

    if (this.defaultCurrent !== undefined) {
      this.current = this.defaultCurrent;
    }

    this.current = this.current;
  }

  async componentDidUpdate() {
    (this.el.shadowRoot?.querySelector('.selectedpage') as HTMLStencilElement)?.focus();
  }

  @Watch('current')
  async onCurrentChange(current: number, oldCurrent?: number) {
    this.logger.log(`current: ${this.current}]`, 'current changed. emit new current', { current });
    this.emitChange(current, oldCurrent);
  }

  private emitChange(current: number, oldCurrent?: number) {
    this.logger.debug('emit', { current, oldCurrent });
    this.odsCurrentChange.emit({
      current: current,
      oldCurrent: oldCurrent,
    });
  }

  /**
   * @internal
   * @see OdsPaginationMethods.setPageIndex
   */
  @Method()
  async setPageIndex(current: number) {
    this.controller.setPageIndex(current);
  }

  handlePreviousKeyDown(event: KeyboardEvent, page: number) {
    this.controller.handlePreviousKeyDown(event, page);
  }

  handleNextKeyDown(event: KeyboardEvent, page: number, pageList: OdsPaginationPageList) {
    this.controller.handleNextKeyDown(event, page, pageList);
  }

  handlePageKeyDown(event: KeyboardEvent, page: number) {
    this.controller.handlePageKeyDown(event, page);
  }

  render() {
    const { totalPages, disabled } = this;

    const pageList: OdsPaginationPageList = this.controller.createPageList(totalPages, this.current);

    return (
      <Host
        {...{
          class: disabled ? 'disabled' : '',
        }}
      >
        <div>
          <ul>
            <li class="arrows">
              <osds-button
                variant={OdsButtonVariant.ghost}
                color={OdsThemeColorIntent.primary}
                disabled={disabled ? true : this.current == 1}
                onKeyDown={(event: KeyboardEvent) => this.handlePreviousKeyDown(event, Number(this.current) - 1)}
                onClick={() => {
                  this.setPageIndex(Number(this.current) - 1);
                }}
                size={OdsButtonSize.sm}
              >
                <osds-icon size={OdsIconSize.sm} name={OdsIconName.CHEVRON_LEFT} color={OdsThemeColorIntent.primary} class={this.current == 1 ? 'disabled' : ''}></osds-icon>
              </osds-button>
            </li>
            {pageList
              .filter(page => page.active)
              .map(page => {
                return (
                  <>
                    {pageList.length > 6 && pageList.length - this.current > 3 && page.id == pageList.length && (
                      <li>
                        <osds-button disabled={true} variant={OdsButtonVariant.ghost}>
                          <osds-text size={OdsTextSize._500} color={OdsThemeColorIntent.primary} class="disabled">
                            &#8230;
                          </osds-text>
                        </osds-button>
                      </li>
                    )}
                    <li>
                      <osds-button
                        key={page.id}
                        class={`${this.current == page.id ? 'selectedpage' : ''}`}
                        variant={this.current == page.id ? OdsButtonVariant.flat : OdsButtonVariant.ghost}
                        disabled={disabled}
                        color={OdsThemeColorIntent.primary}
                        size={OdsButtonSize.sm}
                        onKeyDown={(event: KeyboardEvent) => this.handlePageKeyDown(event, Number(page.id))}
                        onClick={() => {
                          this.setPageIndex(Number(page.id));
                        }}
                      >
                        {page.id}
                      </osds-button>
                    </li>
                    {pageList.length > 6 && this.current > 4 && page.id == 1 && (
                      <li>
                        <osds-button disabled={true} variant={OdsButtonVariant.ghost}>
                          <osds-text size={OdsTextSize._500} color={OdsThemeColorIntent.primary} class="disabled">
                            &#8230;
                          </osds-text>
                        </osds-button>
                      </li>
                    )}
                  </>
                );
              })}

            <li class="arrows">
              <osds-button
                variant={OdsButtonVariant.ghost}
                color={OdsThemeColorIntent.primary}
                disabled={disabled ? true : this.current >= pageList.length}
                onKeyDown={(event: KeyboardEvent) => this.handleNextKeyDown(event, Number(this.current) + 1, pageList)}
                onClick={() => this.setPageIndex(Number(this.current) + 1)}
                size={OdsButtonSize.sm}
              >
                <osds-icon
                  size={OdsIconSize.sm}
                  name={OdsIconName.CHEVRON_RIGHT}
                  color={OdsThemeColorIntent.primary}
                  class={this.current >= pageList.length ? 'disabled' : ''}
                ></osds-icon>
              </osds-button>
            </li>
          </ul>
        </div>
      </Host>
    );
  }
}
