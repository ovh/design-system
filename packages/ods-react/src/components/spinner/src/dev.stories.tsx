import { Spinner } from '.';
import style from './dev.module.css';

export default {
  component: Spinner,
  title: 'Spinner dev',
};

export const Default = () => (
  <Spinner />
);

export const CustomStyle = () => (
  <Spinner className={ style[ 'custom-spinner' ] } />
);

export const Accessibility = () => (
  <div aria-busy="true" aria-live="polite">
    <Spinner />
  </div>
)

export const AccessibilityAriaLabelledBy = () => (
  <div aria-busy="true" aria-live="polite">
    <Spinner aria-labelledby="loading-text" />
    <p id="loading-text">Loading...</p>
  </div>
)
