import 'jest-puppeteer';
import { getStatusStyle, gotoStory } from '../../../../helpers/test';

describe('Editable rendering', () => {
  it('should render the component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-ods="editable"]')).not.toBeNull();
  });

  describe('triggers', () => {
    it('should let the integrator status or color win over the internal status', async() => {
      await gotoStory(page, 'rendering/triggers');

      expect(await getStatusStyle(page, 'edit-default')).toBe(await getStatusStyle(page, 'button-status-brand'));
      expect(await getStatusStyle(page, 'cancel-default')).toBe(await getStatusStyle(page, 'button-status-neutral'));
      expect(await getStatusStyle(page, 'edit-color')).toBe(await getStatusStyle(page, 'button-color-success'));
      expect(await getStatusStyle(page, 'submit-color')).toBe(await getStatusStyle(page, 'button-color-success'));
      expect(await getStatusStyle(page, 'cancel-status')).toBe(await getStatusStyle(page, 'button-status-critical'));
      expect(await getStatusStyle(page, 'button-color-success')).not.toBe(await getStatusStyle(page, 'button-status-brand'));
    });

    it('should let the integrator emphasis win over the internal emphasis', async() => {
      await gotoStory(page, 'rendering/triggers');

      expect(await getStatusStyle(page, 'cancel-emphasis')).toBe(await getStatusStyle(page, 'button-status-neutral-high'));
      expect(await getStatusStyle(page, 'button-status-brand-medium')).not.toBe(await getStatusStyle(page, 'button-status-brand'));
    });
  });
});
