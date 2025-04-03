jest.mock('../../src/controller/ods-timepicker', () => ({
  formatValue: jest.fn(),
  getCurrentTimezone: jest.fn(),
  getInitialValue: jest.fn(),
  parseTimezones: (): ODS_TIMEZONE[] => ODS_TIMEZONES as ODS_TIMEZONE[],
  updateInternals: jest.fn(),
}));
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsTimepicker } from '../../src';
import { type ODS_TIMEZONE, ODS_TIMEZONES } from '../../src/constant/timezones';

describe('ods-timepicker rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsTimepicker],
      html,
    });

    root = page.root;
  }

  describe('ariaLabel', () => {
    it('should be reflected', async() => {
      const ariaLabelValue = 'ariaLabel';

      await setup(`<ods-timepicker aria-label="${ariaLabelValue}"></ods-timepicker>`);

      expect(root?.getAttribute('aria-label')).toBe(ariaLabelValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('aria-label')).toBeNull();
    });
  });

  describe('ariaLabelledby', () => {
    it('should be reflected', async() => {
      const ariaLabelledbyValue = 'ariaLabelledby';

      await setup(`<ods-timepicker aria-labelledby="${ariaLabelledbyValue}"></ods-timepicker>`);

      expect(root?.getAttribute('aria-labelledby')).toBe(ariaLabelledbyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('aria-labelledby')).toBeNull();
    });
  });

  describe('currentTimezone', () => {
    it('should be reflected', async() => {
      const currentTimezoneValue = 'UTC+0';

      await setup(`<ods-timepicker current-timezone="${currentTimezoneValue}"></ods-timepicker>`);

      expect(root?.getAttribute('current-timezone')).toBe(currentTimezoneValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('current-timezone')).toBeNull();
    });
  });

  describe('defaultValue', () => {
    it('should be reflected', async() => {
      const defaultValue = 'defaultValue';
      await setup(`<ods-timepicker defaultValue="${defaultValue}"></ods-timepicker>`);

      expect(root?.getAttribute('defaultValue')).toBe(defaultValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('defaultValue')).toBeNull();
    });
  });

  describe('hasError', () => {
    it('should be reflected', async() => {
      await setup('<ods-timepicker has-error></ods-timepicker>');

      expect(root?.getAttribute('has-error')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-timepicker is-disabled></ods-timepicker>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isReadonly', () => {
    it('should be reflected', async() => {
      await setup('<ods-timepicker is-readonly></ods-timepicker>');

      expect(root?.getAttribute('is-readonly')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('is-readonly')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-timepicker is-required></ods-timepicker>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const nameValue = 'myName';
      await setup(`<ods-timepicker name="${nameValue}"></ods-timepicker>`);

      expect(root?.getAttribute('name')).toBe(nameValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const value = 'value';
      await setup(`<ods-timepicker value="${value}"></ods-timepicker>`);

      expect(root?.getAttribute('value')).toBe(value);
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });

  describe('withSeconds', () => {
    it('should be reflected', async() => {
      await setup('<ods-timepicker with-seconds></ods-timepicker>');

      expect(root?.getAttribute('with-seconds')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-timepicker></ods-timepicker>');

      expect(root?.getAttribute('with-seconds')).toBeNull();
    });
  });
});
