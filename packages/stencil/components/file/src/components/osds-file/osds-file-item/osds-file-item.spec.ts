import { OsdsFileItem } from './osds-file-item';
import { newSpecPage } from '@stencil/core/testing';
import { OdsFileItemAttributes } from '@ovhcloud/ods-core/src';
import { RequiredAttributes } from '@ovhcloud/ods-core/src/utils/properties/ods-extract-attributes-type';

const requiredAttributes: RequiredAttributes<OdsFileItemAttributes> = {
  name: 'test.jpg',
  size: 1000
}

describe('spec:osds-file-item', () => {
  async function setup({ attributes = requiredAttributes as Partial<OdsFileItemAttributes> }  = {}) {
    const allAttributes = {
      ...requiredAttributes,
      ...attributes,
    }
    const page = await newSpecPage({
      components: [OsdsFileItem],
      html: `<osds-file-item name=${allAttributes.name} size=${allAttributes.size} />`,
    });

    if(!page.root) {
      throw new Error('root is null');
    }

    for(const [key, value] of Object.entries(allAttributes)) {
      page.root[key] = value;
    }

    await page.waitForChanges();

    return page
  }

  it('should render', async () => {
    const { root, rootInstance } = await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(rootInstance).toBeTruthy();
  })

  describe('attributes', () => {
    it('should display the size file in Ko', async () => {
      const { root } = await setup();
      expect(root?.shadowRoot?.querySelector('.ods-file__item__label')?.textContent).toContain('test.jpg (1 Ko)');
    })

    it('should have progress bar if progress is defined', async () => {
      const { root } = await setup({ attributes: { progress: 50 } });
      expect(root?.shadowRoot?.querySelector('.ods-file__item__progress-bar')?.getAttribute('value')).toBe('50');
    })

    it.each([false, true])('should have error class if file.error is %p', async (error) => {
      const { root } = await setup({ attributes: { error } });
      expect(!!root?.shadowRoot?.querySelector('.ods-file__item__label--errored')).toBe(error);
    })

    it('should display progress bar if file.progress is at 0', async () => {
      const { root } = await setup({ attributes: { progress: 0 } });
      expect(root?.shadowRoot?.querySelector('.ods-file__item__progress-bar')).toBeTruthy();
    })

    it('should have normal content and no progress bar if file is errored', async () => {
      const { root } = await setup({ attributes: { error: true } });
      expect(root?.shadowRoot?.querySelector('.ods-file__item__progress-bar')).toBeFalsy();
      expect(root?.shadowRoot?.querySelector('.ods-file__item__label')).toBeTruthy();
    })

    it.each([100, undefined])('should have normal content and no progress bar if progress is %p', async (progress) => {
      const { root } = await setup({ attributes: { progress } });
      expect(root?.shadowRoot?.querySelector('.ods-file__item__progress-bar')).toBeFalsy();
      expect(root?.shadowRoot?.querySelector('.ods-file__item__label')).toBeTruthy();
    })
  })

  describe('events', () => {
    it('should emit cancel event on button click', async () => {
      const { root, waitForChanges } = await setup();
      const mockEvent = jest.fn();
      root?.addEventListener('cancel', mockEvent);
      root?.shadowRoot?.querySelector('.ods-file__item osds-button')?.dispatchEvent(new MouseEvent('click'));
      console.log(root?.shadowRoot?.innerHTML);

      await waitForChanges();
      expect(mockEvent).toHaveBeenCalled();

    })
  })
})
