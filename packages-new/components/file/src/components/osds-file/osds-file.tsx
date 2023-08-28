
import type { OdsFileAttribute, OdsFileI } from './interfaces/attributes';
import type { OdsFileEvent } from './interfaces/events';
import { Component, Host, h, State, Prop, Event, EventEmitter, Listen, Watch } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsFileController } from './core/controller';

@Component({
  tag: 'osds-file',
  styleUrl: 'osds-file.scss',
  shadow: true
})
export class OsdsFile implements OdsFileAttribute, OdsFileEvent {
  controller = new OdsFileController(this);

  @Prop({ reflect: true }) public disabled = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) public errorMessage = DEFAULT_ATTRIBUTE.errorMessage;
  @Prop({ reflect: true }) public acceptedTypes = DEFAULT_ATTRIBUTE.acceptedTypes;
  @Prop({ reflect: true }) public files?: OdsFileI[] = DEFAULT_ATTRIBUTE.files;
  @Prop({ reflect: true }) public maxFiles = DEFAULT_ATTRIBUTE.maxFiles;
  @Prop({ reflect: true }) public headerTitle = DEFAULT_ATTRIBUTE.headerTitle;
  @Prop({ reflect: true }) public dividerLabel = DEFAULT_ATTRIBUTE.dividerLabel;
  @Prop({ reflect: true }) public selectFilesLabel = DEFAULT_ATTRIBUTE.selectFilesLabel;

  @State() dragOver = false;
  @State() isErrored = false;
  @State() isSuccessful = false;

  @Event() odsFilesChange!: EventEmitter<File[]>;
  @Event() odsCancel!: EventEmitter<File>;
  @Event() odsRejectedFile!: EventEmitter<File>;
  @Event() odsMaxFilesReached!: EventEmitter<void>;

  dropzoneRef!: HTMLDivElement;

  emitRejectedFile = (file: File) => {
    this.odsRejectedFile.emit(file);
  }

  emitFiles = (files: File[]) => {
    if(this.disabled) {
      return;
    }

    this.odsFilesChange.emit(files);
  }

  emitMaxFilesReached = () => {
    this.odsMaxFilesReached.emit();
  }

  emitCancel = (file: File) => {
    this.odsCancel.emit(file);
  }
  onDragEnter = (e: DragEvent) => {
    this.controller.onDragEnter(e);
  }
  onDragLeave = (e: DragEvent) => {
    this.controller.onDragLeave(e);
  }
  onDrop = (e: DragEvent) => {
    this.controller.onDrop(e);
  }

  @Listen('filesSelected')
  filesSelectedHandler(event: CustomEvent<File[]>) {
    this.controller.emitSelectedFiles(event.detail);
  }

  @Watch('files')
  filesChangedHandler(newValue: OdsFileI[]) {
    this.isErrored = newValue.some(file => file.error);
    this.isSuccessful = newValue.every(file => file.progress === 100);
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'ods-file__dropzone': true,
            'ods-file__dropzone--success': this.isSuccessful,
            'ods-file__dropzone--disabled': this.disabled ?? false,
            'ods-file__dropzone--drag-over': this.dragOver,
            'ods-file__dropzone--errored': this.isErrored
          }}
          ref={(el) => this.dropzoneRef = el as HTMLDivElement}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          onDragOver={(e) => e.preventDefault()}
          onDrop={this.onDrop}
        >
            <osds-file-header
              headerTitle={this.headerTitle}
              dividerLabel={this.dividerLabel}
              selectFilesLabel={this.selectFilesLabel}
              errorMessage={this.errorMessage}
              acceptedTypes={this.acceptedTypes}
              isSuccessful={this.isSuccessful}
              isErrored={this.isErrored}
              disabled={this.disabled}
            />
          { this.files && this.files.length > 0 && <div class='ods-file__dropzone__files'>
              {
                this.files.map((file) => (
                  <osds-file-item
                    error={file.error}
                    progress={file.progress ?? 0}
                    name={file.name}
                    size={file.size}
                    onCancel={() => this.emitCancel(file)}
                  />
                ))
              }
          </div> }
        </div>
      </Host>
    );
  }
}
