import type { ODS_PAGINATION_PER_PAGE } from './constants/pagination-per-page';
import type { OdsPaginationAttribute, OdsPaginationPageList } from './interfaces/attributes';
import type { OdsPaginationChangedEventDetail, OdsPaginationEvent, OdsPaginationItemPerPageChangedEventDetail } from './interfaces/events';
import type { OdsPaginationMethod } from './interfaces/methods';
import type { OdsSelectOptionClickEventDetail } from '../../../../select/src';
import type { EventEmitter } from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { Component, Element, Event, Fragment, Host, Listen, Method, Prop, State, Watch, forceUpdate, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_PAGINATION_PER_PAGE_MIN, ODS_PAGINATION_PER_PAGE_OPTIONS } from './constants/pagination-per-page';
import { OdsPaginationController } from './core/controller';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';
import { ODS_TEXT_SIZE } from '../../../../text/src';

@Component({
  shadow: true,
  styleUrl: 'osds-pagination.scss',
  tag: 'osds-pagination',
})
export class OsdsPagination implements OdsPaginationAttribute, OdsPaginationEvent, OdsPaginationMethod {
  private actualTotalPages = DEFAULT_ATTRIBUTE.totalPages;
  controller: OdsPaginationController = new OdsPaginationController(this);

  @Element() el!: HTMLStencilElement;

  @State() itemPerPage = ODS_PAGINATION_PER_PAGE_MIN;
  @State() pageList: OdsPaginationPageList = [];
  @State() current: number = 1;

  private isFirstLoad: boolean = true;

