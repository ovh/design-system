import type { OdsSelectChangeEventDetail } from '../../../../select/src';
import type { OdsPaginationChangedEventDetail, OdsPaginationItemPerPageChangedEventDetail } from '../../interfaces/events';
import type { OdsPaginationPageList } from '../../interfaces/pagination-page-list';
import type { EventEmitter, Fragment, FunctionalComponent } from '@stencil/core';
import { Component, Element, Event, Host, Method, Prop, State, Watch, forceUpdate, h } from '@stencil/core';
import { getRandomHTMLId } from '../../../../../utils/dom';
import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_PAGINATION_PER_PAGE, ODS_PAGINATION_PER_PAGE_OPTIONS } from '../../constants/pagination-per-page';
import { ELLIPSIS_THRESHOLD, MAX_VISIBLE_ITEMS, computeActualTotalPages, createPageList, getActualPage } from '../../controller/ods-pagination';

@Component({
  shadow: true,
  styleUrl: 'ods-pagination.scss',
  tag: 'ods-pagination',
})
export class OdsPagination {
  private actualTotalPages = 1;
  private leftArrowButtonId = 'pagination-left-arrow';
  private rightArrowButtonId = 'pagination-right-arrow';
  private hostId: string = '';

  @Element() el!: HTMLElement;

  @State() itemPerPage = ODS_PAGINATION_PER_PAGE.option_10;
  @State() pageList: OdsPaginationPageList = [];
  @State() current: number = 1;

  @Prop({ reflect: true }) public defaultCurrentPage: number = 1;
  @Prop({ reflect: true }) public defaultItemsPerPage: ODS_PAGINATION_PER_PAGE = ODS_PAGINATION_PER_PAGE.option_10;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public labelTooltipNext?: string;
  @Prop({ reflect: true }) public labelTooltipPrevious?: string;
  @Prop({ reflect: true }) public totalItems?: number;
  @Prop({ reflect: true }) public totalPages: number = 1;

  @Event() odsChange!: EventEmitter<OdsPaginationChangedEventDetail>;
  @Event() odsItemPerPageChange!: EventEmitter<OdsPaginationItemPerPageChangedEventDetail>;

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
    await this.updatePagination();

