import { Component, Event, type EventEmitter, type FunctionalComponent, Host, Prop, State, h } from '@stencil/core';
import { getRandomHTMLId } from '../../../../../utils/dom';
import { formatBytes, getFilesFromDataTransfer } from '../../../../../utils/file';
import { ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_FILE_REJECTION_CAUSE } from '../../constants/file-error';
import { filterMaxFiles, filterMaxSize, filterValidFiles } from '../../controller/ods-file-upload';
import { type OdsFile } from '../../interfaces/attributes';
import { type OdsFileChangeEventDetail, type OdsFileRejectedEventDetail } from '../../interfaces/events';

@Component({
  shadow: true,
  styleUrl: 'ods-file-upload.scss',
  tag: 'ods-file-upload',
})
export class OdsFileUpload {
  private inputFile?: HTMLInputElement;

  @State() isDragging: boolean = false;

  @Prop({ reflect: true }) public accept: string = '';
  @Prop({ reflect: true }) public acceptedFileLabel?: string;
  @Prop({ reflect: true }) public browseFileLabel: string = 'Browse files';
  @Prop({ reflect: true }) public dropzoneLabel: string = 'Drag & drop a file';
  @Prop({ reflect: true }) public error: string = '';
  @Prop({ reflect: false }) public files: OdsFile[] = [];
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public maxFile?: number;
  @Prop({ reflect: true }) public maxFileLabel?: string;
  @Prop({ reflect: true }) public maxSize?: number;
  @Prop({ reflect: true }) public maxSizeLabel?: string;
  @Prop({ reflect: true }) public uploadSuccessLabel: string = 'File uploaded';

  @Event() odsCancel!: EventEmitter<OdsFile>;
  @Event() odsChange!: EventEmitter<OdsFileChangeEventDetail>;
  @Event() odsRejected!: EventEmitter<OdsFileRejectedEventDetail>;

  private browseFiles(): void {
    this.inputFile?.click();
  }

  private handleFiles(files: OdsFile[]): void {
    const { rejectedFiles: invalidFiles, validFiles } = filterValidFiles(files, this.accept);

    if (invalidFiles.length) {
      this.odsRejected.emit({
        files: invalidFiles,
        reason: ODS_FILE_REJECTION_CAUSE.wrongFormat,
      });
    }

    const { rejectedFiles: oversizedFiles, validFiles: fittedFiles } = filterMaxSize(validFiles, this.maxSize);

    if (oversizedFiles.length) {
      this.odsRejected.emit({
        files: oversizedFiles,
        reason: ODS_FILE_REJECTION_CAUSE.sizeTooLarge,
      });
    }

    const { rejectedFiles: exceedingFiles, validFiles: remainingFiles } = filterMaxFiles(fittedFiles, this.files.length, this.maxFile);

    if (exceedingFiles.length) {
      this.odsRejected.emit({
        files: exceedingFiles,
        reason: ODS_FILE_REJECTION_CAUSE.maxFileReached,
      });
    }

    if (remainingFiles.length) {
      this.odsChange.emit({
        files: remainingFiles.map((file) => {
          // Add a unique ID to help user to identify each file on their side without having to add their own ID
          file.odsId = getRandomHTMLId();
          return file;
        }),
        noError: invalidFiles.length === 0 && oversizedFiles.length === 0 && exceedingFiles.length === 0,
      });
    }
  }

  private onDragEnter(): void {
    if (!this.isDisabled) {
      this.isDragging = true;
    }
  }

  private onDragLeave(): void {
    this.isDragging = false;
  }

  private onDrop(event: DragEvent): void {
    event.preventDefault();

    if (!this.isDisabled && event.dataTransfer) {
      this.handleFiles(getFilesFromDataTransfer(event.dataTransfer));
    }

    this.isDragging = false;
  }

  private removeFileFromInput(file: OdsFile): void {
    if (!this.inputFile) {
      return;
    }
    
    const dataTransfer = new DataTransfer();
    let indexToRemove = Array.from(this.inputFile.files)
      .map(a => a.odsId)
      .indexOf(file.odsId);

    Array.from(this.inputFile.files)
      .forEach((file, index) => {
        if (index !== indexToRemove) {
          dataTransfer.items.add(file);
        }
      });

    this.inputFile.files = dataTransfer.files;
  }

  private onFileCancel(file: OdsFile): void {
    this.removeFileFromInput(file);
    this.odsCancel.emit(file);
  }

  private onFileChange(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    this.handleFiles(Array.from(files || []));
  }

  render(): FunctionalComponent {
    return (
      <Host
        class={{
          'ods-file-upload': true,
          'ods-file-upload--disabled': this.isDisabled,
          'ods-file-upload--error': !!this.error,
        }}
        onDragEnter={ () => this.onDragEnter() }
        onDragLeave={ () => this.onDragLeave() }
        onDragOver={ (e: DragEvent) => e.preventDefault() }
        onDrop={ (e: DragEvent) => this.onDrop(e) }>
        <div
          class={{
            'ods-file-upload__dropzone': true,
            'ods-file-upload__dropzone--dragging': this.isDragging,
            'ods-file-upload__dropzone--empty': this.files.length === 0,
          }}
          part="dropzone">
          <input
            class="ods-file-upload__dropzone__input"
            accept={ this.accept }
            disabled={ this.isDisabled }
            multiple
            onChange={ (e: Event) => this.onFileChange(e) }
            ref={ (el): HTMLInputElement => this.inputFile = el as HTMLInputElement }
            type="file" />

          <ods-icon
            class="ods-file-upload__dropzone__icon"
            name={ ODS_ICON_NAME.filePlus }>
          </ods-icon>

          <span>
            { this.dropzoneLabel }
          </span>

          <div class="ods-file-upload__dropzone__rules">
            {
              this.maxFileLabel && typeof this.maxFile === 'number' && this.maxFile >= 0 &&
              <span class="ods-file-upload__dropzone__rules__max-file">
                { this.maxFileLabel }&nbsp;{ this.maxFile }
              </span>
            }

            {
              this.maxSizeLabel && typeof this.maxSize === 'number' && this.maxSize >= 0 &&
              <span class="ods-file-upload__dropzone__rules__max-size">
                { this.maxSizeLabel }&nbsp;{ formatBytes(this.maxSize) }
              </span>
            }

            {
              this.acceptedFileLabel &&
              <span class="ods-file-upload__dropzone__rules__file-format">
                { this.acceptedFileLabel }
              </span>
            }
          </div>

          <ods-button
            icon={ ODS_ICON_NAME.upload }
            isDisabled={ this.isDisabled }
            label={ this.browseFileLabel }
            onClick={ () => this.browseFiles() }
            variant={ ODS_BUTTON_VARIANT.ghost }>
          </ods-button>

          {
            !!this.error &&
            <div class="ods-file-upload__dropzone__error">
              <span>
                { this.error }
              </span>

              <ods-divider></ods-divider>
            </div>
          }
        </div>

        {
          this.files.length > 0 &&
          <div
            class="ods-file-upload__list"
            part="file-list">
            {
              this.files.map((file) => (
                <ods-file-upload-item
                  cancelHandler={ () => this.onFileCancel(file) }
                  error={ file.error }
                  isDisabled={ this.isDisabled }
                  isUploaded={ file.isUploaded }
                  name={ file.name }
                  progress={ file.progress }
                  size={ file.size }
                  successLabel={ this.uploadSuccessLabel }>
                </ods-file-upload-item>
              ))
            }
          </div>
        }
      </Host>
    );
  }
}