  @Prop({ reflect: true }) defaultCurrentPage: number = DEFAULT_ATTRIBUTE.defaultCurrentPage;
  @Prop({ reflect: true }) totalItems?: number;
  @Prop({ reflect: true }) defaultItemsPerPage: ODS_PAGINATION_PER_PAGE = DEFAULT_ATTRIBUTE.defaultItemsPerPage;
  @Prop({ reflect: true }) totalPages: number = DEFAULT_ATTRIBUTE.totalPages;
  @Prop({ mutable: true , reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) labelTooltipPrevious: string = DEFAULT_ATTRIBUTE.labelTooltipPrevious;
  @Prop({ reflect: true }) labelTooltipNext: string = DEFAULT_ATTRIBUTE.labelTooltipNext;

  @Event() odsPaginationChanged!: EventEmitter<OdsPaginationChangedEventDetail>;
  @Event() odsPaginationItemPerPageChanged!: EventEmitter<OdsPaginationItemPerPageChangedEventDetail>;

  componentWillLoad(): void {
    this.itemPerPage = ODS_PAGINATION_PER_PAGE_OPTIONS.includes(this.defaultItemsPerPage) && this.defaultItemsPerPage || ODS_PAGINATION_PER_PAGE_MIN;

    if (this.totalItems) {
      this.actualTotalPages = this.controller.computeActualTotalPages(this.itemPerPage);
    } else {
      this.actualTotalPages = this.totalPages;
    }

    if (this.defaultCurrentPage > this.actualTotalPages) {
      this.current = this.actualTotalPages;
    } else if (this.defaultCurrentPage < 1) {
      this.current = 1;
    } else {
      this.current = this.defaultCurrentPage || this.current;
    }

    this.updatePageList();
    this.isFirstLoad = false;
  }

  @Listen('odsValueChange')
  odsValueChangeHandler(event: CustomEvent<OdsSelectOptionClickEventDetail>): void {
    event.preventDefault();
    event.stopPropagation();

    const { value } = event.detail;

    if (value) {
      this.itemPerPage = typeof value === 'number' ? value : parseInt(value.toString(), 10);
    }
  }

  @Watch('labelTooltipNext')
  @Watch('labelTooltipPrevious')
  updateLabelTooltip(): void {
    forceUpdate(this.el);
  }

  @Watch('current')
  async onCurrentChange(current: number, oldCurrent?: number): Promise<void> {
    this.updatePageList();
    this.emitChange(current, oldCurrent);
  }

  @Watch('totalPages')
  async onTotalPagesChange(): Promise<void> {
    if (!this.totalItems) {
      this.actualTotalPages = this.totalPages;
    }
    this.updatePageList();
  }

  @Watch('itemPerPage')
  async onItemPerPageChange(): Promise<void> {
    if (!this.isFirstLoad) {
      await this.updatePagination();

      this.odsPaginationItemPerPageChanged.emit({
        current: this.itemPerPage,
        currentPage: this.current,
        totalPages: this.actualTotalPages,
      });
    }
  }

  @Watch('totalItems')
  async onTotalItemsChange(): Promise<void> {
    await this.updatePagination();
  }

  /**
   * @internal
   * @see OdsPaginationMethods.setPageIndex
   */
  @Method()
  async setPageIndex(current: number): Promise<void> {
    this.controller.setPageIndex(current);
  }

  @Method()
  async getCurrentPage(): Promise<number> {
    return this.current;
  }

  private emitChange(current: number, oldCurrent?: number): void {
    this.odsPaginationChanged.emit({
      current: current,
      itemPerPage: this.itemPerPage,
      oldCurrent: oldCurrent,
    });
  }

  private updatePageList(): void {
    this.pageList = this.controller.createPageList(this.actualTotalPages, this.current);
  }

  private async updatePagination(): Promise<void> {
    this.actualTotalPages = this.controller.computeActualTotalPages(this.itemPerPage);

    if (this.current === 1) {
      // If current is already 1 we don't want to emit a change event
      this.updatePageList();
    } else {
      await this.setPageIndex(1);
    }
  }

  // clicks events

  handlePreviousClick(page: number): void {
    this.controller.handlePreviousClick(page);
  }

  handleNextClick(page: number): void {
    this.controller.handleNextClick(page);
  }

  handlePageClick(page: number): void {
    this.controller.handlePageClick(page);
  }

  // keyDown events

  handlePreviousKeyDown(event: KeyboardEvent, page: number): void {
    this.controller.handlePreviousKeyDown(event, page);
  }

  handleNextKeyDown(event: KeyboardEvent, page: number): void {
    this.controller.handleNextKeyDown(event, page, this.pageList);
  }

  handlePageKeyDown(event: KeyboardEvent, page: number): void {
    this.controller.handlePageKeyDown(event, page);
  }

  renderArrows(direction: 'left' | 'right'): typeof Fragment {
    const { disabled } = this;
    const isLeft = direction === 'left';
    const arrowIcon = isLeft ? ODS_ICON_NAME.CHEVRON_LEFT : ODS_ICON_NAME.CHEVRON_RIGHT;

    return (
      <li class="arrows">
        <osds-tooltip>
          { isLeft
            ? this.labelTooltipPrevious && <osds-tooltip-content slot="tooltip-content">
              { this.labelTooltipPrevious }
            </osds-tooltip-content>
            : this.labelTooltipNext && <osds-tooltip-content slot="tooltip-content">
              { this.labelTooltipNext }
            </osds-tooltip-content>
          }
          <osds-button
            variant={ODS_BUTTON_VARIANT.ghost}
            color={ODS_THEME_COLOR_INTENT.primary}
            disabled={disabled || (isLeft && this.current === 1) || (direction === 'right' && this.current >= this.pageList.length)}
            onKeyDown={(event: KeyboardEvent): void => {
              if (isLeft) {
                this.handlePreviousKeyDown(event, Number(this.current));
              } else {
                this.handleNextKeyDown(event, Number(this.current));
              }
            }}
            onClick={(): void => {
              if (disabled || (isLeft && this.current === 1) || (direction === 'right' && this.current >= this.pageList.length)) {
                return;
              }

              if (isLeft) {
                this.handlePreviousClick(Number(this.current));
              } else {
                this.handleNextClick(Number(this.current));
              }
            }}
            size={ODS_BUTTON_SIZE.sm}
          >
            <osds-icon
              size={ODS_ICON_SIZE.sm}
              name={arrowIcon}
              color={ODS_THEME_COLOR_INTENT.primary}
              class={(isLeft && this.current === 1) || (direction === 'right' && this.current >= this.pageList.length) ? 'disabled' : ''}
            ></osds-icon>
          </osds-button>
        </osds-tooltip>
      </li>
    );
  }

  renderEllipsis(): typeof Fragment {
    return (
      <li>
        <osds-button color={ODS_THEME_COLOR_INTENT.primary}
          disabled={true}
          variant={ODS_BUTTON_VARIANT.ghost}>
          <osds-text class="ellipsis"
            color={ODS_THEME_COLOR_INTENT.primary}
            size={ODS_TEXT_SIZE._500}>
            &#8230;
          </osds-text>
        </osds-button>
      </li>
    );
  }

  render(): JSX.Element | undefined {
    if (!this.totalItems && this.actualTotalPages < 2) {
      return;
    }

    return (
      <Host>
        {
          !!this.totalItems
          && <>
            <osds-select disabled={this.disabled}
              value={this.itemPerPage}>
              {
                ODS_PAGINATION_PER_PAGE_OPTIONS.map((option) => (
                  <osds-select-option key={option}
                    value={option}>
                    {option}
                  </osds-select-option>
                ))
              }
            </osds-select>
            &nbsp;
            <osds-text color={ODS_THEME_COLOR_INTENT.primary}
              size={ODS_TEXT_SIZE._500}>
              <slot name="before-total-items"></slot>
              {this.totalItems}
              <slot name="after-total-items"></slot>
            </osds-text>
          </>
        }

        {
          <ul>
            { this.renderArrows('left') }

            {
              this.pageList
                .filter((page) => page.active)
                .map((page) => {
                  const pageId = this.pageList.indexOf(page) + 1;

                  return (
                    <>
                      {this.pageList.length > 6 && this.pageList.length - this.current > 3 && pageId === this.pageList.length && this.renderEllipsis()}

                      <li>
                        <osds-button
                          key={pageId}
                          class={`${this.current === pageId ? 'selected-page' : ''}`}
                          variant={this.current === pageId ? ODS_BUTTON_VARIANT.flat : ODS_BUTTON_VARIANT.ghost}
                          disabled={this.disabled}
                          inline
                          color={ODS_THEME_COLOR_INTENT.primary}
                          size={ODS_BUTTON_SIZE.sm}
                          onKeyDown={(event: KeyboardEvent): void => this.handlePageKeyDown(event, Number(pageId))}
                          onClick={(): void => this.handlePageClick(Number(pageId))}>
                          {pageId}
                        </osds-button>
                      </li>

                      {this.pageList.length > 6 && this.current > 4 && pageId === 1 && this.renderEllipsis()}
                    </>
                  );
                })
            }

            { this.renderArrows('right') }
          </ul>
        }
      </Host>
    );
  }
}
