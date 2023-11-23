import type { OdsDatagridAttribute, OdsDatagridColumn, OdsDatagridRow } from './interfaces/attributes';
import type { OdsDatagridEvent } from './interfaces/events';
import type { OdsCheckboxCheckedChangeEventDetail } from '@ovhcloud/ods-component-checkbox';
import type { EventEmitter } from '@stencil/core';
import type { ColumnComponent, SorterFromTable } from 'tabulator-tables';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { Ods } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { Component, Element, Event, Host, Listen, Prop, Watch, h } from '@stencil/core';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsDatagridController } from './core/controller';

Ods.instance().logging(true);

@Component({
  shadow: true,
  styleUrl: 'osds-datagrid.scss',
  tag: 'osds-datagrid',
})
export class OsdsDatagrid implements OdsDatagridAttribute, OdsDatagridEvent {
  private readonly controler = new OdsDatagridController(this);
  readonly logger = new OdsLogger('OsdsDatagrid');
  private grid?: HTMLDivElement;
  table?: Tabulator;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public columns: OdsDatagridColumn[] | string = DEFAULT_ATTRIBUTE.columns;

  @Prop({ reflect: true }) public hasHideableColumns?: boolean = DEFAULT_ATTRIBUTE.hasHideableColumns;

  @Prop({ reflect: true }) public height: number = DEFAULT_ATTRIBUTE.height;

  @Prop({ mutable: true, reflect: true }) public hideableColumns?: string[] = DEFAULT_ATTRIBUTE.hideableColumns;

  @Prop({ reflect: true }) public isSelectable?: boolean = DEFAULT_ATTRIBUTE.isSelectable;

  @Prop({ reflect: true }) public noResultLabel?: string = DEFAULT_ATTRIBUTE.noResultLabel;

  @Prop({ reflect: true }) public rowHeight?: number = DEFAULT_ATTRIBUTE.rowHeight;

  @Prop({ reflect: true }) public rows: OdsDatagridRow[] | string = DEFAULT_ATTRIBUTE.rows;

  @Event() odsSortChange!: EventEmitter<{ field: string, dir: 'asc' | 'desc' | 'none' }>;

  @Event() odsRowSelectionChange!: EventEmitter<{ rows: OdsDatagridRow[] }>;

  @Event() odsBottomScroll!: EventEmitter<void>;

  componentDidLoad(): void {
    this.controler.validateAttributes();
    this.initTable();
  }

  @Watch('rowHeight')
  onChangeRowHeight(): void {
    if (!this.table || !this.rowHeight) {
      return;
    }
    this.table.options.rowHeight = this.rowHeight;
    this.setColumnsHeight();
    this.table.rowManager.reRenderInPosition();
  }

  @Watch('height')
  onChangeHeight(): void {
    this.table?.setHeight(this.height);
  }

  @Watch('noResultLabel')
  onChangeNoResultLabel(): void {
    this.initTable();
  }

  @Watch('rows')
  onChangeRows(): void {
    const rows = this.controler.getRows();
    this.table?.setData(rows);
  }

  @Watch('hasHideableColumns')
  @Watch('isSelectable')
  @Watch('columns')
  onChangeColumns(): void {
    const columns = this.controler.getColumns();
    this.table?.setColumns(this.controler.getTabulatorColumns(columns));
    this.setColumnsHeight();
    if (!this.isSelectable) {
      this.table?.getRows().forEach((row) => row.deselect());
    }
  }

  @Listen('odsCheckedChange')
  handlerCheckedChange({ detail }: CustomEvent<OdsCheckboxCheckedChangeEventDetail>): void {
    const column = this.table?.getColumn(detail.value);
    if (detail.checked) {
      column?.show();
      this.hideableColumns = this.hideableColumns?.filter((col) => col !== detail.value);
    } else {
      column?.hide();
      this.hideableColumns?.push(detail.value);
    }
    this.table?.redraw();
  }

  private setColumnsHeight(): void {
    if (this.table) {
      this.table.getColumns().forEach((col) => {
        col.getElement().style.height = `${this.rowHeight}px`;
      });

      // As header is using web-component, its size is not correct when tabulator
      // set the tableholder element height, so we need to update it
      this.table.rowManager.element.style.height = `calc(100% - ${this.rowHeight}px)`;
      this.table.rowManager.element.style.maxHeight = `calc(100% - ${this.rowHeight}px)`;
    }
  }

  private initTable(): void {
    if (!this.grid) {
      return;
    }
    const columns = this.controler.getColumns();
    const rows = this.controler.getRows();

    this.table = new Tabulator(this.grid, {
      columns: this.controler.getTabulatorColumns(columns),
      data: rows,
      headerSortElement: (_column: ColumnComponent, dir: 'asc' | 'desc' | 'none'): string => {
        function getIcon(): ODS_ICON_NAME {
          if (dir === 'none') {
            return ODS_ICON_NAME.SORT_DOWN;
          }
          return dir === 'desc' ? ODS_ICON_NAME.SORT_UP : ODS_ICON_NAME.SORT_DOWN;
        }
        return `<osds-icon
        name="${getIcon()}"
        size="${ODS_ICON_SIZE.sm}"
        color="${ODS_THEME_COLOR_INTENT.primary}">
      </osds-icon>`;
      },
      height: this.height,
      layout: 'fitColumns',
      placeholder: this.noResultLabel,
      renderHorizontal: 'virtual',
      renderVertical: 'virtual',
      rowHeight: this.rowHeight,
    });
    this.table?.on('renderComplete', () => {
      this.setColumnsHeight();
      this.handlerEvent();
    });
  }

  private handlerEvent(): void {
    this.table?.on('dataSorting', (sorters: SorterFromTable[]): void => {
      this.odsSortChange.emit({ dir: sorters[0].dir, field: sorters[0].field });
    });

    // @ts-ignore type not good, doc: https://tabulator.info/docs/5.5/events#select
    this.table?.on('rowSelectionChanged', (rows: Record<string, unknown>[]): void => {
      this.odsRowSelectionChange.emit({ rows });
    });

    const tabulatorholder = this.el.shadowRoot?.querySelector('.tabulator-tableholder');
    tabulatorholder?.addEventListener("scroll", () => {
      if ((tabulatorholder as HTMLElement).offsetHeight + tabulatorholder.scrollTop >= tabulatorholder.scrollHeight) {
        this.odsBottomScroll.emit();
      }
    });
  }

  render(): JSX.Element {
    return (
      <Host>
        <div ref={ (el): HTMLDivElement | undefined => this.grid = el }></div>
      </Host>
    );
  }
}
