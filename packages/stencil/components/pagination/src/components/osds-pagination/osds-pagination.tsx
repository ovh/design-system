import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h, Fragment } from '@stencil/core';
import {
  OdsLogger,
  OdsPagination,
  OdsPaginationController,
  odsPaginationDefaultAttributes,
  OdsPaginationEvents,
  OdsPaginationMethods,
  OdsPaginationChangedEventDetail,
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

  /** @see OdsPaginationAttributes.total */
  @Prop({ reflect: true }) total: number = odsPaginationDefaultAttributes.total;

  /** @see OdsPaginationAttributes.disabled */
  @Prop({ reflect: true, mutable: true }) disabled: boolean = odsPaginationDefaultAttributes.disabled;

  /** @see OdsPaginationEvents.odsPaginationChanged */
  @Event() odsPaginationChanged!: EventEmitter<OdsPaginationChangedEventDetail>;

  async componentDidUpdate() {
    const selectedPage = this.el.shadowRoot?.querySelector('.selectedpage') as HTMLStencilElement;
    if (document.activeElement === document.body && selectedPage) selectedPage.focus();
  }

  @Watch('current')
  async onCurrentChange(current: number, oldCurrent?: number) {
    this.logger.log(`current: ${this.current}]`, 'current changed. emit new current', { current });
    this.emitChange(current, oldCurrent);
  }

  private emitChange(current: number, oldCurrent?: number) {
    this.logger.debug('emit', { current, oldCurrent });
    this.odsPaginationChanged.emit({
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

  // clicks events

  handlePreviousClick(page: number) {
    this.controller.handlePreviousClick(page);
  }
  handleNextClick(page: number) {
    this.controller.handleNextClick(page);
  }
  handlePageClick(page: number) {
    this.controller.handlePageClick(page);
  }

  // keyDown events

  handlePreviousKeyDown(event: KeyboardEvent, page: number) {
    this.controller.handlePreviousKeyDown(event, page);
  }
  handleNextKeyDown(event: KeyboardEvent, page: number, pageList: OdsPaginationPageList) {
    this.controller.handleNextKeyDown(event, page, pageList);
  }
  handlePageKeyDown(event: KeyboardEvent, page: number) {
    this.controller.handlePageKeyDown(event, page);
  }

  renderArrows(direction: 'left' | 'right', pageList: OdsPaginationPageList) {
    const { disabled } = this;
    const arrowIcon = direction === 'left' ? OdsIconName.CHEVRON_LEFT : OdsIconName.CHEVRON_RIGHT;

    return (
      <li class="arrows">
        <osds-button
          variant={OdsButtonVariant.ghost}
          color={OdsThemeColorIntent.primary}
          disabled={disabled || (direction === 'left' && this.current === 1) || (direction === 'right' && this.current >= pageList.length)}
          onKeyDown={(event: KeyboardEvent) => {
            if (direction === 'left') {
              this.handlePreviousKeyDown(event, Number(this.current));
            } else {
              this.handleNextKeyDown(event, Number(this.current), pageList);
            }
          }}
          onClick={() => {
            if (direction === 'left') {
              this.handlePreviousClick(Number(this.current));
            } else {
              this.handleNextClick(Number(this.current));
            }
          }}
          size={OdsButtonSize.sm}
        >
          <osds-icon
            size={OdsIconSize.sm}
            name={arrowIcon}
            color={OdsThemeColorIntent.primary}
            class={(direction === 'left' && this.current === 1) || (direction === 'right' && this.current >= pageList.length) ? 'disabled' : ''}
          ></osds-icon>
        </osds-button>
      </li>
    );
  }

  renderEllipsis() {
    return (
      <li>
        <osds-button disabled={true} variant={OdsButtonVariant.ghost} color={OdsThemeColorIntent.primary}>
          <osds-text size={OdsTextSize._500} color={OdsThemeColorIntent.primary} class="ellipsis">
            &#8230;
          </osds-text>
        </osds-button>
      </li>
    );
  }

  render() {
    const { total, disabled } = this;

    const pageList = this.controller.createPageList(total, this.current);

    return (
      <Host>
        <ul>
          {this.renderArrows('left', pageList)}
          {pageList
            .filter(page => page.active)
            .map(page => {
              const pageId = pageList.indexOf(page) + 1;
              return (
                <>
                  {pageList.length > 6 && pageList.length - this.current > 3 && pageId === pageList.length && this.renderEllipsis()}
                  <li>
                    <osds-button
                      key={pageId}
                      class={`${this.current === pageId ? 'selectedpage' : ''}`}
                      variant={this.current === pageId ? OdsButtonVariant.flat : OdsButtonVariant.ghost}
                      disabled={disabled}
                      color={OdsThemeColorIntent.primary}
                      size={OdsButtonSize.sm}
                      onKeyDown={(event: KeyboardEvent) => this.handlePageKeyDown(event, Number(pageId))}
                      onClick={() => this.handlePageClick(Number(pageId))}
                    >
                      {pageId}
                    </osds-button>
                  </li>
                  {pageList.length > 6 && this.current > 4 && pageId === 1 && this.renderEllipsis()}
                </>
              );
            })}

          {this.renderArrows('right', pageList)}
        </ul>
      </Host>
    );
  }
}
