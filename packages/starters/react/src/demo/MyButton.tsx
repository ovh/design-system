import React, { PropsWithChildren } from 'react';
import { OsdsButton } from '@ovhcloud/ods-stencil/components/react';
import { JSX as OdsJSX } from '@ovhcloud/ods-stencil/components';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { odsFilterTransientProps } from '@ovhcloud/ods-core';

/**
 * define an alias to get the properties definition of the `ODS` button
 */
type OsdsButtonProps = OdsJSX.IntrinsicElements['osds-button'];

/**
 * default custom properties values for the custom button
 */
const DEFAULT_BUTTON_PROPS: Partial<OsdsButtonProps> = {
  inline: false,
  color: OdsThemeColorIntent.accent
};

/**
 * my custom button has the same properties as `ODS`.
 * it has also onClick, in order to allow the use of onCLick on this custom react component.
 */
type MyButtonProps = PropsWithChildren<OsdsButtonProps> & { onClick: () => void };

/**
 * Custom button component base on the `ODS` one.
 * It allows to set some base pattern for your app like managing default properties.
 * We recommend not to overuse with this kind of wrapper.
 * It is made here only the example.
 */
const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return <OsdsButton {...odsFilterTransientProps({ ...DEFAULT_BUTTON_PROPS, ...props })}>{children}</OsdsButton>
};

export default MyButton;
