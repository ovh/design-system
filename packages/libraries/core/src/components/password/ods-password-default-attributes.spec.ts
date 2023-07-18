import { odsPasswordDefaultAttributes } from './ods-password-default-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsInputSize } from '../input/ods-input-size';

describe('spec:ods-input-default-attributes', () => {
  it('ariaLabel should not be defined', () => {
    expect(odsPasswordDefaultAttributes.ariaLabel).toBe(null);
  });
  it('ariaLabelledby should not be defined', () => {
    expect(odsPasswordDefaultAttributes.ariaLabelledby).toBe(undefined);
  });
  it('clearable should be false', () => {
    expect(odsPasswordDefaultAttributes.clearable).toBe(false);
  });
  it('color should be default', () => {
    expect(odsPasswordDefaultAttributes.color).toBe(OdsThemeColorIntent.default);
  });
  it('contrasted should be false', () => {
    expect(odsPasswordDefaultAttributes.contrasted).toBe(false);
  });
  it('disabled should be false', () => {
    expect(odsPasswordDefaultAttributes.disabled).toBe(false);
  });
  it('error should be false', () => {
    expect(odsPasswordDefaultAttributes.error).toBe(false);
  });
  it('flex should be false', () => {
    expect(odsPasswordDefaultAttributes.flex).toBe(false);
  });
  it('label should not be defined', () => {
    expect(odsPasswordDefaultAttributes.label).toBe(undefined);
  });
  it('loading should be false', () => {
    expect(odsPasswordDefaultAttributes.loading).toBe(false);
  });
  it('masked should be true', () => {
    expect(odsPasswordDefaultAttributes.masked).toBe(true);
  });
  it('name should not be defined', () => {
    expect(odsPasswordDefaultAttributes.name).toBe(undefined);
  });
  it('placeholder should not be defined', () => {
    expect(odsPasswordDefaultAttributes.placeholder).toBe(undefined);
  });
  it('readOnly should be false', () => {
    expect(odsPasswordDefaultAttributes.readOnly).toBe(false);
  });
  it('required should be false', () => {
    expect(odsPasswordDefaultAttributes.required).toBe(false);
  });
  it('size should be md', () => {
    expect(odsPasswordDefaultAttributes.size).toBe(OdsInputSize.md);
  });
  it('value should not be defined', () => {
    expect(odsPasswordDefaultAttributes.value).toBe('');
  });
});
