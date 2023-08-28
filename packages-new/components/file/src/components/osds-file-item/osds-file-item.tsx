import type { OdsFileItemAttribute } from './interfaces/attributes';
import type { OdsFileItemEvent } from './interfaces/events';
import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsFileItemController } from './core/controller';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';

@Component({
  tag: 'osds-file-item',
  styleUrl: '../osds-file/osds-file.scss',
  shadow: true
})
export class OsdsFileItem implements OdsFileItemAttribute, OdsFileItemEvent {
  controller = new OdsFileItemController(this);

  @Prop({ reflect: true }) public error = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) public name: string = DEFAULT_ATTRIBUTE.name;
  @Prop({ reflect: true }) public size: number = DEFAULT_ATTRIBUTE.size;
  @Prop({ reflect: true }) public progress = DEFAULT_ATTRIBUTE.progress;

  @Event() cancel!: EventEmitter<void>;
  componentWillRender(): void {
    this.controller.validateAttributes();
  }
  emitCancel() {
    this.cancel.emit();
  }
  getSizeInKiloBytes(size: number) {
    return this.controller.getSizeInKiloBytes(size);
  }
  getContent() {
    const normalContent = <div class='ods-file__item'>
    <osds-icon color={OdsThemeColorIntent.primary} name={ODS_ICON_NAME.FILE} size={ODS_ICON_SIZE.sm}></osds-icon>
      <div class={{
        'ods-file__item__label': true,
        'ods-file__item__label--errored': this.error ?? false,
      }}>
        <span>{this.name}</span>
        <span> ({this.getSizeInKiloBytes(this.size)} Ko)</span>
      </div>
    </div>

    const progressContent = <osds-progress-bar class="ods-file__item__progress-bar" value={this.progress} />

    if(this.error) return normalContent

    return this.progress !== undefined && this.progress >= 0 && this.progress < 100
      ? progressContent : normalContent
  }
  render() {
    return (
      <Host>
        <div class='ods-file__item'>
          { this.getContent() }
          <osds-button circle
                       onClick={() => this.emitCancel()}
          >
            <osds-icon size={ODS_ICON_SIZE.sm}
                       color={OdsThemeColorIntent.error}
                       name={ODS_ICON_NAME.CLOSE}
            />
          </osds-button>
        </div>
      </Host>
    );
  }
}
