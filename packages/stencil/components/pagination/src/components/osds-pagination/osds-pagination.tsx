import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
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
  @State() pageindex: number = 0;

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
    this.logger.debug(`current: ${this.current}]`, 'defaultCurrent: ', defaultCurrent);
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

  changeValue(current: number) {
    this.current = current;
  }

  @Watch('disabled')
  closeWhenDisabled(disabled?: boolean) {
    if (disabled) {
    }
  }

  onKeyPress = (event: any, page: any) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      this.setPageIndex(page);
    }
  };

  createPageList(totalPages: number) {
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
    return pageList;
  }

  render() {
    const { totalPages, disabled } = this;

    let pageList = this.createPageList(totalPages);

    return (
      <Host
        {...{
          class: disabled ? 'disabled' : '',
          onFocus: this.onFocus.bind(this),
          onBlur: this.onBlur.bind(this),
          pageIndex: this.disabled ? -1 : this.pageindex,
          totalPages: this.totalPages,
          current: this.current,
        }}
      >
        <div>
          <ul>
            <li class="arrows">
              <osds-button
                contrasted={true}
                color={OdsThemeColorIntent.primary}
                disabled={disabled ? true : this.pageindex == 1}
                onKeyDown={(event: any) => {
                  if (this.pageindex > 1 && !disabled) this.onKeyPress(event, Number(this.pageindex) - 1);
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
                      <osds-icon size={OdsIconSize.sm} color={OdsThemeColorIntent.primary} name={OdsIconName.ELLIPSIS} class="ellipsis"></osds-icon>
                    )}
                    <li>
                      <osds-button
                        class={`${this.pageindex == page.id ? 'selectedpage' : ''}`}
                        contrasted={this.pageindex == page.id ? false : true}
                        disabled={disabled ? true : false}
                        color={OdsThemeColorIntent.primary}
                        size={OdsButtonSize.sm}
                        onKeyDown={(event: any) => {
                          if (!disabled) this.onKeyPress(event, Number(page.id));
                        }}
                        onClick={() => {
                          this.setPageIndex(Number(page.id));
                        }}
                      >
                        {page.id}
                      </osds-button>
                    </li>
                    {pageList.length > 6 && this.pageindex > 4 && page.id == 1 && (
                      <li>
                        <osds-icon size={OdsIconSize.sm} color={OdsThemeColorIntent.text} name={OdsIconName.ELLIPSIS} class="ellipsis"></osds-icon>
                      </li>
                    )}
                  </span>
                );
            })}

            <li class="arrows">
              <osds-button
                contrasted={true}
                color={OdsThemeColorIntent.primary}
                disabled={disabled ? true : this.pageindex >= pageList.length}
                onKeyDown={(event: any) => {
                  if (this.pageindex < pageList.length && !disabled) this.onKeyPress(event, Number(this.pageindex) + 1);
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
