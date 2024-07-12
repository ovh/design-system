import type { OdsSelectEventChangeDetail } from '../../../../select/src';
import type { OdsPaginationChangedEventDetail, OdsPaginationItemPerPageChangedEventDetail } from '../../interfaces/events';
import type { OdsPaginationPageList } from '../../interfaces/pagination-page-list';
import type { EventEmitter, Fragment, FunctionalComponent } from '@stencil/core';
import { Component, Element, Event, Host, Listen, Method, Prop, State, Watch, forceUpdate, h } from '@stencil/core';
import { getRandomHTMLId } from '../../../../../utils/dom';
import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_TEXT_PRESET } from '../../../../text/src';
import { ODS_PAGINATION_PER_PAGE, ODS_PAGINATION_PER_PAGE_OPTIONS } from '../../constants/pagination-per-page';
import { computeActualTotalPages, createPageList, getActualPage } from '../../controller/ods-pagination';

@Component({
  shadow: true,
  styleUrl: 'ods-pagination.scss',
  tag: 'ods-pagination',
})
export class OdsPagination {
  private actualTotalPages = 1;
  private isFirstLoad: boolean = true;
  private leftArrowButtonId = 'pagination-left-arrow';
  private rightArrowButtonId = 'pagination-right-arrow';
  private hostId: string = '';
  private maxPagesBeforeEllipsis = 6;
  private minCurrentPageForRightEllipsis = 4;
  private pagesBeforeEnd = 3;

  @Element() el!: HTMLElement;

  @State() itemPerPage = ODS_PAGINATION_PER_PAGE.option_10;
  @State() pageList: OdsPaginationPageList = [];
  @State() current: number = 1;
  @State() isPageKeyUp: boolean = false;

  @Prop({ reflect: true }) public defaultCurrentPage: number = 1;
  /** @docType OdsPaginationPerPage */
  @Prop({ reflect: true }) public defaultItemsPerPage: ODS_PAGINATION_PER_PAGE = ODS_PAGINATION_PER_PAGE.option_10;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public labelTooltipNext?: string;
  @Prop({ reflect: true }) public labelTooltipPrevious?: string;
  @Prop({ reflect: true }) public totalItems?: number;
  @Prop({ reflect: true }) public totalPages: number = 1;

  @Event() odsPaginationChanged!: EventEmitter<OdsPaginationChangedEventDetail>;
  @Event() odsPaginationItemPerPageChanged!: EventEmitter<OdsPaginationItemPerPageChangedEventDetail>;

