import { OdsFileHeaderAttributes } from './ods-file-header-attributes';
import { OdsComponent } from '../../ods-component';
import { OdsFileHeaderEvents } from './ods-file-header-events';
import { OdsFileHeaderMethods } from './ods-file-header-methods';

/**
 * interface description of all implementation of `ods-file-item`.
 */
export type OdsFileHeader = OdsComponent<OdsFileHeaderMethods, OdsFileHeaderEvents, OdsFileHeaderAttributes>;
