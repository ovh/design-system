import { OdsProgressBar } from './ods-progress-bar';

export interface OdsProgressBarBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
   * define the progress css variable used for the progress bar width.
   * @param value
   */
  defineProgressCssValue(value: OdsProgressBar['progress']): void;
}
