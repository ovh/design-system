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
  OdsSelectOptionClickEventDetail,
  odsPaginationPerPageMin,
  odsPaginationMinPerPageOptions,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h,
  Listen
} from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'osds-pagination',
  styleUrl: 'osds-pagination.scss',
  shadow: true,
})
export class OsdsPagination implements OdsPagination<OdsStencilMethods<OdsPaginationMethods>, OdsStencilEvents<OdsPaginationEvents>> {
  private logger = new OdsLogger('OsdsPagination');
  private actualTotalPages = odsPaginationDefaultAttributes.totalPages;
  controller: OdsPaginationController = new OdsPaginationController(this);

  @Element() el!: HTMLStencilElement;

  @State() itemPerPage = odsPaginationPerPageMin;
  @State() pageList: OdsPaginationPageList = [];

  /** @see OdsPaginationAttributes.current */
  @Prop({ reflect: true, mutable: true }) current: number = odsPaginationDefaultAttributes.current;

  /** @see OdsPaginationAttributes.totalItems */
  @Prop({ reflect: true }) totalItems?: number;

  /** @see OdsPaginationAttributes.totalPages */
  @Prop({ reflect: true }) totalPages: number = odsPaginationDefaultAttributes.totalPages;

  /** @see OdsPaginationAttributes.disabled */
  @Prop({ reflect: true, mutable: true }) disabled: boolean = odsPaginationDefaultAttributes.disabled;

  /** @see OdsPaginationEvents.odsPaginationChanged */
  @Event() odsPaginationChanged!: EventEmitter<OdsPaginationChangedEventDetail>;

  componentWillLoad() {
    if (this.totalItems) {
      this.actualTotalPages = this.controller.computeActualTotalPages(this.itemPerPage);
    } else {
      this.actualTotalPages = this.totalPages;
    }

    this.updatePageList();
  }

  async componentDidUpdate() {
    const selectedPage = this.el.shadowRoot?.querySelector('.selected-page') as HTMLStencilElement;

    if (selectedPage && document.activeElement === document.body) {
      selectedPage.focus();
    }
  }

  @Listen('odsValueChange')
  odsValueChangeHandler(event: CustomEvent<OdsSelectOptionClickEventDetail>) {
    const { value } = event.detail;

    if (value) {
      this.itemPerPage = typeof value === 'number' ? value : parseInt(value, 10);
    }
  }

  @Watch('current')
  async onCurrentChange(current: number, oldCurrent?: number) {
    this.logger.log(`current: ${this.current}]`, 'current changed. emit new current', { current });

    this.updatePageList();
    this.emitChange(current, oldCurrent);
  }

  @Watch('itemPerPage')
  async onItemPerPageChange() {
    await this.updatePagination();
  }

  @Watch('totalItems')
  async onTotalItemsChange() {
    await this.updatePagination();
  }

  /**
   * @internal
   * @see OdsPaginationMethods.setPageIndex
   */
  @Method()
  async setPageIndex(current: number) {
    this.controller.setPageIndex(current);
  }

  private emitChange(current: number, oldCurrent?: number) {
    this.logger.debug('emit', { current, oldCurrent });

    this.odsPaginationChanged.emit({
      current: current,
      oldCurrent: oldCurrent,
    });
  }

  private updatePageList() {
    this.pageList = this.controller.createPageList(this.actualTotalPages, this.current);
  }

  private async updatePagination() {
    this.actualTotalPages = this.controller.computeActualTotalPages(this.itemPerPage);

    if (this.current === 1) {
      // If current is already 1 we don't want to emit a change event
      this.updatePageList();
    } else {
      await this.setPageIndex(1);
    }
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

  handleNextKeyDown(event: KeyboardEvent, page: number) {
    this.controller.handleNextKeyDown(event, page, this.pageList);
  }

  handlePageKeyDown(event: KeyboardEvent, page: number) {
    this.controller.handlePageKeyDown(event, page);
  }

  renderArrows(direction: 'left' | 'right') {
    const { disabled } = this;
    const arrowIcon = direction === 'left' ? OdsIconName.CHEVRON_LEFT : OdsIconName.CHEVRON_RIGHT;

    return (
      <li class="arrows">
        <osds-button
          variant={OdsButtonVariant.ghost}
          color={OdsThemeColorIntent.primary}
          disabled={disabled || (direction === 'left' && this.current === 1) || (direction === 'right' && this.current >= this.pageList.length)}
          onKeyDown={(event: KeyboardEvent) => {
            if (direction === 'left') {
              this.handlePreviousKeyDown(event, Number(this.current));
            } else {
              this.handleNextKeyDown(event, Number(this.current));
            }
          }}
          onClick={() => {
            if (direction === 'left') {
              this.handlePreviousClick(Number(this.current));
            } else {
              this.handleNextClick(Number(this.current));
            }
          }}
          size={OdsButtonSize.sm}>
          <osds-icon
            size={OdsIconSize.sm}
            name={arrowIcon}
            color={OdsThemeColorIntent.primary}
            class={(direction === 'left' && this.current === 1) || (direction === 'right' && this.current >= this.pageList.length) ? 'disabled' : ''}
          ></osds-icon>
        </osds-button>
      </li>
    );
  }

  renderEllipsis() {
    return (
      <li>
        <osds-button color={OdsThemeColorIntent.primary}
                     disabled={true}
                     variant={OdsButtonVariant.ghost}>
          <osds-text class="ellipsis"
                     color={OdsThemeColorIntent.primary}
                     size={OdsTextSize._500}>
            &#8230;
          </osds-text>
        </osds-button>
      </li>
    );
  }

  render() {
    if (!this.totalItems && this.actualTotalPages < 2) {
      return;
    }

    return (
      <Host>
        {
          !!this.totalItems &&
          <>
            {
              this.totalItems >= odsPaginationPerPageMin &&
              <>
                <osds-select disabled={this.disabled}
                             value={this.itemPerPage}>
                  {
                    odsPaginationMinPerPageOptions.map((option) => (
                      <osds-select-option key={option}
                                          value={option}>
                        {option}
                      </osds-select-option>
                    ))
                  }
                </osds-select>
                &nbsp;
              </>
            }
            <osds-text color={OdsThemeColorIntent.primary}
                       size={OdsTextSize._500}>
              <slot name="before-total-items"></slot>
              {this.totalItems}
              <slot name="after-total-items"></slot>
            </osds-text>
          </>
        }

        <ul>
          {this.renderArrows('left')}

          {
            this.pageList
              .filter(page => page.active)
              .map(page => {
                const pageId = this.pageList.indexOf(page) + 1;

                return (
                  <>
                    {this.pageList.length > 6 && this.pageList.length - this.current > 3 && pageId === this.pageList.length && this.renderEllipsis()}

                    <li>
                      <osds-button
                        key={pageId}
                        class={`${this.current === pageId ? 'selected-page' : ''}`}
                        variant={this.current === pageId ? OdsButtonVariant.flat : OdsButtonVariant.ghost}
                        disabled={this.disabled}
                        color={OdsThemeColorIntent.primary}
                        size={OdsButtonSize.sm}
                        onKeyDown={(event: KeyboardEvent) => this.handlePageKeyDown(event, Number(pageId))}
                        onClick={() => this.handlePageClick(Number(pageId))}>
                        {pageId}
                      </osds-button>
                    </li>

                    {this.pageList.length > 6 && this.current > 4 && pageId === 1 && this.renderEllipsis()}
                  </>
                );
              })
          }

          {this.renderArrows('right')}
        </ul>
      </Host>
    );
  }
}
