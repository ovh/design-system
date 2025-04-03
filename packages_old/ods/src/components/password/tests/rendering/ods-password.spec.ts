jest.mock('../../src/controller/ods-password');
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsPassword } from '../../src';

describe('ods-password rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsPassword],
      html,
    });

    root = page.root;
  }

  describe('attributes', () => {
    describe('ariaLabel', () => {
      it('should be reflected', async() => {
        const ariaLabelValue = 'ariaLabel';

        await setup(`<ods-password aria-label="${ariaLabelValue}"></ods-password>`);

        expect(root?.getAttribute('aria-label')).toBe(ariaLabelValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('aria-label')).toBeNull();
      });
    });

    describe('ariaLabelledby', () => {
      it('should be reflected', async() => {
        const ariaLabelledbyValue = 'ariaLabelledby';

        await setup(`<ods-password aria-labelledby="${ariaLabelledbyValue}"></ods-password>`);

        expect(root?.getAttribute('aria-labelledby')).toBe(ariaLabelledbyValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('aria-labelledby')).toBeNull();
      });
    });

    describe('defaultValue', () => {
      it('should be reflected', async() => {
        const defaultValue = 'defaultValue';
        await setup(`<ods-password defaultValue="${defaultValue}"></ods-password>`);

        expect(root?.getAttribute('defaultValue')).toBe(defaultValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('defaultValue')).toBeNull();
      });
    });

    describe('hasError', () => {
      it('should be reflected', async() => {
        await setup('<ods-password has-error></ods-password>');

        expect(root?.getAttribute('has-error')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('has-error')).toBeNull();
      });
    });

    describe('isClearable', () => {
      it('should be reflected', async() => {
        await setup('<ods-password is-clearable></ods-password>');

        expect(root?.getAttribute('is-clearable')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('is-clearable')).toBeNull();
      });
    });

    describe('isDisabled', () => {
      it('should be reflected', async() => {
        await setup('<ods-password is-disabled></ods-password>');

        expect(root?.getAttribute('is-disabled')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('is-disabled')).toBeNull();
      });
    });

    describe('isMasked', () => {
      it('should be reflected', async() => {
        await setup('<ods-password is-masked></ods-password>');

        expect(root?.getAttribute('is-masked')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('is-masked')).toBe('');
      });
    });

    describe('isReadonly', () => {
      it('should be reflected', async() => {
        await setup('<ods-password is-readonly></ods-password>');

        expect(root?.getAttribute('is-readonly')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('is-readonly')).toBeNull();
      });
    });

    describe('isRequired', () => {
      it('should be reflected', async() => {
        await setup('<ods-password is-required></ods-password>');

        expect(root?.getAttribute('is-required')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('is-required')).toBeNull();
      });
    });

    describe('isLoading', () => {
      it('should be reflected', async() => {
        await setup('<ods-password is-loading></ods-password>');

        expect(root?.getAttribute('is-loading')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('is-loading')).toBeNull();
      });
    });

    describe('maxlength', () => {
      it('should be reflected', async() => {
        const maxlengthValue = 3;
        await setup(`<ods-password maxlength="${maxlengthValue}"></ods-password>`);

        expect(root?.getAttribute('maxlength')).toBe(maxlengthValue.toString());
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('maxlength')).toBeNull();
      });
    });

    describe('minlength', () => {
      it('should be reflected', async() => {
        const minlengthValue = 3;
        await setup(`<ods-password minlength="${minlengthValue}"></ods-password>`);

        expect(root?.getAttribute('minlength')).toBe(minlengthValue.toString());
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('minlength')).toBeNull();
      });
    });

    describe('name', () => {
      it('should be reflected', async() => {
        const nameValue = 'myName';
        await setup(`<ods-password name="${nameValue}"></ods-password>`);

        expect(root?.getAttribute('name')).toBe(nameValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('name')).toBeNull();
      });
    });

    describe('pattern', () => {
      it('should be reflected', async() => {
        const patternValue = 'pattern';
        await setup(`<ods-password pattern="${patternValue}"></ods-password>`);

        expect(root?.getAttribute('pattern')).toBe(patternValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('pattern')).toBeNull();
      });
    });

    describe('placeholder', () => {
      it('should be reflected', async() => {
        const placeholderValue = 'placeholder';
        await setup(`<ods-password placeholder="${placeholderValue}"></ods-password>`);

        expect(root?.getAttribute('placeholder')).toBe(placeholderValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('placeholder')).toBeNull();
      });
    });

    describe('value', () => {
      it('should be reflected', async() => {
        const value = 'value';
        await setup(`<ods-password value="${value}"></ods-password>`);

        expect(root?.getAttribute('value')).toBe(value);
      });

      it('should not be set by default', async() => {
        await setup('<ods-password></ods-password>');

        expect(root?.getAttribute('value')).toBeNull();
      });
    });
  });
});
