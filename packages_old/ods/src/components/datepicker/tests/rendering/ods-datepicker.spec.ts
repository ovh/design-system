jest.mock('../../src/controller/ods-datepicker');

import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_DATEPICKER_STRATEGY, OdsDatepicker } from '../../src';

// @ts-ignore for test purposes
global.MutationObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
}));

describe('ods-datepicker rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  jest.spyOn(OdsDatepicker.prototype, 'componentDidLoad').mockImplementation(jest.fn());

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsDatepicker],
      html,
    });

    root = page.root;
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('ariaLabel', () => {
    it('should be reflected', async() => {
      const ariaLabelValue = 'ariaLabel';

      await setup(`<ods-datepicker aria-label="${ariaLabelValue}"></ods-datepicker>`);

      expect(root?.getAttribute('aria-label')).toBe(ariaLabelValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('aria-label')).toBeNull();
    });
  });

  describe('ariaLabelledby', () => {
    it('should be reflected', async() => {
      const ariaLabelledbyValue = 'ariaLabelledby';

      await setup(`<ods-datepicker aria-labelledby="${ariaLabelledbyValue}"></ods-datepicker>`);

      expect(root?.getAttribute('aria-labelledby')).toBe(ariaLabelledbyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('aria-labelledby')).toBeNull();
    });
  });

  describe('datesDisabled', () => {
    it('should be reflected', async() => {
      const datesDisabled = [new Date()];

      await setup(`<ods-datepicker dates-disabled="${datesDisabled}"></ods-datepicker>`);

      expect(root?.getAttribute('dates-disabled')).toBe(datesDisabled.join(','));
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('dates-disabled')).toBeNull();
    });
  });

  describe('daysOfWeekDisabled', () => {
    it('should be reflected', async() => {
      const daysOfWeekDisabled = [0, 6];

      await setup(`<ods-datepicker days-of-week-disabled="${daysOfWeekDisabled}"></ods-datepicker>`);

      expect(root?.getAttribute('days-of-week-disabled')).toBe(daysOfWeekDisabled.join(','));
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('days-of-week-disabled')).toBeNull();
    });
  });

  describe('defaultValue', () => {
    it('should be reflected as Date', async() => {
      const defaultValue = new Date('01 Jan 2024').toString();

      await setup(`<ods-datepicker default-value="${defaultValue}"></ods-datepicker>`);

      expect(root?.getAttribute('default-value')).toBe(defaultValue.toString());
    });

    it('should be reflected as string', async() => {
      const defaultValue = '01/02/2024';

      await setup(`<ods-datepicker default-value="${defaultValue}"></ods-datepicker>`);

      expect(root?.getAttribute('default-value')).toBe(defaultValue.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('default-value')).toBeNull();
    });
  });

  describe('format', () => {
    it('should be reflected', async() => {
      const format = 'yyyy/mm/dd';

      await setup(`<ods-datepicker format="${format}"></ods-datepicker>`);

      expect(root?.getAttribute('format')).toBe(format);
    });

    it('should be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('format')).toBe('dd/mm/yyyy');
    });
  });

  describe('hasError', () => {
    it('should be reflected', async() => {
      await setup('<ods-datepicker has-error></ods-datepicker>');

      expect(root?.getAttribute('has-error')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });
  });

  describe('isClearable', () => {
    it('should be reflected', async() => {
      await setup('<ods-datepicker is-clearable></ods-datepicker>');

      expect(root?.getAttribute('is-clearable')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('is-clearable')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-datepicker is-disabled></ods-datepicker>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isLoading', () => {
    it('should be reflected', async() => {
      await setup('<ods-datepicker is-loading></ods-datepicker>');

      expect(root?.getAttribute('is-loading')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('is-loading')).toBeNull();
    });
  });

  describe('isReadonly', () => {
    it('should be reflected', async() => {
      await setup('<ods-datepicker is-readonly></ods-datepicker>');

      expect(root?.getAttribute('is-readonly')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('is-readonly')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-datepicker is-required></ods-datepicker>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('locale', () => {
    it('should be reflected', async() => {
      const locale = 'fr';

      await setup(`<ods-datepicker locale="${locale}"></ods-datepicker>`);

      expect(root?.getAttribute('locale')).toBe(locale);
    });

    it('should be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('locale')).toBe('en');
    });
  });

  describe('max', () => {
    it('should be reflected', async() => {
      const maxDate = new Date('30 Jan 2024');

      await setup(`<ods-datepicker max="${maxDate}"></ods-datepicker>`);

      expect(root?.getAttribute('max')).toBe(maxDate.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('max')).toBeNull();
    });
  });

  describe('min', () => {
    it('should be reflected', async() => {
      const minDate = new Date('01 Jan 2024');

      await setup(`<ods-datepicker min="${minDate}"></ods-datepicker>`);

      expect(root?.getAttribute('min')).toBe(minDate.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('min')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const nameValue = 'name';

      await setup(`<ods-datepicker name="${nameValue}"></ods-datepicker>`);

      expect(root?.getAttribute('name')).toBe(nameValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('placeholder', () => {
    it('should be reflected', async() => {
      const placeholderValue = 'placeholder';

      await setup(`<ods-datepicker placeholder="${placeholderValue}"></ods-datepicker>`);

      expect(root?.getAttribute('placeholder')).toBe(placeholderValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('placeholder')).toBeNull();
    });
  });

  describe('strategy', () => {
    it('should be reflected', async() => {
      const strategyValue = ODS_DATEPICKER_STRATEGY.fixed;

      await setup(`<ods-datepicker strategy="${strategyValue}"></ods-datepicker>`);

      expect(root?.getAttribute('strategy')).toBe(strategyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('strategy')).toBe(ODS_DATEPICKER_STRATEGY.absolute);
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const value = new Date();

      await setup(`<ods-datepicker value="${value}"></ods-datepicker>`);

      expect(root?.getAttribute('value')).toBe(value.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-datepicker></ods-datepicker>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
