import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { odsFileDefaultAttributes, OdsIconName, OdsIconSize,
  OdsFileHeader, OdsFileHeaderController } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

@Component({
  tag: 'osds-file-header',
  styleUrl: '../osds-file.scss',
  shadow: true
})
export class OsdsFileHeader implements OdsFileHeader {
  controller: OdsFileHeaderController = new OdsFileHeaderController(this);

  @Prop({ reflect: true }) public isSuccessful = false;
  @Prop({ reflect: true }) public disabled = odsFileDefaultAttributes.disabled;
  @Prop({ reflect: true }) public errorMessage = odsFileDefaultAttributes.errorMessage;
  @Prop({ reflect: true }) public acceptedTypes = odsFileDefaultAttributes.acceptedTypes;
  @Prop({ reflect: true }) public headerTitle = odsFileDefaultAttributes.headerTitle;
  @Prop({ reflect: true }) public dividerLabel = odsFileDefaultAttributes.dividerLabel;
  @Prop({ reflect: true }) public selectFilesLabel = odsFileDefaultAttributes.selectFilesLabel;

  @Event() filesSelected!: EventEmitter<File[]>;

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
  render() {
      const normalContent =
        <div>
          <div class='ods-file__dropzone__header__title'>
            <span class='ods-file__dropzone__header__title__label '>{this.headerTitle}</span>
            { this.acceptedTypes && <span class='ods-file__dropzone__header__title__types'>({this.acceptedExtensions()})</span> }
          </div>
        <span class='ods-file__dropzone__header__or'>{this.dividerLabel}</span>
        <osds-link class='ods-file__dropzone__header__link' type="button" disabled={this.disabled}>
          <label htmlFor="file">{this.selectFilesLabel}</label>
          <span slot='end'><osds-icon name={OdsIconName.ARROW_RIGHT} size={OdsIconSize.xs}
                                      color={OdsThemeColorIntent.primary} /></span>
        </osds-link>
        <input type="file" id="file" name="file" style={{ display: 'none' }}
               onChange={this.handleFilesSelected}
               multiple
               accept={this.acceptedTypes}
        />
      </div>

      if(this.errorMessage) {
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
      } else if(this.isSuccessful) {
        return <div class='ods-file__dropzone--success__header'>
          <div class='ods-file__dropzone--success__header__message'>
            <div class='ods-file__dropzone--success__header__icon-wrapper'>
              <osds-icon name={OdsIconName.CHECK}
                         color={OdsThemeColorIntent.success}
                         size={OdsIconSize.xs}
              />
            </div>

            <span class='ods-file__dropzone__header__title__label'>Tous les fichiers ont été téléchargés</span>
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