    this.odsItemPerPageChange.emit({
      current: this.itemPerPage,
      currentPage: this.current,
      totalPages: this.actualTotalPages,
    });
  }

  @Watch('totalItems')
  async onTotalItemsChange(): Promise<void> {
    await this.updatePagination();
  }

  @Method()
  public async setCurrentPage(current: number): Promise<void> {
    this.current = current;
  }

  @Method()
  public async getCurrentPage(): Promise<number> {
    return this.current;
  }

  componentWillLoad(): void {
    this.hostId = this.el.id || getRandomHTMLId();

    this.itemPerPage = ODS_PAGINATION_PER_PAGE_OPTIONS.includes(this.defaultItemsPerPage) && this.defaultItemsPerPage || ODS_PAGINATION_PER_PAGE.option_10;

    if (this.totalItems) {
      this.actualTotalPages = computeActualTotalPages(this.itemPerPage, this.totalItems, this.totalPages);
    } else {
      this.actualTotalPages = this.totalPages;
    }

    this.current = getActualPage(this.defaultCurrentPage, this.actualTotalPages, this.current);

    this.updatePageList();
  }

  private updatePageList(): void {
    this.pageList = createPageList(this.actualTotalPages, this.current);
  }

  private emitChange(current: number, oldCurrent?: number): void {
    this.odsChange.emit({
      current: current,
      itemPerPage: this.itemPerPage,
      oldCurrent: oldCurrent,
    });
  }

  private handlePreviousClick(page: number): void {
    this.setCurrentPage(page - 1);
  }

  private handleNextClick(page: number): void {
    this.setCurrentPage(page + 1);
  }

  private handlePageClick(page: number): void {
    this.setCurrentPage(page);
  }

  private odsChangeHandler(event: CustomEvent<OdsSelectChangeEventDetail>): void {
    event.preventDefault();
    event.stopPropagation();

    const { value } = event.detail;

    if (value) {
      this.itemPerPage = typeof value === 'number' ? value : parseInt(value, 10);
    }
  }

  private async updatePagination(): Promise<void> {
    this.actualTotalPages = computeActualTotalPages(this.itemPerPage, this.totalItems, this.totalPages);

    if (this.current === 1) {
      this.updatePageList();
    } else {
      await this.setCurrentPage(1);
    }
  }

  private renderArrow(direction: 'left' | 'right'): typeof Fragment {
    const isLeft = direction === 'left';
    const tooltipLabel = isLeft ? this.labelTooltipPrevious : this.labelTooltipNext;
    const arrowButtonId = isLeft ? this.leftArrowButtonId : this.rightArrowButtonId;
    const isArrowDisabled = this.isDisabled || (isLeft && this.current === 1) || (!isLeft && this.current >= this.actualTotalPages);

    return (
      <li class="ods-pagination__list__arrow">
        <ods-button
          color={ ODS_BUTTON_COLOR.primary }
          class="ods-pagination__list__arrow__button"
          icon={ isLeft ? ODS_ICON_NAME.chevronLeft : ODS_ICON_NAME.chevronRight }
          id={ arrowButtonId }
          isDisabled={ isArrowDisabled }
          label=""
          onClick={ () => {
            if (isArrowDisabled) {
              return;
            }

            if (isLeft) {
              this.handlePreviousClick(this.current);
            } else {
              this.handleNextClick(this.current);
            }
          }}
          size={ ODS_BUTTON_SIZE.md }
          variant={ ODS_BUTTON_VARIANT.ghost }>
        </ods-button>

        { tooltipLabel && !isArrowDisabled && (
          <ods-tooltip
            shadowDomTriggerId={ arrowButtonId }
            triggerId={ this.hostId }>
            { tooltipLabel }
          </ods-tooltip>
        )}
      </li>
    );
  }

  private renderEllipsis(key: string): typeof Fragment {
    return (
      <li key={ key }>
        <ods-button
          class="ods-pagination__list__page__ellipsis"
          color={ ODS_BUTTON_COLOR.primary }
          isDisabled={ true }
          label="&#x2026;"
          variant={ ODS_BUTTON_VARIANT.ghost }>
        </ods-button>
      </li>
    );
  }

  private renderPage(pageId: number, active: boolean): typeof Fragment {
    return (
      <li key={ pageId }>
        <ods-button
          class={{
            'ods-pagination__list__page__button': true,
            'ods-pagination__list__page__button--disabled': this.isDisabled,
            'ods-pagination__list__page__button--selected': this.current === pageId,
            'ods-pagination__list__page__button--visible': active,
          }}
          variant={ this.current === pageId ? ODS_BUTTON_VARIANT.default : ODS_BUTTON_VARIANT.ghost }
          isDisabled={ this.isDisabled }
          label={ `${pageId}` }
          color={ ODS_BUTTON_COLOR.primary }
          size={ ODS_BUTTON_SIZE.md }
          onClick={ (): void => this.handlePageClick(pageId) }>
        </ods-button>
      </li>
    );
  }

  render(): FunctionalComponent | undefined {
    if (!this.totalItems && this.actualTotalPages < 1) {
      return;
    }

    const renderEllipsisLeft = this.current > ELLIPSIS_THRESHOLD && this.actualTotalPages >= MAX_VISIBLE_ITEMS;
    const renderEllipsisRight = this.current < this.actualTotalPages - ELLIPSIS_THRESHOLD + 1 && this.actualTotalPages >= MAX_VISIBLE_ITEMS;

    return (
      <Host
        class={{
          'ods-pagination': true,
          'ods-pagination--disabled': this.isDisabled,
        }}
        id={ this.hostId }>
        {
          !!this.totalItems &&
            <div class={{
              'ods-pagination__results': true,
              'ods-pagination__results--disabled': this.isDisabled,
            }}>
              <ods-select
                isDisabled={ this.isDisabled }
                onOdsChange={ (event: CustomEvent<OdsSelectChangeEventDetail>): void => this.odsChangeHandler(event) }
                value={ `${this.itemPerPage}` }
                name="ods-pagination__items-per-page">
                {
                  ODS_PAGINATION_PER_PAGE_OPTIONS.map((option) => (
                    <option
                      key={ option }
                      value={ option }>
                      { option }
                    </option>
                  ))
                }
              </ods-select>

              <span class={{
                'ods-pagination__results__label': true,
                'ods-pagination__results__label--disabled': this.isDisabled,
              }}>
                <slot name="before-total-items"></slot>

                { this.totalItems }

                <slot name="after-total-items"></slot>
              </span>
            </div>
        }

        <ul class="ods-pagination__list">
          { this.renderArrow('left') }

          { (this.totalItems || this.actualTotalPages >= 1) && this.renderPage(1, true) }

          { renderEllipsisLeft && this.renderEllipsis('left') }

          {
            this.pageList.slice(1, this.pageList.length - 1).map((page) => {
              return this.renderPage(page.pageId, page.active);
            })
          }

          { renderEllipsisRight && this.renderEllipsis('right') }

          { this.actualTotalPages > 1 && this.renderPage(this.actualTotalPages, true) }

          { this.renderArrow('right') }
        </ul>
      </Host>
    );
  }
}
