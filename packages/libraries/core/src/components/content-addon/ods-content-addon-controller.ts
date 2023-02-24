import { OdsComponentController } from '../ods-component-controller';
import { OdsContentAddon } from './ods-content-addon';

/**
 * common controller logic for content-addon component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsContentAddonController extends OdsComponentController<OdsContentAddon> {

  constructor(component: OdsContentAddon) {
    super(component);
  }
}
