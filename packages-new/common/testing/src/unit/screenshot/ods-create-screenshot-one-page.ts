import { OdsCreateHTMLContainer, OdsCreatePageStyle } from '../../setup/ods-dom-handling';
import { odsE2EComponentPageGenerator } from '../ods-e2e-component-page-generator';
import { OdsCreateHtmlTag } from '../../utils/html/ods-create-html-tag';

export function OdsCreateScreenshotOnePage<PageType, ElementType, T>({
  componentTag,
  componentContent,
  testCases,
  pageGenerator,
}: {
  componentTag: string;
  componentContent: string;
  testCases: T[];
  pageGenerator: odsE2EComponentPageGenerator<PageType, ElementType>;
}): void {
  describe(`e2e:${componentTag}:screenshot:onepage`, () => {
    it(`One Page`, async () => {
      const page: string[] = [];
      page.push(OdsCreatePageStyle().outerHTML);

      testCases.map(item => page.push(OdsCreateHTMLContainer(OdsCreateHtmlTag(componentTag, item, componentContent), Object.keys(item))));
      await pageGenerator({
        html: page.join('\n'),
        width: 1900,
        componentTag,
      });
    });
  });
}
