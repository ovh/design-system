import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';
import { OdsIconName, OdsIconSize, odsFileHeaderDefaultAttributes,
  OdsFileHeader, OdsFileHeaderController } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

@Component({
  tag: 'osds-file-header',
  styleUrl: '../osds-file.scss',
  shadow: true
})
export class OsdsFileHeader implements OdsFileHeader {
  controller: OdsFileHeaderController = new OdsFileHeaderController(this);

  @Prop({ reflect: true }) public isSuccessful = odsFileHeaderDefaultAttributes.isSuccessful;
  @Prop({ reflect: true }) public isErrored = odsFileHeaderDefaultAttributes.isErrored;
  @Prop({ reflect: true }) public disabled = odsFileHeaderDefaultAttributes.disabled;
  @Prop({ reflect: true }) public errorMessage = odsFileHeaderDefaultAttributes.errorMessage;
  @Prop({ reflect: true }) public successMessage = odsFileHeaderDefaultAttributes.successMessage;
  @Prop({ reflect: true }) public acceptedTypes = odsFileHeaderDefaultAttributes.acceptedTypes;
  @Prop({ reflect: true }) public headerTitle = odsFileHeaderDefaultAttributes.headerTitle;
  @Prop({ reflect: true }) public dividerLabel = odsFileHeaderDefaultAttributes.dividerLabel;
  @Prop({ reflect: true }) public selectFilesLabel = odsFileHeaderDefaultAttributes.selectFilesLabel;

  @Event() filesSelected!: EventEmitter<File[]>;
  @State() isSuccessMessageDisplayed = false;

  componentWillRender(): void {
    this.controller.validateAttributes();
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
        if(newValue) {
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
              name={OdsIconName.ARROW_RIGHT}
              size={OdsIconSize.xs}
            />
          </span>
        </osds-link>
        <input type="file" id="file" name="file" style={{ display: 'none' }}
               onChange={this.handleFilesSelected}
               multiple
               accept={this.acceptedTypes}
        />
      </div>

      if(this.isErrored) {
        return <div class='ods-file__dropzone--errored__header'>
          <div class='ods-file__dropzone--errored__header__message'>
            <div class='ods-file__dropzone--errored__header__icon-wrapper'>
              <osds-icon name={OdsIconName.CLOSE}
                         color={OdsThemeColorIntent.error}
                         size={OdsIconSize.xs}
              />
            </div>
            <span class='ods-file__dropzone__header__title__label'>{this.errorMessage}</span>
          </div>
          <section>
            {normalContent}
          </section>
        </div>
      } else if(this.isSuccessMessageDisplayed) {
        return <div class='ods-file__dropzone--success__header'>
          <div class='ods-file__dropzone--success__header__message'>
            <div class='ods-file__dropzone--success__header__icon-wrapper'>
              <osds-icon name={OdsIconName.CHECK}
                         color={OdsThemeColorIntent.success}
                         size={OdsIconSize.xs}
              />
            </div>

            <span class='ods-file__dropzone__header__title__label'>{this.successMessage}</span>
          </div>
        </div>
      }

      return <div class='ods-file__dropzone__header'>
        <osds-icon name={OdsIconName.PAGE_CONCEPT} color={OdsThemeColorIntent.primary} size={OdsIconSize.xl} />
        <section>
          {normalContent}
        </section>
      </div>
    }
}