  @Listen('odsChange')
  odsValueChangeHandler(event: CustomEvent<OdsSelectEventChangeDetail>): void {
    event.preventDefault();
    event.stopPropagation();

    const { value } = event.detail;

    if (value) {
      this.itemPerPage = typeof value === 'number' ? value : parseInt(value, 10);
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

  @Method()
  async setCurrentPage(current: number): Promise<void> {
    this.current = current;
  }

  @Method()
  async getCurrentPage(): Promise<number> {
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
    this.isFirstLoad = false;
  }

  componentDidRender(): void {
    if (this.isPageKeyUp) {
      const allButtons = this.el.shadowRoot?.querySelectorAll('ods-button');
      if (allButtons) {
        allButtons.forEach((button) => {
          if (button.getAttribute('label') === `${this.current}`) {
            const shadowButton = button.shadowRoot?.querySelector('button');
            if (shadowButton) {
              shadowButton.focus();
            }
          }
        });
      }
    }
  }

  private updatePageList(): void {
    this.pageList = createPageList(this.actualTotalPages, this.current);
  }

  private emitChange(current: number, oldCurrent?: number): void {
    this.odsPaginationChanged.emit({
      current: current,
      itemPerPage: this.itemPerPage,
      oldCurrent: oldCurrent,
    });
  }

  private async updatePagination(): Promise<void> {
    this.actualTotalPages = computeActualTotalPages(this.itemPerPage, this.totalItems, this.totalPages);

    if (this.current === 1) {
      // If current is already 1 we don't want to emit a change event
      this.updatePageList();
    } else {
      await this.setCurrentPage(1);
    }
  }

  private handlePreviousClick(page: number): void {
    this.isPageKeyUp = false;
    this.setCurrentPage(page - 1);
  }

  private handleNextClick(page: number): void {
    this.isPageKeyUp = false;
    this.setCurrentPage(page + 1);
  }

  private handlePageClick(page: number): void {
    this.setCurrentPage(page);
  }

  private handlePreviousKeyUp(event: KeyboardEvent, page: number): void {
    if (this.current > 1) {
      this.isPageKeyUp = false;
      this.onKeyUp(event, page - 1);
    }
  }

  private handleNextKeyUp(event: KeyboardEvent, page: number): void {
    if (this.current < this.pageList.length) {
      this.isPageKeyUp = false;
      this.onKeyUp(event, page + 1);
    }
  }

  private handlePageKeyUp(event: KeyboardEvent, page: number): void {
    this.isPageKeyUp = true;
    this.onKeyUp(event, page);
  }

  private onKeyUp(event: KeyboardEvent, page: number): void {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.setCurrentPage(page);
    }
  }

  private renderArrow(direction: 'left' | 'right'): typeof Fragment {
    const isLeft = direction === 'left';
    const tooltipLabel = isLeft ? this.labelTooltipPrevious : this.labelTooltipNext;
    const arrowButtonId = isLeft ? this.leftArrowButtonId : this.rightArrowButtonId;
    const isArrowDisabled = this.isDisabled || (isLeft && this.current === 1) || (!isLeft && this.current >= this.pageList.length);

    return (
      <li class="ods-pagination__list__arrow">
        <ods-button
          color={ODS_BUTTON_COLOR.primary}
          class="ods-pagination__list__arrow__button"
          icon={isLeft ? ODS_ICON_NAME.chevronLeft : ODS_ICON_NAME.chevronRight}
          id={arrowButtonId}
          isDisabled={isArrowDisabled}
          label=""
          onClick={() => {
            if (isArrowDisabled) {
              return;
            }

            if (isLeft) {
              this.handlePreviousClick(Number(this.current));
            } else {
              this.handleNextClick(Number(this.current));
            }
          }}
          onKeyUp={(event: KeyboardEvent) => {
            if (isLeft) {
              this.handlePreviousKeyUp(event, Number(this.current));
            } else {
              this.handleNextKeyUp(event, Number(this.current));
            }
          }}
          variant={ODS_BUTTON_VARIANT.ghost}
          size={ODS_BUTTON_SIZE.md}
        >
        </ods-button>
        {tooltipLabel && (
          <ods-tooltip
            shadowDomTriggerId={arrowButtonId}
            triggerId={this.hostId}
          >
            {tooltipLabel}
          </ods-tooltip>
        )}
      </li>
    );
  }

  private renderEllipsis(): typeof Fragment {
    return (
      <li>
        <ods-button
          class="ods-pagination__list__page__ellipsis"
          color={ ODS_BUTTON_COLOR.primary }
          isDisabled={ true }
          label="&#x2026;"
          variant={ ODS_BUTTON_VARIANT.ghost }
        >
        </ods-button>
      </li>
    );
  }

  render(): FunctionalComponent | undefined {
    if (!this.totalItems && this.actualTotalPages < 2) {
      return;
    }

    return (
      <Host
        class="ods-pagination"
        isDisabled={this.isDisabled}
        id={ this.hostId }
      >
        {
          !!this.totalItems &&
            <div class={{
              'ods-pagination__results': true,
              'ods-pagination__results--disabled': this.isDisabled,
            }}>
              {
                this.totalItems >= ODS_PAGINATION_PER_PAGE.option_10 &&
                  <ods-select isDisabled={this.isDisabled}
                    value={`${this.itemPerPage}`}
                    name="ods-pagination__items-per-page"
                  >
                    {
                      ODS_PAGINATION_PER_PAGE_OPTIONS.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))
                    }
                  </ods-select>
              }
              <ods-text preset={ ODS_TEXT_PRESET.label }>
                <slot name="before-total-items"></slot>
                {this.totalItems}
                <slot name="after-total-items"></slot>
              </ods-text>
            </div>
        }

        <ul class="ods-pagination__list">
          { this.renderArrow( 'left' ) }

          {
            this.pageList
              .filter((page) => page.active)
              .map((page) => {
                const pageId = this.pageList.indexOf(page) + 1;
                const shouldRenderLeftEllipsis = this.pageList.length > this.maxPagesBeforeEllipsis && this.pageList.length - this.current > this.pagesBeforeEnd && pageId === this.pageList.length;
                const shouldRenderRightEllipsis = this.pageList.length > this.maxPagesBeforeEllipsis && this.current > this.minCurrentPageForRightEllipsis && pageId === 1;

                shouldRenderLeftEllipsis || shouldRenderRightEllipsis && this.renderEllipsis();

                return (
                  <div class="ods-pagination__list__page">
                    { shouldRenderLeftEllipsis && this.renderEllipsis() }

                    <li>
                      <ods-button
                        key={pageId}
                        class={{
                          'ods-pagination__list__page__button': true,
                          'ods-pagination__list__page__button--selected': this.current === pageId,
                        }}
                        variant={this.current === pageId ? ODS_BUTTON_VARIANT.default : ODS_BUTTON_VARIANT.ghost}
                        isDisabled={this.isDisabled}
                        label={`${pageId}`}
                        color={ODS_BUTTON_COLOR.primary}
                        size={ODS_BUTTON_SIZE.md}
                        onClick={(): void => this.handlePageClick(pageId)}
                        onKeyUp={(event: KeyboardEvent): void => this.handlePageKeyUp(event, pageId)}
                      >
                      </ods-button>
                    </li>

                    { shouldRenderRightEllipsis && this.renderEllipsis() }
                  </div>
                );
              })
          }

          { this.renderArrow( 'right' ) }
        </ul>
      </Host>
    );
  }
}
