jest.mock('../../src/controller/ods-textarea');

import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsTextarea } from '../../src';

// @ts-ignore for test purposes
global.MutationObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
}));

describe('ods-textarea rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let textarea: Element | null | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsTextarea],
      html,
    });

    root = page.root;
    textarea = root?.shadowRoot?.querySelector('.ods-textarea__textarea');
  }

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((msg) => {
      // Hide the Stencil error about internals being not implemented on spec tests
      if (!msg.startsWith('NOTE: Property validity was accessed on ElementInternals, but this property is not implemented.')) {
        console.error(msg);
      }
    });
  });

  describe('ariaLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea aria-label="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('aria-label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('aria-label')).toBeNull();
    });
  });

  describe('ariaLabelledby', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea aria-labelledby="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('aria-labelledby')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('aria-labelledby')).toBeNull();
    });
  });

  describe('cols', () => {
    it('should be reflected', async() => {
      const dummyValue = '42';

      await setup(`<ods-textarea cols="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('cols')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('cols')).toBeNull();
    });
  });

  describe('defaultValue', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea default-value="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('default-value')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('default-value')).toBeNull();
    });
  });

  describe('hasError', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea has-error="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('has-error')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });

    it('should add correct class if set', async() => {
      await setup('<ods-textarea has-error></ods-textarea>');

      expect(textarea?.classList.contains('ods-textarea__textarea--error')).toBe(true);
    });
  });

  describe('hasSpellcheck', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea has-spellcheck="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('has-spellcheck')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('has-spellcheck')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea is-disabled="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('is-disabled')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isReadonly', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea is-readonly="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('is-readonly')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('is-readonly')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea is-required="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('is-required')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('isResizable', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea is-resizable="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('is-resizable')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('is-resizable')).toBeNull();
    });

    it('should add correct class if set', async() => {
      await setup('<ods-textarea is-resizable></ods-textarea>');

      expect(textarea?.classList.contains('ods-textarea__textarea--resizable')).toBe(true);
    });
  });

  describe('maxlength', () => {
    it('should be reflected', async() => {
      const maxlengthValue = 3;
      await setup(`<ods-textarea maxlength="${maxlengthValue}"></ods-textarea>`);

      expect(root?.getAttribute('maxlength')).toBe(maxlengthValue.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('maxlength')).toBeNull();
    });
  });

  describe('minlength', () => {
    it('should be reflected', async() => {
      const minlengthValue = 3;
      await setup(`<ods-textarea minlength="${minlengthValue}"></ods-textarea>`);

      expect(root?.getAttribute('minlength')).toBe(minlengthValue.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('minlength')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea name="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('name')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('placeholder', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea placeholder="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('placeholder')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('placeholder')).toBeNull();
    });
  });

  describe('rows', () => {
    it('should be reflected', async() => {
      const dummyValue = '42';

      await setup(`<ods-textarea rows="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('rows')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('rows')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-textarea value="${dummyValue}"></ods-textarea>`);

      expect(root?.getAttribute('value')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-textarea></ods-textarea>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
