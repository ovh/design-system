import type { OdsMessageColor } from '../../src';
import { ODS_ICON_NAME } from '../../../icon/src';
import { getIconName } from '../../src/controller/ods-message';

describe('ods-message controller', () => {

  beforeEach(jest.clearAllMocks);

  describe('getIconName', () => {
    it('should return the correct icon for critical', () => {
      const iconName = getIconName('critical');
      expect(iconName).toBe(ODS_ICON_NAME.hexagonExclamation);
    });

    it('should return the correct icon for danger', () => {
      const iconName = getIconName('danger');
      expect(iconName).toBe(ODS_ICON_NAME.diamondExclamation);
    });

    it('should return the correct icon for information', () => {
      const iconName = getIconName('information');
      expect(iconName).toBe(ODS_ICON_NAME.circleInfo);
    });

    it('should return the correct icon for success', () => {
      const iconName = getIconName('success');
      expect(iconName).toBe(ODS_ICON_NAME.circleCheck);
    });

    it('should return the correct icon for warning', () => {
      const iconName = getIconName('warning');
      expect(iconName).toBe(ODS_ICON_NAME.triangleExclamation);
    });

    it('should return the default icon for an unknown color', () => {
      const iconName = getIconName('unknown' as OdsMessageColor);
      expect(iconName).toBe(ODS_ICON_NAME.circleInfo);
    });
  });
});
