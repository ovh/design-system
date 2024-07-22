import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { formatBytes } from '../../../../../utils/file';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';

@Component({
  shadow: true,
  styleUrl: 'ods-file-upload-item.scss',
  tag: 'ods-file-upload-item',
})
export class OdsFileUploadItem {
  @Prop({ reflect: false }) public cancelHandler!: () => void;
  @Prop({ reflect: true }) public error: string = '';
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isUploaded: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public progress?: number;
  @Prop({ reflect: true }) public size!: number;
  @Prop({ reflect: true }) public successLabel!: string;

  private renderStatus(): FunctionalComponent {
    if (this.error) {
      return (
        <span class="ods-file-upload-item__file__error">
          { this.error }
        </span>
      );
    }

    if (this.progress && this.progress < 100) {
      return (
        <div class="ods-file-upload-item__file__progress">
          <ods-progress-bar
            class="ods-file-upload-item__file__progress__bar"
            max={ 100 }
            value={ this.progress }>
          </ods-progress-bar>

          <span>
            { this.progress }%
          </span>
        </div>
      );
    }

    if (this.isUploaded) {
      return (
        <span class="ods-file-upload-item__file__success">
          <ods-icon name={ ODS_ICON_NAME.check }></ods-icon>&nbsp;{ this.successLabel }
        </span>
      );
    }

    return <span></span>;
  }

  render(): FunctionalComponent {
    return (
      <Host
        class={{
          'ods-file-upload-item': true,
          'ods-file-upload-item--disabled': this.isDisabled,
        }}>
        <ods-icon
          class="ods-file-upload-item__icon"
          name={ ODS_ICON_NAME.file }>
        </ods-icon>

        <div class="ods-file-upload-item__file">
          <div class="ods-file-upload-item__file__info">
            <span class="ods-file-upload-item__file__info__name">
              { this.name }
            </span>

            <span class="ods-file-upload-item__file__info__size">
              { formatBytes(this.size) }
            </span>

            <ods-button
              class="ods-file-upload-item__file__info__remove"
              icon={ ODS_ICON_NAME.xmark }
              isDisabled={ this.isDisabled }
              label=""
              onClick={ () => this.cancelHandler() }
              size={ ODS_BUTTON_SIZE.sm }
              variant={ ODS_BUTTON_VARIANT.ghost }>
            </ods-button>
          </div>

          { this.renderStatus() }
        </div>
      </Host>
    );
  }
}
