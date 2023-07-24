import { OdsComponentEvents } from '../ods-component-events';

export interface OdsClipboardEvents extends OdsComponentEvents {
    odsClipboardCopied: string;
}
