import { OdsComponentMethods } from '../ods-component-methods';

export interface OdsFileMethods extends OdsComponentMethods {
    onDragEnter(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
    onDrop(e: DragEvent): void;
    filesSelectedHandler(event: CustomEvent<File[]>): void;
    isSuccessful(): boolean;
    emitFiles(files: File[]): void;
    emitCancel(file: File): void;
    emitRejectedFile(file: File): void;
}
