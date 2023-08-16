import type { OdsE2EComponentExtraFunctions } from '../e2e/ods-e2e-component-option-functions';
import type { OdsE2EComponentPageGenerator } from '../e2e/ods-e2e-component-page-generator';
import { odsFormatTestName } from '../utils/ods-format-test-name';
import { odsCreateHtmlTag } from '../utils/html/ods-create-html-tag';

function odsCreateScreenshotOneByOne<PageType, ElementType, T>({
  componentTag,
  componentContent,
  extraFunctions = {},
  pageGenerator,
  testCases,
}: {
  componentTag: string;
  componentContent: string;
  extraFunctions?: OdsE2EComponentExtraFunctions<PageType, ElementType>;
  pageGenerator: OdsE2EComponentPageGenerator<PageType, ElementType>;
  testCases: T[];
}): void {
  describe(`e2e:${componentTag}:screenshot:onebyone`, () => {
    testCases.forEach(testCase => {
      it(odsFormatTestName<T>(testCase), async () => {
        await pageGenerator({
          componentTag,
          html: `${odsCreateHtmlTag(componentTag, testCase, componentContent)}`,
        });
      });
      Object.entries(extraFunctions)?.forEach(([key, action]) => {
        it(`${odsFormatTestName<T>(testCase)} > ${key}`, async () => {
          await pageGenerator({
            html: `${odsCreateHtmlTag(componentTag, testCase, componentContent)}`,
            componentTag,
            action,
          });
        });
      });
    });
  });
}

export {
  odsCreateScreenshotOneByOne
}
