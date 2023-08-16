import { OdsButtonAttribute } from './interfaces/attributes';
import { componentAttributesToTests, ODS_SCREENSHOT_TYPE, odsScreenshot } from '@ovhcloud/ods-common-testing/src';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_BUTTON_VARIANTS } from './constants/button-variant';
import { ODS_BUTTON_SIZES } from './constants/button-size';

odsScreenshot<OdsButtonAttribute>({
  componentContent: `Button`,
  componentName: `Button`,
  componentTag: `osds-button`,
  testCases: componentAttributesToTests<OdsButtonAttribute, OdsButtonAttribute>({
    color: OdsThemeColorIntent,
    size: ODS_BUTTON_SIZES,
    variant: ODS_BUTTON_VARIANTS,
    href: [undefined, ''],
    disabled: [true, false],
    flex: [true, false],
    contrasted: [true, false],
  } as OdsButtonAttribute),
  type: ODS_SCREENSHOT_TYPE.ONE_PAGE,
});
