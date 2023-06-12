import { OdsFileAttributes } from './ods-file-attributes';
import { OdsFileController } from './ods-file-controller';
import { OdsFileEvents } from './ods-file-events';
import { OdsFileMethods } from './ods-file-methods';
import { OdsComponent } from '../ods-component';
import { OdsFileBehavior } from './ods-file-behavior';

/**
 * interface description of all implementation of `ods-file`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsFile = OdsComponent<OdsFileMethods, OdsFileEvents, OdsFileAttributes, OdsFileController, OdsFileBehavior>;
