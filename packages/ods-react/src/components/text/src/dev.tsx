// TODO create new one "render"?
// @ts-ignore
import { componentFactories } from '../../_app/dynamic-renderer';
import { OdsText } from './index';

componentFactories['OdsText'] = () => (
  <div>
    <OdsText data-testid="bouh" aria-label="test">Hello World DEV!</OdsText>
  </div>
);
