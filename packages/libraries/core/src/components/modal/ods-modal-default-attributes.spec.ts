import { odsModalDefaultAttributes } from './ods-modal-default-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('spec:ods-modal-default-attributes', () => {
    it('color should be default', () => {
        expect(odsModalDefaultAttributes.color).toBe(OdsThemeColorIntent.info);
    });
    it('dismissible should be false', () => {
        expect(odsModalDefaultAttributes.dismissible).toBe(true);
    });
    it('headline should not be defined', () => {
        expect(odsModalDefaultAttributes.headline).toBe('');
    });
    it('masked should be false', () => {
        expect(odsModalDefaultAttributes.masked).toBe(false);
    });
});
