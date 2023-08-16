import type { OdsE2EComponentPageGenerator } from '../e2e/ods-e2e-component-page-generator';
import { odsCreateHTMLContainer, odsCreatePageStyle } from '../setup/ods-dom-handling';
import { odsCreateHtmlTag } from '../utils/html/ods-create-html-tag';

function odsCreateScreenshotOnePage<PageType, ElementType, T>({
  componentTag,
  componentContent,
  testCases,
  pageGenerator,
}: {
  componentTag: string;
  componentContent: string;
  testCases: T[];
  pageGenerator: OdsE2EComponentPageGenerator<PageType, ElementType>;
}): void {
  describe(`e2e:${componentTag}:screenshot:onepage`, () => {
    it(`One Page`, async () => {
      const page: string[] = [];
      page.push(odsCreatePageStyle().outerHTML);

      testCases.map(item => page.push(odsCreateHTMLContainer(odsCreateHtmlTag(componentTag, item, componentContent), Object.keys(item))));
      await pageGenerator({
        html: page.join('\n'),
        width: 1900,
        componentTag,
      });
    });
  });
}

export {
  odsCreateScreenshotOnePage
}
