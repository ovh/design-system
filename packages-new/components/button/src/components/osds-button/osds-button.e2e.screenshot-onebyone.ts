import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { OdsButtonAttribute } from './interfaces/attributes';
import { ODS_SCREENSHOT_TYPE, odsScreenshot } from '@ovhcloud/ods-common-testing/src';

odsScreenshot<OdsButtonAttribute>({
  componentContent: `Button`,
  componentName: `Button`,
  componentTag: `osds-button`,
  testCases: [
    {
      color: OdsThemeColorIntent.default,
    },
    {
      color: OdsThemeColorIntent.primary,
    },
    {
      color: OdsThemeColorIntent.text,
    },
    {
      color: OdsThemeColorIntent.accent,
    },
    {
      color: OdsThemeColorIntent.error,
    },
    {
      color: OdsThemeColorIntent.warning,
    },
    {
      color: OdsThemeColorIntent.success,
    },
    {
      color: OdsThemeColorIntent.info,
    },
    {
      color: OdsThemeColorIntent.promotion,
    },
  ],
  extraFunctions: {
    ':hover': ({ element }) => element?.hover(),
    ':focus': ({ element }) => element?.focus(),
    ':active': ({ element }) => element?.click(),
  },
  type: ODS_SCREENSHOT_TYPE.ONE_BY_ONE,
});
