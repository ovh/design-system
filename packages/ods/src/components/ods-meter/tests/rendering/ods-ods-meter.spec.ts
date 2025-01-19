import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsOdsMeter } from '../../src';

describe('ods-ods-meter rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsOdsMeter],
      html,
    });

    root = page.root;
  }

  describe('dummy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-ods-meter dummy="${dummyValue}"></ods-ods-meter>`);

      expect(root?.getAttribute('dummy')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-ods-meter></ods-ods-meter>');

      expect(root?.getAttribute('dummy')).toBeNull();
    });
  });
});

describe('ods-ods-meter component', () => {
  let component = new OdsOdsMeter();

  beforeEach(() => {
    component = new OdsOdsMeter();
    component.min = 0;
    component.max = 100;
    component.low = 15;
    component.high = 85;
    component.value = 10;
    component.optimum = 85;
    component.label = 'Label';
  });

  it('should return "ods-ods-meter__range--warning" when value is less than low', () => {
    component.value = 11;
    expect(component.generateMeterBackgroundColor()).toBe('ods-ods-meter__range--warning');
  });
  it("should return 'ods-ods-meter__range--success' when value is greater than high", () => {
    component.value = 90;
    expect(component.generateMeterBackgroundColor()).toBe('ods-ods-meter__range--success');
  });
  it('should return "ods-ods-meter__range--primary" when value is between low and high', () => {
    component.value = 50;
    expect(component.generateMeterBackgroundColor()).toBe('ods-ods-meter__range--primary');
  });
});
