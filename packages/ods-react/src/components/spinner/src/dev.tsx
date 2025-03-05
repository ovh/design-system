// TODO create new one "render"?
// @ts-ignore
import { componentFactories } from '../../_app/dynamic-renderer';
import { OdsSpinner } from './index';

componentFactories['OdsSpinner'] = () => (
  <div>
    <OdsSpinner />
  </div>
);
