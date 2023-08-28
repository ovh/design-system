import type { OdsFileHeaderAttribute } from './interfaces/attributes';
import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsFileHeaderController } from './core/controller';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';

@Component({
  tag: 'osds-file-header',
  styleUrl: '../osds-file/osds-file.scss',
  shadow: true
})
export class OsdsFileHeader implements OdsFileHeaderAttribute {
  controller = new OdsFileHeaderController(this);

  @Prop({ reflect: true }) public isSuccessful = DEFAULT_ATTRIBUTE.isSuccessful;
  @Prop({ reflect: true }) public isErrored = DEFAULT_ATTRIBUTE.isErrored;
  @Prop({ reflect: true }) public disabled = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) public errorMessage = DEFAULT_ATTRIBUTE.errorMessage;
  @Prop({ reflect: true }) public successMessage = DEFAULT_ATTRIBUTE.successMessage;
  @Prop({ reflect: true }) public acceptedTypes = DEFAULT_ATTRIBUTE.acceptedTypes;
  @Prop({ reflect: true }) public headerTitle = DEFAULT_ATTRIBUTE.headerTitle;
  @Prop({ reflect: true }) public dividerLabel = DEFAULT_ATTRIBUTE.dividerLabel;
  @Prop({ reflect: true }) public selectFilesLabel = DEFAULT_ATTRIBUTE.selectFilesLabel;

  @Event() filesSelected!: EventEmitter<File[]>;
  @State() isSuccessMessageDisplayed = false;

  componentWillRender(): void {
    this.controller.validateAttributes();
    this.handleIsSuccessfulChange(this.isSuccessful ?? false);
  }

  emitFiles = (files: File[]) => {
    this.filesSelected.emit(files);
  }

  acceptedExtensions = () => {
    return this.controller.acceptedExtensions()
  }

  handleFilesSelected = (e: Event) => {
    this.controller.getFilesFromSelection(e)
  }

  displaySuccessMessage = () => {
    this.isSuccessMessageDisplayed = true;
    setTimeout(() => {
      this.isSuccessMessageDisplayed = false;
    }, 2000)
  }

  @Watch('isSuccessful')
  handleIsSuccessfulChange(newValue: boolean) {
    if (newValue) {
      this.displaySuccessMessage();
    }
  }

  render() {
      const normalContent =
        <div>
          <div class='ods-file__dropzone__header__title'>
            <span class='ods-file__dropzone__header__title__label '>{this.headerTitle}</span>
            { this.acceptedTypes && <span class='ods-file__dropzone__header__title__types'>({this.acceptedExtensions()})</span> }
          </div>
        <span class='ods-file__dropzone__header__or'>{this.dividerLabel}</span>
        <osds-link class='ods-file__dropzone__header__link' color={OdsThemeColorIntent.primary} disabled={this.disabled}>
          <label htmlFor="file">{this.selectFilesLabel}</label>
          <span slot='end'>
            <osds-icon
              class="ods-file__dropzone__header__link__icon"
              hoverable={true}
              name={ODS_ICON_NAME.ARROW_RIGHT}
              size={ODS_ICON_SIZE.xs}
            />
          </span>
        </osds-link>
        <input type="file" id="file" name="file" style={{ display: 'none' }}
               onChange={this.handleFilesSelected}
               multiple
               accept={this.acceptedTypes}
        />
      </div>

      if (this.isErrored) {
        return <div class='ods-file__dropzone--errored__header'>
          <div class='ods-file__dropzone--errored__header__message'>
            <div class='ods-file__dropzone--errored__header__icon-wrapper'>
              <osds-icon name={ODS_ICON_NAME.CLOSE}
                         color={OdsThemeColorIntent.error}
                         size={ODS_ICON_SIZE.xs}
              />
            </div>
            <span class='ods-file__dropzone__header__title__label'>{this.errorMessage}</span>
          </div>
          <section>
            {normalContent}
          </section>
        </div>
      } else if (this.isSuccessMessageDisplayed) {
        return <div class='ods-file__dropzone--success__header'>
          <div class='ods-file__dropzone--success__header__message'>
            <div class='ods-file__dropzone--success__header__icon-wrapper'>
              <osds-icon name={ODS_ICON_NAME.CHECK}
                         color={OdsThemeColorIntent.success}
                         size={ODS_ICON_SIZE.xs}
              />
            </div>

            <span class='ods-file__dropzone__header__title__label'>{this.successMessage}</span>
          </div>
        </div>
      }

      return <div class='ods-file__dropzone__header'>
        <osds-icon name={ODS_ICON_NAME.PAGE_CONCEPT} color={OdsThemeColorIntent.primary} size={ODS_ICON_SIZE.xl} />
        <section>
          {normalContent}
        </section>
      </div>
    }
}
