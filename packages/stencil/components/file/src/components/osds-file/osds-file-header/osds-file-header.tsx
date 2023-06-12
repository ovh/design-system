import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { odsFileDefaultAttributes, OdsIconName, OdsIconSize,
  OdsFileHeader, OdsFileHeaderController } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

@Component({
  tag: 'osds-file-header',
  styleUrl: '../osds-dropzone.scss',
  shadow: true
})
export class OsdsFileHeader implements OdsFileHeader {
  controller: OdsFileHeaderController = new OdsFileHeaderController(this);

  @Prop({ reflect: true }) public isSuccessful = false;
  @Prop({ reflect: true }) public disabled = odsFileDefaultAttributes.disabled;
  @Prop({ reflect: true }) public errorMessage = odsFileDefaultAttributes.errorMessage;
  @Prop({ reflect: true }) public acceptedTypes = odsFileDefaultAttributes.acceptedTypes;

  @Event() filesSelected!: EventEmitter<File[]>;

  componentWillRender(): void {
    this.controller.validateAttributes();
  }

  emitFiles = (files: File[]) => {
    this.filesSelected.emit(files);
  }

  acceptedExtensions = () => {
    return this.controller.getAcceptedTypes()
  }

  handleFilesSelected = (e: Event) => {
    console.log(e)
    this.controller.getFilesFromSelection(e)
  }
  render() {
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
            <div class='ods-file__dropzone__header__title'>
              <span class='ods-file__dropzone__header__title__label '>Glisser-déposer une pièce jointe</span>
              <span class='ods-file__dropzone__header__title__types'>({this.acceptedExtensions()})</span>
            </div>
            <div>
              <span class='ods-file__dropzone__header__or'>ou</span>
              <osds-link class='ods-file__dropzone__header__link' type="button" disabled={this.disabled}>
                <label htmlFor="file">sélectionner un fichier</label>
                <span slot='end'><osds-icon name={OdsIconName.ARROW_RIGHT} size={OdsIconSize.xs}
                                            color={OdsThemeColorIntent.primary} /></span>
              </osds-link>
              <input type="file" id="file" name="file" style={{ display: 'none' }}
                     onChange={this.handleFilesSelected}
                     multiple
                     accept={this.acceptedTypes}
              />
            </div>
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

          <div class='ods-file__dropzone__header__title'>
            <span class='ods-file__dropzone__header__title__label '>Glisser-déposer une pièce jointe</span>
            <span class='ods-file__dropzone__header__title__types'>({this.acceptedExtensions()})</span>
          </div>

          <div>
            <span class='ods-file__dropzone__header__or'>ou</span>

            <osds-link class='ods-file__dropzone__header__link' type="button" disabled={this.disabled}>
              <label htmlFor="file">sélectionner un fichier</label>

              <span slot='end'>
                <osds-icon
                  name={OdsIconName.ARROW_RIGHT}
                  size={OdsIconSize.xs}
                  color={OdsThemeColorIntent.primary}
                />
              </span>
            </osds-link>

            <input type="file" id="file" name="file" style={{ display: 'none' }}
                   onChange={this.handleFilesSelected}
                   multiple
                   accept={this.acceptedTypes}
            />
          </div>

        </section>
      </div>
    }
}
