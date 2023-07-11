import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import {
  odsFileItemDefaultAttributes,
  OdsIconName, OdsIconSize, OdsFileItem, OdsFileItemController
} from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

@Component({
  tag: 'osds-file-item',
  styleUrl: '../osds-file.scss',
  shadow: true
})
export class OsdsFileItem implements OdsFileItem {
  controller: OdsFileItemController = new OdsFileItemController(this);

  @Prop({ reflect: true }) public error = odsFileItemDefaultAttributes.error;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public size!: number;
  @Prop({ reflect: true }) public progress = odsFileItemDefaultAttributes.progress;

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
    <osds-icon color={OdsThemeColorIntent.primary} name={OdsIconName.FILE} size={OdsIconSize.sm}></osds-icon>
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
            <osds-icon size={OdsIconSize.sm}
                       color={OdsThemeColorIntent.error}
                       name={OdsIconName.CLOSE}
            />
          </osds-button>
        </div>
      </Host>
    );
  }
}
