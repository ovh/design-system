import { OdsTextAreaSize } from './ods-textarea-size';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { odsTextAreaDefaultAttributes } from './ods-textarea-default-attributes';

describe('spec:ods-textarea-default-attributes', () => {
  it('textAreaId should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.textAreaId).toBe(undefined);
  });
  it('ariaLabel should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.ariaLabel).toBe(null);
  });
  it('ariaLabelledby should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.ariaLabelledby).toBe(undefined);
  });
  it('color should be text', () => {
    expect(odsTextAreaDefaultAttributes.color).toBe(OdsThemeColorIntent.text);
  });
  it('cols should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.cols).toBe(undefined);
  });
  it('contrasted should be false', () => {
    expect(odsTextAreaDefaultAttributes.contrasted).toBe(false);
  });
  it('defaultValue should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.defaultValue).toBe(undefined);
  });
  it('disabled should be false', () => {
    expect(odsTextAreaDefaultAttributes.disabled).toBe(false);
  });
  it('error should be false', () => {
    expect(odsTextAreaDefaultAttributes.error).toBe(false);
  });
  it('errorStateControl should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.errorStateControl).toBe(undefined);
  });
  it('flex should be false', () => {
    expect(odsTextAreaDefaultAttributes.flex).toBe(false);
  });
  it('formControl should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.formControl).toBe(undefined);
  });
  it('name should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.name).toBe(undefined);
  });
  it('placeholder should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.placeholder).toBe(undefined);
  });
  it('readOnly should be false', () => {
    expect(odsTextAreaDefaultAttributes.readOnly).toBe(false);
  });
  it('required should be false', () => {
    expect(odsTextAreaDefaultAttributes.required).toBe(false);
  });
  it('resizable should be true', () => {
    expect(odsTextAreaDefaultAttributes.resizable).toBe(true);
  });
  it('rows should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.rows).toBe(undefined);
  });
  it('size should be md', () => {
    expect(odsTextAreaDefaultAttributes.size).toBe(OdsTextAreaSize.md);
  });
  it('spellcheck should be default', () => {
    expect(odsTextAreaDefaultAttributes.spellcheck).toBe(false);
  });
  it('value should not be defined', () => {
    expect(odsTextAreaDefaultAttributes.value).toBe('');
  });
  it('hasFocus should be false', () => {
    expect(odsTextAreaDefaultAttributes.hasFocus).toBe(false);
  });
});
