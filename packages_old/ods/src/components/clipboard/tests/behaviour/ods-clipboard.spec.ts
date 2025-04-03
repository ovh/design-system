jest.mock('../../../../utils/dom');

import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { copyToClipboard } from '../../../../utils/dom';
import { OdsClipboard } from '../../src';

describe('ods-clipboard behaviour', () => {
  let page: SpecPage;
  let rootInstance: OdsClipboard | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsClipboard],
      html,
    });

    rootInstance = page.rootInstance;
  }

  beforeEach(jest.clearAllMocks);

  describe('methods', () => {
    describe('copy', () => {
      it('should copy an empty value if not set', async() => {
        await setup('<ods-clipboard></ods-clipboard>');

        await rootInstance?.copy();
        await page.waitForChanges();

        expect(copyToClipboard).toHaveBeenCalledWith('');
        expect(rootInstance?.isCopyDone).toBe(true);
      });

      it('should copy the value', async() => {
        const dummyValue = 'value';
        await setup(`<ods-clipboard value="${dummyValue}"></ods-clipboard>`);

        await rootInstance?.copy();
        await page.waitForChanges();

        expect(copyToClipboard).toHaveBeenCalledWith(dummyValue);
        expect(rootInstance?.isCopyDone).toBe(true);
      });

      it('should not copy if disabled', async() => {
        await setup('<ods-clipboard is-disabled value="value"></ods-clipboard>');

        await rootInstance?.copy();
        await page.waitForChanges();

        expect(copyToClipboard).not.toHaveBeenCalled();
        expect(rootInstance?.isCopyDone).toBe(false);
      });
    });
  });
});
