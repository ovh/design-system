jest.mock('../../src/controller/ods-input');
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_INPUT_TYPE, OdsInput } from '../../src';

describe('ods-input rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let rootInstance: OdsInput | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsInput],
      html,
    });

    root = page.root;
    rootInstance = page.rootInstance;
  }

  describe('methods', () => {
    describe('clear', () => {
      it('should clear the input', async() => {
        await setup('<ods-input value="value"></ods-input>');
        await rootInstance?.clear();
        await page.waitForChanges();
        expect(root?.getAttribute('value')).toBeNull();
      });

      it('should do nothing with disabled', async() => {
        const value = 'value';
        await setup(`<ods-input value="${value}" is-disabled></ods-input>`);
        await rootInstance?.clear();
        await page.waitForChanges();
        expect(root?.getAttribute('value')).toBe(value);
      });
    });

    describe('reset', () => {
      it('should reset input with default value', async() => {
        const defaultValue = 'defaultValue';
        const value = 'value';
        await setup(`<ods-input value="${value}" default-value="${defaultValue}"></ods-input>`);
        expect(root?.getAttribute('value')).toBe(value);
        await rootInstance?.reset();
        await page.waitForChanges();
        expect(root?.getAttribute('value')).toBe(defaultValue);
      });

      it('should do nothing with disabled', async() => {
        const defaultValue = 'defaultValue';
        const value = 'value';
        await setup(`<ods-input is-disabled value="${value}" default-value="${defaultValue}"></ods-input>`);
        expect(root?.getAttribute('value')).toBe(value);
        await rootInstance?.reset();
        await page.waitForChanges();
        expect(root?.getAttribute('value')).toBe(value);
      });
    });

    describe('toggleMasked', () => {
      it('should change masked', async() => {
        await setup('<ods-input is-masked></ods-input>');
        expect(root?.getAttribute('is-masked')).toBe('');
        await rootInstance?.toggleMask();
        await page.waitForChanges();
        expect(root?.getAttribute('is-masked')).toBeNull();
      });

      it('should do nothing because of disabled', async() => {
        await setup('<ods-input is-masked is-disabled></ods-input>');
        expect(root?.getAttribute('is-masked')).toBe('');
        await rootInstance?.toggleMask();
        await page.waitForChanges();
        expect(root?.getAttribute('is-masked')).toBe('');
      });
    });
  });

  describe('attributes', () => {
    describe('ariaLabel', () => {
      it('should be reflected', async() => {
        const ariaLabelValue = 'ariaLabel';

        await setup(`<ods-input aria-label="${ariaLabelValue}"></ods-input>`);

        expect(root?.getAttribute('aria-label')).toBe(ariaLabelValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('aria-label')).toBeNull();
      });
    });

    describe('ariaLabelledby', () => {
      it('should be reflected', async() => {
        const ariaLabelledbyValue = 'ariaLabelledby';

        await setup(`<ods-input aria-labelledby="${ariaLabelledbyValue}"></ods-input>`);

        expect(root?.getAttribute('aria-labelledby')).toBe(ariaLabelledbyValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('aria-labelledby')).toBeNull();
      });
    });

    describe('defaultValue', () => {
      it('should be reflected', async() => {
        const defaultValue = 'defaultValue';
        await setup(`<ods-input defaultValue="${defaultValue}"></ods-input>`);

        expect(root?.getAttribute('defaultValue')).toBe(defaultValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('defaultValue')).toBeNull();
      });
    });

    describe('hasError', () => {
      it('should be reflected', async() => {
        await setup('<ods-input has-error></ods-input>');

        expect(root?.getAttribute('has-error')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('has-error')).toBeNull();
      });
    });

    describe('isClearable', () => {
      it('should be reflected', async() => {
        await setup('<ods-input is-clearable></ods-input>');

        expect(root?.getAttribute('is-clearable')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('is-clearable')).toBeNull();
      });
    });

    describe('isDisabled', () => {
      it('should be reflected', async() => {
        await setup('<ods-input is-disabled></ods-input>');

        expect(root?.getAttribute('is-disabled')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('is-disabled')).toBeNull();
      });
    });

    describe('isMasked', () => {
      it('should be reflected', async() => {
        await setup('<ods-input is-masked></ods-input>');

        expect(root?.getAttribute('is-masked')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('is-masked')).toBeNull();
      });
    });

    describe('isReadonly', () => {
      it('should be reflected', async() => {
        await setup('<ods-input is-readonly></ods-input>');

        expect(root?.getAttribute('is-readonly')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('is-readonly')).toBeNull();
      });
    });

    describe('isRequired', () => {
      it('should be reflected', async() => {
        await setup('<ods-input is-required></ods-input>');

        expect(root?.getAttribute('is-required')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('is-required')).toBeNull();
      });
    });

    describe('isLoading', () => {
      it('should be reflected', async() => {
        await setup('<ods-input is-loading></ods-input>');

        expect(root?.getAttribute('is-loading')).toBe('');
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('is-loading')).toBeNull();
      });
    });

    describe('max', () => {
      it('should be reflected', async() => {
        const maxValue = 3;
        await setup(`<ods-input max="${maxValue}"></ods-input>`);

        expect(root?.getAttribute('max')).toBe(maxValue.toString());
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('max')).toBeNull();
      });
    });

    describe('maxlength', () => {
      it('should be reflected', async() => {
        const maxlengthValue = 3;
        await setup(`<ods-input maxlength="${maxlengthValue}"></ods-input>`);

        expect(root?.getAttribute('maxlength')).toBe(maxlengthValue.toString());
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('maxlength')).toBeNull();
      });
    });

    describe('min', () => {
      it('should be reflected', async() => {
        const minValue = 3;
        await setup(`<ods-input min="${minValue}"></ods-input>`);

        expect(root?.getAttribute('min')).toBe(minValue.toString());
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('min')).toBeNull();
      });
    });

    describe('minlength', () => {
      it('should be reflected', async() => {
        const minlengthValue = 3;
        await setup(`<ods-input minlength="${minlengthValue}"></ods-input>`);

        expect(root?.getAttribute('minlength')).toBe(minlengthValue.toString());
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('minlength')).toBeNull();
      });
    });

    describe('name', () => {
      it('should be reflected', async() => {
        const nameValue = 'myName';
        await setup(`<ods-input name="${nameValue}"></ods-input>`);

        expect(root?.getAttribute('name')).toBe(nameValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('name')).toBeNull();
      });
    });

    describe('pattern', () => {
      it('should be reflected', async() => {
        const patternValue = 'pattern';
        await setup(`<ods-input pattern="${patternValue}"></ods-input>`);

        expect(root?.getAttribute('pattern')).toBe(patternValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('pattern')).toBeNull();
      });
    });

    describe('placeholder', () => {
      it('should be reflected', async() => {
        const placeholderValue = 'placeholder';
        await setup(`<ods-input placeholder="${placeholderValue}"></ods-input>`);

        expect(root?.getAttribute('placeholder')).toBe(placeholderValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('placeholder')).toBeNull();
      });
    });

    describe('step', () => {
      it('should be reflected', async() => {
        const stepValue = 2;
        await setup(`<ods-input step="${stepValue}"></ods-input>`);

        expect(root?.getAttribute('step')).toBe(stepValue.toString());
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('step')).toBeNull();
      });
    });

    describe('type', () => {
      it('should be reflected', async() => {
        const typeValue = ODS_INPUT_TYPE.number;
        await setup(`<ods-input type="${typeValue}"></ods-input>`);

        expect(root?.getAttribute('type')).toBe(typeValue);
      });

      it('should be set by default with type "text"', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('type')).toBe(ODS_INPUT_TYPE.text);
      });
    });

    describe('value', () => {
      it('should be reflected', async() => {
        const value = 'value';
        await setup(`<ods-input value="${value}"></ods-input>`);

        expect(root?.getAttribute('value')).toBe(value);
      });

      it('should not be set by default', async() => {
        await setup('<ods-input></ods-input>');

        expect(root?.getAttribute('value')).toBeNull();
      });
    });
  });
});
