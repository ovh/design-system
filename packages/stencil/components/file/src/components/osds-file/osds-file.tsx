import { Component, Host, h, State, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import {
  OdsFile,
  OdsFileController, odsFileDefaultAttributes,
  OdsFileI
} from '@ovhcloud/ods-core';

@Component({
  tag: 'osds-file',
  styleUrl: 'osds-file.scss',
  shadow: true
})
  export class OsdsFile implements OdsFile {
    controller: OdsFileController = new OdsFileController(this);

    @Prop({ reflect: true }) public disabled = odsFileDefaultAttributes.disabled;
    @Prop({ reflect: true }) public errorMessage = odsFileDefaultAttributes.errorMessage;
    @Prop({ reflect: true }) public acceptedTypes = odsFileDefaultAttributes.acceptedTypes;
    @Prop({ reflect: true }) public files: OdsFileI[] | undefined = odsFileDefaultAttributes.files;
    @Prop({ reflect: true }) public maxFiles = odsFileDefaultAttributes.maxFiles;
    @Prop({ reflect: true }) public headerTitle = odsFileDefaultAttributes.headerTitle;
    @Prop({ reflect: true }) public dividerLabel = odsFileDefaultAttributes.dividerLabel;
    @Prop({ reflect: true }) public selectFilesLabel = odsFileDefaultAttributes.selectFilesLabel;

    @State() dragOver = false;

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

    isSuccessful = () => {
      return this.controller.isSuccessful();
    }
    render() {
      return (
        <Host>
          <div
            class={{
              'ods-file__dropzone': true,
              'ods-file__dropzone--success': this.isSuccessful(),
              'ods-file__dropzone--disabled': this.disabled ?? false,
              'ods-file__dropzone--drag-over': this.dragOver,
              'ods-file__dropzone--errored': !!this.errorMessage
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
                isSuccessful={this.isSuccessful()}
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
