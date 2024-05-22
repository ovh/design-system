import type { OdsMessageColor } from '../../src';
import { ODS_ICON_NAME } from '../../../icon/src';
import { getIconName } from '../../src/controller/ods-message';

describe('ods-message controller', () => {

  beforeEach(jest.clearAllMocks);

  describe('getIconName', () => {
    it('should return the correct icon for critical', () => {
      const iconName = getIconName('critical');
      expect(iconName).toBe(ODS_ICON_NAME.critical);
    });

    it('should return the correct icon for danger', () => {
      const iconName = getIconName('danger');
      expect(iconName).toBe(ODS_ICON_NAME.danger);
    });

    it('should return the correct icon for information', () => {
      const iconName = getIconName('information');
      expect(iconName).toBe(ODS_ICON_NAME.infoCircle);
    });

    it('should return the correct icon for success', () => {
      const iconName = getIconName('success');
      expect(iconName).toBe(ODS_ICON_NAME.successCircle);
    });

    it('should return the correct icon for warning', () => {
      const iconName = getIconName('warning');
      expect(iconName).toBe(ODS_ICON_NAME.warningTriangle);
    });

    it('should return the default icon for an unknown color', () => {
      const iconName = getIconName('unknown' as OdsMessageColor);
      expect(iconName).toBe(ODS_ICON_NAME.infoCircle);
    });
  });
});
