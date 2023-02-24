import { odsInputDefaultAttributes } from './ods-input-default-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsInputSize } from './ods-input-size';
import { OdsInputType } from './ods-input-type';

describe('spec:ods-input-default-attributes', () => {
  it('ariaLabel should not be defined', () => {
    expect(odsInputDefaultAttributes.ariaLabel).toBe(null);
  });
  it('ariaLabelledby should not be defined', () => {
    expect(odsInputDefaultAttributes.ariaLabelledby).toBe(undefined);
  });
  it('color should be default', () => {
    expect(odsInputDefaultAttributes.color).toBe(OdsThemeColorIntent.default);
  });
  it('contrasted should be false', () => {
    expect(odsInputDefaultAttributes.contrasted).toBe(false);
  });
  it('defaultValue should be empty string', () => {
    expect(odsInputDefaultAttributes.defaultValue).toBe('');
  });
  it('disabled should be false', () => {
    expect(odsInputDefaultAttributes.disabled).toBe(false);
  });
  it('flex should be false', () => {
    expect(odsInputDefaultAttributes.flex).toBe(false);
  });
  it('label should not be defined', () => {
    expect(odsInputDefaultAttributes.label).toBe(undefined);
  });
  it('max should not be defined', () => {
    expect(odsInputDefaultAttributes.max).toBe(undefined);
  });
  it('min should not be defined', () => {
    expect(odsInputDefaultAttributes.min).toBe(undefined);
  });
  it('name should not be defined', () => {
    expect(odsInputDefaultAttributes.name).toBe(undefined);
  });
  it('placeholder should not be defined', () => {
    expect(odsInputDefaultAttributes.placeholder).toBe(undefined);
  });
  it('readOnly should be false', () => {
    expect(odsInputDefaultAttributes.readOnly).toBe(false);
  });
  it('required should be false', () => {
    expect(odsInputDefaultAttributes.required).toBe(false);
  });
  it('size should be md', () => {
    expect(odsInputDefaultAttributes.size).toBe(OdsInputSize.md);
  });
  it('step should not be defined', () => {
    expect(odsInputDefaultAttributes.step).toBe(undefined);
  });
  it('type should be number', () => {
    expect(odsInputDefaultAttributes.type).toBe(OdsInputType.number);
  });
  it('value should not be defined', () => {
    expect(odsInputDefaultAttributes.value).toBe('');
  });
});
