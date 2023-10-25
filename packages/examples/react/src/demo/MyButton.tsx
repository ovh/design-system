import type { OdsButtonAttribute } from '@ovhcloud/ods-components/button';

import { odsFilterTransientProps } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OsdsButton } from '@ovhcloud/ods-components/button/react';
import React, { PropsWithChildren } from 'react';

/**
 * default custom properties values for the custom button
 */
const DEFAULT_BUTTON_PROPS: Partial<OdsButtonAttribute> = {
  inline: false,
  color: ODS_THEME_COLOR_INTENT.accent,
};

/**
 * my custom button has the same properties as `ODS`.
 * it has also onClick, in order to allow the use of onCLick on this custom react component.
 */
type MyButtonProps = PropsWithChildren<OdsButtonAttribute> & { onClick: () => void };

/**
 * Custom button component base on the `ODS` one.
 * It allows to set some base pattern for your app like managing default properties.
 * We recommend not to overuse with this kind of wrapper.
 * It is made here only the example.
 */
const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return <OsdsButton {...odsFilterTransientProps({ ...DEFAULT_BUTTON_PROPS, ...props })}>{children}</OsdsButton>;
};

export default MyButton;
