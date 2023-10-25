import { OdsLogger } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '@ovhcloud/ods-component-button';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import type { OdsSelectOptionClickEventDetail } from '@ovhcloud/ods-component-select';
import { ODS_TEXT_SIZE } from '@ovhcloud/ods-component-text';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  forceUpdate,
  h,
} from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_PAGINATION_PER_PAGE_MIN, ODS_PAGINATION_PER_PAGE_OPTIONS } from './constants/pagination-per-page';
import { OdsPaginationController } from './core/controller';
import type { OdsPaginationAttribute, OdsPaginationPageList } from './interfaces/attributes';
import type { OdsPaginationChangedEventDetail, OdsPaginationEvent } from './interfaces/events';
import type { OdsPaginationMethod } from './interfaces/methods';

@Component({
  tag: 'osds-pagination',
  styleUrl: 'osds-pagination.scss',
  shadow: true,
})
export class OsdsPagination implements OdsPaginationAttribute, OdsPaginationEvent, OdsPaginationMethod {
  private logger = new OdsLogger('OsdsPagination');
  private actualTotalPages = DEFAULT_ATTRIBUTE.totalPages;
  controller: OdsPaginationController = new OdsPaginationController(this);

  @Element() el!: HTMLStencilElement;

  @State() itemPerPage = ODS_PAGINATION_PER_PAGE_MIN;
  @State() pageList: OdsPaginationPageList = [];

  /** @see OdsPaginationAttributes.current */
  @Prop({ reflect: true, mutable: true }) current: number = DEFAULT_ATTRIBUTE.current;

  /** @see OdsPaginationAttributes.totalItems */
  @Prop({ reflect: true }) totalItems?: number;

  /** @see OdsPaginationAttributes.totalPages */
  @Prop({ reflect: true }) totalPages: number = DEFAULT_ATTRIBUTE.totalPages;

  /** @see OdsPaginationAttributes.disabled */
  @Prop({ reflect: true, mutable: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsPaginationAttributes.labelTooltipPrevious */
  @Prop({ reflect: true }) labelTooltipPrevious: string = DEFAULT_ATTRIBUTE.labelTooltipPrevious;

  /** @see OdsPaginationAttributes.labelTooltipNext */
  @Prop({ reflect: true }) labelTooltipNext: string = DEFAULT_ATTRIBUTE.labelTooltipNext;

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

  @Listen('odsValueChange')
  odsValueChangeHandler(event: CustomEvent<OdsSelectOptionClickEventDetail>) {
    const { value } = event.detail;

    if (value) {
      this.itemPerPage = typeof value === 'number' ? value : parseInt(value, 10);
    }
  }

  @Watch('labelTooltipNext')
  @Watch('labelTooltipPrevious')
  updateLabelTooltip() {
    forceUpdate(this.el);
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
            onKeyDown={(event: KeyboardEvent) => {
              if (isLeft) {
                this.handlePreviousKeyDown(event, Number(this.current));
              } else {
                this.handleNextKeyDown(event, Number(this.current));
              }
            }}
            onClick={() => {
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

  renderEllipsis() {
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

  render() {
    if (!this.totalItems && this.actualTotalPages < 2) {
      return;
    }

    return (
      <Host>
        {
          !!this.totalItems
          && <>
            {
              this.totalItems >= ODS_PAGINATION_PER_PAGE_MIN
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
              </>
            }
            <osds-text color={ODS_THEME_COLOR_INTENT.primary}
              size={ODS_TEXT_SIZE._500}>
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
