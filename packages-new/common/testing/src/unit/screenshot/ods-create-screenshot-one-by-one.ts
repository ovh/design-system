import { OdsFormatTestName } from '../../utils/ods-format-test-name';
import { OdsE2EComponentExtraFunctions } from '../ods-e2e-component-option-functions';
import { odsE2EComponentPageGenerator } from '../ods-e2e-component-page-generator';
import { OdsCreateHtmlTag } from '../../utils/html/ods-create-html-tag';

export function OdsCreateScreenshotOneByOne<PageType, ElementType, T>({
  componentTag,
  componentContent,
  extraFunctions = {},
  pageGenerator,
  testCases,
}: {
  componentTag: string;
  componentContent: string;
  extraFunctions?: OdsE2EComponentExtraFunctions<PageType, ElementType>;
  pageGenerator: odsE2EComponentPageGenerator<PageType, ElementType>;
  testCases: T[];
}): void {
  describe(`e2e:${componentTag}:screenshot:onebyone`, () => {
    testCases.forEach(testCase => {
      it(OdsFormatTestName<T>(testCase), async () => {
        await pageGenerator({
          componentTag,
          html: `${OdsCreateHtmlTag(componentTag, testCase, componentContent)}`,
        });
      });
      Object.entries(extraFunctions)?.forEach(([key, action]) => {
        it(`${OdsFormatTestName<T>(testCase)} > ${key}`, async () => {
          await pageGenerator({
            html: `${OdsCreateHtmlTag(componentTag, testCase, componentContent)}`,
            componentTag,
            action,
          });
        });
      });
    });
  });
}
