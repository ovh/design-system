import { Component, Event, type EventEmitter, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { type OdsIconName } from '../../../../icon/src';

@Component({
  shadow: true,
  styleUrl: 'ods-breadcrumb-item.scss',
  tag: 'ods-breadcrumb-item',
})
export class OdsBreadcrumbItem {
  @Prop() isCollapsed: boolean = false;
  @Prop() isExpandable: boolean = false;
  @Prop() isLast: boolean = false;

  @Prop({ reflect: true }) public href!: string;
  @Prop({ reflect: true }) public icon?: OdsIconName;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public label?: string;
  @Prop({ reflect: true }) public referrerpolicy?: ReferrerPolicy;
  @Prop({ reflect: true }) public rel?: HTMLAnchorElement['rel'];
  @Prop({ reflect: true }) public target?: HTMLAnchorElement['target'];

  @Event() odsClick!: EventEmitter<MouseEvent>;
  @Event() odsExpand!: EventEmitter<void>;

  onExpandClick(e: Event): void {
    e.preventDefault();
    e.stopPropagation();

    this.odsExpand.emit();
  }

  onLinkClick(e: MouseEvent): void {
    if (!this.isDisabled) {
      this.odsClick.emit(e);
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class={{
        'ods-breadcrumb-item': true,
        'ods-breadcrumb-item--collapsed': this.isCollapsed && !this.isExpandable,
      }}>
        {
          this.isExpandable &&
          <ods-link
            href=""
            label="&hellip;"
            onClick={ (e: MouseEvent) => this.onExpandClick(e) }>
          </ods-link>
        }

        {
          !this.isExpandable && (this.isLast
            ? <span
              aria-current="page"
              class="ods-breadcrumb-item__last"
              part="last">
              { this.label }
            </span>
            : <ods-link
              exportparts="link"
              href={ this.href }
              icon={ this.icon }
              isDisabled={ this.isDisabled }
              label={ this.label }
              onClick={ (e: MouseEvent) => this.onLinkClick(e) }
              referrerpolicy={ this.referrerpolicy }
              rel={ this.rel }
              target={ this.target }>
            </ods-link>
          )
        }
      </Host>
    );
  }
}
