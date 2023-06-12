import { OdsFileItemAttributes } from './ods-file-item-attributes';
import { OdsComponent } from '../../ods-component';
import { OdsFileItemEvents } from './ods-file-item-events';
import { OdsFileItemMethods } from './ods-file-item-methods';


/**
 * interface description of all implementation of `ods-file-item`.
 */
export type OdsFileItem = OdsComponent<OdsFileItemMethods, OdsFileItemEvents, OdsFileItemAttributes>;

