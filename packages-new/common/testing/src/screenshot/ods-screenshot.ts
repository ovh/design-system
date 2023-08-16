import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { ODS_SCREENSHOT_TYPE } from './ods-screenshot-type';
import type { OdsE2EComponentApplyFunction } from '../e2e/ods-e2e-component-apply-function';
import { OdsE2EComponentExtraFunctions } from '../e2e/ods-e2e-component-option-functions';
import { odsCreatePageAndSnapshot } from './ods-create-page-and-screenshot';
import { odsCreateScreenshotOnePage } from './ods-create-screenshot-one-page';
import { odsCreateScreenshotOneByOne } from './ods-create-screenshot-one-by-one';

/**
 * Creates a batch of e2e pages with Stencil page generator, then screenshots them
 * @param componentApplyFunction - A function to apply to each and every tag that will be shot
 * @param componentContent - The displayed content inside the component tag
 * @param componentName - The component name, useful for description
 * @param componentTag - The component tag, containing `osds-` prefix
 * @param test - A list of specific test cases with defined attributes
 * @param extraFunctions - An object containing extra functions to test on the targeted e2e element
 * @param type - The screenshot method type (one page or one by one)
 */
function odsScreenshot<T>({
  componentApplyFunction,
  componentContent = '',
  componentName,
  componentTag,
  testCases,
  extraFunctions,
  type,
}: {
  componentApplyFunction?: (option: { page?: E2EPage; element: E2EElement }) => void;
  componentContent: string;
  componentName: string;
  componentTag: string;
  testCases: T[];
  extraFunctions?: OdsE2EComponentExtraFunctions<E2EPage, E2EElement>;
  type: ODS_SCREENSHOT_TYPE;
}): void {
  const onePage = type === "onepage";



  const args = {
    componentApplyFunction,
    componentContent,
    componentName,
    componentTag,
    testCases,
    ...(onePage ? {} : { extraFunctions }),
    pageGenerator: async ({
      componentTag,
      applyFunction,
      extraFunction,
      html,
      width,
    }: {
      componentTag: string;
      applyFunction?: OdsE2EComponentApplyFunction<E2EPage, E2EElement>;
      extraFunction?: OdsE2EComponentApplyFunction<E2EPage, E2EElement>;
      html: string;
      width?: number;
    }) => {
      await odsCreatePageAndSnapshot({
        applyFunction,
        componentTag,
        extraFunction,
        html,
        width,
      });
    },
  };
  // eslint-disable-next-line
  console.info(
    '%c[fe] onePage', 'background:#fff;color:#000',
    onePage);
  // eslint-disable-next-line
  console.info(
    '%c[fe] args', 'background:#fff;color:#000',
    args);


  onePage ? odsCreateScreenshotOnePage<E2EPage, E2EElement, T>(args) : odsCreateScreenshotOneByOne<E2EPage, E2EElement, T>(args);
}

export {
  odsScreenshot
}
